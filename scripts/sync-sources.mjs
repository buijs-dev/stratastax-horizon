// Copies the theme of stratastax-design into src/styles/design/ (npm run sync). The repository is found in
// STX_DESIGN_DIR, else in _sources/stratastax-design (CI, see .github/workflows/pages.yml), else next to this
// repository. Without a sync the site builds with the fallback colours of src/styles/global.css.
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const designDir = [process.env.STX_DESIGN_DIR, join(root, '_sources/stratastax-design'), join(root, '../stratastax-design')]
    .filter(Boolean)
    .map((candidate) => resolve(root, candidate))
    .find((candidate) => existsSync(join(candidate, 'stratastax.tokens.yaml')));
if (!designDir) {
    console.error('stratastax-design not found: set STX_DESIGN_DIR or check it out next to this repository');
    process.exit(1);
}
console.log(`Design: ${designDir}`);

if (!existsSync(join(designDir, 'node_modules'))) {
    execFileSync('npm', ['ci', '--omit=dev', '--ignore-scripts'], { cwd: designDir, stdio: 'inherit' });
}
const exportDir = mkdtempSync(join(tmpdir(), 'stratastax-design-'));
execFileSync('node', ['scripts/export.mjs', exportDir], { cwd: designDir, stdio: 'inherit' });

const stylesDir = join(root, 'src/styles/design');
rmSync(stylesDir, { recursive: true, force: true });
mkdirSync(stylesDir, { recursive: true });
cpSync(join(exportDir, 'tokens.css'), join(stylesDir, 'tokens.css'));
rmSync(exportDir, { recursive: true, force: true });
