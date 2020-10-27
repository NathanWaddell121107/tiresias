import styled from 'styled-components'

export const ChartsWrapper = styled.div`
	padding: 1rem;
	margin: 2rem;
	> h1 {
		text-align: center;
		margin-bottom: 2rem;
		@media (max-width: 1024px) {
			position: fixed;
			width: 85%;
		}
		@media (max-width: 450px) {
			width: 80%;
		}
		@media (max-width: 350px) {
			width: 75%;
		}
	}
	@media (max-width: 1024px) {
		overflow-x: scroll;
	}
`

export const TopTenWrapper = styled.table`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 1024px) {
		width: 940px;
		margin-top: 5rem;
	}
`

export const ListHeader = styled.tr`
	display: flex;
	justify-content: space-between;
	align-content: center;
	padding: 1rem;
	font-size: 0.875rem;
	font-weight: bold;
`

export const Ranking = styled.th`
	margin: 0;
	width: 40px;
`

export const Name = styled.th`
	margin: 0;
`

export const Details = styled.th`
	margin: 0;
	@media (max-width: 1200px) {
		width: 100px;
	}
	@media (max-width: 1100px) {
		width: 150px;
	}
`

export const NameAndRank = styled.tr`
	max-width: 20%;
	width: 350px;
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
