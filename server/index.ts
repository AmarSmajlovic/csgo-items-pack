import express from "express";
import { MongoClient } from "mongodb";
const express = require("express");

const app = express();
const port = 3000;

// MongoDB connection URL
const url =
  "mongodb+srv://amarcsgo:HNKG2p8UBqFLnV8X@cluster0.ze49hhq.mongodb.net/?retryWrites=true&w=majority";
// Database name
const dbName = "csgo-skins";

// Define a route for /skins
app.get("/skins", async (req, res) => {
  try {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);

    const skins = await db.collection("skins").find().toArray();
    console.log(skins.length);
    res.json(skins);
  } catch (error) {
    console.error("Error retrieving skins:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/test", async (req, res) => {
  try {
    const response = await fetch(
      "https://bymykel.github.io/CSGO-API/api/en/skins.json"
    ); // Replace with the actual API endpoint
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
