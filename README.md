# slidev-theme-nord

A [Nord](https://www.nordtheme.com/) inspired theme for [Slidev](https://github.com/slidevjs/slidev).

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: nord
---
```

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Screenshots

![Slide 1](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/1.png)
![Slide 2](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/2.png)
![Slide 3](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/3.png)
![Slide 4](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/4.png)
![Slide 5](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/5.png)

## Layouts

This theme uses Slidev's built-in layouts and styles them with the Nord palette (the same approach as `seriph` and `apple-basic`):

- `cover` / `intro` : centred title slide
- `section` : large title with a frost-blue accent bar
- `fact` : one big number or phrase with a caption
- `statement` : one bold sentence
- `quote` : italic quote with an accent bar and attribution

Other built-in layouts (`two-cols`, `image-right`, `center`, ...) work as normal. See `example.md` for usage.

![Section](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/7.png)
![Fact](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/8.png)
![Statement](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/9.png)
![Quote](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/10.png)
![Two columns](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/11.png)
![Image right](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/12.png)

## Components

This theme provides the following components:

- NordBadge : A button-esque badge component using the Nord pallet.

![NordBadge](https://raw.githubusercontent.com/oller/slidev-theme-nord/main/example-export/6.png)


## Contributing

- `pnpm install`
- `pnpm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `pnpm run export` to generate the preview PDF
- `pnpm run screenshot` to generate the preview PNG

## Releasing

Releases use [Changesets](https://github.com/changesets/changesets) and GitHub Actions trusted publishing (no local `npm login`).

Workflow: [`.github/workflows/release.yml`](.github/workflows/release.yml). On npm, the Trusted Publisher for this package must allow that workflow filename (`release.yml`).

1. **In your feature PR**, run `pnpm changeset:add`, choose `patch` / `minor` / `major`, write a short summary, and commit the new file under `.changeset/`.
2. **Merge the feature PR** into `main`.
3. The **Release** workflow opens a **Version Packages** PR (bumps `package.json` + `CHANGELOG.md`).
4. **Merge the Version Packages PR**. The same workflow then publishes to npm via OIDC and creates the release tag when publish succeeds.

If publish does not run after merging Version Packages, check the Release workflow run on `main` and that npm Trusted Publisher still points at `release.yml`.
