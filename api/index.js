const router = require("koa-router")();
const body = require("koa-body")();

//folder
const example = require("./example");

//api routes
router.get("/example/add", example.add);

module.exports = router;
