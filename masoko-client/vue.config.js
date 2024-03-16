module.exports = {
  configureWebpack: (config) => {
    config.externals = {
      "@popperjs/core": "Popper",
    };
  },
};
