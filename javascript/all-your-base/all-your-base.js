export const convert = (digits, radix_in, radix_out) => {
	const converter = new BaseConverter()
	
	const invalid_digits    = converter.validate_digits(digits, radix_in)
	const invalid_radix_in  = converter.validate_radix(radix_in)
	const invalid_radix_out = converter.validate_radix(radix_out)
	
	// The order in which inputs are validated should be preserved:
	if (invalid_radix_in)  { throw new Error('Wrong input base') }
	if (invalid_digits)    { throw new Error('Input has wrong format') }
	if (invalid_radix_out) { throw new Error('Wrong output base') }
	
	const decimal = converter.to_decimal(digits, radix_in)
	const result = converter.decimal_to_base(decimal, radix_out)
	
	return result
}
	
function BaseConverter() {
	/* Desc: Function-module for converting between bases. Numbers in 
	 *       non-decimal bases are represented digit-wise as arrays of 
	 *       base-10 integers.
	 *
	 * Usage: Use BaseConverter to first  validate input digits, radix in, 
	 *        and radix out. Then convert from radix_in to decimal, then
	 *        from decimal to radix_out. 	
	 */
};

BaseConverter.prototype.decimal_to_base = (n, b) => {
	/* Desc: Recursive
	 * Args:
	 * 	n: Integer
	 * 	b: Integer
	 * Return: Array of base-10 integers
	 */
	return (n < b) ? [n] : BaseConverter.prototype.decimal_to_base(Math.floor(n/b), b).concat([n % b])
}

BaseConverter.prototype.to_decimal = (digits, radix_in) => {
	/* Args:
	 * 	digits: Array of natural integers
	 * 	radix_in: integer
	 * Return: base-10 integer
	 */
	return digits.reduce((acc, digit) => acc * radix_in + digit, 0)
}

BaseConverter.prototype.validate_digits = (digits, radix_in, radix) => { 
	/* Return: boolean => true if invalid */
	return (/*are_numbers*/ (! Array.isArray(digits))
		|| /*leading_zero*/ (digits[0]==0 && (digits.length > 1))
		|| /*empty_input*/ (digits.length == 0)
		|| /*negative_digits*/ digits.map(d => Number(d) < 0).includes(true)
		|| /*invalid_positive_digits*/ digits.map(x => x >= radix_in).includes(true)
	);
}

BaseConverter.prototype.validate_radix = (radix) => {
	/* Return: boolean => true if invalid */
	return (/*base_less_than_two*/ radix < 2
		|| /*noninteger_base*/ parseInt(radix) !== radix
		|| /*missing_base*/ radix == undefined
	);
}
