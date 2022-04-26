/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import RenderNestedList from '../nestedList/RenderNestedList';
import Text from '../text/Text';
import styles from './RenderBlock.module.scss';

const RenderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p className={styles.paragraph}>
          <Text richText={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className={styles.headingOne}>
          <Text richText={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className={styles.headingTwo}>
          <Text richText={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className={styles.headingThree}>
          <Text richText={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className={styles.list}>
          <Text richText={value.rich_text} />
          {!!value.children && RenderNestedList(block)}
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} /> <Text text={value.text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text richText={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure className={styles.image_box}>
          <LazyLoadImage effect="blur" src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return (
        <blockquote className={styles.blockquote} key={id}>
          {value.rich_text[0].plain_text}
        </blockquote>
      );
    case 'code':
      return (
        <SyntaxHighlighter className={styles.code_block} language="typescript">
          {value.rich_text[0].plain_text}
        </SyntaxHighlighter>
      );
    // case 'file':
    //   const src_file = value.type === 'external' ? value.external.url : value.file.url;
    //   const splitSourceArray = src_file.split('/');
    //   const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
    //   const caption_file = value.caption ? value.caption[0]?.plain_text : '';
    //   return (
    //     <figure>
    //       <div className={styles.file}>
    //         📎{' '}
    //         <Link href={src_file} passHref>
    //           {lastElementInArray.split('?')[0]}
    //         </Link>
    //       </div>
    //       {caption_file && <figcaption>{caption_file}</figcaption>}
    //     </figure>
    //   );
    // case 'bookmark':
    //   const href = value.url;
    //   return (
    //     <a href={href} target="_brank" className={styles.bookmark}>
    //       {href}
    //     </a>
    //   );
    default:
      return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;
  }
};

export default RenderBlock;
