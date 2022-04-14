/* eslint-disable import/no-unresolved */
import React from 'react';
import dynamic from 'next/dynamic';

const EditorComponent = dynamic(() => import('components/admin/EditorComponent'), { ssr: false });

const AdminPage = () => {
  return (
    <div>
      <EditorComponent />
    </div>
  );
};

export default AdminPage;
