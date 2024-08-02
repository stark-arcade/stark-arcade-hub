/* eslint-disable no-unused-vars */
import { Box, Icon, Input } from '@chakra-ui/react';
import React from 'react';

import EditIcon from '@/public/assets/icons/editing.svg';
interface IProps {
  imageFile: File | undefined;
  setImageFile: (file: Partial<File | undefined>) => void;
}
const UploadImage = ({ imageFile, setImageFile }: IProps) => {
  const handleUpload = (file: FileList | null) => {
    if (file) {
      setImageFile(file[0]);
    }
  };
  return (
    <>
      <Box
        position="relative"
        width="fit-content"
        cursor="pointer"
        role="group"
      >
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
        <Icon
          //   display={imageFile ? 'none' : 'block'}
          as={EditIcon}
          height={10}
          width={10}
          color="primary.gray.600"
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
        />
      </Box>
    </>
  );
};

export default UploadImage;
