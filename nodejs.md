# 정리



## npm

> 설치, 공유, 코드를 배포하기 위해 사용한다. 프로젝트에서 dependencies를 관리한다. 다른 사람들과 피드백을 주고 받을 수 있다.

Node.js와 함께 배포되므로 Node.js를 설치하면 npm도 함께 설치된다.

`node -v`  : Node.js 버전 확인

`npm -v` : npm 버전 확인



### morgan

> HTTP request logger middleware for node.js

`npm install morgan`  설치



### cookie-parser

> Parse HTTP request cookies

`npm install cookie-parser`   설치



### body-parser

> Node.js body parsing middleware

`npm install body-parser`  설치



### helmet

> 다양한 HTTP header를 설정함으로써 Express app을 보호

`npm install helmet`  설치



##### 기본 사용 방법

```
const express = require('express')
const helmet = require('helmet')
 
const app = express()
 
app.use(helmet())
 
// ...
```

헤더가 확실히 설정되기 위해 미들웨어 스택에서 helmet을 `use`에서 먼저 쓰는 것이 좋다. 