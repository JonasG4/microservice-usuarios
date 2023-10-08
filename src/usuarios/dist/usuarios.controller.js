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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.__esModule = true;
exports.UsuariosController = void 0;
var common_1 = require("@nestjs/common");
var microservices_1 = require("@nestjs/microservices");
var constantes_1 = require("src/common/constantes");
var UsuariosController = /** @class */ (function () {
    function UsuariosController(usuariosService) {
        this.usuariosService = usuariosService;
    }
    UsuariosController.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var passwordHashed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.hashPassword(payload.clave)];
                    case 1:
                        passwordHashed = _a.sent();
                        return [4 /*yield*/, this.usuariosService.create(__assign(__assign({}, payload), { clave: passwordHashed }))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.findAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.findOne(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype.update = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.update(payload.id_usuario, payload.usuariosDTO)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService["delete"](id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype.changePassword = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var passwordHashed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.hashPassword(payload.clave)];
                    case 1:
                        passwordHashed = _a.sent();
                        return [4 /*yield*/, this.usuariosService.changePassword(payload.id_usuario, passwordHashed)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype.findByEmail = function (correo_electronico) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.findByEmail(correo_electronico)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype.findByUsername = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.findByUsername(username)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosController.prototype.validateUser = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isMatchPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosService.findByUsername(payload.usuario)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.usuariosService.validatePassword(payload.clave, user.clave)];
                    case 2:
                        isMatchPassword = _a.sent();
                        if (user && isMatchPassword)
                            return [2 /*return*/, user];
                        return [2 /*return*/, null];
                }
            });
        });
    };
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.CREATE),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "create");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.FIND_ALL)
    ], UsuariosController.prototype, "findAll");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.FIND_ONE),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "findOne");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.UPDATE),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "update");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.DELETE),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "delete");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.CHANGE_PASSWORD),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "changePassword");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.FIND_BY_EMAIL),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "findByEmail");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.FIND_BY_USERNAME),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "findByUsername");
    __decorate([
        microservices_1.MessagePattern(constantes_1.UsuariosMSG.VALIDATE_USER),
        __param(0, microservices_1.Payload())
    ], UsuariosController.prototype, "validateUser");
    UsuariosController = __decorate([
        common_1.Controller()
    ], UsuariosController);
    return UsuariosController;
}());
exports.UsuariosController = UsuariosController;