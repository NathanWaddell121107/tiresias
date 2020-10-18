import styled from 'styled-components'

export const CoinWrapper = styled.div<{ index: number }>`
	display: flex;
	justify-content: space-between;
	align-content: center;
	border-top: 1px solid #ededed;
	border-bottom: ${(props) => (props.index === 11 ? '1px solid #ededed' : 'none')};
	padding: 1rem;
`

export const CoinName = styled.h2`
	width: 20%;
	display: flex;
	font-size: 1rem;
	margin: 0;
`

export const CoinDetails = styled.p<{ positive?: boolean }>`
	width: 10%;
	font-size: 1rem;
	margin: 0;
	color: ${(props) => (props.positive ? 'green' : props.positive === false ? 'red' : 'black')};
`

export const Ticker = styled.p`
	color: darkgray;
	padding-left: 0.5rem;
	margin: 0;
`

export const Ranking = styled.p`
	margin: 0;
	width: 5%;
`
