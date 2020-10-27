import * as React from 'react'
import * as Styled from './top-ten.styles'
import { TopTenCoins } from '../../../types/top-ten-coins'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import formatter from '../../../helpers/formatter'

interface Props {
	coin: TopTenCoins
	index: number
}

const TopTen: React.FC<Props> = ({ coin, index }) => {
	const percent24Hour = coin.quote.USD.percent_change_24h
	const percent7Day = coin.quote.USD.percent_change_7d
	return (
		<Styled.CoinWrapper index={index}>
			<Styled.Ranking>{index + 1}</Styled.Ranking>
			<Styled.CoinName>
				{coin.name}
				<Styled.Ticker>{coin.symbol}</Styled.Ticker>
			</Styled.CoinName>
			<Styled.CoinDetails>{formatter(coin.quote.USD.price, 2)}</Styled.CoinDetails>
			<Styled.CoinDetails positive={percent24Hour >= 0}>
				<FontAwesomeIcon
					style={{ marginRight: '.5rem' }}
					color={percent24Hour > 0 ? 'green' : 'red'}
					icon={percent24Hour > 0 ? faSortUp : faSortDown}
				/>
				{percent24Hour.toFixed(2)}%
			</Styled.CoinDetails>
			<Styled.CoinDetails positive={percent7Day >= 0}>
				<FontAwesomeIcon
					style={{ marginRight: '.5rem' }}
					color={percent7Day > 0 ? 'green' : 'red'}
					icon={percent7Day > 0 ? faSortUp : faSortDown}
				/>
				{percent7Day.toFixed(2)}%
			</Styled.CoinDetails>
			<Styled.CoinDetails>{formatter(coin.quote.USD.market_cap, 0)}</Styled.CoinDetails>
			<Styled.CoinDetails>{formatter(coin.quote.USD.volume_24h, 0)}</Styled.CoinDetails>
			<Styled.CoinDetails>{formatter(coin.circulating_supply, 0)}</Styled.CoinDetails>
		</Styled.CoinWrapper>
	)
}

export default TopTen
