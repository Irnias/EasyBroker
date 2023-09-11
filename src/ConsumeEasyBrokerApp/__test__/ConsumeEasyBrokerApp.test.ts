import { ConsumeEasyBrokerApp } from "../ConsumeEasyBrokerApp";
import { EXPECTED_CONTENT } from "../__mock__/EXPECTED_CONTENT";

describe("ConsumeEasyBrokerApp should", () => {
  test("call paginated api should return properties ", async () => {
    process.env.TEST_API_KEY = "l7u502p8v46ba3ppgvj5y2aad50lb9";
    const c = new ConsumeEasyBrokerApp();
    const page = 1;
    const limit = 20;
    const res = await c.getProperties(page, limit);
    expect(res).toEqual(EXPECTED_CONTENT);
  });
});
