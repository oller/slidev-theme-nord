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

Releases are managed with [Changesets](https://github.com/changesets/changesets) and published to npm via GitHub Actions trusted publishing (no local `npm login` needed).

The workflow file is [`.github/workflows/publish.yml`](.github/workflows/publish.yml), and npm trusted publisher must be configured for it (already set up for this repo).

1. **Add a changeset in your PR**:
   Run `pnpm changeset:add`, choose the bump type (`patch`, `minor`, or `major`), provide a summary, and commit the generated file in `.changeset/`.
2. **Merge the PR** into `main`.
3. **Bump the version**:
   On the updated `main` branch, run:
   ```bash
   pnpm changeset:version
   ```
   This updates `package.json` and `CHANGELOG.md` and deletes the processed changeset.
4. **Commit and push the Release commit**:
   ```bash
   git add .
   git commit -m "chore: Release"
   git push origin main
   ```
5. **Publish via GitHub Actions**:
   Pushing the Release commit changes `package.json` on `main`, which usually triggers the **Publish** workflow automatically to publish the package to npm.
   - If the workflow did not run automatically, manually trigger it in GitHub Actions (**Publish** workflow > **Run workflow** / `workflow_dispatch`) as a fallback.
6. **(Optional) Tag the release**:
   Create and push a git tag matching prior releases (e.g. `v0.1.1` style):
   ```bash
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```


