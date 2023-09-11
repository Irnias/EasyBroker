import { propertiesFromSDKRepresentation } from "../Adapter/PropertiesFromSDKRepresentation";
import { Property } from "../Entity/Property";

export interface GetAllPropertiesProps {
  page: string;
  limit: string;
}

export class EasyBrokerApp {
  private sdk: any;
  constructor(apikey: string) {
    this.sdk = require("api")("@easybroker-staging/v1.0#32afigk2plm5b3e8d");
    this.sdk.auth(apikey);
  }
  async getAllProperties(options: GetAllPropertiesProps): Promise<Property[]> {
    try {
      return propertiesFromSDKRepresentation(
        await this.sdk.getProperties(options),
      );
    } catch (e) {
      if (e?.data?.error) {
        throw new Error(e.data.error);
      }
      throw new Error(
        "Unhandled Error, please rise a ticket to our customer support",
      );
    }
  }
}
