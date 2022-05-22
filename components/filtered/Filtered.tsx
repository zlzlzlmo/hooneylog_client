/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import QueryParam from 'util/query';
import styles from './Filtered.module.scss';

const Filtered = () => {
  const [filteredBy, setFilteredBy] = useState<[string, string][]>([]);
  useEffect(() => {
    setFilteredBy(new QueryParam().queryParamsArray());
  }, [new QueryParam().queryParamsArray()]);
  return (
    <div className={styles.container}>
      {/* <span className={styles.text}>Filtered By</span> */}

      <ul className={styles.list}>
        {filteredBy.map(([name, value]) => (
          <li className={styles.item} key={name}>
            {name} : {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtered;
