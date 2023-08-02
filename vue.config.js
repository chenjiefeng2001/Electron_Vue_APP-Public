module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("wasm")
      .test(/\.wasm$/)
      .type("typescript/auto");
  },
};
