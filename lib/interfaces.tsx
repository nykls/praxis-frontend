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
  name: string;
  motto: string;
  education: {
    title: string;
    institution: string;
    years: { start: string; end: string };
  }[];
  avatar: string;
  _id: string;
}

export interface Slider {
  imagesGallery: string;
}
