import { useMemo } from "react";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { createOptions as createBaseOptions } from "./base/createOptions";
import { createOptions as createDarkOptions } from "./dark/createOptions";
import typography from "./typography";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface Palette {
    neutral: ColorRange;
  }

  interface PaletteColor {
    lightest?: string;
    darkest?: string;
    alpha4?: string;
    alpha8?: string;
    alpha12?: string;
    alpha30?: string;
    alpha50?: string;
  }

  interface PaletteOptions {
    neutral?: ColorRange;
  }

  interface TypeBackground {
    paper: string;
    default: string;
  }
}

export type ColorPreset = "blue";

export type Contrast = "normal" | "high";

export type PaletteMode = "dark" | "light";

export default function ThemeProvider({ children }: any) {
  const themeOptions: ThemeOptions = useMemo(
    () => (
      createBaseOptions(),
      createDarkOptions({
        colorPreset: "blue",
        contrast: "normal",
      }),
      {
        typography: typography,
      }
    ),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
