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
} from '@chakra-ui/react';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import CloseIcon from '@/public/assets/icons/logout.svg';
import UploadImage from '@/components/UploadImage';
interface IGameSubmitProps {
  game_name: string;
  email: string;
  short_description: string;
  long_description: string;
  game_url: string;
  game_banner: any;
  game_avatar: any;
  link_source_game: string;
  token_name?: string;
  token_symbol?: string;
  total_supply?: number;
}
interface IProps {
  cancelSubmit: () => void;
}
const SubmitGameForm = ({ cancelSubmit }: IProps) => {
  const inititalValues: IGameSubmitProps = {
    game_name: '',
    short_description: '',
    long_description: '',
    email: '',
    game_url: '',
    game_banner: undefined,
    game_avatar: undefined,
    link_source_game: '',
    token_name: '',
    token_symbol: '',
    total_supply: 0,
  };
  const [form, setForm] = React.useState(inititalValues);
  const validationSchema = Yup.object({
    game_name: Yup.string().required('Game name is required'),
    short_description: Yup.string().required('Short description is required'),
    long_description: Yup.string().required('Long description is required'),
    game_url: Yup.string().required('Game url is required'),
    game_banner: Yup.string().required('Game banner is required'),
    link_source_game: Yup.string().required('Link source game is required'),
    token_name: Yup.string(),
    token_symbol: Yup.string(),
    total_supply: Yup.number(),
  });
  function updateFields(fields: Partial<IGameSubmitProps>) {
    setForm(prev => {
      return { ...prev, ...fields };
    });
  }
  const formik = useFormik({
    initialValues: form,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('Formik', values);
    },
  });
  const { isOpen: isAdvance, onClose: onCloseAdvance } = useDisclosure();

  return (
    <Box px={4}>
      <form onSubmit={formik.handleSubmit}>
        <VStack gap={6}>
          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.game_name && formik.errors.game_name)}
          >
            <FormLabel>Game Name</FormLabel>
            <Input
              variant="primary"
              type="text"
              placeholder="Ex: Starkarcade"
            />
            {formik.touched.game_name && formik.errors.game_name && (
              <FormErrorMessage>
                <Text> {formik.errors.game_name as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isInvalid={!!(formik.touched.game_name && formik.errors.game_name)}
            isRequired
          >
            <FormLabel>Email Team</FormLabel>
            <Input
              variant="primary"
              type="text"
              placeholder="Ex: starkarcade@gmail.com"
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
            isInvalid={!!(formik.touched.game_name && formik.errors.game_name)}
          >
            <FormLabel>Short Description</FormLabel>
            <Input
              variant="primary"
              type="text"
              placeholder="Ex: Short Description"
            />
            {formik.touched.short_description &&
              formik.errors.short_description && (
                <FormErrorMessage>
                  <Text> {formik.errors.short_description as any}</Text>
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isInvalid={!!(formik.touched.game_name && formik.errors.game_name)}
            isRequired
          >
            <FormLabel>Long Description</FormLabel>

            <Textarea placeholder="Ex: LongDescription" variant="primary" />
            {formik.touched.long_description &&
              formik.errors.long_description && (
                <FormErrorMessage>
                  <Text> {formik.errors.long_description as any}</Text>
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl
            variant="submit_game"
            isRequired
            isInvalid={!!(formik.touched.game_name && formik.errors.game_name)}
          >
            <FormLabel>Game URL</FormLabel>
            <Input
              variant="primary"
              type="text"
              placeholder="Ex: Starkarcade"
            />
            {formik.touched.game_url && formik.errors.game_url && (
              <FormErrorMessage>
                <Text> {formik.errors.game_url as any}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl variant="submit_game" position="relative">
            <FormLabel>Game Media Kit</FormLabel>
            <HStack>
              <Box>
                {form.game_avatar && (
                  <Image
                    src={URL.createObjectURL(form.game_avatar)}
                    objectFit="cover"
                    alt="Game Avatar"
                  />
                )}
                <UploadImage
                  imageFile={form.game_avatar}
                  setImageFile={file => {
                     updateFields({ game_avatar: file });
                  }}
                />
              </Box>
              <Box>
                {form.game_banner && (
                  <Image
                    src={URL.createObjectURL(form.game_banner)}
                    objectFit="cover"
                    alt="Game Banner"
                  />
                )}
                <UploadImage
                  imageFile={form.game_banner}
                  setImageFile={file => updateFields({ game_banner: file })}
                />
              </Box>
            </HStack>
          </FormControl>
          <Flex flexDirection="column" width="full" gap={4}>
            <Text>Advanced (token if any)</Text>
            <FormControl
              variant="submit_game"
              isRequired
              isInvalid={
                !!(formik.touched.game_name && formik.errors.game_name)
              }
            >
              <FormLabel>Token Name</FormLabel>
              <Input
                variant="primary"
                type="text"
                placeholder="Ex: Starkarcade"
              />
              {formik.touched.token_name && formik.errors.token_name && (
                <FormErrorMessage>
                  <Text> {formik.errors.token_name as any}</Text>
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              variant="submit_game"
              isRequired
              isInvalid={
                !!(formik.touched.game_name && formik.errors.game_name)
              }
            >
              <FormLabel>Token Symbol</FormLabel>
              <Input
                variant="primary"
                type="text"
                placeholder="Ex: Token Symbol"
              />
              {formik.touched.token_symbol && formik.errors.token_symbol && (
                <FormErrorMessage>
                  <Text> {formik.errors.token_symbol as any}</Text>
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              variant="submit_game"
              isRequired
              isInvalid={
                !!(formik.touched.game_name && formik.errors.game_name)
              }
            >
              <FormLabel>Total Supply</FormLabel>
              <Input variant="primary" type="text" placeholder="Ex: 100" />
              {formik.touched.total_supply && formik.errors.total_supply && (
                <FormErrorMessage>
                  <Text> {formik.errors.total_supply as any}</Text>
                </FormErrorMessage>
              )}
            </FormControl>
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
