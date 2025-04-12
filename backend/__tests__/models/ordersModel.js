let mockOrders = [];

export const readOrders = jest.fn(() => [...mockOrders]);
export const writeOrders = jest.fn((orders) => {
  mockOrders = [...orders];
});

export const clearMocks = () => {
  mockOrders = [];
  readOrders.mockClear();
  writeOrders.mockClear();
};