import { BoxProps } from "@chakra-ui/react";

export interface CarouselProps {
  content: Record<string, unknown>[];
  options?: Record<string, unknown>;
  sizeSlide?: string | Record<string, string>;
  slideMapper: (props: {
    slide: any;
    isActiveSlide?: boolean;
    index: number;
  }) => JSX.Element;
  containerProps?: BoxProps;
  plugins?: any;
  showButtons?: boolean;
}
