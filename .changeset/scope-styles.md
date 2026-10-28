---
'slidev-theme-nord': patch
---

Scope element styles to `.slidev-layout` so they no longer leak into Slidev's own UI, and improve inline code contrast in light mode.
Remove the `!important` flags from the Nord variable overrides by raising selector specificity (`html.dark:root` / `html.light:root`).
