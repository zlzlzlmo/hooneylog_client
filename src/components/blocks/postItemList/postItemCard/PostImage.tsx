import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface PostImageProps {
  width: string;
  src: string;
  alt: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PostImage = ({ src, alt }: PostImageProps) => {
  return (
    <Container>
      <Image src={src} alt={alt} layout="fill" />
    </Container>
  );
};

export default PostImage;
