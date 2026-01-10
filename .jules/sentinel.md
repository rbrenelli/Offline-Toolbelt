# Sentinel Journal

## 2024-05-24 - [Unsanitized EPUB Error Logs]
**Vulnerability:** XSS in EPUB processing status display. Malicious filenames or error messages from EPUBs are rendered via `innerHTML` without escaping in `build_output_html`.
**Learning:** Even client-side status logs need sanitization. `escapeHtml` was present but not applied to the detailed error list.
**Prevention:** Always escape data before inserting into `innerHTML`, or use `textContent` / `document.createElement`.
