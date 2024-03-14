// app/resume/page.tsx
import FullWidthWrapper from "@/components/full-width-wrapper";
import SliderGallery from "@/components/slider";
import VitaAccordion from "@/components/vita-accordion";
import { Resume, Slider } from "@/lib/interfaces";
import { client } from "@/sanity/lib/client";

async function fetchContent<T>(query: string): Promise<T | null> {
  try {
    const result: T = await client.fetch(query);
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const resumeQuery = `
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

const sliderQuery = `
  *[_type == 'gallery']{
    imagesGallery[] 
  }
`;

async function fetchResume() {
  return fetchContent<Resume[]>(resumeQuery);
}

async function fetchSlider() {
  return fetchContent<Slider[]>(sliderQuery);
}

export async function Fetches() {
  const [resume, sliders] = await Promise.all([fetchResume(), fetchSlider()]);
  return { resume: resume || [], sliders: sliders || [] }; // Stellt Standardwerte bereit, falls null zurückgegeben wird
}

export default async function ResumePage() {
  const data = await Fetches();
  const resume: Resume[] = data.resume;
  const sliders: Slider[] = data.sliders;
  console.log(resume);
  console.log(sliders);
  return (
    <div className="pt-20">
      <section>
        <FullWidthWrapper className="py-10">
          <SliderGallery />
        </FullWidthWrapper>
      </section>
      <section className="border-t border-border bg-accent grid gap-3">
        <h1 className="text-4xl border-b pb-2 m-5 font-bold mx-auto">Vita</h1>
        <FullWidthWrapper className="pb-10">
          <VitaAccordion vitas={resume} />
        </FullWidthWrapper>{" "}
      </section>
    </div>
  );
}
