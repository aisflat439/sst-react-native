/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-react-native",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    const api = await import("./infra/api");

    new sst.x.DevCommand("Mobile", {
      link: [api],
      dev: {
        autostart: true,
        directory: "packages/client",
        command: "npx expo start",
      },
      environment: {
        EXPO_PUBLIC_API_URL: api.myApi.url,
      },
    });

    return {
      api: api.myApi.url,
    };
  },
});
