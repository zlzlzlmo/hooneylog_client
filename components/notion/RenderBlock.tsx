/* eslint-disable default-case */
/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-cycle */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RenderBlock = ({ block }: any) => {
  const { type, id } = block;
  const value = block[type];

  if (
    type.indexOf('heading') !== -1 ||
    type === 'paragraph' ||
    type === 'bulleted_list_item' ||
    type === 'numbered_list_item' ||
    type === 'code' ||
    type === 'quote'
  ) {
    if (value.rich_text.length < 1) {
      return <p />;
    }

    const { plain_text, annotations, href } = value.rich_text[0];
    switch (type) {
      case 'paragraph':
        return <p>{href != null ? <Link href={href}>{plain_text}</Link> : plain_text}</p>;
      case 'heading_1':
        return <h1>{plain_text}</h1>;
      case 'heading_2':
        return <h2>{plain_text}</h2>;
      case 'heading_3':
        return <h3>{plain_text}</h3>;
      case 'bulleted_list_item':
      case 'numbered_list_item':
        return <li>{plain_text}</li>;
      case 'code':
        return <SyntaxHighlighter language="typescript">{plain_text}</SyntaxHighlighter>;
      case 'quote':
        return <blockquote key={id}>{plain_text}</blockquote>;
    }
  }

  switch (type) {
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      return <LazyLoadImage effect="blur" src={src} alt="디테일 포스트 이미지" />;
    case 'divider':
      return <hr key={id} />;

    default:
      return <></>;
  }
};

export default RenderBlock;
