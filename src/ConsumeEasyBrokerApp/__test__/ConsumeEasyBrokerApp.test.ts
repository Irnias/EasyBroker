import { ConsumeEasyBrokerApp } from "../ConsumeEasyBrokerApp";
import { EXPECTED_CONTENT } from "../__mock__/EXPECTED_CONTENT";
import { Property } from "../../Entity/Property";

describe("ConsumeEasyBrokerApp should", () => {
  test("call paginated api should return properties ", async () => {
    process.env.TEST_API_KEY = "l7u502p8v46ba3ppgvj5y2aad50lb9";
    const c = new ConsumeEasyBrokerApp();
    const propertyMock: Property[] = EXPECTED_CONTENT;
    c.getAllProperties = jest.fn().mockReturnValue(propertyMock);

    const res: Property[] = await c.getAllProperties();
    expect(res).toEqual(EXPECTED_CONTENT);
  });
});
