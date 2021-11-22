"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voo_router = void 0;
var express_1 = require("express");
var voos_controller_1 = require("../controllers/voos_controller");
var voo_router = (0, express_1.Router)();
exports.voo_router = voo_router;
voo_router.post('/search', voos_controller_1.search);
