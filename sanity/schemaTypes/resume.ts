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
      title: "Education",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "training",
      title: "Fortbildungen",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
