import { Settings, SettingsManager } from "./settingsManager";
import * as deviceSettings from "simple-fitbit-settings/app";

test("initializes correctly", () => {
  const manager = new SettingsManager(new Settings());

  expect(deviceSettings.initialize).toHaveBeenCalledTimes(1);
});
