declare global {
  interface Window {
    dataLayer?: Object[];
    [key: string]: any;
  }
}

export type GoogleMapsEmbed = {
  height?: number | string;
  width?: number | string;
  mode: "place" | "view" | "directions" | "streetview" | "search";
  apiKey: string;
  style?: string;
  allowfullscreen?: boolean;
  loading?: "eager" | "lazy";
  q?: string;
  id?: string;
  center?: string;
  zoom?: string;
  maptype?: string;
  language?: string;
  region?: string;
  title?: string;
};
