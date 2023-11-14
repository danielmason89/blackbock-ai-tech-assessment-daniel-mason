import { NextApiRequest, NextApiResponse } from 'next';
import { signOut } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await signOut({ req, res, callbackUrl: '/sign-in' });
}