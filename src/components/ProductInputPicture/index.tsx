import React, {useRef, ChangeEvent} from 'react';
import convertFileToBase64 from 'util/image';
import useNotification from 'hooks/useNotification';
import {Container} from './styles';
import {InputImage} from './styles';
import {BiImageAdd} from './styles';
import {BiImageAlt} from './styles';

interface Props {
  defaultImage?: string
  onImageUpload?: (image: string) => void;
  disableEditMode?: boolean,
  gridRow?: string,
  gridCol?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const ProductInputPicture: React.FC<Props> = ({
  defaultImage,
  onImageUpload,
  disableEditMode,
  gridCol,
  gridRow,
}: InputProps) => {
  const ref = useRef(null);
  const {errorMessage} = useNotification();

  async function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      if ( file.size / 1024 > 2048 ) {
        return errorMessage('Insira uma imagem menor que 2MB');
      }

      const image = await convertFileToBase64(file);
      onImageUpload && onImageUpload(image);
    }
  };


  return (
    <Container
      avatar={defaultImage}
      disableEditMode={disableEditMode}
      gridRow={gridRow}
      gridCol={gridCol}
    >
      { !defaultImage && disableEditMode &&
        <BiImageAlt style={{fill: '#A5A5A5'}}/>}

      { !defaultImage && !disableEditMode &&
       <BiImageAdd style={{fill: '#A5A5A5'}}/> }

      { !disableEditMode && (
        <InputImage
          ref={ref}
          type="file"
          accept="image/jpeg"
          onChange={(e) => {
            handleChangeFile(e);
            e.target.files = null;
          }}
        />
      )}
    </Container>
  );
};

export default ProductInputPicture;
