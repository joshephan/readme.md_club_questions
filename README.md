"넷플릭스 클론코딩을 풀스택 + 스피드런으로 해보자"

IDE를 두 개를 켜서 동시에 claude AI 사용하면서
페이지: 로그인 + 회원가입 + 메인 + 상세 + 시청
목표 시간: 2시간

프론트: Next.js
- Video player(React-player)
- global state: Zustand
백엔드: Elysia
- 서버 사이드에서 init file system 접근해서 바로 스트리밍 생성
- FFmpeg 사용해서 mp4 to HLS 적용
- CORS + JWT
DB: PostgreSQL
- User
- Video(init factory dataset)
ORM: Drizzle
Styling: Tailwind CSS
Animation: GSAP
Cotainer: Docker

목표: 로컬 환경에서 회원가입 + 로그인 > 메인 > 상세 > 시청 
넷플릭스 UI와 동일하게 뷰포트 웹기준으로만 맞추는 걸로

고도화는 나중에 다루도록 하고

라이브때 깊게 다뤄보죠
- Kafka 백엔드, 작은 기업에선 쓸 이유가 별로 없음
- 맛보기로 라이브에서 깊게 해보면 재밌을듯 함