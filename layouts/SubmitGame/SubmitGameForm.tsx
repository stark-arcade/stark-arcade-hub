import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
  Image,
  Flex,
  Collapse,
} from '@chakra-ui/react';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import CloseIcon from '@/public/assets/icons/logout.svg';
import UploadImage from '@/components/UploadImage';
import { Switch } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { axiosHandlerNoBearer } from '@/config/axiosConfig';
import { imageWidthAndHeight, uploadFileIPFS } from '@/utils/helper';
import { CONTRACT_ADDRESS } from '@/utils/constants';
interface IGameSubmitProps {
  name: string;
  email: string;
  shortDescription: string;
  longDescription: string;
  gameUrl: string;
  banner: any;
  logo: any;
  sourceUrl: string;
  tokens?: string[];
  totalSupply?: number;
}
interface IProps {
  cancelSubmit: () => void;
}
declare module 'yup' {
  interface MixedSchema {
    fileSize(width: number, height: number, message: string): this;
    imageDimensionCheck(
      message: string,
      requiredWidth: number,
      requiredHeight: number
    ): this;
  }
}

const SubmitGameForm = ({ cancelSubmit }: IProps) => {
  const inititalValues: IGameSubmitProps = {
    name: '',
    shortDescription: '',
    longDescription: '',
    email: '',
    gameUrl: '',
    banner: undefined,
    logo: undefined,
    sourceUrl: '',
    tokens: [CONTRACT_ADDRESS.STRK, CONTRACT_ADDRESS.ETH],
    totalSupply: 0,
  };
  Yup.addMethod(Yup.mixed, 'fileRequired', function (message) {
    return this.test('fileRequired', message, function (value) {
      const { path, createError } = this;
      if (!value) {
        return createError({ path, message });
      }
      return true;
    });
  });

  const imageDimensionCheck: any = Yup.addMethod(
    Yup.mixed,
    'imageDimensionCheck',
    function (message, requiredWidth, requiredHeight) {
      return this.test(
        'image-width-height-check',
        message,
        function (value: any) {
          const { path, createError } = this;

          if (!value) {
            return;
          }

          const imgDimensions: any = imageWidthAndHeight(value);

          if (imgDimensions.width !== requiredWidth) {
            return createError({
              path,
              message: `The file width needs to be ${requiredWidth}px!`,
            });
          }

          if (imgDimensions.height !== requiredHeight) {
            return createError({
              path,
              message: `The file height needs to be ${requiredHeight}px!`,
            });
          }

          return true;
        }
      );
    }
  );

  const validationSchema = Yup.object({
    name: Yup.string().required('Game name is required'),
    shortDescription: Yup.string().required('Short description is required'),
    longDescription: Yup.string().required('Long description is required'),
    gameUrl: Yup.string().required('Game url is required'),
    logo: (Yup as any).mixed().fileRequired('Game avatar is required'),
    banner: (Yup as any).mixed().fileRequired('Game banner is required'),
    sourceUrl: Yup.string().required('Link source game is required'),
    totalSupply: Yup.number(),
  });

  const handleSubmitGame = useMutation({
    mutationFn: async (form: any) => {
      const { data } = await axiosHandlerNoBearer.post(
        '/starkarcade-hub/submit-game',
        form
      );
      return data;
    },
    onError: () => {},
  });

  const formik = useFormik({
    initialValues: inititalValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      const dataLogoIPFS = await uploadFileIPFS(formik.values.logo);
      const dataBannerIPFS = await uploadFileIPFS(formik.values.banner);
      handleSubmitGame.mutate({
        ...values,
        banner: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${dataBannerIPFS}`,
        logo: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${dataLogoIPFS}`,
      });
    },
  });
  const {
    isOpen: isAdvance,
    onClose: onCloseAdvance,
    onToggle: onToggleAdvance,
  } = useDisclosure();

  return (
    <Box px={4}>
      <form onSubmit={formik.handleSubmit}>
        <VStack gap={6}>
          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.name && formik.errors.name)}
          >
            <FormLabel>Game Name</FormLabel>
            <Input
              variant="primary"
              type="text"
              placeholder="Ex: Starkarcade"
              id="name"
              value={formik.values.name}
              onChange={e => {
                formik.handleChange(e);
                // updateFields({
                //   name: e.target.value,
                // });
              }}
            />
            {formik.touched.name && formik.errors.name && (
              <FormErrorMessage>
                <Text> {formik.errors.name as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isInvalid={!!(formik.touched.name && formik.errors.name)}
            isRequired
          >
            <FormLabel>Email Team</FormLabel>
            <Input
              variant="primary"
              type="text"
              id="email"
              placeholder="Ex: starkarcade@gmail.com"
              value={formik.values.email}
              onChange={e => {
                formik.handleChange(e);
                // updateFields({
                //   email: e.target.value,
                // });
              }}
            />
            {formik.touched.email && formik.errors.email && (
              <FormErrorMessage>
                <Text> {formik.errors.email as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.name && formik.errors.name)}
          >
            <FormLabel>Short Description</FormLabel>
            <Input
              variant="primary"
              type="text"
              id="shortDescription"
              placeholder="Ex: Short Description"
              value={formik.values.shortDescription}
              onChange={e => {
                formik.handleChange(e);
                // updateFields({
                //   shortDescription: e.target.value,
                // });
              }}
            />
            {formik.touched.shortDescription &&
              formik.errors.shortDescription && (
                <FormErrorMessage>
                  <Text> {formik.errors.shortDescription as any}</Text>
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isInvalid={
              !!(
                formik.touched.longDescription && formik.errors.longDescription
              )
            }
            isRequired
          >
            <FormLabel>Long Description</FormLabel>

            <Textarea
              placeholder="Ex: LongDescription"
              variant="primary"
              id="longDescription"
              value={formik.values.longDescription}
              onChange={e => {
                formik.handleChange(e);
                // updateFields({
                //   longDescription: e.target.value,
                // });
              }}
            />
            {formik.touched.longDescription &&
              formik.errors.longDescription && (
                <FormErrorMessage>
                  <Text> {formik.errors.longDescription as any}</Text>
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.name && formik.errors.name)}
          >
            <FormLabel>Game URL</FormLabel>
            <Input
              variant="primary"
              type="text"
              id="gameUrl"
              placeholder="Ex: Starkarcade"
              value={formik.values.gameUrl}
              onChange={e => {
                formik.handleChange(e);
                // updateFields({
                //   gameUrl: e.target.value,
                // });
              }}
            />
            {formik.touched.gameUrl && formik.errors.gameUrl && (
              <FormErrorMessage>
                <Text> {formik.errors.gameUrl as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.sourceUrl && formik.errors.sourceUrl)}
          >
            <FormLabel>Link Source Game</FormLabel>
            <Input
              variant="primary"
              type="text"
              id="sourceUrl"
              placeholder="Ex: Link Source Game"
              value={formik.values.sourceUrl}
              onChange={e => {
                formik.handleChange(e);
                // updateFields({
                //   sourceUrl: e.target.value,
                // });
              }}
            />
            {formik.touched.sourceUrl && formik.errors.sourceUrl && (
              <FormErrorMessage>
                <Text> {formik.errors.sourceUrl as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.logo && formik.errors.logo)}
          >
            <FormLabel>Game Avatar (300x300)</FormLabel>
            <Box
              padding={6}
              borderRadius="24px"
              background="shader.800"
              width="fit-content"
              position="relative"
              cursor="pointer"
              role="group"
            >
              {formik.values.logo && (
                <Image
                  src={URL.createObjectURL(formik.values.logo)}
                  h={300}
                  w={300}
                  objectFit="cover"
                  borderRadius="lg"
                  alt="Game Avatar"
                />
              )}

              <UploadImage
                imageFile={formik.values.logo}
                label="Game Logo"
                setImageFile={file => {
                  formik.handleChange({
                    target: { id: 'logo', value: file },
                  });
                  // updateFields({ logo: file });
                }}
              />
            </Box>

            {formik.touched.logo && formik.errors.logo && (
              <FormErrorMessage>
                <Text> {formik.errors.logo as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.banner && formik.errors.banner)}
          >
            <FormLabel>Game Banner (1920x400)</FormLabel>
            <Box
              padding={6}
              borderRadius="24px"
              background="shader.800"
              width="fit-content"
              position="relative"
              cursor="pointer"
              role="group"
            >
              {formik.values.banner && (
                <Image
                  src={URL.createObjectURL(formik.values.banner)}
                  objectFit="contain"
                  alt="Game Banner"
                  height={400}
                  borderRadius="lg"
                  width={1920}
                />
              )}
              <UploadImage
                imageFile={formik.values.banner}
                label="Game Banner"
                setImageFile={file => {
                  formik.handleChange({
                    target: { id: 'banner', value: file },
                  });
                }}
              />
            </Box>

            {formik.touched.banner && formik.errors.banner && (
              <FormErrorMessage>
                <Text> {formik.errors.banner as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>

          <Flex flexDirection="column" width="full" gap={4}>
            {/* <Text
              onClick={() => {
                onToggleAdvance();
              }}
            >
              Advanced (token if any)
            </Text> */}
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="advance" mb="0">
                Advanced (token if any)
              </FormLabel>
              <Switch id="advance" onChange={onToggleAdvance} />
            </FormControl>

            <Collapse in={isAdvance} animateOpacity>
              <FormControl
                variant="submit_game"
                isInvalid={!!(formik.touched.name && formik.errors.name)}
              >
                <FormLabel>Total Supply</FormLabel>
                <Input variant="primary" type="text" placeholder="Ex: 100" />
                {formik.touched.totalSupply && formik.errors.totalSupply && (
                  <FormErrorMessage>
                    <Text> {formik.errors.totalSupply as any}</Text>
                  </FormErrorMessage>
                )}
              </FormControl>
            </Collapse>
          </Flex>

          <HStack>
            <Button
              leftIcon={<Icon as={CloseIcon} />}
              variant="primary"
              onClick={() => cancelSubmit()}
            >
              Cancel
            </Button>
            <Button
              variant="gradient_100"
              type="submit"
              leftIcon={<Icon as={ArrowIcon} transform={'rotate(180deg)'} />}
            >
              Submit Game
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
};

export default SubmitGameForm;
