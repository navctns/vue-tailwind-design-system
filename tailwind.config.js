/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#03045e',
        secondary:'#023e8a',
        third:'#0077b6',
        fourth:'#0096c7',
        fifth:'#00b4d8',
        sixth:'#90e0ef',
        seventh:'#ade8f4',
        eighth:'#caf0f8',
        light: '#F3F4F6',       // Light background color for contrast
        dark: '#111827', 
      },
      spacing:{
        'btn-xs': '0.125rem', // Small button padding
        'btn-xs-x': '0.25rem', // Small button padding
        'btn-sm': '0.25rem', // Small button padding
        'btn-sm-x': '1rem', // Small button padding
        'btn-md': '0.5rem',   // Medium button padding
        'btn-lg': '0.45rem', // Large button padding
        'btn-lg-x': '1.45rem', // Large button padding
        'btn-xl': '0.45rem',  // Extra-large button padding
      },
      borderRadius: {
        'btn-sm': '0.25rem', // Small button border radius
        'btn-md': '0.5rem',  // Medium button border radius
        'btn-lg': '0.75rem', // Large button border radius
        'btn-xl': '1rem',    // Extra-large button border radius
      },
    },
  },
  plugins: [],
}

