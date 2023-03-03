const express = require('express');
const base = express.Router();
const kind = require('../kind');
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const db = require('../database/bacteriaDatabase');
const BacteriaData = require('../database/Data');

base.get('/', async (req, res) => {
    let data = await BacteriaData.find();
    res.render('home', { kind: kind, data: data });
});

base.post('/', encoder, async (req, res) => {
    const function1 = req.body.function1;
    const function2 = req.body.function2;
    const function3 = req.body.function3;
    const function4 = req.body.function4;
    const function5 = req.body.function5;
    const function6 = req.body.function6;
    const function7 = req.body.function7;
    const allFunctions = [function1, function2, function3, function4, function5, function6, function7];

    const allTarget = req.body.target;

    const dealFunctions = (allFunctions) => {
        const functionsValue = [];
        let functions;

        for (let k = 0; k < allFunctions.length; k++) {
            if (typeof allFunctions[k] != 'undefined') {
                functionsValue.push(allFunctions[k]);
            }
        }

        for (let k = 0; k < functionsValue.length; k++) {
            if (typeof functions == 'undefined') {
                functions = `${functionsValue[k]}`;
            } else {
                functions = `${functions},${functionsValue[k]}`
            }
        }
        return functions;
    }

    const dealTarget = (allTarget) => {
        let target;
        if (typeof allTarget == 'string') {
            return allTarget;
        } else {
            for (let k = 0; k < allTarget.length; k++) {
                if (typeof target == 'undefined') {
                    target = `${allTarget[k]}`;
                } else {
                    target = `${target},${allTarget[k]}`
                }
            }
            return target;
        }
    }

    const name = req.body.name;
    const purpose = req.body.purpose;
    const specise = req.body.specise;
    const functions = dealFunctions(allFunctions);
    const resource = req.body.resource;
    const target = dealTarget(allTarget);
    const reference = req.body.reference;
    const ps = req.body.ps;

    const data = new BacteriaData({
        name: name,
        purpose: purpose,
        specise: specise,
        function: functions,
        resource: resource,
        target: target,
        reference: reference,
        ps: ps
    });

    try {
        data.save();
        res.redirect('/');

    } catch (err) {
        console.log(err);
    }

});

module.exports = base;