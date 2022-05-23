/*
    Koa Boilerplate
*/

const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("@koa/cors");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = new Koa();

//global variables
const PORT = 4000;
const ENVIRONMENT = process.env.NODE_ENV || "development";
const HOST = process.env.HOST || "localhost";
const CORS = ENVIRONMENT === "development" ? "*" : HOST;

//utils
const utils = require("./utils");

//api routes
const api = require("./api");

app.use(cors({ "Access-Control-Allow-Origin": CORS }));
app.use(koaBody());
app.use(api.routes());

app.listen(PORT);
