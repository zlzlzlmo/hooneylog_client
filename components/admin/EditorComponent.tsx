/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { ChangeEvent, useState } from 'react';
import useEditor from 'hooks/useEditor';
import { fireStore } from 'config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import styles from './EditorComponent.module.scss';

const EditorComponent = () => {
  const [title, setTitle] = useState<string | null>(null);
  const editor = useEditor();

  const handleChange = () => (e: ChangeEvent<HTMLInputElement>) => {
    console.log('Title : ', title);
    setTitle(e.target.value);
  };

  const handleClick = () => {
    if (title === null || title === '') {
      alert('타이틀을 입력하시오.');
      return;
    }
    try {
      addDoc(collection(fireStore, 'posts'), {
        title,
        description: editor?.getMarkdown(),
        reg_date: new Date(),
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <section className={styles.container}>
      <input className={styles.input} type="text" onChange={handleChange()} />
      <div id="editor" />
      <button className={styles.button} onClick={handleClick}>
        업로드
      </button>
    </section>
  );
};

export default EditorComponent;
