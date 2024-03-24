import React, {Fragment, useState} from 'react';
import ProductInputPicture from 'components/ProductInputPicture';
import {Container} from './styles';
import {MinimizedPicture} from './styles';


type key = 0 | 1 | 2 | 3 | 4;

interface Props {
  pictures: Map<key, string>
  setPictures?: React.Dispatch< React.SetStateAction<Map<key, string>>>
  onNewImageUpload?: (pictures: Map<key, string>) => void
  disableEditMode?: boolean
}


const ProductImages: React.FC<Props> = ({
  pictures,
  setPictures,
  disableEditMode,
}) => {
  const [control, setControl] = useState<key>(0);

  return (
    <Container>

      <ProductInputPicture
        gridRow='1 / 2'
        gridCol='1 / 6'
        disableEditMode={disableEditMode}
        defaultImage={pictures.get(control)}
        onImageUpload={(image) =>
          setPictures && setPictures(new Map(pictures.set(control, image)))
        }
      />

      { disableEditMode ?
        pictures.size > 1 &&
        Array.from(pictures.entries()).map(([key, value], index) => {
          return (
            <MinimizedPicture
              key={index}
              disableEditMode={disableEditMode}
              onClick={() => setControl(key as key)}
              picture={value}
            />
          );
        }) : (
        <Fragment>

          <ProductInputPicture
            disableEditMode={disableEditMode}
            onImageUpload={(image) => {
              setPictures && setPictures(new Map(pictures.set(0, image)));
              setControl(0);
            }}
            defaultImage={pictures.get(0)}
          />

          <ProductInputPicture
            disableEditMode={disableEditMode}
            onImageUpload={(image) => {
              setPictures && setPictures(new Map(pictures.set(1, image)));
              setControl(1);
            }}
            defaultImage={pictures.get(1)}
          />

          <ProductInputPicture
            disableEditMode={disableEditMode}
            onImageUpload={(image) => {
              setPictures && setPictures(new Map(pictures.set(2, image)));
              setControl(2);
            }}
            defaultImage={pictures.get(2)}
          />

          <ProductInputPicture
            disableEditMode={disableEditMode}
            onImageUpload={(image) => {
              setPictures && setPictures(new Map(pictures.set(3, image)));
              setControl(3);
            }}
            defaultImage={pictures.get(3)}
          />

          <ProductInputPicture
            disableEditMode={disableEditMode}
            onImageUpload={(image) => {
              setPictures && setPictures(new Map(pictures.set(4, image)));
              setControl(4);
            }}
            defaultImage={pictures.get(4)}
          />
        </Fragment>
       )}
    </Container>
  );
};

export default ProductImages;
