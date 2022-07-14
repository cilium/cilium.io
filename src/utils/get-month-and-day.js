export default function getMonthAndDay(date) {
  const convertedDate = new Date(date);
  const day = convertedDate.getUTCDate();
  const month = convertedDate.toLocaleString('default', { month: 'long' });
  return `${month}, ${day}`;
}
