import React from 'react';
import { useUser } from '@authok/nextjs-authok/client';

import Layout from '../components/layout';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout>
      <h1>Next.js and Authok Example</h1>

      {isLoading && <p>加载登录信息...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>在客户端渲染用户信息</h4>
          <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      {!isLoading && !error && !user && (
        <>
          <p>
            您可以尝试<i>登录</i>
          </p>
          <p>
            登录成功后，您可以访问 <i>被保护页面</i>, 以及 <i>注销</i>
          </p>
        </>
      )}
    </Layout>
  );
}
