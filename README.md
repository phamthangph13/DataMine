# DataMine

DataMine là một nền tảng khai thác dữ liệu từ nhiều nguồn khác nhau.

## Cấu trúc dự án

- `src/` - Frontend Angular
- `server/` - Backend NodeJS

## Yêu cầu hệ thống

- Node.js (v14+)
- MongoDB
- Angular CLI

## Cài đặt và chạy ứng dụng

### Cài đặt và chạy Backend

1. Tạo file `.env` trong thư mục `server/` với nội dung:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/datamine
JWT_SECRET=datamine_secret_key_change_in_production
JWT_EXPIRE=7d

# Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SENDER_EMAIL=dounecompany@gmail.com
SENDER_NAME=DataMine
EMAIL_USERNAME=dounecompany@gmail.com
EMAIL_PASSWORD=zasa vbpy arko snov
USE_SSL=true
BASE_URL=http://localhost:4200
```

2. Mở terminal và cài đặt dependencies cho backend:

```
cd server
npm install
```

3. Chạy backend server:

```
npm run dev
```

Backend API sẽ chạy tại: http://localhost:5000

### Cài đặt và chạy Frontend

1. Mở một terminal mới và cài đặt dependencies cho frontend:

```
npm install
```

2. Chạy frontend:

```
npm start
```

Frontend sẽ chạy tại: http://localhost:4200

## Tính năng

### Authentication
- Đăng ký tài khoản với xác minh email
- Đăng nhập
- Quên mật khẩu và đặt lại mật khẩu qua email

## API Endpoints

### Authentication

- `POST /api/auth/register` - Đăng ký người dùng mới
- `GET /api/auth/verify-email/:token` - Xác minh email người dùng
- `POST /api/auth/login` - Đăng nhập người dùng
- `POST /api/auth/forgot-password` - Yêu cầu đặt lại mật khẩu
- `POST /api/auth/reset-password/:token` - Đặt lại mật khẩu bằng token
