"use strict";

const path = require('path');
var Toil = require(path.join(__dirname, '../models/toil'));

var createToil = function (req, res) {

    var toil = new Toil(req.body);
    console.log("Toil Req", req.body);
    toil.save(function (err, toilData) {
        if (err) { res.status(500).send({ err: err }); }
        res.status(200).send({ toil: toilData });
    });

}

var getToil = function (req, res) {
    Toil.find(function (err, toilData) {
        if (err) { res.status(500).send({ err: err }) }
        res.status(200).send({ toil: toilData });
    });
}


module.exports = {
    createToil,
    getToil
}