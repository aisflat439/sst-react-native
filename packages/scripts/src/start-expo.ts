import { Resource } from "sst";
import { exec } from "child_process";

console.log(`Expo running on Android and localhost:8081`);

exec(
  `cd ../client && EXPO_PUBLIC_API_URL=${Resource.MyApi.url} npx expo start --android`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);
