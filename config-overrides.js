const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@hoc": "src/hoc",
    "@pages": "src/pages",
    "@store": "src/store",
    "@constants": "src/constants",
    "@configs": "src/configs",
  })(config);

  return config;
};
