export const initialize: <T>(
  settings: T,
  callback: (newSettings: T) => void
) => void = jest.fn(<T>(settings: T, callback: (settings: T) => void) => {
  callback(settings);
});
