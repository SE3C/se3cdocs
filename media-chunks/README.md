# NCRC clip storage

This directory holds Base64 chunks of two user-provided, 20-second 1920x1080 NCRC simulation videos: Go2 R5 and H1 R6. Chunks are stored in order as `ncrc-go2-r5.00.b64`, etc., to avoid GitHub connector upload limits.

`npm run build` invokes `scripts/restore-ncrc-videos.mjs` through `prebuild`. The script rebuilds `public/media/ncrc-go2-r5.mp4` and `public/media/ncrc-h1-r6.mp4` and validates their original byte counts and SHA-256 checksums. The generated MP4 files are ignored by Git and are copied into the Vite site during build.

These clips are **visual records**; the official competition scores and submission claims are documented separately in the linked evaluation reports.
