# 한국어 AI 대화 도우미 (Korean AI Companion)

토키사키 쿠루미 캐릭터를 기반으로 한 한국어 AI 대화 도우미 애플리케이션입니다. 이 프로젝트는 한국어 학습과 대화를 도와주는 AI 챗봇을 제공합니다.

## 주요 기능

- 🗣️ 토키사키 쿠루미 캐릭터 기반의 자연스러운 대화
- 🌐 한국어/영어 언어 전환 지원
- 📊 학습 진행 상황 및 분석 기능
- 💬 대화 기록 저장 및 관리
- 🔄 사용자 피드백 시스템

## 시작하기

### 필수 조건

- Node.js 16.x 이상
- npm 또는 yarn
- GROQ API 키 (https://console.groq.com/ 에서 발급)

### 설치 방법

1. 저장소 클론하기
```bash
git clone https://github.com/yourusername/KoreanAiCompanion.git
cd KoreanAiCompanion
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

3. 환경 변수 설정
`.env.example` 파일을 복사하여 `.env` 파일을 생성하고 필요한 값을 입력하세요.
```bash
cp .env.example .env
```
그리고 `.env` 파일에서 `GROQ_API_KEY`를 설정하세요.

4. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

## Replit에서 호스팅하기

1. Replit에서 새 프로젝트 생성 (Node.js 템플릿 선택)
2. 이 저장소의 코드를 Replit 프로젝트로 가져오기
3. Replit의 Secrets 탭에서 환경 변수 설정 (GROQ_API_KEY)
4. `.replit` 파일이 올바르게 설정되어 있는지 확인
5. Run 버튼을 클릭하여 애플리케이션 실행

## 기술 스택

- **프론트엔드**: React, TypeScript, Tailwind CSS, Shadcn UI
- **백엔드**: Node.js, Express
- **AI**: GROQ API (LLaMA 3.1 70B 모델)
- **데이터 저장**: 메모리 스토리지 (향후 PostgreSQL 지원 예정)

## 기여하기

이슈와 풀 리퀘스트는 언제나 환영합니다. 큰 변경사항은 먼저 이슈를 열어 논의해주세요.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 감사의 말

- 토키사키 쿠루미 캐릭터는 Date A Live 시리즈의 등장인물입니다.
- GROQ API를 통한 AI 기능 제공
- Shadcn UI 컴포넌트 라이브러리