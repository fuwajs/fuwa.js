"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncidiDel = exports.uncidiOther = exports.uncidiGet = void 0;
var undici_1 = require("undici");
var http = new undici_1.Client("https://discord.com");
var uncidiGet = function (path, token) {
    var promise = new Promise(function (resolve, reject) {
        http.request({ path: path, method: "GET", headers: { "Content-Type": "application/json", "Authorization": "Bot " + token } }, function (err, data) {
            if (err) {
                return reject(err);
            }
            var body = [];
            data.body.on("data", function (chunk) {
                body.push(chunk);
            });
            data.body.on("close", function () {
                var buffer = Buffer.concat(body).toString();
                var data = JSON.parse(buffer);
                resolve(data);
            });
        });
    });
    return promise;
};
exports.uncidiGet = uncidiGet;
var uncidiOther = function (method, path, token, data) {
    var promise = new Promise(function (resolve, reject) {
        http.request({ path: path, method: method, headers: { "Content-Type": "application/json", "Authorization": "Bot " + token }, body: data }, function (err, data) {
            if (err) {
                return reject(err);
            }
            var body = [];
            data.body.on("data", function (chunk) {
                body.push(chunk);
            });
            data.body.on("close", function () {
                var buffer = Buffer.concat(body).toString();
                var data = JSON.parse(buffer);
                resolve(data);
            });
        });
    });
    return promise;
};
exports.uncidiOther = uncidiOther;
var uncidiDel = function (path, token) {
    var promise = new Promise(function (resolve, reject) {
        http.request({ path: path, method: "DELETE", headers: { "Content-Type": "application/json", "Authorization": "Bot " + token } }, function (err, data) {
            if (err) {
                return reject(err);
            }
            var body = [];
            data.body.on("data", function (chunk) {
                body.push(chunk);
            });
            data.body.on("close", function () {
                var buffer = Buffer.concat(body).toString();
                var data = JSON.parse(buffer);
                resolve(data);
            });
        });
    });
    return promise;
};
exports.uncidiDel = uncidiDel;
