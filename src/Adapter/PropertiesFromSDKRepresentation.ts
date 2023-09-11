import { Property } from "../Entity/Property";

export const propertiesFromSDKRepresentation = (
  representation: any,
): Property[] => {
  const properties = representation.data.content;
  return properties.map((r) => {
    return {
      agent: r.agent,
      bathrooms: r.bathrooms,
      bedrooms: r.bedrooms,
      location: r.location,
      parking_spaces: r.parking_spaces,
      property_type: r.property_type,
      public_id: r.public_id,
      share_commission: r.share_commission,
      show_prices: r.show_prices,
      title: r.title,
      title_image_full: r.title_image_full,
      title_image_thumb: r.title_image_thumb,
      updated_at: r.updated_at,
    } as Property;
  });
};
