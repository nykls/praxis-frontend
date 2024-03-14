import { client } from "@/sanity/lib/client";

const options = {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
};

async function fetchPost() {
  try {
    const query = `
    *[_type == 'post']{
      title,
      slug,
      author->{
        name,
        avatar,
      },
      body,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
      image,
      publishedAt,
      _id,
    }
    `;
    const posts = await client.fetch(query);
    return posts;
  } catch (err) {
    console.error(err);
  }
}

async function fetchResume() {
  try {
    const query = `
    *[_type == 'resume']{
      name,
      motto,
      avatar,
      "education": education[]{
        title,
        institution,
        years,
      },
      _id,
    }
    `;
    const resumes = await client.fetch(query);
    return resumes;
  } catch (err) {
    console.error(err);
  }
}

async function fetchSlider() {
  try {
    const query = `
    *[_type == 'gallery']{
      imagesGallery[] {
        asset->{
          url,
        }
      }
    }
    `;
    const gallery = await client.fetch(query);
    return gallery[0].imagesGallery;
  } catch (err) {
    console.error(err);
  }
}

export async function Fetches(type: "posts" | "resume" | "slider") {
  // Benutze Promise.all, um alle Anfragen parallel auszuführen
  const [posts, resumes, sliders] = await Promise.all([
    fetchPost(),
    fetchResume(),
    fetchSlider(),
  ]);

  // Wähle basierend auf dem `type`-Parameter das entsprechende Ergebnis aus
  switch (type) {
    case "posts":
      return posts;
    case "resume":
      return resumes;
    case "slider":
      return sliders;
    default:
      throw new Error(`Unbekannter Typ: ${type}`);
  }
}

// export default async function Fetches(type: "posts" | "resume" | "slider") {
//   switch (type) {
//     case "posts":
//       return await fetchPost();
//     case "resume":
//       return await fetchResume();
//     case "slider":
//       return await fetchSlider();
//   }
// }
