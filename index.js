/*
    _  __             ____        _ _                 _       _       
    | |/ /___   __ _  | __ )  ___ (_) | ___ _ __ _ __ | | __ _| |_ ___ 
    | ' // _ \ / _` | |  _ \ / _ \| | |/ _ \ '__| '_ \| |/ _` | __/ _ \
    | . \ (_) | (_| | | |_) | (_) | | |  __/ |  | |_) | | (_| | ||  __/
    |_|\_\___/ \__,_| |____/ \___/|_|_|\___|_|  | .__/|_|\__,_|\__\___|
    by sirgi                                          |_|                    
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
