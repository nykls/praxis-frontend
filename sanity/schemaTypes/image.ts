export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          name: "image",
          options: {
            hotspot: true,
            metadata: [
              "blurhash", // Default: included
              "lqip", // Default: included
            ],
          },
        },
      ],
    },
  ],
};
