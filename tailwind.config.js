/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        womenFashion: "url('https://6424709.fs1.hubspotusercontent-na1.net/hub/6424709/hubfs/hero-1-1.png?width=2000&height=700&name=hero-1-1.png')",
        gentsWeek: "url('https://i0.wp.com/www.menstylefashion.com/wp-content/uploads/2021/05/Latinx-fashion-men.jpg?fit=900%2C580&ssl=1')",
        kidsColor: "url('https://cdn.shopify.com/s/files/1/0475/7179/6123/files/TILE-2_bedca20b-202c-4eff-aaac-6dfe783e320f.jpg?v=1654534999')"
      }
    },
  },
  plugins: [],
}
