# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.

## 2026-01-08 - [Debounce Input Events]
**Learning:** Heavy operations (Canvas drawing, Blob encoding) inside `input` event listeners block the main thread, causing slider jank.
**Action:** Decouple UI updates from processing logic using a `debounce` utility for the heavy lifting.
