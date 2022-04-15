/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React from 'react';
import useEditor from 'hooks/useEditor';
import { ref, uploadString } from 'firebase/storage';
import { storage } from 'config/firebase';
import styles from './EditorComponent.module.scss';

const EditorComponent = () => {
  const editor = useEditor();

  const handleClick = () => {
    console.log('storageRef : ');
  };
  return (
    <section className={styles.container}>
      <input className={styles.input} type="text" />
      <div id="editor" />
      <button className={styles.button} onClick={handleClick}>
        업로드
      </button>
    </section>
  );
};

export default EditorComponent;
