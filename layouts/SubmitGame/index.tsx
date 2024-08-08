'use client';
import { convertHex } from '@/utils/convertHex';
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import SubmitGameForm from './SubmitGameForm';
import SubmitIcon from '@/public/assets/icons/submitssion.svg';
const SubmitGamePage = () => {
  const ListInfoBeforeSubmit = [
    'Want to build your first game on Starknet but don’t know where to start?',
    'We offer Cairo resources, amplification, and funding support from the Starknet Foundation to bring your games to life.',
    `To apply, fill out the form below and attach a video (max 3 minutes, in English, without music) explaining the game's principles and mechanics, and showcasing its material.`,
    'If we are interested, we will request further information. If not, we will not retain any data related to your submission.',
    'Expect a response within two to three weeks',
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmited, setIsSubmited] = React.useState(false);
  return (
    <Box
      backgroundImage={`url('/assets/arts/art_submit_form.svg')`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Container maxWidth="container.md" py={20} minH="100vh">
        <VStack pos="relative" pt={10} width="full">
          <Box
            backgroundImage={`radial-gradient(closest-side, ${convertHex(
              '#E3FF74',
              1
            )} ,${convertHex('#E37C39', 1)})`}
            height={400}
            width={400}
            borderRadius="100%"
            position="absolute"
            top={-100}
            filter="blur(220px)"
          />
          <Box
            display="inline-flex"
            fontSize="40px"
            textAlign="center"
            fontWeight="800"
            gap={2}
            textTransform="uppercase"
            color="white"
          >
            BRING YOUR GAMES TO
            <Text variant="gradient_text">STARKNET</Text>
          </Box>
          <Text fontWeight="bold"> For Builders by Builders</Text>
        </VStack>
        <Collapse in={!isOpen} animateOpacity>
          {ListInfoBeforeSubmit.map((item, index) => (
            <React.Fragment key={`${index} - ${index} data information`}>
              <Text fontSize="sm" mt={5}>
                {item}
              </Text>
            </React.Fragment>
          ))}
        </Collapse>
        <Divider borderColor="shader.600" my={8} />
        <HStack justifyContent="center" width="full">
          <Button
            variant="gradient_100"
            display={isOpen ? 'none' : 'block'}
            onClick={() => onOpen()}
            leftIcon={<Icon as={ArrowIcon} />}
          >
            {'Submit a game'}
          </Button>
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          {isSubmited ? (
            <VStack>
              <Icon
                as={SubmitIcon}
                width={100}
                height={100}
                color="green.500"
              />
              <Text mt={6}>
                Thank you for applying! Please check your email for further
                information
              </Text>
            </VStack>
          ) : (
            <SubmitGameForm
              cancelSubmit={onClose}
              setIsSubmited={setIsSubmited}
            />
          )}
        </Collapse>
      </Container>
    </Box>
  );
};

export default SubmitGamePage;
