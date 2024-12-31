# 🍜 Món Ăn Mọi Miền v2

Ứng dụng di động giúp khám phá và chia sẻ các món ăn đặc trưng của từng vùng miền Việt Nam, được xây dựng bằng React Native, TypeScript và Expo SDK 52.

## 📱 Tính năng chính

- 🗺️ **Bản đồ ẩm thực**: Khám phá món ăn theo vùng miền với bản đồ tương tác
- 📖 **Công thức chi tiết**: Hướng dẫn nấu ăn chuyên nghiệp với nguyên liệu và các bước thực hiện
- ⭐ **Đánh giá & Bình luận**: Chia sẻ trải nghiệm và tương tác với cộng đồng
- 💾 **Lưu trữ yêu thích**: Tạo bộ sưu tập công thức cá nhân
- 🌙 **Dark mode**: Hỗ trợ giao diện tối cho trải nghiệm tốt hơn
- 🔍 **Tìm kiếm thông minh**: Lọc theo vùng miền, nguyên liệu, độ khó

## 🚀 Cài đặt và Phát triển

### Yêu cầu hệ thống

- Node.js 18.0 trở lên
- npm 9.0 trở lên
- Expo CLI
- Android Studio (cho Android) hoặc Xcode (cho iOS)

### Các bước cài đặt

1. Clone repository:

```bash:
git clone https://github.com/your-username/mon-an-moi-mien.git
```

2. Di chuyển vào thư mục dự án:

```bash:
cd mon-an-moi-mien
```

3. Cài đặt dependencies:

```bash:
npm install
```

4. Khởi động ứng dụng:

```bash:
npx expo start
```

## 🛠️ Công nghệ sử dụng

- **Frontend**

  - React Native với Expo SDK 52
  - TypeScript cho type safety
  - React Navigation 6 cho điều hướng
  - React Native Paper cho UI components
  - React Native Maps cho tính năng bản đồ

- **Backend & Database**

  - Firebase Authentication
  - Cloud Firestore
  - Firebase Storage
  - Cloud Functions

- **State Management & Storage**
  - React Context API
  - AsyncStorage cho caching
  - Redux Toolkit (cho các tính năng phức tạp)

## 📁 Cấu trúc thư mục

```text:
src/
├── components/     # Components tái sử dụng
├── screens/        # Màn hình chính của ứng dụng
├── services/       # Logic tương tác với Firebase
├── context/       # React Context cho state management
├── hooks/         # Custom hooks
├── theme/         # Cấu hình theme và styles
├── types/         # TypeScript types và interfaces
├── utils/         # Các hàm tiện ích
└── constants/     # Các hằng số
```

## 🤝 Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👥 Tác giả

- **Trần Phương Lâm** - _Lead Developer_ a
- **Bùi Gia Huy** - _UI/UX Designer_ 

