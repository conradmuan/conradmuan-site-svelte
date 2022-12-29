export const niceDate = (date: Date) => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const d = new Date(date);
	const yr = d.getFullYear();
	const mo = months[d.getMonth()];
	const da = d.getDate();
	return `${mo} ${da}, ${yr}`;
};
