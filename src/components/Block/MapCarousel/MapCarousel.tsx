import { Box } from "@chakra-ui/react";
import { Carousel } from "../../Carousel/Carousel";
import { useQuery } from "react-query";
import { GET } from "../../../../utils/api";
import { MapCard } from "../../MapCard/MapCard";
import Autoplay from "embla-carousel-autoplay";

export const MapCarousel = () => {
  const { error, data, isFetching } = useQuery({
    queryKey: ["maps"],
    queryFn: async () => await GET("maps"),
  });

  const maps = data?.data;

  return (
    <Box w="full">
      <Carousel
        content={maps}
        slideMapper={({ slide, isActiveSlide }) => (
          <MapCard
            {...slide}
            variant={isActiveSlide ? "inView" : "notInView"}
          />
        )}
        options={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        showButtons={true}
        sizeSlide={{ base: "0 0 90%", lg: "0 0 60%" }}
      />
    </Box>
  );
};
