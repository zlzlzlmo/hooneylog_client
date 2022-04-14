import { useEffect, useState } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const useEditor = () => {
  const [editor, setEditor] = useState<Editor | null>(null);
  useEffect(() => {
    const editorCore: Editor = new Editor({
      el: document.querySelector('#editor') as HTMLElement,
      previewStyle: 'vertical',
      height: '700px',
      initialValue: ' ',
      hooks: {
        addImageBlobHook: (blob, callback) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            if (reader.result == null) {
              return;
            }
            if (typeof reader.result !== 'string') {
              return;
            }

            callback(reader.result);
          };
        },
      },
    });

    setEditor(editorCore);
  }, []);

  return editor;
};

export default useEditor;
