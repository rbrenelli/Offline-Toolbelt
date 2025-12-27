# 📦 Offline Toolbelt

A **privacy‑respecting, fully client‑side toolbox** of everyday utilities that run entirely in your browser.
Designed for **offline use**, **GitHub Pages hosting**, and **installable PWA workflows** — especially on ChromeOS.

> No servers. No uploads. No tracking. Your files never leave your device.

---

## ✨ Features

### 🎙️ Smart Audio Recorder
- High‑quality **WebM Opus** or **WAV** recording
- Voice mode (noise suppression, echo cancellation)
- Studio mode (raw audio for music)
- Live waveform visualizer
- One‑click download

### ✂️ Audio Trimmer & Auto‑Splitter
- Visual waveform editor
- Manual trimming with playback
- Automatic **29‑minute chunk splitting**
- WAV export (lossless)

### 📖 Kindle EPUB Fixer
- Repairs common Kindle‑blocking EPUB issues
- Fixes:
  - Missing or invalid language metadata
  - Broken body ID hyperlinks
  - Stray `<img>` tags
  - Missing UTF‑8 encoding declarations
- Batch processing with ZIP download

### 📄 PDF Tools
- **Merge** multiple PDFs into one
- **Extract** page ranges into new PDFs
- **Sanitizer**: Remove hidden metadata (title, author, producer, timestamps)
- 100% client‑side via `pdf-lib`

### 🧹 PDF Metadata Sanitizer
- Strip **sensitive metadata** from PDF files
- Removes:
  - Title, Author, Subject
  - Producer, Creator
  - Creation & Modification dates
  - XMP metadata streams
- Shows before/after SHA256 hashes to verify changes
- One‑click download of cleaned PDF

### 🖼️ Image Power Tool
- Convert between PNG / JPEG / WebP
- Resize and recompress images
- Visual before/after size comparison

### 🕵️ EXIF Metadata Wiper
- Lossless EXIF stripping (JPEG)
- Nuclear re‑encode mode for all formats
- Removes GPS, camera model, and hidden metadata

### 🔍 Text & Code Diff Tool
- Visual inline diff highlighting
- Useful for config files, notes, and code snippets

### 🎵 WebM Audio Extractor
- Extract Opus audio tracks from WebM files
- Instant download

---

## 📴 Offline‑First & PWA Ready

Offline Toolbelt is a **Progressive Web App**:

- Works offline after first load
- Installable on **Chromebook**, **Chrome**, and desktop
- HTTPS‑safe (microphone access works)
- Service‑worker cached UI
- Launches like a native app

---

## 🚀 Hosting on GitHub Pages

This project is designed to be deployed **as‑is** on GitHub Pages.

### Quick Start

1. Create a new GitHub repository (e.g., `Offline-Toolbelt`)
2. Upload all files from this project to the repo root
3. Go to **Settings → Pages**
4. Select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Save

Your app will be live at:

```
https://<username>.github.io/<repo-name>/
```

Chrome will automatically offer to **Install App** (PWA prompt).

### Notes for GitHub Pages

- All paths in `manifest.json` and `index.html` use **relative URLs** for compatibility
- Service Worker is cached for offline support
- First load fetches ~1.2 MB of external CDN libraries (all cached after)
- Works offline after initial load
- HTTPS enabled by default on GitHub Pages

---

## 🔐 Privacy & Security

- All processing is done **locally in your browser**
- No analytics
- No uploads
- No cookies
- No external APIs required to function

The only external resources used are well‑known open‑source libraries delivered via CDN.

---

## 🧩 Credits & Acknowledgements

### 📚 Kindle EPUB Fixer (Core Logic)

The EPUB repair logic is **derived and adapted** from the original open‑source Kindle EPUB fixing scripts by:

- **Original Project:** Kindle EPUB Fixer
- **Author:** Community‑maintained (original scripts widely mirrored)
- **Purpose:** Fix EPUB compatibility issues for Kindle conversion

The original logic has been:
- Refactored for browser‑only execution
- Integrated with modern UI
- Extended with batch processing and ZIP export

This project complies with the spirit and intent of the original work and credits its source accordingly.

### 🧹 PDF Metadata Sanitizer

The PDF metadata sanitizer integrates:

- **pdf-lib** for PDF document loading and manipulation
- **Web Crypto API** for SHA-256 hashing (built-in browser standard)
- **Custom implementation** for metadata stripping and validation

The sanitizer removes common metadata fields that may contain sensitive information about document creation tools, authorship, and timestamps.

### 🔧 Open‑Source Libraries

Offline Toolbelt makes use of the following excellent projects:

- [`zip.js`](https://github.com/gildas-lormeau/zip.js) — ZIP processing
- [`FileSaver.js`](https://github.com/eligrey/FileSaver.js) — Client‑side downloads
- [`pdf-lib`](https://github.com/Hopding/pdf-lib) — PDF manipulation
- [`diff`](https://github.com/kpdecker/jsdiff) — Text diffing

Icons and emoji are used for clarity and UI friendliness.

---

## 🛠️ Tech Stack

- HTML5
- CSS (Material Design‑inspired)
- Vanilla JavaScript
- Web Audio API
- MediaRecorder API
- Service Workers
- Progressive Web App APIs

No frameworks. No build step.

---

## 📄 License

This project is provided for **personal and practical use**.
Individual third‑party libraries retain their respective licenses.

If you redistribute or modify this project, please retain attribution to original authors and libraries.

---

## 💡 Why This Exists

Offline Toolbelt exists to provide:
- Tools that work **without internet**
- Tools that respect **user privacy**
- Tools that run on **locked‑down devices** like Chromebooks
- Tools that don't require accounts, installs, or uploads

If you find it useful, consider sharing it or forking it.

---

Happy hacking. 🔧
