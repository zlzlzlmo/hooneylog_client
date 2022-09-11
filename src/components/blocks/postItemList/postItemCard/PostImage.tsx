import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface PostImageProps {
  width: string;
  src: string;
  alt: string;
}

const PostImage = ({ src, alt }: PostImageProps) => {
  return (
    <Container>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        onError={(e) => {
          const imageElement = e.target as HTMLImageElement;
          imageElement.src = '/images/default.png';
        }}
      />
    </Container>
  );
};

export default PostImage;

const Container = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
