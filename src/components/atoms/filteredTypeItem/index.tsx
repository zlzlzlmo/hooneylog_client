import React from 'react';
import styles from './index.module.scss';

interface Props {
  filteredBy: string;
  value: string;
}

const FilteredTypeItem = ({ filteredBy, value }: Props) => {
  return (
    <li className={styles.item}>
      {filteredBy} : {value}
    </li>
  );
};

export default FilteredTypeItem;
