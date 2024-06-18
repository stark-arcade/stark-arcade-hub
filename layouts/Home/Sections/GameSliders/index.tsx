import React, { useRef } from "react";
import Slider from "react-slick";
import { ListGame } from "@/data/game";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import LaunchIcon from "@/public/assets/icons/launch.svg";

const GameSliders = () => {
  let sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    fade: true,
    waitForAnimate: false,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div className="slider-container">
      {sliderRef != null && (
        <Slider ref={(slider: any) => (sliderRef = slider)} {...settings}>
          {ListGame.map((game) => (
            <Box>
              <Grid key={game.name} templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem
                  backgroundImage={`url(${game.banner})`}
                  backgroundRepeat="no-repeat"
                  objectFit="contain"
                  backgroundSize="cover"
                  borderRadius="24px"
                ></GridItem>
                <GridItem>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bg="shader.800"
                    padding={8}
                    mb={4}
                    borderRadius="24px"
                    minH={400}
                  >
                    <Box>
                      <HStack gap={3} mb={10} flexWrap="wrap">
                        {game.tags.map((t, index) => (
                          <Box
                            border="1px solid"
                            borderColor="shader.300"
                            bg="#FAFAFA33"
                            px={4}
                            color="shader.300"
                            py={1}
                            borderRadius="24px"
                            key={`${t}-${index}`}
                          >
                            {t}
                          </Box>
                        ))}
                      </HStack>
                      <Text fontSize="32px" fontWeight="700">
                        {game.name}
                      </Text>
                      <Text maxW={693}>{game.description}</Text>
                    </Box>

                    <Button
                      variant="primary"
                      width="fit-content"
                      bg="primary.500"
                      leftIcon={<Icon as={LaunchIcon} h={6} w={6} />}
                    >
                      Play
                    </Button>
                  </Flex>
                  <Flex padding={6} bg="shader.800" borderRadius="24px" gap={4}>
                    <Image
                      src={game.thumbnail}
                      alt={game.name}
                      height={197}
                      width={197}
                    />
                    <Box
                      bg="shader.700"
                      padding={8}
                      flexGrow={1}
                      borderRadius="24px"
                    >
                      <Text fontSize="24px" fontWeight="700">
                        Next
                      </Text>
                      <Text fontSize="32px">Up Comming</Text>
                    </Box>
                  </Flex>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Slider>
      )}

      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </div>
  );
};

export default GameSliders;
