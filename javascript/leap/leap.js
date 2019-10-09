export const isLeap = (y) =>
	(y%4 !== 0)
		? false
		: (y%100 !== 0)
			? true
			: (y%400 === 0)
				? true
				: false
