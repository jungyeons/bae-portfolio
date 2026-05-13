# 배정연 포트폴리오 디자인 아이디어

## 배경 분석
보안 엔지니어 포트폴리오. 원본 PDF는 순수 블랙 배경에 화이트 텍스트, 기하학적 선 패턴(파형, 방사형, 와이어프레임 삼각형)을 사용한 테크니컬하고 미니멀한 스타일.

---

<response>
<probability>0.07</probability>
<text>

## Idea A: Cyberpunk Terminal — 해킹 터미널 미학

**Design Movement**: Cyberpunk / Brutalist Digital

**Core Principles**:
1. 터미널 화면처럼 보이는 인터페이스 — 텍스트가 타이핑되는 듯한 효과
2. 격자(Grid) 오버레이와 스캔라인 효과로 CRT 모니터 질감 표현
3. 정보 밀도 높은 레이아웃 — 마치 해킹 대시보드처럼

**Color Philosophy**:
- 배경: 순수 블랙 (#000000)
- 주 텍스트: 형광 초록 (#00FF41) — 매트릭스 터미널 색상
- 보조: 청록 (#00D4FF), 경고 레드 (#FF0040)
- 감정: 위험하고 날카로운, 기술적 권위감

**Layout Paradigm**:
- 좌측 고정 터미널 사이드바 (명령어 네비게이션)
- 우측 메인 콘텐츠 영역에 ASCII 아트 구분선
- 각 섹션은 `> SECTION_NAME` 형식의 프롬프트로 시작

**Signature Elements**:
1. 타이핑 애니메이션 (커서 깜빡임 포함)
2. 스캔라인 CSS 오버레이
3. 글리치(Glitch) 텍스트 효과 — 호버 시 발동

**Interaction Philosophy**:
- 클릭 = 명령어 실행 피드백 (짧은 플래시)
- 스크롤 시 터미널 출력 시뮬레이션

**Animation**:
- 페이지 진입: 텍스트 한 줄씩 타이핑
- 호버: RGB 글리치 분리 효과 (200ms)
- 섹션 전환: 화면 스캔 효과

**Typography System**:
- 헤딩: JetBrains Mono Bold (모노스페이스)
- 본문: JetBrains Mono Regular
- 완전 모노스페이스 — 터미널 일관성 유지

</text>
</response>

<response>
<probability>0.08</probability>
<text>

## Idea B: Dark Brutalism — 선택된 디자인

**Design Movement**: Dark Brutalism + Swiss Grid

**Core Principles**:
1. 원본 PDF의 블랙 미학을 계승하되, 웹의 인터랙티브성으로 승화
2. 타이포그래피가 주인공 — 거대한 헤딩이 레이아웃을 지배
3. 비대칭 그리드 — 좌측 무거운 텍스트 블록, 우측 여백과 기하학 요소
4. 단 하나의 강조색(Electric Cyan)으로 시선 유도

**Color Philosophy**:
- 배경: 거의 블랙 (#0A0A0A)
- 주 텍스트: 오프화이트 (#F0EDE8)
- 강조: Electric Cyan (#00E5FF) — 보안/기술 분야의 날카로움
- 보조 구분: 다크 그레이 (#1A1A1A) 카드 배경
- 감정: 자신감 있고 날카로운, 신뢰할 수 있는 전문가

**Layout Paradigm**:
- 풀스크린 히어로: 이름이 뷰포트를 가득 채우는 거대한 타이포그래피
- 좌측 고정 네비게이션 바 (세로 텍스트)
- 컨텐츠 섹션: 좌-우 비대칭 분할 (60/40)
- 프로젝트 카드: 번호가 크게 표시되는 에디토리얼 스타일

**Signature Elements**:
1. 섹션 구분: 얇은 수평선 + 섹션 번호 (01, 02, 03...)
2. 기술 스택 태그: 모노스페이스 폰트, 테두리 없는 인라인 스타일
3. 스크롤 시 텍스트 reveal 애니메이션

**Interaction Philosophy**:
- 프로젝트 카드: 호버 시 좌측 Cyan 보더 슬라이드인
- 네비게이션: 활성 섹션 강조 (Cyan 점)
- 스크롤 진행 표시바 (상단)

**Animation**:
- 히어로 진입: 텍스트 마스크 reveal (클립패스 위에서 아래로)
- 스크롤 트리거: 각 섹션 fade-up (translateY 30px → 0, 600ms ease-out)
- 숫자 카운터: 스킬 퍼센티지 애니메이션
- 프로젝트 번호: 호버 시 Cyan으로 색상 전환 (200ms)

**Typography System**:
- 헤딩: Bebas Neue (초대형 디스플레이) — 임팩트와 권위
- 서브헤딩: Space Grotesk SemiBold — 현대적 기술 느낌
- 본문: Space Grotesk Regular — 가독성
- 모노: JetBrains Mono — 기술 스택, 코드 요소

</text>
</response>

<response>
<probability>0.05</probability>
<text>

## Idea C: Noir Minimalism — 영화 포스터 미학

**Design Movement**: Film Noir + Swiss Minimalism

**Core Principles**:
1. 극단적 여백 — 콘텐츠가 숨쉬는 공간 확보
2. 흑백 사진 필터 + 그레인 텍스처
3. 세로 타이포그래피 요소로 독특한 시각적 리듬 생성

**Color Philosophy**:
- 배경: 웜 다크 (#111010)
- 텍스트: 크림 화이트 (#F5F0E8)
- 강조: 골드 (#C9A84C) — 수상 경력을 상징
- 감정: 클래식하고 성숙한, 시간이 지나도 세련된

**Layout Paradigm**:
- 매거진 스타일 레이아웃
- 세로 텍스트 사이드 레이블
- 프로젝트: 전면 이미지 + 오버레이 텍스트

**Signature Elements**:
1. 필름 그레인 CSS 오버레이
2. 세로 회전 섹션 레이블
3. 골드 언더라인 강조

**Interaction Philosophy**:
- 마우스 커서 커스텀 (원형 커서)
- 패럴랙스 스크롤 효과

**Animation**:
- 페이지 전환: 페이드 인/아웃
- 이미지: 그레이스케일 → 컬러 호버 효과

**Typography System**:
- 헤딩: Playfair Display (세리프) — 클래식 권위
- 본문: DM Sans — 현대적 가독성
- 숫자: Bebas Neue — 강렬한 대비

</text>
</response>

---

## 선택: Idea B — Dark Brutalism

원본 PDF의 블랙 미학을 계승하면서, 웹의 인터랙티브성과 타이포그래피 임팩트를 극대화한 **Dark Brutalism** 스타일을 채택한다.

- **Bebas Neue** 초대형 헤딩으로 시각적 임팩트
- **Electric Cyan (#00E5FF)** 단일 강조색으로 보안 엔지니어의 날카로움 표현
- 비대칭 레이아웃과 섹션 번호링으로 에디토리얼 느낌
- 스크롤 트리거 애니메이션으로 정보를 순차적으로 드러내는 경험
