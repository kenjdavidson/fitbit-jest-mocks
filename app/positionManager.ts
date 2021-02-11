import { geolocation, PositionError } from "geolocation";

export class PositionManager {
  watchId?: number;

  constructor() {}

  startup = () =>
    (this.watchId = geolocation.watchPosition(this.onPosition, this.onError));
  shutdown = () => this.watchId && geolocation.clearWatch(this.watchId);

  onPosition = (position: Position) =>
    console.log(`Got Position: `, JSON.stringify(position.coords));
  onError = (error: PositionError) =>
    console.log(`Position Error: `, JSON.stringify(error));
}
