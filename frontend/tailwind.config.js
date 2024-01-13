
 
module.exports ={
  content: ["./index.html", "./src/**/*.{js,ts,jsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      darkMode: 'class', 
      colors: {
        'primary': '#0c6b79', 
        'secondary': '#d7544e',
        'icons': '#7f7f7f',
        'offwhite': '#f3f3f3',
        'white': '#fff',
        'dark': '#000',
         // Add as many custom colors as you like
        },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
};


