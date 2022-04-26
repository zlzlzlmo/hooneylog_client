/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import React from 'react';
import styles from './Text.module.scss';

const Text = ({ richText }: any) => {
  if (!richText) {
    return null;
  }
  return richText.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? styles.bold : '',
          code ? styles.code : '',
          italic ? styles.italic : '',
          strikethrough ? styles.strikethrough : '',
          underline ? styles.underline : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a className={styles.anchor} href={text.link.url}>
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

export default Text;
