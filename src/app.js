import express from "express";
import path from "path";

const app = express();

// 포트는 3000번이야
const PORT = 3000;

//야 app아, pug 써
app.set("view engine", "pug");

//야 app 너가 사용할 css나 js파일은 "/asstes"에 있음
app.use(express.static(path.join(__dirname, "/assets")));

//미리 사용자가 찾을 코드를 미리 짜둔다
app.get("/", (rep, res) => {
    res.render("sadari");
  });

//req = 요청하다 res = 응답하다


// 자 설정이 끝났어 이제 시작해
app.listen(PORT, () => {
    console.log(`${PORT} serverstart`);
  });
