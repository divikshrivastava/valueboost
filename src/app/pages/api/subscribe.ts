import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { email } = req.body;

            const client = await clientPromise;
            const db = client.db('main');
            const collection = db.collection('users');

            await collection.insertOne({ email, interested: true });

            res.status(200).json({ message: 'Success' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
