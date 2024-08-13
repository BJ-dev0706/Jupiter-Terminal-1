module.exports = function override(config, env) {
  config.ignoreWarnings = [
    {
      module: /source-map-loader/,
      message: /Failed to parse source map/,
    },
  ];
  return config;
};