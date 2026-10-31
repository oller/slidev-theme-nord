# slidev-theme-nord

A [Nord](https://www.nordtheme.com/) inspired theme for [Slidev](https://github.com/slidevjs/slidev). Supports both Nord dark and light color schemes.

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: nord
---
```

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Screenshots

![Slide 1 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/1.png)
![Slide 1 (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/1-light.png)
![Slide 2 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/2.png)
![Slide 2 (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/2-light.png)
![Slide 3 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/3.png)
![Slide 3 (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/3-light.png)
![Slide 4 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/4.png)
![Slide 4 (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/4-light.png)
![Slide 5 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/5.png)
![Slide 5 (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/5-light.png)

## Layouts

This theme uses Slidev's built-in layouts and styles them with the Nord palette (the same approach as `seriph` and `apple-basic`):

- `cover` / `intro` : centred title slide
- `section` : large title with a frost-blue accent bar
- `fact` : one big number or phrase with a caption
- `statement` : one bold sentence
- `quote` : italic quote with an accent bar and attribution

Other built-in layouts (`two-cols`, `image-right`, `center`, ...) work as normal. See `example.md` for usage.

![Section (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/7.png)
![Section (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/7-light.png)
![Fact (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/8.png)
![Fact (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/8-light.png)
![Statement (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/9.png)
![Statement (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/9-light.png)
![Quote (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/10.png)
![Quote (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/10-light.png)
![Two columns (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/11.png)
![Two columns (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/11-light.png)
![Image right (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/12.png)
![Image right (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/12-light.png)

## Components

This theme provides the following components:

- NordBadge : A button-esque badge component using the Nord pallet.

![NordBadge (dark)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/6.png)
![NordBadge (light)](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/6-light.png)


## Contributing

- `pnpm install`
- `pnpm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `pnpm run export` to generate the preview PDF
- `pnpm run screenshot` to generate both dark and light preview PNGs (or `pnpm run screenshot:dark` / `pnpm run screenshot:light`)

## Releasing

Releases use [Changesets](https://github.com/changesets/changesets) and GitHub Actions trusted publishing (no local `npm login`).

Workflow: [`.github/workflows/publish.yml`](.github/workflows/publish.yml). On npm, the Trusted Publisher for this package must allow that workflow filename (`publish.yml`).

1. **In your feature PR**, run `pnpm changeset:add`, choose `patch` / `minor` / `major`, write a short summary, and commit the new file under `.changeset/`.
2. **Merge the feature PR** into `main`.
3. The **Publish** workflow opens a **Version Packages** PR (bumps `package.json` + `CHANGELOG.md`).
4. **Merge the Version Packages PR**. The same workflow then publishes to npm via OIDC and creates the release tag when publish succeeds.

If publish does not run after merging Version Packages, check the Publish workflow run on `main` and that npm Trusted Publisher still points at `publish.yml`.
