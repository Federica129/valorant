import { Box, Flex } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselProps } from "./Carousel.props";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const Carousel = (props: CarouselProps) => {
  const {
    content,
    options,
    sizeSlide = "0 0 60%",
    slideMapper,
    containerProps,
    plugins,
    showButtons = false,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [slide, setSlide] = useState(0);

  const getCurrentSlide = useCallback(() => {
    if (!emblaApi) return;
    setSlide(emblaApi.selectedScrollSnap()); // Access API
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", getCurrentSlide);

    return () => {
      emblaApi.off("select", getCurrentSlide);
    };
  }, [emblaApi, getCurrentSlide]);

  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const isCurrentSlide = useCallback(
    (index: number) => slide === index,
    [slide]
  );

  const styleButtons = {
    bg: "#ece8e157",
    borderRadius: "full",
    transform: "scale(3)",
    cursor: "pointer",
  };

  return (
    <Box position="relative">
      {showButtons && (
        <Flex
          position="absolute"
          zIndex={1}
          top="50%"
          w="100%"
          justifyContent="space-between"
          px="2rem"
          color="blue"
          display={{ base: "none", md: "flex" }}
        >
          <ChevronLeftIcon onClick={prev} {...styleButtons} />
          <ChevronRightIcon onClick={next} {...styleButtons} />
        </Flex>
      )}

      <Box ref={emblaRef} overflow="hidden" margin={0}>
        <Flex w="100%" {...containerProps}>
          {content?.map((slide, index) => (
            <Box key={index} flex={sizeSlide}>
              <Box>
                {slideMapper({
                  slide,
                  index,
                  isActiveSlide: isCurrentSlide(index),
                })}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
