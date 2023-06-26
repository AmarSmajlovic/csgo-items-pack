const classicColors = [
  { name: "red", hex: "#FF0000" },
  { name: "green", hex: "#00FF00" },
  { name: "blue", hex: "#0000FF" },
  { name: "yellow", hex: "#FFFF00" },
  { name: "cyan", hex: "#00FFFF" },
  { name: "magenta", hex: "#FF00FF" },
  { name: "black", hex: "#000000" },
  { name: "brown", hex: "#A52A2A" },
];

function roundToClassicColor(hexCode, threshold = 150) {
  hexCode = hexCode.replace("#", "");

  if (hexCode === "fff" || hexCode === "ffffff") {
    return "white";
  }

  const red = parseInt(hexCode.substring(0, 2), 16);
  const green = parseInt(hexCode.substring(2, 4), 16);
  const blue = parseInt(hexCode.substring(4, 6), 16);

  let closestColor = "";
  let closestDistance = Infinity;

  for (const color of classicColors) {
    const colorHexMatches = color.hex.match(/[A-Za-z0-9]{2}/g);
    if (colorHexMatches) {
      const [r, g, b] = colorHexMatches.map((value) => parseInt(value, 16));
      const distance = Math.sqrt(
        (r - red) ** 2 + (g - green) ** 2 + (b - blue) ** 2
      );

      if (distance < closestDistance && distance <= threshold) {
        closestDistance = distance;
        closestColor = color.name;
      }
    }
  }

  if (closestColor === "") {
    // Return default classic color when no match is found
    closestColor = "gray";
  }

  return closestColor;
}
