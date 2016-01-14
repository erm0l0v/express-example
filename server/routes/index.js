'use strict';
var express = require('express');

var db = require('../db');

module.exports = function (staticDir) {
    var router = express.Router();

    router.use(express.static(staticDir));

    router.get('/', function (req, res) {
        var collection = db.get().collection('comments');

        collection.find().toArray(function (err, docs) {
            res.json({comments: docs});
        });
    });

    return router;
};
