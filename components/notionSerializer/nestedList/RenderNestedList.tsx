/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */

import RenderBlock from '../blockContent/RenderBlock';
import styles from './RenderNestedList.module.scss';

/* eslint-disable @typescript-eslint/no-explicit-any */
const RenderNestedList = (block: any) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return <ol className={styles.order_list}>{value.children.map((block: any) => RenderBlock(block))}</ol>;
  }
  return <ul className={styles.unorder_list}>{value.children.map((block: any) => RenderBlock(block))}</ul>;
};

export default RenderNestedList;
