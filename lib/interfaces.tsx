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
  education: Array<any>;
  training: Array<any>;
  avatar: {
    image: string;
    hotspot: string;
  };
  lqip: string;
  _id: string;
}

export interface SliderImage {
  _id: string;
  placeholder: string;
}

export interface Slider {
  images: SliderImage[];
}
