# <img src="./readme_image/maplelogo.png" width="25" height="25" vertical-align="top"/> 메할일 - MapleToDoList

## ⚙ 기술 스택

<!-- <img src="https://img.shields.io/badge/표시할이름-색상?style=for-the-badge&logo=기술스택아이콘&logoColor=white"> -->
<div align="center">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>
<div align="center">
  <img src="https://img.shields.io/badge/styledcomponents-1572B6?style=for-the-badge&logo=styledcomponents&logoColor=white"> 
</div> 
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</div>
<div align="center">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
</div>

## 📄 페이지 구성

### 메인 <컨텐츠>

- 좌측
---
1. 캐릭터 정보
   - 현재 선택된 캐릭터의 정보
   - 캐릭터별 간단한 메모
2. 캐릭터 리스트
   - 캐릭터 검색창 : Nexon Open API 를 통해 정보 수집
   - 리스트에 추가된 캐릭터의 카드들

- 우측
---
1. 탭
   - 심볼탭과 보스탭으로 구성 (현재 선택된 탭에 따라 하단의 컨텐츠가 변경됨)
2. 수정 버튼
   - 하단의 컨텐츠를 ToDoList와 리스트 수정으로 토글시켜주는 버튼
3. ToDoList컨텐츠
   1. ToDoList
      - 클릭을 통해 해당 항목의 상태를 완료 또는 미완료로 변경
      - 컨텐츠들은 정해진 주기마다 완료상태가 초기화됨
   2. 리스트 수정하기
      - 클릭을 통해 해당 항목을 ToDoList에 추가 또는 제거

### 모달 <검색 정보>

- 검색한 캐릭터의 카드 생성 및 노출
- 즐겨찾기를 통해 리스트에 해당 캐릭터 추가 가능

### 하단 <기타 정보>

- 기타 정보

## 📑 Task(Todos)

- 캐릭터 별 Todos

1. 보스 Todos  
   일일, 주간, 월간

2. 심볼 Todos  
   [일일] 아케인리버, 그란디스  
   [주간] 아케인리버

3. 컨텐츠 Todos (추가 예정)  
   [일일] 몬스터파크(일반 & 익스트림)  
   [주간] 하이마운틴, 수로, 무릉도장
