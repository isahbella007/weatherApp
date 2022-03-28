import moment from "moment";

const getWeekDayName = date => moment(date).format('dddd')
const getUpcomingDayForecast = (response) =>
  response.slice(1).map((newData) => ({
    day: getWeekDayName(newData.date),
    weatherIcon: newData.day.condition.icon,
    avgTemp: newData.day.avgtemp_c,
  }));

export default getUpcomingDayForecast;
