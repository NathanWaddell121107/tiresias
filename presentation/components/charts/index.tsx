import React, { useEffect, useState } from 'react'

const Charts: React.FC = () => {
	const [chartsData, setChartsData] = useState<any>()

	useEffect(() => {
		const fetchChartData = async () => {
			const result = await fetch('https://api.coingecko.com/api/v3/coins/list')
			const chartData = await result.json()
			console.log('result: ', chartData)

			if (!result) {
				console.log('error: ')
			}

			setChartsData(chartData)
		}
		fetchChartData()
	}, [])

	return (
		<div>
			<div>Charts</div>
			<>
				{chartsData.map((coin, index) => {
					return <div key={index}>{coin.symbol}</div>
				})}
			</>
		</div>
	)
}

export default Charts
