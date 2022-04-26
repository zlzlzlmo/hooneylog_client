/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
import React from 'react';
import styles from './Text.module.scss';

interface TextProps {
  href: null | string;
  annotations: {
    bold: boolean;
    code: boolean;
    color: string;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
  plainText: string;
}

const Text = ({ plainText, href, annotations }: TextProps) => {
  return <span>{plainText}</span>;
  // if (!text) {
  //   return null;
  // }
  // return text.map((value: any) => {
  //   const {
  //     annotations: { bold, code, color, italic, strikethrough, underline },
  //     text,
  //   } = value;
  //   return (
  //     <span
  //       className={[
  //         bold ? styles.bold : '',
  //         code ? styles.code : '',
  //         italic ? styles.italic : '',
  //         strikethrough ? styles.strikethrough : '',
  //         underline ? styles.underline : '',
  //       ].join(' ')}
  //       style={color !== 'default' ? { color } : {}}
  //     >
  //       {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
  //     </span>
  //   );
  // });
};

export default Text;
