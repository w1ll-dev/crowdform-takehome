module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@styles": "./src/styles",
            "@providers": "./src/components/providers",
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@types": "./src/types",
          },
        },
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
