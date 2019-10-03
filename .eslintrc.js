module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "prettier/react"],
  plugins: ["prettier", "react", "react-hooks"],
  env: { "browser": true, "node": true, "jest": true, "es6": true },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 100,
        "tabWidth": 2,
        "useTabs": false,
        "semi": false,
        "singleQuote": true,
        "trailingComma": "all"
      },
    ],
    "react/prop-types": 0
  }
}
