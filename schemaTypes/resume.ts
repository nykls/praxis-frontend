export default {
  name: "resume",
  type: "document",
  title: "Resume",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "avatar",
      type: "image",
      title: "Bild",
      options: {
        hotspot: true,
      },
    },
    {
      name: "motto",
      type: "string",
      title: "Motto",
    },
    {
      name: "education",
      type: "array",
      title: "Education",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Titel",
            },
            {
              name: "institution",
              type: "string",
              title: "Institution",
            },
            {
              name: "years",
              type: "object",
              title: "Jahre",
              fields: [
                {
                  name: "start",
                  type: "datetime",
                  title: "Startjahr",
                },
                {
                  name: "end",
                  type: "datetime",
                  title: "Endjahr",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
