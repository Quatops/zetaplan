module.exports = function (webpackEnv) {
  // ...
  return {
    // ...
    resolve: {
      // ...
      fallback: {
        // 👇️👇️👇️ add this 👇️👇️👇️
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
      },
    },
  };
};
