module.exports.index = (request, response) => {
  let url = String(process.env.HOSTNAME).split("-");
  response.send(
    '<h1>REST API</h1><p>A REST API starter using Express and body-parser.<br /><br />To test, curl the following and view the terminal logs:<br /><br /><i>curl -H "Content-Type: application/json" -X POST -d \'{"username":"test","data":"1234"}\' https://' +
      url[2] +
      ".sse.codesandbox.io/update<i></p>"
  );
};

module.exports.store = (request, response) => {};
