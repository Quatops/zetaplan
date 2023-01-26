import AdminEditContainer from 'components/AdminEditContainer';
import React from 'react';

export default function AdminEditArticles({ position }) {
  return (
    <AdminEditContainer
      modalSize={{ height: '400px' }}
      title="기사 수정"
      position={position}></AdminEditContainer>
  );
}
