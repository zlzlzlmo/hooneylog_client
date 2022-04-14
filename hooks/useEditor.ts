import { useEffect, useState } from "react"
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const useEditor = () => {
    const [editor,setEditor] = useState<Editor | null>(null);
    useEffect(()=>{
        const editorCore:Editor = new Editor({
            el: document.querySelector('#editor') as HTMLElement,
            previewStyle: 'vertical',
            height: '700px',
            initialValue:" ",
            hooks:{
                addImageBlobHook:(blob,callback) => {
                    console.log(blob)
                
                }
            }
          })

        setEditor(editorCore)
    },[])

    return editor
}

export default useEditor