module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
      //   "modules": "auto",
        "targets": {
          "browsers": "> 1%"
        },
      //   "useBuiltIns": "entry",
      //   "corejs": { "version": 3, "proposals": true },
      //   "forceAllTransforms": true,
      //   "debug": false,
      }
    ],
  ]
}