export const getMonth = (monthNum: number): string => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	return months[monthNum];
};

export const getDateString = (): string => {
	const date = new Date();
	return `${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`;
};
