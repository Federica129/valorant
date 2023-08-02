import { BoxProps } from "@chakra-ui/react";
import { AutoplayOptionsType, AutoplayType } from "embla-carousel-autoplay";

export interface CarouselProps {
  content: Record<string, unknown>[];
  options?: Record<string, unknown>;
  sizeSlide?: string | number;
  slideMapper: (props: {
    slide: any;
    isActiveSlide?: boolean;
    index: number;
  }) => JSX.Element;
  containerProps?: BoxProps;
  plugins?: any;
}
