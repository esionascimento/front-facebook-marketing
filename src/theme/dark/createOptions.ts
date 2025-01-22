import type { ThemeOptions } from "@mui/material/styles/createTheme";

import type { ColorPreset, Contrast } from "..";
import { createComponents } from "./createComponents";
import { createPalette } from "./createPalette";
import { createShadows } from "./createShadows";

interface Config {
  colorPreset?: ColorPreset;
  contrast?: Contrast;
}

export const createOptions = (config: Config): ThemeOptions => {
  const { colorPreset, contrast } = config;
  const palette = createPalette({ colorPreset, contrast });
  const components = createComponents({ palette });
  const shadows = createShadows();

  return {
    components,
    palette,
    shadows,
  };
};
