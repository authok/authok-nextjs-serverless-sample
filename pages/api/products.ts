import { withApiAuthRequired, getAccessToken } from '@authok/nextjs-authok';

export default withApiAuthRequired(async function orders(req, res) {
  try {
    // 从数据库 或者 微服务 获取
    const products = [{
      id: '1',
      name: '蛋白粉',
      price: {
        amount: 1000,
        currency: 'RMB',
      },
    }, {
      id: '2',
      name: '蛋糕',
      price: {
        amount: 500,
        currency: 'RMB',
      },
    }];

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
});
