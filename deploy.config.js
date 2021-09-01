const path = require("path");

module.exports = {
  local_dist: path.resolve(process.cwd(), "./images/**/*.*"),
  remote_bucket: "/white-board-docs-website"
}