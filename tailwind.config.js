/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         minHeight: {
            page: "calc(95vh - 2rem)",
         },
      },
   },
   plugins: [],
};
