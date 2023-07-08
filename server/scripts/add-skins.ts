import { MongoClient } from "mongodb";
import {
  skinNameConverter,
  customRound,
  removeBg,
  getPalette,
} from "../helpers";
import prizes from "../public/skinsprice.json";

async function init() {
  const client = new MongoClient(
    "mongodb+srv://amarcsgo:HNKG2p8UBqFLnV8X@cluster0.ze49hhq.mongodb.net/?retryWrites=true&w=majority"
  );
  await client.connect();
  const db = client.db("csgo-skins");
  const response = await fetch(
    "https://bymykel.github.io/CSGO-API/api/en/skins.json"
  );
  const skins = await response.json();
  const uniqueNames = new Set();

  for (const item of skins) {
    const name = skinNameConverter(item.name, item.category);
    const imageWithoutBg = await removeBg(item.image);
    const c = await getPalette(imageWithoutBg);
    console.log(item.image, c);

    // Check if the name is already present in the set
    if (!uniqueNames.has(name)) {
      uniqueNames.add(name);

      const priceData = prizes[name];
      console.log(customRound(priceData.steam.last_30d));
      await db.collection("test-skins").updateOne(
        { name },
        {
          $setOnInsert: {
            name,
            images: {
              steam: item.image,
            },
            preview: null,
            price: priceData, // Add the price data here
            color: 2,
          },
        },
        { upsert: true }
      );
    }
  }
  console.log("Added skins to the database");

  process.exit(0);
}

init();
