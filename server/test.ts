import { Rembg } from "rembg-node";
import sharp from "sharp";

// const { Rembg } = require("rembg-node");
// const sharp = require("sharp");
// const fetch = require("node-fetch");

export const removeBg = async () => {
  const imageUrl =
    "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aa_flames_light_large.dd140c3b359c16ccd8e918ca6ad0b2628151fe1c.png"; // Replace with the URL of your image

  const response = await fetch(imageUrl);
  const buffer = Buffer.from(await response.arrayBuffer());

  const input = sharp(buffer);

  // Optional arguments
  const rembg = new Rembg({
    logging: true,
  });

  const output = await rembg.remove(input);
  return output;

  //   await output.webp().toFile("test-output.webp");
};
