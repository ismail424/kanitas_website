import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        red: { value: "#EE0F0F" },
        brand: {
          50: { value: "#e6eef5" },
          100: { value: "#ccdceb" },
          200: { value: "#99b9d8" },
          300: { value: "#6696c4" },
          400: { value: "#3373b0" },
          500: { value: "#124075" }, // Main brand color
          600: { value: "#0e335e" },
          700: { value: "#0b2647" },
          800: { value: "#071a30" },
          900: { value: "#040d19" },
          950: { value: "#02060d" },
        },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
        // Add brand semantic tokens for proper colorPalette usage
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.50}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
})

export default createSystem(config)