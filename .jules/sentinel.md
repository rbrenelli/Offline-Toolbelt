# Sentinel Journal

## 2024-05-23 - XSS in Client-Side File Processing
**Vulnerability:** Cross-Site Scripting (XSS) in `build_output_html` function in `script.js`.
**Learning:** Even client-side applications without a backend can be vulnerable to XSS if they process user-provided files (like EPUBs with malicious filenames) and render metadata into the DOM using `innerHTML` without escaping.
**Prevention:** Always escape data derived from file content (filenames, metadata, etc.) before inserting it into the DOM, even if the file is "local" to the user's machine. Use `textContent` where possible, or a robust escaping function.
