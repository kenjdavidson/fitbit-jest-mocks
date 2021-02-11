import * as deviceSettings from "simple-fitbit-settings/app";

export class Settings {
  settingOne: true;
  settingTwo: false;
}

export class SettingsManager {
  constructor(settings: Settings) {
    deviceSettings.initialize(settings, this.onUpdate);
  }

  onUpdate = (settings: Settings) => {
    console.log(settings);
  };
}
