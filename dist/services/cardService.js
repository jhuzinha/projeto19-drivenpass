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
import * as cardFunctions from "../repositories/cardRepository.js";
import { cryptPassword, descryptPassword } from "../utils/cryptPassword.js";
export function create(card, id) {
    return __awaiter(this, void 0, void 0, function () {
        var existCard;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardFunctions.findOne(card.title, id)];
                case 1:
                    existCard = _a.sent();
                    if (existCard) {
                        throw { type: "Conflict", message: "Title alredy exists" };
                    }
                    card.password = cryptPassword(card.password);
                    card.codeSecurity = cryptPassword(card.codeSecurity.toString());
                    return [4 /*yield*/, cardFunctions.insert(__assign(__assign({}, card), { usersId: id }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export function get(id, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var card, cards, descrypcard;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, cardFunctions.getById(id)];
                case 1:
                    card = _a.sent();
                    if (!card || card.usersId !== userId) {
                        throw { type: "Not Found", message: "Not Found" };
                    }
                    card.password = descryptPassword(card.password);
                    card.codeSecurity = descryptPassword(card.codeSecurity);
                    return [2 /*return*/, card];
                case 2: return [4 /*yield*/, cardFunctions.findMany(userId)];
                case 3:
                    cards = _a.sent();
                    descrypcard = cards.map(function (item) { return { "title": item.title, "id": item.id, "isVirtual": item.isVirtual }; });
                    return [2 /*return*/, descrypcard];
            }
        });
    });
}
export function deleteById(id, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var card;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) {
                        throw { type: "Not Found", message: "Not Found" };
                    }
                    return [4 /*yield*/, cardFunctions.getById(id)];
                case 1:
                    card = _a.sent();
                    if (!card || card.usersId !== userId) {
                        throw { type: "Not Found", message: "Not Found" };
                    }
                    return [4 /*yield*/, cardFunctions.deleteById(id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}