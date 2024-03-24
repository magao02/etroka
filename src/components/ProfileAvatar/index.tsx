import React from 'react';
import convertFileToBase64 from 'util/image';

import {Container} from './styles';
import {InputImage} from './styles';
import {BiImageAdd} from 'react-icons/bi';

interface Props {
  onImageUpload?: (image: string) => void;
}

const ProfileAvatar: React.FC<Props> = ({onImageUpload}) => {
  const [imageBased64, setImageBased64] = React.useState<string>();

  // eslint-disable-next-line require-jsdoc
  async function handleChangeInputFile(newFile: any) {
    if (newFile) {
      const fileBase64 = await convertFileToBase64(newFile);
      setImageBased64(fileBase64);
      onImageUpload && onImageUpload(fileBase64);
    }
  }

  return (
    <Container avatar={imageBased64} >
      { !imageBased64 && <BiImageAdd />}
      <InputImage
        type="file"
        accept="image/x-png,image/jpeg"
        onChange={(e: any) => {
          handleChangeInputFile(e.target.files[0]);
          e.target.files = null;
        }}
      />
    </Container>
  );
};

export default ProfileAvatar;
