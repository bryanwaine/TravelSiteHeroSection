/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const safelist = [
    'bg-[rgba(58,5,25,0.7)]',
    'backdrop-blur-md',
    'backdrop-blur-xl',
    'bg-opacity-30',
    'border',
    'border-[rgba(165,56,96,0.4)]',
  'bg-pink-800',
  'hover:bg-pink-400',
  'text-white',
  'font-semibold',
    'py-2',
    'px-4',
  'rounded',
  'transition-colors',
  'duration-150'
  ];
export const theme = {
  extend: {},
};
export const plugins = [];
