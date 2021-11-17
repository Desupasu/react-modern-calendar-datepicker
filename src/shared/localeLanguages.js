import {
  GREGORIAN_MONTHS,
  GREGORIAN_WEEK_DAYS,
  RUSSIAN_MONTHS,
  RUSSIAN_WEEK_DAYS,
} from './constants';

const localeLanguages = {
  en: {
    months: GREGORIAN_MONTHS,
    weekDays: GREGORIAN_WEEK_DAYS,
    weekStartingIndex: 0,
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },
    transformDigit(digit) {
      return digit;
    },
    nextMonth: 'Next Month',
    previousMonth: 'Previous Month',
    openMonthSelector: 'Open Month Selector',
    openYearSelector: 'Open Year Selector',
    closeMonthSelector: 'Close Month Selector',
    closeYearSelector: 'Close Year Selector',
    from: 'from',
    to: 'to',
    defaultPlaceholder: 'Select...',
    digitSeparator: ',',
    yearLetterSkip: 0,
    isRtl: false,
  },
  ru: {
    months: RUSSIAN_MONTHS,
    weekDays: RUSSIAN_WEEK_DAYS,
    weekStartingIndex: 0,
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },
    transformDigit(digit) {
      return digit;
    },
    nextMonth: 'Следующий месяц',
    previousMonth: 'Предыдущий месяц',
    openMonthSelector: 'Открыть выбор месяца',
    openYearSelector: 'Открыть выбор года',
    closeMonthSelector: 'Закрыть выбор месяца',
    closeYearSelector: 'Закрыть выбор года',
    from: 'с',
    to: 'по',
    defaultPlaceholder: 'Выбор...',
    digitSeparator: ',',
    yearLetterSkip: 0,
    isRtl: false,
  },
};

const getLocaleDetails = locale => {
  if (typeof locale === 'string') return localeLanguages[locale];
  return locale;
};

export { localeLanguages };
export default getLocaleDetails;
