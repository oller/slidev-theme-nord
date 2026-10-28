# slidev-theme-nord

## 0.0.8

### Patch Changes

- c4a5191: Scope element styles to `.slidev-layout` so they no longer leak into Slidev's own UI, and improve inline code contrast in light mode.
  Remove the `!important` flags from the Nord variable overrides by raising selector specificity (`html.dark:root` / `html.light:root`).
  
  Fix the Nord background not applying to exports (PDF/PNG), which use Slidev's print container.

## 0.0.7

### Patch Changes

- 6f1c30a: Fix theme hiding global-top/global-bottom components by moving the slide background to the slide content element, and theme the letterbox colour.

## 0.0.6

### Patch Changes

- Remove version badge from README

## 0.0.5

### Patch Changes

- Update initial slide copy and screenshot

## 0.0.4

### Patch Changes

- chore: Fix naming in package.json

## 0.0.3

### Patch Changes

- Fix images in hosted README, add repository property to package.json

## 0.0.2

### Patch Changes

- 5e0ca52: Update README and make public

## 0.0.1

### Patch Changes

- Initial commit
