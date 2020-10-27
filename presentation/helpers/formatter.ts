const formatter = (numberToFormat: number, fractions: number) => {
	return new Intl.NumberFormat('en-us', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: fractions,
		maximumFractionDigits: fractions
	}).format(numberToFormat)
}

export default formatter
