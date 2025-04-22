"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [617],
  {
    37025: (e, t, i) => {
      i.d(t, { _: () => n });
      function n(e, t) {
        return t.get ? t.get.call(e) : t.value;
      }
    },
    57853: (e, t, i) => {
      i.d(t, { _: () => n });
      function n(e, t, i) {
        if (t.set) t.set.call(e, i);
        else {
          if (!t.writable)
            throw TypeError("attempted to set read only private field");
          t.value = i;
        }
      }
    },
    83940: (e, t, i) => {
      i.d(t, { _: () => n });
      function n(e, t) {
        if (e !== t)
          throw TypeError("Private static access of wrong provenance");
      }
    },
    69050: (e, t, i) => {
      i.d(t, { _: () => n });
      function n(e, t) {
        if (void 0 === e)
          throw TypeError(
            "attempted to " + t + " private static field before its declaration"
          );
      }
    },
    18244: (e, t, i) => {
      i.d(t, { _: () => n });
      function n(e, t, i) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + i + " private field on non-instance"
          );
        return t.get(e);
      }
    },
    85021: (e, t, i) => {
      i.d(t, { _: () => s });
      var n = i(37025),
        r = i(18244);
      function s(e, t) {
        var i = (0, r._)(e, t, "get");
        return (0, n._)(e, i);
      }
    },
    50587: (e, t, i) => {
      i.d(t, { _: () => n });
      function n(e, t, i) {
        !(function (e, t) {
          if (t.has(e))
            throw TypeError(
              "Cannot initialize the same private elements twice on an object"
            );
        })(e, t),
          t.set(e, i);
      }
    },
    45441: (e, t, i) => {
      i.d(t, { _: () => s });
      var n = i(57853),
        r = i(18244);
      function s(e, t, i) {
        var s = (0, r._)(e, t, "set");
        return (0, n._)(e, s, i), i;
      }
    },
    90949: (e, t, i) => {
      i.d(t, { _: () => r });
      var n = i(18244);
      function r(e, t) {
        var i = (0, n._)(e, t, "update");
        return (function (e, t) {
          if (t.set) {
            if (!t.get)
              throw TypeError("attempted to read set only private field");
            return (
              "__destrWrapper" in t ||
                (t.__destrWrapper = {
                  set value(v) {
                    t.set.call(e, v);
                  },
                  get value() {
                    return t.get.call(e);
                  },
                }),
              t.__destrWrapper
            );
          }
          if (!t.writable)
            throw TypeError("attempted to set read only private field");
          return t;
        })(e, i);
      }
    },
    82632: (e, t, i) => {
      i.d(t, { _: () => a });
      var n = i(37025),
        r = i(83940),
        s = i(69050);
      function a(e, t, i) {
        return (0, r._)(e, t), (0, s._)(i, "get"), (0, n._)(e, i);
      }
    },
    93412: (e, t, i) => {
      i.d(t, { _: () => a });
      var n = i(57853),
        r = i(83940),
        s = i(69050);
      function a(e, t, i, a) {
        return (0, r._)(e, t), (0, s._)(i, "set"), (0, n._)(e, i, a), a;
      }
    },
    33755: (e, t, i) => {
      i.d(t, { _p: () => r });
      var n = i(12115);
      function r() {
        n.useLayoutEffect(() => {
          let e = window.getComputedStyle(document.body).overflow;
          return (
            (document.body.style.overflow = "hidden"),
            () => {
              document.body.style.overflow = e;
            }
          );
        }, []);
      }
    },
    68815: (e, t, i) => {
      i.d(t, { q: () => r });
      let n = {};
      function r() {
        return n;
      }
    },
    56982: (e, t, i) => {
      i.d(t, {
        Cg: () => s,
        _P: () => o,
        my: () => n,
        s0: () => a,
        w4: () => r,
      });
      let n = 6048e5,
        r = 864e5,
        s = 6e4,
        a = 36e5,
        o = Symbol.for("constructDateFrom");
    },
    68630: (e, t, i) => {
      i.d(t, { w: () => r });
      var n = i(56982);
      function r(e, t) {
        return "function" == typeof e
          ? e(t)
          : e && "object" == typeof e && n._P in e
          ? e[n._P](t)
          : e instanceof Date
          ? new e.constructor(t)
          : new Date(t);
      }
    },
    47395: (e, t, i) => {
      i.d(t, { GP: () => $ });
      let n = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function r(e) {
        return function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[i] || e.formats[e.defaultWidth];
        };
      }
      let s = {
          date: r({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: r({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: r({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        a = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function o(e) {
        return (t, i) => {
          let n;
          if (
            "formatting" ===
              ((null == i ? void 0 : i.context)
                ? String(i.context)
                : "standalone") &&
            e.formattingValues
          ) {
            let t = e.defaultFormattingWidth || e.defaultWidth,
              r = (null == i ? void 0 : i.width) ? String(i.width) : t;
            n = e.formattingValues[r] || e.formattingValues[t];
          } else {
            let t = e.defaultWidth,
              r = (null == i ? void 0 : i.width)
                ? String(i.width)
                : e.defaultWidth;
            n = e.values[r] || e.values[t];
          }
          return n[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      function l(e) {
        return function (t) {
          let i,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            s =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(s);
          if (!a) return null;
          let o = a[0],
            l =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            u = Array.isArray(l)
              ? (function (e, t) {
                  for (let i = 0; i < e.length; i++) if (t(e[i])) return i;
                })(l, (e) => e.test(o))
              : (function (e, t) {
                  for (let i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i) && t(e[i]))
                      return i;
                })(l, (e) => e.test(o));
          return (
            (i = e.valueCallback ? e.valueCallback(u) : u),
            {
              value: (i = n.valueCallback ? n.valueCallback(i) : i),
              rest: t.slice(o.length),
            }
          );
        };
      }
      let u = {
        code: "en-US",
        formatDistance: (e, t, i) => {
          let r;
          let s = n[e];
          return ((r =
            "string" == typeof s
              ? s
              : 1 === t
              ? s.one
              : s.other.replace("{{count}}", t.toString())),
          null == i ? void 0 : i.addSuffix)
            ? i.comparison && i.comparison > 0
              ? "in " + r
              : r + " ago"
            : r;
        },
        formatLong: s,
        formatRelative: (e, t, i, n) => a[e],
        localize: {
          ordinalNumber: (e, t) => {
            let i = Number(e),
              n = i % 100;
            if (n > 20 || n < 10)
              switch (n % 10) {
                case 1:
                  return i + "st";
                case 2:
                  return i + "nd";
                case 3:
                  return i + "rd";
              }
            return i + "th";
          },
          era: o({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"],
            },
            defaultWidth: "wide",
          }),
          quarter: o({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1st quarter",
                "2nd quarter",
                "3rd quarter",
                "4th quarter",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: (e) => e - 1,
          }),
          month: o({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              wide: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            defaultWidth: "wide",
          }),
          day: o({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: o({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        },
        match: {
          ordinalNumber: (function (e) {
            return function (t) {
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = t.match(e.matchPattern);
              if (!n) return null;
              let r = n[0],
                s = t.match(e.parsePattern);
              if (!s) return null;
              let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
              return {
                value: (a = i.valueCallback ? i.valueCallback(a) : a),
                rest: t.slice(r.length),
              };
            };
          })({
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: (e) => parseInt(e, 10),
          }),
          era: l({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: l({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
          }),
          month: l({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: l({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: l({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var h = i(68815),
        d = i(91880);
      function c(e) {
        let t = (0, d.a)(e),
          i = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds()
            )
          );
        return i.setUTCFullYear(t.getFullYear()), +e - +i;
      }
      var m = i(68630),
        p = i(56982);
      function g(e, t) {
        let i = (0, d.a)(e, null == t ? void 0 : t.in);
        return i.setHours(0, 0, 0, 0), i;
      }
      function f(e, t) {
        var i, n, r, s, a, o, l, u;
        let c = (0, h.q)(),
          m =
            null !==
              (u =
                null !==
                  (l =
                    null !==
                      (o =
                        null !== (a = null == t ? void 0 : t.weekStartsOn) &&
                        void 0 !== a
                          ? a
                          : null == t
                          ? void 0
                          : null === (n = t.locale) || void 0 === n
                          ? void 0
                          : null === (i = n.options) || void 0 === i
                          ? void 0
                          : i.weekStartsOn) && void 0 !== o
                      ? o
                      : c.weekStartsOn) && void 0 !== l
                  ? l
                  : null === (s = c.locale) || void 0 === s
                  ? void 0
                  : null === (r = s.options) || void 0 === r
                  ? void 0
                  : r.weekStartsOn) && void 0 !== u
              ? u
              : 0,
          p = (0, d.a)(e, null == t ? void 0 : t.in),
          g = p.getDay();
        return (
          p.setDate(p.getDate() - ((g < m ? 7 : 0) + g - m)),
          p.setHours(0, 0, 0, 0),
          p
        );
      }
      function A(e, t) {
        return f(e, { ...t, weekStartsOn: 1 });
      }
      function w(e, t) {
        let i = (0, d.a)(e, null == t ? void 0 : t.in),
          n = i.getFullYear(),
          r = (0, m.w)(i, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        let s = A(r),
          a = (0, m.w)(i, 0);
        a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
        let o = A(a);
        return i.getTime() >= s.getTime()
          ? n + 1
          : i.getTime() >= o.getTime()
          ? n
          : n - 1;
      }
      function b(e, t) {
        var i, n, r, s, a, o, l, u;
        let c = (0, d.a)(e, null == t ? void 0 : t.in),
          p = c.getFullYear(),
          g = (0, h.q)(),
          A =
            null !==
              (u =
                null !==
                  (l =
                    null !==
                      (o =
                        null !==
                          (a = null == t ? void 0 : t.firstWeekContainsDate) &&
                        void 0 !== a
                          ? a
                          : null == t
                          ? void 0
                          : null === (n = t.locale) || void 0 === n
                          ? void 0
                          : null === (i = n.options) || void 0 === i
                          ? void 0
                          : i.firstWeekContainsDate) && void 0 !== o
                      ? o
                      : g.firstWeekContainsDate) && void 0 !== l
                  ? l
                  : null === (s = g.locale) || void 0 === s
                  ? void 0
                  : null === (r = s.options) || void 0 === r
                  ? void 0
                  : r.firstWeekContainsDate) && void 0 !== u
              ? u
              : 1,
          w = (0, m.w)((null == t ? void 0 : t.in) || e, 0);
        w.setFullYear(p + 1, 0, A), w.setHours(0, 0, 0, 0);
        let b = f(w, t),
          x = (0, m.w)((null == t ? void 0 : t.in) || e, 0);
        x.setFullYear(p, 0, A), x.setHours(0, 0, 0, 0);
        let y = f(x, t);
        return +c >= +b ? p + 1 : +c >= +y ? p : p - 1;
      }
      function x(e, t) {
        let i = Math.abs(e).toString().padStart(t, "0");
        return (e < 0 ? "-" : "") + i;
      }
      let y = {
          y(e, t) {
            let i = e.getFullYear(),
              n = i > 0 ? i : 1 - i;
            return x("yy" === t ? n % 100 : n, t.length);
          },
          M(e, t) {
            let i = e.getMonth();
            return "M" === t ? String(i + 1) : x(i + 1, 2);
          },
          d: (e, t) => x(e.getDate(), t.length),
          a(e, t) {
            let i = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return i.toUpperCase();
              case "aaa":
                return i;
              case "aaaaa":
                return i[0];
              default:
                return "am" === i ? "a.m." : "p.m.";
            }
          },
          h: (e, t) => x(e.getHours() % 12 || 12, t.length),
          H: (e, t) => x(e.getHours(), t.length),
          m: (e, t) => x(e.getMinutes(), t.length),
          s: (e, t) => x(e.getSeconds(), t.length),
          S(e, t) {
            let i = t.length;
            return x(
              Math.trunc(e.getMilliseconds() * Math.pow(10, i - 3)),
              t.length
            );
          },
        },
        _ = {
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        T = {
          G: function (e, t, i) {
            let n = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
              case "G":
              case "GG":
              case "GGG":
                return i.era(n, { width: "abbreviated" });
              case "GGGGG":
                return i.era(n, { width: "narrow" });
              default:
                return i.era(n, { width: "wide" });
            }
          },
          y: function (e, t, i) {
            if ("yo" === t) {
              let t = e.getFullYear();
              return i.ordinalNumber(t > 0 ? t : 1 - t, { unit: "year" });
            }
            return y.y(e, t);
          },
          Y: function (e, t, i, n) {
            let r = b(e, n),
              s = r > 0 ? r : 1 - r;
            return "YY" === t
              ? x(s % 100, 2)
              : "Yo" === t
              ? i.ordinalNumber(s, { unit: "year" })
              : x(s, t.length);
          },
          R: function (e, t) {
            return x(w(e), t.length);
          },
          u: function (e, t) {
            return x(e.getFullYear(), t.length);
          },
          Q: function (e, t, i) {
            let n = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "Q":
                return String(n);
              case "QQ":
                return x(n, 2);
              case "Qo":
                return i.ordinalNumber(n, { unit: "quarter" });
              case "QQQ":
                return i.quarter(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return i.quarter(n, { width: "narrow", context: "formatting" });
              default:
                return i.quarter(n, { width: "wide", context: "formatting" });
            }
          },
          q: function (e, t, i) {
            let n = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "q":
                return String(n);
              case "qq":
                return x(n, 2);
              case "qo":
                return i.ordinalNumber(n, { unit: "quarter" });
              case "qqq":
                return i.quarter(n, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return i.quarter(n, { width: "narrow", context: "standalone" });
              default:
                return i.quarter(n, { width: "wide", context: "standalone" });
            }
          },
          M: function (e, t, i) {
            let n = e.getMonth();
            switch (t) {
              case "M":
              case "MM":
                return y.M(e, t);
              case "Mo":
                return i.ordinalNumber(n + 1, { unit: "month" });
              case "MMM":
                return i.month(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return i.month(n, { width: "narrow", context: "formatting" });
              default:
                return i.month(n, { width: "wide", context: "formatting" });
            }
          },
          L: function (e, t, i) {
            let n = e.getMonth();
            switch (t) {
              case "L":
                return String(n + 1);
              case "LL":
                return x(n + 1, 2);
              case "Lo":
                return i.ordinalNumber(n + 1, { unit: "month" });
              case "LLL":
                return i.month(n, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return i.month(n, { width: "narrow", context: "standalone" });
              default:
                return i.month(n, { width: "wide", context: "standalone" });
            }
          },
          w: function (e, t, i, n) {
            let r = (function (e, t) {
              let i = (0, d.a)(e, null == t ? void 0 : t.in);
              return (
                Math.round(
                  (+f(i, t) -
                    +(function (e, t) {
                      var i, n, r, s, a, o, l, u;
                      let d = (0, h.q)(),
                        c =
                          null !==
                            (u =
                              null !==
                                (l =
                                  null !==
                                    (o =
                                      null !==
                                        (a =
                                          null == t
                                            ? void 0
                                            : t.firstWeekContainsDate) &&
                                      void 0 !== a
                                        ? a
                                        : null == t
                                        ? void 0
                                        : null === (n = t.locale) ||
                                          void 0 === n
                                        ? void 0
                                        : null === (i = n.options) ||
                                          void 0 === i
                                        ? void 0
                                        : i.firstWeekContainsDate) &&
                                  void 0 !== o
                                    ? o
                                    : d.firstWeekContainsDate) && void 0 !== l
                                ? l
                                : null === (s = d.locale) || void 0 === s
                                ? void 0
                                : null === (r = s.options) || void 0 === r
                                ? void 0
                                : r.firstWeekContainsDate) && void 0 !== u
                            ? u
                            : 1,
                        p = b(e, t),
                        g = (0, m.w)((null == t ? void 0 : t.in) || e, 0);
                      return (
                        g.setFullYear(p, 0, c), g.setHours(0, 0, 0, 0), f(g, t)
                      );
                    })(i, t)) /
                    p.my
                ) + 1
              );
            })(e, n);
            return "wo" === t
              ? i.ordinalNumber(r, { unit: "week" })
              : x(r, t.length);
          },
          I: function (e, t, i) {
            let n = (function (e, t) {
              let i = (0, d.a)(e, void 0);
              return (
                Math.round(
                  (+A(i) -
                    +(function (e, t) {
                      let i = w(e, void 0),
                        n = (0, m.w)(e, 0);
                      return (
                        n.setFullYear(i, 0, 4), n.setHours(0, 0, 0, 0), A(n)
                      );
                    })(i)) /
                    p.my
                ) + 1
              );
            })(e);
            return "Io" === t
              ? i.ordinalNumber(n, { unit: "week" })
              : x(n, t.length);
          },
          d: function (e, t, i) {
            return "do" === t
              ? i.ordinalNumber(e.getDate(), { unit: "date" })
              : y.d(e, t);
          },
          D: function (e, t, i) {
            let n = (function (e, t) {
              let i = (0, d.a)(e, void 0);
              return (
                (function (e, t, i) {
                  let [n, r] = (function (e) {
                      for (
                        var t = arguments.length,
                          i = Array(t > 1 ? t - 1 : 0),
                          n = 1;
                        n < t;
                        n++
                      )
                        i[n - 1] = arguments[n];
                      let r = m.w.bind(
                        null,
                        e || i.find((e) => "object" == typeof e)
                      );
                      return i.map(r);
                    })(void 0, e, t),
                    s = g(n),
                    a = g(r);
                  return Math.round((+s - c(s) - (+a - c(a))) / p.w4);
                })(
                  i,
                  (function (e, t) {
                    let i = (0, d.a)(e, void 0);
                    return (
                      i.setFullYear(i.getFullYear(), 0, 1),
                      i.setHours(0, 0, 0, 0),
                      i
                    );
                  })(i)
                ) + 1
              );
            })(e);
            return "Do" === t
              ? i.ordinalNumber(n, { unit: "dayOfYear" })
              : x(n, t.length);
          },
          E: function (e, t, i) {
            let n = e.getDay();
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return i.day(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return i.day(n, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return i.day(n, { width: "short", context: "formatting" });
              default:
                return i.day(n, { width: "wide", context: "formatting" });
            }
          },
          e: function (e, t, i, n) {
            let r = e.getDay(),
              s = (r - n.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "e":
                return String(s);
              case "ee":
                return x(s, 2);
              case "eo":
                return i.ordinalNumber(s, { unit: "day" });
              case "eee":
                return i.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return i.day(r, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return i.day(r, { width: "short", context: "formatting" });
              default:
                return i.day(r, { width: "wide", context: "formatting" });
            }
          },
          c: function (e, t, i, n) {
            let r = e.getDay(),
              s = (r - n.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "c":
                return String(s);
              case "cc":
                return x(s, t.length);
              case "co":
                return i.ordinalNumber(s, { unit: "day" });
              case "ccc":
                return i.day(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return i.day(r, { width: "narrow", context: "standalone" });
              case "cccccc":
                return i.day(r, { width: "short", context: "standalone" });
              default:
                return i.day(r, { width: "wide", context: "standalone" });
            }
          },
          i: function (e, t, i) {
            let n = e.getDay(),
              r = 0 === n ? 7 : n;
            switch (t) {
              case "i":
                return String(r);
              case "ii":
                return x(r, t.length);
              case "io":
                return i.ordinalNumber(r, { unit: "day" });
              case "iii":
                return i.day(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return i.day(n, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return i.day(n, { width: "short", context: "formatting" });
              default:
                return i.day(n, { width: "wide", context: "formatting" });
            }
          },
          a: function (e, t, i) {
            let n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return i.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return i
                  .dayPeriod(n, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return i.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return i.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          b: function (e, t, i) {
            let n;
            let r = e.getHours();
            switch (
              ((n =
                12 === r
                  ? _.noon
                  : 0 === r
                  ? _.midnight
                  : r / 12 >= 1
                  ? "pm"
                  : "am"),
              t)
            ) {
              case "b":
              case "bb":
                return i.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return i
                  .dayPeriod(n, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return i.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return i.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          B: function (e, t, i) {
            let n;
            let r = e.getHours();
            switch (
              ((n =
                r >= 17
                  ? _.evening
                  : r >= 12
                  ? _.afternoon
                  : r >= 4
                  ? _.morning
                  : _.night),
              t)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return i.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return i.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return i.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          h: function (e, t, i) {
            if ("ho" === t) {
              let t = e.getHours() % 12;
              return 0 === t && (t = 12), i.ordinalNumber(t, { unit: "hour" });
            }
            return y.h(e, t);
          },
          H: function (e, t, i) {
            return "Ho" === t
              ? i.ordinalNumber(e.getHours(), { unit: "hour" })
              : y.H(e, t);
          },
          K: function (e, t, i) {
            let n = e.getHours() % 12;
            return "Ko" === t
              ? i.ordinalNumber(n, { unit: "hour" })
              : x(n, t.length);
          },
          k: function (e, t, i) {
            let n = e.getHours();
            return (0 === n && (n = 24), "ko" === t)
              ? i.ordinalNumber(n, { unit: "hour" })
              : x(n, t.length);
          },
          m: function (e, t, i) {
            return "mo" === t
              ? i.ordinalNumber(e.getMinutes(), { unit: "minute" })
              : y.m(e, t);
          },
          s: function (e, t, i) {
            return "so" === t
              ? i.ordinalNumber(e.getSeconds(), { unit: "second" })
              : y.s(e, t);
          },
          S: function (e, t) {
            return y.S(e, t);
          },
          X: function (e, t, i) {
            let n = e.getTimezoneOffset();
            if (0 === n) return "Z";
            switch (t) {
              case "X":
                return S(n);
              case "XXXX":
              case "XX":
                return M(n);
              default:
                return M(n, ":");
            }
          },
          x: function (e, t, i) {
            let n = e.getTimezoneOffset();
            switch (t) {
              case "x":
                return S(n);
              case "xxxx":
              case "xx":
                return M(n);
              default:
                return M(n, ":");
            }
          },
          O: function (e, t, i) {
            let n = e.getTimezoneOffset();
            switch (t) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + E(n, ":");
              default:
                return "GMT" + M(n, ":");
            }
          },
          z: function (e, t, i) {
            let n = e.getTimezoneOffset();
            switch (t) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + E(n, ":");
              default:
                return "GMT" + M(n, ":");
            }
          },
          t: function (e, t, i) {
            return x(Math.trunc(+e / 1e3), t.length);
          },
          T: function (e, t, i) {
            return x(+e, t.length);
          },
        };
      function E(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = e > 0 ? "-" : "+",
          n = Math.abs(e),
          r = Math.trunc(n / 60),
          s = n % 60;
        return 0 === s ? i + String(r) : i + String(r) + t + x(s, 2);
      }
      function S(e, t) {
        return e % 60 == 0
          ? (e > 0 ? "-" : "+") + x(Math.abs(e) / 60, 2)
          : M(e, t);
      }
      function M(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = Math.abs(e);
        return (
          (e > 0 ? "-" : "+") + x(Math.trunc(i / 60), 2) + t + x(i % 60, 2)
        );
      }
      let R = (e, t) => {
          switch (e) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        C = (e, t) => {
          switch (e) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        },
        L = {
          p: C,
          P: (e, t) => {
            let i;
            let n = e.match(/(P+)(p+)?/) || [],
              r = n[1],
              s = n[2];
            if (!s) return R(e, t);
            switch (r) {
              case "P":
                i = t.dateTime({ width: "short" });
                break;
              case "PP":
                i = t.dateTime({ width: "medium" });
                break;
              case "PPP":
                i = t.dateTime({ width: "long" });
                break;
              default:
                i = t.dateTime({ width: "full" });
            }
            return i.replace("{{date}}", R(r, t)).replace("{{time}}", C(s, t));
          },
        },
        k = /^D+$/,
        I = /^Y+$/,
        P = ["D", "DD", "YY", "YYYY"],
        N = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        O = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        D = /^'([^]*?)'?$/,
        H = /''/g,
        F = /[a-zA-Z]/;
      function $(e, t, i) {
        var n, r, s, a, o, l, c, m, p, g, f, A, w, b, x, y, _, E;
        let S = (0, h.q)(),
          M =
            null !==
              (g =
                null !== (p = null == i ? void 0 : i.locale) && void 0 !== p
                  ? p
                  : S.locale) && void 0 !== g
              ? g
              : u,
          R =
            null !==
              (b =
                null !==
                  (w =
                    null !==
                      (A =
                        null !==
                          (f = null == i ? void 0 : i.firstWeekContainsDate) &&
                        void 0 !== f
                          ? f
                          : null == i
                          ? void 0
                          : null === (r = i.locale) || void 0 === r
                          ? void 0
                          : null === (n = r.options) || void 0 === n
                          ? void 0
                          : n.firstWeekContainsDate) && void 0 !== A
                      ? A
                      : S.firstWeekContainsDate) && void 0 !== w
                  ? w
                  : null === (a = S.locale) || void 0 === a
                  ? void 0
                  : null === (s = a.options) || void 0 === s
                  ? void 0
                  : s.firstWeekContainsDate) && void 0 !== b
              ? b
              : 1,
          C =
            null !==
              (E =
                null !==
                  (_ =
                    null !==
                      (y =
                        null !== (x = null == i ? void 0 : i.weekStartsOn) &&
                        void 0 !== x
                          ? x
                          : null == i
                          ? void 0
                          : null === (l = i.locale) || void 0 === l
                          ? void 0
                          : null === (o = l.options) || void 0 === o
                          ? void 0
                          : o.weekStartsOn) && void 0 !== y
                      ? y
                      : S.weekStartsOn) && void 0 !== _
                  ? _
                  : null === (m = S.locale) || void 0 === m
                  ? void 0
                  : null === (c = m.options) || void 0 === c
                  ? void 0
                  : c.weekStartsOn) && void 0 !== E
              ? E
              : 0,
          $ = (0, d.a)(e, null == i ? void 0 : i.in);
        if (
          (!(
            $ instanceof Date ||
            ("object" == typeof $ &&
              "[object Date]" === Object.prototype.toString.call($))
          ) &&
            "number" != typeof $) ||
          isNaN(+(0, d.a)($))
        )
          throw RangeError("Invalid time value");
        let B = t
          .match(O)
          .map((e) => {
            let t = e[0];
            return "p" === t || "P" === t ? (0, L[t])(e, M.formatLong) : e;
          })
          .join("")
          .match(N)
          .map((e) => {
            if ("''" === e) return { isToken: !1, value: "'" };
            let t = e[0];
            if ("'" === t)
              return {
                isToken: !1,
                value: (function (e) {
                  let t = e.match(D);
                  return t ? t[1].replace(H, "'") : e;
                })(e),
              };
            if (T[t]) return { isToken: !0, value: e };
            if (t.match(F))
              throw RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  t +
                  "`"
              );
            return { isToken: !1, value: e };
          });
        M.localize.preprocessor && (B = M.localize.preprocessor($, B));
        let j = { firstWeekContainsDate: R, weekStartsOn: C, locale: M };
        return B.map((n) => {
          if (!n.isToken) return n.value;
          let r = n.value;
          return (
            ((!(null == i ? void 0 : i.useAdditionalWeekYearTokens) &&
              I.test(r)) ||
              (!(null == i ? void 0 : i.useAdditionalDayOfYearTokens) &&
                k.test(r))) &&
              (function (e, t, i) {
                let n = (function (e, t, i) {
                  let n = "Y" === e[0] ? "years" : "days of the month";
                  return "Use `"
                    .concat(e.toLowerCase(), "` instead of `")
                    .concat(e, "` (in `")
                    .concat(t, "`) for formatting ")
                    .concat(n, " to the input `")
                    .concat(
                      i,
                      "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                    );
                })(e, t, i);
                if ((console.warn(n), P.includes(e))) throw RangeError(n);
              })(r, t, String(e)),
            (0, T[r[0]])($, r, M.localize, j)
          );
        }).join("");
      }
    },
    30113: (e, t, i) => {
      i.d(t, { H: () => a });
      var n = i(56982),
        r = i(68630),
        s = i(91880);
      function a(e, t) {
        var i;
        let a, g;
        let f = () => (0, r.w)(null == t ? void 0 : t.in, NaN),
          A =
            null !== (i = null == t ? void 0 : t.additionalDigits) &&
            void 0 !== i
              ? i
              : 2,
          w = (function (e) {
            let t;
            let i = {},
              n = e.split(o.dateTimeDelimiter);
            if (n.length > 2) return i;
            if (
              (/:/.test(n[0])
                ? (t = n[0])
                : ((i.date = n[0]),
                  (t = n[1]),
                  o.timeZoneDelimiter.test(i.date) &&
                    ((i.date = e.split(o.timeZoneDelimiter)[0]),
                    (t = e.substr(i.date.length, e.length)))),
              t)
            ) {
              let e = o.timezone.exec(t);
              e
                ? ((i.time = t.replace(e[1], "")), (i.timezone = e[1]))
                : (i.time = t);
            }
            return i;
          })(e);
        if (w.date) {
          let e = (function (e, t) {
            let i = RegExp(
                "^(?:(\\d{4}|[+-]\\d{" +
                  (4 + t) +
                  "})|(\\d{2}|[+-]\\d{" +
                  (2 + t) +
                  "})$)"
              ),
              n = e.match(i);
            if (!n) return { year: NaN, restDateString: "" };
            let r = n[1] ? parseInt(n[1]) : null,
              s = n[2] ? parseInt(n[2]) : null;
            return {
              year: null === s ? r : 100 * s,
              restDateString: e.slice((n[1] || n[2]).length),
            };
          })(w.date, A);
          a = (function (e, t) {
            if (null === t) return new Date(NaN);
            let i = e.match(l);
            if (!i) return new Date(NaN);
            let n = !!i[4],
              r = d(i[1]),
              s = d(i[2]) - 1,
              a = d(i[3]),
              o = d(i[4]),
              u = d(i[5]) - 1;
            if (n)
              return o >= 1 && o <= 53 && u >= 0 && u <= 6
                ? (function (e, t, i) {
                    let n = new Date(0);
                    n.setUTCFullYear(e, 0, 4);
                    let r = n.getUTCDay() || 7;
                    return (
                      n.setUTCDate(n.getUTCDate() + ((t - 1) * 7 + i + 1 - r)),
                      n
                    );
                  })(t, o, u)
                : new Date(NaN);
            {
              let e = new Date(0);
              return s >= 0 &&
                s <= 11 &&
                a >= 1 &&
                a <= (m[s] || (p(t) ? 29 : 28)) &&
                r >= 1 &&
                r <= (p(t) ? 366 : 365)
                ? (e.setUTCFullYear(t, s, Math.max(r, a)), e)
                : new Date(NaN);
            }
          })(e.restDateString, e.year);
        }
        if (!a || isNaN(+a)) return f();
        let b = +a,
          x = 0;
        if (
          w.time &&
          isNaN(
            (x = (function (e) {
              let t = e.match(u);
              if (!t) return NaN;
              let i = c(t[1]),
                r = c(t[2]),
                s = c(t[3]);
              return (
                24 === i
                  ? 0 === r && 0 === s
                  : s >= 0 && s < 60 && r >= 0 && r < 60 && i >= 0 && i < 25
              )
                ? i * n.s0 + r * n.Cg + 1e3 * s
                : NaN;
            })(w.time))
          )
        )
          return f();
        if (w.timezone) {
          if (
            isNaN(
              (g = (function (e) {
                if ("Z" === e) return 0;
                let t = e.match(h);
                if (!t) return 0;
                let i = "+" === t[1] ? -1 : 1,
                  r = parseInt(t[2]),
                  s = (t[3] && parseInt(t[3])) || 0;
                return s >= 0 && s <= 59 ? i * (r * n.s0 + s * n.Cg) : NaN;
              })(w.timezone))
            )
          )
            return f();
        } else {
          let e = new Date(b + x),
            i = (0, s.a)(0, null == t ? void 0 : t.in);
          return (
            i.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
            i.setHours(
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds()
            ),
            i
          );
        }
        return (0, s.a)(b + x + g, null == t ? void 0 : t.in);
      }
      let o = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        l = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        u =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        h = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function d(e) {
        return e ? parseInt(e) : 1;
      }
      function c(e) {
        return (e && parseFloat(e.replace(",", "."))) || 0;
      }
      let m = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function p(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
    },
    91880: (e, t, i) => {
      i.d(t, { a: () => r });
      var n = i(68630);
      function r(e, t) {
        return (0, n.w)(t || e, e);
      }
    },
    63337: (e, t, i) => {
      i.d(t, { Ay: () => g });
      class n {
        constructor(e, t, i, r, s = "div") {
          (this.parent = e),
            (this.object = t),
            (this.property = i),
            (this._disabled = !1),
            (this._hidden = !1),
            (this.initialValue = this.getValue()),
            (this.domElement = document.createElement(s)),
            this.domElement.classList.add("controller"),
            this.domElement.classList.add(r),
            (this.$name = document.createElement("div")),
            this.$name.classList.add("name"),
            (n.nextNameID = n.nextNameID || 0),
            (this.$name.id = `lil-gui-name-${++n.nextNameID}`),
            (this.$widget = document.createElement("div")),
            this.$widget.classList.add("widget"),
            (this.$disable = this.$widget),
            this.domElement.appendChild(this.$name),
            this.domElement.appendChild(this.$widget),
            this.domElement.addEventListener("keydown", (e) =>
              e.stopPropagation()
            ),
            this.domElement.addEventListener("keyup", (e) =>
              e.stopPropagation()
            ),
            this.parent.children.push(this),
            this.parent.controllers.push(this),
            this.parent.$children.appendChild(this.domElement),
            (this._listenCallback = this._listenCallback.bind(this)),
            this.name(i);
        }
        name(e) {
          return (this._name = e), (this.$name.textContent = e), this;
        }
        onChange(e) {
          return (this._onChange = e), this;
        }
        _callOnChange() {
          this.parent._callOnChange(this),
            void 0 !== this._onChange &&
              this._onChange.call(this, this.getValue()),
            (this._changed = !0);
        }
        onFinishChange(e) {
          return (this._onFinishChange = e), this;
        }
        _callOnFinishChange() {
          this._changed &&
            (this.parent._callOnFinishChange(this),
            void 0 !== this._onFinishChange &&
              this._onFinishChange.call(this, this.getValue())),
            (this._changed = !1);
        }
        reset() {
          return (
            this.setValue(this.initialValue), this._callOnFinishChange(), this
          );
        }
        enable(e = !0) {
          return this.disable(!e);
        }
        disable(e = !0) {
          return (
            e === this._disabled ||
              ((this._disabled = e),
              this.domElement.classList.toggle("disabled", e),
              this.$disable.toggleAttribute("disabled", e)),
            this
          );
        }
        show(e = !0) {
          return (
            (this._hidden = !e),
            (this.domElement.style.display = this._hidden ? "none" : ""),
            this
          );
        }
        hide() {
          return this.show(!1);
        }
        options(e) {
          let t = this.parent.add(this.object, this.property, e);
          return t.name(this._name), this.destroy(), t;
        }
        min(e) {
          return this;
        }
        max(e) {
          return this;
        }
        step(e) {
          return this;
        }
        decimals(e) {
          return this;
        }
        listen(e = !0) {
          return (
            (this._listening = e),
            void 0 !== this._listenCallbackID &&
              (cancelAnimationFrame(this._listenCallbackID),
              (this._listenCallbackID = void 0)),
            this._listening && this._listenCallback(),
            this
          );
        }
        _listenCallback() {
          this._listenCallbackID = requestAnimationFrame(this._listenCallback);
          let e = this.save();
          e !== this._listenPrevValue && this.updateDisplay(),
            (this._listenPrevValue = e);
        }
        getValue() {
          return this.object[this.property];
        }
        setValue(e) {
          return (
            this.getValue() !== e &&
              ((this.object[this.property] = e),
              this._callOnChange(),
              this.updateDisplay()),
            this
          );
        }
        updateDisplay() {
          return this;
        }
        load(e) {
          return this.setValue(e), this._callOnFinishChange(), this;
        }
        save() {
          return this.getValue();
        }
        destroy() {
          this.listen(!1),
            this.parent.children.splice(this.parent.children.indexOf(this), 1),
            this.parent.controllers.splice(
              this.parent.controllers.indexOf(this),
              1
            ),
            this.parent.$children.removeChild(this.domElement);
        }
      }
      class r extends n {
        constructor(e, t, i) {
          super(e, t, i, "boolean", "label"),
            (this.$input = document.createElement("input")),
            this.$input.setAttribute("type", "checkbox"),
            this.$input.setAttribute("aria-labelledby", this.$name.id),
            this.$widget.appendChild(this.$input),
            this.$input.addEventListener("change", () => {
              this.setValue(this.$input.checked), this._callOnFinishChange();
            }),
            (this.$disable = this.$input),
            this.updateDisplay();
        }
        updateDisplay() {
          return (this.$input.checked = this.getValue()), this;
        }
      }
      function s(e) {
        let t, i;
        return (
          (t = e.match(/(#|0x)?([a-f0-9]{6})/i))
            ? (i = t[2])
            : (t = e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
            ? (i =
                parseInt(t[1]).toString(16).padStart(2, 0) +
                parseInt(t[2]).toString(16).padStart(2, 0) +
                parseInt(t[3]).toString(16).padStart(2, 0))
            : (t = e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
              (i = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]),
          !!i && "#" + i
        );
      }
      let a = {
          isPrimitive: !0,
          match: (e) => "number" == typeof e,
          fromHexString: (e) => parseInt(e.substring(1), 16),
          toHexString: (e) => "#" + e.toString(16).padStart(6, 0),
        },
        o = [
          {
            isPrimitive: !0,
            match: (e) => "string" == typeof e,
            fromHexString: s,
            toHexString: s,
          },
          a,
          {
            isPrimitive: !1,
            match: (e) => Array.isArray(e),
            fromHexString(e, t, i = 1) {
              let n = a.fromHexString(e);
              (t[0] = (((n >> 16) & 255) / 255) * i),
                (t[1] = (((n >> 8) & 255) / 255) * i),
                (t[2] = ((255 & n) / 255) * i);
            },
            toHexString([e, t, i], n = 1) {
              let r =
                ((e * (n = 255 / n)) << 16) ^ ((t * n) << 8) ^ ((i * n) << 0);
              return a.toHexString(r);
            },
          },
          {
            isPrimitive: !1,
            match: (e) => Object(e) === e,
            fromHexString(e, t, i = 1) {
              let n = a.fromHexString(e);
              (t.r = (((n >> 16) & 255) / 255) * i),
                (t.g = (((n >> 8) & 255) / 255) * i),
                (t.b = ((255 & n) / 255) * i);
            },
            toHexString({ r: e, g: t, b: i }, n = 1) {
              let r =
                ((e * (n = 255 / n)) << 16) ^ ((t * n) << 8) ^ ((i * n) << 0);
              return a.toHexString(r);
            },
          },
        ];
      class l extends n {
        constructor(e, t, i, n) {
          var r;
          super(e, t, i, "color"),
            (this.$input = document.createElement("input")),
            this.$input.setAttribute("type", "color"),
            this.$input.setAttribute("tabindex", -1),
            this.$input.setAttribute("aria-labelledby", this.$name.id),
            (this.$text = document.createElement("input")),
            this.$text.setAttribute("type", "text"),
            this.$text.setAttribute("spellcheck", "false"),
            this.$text.setAttribute("aria-labelledby", this.$name.id),
            (this.$display = document.createElement("div")),
            this.$display.classList.add("display"),
            this.$display.appendChild(this.$input),
            this.$widget.appendChild(this.$display),
            this.$widget.appendChild(this.$text),
            (this._format =
              ((r = this.initialValue), o.find((e) => e.match(r)))),
            (this._rgbScale = n),
            (this._initialValueHexString = this.save()),
            (this._textFocused = !1),
            this.$input.addEventListener("input", () => {
              this._setValueFromHexString(this.$input.value);
            }),
            this.$input.addEventListener("blur", () => {
              this._callOnFinishChange();
            }),
            this.$text.addEventListener("input", () => {
              let e = s(this.$text.value);
              e && this._setValueFromHexString(e);
            }),
            this.$text.addEventListener("focus", () => {
              (this._textFocused = !0), this.$text.select();
            }),
            this.$text.addEventListener("blur", () => {
              (this._textFocused = !1),
                this.updateDisplay(),
                this._callOnFinishChange();
            }),
            (this.$disable = this.$text),
            this.updateDisplay();
        }
        reset() {
          return this._setValueFromHexString(this._initialValueHexString), this;
        }
        _setValueFromHexString(e) {
          if (this._format.isPrimitive) {
            let t = this._format.fromHexString(e);
            this.setValue(t);
          } else
            this._format.fromHexString(e, this.getValue(), this._rgbScale),
              this._callOnChange(),
              this.updateDisplay();
        }
        save() {
          return this._format.toHexString(this.getValue(), this._rgbScale);
        }
        load(e) {
          return (
            this._setValueFromHexString(e), this._callOnFinishChange(), this
          );
        }
        updateDisplay() {
          return (
            (this.$input.value = this._format.toHexString(
              this.getValue(),
              this._rgbScale
            )),
            this._textFocused ||
              (this.$text.value = this.$input.value.substring(1)),
            (this.$display.style.backgroundColor = this.$input.value),
            this
          );
        }
      }
      class u extends n {
        constructor(e, t, i) {
          super(e, t, i, "function"),
            (this.$button = document.createElement("button")),
            this.$button.appendChild(this.$name),
            this.$widget.appendChild(this.$button),
            this.$button.addEventListener("click", (e) => {
              e.preventDefault(),
                this.getValue().call(this.object),
                this._callOnChange();
            }),
            this.$button.addEventListener("touchstart", () => {}, {
              passive: !0,
            }),
            (this.$disable = this.$button);
        }
      }
      class h extends n {
        constructor(e, t, i, n, r, s) {
          super(e, t, i, "number"), this._initInput(), this.min(n), this.max(r);
          let a = void 0 !== s;
          this.step(a ? s : this._getImplicitStep(), a), this.updateDisplay();
        }
        decimals(e) {
          return (this._decimals = e), this.updateDisplay(), this;
        }
        min(e) {
          return (this._min = e), this._onUpdateMinMax(), this;
        }
        max(e) {
          return (this._max = e), this._onUpdateMinMax(), this;
        }
        step(e, t = !0) {
          return (this._step = e), (this._stepExplicit = t), this;
        }
        updateDisplay() {
          let e = this.getValue();
          if (this._hasSlider) {
            let t = (e - this._min) / (this._max - this._min);
            (t = Math.max(0, Math.min(t, 1))),
              (this.$fill.style.width = 100 * t + "%");
          }
          return (
            this._inputFocused ||
              (this.$input.value =
                void 0 === this._decimals ? e : e.toFixed(this._decimals)),
            this
          );
        }
        _initInput() {
          (this.$input = document.createElement("input")),
            this.$input.setAttribute("type", "text"),
            this.$input.setAttribute("aria-labelledby", this.$name.id),
            window.matchMedia("(pointer: coarse)").matches &&
              (this.$input.setAttribute("type", "number"),
              this.$input.setAttribute("step", "any")),
            this.$widget.appendChild(this.$input),
            (this.$disable = this.$input);
          let e = (e) => {
              let t = parseFloat(this.$input.value);
              isNaN(t) ||
                (this._snapClampSetValue(t + e),
                (this.$input.value = this.getValue()));
            },
            t = !1,
            i,
            n,
            r,
            s,
            a,
            o = (e) => {
              if (t) {
                let r = e.clientX - i;
                Math.abs(e.clientY - n) > 5
                  ? (e.preventDefault(),
                    this.$input.blur(),
                    (t = !1),
                    this._setDraggingStyle(!0, "vertical"))
                  : Math.abs(r) > 5 && l();
              }
              if (!t) {
                let t = e.clientY - r;
                (a -= t * this._step * this._arrowKeyMultiplier(e)),
                  s + a > this._max
                    ? (a = this._max - s)
                    : s + a < this._min && (a = this._min - s),
                  this._snapClampSetValue(s + a);
              }
              r = e.clientY;
            },
            l = () => {
              this._setDraggingStyle(!1, "vertical"),
                this._callOnFinishChange(),
                window.removeEventListener("mousemove", o),
                window.removeEventListener("mouseup", l);
            };
          this.$input.addEventListener("input", () => {
            let e = parseFloat(this.$input.value);
            isNaN(e) ||
              (this._stepExplicit && (e = this._snap(e)),
              this.setValue(this._clamp(e)));
          }),
            this.$input.addEventListener("keydown", (t) => {
              "Enter" === t.key && this.$input.blur(),
                "ArrowUp" === t.code &&
                  (t.preventDefault(),
                  e(this._step * this._arrowKeyMultiplier(t))),
                "ArrowDown" === t.code &&
                  (t.preventDefault(),
                  e(-(this._step * this._arrowKeyMultiplier(t) * 1)));
            }),
            this.$input.addEventListener(
              "wheel",
              (t) => {
                this._inputFocused &&
                  (t.preventDefault(),
                  e(this._step * this._normalizeMouseWheel(t)));
              },
              { passive: !1 }
            ),
            this.$input.addEventListener("mousedown", (e) => {
              (i = e.clientX),
                (n = r = e.clientY),
                (t = !0),
                (s = this.getValue()),
                (a = 0),
                window.addEventListener("mousemove", o),
                window.addEventListener("mouseup", l);
            }),
            this.$input.addEventListener("focus", () => {
              this._inputFocused = !0;
            }),
            this.$input.addEventListener("blur", () => {
              (this._inputFocused = !1),
                this.updateDisplay(),
                this._callOnFinishChange();
            });
        }
        _initSlider() {
          let e;
          (this._hasSlider = !0),
            (this.$slider = document.createElement("div")),
            this.$slider.classList.add("slider"),
            (this.$fill = document.createElement("div")),
            this.$fill.classList.add("fill"),
            this.$slider.appendChild(this.$fill),
            this.$widget.insertBefore(this.$slider, this.$input),
            this.domElement.classList.add("hasSlider");
          let t = (e, t, i, n, r) => ((e - t) / (i - t)) * (r - n) + n,
            i = (e) => {
              let i = this.$slider.getBoundingClientRect(),
                n = t(e, i.left, i.right, this._min, this._max);
              this._snapClampSetValue(n);
            },
            n = (e) => {
              i(e.clientX);
            },
            r = () => {
              this._callOnFinishChange(),
                this._setDraggingStyle(!1),
                window.removeEventListener("mousemove", n),
                window.removeEventListener("mouseup", r);
            },
            s = !1,
            a,
            o,
            l = (e) => {
              e.preventDefault(),
                this._setDraggingStyle(!0),
                i(e.touches[0].clientX),
                (s = !1);
            },
            u = (e) => {
              s
                ? Math.abs(e.touches[0].clientX - a) >
                  Math.abs(e.touches[0].clientY - o)
                  ? l(e)
                  : (window.removeEventListener("touchmove", u),
                    window.removeEventListener("touchend", h))
                : (e.preventDefault(), i(e.touches[0].clientX));
            },
            h = () => {
              this._callOnFinishChange(),
                this._setDraggingStyle(!1),
                window.removeEventListener("touchmove", u),
                window.removeEventListener("touchend", h);
            },
            d = this._callOnFinishChange.bind(this);
          this.$slider.addEventListener("mousedown", (e) => {
            this._setDraggingStyle(!0),
              i(e.clientX),
              window.addEventListener("mousemove", n),
              window.addEventListener("mouseup", r);
          }),
            this.$slider.addEventListener(
              "touchstart",
              (e) => {
                e.touches.length > 1 ||
                  (this._hasScrollBar
                    ? ((a = e.touches[0].clientX),
                      (o = e.touches[0].clientY),
                      (s = !0))
                    : l(e),
                  window.addEventListener("touchmove", u, { passive: !1 }),
                  window.addEventListener("touchend", h));
              },
              { passive: !1 }
            ),
            this.$slider.addEventListener(
              "wheel",
              (t) => {
                if (
                  Math.abs(t.deltaX) < Math.abs(t.deltaY) &&
                  this._hasScrollBar
                )
                  return;
                t.preventDefault();
                let i = this._normalizeMouseWheel(t) * this._step;
                this._snapClampSetValue(this.getValue() + i),
                  (this.$input.value = this.getValue()),
                  clearTimeout(e),
                  (e = setTimeout(d, 400));
              },
              { passive: !1 }
            );
        }
        _setDraggingStyle(e, t = "horizontal") {
          this.$slider && this.$slider.classList.toggle("active", e),
            document.body.classList.toggle("lil-gui-dragging", e),
            document.body.classList.toggle(`lil-gui-${t}`, e);
        }
        _getImplicitStep() {
          return this._hasMin && this._hasMax
            ? (this._max - this._min) / 1e3
            : 0.1;
        }
        _onUpdateMinMax() {
          !this._hasSlider &&
            this._hasMin &&
            this._hasMax &&
            (this._stepExplicit || this.step(this._getImplicitStep(), !1),
            this._initSlider(),
            this.updateDisplay());
        }
        _normalizeMouseWheel(e) {
          let { deltaX: t, deltaY: i } = e;
          return (
            Math.floor(e.deltaY) !== e.deltaY &&
              e.wheelDelta &&
              ((t = 0),
              (i = (-e.wheelDelta / 120) * (this._stepExplicit ? 1 : 10))),
            t + -i
          );
        }
        _arrowKeyMultiplier(e) {
          let t = this._stepExplicit ? 1 : 10;
          return e.shiftKey ? (t *= 10) : e.altKey && (t /= 10), t;
        }
        _snap(e) {
          let t = 0;
          return (
            this._hasMin ? (t = this._min) : this._hasMax && (t = this._max),
            (e -= t),
            (e = parseFloat(
              (e = Math.round(e / this._step) * this._step + t).toPrecision(15)
            ))
          );
        }
        _clamp(e) {
          return (
            e < this._min && (e = this._min),
            e > this._max && (e = this._max),
            e
          );
        }
        _snapClampSetValue(e) {
          this.setValue(this._clamp(this._snap(e)));
        }
        get _hasScrollBar() {
          let e = this.parent.root.$children;
          return e.scrollHeight > e.clientHeight;
        }
        get _hasMin() {
          return void 0 !== this._min;
        }
        get _hasMax() {
          return void 0 !== this._max;
        }
      }
      class d extends n {
        constructor(e, t, i, n) {
          super(e, t, i, "option"),
            (this.$select = document.createElement("select")),
            this.$select.setAttribute("aria-labelledby", this.$name.id),
            (this.$display = document.createElement("div")),
            this.$display.classList.add("display"),
            this.$select.addEventListener("change", () => {
              this.setValue(this._values[this.$select.selectedIndex]),
                this._callOnFinishChange();
            }),
            this.$select.addEventListener("focus", () => {
              this.$display.classList.add("focus");
            }),
            this.$select.addEventListener("blur", () => {
              this.$display.classList.remove("focus");
            }),
            this.$widget.appendChild(this.$select),
            this.$widget.appendChild(this.$display),
            (this.$disable = this.$select),
            this.options(n);
        }
        options(e) {
          return (
            (this._values = Array.isArray(e) ? e : Object.values(e)),
            (this._names = Array.isArray(e) ? e : Object.keys(e)),
            this.$select.replaceChildren(),
            this._names.forEach((e) => {
              let t = document.createElement("option");
              (t.textContent = e), this.$select.appendChild(t);
            }),
            this.updateDisplay(),
            this
          );
        }
        updateDisplay() {
          let e = this.getValue(),
            t = this._values.indexOf(e);
          return (
            (this.$select.selectedIndex = t),
            (this.$display.textContent = -1 === t ? e : this._names[t]),
            this
          );
        }
      }
      class c extends n {
        constructor(e, t, i) {
          super(e, t, i, "string"),
            (this.$input = document.createElement("input")),
            this.$input.setAttribute("type", "text"),
            this.$input.setAttribute("spellcheck", "false"),
            this.$input.setAttribute("aria-labelledby", this.$name.id),
            this.$input.addEventListener("input", () => {
              this.setValue(this.$input.value);
            }),
            this.$input.addEventListener("keydown", (e) => {
              "Enter" === e.code && this.$input.blur();
            }),
            this.$input.addEventListener("blur", () => {
              this._callOnFinishChange();
            }),
            this.$widget.appendChild(this.$input),
            (this.$disable = this.$input),
            this.updateDisplay();
        }
        updateDisplay() {
          return (this.$input.value = this.getValue()), this;
        }
      }
      var m = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
      let p = !1;
      class g {
        constructor({
          parent: e,
          autoPlace: t = void 0 === e,
          container: i,
          width: n,
          title: r = "Controls",
          closeFolders: s = !1,
          injectStyles: a = !0,
          touchStyles: o = !0,
        } = {}) {
          if (
            ((this.parent = e),
            (this.root = e ? e.root : this),
            (this.children = []),
            (this.controllers = []),
            (this.folders = []),
            (this._closed = !1),
            (this._hidden = !1),
            (this.domElement = document.createElement("div")),
            this.domElement.classList.add("lil-gui"),
            (this.$title = document.createElement("button")),
            this.$title.classList.add("title"),
            this.$title.setAttribute("aria-expanded", !0),
            this.$title.addEventListener("click", () =>
              this.openAnimated(this._closed)
            ),
            this.$title.addEventListener("touchstart", () => {}, {
              passive: !0,
            }),
            (this.$children = document.createElement("div")),
            this.$children.classList.add("children"),
            this.domElement.appendChild(this.$title),
            this.domElement.appendChild(this.$children),
            this.title(r),
            this.parent)
          ) {
            this.parent.children.push(this),
              this.parent.folders.push(this),
              this.parent.$children.appendChild(this.domElement);
            return;
          }
          this.domElement.classList.add("root"),
            o && this.domElement.classList.add("allow-touch-styles"),
            !p &&
              a &&
              ((function (e) {
                let t = document.createElement("style");
                t.innerHTML = e;
                let i = document.querySelector(
                  "head link[rel=stylesheet], head style"
                );
                i
                  ? document.head.insertBefore(t, i)
                  : document.head.appendChild(t);
              })(m),
              (p = !0)),
            i
              ? i.appendChild(this.domElement)
              : t &&
                (this.domElement.classList.add("autoPlace"),
                document.body.appendChild(this.domElement)),
            n && this.domElement.style.setProperty("--width", n + "px"),
            (this._closeFolders = s);
        }
        add(e, t, i, n, s) {
          if (Object(i) === i) return new d(this, e, t, i);
          let a = e[t];
          switch (typeof a) {
            case "number":
              return new h(this, e, t, i, n, s);
            case "boolean":
              return new r(this, e, t);
            case "string":
              return new c(this, e, t);
            case "function":
              return new u(this, e, t);
          }
          console.error(
            `gui.add failed
	property:`,
            t,
            `
	object:`,
            e,
            `
	value:`,
            a
          );
        }
        addColor(e, t, i = 1) {
          return new l(this, e, t, i);
        }
        addFolder(e) {
          let t = new g({ parent: this, title: e });
          return this.root._closeFolders && t.close(), t;
        }
        load(e, t = !0) {
          return (
            e.controllers &&
              this.controllers.forEach((t) => {
                !(t instanceof u) &&
                  t._name in e.controllers &&
                  t.load(e.controllers[t._name]);
              }),
            t &&
              e.folders &&
              this.folders.forEach((t) => {
                t._title in e.folders && t.load(e.folders[t._title]);
              }),
            this
          );
        }
        save(e = !0) {
          let t = { controllers: {}, folders: {} };
          return (
            this.controllers.forEach((e) => {
              if (!(e instanceof u)) {
                if (e._name in t.controllers)
                  throw Error(
                    `Cannot save GUI with duplicate property "${e._name}"`
                  );
                t.controllers[e._name] = e.save();
              }
            }),
            e &&
              this.folders.forEach((e) => {
                if (e._title in t.folders)
                  throw Error(
                    `Cannot save GUI with duplicate folder "${e._title}"`
                  );
                t.folders[e._title] = e.save();
              }),
            t
          );
        }
        open(e = !0) {
          return (
            this._setClosed(!e),
            this.$title.setAttribute("aria-expanded", !this._closed),
            this.domElement.classList.toggle("closed", this._closed),
            this
          );
        }
        close() {
          return this.open(!1);
        }
        _setClosed(e) {
          this._closed !== e &&
            ((this._closed = e), this._callOnOpenClose(this));
        }
        show(e = !0) {
          return (
            (this._hidden = !e),
            (this.domElement.style.display = this._hidden ? "none" : ""),
            this
          );
        }
        hide() {
          return this.show(!1);
        }
        openAnimated(e = !0) {
          return (
            this._setClosed(!e),
            this.$title.setAttribute("aria-expanded", !this._closed),
            requestAnimationFrame(() => {
              let t = this.$children.clientHeight;
              (this.$children.style.height = t + "px"),
                this.domElement.classList.add("transition");
              let i = (e) => {
                e.target === this.$children &&
                  ((this.$children.style.height = ""),
                  this.domElement.classList.remove("transition"),
                  this.$children.removeEventListener("transitionend", i));
              };
              this.$children.addEventListener("transitionend", i);
              let n = e ? this.$children.scrollHeight : 0;
              this.domElement.classList.toggle("closed", !e),
                requestAnimationFrame(() => {
                  this.$children.style.height = n + "px";
                });
            }),
            this
          );
        }
        title(e) {
          return (this._title = e), (this.$title.textContent = e), this;
        }
        reset(e = !0) {
          return (
            (e ? this.controllersRecursive() : this.controllers).forEach((e) =>
              e.reset()
            ),
            this
          );
        }
        onChange(e) {
          return (this._onChange = e), this;
        }
        _callOnChange(e) {
          this.parent && this.parent._callOnChange(e),
            void 0 !== this._onChange &&
              this._onChange.call(this, {
                object: e.object,
                property: e.property,
                value: e.getValue(),
                controller: e,
              });
        }
        onFinishChange(e) {
          return (this._onFinishChange = e), this;
        }
        _callOnFinishChange(e) {
          this.parent && this.parent._callOnFinishChange(e),
            void 0 !== this._onFinishChange &&
              this._onFinishChange.call(this, {
                object: e.object,
                property: e.property,
                value: e.getValue(),
                controller: e,
              });
        }
        onOpenClose(e) {
          return (this._onOpenClose = e), this;
        }
        _callOnOpenClose(e) {
          this.parent && this.parent._callOnOpenClose(e),
            void 0 !== this._onOpenClose && this._onOpenClose.call(this, e);
        }
        destroy() {
          this.parent &&
            (this.parent.children.splice(this.parent.children.indexOf(this), 1),
            this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
            this.domElement.parentElement &&
              this.domElement.parentElement.removeChild(this.domElement),
            Array.from(this.children).forEach((e) => e.destroy());
        }
        controllersRecursive() {
          let e = Array.from(this.controllers);
          return (
            this.folders.forEach((t) => {
              e = e.concat(t.controllersRecursive());
            }),
            e
          );
        }
        foldersRecursive() {
          let e = Array.from(this.folders);
          return (
            this.folders.forEach((t) => {
              e = e.concat(t.foldersRecursive());
            }),
            e
          );
        }
      }
    },
    34128: (e, t, i) => {
      i.d(t, { Cf: () => o });
      let n = 1 / 3,
        r = 1 / 6,
        s = (e) => 0 | Math.floor(e),
        a = new Float64Array([
          1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1,
          -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
        ]);
      function o(e = Math.random) {
        let t = (function (e) {
            let t = new Uint8Array(512);
            for (let e = 0; e < 256; e++) t[e] = e;
            for (let i = 0; i < 255; i++) {
              let n = i + ~~(e() * (256 - i)),
                r = t[i];
              (t[i] = t[n]), (t[n] = r);
            }
            for (let e = 256; e < 512; e++) t[e] = t[e - 256];
            return t;
          })(e),
          i = new Float64Array(t).map((e) => a[(e % 12) * 3]),
          l = new Float64Array(t).map((e) => a[(e % 12) * 3 + 1]),
          u = new Float64Array(t).map((e) => a[(e % 12) * 3 + 2]);
        return function (e, a, o) {
          let h, d, c, m, p, g, f, A, w, b;
          let x = (e + a + o) * n,
            y = s(e + x),
            _ = s(a + x),
            T = s(o + x),
            E = (y + _ + T) * r,
            S = e - (y - E),
            M = a - (_ - E),
            R = o - (T - E);
          S >= M
            ? M >= R
              ? ((p = 1), (g = 0), (f = 0), (A = 1), (w = 1), (b = 0))
              : (S >= R
                  ? ((p = 1), (g = 0), (f = 0))
                  : ((p = 0), (g = 0), (f = 1)),
                (A = 1),
                (w = 0),
                (b = 1))
            : M < R
            ? ((p = 0), (g = 0), (f = 1), (A = 0), (w = 1), (b = 1))
            : S < R
            ? ((p = 0), (g = 1), (f = 0), (A = 0), (w = 1), (b = 1))
            : ((p = 0), (g = 1), (f = 0), (A = 1), (w = 1), (b = 0));
          let C = S - p + r,
            L = M - g + r,
            k = R - f + r,
            I = S - A + 2 * r,
            P = M - w + 2 * r,
            N = R - b + 2 * r,
            O = S - 1 + 3 * r,
            D = M - 1 + 3 * r,
            H = R - 1 + 3 * r,
            F = 255 & y,
            $ = 255 & _,
            B = 255 & T,
            j = 0.6 - S * S - M * M - R * R;
          if (j < 0) h = 0;
          else {
            let e = F + t[$ + t[B]];
            (j *= j), (h = j * j * (i[e] * S + l[e] * M + u[e] * R));
          }
          let G = 0.6 - C * C - L * L - k * k;
          if (G < 0) d = 0;
          else {
            let e = F + p + t[$ + g + t[B + f]];
            (G *= G), (d = G * G * (i[e] * C + l[e] * L + u[e] * k));
          }
          let U = 0.6 - I * I - P * P - N * N;
          if (U < 0) c = 0;
          else {
            let e = F + A + t[$ + w + t[B + b]];
            (U *= U), (c = U * U * (i[e] * I + l[e] * P + u[e] * N));
          }
          let z = 0.6 - O * O - D * D - H * H;
          if (z < 0) m = 0;
          else {
            let e = F + 1 + t[$ + 1 + t[B + 1]];
            (z *= z), (m = z * z * (i[e] * O + l[e] * D + u[e] * H));
          }
          return 32 * (h + d + c + m);
        };
      }
    },
    50299: (e, t, i) => {
      i.d(t, { j: () => a });
      var n = i(80337);
      let r = new n.Pq0();
      function s(e, t, i, n, s, a) {
        let o = (2 * Math.PI * s) / 4,
          l = Math.max(a - 2 * s, 0),
          u = Math.PI / 4;
        r.copy(t), (r[n] = 0), r.normalize();
        let h = (0.5 * o) / (o + l),
          d = 1 - r.angleTo(e) / u;
        return 1 === Math.sign(r[i]) ? d * h : l / (o + l) + h + h * (1 - d);
      }
      class a extends n.iNn {
        constructor(e = 1, t = 1, i = 1, r = 2, a = 0.1) {
          if (
            ((r = 2 * r + 1),
            (a = Math.min(e / 2, t / 2, i / 2, a)),
            super(1, 1, 1, r, r, r),
            1 === r)
          )
            return;
          let o = this.toNonIndexed();
          (this.index = null),
            (this.attributes.position = o.attributes.position),
            (this.attributes.normal = o.attributes.normal),
            (this.attributes.uv = o.attributes.uv);
          let l = new n.Pq0(),
            u = new n.Pq0(),
            h = new n.Pq0(e, t, i).divideScalar(2).subScalar(a),
            d = this.attributes.position.array,
            c = this.attributes.normal.array,
            m = this.attributes.uv.array,
            p = d.length / 6,
            g = new n.Pq0(),
            f = 0.5 / r;
          for (let n = 0, r = 0; n < d.length; n += 3, r += 2)
            switch (
              (l.fromArray(d, n),
              u.copy(l),
              (u.x -= Math.sign(u.x) * f),
              (u.y -= Math.sign(u.y) * f),
              (u.z -= Math.sign(u.z) * f),
              u.normalize(),
              (d[n + 0] = h.x * Math.sign(l.x) + u.x * a),
              (d[n + 1] = h.y * Math.sign(l.y) + u.y * a),
              (d[n + 2] = h.z * Math.sign(l.z) + u.z * a),
              (c[n + 0] = u.x),
              (c[n + 1] = u.y),
              (c[n + 2] = u.z),
              Math.floor(n / p))
            ) {
              case 0:
                g.set(1, 0, 0),
                  (m[r + 0] = s(g, u, "z", "y", a, i)),
                  (m[r + 1] = 1 - s(g, u, "y", "z", a, t));
                break;
              case 1:
                g.set(-1, 0, 0),
                  (m[r + 0] = 1 - s(g, u, "z", "y", a, i)),
                  (m[r + 1] = 1 - s(g, u, "y", "z", a, t));
                break;
              case 2:
                g.set(0, 1, 0),
                  (m[r + 0] = 1 - s(g, u, "x", "z", a, e)),
                  (m[r + 1] = s(g, u, "z", "x", a, i));
                break;
              case 3:
                g.set(0, -1, 0),
                  (m[r + 0] = 1 - s(g, u, "x", "z", a, e)),
                  (m[r + 1] = 1 - s(g, u, "z", "x", a, i));
                break;
              case 4:
                g.set(0, 0, 1),
                  (m[r + 0] = 1 - s(g, u, "x", "y", a, e)),
                  (m[r + 1] = 1 - s(g, u, "y", "x", a, t));
                break;
              case 5:
                g.set(0, 0, -1),
                  (m[r + 0] = s(g, u, "x", "y", a, e)),
                  (m[r + 1] = 1 - s(g, u, "y", "x", a, t));
            }
        }
      }
    },
    37828: (e, t, i) => {
      i.d(t, { B: () => u });
      var n = i(80337);
      function r(e, t) {
        if (t === n.RJ4)
          return (
            console.warn(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
            ),
            e
          );
        if (t !== n.rYR && t !== n.O49)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
              t
            ),
            e
          );
        {
          let i = e.getIndex();
          if (null === i) {
            let t = [],
              n = e.getAttribute("position");
            if (void 0 === n)
              return (
                console.error(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                ),
                e
              );
            for (let e = 0; e < n.count; e++) t.push(e);
            e.setIndex(t), (i = e.getIndex());
          }
          let r = i.count - 2,
            s = [];
          if (i) {
            if (t === n.rYR)
              for (let e = 1; e <= r; e++)
                s.push(i.getX(0)), s.push(i.getX(e)), s.push(i.getX(e + 1));
            else
              for (let e = 0; e < r; e++)
                e % 2 == 0
                  ? (s.push(i.getX(e)),
                    s.push(i.getX(e + 1)),
                    s.push(i.getX(e + 2)))
                  : (s.push(i.getX(e + 2)),
                    s.push(i.getX(e + 1)),
                    s.push(i.getX(e)));
          }
          s.length / 3 !== r &&
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
          let a = e.clone();
          return a.setIndex(s), a.clearGroups(), a;
        }
      }
      let s = parseInt(n.sPf.replace(/\D+/g, ""));
      function a(e) {
        if ("undefined" != typeof TextDecoder)
          return new TextDecoder().decode(e);
        let t = "";
        for (let i = 0, n = e.length; i < n; i++)
          t += String.fromCharCode(e[i]);
        try {
          return decodeURIComponent(escape(t));
        } catch (e) {
          return t;
        }
      }
      let o = "srgb",
        l = "srgb-linear";
      class u extends n.aHM {
        constructor(e) {
          super(e),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new g(e);
            }),
            this.register(function (e) {
              return new f(e);
            }),
            this.register(function (e) {
              return new S(e);
            }),
            this.register(function (e) {
              return new M(e);
            }),
            this.register(function (e) {
              return new R(e);
            }),
            this.register(function (e) {
              return new w(e);
            }),
            this.register(function (e) {
              return new b(e);
            }),
            this.register(function (e) {
              return new x(e);
            }),
            this.register(function (e) {
              return new y(e);
            }),
            this.register(function (e) {
              return new p(e);
            }),
            this.register(function (e) {
              return new _(e);
            }),
            this.register(function (e) {
              return new A(e);
            }),
            this.register(function (e) {
              return new E(e);
            }),
            this.register(function (e) {
              return new T(e);
            }),
            this.register(function (e) {
              return new c(e);
            }),
            this.register(function (e) {
              return new C(e);
            }),
            this.register(function (e) {
              return new L(e);
            });
        }
        load(e, t, i, r) {
          let s;
          let a = this;
          if ("" !== this.resourcePath) s = this.resourcePath;
          else if ("" !== this.path) {
            let t = n.r6x.extractUrlBase(e);
            s = n.r6x.resolveURL(t, this.path);
          } else s = n.r6x.extractUrlBase(e);
          this.manager.itemStart(e);
          let o = function (t) {
              r ? r(t) : console.error(t),
                a.manager.itemError(e),
                a.manager.itemEnd(e);
            },
            l = new n.Y9S(this.manager);
          l.setPath(this.path),
            l.setResponseType("arraybuffer"),
            l.setRequestHeader(this.requestHeader),
            l.setWithCredentials(this.withCredentials),
            l.load(
              e,
              function (i) {
                try {
                  a.parse(
                    i,
                    s,
                    function (i) {
                      t(i), a.manager.itemEnd(e);
                    },
                    o
                  );
                } catch (e) {
                  o(e);
                }
              },
              i,
              o
            );
        }
        setDRACOLoader(e) {
          return (this.dracoLoader = e), this;
        }
        setDDSLoader() {
          throw Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
          );
        }
        setKTX2Loader(e) {
          return (this.ktx2Loader = e), this;
        }
        setMeshoptDecoder(e) {
          return (this.meshoptDecoder = e), this;
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.push(e),
            this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        parse(e, t, i, n) {
          let r;
          let s = {},
            o = {};
          if ("string" == typeof e) r = JSON.parse(e);
          else if (e instanceof ArrayBuffer) {
            if (a(new Uint8Array(e.slice(0, 4))) === k) {
              try {
                s[d.KHR_BINARY_GLTF] = new P(e);
              } catch (e) {
                n && n(e);
                return;
              }
              r = JSON.parse(s[d.KHR_BINARY_GLTF].content);
            } else r = JSON.parse(a(new Uint8Array(e)));
          } else r = e;
          if (void 0 === r.asset || r.asset.version[0] < 2) {
            n &&
              n(
                Error(
                  "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
                )
              );
            return;
          }
          let l = new ee(r, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          l.fileLoader.setRequestHeader(this.requestHeader);
          for (let e = 0; e < this.pluginCallbacks.length; e++) {
            let t = this.pluginCallbacks[e](l);
            t.name ||
              console.error(
                "THREE.GLTFLoader: Invalid plugin found: missing name"
              ),
              (o[t.name] = t),
              (s[t.name] = !0);
          }
          if (r.extensionsUsed)
            for (let e = 0; e < r.extensionsUsed.length; ++e) {
              let t = r.extensionsUsed[e],
                i = r.extensionsRequired || [];
              switch (t) {
                case d.KHR_MATERIALS_UNLIT:
                  s[t] = new m();
                  break;
                case d.KHR_DRACO_MESH_COMPRESSION:
                  s[t] = new N(r, this.dracoLoader);
                  break;
                case d.KHR_TEXTURE_TRANSFORM:
                  s[t] = new O();
                  break;
                case d.KHR_MESH_QUANTIZATION:
                  s[t] = new D();
                  break;
                default:
                  i.indexOf(t) >= 0 &&
                    void 0 === o[t] &&
                    console.warn(
                      'THREE.GLTFLoader: Unknown extension "' + t + '".'
                    );
              }
            }
          l.setExtensions(s), l.setPlugins(o), l.parse(i, n);
        }
        parseAsync(e, t) {
          let i = this;
          return new Promise(function (n, r) {
            i.parse(e, t, n, r);
          });
        }
      }
      function h() {
        let e = {};
        return {
          get: function (t) {
            return e[t];
          },
          add: function (t, i) {
            e[t] = i;
          },
          remove: function (t) {
            delete e[t];
          },
          removeAll: function () {
            e = {};
          },
        };
      }
      let d = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_MATERIALS_BUMP: "EXT_materials_bump",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_TEXTURE_AVIF: "EXT_texture_avif",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
        EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
      };
      class c {
        constructor(e) {
          (this.parser = e),
            (this.name = d.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          let e = this.parser,
            t = this.parser.json.nodes || [];
          for (let i = 0, n = t.length; i < n; i++) {
            let n = t[i];
            n.extensions &&
              n.extensions[this.name] &&
              void 0 !== n.extensions[this.name].light &&
              e._addNodeRef(this.cache, n.extensions[this.name].light);
          }
        }
        _loadLight(e) {
          let t;
          let i = this.parser,
            r = "light:" + e,
            s = i.cache.get(r);
          if (s) return s;
          let a = i.json,
            o = (((a.extensions && a.extensions[this.name]) || {}).lights ||
              [])[e],
            u = new n.Q1f(0xffffff);
          void 0 !== o.color && u.setRGB(o.color[0], o.color[1], o.color[2], l);
          let h = void 0 !== o.range ? o.range : 0;
          switch (o.type) {
            case "directional":
              (t = new n.ZyN(u)).target.position.set(0, 0, -1), t.add(t.target);
              break;
            case "point":
              (t = new n.HiM(u)).distance = h;
              break;
            case "spot":
              ((t = new n.nCl(u)).distance = h),
                (o.spot = o.spot || {}),
                (o.spot.innerConeAngle =
                  void 0 !== o.spot.innerConeAngle ? o.spot.innerConeAngle : 0),
                (o.spot.outerConeAngle =
                  void 0 !== o.spot.outerConeAngle
                    ? o.spot.outerConeAngle
                    : Math.PI / 4),
                (t.angle = o.spot.outerConeAngle),
                (t.penumbra =
                  1 - o.spot.innerConeAngle / o.spot.outerConeAngle),
                t.target.position.set(0, 0, -1),
                t.add(t.target);
              break;
            default:
              throw Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
          }
          return (
            t.position.set(0, 0, 0),
            (t.decay = 2),
            q(t, o),
            void 0 !== o.intensity && (t.intensity = o.intensity),
            (t.name = i.createUniqueName(o.name || "light_" + e)),
            (s = Promise.resolve(t)),
            i.cache.add(r, s),
            s
          );
        }
        getDependency(e, t) {
          if ("light" === e) return this._loadLight(t);
        }
        createNodeAttachment(e) {
          let t = this,
            i = this.parser,
            n = i.json.nodes[e],
            r = ((n.extensions && n.extensions[this.name]) || {}).light;
          return void 0 === r
            ? null
            : this._loadLight(r).then(function (e) {
                return i._getNodeRef(t.cache, r, e);
              });
        }
      }
      class m {
        constructor() {
          this.name = d.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return n.V9B;
        }
        extendParams(e, t, i) {
          let r = [];
          (e.color = new n.Q1f(1, 1, 1)), (e.opacity = 1);
          let s = t.pbrMetallicRoughness;
          if (s) {
            if (Array.isArray(s.baseColorFactor)) {
              let t = s.baseColorFactor;
              e.color.setRGB(t[0], t[1], t[2], l), (e.opacity = t[3]);
            }
            void 0 !== s.baseColorTexture &&
              r.push(i.assignTexture(e, "map", s.baseColorTexture, o));
          }
          return Promise.all(r);
        }
      }
      class p {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_EMISSIVE_STRENGTH);
        }
        extendMaterialParams(e, t) {
          let i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          let n = i.extensions[this.name].emissiveStrength;
          return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve();
        }
      }
      class g {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            a = r.extensions[this.name];
          if (
            (void 0 !== a.clearcoatFactor && (t.clearcoat = a.clearcoatFactor),
            void 0 !== a.clearcoatTexture &&
              s.push(i.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
            void 0 !== a.clearcoatRoughnessFactor &&
              (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
            void 0 !== a.clearcoatRoughnessTexture &&
              s.push(
                i.assignTexture(
                  t,
                  "clearcoatRoughnessMap",
                  a.clearcoatRoughnessTexture
                )
              ),
            void 0 !== a.clearcoatNormalTexture &&
              (s.push(
                i.assignTexture(
                  t,
                  "clearcoatNormalMap",
                  a.clearcoatNormalTexture
                )
              ),
              void 0 !== a.clearcoatNormalTexture.scale))
          ) {
            let e = a.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new n.I9Y(e, e);
          }
          return Promise.all(s);
        }
      }
      class f {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_DISPERSION);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          let n = i.extensions[this.name];
          return (
            (t.dispersion = void 0 !== n.dispersion ? n.dispersion : 0),
            Promise.resolve()
          );
        }
      }
      class A {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_IRIDESCENCE);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            n = i.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let r = [],
            s = n.extensions[this.name];
          return (
            void 0 !== s.iridescenceFactor &&
              (t.iridescence = s.iridescenceFactor),
            void 0 !== s.iridescenceTexture &&
              r.push(
                i.assignTexture(t, "iridescenceMap", s.iridescenceTexture)
              ),
            void 0 !== s.iridescenceIor &&
              (t.iridescenceIOR = s.iridescenceIor),
            void 0 === t.iridescenceThicknessRange &&
              (t.iridescenceThicknessRange = [100, 400]),
            void 0 !== s.iridescenceThicknessMinimum &&
              (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum),
            void 0 !== s.iridescenceThicknessMaximum &&
              (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum),
            void 0 !== s.iridescenceThicknessTexture &&
              r.push(
                i.assignTexture(
                  t,
                  "iridescenceThicknessMap",
                  s.iridescenceThicknessTexture
                )
              ),
            Promise.all(r)
          );
        }
      }
      class w {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_SHEEN);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [];
          (t.sheenColor = new n.Q1f(0, 0, 0)),
            (t.sheenRoughness = 0),
            (t.sheen = 1);
          let a = r.extensions[this.name];
          if (void 0 !== a.sheenColorFactor) {
            let e = a.sheenColorFactor;
            t.sheenColor.setRGB(e[0], e[1], e[2], l);
          }
          return (
            void 0 !== a.sheenRoughnessFactor &&
              (t.sheenRoughness = a.sheenRoughnessFactor),
            void 0 !== a.sheenColorTexture &&
              s.push(
                i.assignTexture(t, "sheenColorMap", a.sheenColorTexture, o)
              ),
            void 0 !== a.sheenRoughnessTexture &&
              s.push(
                i.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
              ),
            Promise.all(s)
          );
        }
      }
      class b {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            n = i.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let r = [],
            s = n.extensions[this.name];
          return (
            void 0 !== s.transmissionFactor &&
              (t.transmission = s.transmissionFactor),
            void 0 !== s.transmissionTexture &&
              r.push(
                i.assignTexture(t, "transmissionMap", s.transmissionTexture)
              ),
            Promise.all(r)
          );
        }
      }
      class x {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_VOLUME);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            a = r.extensions[this.name];
          (t.thickness = void 0 !== a.thicknessFactor ? a.thicknessFactor : 0),
            void 0 !== a.thicknessTexture &&
              s.push(i.assignTexture(t, "thicknessMap", a.thicknessTexture)),
            (t.attenuationDistance = a.attenuationDistance || 1 / 0);
          let o = a.attenuationColor || [1, 1, 1];
          return (
            (t.attenuationColor = new n.Q1f().setRGB(o[0], o[1], o[2], l)),
            Promise.all(s)
          );
        }
      }
      class y {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_IOR);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          let n = i.extensions[this.name];
          return (t.ior = void 0 !== n.ior ? n.ior : 1.5), Promise.resolve();
        }
      }
      class _ {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_SPECULAR);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            a = r.extensions[this.name];
          (t.specularIntensity =
            void 0 !== a.specularFactor ? a.specularFactor : 1),
            void 0 !== a.specularTexture &&
              s.push(
                i.assignTexture(t, "specularIntensityMap", a.specularTexture)
              );
          let u = a.specularColorFactor || [1, 1, 1];
          return (
            (t.specularColor = new n.Q1f().setRGB(u[0], u[1], u[2], l)),
            void 0 !== a.specularColorTexture &&
              s.push(
                i.assignTexture(
                  t,
                  "specularColorMap",
                  a.specularColorTexture,
                  o
                )
              ),
            Promise.all(s)
          );
        }
      }
      class T {
        constructor(e) {
          (this.parser = e), (this.name = d.EXT_MATERIALS_BUMP);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            n = i.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let r = [],
            s = n.extensions[this.name];
          return (
            (t.bumpScale = void 0 !== s.bumpFactor ? s.bumpFactor : 1),
            void 0 !== s.bumpTexture &&
              r.push(i.assignTexture(t, "bumpMap", s.bumpTexture)),
            Promise.all(r)
          );
        }
      }
      class E {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_MATERIALS_ANISOTROPY);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            n = i.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let r = [],
            s = n.extensions[this.name];
          return (
            void 0 !== s.anisotropyStrength &&
              (t.anisotropy = s.anisotropyStrength),
            void 0 !== s.anisotropyRotation &&
              (t.anisotropyRotation = s.anisotropyRotation),
            void 0 !== s.anisotropyTexture &&
              r.push(i.assignTexture(t, "anisotropyMap", s.anisotropyTexture)),
            Promise.all(r)
          );
        }
      }
      class S {
        constructor(e) {
          (this.parser = e), (this.name = d.KHR_TEXTURE_BASISU);
        }
        loadTexture(e) {
          let t = this.parser,
            i = t.json,
            n = i.textures[e];
          if (!n.extensions || !n.extensions[this.name]) return null;
          let r = n.extensions[this.name],
            s = t.options.ktx2Loader;
          if (!s) {
            if (
              !(
                i.extensionsRequired &&
                i.extensionsRequired.indexOf(this.name) >= 0
              )
            )
              return null;
            throw Error(
              "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
            );
          }
          return t.loadTextureImage(e, r.source, s);
        }
      }
      class M {
        constructor(e) {
          (this.parser = e),
            (this.name = d.EXT_TEXTURE_WEBP),
            (this.isSupported = null);
        }
        loadTexture(e) {
          let t = this.name,
            i = this.parser,
            n = i.json,
            r = n.textures[e];
          if (!r.extensions || !r.extensions[t]) return null;
          let s = r.extensions[t],
            a = n.images[s.source],
            o = i.textureLoader;
          if (a.uri) {
            let e = i.options.manager.getHandler(a.uri);
            null !== e && (o = e);
          }
          return this.detectSupport().then(function (r) {
            if (r) return i.loadTextureImage(e, s.source, o);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
              throw Error(
                "THREE.GLTFLoader: WebP required by asset but unsupported."
              );
            return i.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                let t = new Image();
                (t.src =
                  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class R {
        constructor(e) {
          (this.parser = e),
            (this.name = d.EXT_TEXTURE_AVIF),
            (this.isSupported = null);
        }
        loadTexture(e) {
          let t = this.name,
            i = this.parser,
            n = i.json,
            r = n.textures[e];
          if (!r.extensions || !r.extensions[t]) return null;
          let s = r.extensions[t],
            a = n.images[s.source],
            o = i.textureLoader;
          if (a.uri) {
            let e = i.options.manager.getHandler(a.uri);
            null !== e && (o = e);
          }
          return this.detectSupport().then(function (r) {
            if (r) return i.loadTextureImage(e, s.source, o);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
              throw Error(
                "THREE.GLTFLoader: AVIF required by asset but unsupported."
              );
            return i.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                let t = new Image();
                (t.src =
                  "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class C {
        constructor(e) {
          (this.name = d.EXT_MESHOPT_COMPRESSION), (this.parser = e);
        }
        loadBufferView(e) {
          let t = this.parser.json,
            i = t.bufferViews[e];
          if (!i.extensions || !i.extensions[this.name]) return null;
          {
            let e = i.extensions[this.name],
              n = this.parser.getDependency("buffer", e.buffer),
              r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
              if (
                !(
                  t.extensionsRequired &&
                  t.extensionsRequired.indexOf(this.name) >= 0
                )
              )
                return null;
              throw Error(
                "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
              );
            }
            return n.then(function (t) {
              let i = e.byteOffset || 0,
                n = e.byteLength || 0,
                s = e.count,
                a = e.byteStride,
                o = new Uint8Array(t, i, n);
              return r.decodeGltfBufferAsync
                ? r
                    .decodeGltfBufferAsync(s, a, o, e.mode, e.filter)
                    .then(function (e) {
                      return e.buffer;
                    })
                : r.ready.then(function () {
                    let t = new ArrayBuffer(s * a);
                    return (
                      r.decodeGltfBuffer(
                        new Uint8Array(t),
                        s,
                        a,
                        o,
                        e.mode,
                        e.filter
                      ),
                      t
                    );
                  });
            });
          }
        }
      }
      class L {
        constructor(e) {
          (this.name = d.EXT_MESH_GPU_INSTANCING), (this.parser = e);
        }
        createNodeMesh(e) {
          let t = this.parser.json,
            i = t.nodes[e];
          if (!i.extensions || !i.extensions[this.name] || void 0 === i.mesh)
            return null;
          for (let e of t.meshes[i.mesh].primitives)
            if (
              e.mode !== B.TRIANGLES &&
              e.mode !== B.TRIANGLE_STRIP &&
              e.mode !== B.TRIANGLE_FAN &&
              void 0 !== e.mode
            )
              return null;
          let r = i.extensions[this.name].attributes,
            s = [],
            a = {};
          for (let e in r)
            s.push(
              this.parser
                .getDependency("accessor", r[e])
                .then((t) => ((a[e] = t), a[e]))
            );
          return s.length < 1
            ? null
            : (s.push(this.parser.createNodeMesh(e)),
              Promise.all(s).then((e) => {
                let t = e.pop(),
                  i = t.isGroup ? t.children : [t],
                  r = e[0].count,
                  s = [];
                for (let e of i) {
                  let t = new n.kn4(),
                    i = new n.Pq0(),
                    o = new n.PTz(),
                    l = new n.Pq0(1, 1, 1),
                    u = new n.ZLX(e.geometry, e.material, r);
                  for (let e = 0; e < r; e++)
                    a.TRANSLATION && i.fromBufferAttribute(a.TRANSLATION, e),
                      a.ROTATION && o.fromBufferAttribute(a.ROTATION, e),
                      a.SCALE && l.fromBufferAttribute(a.SCALE, e),
                      u.setMatrixAt(e, t.compose(i, o, l));
                  for (let t in a)
                    if ("_COLOR_0" === t) {
                      let e = a[t];
                      u.instanceColor = new n.uWO(
                        e.array,
                        e.itemSize,
                        e.normalized
                      );
                    } else
                      "TRANSLATION" !== t &&
                        "ROTATION" !== t &&
                        "SCALE" !== t &&
                        e.geometry.setAttribute(t, a[t]);
                  n.B69.prototype.copy.call(u, e),
                    this.parser.assignFinalMaterial(u),
                    s.push(u);
                }
                return t.isGroup ? (t.clear(), t.add(...s), t) : s[0];
              }));
        }
      }
      let k = "glTF",
        I = { JSON: 0x4e4f534a, BIN: 5130562 };
      class P {
        constructor(e) {
          (this.name = d.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          let t = new DataView(e, 0, 12);
          if (
            ((this.header = {
              magic: a(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0),
            }),
            this.header.magic !== k)
          )
            throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
          if (this.header.version < 2)
            throw Error("THREE.GLTFLoader: Legacy binary file detected.");
          let i = this.header.length - 12,
            n = new DataView(e, 12),
            r = 0;
          for (; r < i; ) {
            let t = n.getUint32(r, !0);
            r += 4;
            let i = n.getUint32(r, !0);
            if (((r += 4), i === I.JSON)) {
              let i = new Uint8Array(e, 12 + r, t);
              this.content = a(i);
            } else if (i === I.BIN) {
              let i = 12 + r;
              this.body = e.slice(i, i + t);
            }
            r += t;
          }
          if (null === this.content)
            throw Error("THREE.GLTFLoader: JSON content not found.");
        }
      }
      class N {
        constructor(e, t) {
          if (!t)
            throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
          (this.name = d.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
          let i = this.json,
            n = this.dracoLoader,
            r = e.extensions[this.name].bufferView,
            s = e.extensions[this.name].attributes,
            a = {},
            o = {},
            u = {};
          for (let e in s) a[V[e] || e.toLowerCase()] = s[e];
          for (let t in e.attributes) {
            let n = V[t] || t.toLowerCase();
            if (void 0 !== s[t]) {
              let r = i.accessors[e.attributes[t]],
                s = j[r.componentType];
              (u[n] = s.name), (o[n] = !0 === r.normalized);
            }
          }
          return t.getDependency("bufferView", r).then(function (e) {
            return new Promise(function (t, i) {
              n.decodeDracoFile(
                e,
                function (e) {
                  for (let t in e.attributes) {
                    let i = e.attributes[t],
                      n = o[t];
                    void 0 !== n && (i.normalized = n);
                  }
                  t(e);
                },
                a,
                u,
                l,
                i
              );
            });
          });
        }
      }
      class O {
        constructor() {
          this.name = d.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
          return (
            ((void 0 === t.texCoord || t.texCoord === e.channel) &&
              void 0 === t.offset &&
              void 0 === t.rotation &&
              void 0 === t.scale) ||
              ((e = e.clone()),
              void 0 !== t.texCoord && (e.channel = t.texCoord),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              (e.needsUpdate = !0)),
            e
          );
        }
      }
      class D {
        constructor() {
          this.name = d.KHR_MESH_QUANTIZATION;
        }
      }
      class H extends n.lGw {
        constructor(e, t, i, n) {
          super(e, t, i, n);
        }
        copySampleValue_(e) {
          let t = this.resultBuffer,
            i = this.sampleValues,
            n = this.valueSize,
            r = e * n * 3 + n;
          for (let e = 0; e !== n; e++) t[e] = i[r + e];
          return t;
        }
        interpolate_(e, t, i, n) {
          let r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = 2 * a,
            l = 3 * a,
            u = n - t,
            h = (i - t) / u,
            d = h * h,
            c = d * h,
            m = e * l,
            p = m - l,
            g = -2 * c + 3 * d,
            f = c - d,
            A = 1 - g,
            w = f - d + h;
          for (let e = 0; e !== a; e++) {
            let t = s[p + e + a],
              i = s[p + e + o] * u,
              n = s[m + e + a],
              l = s[m + e] * u;
            r[e] = A * t + w * i + g * n + f * l;
          }
          return r;
        }
      }
      let F = new n.PTz();
      class $ extends H {
        interpolate_(e, t, i, n) {
          let r = super.interpolate_(e, t, i, n);
          return F.fromArray(r).normalize().toArray(r), r;
        }
      }
      let B = {
          POINTS: 0,
          LINES: 1,
          LINE_LOOP: 2,
          LINE_STRIP: 3,
          TRIANGLES: 4,
          TRIANGLE_STRIP: 5,
          TRIANGLE_FAN: 6,
        },
        j = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        G = {
          9728: n.hxR,
          9729: n.k6q,
          9984: n.pHI,
          9985: n.kRr,
          9986: n.Cfg,
          9987: n.$_I,
        },
        U = { 33071: n.ghU, 33648: n.kTW, 10497: n.GJx },
        z = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16,
        },
        V = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          ...(s >= 152
            ? {
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv1",
                TEXCOORD_2: "uv2",
                TEXCOORD_3: "uv3",
              }
            : { TEXCOORD_0: "uv", TEXCOORD_1: "uv2" }),
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex",
        },
        Y = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences",
        },
        K = { CUBICSPLINE: void 0, LINEAR: n.PJ3, STEP: n.ljd },
        W = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
      function X(e, t, i) {
        for (let n in i.extensions)
          void 0 === e[n] &&
            ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
            (t.userData.gltfExtensions[n] = i.extensions[n]));
      }
      function q(e, t) {
        void 0 !== t.extras &&
          ("object" == typeof t.extras
            ? Object.assign(e.userData, t.extras)
            : console.warn(
                "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
              ));
      }
      function Q(e) {
        let t = "",
          i = Object.keys(e).sort();
        for (let n = 0, r = i.length; n < r; n++)
          t += i[n] + ":" + e[i[n]] + ";";
        return t;
      }
      function J(e) {
        switch (e) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw Error(
              "THREE.GLTFLoader: Unsupported normalized accessor component type."
            );
        }
      }
      let Z = new n.kn4();
      class ee {
        constructor(e = {}, t = {}) {
          (this.json = e),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = t),
            (this.cache = new h()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.nodeCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.sourceCache = {}),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {});
          let i = !1,
            r = !1,
            s = -1;
          "undefined" != typeof navigator &&
            void 0 !== navigator.userAgent &&
            ((i =
              !0 ===
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
            (s = (r = navigator.userAgent.indexOf("Firefox") > -1)
              ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]
              : -1)),
            "undefined" == typeof createImageBitmap || i || (r && s < 98)
              ? (this.textureLoader = new n.Tap(this.options.manager))
              : (this.textureLoader = new n.Kzg(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new n.Y9S(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
          this.extensions = e;
        }
        setPlugins(e) {
          this.plugins = e;
        }
        parse(e, t) {
          let i = this,
            n = this.json,
            r = this.extensions;
          this.cache.removeAll(),
            (this.nodeCache = {}),
            this._invokeAll(function (e) {
              return e._markDefs && e._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (e) {
                return e.beforeRoot && e.beforeRoot();
              })
            )
              .then(function () {
                return Promise.all([
                  i.getDependencies("scene"),
                  i.getDependencies("animation"),
                  i.getDependencies("camera"),
                ]);
              })
              .then(function (t) {
                let s = {
                  scene: t[0][n.scene || 0],
                  scenes: t[0],
                  animations: t[1],
                  cameras: t[2],
                  asset: n.asset,
                  parser: i,
                  userData: {},
                };
                return (
                  X(r, s, n),
                  q(s, n),
                  Promise.all(
                    i._invokeAll(function (e) {
                      return e.afterRoot && e.afterRoot(s);
                    })
                  ).then(function () {
                    for (let e of s.scenes) e.updateMatrixWorld();
                    e(s);
                  })
                );
              })
              .catch(t);
        }
        _markDefs() {
          let e = this.json.nodes || [],
            t = this.json.skins || [],
            i = this.json.meshes || [];
          for (let i = 0, n = t.length; i < n; i++) {
            let n = t[i].joints;
            for (let t = 0, i = n.length; t < i; t++) e[n[t]].isBone = !0;
          }
          for (let t = 0, n = e.length; t < n; t++) {
            let n = e[t];
            void 0 !== n.mesh &&
              (this._addNodeRef(this.meshCache, n.mesh),
              void 0 !== n.skin && (i[n.mesh].isSkinnedMesh = !0)),
              void 0 !== n.camera &&
                this._addNodeRef(this.cameraCache, n.camera);
          }
        }
        _addNodeRef(e, t) {
          void 0 !== t &&
            (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, i) {
          if (e.refs[t] <= 1) return i;
          let n = i.clone(),
            r = (e, t) => {
              let i = this.associations.get(e);
              for (let [n, s] of (null != i && this.associations.set(t, i),
              e.children.entries()))
                r(s, t.children[n]);
            };
          return r(i, n), (n.name += "_instance_" + e.uses[t]++), n;
        }
        _invokeOne(e) {
          let t = Object.values(this.plugins);
          t.push(this);
          for (let i = 0; i < t.length; i++) {
            let n = e(t[i]);
            if (n) return n;
          }
          return null;
        }
        _invokeAll(e) {
          let t = Object.values(this.plugins);
          t.unshift(this);
          let i = [];
          for (let n = 0; n < t.length; n++) {
            let r = e(t[n]);
            r && i.push(r);
          }
          return i;
        }
        getDependency(e, t) {
          let i = e + ":" + t,
            n = this.cache.get(i);
          if (!n) {
            switch (e) {
              case "scene":
                n = this.loadScene(t);
                break;
              case "node":
                n = this._invokeOne(function (e) {
                  return e.loadNode && e.loadNode(t);
                });
                break;
              case "mesh":
                n = this._invokeOne(function (e) {
                  return e.loadMesh && e.loadMesh(t);
                });
                break;
              case "accessor":
                n = this.loadAccessor(t);
                break;
              case "bufferView":
                n = this._invokeOne(function (e) {
                  return e.loadBufferView && e.loadBufferView(t);
                });
                break;
              case "buffer":
                n = this.loadBuffer(t);
                break;
              case "material":
                n = this._invokeOne(function (e) {
                  return e.loadMaterial && e.loadMaterial(t);
                });
                break;
              case "texture":
                n = this._invokeOne(function (e) {
                  return e.loadTexture && e.loadTexture(t);
                });
                break;
              case "skin":
                n = this.loadSkin(t);
                break;
              case "animation":
                n = this._invokeOne(function (e) {
                  return e.loadAnimation && e.loadAnimation(t);
                });
                break;
              case "camera":
                n = this.loadCamera(t);
                break;
              default:
                if (
                  !(n = this._invokeOne(function (i) {
                    return (
                      i != this && i.getDependency && i.getDependency(e, t)
                    );
                  }))
                )
                  throw Error("Unknown type: " + e);
            }
            this.cache.add(i, n);
          }
          return n;
        }
        getDependencies(e) {
          let t = this.cache.get(e);
          if (!t) {
            let i = this;
            (t = Promise.all(
              (this.json[e + ("mesh" === e ? "es" : "s")] || []).map(function (
                t,
                n
              ) {
                return i.getDependency(e, n);
              })
            )),
              this.cache.add(e, t);
          }
          return t;
        }
        loadBuffer(e) {
          let t = this.json.buffers[e],
            i = this.fileLoader;
          if (t.type && "arraybuffer" !== t.type)
            throw Error(
              "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
            );
          if (void 0 === t.uri && 0 === e)
            return Promise.resolve(this.extensions[d.KHR_BINARY_GLTF].body);
          let r = this.options;
          return new Promise(function (e, s) {
            i.load(n.r6x.resolveURL(t.uri, r.path), e, void 0, function () {
              s(
                Error(
                  'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
                )
              );
            });
          });
        }
        loadBufferView(e) {
          let t = this.json.bufferViews[e];
          return this.getDependency("buffer", t.buffer).then(function (e) {
            let i = t.byteLength || 0,
              n = t.byteOffset || 0;
            return e.slice(n, n + i);
          });
        }
        loadAccessor(e) {
          let t = this,
            i = this.json,
            r = this.json.accessors[e];
          if (void 0 === r.bufferView && void 0 === r.sparse) {
            let e = z[r.type],
              t = j[r.componentType],
              i = !0 === r.normalized,
              s = new t(r.count * e);
            return Promise.resolve(new n.THS(s, e, i));
          }
          let s = [];
          return (
            void 0 !== r.bufferView
              ? s.push(this.getDependency("bufferView", r.bufferView))
              : s.push(null),
            void 0 !== r.sparse &&
              (s.push(
                this.getDependency("bufferView", r.sparse.indices.bufferView)
              ),
              s.push(
                this.getDependency("bufferView", r.sparse.values.bufferView)
              )),
            Promise.all(s).then(function (e) {
              let s, a;
              let o = e[0],
                l = z[r.type],
                u = j[r.componentType],
                h = u.BYTES_PER_ELEMENT,
                d = h * l,
                c = r.byteOffset || 0,
                m =
                  void 0 !== r.bufferView
                    ? i.bufferViews[r.bufferView].byteStride
                    : void 0,
                p = !0 === r.normalized;
              if (m && m !== d) {
                let e = Math.floor(c / m),
                  i =
                    "InterleavedBuffer:" +
                    r.bufferView +
                    ":" +
                    r.componentType +
                    ":" +
                    e +
                    ":" +
                    r.count,
                  d = t.cache.get(i);
                d ||
                  ((s = new u(o, e * m, (r.count * m) / h)),
                  (d = new n.eB$(s, m / h)),
                  t.cache.add(i, d)),
                  (a = new n.eHs(d, l, (c % m) / h, p));
              } else (s = null === o ? new u(r.count * l) : new u(o, c, r.count * l)), (a = new n.THS(s, l, p));
              if (void 0 !== r.sparse) {
                let t = z.SCALAR,
                  i = j[r.sparse.indices.componentType],
                  s = r.sparse.indices.byteOffset || 0,
                  h = r.sparse.values.byteOffset || 0,
                  d = new i(e[1], s, r.sparse.count * t),
                  c = new u(e[2], h, r.sparse.count * l);
                null !== o &&
                  (a = new n.THS(a.array.slice(), a.itemSize, a.normalized));
                for (let e = 0, t = d.length; e < t; e++) {
                  let t = d[e];
                  if (
                    (a.setX(t, c[e * l]),
                    l >= 2 && a.setY(t, c[e * l + 1]),
                    l >= 3 && a.setZ(t, c[e * l + 2]),
                    l >= 4 && a.setW(t, c[e * l + 3]),
                    l >= 5)
                  )
                    throw Error(
                      "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                    );
                }
              }
              return a;
            })
          );
        }
        loadTexture(e) {
          let t = this.json,
            i = this.options,
            n = t.textures[e].source,
            r = t.images[n],
            s = this.textureLoader;
          if (r.uri) {
            let e = i.manager.getHandler(r.uri);
            null !== e && (s = e);
          }
          return this.loadTextureImage(e, n, s);
        }
        loadTextureImage(e, t, i) {
          let r = this,
            s = this.json,
            a = s.textures[e],
            o = s.images[t],
            l = (o.uri || o.bufferView) + ":" + a.sampler;
          if (this.textureCache[l]) return this.textureCache[l];
          let u = this.loadImageSource(t, i)
            .then(function (t) {
              (t.flipY = !1),
                (t.name = a.name || o.name || ""),
                "" === t.name &&
                  "string" == typeof o.uri &&
                  !1 === o.uri.startsWith("data:image/") &&
                  (t.name = o.uri);
              let i = (s.samplers || {})[a.sampler] || {};
              return (
                (t.magFilter = G[i.magFilter] || n.k6q),
                (t.minFilter = G[i.minFilter] || n.$_I),
                (t.wrapS = U[i.wrapS] || n.GJx),
                (t.wrapT = U[i.wrapT] || n.GJx),
                r.associations.set(t, { textures: e }),
                t
              );
            })
            .catch(function () {
              return null;
            });
          return (this.textureCache[l] = u), u;
        }
        loadImageSource(e, t) {
          let i = this.json,
            r = this.options;
          if (void 0 !== this.sourceCache[e])
            return this.sourceCache[e].then((e) => e.clone());
          let s = i.images[e],
            a = self.URL || self.webkitURL,
            o = s.uri || "",
            l = !1;
          if (void 0 !== s.bufferView)
            o = this.getDependency("bufferView", s.bufferView).then(function (
              e
            ) {
              l = !0;
              let t = new Blob([e], { type: s.mimeType });
              return (o = a.createObjectURL(t));
            });
          else if (void 0 === s.uri)
            throw Error(
              "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
            );
          let u = Promise.resolve(o)
            .then(function (e) {
              return new Promise(function (i, s) {
                let a = i;
                !0 === t.isImageBitmapLoader &&
                  (a = function (e) {
                    let t = new n.gPd(e);
                    (t.needsUpdate = !0), i(t);
                  }),
                  t.load(n.r6x.resolveURL(e, r.path), a, void 0, s);
              });
            })
            .then(function (e) {
              var t;
              return (
                !0 === l && a.revokeObjectURL(o),
                q(e, s),
                (e.userData.mimeType =
                  s.mimeType ||
                  ((t = s.uri).search(/\.jpe?g($|\?)/i) > 0 ||
                  0 === t.search(/^data\:image\/jpeg/)
                    ? "image/jpeg"
                    : t.search(/\.webp($|\?)/i) > 0 ||
                      0 === t.search(/^data\:image\/webp/)
                    ? "image/webp"
                    : "image/png")),
                e
              );
            })
            .catch(function (e) {
              throw (
                (console.error("THREE.GLTFLoader: Couldn't load texture", o), e)
              );
            });
          return (this.sourceCache[e] = u), u;
        }
        assignTexture(e, t, i, n) {
          let r = this;
          return this.getDependency("texture", i.index).then(function (s) {
            if (!s) return null;
            if (
              (void 0 !== i.texCoord &&
                i.texCoord > 0 &&
                ((s = s.clone()).channel = i.texCoord),
              r.extensions[d.KHR_TEXTURE_TRANSFORM])
            ) {
              let e =
                void 0 !== i.extensions
                  ? i.extensions[d.KHR_TEXTURE_TRANSFORM]
                  : void 0;
              if (e) {
                let t = r.associations.get(s);
                (s = r.extensions[d.KHR_TEXTURE_TRANSFORM].extendTexture(s, e)),
                  r.associations.set(s, t);
              }
            }
            return (
              void 0 !== n &&
                ("number" == typeof n && (n = 3001 === n ? o : l),
                "colorSpace" in s
                  ? (s.colorSpace = n)
                  : (s.encoding = n === o ? 3001 : 3e3)),
              (e[t] = s),
              s
            );
          });
        }
        assignFinalMaterial(e) {
          let t = e.geometry,
            i = e.material,
            r = void 0 === t.attributes.tangent,
            s = void 0 !== t.attributes.color,
            a = void 0 === t.attributes.normal;
          if (e.isPoints) {
            let e = "PointsMaterial:" + i.uuid,
              t = this.cache.get(e);
            t ||
              ((t = new n.BH$()),
              n.imn.prototype.copy.call(t, i),
              t.color.copy(i.color),
              (t.map = i.map),
              (t.sizeAttenuation = !1),
              this.cache.add(e, t)),
              (i = t);
          } else if (e.isLine) {
            let e = "LineBasicMaterial:" + i.uuid,
              t = this.cache.get(e);
            t ||
              ((t = new n.mrM()),
              n.imn.prototype.copy.call(t, i),
              t.color.copy(i.color),
              (t.map = i.map),
              this.cache.add(e, t)),
              (i = t);
          }
          if (r || s || a) {
            let e = "ClonedMaterial:" + i.uuid + ":";
            r && (e += "derivative-tangents:"),
              s && (e += "vertex-colors:"),
              a && (e += "flat-shading:");
            let t = this.cache.get(e);
            t ||
              ((t = i.clone()),
              s && (t.vertexColors = !0),
              a && (t.flatShading = !0),
              r &&
                (t.normalScale && (t.normalScale.y *= -1),
                t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
              this.cache.add(e, t),
              this.associations.set(t, this.associations.get(i))),
              (i = t);
          }
          e.material = i;
        }
        getMaterialType() {
          return n._4j;
        }
        loadMaterial(e) {
          let t;
          let i = this,
            r = this.json,
            s = this.extensions,
            a = r.materials[e],
            u = {},
            h = a.extensions || {},
            c = [];
          if (h[d.KHR_MATERIALS_UNLIT]) {
            let e = s[d.KHR_MATERIALS_UNLIT];
            (t = e.getMaterialType()), c.push(e.extendParams(u, a, i));
          } else {
            let r = a.pbrMetallicRoughness || {};
            if (
              ((u.color = new n.Q1f(1, 1, 1)),
              (u.opacity = 1),
              Array.isArray(r.baseColorFactor))
            ) {
              let e = r.baseColorFactor;
              u.color.setRGB(e[0], e[1], e[2], l), (u.opacity = e[3]);
            }
            void 0 !== r.baseColorTexture &&
              c.push(i.assignTexture(u, "map", r.baseColorTexture, o)),
              (u.metalness =
                void 0 !== r.metallicFactor ? r.metallicFactor : 1),
              (u.roughness =
                void 0 !== r.roughnessFactor ? r.roughnessFactor : 1),
              void 0 !== r.metallicRoughnessTexture &&
                (c.push(
                  i.assignTexture(u, "metalnessMap", r.metallicRoughnessTexture)
                ),
                c.push(
                  i.assignTexture(u, "roughnessMap", r.metallicRoughnessTexture)
                )),
              (t = this._invokeOne(function (t) {
                return t.getMaterialType && t.getMaterialType(e);
              })),
              c.push(
                Promise.all(
                  this._invokeAll(function (t) {
                    return (
                      t.extendMaterialParams && t.extendMaterialParams(e, u)
                    );
                  })
                )
              );
          }
          !0 === a.doubleSided && (u.side = n.$EB);
          let m = a.alphaMode || W.OPAQUE;
          if (
            (m === W.BLEND
              ? ((u.transparent = !0), (u.depthWrite = !1))
              : ((u.transparent = !1),
                m === W.MASK &&
                  (u.alphaTest =
                    void 0 !== a.alphaCutoff ? a.alphaCutoff : 0.5)),
            void 0 !== a.normalTexture &&
              t !== n.V9B &&
              (c.push(i.assignTexture(u, "normalMap", a.normalTexture)),
              (u.normalScale = new n.I9Y(1, 1)),
              void 0 !== a.normalTexture.scale))
          ) {
            let e = a.normalTexture.scale;
            u.normalScale.set(e, e);
          }
          if (
            (void 0 !== a.occlusionTexture &&
              t !== n.V9B &&
              (c.push(i.assignTexture(u, "aoMap", a.occlusionTexture)),
              void 0 !== a.occlusionTexture.strength &&
                (u.aoMapIntensity = a.occlusionTexture.strength)),
            void 0 !== a.emissiveFactor && t !== n.V9B)
          ) {
            let e = a.emissiveFactor;
            u.emissive = new n.Q1f().setRGB(e[0], e[1], e[2], l);
          }
          return (
            void 0 !== a.emissiveTexture &&
              t !== n.V9B &&
              c.push(i.assignTexture(u, "emissiveMap", a.emissiveTexture, o)),
            Promise.all(c).then(function () {
              let n = new t(u);
              return (
                a.name && (n.name = a.name),
                q(n, a),
                i.associations.set(n, { materials: e }),
                a.extensions && X(s, n, a),
                n
              );
            })
          );
        }
        createUniqueName(e) {
          let t = n.Nwf.sanitizeNodeName(e || "");
          return t in this.nodeNamesUsed
            ? t + "_" + ++this.nodeNamesUsed[t]
            : ((this.nodeNamesUsed[t] = 0), t);
        }
        loadGeometries(e) {
          let t = this,
            i = this.extensions,
            r = this.primitiveCache,
            s = [];
          for (let a = 0, o = e.length; a < o; a++) {
            let o = e[a],
              l = (function (e) {
                let t;
                let i =
                  e.extensions && e.extensions[d.KHR_DRACO_MESH_COMPRESSION];
                if (
                  ((t = i
                    ? "draco:" +
                      i.bufferView +
                      ":" +
                      i.indices +
                      ":" +
                      Q(i.attributes)
                    : e.indices + ":" + Q(e.attributes) + ":" + e.mode),
                  void 0 !== e.targets)
                )
                  for (let i = 0, n = e.targets.length; i < n; i++)
                    t += ":" + Q(e.targets[i]);
                return t;
              })(o),
              u = r[l];
            if (u) s.push(u.promise);
            else {
              let e;
              (e =
                o.extensions && o.extensions[d.KHR_DRACO_MESH_COMPRESSION]
                  ? (function (e) {
                      return i[d.KHR_DRACO_MESH_COMPRESSION]
                        .decodePrimitive(e, t)
                        .then(function (i) {
                          return et(i, e, t);
                        });
                    })(o)
                  : et(new n.LoY(), o, t)),
                (r[l] = { primitive: o, promise: e }),
                s.push(e);
            }
          }
          return Promise.all(s);
        }
        loadMesh(e) {
          let t = this,
            i = this.json,
            s = this.extensions,
            a = i.meshes[e],
            o = a.primitives,
            l = [];
          for (let e = 0, t = o.length; e < t; e++) {
            var u;
            let t =
              void 0 === o[e].material
                ? (void 0 === (u = this.cache).DefaultMaterial &&
                    (u.DefaultMaterial = new n._4j({
                      color: 0xffffff,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: n.hB5,
                    })),
                  u.DefaultMaterial)
                : this.getDependency("material", o[e].material);
            l.push(t);
          }
          return (
            l.push(t.loadGeometries(o)),
            Promise.all(l).then(function (i) {
              let l = i.slice(0, i.length - 1),
                u = i[i.length - 1],
                h = [];
              for (let i = 0, d = u.length; i < d; i++) {
                let d;
                let c = u[i],
                  m = o[i],
                  p = l[i];
                if (
                  m.mode === B.TRIANGLES ||
                  m.mode === B.TRIANGLE_STRIP ||
                  m.mode === B.TRIANGLE_FAN ||
                  void 0 === m.mode
                )
                  !0 ===
                    (d =
                      !0 === a.isSkinnedMesh
                        ? new n.I46(c, p)
                        : new n.eaF(c, p)).isSkinnedMesh &&
                    d.normalizeSkinWeights(),
                    m.mode === B.TRIANGLE_STRIP
                      ? (d.geometry = r(d.geometry, n.O49))
                      : m.mode === B.TRIANGLE_FAN &&
                        (d.geometry = r(d.geometry, n.rYR));
                else if (m.mode === B.LINES) d = new n.DXC(c, p);
                else if (m.mode === B.LINE_STRIP) d = new n.N1A(c, p);
                else if (m.mode === B.LINE_LOOP) d = new n.FCc(c, p);
                else if (m.mode === B.POINTS) d = new n.ONl(c, p);
                else
                  throw Error(
                    "THREE.GLTFLoader: Primitive mode unsupported: " + m.mode
                  );
                Object.keys(d.geometry.morphAttributes).length > 0 &&
                  (function (e, t) {
                    if ((e.updateMorphTargets(), void 0 !== t.weights))
                      for (let i = 0, n = t.weights.length; i < n; i++)
                        e.morphTargetInfluences[i] = t.weights[i];
                    if (t.extras && Array.isArray(t.extras.targetNames)) {
                      let i = t.extras.targetNames;
                      if (e.morphTargetInfluences.length === i.length) {
                        e.morphTargetDictionary = {};
                        for (let t = 0, n = i.length; t < n; t++)
                          e.morphTargetDictionary[i[t]] = t;
                      } else
                        console.warn(
                          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
                        );
                    }
                  })(d, a),
                  (d.name = t.createUniqueName(a.name || "mesh_" + e)),
                  q(d, a),
                  m.extensions && X(s, d, m),
                  t.assignFinalMaterial(d),
                  h.push(d);
              }
              for (let i = 0, n = h.length; i < n; i++)
                t.associations.set(h[i], { meshes: e, primitives: i });
              if (1 === h.length) return a.extensions && X(s, h[0], a), h[0];
              let d = new n.YJl();
              a.extensions && X(s, d, a), t.associations.set(d, { meshes: e });
              for (let e = 0, t = h.length; e < t; e++) d.add(h[e]);
              return d;
            })
          );
        }
        loadCamera(e) {
          let t;
          let i = this.json.cameras[e],
            r = i[i.type];
          if (!r) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
          }
          return (
            "perspective" === i.type
              ? (t = new n.ubm(
                  n.cj9.radToDeg(r.yfov),
                  r.aspectRatio || 1,
                  r.znear || 1,
                  r.zfar || 2e6
                ))
              : "orthographic" === i.type &&
                (t = new n.qUd(
                  -r.xmag,
                  r.xmag,
                  r.ymag,
                  -r.ymag,
                  r.znear,
                  r.zfar
                )),
            i.name && (t.name = this.createUniqueName(i.name)),
            q(t, i),
            Promise.resolve(t)
          );
        }
        loadSkin(e) {
          let t = this.json.skins[e],
            i = [];
          for (let e = 0, n = t.joints.length; e < n; e++)
            i.push(this._loadNodeShallow(t.joints[e]));
          return (
            void 0 !== t.inverseBindMatrices
              ? i.push(this.getDependency("accessor", t.inverseBindMatrices))
              : i.push(null),
            Promise.all(i).then(function (e) {
              let i = e.pop(),
                r = [],
                s = [];
              for (let a = 0, o = e.length; a < o; a++) {
                let o = e[a];
                if (o) {
                  r.push(o);
                  let e = new n.kn4();
                  null !== i && e.fromArray(i.array, 16 * a), s.push(e);
                } else
                  console.warn(
                    'THREE.GLTFLoader: Joint "%s" could not be found.',
                    t.joints[a]
                  );
              }
              return new n.EAD(r, s);
            })
          );
        }
        loadAnimation(e) {
          let t = this.json,
            i = this,
            r = t.animations[e],
            s = r.name ? r.name : "animation_" + e,
            a = [],
            o = [],
            l = [],
            u = [],
            h = [];
          for (let e = 0, t = r.channels.length; e < t; e++) {
            let t = r.channels[e],
              i = r.samplers[t.sampler],
              n = t.target,
              s = n.node,
              d = void 0 !== r.parameters ? r.parameters[i.input] : i.input,
              c = void 0 !== r.parameters ? r.parameters[i.output] : i.output;
            void 0 !== n.node &&
              (a.push(this.getDependency("node", s)),
              o.push(this.getDependency("accessor", d)),
              l.push(this.getDependency("accessor", c)),
              u.push(i),
              h.push(n));
          }
          return Promise.all([
            Promise.all(a),
            Promise.all(o),
            Promise.all(l),
            Promise.all(u),
            Promise.all(h),
          ]).then(function (e) {
            let t = e[0],
              r = e[1],
              a = e[2],
              o = e[3],
              l = e[4],
              u = [];
            for (let e = 0, n = t.length; e < n; e++) {
              let n = t[e],
                s = r[e],
                h = a[e],
                d = o[e],
                c = l[e];
              if (void 0 === n) continue;
              n.updateMatrix && n.updateMatrix();
              let m = i._createAnimationTracks(n, s, h, d, c);
              if (m) for (let e = 0; e < m.length; e++) u.push(m[e]);
            }
            return new n.tz3(s, void 0, u);
          });
        }
        createNodeMesh(e) {
          let t = this.json,
            i = this,
            n = t.nodes[e];
          return void 0 === n.mesh
            ? null
            : i.getDependency("mesh", n.mesh).then(function (e) {
                let t = i._getNodeRef(i.meshCache, n.mesh, e);
                return (
                  void 0 !== n.weights &&
                    t.traverse(function (e) {
                      if (e.isMesh)
                        for (let t = 0, i = n.weights.length; t < i; t++)
                          e.morphTargetInfluences[t] = n.weights[t];
                    }),
                  t
                );
              });
        }
        loadNode(e) {
          let t = this.json.nodes[e],
            i = this._loadNodeShallow(e),
            n = [],
            r = t.children || [];
          for (let e = 0, t = r.length; e < t; e++)
            n.push(this.getDependency("node", r[e]));
          let s =
            void 0 === t.skin
              ? Promise.resolve(null)
              : this.getDependency("skin", t.skin);
          return Promise.all([i, Promise.all(n), s]).then(function (e) {
            let t = e[0],
              i = e[1],
              n = e[2];
            null !== n &&
              t.traverse(function (e) {
                e.isSkinnedMesh && e.bind(n, Z);
              });
            for (let e = 0, n = i.length; e < n; e++) t.add(i[e]);
            return t;
          });
        }
        _loadNodeShallow(e) {
          let t = this.json,
            i = this.extensions,
            r = this;
          if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
          let s = t.nodes[e],
            a = s.name ? r.createUniqueName(s.name) : "",
            o = [],
            l = r._invokeOne(function (t) {
              return t.createNodeMesh && t.createNodeMesh(e);
            });
          return (
            l && o.push(l),
            void 0 !== s.camera &&
              o.push(
                r.getDependency("camera", s.camera).then(function (e) {
                  return r._getNodeRef(r.cameraCache, s.camera, e);
                })
              ),
            r
              ._invokeAll(function (t) {
                return t.createNodeAttachment && t.createNodeAttachment(e);
              })
              .forEach(function (e) {
                o.push(e);
              }),
            (this.nodeCache[e] = Promise.all(o).then(function (t) {
              let o;
              if (
                (o =
                  !0 === s.isBone
                    ? new n.$Kf()
                    : t.length > 1
                    ? new n.YJl()
                    : 1 === t.length
                    ? t[0]
                    : new n.B69()) !== t[0]
              )
                for (let e = 0, i = t.length; e < i; e++) o.add(t[e]);
              if (
                (s.name && ((o.userData.name = s.name), (o.name = a)),
                q(o, s),
                s.extensions && X(i, o, s),
                void 0 !== s.matrix)
              ) {
                let e = new n.kn4();
                e.fromArray(s.matrix), o.applyMatrix4(e);
              } else void 0 !== s.translation && o.position.fromArray(s.translation), void 0 !== s.rotation && o.quaternion.fromArray(s.rotation), void 0 !== s.scale && o.scale.fromArray(s.scale);
              return (
                r.associations.has(o) || r.associations.set(o, {}),
                (r.associations.get(o).nodes = e),
                o
              );
            })),
            this.nodeCache[e]
          );
        }
        loadScene(e) {
          let t = this.extensions,
            i = this.json.scenes[e],
            r = this,
            s = new n.YJl();
          i.name && (s.name = r.createUniqueName(i.name)),
            q(s, i),
            i.extensions && X(t, s, i);
          let a = i.nodes || [],
            o = [];
          for (let e = 0, t = a.length; e < t; e++)
            o.push(r.getDependency("node", a[e]));
          return Promise.all(o).then(function (e) {
            for (let t = 0, i = e.length; t < i; t++) s.add(e[t]);
            return (
              (r.associations = ((e) => {
                let t = new Map();
                for (let [e, i] of r.associations)
                  (e instanceof n.imn || e instanceof n.gPd) && t.set(e, i);
                return (
                  e.traverse((e) => {
                    let i = r.associations.get(e);
                    null != i && t.set(e, i);
                  }),
                  t
                );
              })(s)),
              s
            );
          });
        }
        _createAnimationTracks(e, t, i, r, s) {
          let a;
          let o = [],
            l = e.name ? e.name : e.uuid,
            u = [];
          switch (
            (Y[s.path] === Y.weights
              ? e.traverse(function (e) {
                  e.morphTargetInfluences && u.push(e.name ? e.name : e.uuid);
                })
              : u.push(l),
            Y[s.path])
          ) {
            case Y.weights:
              a = n.Hit;
              break;
            case Y.rotation:
              a = n.MBL;
              break;
            case Y.position:
            case Y.scale:
              a = n.RiT;
              break;
            default:
              a = 1 === i.itemSize ? n.Hit : n.RiT;
          }
          let h = void 0 !== r.interpolation ? K[r.interpolation] : n.PJ3,
            d = this._getArrayFromAccessor(i);
          for (let e = 0, i = u.length; e < i; e++) {
            let i = new a(u[e] + "." + Y[s.path], t.array, d, h);
            "CUBICSPLINE" === r.interpolation &&
              this._createCubicSplineTrackInterpolant(i),
              o.push(i);
          }
          return o;
        }
        _getArrayFromAccessor(e) {
          let t = e.array;
          if (e.normalized) {
            let e = J(t.constructor),
              i = new Float32Array(t.length);
            for (let n = 0, r = t.length; n < r; n++) i[n] = t[n] * e;
            t = i;
          }
          return t;
        }
        _createCubicSplineTrackInterpolant(e) {
          (e.createInterpolant = function (e) {
            return new (this instanceof n.MBL ? $ : H)(
              this.times,
              this.values,
              this.getValueSize() / 3,
              e
            );
          }),
            (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
              !0);
        }
      }
      function et(e, t, i) {
        let r = t.attributes,
          s = [];
        for (let t in r) {
          let n = V[t] || t.toLowerCase();
          n in e.attributes ||
            s.push(
              (function (t, n) {
                return i.getDependency("accessor", t).then(function (t) {
                  e.setAttribute(n, t);
                });
              })(r[t], n)
            );
        }
        if (void 0 !== t.indices && !e.index) {
          let n = i.getDependency("accessor", t.indices).then(function (t) {
            e.setIndex(t);
          });
          s.push(n);
        }
        return (
          q(e, t),
          !(function (e, t, i) {
            let r = t.attributes,
              s = new n.NRn();
            if (void 0 === r.POSITION) return;
            {
              let e = i.json.accessors[r.POSITION],
                t = e.min,
                a = e.max;
              if (void 0 !== t && void 0 !== a) {
                if (
                  (s.set(
                    new n.Pq0(t[0], t[1], t[2]),
                    new n.Pq0(a[0], a[1], a[2])
                  ),
                  e.normalized)
                ) {
                  let t = J(j[e.componentType]);
                  s.min.multiplyScalar(t), s.max.multiplyScalar(t);
                }
              } else {
                console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
                return;
              }
            }
            let a = t.targets;
            if (void 0 !== a) {
              let e = new n.Pq0(),
                t = new n.Pq0();
              for (let n = 0, r = a.length; n < r; n++) {
                let r = a[n];
                if (void 0 !== r.POSITION) {
                  let n = i.json.accessors[r.POSITION],
                    s = n.min,
                    a = n.max;
                  if (void 0 !== s && void 0 !== a) {
                    if (
                      (t.setX(Math.max(Math.abs(s[0]), Math.abs(a[0]))),
                      t.setY(Math.max(Math.abs(s[1]), Math.abs(a[1]))),
                      t.setZ(Math.max(Math.abs(s[2]), Math.abs(a[2]))),
                      n.normalized)
                    ) {
                      let e = J(j[n.componentType]);
                      t.multiplyScalar(e);
                    }
                    e.max(t);
                  } else
                    console.warn(
                      "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                    );
                }
              }
              s.expandByVector(e);
            }
            e.boundingBox = s;
            let o = new n.iyt();
            s.getCenter(o.center),
              (o.radius = s.min.distanceTo(s.max) / 2),
              (e.boundingSphere = o);
          })(e, t, i),
          Promise.all(s).then(function () {
            return void 0 !== t.targets
              ? (function (e, t, i) {
                  let n = !1,
                    r = !1,
                    s = !1;
                  for (let e = 0, i = t.length; e < i; e++) {
                    let i = t[e];
                    if (
                      (void 0 !== i.POSITION && (n = !0),
                      void 0 !== i.NORMAL && (r = !0),
                      void 0 !== i.COLOR_0 && (s = !0),
                      n && r && s)
                    )
                      break;
                  }
                  if (!n && !r && !s) return Promise.resolve(e);
                  let a = [],
                    o = [],
                    l = [];
                  for (let u = 0, h = t.length; u < h; u++) {
                    let h = t[u];
                    if (n) {
                      let t =
                        void 0 !== h.POSITION
                          ? i.getDependency("accessor", h.POSITION)
                          : e.attributes.position;
                      a.push(t);
                    }
                    if (r) {
                      let t =
                        void 0 !== h.NORMAL
                          ? i.getDependency("accessor", h.NORMAL)
                          : e.attributes.normal;
                      o.push(t);
                    }
                    if (s) {
                      let t =
                        void 0 !== h.COLOR_0
                          ? i.getDependency("accessor", h.COLOR_0)
                          : e.attributes.color;
                      l.push(t);
                    }
                  }
                  return Promise.all([
                    Promise.all(a),
                    Promise.all(o),
                    Promise.all(l),
                  ]).then(function (t) {
                    let i = t[0],
                      a = t[1],
                      o = t[2];
                    return (
                      n && (e.morphAttributes.position = i),
                      r && (e.morphAttributes.normal = a),
                      s && (e.morphAttributes.color = o),
                      (e.morphTargetsRelative = !0),
                      e
                    );
                  });
                })(e, t.targets, i)
              : e;
          })
        );
      }
    },
  },
]);
