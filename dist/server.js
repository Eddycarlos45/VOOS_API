"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_express_1 = require("./config/custom_express");
custom_express_1.app.listen(process.env.PORT, function () { return console.log("Server is running on port " + process.env.PORT); });
