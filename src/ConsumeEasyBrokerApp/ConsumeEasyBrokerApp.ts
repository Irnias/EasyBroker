import { EasyBrokerApp } from "../EasyBrokerAppService/EasyBrokerApp";

export class ConsumeEasyBrokerApp {
  private _easyBrokerApp: EasyBrokerApp;

  constructor() {
    this._easyBrokerApp = new EasyBrokerApp(process.env.TEST_API_KEY);
  }

  getProperties = async (page: number, limit: 20) => {
    return await this._easyBrokerApp.getAllProperties({
      page: page.toString(),
      limit: limit.toString(),
    });
  };
}
