## 2026-01-09 - Form Label Association in SPAs
**Learning:** Even when labels are visually adjacent to inputs, lacking the `for` attribute completely breaks the accessible relationship. I found this in the Diff Tool where `<label>Original</label>` was just a sibling to the textarea.
**Action:** Always explicitly verify `for` attributes on labels during audits, do not rely on visual placement. Use `checkLabelAssociation` script pattern for quick static analysis.
