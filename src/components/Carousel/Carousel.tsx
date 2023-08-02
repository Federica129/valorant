import { Box, Button, Flex } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselProps } from "./Carousel.props";
import { useCallback, useEffect, useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";

export const Carousel = (props: CarouselProps) => {
  const {
    content,
    options,
    sizeSlide = "0 0 80%",
    slideMapper,
    containerProps,
    plugins,
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);

  return (
    <>
      {" "}
      <Button onClick={next} />
      <Button onClick={prev} />
      <Box ref={emblaRef} overflow="hidden" margin={0}>
        <Flex w="100%" {...containerProps}>
          {content?.map((slide, index) => (
            <Box key={index} flex={sizeSlide}>
              {slideMapper({
                slide,
                index,
              })}
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};
