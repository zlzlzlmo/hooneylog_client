/* eslint-disable no-debugger */
/* eslint-disable default-case */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { HookCallback } from '@toast-ui/editor/types/editor';
import { fireStore, storage } from 'config/firebase';
import { ref, uploadBytes, getDownloadURL, UploadResult } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const useEditor = () => {
  const [editor, setEditor] = useState<Editor | null>(null);
  useEffect(() => {
    const editorCore: Editor = new Editor({
      el: document.querySelector('#editor') as HTMLElement,
      previewStyle: 'vertical',
      height: '500px',
      initialValue: ' ',
      hooks: {
        addImageBlobHook: (blob: File | Blob, callback: HookCallback) => {
          let filename = '';
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            if ('name' in blob) {
              filename = `${Math.random()}_${Math.random()}_${blob.name}`;
            }
            console.log('filename : ', filename);
            const storageRef = ref(storage, `images/${filename}`);
            const uploadTask = uploadBytes(storageRef, blob);
            uploadTask.then((snapshot: UploadResult) => {
              getDownloadURL(snapshot.ref).then((downloadURL: string) => {
                callback(downloadURL);

                try {
                  const docRef = addDoc(collection(fireStore, 'users'), {
                    first: 'Ada',
                    last: 'Lovelace',
                    born: 1815,
                  });
                } catch (e) {
                  console.error('Error adding document: ', e);
                }
              });
            });
          };
        },
      },
    });

    setEditor(editorCore);
  }, []);

  return editor;
};

export default useEditor;
