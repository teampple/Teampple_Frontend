import React from 'react';
import FileHeader from 'components/filePage/FileHeader';
import Layout from 'components/layouts/teampleLayout';
import FileList from 'components/filePage/fileList';

const FilePage = () => {
  return (
    <Layout>
      <FileHeader />
      <FileList />
    </Layout>
  );
};

export default FilePage;
