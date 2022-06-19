/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fragment } from 'react';
import Block from '../../atoms/block';
import styles from './index.module.scss';

const BlockNestedList = (block: any) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return (
      <ol className={styles.order_list}>
        {value.children.map((block: any, index: number) => (
          <Fragment key={index}>
            <Block block={block} />
          </Fragment>
        ))}
      </ol>
    );
  }
  return (
    <ul className={styles.unorder_list}>
      {value.children.map((block: any, index: number) => (
        <Fragment key={index}>
          <Block block={block} />
        </Fragment>
      ))}
    </ul>
  );
};

export default BlockNestedList;
