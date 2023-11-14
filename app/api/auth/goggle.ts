import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { token } = req.body;
    try {
      // Verify the token with Google's API
      const response = await axios.post(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`);
      const userData = response.data;

      // Perform your logic here (e.g., create or update user in your database)

      res.status(200).json({ message: 'Token verified', user: userData });
    } catch (error) {
      res.status(500).json({ message: 'Token verification failed', error });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}