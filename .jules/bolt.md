# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.

## 2024-05-22 - [Skipping DOM Parser for Text-Only Content]
**Learning:** `DOMParser.parseFromString` is expensive. In EPUB processing, we iterated over every HTML file to check for stray images. However, many EPUB chapters (especially in novels) are text-only.
**Action:** Added a cheap regex check `/<img/i.test(content)` to skip parsing files that definitely don't contain images. This reduces the number of parsing operations significantly for text-heavy books.
