export interface TopTenCoins {
	id: number
	name: string
	symbol: string
	slug: string
	tags: string[]
	total_supply: number
	max_supply: number
	last_updated: string
	date_added: string
	circulating_supply: number
	cmc_rank: number
	num_market_pairs: number
	platform?: Platform | null
	quote: Quote
}

interface Quote {
	USD: {
		last_updated: string
		market_cap: number
		percent_change_1h: number
		percent_change_7d: number
		percent_change_24h: number
		price: number
		volume_24h: number
	}
}

interface Platform {
	id: number
	name: string
	slug: string
	symbol: string
	token_address: string
}
