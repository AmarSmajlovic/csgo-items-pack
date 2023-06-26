"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const skinsprice_json_1 = __importDefault(require("./public/skinsprice.json"));
const cleanedData = {};
for (const name in skinsprice_json_1.default) {
    const cleanedName = name.replace(/\((.*?)\)/g, "").trim();
    cleanedData[cleanedName] = skinsprice_json_1.default[name];
}
const jsonData = JSON.stringify(cleanedData, null, 2);
const filePath = "./public/skinsprice.json";
fs.writeFile(filePath, jsonData, "utf8", (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    }
    else {
        console.log("File updated or created successfully!");
    }
});
