"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _http_1 = __importDefault(require("../_http"));
class Role {
    constructor(data, gid) {
        this.gid = gid;
        Object.assign(this, Object.assign(Object.assign({}, data), { permissions: parseInt(data.permissions) }));
    }
    /**
     *
     * @param gid guild id
     * @param data
     * @returns
     */
    modify(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return new Role(yield _http_1.default.PATCH(`/guilds/${this.gid}/roles/${this.id}`, JSON.stringify(Object.assign(Object.assign({}, data), { permissions: (_a = data.permissions) === null || _a === void 0 ? void 0 : _a.toString() }))), this.gid);
        });
    }
    setPosition(position) {
        return _http_1.default.PATCH(`/guilds/${this.gid}/roles`, JSON.stringify({ position, id: this.id }));
    }
    delete() {
        return _http_1.default.DELETE(`/guilds/${this.gid}/roles/${this.id}`);
    }
}
exports.default = Role;
//# sourceMappingURL=Role.js.map