import NewsCard from "@/components/news-card";
import { CardSkeleton } from "@/components/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Aktuelles",
  description: "Aktuelle Neuigkeiten",
  keywords: "Aktuelles, Neuigkeiten, News",
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  return (
    <Suspense fallback={<CardSkeleton />}>
      <NewsCard page={currentPage} />
    </Suspense>
  );
}
