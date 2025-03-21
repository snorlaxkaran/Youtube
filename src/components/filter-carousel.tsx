"use client";

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect?: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({
  value,
  isLoading,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelect,
  data,
}: FilterCarouselProps) => {
  return (
    <div className="relative w-full">
      {/* Left Fade */}
      <div
        className={cn(
          "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"
        )}
      />
      <Carousel
        opts={{ align: "start", dragFree: true }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          <CarouselItem className="pl-3 basis-auto">
            <Badge
              className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
              variant={value === null ? "default" : "secondary"}
            >
              All
            </Badge>
          </CarouselItem>
          {!isLoading &&
            data.map((item) => (
              <CarouselItem key={item.value} className="pl-3 basis-auto">
                <Badge
                  className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                  variant={value === null ? "default" : "secondary"}
                >
                  {item.label}
                </Badge>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>
      {/* Right Fade */}
      <div
        className={cn(
          "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-transparent to-white pointer-events-none"
        )}
      />
    </div>
  );
};
