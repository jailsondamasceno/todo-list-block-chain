const useDateToday = (format) => {
  const dat = new Date();
  const day =
    dat.getDate().toString().length === 1 ? `0${dat.getDate()}` : dat.getDate();
  const month = dat.getMonth() + 1;
  const month_format = month.toString().length === 1 ? `0${month}` : month;
  const int = `${dat.getFullYear()}-${month_format}-${day}`;
  var date_return = "";

  if (format == "int") {
    date_return = int;
  } else {
    date_return = new Date(int).getTime();
  }

  return date_return;
};

export default useDateToday;
