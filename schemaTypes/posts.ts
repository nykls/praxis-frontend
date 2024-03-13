import { init } from "next/dist/compiled/webpack/webpack";
import { off } from "process";

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
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      initialValue: () => new Date().toISOString(),
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Heute",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
