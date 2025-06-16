<p align="center">
  <img src="https://github.com/user-attachments/assets/62276b2b-bb50-4128-ad51-5163df645506" alt="Photobooth Web App Screenshot" width="300"/>
</p>

<h1 align="center">🎀 Photobooth Web App 🎀</h1>

---

Aplikasi photobooth berbasis web yang manis dan mudah digunakan untuk mengabadikan momen-momen terbaik Anda! Aplikasi ini memungkinkan pengguna untuk membuat dan berbagi "pins" (postingan dengan gambar, judul, deskripsi, dan tautan) ke profil mereka.

## ✨ Fitur Utama

* **Jepret & Unggah Foto:** Ambil atau unggah gambar dengan mudah.
* **Kelola "Pins" Pribadi:** Setiap pengguna memiliki halaman profil untuk melihat semua "pins" yang mereka buat.
* **Integrasi Google Auth:** Login cepat dan aman menggunakan akun Google Anda.
* **Simpan Kenangan:** Unduh foto favorit Anda dengan mudah.
* **Navigasi Intuitif:** Antarmuka yang ramah pengguna dengan fitur pencarian.

## 💖 Teknologi yang Digunakan

* **Frontend:** Next.js, React, Tailwind CSS (dengan sentuhan pink pada beberapa elemen!)
* **Autentikasi:** NextAuth.js (menggunakan Google Provider)
* **Database & Storage:** Google Firebase Firestore (untuk data pins dan user info) & Firebase Storage (untuk gambar)

## 🚀 Cara Memulai

1.  **Clone Repository:**
    ```bash
    git clone [https://github.com/helgapricilla/Photobooth-Web-App.git](https://github.com/helgapricilla/Photobooth-Web-App.git)
    ```
2.  **Masuk ke Direktori Proyek:**
    ```bash
    cd Photobooth-Web-App
    ```
3.  **Instal Dependensi:**
    ```bash
    npm install
    ```
4.  **Konfigurasi Variabel Lingkungan:**
    Buat file `.env.local` di root proyek dan tambahkan kredensial Google OAuth Anda:
    ```
    GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=SUPER_SECRET_KEY_GENERATE_YOUR_OWN
    ```
    *Anda bisa mendapatkan `GOOGLE_CLIENT_ID` dan `GOOGLE_CLIENT_SECRET` dari Google Cloud Console.*
    *Untuk `NEXTAUTH_SECRET`, Anda bisa menghasilkan string acak yang kuat.*
5.  **Jalankan Aplikasi:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

## 📸 Contoh Tampilan

---
![1](https://github.com/user-attachments/assets/8b0fb5bb-43a0-4d4b-a706-b1fcd8cfd84c)
![2](https://github.com/user-attachments/assets/2b93affe-86f7-464f-8af0-d696a5eb4259)

---

<p align="center">
  Made with ❤️ by Potobut
</p>
