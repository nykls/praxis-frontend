// app/resume/page.tsx
import FullWidthWrapper from "@/components/full-width-wrapper";
import SliderGallery from "@/components/slider";
import VitaAccordion from "@/components/vita-accordion";

export default async function ResumePage() {
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
          <VitaAccordion />
        </FullWidthWrapper>{" "}
      </section>
    </div>
  );
}
