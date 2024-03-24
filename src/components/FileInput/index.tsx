import React, {useRef, useState} from 'react';
import {Container, Image, HiddenInput} from './styles';
import cameraImage from 'assets/img/Camera.png';

interface FileInputProps {
    onFileSelect: (file: File | null) => void;
  }

  const FileInput: React.FC<FileInputProps> = ({onFileSelect}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      onFileSelect(file);

      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setSelectedImage(null);
      }
    };

    const handleBrowseClick = () => {
      fileInputRef.current?.click();
    };

    return (
        <Container onClick={handleBrowseClick}>
          {selectedImage ? (
            <Image src={selectedImage} alt="Selected" />
          ) : (
            <div onClick={handleBrowseClick}>
                <img src={cameraImage} alt="Camera" />
            </div>
          )}
          <HiddenInput
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileSelect}
          />
        </Container>
    );
};

export default FileInput;
