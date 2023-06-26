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
