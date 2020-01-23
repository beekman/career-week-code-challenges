function dateAdder(date, input) {
  const split = input.split(/([A-Za-z])/);
  let current;
  switch(split[1]) {
    case 's': {
      current = date.getSeconds();
      date.setSeconds(current + split[0]);
      break;
    }
    case 'm': {
      current = date.getMinutes();
      date.setMinutes(current + split[0]);
      break;
    }
    case 'h': {
      current = date.getHours();
      date.setHours(current + split[0]);
      break;
    }
    case 'd': {
      current = date.getDate();
      date.setDate(current + Number(split[0]));
      break;
    }
    case 'w': {
      current = date.getDate();
      date.setDate(current + (split[0] * 7));
      break;
    }
    case 'M': {
      current = date.getMonth();
      date.setMonth(current + Number(split[0]));
      break;
    }
    case 'y': {
      current = date.getFullYear();
      date.setFullYear(current + Number(split[0]));
      break;
    }
  }
  return date;
}

module.exports = dateAdder;
