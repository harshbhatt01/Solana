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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.transferSol = void 0;
var web3_js_1 = require("@solana/web3.js");
var airdrop_1 = require("../Airdrop/airdrop");
var showBalance_1 = require("../ShowBalance/showBalance");
var transferSol = function (from, to, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var connection, transaction, instruction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                connection = new web3_js_1.Connection("https://api.devnet.solana.com", 'confirmed');
                transaction = new web3_js_1.Transaction();
                instruction = web3_js_1.SystemProgram.transfer({
                    fromPubkey: from.publicKey,
                    toPubkey: to,
                    lamports: web3_js_1.LAMPORTS_PER_SOL * amount
                });
                transaction.add(instruction);
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [
                        from
                    ])];
            case 1:
                _a.sent();
                console.log("Done");
                return [2 /*return*/];
        }
    });
}); };
exports.transferSol = transferSol;
var secret = Uint8Array.from([
    253, 209, 191, 74, 139, 40, 192, 182, 70, 56, 155,
    111, 46, 158, 166, 46, 146, 132, 18, 60, 55, 84,
    142, 212, 207, 72, 126, 111, 224, 197, 234, 5, 44,
    121, 204, 15, 155, 212, 137, 48, 160, 60, 88, 94,
    241, 126, 6, 111, 140, 20, 105, 97, 19, 192, 16,
    167, 128, 252, 223, 189, 80, 218, 204, 251
]);
var fromKeyPair = web3_js_1.Keypair.fromSecretKey(secret);
var toPublicKey = new web3_js_1.PublicKey("Bm3w9ThERbZ1K38qZVr63sU1bvrDH6RAQZ751RyHHrz5");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var initBalance, initBalanceTo, initBalance2, initBalanceTo2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, airdrop_1.airdrop)(fromKeyPair.publicKey, 2)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, showBalance_1.showBalance)(fromKeyPair.publicKey)];
            case 2:
                initBalance = _a.sent();
                console.log("Initial balance of from wallet is ".concat(initBalance));
                return [4 /*yield*/, (0, showBalance_1.showBalance)(toPublicKey)];
            case 3:
                initBalanceTo = _a.sent();
                console.log("Initial balance of to wallet is ".concat(initBalanceTo));
                return [4 /*yield*/, (0, exports.transferSol)(fromKeyPair, toPublicKey, 1)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, showBalance_1.showBalance)(fromKeyPair.publicKey)];
            case 5:
                initBalance2 = _a.sent();
                console.log("Post balance of from wallet is ".concat(initBalance2));
                return [4 /*yield*/, (0, showBalance_1.showBalance)(toPublicKey)];
            case 6:
                initBalanceTo2 = _a.sent();
                console.log("Post balance of to wallet is ".concat(initBalanceTo2));
                return [2 /*return*/];
        }
    });
}); })();
