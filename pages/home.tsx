import { MapCarousel } from "../src/components/Block/MapCarousel/MapCarousel";
import { FormBlock } from "../src/components/Block/FormBlock/FormBlock";
import { AgentsBlock } from "../src/components/Block/AgentsBlock/AgentsBlock";

const Home = (): JSX.Element => {
  return (
    <>
      <AgentsBlock />
      <MapCarousel />
      <FormBlock />
    </>
  );
};

export default Home;
