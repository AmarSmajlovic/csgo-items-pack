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
const mongodb_1 = require("mongodb");
const helpers_1 = require("../helpers");
const skinsprice_json_1 = __importDefault(require("../public/skinsprice.json"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient("mongodb+srv://amarcsgo:HNKG2p8UBqFLnV8X@cluster0.ze49hhq.mongodb.net/?retryWrites=true&w=majority");
        yield client.connect();
        const db = client.db("csgo-skins");
        const response = yield fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json");
        const skins = yield response.json();
        const uniqueNames = new Set();
        for (const item of skins) {
            const name = (0, helpers_1.skinNameConverter)(item.name, item.category);
            // Check if the name is already present in the set
            if (!uniqueNames.has(name)) {
                uniqueNames.add(name);
                const priceData = skinsprice_json_1.default[name];
                console.log((0, helpers_1.customRound)(priceData.steam.last_30d));
                yield db.collection("test-skins").updateOne({ name }, {
                    $setOnInsert: {
                        name,
                        images: {
                            steam: item.image,
                        },
                        preview: null,
                        price: priceData,
                        color: 2,
                    },
                }, { upsert: true });
            }
        }
        console.log("Added skins to the database");
        process.exit(0);
    });
}
init();
