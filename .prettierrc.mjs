/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 140,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
