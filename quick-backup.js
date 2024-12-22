const admin = require('firebase-admin');
const fs = require('fs');

// Khởi tạo Firebase Admin với service account key
const serviceAccount = require('./service-account.json'); // Tạo file này từ Firebase Console
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function quickBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = `firestore_backup_${timestamp}`;
  
  // Tạo thư mục backup
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
  }

  // Danh sách collections cần backup
  const collections = ['recipes', 'reviews', 'users', 'regions', 'recipeStats'];

  for (const collectionName of collections) {
    console.log(`Đang backup collection: ${collectionName}`);
    
    const snapshot = await db.collection(collectionName).get();
    const data = [];
    
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    fs.writeFileSync(
      `${backupDir}/${collectionName}.json`,
      JSON.stringify(data, null, 2)
    );
  }

  console.log(`Backup hoàn tất! Dữ liệu được lưu trong thư mục: ${backupDir}`);
}

quickBackup().catch(console.error);