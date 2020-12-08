module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "reactHtmlParser",
      externals: {
        react: "React",
      },
    },
  },
};
