import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	let result
	let chartData
	try {
		result = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, {
			headers: {
				'X-CMC_PRO_API_KEY': process.env.COIN_API_KEY || ''
			}
		})
		chartData = await result.json()
	} catch (err) {
		console.error('err: ', err)
	}

	res.statusCode = 200
	res.json({ chartData })
}
