"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesProps {
  categoryId?: string;
}
export const CategoriesSection = ({ categoryId }: CategoriesProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategoriesProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return <FilterCarousel value={categoryId} data={data} />;
};
