import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/index.module.css'
import { useUser } from '@authok/nextjs-authok/client';

import Layout from '../components/layout';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout>
      <Head>
        <title>Serverless - Next.js</title>
        <meta name="description" content="Serverless Next.js 应用" />
        <meta name="keywords" content="next,next.js,serverless,无服务" />
        <link rel="icon" href={`${process.env.STATIC_URL || ''}/favicon.ico`} />
      </Head>
      <h1 className={styles.title}>Next.js and Authok Example</h1>
      <p>STATIC_URL: {process.env.STATIC_URL}</p>

      <Image src="/authok-badge.png" alt="authok" width={200} height={200} />
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
