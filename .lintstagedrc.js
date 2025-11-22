module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) =>
    filenames
      .filter((file) => !file.includes("convex/_generated"))
      .flatMap((file) => [`eslint --fix ${file}`, `prettier --write ${file}`]),
  "*.{json,md,yml,yaml,css,scss}": (filenames) =>
    filenames
      .filter((file) => !file.includes("convex/_generated"))
      .map((file) => `prettier --write ${file}`),
};
