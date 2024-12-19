/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
			mobile: { max: "980px" },
			desktop: { min: "980px" },
		},
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
