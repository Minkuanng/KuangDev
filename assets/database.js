// assets/database.js

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCPDDRt520fSynXCGrr2aF-KvpnS_ZuIm8",
    authDomain: "shop-c6777.firebaseapp.com",
    databaseURL: "https://shop-c6777-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shop-c6777",
    storageBucket: "shop-c6777.firebasestorage.app",
    messagingSenderId: "43186563268",
    appId: "1:43186563268:web:0d392ba57039a919670191",
    measurementId: "G-445DCB6NV0"
};

// Khởi tạo Firebase (chỉ chạy 1 lần)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('✅ Firebase initialized from database.js');
}

// Export để dùng ở các file khác (nếu cần)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig };
}
