import { EasyBrokerApp, GetAllPropertiesProps } from "../EasyBrokerApp";

const TEST_API_KEY: string = "l7u502p8v46ba3ppgvj5y2aad50lb9";
const GET_ALL_PROPERTIES_PROPS: GetAllPropertiesProps = {
  limit: "20",
  page: "1",
};

describe("EasyBrokerAppService should", () => {
  it("be defined", async () => {
    const app = new EasyBrokerApp(TEST_API_KEY);
    expect(app).toBeDefined();
    expect(
      await app.getAllProperties({} as GetAllPropertiesProps),
    ).toBeDefined();
  });

  it("should return all properties paginated", async () => {
    const app = new EasyBrokerApp(TEST_API_KEY);
    const res = await app.getAllProperties(GET_ALL_PROPERTIES_PROPS);
    expect(res).toBeDefined();
  });

  it("should return error message if api Key is not correct", async () => {
    try {
      const app = new EasyBrokerApp("WRONG_TEST_API_KEY");
      const res = await app.getAllProperties(GET_ALL_PROPERTIES_PROPS);
    } catch (e) {
      expect(e.message).toBe("Your API key is invalid");
    }
  });
});
