## 2024-05-23 - [Critical XSS in EPUB Processing]
**Vulnerability:** Found a Cross-Site Scripting (XSS) vulnerability in `script.js`. User input from EPUB processing (filenames, language tags) was being inserted directly into the DOM via `innerHTML` without sanitization when generating status reports. This would allow an attacker to execute arbitrary JavaScript by crafting a malicious EPUB file (e.g., a file with a name containing `<img src=x onerror=...`).

**Learning:** Even when `escapeHtml` is available and used in some places (like filenames in headers), it's easy to miss it in dynamic lists or logs generated from mixed sources. The status report array combined safe strings ("Fixed encoding...") with user input, leading to the oversight.

**Prevention:**
1. Always escape variable content interpolated into HTML strings.
2. Prefer `textContent` over `innerHTML` whenever possible.
3. When using `map().join('')` to generate lists, ensure the mapping function includes sanitization.
