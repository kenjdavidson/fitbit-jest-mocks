import { Appbit } from "appbit";

export const me: Appbit = {
  applicationId: "test-id",
  buildId: "build-id",
  launchArguments: [],
  permissions: undefined,
  appTimeoutEnabled: false,
  onunload: jest.fn(),
  exit: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};
