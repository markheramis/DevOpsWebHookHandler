const fs = require("fs");
const path = require("path");

module.exports.index = (request, response) => {
  console.log(request);
  response.send("GITLAB GET ROUTE");
};

module.exports.store = (request, response, next) => {
  let branch = request.body.object_attributes.source_branch;
  let namespace = request.body.object_attributes.source.path_with_namespace;
  let directory_name = namespace + "/" + branch;
  let fullPath = appRoot + directory_name;
  fs.mkdir(path.join(fullPath), (fs_error) => {
    if (fs_error) {
      // on error
      next(fs_error);
    } else {
      // on success
      response.send([branch, namespace, directory_name]);
    }
  });
};

module.exports.destroy = (request, response) => {};
