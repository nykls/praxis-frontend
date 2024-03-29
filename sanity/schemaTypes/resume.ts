import { validation } from "sanity";

export default {
  name: "resume",
  type: "document",
  title: "Resume",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "avatar",
      type: "image",
      title: "Bild",
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
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
              type: "date",
              title: "Abschlussjahr",
              options: {
                dateFormat: "YYYY",
              },
            },
          ],
        },
      ],
    },
    {
      name: "training",
      type: "array",
      title: "Fortbildungen",
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
          ],
        },
      ],
    },
  ],
};
