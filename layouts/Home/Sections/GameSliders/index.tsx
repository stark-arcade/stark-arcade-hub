import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ListGame } from '@/data/game';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import LaunchIcon from '@/public/assets/icons/launch.svg';
import Link from 'next/link';

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
    <Box className="slider-container" pt={12}>
      {sliderRef != null && (
        <Slider ref={(slider: any) => (sliderRef = slider)} {...settings}>
          {ListGame.map((game, index) => (
            <Box key={`Game-${game.name}`}>
              <Grid
                key={game.name}
                templateColumns={{
                  lg: 'repeat(2, 1fr)',
                  base: 'repeat(1, 1fr)',
                }}
                gap={4}
              >
                <GridItem
                  backgroundImage={`url(${game.banner})`}
                  backgroundRepeat="no-repeat"
                  backgroundPosition="center"
                  objectFit="contain"
                  backgroundSize="cover"
                  height={{
                    md: 'full',
                    base: 300,
                  }}
                  borderRadius="24px"
                ></GridItem>
                <GridItem>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bg="shader.800"
                    padding={{ md: 8, base: 6 }}
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
                    {game.link && (
                      <Link href={game.link} target="_blank">
                        <Button
                          variant="primary"
                          width="fit-content"
                          bg="primary.500"
                          leftIcon={<Icon as={LaunchIcon} h={6} w={6} />}
                        >
                          Play
                        </Button>
                      </Link>
                    )}
                  </Flex>
                  <Flex
                    padding={6}
                    bg="shader.800"
                    borderRadius="24px"
                    gap={4}
                    display={{ md: 'flex', base: 'none' }}
                    flexWrap="wrap"
                  >
                    {index !== ListGame.length - 1 && (
                      <Image
                        src={ListGame[index + 1].banner}
                        alt={game.name}
                        height={197}
                        width={197}
                      />
                    )}
                    {index === ListGame.length - 1 && (
                      <Image
                        src={ListGame[0].banner}
                        alt={game.name}
                        height={197}
                        width={197}
                      />
                    )}

                    <Box
                      bg="shader.700"
                      padding={8}
                      flexGrow={1}
                      borderRadius="24px"
                    >
                      <Text fontSize="24px" fontWeight="700">
                        Next
                      </Text>
                      {index !== ListGame.length - 1 && (
                        <Text fontSize="28px" fontWeight="bold">
                          {ListGame[index + 1].name}
                        </Text>
                      )}
                      {index == ListGame.length - 1 && (
                        <Text fontSize="28px" fontWeight="bold">
                          {ListGame[0].name}
                        </Text>
                      )}
                    </Box>
                  </Flex>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Slider>
      )}

      {/* <Box style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </Box>
  );
};

export default GameSliders;
