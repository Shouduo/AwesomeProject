export const timeFormatter = (millsecond, format) => {
  const date = new Date(millsecond);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const second = `${date.getSeconds()}`.padStart(2, '0');

  // if (format === 'yyyy-MM-dd') {
  //   return `${year}-${month}-${day}`;
  // } else if (format === 'yyyy-MM-dd HH:mm') {
  //   return `${year}-${month}-${day} ${hour}:${minute}`;
  // } else if (format === 'yyyy-MM-dd HH:mm:ss') {
  //   return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  // } else if (format === 'yyyy-MM-dd HH:mm:ss.SSS') {
  //   return `${year}-${month}-${day} ${hour}:${minute}:${second}.${date.getMilliseconds()}`;
  // } else {
  //   return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  // }

  switch (format) {
    case 'MM-dd HH:mm:ss':
      return `${month}-${day} ${hour}:${minute}:${second}`;
    case 'yyyy-MM-dd HH:mm':
      return `${year}-${month}-${day} ${hour}:${minute}`;
    default:
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
};
