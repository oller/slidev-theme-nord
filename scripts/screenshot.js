import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const cliPath = path.resolve(rootDir, 'node_modules/@slidev/cli/bin/slidev.mjs')
const outputDir = path.resolve(rootDir, 'example-export')

function exportMode(mode) {
  const isDark = mode === 'dark'
  const suffix = isDark ? '' : '-light'
  console.log(`Generating ${mode} mode screenshots...`)

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `slidev-export-${mode}-`))
  try {
    const args = [
      cliPath,
      'export',
      'example.md',
      '--format',
      'png',
      '--output',
      tmpDir
    ]
    if (isDark) {
      args.push('--dark')
    }

    execFileSync(process.execPath, args, {
      cwd: rootDir,
      stdio: 'inherit'
    })

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    const files = fs.readdirSync(tmpDir).filter(f => f.endsWith('.png'))
    for (const file of files) {
      const num = path.parse(file).name
      const dest = path.join(outputDir, `${num}${suffix}.png`)
      fs.copyFileSync(path.join(tmpDir, file), dest)
    }
    console.log(`✓ Copied ${files.length} ${mode} screenshots to ${outputDir}`)
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
}

const target = process.argv[2] || 'all'
if (target === 'dark') {
  exportMode('dark')
} else if (target === 'light') {
  exportMode('light')
} else if (target === 'all') {
  exportMode('dark')
  exportMode('light')
} else {
  console.error(`Unknown target: ${target}. Use 'dark', 'light', or 'all'.`)
  process.exit(1)
}
