require('dotenv').config(); // Đọc biến môi trường từ .env
const sql = require('mssql');

// Cấu hình kết nối từ các biến môi trường
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.HOST_NAME, // Hostname với SQL Express
    database: process.env.DB_NAME,
    options: {
        encrypt: false, // Đặt thành false nếu không dùng SSL
        trustServerCertificate: true, // Bật nếu kết nối cục bộ với SQL Server
    },
    pool: {
        max: 10, // Số kết nối tối đa trong pool
        min: 0,  // Số kết nối tối thiểu trong pool
        idleTimeoutMillis: 30000, // Thời gian chờ trước khi hủy kết nối không dùng (30s)
    },
};

// Hàm kết nối đến SQL Server
async function connectDB() {
    try {
        const pool = await sql.connect(config);
        console.log('Kết nối thành công đến SQL Server');
        return pool;
    } catch (err) {
        console.error('Lỗi kết nối đến DB:', err);
    }
}

module.exports = connectDB;
