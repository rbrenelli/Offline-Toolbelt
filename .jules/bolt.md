# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.

## 2024-05-22 - [Regex Guard for DOM Parsing]
**Learning:** `DOMParser.parseFromString` is expensive. Iterating through files and parsing every HTML file just to check for a specific tag is inefficient if the tag is rare.
**Action:** Added a regex guard clause `if (!/<img/i.test(content)) continue` to `fixStrayIMG`. This improved performance by ~8.5x in benchmarks for cases where most files don't have images.
