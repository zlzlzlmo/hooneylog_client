/* eslint-disable default-case */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { HookCallback } from '@toast-ui/editor/types/editor';
import { storage } from 'config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const useEditor = () => {
  const [editor, setEditor] = useState<Editor | null>(null);
  useEffect(() => {
    const editorCore: Editor = new Editor({
      el: document.querySelector('#editor') as HTMLElement,
      previewStyle: 'vertical',
      height: '700px',
      initialValue: ' ',
      hooks: {
        addImageBlobHook: (blob: File | Blob, callback: HookCallback) => {
          let filename = '';
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            if ('name' in blob) {
              filename = blob.name;
            }
            console.log('filename : ', filename);
            const storageRef = ref(storage, `images/${Math.random()}_${Math.random()}_${filename}`);
            const uploadTask = uploadBytes(storageRef, blob);
            uploadTask.then((snapshot) => {
              getDownloadURL(snapshot.ref).then((downloadURL) => {
                callback(downloadURL);
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
