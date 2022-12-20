import React from 'react';
import { withPageAuthRequired } from '@authok/nextjs-authok';
import { useUser } from '@authok/nextjs-authok/client';

import Layout from '../components/layout';

export default function ProtectedPage() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout>
      <h1>被保护页面</h1>

      {isLoading && <p>加载用户档案...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>Profile</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
