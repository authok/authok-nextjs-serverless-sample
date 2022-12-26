import { NextJwtVerifier } from '@serverless-jwt/next';
import { NextAuthenticatedApiRequest } from '@serverless-jwt/next/dist/types';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const verifyJwt = NextJwtVerifier({
  issuer: process.env.AUTHOK_ISSUER_BASE_URL,
  audience: process.env.AUTHOK_AUDIENCE
});

const requireScope = (scope: string, apiRoute: NextApiHandler) =>
  verifyJwt(async (req: NextAuthenticatedApiRequest, res) => {
    const { claims } = req.identityContext;
    if (!claims || !claims.scope || (claims.scope as string).indexOf(scope) === -1) {
      return res.status(403).json({
        error: 'access_denied',
        error_description: `令牌不包含所需 scope: '${scope}'`
      });
    }
    return apiRoute(req, res) as void;
  });

const apiRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // 从数据库 或者 微服务 获取
    const orders = [
      {
        currency: 'RMB',
        lineitems: [{
          id: '1',
          product_id: '1',
          variant_id: '1',
          quantity: 3,
          subtotal: 100,
        }, {
          id: '2',
          product_id: '2',
          variant_id: '2',
          quantity: 2,
          subtotal: 200,
        }]
      }
    ];
    console.error('fuck');

    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
};

export default requireScope('read:orders', apiRoute);
