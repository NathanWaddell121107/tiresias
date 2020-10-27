import styled from 'styled-components'

export const CoinWrapper = styled.tr<{ index: number }>`
	display: flex;
	justify-content: space-between;
	align-content: center;
	border-top: 1px solid #ededed;
	border-bottom: ${(props) => (props.index === 11 ? '1px solid #ededed' : 'none')};
	padding: 1rem;
`

export const CoinName = styled.td`
	display: flex;
	font-size: 1rem;
	margin: 0;
`

export const CoinDetails = styled.td<{ positive?: boolean }>`
	font-size: 1rem;
	margin: 0;
	color: ${(props) => (props.positive ? 'green' : props.positive === false ? 'red' : 'black')};
	@media (max-width: 1200px) {
		width: 100px;
	}
	@media (max-width: 1100px) {
		width: 150px;
	}
`

export const Ticker = styled.td`
	color: darkgray;
	padding-left: 0.5rem;
	margin: 0;
`

export const Ranking = styled.td`
	margin: 0;
	width: 40px;
`

export const NameAndRank = styled.tr`
	max-width: 20%;
	width: 350px;
	display: flex;
	@media (max-width: 1024px) {
		max-width: 25%;
		width: 400px;
	}
`

export const DetailsContainer = styled.tr`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	width: 1200px;
	overflow-x: auto;
	@media (max-width: 1200px) {
		width: 800px;
	}
	@media (max-width: 1100px) {
		width: 600px;
	}
	@media (max-width: 1024px) {
		overflow-x: hidden;
		width: 1200px;
	}
`
