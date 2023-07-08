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
const removeBg = () => __awaiter(void 0, void 0, void 0, function* () {
    const imageUrl = "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aa_flames_light_large.dd140c3b359c16ccd8e918ca6ad0b2628151fe1c.png"; // Replace with the URL of your image
    const response = yield fetch(imageUrl);
    const buffer = Buffer.from(yield response.arrayBuffer());
    const input = (0, sharp_1.default)(buffer);
    // Optional arguments
    const rembg = new rembg_node_1.Rembg({
        logging: true,
    });
    const output = yield rembg.remove(input);
    return output;
    //   await output.webp().toFile("test-output.webp");
});
exports.removeBg = removeBg;
