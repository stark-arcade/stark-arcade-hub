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

const SubmitGamePage = () => {
  const ListInfoBeforeSubmit = [
    'Have you come up with a game and want to present it to us?',
    'Fill in the form below and attach a video (maximum 3 minutes without music in English) explaining the general principle and mechanics of the game and showing its material',
    'Unfortunately we no longer accept prototypes sent by mail or submitted during game events.We will try to reply to you within two to three weeks maximum',
    'If we are interested in the project, we will ask you for further information',
    'f not, we will not keep any of the data concerning it.',
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      backgroundImage={`url('/assets/arts/art_submit_form.svg')`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Container maxWidth="container.md" py={20}>
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
            fontWeight="700"
            gap={2}
            color="white"
          >
            Submitting
            <Text variant="gradient_text">games</Text>
          </Box>
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
            leftIcon={
              <Icon
                as={ArrowIcon}
                transform={`${isOpen}?rotate(180deg):none`}
              />
            }
          >
            {isOpen ? 'Policy' : 'Submit a game'}
          </Button>
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <SubmitGameForm cancelSubmit={onClose} />
        </Collapse>
      </Container>
    </Box>
  );
};

export default SubmitGamePage;
