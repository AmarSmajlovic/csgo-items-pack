const fs = require("fs");
import data from "./public/skinsprice.json";

const cleanedData = {};

for (const name in data) {
  const cleanedName = name.replace(/\((.*?)\)/g, "").trim();
  cleanedData[cleanedName] = data[name];
}

const jsonData = JSON.stringify(cleanedData, null, 2);
const filePath = "./public/skinsprice.json";

fs.writeFile(filePath, jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File updated or created successfully!");
  }
});
