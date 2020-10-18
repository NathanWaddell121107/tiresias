import * as Styled from './charts.styles'
import React, { useEffect, useState } from 'react'
import { TopTenCoins } from '../../types/top-ten-coins'
import TopTen from './top-ten'

const Charts: React.FC = () => {
	const [rawCoinData, setRawCoinData] = useState<TopTenCoins[]>([])
	const [topTen, setTopTen] = useState<TopTenCoins[]>([])

	useEffect(() => {
		const fetchChartData = async () => {
			try {
				const result = await fetch('/api/coin-api')
				const chartData = await result.json()
				setRawCoinData(chartData.chartData.data)
			} catch (err) {
				console.log('err: ', err)
			}
		}
		fetchChartData()
	}, [])

	useEffect(() => {
		const topTenData: TopTenCoins[] = []
		if (rawCoinData && rawCoinData.length > 0) {
			for (let i = 0; i < 10; i++) {
				topTenData.push(rawCoinData[i])
			}
			setTopTen(topTenData)
		}
	}, [rawCoinData])

	return (
		<Styled.ChartsWrapper>
			<h1>Top 10 Coins</h1>
			<Styled.TopTenWrapper>
				<Styled.ListHeader>
					<Styled.Ranking>#</Styled.Ranking>
					<Styled.Name>Name</Styled.Name>
					<Styled.Details>Price</Styled.Details>
					<Styled.Details>24h</Styled.Details>
					<Styled.Details>7d</Styled.Details>
					<Styled.Details>Market Cap</Styled.Details>
					<Styled.Details>Volume</Styled.Details>
					<Styled.Details>Circulating Supply</Styled.Details>
				</Styled.ListHeader>
				{topTen &&
					topTen.map((coin, index) => {
						return <TopTen coin={coin} index={index} />
					})}
			</Styled.TopTenWrapper>
		</Styled.ChartsWrapper>
	)
}

export default Charts
