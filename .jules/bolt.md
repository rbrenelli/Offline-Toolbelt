# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.
