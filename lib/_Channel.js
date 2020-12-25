"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
var unicdi_1 = require("./unicdi");
var channelType = { "text": 0, "dm": 1, "voice": 2, "groupdm": 3, "category": 4, "news": 5, "store": 6 };
var Channel = /** @class */ (function () {
    function Channel(data, token) {
        var _this = this;
        this.object = __assign({}, data);
        if (this.object.permission_overwrites) {
            this.object.permissionOverwrite = this.object.permission_overwrites;
            delete this.object.permission_overwrites;
        }
        if (this.object.user_limit) {
            this.object.userLimit = this.object.user_limit;
            delete this.object.user_limit;
        }
        if (this.object.application_id) {
            this.object.applicationId = this.object.application_id;
            delete this.object.application_id;
        }
        if (this.object.owner_id) {
            this.object.ownerId = this.object.owner_id;
            delete this.object.owner_id;
        }
        if (this.object.guild_id) {
            this.object.guildId = this.object.guild_id;
            delete this.object.guild_id;
        }
        if (this.object.parent_id) {
            this.object.parentId = this.object.parent_id;
            delete this.object.parent_id;
        }
        if (this.object.rate_limit_per_user !== undefined) {
            this.object.rateLimitPerUser = this.object.rate_limit_per_user;
            delete this.object.rate_limit_per_user;
        }
        if (this.object.last_message_id !== undefined) {
            this.object.lastMessageId = this.object.last_message_id;
            delete this.object.last_message_id;
        }
        if (this.object.last_pin_timestamp) {
            this.object.lastPinTimestamp = this.object.last_pin_timestamp;
            delete this.object.last_pin_timestamp;
        }
        this.token = token;
        Object.defineProperty(this.object, "edit", { enumerable: false, writable: true });
        this.object.edit = function (name, type, obj) {
            if (type === void 0) { type = "text"; }
            return __awaiter(_this, void 0, void 0, function () {
                var data, path, d, c, channel;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = { name: name, type: channelType[type] !== undefined ? channelType[type] : "text" };
                            (obj === null || obj === void 0 ? void 0 : obj.position) ? data.position = obj.position : 0;
                            (obj === null || obj === void 0 ? void 0 : obj.nsfw) ? data.nsfw = obj.nsfw : 0;
                            (obj === null || obj === void 0 ? void 0 : obj.permissions) ? data.permission_overwrites = obj.permissions : 0;
                            (obj === null || obj === void 0 ? void 0 : obj.userLimit) ? data.user_limit = obj.userLimit : 0;
                            (obj === null || obj === void 0 ? void 0 : obj.category) ? data.parent_id = obj.category : 0;
                            path = "/api/v8/channels/" + this.object.id;
                            d = JSON.stringify(data);
                            return [4 /*yield*/, unicdi_1.uncidiOther("PATCH", path, this.token, d)];
                        case 1:
                            c = _a.sent();
                            channel = new Channel(c, this.token);
                            return [2 /*return*/, channel];
                    }
                });
            });
        };
        Object.defineProperty(this.object, "delete", { enumerable: false, writable: true });
        this.object.delete = function () { return __awaiter(_this, void 0, void 0, function () {
            var result, channel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, unicdi_1.uncidiDel("/api/v8/channels/" + this.object.id, this.token)];
                    case 1:
                        result = _a.sent();
                        channel = new Channel(result, this.token);
                        return [2 /*return*/, channel];
                }
            });
        }); };
        Object.defineProperty(this.object, "isText", { enumerable: false, writable: true });
        this.object.isText = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.object.type === "text") {
                    return [2 /*return*/, true];
                }
                else {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        }); };
        Object.defineProperty(this.object, "toString", { enumerable: false, writable: true });
        this.object.toString = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.object.id) {
                    return [2 /*return*/, "<#" + this.object.id + ">"];
                }
                return [2 /*return*/];
            });
        }); };
    }
    Channel.prototype.getObj = function () {
        return this.object;
    };
    return Channel;
}());
exports.Channel = Channel;
