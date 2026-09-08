\# Dokumentasi Game: Alien Nebula Adventure



\## 1. Deskripsi \& Analisis Game (Simple Game Design Document)



\*\*Alien Nebula Adventure\*\* adalah game \*platformer 2D space survival\* berfasilitas penuh aksi yang dikembangkan menggunakan \*\*GDevelop\*\*. Game ini menceritakan petualangan seorang alien hijau bermata satu yang terdampar di nebula luar angkasa yang berbahaya. Pemain bertugas menavigasi medan melayang, mengumpulkan koin emas, serta bertahan dari serangan musuh-musuh luar angkasa dengan kemampuan menembak.



\* \*\*Genre:\*\* 2D Sci-Fi Platformer / Space Survival

\* \*\*Platform:\*\* PC / Web Browser (GDevelop Engine)

\* \*\*Visual Style:\*\* Space Nebula Aesthetic (Ungu/Biru) dengan aset kustom bergaya sci-fi.

\* \*\*Target Audiens:\*\* Gamer kasual dan penggemar game arcade platformer.



\---



\## 2. 6 Kebutuhan Minimum Game



1\. \*\*Main Menu (UI/UX Lengkap):\*\*

&#x20;  \* Navigasi intuitif dengan tombol interaktif: `START`, `HOW TO PLAY`, `SETTINGS`, dan `EXIT`.

&#x20;  \* Layar khusus \*How To Play\* untuk panduan kontrol dan mekanik.

&#x20;  \* Layar \*Settings\* terpisah untuk konfigurasi audio dan opsi gameplay.



2\. \*\*Controller \& Input System:\*\*

&#x20;  \* \*\*Movement:\*\* Menggunakan tombol \*\*A / D\*\* (atau Panah Kiri/Kanan) untuk bergerak ke kiri dan kanan.

&#x20;  \* \*\*Jump \& Climb:\*\* \*\*Spasi (Space)\*\* untuk melompat, \*\*W / S\*\* (atau Panah Atas/Bawah) untuk naik/turun tangga.

&#x20;  \* \*\*Shooting System:\*\* Menggunakan tombol \*\*Z\*\* untuk menembak peluru/laser sci-fi disertai efek suara (\*"piw"\*).



3\. \*\*Scoring \& Collectibles System:\*\*

&#x20;  \* Fitur mengumpulkan koin emas (\*Coins\*) di sepanjang arena untuk menambah skor (\*Score\*).

&#x20;  \* UI HUD (\*Heads-Up Display\*) menampilkan \*Score\*, \*Timer\*, dan \*Health\* secara real-time.



4\. \*\*Enemy \& Health Mechanism:\*\*

&#x20;  \* Rintangan berupa musuh terbang dan jebakan nebula.

&#x20;  \* Pengurangan \*Health/Lives\* saat terjadi kontak dengan musuh/rintangan.



5\. \*\*Win \& Lose Conditions (Kondisi Menang/Kalah):\*\*

&#x20;  \* \*\*Kondisi Menang (Win):\*\* Bertahan hidup hingga \*Timer\* habis atau berhasil mencapai \*Checkpoint Portal\*.

&#x20;  \* \*\*Kondisi Kalah (Game Over):\*\* \*Health\* mencapai 0 sebelum target/waktu selesai.



6\. \*\*Sound Effects \& Visual Polish:\*\*

&#x20;  \* Efek suara tembakan khusus \*"piw"\* saat tombol \*\*Z\*\* ditekan.

&#x20;  \* Latar belakang nebula dinamis dengan \*Z-Order\* terstruktur untuk kedalaman visual.



\---



\## 3. Flowchart Alur Game



Berikut adalah diagram alur (\*Game Flow\*) menggunakan format Mermaid:



```mermaid

flowchart TD

&#x20;   %% Styling warna latar belakang putih \& garis hitam

&#x20;   classDef white fill:#ffffff,stroke:#333333,stroke-width:1.5px,color:#000000;

&#x20;   style GameplayLoop fill:#ffffff,stroke:#333333,stroke-width:1.5px,color:#000000;



&#x20;   Start(\[Start Game]):::white --> MainMenu\[Layar Main Menu]:::white

&#x20;   

&#x20;   MainMenu -->|Pilih How To Play| HowToPlay\[Layar Cara Bermain \& Kontrol]:::white

&#x20;   HowToPlay -->|Kembali| MainMenu

&#x20;   

&#x20;   MainMenu -->|Pilih Settings| Settings\[Layar Settings / Pengaturan]:::white

&#x20;   Settings -->|Kembali| MainMenu

&#x20;   

&#x20;   MainMenu -->|Pilih Exit| EndGame(\[Keluar Game]):::white

&#x20;   

&#x20;   MainMenu -->|Pilih Start| Gameplay\[ Gameplay Started ]:::white

&#x20;   

&#x20;   subgraph GameplayLoop \[Mekanik Gameplay]

&#x20;       Gameplay --> Control\[Kontrol Karakter: A/D Bergerak, Space Lompat, W/S Tangga]:::white

&#x20;       Gameplay --> Combat\[Tekan Z: Nembak Sound Piw]:::white

&#x20;       Gameplay --> Collect\[Ambil Koin: Skor bertambah]:::white

&#x20;       Gameplay --> Hazard\[Terkena Musuh: Nyawa berkurang]:::white

&#x20;   end

&#x20;   

&#x20;   GameplayLoop --> CheckWin{Kondisi Menang?}:::white

&#x20;   CheckWin -->|Ya: Waktu Habis / Portal Checkpoint| WinScreen\[Layar Victory / Menang]:::white

&#x20;   

&#x20;   GameplayLoop --> CheckLose{Nyawa == 0?}:::white

&#x20;   CheckLose -->|Ya| LoseScreen\[Layar Game Over]:::white

&#x20;   

&#x20;   WinScreen -->|Main Lagi / Menu| MainMenu

&#x20;   LoseScreen -->|Try Again / Menu| MainMenu

```



\---



\## 4. Time Schedule (Linimasa SDLC)



Pengembangan game mengikuti tahapan \*Software Development Life Cycle\* (SDLC):



| Fase | Kegiatan / Output | Durasi | Status |

| :--- | :--- | :--- | :--- |

| \*\*1. Planning \& Concept\*\* | Penentuan ide game, genre platformer sci-fi, dan penyusunan Game Design Document (GDD) simpel. | Minggu 1 | Selesai |

| \*\*2. Asset \& UI Design\*\* | Pembuatan background nebula, karakter alien, monster, koin, serta aset UI (Tombol Start, Setting, How To Play). | Minggu 2 | Selesai |

| \*\*3. Core Gameplay Coding\*\* | Implementasi pergerakan karakter, gravitasi, tangga, serta mekanisme penembakan dengan tombol \*\*Z\*\*. | Minggu 3 | Selesai |

| \*\*4. UI \& Audio Integration\*\* | Integrasi Main Menu, layar Settings, layar How To Play, HUD (Score, Health, Timer), dan SFX tembakan \*"piw"\*. | Minggu 4 | Selesai |

| \*\*5. Testing \& Polishing\*\* | Pengujian \*Z-Order\* layer, balancing musuh, pengujian kondisi Win/Lose, dan perbaikan bug. | Minggu 5 | Selesai |

| \*\*6. Deployment \& Docs\*\* | Export game di GDevelop dan pembuatan dokumentasi project `README.md`. | Minggu 6 | Selesai |

