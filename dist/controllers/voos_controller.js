"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
var acronyms_1 = require("../constants/acronyms");
var voosResposeBuilder_1 = require("../models/voosResposeBuilder");
var search = function (req, res) {
    var _a = req.body, whereFrom = _a.whereFrom, whereTo = _a.whereTo, howManyPeople = _a.howManyPeople, departureDate = _a.departureDate, returnDate = _a.returnDate, roundTrip = _a.roundTrip;
    try {
        validateAcronym(whereFrom);
        validateAcronym(whereTo);
        var response = (0, voosResposeBuilder_1.builderResponse)(whereFrom, whereTo, howManyPeople, departureDate, returnDate, roundTrip);
        res.send(response);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
exports.search = search;
function validateAcronym(acronym) {
    if (!acronyms_1.acronyms.includes(acronym)) {
        throw new Error('Sigla inválida');
    }
}
