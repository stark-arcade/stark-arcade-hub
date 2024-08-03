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
    tokens: [CONTRACT_ADDRESS.STRK],
    totalSupply: 0,
  };
  const [form, setForm] = React.useState(inititalValues);
  const validationSchema = Yup.object({
    name: Yup.string().required('Game name is required'),
    shortDescription: Yup.string().required('Short description is required'),
    longDescription: Yup.string().required('Long description is required'),
    gameUrl: Yup.string().required('Game url is required'),
    // logo: Yup.string().required('Game avatar is required'),
    // banner: Yup.string().required('Game banner is required'),
    sourceUrl: Yup.string().required('Link source game is required'),
    // totalSupply: Yup.number(),
  });
  function updateFields(fields: Partial<IGameSubmitProps>) {
    setForm(prev => {
      return { ...prev, ...fields };
    });
  }

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
    initialValues: form,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('Formik', values);
      handleSubmitGame.mutate({
        ...values,
        banner: 'https://www.starkarcade.com/',
        logo: 'https://www.starkarcade.com/',
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
                updateFields({
                  name: e.target.value,
                });
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
                updateFields({
                  email: e.target.value,
                });
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
                updateFields({
                  shortDescription: e.target.value,
                });
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
                updateFields({
                  longDescription: e.target.value,
                });
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
                updateFields({
                  gameUrl: e.target.value,
                });
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
                updateFields({
                  sourceUrl: e.target.value,
                });
              }}
            />
            {formik.touched.sourceUrl && formik.errors.sourceUrl && (
              <FormErrorMessage>
                <Text> {formik.errors.sourceUrl as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl variant="submit_game" position="relative">
            <FormLabel>Game Media Kit</FormLabel>
            <HStack>
              <Box>
                {form.logo && (
                  <Image
                    src={URL.createObjectURL(form.logo)}
                    objectFit="cover"
                    alt="Game Avatar"
                  />
                )}
                <UploadImage
                  imageFile={formik.values.logo}
                  setImageFile={file => {
                    formik.handleChange(file);
                    // updateFields({ logo: file });
                  }}
                />
              </Box>
              <Box>
                {form.banner && (
                  <Image
                    src={URL.createObjectURL(form.banner)}
                    objectFit="cover"
                    alt="Game Banner"
                  />
                )}
                <UploadImage
                  imageFile={formik.values.banner}
                  setImageFile={file => {
                    formik.handleChange(file);
                    // updateFields({ logo: file });
                  }}
                />
              </Box>
            </HStack>
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
              leftIcon={<Icon as={ArrowIcon} />}
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
