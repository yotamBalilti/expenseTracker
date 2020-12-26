const formatDate = date => {
  const d = new Date(date); // make sure it is actually a date
  let month = `${d.getMonth() + 1}`; // retrieve month from date
  let day = `${d.getDate()}`; // retrieve day from date
  const year = d.getFullYear(); // retrieve year from date

  // check if month and day are 2 digits, if not add 0 at the beginning to comply with materialUI format
  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("-");
};

export default formatDate;
