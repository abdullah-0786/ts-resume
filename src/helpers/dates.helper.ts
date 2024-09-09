import moment from 'moment-timezone';

export function DiffBetweenTwoDatesInYears(firstDate: Date, secondDate: Date) {
  return moment(secondDate).diff(moment(firstDate), 'years');
}
