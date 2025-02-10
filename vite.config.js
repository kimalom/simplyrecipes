import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugin: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        recipes: resolve(__dirname, 'pages/recipes.html'),
        singleRecipe: resolve(__dirname, 'pages/single-recipe.html'),
        tagTemplate: resolve(__dirname, 'pages/tag-template.html'),
        tags: resolve(__dirname, 'pages/tags.html'),
        error: resolve(__dirname, 'pages/404.html'),
      },
    },
  },
});
