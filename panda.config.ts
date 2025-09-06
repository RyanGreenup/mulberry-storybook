import { defineConfig } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";
import { DaisyPreset } from "./src/mulberry/presets/daisy/daisy";
import layoutPreset from "./src/mulberry/presets/layout/layout";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [pandaPreset, DaisyPreset, layoutPreset],

  // Enable JSX generation
  jsxFramework: "solid",

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  outExtension: "js",
  // The output directory for your css system
  outdir: "styled-system",
});
