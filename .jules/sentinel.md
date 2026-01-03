## 2024-04-12 - [XSS in EPUB Status Reporting]
**Vulnerability:** Reflected Cross-Site Scripting (XSS) in the EPUB processing status report.
**Learning:** The application constructs status messages using filenames from the EPUB archive. These filenames were directly interpolated into an HTML string without escaping, allowing a malicious EPUB file with a crafted filename (e.g., `<img src=x onerror=alert(1)>.html`) to execute arbitrary JavaScript when the status report is rendered.
**Prevention:** Always escape untrusted input before rendering it to the DOM, even if it comes from a "local" file (users can be tricked into opening malicious files). In this case, `escapeHtml()` was applied to the filename in the header but missed in the status list items.
