import { validation } from "sanity";

export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "resume" }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // Maximale Länge des Slugs
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "") // Entfernt nicht-alphanumerische Zeichen
            .slice(0, 200),
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "publishedAt",
      type: "date",
      title: "Published at",
      initialValue: () => new Date().toISOString(),
      options: {
        dateFormat: "DD-MM-YYYY",
      },
      hidden: true,
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
  orderings: [
    {
      title: "Published Date",
      name: "publishedAt",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
