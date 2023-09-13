import { EasyBrokerApp } from "../EasyBrokerApp";

const TEST_API_KEY: string = "l7u502p8v46ba3ppgvj5y2aad50lb9";

jest.mock("api", () => () => ({
  auth: jest.fn(),
  getProperties: jest.fn(),
}));

describe("EasyBrokerAppService should", () => {
  it("be defined", async () => {
    const sdk = require("api")("@easybroker-staging/v1.0#32afigk2plm5b3e8d");
    const app = new EasyBrokerApp(sdk, TEST_API_KEY);
    expect(app).toBeDefined();
  });

  it("should return error message if api Key is not correct", async () => {
    try {
      const sdk = require("api")("@easybroker-staging/v1.0#32afigk2plm5b3e8d");
      sdk.getProperties = jest.fn(() =>
        Promise.reject({
          data: {
            error: "Your API key is invalid",
          },
        }),
      );
      const app = new EasyBrokerApp(sdk, "WRONG_TEST_API_KEY");

      await app.getAllProperties();
    } catch (e) {
      expect(e.message).toBe("Your API key is invalid");
    }
  });
});
