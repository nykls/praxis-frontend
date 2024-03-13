"use client";

import { Hero } from "@/components/hero";
import Perks from "@/components/perks";

export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
    </>

    // <section className="">
    //   <FullWidthWrapper className="py-10">
    //     <div>{/* <Slider /> */}</div>
    //   </FullWidthWrapper>
    // </section>
  );
}
