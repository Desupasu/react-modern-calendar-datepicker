function _interopDefault(e) {
  return e && typeof e === 'object' && 'default' in e ? e.default : e;
}
Object.defineProperty(exports, '__esModule', { value: !0 });
const React = require('react');

const React__default = _interopDefault(React);

function _defineProperty(e, t, a) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = a),
    e
  );
}
function _extends() {
  return (_extends =
    Object.assign ||
    function(e) {
      for (let t = 1; t < arguments.length; t++) {
        const a = arguments[t];
        for (const n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      }
      return e;
    }).apply(this, arguments);
}
function ownKeys(e, t) {
  const a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, n);
  }
  return a;
}
function _objectSpread2(e) {
  for (let t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(a), !0).forEach(function(t) {
          _defineProperty(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
      : ownKeys(Object(a)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
  }
  return e;
}
function _objectWithoutPropertiesLoose(e, t) {
  if (e == null) return {};
  let a;
  let n;
  const r = {};
  const o = Object.keys(e);
  for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
  return r;
}
function _objectWithoutProperties(e, t) {
  if (e == null) return {};
  let a;
  let n;
  const r = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    const o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      (a = o[n]),
        t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
  }
  return r;
}
function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest();
}
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
    return a;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _iterableToArray(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === '[object Arguments]')
    return Array.from(e);
}
function _iterableToArrayLimit(e, t) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === '[object Arguments]') {
    const a = [];
    let n = !0;
    let r = !1;
    let o = void 0;
    try {
      for (
        var i, c = e[Symbol.iterator]();
        !(n = (i = c.next()).done) && (a.push(i.value), !t || a.length !== t);
        n = !0
      );
    } catch (e) {
      (r = !0), (o = e);
    } finally {
      try {
        n || c.return == null || c.return();
      } finally {
        if (r) throw o;
      }
    }
    return a;
  }
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}
const PERSIAN_NUMBERS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
const PERSIAN_MONTHS = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];
const GREGORIAN_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const PERSIAN_WEEK_DAYS = [
  { name: 'شنبه', short: 'ش' },
  { name: 'یکشنبه', short: 'ی' },
  { name: 'دوشنبه', short: 'د' },
  { name: 'سه شنبه', short: 'س' },
  { name: 'چهارشنبه', short: 'چ' },
  { name: 'پنجشنبه', short: 'پ' },
  { name: 'جمعه', short: 'ج', isWeekend: !0 },
];
const GREGORIAN_WEEK_DAYS = [
  { name: 'Sunday', short: 'S', isWeekend: !0 },
  { name: 'Monday', short: 'M' },
  { name: 'Tuesday', short: 'T' },
  { name: 'Wednesday', short: 'W' },
  { name: 'Thursday', short: 'T' },
  { name: 'Friday', short: 'F' },
  { name: 'Saturday', short: 'S', isWeekend: !0 },
];
const MINIMUM_SELECTABLE_YEAR_SUBTRACT = 100;
const MAXIMUM_SELECTABLE_YEAR_SUM = 50;
const TYPE_SINGLE_DATE = 'SINGLE_DATE';
const TYPE_RANGE = 'RANGE';
const TYPE_MUTLI_DATE = 'MUTLI_DATE';
const createUniqueRange = function(e, t) {
  return Array.from(Array(e).keys()).map(function(e) {
    return { value: e + 1, id: ''.concat(t, '-').concat(e) };
  });
};
const isSameDay = function(e, t) {
  return !(!e || !t) && e.day === t.day && e.month === t.month && e.year === t.year;
};
const putZero = function(e) {
  return e.toString().length === 1 ? '0'.concat(e) : e;
};
const toExtendedDay = function(e) {
  return [e.year, e.month, e.day];
};
const shallowClone = function(e) {
  return _objectSpread2({}, e);
};
const deepCloneObject = function(e) {
  return JSON.parse(
    JSON.stringify(e, function(e, t) {
      return void 0 === t ? null : t;
    }),
  );
};
const getDateAccordingToMonth = function(e, t) {
  const a = t === 'NEXT' ? 1 : -1;
  let n = e.month + a;
  let r = e.year;
  return (
    n < 1 && ((n = 12), (r -= 1)), n > 12 && ((n = 1), (r += 1)), { year: r, month: n, day: 1 }
  );
};
const hasProperty = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e || {}, t);
};
const getValueType = function(e) {
  if (Array.isArray(e)) return TYPE_MUTLI_DATE;
  if (hasProperty(e, 'from') && hasProperty(e, 'to')) return TYPE_RANGE;
  if (!e || (hasProperty(e, 'year') && hasProperty(e, 'month') && hasProperty(e, 'day')))
    return TYPE_SINGLE_DATE;
  throw new TypeError(
    "The passed value is malformed! Please make sure you're using one of the valid value types for date picker.",
  );
};
const jalaaliJs = {
  toJalaali,
  toGregorian,
  isValidJalaaliDate,
  isLeapJalaaliYear,
  jalaaliMonthLength,
  jalCal,
  j2d,
  d2j,
  g2d,
  d2g,
};
function toJalaali(e, t, a) {
  returnObject.prototype.toString.call(e) === '[object Date]' &&
    ((a = e.getDate()), (t = e.getMonth() + 1), (e = e.getFullYear())),
    d2j(g2d(e, t, a));
}
function toGregorian(e, t, a) {
  return d2g(j2d(e, t, a));
}
function isValidJalaaliDate(e, t, a) {
  return e >= -61 && e <= 3177 && t >= 1 && t <= 12 && a >= 1 && a <= jalaaliMonthLength(e, t);
}
function isLeapJalaaliYear(e) {
  return jalCal(e).leap === 0;
}
function jalaaliMonthLength(e, t) {
  return t <= 6 ? 31 : t <= 11 ? 30 : isLeapJalaaliYear(e) ? 30 : 29;
}
function jalCal(e) {
  let t;
  let a;
  let n;
  let r;
  let o;
  let i;
  const c = [
    -61,
    9,
    38,
    199,
    426,
    686,
    756,
    818,
    1111,
    1181,
    1210,
    1635,
    2060,
    2097,
    2192,
    2262,
    2324,
    2394,
    2456,
    3178,
  ];
  const l = c.length;
  const s = e + 621;
  let u = -14;
  let d = c[0];
  if (e < d || e >= c[l - 1]) throw new Error(`Invalid Jalaali year ${e}`);
  for (i = 1; i < l && ((a = (t = c[i]) - d), !(e < t)); i += 1)
    (u = u + 8 * div(a, 33) + div(mod(a, 33), 4)), (d = t);
  return (
    (u = u + 8 * div((o = e - d), 33) + div(mod(o, 33) + 3, 4)),
    mod(a, 33) === 4 && a - o == 4 && (u += 1),
    (r = 20 + u - (div(s, 4) - div(3 * (div(s, 100) + 1), 4) - 150)),
    a - o < 6 && (o = o - a + 33 * div(a + 4, 33)),
    (n = mod(mod(o + 1, 33) - 1, 4)) === -1 && (n = 4),
    { leap: n, gy: s, march: r }
  );
}
function j2d(e, t, a) {
  const n = jalCal(e);
  return g2d(n.gy, 3, n.march) + 31 * (t - 1) - div(t, 7) * (t - 7) + a - 1;
}
function d2j(e) {
  let t;
  const a = d2g(e).gy;
  let n = a - 621;
  const r = jalCal(n);
  if ((t = e - g2d(a, 3, r.march)) >= 0) {
    if (t <= 185) return { jy: n, jm: 1 + div(t, 31), jd: mod(t, 31) + 1 };
    t -= 186;
  } else (n -= 1), (t += 179), r.leap === 1 && (t += 1);
  return { jy: n, jm: 7 + div(t, 30), jd: mod(t, 30) + 1 };
}
function g2d(e, t, a) {
  let n =
    div(1461 * (e + div(t - 8, 6) + 100100), 4) + div(153 * mod(t + 9, 12) + 2, 5) + a - 34840408;
  return (n = n - div(3 * div(e + 100100 + div(t - 8, 6), 100), 4) + 752);
}
function d2g(e) {
  let t;
  let a;
  let n;
  let r;
  return (
    (t = (t = 4 * e + 139361631) + 4 * div(3 * div(4 * e + 183187720, 146097), 4) - 3908),
    (a = 5 * div(mod(t, 1461), 4) + 308),
    (n = div(mod(a, 153), 5) + 1),
    (r = mod(div(a, 153), 12) + 1),
    { gy: div(t, 1461) - 100100 + div(8 - r, 6), gm: r, gd: n }
  );
}
function div(e, t) {
  return ~~(e / t);
}
function mod(e, t) {
  return e - ~~(e / t) * t;
}
const localeLanguages = {
  en: {
    months: GREGORIAN_MONTHS,
    weekDays: GREGORIAN_WEEK_DAYS,
    weekStartingIndex: 0,
    getToday(e) {
      return e;
    },
    toNativeDate(e) {
      return new Date(e.year, e.month - 1, e.day);
    },
    getMonthLength(e) {
      return new Date(e.year, e.month, 0).getDate();
    },
    transformDigit(e) {
      return e;
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
    isRtl: !1,
  },
  fa: {
    months: PERSIAN_MONTHS,
    weekDays: PERSIAN_WEEK_DAYS,
    weekStartingIndex: 1,
    getToday(e) {
      const t = e.year;
      const a = e.month;
      const n = e.day;
      const r = jalaaliJs.toJalaali(t, a, n);
      return { year: r.jy, month: r.jm, day: r.jd };
    },
    toNativeDate(e) {
      const t = jalaaliJs.toGregorian.apply(jalaaliJs, _toConsumableArray(toExtendedDay(e)));
      return new Date(t.gy, t.gm - 1, t.gd);
    },
    getMonthLength(e) {
      return jalaaliJs.jalaaliMonthLength(e.year, e.month);
    },
    transformDigit(e) {
      return e
        .toString()
        .split('')
        .map(function(e) {
          return PERSIAN_NUMBERS[Number(e)];
        })
        .join('');
    },
    nextMonth: 'ماه بعد',
    previousMonth: 'ماه قبل',
    openMonthSelector: 'نمایش انتخابگر ماه',
    openYearSelector: 'نمایش انتخابگر سال',
    closeMonthSelector: 'بستن انتخابگر ماه',
    closeYearSelector: 'بستن انتخابگر ماه',
    from: 'از',
    to: 'تا',
    defaultPlaceholder: 'انتخاب...',
    digitSeparator: '،',
    yearLetterSkip: -2,
    isRtl: !0,
  },
};
const getLocaleDetails = function(e) {
  return typeof e === 'string' ? localeLanguages[e] : e;
};
const utils = function() {
  const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'en';
  const t = typeof e === 'string' ? getLocaleDetails(e) : e;
  const a = t.months;
  const n = t.getToday;
  const r = t.toNativeDate;
  const o = t.getMonthLength;
  const i = t.weekStartingIndex;
  const c = t.transformDigit;
  const l = function() {
    const e = new Date();
    const t = e.getFullYear();
    const a = e.getMonth() + 1;
    const r = e.getDate();
    return n({ year: t, month: a, day: r });
  };
  const s = function(e) {
    return a[e - 1];
  };
  const u = function(e) {
    return a.indexOf(e) + 1;
  };
  const d = function(e) {
    return (r(_objectSpread2({}, e, { day: 1 })).getDay() + i) % 7;
  };
  const m = function(e, t) {
    return !(!e || !t) && r(e) < r(t);
  };
  const f = function(e) {
    const t = e.day;
    const a = e.from;
    const n = e.to;
    if (!t || !a || !n) return !1;
    const o = r(t);
    const i = r(a);
    const c = r(n);
    return o > i && o < c;
  };
  return {
    getToday: l,
    getMonthName: s,
    getMonthNumber: u,
    getMonthLength: o,
    getMonthFirstWeekday: d,
    isBeforeDate: m,
    checkDayInDayRange: f,
    getLanguageDigits: c,
  };
};
const useLocaleUtils = function(e) {
  return React.useMemo(
    function() {
      return utils(e);
    },
    [e],
  );
};
const useLocaleLanguage = function(e) {
  return React.useMemo(
    function() {
      return getLocaleDetails(e);
    },
    [e],
  );
};
const getSlideDate = function(e) {
  const t = e.parent;
  const a = e.isInitialActiveChild;
  const n = e.activeDate;
  const r = e.monthChangeDirection;
  if (!t) return a ? n : getDateAccordingToMonth(n, 'NEXT');
  const o = t.children[a ? 0 : 1];
  return o.classList.contains('-shown') || o.classList.contains('-shownAnimated')
    ? n
    : getDateAccordingToMonth(n, r);
};
const animateContent = function(e) {
  const t = e.parent;
  const a = e.direction;
  const n = Array.from(t.children);
  const r = n.find(function(e) {
    return e.classList.contains('-shown');
  });
  const o = n.find(function(e) {
    return e !== r;
  });
  const i = r.classList[0];
  const c = a === 'NEXT';
  const l = function(e) {
    return e ? '-hiddenNext' : '-hiddenPrevious';
  };
  (o.style.transition = 'none'),
    (r.style.transition = ''),
    (r.className = ''.concat(i, ' ').concat(l(!c))),
    (o.className = ''.concat(i, ' ').concat(l(c))),
    o.classList.add('-shownAnimated');
};
const handleSlideAnimationEnd = function(e) {
  const t = e.target;
  t.classList.remove('-hiddenNext'),
    t.classList.remove('-hiddenPrevious'),
    t.classList.replace('-shownAnimated', '-shown');
};
const Header = function(e) {
  const t = e.maximumDate;
  const a = e.minimumDate;
  const n = e.onMonthChange;
  const r = e.activeDate;
  const o = e.monthChangeDirection;
  const i = e.onMonthSelect;
  const c = e.onYearSelect;
  const l = e.isMonthSelectorOpen;
  const s = e.isYearSelectorOpen;
  const u = e.locale;
  const d = React.useRef(null);
  const m = React.useRef(null);
  const f = useLocaleUtils(u);
  const h = f.getMonthName;
  const y = f.isBeforeDate;
  const p = f.getLanguageDigits;
  const g = useLocaleLanguage(u);
  const _ = g.isRtl;
  const S = g.nextMonth;
  const v = g.previousMonth;
  const D = g.openMonthSelector;
  const E = g.closeMonthSelector;
  const b = g.openYearSelector;
  const R = g.closeYearSelector;
  React.useEffect(
    function() {
      o && animateContent({ direction: o, parent: m.current });
    },
    [o],
  ),
    React.useEffect(
      function() {
        const e = l || s;
        const t = d.current.querySelector('.Calendar__monthYear.-shown .Calendar__monthText');
        const a = t.nextSibling;
        const n = function(e) {
          return e.classList.contains('-activeBackground');
        };
        if (!(!e && !n(t) && !n(a))) {
          const r = _toConsumableArray(d.current.querySelectorAll('.Calendar__monthArrowWrapper'));
          const o = l || n(t);
          const i = o ? t : a;
          const c = o ? a : t;
          let u = o ? 1 : -1;
          _ && (u *= -1);
          const m = e ? 1 : 0.95;
          const f = e ? ''.concat((u * c.offsetWidth) / 2) : 0;
          e ? c.setAttribute('aria-hidden', !0) : c.removeAttribute('aria-hidden'),
            c.setAttribute('tabindex', e ? '-1' : '0'),
            (c.style.transform = ''),
            (i.style.transform = 'scale('
              .concat(m, ') ')
              .concat(f ? 'translateX('.concat(f, 'px)') : '')),
            i.classList.toggle('-activeBackground'),
            c.classList.toggle('-hidden'),
            r.forEach(function(e) {
              const t = e.classList.contains('-hidden');
              e.classList.toggle('-hidden'),
                t
                  ? (e.removeAttribute('aria-hidden'), e.setAttribute('tabindex', '0'))
                  : (e.setAttribute('aria-hidden', !0), e.setAttribute('tabindex', '-1'));
            });
        }
      },
      [l, s],
    );
  const C = t && y(t, _objectSpread2({}, r, { month: r.month + 1, day: 1 }));
  const N =
    a &&
    (y(_objectSpread2({}, r, { day: 1 }), a) || isSameDay(a, _objectSpread2({}, r, { day: 1 })));
  const A = function(e) {
    Array.from(m.current.children).some(function(e) {
      return e.classList.contains('-shownAnimated');
    }) || n(e);
  };
  const T = [!0, !1].map(function(e) {
    const t = (function(e) {
      const t = getSlideDate({
        isInitialActiveChild: e,
        monthChangeDirection: o,
        activeDate: r,
        parent: m.current,
      });
      const a = p(t.year);
      return { month: h(t.month), year: a };
    })(e);
    const a = t.month;
    const n = t.year;
    const u = a === h(r.month);
    const d = _objectSpread2({}, u ? {} : { 'aria-hidden': !0 });
    return React__default.createElement(
      'div',
      _extends(
        {
          onAnimationEnd: handleSlideAnimationEnd,
          className: 'Calendar__monthYear '.concat(e ? '-shown' : '-hiddenNext'),
          role: 'presentation',
          key: String(e),
        },
        d,
      ),
      React__default.createElement(
        'button',
        _extends(
          {
            onClick: i,
            type: 'button',
            className: 'Calendar__monthText',
            'aria-label': l ? E : D,
            tabIndex: u ? '0' : '-1',
          },
          d,
        ),
        a,
      ),
      React__default.createElement(
        'button',
        _extends(
          {
            onClick: c,
            type: 'button',
            className: 'Calendar__yearText',
            'aria-label': s ? R : b,
            tabIndex: u ? '0' : '-1',
          },
          d,
        ),
        n,
      ),
    );
  });
  return React__default.createElement(
    'div',
    { ref: d, className: 'Calendar__header' },
    React__default.createElement(
      'button',
      {
        className: 'Calendar__monthArrowWrapper -right',
        onClick() {
          A('PREVIOUS');
        },
        'aria-label': v,
        type: 'button',
        disabled: N,
      },
      React__default.createElement('span', { className: 'Calendar__monthArrow' }),
    ),
    React__default.createElement(
      'div',
      { className: 'Calendar__monthYearContainer', ref: m, 'data-testid': 'month-year-container' },
      ' ',
      T,
    ),
    React__default.createElement(
      'button',
      {
        className: 'Calendar__monthArrowWrapper -left',
        onClick() {
          A('NEXT');
        },
        'aria-label': S,
        type: 'button',
        disabled: C,
      },
      React__default.createElement('span', { className: 'Calendar__monthArrow' }),
    ),
  );
};
const handleArrowKeys = function(e, t) {
  const a = t.allowVerticalArrows;
  const n = document.activeElement;
  const r = function(e, t) {
    return e ? e.children[t] : null;
  };
  const o = function(e) {
    return e && (e.hasAttribute('aria-hidden') ? null : e);
  };
  const i = n.parentElement;
  const c = i.nextSibling;
  const l = i.previousSibling;
  const s = o(n.nextSibling || r(c, 0));
  const u = l ? l.children.length - 1 : 0;
  const d = o(n.previousSibling || r(l, u));
  const m = function(e) {
    return r(e, Array.from(n.parentElement.children).indexOf(n));
  };
  const f = o(m(c));
  const h = o(m(l));
  n.dataset.isDefaultSelectable === 'true' || (n.tabIndex = '-1');
  const y = function(t) {
    e.preventDefault(), t && (t.setAttribute('tabindex', '0'), t.focus());
  };
  switch (e.key) {
    case 'ArrowRight':
      y(s);
      break;
    case 'ArrowLeft':
      y(d);
      break;
    case 'ArrowDown':
      a && y(f);
      break;
    case 'ArrowUp':
      a && y(h);
  }
};
const MonthSelector = function(e) {
  const t = e.activeDate;
  const a = e.maximumDate;
  const n = e.minimumDate;
  const r = e.onMonthSelect;
  const o = e.isOpen;
  const i = e.locale;
  const c = React.useRef(null);
  React.useEffect(
    function() {
      const e = o ? 'add' : 'remove';
      c.current.classList[e]('-open');
    },
    [o],
  );
  const l = useLocaleUtils(i);
  const s = l.getMonthNumber;
  const u = l.isBeforeDate;
  const d = useLocaleLanguage(i).months;
  return React__default.createElement(
    'div',
    _extends(
      { role: 'presentation', className: 'Calendar__monthSelectorAnimationWrapper' },
      o ? {} : { 'aria-hidden': !0 },
    ),
    React__default.createElement(
      'div',
      {
        role: 'presentation',
        'data-testid': 'month-selector-wrapper',
        className: 'Calendar__monthSelectorWrapper',
        onKeyDown(e) {
          handleArrowKeys(e, { allowVerticalArrows: !1 });
        },
      },
      React__default.createElement(
        'ul',
        { ref: c, className: 'Calendar__monthSelector', 'data-testid': 'month-selector' },
        d.map(function(e) {
          const i = s(e);
          const c = { day: 1, month: i, year: t.year };
          const l = a && u(a, _objectSpread2({}, c, { month: i }));
          const d =
            n &&
            (u(_objectSpread2({}, c, { month: i + 1 }), n) ||
              isSameDay(_objectSpread2({}, c, { month: i + 1 }), n));
          const m = i === t.month;
          return React__default.createElement(
            'li',
            { key: e, className: 'Calendar__monthSelectorItem '.concat(m ? '-active' : '') },
            React__default.createElement(
              'button',
              {
                tabIndex: m && o ? '0' : '-1',
                onClick() {
                  r(i);
                },
                className: 'Calendar__monthSelectorItemText',
                type: 'button',
                disabled: l || d,
                'aria-pressed': m,
                'data-is-default-selectable': m,
              },
              e,
            ),
          );
        }),
      ),
    ),
  );
};
const YearSelector = function(e) {
  for (
    var t = e.isOpen,
      a = e.activeDate,
      n = e.onYearSelect,
      r = e.selectorStartingYear,
      o = e.selectorEndingYear,
      i = e.maximumDate,
      c = e.minimumDate,
      l = e.locale,
      s = React.useRef(null),
      u = React.useRef(null),
      d = useLocaleUtils(l),
      m = d.getLanguageDigits,
      f = d.getToday,
      h = r || f().year - MINIMUM_SELECTABLE_YEAR_SUBTRACT,
      y = o || f().year + MAXIMUM_SELECTABLE_YEAR_SUM,
      p = [],
      g = h;
    g <= y;
    g += 1
  )
    p.push(g);
  React.useEffect(
    function() {
      const e = t ? 'add' : 'remove';
      const a = s.current.querySelector('.Calendar__yearSelectorItem.-active');
      if (!a)
        throw new RangeError(
          "Provided value for year is out of selectable year range. You're probably using a wrong locale prop value or your provided value's locale is different from the date picker locale. Try changing the 'locale' prop or the value you've provided.",
        );
      s.current.classList[e]('-faded'),
        (u.current.scrollTop = a.offsetTop - 5 * a.offsetHeight),
        u.current.classList[e]('-open');
    },
    [t],
  );
  return React__default.createElement(
    'div',
    _extends(
      { className: 'Calendar__yearSelectorAnimationWrapper', role: 'presentation' },
      t ? {} : { 'aria-hidden': !0 },
    ),
    React__default.createElement(
      'div',
      {
        ref: s,
        className: 'Calendar__yearSelectorWrapper',
        role: 'presentation',
        'data-testid': 'year-selector-wrapper',
        onKeyDown(e) {
          handleArrowKeys(e, { allowVerticalArrows: !1 });
        },
      },
      React__default.createElement(
        'ul',
        { ref: u, className: 'Calendar__yearSelector', 'data-testid': 'year-selector' },
        p.map(function(e) {
          const r = i && e > i.year;
          const o = c && e < c.year;
          const l = a.year === e;
          return React__default.createElement(
            'li',
            { key: e, className: 'Calendar__yearSelectorItem '.concat(l ? '-active' : '') },
            React__default.createElement(
              'button',
              {
                tabIndex: l && t ? '0' : '-1',
                className: 'Calendar__yearSelectorText',
                type: 'button',
                onClick() {
                  n(e);
                },
                disabled: r || o,
                'aria-pressed': l,
                'data-is-default-selectable': l,
              },
              m(e),
            ),
          );
        }),
      ),
    ),
  );
};
YearSelector.defaultProps = { selectorStartingYear: 0, selectorEndingYear: 0 };
const _excluded = ['isDisabled'];
const DaysList = function(e) {
  const t = e.activeDate;
  const a = e.value;
  const n = e.monthChangeDirection;
  const r = e.onSlideChange;
  const o = e.disabledDays;
  const i = e.onDisabledDayError;
  const c = e.minimumDate;
  const l = e.maximumDate;
  const s = e.onChange;
  const u = e.locale;
  const d = e.calendarTodayClassName;
  const m = e.calendarSelectedDayClassName;
  const f = e.calendarRangeStartClassName;
  const h = e.calendarRangeEndClassName;
  const y = e.calendarRangeBetweenClassName;
  const p = e.shouldHighlightWeekends;
  const g = e.isQuickSelectorOpen;
  const _ = e.customDaysClassName;
  const S = React.useRef(null);
  const v = useLocaleLanguage(u);
  const D = v.isRtl;
  const E = v.weekDays;
  const b = useLocaleUtils(u);
  const R = b.getToday;
  const C = b.isBeforeDate;
  const N = b.checkDayInDayRange;
  const A = b.getMonthFirstWeekday;
  const T = b.getMonthLength;
  const w = b.getLanguageDigits;
  const L = b.getMonthName;
  const P = R();
  React.useEffect(
    function() {
      n && animateContent({ direction: n, parent: S.current });
    },
    [n],
  );
  const j = function(e) {
    const t = (function() {
      switch (getValueType(a)) {
        case TYPE_SINGLE_DATE:
          return e;
        case TYPE_RANGE:
          return (function(e) {
            const t = deepCloneObject(a);
            const n = t.from && t.to ? { from: null, to: null } : t;
            const r = n.from ? 'to' : 'from';
            n[r] = e;
            const c = n.from;
            const l = n.to;
            C(n.to, n.from) && ((n.from = l), (n.to = c));
            const s = o.find(function(e) {
              return N({ day: e, from: n.from, to: n.to });
            });
            return s ? (i(s), a) : n;
          })(e);
        case TYPE_MUTLI_DATE:
          return (function(e) {
            const t = a.some(function(t) {
              return isSameDay(t, e);
            });
            const n = [].concat(_toConsumableArray(a), [e]);
            const r = a.filter(function(t) {
              return !isSameDay(t, e);
            });
            return t ? r : n;
          })(e);
      }
    })();
    s(t);
  };
  const M = function(e) {
    let t;
    let n;
    const r = isSameDay(e, P);
    const o =
      ((t = e),
      (n = getValueType(a)) === TYPE_SINGLE_DATE
        ? isSameDay(t, a)
        : n === TYPE_MUTLI_DATE
        ? a.some(function(e) {
            return isSameDay(e, t);
          })
        : void 0);
    const i = a || {};
    const c = i.from;
    const l = i.to;
    return {
      isToday: r,
      isSelected: o,
      isStartingDayRange: isSameDay(e, c),
      isEndingDayRange: isSameDay(e, l),
      isWithinRange: N({ day: e, from: c, to: l }),
    };
  };
  const O = function(e) {
    const t = e.isDisabled;
    const a = _objectWithoutProperties(e, _excluded);
    t ? i(a) : j(a);
  };
  const k = function(e, a) {
    const n = e.id;
    const r = e.value;
    const i = e.month;
    const s = e.year;
    const u = e.isStandard;
    const S = { day: r, month: i, year: s };
    const v = o.some(function(e) {
      return isSameDay(S, e);
    });
    const b = C(S, c);
    const R = C(l, S);
    const N = v || (u && (b || R));
    const A = E.some(function(e, t) {
      return e.isWeekend && t === a;
    });
    const T = (function(e) {
      const t = M(e);
      const a = t.isToday;
      const n = t.isSelected;
      const r = t.isStartingDayRange;
      const o = t.isEndingDayRange;
      const i = t.isWithinRange;
      const c = _.find(function(t) {
        return isSameDay(e, t);
      });
      return ''
        .concat(a && !n ? ' -today '.concat(d) : '')
        .concat(e.isStandard ? '' : ' -blank')
        .concat(e.isWeekend && p ? ' -weekend' : '')
        .concat(c ? ' '.concat(c.className) : '')
        .concat(n ? ' -selected '.concat(m) : '')
        .concat(r ? ' -selectedStart '.concat(f) : '')
        .concat(o ? ' -selectedEnd '.concat(h) : '')
        .concat(i ? ' -selectedBetween '.concat(y) : '')
        .concat(e.isDisabled ? ' -disabled' : '');
    })(_objectSpread2({}, S, { isWeekend: A, isStandard: u, isDisabled: N }));
    const P = ''
      .concat(E[a].name, ', ')
      .concat(r, ' ')
      .concat(L(i), ' ')
      .concat(s);
    const j = i === t.month;
    const k = M(S);
    const Y = k.isSelected;
    const I = k.isStartingDayRange;
    const x = k.isEndingDayRange;
    const W = k.isWithinRange;
    const U = (function(e) {
      const t = e.isOnActiveSlide;
      const a = e.isStandard;
      const n = e.isSelected;
      const r = e.isStartingDayRange;
      const o = e.isToday;
      const i = e.day;
      return !(g || !t || !a) && (!!(n || r || o || i === 1) || void 0);
    })(_objectSpread2({}, S, {}, k, { isOnActiveSlide: j, isStandard: u }));
    return React__default.createElement(
      'div',
      _extends(
        {
          tabIndex: U ? '0' : '-1',
          key: n,
          className: 'Calendar__day -'.concat(D ? 'rtl' : 'ltr', ' ').concat(T),
          onClick() {
            O(_objectSpread2({}, S, { isDisabled: N }));
          },
          onKeyDown(e) {
            e.key === 'Enter' && O(_objectSpread2({}, S, { isDisabled: N }));
          },
          'aria-disabled': N,
          'aria-label': P,
          'aria-selected': Y || I || x || W,
        },
        u && j && !g ? {} : { 'aria-hidden': !0 },
        { role: 'gridcell', 'data-is-default-selectable': U },
      ),
      u ? w(r) : '',
    );
  };
  const Y = function(e) {
    const a = (function(e) {
      const t = createUniqueRange(A(e), 'starting-blank');
      const a = createUniqueRange(T(e)).map(function(t) {
        return _objectSpread2({}, t, { isStandard: !0, month: e.month, year: e.year });
      });
      return [].concat(_toConsumableArray(t), _toConsumableArray(a));
    })(
      getSlideDate({
        activeDate: t,
        isInitialActiveChild: e,
        monthChangeDirection: n,
        parent: S.current,
      }),
    );
    return Array.from(Array(6).keys()).map(function(e) {
      const t = a.slice(7 * e, 7 * e + 7).map(k);
      return React__default.createElement(
        'div',
        { key: String(e), className: 'Calendar__weekRow', role: 'row' },
        t,
      );
    });
  };
  return React__default.createElement(
    'div',
    {
      ref: S,
      className: 'Calendar__sectionWrapper',
      role: 'presentation',
      'data-testid': 'days-section-wrapper',
      onKeyDown(e) {
        handleArrowKeys(e, { allowVerticalArrows: !0 });
      },
    },
    React__default.createElement(
      'div',
      {
        onAnimationEnd(e) {
          handleSlideAnimationEnd(e), r();
        },
        className: 'Calendar__section -shown',
        role: 'rowgroup',
      },
      Y(!0),
    ),
    React__default.createElement(
      'div',
      {
        onAnimationEnd(e) {
          handleSlideAnimationEnd(e), r();
        },
        className: 'Calendar__section -hiddenNext',
        role: 'rowgroup',
      },
      Y(!1),
    ),
  );
};
DaysList.defaultProps = {
  onChange() {},
  onDisabledDayError() {},
  disabledDays: [],
  calendarTodayClassName: '',
  calendarSelectedDayClassName: '',
  calendarRangeStartClassName: '',
  calendarRangeBetweenClassName: '',
  calendarRangeEndClassName: '',
  shouldHighlightWeekends: !1,
};
const Calendar = function(e) {
  const t = e.value;
  const a = e.onChange;
  const n = e.onDisabledDayError;
  const r = e.calendarClassName;
  const o = e.calendarTodayClassName;
  const i = e.calendarSelectedDayClassName;
  const c = e.calendarRangeStartClassName;
  const l = e.calendarRangeBetweenClassName;
  const s = e.calendarRangeEndClassName;
  const u = e.disabledDays;
  const d = e.colorPrimary;
  const m = e.colorPrimaryLight;
  const f = e.slideAnimationDuration;
  const h = e.minimumDate;
  const y = e.maximumDate;
  const p = e.selectorStartingYear;
  const g = e.selectorEndingYear;
  const _ = e.locale;
  const S = e.shouldHighlightWeekends;
  const v = e.renderFooter;
  const D = e.customDaysClassName;
  const E = React.useRef(null);
  const b = _slicedToArray(
    React.useState({
      activeDate: null,
      monthChangeDirection: '',
      isMonthSelectorOpen: !1,
      isYearSelectorOpen: !1,
    }),
    2,
  );
  const R = b[0];
  const C = b[1];
  React.useEffect(function() {
    const e = function(e) {
      e.key === 'Tab' && E.current.classList.remove('-noFocusOutline');
    };
    return (
      E.current.addEventListener('keyup', e, !1),
      function() {
        E.current.removeEventListener('keyup', e, !1);
      }
    );
  });
  let N;
  const A = useLocaleUtils(_).getToday;
  const T = useLocaleLanguage(_);
  const w = T.weekDays;
  const L = T.isRtl;
  const P = A();
  const j = function(e) {
    return function() {
      C(_objectSpread2({}, R, _defineProperty({}, e, !R[e])));
    };
  };
  const M = j('isMonthSelectorOpen');
  const O = j('isYearSelectorOpen');
  const k = R.activeDate
    ? shallowClone(R.activeDate)
    : (N = getValueType(t)) === TYPE_MUTLI_DATE && t.length
    ? shallowClone(t[0])
    : N === TYPE_SINGLE_DATE && t
    ? shallowClone(t)
    : N === TYPE_RANGE && t.from
    ? shallowClone(t.from)
    : shallowClone(P);
  const Y = w.map(function(e) {
    return React__default.createElement(
      'abbr',
      { key: e.name, title: e.name, className: 'Calendar__weekDay' },
      e.short,
    );
  });
  return React__default.createElement(
    'div',
    {
      className: 'Calendar -noFocusOutline '.concat(r, ' -').concat(L ? 'rtl' : 'ltr'),
      role: 'grid',
      style: { '--cl-color-primary': d, '--cl-color-primary-light': m, '--animation-duration': f },
      ref: E,
    },
    React__default.createElement(Header, {
      maximumDate: y,
      minimumDate: h,
      activeDate: k,
      onMonthChange(e) {
        C(_objectSpread2({}, R, { monthChangeDirection: e }));
      },
      onMonthSelect: M,
      onYearSelect: O,
      monthChangeDirection: R.monthChangeDirection,
      isMonthSelectorOpen: R.isMonthSelectorOpen,
      isYearSelectorOpen: R.isYearSelectorOpen,
      locale: _,
    }),
    React__default.createElement(MonthSelector, {
      isOpen: R.isMonthSelectorOpen,
      activeDate: k,
      onMonthSelect(e) {
        C(
          _objectSpread2({}, R, {
            activeDate: _objectSpread2({}, k, { month: e }),
            isMonthSelectorOpen: !1,
          }),
        );
      },
      maximumDate: y,
      minimumDate: h,
      locale: _,
    }),
    React__default.createElement(YearSelector, {
      isOpen: R.isYearSelectorOpen,
      activeDate: k,
      onYearSelect(e) {
        C(
          _objectSpread2({}, R, {
            activeDate: _objectSpread2({}, k, { year: e }),
            isYearSelectorOpen: !1,
          }),
        );
      },
      selectorStartingYear: p,
      selectorEndingYear: g,
      maximumDate: y,
      minimumDate: h,
      locale: _,
    }),
    React__default.createElement('div', { className: 'Calendar__weekDays' }, Y),
    React__default.createElement(DaysList, {
      activeDate: k,
      value: t,
      monthChangeDirection: R.monthChangeDirection,
      onSlideChange() {
        C(
          _objectSpread2({}, R, {
            activeDate: getDateAccordingToMonth(k, R.monthChangeDirection),
            monthChangeDirection: '',
          }),
        );
      },
      disabledDays: u,
      onDisabledDayError: n,
      minimumDate: h,
      maximumDate: y,
      onChange: a,
      calendarTodayClassName: o,
      calendarSelectedDayClassName: i,
      calendarRangeStartClassName: c,
      calendarRangeEndClassName: s,
      calendarRangeBetweenClassName: l,
      locale: _,
      shouldHighlightWeekends: S,
      customDaysClassName: D,
      isQuickSelectorOpen: R.isYearSelectorOpen || R.isMonthSelectorOpen,
    }),
    React__default.createElement('div', { className: 'Calendar__footer' }, v()),
  );
};
Calendar.defaultProps = {
  minimumDate: null,
  maximumDate: null,
  colorPrimary: '#0eca2d',
  colorPrimaryLight: '#cff4d5',
  slideAnimationDuration: '0.4s',
  calendarClassName: '',
  locale: 'en',
  value: null,
  renderFooter() {
    return null;
  },
  customDaysClassName: [],
};
const DatePickerInput = React__default.forwardRef(function(e, t) {
  const a = e.value;
  const n = e.inputPlaceholder;
  const r = e.inputClassName;
  const o = e.inputName;
  const i = e.formatInputText;
  const c = e.renderInput;
  const l = e.locale;
  const s = useLocaleUtils(l).getLanguageDigits;
  const u = useLocaleLanguage(l);
  const d = u.from;
  const m = u.to;
  const f = u.yearLetterSkip;
  const h = u.digitSeparator;
  const y = u.defaultPlaceholder;
  const p = u.isRtl;
  const g = function() {
    if (i()) return i();
    switch (getValueType(a)) {
      case TYPE_SINGLE_DATE:
        return (function() {
          if (!a) return '';
          const e = s(a.year);
          const t = s(putZero(a.month));
          const n = s(putZero(a.day));
          return ''
            .concat(e, '/')
            .concat(t, '/')
            .concat(n);
        })();
      case TYPE_RANGE:
        return (function() {
          if (!a.from || !a.to) return '';
          const e = a.from;
          const t = a.to;
          const n = ''
            .concat(
              s(putZero(e.year))
                .toString()
                .slice(f),
              '/',
            )
            .concat(s(putZero(e.month)), '/')
            .concat(s(putZero(e.day)));
          const r = ''
            .concat(
              s(putZero(t.year))
                .toString()
                .slice(f),
              '/',
            )
            .concat(s(putZero(t.month)), '/')
            .concat(s(putZero(t.day)));
          return ''
            .concat(d, ' ')
            .concat(n, ' ')
            .concat(m, ' ')
            .concat(r);
        })();
      case TYPE_MUTLI_DATE:
        return a
          .map(function(e) {
            return s(e.day);
          })
          .join(''.concat(h, ' '));
    }
  };
  const _ = n || y;
  return (
    c({ ref: t }) ||
    React__default.createElement('input', {
      'data-testid': 'datepicker-input',
      readOnly: !0,
      ref: t,
      value: g(),
      name: o,
      placeholder: _,
      className: 'DatePicker__input -'.concat(p ? 'rtl' : 'ltr', ' ').concat(r),
      'aria-label': _,
    })
  );
});
DatePickerInput.defaultProps = {
  formatInputText() {
    return '';
  },
  renderInput() {
    return null;
  },
  inputPlaceholder: '',
  inputClassName: '',
  inputName: '',
};
const DatePicker = function(e) {
  const t = e.value;
  const a = e.onChange;
  const n = e.formatInputText;
  const r = e.inputPlaceholder;
  const o = e.inputClassName;
  const i = e.inputName;
  const c = e.renderInput;
  const l = e.wrapperClassName;
  const s = e.calendarClassName;
  const u = e.calendarTodayClassName;
  const d = e.calendarSelectedDayClassName;
  const m = e.calendarRangeStartClassName;
  const f = e.calendarRangeBetweenClassName;
  const h = e.calendarRangeEndClassName;
  const y = e.calendarPopperPosition;
  const p = e.disabledDays;
  const g = e.onDisabledDayError;
  const _ = e.colorPrimary;
  const S = e.colorPrimaryLight;
  const v = e.slideAnimationDuration;
  const D = e.minimumDate;
  const E = e.maximumDate;
  const b = e.selectorStartingYear;
  const R = e.selectorEndingYear;
  const C = e.locale;
  const N = e.shouldHighlightWeekends;
  const A = e.renderFooter;
  const T = e.customDaysClassName;
  const w = React.useRef(null);
  const L = React.useRef(null);
  const P = React.useRef(!1);
  const j = _slicedToArray(React.useState(!1), 2);
  const M = j[0];
  const O = j[1];
  React.useEffect(function() {
    const e = function() {
      O(!1);
    };
    return (
      window.addEventListener('blur', e, !1),
      function() {
        window.removeEventListener('blur', e, !1);
      }
    );
  }, []),
    React.useEffect(
      function() {
        const e = getValueType(t);
        e !== TYPE_MUTLI_DATE &&
          (e === TYPE_SINGLE_DATE ? !M : !M && t.from && t.to) &&
          L.current.blur();
      },
      [t, M],
    );
  React.useLayoutEffect(
    function() {
      if (M) {
        const e = w.current.getBoundingClientRect();
        const t = e.left;
        const a = e.width;
        const n = e.height;
        const r = e.top;
        const o = document.documentElement;
        const i = o.clientWidth;
        const c = o.clientHeight;
        const l = t + a > i;
        const s = t < 0;
        const u = r + n > c;
        (w.current.style.left = (function() {
          const e = t + a - i;
          if (l || s) {
            const n = Math.abs(t);
            const r = s ? n : 0;
            return l ? 'calc(50% - '.concat(e, 'px)') : 'calc(50% + '.concat(r, 'px)');
          }
        })()),
          ((y === 'auto' && u) || y === 'top') && w.current.classList.add('-top');
      }
    },
    [M],
  );
  return (
    React.useEffect(
      function() {
        !M && P.current && (L.current.focus(), (P.current = !1));
      },
      [P, M],
    ),
    React__default.createElement(
      'div',
      {
        onFocus() {
          P.current || O(!0);
        },
        onBlur(e) {
          if ((e.persist(), M)) {
            const t = w.current.contains(e.relatedTarget);
            P.current
              ? ((P.current = !1), L.current.focus())
              : t && e.relatedTarget
              ? e.relatedTarget.focus()
              : O(!1);
          }
        },
        onKeyUp(e) {
          switch (e.key) {
            case 'Enter':
              O(!0);
              break;
            case 'Escape':
              O(!1), (P.current = !0);
          }
        },
        className: 'DatePicker '.concat(l),
        role: 'presentation',
      },
      React__default.createElement(DatePickerInput, {
        ref: L,
        formatInputText: n,
        value: t,
        inputPlaceholder: r,
        inputClassName: o,
        renderInput: c,
        inputName: i,
        locale: C,
      }),
      M &&
        React__default.createElement(
          React__default.Fragment,
          null,
          React__default.createElement(
            'div',
            {
              ref: w,
              className: 'DatePicker__calendarContainer',
              'data-testid': 'calendar-container',
              role: 'presentation',
              onMouseDown() {
                P.current = !0;
              },
            },
            React__default.createElement(Calendar, {
              value: t,
              onChange(e) {
                const n = getValueType(t);
                a(e), n === TYPE_SINGLE_DATE ? O(!1) : n === TYPE_RANGE && e.from && e.to && O(!1);
              },
              calendarClassName: s,
              calendarTodayClassName: u,
              calendarSelectedDayClassName: d,
              calendarRangeStartClassName: m,
              calendarRangeBetweenClassName: f,
              calendarRangeEndClassName: h,
              disabledDays: p,
              colorPrimary: _,
              colorPrimaryLight: S,
              slideAnimationDuration: v,
              onDisabledDayError: g,
              minimumDate: D,
              maximumDate: E,
              selectorStartingYear: b,
              selectorEndingYear: R,
              locale: C,
              shouldHighlightWeekends: N,
              renderFooter: A,
              customDaysClassName: T,
            }),
          ),
          React__default.createElement('div', { className: 'DatePicker__calendarArrow' }),
        ),
    )
  );
};
(DatePicker.defaultProps = { wrapperClassName: '', locale: 'en', calendarPopperPosition: 'auto' }),
  (exports.Calendar = Calendar),
  (exports.default = DatePicker),
  (exports.utils = utils);
