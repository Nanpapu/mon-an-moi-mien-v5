const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Khởi tạo Firebase Admin với service account key
const serviceAccount = require('./service-account.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function restoreBackup(backupDir) {
  if (!fs.existsSync(backupDir)) {
    console.error(`Thư mục backup không tồn tại: ${backupDir}`);
    return;
  }

  const collections = [
    'recipes',
    'reviews',
    'users',
    'regions',
    'recipe_stats',
  ];

  // Sử dụng batches để tối ưu performance
  let batch = db.batch();
  let operationCount = 0;
  const BATCH_LIMIT = 500; // Firestore giới hạn 500 operations/batch

  for (const collectionName of collections) {
    console.log(`Đang restore collection: ${collectionName}`);

    const filePath = path.join(backupDir, `${collectionName}.json`);
    if (!fs.existsSync(filePath)) {
      console.warn(`Bỏ qua ${collectionName}: Không tìm thấy file backup`);
      continue;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const doc of data) {
      const { id, ...docData } = doc;
      const ref = db.collection(collectionName).doc(id);
      batch.set(ref, docData);
      operationCount++;

      // Commit batch khi đạt giới hạn
      if (operationCount >= BATCH_LIMIT) {
        await batch.commit();
        batch = db.batch();
        operationCount = 0;
        console.log(`Đã restore ${BATCH_LIMIT} documents...`);
      }
    }
  }

  // Commit batch cuối cùng nếu còn
  if (operationCount > 0) {
    await batch.commit();
  }

  console.log('Restore hoàn tất!');
}

// Lấy đường dẫn thư mục backup từ command line
const backupDir = process.argv[2];
if (!backupDir) {
  console.error('Vui lòng cung cấp đường dẫn thư mục backup!');
  console.error(
    'Ví dụ: node restore-backup.js ./firestore_backup_2024-01-22-123456'
  );
  process.exit(1);
}

// Thêm vào trước khi restore
await new Promise((resolve) => {
  readline.question(
    'Dữ liệu hiện tại sẽ bị ghi đè. Bạn có chắc chắn muốn tiếp tục? (y/N) ',
    (answer) => {
      if (answer.toLowerCase() !== 'y') {
        console.log('Đã hủy restore.');
        process.exit(0);
      }
      readline.close();
      resolve();
    }
  );
});

restoreBackup(backupDir).catch(console.error);
