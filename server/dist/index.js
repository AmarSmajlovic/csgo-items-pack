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
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const express = require("express");
const app = express();
const port = 3000;
// MongoDB connection URL
const url = "mongodb+srv://amarcsgo:HNKG2p8UBqFLnV8X@cluster0.ze49hhq.mongodb.net/?retryWrites=true&w=majority";
// Database name
const dbName = "csgo-skins";
// Define a route for /skins
app.get("/skins", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new mongodb_1.MongoClient(url);
        yield client.connect();
        const db = client.db(dbName);
        const skins = yield db.collection("skins").find().toArray();
        console.log(skins.length);
        res.json(skins);
    }
    catch (error) {
        console.error("Error retrieving skins:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
app.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json"); // Replace with the actual API endpoint
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
