// .eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json", // Important: Point ESLint to your tsconfig.json
  },
  plugins: [
    "@typescript-eslint", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier", // Integrates Prettier with ESLint
  ],
  extends: [
    "eslint:recommended", // ESLint's built-in recommended rules
    "plugin:@typescript-eslint/recommended", // Recommended rules for TypeScript
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // Additional rules requiring type information
    "prettier", // Disables ESLint rules that would conflict with Prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    node: true, // Enables Node.js global variables and Node.js scoping.
    es2022: true, // Add global variables for ES2022.
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs.
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn", // Warn on 'any' type
    "prettier/prettier": "warn", // Show Prettier problems as warnings
    // Add any project-specific rules here
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".eslintrc.js",
    ".prettierrc.js", // also ignore prettier config
    ".devcontainer/",
    ".github/",
    "AgentOps/",
  ],
};
