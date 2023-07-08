"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customRound = exports.skinNameConverter = void 0;
const skinNameConverter = (name, category) => {
    if (category === "Knives") {
        return `★ ${name}`;
    }
    return name;
};
exports.skinNameConverter = skinNameConverter;
function customRound(number) {
    if (number < 0.05) {
        return 0.05;
    }
    else if (number < 1) {
        return Math.round(number * 10) / 10; // Round to 1 decimal place
    }
    else {
        return Math.round(number);
    }
}
exports.customRound = customRound;
const classicColors = [
    { name: "red", hex: "#FF0000" },
    { name: "green", hex: "#00FF00" },
    { name: "blue", hex: "#0000FF" },
    { name: "yellow", hex: "#FFFF00" },
    { name: "cyan", hex: "#00FFFF" },
    { name: "magenta", hex: "#FF00FF" },
    { name: "black", hex: "#000000" },
];
const addColors = (pattern) => {
    switch (pattern) {
        case "Gamma Doppler":
            return ["green"];
        case "Steel Disruption":
            return ["black", "gray"];
        case "Catacombs":
            return ["black", "gray"];
        case "Death Rattle":
            return ["black", "brown"];
        case "Brass":
            return ["yellow", "brown"];
        case "Franklin":
            return ["white"];
    }
};
