// import { NextApiRequest, NextApiResponse } from 'next';
// import { getSession, Session } from 'next-auth/react';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Get the current session
//   const session: Session | null = await getSession({ req });

//   if (session) {
//     // Handle the session token invalidation here
//     // This might involve your custom logic to invalidate the session token

//     // Redirect the user after signing out
//     res.redirect('/sign-in');
//   } else {
//     // Handle the case where there is no session (user not signed in)
//     res.status(401).json({ message: 'No active session' });
//   }
// }