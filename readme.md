# <img src="./readme_image/maplelogo.png" width="25" height="25" vertical-align="top"/> 메할일 - MapleToDoList

## 📄 페이지 구성

- 상단 <메인 로고 및 검색창>  
  넥슨 오픈 API를 통해 캐릭터 닉네임을 검색 할 수 있는 검색창

- 메인 <컨텐츠>  
  페이지에 따라 변경되는 컨텐츠 영역

- 하단 <기타 정보>  
  기타 정보

### 🔒 로그인 및 회원가입(계정 등록) 페이지

#### 로그인

- 등록된 계정에 로그인
- 계정 생성 링크

#### 간단한 계정 생성 절차

- 아이디 중복검사
- 비밀번호 설정
- 비밀번호 2차 확인

- 조건 만족시 서버에 계정 등록

### 📑 메인(Todos) 페이지 

- 캐릭터 별 Todos

  - 보스 Todos  
    일일, 주간, 월간

  - 퀘스트 Todos
    일일, 주간  
    [일일] 아케인리버  
    [주간] 그란디스, 타락한 세계수, 헤이븐

  - 컨텐츠 Todos
    일일, 주간  
    [일일] 몬스터파크(일반 & 익스트림), 아케인리버
    [주간] 하이마운틴, 수로, 무릉도장

### 🔍 검색 결과 페이지

- 검색한 캐릭터 이미지 및 정보 를 메인 정보로 시각화
- 부 캐릭터 리스트를 서브 정보로 시각화

- 각 캐릭터 정보는 코디(외형), 서버, 닉네임, 레벨, 직업, 길드, 마지막 활동일 정보를 포함
- `캐릭터 추가` 버튼을 통해 리스트에 캐릭터를 추가하는 기능 부여
