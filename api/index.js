const router = require("koa-router")();
const body = require("koa-body")();

//folder
const trade = require("./example");

//api routes
router.get("/trade/add", trade.addTrade);

module.exports = router;
