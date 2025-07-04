import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocPaginator from '@theme/DocPaginator';
import styles from './styles.module.css';

export default function DocItemPaginator() {
  const {metadata} = useDoc();
  return (
    <DocPaginator
      className={`${styles.customPaginator} docusaurus-mt-lg`}
      previous={metadata.previous}
      next={metadata.next}
    />
  );
}
