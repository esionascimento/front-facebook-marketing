import type { PaletteColor } from "@mui/material/styles/createPalette";

import type { ColorPreset } from ".";
import { blue } from "./colors";

export const getPrimary = (preset?: ColorPreset): PaletteColor => {
  switch (preset) {
    case "blue":
      return blue;

    default:
      console.error('Invalid color preset, accepted values: "blue".');
      return blue;
  }
};
