const express = require('express');
const server = express();


server.set('view engine', 'ejs');
server.set('views', 'client/layout');

server.use(express.static('client'));

function startServer() {
  server.listen(80, (error) => {
    if (error) {
      console.log("서버 실행 중 에러가 발생하였습니다.");
    } else {
      console.log("서버가 구동되었습니다.");
    }
  });
}


module.exports = {
  express,
  server,
  startServer
}
