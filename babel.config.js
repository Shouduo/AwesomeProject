module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // presets: ['react-native'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          assets: './src/assets',
        },
      },
    ],
  ],
};
