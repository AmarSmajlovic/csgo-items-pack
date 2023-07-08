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
exports.removeBg = void 0;
const rembg_node_1 = require("rembg-node");
const sharp_1 = __importDefault(require("sharp"));
// const { Rembg } = require("rembg-node");
// const sharp = require("sharp");
// const fetch = require("node-fetch");
const removeBg = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const buffer = Buffer.from(yield response.arrayBuffer());
    const input = (0, sharp_1.default)(buffer);
    // Optional arguments
    const rembg = new rembg_node_1.Rembg({
        logging: true,
    });
    const output = yield rembg.remove(input);
    return output.webp().toBuffer();
    //   await output.webp().toFile("test-output.webp");
});
exports.removeBg = removeBg;
