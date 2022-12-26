import React from 'react';

import useApi from '../lib/use-api';
import Layout from '../components/layout';
import { withPageAuthRequired } from '@authok/nextjs-authok/client';

type Price = { amount: number; currency: string; };
type Product = { name: string; price: Price; };

export default withPageAuthRequired(function Products(): React.ReactElement {
  const { response, error, isLoading } = useApi('/api/products');

  return (
    <Layout>
      <h1>商品列表</h1>

      {isLoading && <p>加载商品列表...</p>}

      {response && (
        <>
          <p>商品列表:</p>
          <pre>
            {JSON.stringify(
              response.products.map((s: Product) => s),
              null,
              2
            )}
          </pre>
        </>
      )}

      {error && (
        <>
          <p>加载商品列表错误</p>
          <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
});
