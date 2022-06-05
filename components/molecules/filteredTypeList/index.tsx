/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import FilteredTypeItem from 'components/atoms/filteredTypeItem';
import React, { Fragment, useEffect, useState } from 'react';
import QueryParam from 'util/query';
import styles from './index.module.scss';

const FilteredTypeList = () => {
  const [filteredBy, setFilteredBy] = useState<[string, string][]>([]);
  useEffect(() => {
    setFilteredBy(new QueryParam().queryParamsArray());
  }, [new QueryParam().queryParamsArray()]);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredBy.map(([name, value]) => (
          <Fragment key={name}>
            <FilteredTypeItem filteredBy={name} value={value} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default FilteredTypeList;
