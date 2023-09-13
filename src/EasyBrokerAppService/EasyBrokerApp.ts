import { propertiesFromSDKRepresentation } from "../Adapter/PropertiesFromSDKRepresentation";
import { Property } from "../Entity/Property";

export interface GetAllPropertiesProps {
  page: string;
  limit: string;
}

export class EasyBrokerApp {
  private sdk: any;
  constructor(sdk: any, apikey: string) {
    this.sdk = sdk;
    this.sdk.auth(apikey);
  }

  async getAllProperties(): Promise<Property[]> {
    let nextPage = 1;
    let res: Property[] = [];
    let page = 1;
    const LIMIT = 50;
    try {
      while (nextPage !== null) {
        const current = await this.sdk.getProperties({
          page: page,
          limit: LIMIT,
        });
        res.push(...propertiesFromSDKRepresentation(current));
        nextPage = current.data?.pagination?.next_page ?? null;
        page++;
        await this.safeApiWait(page);
      }
      return res;
    } catch (e) {
      if (e?.data?.error) {
        throw new Error(e.data.error);
      }
      throw new Error(
        "Unhandled Error, please rise a ticket to our customer support",
      );
    }
  }

  private safeApiWait(page: number): Promise<void> {
    if (page % 10 === 0) {
      setTimeout(() => {
        return Promise.resolve();
      }, 1000);
    }
    return Promise.resolve();
  }
}
