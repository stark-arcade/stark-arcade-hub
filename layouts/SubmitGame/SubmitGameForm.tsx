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
} from '@chakra-ui/react';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import CloseIcon from '@/public/assets/icons/logout.svg';
interface IGameSubmitProps {
  game_name: string;
  email: string;
  short_description: string;
  long_description: string;
  game_url: string;
  game_banner: any;
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
    game_banner: '',
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

          <HStack>
            <Text>Advanced (token if any)</Text>
          </HStack>

          <HStack>
            <Button variant="primary" onClick={() => cancelSubmit()}>
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
