# SE3C Public Website

SE3C (Space Exploration Engineering Experimental Club) 공개 홈페이지입니다.

## 2026 update

- CubeSat structural prototype and ESP32-centered design
- Rocket engineering
- NCRC 2026 · H1 + Go2 reinforcement learning, official evaluation and submission records
- Software & engineering data workflow
- CAD modeling, rocket nozzle geometry, and structural mockups
- Space engineering outreach and documented project achievements

## Local development

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run lint
```

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`을 통해 GitHub Pages로 배포됩니다.

## Public-data rule

지원자·부원 개인정보, 계정 정보, 비공개 링크와 내부 원본 문서는 이 공개 저장소에 업로드하지 않습니다. 인물 정보·사진은 공개 동의 또는 필요한 블라인드 처리를 거친 자료만 사용합니다.

## 2026-08 SpaceX-inspired redesign

- 공식 슬로건 **“상상하던 걸, 실제 프로젝트로 만들다.”** 적용
- 한국어 중심 내비게이션과 콘텐츠 구조
- 카드형 랜딩 페이지 대신 full-viewport 프로젝트 섹션 구성
- CubeSat / Rocket / NCRC / 3D Printing / High-Altitude Flight 업데이트
- NCRC H1 play 영상 포함

## NCRC public research (2026-10)

- Project page: `/tech/robotics-ai` — H1/Go2 results, timeline, and evidence links.
- Test log: `/tests` — publicly documented official evaluation receipt, H1 submission, and research archive.
- Source: https://github.com/SE3C/naver-issacsim-opensource
- Public self-evaluation datasets (33 ZIPs / 132 videos) are linked via the source repository Releases, rather than copied into this website.
- Existing `public/media/ncrc-h1-play.mp4` is identified as the **2026-08 baseline** video, not an October submission video.
- The source project's license is undecided; the website links to sources without republishing their datasets.

## Sponsor-facing public content

The site publishes verified outcomes and curated photographs, not detailed implementation files. The ESP32 project is described at the overall design level, and the earlier Raspberry Pi prototype is labeled as historical. CAD work is presented through already-public 3D models, concept sketches, and structural mockup images. No current flight completion or new equipment acquisition is implied.

Do not publish firmware, circuit connections, exact component configurations, internal PDFs, personal data, or private budget records here. New media requires separate review before publication.
