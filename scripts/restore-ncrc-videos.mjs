import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const chunksDirectory = resolve(root, 'media-chunks');
const outputDirectory = resolve(root, 'public/media');
const clips = [
  { name: 'ncrc-go2-r5', parts: 7, bytes: 5686400, sha256: 'a513643577b37e9c0dfde2a99ce8e28aa86dc23a6182c41485b4660205699e6a' },
  { name: 'ncrc-h1-r6', parts: 8, bytes: 7199344, sha256: '20ced465f372b0f66662d0720c2a988841dade462dda0408aeb28b621eeef60a' },
];

mkdirSync(outputDirectory, { recursive: true });
for (const clip of clips) {
  const files = readdirSync(chunksDirectory)
    .filter((file) => file.startsWith(`${clip.name}.`) && file.endsWith('.b64'))
    .sort();
  if (files.length !== clip.parts) throw new Error(`${clip.name}: expected ${clip.parts} chunks, got ${files.length}`);
  const base64 = files.map((file) => readFileSync(resolve(chunksDirectory, file), 'utf8')).join('');
  const content = Buffer.from(base64, 'base64');
  const sha256 = createHash('sha256').update(content).digest('hex');
  if (content.length !== clip.bytes || sha256 !== clip.sha256) {
    throw new Error(`${clip.name}: reconstructed video failed checksum validation`);
  }
  writeFileSync(resolve(outputDirectory, `${clip.name}.mp4`), content);
  console.log(`Restored ${clip.name}.mp4 (${content.length} bytes, SHA-256 verified)`);
}
