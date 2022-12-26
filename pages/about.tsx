import React from 'react';

import Layout from '../components/layout';

export default function About(): React.ReactElement {
  return (
    <Layout>
      <h1>关于我们</h1>
      <p>
        加载 <i>首页</i> 和 关于我们 页面是非常快速. 但是导航到 <i>个信信息</i> 页面会有一些开销, 因为使用了服务端渲染(SSR) 来获取用户信息;
      </p>
    </Layout>
  );
}