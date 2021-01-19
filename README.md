# static-web-template

- 제작자: Hoodie 임기영 (popping2606@gmail.com)
- HTML, CSS, JS로 만드는 정적 웹페이지

### File Structure

1. .vscode/: vscode의 workspace 설정
2. component/: header.html, footer.html
3. images/: 이미지 파일들
4. node_modules/: open-color 등 node 패키지
5. water-page/, 불꽃-page/: 페이지 폴더. 내부엔 index.html
6. index.html: 첫번쨰 페이지로 리다이렉트하는 파일
7. index.css: 전체 스타일이 적용된 css 파일
8. index.js: 클릭 및 스크롤 기능을 제공하는 js파일
9. w3-include.js: 컴포넌트를 삽입해주는 js파일

### How To Use

0. Node.js 설치 후 `npm i`
1. index.html을 열어서 초기 페이지(water-page)를 지정한다.
2. 페이지 명명규칙은 페이지명-page로 한다. 페이지명은 알파벳 소문자를 권장한다.
3. 페이지는 루트 디렉토리에 페이지명-page 폴더를 만들고 index.html을 만든다.
4. component 폴더 안에 header, footer 컴포넌트가 있다. w3-include.js 사용.
5. header에는 로고 이미지, gn에 페이지명을 적는다.
6. footer에는 회사 정보를 적는다.
7. images 폴더에 이미지를 저장한다.
8. 각 페이지의 index.html에 배경 이미지와 ln을 설정한다.
