export interface Post {
  title: string;
  slug: { current: string };
  author: { name: string; avatar: string };
  publishedAt: string;
  body: Array<any>;
  excerpt: string;
  _id: string;
}

export interface Resume {
  crop(crop: any): unknown;
  name: string;
  motto: string;
  education: {
    title: string;
    institution: string;
    years: { start: string; end: string };
  }[];
  avatar: {
    image: string;
    hotspot: string;
  };
  _id: string;
}

interface SliderImageAsset {
  _ref: string;
  _type: "reference";
}

export interface SliderImage {
  _type: "image";
  _key: string;
  asset: SliderImageAsset;
}

export interface Slider {
  images: SliderImage[];
  crop: any;
}
