import React, { Component } from 'react';
import Profile from 'assets/images/profile.png';
import styled from 'styled-components';
import NextImage from 'next/image';

const OImageType = {
  profile: 'PROFILE',
  post: 'POST',
} as const;

type ImageType = typeof OImageType[keyof typeof OImageType];

export interface ImageProps {
  imageType: ImageType;
  borderRadius?: string;
  width?: string;
  height?: string;
  alt?: string;
  layout?: 'fixed' | 'intrinsic' | 'fill' | 'responsive' | 'raw';
}

const ImageStyled = styled(NextImage)<ImageProps>`
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
`;

class Image extends Component<ImageProps> {
  renderElement(props: ImageProps) {
    switch (props.imageType) {
      case OImageType.profile:
        return <ImageStyled src={Profile} {...props} />;

      default:
        console.error('Image Props 확인');
    }
  }

  render() {
    return this.renderElement(this.props);
  }
}

export default Image;
