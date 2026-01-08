# Sentinel Journal

This journal records CRITICAL security learnings from the project.

## Format
Entries must follow this format:
```markdown
## YYYY-MM-DD - [Title]
**Vulnerability:** [What you found]
**Learning:** [Why it existed]
**Prevention:** [How to avoid next time]
```

## 2024-10-24 - DOM Injection in Dynamic Lists
**Vulnerability:** Stored XSS in the EPUB tool's status report. Malicious filenames in EPUB archives were rendered into a list using `innerHTML` without sanitization.
**Learning:** Even with an `escapeHtml` utility available, constructing HTML strings manually (e.g., `status.map(x => ...).join('')`) is error-prone and easy to miss during review.
**Prevention:** Favor `document.createElement`, `textContent`, and `appendChild` for dynamic lists. It is cleaner, less error-prone, and secure by default.

## 2024-10-24 - XML DOM Injection
**Vulnerability:** Use of `innerHTML` on XML elements (`dc:language`) in `script.js`.
**Learning:** While less common than HTML XSS, setting `innerHTML` on XML nodes can lead to tag injection or inconsistent parsing behavior across browsers.
**Prevention:** Always use `textContent` when modifying the text content of XML nodes.
