"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderResponse = void 0;
var airlines_1 = require("../constants/airlines");
var voos_service_1 = require("../services/voos_service");
var moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
var builderResponse = function (whereFrom, whereTo, howManyPeople, departureDate, returnDate, roundTrip) {
    var cities = (0, voos_service_1.searchCities)(whereFrom, whereTo);
    var NumberOfTrips = Math.floor(Math.random() * 3 + 1);
    var response = [];
    for (var i = 0; i < NumberOfTrips; i++) {
        var price = "R$: " + (Math.floor(Math.random() * 999) + 100) + "," + Math.floor(Math.random() * 99);
        var trip = {
            price: price,
            company: airlines_1.airlines[Math.floor(Math.random() * 4)],
            whereFrom: cities.whereFrom,
            cityFrom: cities.cityFrom,
            whereTo: cities.whereTo,
            cityTo: cities.cityTo,
            howManyPeople: howManyPeople,
            departureDate: departureDate,
            departureHour: (0, moment_1.default)().hour(Math.floor(Math.random() * 23)).minute(Math.floor(Math.random() * 60)).format('LT'),
            returnDate: roundTrip ? returnDate : '',
            returnHour: roundTrip ? (0, moment_1.default)().hour(Math.floor(Math.random() * 23))
                .minute(Math.floor(Math.random() * 60)).format('LT') : '',
        };
        response.push(trip);
    }
    return response;
};
exports.builderResponse = builderResponse;
