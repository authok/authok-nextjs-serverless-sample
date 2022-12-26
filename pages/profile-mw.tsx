import React from 'react';
import { useUser } from '@authok/nextjs-authok/client';

import Layout from '../components/layout';

export default function Profile() {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <p>加载...</p>;
  }

  return (
    <Layout>
      <h1>个人信息</h1>
      <h4>个人信息</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
}
