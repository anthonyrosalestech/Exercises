function timeConversion1(s = "07:05:4PM") {
  // Write your code here
  // s.includes('AM');
  // fecha actual
  // let date = new Date();
  // date.setTime('07:05:45PM')

  let timerSplit = s.split(":");
  let timerInSeconds =
    timerSplit[0] * 60 * 60 +
    timerSplit[1] * 60 +
    timerSplit[2].slice(0, timerSplit.length > 3 ? 2 : 1);
  let date = new Date();

  // la hora en tu zona horaria actual
  const lengthSeconds = timerSplit.length;
  // console.log( timerSplit[2].slice(0, timerSplit.length > 3 ? 2 : 1));
  console.log(timerInSeconds / 60);
  console.log(date);
}

function timeConversion2(s = "12:05:40AM") {
  let hour = s.substring(0, 2) * 1;
  let timeFormat = s.substring(2, 8);

  // if midnight
  if (hour === 12 && s.indexOf("AM") !== -1) {
    return "00" + timeFormat;
  } // if afternoon
  if (hour === 12 && s.indexOf("PM") !== -1) {
    return time + timeFormat;
  }

  // if hour is from 1 to 11PM, add 12 to the time
  if (hour < 12 && s.indexOf("PM") !== -1) {
    return 12 + hour + timeFormat;
  } else {
    // if hour is from 1 to 11 AM
    if (hour < 10) {
      // if number is less than 10, add a zero in front
      return "0" + hour + timeFormat;
    } else {
      // if number is greater than 9, just add rest of string
      return hour + timeFormat;
    }
  }
  // console.log(s.indexOf("PM"));
}

function timeConversion(s) {
    const isPM = s.match(/pm/gi) != null;
    const times = s.replace(/[pm|am]/gi, '').split(':');
    let [hour] = times;
    hour = parseInt(hour);
    
    const isNoon = isPM && hour === 12;
    const isMidnight = !isPM && hour === 12;

    if(!isNoon) {
        isMidnight ? hour -= 12 : (isPM ? hour += 12 : null);
        hour < 10 ? hour = '0' + hour : null
    } 

    times[0] = hour;
    return times.join(':');
}

console.log(timeConversion("12:45:54PM"));
