import { bucket } from "./storage";

export const web = new sst.aws.StaticSite("Web", {
  // build: {},
});
