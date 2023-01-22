// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import nookies from 'nookies'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        // Process a POST request
        const cookies = nookies.get(req.cookies)
        console.log(req.cookies)
        console.log(cookies)
        res.status(200).json({ name: 'John Doe' })
    } else {
        // Handle any other HTTP method
        // res.status(401).json({})
    }
    // const { data } = await axios.get(`${process.env.BASE_URL}followers/`, {
    //     headers: {
    //         Authorization: 'Bearer ',
    //     },
    // })
}
