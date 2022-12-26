import React from 'react';

import useApi from '../lib/use-api';
import Layout from '../components/layout';
import { withPageAuthRequired } from '@authok/nextjs-authok/client';

type LineItem = { variant_id: string; quantity: number; subtotal: number; };
type Order = { lineitems: LineItem[]; currency: string; };

export default withPageAuthRequired(function Orders(): React.ReactElement {
  const { response, error, isLoading } = useApi('/api/orders');

  return (
    <Layout>
      <h1>订单列表</h1>

      {isLoading && <p>加载订单列表...</p>}

      {response && (
        <>
          <p>订单列表:</p>
          <pre>
            {JSON.stringify(
              response.orders.map((s: Order) => s),
              null,
              2
            )}
          </pre>
        </>
      )}

      {error && (
        <>
          <p>加载订单列表错误</p>
          <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
});
