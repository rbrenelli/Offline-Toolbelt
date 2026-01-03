# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.

## 2024-05-23 - [Rejected Optimization: Nested Loops]
**Learning:** I identified an O(N*M) performance bottleneck in `fixBodyIdLink` and implemented an O(N) Regex fix. However, the user explicitly rejected it, preferring the existing code ("It is working fine as it is").
**Action:** Respect user preference for simplicity/status quo over performance in this specific area unless the bottleneck becomes critical.
