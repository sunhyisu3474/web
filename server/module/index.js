const server = require('./server.js');

function getIndex() {
  server.server.get('/', (request, response, error) => {
    if (response) {
      response.render('index.ejs', {});
    } else if (error) {
      console.log("에러가 발생하였습니다.");
    }
  });
}


module.exports = {
  getIndex
}
