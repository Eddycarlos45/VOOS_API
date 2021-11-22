"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCities = void 0;
var citiesMock_1 = require("../repository/citiesMock");
var searchCities = function (whereFrom, whereTo) {
    var From = citiesMock_1.cities.find(function (item) { return item.acronym === whereFrom; });
    var To = citiesMock_1.cities.find(function (item) { return item.acronym === whereTo; });
    var response = {
        whereFrom: whereFrom,
        cityFrom: From === null || From === void 0 ? void 0 : From.city,
        whereTo: whereTo,
        cityTo: To === null || To === void 0 ? void 0 : To.city
    };
    return response;
};
exports.searchCities = searchCities;
