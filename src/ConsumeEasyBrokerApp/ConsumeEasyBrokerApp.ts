import { EasyBrokerApp } from "../EasyBrokerAppService/EasyBrokerApp";
import { Property } from "../Entity/Property";

export class ConsumeEasyBrokerApp {
  private _easyBrokerApp: EasyBrokerApp;

  constructor() {
    const sdk= require("api")("@easybroker-staging/v1.0#32afigk2plm5b3e8d");;
    this._easyBrokerApp = new EasyBrokerApp(sdk, process.env.TEST_API_KEY);
  }

  getAllProperties = async (): Promise<Property[]> => {
    return await this._easyBrokerApp.getAllProperties();
  };
}
