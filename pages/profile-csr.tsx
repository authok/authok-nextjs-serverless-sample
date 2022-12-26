import React from 'react';
import { withPageAuthRequired } from '@authok/nextjs-authok/client';

import Layout from '../components/layout';

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <Layout>
      <h1>个人信息</h1>
      <h4>个人信息(客户端渲染, CSR)</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
});
