import { ConsumeEasyBrokerApp } from "./ConsumeEasyBrokerApp/ConsumeEasyBrokerApp";

process.env.TEST_API_KEY = "l7u502p8v46ba3ppgvj5y2aad50lb9";
async function logResultTitles() {
  const c = new ConsumeEasyBrokerApp();
  const res = await c.getProperties(1, 20);
  console.log(res.map((r: { title: string }) => r.title));
}
logResultTitles();
