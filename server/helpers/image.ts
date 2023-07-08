import { Rembg } from "rembg-node";
import sharp from "sharp";

export const removeBg = async (url) => {
  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());

  const input = sharp(buffer);

  // Optional arguments
  const rembg = new Rembg({
    logging: true,
  });

  const output = await rembg.remove(input);
  return output.webp().toBuffer();

  //   await output.webp().toFile("test-output.webp");
};
