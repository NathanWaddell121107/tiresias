import * as Styled from './charts.styles'
import React, { useEffect, useState } from 'react'
import { CoinApiFields } from '../../types/coin-api-fields'
import { MarketData } from '../../types/market-data'

const Charts: React.FC = () => {
	const [chartsData, setChartsData] = useState<MarketData['prices']>([])
	const [searchForMarketData, setSearchForMarketData] = useState(false)
	const [apiFields, setApiFields] = useState<CoinApiFields>({ coinName: '', currency: '', days: '' })

	useEffect(() => {
		const fetchChartData = async () => {
			const result = await fetch(
				`https://api.coingecko.com/api/v3/coins/${apiFields.coinName}/market_chart?vs_currency=${apiFields.currency}&days=${apiFields.days}`
			)
			const chartData: MarketData = await result.json()
			console.log('result: ', chartData)

			if (!result) {
				console.log('error: ')
			}

			setChartsData(chartData.prices)
		}
		if (searchForMarketData) {
			fetchChartData()
		}
	}, [searchForMarketData])

	return (
		<Styled.ChartsWrapper>
			<Styled.TopTen>
				Top Ten chart
			</Styled.TopTen>
			<div>Charts</div>
			<label>Coin Name</label>
			<input
				onChange={(e) => {
					const value = e.target.value
					setApiFields({ ...apiFields, coinName: value })
				}}
				value={apiFields.coinName}
				placeholder="bitcoin"
				type="text"
			/>
			<label>Currency</label>
			<input
				onChange={(e) => {
					const value = e.target.value
					setApiFields({ ...apiFields, currency: value })
				}}
				value={apiFields.currency}
				placeholder="usd"
				type="text"
			/>
			<label>Days</label>
			<input
				onChange={(e) => {
					const value = e.target.value
					setApiFields({ ...apiFields, days: value })
				}}
				value={apiFields.days}
				placeholder="14"
				type="text"
			/>
			<button onClick={() => setSearchForMarketData(true)}>Search</button>
			<>
				{chartsData &&
					chartsData.map((coin, index) => {
						return <div key={index}>{coin[1]}</div>
					})}
			</>
		</Styled.ChartsWrapper>
	)
}

export default Charts
