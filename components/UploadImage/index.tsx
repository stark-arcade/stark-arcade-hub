/* eslint-disable no-unused-vars */
import { Box, HStack, Icon, Input, Text } from '@chakra-ui/react';
import React from 'react';

import EditIcon from '@/public/assets/icons/editing.svg';
import FileIcon from '@/public/assets/icons/file.svg';
interface IProps {
  imageFile: File | undefined;
  label: string;
  setImageFile: (file: Partial<File | undefined>) => void;
}
const UploadImage = ({ imageFile, setImageFile, label }: IProps) => {
  const handleUpload = (file: FileList | null) => {
    if (file) {
      setImageFile(file[0]);
    }
  };
  return (
    <>
      <Input
        type="file"
        position="absolute"
        top={0}
        width="full"
        left={0}
        inset="0"
        variant="unstyled"
        opacity={0}
        onChange={event => handleUpload(event.target.files)}
      />
      <HStack
        cursor="pointer"
        display={imageFile ? 'none' : 'flex'}
        _hover={{
          opacity: 0.8,
        }}
      >
        <Icon as={FileIcon} height={8} width={8} />
        <Text fontSize="xs" fontWeight={600} color="shader.600">
          {label}
        </Text>
      </HStack>

      {/* <Icon
          //   display={imageFile ? 'none' : 'block'}
          as={EditIcon}
          height={10}
          width={10}
          color="primary.gray.600"
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
        /> */}
    </>
  );
};

export default UploadImage;
