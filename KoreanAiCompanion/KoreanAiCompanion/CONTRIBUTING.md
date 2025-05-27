# 기여 가이드

Korean AI Companion 프로젝트에 기여해 주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법에 대한 가이드라인을 제공합니다.

## 개발 환경 설정

1. 저장소를 클론합니다:
```bash
git clone https://github.com/yourusername/KoreanAiCompanion.git
cd KoreanAiCompanion
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. 환경 변수를 설정합니다:
`.env.example` 파일을 복사하여 `.env` 파일을 생성하고 필요한 값을 입력하세요.
```bash
cp .env.example .env
```

4. 개발 서버를 실행합니다:
```bash
npm run dev
```

## 코드 스타일

- TypeScript 코드는 프로젝트의 ESLint 및 Prettier 설정을 따릅니다.
- 코드를 제출하기 전에 `npm run lint`를 실행하여 코드 스타일을 확인하세요.
- 함수와 클래스에는 적절한 JSDoc 주석을 추가하세요.

## 브랜치 전략

- `main`: 안정적인 릴리스 버전
- `develop`: 개발 중인 코드
- 기능 브랜치: `feature/기능-이름`
- 버그 수정 브랜치: `fix/버그-이름`

## 풀 리퀘스트 프로세스

1. 새 브랜치를 생성합니다:
```bash
git checkout -b feature/your-feature-name
```

2. 변경 사항을 커밋합니다:
```bash
git commit -m "feat: 기능 설명"
```

3. 원격 저장소에 푸시합니다:
```bash
git push origin feature/your-feature-name
```

4. GitHub에서 풀 리퀘스트를 생성합니다.

## 커밋 메시지 가이드라인

커밋 메시지는 다음 형식을 따릅니다:

```
<타입>: <설명>

[선택적 본문]

[선택적 푸터]
```

타입:
- `feat`: 새 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (포맷팅 등)
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가 또는 수정
- `chore`: 빌드 프로세스 또는 도구 변경

## 이슈 보고

버그를 발견하거나 새 기능을 제안하려면 GitHub 이슈를 생성하세요. 이슈 템플릿을 사용하여 필요한 정보를 제공해 주세요.

## 라이선스

이 프로젝트에 기여함으로써, 귀하는 귀하의 기여가 프로젝트의 MIT 라이선스 하에 배포된다는 것에 동의합니다.