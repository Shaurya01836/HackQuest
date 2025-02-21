module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'custom-purple': '0px 4px 50px rgba(70, 130, 180, 0.35)', // Updated to match new Steel Blue tone
      },
      textShadow: {
        'custom': '0px 4px 50px rgba(135, 206, 250, 0.35)', // Enhanced Light Sky Blue shadow for better text visibility
      },
      colors: {
        customDarkpurple: "#081A37",  // Deeper dark navy blue for richer contrast
        customLightPurple: "#1C86EE", // Brighter Dodger Blue for highlights
        customSemiPurple: "#5B9BD5",  // More vibrant Steel Blue for a striking background
        customPurple: "#4169E1",      // Royal Blue for a bold call-to-action button
        customBlue: "#00BFFF",        // Deep Sky Blue for dynamic headings
        customBlue2: "#AFEEEE",       // Pale Turquoise for softer accents
        customInput: "#153D73",       // Slightly lighter deep blue for better input field contrast
        customDark: "#020E1F",        // Rich dark blue for depth and balance
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('tailwindcss-textshadow')],
};
