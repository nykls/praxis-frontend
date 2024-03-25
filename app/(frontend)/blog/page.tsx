import NewsCard from "@/components/news-card";
import { CardSkeleton } from "@/components/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Aktuelles",
  description: "Aktuelle Neuigkeiten",
  keywords: "Aktuelles, Neuigkeiten, News",
};

export default function Blog() {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <NewsCard />
    </Suspense>
  );
}
