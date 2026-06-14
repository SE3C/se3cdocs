# SE3C Docs

SE3C Docs는 보인고 우주공학 동아리 SE3C의 공개 홈페이지입니다.

- 공개 사이트: `se3c.mcv.kr`
- 프레임워크: React + Vite
- 배포 대상: GitHub Pages

## 보안 정책

이 저장소와 GitHub Pages 배포물에는 내부 문서 원본, 계정 비밀번호, Google Apps Script URL, API 키 같은 민감 정보를 넣지 않습니다.

브라우저에 배포되는 React/Vite 앱의 환경 변수와 소스 코드는 최종 JavaScript 번들에서 확인될 수 있습니다. 따라서 비밀번호 비교, 내부 문서 조회, Google Docs/GAS 연동 같은 보호 기능은 공개 프론트엔드에서 구현하지 않습니다.

내부 자료는 공개 사이트에 배포하지 않고, 필요한 사람은 원본 Google Docs 권한으로 직접 접근합니다.

## 사이트 구조

- `/`
- `/tech`
- `/tech/satellite`
- `/tech/propulsion`
- `/tech/software`
- `/team`
- `/roadmap`
- `/credibility`
- `/operations`
- `/budget`
- `/records`
- `/links`
- `/members`

상세 페이지 콘텐츠는 `src/siteDetails.ts`의 공개용 정적 데이터로 관리합니다.

## 주요 파일

- `src/main.tsx`: 진입점, GitHub Pages 404 fallback 복원, 공개 라우팅
- `src/LandingPage.tsx`: 홈 화면
- `src/TechPage.tsx`: 기술 허브
- `src/MainDetailPage.tsx`: 상세 페이지 공통 렌더러
- `src/siteDetails.ts`: 공개 상세 페이지 콘텐츠
- `src/PublicHeader.tsx`: 공개 사이트 헤더
- `src/PublicFooter.tsx`: 공개 사이트 footer
- `src/useHideChromeOnScroll.ts`: 스크롤 방향 기반 헤더 표시 hook
- `public/data.json`: 공개 배포용 빈 호환 파일. 내부 문서 저장 금지

## 개발

```bash
npm install
npm run dev
```

Windows에서는 `run.bat`을 사용할 수 있습니다.

```bat
run.bat
```

## 빌드

```bash
npm run build
```

## 배포

GitHub Pages 배포는 `.github/workflows/deploy.yml`에서 처리합니다.

배포 워크플로우는 내부 문서 데이터를 가져오지 않습니다. 공개 사이트에 필요한 콘텐츠만 저장소의 정적 파일에서 빌드합니다.
