import { geolocation } from "geolocation";
import { PositionManager } from "./positionManager";

test("geolocation initialized", () => {
  const manager = new PositionManager();
  manager.startup();

  expect(geolocation.watchPosition).toHaveBeenCalledTimes(1);
  expect(manager.watchId).not.toBeUndefined();
});

test("geolocation shutdown", () => {
  const manager = new PositionManager();
  manager.startup();
  manager.shutdown();

  expect(geolocation.watchPosition).toHaveBeenCalledTimes(1);
  expect(geolocation.clearWatch).toHaveBeenCalledTimes(1);
});
