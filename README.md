# AI-Safety 건설안전 AI 솔루션 랜딩 페이지

멀티모달 AI와 몰입형 AR·VR 기반 차세대 개인 맞춤형 건설안전 솔루션에 대한 연구 프로젝트 소개 페이지입니다.

## 빌드 도구 없이 바로 시작

이 프로젝트는 **순수 HTML/CSS/JavaScript**로만 구성되어 있으므로 빌드 단계가 필요 없습니다.

### 방법 1: 파일 직접 열기 (가장 간단)

`index.html`을 브라우저로 더블클릭해 바로 실행할 수 있습니다.

### 방법 2: 로컬 서버 (권장)

상대 경로와 페이지 이동이 실제 배포처럼 동작하는지 확인하려면 간단한 서버를 띄우세요.

```bash
cd ai-safety-landing
python3 -m http.server 8000
# → http://localhost:8000 에서 확인
```

또는:

```bash
npx serve .
# → http://localhost:3000 에서 확인
```

## 디렉토리 구조

```
ai-safety-landing/
├── index.html              # 메인 페이지 (단일 페이지 + 앵커 스크롤)
├── css/
│   ├── tokens.css          # 색상/타이포/간격 CSS 변수
│   ├── base.css            # reset, 폰트, 기본 스타일
│   └── components.css      # nav, hero, 카드, 통계, footer 등
├── js/
│   ├── main.js             # 네비게이션 토글, 스크롤 스무스 이동
│   └── charts.js           # 통계 애니메이션 (IntersectionObserver)
├── data/
│   └── stats.js            # 통계 수치 상수 (단일 관리)
└── assets/                 # 이미지, 파비콘 등 (현재 비어있음)
```

## 주요 기능

### 1. 반응형 디자인
- **데스크톱**: 3열 카드 그리드
- **태블릿**: 2열 그리드
- **모바일**: 1열 + 햄버거 메뉴

### 2. 통계 애니메이션
- 페이지 스크롤 시 섹션 진입 → 통계 숫자 카운팅 시작
- `IntersectionObserver` 기반, 1회만 동작
- `prefers-reduced-motion` 대응

### 3. 네비게이션
- 고정 헤더 (sticky)
- 앵커 링크 스크롤 (smooth scroll)
- 모바일 햄버거 메뉴 토글
- 활성 섹션 표시

### 4. 접근성
- 의미론적 HTML (`<section>`, `<header>`, `<footer>`)
- ARIA 레이블 (`aria-label` 등)
- 키보드 네비게이션 지원
- 색상 대비 준수 (WCAG 표준)

## 플레이스홀더 및 TODO 항목

다음 항목들은 실제 정보로 교체해야 합니다:

### Footer 연락처 정보
```html
<!-- TODO: 실제 소속 기관 정보로 교체 -->
<p>대학명<br>연구진</p>

<!-- TODO: 실제 연락처 정보로 교체 -->
<p>이메일: <a href="mailto:contact@example.com">contact@example.com</a><br>
   전화: <a href="tel:+82-2-000-0000">+82-2-000-0000</a></p>
```

### 기대효과 섹션
```html
<!-- TODO: 실제 기대효과 문구로 교체 -->
<div class="impact-item">
  <h4>✓ 실시간 위험 탐지 및 예방</h4>
  <p>...</p>
</div>
```

### 데이터 상수 (`data/stats.js`)
```javascript
// TODO: 실제 정보로 교체
research_code: '[NRF 과제 번호 미확정]',
institution: '[연구기관명]',
principal_investigator: '[연구책임자명]',
```

## 색상 팔레트 (디자인 시스템)

| 이름 | 값 | 용도 |
|------|-----|------|
| Primary | `#14213D` | 주색 (다크네이비) |
| Accent | `#FF8C42` | 강조색 (세이프티 오렌지) |
| Background | `#FFFFFF` | 배경 |
| Surface | `#F5F7FA` | 섹션 배경 |
| Text | `#1A1A1A` | 본문 텍스트 |
| Muted | `#666666` | 보조 텍스트 |

모든 색상은 `css/tokens.css`의 CSS 변수로 관리됩니다.

## 타이포그래피

- **한글**: Pretendard Variable (jsDelivr CDN)
- **영문**: 시스템 폰트 스택 (SF Pro, Segoe UI 등)

## 배포 (GitHub Pages)

이 페이지는 GitHub Pages에 배포할 수 있습니다:

1. 저장소 이름을 `username.github.io` 로 생성
2. 이 파일들을 푸시
3. `https://username.github.io` 에서 확인

모든 경로가 상대 경로이므로 서브경로 배포에서도 동작합니다.

## 기술 스택

- **마크업**: HTML5 (시맨틱 태그)
- **스타일**: CSS3 (커스텀 프로퍼티, Flexbox, Grid)
- **스크립트**: 바닐라 JavaScript (의존성 없음, `window.INU` 네임스페이스 사용)
- **폰트**: Pretendard Variable (CDN)
- **브라우저**: 모던 브라우저 (Chrome, Firefox, Safari, Edge)

## 개발 가이드

### CSS 수정 시
모든 색상/간격/타이포는 `css/tokens.css`의 변수를 사용하세요. 인라인 hex/px 도입 금지.

### 새 페이지 추가 시
1. `index.html`에 새 `<section id="...">` 추가
2. `js/main.js`의 `const sections = ...` 에 섹션 추가
3. `css/components.css`에 섹션별 스타일 추가

### 통계 수정 시
`data/stats.js`의 `STATS` 객체만 수정하면 페이지 전체에 반영됩니다.

## 검증 체크리스트

배포 전 다음을 확인하세요:

- [ ] 로컬 서버에서 렌더링 확인 (데스크톱 + 모바일)
- [ ] 모든 앵커 링크 동작 확인
- [ ] 모바일 햄버거 메뉴 토글 확인
- [ ] 통계 애니메이션 동작 (스크롤 시 카운팅)
- [ ] 브라우저 콘솔에 에러 없음
- [ ] 모든 TODO 항목 확인/교체
- [ ] Lighthouse 점수 확인 (접근성 / 성능)

## 라이선스

이 페이지는 NRF 연구과제 소개용입니다. 자유롭게 수정하여 사용하세요.

---

**마지막 수정**: 2024년 7월
**Contact**: `[contact@example.com]` (TODO: 실제 연락처로 교체)
