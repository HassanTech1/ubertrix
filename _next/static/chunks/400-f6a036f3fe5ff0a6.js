(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [400],
  {
    79989: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => j });
      var i = r(95155);
      let n =
          (...e) =>
          (...t) => {
            for (let r = 0; r < e.length; r++) {
              let i = e[r];
              if (i) {
                let e = i(...t);
                if (null != e) return e;
              }
            }
          },
        s = {
          listItem: "list-item",
          oListItem: "o-list-item",
          list: "group-list-item",
          oList: "group-o-list-item",
          span: "span",
        },
        a = {
          [s.listItem]: "listItem",
          [s.oListItem]: "oListItem",
          [s.list]: "list",
          [s.oList]: "oList",
        },
        o = (e) => (t, r, i, n, s) => {
          let o = e[a[t] || t];
          if (o) return o({ type: t, node: r, text: i, children: n, key: s });
        };
      var l = r(12115);
      let u = () => (++u.i).toString();
      u.i = 0;
      let d = (e) => {
          let t = p(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(f(t[e]));
          return { key: u(), children: r };
        },
        c = (e, t = []) => ({
          key: u(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        h = (e) => c({ type: s.span, text: e, spans: [] }),
        p = (e) => {
          let t = e.slice(0);
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            if (r.type === s.listItem || r.type === s.oListItem) {
              let i = [r];
              for (; t[e + 1] && t[e + 1].type === r.type; )
                i.push(t[e + 1]), t.splice(e, 1);
              r.type === s.listItem
                ? (t[e] = { type: s.list, items: i })
                : (t[e] = { type: s.oList, items: i });
            }
          }
          return t;
        },
        f = (e) => {
          if ("text" in e) return c(e, m(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let r = 0; r < e.items.length; r++) t.push(f(e.items[r]));
            return c(e, t);
          }
          return c(e);
        },
        m = (e, t, r) => {
          if (!e.length) return [h(t.text)];
          let i = e.slice(0);
          i.sort((e, t) => e.start - t.start || t.end - e.end);
          let n = [];
          for (let e = 0; e < i.length; e++) {
            let s = i[e],
              a = (r && r.start) || 0,
              o = s.start - a,
              l = s.end - a,
              u = t.text.slice(o, l),
              d = [];
            for (let t = e; t < i.length; t++) {
              let e = i[t];
              e !== s &&
                (e.start >= s.start && e.end <= s.end
                  ? (d.push(e), i.splice(t, 1), t--)
                  : e.start < s.end &&
                    e.end > s.start &&
                    (d.push({ ...e, end: s.end }),
                    (i[t] = { ...e, start: s.end })));
            }
            0 === e && o > 0 && n.push(h(t.text.slice(0, o)));
            let p = { ...s, text: u };
            n.push(c(p, m(d, { ...t, text: u }, s))),
              l < t.text.length &&
                n.push(
                  h(t.text.slice(l, i[e + 1] ? i[e + 1].start - a : void 0))
                );
          }
          return n;
        },
        v = (e, t) => g(d(e).children, t),
        g = (e, t) => {
          let r = [];
          for (let i = 0; i < e.length; i++) {
            let n = e[i],
              s = t(n.type, n.node, n.text, g(n.children, t), n.key);
            null != s && r.push(s);
          }
          return r;
        },
        y = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        },
        b = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        w = (e) => {
          var t;
          return {
            link_type: b.Document,
            id: e.id,
            uid: e.uid || void 0,
            type: e.type,
            tags: e.tags,
            lang: e.lang,
            url: null == e.url ? void 0 : e.url,
            slug: null == (t = e.slugs) ? void 0 : t[0],
            ...(e.data && Object.keys(e.data).length > 0
              ? { data: e.data }
              : {}),
          };
        },
        x = (e, ...t) => {
          let r;
          if (!e) return null;
          let i = "link_type" in e ? e : w(e),
            [n] = t;
          switch (
            ((r =
              "function" == typeof n || null == n
                ? { linkResolver: n }
                : { ...n }),
            i.link_type)
          ) {
            case b.Media:
            case b.Web:
              return "url" in i ? i.url : null;
            case b.Document:
              if ("id" in i && r.linkResolver) {
                let e = r.linkResolver(i);
                if (null != e) return e;
              }
              if ("url" in i && i.url) return i.url;
              return null;
            case b.Any:
            default:
              return null;
          }
        },
        S = (e) => null != e,
        T = (e) =>
          !!S(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        E = (e) => S(e) && ("id" in e || "url" in e),
        C = (e, t = {}) => {
          if (e && ("link_type" in e ? E(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              i = x(e, t.linkResolver),
              n = null == i ? void 0 : i,
              s = "string" == typeof n && !y(n),
              a = t.rel
                ? t.rel({ href: n, isExternal: s, target: r })
                : s
                ? "noreferrer"
                : void 0;
            return { href: n, target: r, rel: null == a ? void 0 : a };
          }
          return {};
        },
        P = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        };
      r(2818);
      let A = l.forwardRef(function (e, t) {
        let {
            field: r,
            document: n,
            linkResolver: s,
            internalComponent: a,
            externalComponent: o,
            children: l,
            ...u
          } = e,
          {
            href: d,
            rel: c,
            ...h
          } = C(r ?? n, {
            linkResolver: s,
            rel: "function" == typeof u.rel ? u.rel : void 0,
          }),
          p = c;
        "rel" in u && "function" != typeof u.rel && (p = u.rel);
        let f = ("href" in u ? u.href : d) || "",
          m = f && P(f) ? a || "a" : o || "a";
        return (0,
        i.jsx)(m, { ref: t, ...h, ...u, href: f, rel: p, children: "children" in e ? l : null == r ? void 0 : r.text });
      });
      r(2818);
      let k = (e) => {
          if ("direction" in e && "rtl" === e.direction) return "rtl";
        },
        M = (e) =>
          o({
            heading1: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("h1", { dir: k(e), children: t }, r),
            heading2: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("h2", { dir: k(e), children: t }, r),
            heading3: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("h3", { dir: k(e), children: t }, r),
            heading4: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("h4", { dir: k(e), children: t }, r),
            heading5: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("h5", { dir: k(e), children: t }, r),
            heading6: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("h6", { dir: k(e), children: t }, r),
            paragraph: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("p", { dir: k(e), children: t }, r),
            preformatted: ({ node: e, key: t }) =>
              (0, i.jsx)("pre", { children: e.text }, t),
            strong: ({ children: e, key: t }) =>
              (0, i.jsx)("strong", { children: e }, t),
            em: ({ children: e, key: t }) =>
              (0, i.jsx)("em", { children: e }, t),
            listItem: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("li", { dir: k(e), children: t }, r),
            oListItem: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("li", { dir: k(e), children: t }, r),
            list: ({ children: e, key: t }) =>
              (0, i.jsx)("ul", { children: e }, t),
            oList: ({ children: e, key: t }) =>
              (0, i.jsx)("ol", { children: e }, t),
            image: ({ node: t, key: r }) => {
              let n = (0, i.jsx)("img", {
                src: t.url,
                alt: t.alt ?? void 0,
                "data-copyright": t.copyright ? t.copyright : void 0,
              });
              return (0, i.jsx)(
                "p",
                {
                  className: "block-img",
                  children: t.linkTo
                    ? (0, i.jsx)(A, {
                        linkResolver: e.linkResolver,
                        internalComponent: e.internalLinkComponent,
                        externalComponent: e.externalLinkComponent,
                        field: t.linkTo,
                        children: n,
                      })
                    : n,
                },
                r
              );
            },
            embed: ({ node: e, key: t }) =>
              (0, i.jsx)(
                "div",
                {
                  "data-oembed": e.oembed.embed_url,
                  "data-oembed-type": e.oembed.type,
                  "data-oembed-provider": e.oembed.provider_name,
                  dangerouslySetInnerHTML: { __html: e.oembed.html ?? "" },
                },
                t
              ),
            hyperlink: ({ node: t, children: r, key: n }) =>
              (0, i.jsx)(
                A,
                {
                  field: t.data,
                  linkResolver: e.linkResolver,
                  internalComponent: e.internalLinkComponent,
                  externalComponent: e.externalLinkComponent,
                  children: r,
                },
                n
              ),
            label: ({ node: e, children: t, key: r }) =>
              (0, i.jsx)("span", { className: e.data.label, children: t }, r),
            span: ({ text: e, key: t }) => {
              let r = [],
                n = 0;
              for (let t of e.split("\n"))
                n > 0 && r.push((0, i.jsx)("br", {}, `${n}__break`)),
                  r.push((0, i.jsx)(l.Fragment, { children: t }, `${n}__line`)),
                  n++;
              return (0, i.jsx)(l.Fragment, { children: r }, t);
            },
          });
      function O({
        linkResolver: e,
        field: t,
        fallback: r,
        components: s,
        externalLinkComponent: a,
        internalLinkComponent: u,
        ...d
      }) {
        return l.useMemo(() => {
          if (!T(t))
            return null != r ? (0, i.jsx)(i.Fragment, { children: r }) : null;
          {
            let r = n(
                "object" == typeof s ? o(s) : s,
                M({
                  linkResolver: e,
                  internalLinkComponent: u,
                  externalLinkComponent: a,
                })
              ),
              d = v(t, (e, t, i, n, s) => {
                let a = r(e, t, i, n, s);
                return l.isValidElement(a) && null == a.key
                  ? l.cloneElement(a, { key: s })
                  : a;
              });
            return (0, i.jsx)(i.Fragment, { children: d });
          }
        }, [t, u, a, s, e, r]);
      }
      let _ = l.createContext({}),
        D = () => l.useContext(_) || {},
        j = function ({ components: e, ...t }) {
          let r = D(),
            s = n(
              "object" == typeof e ? o(e) : e,
              "object" == typeof r.richTextComponents
                ? o(r.richTextComponents)
                : r.richTextComponents
            );
          return (0, i.jsx)(O, {
            components: s,
            internalLinkComponent: r.internalLinkComponent,
            externalLinkComponent: r.externalLinkComponent,
            ...t,
          });
        };
    },
    10643: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      let i = ({
        access_key: e,
        settings: t = {},
        onSuccess: r,
        onError: i,
      }) => ({
        submit: function (n) {
          try {
            return Promise.resolve(
              fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ access_key: e, ...t, ...n }),
              })
            ).then(function (e) {
              return Promise.resolve(e.json()).then(function (e) {
                !0 === e.success ? r(e.message, e) : i(e.message, e);
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        },
      });
    },
    45551: (e, t) => {
      "use strict";
      t.Y = function (e, t) {
        return e
          .split(",")
          .map(function (e) {
            var t = (e = e.trim()).match(r),
              s = t[1],
              a = t[2],
              o = t[3] || "",
              l = {};
            return (
              (l.inverse = !!s && "not" === s.toLowerCase()),
              (l.type = a ? a.toLowerCase() : "all"),
              (o = o.match(/\([^\)]+\)/g) || []),
              (l.expressions = o.map(function (e) {
                var t = e.match(i),
                  r = t[1].toLowerCase().match(n);
                return { modifier: r[1], feature: r[2], value: t[2] };
              })),
              l
            );
          })
          .some(function (e) {
            var r = e.inverse,
              i = "all" === e.type || t.type === e.type;
            if ((i && r) || !(i || r)) return !1;
            var n = e.expressions.every(function (e) {
              var r = e.feature,
                i = e.modifier,
                n = e.value,
                s = t[r];
              if (!s) return !1;
              switch (r) {
                case "orientation":
                case "scan":
                  return s.toLowerCase() === n.toLowerCase();
                case "width":
                case "height":
                case "device-width":
                case "device-height":
                  (n = u(n)), (s = u(s));
                  break;
                case "resolution":
                  (n = l(n)), (s = l(s));
                  break;
                case "aspect-ratio":
                case "device-aspect-ratio":
                case "device-pixel-ratio":
                  (n = o(n)), (s = o(s));
                  break;
                case "grid":
                case "color":
                case "color-index":
                case "monochrome":
                  (n = parseInt(n, 10) || 1), (s = parseInt(s, 10) || 0);
              }
              switch (i) {
                case "min":
                  return s >= n;
                case "max":
                  return s <= n;
                default:
                  return s === n;
              }
            });
            return (n && !r) || (!n && r);
          });
      };
      var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
        i = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
        n = /^(?:(min|max)-)?(.+)/,
        s = /(em|rem|px|cm|mm|in|pt|pc)?$/,
        a = /(dpi|dpcm|dppx)?$/;
      function o(e) {
        var t,
          r = Number(e);
        return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r;
      }
      function l(e) {
        var t = parseFloat(e);
        switch (String(e).match(a)[1]) {
          case "dpcm":
            return t / 2.54;
          case "dppx":
            return 96 * t;
          default:
            return t;
        }
      }
      function u(e) {
        var t = parseFloat(e);
        switch (String(e).match(s)[1]) {
          case "em":
          case "rem":
            return 16 * t;
          case "cm":
            return (96 * t) / 2.54;
          case "mm":
            return (96 * t) / 2.54 / 10;
          case "in":
            return 96 * t;
          case "pt":
            return 72 * t;
          case "pc":
            return (72 * t) / 12;
          default:
            return t;
        }
      }
    },
    80316: (e, t, r) => {
      var i = "Expected a function",
        n = 0 / 0,
        s = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt,
        d = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        c = "object" == typeof self && self && self.Object === Object && self,
        h = d || c || Function("return this")(),
        p = Object.prototype.toString,
        f = Math.max,
        m = Math.min,
        v = function () {
          return h.Date.now();
        };
      function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function y(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == p.call(t))
        )
          return n;
        if (g(e)) {
          var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = g(r) ? r + "" : r;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(s, "");
        var i = o.test(e);
        return i || l.test(e) ? u(e.slice(2), i ? 2 : 8) : a.test(e) ? n : +e;
      }
      e.exports = function (e, t, r) {
        var n = !0,
          s = !0;
        if ("function" != typeof e) throw TypeError(i);
        return (
          g(r) &&
            ((n = "leading" in r ? !!r.leading : n),
            (s = "trailing" in r ? !!r.trailing : s)),
          (function (e, t, r) {
            var n,
              s,
              a,
              o,
              l,
              u,
              d = 0,
              c = !1,
              h = !1,
              p = !0;
            if ("function" != typeof e) throw TypeError(i);
            function b(t) {
              var r = n,
                i = s;
              return (n = s = void 0), (d = t), (o = e.apply(i, r));
            }
            function w(e) {
              var r = e - u,
                i = e - d;
              return void 0 === u || r >= t || r < 0 || (h && i >= a);
            }
            function x() {
              var e,
                r,
                i,
                n = v();
              if (w(n)) return S(n);
              l = setTimeout(
                x,
                ((e = n - u), (r = n - d), (i = t - e), h ? m(i, a - r) : i)
              );
            }
            function S(e) {
              return ((l = void 0), p && n) ? b(e) : ((n = s = void 0), o);
            }
            function T() {
              var e,
                r = v(),
                i = w(r);
              if (((n = arguments), (s = this), (u = r), i)) {
                if (void 0 === l)
                  return (d = e = u), (l = setTimeout(x, t)), c ? b(e) : o;
                if (h) return (l = setTimeout(x, t)), b(u);
              }
              return void 0 === l && (l = setTimeout(x, t)), o;
            }
            return (
              (t = y(t) || 0),
              g(r) &&
                ((c = !!r.leading),
                (a = (h = "maxWait" in r) ? f(y(r.maxWait) || 0, t) : a),
                (p = "trailing" in r ? !!r.trailing : p)),
              (T.cancel = function () {
                void 0 !== l && clearTimeout(l),
                  (d = 0),
                  (n = u = s = l = void 0);
              }),
              (T.flush = function () {
                return void 0 === l ? o : S(v());
              }),
              T
            );
          })(e, t, { leading: n, maxWait: t, trailing: s })
        );
      };
    },
    38740: (e, t, r) => {
      "use strict";
      var i = r(45551).Y,
        n = "undefined" != typeof window ? window.matchMedia : null;
      function s(e, t, r) {
        var s,
          a = this;
        function o(e) {
          (a.matches = e.matches), (a.media = e.media);
        }
        n && !r && (s = n.call(window, e)),
          s
            ? ((this.matches = s.matches),
              (this.media = s.media),
              s.addListener(o))
            : ((this.matches = i(e, t)), (this.media = e)),
          (this.addListener = function (e) {
            s && s.addListener(e);
          }),
          (this.removeListener = function (e) {
            s && s.removeListener(e);
          }),
          (this.dispose = function () {
            s && s.removeListener(o);
          });
      }
      e.exports = function (e, t, r) {
        return new s(e, t, r);
      };
    },
    77711: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => n.a });
      var i = r(21956),
        n = r.n(i);
    },
    21956: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let i = r(60306)._(r(30580));
      function n(e, t) {
        var r;
        let n = {};
        "function" == typeof e && (n.loader = e);
        let s = { ...n, ...t };
        return (0, i.default)({
          ...s,
          modules: null == (r = s.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    39827: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let i = r(93719);
      function n(e) {
        let { reason: t, children: r } = e;
        if ("undefined" == typeof window) throw new i.BailoutToCSRError(t);
        return r;
      }
    },
    30580: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let i = r(95155),
        n = r(12115),
        s = r(39827),
        a = r(79214);
      function o(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let l = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        u = function (e) {
          let t = { ...l, ...e },
            r = (0, n.lazy)(() => t.loader().then(o)),
            u = t.loading;
          function d(e) {
            let o = u
                ? (0, i.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = !t.ssr || !!t.loading,
              d = l ? n.Suspense : n.Fragment,
              c = t.ssr
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, i.jsx)(a.PreloadChunks, { moduleIds: t.modules })
                        : null,
                      (0, i.jsx)(r, { ...e }),
                    ],
                  })
                : (0, i.jsx)(s.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, i.jsx)(r, { ...e }),
                  });
            return (0, i.jsx)(d, {
              ...(l ? { fallback: o } : {}),
              children: c,
            });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    79214: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let i = r(95155),
        n = r(47650),
        s = r(75861),
        a = r(18284);
      function o(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let r = s.workAsyncStorage.getStore();
        if (void 0 === r) return null;
        let o = [];
        if (r.reactLoadableManifest && t) {
          let e = r.reactLoadableManifest;
          for (let r of t) {
            if (!e[r]) continue;
            let t = e[r].files;
            o.push(...t);
          }
        }
        return 0 === o.length
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: o.map((e) => {
                let t = r.assetPrefix + "/_next/" + (0, a.encodeURIPath)(e);
                return e.endsWith(".css")
                  ? (0, i.jsx)(
                      "link",
                      {
                        precedence: "dynamic",
                        href: t,
                        rel: "stylesheet",
                        as: "style",
                      },
                      e
                    )
                  : ((0, n.preload)(t, { as: "script", fetchPriority: "low" }),
                    null);
              }),
            });
      }
    },
    65192: (e, t, r) => {
      "use strict";
      var i = r(80859);
      function n() {}
      function s() {}
      (s.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, r, n, s, a) {
            if (a !== i) {
              var o = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((o.name = "Invariant Violation"), o);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: s,
            resetWarningCache: n,
          };
          return (r.PropTypes = r), r;
        });
    },
    81996: (e, t, r) => {
      e.exports = r(65192)();
    },
    80859: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    93654: (e) => {
      "use strict";
      function t(e) {
        (this._maxSize = e), this.clear();
      }
      (t.prototype.clear = function () {
        (this._size = 0), (this._values = Object.create(null));
      }),
        (t.prototype.get = function (e) {
          return this._values[e];
        }),
        (t.prototype.set = function (e, t) {
          return (
            this._size >= this._maxSize && this.clear(),
            !(e in this._values) && this._size++,
            (this._values[e] = t)
          );
        });
      var r = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
        i = /^\d+$/,
        n = /^\d/,
        s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
        a = /^\s*(['"]?)(.*?)(\1)\s*$/,
        o = new t(512),
        l = new t(512),
        u = new t(512);
      function d(e) {
        return (
          o.get(e) ||
          o.set(
            e,
            c(e).map(function (e) {
              return e.replace(a, "$2");
            })
          )
        );
      }
      function c(e) {
        return e.match(r) || [""];
      }
      function h(e) {
        return (
          "string" == typeof e && e && -1 !== ["'", '"'].indexOf(e.charAt(0))
        );
      }
      e.exports = {
        Cache: t,
        split: c,
        normalizePath: d,
        setter: function (e) {
          var t = d(e);
          return (
            l.get(e) ||
            l.set(e, function (e, r) {
              for (var i = 0, n = t.length, s = e; i < n - 1; ) {
                var a = t[i];
                if (
                  "__proto__" === a ||
                  "constructor" === a ||
                  "prototype" === a
                )
                  return e;
                s = s[t[i++]];
              }
              s[t[i]] = r;
            })
          );
        },
        getter: function (e, t) {
          var r = d(e);
          return (
            u.get(e) ||
            u.set(e, function (e) {
              for (var i = 0, n = r.length; i < n; ) {
                if (null == e && t) return;
                e = e[r[i++]];
              }
              return e;
            })
          );
        },
        join: function (e) {
          return e.reduce(function (e, t) {
            return e + (h(t) || i.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
          }, "");
        },
        forEach: function (e, t, r) {
          !(function (e, t, r) {
            var a,
              o,
              l,
              u,
              d,
              c = e.length;
            for (l = 0; l < c; l++) {
              (o = e[l]) &&
                (!h((a = o)) &&
                  ((a.match(n) && !a.match(i)) || s.test(a)) &&
                  (o = '"' + o + '"'),
                (u = !(d = h(o)) && /^\d+$/.test(o)),
                t.call(r, o, d, u, l, e));
            }
          })(Array.isArray(e) ? e : c(e), t, r);
        },
      };
    },
    68190: (e, t, r) => {
      "use strict";
      r.d(t, { Ub: () => _ });
      var i = r(12115),
        n = r(38740),
        s = r.n(n),
        a = /[A-Z]/g,
        o = /^ms-/,
        l = {};
      function u(e) {
        return "-" + e.toLowerCase();
      }
      let d = function (e) {
        if (l.hasOwnProperty(e)) return l[e];
        var t = e.replace(a, u);
        return (l[e] = o.test(t) ? "-" + t : t);
      };
      var c = r(81996),
        h = r.n(c);
      let p = h().oneOfType([h().string, h().number]),
        f = {
          all: h().bool,
          grid: h().bool,
          aural: h().bool,
          braille: h().bool,
          handheld: h().bool,
          print: h().bool,
          projection: h().bool,
          screen: h().bool,
          tty: h().bool,
          tv: h().bool,
          embossed: h().bool,
        },
        { type: m, ...v } = {
          orientation: h().oneOf(["portrait", "landscape"]),
          scan: h().oneOf(["progressive", "interlace"]),
          aspectRatio: h().string,
          deviceAspectRatio: h().string,
          height: p,
          deviceHeight: p,
          width: p,
          deviceWidth: p,
          color: h().bool,
          colorIndex: h().bool,
          monochrome: h().bool,
          resolution: p,
          type: Object.keys(f),
        },
        g = {
          minAspectRatio: h().string,
          maxAspectRatio: h().string,
          minDeviceAspectRatio: h().string,
          maxDeviceAspectRatio: h().string,
          minHeight: p,
          maxHeight: p,
          minDeviceHeight: p,
          maxDeviceHeight: p,
          minWidth: p,
          maxWidth: p,
          minDeviceWidth: p,
          maxDeviceWidth: p,
          minColor: h().number,
          maxColor: h().number,
          minColorIndex: h().number,
          maxColorIndex: h().number,
          minMonochrome: h().number,
          maxMonochrome: h().number,
          minResolution: p,
          maxResolution: p,
          ...v,
        };
      var y = { all: { ...f, ...g } };
      let b = (e) => `not ${e}`,
        w = (e, t) => {
          let r = d(e);
          return ("number" == typeof t && (t = `${t}px`), !0 === t)
            ? r
            : !1 === t
            ? b(r)
            : `(${r}: ${t})`;
        },
        x = (e) => e.join(" and "),
        S = (e) => {
          let t = [];
          return (
            Object.keys(y.all).forEach((r) => {
              let i = e[r];
              null != i && t.push(w(r, i));
            }),
            x(t)
          );
        },
        T = (0, i.createContext)(void 0),
        E = (e) => e.query || S(e),
        C = (e) => {
          if (e)
            return Object.keys(e).reduce((t, r) => ((t[d(r)] = e[r]), t), {});
        },
        P = () => {
          let e = (0, i.useRef)(!1);
          return (
            (0, i.useEffect)(() => {
              e.current = !0;
            }, []),
            e.current
          );
        },
        A = (e) => {
          let t = (0, i.useContext)(T),
            r = () => C(e) || C(t),
            [n, s] = (0, i.useState)(r);
          return (
            (0, i.useEffect)(() => {
              let e = r();
              !(function (e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let r = Object.keys(e),
                  i = Object.keys(t),
                  n = r.length;
                if (i.length !== n) return !1;
                for (let i = 0; i < n; i++) {
                  let n = r[i];
                  if (
                    e[n] !== t[n] ||
                    !Object.prototype.hasOwnProperty.call(t, n)
                  )
                    return !1;
                }
                return !0;
              })(n, e) && s(e);
            }, [e, t]),
            n
          );
        },
        k = (e) => {
          let t = () => E(e),
            [r, n] = (0, i.useState)(t);
          return (
            (0, i.useEffect)(() => {
              let e = t();
              r !== e && n(e);
            }, [e]),
            r
          );
        },
        M = (e, t) => {
          let r = () => s()(e, t || {}, !!t),
            [n, a] = (0, i.useState)(r),
            o = P();
          return (
            (0, i.useEffect)(() => {
              if (o) {
                let e = r();
                return (
                  a(e),
                  () => {
                    e && e.dispose();
                  }
                );
              }
            }, [e, t]),
            n
          );
        },
        O = (e) => {
          let [t, r] = (0, i.useState)(e.matches);
          return (
            (0, i.useEffect)(() => {
              let t = (e) => {
                r(e.matches);
              };
              return (
                e.addListener(t),
                r(e.matches),
                () => {
                  e.removeListener(t);
                }
              );
            }, [e]),
            t
          );
        },
        _ = (e, t, r) => {
          let n = A(t),
            s = k(e);
          if (!s) throw Error("Invalid or missing MediaQuery!");
          let a = M(s, n),
            o = O(a),
            l = P();
          return (
            (0, i.useEffect)(() => {
              l && r && r(o);
            }, [o]),
            (0, i.useEffect)(
              () => () => {
                a && a.dispose();
              },
              []
            ),
            o
          );
        };
    },
    6185: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t;
          };
        })(),
        n = a(r(12115)),
        s = a(r(72221));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = (function (e) {
        function t() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, [
            {
              key: "render",
              value: function () {
                return n.default.createElement(
                  "button",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(n.default.Component);
      t.default = (0, s.default)(o);
    },
    5983: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t;
          };
        })(),
        s = l(r(12115)),
        a = l(r(1519)),
        o = l(r(81996));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = (function (e) {
        function t() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          n(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = i({}, this.props);
                return (
                  delete t.name,
                  t.parentBindings && delete t.parentBindings,
                  s.default.createElement(
                    "div",
                    i({}, t, {
                      ref: function (t) {
                        e.props.parentBindings.domNode = t;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          t
        );
      })(s.default.Component);
      (u.propTypes = { name: o.default.string, id: o.default.string }),
        (t.default = (0, a.default)(u));
    },
    92493: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = s(r(12115)),
        n = s(r(72221));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      var o = (function (e) {
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t);
          for (
            var e, r, n, s = arguments.length, o = Array(s), l = 0;
            l < s;
            l++
          )
            o[l] = arguments[l];
          return (
            (r = n =
              a(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(o)
                )
              )),
            (n.render = function () {
              return i.default.createElement("a", n.props, n.props.children);
            }),
            a(n, r)
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          t
        );
      })(i.default.Component);
      t.default = (0, n.default)(o);
    },
    36016: (e, t, r) => {
      "use strict";
      t.XG = void 0;
      var i = p(r(92493)),
        n = p(r(6185)),
        s = p(r(5983)),
        a = p(r(61529)),
        o = p(r(26552)),
        l = p(r(91305)),
        u = p(r(55240)),
        d = p(r(72221)),
        c = p(r(1519)),
        h = p(r(23620));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i.default,
        n.default,
        s.default,
        (t.XG = a.default),
        o.default,
        l.default,
        u.default,
        d.default,
        c.default,
        h.default,
        i.default,
        n.default,
        s.default,
        a.default,
        o.default,
        l.default,
        u.default,
        d.default,
        c.default,
        h.default;
    },
    23620: (e, t, r) => {
      "use strict";
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t;
          };
        })();
      function s(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var l = r(12115);
      r(47650), r(99744);
      var u = r(91305),
        d = r(61529),
        c = r(81996),
        h = r(6321),
        p = {
          to: c.string.isRequired,
          containerId: c.string,
          container: c.object,
          activeClass: c.string,
          spy: c.bool,
          smooth: c.oneOfType([c.bool, c.string]),
          offset: c.number,
          delay: c.number,
          isDynamic: c.bool,
          onClick: c.func,
          duration: c.oneOfType([c.number, c.func]),
          absolute: c.bool,
          onSetActive: c.func,
          onSetInactive: c.func,
          ignoreCancelEvents: c.bool,
          hashSpy: c.bool,
          spyThrottle: c.number,
        };
      e.exports = {
        Scroll: function (e, t) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var r = t || d,
            c = (function (t) {
              function d(e) {
                s(this, d);
                var t = a(
                  this,
                  (d.__proto__ || Object.getPrototypeOf(d)).call(this, e)
                );
                return f.call(t), (t.state = { active: !1 }), t;
              }
              return (
                o(d, t),
                n(d, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var e = this.props.containerId,
                        t = this.props.container;
                      return e
                        ? document.getElementById(e)
                        : t && t.nodeType
                        ? t
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var e = this.getScrollSpyContainer();
                        u.isMounted(e) || u.mount(e, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (h.isMounted() || h.mount(r),
                            h.mapContainer(this.props.to, e)),
                          this.props.spy &&
                            u.addStateHandler(this.stateHandler),
                          u.addSpyHandler(this.spyHandler, e),
                          this.setState({ container: e });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      u.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = "";
                      t =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var r = i({}, this.props);
                      for (var n in p) r.hasOwnProperty(n) && delete r[n];
                      return (
                        (r.className = t),
                        (r.onClick = this.handleClick),
                        l.createElement(e, r)
                      );
                    },
                  },
                ]),
                d
              );
            })(l.Component),
            f = function () {
              var e = this;
              (this.scrollTo = function (t, n) {
                r.scrollTo(t, i({}, e.state, n));
              }),
                (this.handleClick = function (t) {
                  e.props.onClick && e.props.onClick(t),
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    e.scrollTo(e.props.to, e.props);
                }),
                (this.stateHandler = function () {
                  r.getActiveLink() !== e.props.to &&
                    (null !== e.state &&
                      e.state.active &&
                      e.props.onSetInactive &&
                      e.props.onSetInactive(),
                    e.setState({ active: !1 }));
                }),
                (this.spyHandler = function (t) {
                  var i = e.getScrollSpyContainer();
                  if (!h.isMounted() || h.isInitialized()) {
                    var n = e.props.to,
                      s = null,
                      a = 0,
                      o = 0,
                      l = 0;
                    if (
                      (i.getBoundingClientRect &&
                        (l = i.getBoundingClientRect().top),
                      !s || e.props.isDynamic)
                    ) {
                      if (!(s = r.get(n))) return;
                      var d = s.getBoundingClientRect();
                      o = (a = d.top - l + t) + d.height;
                    }
                    var c = t - e.props.offset,
                      p = c >= Math.floor(a) && c < Math.floor(o),
                      f = c < Math.floor(a) || c >= Math.floor(o),
                      m = r.getActiveLink();
                    return f
                      ? (n === m && r.setActiveLink(void 0),
                        e.props.hashSpy && h.getHash() === n && h.changeHash(),
                        e.props.spy &&
                          e.state.active &&
                          (e.setState({ active: !1 }),
                          e.props.onSetInactive && e.props.onSetInactive()),
                        u.updateStates())
                      : p && m !== n
                      ? (r.setActiveLink(n),
                        e.props.hashSpy && h.changeHash(n),
                        e.props.spy &&
                          (e.setState({ active: !0 }),
                          e.props.onSetActive && e.props.onSetActive(n)),
                        u.updateStates())
                      : void 0;
                  }
                });
            };
          return (c.propTypes = p), (c.defaultProps = { offset: 0 }), c;
        },
        Element: function (e) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var t = (function (t) {
            function r(e) {
              s(this, r);
              var t = a(
                this,
                (r.__proto__ || Object.getPrototypeOf(r)).call(this, e)
              );
              return (t.childBindings = { domNode: null }), t;
            }
            return (
              o(r, t),
              n(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.name !== e.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    d.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (e) {
                    d.register(e, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return l.createElement(
                      e,
                      i({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              r
            );
          })(l.Component);
          return (t.propTypes = { name: c.string, id: c.string }), t;
        },
      };
    },
    55240: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        };
      o(r(99744));
      var n = o(r(75333)),
        s = o(r(48733)),
        a = o(r(26552));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = function (e) {
          return n.default[e.smooth] || n.default.defaultEasing;
        },
        u =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (e, t, r) {
            window.setTimeout(e, r || 1e3 / 60, new Date().getTime());
          },
        d = function () {
          return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null,
          };
        },
        c = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollLeft;
          var r = void 0 !== window.pageXOffset,
            i = "CSS1Compat" === (document.compatMode || "");
          return r
            ? window.pageXOffset
            : i
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        h = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var r = void 0 !== window.pageXOffset,
            i = "CSS1Compat" === (document.compatMode || "");
          return r
            ? window.pageYOffset
            : i
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        p = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollWidth - t.offsetWidth;
          var r = document.body,
            i = document.documentElement;
          return Math.max(
            r.scrollWidth,
            r.offsetWidth,
            i.clientWidth,
            i.scrollWidth,
            i.offsetWidth
          );
        },
        f = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollHeight - t.offsetHeight;
          var r = document.body,
            i = document.documentElement;
          return Math.max(
            r.scrollHeight,
            r.offsetHeight,
            i.clientHeight,
            i.scrollHeight,
            i.offsetHeight
          );
        },
        m = function e(t, r, i) {
          var n = r.data;
          if (!r.ignoreCancelEvents && n.cancel) {
            a.default.registered.end &&
              a.default.registered.end(n.to, n.target, n.currentPositionY);
            return;
          }
          if (
            ((n.delta = Math.round(n.targetPosition - n.startPosition)),
            null === n.start && (n.start = i),
            (n.progress = i - n.start),
            (n.percent =
              n.progress >= n.duration ? 1 : t(n.progress / n.duration)),
            (n.currentPosition =
              n.startPosition + Math.ceil(n.delta * n.percent)),
            n.containerElement &&
            n.containerElement !== document &&
            n.containerElement !== document.body
              ? r.horizontal
                ? (n.containerElement.scrollLeft = n.currentPosition)
                : (n.containerElement.scrollTop = n.currentPosition)
              : r.horizontal
              ? window.scrollTo(n.currentPosition, 0)
              : window.scrollTo(0, n.currentPosition),
            n.percent < 1)
          ) {
            var s = e.bind(null, t, r);
            u.call(window, s);
            return;
          }
          a.default.registered.end &&
            a.default.registered.end(n.to, n.target, n.currentPosition);
        },
        v = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        g = function (e, t, r, i) {
          if (
            ((t.data = t.data || d()),
            window.clearTimeout(t.data.delayTimeout),
            s.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            v(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPosition = t.horizontal ? c(t) : h(t)),
            (t.data.targetPosition = t.absolute ? e : e + t.data.startPosition),
            t.data.startPosition === t.data.targetPosition)
          ) {
            a.default.registered.end &&
              a.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPosition
              );
            return;
          }
          (t.data.delta = Math.round(
            t.data.targetPosition - t.data.startPosition
          )),
            (t.data.duration = (
              "function" == typeof (n = t.duration)
                ? n
                : function () {
                    return n;
                  }
            )(t.data.delta)),
            (t.data.duration = isNaN(parseFloat(t.data.duration))
              ? 1e3
              : parseFloat(t.data.duration)),
            (t.data.to = r),
            (t.data.target = i);
          var n,
            o = l(t),
            p = m.bind(null, o, t);
          if (t && t.delay > 0) {
            t.data.delayTimeout = window.setTimeout(function () {
              a.default.registered.begin &&
                a.default.registered.begin(t.data.to, t.data.target),
                u.call(window, p);
            }, t.delay);
            return;
          }
          a.default.registered.begin &&
            a.default.registered.begin(t.data.to, t.data.target),
            u.call(window, p);
        },
        y = function (e) {
          return ((e = i({}, e)).data = e.data || d()), (e.absolute = !0), e;
        };
      t.default = {
        animateTopScroll: g,
        getAnimationType: l,
        scrollToTop: function (e) {
          g(0, y(e));
        },
        scrollToBottom: function (e) {
          v((e = y(e))), g(e.horizontal ? p(e) : f(e), e);
        },
        scrollTo: function (e, t) {
          g(e, y(t));
        },
        scrollMore: function (e, t) {
          v((t = y(t))), g(e + (t.horizontal ? c(t) : h(t)), t);
        },
      };
    },
    48733: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(85125),
        n = ["mousedown", "mousewheel", "touchmove", "keydown"];
      t.default = {
        subscribe: function (e) {
          return (
            "undefined" != typeof document &&
            n.forEach(function (t) {
              return (0, i.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    85125: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addPassiveEventListener = function (e, t, i) {
          var n = i.name;
          n || ((n = t), console.warn("Listener must be a named function.")),
            r.has(t) || r.set(t, new Set());
          var s = r.get(t);
          if (!s.has(n)) {
            var a = (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                window.addEventListener("test", null, t);
              } catch (e) {}
              return e;
            })();
            e.addEventListener(t, i, !!a && { passive: !0 }), s.add(n);
          }
        }),
        (t.removePassiveEventListener = function (e, t, i) {
          e.removeEventListener(t, i), r.get(t).delete(i.name || t);
        });
      var r = new Map();
    },
    1519: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t;
          };
        })(),
        s = l(r(12115));
      l(r(47650));
      var a = l(r(61529)),
        o = l(r(81996));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = (function (t) {
          function r(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, r);
            var t = (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
            return (t.childBindings = { domNode: null }), t;
          }
          return (
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(r, t),
            n(r, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.name !== e.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  a.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (e) {
                  a.default.register(e, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return s.default.createElement(
                    e,
                    i({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            r
          );
        })(s.default.Component);
        return (
          (t.propTypes = { name: o.default.string, id: o.default.string }), t
        );
      };
    },
    26552: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            r.registered[e] = t;
          },
          remove: function (e) {
            r.registered[e] = null;
          },
        },
      };
      t.default = r;
    },
    6321: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(85125);
      var i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(r(99744));
      t.default = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (e, t) {
          this.containers[e] = t;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function () {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (e, t) {
          var r = this.scroller;
          if (r.get(e) && (t || e !== r.getActiveLink())) {
            var i = this.containers[e] || document;
            r.scrollTo(e, { container: i });
          }
        },
        getHash: function () {
          return i.default.getHash();
        },
        changeHash: function (e, t) {
          this.isInitialized() &&
            i.default.getHash() !== e &&
            i.default.updateHash(e, t);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
    },
    72221: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t;
          };
        })(),
        s = d(r(12115)),
        a = d(r(91305)),
        o = d(r(61529)),
        l = d(r(81996)),
        u = d(r(6321));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = {
        to: l.default.string.isRequired,
        containerId: l.default.string,
        container: l.default.object,
        activeClass: l.default.string,
        activeStyle: l.default.object,
        spy: l.default.bool,
        horizontal: l.default.bool,
        smooth: l.default.oneOfType([l.default.bool, l.default.string]),
        offset: l.default.number,
        delay: l.default.number,
        isDynamic: l.default.bool,
        onClick: l.default.func,
        duration: l.default.oneOfType([l.default.number, l.default.func]),
        absolute: l.default.bool,
        onSetActive: l.default.func,
        onSetInactive: l.default.func,
        ignoreCancelEvents: l.default.bool,
        hashSpy: l.default.bool,
        saveHashHistory: l.default.bool,
        spyThrottle: l.default.number,
      };
      t.default = function (e, t) {
        var r = t || o.default,
          l = (function (t) {
            function o(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, o);
              var t = (function (e, t) {
                if (!e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t && ("object" == typeof t || "function" == typeof t)
                  ? t
                  : e;
              })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
              return d.call(t), (t.state = { active: !1 }), t;
            }
            return (
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(o, t),
              n(o, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var e = this.props.containerId,
                      t = this.props.container;
                    return e && !t
                      ? document.getElementById(e)
                      : t && t.nodeType
                      ? t
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var e = this.getScrollSpyContainer();
                      a.default.isMounted(e) ||
                        a.default.mount(e, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (u.default.isMounted() || u.default.mount(r),
                          u.default.mapContainer(this.props.to, e)),
                        a.default.addSpyHandler(this.spyHandler, e),
                        this.setState({ container: e });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    a.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = "";
                    t =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var r = {};
                    r =
                      this.state && this.state.active
                        ? i({}, this.props.style, this.props.activeStyle)
                        : i({}, this.props.style);
                    var n = i({}, this.props);
                    for (var a in c) n.hasOwnProperty(a) && delete n[a];
                    return (
                      (n.className = t),
                      (n.style = r),
                      (n.onClick = this.handleClick),
                      s.default.createElement(e, n)
                    );
                  },
                },
              ]),
              o
            );
          })(s.default.PureComponent),
          d = function () {
            var e = this;
            (this.scrollTo = function (t, n) {
              r.scrollTo(t, i({}, e.state, n));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t, i) {
                var n = e.getScrollSpyContainer();
                if (!u.default.isMounted() || u.default.isInitialized()) {
                  var s = e.props.horizontal,
                    a = e.props.to,
                    o = null,
                    l = void 0,
                    d = void 0;
                  if (s) {
                    var c = 0,
                      h = 0,
                      p = 0;
                    if (
                      (n.getBoundingClientRect &&
                        (p = n.getBoundingClientRect().left),
                      !o || e.props.isDynamic)
                    ) {
                      if (!(o = r.get(a))) return;
                      var f = o.getBoundingClientRect();
                      h = (c = f.left - p + t) + f.width;
                    }
                    var m = t - e.props.offset;
                    (l = m >= Math.floor(c) && m < Math.floor(h)),
                      (d = m < Math.floor(c) || m >= Math.floor(h));
                  } else {
                    var v = 0,
                      g = 0,
                      y = 0;
                    if (
                      (n.getBoundingClientRect &&
                        (y = n.getBoundingClientRect().top),
                      !o || e.props.isDynamic)
                    ) {
                      if (!(o = r.get(a))) return;
                      var b = o.getBoundingClientRect();
                      g = (v = b.top - y + i) + b.height;
                    }
                    var w = i - e.props.offset;
                    (l = w >= Math.floor(v) && w < Math.floor(g)),
                      (d = w < Math.floor(v) || w >= Math.floor(g));
                  }
                  var x = r.getActiveLink();
                  if (d) {
                    if (
                      (a === x && r.setActiveLink(void 0),
                      e.props.hashSpy && u.default.getHash() === a)
                    ) {
                      var S = e.props.saveHashHistory;
                      u.default.changeHash("", void 0 !== S && S);
                    }
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(a, o));
                  }
                  if (l && (x !== a || !1 === e.state.active)) {
                    r.setActiveLink(a);
                    var T = e.props.saveHashHistory;
                    e.props.hashSpy &&
                      u.default.changeHash(a, void 0 !== T && T),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(a, o));
                  }
                }
              });
          };
        return (l.propTypes = c), (l.defaultProps = { offset: 0 }), l;
      };
    },
    91305: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r(80316)),
        n = r(85125),
        s = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
          return (0, i.default)(e, t);
        },
        a = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (e, t) {
            if (e) {
              var r = s(function (t) {
                a.scrollHandler(e);
              }, t);
              a.scrollSpyContainers.push(e),
                (0, n.addPassiveEventListener)(e, "scroll", r);
            }
          },
          isMounted: function (e) {
            return -1 !== a.scrollSpyContainers.indexOf(e);
          },
          currentPositionX: function (e) {
            if (e !== document) return e.scrollLeft;
            var t = void 0 !== window.pageYOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageXOffset
              : r
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          currentPositionY: function (e) {
            if (e !== document) return e.scrollTop;
            var t = void 0 !== window.pageXOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageYOffset
              : r
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          scrollHandler: function (e) {
            (
              a.scrollSpyContainers[a.scrollSpyContainers.indexOf(e)]
                .spyCallbacks || []
            ).forEach(function (t) {
              return t(a.currentPositionX(e), a.currentPositionY(e));
            });
          },
          addStateHandler: function (e) {
            a.spySetState.push(e);
          },
          addSpyHandler: function (e, t) {
            var r = a.scrollSpyContainers[a.scrollSpyContainers.indexOf(t)];
            r.spyCallbacks || (r.spyCallbacks = []),
              r.spyCallbacks.push(e),
              e(a.currentPositionX(t), a.currentPositionY(t));
          },
          updateStates: function () {
            a.spySetState.forEach(function (e) {
              return e();
            });
          },
          unmount: function (e, t) {
            a.scrollSpyContainers.forEach(function (e) {
              return (
                e.spyCallbacks &&
                e.spyCallbacks.length &&
                e.spyCallbacks.indexOf(t) > -1 &&
                e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
              );
            }),
              a.spySetState &&
                a.spySetState.length &&
                a.spySetState.indexOf(e) > -1 &&
                a.spySetState.splice(a.spySetState.indexOf(e), 1),
              document.removeEventListener("scroll", a.scrollHandler);
          },
          update: function () {
            return a.scrollSpyContainers.forEach(function (e) {
              return a.scrollHandler(e);
            });
          },
        };
      t.default = a;
    },
    61529: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
          },
        n = o(r(99744)),
        s = o(r(55240)),
        a = o(r(26552));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = {},
        u = void 0;
      t.default = {
        unmount: function () {
          l = {};
        },
        register: function (e, t) {
          l[e] = t;
        },
        unregister: function (e) {
          delete l[e];
        },
        get: function (e) {
          return (
            l[e] ||
            document.getElementById(e) ||
            document.getElementsByName(e)[0] ||
            document.getElementsByClassName(e)[0]
          );
        },
        setActiveLink: function (e) {
          return (u = e);
        },
        getActiveLink: function () {
          return u;
        },
        scrollTo: function (e, t) {
          var r = this.get(e);
          if (!r) {
            console.warn("target Element not found");
            return;
          }
          var o = (t = i({}, t, { absolute: !1 })).containerId,
            l = t.container,
            u = void 0;
          (u = o ? document.getElementById(o) : l && l.nodeType ? l : document),
            (t.absolute = !0);
          var d = t.horizontal,
            c = n.default.scrollOffset(u, r, d) + (t.offset || 0);
          if (!t.smooth) {
            a.default.registered.begin && a.default.registered.begin(e, r),
              u === document
                ? t.horizontal
                  ? window.scrollTo(c, 0)
                  : window.scrollTo(0, c)
                : (u.scrollTop = c),
              a.default.registered.end && a.default.registered.end(e, r);
            return;
          }
          s.default.animateTopScroll(c, t, e, r);
        },
      };
    },
    75333: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          defaultEasing: function (e) {
            return e < 0.5
              ? Math.pow(2 * e, 2) / 2
              : 1 - Math.pow((1 - e) * 2, 2) / 2;
          },
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        });
    },
    99744: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t) {
        for (var r = e.offsetTop, i = e.offsetParent; i && !t(i); )
          (r += i.offsetTop), (i = i.offsetParent);
        return { offsetTop: r, offsetParent: i };
      };
      t.default = {
        updateHash: function (e, t) {
          var r = 0 === e.indexOf("#") ? e.substring(1) : e,
            i = r ? "#" + r : "",
            n = window && window.location,
            s = i ? n.pathname + n.search + i : n.pathname + n.search;
          t
            ? history.pushState(history.state, "", s)
            : history.replaceState(history.state, "", s);
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (e) {
          return function (t) {
            return e.contains
              ? e != t && e.contains(t)
              : !!(16 & e.compareDocumentPosition(t));
          };
        },
        scrollOffset: function (e, t, i) {
          if (i)
            return e === document
              ? t.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(e).position
              ? t.offsetLeft
              : t.offsetLeft - e.offsetLeft;
          if (e === document)
            return (
              t.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle(e).position) {
            if (t.offsetParent !== e) {
              var n = r(t, function (t) {
                  return t === e || t === document;
                }),
                s = n.offsetTop;
              if (n.offsetParent !== e)
                throw Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return s;
            }
            return t.offsetTop;
          }
          if (t.offsetParent === e.offsetParent)
            return t.offsetTop - e.offsetTop;
          var a = function (e) {
            return e === document;
          };
          return r(t, a).offsetTop - r(e, a).offsetTop;
        },
      };
    },
    99980: (e) => {
      let t =
          /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
        r = (e) => e.match(t) || [],
        i = (e) => e[0].toUpperCase() + e.slice(1),
        n = (e, t) => r(e).join(t).toLowerCase(),
        s = (e) =>
          r(e).reduce(
            (e, t) =>
              `${e}${
                e
                  ? t[0].toUpperCase() + t.slice(1).toLowerCase()
                  : t.toLowerCase()
              }`,
            ""
          );
      e.exports = {
        words: r,
        upperFirst: i,
        camelCase: s,
        pascalCase: (e) => i(s(e)),
        snakeCase: (e) => n(e, "_"),
        kebabCase: (e) => n(e, "-"),
        sentenceCase: (e) => i(n(e, " ")),
        titleCase: (e) => r(e).map(i).join(" "),
      };
    },
    41249: (e) => {
      function t(e, t) {
        var r = e.length,
          i = Array(r),
          n = {},
          s = r,
          a = (function (e) {
            for (var t = new Map(), r = 0, i = e.length; r < i; r++) {
              var n = e[r];
              t.has(n[0]) || t.set(n[0], new Set()),
                t.has(n[1]) || t.set(n[1], new Set()),
                t.get(n[0]).add(n[1]);
            }
            return t;
          })(t),
          o = (function (e) {
            for (var t = new Map(), r = 0, i = e.length; r < i; r++)
              t.set(e[r], r);
            return t;
          })(e);
        for (
          t.forEach(function (e) {
            if (!o.has(e[0]) || !o.has(e[1]))
              throw Error(
                "Unknown node. There is an unknown node in the supplied edges."
              );
          });
          s--;

        )
          n[s] ||
            (function e(t, s, l) {
              if (l.has(t)) {
                var u;
                try {
                  u = ", node was:" + JSON.stringify(t);
                } catch (e) {
                  u = "";
                }
                throw Error("Cyclic dependency" + u);
              }
              if (!o.has(t))
                throw Error(
                  "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
                    JSON.stringify(t)
                );
              if (!n[s]) {
                n[s] = !0;
                var d = a.get(t) || new Set();
                if ((s = (d = Array.from(d)).length)) {
                  l.add(t);
                  do {
                    var c = d[--s];
                    e(c, o.get(c), l);
                  } while (s);
                  l.delete(t);
                }
                i[--r] = t;
              }
            })(e[s], s, new Set());
        return i;
      }
      (e.exports = function (e) {
        return t(
          (function (e) {
            for (var t = new Set(), r = 0, i = e.length; r < i; r++) {
              var n = e[r];
              t.add(n[0]), t.add(n[1]);
            }
            return Array.from(t);
          })(e),
          e
        );
      }),
        (e.exports.array = t);
    },
    19938: (e, t, r) => {
      "use strict";
      let i, n, s;
      r.d(t, { Ik: () => ec, Yj: () => Z });
      var a = r(93654),
        o = r(99980),
        l = r(41249),
        u = r.n(l);
      let d = Object.prototype.toString,
        c = Error.prototype.toString,
        h = RegExp.prototype.toString,
        p = "undefined" != typeof Symbol ? Symbol.prototype.toString : () => "",
        f = /^Symbol\((.*)\)(.*)$/;
      function m(e, t = !1) {
        if (null == e || !0 === e || !1 === e) return "" + e;
        let r = typeof e;
        if ("number" === r)
          return e != +e ? "NaN" : 0 === e && 1 / e < 0 ? "-0" : "" + e;
        if ("string" === r) return t ? `"${e}"` : e;
        if ("function" === r)
          return "[Function " + (e.name || "anonymous") + "]";
        if ("symbol" === r) return p.call(e).replace(f, "Symbol($1)");
        let i = d.call(e).slice(8, -1);
        return "Date" === i
          ? isNaN(e.getTime())
            ? "" + e
            : e.toISOString(e)
          : "Error" === i || e instanceof Error
          ? "[" + c.call(e) + "]"
          : "RegExp" === i
          ? h.call(e)
          : null;
      }
      function v(e, t) {
        let r = m(e, t);
        return null !== r
          ? r
          : JSON.stringify(
              e,
              function (e, r) {
                let i = m(this[e], t);
                return null !== i ? i : r;
              },
              2
            );
      }
      function g(e) {
        return null == e ? [] : [].concat(e);
      }
      let y = /\$\{\s*(\w+)\s*\}/g;
      i = Symbol.toStringTag;
      class b {
        constructor(e, t, r, n) {
          (this.name = void 0),
            (this.message = void 0),
            (this.value = void 0),
            (this.path = void 0),
            (this.type = void 0),
            (this.params = void 0),
            (this.errors = void 0),
            (this.inner = void 0),
            (this[i] = "Error"),
            (this.name = "ValidationError"),
            (this.value = t),
            (this.path = r),
            (this.type = n),
            (this.errors = []),
            (this.inner = []),
            g(e).forEach((e) => {
              if (w.isError(e)) {
                this.errors.push(...e.errors);
                let t = e.inner.length ? e.inner : [e];
                this.inner.push(...t);
              } else this.errors.push(e);
            }),
            (this.message =
              this.errors.length > 1
                ? `${this.errors.length} errors occurred`
                : this.errors[0]);
        }
      }
      (n = Symbol.hasInstance), (s = Symbol.toStringTag);
      class w extends Error {
        static formatError(e, t) {
          let r = t.label || t.path || "this";
          return ((t = Object.assign({}, t, { path: r, originalPath: t.path })),
          "string" == typeof e)
            ? e.replace(y, (e, r) => v(t[r]))
            : "function" == typeof e
            ? e(t)
            : e;
        }
        static isError(e) {
          return e && "ValidationError" === e.name;
        }
        constructor(e, t, r, i, n) {
          let a = new b(e, t, r, i);
          if (n) return a;
          super(),
            (this.value = void 0),
            (this.path = void 0),
            (this.type = void 0),
            (this.params = void 0),
            (this.errors = []),
            (this.inner = []),
            (this[s] = "Error"),
            (this.name = a.name),
            (this.message = a.message),
            (this.type = a.type),
            (this.value = a.value),
            (this.path = a.path),
            (this.errors = a.errors),
            (this.inner = a.inner),
            Error.captureStackTrace && Error.captureStackTrace(this, w);
        }
        static [n](e) {
          return b[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
        }
      }
      let x = {
          default: "${path} is invalid",
          required: "${path} is a required field",
          defined: "${path} must be defined",
          notNull: "${path} cannot be null",
          oneOf: "${path} must be one of the following values: ${values}",
          notOneOf:
            "${path} must not be one of the following values: ${values}",
          notType: ({ path: e, type: t, value: r, originalValue: i }) => {
            let n =
              null != i && i !== r
                ? ` (cast from the value \`${v(i, !0)}\`).`
                : ".";
            return "mixed" !== t
              ? `${e} must be a \`${t}\` type, but the final value was: \`${v(
                  r,
                  !0
                )}\`` + n
              : `${e} must match the configured type. The validated value was: \`${v(
                  r,
                  !0
                )}\`` + n;
          },
        },
        S = {
          length: "${path} must be exactly ${length} characters",
          min: "${path} must be at least ${min} characters",
          max: "${path} must be at most ${max} characters",
          matches: '${path} must match the following: "${regex}"',
          email: "${path} must be a valid email",
          url: "${path} must be a valid URL",
          uuid: "${path} must be a valid UUID",
          datetime: "${path} must be a valid ISO date-time",
          datetime_precision:
            "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
          datetime_offset:
            '${path} must be a valid ISO date-time with UTC "Z" timezone',
          trim: "${path} must be a trimmed string",
          lowercase: "${path} must be a lowercase string",
          uppercase: "${path} must be a upper case string",
        },
        T = {
          min: "${path} must be greater than or equal to ${min}",
          max: "${path} must be less than or equal to ${max}",
          lessThan: "${path} must be less than ${less}",
          moreThan: "${path} must be greater than ${more}",
          positive: "${path} must be a positive number",
          negative: "${path} must be a negative number",
          integer: "${path} must be an integer",
        },
        E = {
          min: "${path} field must be later than ${min}",
          max: "${path} field must be at earlier than ${max}",
        },
        C = { isValue: "${path} field must be ${value}" },
        P = {
          noUnknown: "${path} field has unspecified keys: ${unknown}",
          exact: "${path} object contains unknown properties: ${properties}",
        },
        A = {
          min: "${path} field must have at least ${min} items",
          max: "${path} field must have less than or equal to ${max} items",
          length: "${path} must have ${length} items",
        },
        k = {
          notType: (e) => {
            let { path: t, value: r, spec: i } = e,
              n = i.types.length;
            if (Array.isArray(r)) {
              if (r.length < n)
                return `${t} tuple value has too few items, expected a length of ${n} but got ${
                  r.length
                } for value: \`${v(r, !0)}\``;
              if (r.length > n)
                return `${t} tuple value has too many items, expected a length of ${n} but got ${
                  r.length
                } for value: \`${v(r, !0)}\``;
            }
            return w.formatError(x.notType, e);
          },
        };
      Object.assign(Object.create(null), {
        mixed: x,
        string: S,
        number: T,
        date: E,
        object: P,
        array: A,
        boolean: C,
        tuple: k,
      });
      let M = (e) => e && e.__isYupSchema__;
      class O {
        static fromOptions(e, t) {
          if (!t.then && !t.otherwise)
            throw TypeError(
              "either `then:` or `otherwise:` is required for `when()` conditions"
            );
          let { is: r, then: i, otherwise: n } = t,
            s = "function" == typeof r ? r : (...e) => e.every((e) => e === r);
          return new O(e, (e, t) => {
            var r;
            let a = s(...e) ? i : n;
            return null != (r = null == a ? void 0 : a(t)) ? r : t;
          });
        }
        constructor(e, t) {
          (this.fn = void 0), (this.refs = e), (this.refs = e), (this.fn = t);
        }
        resolve(e, t) {
          let r = this.refs.map((e) =>
              e.getValue(
                null == t ? void 0 : t.value,
                null == t ? void 0 : t.parent,
                null == t ? void 0 : t.context
              )
            ),
            i = this.fn(r, e, t);
          if (void 0 === i || i === e) return e;
          if (!M(i)) throw TypeError("conditions must return a schema object");
          return i.resolve(t);
        }
      }
      let _ = { context: "$", value: "." };
      class D {
        constructor(e, t = {}) {
          if (
            ((this.key = void 0),
            (this.isContext = void 0),
            (this.isValue = void 0),
            (this.isSibling = void 0),
            (this.path = void 0),
            (this.getter = void 0),
            (this.map = void 0),
            "string" != typeof e)
          )
            throw TypeError("ref must be a string, got: " + e);
          if (((this.key = e.trim()), "" === e))
            throw TypeError("ref must be a non-empty string");
          (this.isContext = this.key[0] === _.context),
            (this.isValue = this.key[0] === _.value),
            (this.isSibling = !this.isContext && !this.isValue);
          let r = this.isContext ? _.context : this.isValue ? _.value : "";
          (this.path = this.key.slice(r.length)),
            (this.getter = this.path && (0, a.getter)(this.path, !0)),
            (this.map = t.map);
        }
        getValue(e, t, r) {
          let i = this.isContext ? r : this.isValue ? e : t;
          return (
            this.getter && (i = this.getter(i || {})),
            this.map && (i = this.map(i)),
            i
          );
        }
        cast(e, t) {
          return this.getValue(
            e,
            null == t ? void 0 : t.parent,
            null == t ? void 0 : t.context
          );
        }
        resolve() {
          return this;
        }
        describe() {
          return { type: "ref", key: this.key };
        }
        toString() {
          return `Ref(${this.key})`;
        }
        static isRef(e) {
          return e && e.__isYupRef;
        }
      }
      D.prototype.__isYupRef = !0;
      let j = (e) => null == e;
      function L(e) {
        function t(
          { value: t, path: r = "", options: i, originalValue: n, schema: s },
          a,
          o
        ) {
          let l;
          let { name: u, test: d, params: c, message: h, skipAbsent: p } = e,
            {
              parent: f,
              context: m,
              abortEarly: v = s.spec.abortEarly,
              disableStackTrace: g = s.spec.disableStackTrace,
            } = i;
          function y(e) {
            return D.isRef(e) ? e.getValue(t, f, m) : e;
          }
          function b(e = {}) {
            let i = Object.assign(
              {
                value: t,
                originalValue: n,
                label: s.spec.label,
                path: e.path || r,
                spec: s.spec,
                disableStackTrace: e.disableStackTrace || g,
              },
              c,
              e.params
            );
            for (let e of Object.keys(i)) i[e] = y(i[e]);
            let a = new w(
              w.formatError(e.message || h, i),
              t,
              i.path,
              e.type || u,
              i.disableStackTrace
            );
            return (a.params = i), a;
          }
          let x = v ? a : o,
            S = {
              path: r,
              parent: f,
              type: u,
              from: i.from,
              createError: b,
              resolve: y,
              options: i,
              originalValue: n,
              schema: s,
            },
            T = (e) => {
              w.isError(e) ? x(e) : e ? o(null) : x(b());
            },
            E = (e) => {
              w.isError(e) ? x(e) : a(e);
            };
          if (p && j(t)) return T(!0);
          try {
            var C;
            if (
              ((l = d.call(S, t, S)),
              "function" == typeof (null == (C = l) ? void 0 : C.then))
            ) {
              if (i.sync)
                throw Error(
                  `Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
                );
              return Promise.resolve(l).then(T, E);
            }
          } catch (e) {
            E(e);
            return;
          }
          T(l);
        }
        return (t.OPTIONS = e), t;
      }
      class F extends Set {
        describe() {
          let e = [];
          for (let t of this.values()) e.push(D.isRef(t) ? t.describe() : t);
          return e;
        }
        resolveAll(e) {
          let t = [];
          for (let r of this.values()) t.push(e(r));
          return t;
        }
        clone() {
          return new F(this.values());
        }
        merge(e, t) {
          let r = this.clone();
          return e.forEach((e) => r.add(e)), t.forEach((e) => r.delete(e)), r;
        }
      }
      function V(e, t = new Map()) {
        let r;
        if (M(e) || !e || "object" != typeof e) return e;
        if (t.has(e)) return t.get(e);
        if (e instanceof Date) (r = new Date(e.getTime())), t.set(e, r);
        else if (e instanceof RegExp) (r = new RegExp(e)), t.set(e, r);
        else if (Array.isArray(e)) {
          (r = Array(e.length)), t.set(e, r);
          for (let i = 0; i < e.length; i++) r[i] = V(e[i], t);
        } else if (e instanceof Map)
          for (let [i, n] of ((r = new Map()), t.set(e, r), e.entries()))
            r.set(i, V(n, t));
        else if (e instanceof Set)
          for (let i of ((r = new Set()), t.set(e, r), e)) r.add(V(i, t));
        else if (e instanceof Object)
          for (let [i, n] of ((r = {}), t.set(e, r), Object.entries(e)))
            r[i] = V(n, t);
        else throw Error(`Unable to clone ${e}`);
        return r;
      }
      class R {
        constructor(e) {
          (this.type = void 0),
            (this.deps = []),
            (this.tests = void 0),
            (this.transforms = void 0),
            (this.conditions = []),
            (this._mutate = void 0),
            (this.internalTests = {}),
            (this._whitelist = new F()),
            (this._blacklist = new F()),
            (this.exclusiveTests = Object.create(null)),
            (this._typeCheck = void 0),
            (this.spec = void 0),
            (this.tests = []),
            (this.transforms = []),
            this.withMutation(() => {
              this.typeError(x.notType);
            }),
            (this.type = e.type),
            (this._typeCheck = e.check),
            (this.spec = Object.assign(
              {
                strip: !1,
                strict: !1,
                abortEarly: !0,
                recursive: !0,
                disableStackTrace: !1,
                nullable: !1,
                optional: !0,
                coerce: !0,
              },
              null == e ? void 0 : e.spec
            )),
            this.withMutation((e) => {
              e.nonNullable();
            });
        }
        get _type() {
          return this.type;
        }
        clone(e) {
          if (this._mutate) return e && Object.assign(this.spec, e), this;
          let t = Object.create(Object.getPrototypeOf(this));
          return (
            (t.type = this.type),
            (t._typeCheck = this._typeCheck),
            (t._whitelist = this._whitelist.clone()),
            (t._blacklist = this._blacklist.clone()),
            (t.internalTests = Object.assign({}, this.internalTests)),
            (t.exclusiveTests = Object.assign({}, this.exclusiveTests)),
            (t.deps = [...this.deps]),
            (t.conditions = [...this.conditions]),
            (t.tests = [...this.tests]),
            (t.transforms = [...this.transforms]),
            (t.spec = V(Object.assign({}, this.spec, e))),
            t
          );
        }
        label(e) {
          let t = this.clone();
          return (t.spec.label = e), t;
        }
        meta(...e) {
          if (0 === e.length) return this.spec.meta;
          let t = this.clone();
          return (t.spec.meta = Object.assign(t.spec.meta || {}, e[0])), t;
        }
        withMutation(e) {
          let t = this._mutate;
          this._mutate = !0;
          let r = e(this);
          return (this._mutate = t), r;
        }
        concat(e) {
          if (!e || e === this) return this;
          if (e.type !== this.type && "mixed" !== this.type)
            throw TypeError(
              `You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`
            );
          let t = e.clone(),
            r = Object.assign({}, this.spec, t.spec);
          return (
            (t.spec = r),
            (t.internalTests = Object.assign(
              {},
              this.internalTests,
              t.internalTests
            )),
            (t._whitelist = this._whitelist.merge(e._whitelist, e._blacklist)),
            (t._blacklist = this._blacklist.merge(e._blacklist, e._whitelist)),
            (t.tests = this.tests),
            (t.exclusiveTests = this.exclusiveTests),
            t.withMutation((t) => {
              e.tests.forEach((e) => {
                t.test(e.OPTIONS);
              });
            }),
            (t.transforms = [...this.transforms, ...t.transforms]),
            t
          );
        }
        isType(e) {
          return null == e
            ? (!!this.spec.nullable && null === e) ||
                (!!this.spec.optional && void 0 === e)
            : this._typeCheck(e);
        }
        resolve(e) {
          let t = this;
          if (t.conditions.length) {
            let r = t.conditions;
            ((t = t.clone()).conditions = []),
              (t = (t = r.reduce((t, r) => r.resolve(t, e), t)).resolve(e));
          }
          return t;
        }
        resolveOptions(e) {
          var t, r, i, n;
          return Object.assign({}, e, {
            from: e.from || [],
            strict: null != (t = e.strict) ? t : this.spec.strict,
            abortEarly: null != (r = e.abortEarly) ? r : this.spec.abortEarly,
            recursive: null != (i = e.recursive) ? i : this.spec.recursive,
            disableStackTrace:
              null != (n = e.disableStackTrace)
                ? n
                : this.spec.disableStackTrace,
          });
        }
        cast(e, t = {}) {
          let r = this.resolve(Object.assign({ value: e }, t)),
            i = "ignore-optionality" === t.assert,
            n = r._cast(e, t);
          if (!1 !== t.assert && !r.isType(n)) {
            if (i && j(n)) return n;
            let s = v(e),
              a = v(n);
            throw TypeError(
              `The value of ${
                t.path || "field"
              } could not be cast to a value that satisfies the schema type: "${
                r.type
              }". 

attempted value: ${s} 
` + (a !== s ? `result of cast: ${a}` : "")
            );
          }
          return n;
        }
        _cast(e, t) {
          let r =
            void 0 === e
              ? e
              : this.transforms.reduce((t, r) => r.call(this, t, e, this), e);
          return void 0 === r && (r = this.getDefault(t)), r;
        }
        _validate(e, t = {}, r, i) {
          let {
              path: n,
              originalValue: s = e,
              strict: a = this.spec.strict,
            } = t,
            o = e;
          a || (o = this._cast(o, Object.assign({ assert: !1 }, t)));
          let l = [];
          for (let e of Object.values(this.internalTests)) e && l.push(e);
          this.runTests(
            { path: n, value: o, originalValue: s, options: t, tests: l },
            r,
            (e) => {
              if (e.length) return i(e, o);
              this.runTests(
                {
                  path: n,
                  value: o,
                  originalValue: s,
                  options: t,
                  tests: this.tests,
                },
                r,
                i
              );
            }
          );
        }
        runTests(e, t, r) {
          let i = !1,
            { tests: n, value: s, originalValue: a, path: o, options: l } = e,
            u = (e) => {
              i || ((i = !0), t(e, s));
            },
            d = (e) => {
              i || ((i = !0), r(e, s));
            },
            c = n.length,
            h = [];
          if (!c) return d([]);
          let p = {
            value: s,
            originalValue: a,
            path: o,
            options: l,
            schema: this,
          };
          for (let e = 0; e < n.length; e++)
            (0, n[e])(p, u, function (e) {
              e && (Array.isArray(e) ? h.push(...e) : h.push(e)),
                --c <= 0 && d(h);
            });
        }
        asNestedTest({
          key: e,
          index: t,
          parent: r,
          parentPath: i,
          originalParent: n,
          options: s,
        }) {
          let a = null != e ? e : t;
          if (null == a)
            throw TypeError(
              "Must include `key` or `index` for nested validations"
            );
          let o = "number" == typeof a,
            l = r[a],
            u = Object.assign({}, s, {
              strict: !0,
              parent: r,
              value: l,
              originalValue: n[a],
              key: void 0,
              [o ? "index" : "key"]: a,
              path:
                o || a.includes(".")
                  ? `${i || ""}[${o ? a : `"${a}"`}]`
                  : (i ? `${i}.` : "") + e,
            });
          return (e, t, r) => this.resolve(u)._validate(l, u, t, r);
        }
        validate(e, t) {
          var r;
          let i = this.resolve(Object.assign({}, t, { value: e })),
            n =
              null != (r = null == t ? void 0 : t.disableStackTrace)
                ? r
                : i.spec.disableStackTrace;
          return new Promise((r, s) =>
            i._validate(
              e,
              t,
              (e, t) => {
                w.isError(e) && (e.value = t), s(e);
              },
              (e, t) => {
                e.length ? s(new w(e, t, void 0, void 0, n)) : r(t);
              }
            )
          );
        }
        validateSync(e, t) {
          var r;
          let i;
          let n = this.resolve(Object.assign({}, t, { value: e })),
            s =
              null != (r = null == t ? void 0 : t.disableStackTrace)
                ? r
                : n.spec.disableStackTrace;
          return (
            n._validate(
              e,
              Object.assign({}, t, { sync: !0 }),
              (e, t) => {
                throw (w.isError(e) && (e.value = t), e);
              },
              (t, r) => {
                if (t.length) throw new w(t, e, void 0, void 0, s);
                i = r;
              }
            ),
            i
          );
        }
        isValid(e, t) {
          return this.validate(e, t).then(
            () => !0,
            (e) => {
              if (w.isError(e)) return !1;
              throw e;
            }
          );
        }
        isValidSync(e, t) {
          try {
            return this.validateSync(e, t), !0;
          } catch (e) {
            if (w.isError(e)) return !1;
            throw e;
          }
        }
        _getDefault(e) {
          let t = this.spec.default;
          return null == t
            ? t
            : "function" == typeof t
            ? t.call(this, e)
            : V(t);
        }
        getDefault(e) {
          return this.resolve(e || {})._getDefault(e);
        }
        default(e) {
          return 0 == arguments.length
            ? this._getDefault()
            : this.clone({ default: e });
        }
        strict(e = !0) {
          return this.clone({ strict: e });
        }
        nullability(e, t) {
          let r = this.clone({ nullable: e });
          return (
            (r.internalTests.nullable = L({
              message: t,
              name: "nullable",
              test(e) {
                return null !== e || this.schema.spec.nullable;
              },
            })),
            r
          );
        }
        optionality(e, t) {
          let r = this.clone({ optional: e });
          return (
            (r.internalTests.optionality = L({
              message: t,
              name: "optionality",
              test(e) {
                return void 0 !== e || this.schema.spec.optional;
              },
            })),
            r
          );
        }
        optional() {
          return this.optionality(!0);
        }
        defined(e = x.defined) {
          return this.optionality(!1, e);
        }
        nullable() {
          return this.nullability(!0);
        }
        nonNullable(e = x.notNull) {
          return this.nullability(!1, e);
        }
        required(e = x.required) {
          return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
        }
        notRequired() {
          return this.clone().withMutation((e) => e.nullable().optional());
        }
        transform(e) {
          let t = this.clone();
          return t.transforms.push(e), t;
        }
        test(...e) {
          let t;
          if (
            (void 0 ===
              (t =
                1 === e.length
                  ? "function" == typeof e[0]
                    ? { test: e[0] }
                    : e[0]
                  : 2 === e.length
                  ? { name: e[0], test: e[1] }
                  : { name: e[0], message: e[1], test: e[2] }).message &&
              (t.message = x.default),
            "function" != typeof t.test)
          )
            throw TypeError("`test` is a required parameters");
          let r = this.clone(),
            i = L(t),
            n = t.exclusive || (t.name && !0 === r.exclusiveTests[t.name]);
          if (t.exclusive && !t.name)
            throw TypeError(
              "Exclusive tests must provide a unique `name` identifying the test"
            );
          return (
            t.name && (r.exclusiveTests[t.name] = !!t.exclusive),
            (r.tests = r.tests.filter(
              (e) =>
                e.OPTIONS.name !== t.name ||
                (!n && e.OPTIONS.test !== i.OPTIONS.test)
            )),
            r.tests.push(i),
            r
          );
        }
        when(e, t) {
          Array.isArray(e) || "string" == typeof e || ((t = e), (e = "."));
          let r = this.clone(),
            i = g(e).map((e) => new D(e));
          return (
            i.forEach((e) => {
              e.isSibling && r.deps.push(e.key);
            }),
            r.conditions.push(
              "function" == typeof t ? new O(i, t) : O.fromOptions(i, t)
            ),
            r
          );
        }
        typeError(e) {
          let t = this.clone();
          return (
            (t.internalTests.typeError = L({
              message: e,
              name: "typeError",
              skipAbsent: !0,
              test(e) {
                return (
                  !!this.schema._typeCheck(e) ||
                  this.createError({ params: { type: this.schema.type } })
                );
              },
            })),
            t
          );
        }
        oneOf(e, t = x.oneOf) {
          let r = this.clone();
          return (
            e.forEach((e) => {
              r._whitelist.add(e), r._blacklist.delete(e);
            }),
            (r.internalTests.whiteList = L({
              message: t,
              name: "oneOf",
              skipAbsent: !0,
              test(e) {
                let t = this.schema._whitelist,
                  r = t.resolveAll(this.resolve);
                return (
                  !!r.includes(e) ||
                  this.createError({
                    params: { values: Array.from(t).join(", "), resolved: r },
                  })
                );
              },
            })),
            r
          );
        }
        notOneOf(e, t = x.notOneOf) {
          let r = this.clone();
          return (
            e.forEach((e) => {
              r._blacklist.add(e), r._whitelist.delete(e);
            }),
            (r.internalTests.blacklist = L({
              message: t,
              name: "notOneOf",
              test(e) {
                let t = this.schema._blacklist,
                  r = t.resolveAll(this.resolve);
                return (
                  !r.includes(e) ||
                  this.createError({
                    params: { values: Array.from(t).join(", "), resolved: r },
                  })
                );
              },
            })),
            r
          );
        }
        strip(e = !0) {
          let t = this.clone();
          return (t.spec.strip = e), t;
        }
        describe(e) {
          let t = (e ? this.resolve(e) : this).clone(),
            { label: r, meta: i, optional: n, nullable: s } = t.spec;
          return {
            meta: i,
            label: r,
            optional: n,
            nullable: s,
            default: t.getDefault(e),
            type: t.type,
            oneOf: t._whitelist.describe(),
            notOneOf: t._blacklist.describe(),
            tests: t.tests
              .map((e) => ({ name: e.OPTIONS.name, params: e.OPTIONS.params }))
              .filter((e, t, r) => r.findIndex((t) => t.name === e.name) === t),
          };
        }
      }
      for (let e of ((R.prototype.__isYupSchema__ = !0),
      ["validate", "validateSync"]))
        R.prototype[`${e}At`] = function (t, r, i = {}) {
          let {
            parent: n,
            parentPath: s,
            schema: o,
          } = (function (e, t, r, i = r) {
            let n, s, o;
            return t
              ? ((0, a.forEach)(t, (a, l, u) => {
                  let d = l ? a.slice(1, a.length - 1) : a,
                    c =
                      "tuple" ===
                      (e = e.resolve({ context: i, parent: n, value: r })).type,
                    h = u ? parseInt(d, 10) : 0;
                  if (e.innerType || c) {
                    if (c && !u)
                      throw Error(
                        `Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`
                      );
                    if (r && h >= r.length)
                      throw Error(
                        `Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `
                      );
                    (n = r),
                      (r = r && r[h]),
                      (e = c ? e.spec.types[h] : e.innerType);
                  }
                  if (!u) {
                    if (!e.fields || !e.fields[d])
                      throw Error(
                        `The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`
                      );
                    (n = r), (r = r && r[d]), (e = e.fields[d]);
                  }
                  (s = d), (o = l ? "[" + a + "]" : "." + a);
                }),
                { schema: e, parent: n, parentPath: s })
              : { parent: n, parentPath: t, schema: e };
          })(this, t, r, i.context);
          return o[e](n && n[s], Object.assign({}, i, { parent: n, path: t }));
        };
      for (let e of ["equals", "is"]) R.prototype[e] = R.prototype.oneOf;
      for (let e of ["not", "nope"]) R.prototype[e] = R.prototype.notOneOf;
      let I = () => !0;
      class N extends R {
        constructor(e) {
          super(
            "function" == typeof e
              ? { type: "mixed", check: e }
              : Object.assign({ type: "mixed", check: I }, e)
          );
        }
      }
      N.prototype;
      class B extends R {
        constructor() {
          super({
            type: "boolean",
            check: (e) => (
              e instanceof Boolean && (e = e.valueOf()), "boolean" == typeof e
            ),
          }),
            this.withMutation(() => {
              this.transform((e, t, r) => {
                if (r.spec.coerce && !r.isType(e)) {
                  if (/^(true|1)$/i.test(String(e))) return !0;
                  if (/^(false|0)$/i.test(String(e))) return !1;
                }
                return e;
              });
            });
        }
        isTrue(e = C.isValue) {
          return this.test({
            message: e,
            name: "is-value",
            exclusive: !0,
            params: { value: "true" },
            test: (e) => j(e) || !0 === e,
          });
        }
        isFalse(e = C.isValue) {
          return this.test({
            message: e,
            name: "is-value",
            exclusive: !0,
            params: { value: "false" },
            test: (e) => j(e) || !1 === e,
          });
        }
        default(e) {
          return super.default(e);
        }
        defined(e) {
          return super.defined(e);
        }
        optional() {
          return super.optional();
        }
        required(e) {
          return super.required(e);
        }
        notRequired() {
          return super.notRequired();
        }
        nullable() {
          return super.nullable();
        }
        nonNullable(e) {
          return super.nonNullable(e);
        }
        strip(e) {
          return super.strip(e);
        }
      }
      B.prototype;
      let $ =
        /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
      function z(e) {
        var t, r;
        let i = $.exec(e);
        return i
          ? {
              year: H(i[1]),
              month: H(i[2], 1) - 1,
              day: H(i[3], 1),
              hour: H(i[4]),
              minute: H(i[5]),
              second: H(i[6]),
              millisecond: i[7] ? H(i[7].substring(0, 3)) : 0,
              precision:
                null != (t = null == (r = i[7]) ? void 0 : r.length)
                  ? t
                  : void 0,
              z: i[8] || void 0,
              plusMinus: i[9] || void 0,
              hourOffset: H(i[10]),
              minuteOffset: H(i[11]),
            }
          : null;
      }
      function H(e, t = 0) {
        return Number(e) || t;
      }
      let W =
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        U =
          /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        Y =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        q = RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
        ),
        G = (e) => j(e) || e === e.trim(),
        X = {}.toString();
      function Z() {
        return new K();
      }
      class K extends R {
        constructor() {
          super({
            type: "string",
            check: (e) => (
              e instanceof String && (e = e.valueOf()), "string" == typeof e
            ),
          }),
            this.withMutation(() => {
              this.transform((e, t, r) => {
                if (!r.spec.coerce || r.isType(e) || Array.isArray(e)) return e;
                let i = null != e && e.toString ? e.toString() : e;
                return i === X ? e : i;
              });
            });
        }
        required(e) {
          return super
            .required(e)
            .withMutation((t) =>
              t.test({
                message: e || x.required,
                name: "required",
                skipAbsent: !0,
                test: (e) => !!e.length,
              })
            );
        }
        notRequired() {
          return super
            .notRequired()
            .withMutation(
              (e) => (
                (e.tests = e.tests.filter(
                  (e) => "required" !== e.OPTIONS.name
                )),
                e
              )
            );
        }
        length(e, t = S.length) {
          return this.test({
            message: t,
            name: "length",
            exclusive: !0,
            params: { length: e },
            skipAbsent: !0,
            test(t) {
              return t.length === this.resolve(e);
            },
          });
        }
        min(e, t = S.min) {
          return this.test({
            message: t,
            name: "min",
            exclusive: !0,
            params: { min: e },
            skipAbsent: !0,
            test(t) {
              return t.length >= this.resolve(e);
            },
          });
        }
        max(e, t = S.max) {
          return this.test({
            name: "max",
            exclusive: !0,
            message: t,
            params: { max: e },
            skipAbsent: !0,
            test(t) {
              return t.length <= this.resolve(e);
            },
          });
        }
        matches(e, t) {
          let r,
            i,
            n = !1;
          return (
            t &&
              ("object" == typeof t
                ? ({ excludeEmptyString: n = !1, message: r, name: i } = t)
                : (r = t)),
            this.test({
              name: i || "matches",
              message: r || S.matches,
              params: { regex: e },
              skipAbsent: !0,
              test: (t) => ("" === t && n) || -1 !== t.search(e),
            })
          );
        }
        email(e = S.email) {
          return this.matches(W, {
            name: "email",
            message: e,
            excludeEmptyString: !0,
          });
        }
        url(e = S.url) {
          return this.matches(U, {
            name: "url",
            message: e,
            excludeEmptyString: !0,
          });
        }
        uuid(e = S.uuid) {
          return this.matches(Y, {
            name: "uuid",
            message: e,
            excludeEmptyString: !1,
          });
        }
        datetime(e) {
          let t,
            r,
            i = "";
          return (
            e &&
              ("object" == typeof e
                ? ({ message: i = "", allowOffset: t = !1, precision: r } = e)
                : (i = e)),
            this.matches(q, {
              name: "datetime",
              message: i || S.datetime,
              excludeEmptyString: !0,
            })
              .test({
                name: "datetime_offset",
                message: i || S.datetime_offset,
                params: { allowOffset: t },
                skipAbsent: !0,
                test: (e) => {
                  if (!e || t) return !0;
                  let r = z(e);
                  return !!r && !!r.z;
                },
              })
              .test({
                name: "datetime_precision",
                message: i || S.datetime_precision,
                params: { precision: r },
                skipAbsent: !0,
                test: (e) => {
                  if (!e || void 0 == r) return !0;
                  let t = z(e);
                  return !!t && t.precision === r;
                },
              })
          );
        }
        ensure() {
          return this.default("").transform((e) => (null === e ? "" : e));
        }
        trim(e = S.trim) {
          return this.transform((e) => (null != e ? e.trim() : e)).test({
            message: e,
            name: "trim",
            test: G,
          });
        }
        lowercase(e = S.lowercase) {
          return this.transform((e) => (j(e) ? e : e.toLowerCase())).test({
            message: e,
            name: "string_case",
            exclusive: !0,
            skipAbsent: !0,
            test: (e) => j(e) || e === e.toLowerCase(),
          });
        }
        uppercase(e = S.uppercase) {
          return this.transform((e) => (j(e) ? e : e.toUpperCase())).test({
            message: e,
            name: "string_case",
            exclusive: !0,
            skipAbsent: !0,
            test: (e) => j(e) || e === e.toUpperCase(),
          });
        }
      }
      Z.prototype = K.prototype;
      let Q = (e) => e != +e;
      class J extends R {
        constructor() {
          super({
            type: "number",
            check: (e) => (
              e instanceof Number && (e = e.valueOf()),
              "number" == typeof e && !Q(e)
            ),
          }),
            this.withMutation(() => {
              this.transform((e, t, r) => {
                if (!r.spec.coerce) return e;
                let i = e;
                if ("string" == typeof i) {
                  if ("" === (i = i.replace(/\s/g, ""))) return NaN;
                  i = +i;
                }
                return r.isType(i) || null === i ? i : parseFloat(i);
              });
            });
        }
        min(e, t = T.min) {
          return this.test({
            message: t,
            name: "min",
            exclusive: !0,
            params: { min: e },
            skipAbsent: !0,
            test(t) {
              return t >= this.resolve(e);
            },
          });
        }
        max(e, t = T.max) {
          return this.test({
            message: t,
            name: "max",
            exclusive: !0,
            params: { max: e },
            skipAbsent: !0,
            test(t) {
              return t <= this.resolve(e);
            },
          });
        }
        lessThan(e, t = T.lessThan) {
          return this.test({
            message: t,
            name: "max",
            exclusive: !0,
            params: { less: e },
            skipAbsent: !0,
            test(t) {
              return t < this.resolve(e);
            },
          });
        }
        moreThan(e, t = T.moreThan) {
          return this.test({
            message: t,
            name: "min",
            exclusive: !0,
            params: { more: e },
            skipAbsent: !0,
            test(t) {
              return t > this.resolve(e);
            },
          });
        }
        positive(e = T.positive) {
          return this.moreThan(0, e);
        }
        negative(e = T.negative) {
          return this.lessThan(0, e);
        }
        integer(e = T.integer) {
          return this.test({
            name: "integer",
            message: e,
            skipAbsent: !0,
            test: (e) => Number.isInteger(e),
          });
        }
        truncate() {
          return this.transform((e) => (j(e) ? e : 0 | e));
        }
        round(e) {
          var t;
          let r = ["ceil", "floor", "round", "trunc"];
          if (
            "trunc" ===
            (e = (null == (t = e) ? void 0 : t.toLowerCase()) || "round")
          )
            return this.truncate();
          if (-1 === r.indexOf(e.toLowerCase()))
            throw TypeError(
              "Only valid options for round() are: " + r.join(", ")
            );
          return this.transform((t) => (j(t) ? t : Math[e](t)));
        }
      }
      J.prototype;
      let ee = new Date(""),
        et = (e) => "[object Date]" === Object.prototype.toString.call(e);
      function er() {
        return new ei();
      }
      class ei extends R {
        constructor() {
          super({ type: "date", check: (e) => et(e) && !isNaN(e.getTime()) }),
            this.withMutation(() => {
              this.transform((e, t, r) =>
                !r.spec.coerce || r.isType(e) || null === e
                  ? e
                  : isNaN(
                      (e = (function (e) {
                        let t = z(e);
                        if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
                        if (void 0 === t.z && void 0 === t.plusMinus)
                          return new Date(
                            t.year,
                            t.month,
                            t.day,
                            t.hour,
                            t.minute,
                            t.second,
                            t.millisecond
                          ).valueOf();
                        let r = 0;
                        return (
                          "Z" !== t.z &&
                            void 0 !== t.plusMinus &&
                            ((r = 60 * t.hourOffset + t.minuteOffset),
                            "+" === t.plusMinus && (r = 0 - r)),
                          Date.UTC(
                            t.year,
                            t.month,
                            t.day,
                            t.hour,
                            t.minute + r,
                            t.second,
                            t.millisecond
                          )
                        );
                      })(e))
                    )
                  ? ei.INVALID_DATE
                  : new Date(e)
              );
            });
        }
        prepareParam(e, t) {
          let r;
          if (D.isRef(e)) r = e;
          else {
            let i = this.cast(e);
            if (!this._typeCheck(i))
              throw TypeError(
                `\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`
              );
            r = i;
          }
          return r;
        }
        min(e, t = E.min) {
          let r = this.prepareParam(e, "min");
          return this.test({
            message: t,
            name: "min",
            exclusive: !0,
            params: { min: e },
            skipAbsent: !0,
            test(e) {
              return e >= this.resolve(r);
            },
          });
        }
        max(e, t = E.max) {
          let r = this.prepareParam(e, "max");
          return this.test({
            message: t,
            name: "max",
            exclusive: !0,
            params: { max: e },
            skipAbsent: !0,
            test(e) {
              return e <= this.resolve(r);
            },
          });
        }
      }
      function en(e, t) {
        let r = 1 / 0;
        return (
          e.some((e, i) => {
            var n;
            if (null != (n = t.path) && n.includes(e)) return (r = i), !0;
          }),
          r
        );
      }
      function es(e) {
        return (t, r) => en(e, t) - en(e, r);
      }
      (ei.INVALID_DATE = ee),
        (er.prototype = ei.prototype),
        (er.INVALID_DATE = ee);
      let ea = (e, t, r) => {
          if ("string" != typeof e) return e;
          let i = e;
          try {
            i = JSON.parse(e);
          } catch (e) {}
          return r.isType(i) ? i : e;
        },
        eo = (e, t) => {
          let r = [...(0, a.normalizePath)(t)];
          if (1 === r.length) return r[0] in e;
          let i = r.pop(),
            n = (0, a.getter)((0, a.join)(r), !0)(e);
          return !!(n && i in n);
        },
        el = (e) => "[object Object]" === Object.prototype.toString.call(e);
      function eu(e, t) {
        let r = Object.keys(e.fields);
        return Object.keys(t).filter((e) => -1 === r.indexOf(e));
      }
      let ed = es([]);
      function ec(e) {
        return new eh(e);
      }
      class eh extends R {
        constructor(e) {
          super({
            type: "object",
            check: (e) => el(e) || "function" == typeof e,
          }),
            (this.fields = Object.create(null)),
            (this._sortErrors = ed),
            (this._nodes = []),
            (this._excludedEdges = []),
            this.withMutation(() => {
              e && this.shape(e);
            });
        }
        _cast(e, t = {}) {
          var r;
          let i = super._cast(e, t);
          if (void 0 === i) return this.getDefault(t);
          if (!this._typeCheck(i)) return i;
          let n = this.fields,
            s = null != (r = t.stripUnknown) ? r : this.spec.noUnknown,
            a = [].concat(
              this._nodes,
              Object.keys(i).filter((e) => !this._nodes.includes(e))
            ),
            o = {},
            l = Object.assign({}, t, {
              parent: o,
              __validating: t.__validating || !1,
            }),
            u = !1;
          for (let e of a) {
            let r = n[e],
              a = e in i;
            if (r) {
              let n;
              let s = i[e];
              l.path = (t.path ? `${t.path}.` : "") + e;
              let a =
                  (r = r.resolve({
                    value: s,
                    context: t.context,
                    parent: o,
                  })) instanceof R
                    ? r.spec
                    : void 0,
                d = null == a ? void 0 : a.strict;
              if (null != a && a.strip) {
                u = u || e in i;
                continue;
              }
              void 0 !== (n = t.__validating && d ? i[e] : r.cast(i[e], l)) &&
                (o[e] = n);
            } else a && !s && (o[e] = i[e]);
            (a !== e in o || o[e] !== i[e]) && (u = !0);
          }
          return u ? o : i;
        }
        _validate(e, t = {}, r, i) {
          let {
            from: n = [],
            originalValue: s = e,
            recursive: a = this.spec.recursive,
          } = t;
          (t.from = [{ schema: this, value: s }, ...n]),
            (t.__validating = !0),
            (t.originalValue = s),
            super._validate(e, t, r, (e, n) => {
              if (!a || !el(n)) {
                i(e, n);
                return;
              }
              s = s || n;
              let o = [];
              for (let e of this._nodes) {
                let r = this.fields[e];
                !r ||
                  D.isRef(r) ||
                  o.push(
                    r.asNestedTest({
                      options: t,
                      key: e,
                      parent: n,
                      parentPath: t.path,
                      originalParent: s,
                    })
                  );
              }
              this.runTests(
                { tests: o, value: n, originalValue: s, options: t },
                r,
                (t) => {
                  i(t.sort(this._sortErrors).concat(e), n);
                }
              );
            });
        }
        clone(e) {
          let t = super.clone(e);
          return (
            (t.fields = Object.assign({}, this.fields)),
            (t._nodes = this._nodes),
            (t._excludedEdges = this._excludedEdges),
            (t._sortErrors = this._sortErrors),
            t
          );
        }
        concat(e) {
          let t = super.concat(e),
            r = t.fields;
          for (let [e, t] of Object.entries(this.fields)) {
            let i = r[e];
            r[e] = void 0 === i ? t : i;
          }
          return t.withMutation((t) =>
            t.setFields(r, [...this._excludedEdges, ...e._excludedEdges])
          );
        }
        _getDefault(e) {
          if ("default" in this.spec) return super._getDefault(e);
          if (!this._nodes.length) return;
          let t = {};
          return (
            this._nodes.forEach((r) => {
              var i;
              let n = this.fields[r],
                s = e;
              null != (i = s) &&
                i.value &&
                (s = Object.assign({}, s, {
                  parent: s.value,
                  value: s.value[r],
                })),
                (t[r] = n && "getDefault" in n ? n.getDefault(s) : void 0);
            }),
            t
          );
        }
        setFields(e, t) {
          let r = this.clone();
          return (
            (r.fields = e),
            (r._nodes = (function (e, t = []) {
              let r = [],
                i = new Set(),
                n = new Set(t.map(([e, t]) => `${e}-${t}`));
              function s(e, t) {
                let s = (0, a.split)(e)[0];
                i.add(s), n.has(`${t}-${s}`) || r.push([t, s]);
              }
              for (let t of Object.keys(e)) {
                let r = e[t];
                i.add(t),
                  D.isRef(r) && r.isSibling
                    ? s(r.path, t)
                    : M(r) && "deps" in r && r.deps.forEach((e) => s(e, t));
              }
              return u().array(Array.from(i), r).reverse();
            })(e, t)),
            (r._sortErrors = es(Object.keys(e))),
            t && (r._excludedEdges = t),
            r
          );
        }
        shape(e, t = []) {
          return this.clone().withMutation((r) => {
            let i = r._excludedEdges;
            return (
              t.length &&
                (Array.isArray(t[0]) || (t = [t]),
                (i = [...r._excludedEdges, ...t])),
              r.setFields(Object.assign(r.fields, e), i)
            );
          });
        }
        partial() {
          let e = {};
          for (let [t, r] of Object.entries(this.fields))
            e[t] =
              "optional" in r && r.optional instanceof Function
                ? r.optional()
                : r;
          return this.setFields(e);
        }
        deepPartial() {
          return (function e(t) {
            if ("fields" in t) {
              let r = {};
              for (let [i, n] of Object.entries(t.fields)) r[i] = e(n);
              return t.setFields(r);
            }
            if ("array" === t.type) {
              let r = t.optional();
              return r.innerType && (r.innerType = e(r.innerType)), r;
            }
            return "tuple" === t.type
              ? t.optional().clone({ types: t.spec.types.map(e) })
              : "optional" in t
              ? t.optional()
              : t;
          })(this);
        }
        pick(e) {
          let t = {};
          for (let r of e) this.fields[r] && (t[r] = this.fields[r]);
          return this.setFields(
            t,
            this._excludedEdges.filter(
              ([t, r]) => e.includes(t) && e.includes(r)
            )
          );
        }
        omit(e) {
          let t = [];
          for (let r of Object.keys(this.fields)) e.includes(r) || t.push(r);
          return this.pick(t);
        }
        from(e, t, r) {
          let i = (0, a.getter)(e, !0);
          return this.transform((n) => {
            if (!n) return n;
            let s = n;
            return (
              eo(n, e) &&
                ((s = Object.assign({}, n)), r || delete s[e], (s[t] = i(n))),
              s
            );
          });
        }
        json() {
          return this.transform(ea);
        }
        exact(e) {
          return this.test({
            name: "exact",
            exclusive: !0,
            message: e || P.exact,
            test(e) {
              if (null == e) return !0;
              let t = eu(this.schema, e);
              return (
                0 === t.length ||
                this.createError({ params: { properties: t.join(", ") } })
              );
            },
          });
        }
        stripUnknown() {
          return this.clone({ noUnknown: !0 });
        }
        noUnknown(e = !0, t = P.noUnknown) {
          "boolean" != typeof e && ((t = e), (e = !0));
          let r = this.test({
            name: "noUnknown",
            exclusive: !0,
            message: t,
            test(t) {
              if (null == t) return !0;
              let r = eu(this.schema, t);
              return (
                !e ||
                0 === r.length ||
                this.createError({ params: { unknown: r.join(", ") } })
              );
            },
          });
          return (r.spec.noUnknown = e), r;
        }
        unknown(e = !0, t = P.noUnknown) {
          return this.noUnknown(!e, t);
        }
        transformKeys(e) {
          return this.transform((t) => {
            if (!t) return t;
            let r = {};
            for (let i of Object.keys(t)) r[e(i)] = t[i];
            return r;
          });
        }
        camelCase() {
          return this.transformKeys(o.camelCase);
        }
        snakeCase() {
          return this.transformKeys(o.snakeCase);
        }
        constantCase() {
          return this.transformKeys((e) => (0, o.snakeCase)(e).toUpperCase());
        }
        describe(e) {
          let t = (e ? this.resolve(e) : this).clone(),
            r = super.describe(e);
          for (let [n, s] of ((r.fields = {}), Object.entries(t.fields))) {
            var i;
            let t = e;
            null != (i = t) &&
              i.value &&
              (t = Object.assign({}, t, {
                parent: t.value,
                value: t.value[n],
              })),
              (r.fields[n] = s.describe(t));
          }
          return r;
        }
      }
      ec.prototype = eh.prototype;
      class ep extends R {
        constructor(e) {
          super({
            type: "array",
            spec: { types: e },
            check: (e) => Array.isArray(e),
          }),
            (this.innerType = void 0),
            (this.innerType = e);
        }
        _cast(e, t) {
          let r = super._cast(e, t);
          if (!this._typeCheck(r) || !this.innerType) return r;
          let i = !1,
            n = r.map((e, r) => {
              let n = this.innerType.cast(
                e,
                Object.assign({}, t, { path: `${t.path || ""}[${r}]` })
              );
              return n !== e && (i = !0), n;
            });
          return i ? n : r;
        }
        _validate(e, t = {}, r, i) {
          var n;
          let s = this.innerType,
            a = null != (n = t.recursive) ? n : this.spec.recursive;
          null != t.originalValue && t.originalValue,
            super._validate(e, t, r, (n, o) => {
              var l, u;
              if (!a || !s || !this._typeCheck(o)) {
                i(n, o);
                return;
              }
              let d = Array(o.length);
              for (let r = 0; r < o.length; r++)
                d[r] = s.asNestedTest({
                  options: t,
                  index: r,
                  parent: o,
                  parentPath: t.path,
                  originalParent: null != (u = t.originalValue) ? u : e,
                });
              this.runTests(
                {
                  value: o,
                  tests: d,
                  originalValue: null != (l = t.originalValue) ? l : e,
                  options: t,
                },
                r,
                (e) => i(e.concat(n), o)
              );
            });
        }
        clone(e) {
          let t = super.clone(e);
          return (t.innerType = this.innerType), t;
        }
        json() {
          return this.transform(ea);
        }
        concat(e) {
          let t = super.concat(e);
          return (
            (t.innerType = this.innerType),
            e.innerType &&
              (t.innerType = t.innerType
                ? t.innerType.concat(e.innerType)
                : e.innerType),
            t
          );
        }
        of(e) {
          let t = this.clone();
          if (!M(e))
            throw TypeError(
              "`array.of()` sub-schema must be a valid yup schema not: " + v(e)
            );
          return (
            (t.innerType = e),
            (t.spec = Object.assign({}, t.spec, { types: e })),
            t
          );
        }
        length(e, t = A.length) {
          return this.test({
            message: t,
            name: "length",
            exclusive: !0,
            params: { length: e },
            skipAbsent: !0,
            test(t) {
              return t.length === this.resolve(e);
            },
          });
        }
        min(e, t) {
          return (
            (t = t || A.min),
            this.test({
              message: t,
              name: "min",
              exclusive: !0,
              params: { min: e },
              skipAbsent: !0,
              test(t) {
                return t.length >= this.resolve(e);
              },
            })
          );
        }
        max(e, t) {
          return (
            (t = t || A.max),
            this.test({
              message: t,
              name: "max",
              exclusive: !0,
              params: { max: e },
              skipAbsent: !0,
              test(t) {
                return t.length <= this.resolve(e);
              },
            })
          );
        }
        ensure() {
          return this.default(() => []).transform((e, t) =>
            this._typeCheck(e) ? e : null == t ? [] : [].concat(t)
          );
        }
        compact(e) {
          let t = e ? (t, r, i) => !e(t, r, i) : (e) => !!e;
          return this.transform((e) => (null != e ? e.filter(t) : e));
        }
        describe(e) {
          let t = (e ? this.resolve(e) : this).clone(),
            r = super.describe(e);
          if (t.innerType) {
            var i;
            let n = e;
            null != (i = n) &&
              i.value &&
              (n = Object.assign({}, n, {
                parent: n.value,
                value: n.value[0],
              })),
              (r.innerType = t.innerType.describe(n));
          }
          return r;
        }
      }
      ep.prototype;
      class ef extends R {
        constructor(e) {
          super({
            type: "tuple",
            spec: { types: e },
            check(e) {
              let t = this.spec.types;
              return Array.isArray(e) && e.length === t.length;
            },
          }),
            this.withMutation(() => {
              this.typeError(k.notType);
            });
        }
        _cast(e, t) {
          let { types: r } = this.spec,
            i = super._cast(e, t);
          if (!this._typeCheck(i)) return i;
          let n = !1,
            s = r.map((e, r) => {
              let s = e.cast(
                i[r],
                Object.assign({}, t, { path: `${t.path || ""}[${r}]` })
              );
              return s !== i[r] && (n = !0), s;
            });
          return n ? s : i;
        }
        _validate(e, t = {}, r, i) {
          let n = this.spec.types;
          super._validate(e, t, r, (s, a) => {
            var o, l;
            if (!this._typeCheck(a)) {
              i(s, a);
              return;
            }
            let u = [];
            for (let [r, i] of n.entries())
              u[r] = i.asNestedTest({
                options: t,
                index: r,
                parent: a,
                parentPath: t.path,
                originalParent: null != (l = t.originalValue) ? l : e,
              });
            this.runTests(
              {
                value: a,
                tests: u,
                originalValue: null != (o = t.originalValue) ? o : e,
                options: t,
              },
              r,
              (e) => i(e.concat(s), a)
            );
          });
        }
        describe(e) {
          let t = (e ? this.resolve(e) : this).clone(),
            r = super.describe(e);
          return (
            (r.innerType = t.spec.types.map((t, r) => {
              var i;
              let n = e;
              return (
                null != (i = n) &&
                  i.value &&
                  (n = Object.assign({}, n, {
                    parent: n.value,
                    value: n.value[r],
                  })),
                t.describe(n)
              );
            })),
            r
          );
        }
      }
      function em(e) {
        try {
          return e();
        } catch (e) {
          if (w.isError(e)) return Promise.reject(e);
          throw e;
        }
      }
      ef.prototype;
      class ev {
        constructor(e) {
          (this.type = "lazy"),
            (this.__isYupSchema__ = !0),
            (this.spec = void 0),
            (this._resolve = (e, t = {}) => {
              let r = this.builder(e, t);
              if (!M(r))
                throw TypeError("lazy() functions must return a valid schema");
              return this.spec.optional && (r = r.optional()), r.resolve(t);
            }),
            (this.builder = e),
            (this.spec = { meta: void 0, optional: !1 });
        }
        clone(e) {
          let t = new ev(this.builder);
          return (t.spec = Object.assign({}, this.spec, e)), t;
        }
        optionality(e) {
          return this.clone({ optional: e });
        }
        optional() {
          return this.optionality(!0);
        }
        resolve(e) {
          return this._resolve(e.value, e);
        }
        cast(e, t) {
          return this._resolve(e, t).cast(e, t);
        }
        asNestedTest(e) {
          let { key: t, index: r, parent: i, options: n } = e,
            s = i[null != r ? r : t];
          return this._resolve(
            s,
            Object.assign({}, n, { value: s, parent: i })
          ).asNestedTest(e);
        }
        validate(e, t) {
          return em(() => this._resolve(e, t).validate(e, t));
        }
        validateSync(e, t) {
          return this._resolve(e, t).validateSync(e, t);
        }
        validateAt(e, t, r) {
          return em(() => this._resolve(t, r).validateAt(e, t, r));
        }
        validateSyncAt(e, t, r) {
          return this._resolve(t, r).validateSyncAt(e, t, r);
        }
        isValid(e, t) {
          try {
            return this._resolve(e, t).isValid(e, t);
          } catch (e) {
            if (w.isError(e)) return Promise.resolve(!1);
            throw e;
          }
        }
        isValidSync(e, t) {
          return this._resolve(e, t).isValidSync(e, t);
        }
        describe(e) {
          return e
            ? this.resolve(e).describe(e)
            : { type: "lazy", meta: this.spec.meta, label: void 0 };
        }
        meta(...e) {
          if (0 === e.length) return this.spec.meta;
          let t = this.clone();
          return (t.spec.meta = Object.assign(t.spec.meta || {}, e[0])), t;
        }
      }
    },
    81860: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => l });
      var i = r(69606);
      let n = (e, t, r) => {
          if (e && "reportValidity" in e) {
            let n = (0, i.Jt)(r, t);
            e.setCustomValidity((n && n.message) || ""), e.reportValidity();
          }
        },
        s = (e, t) => {
          for (let r in t.fields) {
            let i = t.fields[r];
            i && i.ref && "reportValidity" in i.ref
              ? n(i.ref, r, e)
              : i.refs && i.refs.forEach((t) => n(t, r, e));
          }
        },
        a = (e, t) => {
          t.shouldUseNativeValidation && s(e, t);
          let r = {};
          for (let n in e) {
            let s = (0, i.Jt)(t.fields, n),
              a = Object.assign(e[n] || {}, { ref: s && s.ref });
            if (o(t.names || Object.keys(e), n)) {
              let e = Object.assign({}, (0, i.Jt)(r, n));
              (0, i.hZ)(e, "root", a), (0, i.hZ)(r, n, e);
            } else (0, i.hZ)(r, n, a);
          }
          return r;
        },
        o = (e, t) => e.some((e) => e.startsWith(t + "."));
      function l(e, t, r) {
        return (
          void 0 === t && (t = {}),
          void 0 === r && (r = {}),
          function (n, o, l) {
            try {
              return Promise.resolve(
                (function (i, a) {
                  try {
                    var u =
                      (t.context,
                      Promise.resolve(
                        e["sync" === r.mode ? "validateSync" : "validate"](
                          n,
                          Object.assign({ abortEarly: !1 }, t, { context: o })
                        )
                      ).then(function (e) {
                        return (
                          l.shouldUseNativeValidation && s({}, l),
                          { values: r.raw ? n : e, errors: {} }
                        );
                      }));
                  } catch (e) {
                    return a(e);
                  }
                  return u && u.then ? u.then(void 0, a) : u;
                })(0, function (e) {
                  var t;
                  if (!e.inner) throw e;
                  return {
                    values: {},
                    errors: a(
                      ((t =
                        !l.shouldUseNativeValidation &&
                        "all" === l.criteriaMode),
                      (e.inner || []).reduce(function (e, r) {
                        if (
                          (e[r.path] ||
                            (e[r.path] = { message: r.message, type: r.type }),
                          t)
                        ) {
                          var n = e[r.path].types,
                            s = n && n[r.type];
                          e[r.path] = (0, i.Gb)(
                            r.path,
                            t,
                            e,
                            r.type,
                            s ? [].concat(s, r.message) : r.message
                          );
                        }
                        return e;
                      }, {})),
                      l
                    ),
                  };
                })
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }
        );
      }
    },
    33760: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => r5,
        In: () => r1,
        q7: () => r9,
        p4: () => r6,
        ZL: () => r2,
        bL: () => rQ,
        l9: () => rJ,
        WT: () => r0,
        LM: () => r3,
      });
      var i,
        n,
        s,
        a = r(12115),
        o = r.t(a, 2),
        l = r(47650);
      function u(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
      function d(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (i) {
          if ((e?.(i), !1 === r || !i.defaultPrevented)) return t?.(i);
        };
      }
      var c = r(95155);
      function h(e, t = []) {
        let r = [],
          i = () => {
            let t = r.map((e) => a.createContext(e));
            return function (r) {
              let i = r?.[e] || t;
              return a.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: i } }),
                [r, i]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let n = a.createContext(i),
                s = r.length;
              r = [...r, i];
              let o = (t) => {
                let { scope: r, children: i, ...o } = t,
                  l = r?.[e]?.[s] || n,
                  u = a.useMemo(() => o, Object.values(o));
                return (0, c.jsx)(l.Provider, { value: u, children: i });
              };
              return (
                (o.displayName = t + "Provider"),
                [
                  o,
                  function (r, o) {
                    let l = o?.[e]?.[s] || n,
                      u = a.useContext(l);
                    if (u) return u;
                    if (void 0 !== i) return i;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let i = r.reduce((t, { useScope: r, scopeName: i }) => {
                    let n = r(e)[`__scope${i}`];
                    return { ...t, ...n };
                  }, {});
                  return a.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: i }),
                    [i]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(i, ...t),
          ]
        );
      }
      function p(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function f(...e) {
        return (t) => {
          let r = !1,
            i = e.map((e) => {
              let i = p(e, t);
              return r || "function" != typeof i || (r = !0), i;
            });
          if (r)
            return () => {
              for (let t = 0; t < i.length; t++) {
                let r = i[t];
                "function" == typeof r ? r() : p(e[t], null);
              }
            };
        };
      }
      function m(...e) {
        return a.useCallback(f(...e), e);
      }
      var v = a.forwardRef((e, t) => {
        let { children: r, ...i } = e,
          n = a.Children.toArray(r),
          s = n.find(b);
        if (s) {
          let e = s.props.children,
            r = n.map((t) =>
              t !== s
                ? t
                : a.Children.count(e) > 1
                ? a.Children.only(null)
                : a.isValidElement(e)
                ? e.props.children
                : null
            );
          return (0, c.jsx)(g, {
            ...i,
            ref: t,
            children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
          });
        }
        return (0, c.jsx)(g, { ...i, ref: t, children: r });
      });
      v.displayName = "Slot";
      var g = a.forwardRef((e, t) => {
        let { children: r, ...i } = e;
        if (a.isValidElement(r)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r
              ? e.ref
              : (r =
                  (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning)
              ? e.props.ref
              : e.props.ref || e.ref;
          })(r);
          return a.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let i in t) {
                let n = e[i],
                  s = t[i];
                /^on[A-Z]/.test(i)
                  ? n && s
                    ? (r[i] = (...e) => {
                        s(...e), n(...e);
                      })
                    : n && (r[i] = n)
                  : "style" === i
                  ? (r[i] = { ...n, ...s })
                  : "className" === i &&
                    (r[i] = [n, s].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(i, r.props),
            ref: t ? f(t, e) : e,
          });
        }
        return a.Children.count(r) > 1 ? a.Children.only(null) : null;
      });
      g.displayName = "SlotClone";
      var y = ({ children: e }) => (0, c.jsx)(c.Fragment, { children: e });
      function b(e) {
        return a.isValidElement(e) && e.type === y;
      }
      var w = a.createContext(void 0),
        x = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = a.forwardRef((e, r) => {
            let { asChild: i, ...n } = e,
              s = i ? v : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, c.jsx)(s, { ...n, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function S(e) {
        let t = a.useRef(e);
        return (
          a.useEffect(() => {
            t.current = e;
          }),
          a.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var T = "dismissableLayer.update",
        E = a.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        C = a.forwardRef((e, t) => {
          var r, i;
          let {
              disableOutsidePointerEvents: s = !1,
              onEscapeKeyDown: o,
              onPointerDownOutside: l,
              onFocusOutside: u,
              onInteractOutside: h,
              onDismiss: p,
              ...f
            } = e,
            v = a.useContext(E),
            [g, y] = a.useState(null),
            b =
              null !== (i = null == g ? void 0 : g.ownerDocument) &&
              void 0 !== i
                ? i
                : null === (r = globalThis) || void 0 === r
                ? void 0
                : r.document,
            [, w] = a.useState({}),
            C = m(t, (e) => y(e)),
            k = Array.from(v.layers),
            [M] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = k.indexOf(M),
            _ = g ? k.indexOf(g) : -1,
            D = v.layersWithOutsidePointerEventsDisabled.size > 0,
            j = _ >= O,
            L = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                i = S(e),
                n = a.useRef(!1),
                s = a.useRef(() => {});
              return (
                a.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let t = function () {
                            A("dismissableLayer.pointerDownOutside", i, n, {
                              discrete: !0,
                            });
                          },
                          n = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (r.removeEventListener("click", s.current),
                            (s.current = t),
                            r.addEventListener("click", s.current, {
                              once: !0,
                            }))
                          : t();
                      } else r.removeEventListener("click", s.current);
                      n.current = !1;
                    },
                    t = window.setTimeout(() => {
                      r.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      r.removeEventListener("pointerdown", e),
                      r.removeEventListener("click", s.current);
                  };
                }, [r, i]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...v.branches].some((e) => e.contains(t));
              !j ||
                r ||
                (null == l || l(e),
                null == h || h(e),
                e.defaultPrevented || null == p || p());
            }, b),
            F = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                i = S(e),
                n = a.useRef(!1);
              return (
                a.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      A(
                        "dismissableLayer.focusOutside",
                        i,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    r.addEventListener("focusin", e),
                    () => r.removeEventListener("focusin", e)
                  );
                }, [r, i]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...v.branches].some((e) => e.contains(t)) ||
                (null == u || u(e),
                null == h || h(e),
                e.defaultPrevented || null == p || p());
            }, b);
          return (
            !(function (e, t = globalThis?.document) {
              let r = S(e);
              a.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              _ !== v.layers.size - 1 ||
                (null == o || o(e),
                !e.defaultPrevented && p && (e.preventDefault(), p()));
            }, b),
            a.useEffect(() => {
              if (g)
                return (
                  s &&
                    (0 === v.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = b.body.style.pointerEvents),
                      (b.body.style.pointerEvents = "none")),
                    v.layersWithOutsidePointerEventsDisabled.add(g)),
                  v.layers.add(g),
                  P(),
                  () => {
                    s &&
                      1 === v.layersWithOutsidePointerEventsDisabled.size &&
                      (b.body.style.pointerEvents = n);
                  }
                );
            }, [g, b, s, v]),
            a.useEffect(
              () => () => {
                g &&
                  (v.layers.delete(g),
                  v.layersWithOutsidePointerEventsDisabled.delete(g),
                  P());
              },
              [g, v]
            ),
            a.useEffect(() => {
              let e = () => w({});
              return (
                document.addEventListener(T, e),
                () => document.removeEventListener(T, e)
              );
            }, []),
            (0, c.jsx)(x.div, {
              ...f,
              ref: C,
              style: {
                pointerEvents: D ? (j ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: d(e.onFocusCapture, F.onFocusCapture),
              onBlurCapture: d(e.onBlurCapture, F.onBlurCapture),
              onPointerDownCapture: d(
                e.onPointerDownCapture,
                L.onPointerDownCapture
              ),
            })
          );
        });
      function P() {
        let e = new CustomEvent(T);
        document.dispatchEvent(e);
      }
      function A(e, t, r, i) {
        let { discrete: n } = i,
          s = r.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        (t && s.addEventListener(e, t, { once: !0 }), n)
          ? s && l.flushSync(() => s.dispatchEvent(a))
          : s.dispatchEvent(a);
      }
      (C.displayName = "DismissableLayer"),
        (a.forwardRef((e, t) => {
          let r = a.useContext(E),
            i = a.useRef(null),
            n = m(t, i);
          return (
            a.useEffect(() => {
              let e = i.current;
              if (e)
                return (
                  r.branches.add(e),
                  () => {
                    r.branches.delete(e);
                  }
                );
            }, [r.branches]),
            (0, c.jsx)(x.div, { ...e, ref: n })
          );
        }).displayName = "DismissableLayerBranch");
      var k = 0;
      function M() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var O = "focusScope.autoFocusOnMount",
        _ = "focusScope.autoFocusOnUnmount",
        D = { bubbles: !1, cancelable: !0 },
        j = a.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: i = !1,
              onMountAutoFocus: n,
              onUnmountAutoFocus: s,
              ...o
            } = e,
            [l, u] = a.useState(null),
            d = S(n),
            h = S(s),
            p = a.useRef(null),
            f = m(t, (e) => u(e)),
            v = a.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          a.useEffect(() => {
            if (i) {
              let e = function (e) {
                  if (v.paused || !l) return;
                  let t = e.target;
                  l.contains(t)
                    ? (p.current = t)
                    : V(p.current, { select: !0 });
                },
                t = function (e) {
                  if (v.paused || !l) return;
                  let t = e.relatedTarget;
                  null === t || l.contains(t) || V(p.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && V(l);
              });
              return (
                l && r.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [i, l, v.paused]),
            a.useEffect(() => {
              if (l) {
                R.add(v);
                let e = document.activeElement;
                if (!l.contains(e)) {
                  let t = new CustomEvent(O, D);
                  l.addEventListener(O, d),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = document.activeElement;
                        for (let i of e)
                          if (
                            (V(i, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        L(l).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && V(l));
                }
                return () => {
                  l.removeEventListener(O, d),
                    setTimeout(() => {
                      let t = new CustomEvent(_, D);
                      l.addEventListener(_, h),
                        l.dispatchEvent(t),
                        t.defaultPrevented ||
                          V(null != e ? e : document.body, { select: !0 }),
                        l.removeEventListener(_, h),
                        R.remove(v);
                    }, 0);
                };
              }
            }, [l, d, h, v]);
          let g = a.useCallback(
            (e) => {
              if ((!r && !i) || v.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = document.activeElement;
              if (t && n) {
                let t = e.currentTarget,
                  [i, s] = (function (e) {
                    let t = L(e);
                    return [F(t, e), F(t.reverse(), e)];
                  })(t);
                i && s
                  ? e.shiftKey || n !== s
                    ? e.shiftKey &&
                      n === i &&
                      (e.preventDefault(), r && V(s, { select: !0 }))
                    : (e.preventDefault(), r && V(i, { select: !0 }))
                  : n === t && e.preventDefault();
              }
            },
            [r, i, v.paused]
          );
          return (0, c.jsx)(x.div, {
            tabIndex: -1,
            ...o,
            ref: f,
            onKeyDown: g,
          });
        });
      function L(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function F(e, t) {
        for (let r of e)
          if (
            !(function (e, t) {
              let { upTo: r } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === r || e !== r); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function V(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var r;
          let i = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== i &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      j.displayName = "FocusScope";
      var R = (function () {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && (null == r || r.pause()), (e = I(e, t)).unshift(t);
          },
          remove(t) {
            var r;
            null === (r = (e = I(e, t))[0]) || void 0 === r || r.resume();
          },
        };
      })();
      function I(e, t) {
        let r = [...e],
          i = r.indexOf(t);
        return -1 !== i && r.splice(i, 1), r;
      }
      var N = globalThis?.document ? a.useLayoutEffect : () => {},
        B = o["useId".toString()] || (() => void 0),
        $ = 0;
      function z(e) {
        let [t, r] = a.useState(B());
        return (
          N(() => {
            e || r((e) => e ?? String($++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      let H = ["top", "right", "bottom", "left"],
        W = Math.min,
        U = Math.max,
        Y = Math.round,
        q = Math.floor,
        G = (e) => ({ x: e, y: e }),
        X = { left: "right", right: "left", bottom: "top", top: "bottom" },
        Z = { start: "end", end: "start" };
      function K(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function Q(e) {
        return e.split("-")[0];
      }
      function J(e) {
        return e.split("-")[1];
      }
      function ee(e) {
        return "x" === e ? "y" : "x";
      }
      function et(e) {
        return "y" === e ? "height" : "width";
      }
      function er(e) {
        return ["top", "bottom"].includes(Q(e)) ? "y" : "x";
      }
      function ei(e) {
        return e.replace(/start|end/g, (e) => Z[e]);
      }
      function en(e) {
        return e.replace(/left|right|bottom|top/g, (e) => X[e]);
      }
      function es(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function ea(e) {
        let { x: t, y: r, width: i, height: n } = e;
        return {
          width: i,
          height: n,
          top: r,
          left: t,
          right: t + i,
          bottom: r + n,
          x: t,
          y: r,
        };
      }
      function eo(e, t, r) {
        let i,
          { reference: n, floating: s } = e,
          a = er(t),
          o = ee(er(t)),
          l = et(o),
          u = Q(t),
          d = "y" === a,
          c = n.x + n.width / 2 - s.width / 2,
          h = n.y + n.height / 2 - s.height / 2,
          p = n[l] / 2 - s[l] / 2;
        switch (u) {
          case "top":
            i = { x: c, y: n.y - s.height };
            break;
          case "bottom":
            i = { x: c, y: n.y + n.height };
            break;
          case "right":
            i = { x: n.x + n.width, y: h };
            break;
          case "left":
            i = { x: n.x - s.width, y: h };
            break;
          default:
            i = { x: n.x, y: n.y };
        }
        switch (J(t)) {
          case "start":
            i[o] -= p * (r && d ? -1 : 1);
            break;
          case "end":
            i[o] += p * (r && d ? -1 : 1);
        }
        return i;
      }
      let el = async (e, t, r) => {
        let {
            placement: i = "bottom",
            strategy: n = "absolute",
            middleware: s = [],
            platform: a,
          } = r,
          o = s.filter(Boolean),
          l = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          u = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: n,
          }),
          { x: d, y: c } = eo(u, i, l),
          h = i,
          p = {},
          f = 0;
        for (let r = 0; r < o.length; r++) {
          let { name: s, fn: m } = o[r],
            {
              x: v,
              y: g,
              data: y,
              reset: b,
            } = await m({
              x: d,
              y: c,
              initialPlacement: i,
              placement: h,
              strategy: n,
              middlewareData: p,
              rects: u,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (d = null != v ? v : d),
            (c = null != g ? g : c),
            (p = { ...p, [s]: { ...p[s], ...y } }),
            b &&
              f <= 50 &&
              (f++,
              "object" == typeof b &&
                (b.placement && (h = b.placement),
                b.rects &&
                  (u =
                    !0 === b.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: n,
                        })
                      : b.rects),
                ({ x: d, y: c } = eo(u, h, l))),
              (r = -1));
        }
        return { x: d, y: c, placement: h, strategy: n, middlewareData: p };
      };
      async function eu(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: i, y: n, platform: s, rects: a, elements: o, strategy: l } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: c = "floating",
            altBoundary: h = !1,
            padding: p = 0,
          } = K(t, e),
          f = es(p),
          m = o[h ? ("floating" === c ? "reference" : "floating") : c],
          v = ea(
            await s.getClippingRect({
              element:
                null ==
                  (r = await (null == s.isElement ? void 0 : s.isElement(m))) ||
                r
                  ? m
                  : m.contextElement ||
                    (await (null == s.getDocumentElement
                      ? void 0
                      : s.getDocumentElement(o.floating))),
              boundary: u,
              rootBoundary: d,
              strategy: l,
            })
          ),
          g =
            "floating" === c
              ? {
                  x: i,
                  y: n,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          y = await (null == s.getOffsetParent
            ? void 0
            : s.getOffsetParent(o.floating)),
          b = ((await (null == s.isElement ? void 0 : s.isElement(y))) &&
            (await (null == s.getScale ? void 0 : s.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          w = ea(
            s.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: o,
                  rect: g,
                  offsetParent: y,
                  strategy: l,
                })
              : g
          );
        return {
          top: (v.top - w.top + f.top) / b.y,
          bottom: (w.bottom - v.bottom + f.bottom) / b.y,
          left: (v.left - w.left + f.left) / b.x,
          right: (w.right - v.right + f.right) / b.x,
        };
      }
      function ed(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function ec(e) {
        return H.some((t) => e[t] >= 0);
      }
      async function eh(e, t) {
        let { placement: r, platform: i, elements: n } = e,
          s = await (null == i.isRTL ? void 0 : i.isRTL(n.floating)),
          a = Q(r),
          o = J(r),
          l = "y" === er(r),
          u = ["left", "top"].includes(a) ? -1 : 1,
          d = s && l ? -1 : 1,
          c = K(t, e),
          {
            mainAxis: h,
            crossAxis: p,
            alignmentAxis: f,
          } = "number" == typeof c
            ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: c.mainAxis || 0,
                crossAxis: c.crossAxis || 0,
                alignmentAxis: c.alignmentAxis,
              };
        return (
          o && "number" == typeof f && (p = "end" === o ? -1 * f : f),
          l ? { x: p * d, y: h * u } : { x: h * u, y: p * d }
        );
      }
      function ep() {
        return "undefined" != typeof window;
      }
      function ef(e) {
        return eg(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function em(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function ev(e) {
        var t;
        return null ==
          (t = (eg(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function eg(e) {
        return !!ep() && (e instanceof Node || e instanceof em(e).Node);
      }
      function ey(e) {
        return !!ep() && (e instanceof Element || e instanceof em(e).Element);
      }
      function eb(e) {
        return (
          !!ep() && (e instanceof HTMLElement || e instanceof em(e).HTMLElement)
        );
      }
      function ew(e) {
        return (
          !!ep() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof em(e).ShadowRoot)
        );
      }
      function ex(e) {
        let { overflow: t, overflowX: r, overflowY: i, display: n } = eP(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + i + r) &&
          !["inline", "contents"].includes(n)
        );
      }
      function eS(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function eT(e) {
        let t = eE(),
          r = ey(e) ? eP(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!r[e] && "none" !== r[e]
          ) ||
          (!!r.containerType && "normal" !== r.containerType) ||
          (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!t && !!r.filter && "none" !== r.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (r.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (r.contain || "").includes(e)
          )
        );
      }
      function eE() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function eC(e) {
        return ["html", "body", "#document"].includes(ef(e));
      }
      function eP(e) {
        return em(e).getComputedStyle(e);
      }
      function eA(e) {
        return ey(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function ek(e) {
        if ("html" === ef(e)) return e;
        let t = e.assignedSlot || e.parentNode || (ew(e) && e.host) || ev(e);
        return ew(t) ? t.host : t;
      }
      function eM(e, t, r) {
        var i;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        let n = (function e(t) {
            let r = ek(t);
            return eC(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eb(r) && ex(r)
              ? r
              : e(r);
          })(e),
          s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
          a = em(n);
        if (s) {
          let e = eO(a);
          return t.concat(
            a,
            a.visualViewport || [],
            ex(n) ? n : [],
            e && r ? eM(e) : []
          );
        }
        return t.concat(n, eM(n, [], r));
      }
      function eO(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function e_(e) {
        let t = eP(e),
          r = parseFloat(t.width) || 0,
          i = parseFloat(t.height) || 0,
          n = eb(e),
          s = n ? e.offsetWidth : r,
          a = n ? e.offsetHeight : i,
          o = Y(r) !== s || Y(i) !== a;
        return o && ((r = s), (i = a)), { width: r, height: i, $: o };
      }
      function eD(e) {
        return ey(e) ? e : e.contextElement;
      }
      function ej(e) {
        let t = eD(e);
        if (!eb(t)) return G(1);
        let r = t.getBoundingClientRect(),
          { width: i, height: n, $: s } = e_(t),
          a = (s ? Y(r.width) : r.width) / i,
          o = (s ? Y(r.height) : r.height) / n;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (o && Number.isFinite(o)) || (o = 1),
          { x: a, y: o }
        );
      }
      let eL = G(0);
      function eF(e) {
        let t = em(e);
        return eE() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eL;
      }
      function eV(e, t, r, i) {
        var n;
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let s = e.getBoundingClientRect(),
          a = eD(e),
          o = G(1);
        t && (i ? ey(i) && (o = ej(i)) : (o = ej(e)));
        let l = (void 0 === (n = r) && (n = !1), i && (!n || i === em(a)) && n)
            ? eF(a)
            : G(0),
          u = (s.left + l.x) / o.x,
          d = (s.top + l.y) / o.y,
          c = s.width / o.x,
          h = s.height / o.y;
        if (a) {
          let e = em(a),
            t = i && ey(i) ? em(i) : i,
            r = e,
            n = eO(r);
          for (; n && i && t !== r; ) {
            let e = ej(n),
              t = n.getBoundingClientRect(),
              i = eP(n),
              s = t.left + (n.clientLeft + parseFloat(i.paddingLeft)) * e.x,
              a = t.top + (n.clientTop + parseFloat(i.paddingTop)) * e.y;
            (u *= e.x),
              (d *= e.y),
              (c *= e.x),
              (h *= e.y),
              (u += s),
              (d += a),
              (n = eO((r = em(n))));
          }
        }
        return ea({ width: c, height: h, x: u, y: d });
      }
      function eR(e, t) {
        let r = eA(e).scrollLeft;
        return t ? t.left + r : eV(ev(e)).left + r;
      }
      function eI(e, t, r) {
        void 0 === r && (r = !1);
        let i = e.getBoundingClientRect();
        return {
          x: i.left + t.scrollLeft - (r ? 0 : eR(e, i)),
          y: i.top + t.scrollTop,
        };
      }
      function eN(e, t, r) {
        let i;
        if ("viewport" === t)
          i = (function (e, t) {
            let r = em(e),
              i = ev(e),
              n = r.visualViewport,
              s = i.clientWidth,
              a = i.clientHeight,
              o = 0,
              l = 0;
            if (n) {
              (s = n.width), (a = n.height);
              let e = eE();
              (!e || (e && "fixed" === t)) &&
                ((o = n.offsetLeft), (l = n.offsetTop));
            }
            return { width: s, height: a, x: o, y: l };
          })(e, r);
        else if ("document" === t)
          i = (function (e) {
            let t = ev(e),
              r = eA(e),
              i = e.ownerDocument.body,
              n = U(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
              s = U(
                t.scrollHeight,
                t.clientHeight,
                i.scrollHeight,
                i.clientHeight
              ),
              a = -r.scrollLeft + eR(e),
              o = -r.scrollTop;
            return (
              "rtl" === eP(i).direction &&
                (a += U(t.clientWidth, i.clientWidth) - n),
              { width: n, height: s, x: a, y: o }
            );
          })(ev(e));
        else if (ey(t))
          i = (function (e, t) {
            let r = eV(e, !0, "fixed" === t),
              i = r.top + e.clientTop,
              n = r.left + e.clientLeft,
              s = eb(e) ? ej(e) : G(1),
              a = e.clientWidth * s.x;
            return {
              width: a,
              height: e.clientHeight * s.y,
              x: n * s.x,
              y: i * s.y,
            };
          })(t, r);
        else {
          let r = eF(e);
          i = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
        }
        return ea(i);
      }
      function eB(e) {
        return "static" === eP(e).position;
      }
      function e$(e, t) {
        if (!eb(e) || "fixed" === eP(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return ev(e) === r && (r = r.ownerDocument.body), r;
      }
      function ez(e, t) {
        let r = em(e);
        if (eS(e)) return r;
        if (!eb(e)) {
          let t = ek(e);
          for (; t && !eC(t); ) {
            if (ey(t) && !eB(t)) return t;
            t = ek(t);
          }
          return r;
        }
        let i = e$(e, t);
        for (; i && ["table", "td", "th"].includes(ef(i)) && eB(i); )
          i = e$(i, t);
        return i && eC(i) && eB(i) && !eT(i)
          ? r
          : i ||
              (function (e) {
                let t = ek(e);
                for (; eb(t) && !eC(t); ) {
                  if (eT(t)) return t;
                  if (eS(t)) break;
                  t = ek(t);
                }
                return null;
              })(e) ||
              r;
      }
      let eH = async function (e) {
          let t = this.getOffsetParent || ez,
            r = this.getDimensions,
            i = await r(e.floating);
          return {
            reference: (function (e, t, r) {
              let i = eb(t),
                n = ev(t),
                s = "fixed" === r,
                a = eV(e, !0, s, t),
                o = { scrollLeft: 0, scrollTop: 0 },
                l = G(0);
              if (i || (!i && !s)) {
                if ((("body" !== ef(t) || ex(n)) && (o = eA(t)), i)) {
                  let e = eV(t, !0, s, t);
                  (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
                } else n && (l.x = eR(n));
              }
              let u = !n || i || s ? G(0) : eI(n, o);
              return {
                x: a.left + o.scrollLeft - l.x - u.x,
                y: a.top + o.scrollTop - l.y - u.y,
                width: a.width,
                height: a.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
          };
        },
        eW = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: r, offsetParent: i, strategy: n } = e,
              s = "fixed" === n,
              a = ev(i),
              o = !!t && eS(t.floating);
            if (i === a || (o && s)) return r;
            let l = { scrollLeft: 0, scrollTop: 0 },
              u = G(1),
              d = G(0),
              c = eb(i);
            if (
              (c || (!c && !s)) &&
              (("body" !== ef(i) || ex(a)) && (l = eA(i)), eb(i))
            ) {
              let e = eV(i);
              (u = ej(i)),
                (d.x = e.x + i.clientLeft),
                (d.y = e.y + i.clientTop);
            }
            let h = !a || c || s ? G(0) : eI(a, l, !0);
            return {
              width: r.width * u.x,
              height: r.height * u.y,
              x: r.x * u.x - l.scrollLeft * u.x + d.x + h.x,
              y: r.y * u.y - l.scrollTop * u.y + d.y + h.y,
            };
          },
          getDocumentElement: ev,
          getClippingRect: function (e) {
            let { element: t, boundary: r, rootBoundary: i, strategy: n } = e,
              s = [
                ...("clippingAncestors" === r
                  ? eS(t)
                    ? []
                    : (function (e, t) {
                        let r = t.get(e);
                        if (r) return r;
                        let i = eM(e, [], !1).filter(
                            (e) => ey(e) && "body" !== ef(e)
                          ),
                          n = null,
                          s = "fixed" === eP(e).position,
                          a = s ? ek(e) : e;
                        for (; ey(a) && !eC(a); ) {
                          let t = eP(a),
                            r = eT(a);
                          r || "fixed" !== t.position || (n = null),
                            (
                              s
                                ? !r && !n
                                : (!r &&
                                    "static" === t.position &&
                                    !!n &&
                                    ["absolute", "fixed"].includes(
                                      n.position
                                    )) ||
                                  (ex(a) &&
                                    !r &&
                                    (function e(t, r) {
                                      let i = ek(t);
                                      return (
                                        !(i === r || !ey(i) || eC(i)) &&
                                        ("fixed" === eP(i).position || e(i, r))
                                      );
                                    })(e, a))
                            )
                              ? (i = i.filter((e) => e !== a))
                              : (n = t),
                            (a = ek(a));
                        }
                        return t.set(e, i), i;
                      })(t, this._c)
                  : [].concat(r)),
                i,
              ],
              a = s[0],
              o = s.reduce((e, r) => {
                let i = eN(t, r, n);
                return (
                  (e.top = U(i.top, e.top)),
                  (e.right = W(i.right, e.right)),
                  (e.bottom = W(i.bottom, e.bottom)),
                  (e.left = U(i.left, e.left)),
                  e
                );
              }, eN(t, a, n));
            return {
              width: o.right - o.left,
              height: o.bottom - o.top,
              x: o.left,
              y: o.top,
            };
          },
          getOffsetParent: ez,
          getElementRects: eH,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: r } = e_(e);
            return { width: t, height: r };
          },
          getScale: ej,
          isElement: ey,
          isRTL: function (e) {
            return "rtl" === eP(e).direction;
          },
        };
      function eU(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let eY = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: r,
                y: i,
                placement: n,
                rects: s,
                platform: a,
                elements: o,
                middlewareData: l,
              } = t,
              { element: u, padding: d = 0 } = K(e, t) || {};
            if (null == u) return {};
            let c = es(d),
              h = { x: r, y: i },
              p = ee(er(n)),
              f = et(p),
              m = await a.getDimensions(u),
              v = "y" === p,
              g = v ? "clientHeight" : "clientWidth",
              y = s.reference[f] + s.reference[p] - h[p] - s.floating[f],
              b = h[p] - s.reference[p],
              w = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(u)),
              x = w ? w[g] : 0;
            (x && (await (null == a.isElement ? void 0 : a.isElement(w)))) ||
              (x = o.floating[g] || s.floating[f]);
            let S = x / 2 - m[f] / 2 - 1,
              T = W(c[v ? "top" : "left"], S),
              E = W(c[v ? "bottom" : "right"], S),
              C = x - m[f] - E,
              P = x / 2 - m[f] / 2 + (y / 2 - b / 2),
              A = U(T, W(P, C)),
              k =
                !l.arrow &&
                null != J(n) &&
                P !== A &&
                s.reference[f] / 2 - (P < T ? T : E) - m[f] / 2 < 0,
              M = k ? (P < T ? P - T : P - C) : 0;
            return {
              [p]: h[p] + M,
              data: {
                [p]: A,
                centerOffset: P - A - M,
                ...(k && { alignmentOffset: M }),
              },
              reset: k,
            };
          },
        }),
        eq = (e, t, r) => {
          let i = new Map(),
            n = { platform: eW, ...r },
            s = { ...n.platform, _c: i };
          return el(e, t, { ...n, platform: s });
        };
      var eG = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect;
      function eX(e, t) {
        let r, i, n;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) !== t.length) return !1;
            for (i = r; 0 != i--; ) if (!eX(e[i], t[i])) return !1;
            return !0;
          }
          if ((r = (n = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (i = r; 0 != i--; )
            if (!{}.hasOwnProperty.call(t, n[i])) return !1;
          for (i = r; 0 != i--; ) {
            let r = n[i];
            if (("_owner" !== r || !e.$$typeof) && !eX(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eZ(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eK(e, t) {
        let r = eZ(e);
        return Math.round(t * r) / r;
      }
      function eQ(e) {
        let t = a.useRef(e);
        return (
          eG(() => {
            t.current = e;
          }),
          t
        );
      }
      let eJ = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: r, padding: i } = "function" == typeof e ? e(t) : e;
            return r && {}.hasOwnProperty.call(r, "current")
              ? null != r.current
                ? eY({ element: r.current, padding: i }).fn(t)
                : {}
              : r
              ? eY({ element: r, padding: i }).fn(t)
              : {};
          },
        }),
        e0 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var r, i;
                  let { x: n, y: s, placement: a, middlewareData: o } = t,
                    l = await eh(t, e);
                  return a ===
                    (null == (r = o.offset) ? void 0 : r.placement) &&
                    null != (i = o.arrow) &&
                    i.alignmentOffset
                    ? {}
                    : { x: n + l.x, y: s + l.y, data: { ...l, placement: a } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e1 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: r, y: i, placement: n } = t,
                    {
                      mainAxis: s = !0,
                      crossAxis: a = !1,
                      limiter: o = {
                        fn: (e) => {
                          let { x: t, y: r } = e;
                          return { x: t, y: r };
                        },
                      },
                      ...l
                    } = K(e, t),
                    u = { x: r, y: i },
                    d = await eu(t, l),
                    c = er(Q(n)),
                    h = ee(c),
                    p = u[h],
                    f = u[c];
                  if (s) {
                    let e = "y" === h ? "top" : "left",
                      t = "y" === h ? "bottom" : "right",
                      r = p + d[e],
                      i = p - d[t];
                    p = U(r, W(p, i));
                  }
                  if (a) {
                    let e = "y" === c ? "top" : "left",
                      t = "y" === c ? "bottom" : "right",
                      r = f + d[e],
                      i = f - d[t];
                    f = U(r, W(f, i));
                  }
                  let m = o.fn({ ...t, [h]: p, [c]: f });
                  return {
                    ...m,
                    data: {
                      x: m.x - r,
                      y: m.y - i,
                      enabled: { [h]: s, [c]: a },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e2 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: r,
                      y: i,
                      placement: n,
                      rects: s,
                      middlewareData: a,
                    } = t,
                    {
                      offset: o = 0,
                      mainAxis: l = !0,
                      crossAxis: u = !0,
                    } = K(e, t),
                    d = { x: r, y: i },
                    c = er(n),
                    h = ee(c),
                    p = d[h],
                    f = d[c],
                    m = K(o, t),
                    v =
                      "number" == typeof m
                        ? { mainAxis: m, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...m };
                  if (l) {
                    let e = "y" === h ? "height" : "width",
                      t = s.reference[h] - s.floating[e] + v.mainAxis,
                      r = s.reference[h] + s.reference[e] - v.mainAxis;
                    p < t ? (p = t) : p > r && (p = r);
                  }
                  if (u) {
                    var g, y;
                    let e = "y" === h ? "width" : "height",
                      t = ["top", "left"].includes(Q(n)),
                      r =
                        s.reference[c] -
                        s.floating[e] +
                        ((t && (null == (g = a.offset) ? void 0 : g[c])) || 0) +
                        (t ? 0 : v.crossAxis),
                      i =
                        s.reference[c] +
                        s.reference[e] +
                        (t
                          ? 0
                          : (null == (y = a.offset) ? void 0 : y[c]) || 0) -
                        (t ? v.crossAxis : 0);
                    f < r ? (f = r) : f > i && (f = i);
                  }
                  return { [h]: p, [c]: f };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e5 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var r, i, n, s, a;
                  let {
                      placement: o,
                      middlewareData: l,
                      rects: u,
                      initialPlacement: d,
                      platform: c,
                      elements: h,
                    } = t,
                    {
                      mainAxis: p = !0,
                      crossAxis: f = !0,
                      fallbackPlacements: m,
                      fallbackStrategy: v = "bestFit",
                      fallbackAxisSideDirection: g = "none",
                      flipAlignment: y = !0,
                      ...b
                    } = K(e, t);
                  if (null != (r = l.arrow) && r.alignmentOffset) return {};
                  let w = Q(o),
                    x = er(d),
                    S = Q(d) === d,
                    T = await (null == c.isRTL ? void 0 : c.isRTL(h.floating)),
                    E =
                      m ||
                      (S || !y
                        ? [en(d)]
                        : (function (e) {
                            let t = en(e);
                            return [ei(e), t, ei(t)];
                          })(d)),
                    C = "none" !== g;
                  !m &&
                    C &&
                    E.push(
                      ...(function (e, t, r, i) {
                        let n = J(e),
                          s = (function (e, t, r) {
                            let i = ["left", "right"],
                              n = ["right", "left"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (r) return t ? n : i;
                                return t ? i : n;
                              case "left":
                              case "right":
                                return t
                                  ? ["top", "bottom"]
                                  : ["bottom", "top"];
                              default:
                                return [];
                            }
                          })(Q(e), "start" === r, i);
                        return (
                          n &&
                            ((s = s.map((e) => e + "-" + n)),
                            t && (s = s.concat(s.map(ei)))),
                          s
                        );
                      })(d, y, g, T)
                    );
                  let P = [d, ...E],
                    A = await eu(t, b),
                    k = [],
                    M = (null == (i = l.flip) ? void 0 : i.overflows) || [];
                  if ((p && k.push(A[w]), f)) {
                    let e = (function (e, t, r) {
                      void 0 === r && (r = !1);
                      let i = J(e),
                        n = ee(er(e)),
                        s = et(n),
                        a =
                          "x" === n
                            ? i === (r ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === i
                            ? "bottom"
                            : "top";
                      return (
                        t.reference[s] > t.floating[s] && (a = en(a)),
                        [a, en(a)]
                      );
                    })(o, u, T);
                    k.push(A[e[0]], A[e[1]]);
                  }
                  if (
                    ((M = [...M, { placement: o, overflows: k }]),
                    !k.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (n = l.flip) ? void 0 : n.index) || 0) + 1,
                      t = P[e];
                    if (t)
                      return {
                        data: { index: e, overflows: M },
                        reset: { placement: t },
                      };
                    let r =
                      null ==
                      (s = M.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1]
                      )[0])
                        ? void 0
                        : s.placement;
                    if (!r)
                      switch (v) {
                        case "bestFit": {
                          let e =
                            null ==
                            (a = M.filter((e) => {
                              if (C) {
                                let t = er(e.placement);
                                return t === x || "y" === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : a[0];
                          e && (r = e);
                          break;
                        }
                        case "initialPlacement":
                          r = d;
                      }
                    if (o !== r) return { reset: { placement: r } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e3 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var r, i;
                  let n, s;
                  let { placement: a, rects: o, platform: l, elements: u } = t,
                    { apply: d = () => {}, ...c } = K(e, t),
                    h = await eu(t, c),
                    p = Q(a),
                    f = J(a),
                    m = "y" === er(a),
                    { width: v, height: g } = o.floating;
                  "top" === p || "bottom" === p
                    ? ((n = p),
                      (s =
                        f ===
                        ((await (null == l.isRTL
                          ? void 0
                          : l.isRTL(u.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((s = p), (n = "end" === f ? "top" : "bottom"));
                  let y = g - h.top - h.bottom,
                    b = v - h.left - h.right,
                    w = W(g - h[n], y),
                    x = W(v - h[s], b),
                    S = !t.middlewareData.shift,
                    T = w,
                    E = x;
                  if (
                    (null != (r = t.middlewareData.shift) &&
                      r.enabled.x &&
                      (E = b),
                    null != (i = t.middlewareData.shift) &&
                      i.enabled.y &&
                      (T = y),
                    S && !f)
                  ) {
                    let e = U(h.left, 0),
                      t = U(h.right, 0),
                      r = U(h.top, 0),
                      i = U(h.bottom, 0);
                    m
                      ? (E =
                          v -
                          2 * (0 !== e || 0 !== t ? e + t : U(h.left, h.right)))
                      : (T =
                          g -
                          2 *
                            (0 !== r || 0 !== i ? r + i : U(h.top, h.bottom)));
                  }
                  await d({ ...t, availableWidth: E, availableHeight: T });
                  let C = await l.getDimensions(u.floating);
                  return v !== C.width || g !== C.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e9 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: r } = t,
                    { strategy: i = "referenceHidden", ...n } = K(e, t);
                  switch (i) {
                    case "referenceHidden": {
                      let e = ed(
                        await eu(t, { ...n, elementContext: "reference" }),
                        r.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: ec(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = ed(
                        await eu(t, { ...n, altBoundary: !0 }),
                        r.floating
                      );
                      return { data: { escapedOffsets: e, escaped: ec(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e6 = (e, t) => ({ ...eJ(e), options: [e, t] });
      var e8 = a.forwardRef((e, t) => {
        let { children: r, width: i = 10, height: n = 5, ...s } = e;
        return (0, c.jsx)(x.svg, {
          ...s,
          ref: t,
          width: i,
          height: n,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? r
            : (0, c.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      e8.displayName = "Arrow";
      var e4 = "Popper",
        [e7, te] = h(e4),
        [tt, tr] = e7(e4),
        ti = (e) => {
          let { __scopePopper: t, children: r } = e,
            [i, n] = a.useState(null);
          return (0, c.jsx)(tt, {
            scope: t,
            anchor: i,
            onAnchorChange: n,
            children: r,
          });
        };
      ti.displayName = e4;
      var tn = "PopperAnchor",
        ts = a.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: i, ...n } = e,
            s = tr(tn, r),
            o = a.useRef(null),
            l = m(t, o);
          return (
            a.useEffect(() => {
              s.onAnchorChange((null == i ? void 0 : i.current) || o.current);
            }),
            i ? null : (0, c.jsx)(x.div, { ...n, ref: l })
          );
        });
      ts.displayName = tn;
      var ta = "PopperContent",
        [to, tl] = e7(ta),
        tu = a.forwardRef((e, t) => {
          var r, i, n, s, o, u, d, h;
          let {
              __scopePopper: p,
              side: f = "bottom",
              sideOffset: v = 0,
              align: g = "center",
              alignOffset: y = 0,
              arrowPadding: b = 0,
              avoidCollisions: w = !0,
              collisionBoundary: T = [],
              collisionPadding: E = 0,
              sticky: C = "partial",
              hideWhenDetached: P = !1,
              updatePositionStrategy: A = "optimized",
              onPlaced: k,
              ...M
            } = e,
            O = tr(ta, p),
            [_, D] = a.useState(null),
            j = m(t, (e) => D(e)),
            [L, F] = a.useState(null),
            V = (function (e) {
              let [t, r] = a.useState(void 0);
              return (
                N(() => {
                  if (e) {
                    r({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let i, n;
                      if (!Array.isArray(t) || !t.length) return;
                      let s = t[0];
                      if ("borderBoxSize" in s) {
                        let e = s.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (i = t.inlineSize), (n = t.blockSize);
                      } else (i = e.offsetWidth), (n = e.offsetHeight);
                      r({ width: i, height: n });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  r(void 0);
                }, [e]),
                t
              );
            })(L),
            R =
              null !== (d = null == V ? void 0 : V.width) && void 0 !== d
                ? d
                : 0,
            I =
              null !== (h = null == V ? void 0 : V.height) && void 0 !== h
                ? h
                : 0,
            B =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            $ = Array.isArray(T) ? T : [T],
            z = $.length > 0,
            H = { padding: B, boundary: $.filter(tp), altBoundary: z },
            {
              refs: Y,
              floatingStyles: G,
              placement: X,
              isPositioned: Z,
              middlewareData: K,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: r = "absolute",
                  middleware: i = [],
                  platform: n,
                  elements: { reference: s, floating: o } = {},
                  transform: u = !0,
                  whileElementsMounted: d,
                  open: c,
                } = e,
                [h, p] = a.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [f, m] = a.useState(i);
              eX(f, i) || m(i);
              let [v, g] = a.useState(null),
                [y, b] = a.useState(null),
                w = a.useCallback((e) => {
                  e !== E.current && ((E.current = e), g(e));
                }, []),
                x = a.useCallback((e) => {
                  e !== C.current && ((C.current = e), b(e));
                }, []),
                S = s || v,
                T = o || y,
                E = a.useRef(null),
                C = a.useRef(null),
                P = a.useRef(h),
                A = null != d,
                k = eQ(d),
                M = eQ(n),
                O = eQ(c),
                _ = a.useCallback(() => {
                  if (!E.current || !C.current) return;
                  let e = { placement: t, strategy: r, middleware: f };
                  M.current && (e.platform = M.current),
                    eq(E.current, C.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== O.current };
                      D.current &&
                        !eX(P.current, t) &&
                        ((P.current = t),
                        l.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [f, t, r, M, O]);
              eG(() => {
                !1 === c &&
                  P.current.isPositioned &&
                  ((P.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let D = a.useRef(!1);
              eG(
                () => (
                  (D.current = !0),
                  () => {
                    D.current = !1;
                  }
                ),
                []
              ),
                eG(() => {
                  if ((S && (E.current = S), T && (C.current = T), S && T)) {
                    if (k.current) return k.current(S, T, _);
                    _();
                  }
                }, [S, T, _, k, A]);
              let j = a.useMemo(
                  () => ({
                    reference: E,
                    floating: C,
                    setReference: w,
                    setFloating: x,
                  }),
                  [w, x]
                ),
                L = a.useMemo(() => ({ reference: S, floating: T }), [S, T]),
                F = a.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!L.floating) return e;
                  let t = eK(L.floating, h.x),
                    i = eK(L.floating, h.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + i + "px)",
                        ...(eZ(L.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: t, top: i };
                }, [r, u, L.floating, h.x, h.y]);
              return a.useMemo(
                () => ({
                  ...h,
                  update: _,
                  refs: j,
                  elements: L,
                  floatingStyles: F,
                }),
                [h, _, j, L, F]
              );
            })({
              strategy: "fixed",
              placement: f + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                return (function (e, t, r, i) {
                  let n;
                  void 0 === i && (i = {});
                  let {
                      ancestorScroll: s = !0,
                      ancestorResize: a = !0,
                      elementResize: o = "function" == typeof ResizeObserver,
                      layoutShift: l = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: u = !1,
                    } = i,
                    d = eD(e),
                    c = s || a ? [...(d ? eM(d) : []), ...eM(t)] : [];
                  c.forEach((e) => {
                    s && e.addEventListener("scroll", r, { passive: !0 }),
                      a && e.addEventListener("resize", r);
                  });
                  let h =
                      d && l
                        ? (function (e, t) {
                            let r,
                              i = null,
                              n = ev(e);
                            function s() {
                              var e;
                              clearTimeout(r),
                                null == (e = i) || e.disconnect(),
                                (i = null);
                            }
                            return (
                              !(function a(o, l) {
                                void 0 === o && (o = !1),
                                  void 0 === l && (l = 1),
                                  s();
                                let u = e.getBoundingClientRect(),
                                  { left: d, top: c, width: h, height: p } = u;
                                if ((o || t(), !h || !p)) return;
                                let f = q(c),
                                  m = q(n.clientWidth - (d + h)),
                                  v = {
                                    rootMargin:
                                      -f +
                                      "px " +
                                      -m +
                                      "px " +
                                      -q(n.clientHeight - (c + p)) +
                                      "px " +
                                      -q(d) +
                                      "px",
                                    threshold: U(0, W(1, l)) || 1,
                                  },
                                  g = !0;
                                function y(t) {
                                  let i = t[0].intersectionRatio;
                                  if (i !== l) {
                                    if (!g) return a();
                                    i
                                      ? a(!1, i)
                                      : (r = setTimeout(() => {
                                          a(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== i ||
                                    eU(u, e.getBoundingClientRect()) ||
                                    a(),
                                    (g = !1);
                                }
                                try {
                                  i = new IntersectionObserver(y, {
                                    ...v,
                                    root: n.ownerDocument,
                                  });
                                } catch (e) {
                                  i = new IntersectionObserver(y, v);
                                }
                                i.observe(e);
                              })(!0),
                              s
                            );
                          })(d, r)
                        : null,
                    p = -1,
                    f = null;
                  o &&
                    ((f = new ResizeObserver((e) => {
                      let [i] = e;
                      i &&
                        i.target === d &&
                        f &&
                        (f.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = f) || e.observe(t);
                        }))),
                        r();
                    })),
                    d && !u && f.observe(d),
                    f.observe(t));
                  let m = u ? eV(e) : null;
                  return (
                    u &&
                      (function t() {
                        let i = eV(e);
                        m && !eU(m, i) && r(),
                          (m = i),
                          (n = requestAnimationFrame(t));
                      })(),
                    r(),
                    () => {
                      var e;
                      c.forEach((e) => {
                        s && e.removeEventListener("scroll", r),
                          a && e.removeEventListener("resize", r);
                      }),
                        null == h || h(),
                        null == (e = f) || e.disconnect(),
                        (f = null),
                        u && cancelAnimationFrame(n);
                    }
                  );
                })(...t, { animationFrame: "always" === A });
              },
              elements: { reference: O.anchor },
              middleware: [
                e0({ mainAxis: v + I, alignmentAxis: y }),
                w &&
                  e1({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === C ? e2() : void 0,
                    ...H,
                  }),
                w && e5({ ...H }),
                e3({
                  ...H,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: r,
                        availableWidth: i,
                        availableHeight: n,
                      } = e,
                      { width: s, height: a } = r.reference,
                      o = t.floating.style;
                    o.setProperty(
                      "--radix-popper-available-width",
                      "".concat(i, "px")
                    ),
                      o.setProperty(
                        "--radix-popper-available-height",
                        "".concat(n, "px")
                      ),
                      o.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(s, "px")
                      ),
                      o.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(a, "px")
                      );
                  },
                }),
                L && e6({ element: L, padding: b }),
                tf({ arrowWidth: R, arrowHeight: I }),
                P && e9({ strategy: "referenceHidden", ...H }),
              ],
            }),
            [Q, J] = tm(X),
            ee = S(k);
          N(() => {
            Z && (null == ee || ee());
          }, [Z, ee]);
          let et = null === (r = K.arrow) || void 0 === r ? void 0 : r.x,
            er = null === (i = K.arrow) || void 0 === i ? void 0 : i.y,
            ei =
              (null === (n = K.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            [en, es] = a.useState();
          return (
            N(() => {
              _ && es(window.getComputedStyle(_).zIndex);
            }, [_]),
            (0, c.jsx)("div", {
              ref: Y.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...G,
                transform: Z ? G.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: en,
                "--radix-popper-transform-origin": [
                  null === (s = K.transformOrigin) || void 0 === s
                    ? void 0
                    : s.x,
                  null === (o = K.transformOrigin) || void 0 === o
                    ? void 0
                    : o.y,
                ].join(" "),
                ...((null === (u = K.hide) || void 0 === u
                  ? void 0
                  : u.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, c.jsx)(to, {
                scope: p,
                placedSide: Q,
                onArrowChange: F,
                arrowX: et,
                arrowY: er,
                shouldHideArrow: ei,
                children: (0, c.jsx)(x.div, {
                  "data-side": Q,
                  "data-align": J,
                  ...M,
                  ref: j,
                  style: { ...M.style, animation: Z ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      tu.displayName = ta;
      var td = "PopperArrow",
        tc = { top: "bottom", right: "left", bottom: "top", left: "right" },
        th = a.forwardRef(function (e, t) {
          let { __scopePopper: r, ...i } = e,
            n = tl(td, r),
            s = tc[n.placedSide];
          return (0,
          c.jsx)("span", { ref: n.onArrowChange, style: { position: "absolute", left: n.arrowX, top: n.arrowY, [s]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[n.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[n.placedSide], visibility: n.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(e8, { ...i, ref: t, style: { ...i.style, display: "block" } }) });
        });
      function tp(e) {
        return null !== e;
      }
      th.displayName = td;
      var tf = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var r, i, n, s, a;
          let { placement: o, rects: l, middlewareData: u } = t,
            d =
              (null === (r = u.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            c = d ? 0 : e.arrowWidth,
            h = d ? 0 : e.arrowHeight,
            [p, f] = tm(o),
            m = { start: "0%", center: "50%", end: "100%" }[f],
            v =
              (null !==
                (s = null === (i = u.arrow) || void 0 === i ? void 0 : i.x) &&
              void 0 !== s
                ? s
                : 0) +
              c / 2,
            g =
              (null !==
                (a = null === (n = u.arrow) || void 0 === n ? void 0 : n.y) &&
              void 0 !== a
                ? a
                : 0) +
              h / 2,
            y = "",
            b = "";
          return (
            "bottom" === p
              ? ((y = d ? m : "".concat(v, "px")), (b = "".concat(-h, "px")))
              : "top" === p
              ? ((y = d ? m : "".concat(v, "px")),
                (b = "".concat(l.floating.height + h, "px")))
              : "right" === p
              ? ((y = "".concat(-h, "px")), (b = d ? m : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(l.floating.width + h, "px")),
                (b = d ? m : "".concat(g, "px"))),
            { data: { x: y, y: b } }
          );
        },
      });
      function tm(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      var tv = a.forwardRef((e, t) => {
        var r, i;
        let { container: n, ...s } = e,
          [o, u] = a.useState(!1);
        N(() => u(!0), []);
        let d =
          n ||
          (o &&
            (null === (i = globalThis) || void 0 === i
              ? void 0
              : null === (r = i.document) || void 0 === r
              ? void 0
              : r.body));
        return d
          ? l.createPortal((0, c.jsx)(x.div, { ...s, ref: t }), d)
          : null;
      });
      function tg({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [i, n] = (function ({ defaultProp: e, onChange: t }) {
            let r = a.useState(e),
              [i] = r,
              n = a.useRef(i),
              s = S(t);
            return (
              a.useEffect(() => {
                n.current !== i && (s(i), (n.current = i));
              }, [i, n, s]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          s = void 0 !== e,
          o = s ? e : i,
          l = S(r);
        return [
          o,
          a.useCallback(
            (t) => {
              if (s) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && l(r);
              } else n(t);
            },
            [s, e, n, l]
          ),
        ];
      }
      tv.displayName = "Portal";
      var ty = a.forwardRef((e, t) =>
        (0, c.jsx)(x.span, {
          ...e,
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style,
          },
        })
      );
      ty.displayName = "VisuallyHidden";
      var tb = new WeakMap(),
        tw = new WeakMap(),
        tx = {},
        tS = 0,
        tT = function (e) {
          return e && (e.host || tT(e.parentNode));
        },
        tE = function (e, t, r, i) {
          var n = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = tT(e);
              return r && t.contains(r)
                ? r
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          tx[r] || (tx[r] = new WeakMap());
          var s = tx[r],
            a = [],
            o = new Set(),
            l = new Set(n),
            u = function (e) {
              !e || o.has(e) || (o.add(e), u(e.parentNode));
            };
          n.forEach(u);
          var d = function (e) {
            !e ||
              l.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (o.has(e)) d(e);
                else
                  try {
                    var t = e.getAttribute(i),
                      n = null !== t && "false" !== t,
                      l = (tb.get(e) || 0) + 1,
                      u = (s.get(e) || 0) + 1;
                    tb.set(e, l),
                      s.set(e, u),
                      a.push(e),
                      1 === l && n && tw.set(e, !0),
                      1 === u && e.setAttribute(r, "true"),
                      n || e.setAttribute(i, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            d(t),
            o.clear(),
            tS++,
            function () {
              a.forEach(function (e) {
                var t = tb.get(e) - 1,
                  n = s.get(e) - 1;
                tb.set(e, t),
                  s.set(e, n),
                  t || (tw.has(e) || e.removeAttribute(i), tw.delete(e)),
                  n || e.removeAttribute(r);
              }),
                --tS ||
                  ((tb = new WeakMap()),
                  (tb = new WeakMap()),
                  (tw = new WeakMap()),
                  (tx = {}));
            }
          );
        },
        tC = function (e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var i,
            n = Array.from(Array.isArray(e) ? e : [e]),
            s =
              t ||
              ((i = e),
              "undefined" == typeof document
                ? null
                : (Array.isArray(i) ? i[0] : i).ownerDocument.body);
          return s
            ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))),
              tE(n, s, r, "aria-hidden"))
            : function () {
                return null;
              };
        },
        tP = function () {
          return (tP =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        };
      function tA(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var n = 0, i = Object.getOwnPropertySymbols(e);
            n < i.length;
            n++
          )
            0 > t.indexOf(i[n]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        return r;
      }
      Object.create, Object.create;
      var tk =
          ("function" == typeof SuppressedError && SuppressedError,
          "right-scroll-bar-position"),
        tM = "width-before-scroll-bar";
      function tO(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var t_ = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        tD = new WeakMap();
      function tj(e) {
        return e;
      }
      var tL = (function (e) {
          void 0 === e && (e = {});
          var t,
            r,
            i,
            n =
              (void 0 === t && (t = tj),
              (r = []),
              (i = !1),
              {
                read: function () {
                  if (i)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var n = t(e, i);
                  return (
                    r.push(n),
                    function () {
                      r = r.filter(function (e) {
                        return e !== n;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (i = !0; r.length; ) {
                    var t = r;
                    (r = []), t.forEach(e);
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  i = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var s = function () {
                      var r = t;
                      (t = []), r.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(s);
                    };
                  a(),
                    (r = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), r;
                      },
                    });
                },
              });
          return (n.options = tP({ async: !0, ssr: !1 }, e)), n;
        })(),
        tF = function () {},
        tV = a.forwardRef(function (e, t) {
          var r,
            i,
            n,
            s,
            o = a.useRef(null),
            l = a.useState({
              onScrollCapture: tF,
              onWheelCapture: tF,
              onTouchMoveCapture: tF,
            }),
            u = l[0],
            d = l[1],
            c = e.forwardProps,
            h = e.children,
            p = e.className,
            f = e.removeScrollBar,
            m = e.enabled,
            v = e.shards,
            g = e.sideCar,
            y = e.noIsolation,
            b = e.inert,
            w = e.allowPinchZoom,
            x = e.as,
            S = e.gapMode,
            T = tA(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            E =
              ((r = [o, t]),
              (i = function (e) {
                return r.forEach(function (t) {
                  return tO(t, e);
                });
              }),
              ((n = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: i,
                  facade: {
                    get current() {
                      return n.value;
                    },
                    set current(value) {
                      var e = n.value;
                      e !== value && ((n.value = value), n.callback(value, e));
                    },
                  },
                };
              })[0]).callback = i),
              (s = n.facade),
              t_(
                function () {
                  var e = tD.get(s);
                  if (e) {
                    var t = new Set(e),
                      i = new Set(r),
                      n = s.current;
                    t.forEach(function (e) {
                      i.has(e) || tO(e, null);
                    }),
                      i.forEach(function (e) {
                        t.has(e) || tO(e, n);
                      });
                  }
                  tD.set(s, r);
                },
                [r]
              ),
              s),
            C = tP(tP({}, T), u);
          return a.createElement(
            a.Fragment,
            null,
            m &&
              a.createElement(g, {
                sideCar: tL,
                removeScrollBar: f,
                shards: v,
                noIsolation: y,
                inert: b,
                setCallbacks: d,
                allowPinchZoom: !!w,
                lockRef: o,
                gapMode: S,
              }),
            c
              ? a.cloneElement(a.Children.only(h), tP(tP({}, C), { ref: E }))
              : a.createElement(
                  void 0 === x ? "div" : x,
                  tP({}, C, { className: p, ref: E }),
                  h
                )
          );
        });
      (tV.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (tV.classNames = { fullWidth: tM, zeroRight: tk });
      var tR = function (e) {
        var t = e.sideCar,
          r = tA(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var i = t.read();
        if (!i) throw Error("Sidecar medium not found");
        return a.createElement(i, tP({}, r));
      };
      tR.isSideCarExport = !0;
      var tI = function () {
          var e = 0,
            t = null;
          return {
            add: function (i) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = s || r.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var n, a;
                (n = t).styleSheet
                  ? (n.styleSheet.cssText = i)
                  : n.appendChild(document.createTextNode(i)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        tN = function () {
          var e = tI();
          return function (t, r) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r]
            );
          };
        },
        tB = function () {
          var e = tN();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        t$ = { left: 0, top: 0, right: 0, gap: 0 },
        tz = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        tH = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            i = t["padding" === e ? "paddingTop" : "marginTop"],
            n = t["padding" === e ? "paddingRight" : "marginRight"];
          return [tz(r), tz(i), tz(n)];
        },
        tW = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return t$;
          var t = tH(e),
            r = document.documentElement.clientWidth,
            i = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, i - r + t[2] - t[0]),
          };
        },
        tU = tB(),
        tY = "data-scroll-locked",
        tq = function (e, t, r, i) {
          var n = e.left,
            s = e.top,
            a = e.right,
            o = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(i, ";\n   padding-right: ")
              .concat(o, "px ")
              .concat(i, ";\n  }\n  body[")
              .concat(tY, "] {\n    overflow: hidden ")
              .concat(i, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(i, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(n, "px;\n    padding-top: ")
                      .concat(s, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(o, "px ")
                      .concat(i, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(o, "px ").concat(i, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(tk, " {\n    right: ")
              .concat(o, "px ")
              .concat(i, ";\n  }\n  \n  .")
              .concat(tM, " {\n    margin-right: ")
              .concat(o, "px ")
              .concat(i, ";\n  }\n  \n  .")
              .concat(tk, " .")
              .concat(tk, " {\n    right: 0 ")
              .concat(i, ";\n  }\n  \n  .")
              .concat(tM, " .")
              .concat(tM, " {\n    margin-right: 0 ")
              .concat(i, ";\n  }\n  \n  body[")
              .concat(tY, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(o, "px;\n  }\n")
          );
        },
        tG = function () {
          var e = parseInt(document.body.getAttribute(tY) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        tX = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(tY, (tG() + 1).toString()),
              function () {
                var e = tG() - 1;
                e <= 0
                  ? document.body.removeAttribute(tY)
                  : document.body.setAttribute(tY, e.toString());
              }
            );
          }, []);
        },
        tZ = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            i = e.gapMode,
            n = void 0 === i ? "margin" : i;
          tX();
          var s = a.useMemo(
            function () {
              return tW(n);
            },
            [n]
          );
          return a.createElement(tU, {
            styles: tq(s, !t, n, r ? "" : "!important"),
          });
        },
        tK = !1;
      if ("undefined" != typeof window)
        try {
          var tQ = Object.defineProperty({}, "passive", {
            get: function () {
              return (tK = !0), !0;
            },
          });
          window.addEventListener("test", tQ, tQ),
            window.removeEventListener("test", tQ, tQ);
        } catch (e) {
          tK = !1;
        }
      var tJ = !!tK && { passive: !1 },
        t0 = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === r[t]
            )
          );
        },
        t1 = function (e, t) {
          var r = t.ownerDocument,
            i = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                i instanceof ShadowRoot &&
                (i = i.host),
              t2(e, i))
            ) {
              var n = t5(e, i);
              if (n[1] > n[2]) return !0;
            }
            i = i.parentNode;
          } while (i && i !== r.body);
          return !1;
        },
        t2 = function (e, t) {
          return "v" === e ? t0(t, "overflowY") : t0(t, "overflowX");
        },
        t5 = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        t3 = function (e, t, r, i, n) {
          var s,
            a =
              ((s = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === s ? -1 : 1),
            o = a * i,
            l = r.target,
            u = t.contains(l),
            d = !1,
            c = o > 0,
            h = 0,
            p = 0;
          do {
            var f = t5(e, l),
              m = f[0],
              v = f[1] - f[2] - a * m;
            (m || v) && t2(e, l) && ((h += v), (p += m)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!u && l !== document.body) ||
            (u && (t.contains(l) || t === l))
          );
          return (
            c && ((n && 1 > Math.abs(h)) || (!n && o > h))
              ? (d = !0)
              : !c && ((n && 1 > Math.abs(p)) || (!n && -o > p)) && (d = !0),
            d
          );
        },
        t9 = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        t6 = function (e) {
          return [e.deltaX, e.deltaY];
        },
        t8 = function (e) {
          return e && "current" in e ? e.current : e;
        },
        t4 = 0,
        t7 = [];
      let re =
        ((i = function (e) {
          var t = a.useRef([]),
            r = a.useRef([0, 0]),
            i = a.useRef(),
            n = a.useState(t4++)[0],
            s = a.useState(tB)[0],
            o = a.useRef(e);
          a.useEffect(
            function () {
              o.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(n));
                  var t = (function (e, t, r) {
                    if (r || 2 == arguments.length)
                      for (var i, n = 0, s = t.length; n < s; n++)
                        (!i && n in t) ||
                          (i || (i = Array.prototype.slice.call(t, 0, n)),
                          (i[n] = t[n]));
                    return e.concat(i || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(t8), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(n));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(n)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(n)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !o.current.allowPinchZoom;
              var n,
                s = t9(e),
                a = r.current,
                l = "deltaX" in e ? e.deltaX : a[0] - s[0],
                u = "deltaY" in e ? e.deltaY : a[1] - s[1],
                d = e.target,
                c = Math.abs(l) > Math.abs(u) ? "h" : "v";
              if ("touches" in e && "h" === c && "range" === d.type) return !1;
              var h = t1(c, d);
              if (!h) return !0;
              if (
                (h ? (n = c) : ((n = "v" === c ? "h" : "v"), (h = t1(c, d))),
                !h)
              )
                return !1;
              if (
                (!i.current &&
                  "changedTouches" in e &&
                  (l || u) &&
                  (i.current = n),
                !n)
              )
                return !0;
              var p = i.current || n;
              return t3(p, t, e, "h" === p ? l : u, !0);
            }, []),
            u = a.useCallback(function (e) {
              if (t7.length && t7[t7.length - 1] === s) {
                var r = "deltaY" in e ? t6(e) : t9(e),
                  i = t.current.filter(function (t) {
                    var i;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (i = t.delta)[0] === r[0] &&
                      i[1] === r[1]
                    );
                  })[0];
                if (i && i.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!i) {
                  var n = (o.current.shards || [])
                    .map(t8)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (n.length > 0 ? l(e, n[0]) : !o.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            d = a.useCallback(function (e, r, i, n) {
              var s = {
                name: e,
                delta: r,
                target: i,
                should: n,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(i),
              };
              t.current.push(s),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== s;
                  });
                }, 1);
            }, []),
            c = a.useCallback(function (e) {
              (r.current = t9(e)), (i.current = void 0);
            }, []),
            h = a.useCallback(function (t) {
              d(t.type, t6(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              d(t.type, t9(t), t.target, l(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              t7.push(s),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", u, tJ),
              document.addEventListener("touchmove", u, tJ),
              document.addEventListener("touchstart", c, tJ),
              function () {
                (t7 = t7.filter(function (e) {
                  return e !== s;
                })),
                  document.removeEventListener("wheel", u, tJ),
                  document.removeEventListener("touchmove", u, tJ),
                  document.removeEventListener("touchstart", c, tJ);
              }
            );
          }, []);
          var f = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(s, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      n,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(n, " {pointer-events: all;}\n"),
                })
              : null,
            f ? a.createElement(tZ, { gapMode: e.gapMode }) : null
          );
        }),
        tL.useMedium(i),
        tR);
      var rt = a.forwardRef(function (e, t) {
        return a.createElement(tV, tP({}, e, { ref: t, sideCar: re }));
      });
      rt.classNames = tV.classNames;
      var rr = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ri = [" ", "Enter"],
        rn = "Select",
        [rs, ra, ro] = (function (e) {
          let t = e + "CollectionProvider",
            [r, i] = h(t),
            [n, s] = r(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            o = (e) => {
              let { scope: t, children: r } = e,
                i = a.useRef(null),
                s = a.useRef(new Map()).current;
              return (0, c.jsx)(n, {
                scope: t,
                itemMap: s,
                collectionRef: i,
                children: r,
              });
            };
          o.displayName = t;
          let l = e + "CollectionSlot",
            u = a.forwardRef((e, t) => {
              let { scope: r, children: i } = e,
                n = m(t, s(l, r).collectionRef);
              return (0, c.jsx)(v, { ref: n, children: i });
            });
          u.displayName = l;
          let d = e + "CollectionItemSlot",
            p = "data-radix-collection-item",
            f = a.forwardRef((e, t) => {
              let { scope: r, children: i, ...n } = e,
                o = a.useRef(null),
                l = m(t, o),
                u = s(d, r);
              return (
                a.useEffect(
                  () => (
                    u.itemMap.set(o, { ref: o, ...n }),
                    () => void u.itemMap.delete(o)
                  )
                ),
                (0, c.jsx)(v, { [p]: "", ref: l, children: i })
              );
            });
          return (
            (f.displayName = d),
            [
              { Provider: o, Slot: u, ItemSlot: f },
              function (t) {
                let r = s(e + "CollectionConsumer", t);
                return a.useCallback(() => {
                  let e = r.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll("[".concat(p, "]")));
                  return Array.from(r.itemMap.values()).sort(
                    (e, r) =>
                      t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                  );
                }, [r.collectionRef, r.itemMap]);
              },
              i,
            ]
          );
        })(rn),
        [rl, ru] = h(rn, [ro, te]),
        rd = te(),
        [rc, rh] = rl(rn),
        [rp, rf] = rl(rn),
        rm = (e) => {
          let {
              __scopeSelect: t,
              children: r,
              open: i,
              defaultOpen: n,
              onOpenChange: s,
              value: o,
              defaultValue: l,
              onValueChange: u,
              dir: d,
              name: h,
              autoComplete: p,
              disabled: f,
              required: m,
              form: v,
            } = e,
            g = rd(t),
            [y, b] = a.useState(null),
            [x, S] = a.useState(null),
            [T, E] = a.useState(!1),
            C = (function (e) {
              let t = a.useContext(w);
              return e || t || "ltr";
            })(d),
            [P = !1, A] = tg({ prop: i, defaultProp: n, onChange: s }),
            [k, M] = tg({ prop: o, defaultProp: l, onChange: u }),
            O = a.useRef(null),
            _ = !y || v || !!y.closest("form"),
            [D, j] = a.useState(new Set()),
            L = Array.from(D)
              .map((e) => e.props.value)
              .join(";");
          return (0, c.jsx)(ti, {
            ...g,
            children: (0, c.jsxs)(rc, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: x,
              onValueNodeChange: S,
              valueNodeHasChildren: T,
              onValueNodeHasChildrenChange: E,
              contentId: z(),
              value: k,
              onValueChange: M,
              open: P,
              onOpenChange: A,
              dir: C,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [
                (0, c.jsx)(rs.Provider, {
                  scope: t,
                  children: (0, c.jsx)(rp, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: a.useCallback((e) => {
                      j((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: a.useCallback((e) => {
                      j((t) => {
                        let r = new Set(t);
                        return r.delete(e), r;
                      });
                    }, []),
                    children: r,
                  }),
                }),
                _
                  ? (0, c.jsxs)(
                      rX,
                      {
                        "aria-hidden": !0,
                        required: m,
                        tabIndex: -1,
                        name: h,
                        autoComplete: p,
                        value: k,
                        onChange: (e) => M(e.target.value),
                        disabled: f,
                        form: v,
                        children: [
                          void 0 === k
                            ? (0, c.jsx)("option", { value: "" })
                            : null,
                          Array.from(D),
                        ],
                      },
                      L
                    )
                  : null,
              ],
            }),
          });
        };
      rm.displayName = rn;
      var rv = "SelectTrigger",
        rg = a.forwardRef((e, t) => {
          let { __scopeSelect: r, disabled: i = !1, ...n } = e,
            s = rd(r),
            o = rh(rv, r),
            l = o.disabled || i,
            u = m(t, o.onTriggerChange),
            h = ra(r),
            p = a.useRef("touch"),
            [f, v, g] = rZ((e) => {
              let t = h().filter((e) => !e.disabled),
                r = t.find((e) => e.value === o.value),
                i = rK(t, e, r);
              void 0 !== i && o.onValueChange(i.value);
            }),
            y = (e) => {
              l || (o.onOpenChange(!0), g()),
                e &&
                  (o.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, c.jsx)(ts, {
            asChild: !0,
            ...s,
            children: (0, c.jsx)(x.button, {
              type: "button",
              role: "combobox",
              "aria-controls": o.contentId,
              "aria-expanded": o.open,
              "aria-required": o.required,
              "aria-autocomplete": "none",
              dir: o.dir,
              "data-state": o.open ? "open" : "closed",
              disabled: l,
              "data-disabled": l ? "" : void 0,
              "data-placeholder": rG(o.value) ? "" : void 0,
              ...n,
              ref: u,
              onClick: d(n.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== p.current && y(e);
              }),
              onPointerDown: d(n.onPointerDown, (e) => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (y(e), e.preventDefault());
              }),
              onKeyDown: d(n.onKeyDown, (e) => {
                let t = "" !== f.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  v(e.key),
                  (!t || " " !== e.key) &&
                    rr.includes(e.key) &&
                    (y(), e.preventDefault());
              }),
            }),
          });
        });
      rg.displayName = rv;
      var ry = "SelectValue",
        rb = a.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              className: i,
              style: n,
              children: s,
              placeholder: a = "",
              ...o
            } = e,
            l = rh(ry, r),
            { onValueNodeHasChildrenChange: u } = l,
            d = void 0 !== s,
            h = m(t, l.onValueNodeChange);
          return (
            N(() => {
              u(d);
            }, [u, d]),
            (0, c.jsx)(x.span, {
              ...o,
              ref: h,
              style: { pointerEvents: "none" },
              children: rG(l.value)
                ? (0, c.jsx)(c.Fragment, { children: a })
                : s,
            })
          );
        });
      rb.displayName = ry;
      var rw = a.forwardRef((e, t) => {
        let { __scopeSelect: r, children: i, ...n } = e;
        return (0, c.jsx)(x.span, {
          "aria-hidden": !0,
          ...n,
          ref: t,
          children: i || "▼",
        });
      });
      rw.displayName = "SelectIcon";
      var rx = (e) => (0, c.jsx)(tv, { asChild: !0, ...e });
      rx.displayName = "SelectPortal";
      var rS = "SelectContent",
        rT = a.forwardRef((e, t) => {
          let r = rh(rS, e.__scopeSelect),
            [i, n] = a.useState();
          return (N(() => {
            n(new DocumentFragment());
          }, []),
          r.open)
            ? (0, c.jsx)(rP, { ...e, ref: t })
            : i
            ? l.createPortal(
                (0, c.jsx)(rE, {
                  scope: e.__scopeSelect,
                  children: (0, c.jsx)(rs.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, c.jsx)("div", { children: e.children }),
                  }),
                }),
                i
              )
            : null;
        });
      rT.displayName = rS;
      var [rE, rC] = rl(rS),
        rP = a.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              position: i = "item-aligned",
              onCloseAutoFocus: n,
              onEscapeKeyDown: s,
              onPointerDownOutside: o,
              side: l,
              sideOffset: u,
              align: h,
              alignOffset: p,
              arrowPadding: f,
              collisionBoundary: g,
              collisionPadding: y,
              sticky: b,
              hideWhenDetached: w,
              avoidCollisions: x,
              ...S
            } = e,
            T = rh(rS, r),
            [E, P] = a.useState(null),
            [A, O] = a.useState(null),
            _ = m(t, (e) => P(e)),
            [D, L] = a.useState(null),
            [F, V] = a.useState(null),
            R = ra(r),
            [I, N] = a.useState(!1),
            B = a.useRef(!1);
          a.useEffect(() => {
            if (E) return tC(E);
          }, [E]),
            a.useEffect(() => {
              var e, t;
              let r = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = r[0]) && void 0 !== e ? e : M()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = r[1]) && void 0 !== t ? t : M()
                ),
                k++,
                () => {
                  1 === k &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    k--;
                }
              );
            }, []);
          let $ = a.useCallback(
              (e) => {
                let [t, ...r] = R().map((e) => e.ref.current),
                  [i] = r.slice(-1),
                  n = document.activeElement;
                for (let r of e)
                  if (
                    r === n ||
                    (null == r || r.scrollIntoView({ block: "nearest" }),
                    r === t && A && (A.scrollTop = 0),
                    r === i && A && (A.scrollTop = A.scrollHeight),
                    null == r || r.focus(),
                    document.activeElement !== n)
                  )
                    return;
              },
              [R, A]
            ),
            z = a.useCallback(() => $([D, E]), [$, D, E]);
          a.useEffect(() => {
            I && z();
          }, [I, z]);
          let { onOpenChange: H, triggerPointerDownPosRef: W } = T;
          a.useEffect(() => {
            if (E) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var r, i, n, s;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (r = W.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (s =
                            null === (i = W.current) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== s
                          ? s
                          : 0)
                    ),
                  };
                },
                r = (r) => {
                  e.x <= 10 && e.y <= 10
                    ? r.preventDefault()
                    : E.contains(r.target) || H(!1),
                    document.removeEventListener("pointermove", t),
                    (W.current = null);
                };
              return (
                null !== W.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", r, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", r, {
                      capture: !0,
                    });
                }
              );
            }
          }, [E, H, W]),
            a.useEffect(() => {
              let e = () => H(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [H]);
          let [U, Y] = rZ((e) => {
              let t = R().filter((e) => !e.disabled),
                r = t.find((e) => e.ref.current === document.activeElement),
                i = rK(t, e, r);
              i && setTimeout(() => i.ref.current.focus());
            }),
            q = a.useCallback(
              (e, t, r) => {
                let i = !B.current && !r;
                ((void 0 !== T.value && T.value === t) || i) &&
                  (L(e), i && (B.current = !0));
              },
              [T.value]
            ),
            G = a.useCallback(() => (null == E ? void 0 : E.focus()), [E]),
            X = a.useCallback(
              (e, t, r) => {
                let i = !B.current && !r;
                ((void 0 !== T.value && T.value === t) || i) && V(e);
              },
              [T.value]
            ),
            Z = "popper" === i ? rk : rA,
            K =
              Z === rk
                ? {
                    side: l,
                    sideOffset: u,
                    align: h,
                    alignOffset: p,
                    arrowPadding: f,
                    collisionBoundary: g,
                    collisionPadding: y,
                    sticky: b,
                    hideWhenDetached: w,
                    avoidCollisions: x,
                  }
                : {};
          return (0, c.jsx)(rE, {
            scope: r,
            content: E,
            viewport: A,
            onViewportChange: O,
            itemRefCallback: q,
            selectedItem: D,
            onItemLeave: G,
            itemTextRefCallback: X,
            focusSelectedItem: z,
            selectedItemText: F,
            position: i,
            isPositioned: I,
            searchRef: U,
            children: (0, c.jsx)(rt, {
              as: v,
              allowPinchZoom: !0,
              children: (0, c.jsx)(j, {
                asChild: !0,
                trapped: T.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: d(n, (e) => {
                  var t;
                  null === (t = T.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, c.jsx)(C, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: o,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => T.onOpenChange(!1),
                  children: (0, c.jsx)(Z, {
                    role: "listbox",
                    id: T.contentId,
                    "data-state": T.open ? "open" : "closed",
                    dir: T.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...S,
                    ...K,
                    onPlaced: () => N(!0),
                    ref: _,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...S.style,
                    },
                    onKeyDown: d(S.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || Y(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = R()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let r = e.target,
                            i = t.indexOf(r);
                          t = t.slice(i + 1);
                        }
                        setTimeout(() => $(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      rP.displayName = "SelectContentImpl";
      var rA = a.forwardRef((e, t) => {
        let { __scopeSelect: r, onPlaced: i, ...n } = e,
          s = rh(rS, r),
          o = rC(rS, r),
          [l, d] = a.useState(null),
          [h, p] = a.useState(null),
          f = m(t, (e) => p(e)),
          v = ra(r),
          g = a.useRef(!1),
          y = a.useRef(!0),
          {
            viewport: b,
            selectedItem: w,
            selectedItemText: S,
            focusSelectedItem: T,
          } = o,
          E = a.useCallback(() => {
            if (s.trigger && s.valueNode && l && h && b && w && S) {
              let e = s.trigger.getBoundingClientRect(),
                t = h.getBoundingClientRect(),
                r = s.valueNode.getBoundingClientRect(),
                n = S.getBoundingClientRect();
              if ("rtl" !== s.dir) {
                let i = n.left - t.left,
                  s = r.left - i,
                  a = e.left - s,
                  o = e.width + a,
                  d = Math.max(o, t.width),
                  c = u(s, [10, Math.max(10, window.innerWidth - 10 - d)]);
                (l.style.minWidth = o + "px"), (l.style.left = c + "px");
              } else {
                let i = t.right - n.right,
                  s = window.innerWidth - r.right - i,
                  a = window.innerWidth - e.right - s,
                  o = e.width + a,
                  d = Math.max(o, t.width),
                  c = u(s, [10, Math.max(10, window.innerWidth - 10 - d)]);
                (l.style.minWidth = o + "px"), (l.style.right = c + "px");
              }
              let a = v(),
                o = window.innerHeight - 20,
                d = b.scrollHeight,
                c = window.getComputedStyle(h),
                p = parseInt(c.borderTopWidth, 10),
                f = parseInt(c.paddingTop, 10),
                m = parseInt(c.borderBottomWidth, 10),
                y = p + f + d + parseInt(c.paddingBottom, 10) + m,
                x = Math.min(5 * w.offsetHeight, y),
                T = window.getComputedStyle(b),
                E = parseInt(T.paddingTop, 10),
                C = parseInt(T.paddingBottom, 10),
                P = e.top + e.height / 2 - 10,
                A = w.offsetHeight / 2,
                k = p + f + (w.offsetTop + A);
              if (k <= P) {
                let e = a.length > 0 && w === a[a.length - 1].ref.current;
                l.style.bottom = "0px";
                let t = Math.max(
                  o - P,
                  A +
                    (e ? C : 0) +
                    (h.clientHeight - b.offsetTop - b.offsetHeight) +
                    m
                );
                l.style.height = k + t + "px";
              } else {
                let e = a.length > 0 && w === a[0].ref.current;
                l.style.top = "0px";
                let t = Math.max(P, p + b.offsetTop + (e ? E : 0) + A);
                (l.style.height = t + (y - k) + "px"),
                  (b.scrollTop = k - P + b.offsetTop);
              }
              (l.style.margin = "".concat(10, "px 0")),
                (l.style.minHeight = x + "px"),
                (l.style.maxHeight = o + "px"),
                null == i || i(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [v, s.trigger, s.valueNode, l, h, b, w, S, s.dir, i]);
        N(() => E(), [E]);
        let [C, P] = a.useState();
        N(() => {
          h && P(window.getComputedStyle(h).zIndex);
        }, [h]);
        let A = a.useCallback(
          (e) => {
            e && !0 === y.current && (E(), null == T || T(), (y.current = !1));
          },
          [E, T]
        );
        return (0, c.jsx)(rM, {
          scope: r,
          contentWrapper: l,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: A,
          children: (0, c.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: C,
            },
            children: (0, c.jsx)(x.div, {
              ...n,
              ref: f,
              style: { boxSizing: "border-box", maxHeight: "100%", ...n.style },
            }),
          }),
        });
      });
      rA.displayName = "SelectItemAlignedPosition";
      var rk = a.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            align: i = "start",
            collisionPadding: n = 10,
            ...s
          } = e,
          a = rd(r);
        return (0, c.jsx)(tu, {
          ...a,
          ...s,
          ref: t,
          align: i,
          collisionPadding: n,
          style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      rk.displayName = "SelectPopperPosition";
      var [rM, rO] = rl(rS, {}),
        r_ = "SelectViewport",
        rD = a.forwardRef((e, t) => {
          let { __scopeSelect: r, nonce: i, ...n } = e,
            s = rC(r_, r),
            o = rO(r_, r),
            l = m(t, s.onViewportChange),
            u = a.useRef(0);
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: i,
              }),
              (0, c.jsx)(rs.Slot, {
                scope: r,
                children: (0, c.jsx)(x.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...n,
                  ref: l,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...n.style,
                  },
                  onScroll: d(n.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: r, shouldExpandOnScrollRef: i } = o;
                    if ((null == i ? void 0 : i.current) && r) {
                      let e = Math.abs(u.current - t.scrollTop);
                      if (e > 0) {
                        let i = window.innerHeight - 20,
                          n = Math.max(
                            parseFloat(r.style.minHeight),
                            parseFloat(r.style.height)
                          );
                        if (n < i) {
                          let s = n + e,
                            a = Math.min(i, s),
                            o = s - a;
                          (r.style.height = a + "px"),
                            "0px" === r.style.bottom &&
                              ((t.scrollTop = o > 0 ? o : 0),
                              (r.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    u.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      rD.displayName = r_;
      var rj = "SelectGroup",
        [rL, rF] = rl(rj);
      a.forwardRef((e, t) => {
        let { __scopeSelect: r, ...i } = e,
          n = z();
        return (0, c.jsx)(rL, {
          scope: r,
          id: n,
          children: (0, c.jsx)(x.div, {
            role: "group",
            "aria-labelledby": n,
            ...i,
            ref: t,
          }),
        });
      }).displayName = rj;
      var rV = "SelectLabel";
      a.forwardRef((e, t) => {
        let { __scopeSelect: r, ...i } = e,
          n = rF(rV, r);
        return (0, c.jsx)(x.div, { id: n.id, ...i, ref: t });
      }).displayName = rV;
      var rR = "SelectItem",
        [rI, rN] = rl(rR),
        rB = a.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              value: i,
              disabled: n = !1,
              textValue: s,
              ...o
            } = e,
            l = rh(rR, r),
            u = rC(rR, r),
            h = l.value === i,
            [p, f] = a.useState(null != s ? s : ""),
            [v, g] = a.useState(!1),
            y = m(t, (e) => {
              var t;
              return null === (t = u.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(u, e, i, n);
            }),
            b = z(),
            w = a.useRef("touch"),
            S = () => {
              n || (l.onValueChange(i), l.onOpenChange(!1));
            };
          if ("" === i)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, c.jsx)(rI, {
            scope: r,
            value: i,
            disabled: n,
            textId: b,
            isSelected: h,
            onItemTextChange: a.useCallback((e) => {
              f((t) => {
                var r;
                return (
                  t ||
                  (null !== (r = null == e ? void 0 : e.textContent) &&
                  void 0 !== r
                    ? r
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, c.jsx)(rs.ItemSlot, {
              scope: r,
              value: i,
              disabled: n,
              textValue: p,
              children: (0, c.jsx)(x.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": h && v,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": n || void 0,
                "data-disabled": n ? "" : void 0,
                tabIndex: n ? void 0 : -1,
                ...o,
                ref: y,
                onFocus: d(o.onFocus, () => g(!0)),
                onBlur: d(o.onBlur, () => g(!1)),
                onClick: d(o.onClick, () => {
                  "mouse" !== w.current && S();
                }),
                onPointerUp: d(o.onPointerUp, () => {
                  "mouse" === w.current && S();
                }),
                onPointerDown: d(o.onPointerDown, (e) => {
                  w.current = e.pointerType;
                }),
                onPointerMove: d(o.onPointerMove, (e) => {
                  if (((w.current = e.pointerType), n)) {
                    var t;
                    null === (t = u.onItemLeave) || void 0 === t || t.call(u);
                  } else
                    "mouse" === w.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: d(o.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = u.onItemLeave) || void 0 === t || t.call(u);
                  }
                }),
                onKeyDown: d(o.onKeyDown, (e) => {
                  var t;
                  ((null === (t = u.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== "" &&
                    " " === e.key) ||
                    (ri.includes(e.key) && S(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      rB.displayName = rR;
      var r$ = "SelectItemText",
        rz = a.forwardRef((e, t) => {
          let { __scopeSelect: r, className: i, style: n, ...s } = e,
            o = rh(r$, r),
            u = rC(r$, r),
            d = rN(r$, r),
            h = rf(r$, r),
            [p, f] = a.useState(null),
            v = m(
              t,
              (e) => f(e),
              d.onItemTextChange,
              (e) => {
                var t;
                return null === (t = u.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(u, e, d.value, d.disabled);
              }
            ),
            g = null == p ? void 0 : p.textContent,
            y = a.useMemo(
              () =>
                (0, c.jsx)(
                  "option",
                  { value: d.value, disabled: d.disabled, children: g },
                  d.value
                ),
              [d.disabled, d.value, g]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: w } = h;
          return (
            N(() => (b(y), () => w(y)), [b, w, y]),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(x.span, { id: d.textId, ...s, ref: v }),
                d.isSelected && o.valueNode && !o.valueNodeHasChildren
                  ? l.createPortal(s.children, o.valueNode)
                  : null,
              ],
            })
          );
        });
      rz.displayName = r$;
      var rH = "SelectItemIndicator";
      a.forwardRef((e, t) => {
        let { __scopeSelect: r, ...i } = e;
        return rN(rH, r).isSelected
          ? (0, c.jsx)(x.span, { "aria-hidden": !0, ...i, ref: t })
          : null;
      }).displayName = rH;
      var rW = "SelectScrollUpButton";
      a.forwardRef((e, t) => {
        let r = rC(rW, e.__scopeSelect),
          i = rO(rW, e.__scopeSelect),
          [n, s] = a.useState(!1),
          o = m(t, i.onScrollButtonChange);
        return (
          N(() => {
            if (r.viewport && r.isPositioned) {
              let e = function () {
                  s(t.scrollTop > 0);
                },
                t = r.viewport;
              return (
                e(),
                t.addEventListener("scroll", e),
                () => t.removeEventListener("scroll", e)
              );
            }
          }, [r.viewport, r.isPositioned]),
          n
            ? (0, c.jsx)(rY, {
                ...e,
                ref: o,
                onAutoScroll: () => {
                  let { viewport: e, selectedItem: t } = r;
                  e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                },
              })
            : null
        );
      }).displayName = rW;
      var rU = "SelectScrollDownButton";
      a.forwardRef((e, t) => {
        let r = rC(rU, e.__scopeSelect),
          i = rO(rU, e.__scopeSelect),
          [n, s] = a.useState(!1),
          o = m(t, i.onScrollButtonChange);
        return (
          N(() => {
            if (r.viewport && r.isPositioned) {
              let e = function () {
                  let e = t.scrollHeight - t.clientHeight;
                  s(Math.ceil(t.scrollTop) < e);
                },
                t = r.viewport;
              return (
                e(),
                t.addEventListener("scroll", e),
                () => t.removeEventListener("scroll", e)
              );
            }
          }, [r.viewport, r.isPositioned]),
          n
            ? (0, c.jsx)(rY, {
                ...e,
                ref: o,
                onAutoScroll: () => {
                  let { viewport: e, selectedItem: t } = r;
                  e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                },
              })
            : null
        );
      }).displayName = rU;
      var rY = a.forwardRef((e, t) => {
        let { __scopeSelect: r, onAutoScroll: i, ...n } = e,
          s = rC("SelectScrollButton", r),
          o = a.useRef(null),
          l = ra(r),
          u = a.useCallback(() => {
            null !== o.current &&
              (window.clearInterval(o.current), (o.current = null));
          }, []);
        return (
          a.useEffect(() => () => u(), [u]),
          N(() => {
            var e;
            let t = l().find((e) => e.ref.current === document.activeElement);
            null == t ||
              null === (e = t.ref.current) ||
              void 0 === e ||
              e.scrollIntoView({ block: "nearest" });
          }, [l]),
          (0, c.jsx)(x.div, {
            "aria-hidden": !0,
            ...n,
            ref: t,
            style: { flexShrink: 0, ...n.style },
            onPointerDown: d(n.onPointerDown, () => {
              null === o.current && (o.current = window.setInterval(i, 50));
            }),
            onPointerMove: d(n.onPointerMove, () => {
              var e;
              null === (e = s.onItemLeave) || void 0 === e || e.call(s),
                null === o.current && (o.current = window.setInterval(i, 50));
            }),
            onPointerLeave: d(n.onPointerLeave, () => {
              u();
            }),
          })
        );
      });
      a.forwardRef((e, t) => {
        let { __scopeSelect: r, ...i } = e;
        return (0, c.jsx)(x.div, { "aria-hidden": !0, ...i, ref: t });
      }).displayName = "SelectSeparator";
      var rq = "SelectArrow";
      function rG(e) {
        return "" === e || void 0 === e;
      }
      a.forwardRef((e, t) => {
        let { __scopeSelect: r, ...i } = e,
          n = rd(r),
          s = rh(rq, r),
          a = rC(rq, r);
        return s.open && "popper" === a.position
          ? (0, c.jsx)(th, { ...n, ...i, ref: t })
          : null;
      }).displayName = rq;
      var rX = a.forwardRef((e, t) => {
        let { value: r, ...i } = e,
          n = a.useRef(null),
          s = m(t, n),
          o = (function (e) {
            let t = a.useRef({ value: e, previous: e });
            return a.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(r);
        return (
          a.useEffect(() => {
            let e = n.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (o !== r && t) {
              let i = new Event("change", { bubbles: !0 });
              t.call(e, r), e.dispatchEvent(i);
            }
          }, [o, r]),
          (0, c.jsx)(ty, {
            asChild: !0,
            children: (0, c.jsx)("select", { ...i, ref: s, defaultValue: r }),
          })
        );
      });
      function rZ(e) {
        let t = S(e),
          r = a.useRef(""),
          i = a.useRef(0),
          n = a.useCallback(
            (e) => {
              let n = r.current + e;
              t(n),
                (function e(t) {
                  (r.current = t),
                    window.clearTimeout(i.current),
                    "" !== t &&
                      (i.current = window.setTimeout(() => e(""), 1e3));
                })(n);
            },
            [t]
          ),
          s = a.useCallback(() => {
            (r.current = ""), window.clearTimeout(i.current);
          }, []);
        return (
          a.useEffect(() => () => window.clearTimeout(i.current), []), [r, n, s]
        );
      }
      function rK(e, t, r) {
        var i;
        let n =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          s =
            ((i = Math.max(r ? e.indexOf(r) : -1, 0)),
            e.map((t, r) => e[(i + r) % e.length]));
        1 === n.length && (s = s.filter((e) => e !== r));
        let a = s.find((e) =>
          e.textValue.toLowerCase().startsWith(n.toLowerCase())
        );
        return a !== r ? a : void 0;
      }
      rX.displayName = "BubbleSelect";
      var rQ = rm,
        rJ = rg,
        r0 = rb,
        r1 = rw,
        r2 = rx,
        r5 = rT,
        r3 = rD,
        r9 = rB,
        r6 = rz;
    },
    45967: (e, t, r) => {
      "use strict";
      r.d(t, { Analytics: () => h, u: () => c });
      var i = r(12115),
        n = r(2818),
        s = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function a() {
        return "undefined" != typeof window;
      }
      function o() {
        return "production";
      }
      function l() {
        return (a() ? window.vam : o()) || "production";
      }
      function u() {
        return "production" === l();
      }
      function d() {
        return "development" === l();
      }
      function c(e, t, r) {
        var i, n;
        if (!a()) {
          let e =
            "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
          if (u()) console.warn(e);
          else throw Error(e);
          return;
        }
        if (!t) {
          null == (i = window.va) ||
            i.call(window, "event", { name: e, options: r });
          return;
        }
        try {
          let i = (function (e, t) {
            if (!e) return;
            let r = e,
              i = [];
            for (let [n, s] of Object.entries(e))
              "object" == typeof s &&
                null !== s &&
                (t.strip
                  ? (r = (function (e, t) {
                      let { [e]: r, ...i } = t;
                      return i;
                    })(n, r))
                  : i.push(n));
            if (i.length > 0 && !t.strip)
              throw Error(
                "The following properties are not valid: ".concat(
                  i.join(", "),
                  ". Only strings, numbers, booleans, and null are allowed."
                )
              );
            return r;
          })(t, { strip: u() });
          null == (n = window.va) ||
            n.call(window, "event", { name: e, data: i, options: r });
        } catch (e) {
          e instanceof Error && d() && console.error(e);
        }
      }
      function h(e) {
        return (
          (0, i.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, i.useEffect)(() => {
            var t;
            !(function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!a()) return;
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === e) {
                  window.vam = o();
                  return;
                }
                window.vam = e;
              })(t.mode),
                s(),
                t.beforeSend &&
                  (null == (e = window.va) ||
                    e.call(window, "beforeSend", t.beforeSend));
              let r = t.scriptSrc
                ? t.scriptSrc
                : d()
                ? "https://va.vercel-scripts.com/v1/script.debug.js"
                : t.basePath
                ? "".concat(t.basePath, "/insights/script.js")
                : "/_vercel/insights/script.js";
              if (document.head.querySelector('script[src*="'.concat(r, '"]')))
                return;
              let i = document.createElement("script");
              (i.src = r),
                (i.defer = !0),
                (i.dataset.sdkn =
                  "@vercel/analytics" +
                  (t.framework ? "/".concat(t.framework) : "")),
                (i.dataset.sdkv = "1.5.0"),
                t.disableAutoTrack && (i.dataset.disableAutoTrack = "1"),
                t.endpoint
                  ? (i.dataset.endpoint = t.endpoint)
                  : t.basePath &&
                    (i.dataset.endpoint = "".concat(t.basePath, "/insights")),
                t.dsn && (i.dataset.dsn = t.dsn),
                (i.onerror = () => {
                  let e = d()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(r, ". ")
                      .concat(e)
                  );
                }),
                d() && !1 === t.debug && (i.dataset.debug = "false"),
                document.head.appendChild(i);
            })({
              framework: e.framework || "react",
              basePath:
                null !== (t = e.basePath) && void 0 !== t
                  ? t
                  : (function () {
                      if (void 0 !== n && void 0 !== n.env)
                        return n.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                    })(),
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, i.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var t;
                let { route: r, path: i } = e;
                null == (t = window.va) ||
                  t.call(window, "pageview", { route: r, path: i });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
    },
    34773: (e, t, r) => {
      "use strict";
      r.d(t, { L_: () => S }), r(68815);
      let i = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
        n = {},
        s = new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone: "America/New_York",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date("2014-06-25T04:00:00.123Z")),
        a =
          "06/25/2014, 00:00:00" === s ||
          "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00" === s;
      function o(e, t, r, i, n, s, a) {
        let o = new Date(0);
        return o.setUTCFullYear(e, t, r), o.setUTCHours(i, n, s, a), o;
      }
      let l = {
        timezoneZ: /^(Z)$/,
        timezoneHH: /^([+-]\d{2})$/,
        timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
      };
      function u(e, t, r) {
        let i, n;
        if (!e) return 0;
        let s = l.timezoneZ.exec(e);
        if (s) return 0;
        if ((s = l.timezoneHH.exec(e)))
          return c((i = parseInt(s[1], 10))) ? -(36e5 * i) : NaN;
        if ((s = l.timezoneHHMM.exec(e))) {
          i = parseInt(s[2], 10);
          let e = parseInt(s[3], 10);
          return c(i, e)
            ? ((n = 36e5 * Math.abs(i) + 6e4 * e), "+" === s[1] ? -n : n)
            : NaN;
        }
        if (
          (function (e) {
            if (h[e]) return !0;
            try {
              return (
                new Intl.DateTimeFormat(void 0, { timeZone: e }),
                (h[e] = !0),
                !0
              );
            } catch (e) {
              return !1;
            }
          })(e)
        ) {
          var a;
          t = new Date(t || Date.now());
          let i = d(
            r
              ? t
              : o(
                  (a = t).getFullYear(),
                  a.getMonth(),
                  a.getDate(),
                  a.getHours(),
                  a.getMinutes(),
                  a.getSeconds(),
                  a.getMilliseconds()
                ),
            e
          );
          return -(r
            ? i
            : (function (e, t, r) {
                let i = e.getTime() - t,
                  n = d(new Date(i), r);
                if (t === n) return t;
                let s = d(new Date((i -= n - t)), r);
                return n === s ? n : Math.max(n, s);
              })(t, i, e));
        }
        return NaN;
      }
      function d(e, t) {
        let r = (function (e, t) {
            let r =
              (n[t] ||
                (n[t] = a
                  ? new Intl.DateTimeFormat("en-US", {
                      hourCycle: "h23",
                      timeZone: t,
                      year: "numeric",
                      month: "numeric",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })
                  : new Intl.DateTimeFormat("en-US", {
                      hour12: !1,
                      timeZone: t,
                      year: "numeric",
                      month: "numeric",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })),
              n[t]);
            return "formatToParts" in r
              ? (function (e, t) {
                  try {
                    let r = e.formatToParts(t),
                      n = [];
                    for (let e = 0; e < r.length; e++) {
                      let t = i[r[e].type];
                      void 0 !== t && (n[t] = parseInt(r[e].value, 10));
                    }
                    return n;
                  } catch (e) {
                    if (e instanceof RangeError) return [NaN];
                    throw e;
                  }
                })(r, e)
              : (function (e, t) {
                  let r = e.format(t),
                    i = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
                  return [
                    parseInt(i[3], 10),
                    parseInt(i[1], 10),
                    parseInt(i[2], 10),
                    parseInt(i[4], 10),
                    parseInt(i[5], 10),
                    parseInt(i[6], 10),
                  ];
                })(r, e);
          })(e, t),
          s = o(r[0], r[1] - 1, r[2], r[3] % 24, r[4], r[5], 0).getTime(),
          l = e.getTime(),
          u = l % 1e3;
        return s - (l -= u >= 0 ? u : 1e3 + u);
      }
      function c(e, t) {
        return -23 <= e && e <= 23 && (null == t || (0 <= t && t <= 59));
      }
      let h = {};
      function p(e) {
        let t = new Date(
          Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
          )
        );
        return t.setUTCFullYear(e.getFullYear()), +e - +t;
      }
      let f = {
        dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
        datePattern: /^([0-9W+-]+)(.*)/,
        YY: /^(\d{2})$/,
        YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
        YYYY: /^(\d{4})/,
        YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
        MM: /^-(\d{2})$/,
        DDD: /^-?(\d{3})$/,
        MMDD: /^-?(\d{2})-?(\d{2})$/,
        Www: /^-?W(\d{2})$/,
        WwwD: /^-?W(\d{2})-?(\d{1})$/,
        HH: /^(\d{2}([.,]\d*)?)$/,
        HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
        timeZone:
          /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
      };
      function m(e, t, r) {
        (t = t || 0), (r = r || 0);
        let i = new Date(0);
        i.setUTCFullYear(e, 0, 4);
        let n = 7 * t + r + 1 - (i.getUTCDay() || 7);
        return i.setUTCDate(i.getUTCDate() + n), i;
      }
      let v = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        g = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function y(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
      function b(e, t, r) {
        if (t < 0 || t > 11) return !1;
        if (null != r) {
          if (r < 1) return !1;
          let i = y(e);
          if ((i && r > g[t]) || (!i && r > v[t])) return !1;
        }
        return !0;
      }
      function w(e, t) {
        return !(e < 0) && !(e > 52) && (null == t || (!(t < 0) && !(t > 6)));
      }
      function x(e, t, r) {
        return (
          !(e < 0) &&
          !(e >= 25) &&
          (null == t || (!(t < 0) && !(t >= 60))) &&
          (null == r || (!(r < 0) && !(r >= 60)))
        );
      }
      function S(e, t, r) {
        e = (function (e, t = {}) {
          if (arguments.length < 1)
            throw TypeError(
              "1 argument required, but only " + arguments.length + " present"
            );
          if (null === e) return new Date(NaN);
          let r = null == t.additionalDigits ? 2 : Number(t.additionalDigits);
          if (2 !== r && 1 !== r && 0 !== r)
            throw RangeError("additionalDigits must be 0, 1 or 2");
          if (
            e instanceof Date ||
            ("object" == typeof e &&
              "[object Date]" === Object.prototype.toString.call(e))
          )
            return new Date(e.getTime());
          if (
            "number" == typeof e ||
            "[object Number]" === Object.prototype.toString.call(e)
          )
            return new Date(e);
          if ("[object String]" !== Object.prototype.toString.call(e))
            return new Date(NaN);
          let i = (function (e) {
              let t;
              let r = {},
                i = f.dateTimePattern.exec(e);
              if (
                (i
                  ? ((r.date = i[1]), (t = i[3]))
                  : (i = f.datePattern.exec(e))
                  ? ((r.date = i[1]), (t = i[2]))
                  : ((r.date = null), (t = e)),
                t)
              ) {
                let e = f.timeZone.exec(t);
                e
                  ? ((r.time = t.replace(e[1], "")), (r.timeZone = e[1].trim()))
                  : (r.time = t);
              }
              return r;
            })(e),
            { year: n, restDateString: s } = (function (e, t) {
              if (e) {
                let r = f.YYY[t],
                  i = f.YYYYY[t],
                  n = f.YYYY.exec(e) || i.exec(e);
                if (n) {
                  let t = n[1];
                  return {
                    year: parseInt(t, 10),
                    restDateString: e.slice(t.length),
                  };
                }
                if ((n = f.YY.exec(e) || r.exec(e))) {
                  let t = n[1];
                  return {
                    year: 100 * parseInt(t, 10),
                    restDateString: e.slice(t.length),
                  };
                }
              }
              return { year: null };
            })(i.date, r),
            a = (function (e, t) {
              let r, i, n;
              if (null === t) return null;
              if (!e || !e.length)
                return (r = new Date(0)).setUTCFullYear(t), r;
              let s = f.MM.exec(e);
              if (s)
                return ((r = new Date(0)), b(t, (i = parseInt(s[1], 10) - 1)))
                  ? (r.setUTCFullYear(t, i), r)
                  : new Date(NaN);
              if ((s = f.DDD.exec(e))) {
                r = new Date(0);
                let e = parseInt(s[1], 10);
                return !(function (e, t) {
                  if (t < 1) return !1;
                  let r = y(e);
                  return (!r || !(t > 366)) && (!!r || !(t > 365));
                })(t, e)
                  ? new Date(NaN)
                  : (r.setUTCFullYear(t, 0, e), r);
              }
              if ((s = f.MMDD.exec(e))) {
                (r = new Date(0)), (i = parseInt(s[1], 10) - 1);
                let e = parseInt(s[2], 10);
                return b(t, i, e)
                  ? (r.setUTCFullYear(t, i, e), r)
                  : new Date(NaN);
              }
              if ((s = f.Www.exec(e)))
                return w((n = parseInt(s[1], 10) - 1))
                  ? m(t, n)
                  : new Date(NaN);
              if ((s = f.WwwD.exec(e))) {
                n = parseInt(s[1], 10) - 1;
                let e = parseInt(s[2], 10) - 1;
                return w(n, e) ? m(t, n, e) : new Date(NaN);
              }
              return null;
            })(s, n);
          if (null === a || isNaN(a.getTime()) || !a) return new Date(NaN);
          {
            let e;
            let r = a.getTime(),
              n = 0;
            if (
              i.time &&
              (null ===
                (n = (function (e) {
                  let t, r;
                  let i = f.HH.exec(e);
                  if (i)
                    return x((t = parseFloat(i[1].replace(",", "."))))
                      ? (t % 24) * 36e5
                      : NaN;
                  if ((i = f.HHMM.exec(e)))
                    return x(
                      (t = parseInt(i[1], 10)),
                      (r = parseFloat(i[2].replace(",", ".")))
                    )
                      ? (t % 24) * 36e5 + 6e4 * r
                      : NaN;
                  if ((i = f.HHMMSS.exec(e))) {
                    (t = parseInt(i[1], 10)), (r = parseInt(i[2], 10));
                    let e = parseFloat(i[3].replace(",", "."));
                    return x(t, r, e)
                      ? (t % 24) * 36e5 + 6e4 * r + 1e3 * e
                      : NaN;
                  }
                  return null;
                })(i.time)) ||
                isNaN(n))
            )
              return new Date(NaN);
            if (i.timeZone || t.timeZone) {
              if (isNaN((e = u(i.timeZone || t.timeZone, new Date(r + n)))))
                return new Date(NaN);
            } else (e = p(new Date(r + n))), (e = p(new Date(r + n + e)));
            return new Date(r + n + e);
          }
        })(e, r);
        let i = u(t, e, !0),
          n = new Date(e.getTime() - i),
          s = new Date(0);
        return (
          s.setFullYear(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()),
          s.setHours(
            n.getUTCHours(),
            n.getUTCMinutes(),
            n.getUTCSeconds(),
            n.getUTCMilliseconds()
          ),
          s
        );
      }
    },
    25683: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => g });
      var i = r(95155),
        n = r(12115),
        s = r(64710),
        a = r(99234),
        o = r(39656),
        l = r(27249);
      class u extends n.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              r = (e instanceof HTMLElement && e.offsetWidth) || 0,
              i = this.props.sizeRef.current;
            (i.height = t.offsetHeight || 0),
              (i.width = t.offsetWidth || 0),
              (i.top = t.offsetTop),
              (i.left = t.offsetLeft),
              (i.right = r - i.width - i.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(e) {
        let { children: t, isPresent: r, anchorX: s } = e,
          a = (0, n.useId)(),
          o = (0, n.useRef)(null),
          d = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: c } = (0, n.useContext)(l.Q);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: e, height: t, top: i, left: n, right: l } = d.current;
            if (r || !o.current || !e || !t) return;
            o.current.dataset.motionPopId = a;
            let u = document.createElement("style");
            return (
              c && (u.nonce = c),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      a,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === s ? "left: ".concat(n) : "right: ".concat(l),
                      "px !important;\n            top: "
                    )
                    .concat(i, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [r]),
          (0, i.jsx)(u, {
            isPresent: r,
            childRef: o,
            sizeRef: d,
            children: n.cloneElement(t, { ref: o }),
          })
        );
      }
      let c = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: s,
            onExitComplete: l,
            custom: u,
            presenceAffectsLayout: c,
            mode: p,
            anchorX: f,
          } = e,
          m = (0, a.M)(h),
          v = (0, n.useId)(),
          g = (0, n.useCallback)(
            (e) => {
              for (let t of (m.set(e, !0), m.values())) if (!t) return;
              l && l();
            },
            [m, l]
          ),
          y = (0, n.useMemo)(
            () => ({
              id: v,
              initial: r,
              isPresent: s,
              custom: u,
              onExitComplete: g,
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }),
            c ? [Math.random(), g] : [s, g]
          );
        return (
          (0, n.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1));
          }, [s]),
          n.useEffect(() => {
            s || m.size || !l || l();
          }, [s]),
          "popLayout" === p &&
            (t = (0, i.jsx)(d, { isPresent: s, anchorX: f, children: t })),
          (0, i.jsx)(o.t.Provider, { value: y, children: t })
        );
      };
      function h() {
        return new Map();
      }
      var p = r(85087);
      let f = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          n.Children.forEach(e, (e) => {
            (0, n.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var v = r(35403);
      let g = (e) => {
        let {
            children: t,
            custom: r,
            initial: o = !0,
            onExitComplete: l,
            presenceAffectsLayout: u = !0,
            mode: d = "sync",
            propagate: h = !1,
            anchorX: g = "left",
          } = e,
          [y, b] = (0, p.xQ)(h),
          w = (0, n.useMemo)(() => m(t), [t]),
          x = h && !y ? [] : w.map(f),
          S = (0, n.useRef)(!0),
          T = (0, n.useRef)(w),
          E = (0, a.M)(() => new Map()),
          [C, P] = (0, n.useState)(w),
          [A, k] = (0, n.useState)(w);
        (0, v.E)(() => {
          (S.current = !1), (T.current = w);
          for (let e = 0; e < A.length; e++) {
            let t = f(A[e]);
            x.includes(t) ? E.delete(t) : !0 !== E.get(t) && E.set(t, !1);
          }
        }, [A, x.length, x.join("-")]);
        let M = [];
        if (w !== C) {
          let e = [...w];
          for (let t = 0; t < A.length; t++) {
            let r = A[t],
              i = f(r);
            x.includes(i) || (e.splice(t, 0, r), M.push(r));
          }
          "wait" === d && M.length && (e = M), k(m(e)), P(w);
          return;
        }
        let { forceRender: O } = (0, n.useContext)(s.L);
        return (0, i.jsx)(i.Fragment, {
          children: A.map((e) => {
            let t = f(e),
              n = (!h || !!y) && (w === A || x.includes(t));
            return (0, i.jsx)(
              c,
              {
                isPresent: n,
                initial: (!S.current || !!o) && void 0,
                custom: n ? void 0 : r,
                presenceAffectsLayout: u,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!E.has(t)) return;
                      E.set(t, !0);
                      let e = !0;
                      E.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == O || O(),
                          k(T.current),
                          h && (null == b || b()),
                          l && l());
                    },
                anchorX: g,
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    85087: (e, t, r) => {
      "use strict";
      r.d(t, { xQ: () => s });
      var i = r(12115),
        n = r(39656);
      function s(e = !0) {
        let t = (0, i.useContext)(n.t);
        if (null === t) return [!0, null];
        let { isPresent: r, onExitComplete: a, register: o } = t,
          l = (0, i.useId)();
        (0, i.useEffect)(() => {
          e && o(l);
        }, [e]);
        let u = (0, i.useCallback)(() => e && a && a(l), [l, a, e]);
        return !r && a ? [!1, u] : [!0];
      }
    },
    64710: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => i });
      let i = (0, r(12115).createContext)({});
    },
    27249: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => i });
      let i = (0, r(12115).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    39656: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => i });
      let i = (0, r(12115).createContext)(null);
    },
    39124: (e, t, r) => {
      "use strict";
      let i;
      function n(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      r.d(t, { P: () => sf });
      let s = (e) => Array.isArray(e);
      function a(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let i = 0; i < r; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      function o(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function l(e, t, r, i) {
        if (
          "function" == typeof t ||
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [n, s] = (function (e) {
            let t = [{}, {}];
            return (
              null == e ||
                e.values.forEach((e, r) => {
                  (t[0][r] = e.get()), (t[1][r] = e.getVelocity());
                }),
              t
            );
          })(i);
          t = t(void 0 !== r ? r : e.custom, n, s);
        }
        return t;
      }
      function u(e, t, r) {
        let i = e.getProps();
        return l(i, t, void 0 !== r ? r : i.custom, e);
      }
      let d = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...d];
      function h(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      let p = h(() => void 0 !== window.ScrollTimeline);
      class f {
        constructor(e) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((e) => ("finished" in e ? e.finished : e))
          );
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][e] = t;
        }
        attachTimeline(e, t) {
          let r = this.animations.map((r) =>
            p() && r.attachTimeline
              ? r.attachTimeline(e)
              : "function" == typeof t
              ? t(r)
              : void 0
          );
          return () => {
            r.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class m extends f {
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
      }
      function v(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
      function g(e) {
        let t = 0,
          r = e.next(t);
        for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      function y(e) {
        return "function" == typeof e;
      }
      function b(e, t) {
        (e.timeline = t), (e.onfinish = null);
      }
      let w = (e) => Array.isArray(e) && "number" == typeof e[0],
        x = { linearEasing: void 0 },
        S = (function (e, t) {
          let r = h(e);
          return () => {
            var e;
            return null !== (e = x[t]) && void 0 !== e ? e : r();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (e) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        T = (e, t, r) => {
          let i = t - e;
          return 0 === i ? 1 : (r - e) / i;
        },
        E = (e, t, r = 10) => {
          let i = "",
            n = Math.max(Math.round(t / r), 2);
          for (let t = 0; t < n; t++) i += e(T(0, n - 1, t)) + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        },
        C = ([e, t, r, i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`,
        P = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: C([0, 0.65, 0.55, 1]),
          circOut: C([0.55, 0, 1, 0.45]),
          backIn: C([0.31, 0.01, 0.66, -0.59]),
          backOut: C([0.33, 1.53, 0.69, 0.99]),
        },
        A = { x: !1, y: !1 };
      function k(e, t) {
        let r = (function (e, t, r) {
            if (e instanceof Element) return [e];
            if ("string" == typeof e) {
              let t = document.querySelectorAll(e);
              return t ? Array.from(t) : [];
            }
            return Array.from(e);
          })(e),
          i = new AbortController();
        return [r, { passive: !0, ...t, signal: i.signal }, () => i.abort()];
      }
      function M(e) {
        return !("touch" === e.pointerType || A.x || A.y);
      }
      let O = (e, t) => !!t && (e === t || O(e, t.parentElement)),
        _ = (e) =>
          "mouse" === e.pointerType
            ? "number" != typeof e.button || e.button <= 0
            : !1 !== e.isPrimary,
        D = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        j = new WeakSet();
      function L(e) {
        return (t) => {
          "Enter" === t.key && e(t);
        };
      }
      function F(e, t) {
        e.dispatchEvent(
          new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
        );
      }
      let V = (e, t) => {
        let r = e.currentTarget;
        if (!r) return;
        let i = L(() => {
          if (j.has(r)) return;
          F(r, "down");
          let e = L(() => {
            F(r, "up");
          });
          r.addEventListener("keyup", e, t),
            r.addEventListener("blur", () => F(r, "cancel"), t);
        });
        r.addEventListener("keydown", i, t),
          r.addEventListener(
            "blur",
            () => r.removeEventListener("keydown", i),
            t
          );
      };
      function R(e) {
        return _(e) && !(A.x || A.y);
      }
      let I = (e) => 1e3 * e,
        N = (e) => e / 1e3,
        B = (e) => e,
        $ = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        z = new Set($),
        H = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...$,
        ]),
        W = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        U = (e) => (s(e) ? e[e.length - 1] || 0 : e),
        Y = { skipAnimations: !1, useManualTiming: !1 },
        q = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function G(e, t) {
        let r = !1,
          i = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (r = !0),
          a = q.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  r = new Set(),
                  i = !1,
                  n = !1,
                  s = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 };
                function o(t) {
                  s.has(t) && (l.schedule(t), e()), t(a);
                }
                let l = {
                  schedule: (e, n = !1, a = !1) => {
                    let o = a && i ? t : r;
                    return n && s.add(e), o.has(e) || o.add(e), e;
                  },
                  cancel: (e) => {
                    r.delete(e), s.delete(e);
                  },
                  process: (e) => {
                    if (((a = e), i)) {
                      n = !0;
                      return;
                    }
                    (i = !0),
                      ([t, r] = [r, t]),
                      t.forEach(o),
                      t.clear(),
                      (i = !1),
                      n && ((n = !1), l.process(e));
                  },
                };
                return l;
              })(s)),
              e
            ),
            {}
          ),
          {
            read: o,
            resolveKeyframes: l,
            update: u,
            preRender: d,
            render: c,
            postRender: h,
          } = a,
          p = () => {
            let s = Y.useManualTiming ? n.timestamp : performance.now();
            (r = !1),
              (n.delta = i
                ? 1e3 / 60
                : Math.max(Math.min(s - n.timestamp, 40), 1)),
              (n.timestamp = s),
              (n.isProcessing = !0),
              o.process(n),
              l.process(n),
              u.process(n),
              d.process(n),
              c.process(n),
              h.process(n),
              (n.isProcessing = !1),
              r && t && ((i = !1), e(p));
          },
          f = () => {
            (r = !0), (i = !0), n.isProcessing || e(p);
          };
        return {
          schedule: q.reduce((e, t) => {
            let i = a[t];
            return (
              (e[t] = (e, t = !1, n = !1) => (r || f(), i.schedule(e, t, n))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < q.length; t++) a[q[t]].cancel(e);
          },
          state: n,
          steps: a,
        };
      }
      let {
        schedule: X,
        cancel: Z,
        state: K,
        steps: Q,
      } = G(
        "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : B,
        !0
      );
      function J() {
        i = void 0;
      }
      let ee = {
        now: () => (
          void 0 === i &&
            ee.set(
              K.isProcessing || Y.useManualTiming
                ? K.timestamp
                : performance.now()
            ),
          i
        ),
        set: (e) => {
          (i = e), queueMicrotask(J);
        },
      };
      function et(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function er(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      class ei {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return et(this.subscriptions, e), () => er(this.subscriptions, e);
        }
        notify(e, t, r) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](e, t, r);
            else
              for (let n = 0; n < i; n++) {
                let i = this.subscriptions[n];
                i && i(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let en = (e) => !isNaN(parseFloat(e)),
        es = { current: void 0 };
      class ea {
        constructor(e, t = {}) {
          (this.version = "12.0.6"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = ee.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = ee.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = en(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new ei());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  X.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return es.current && es.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e;
          let t = ee.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            r ? (1e3 / r) * e : 0
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function eo(e, t) {
        return new ea(e, t);
      }
      let el = (e) => !!(e && e.getVelocity);
      function eu(e, t) {
        let r = e.getValue("willChange");
        if (el(r) && r.add) return r.add(t);
      }
      let ed = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        ec = "data-" + ed("framerAppearId"),
        eh = { current: !1 },
        ep = (e, t, r) =>
          (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function ef(e, t, r, i) {
        if (e === t && r === i) return B;
        let n = (t) =>
          (function (e, t, r, i, n) {
            let s, a;
            let o = 0;
            do
              (s = ep((a = t + (r - t) / 2), i, n) - e) > 0 ? (r = a) : (t = a);
            while (Math.abs(s) > 1e-7 && ++o < 12);
            return a;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : ep(n(e), t, i));
      }
      let em = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        ev = (e) => (t) => 1 - e(1 - t),
        eg = ef(0.33, 1.53, 0.69, 0.99),
        ey = ev(eg),
        eb = em(ey),
        ew = (e) =>
          (e *= 2) < 1 ? 0.5 * ey(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        ex = (e) => 1 - Math.sin(Math.acos(e)),
        eS = ev(ex),
        eT = em(ex),
        eE = (e) => /^0[^.\s]+$/u.test(e),
        eC = (e, t, r) => (r > t ? t : r < e ? e : r),
        eP = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        eA = { ...eP, transform: (e) => eC(0, 1, e) },
        ek = { ...eP, default: 1 },
        eM = (e) => Math.round(1e5 * e) / 1e5,
        eO = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        e_ =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        eD = (e, t) => (r) =>
          !!(
            ("string" == typeof r && e_.test(r) && r.startsWith(e)) ||
            (t && null != r && Object.prototype.hasOwnProperty.call(r, t))
          ),
        ej = (e, t, r) => (i) => {
          if ("string" != typeof i) return i;
          let [n, s, a, o] = i.match(eO);
          return {
            [e]: parseFloat(n),
            [t]: parseFloat(s),
            [r]: parseFloat(a),
            alpha: void 0 !== o ? parseFloat(o) : 1,
          };
        },
        eL = (e) => eC(0, 255, e),
        eF = { ...eP, transform: (e) => Math.round(eL(e)) },
        eV = {
          test: eD("rgb", "red"),
          parse: ej("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: i = 1 }) =>
            "rgba(" +
            eF.transform(e) +
            ", " +
            eF.transform(t) +
            ", " +
            eF.transform(r) +
            ", " +
            eM(eA.transform(i)) +
            ")",
        },
        eR = {
          test: eD("#"),
          parse: function (e) {
            let t = "",
              r = "",
              i = "",
              n = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (i = e.substring(5, 7)),
                  (n = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (i = e.substring(3, 4)),
                  (n = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (i += i),
                  (n += n)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(i, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: eV.transform,
        },
        eI = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        eN = eI("deg"),
        eB = eI("%"),
        e$ = eI("px"),
        ez = eI("vh"),
        eH = eI("vw"),
        eW = {
          ...eB,
          parse: (e) => eB.parse(e) / 100,
          transform: (e) => eB.transform(100 * e),
        },
        eU = {
          test: eD("hsl", "hue"),
          parse: ej("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: i = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            eB.transform(eM(t)) +
            ", " +
            eB.transform(eM(r)) +
            ", " +
            eM(eA.transform(i)) +
            ")",
        },
        eY = {
          test: (e) => eV.test(e) || eR.test(e) || eU.test(e),
          parse: (e) =>
            eV.test(e) ? eV.parse(e) : eU.test(e) ? eU.parse(e) : eR.parse(e),
          transform: (e) =>
            "string" == typeof e
              ? e
              : e.hasOwnProperty("red")
              ? eV.transform(e)
              : eU.transform(e),
        },
        eq =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        eG = "number",
        eX = "color",
        eZ =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eK(e) {
        let t = e.toString(),
          r = [],
          i = { color: [], number: [], var: [] },
          n = [],
          s = 0,
          a = t
            .replace(
              eZ,
              (e) => (
                eY.test(e)
                  ? (i.color.push(s), n.push(eX), r.push(eY.parse(e)))
                  : e.startsWith("var(")
                  ? (i.var.push(s), n.push("var"), r.push(e))
                  : (i.number.push(s), n.push(eG), r.push(parseFloat(e))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: a, indexes: i, types: n };
      }
      function eQ(e) {
        return eK(e).values;
      }
      function eJ(e) {
        let { split: t, types: r } = eK(e),
          i = t.length;
        return (e) => {
          let n = "";
          for (let s = 0; s < i; s++)
            if (((n += t[s]), void 0 !== e[s])) {
              let t = r[s];
              t === eG
                ? (n += eM(e[s]))
                : t === eX
                ? (n += eY.transform(e[s]))
                : (n += e[s]);
            }
          return n;
        };
      }
      let e0 = (e) => ("number" == typeof e ? 0 : e),
        e1 = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              "string" == typeof e &&
              ((null === (t = e.match(eO)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(eq)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: eQ,
          createTransformer: eJ,
          getAnimatableNone: function (e) {
            let t = eQ(e);
            return eJ(e)(t.map(e0));
          },
        },
        e2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function e5(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [i] = r.match(eO) || [];
        if (!i) return e;
        let n = r.replace(i, ""),
          s = e2.has(t) ? 1 : 0;
        return i !== r && (s *= 100), t + "(" + s + n + ")";
      }
      let e3 = /\b([a-z-]*)\(.*?\)/gu,
        e9 = {
          ...e1,
          getAnimatableNone: (e) => {
            let t = e.match(e3);
            return t ? t.map(e5).join(" ") : e;
          },
        },
        e6 = { ...eP, transform: Math.round },
        e8 = {
          borderWidth: e$,
          borderTopWidth: e$,
          borderRightWidth: e$,
          borderBottomWidth: e$,
          borderLeftWidth: e$,
          borderRadius: e$,
          radius: e$,
          borderTopLeftRadius: e$,
          borderTopRightRadius: e$,
          borderBottomRightRadius: e$,
          borderBottomLeftRadius: e$,
          width: e$,
          maxWidth: e$,
          height: e$,
          maxHeight: e$,
          top: e$,
          right: e$,
          bottom: e$,
          left: e$,
          padding: e$,
          paddingTop: e$,
          paddingRight: e$,
          paddingBottom: e$,
          paddingLeft: e$,
          margin: e$,
          marginTop: e$,
          marginRight: e$,
          marginBottom: e$,
          marginLeft: e$,
          backgroundPositionX: e$,
          backgroundPositionY: e$,
          rotate: eN,
          rotateX: eN,
          rotateY: eN,
          rotateZ: eN,
          scale: ek,
          scaleX: ek,
          scaleY: ek,
          scaleZ: ek,
          skew: eN,
          skewX: eN,
          skewY: eN,
          distance: e$,
          translateX: e$,
          translateY: e$,
          translateZ: e$,
          x: e$,
          y: e$,
          z: e$,
          perspective: e$,
          transformPerspective: e$,
          opacity: eA,
          originX: eW,
          originY: eW,
          originZ: e$,
          zIndex: e6,
          size: e$,
          fillOpacity: eA,
          strokeOpacity: eA,
          numOctaves: e6,
        },
        e4 = {
          ...e8,
          color: eY,
          backgroundColor: eY,
          outlineColor: eY,
          fill: eY,
          stroke: eY,
          borderColor: eY,
          borderTopColor: eY,
          borderRightColor: eY,
          borderBottomColor: eY,
          borderLeftColor: eY,
          filter: e9,
          WebkitFilter: e9,
        },
        e7 = (e) => e4[e];
      function te(e, t) {
        let r = e7(e);
        return (
          r !== e9 && (r = e1),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      let tt = new Set(["auto", "none", "0"]),
        tr = (e) => e === eP || e === e$,
        ti = (e, t) => parseFloat(e.split(", ")[t]),
        tn =
          (e, t) =>
          (r, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let n = i.match(/^matrix3d\((.+)\)$/u);
            if (n) return ti(n[1], t);
            {
              let t = i.match(/^matrix\((.+)\)$/u);
              return t ? ti(t[1], e) : 0;
            }
          },
        ts = new Set(["x", "y", "z"]),
        ta = $.filter((e) => !ts.has(e)),
        to = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: tn(4, 13),
          y: tn(5, 14),
        };
      (to.translateX = to.x), (to.translateY = to.y);
      let tl = new Set(),
        tu = !1,
        td = !1;
      function tc() {
        if (td) {
          let e = Array.from(tl).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                ta.forEach((r) => {
                  let i = e.getValue(r);
                  void 0 !== i &&
                    (t.push([r, i.get()]),
                    i.set(r.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var i;
                  null === (i = e.getValue(t)) || void 0 === i || i.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (td = !1), (tu = !1), tl.forEach((e) => e.complete()), tl.clear();
      }
      function th() {
        tl.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (td = !0);
        });
      }
      class tp {
        constructor(e, t, r, i, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = i),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tl.add(this),
                tu || ((tu = !0), X.read(th), X.resolveKeyframes(tc)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: r,
            motionValue: i,
          } = this;
          for (let n = 0; n < e.length; n++)
            if (null === e[n]) {
              if (0 === n) {
                let n = null == i ? void 0 : i.get(),
                  s = e[e.length - 1];
                if (void 0 !== n) e[0] = n;
                else if (r && t) {
                  let i = r.readValue(t, s);
                  null != i && (e[0] = i);
                }
                void 0 === e[0] && (e[0] = s), i && void 0 === n && i.set(e[0]);
              } else e[n] = e[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tl.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tl.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tf = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        tm = (e) => (t) => "string" == typeof t && t.startsWith(e),
        tv = tm("--"),
        tg = tm("var(--"),
        ty = (e) => !!tg(e) && tb.test(e.split("/*")[0].trim()),
        tb =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        tw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        tx = (e) => (t) => t.test(e),
        tS = [
          eP,
          e$,
          eB,
          eN,
          eH,
          ez,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        tT = (e) => tS.find(tx(e));
      class tE extends tp {
        constructor(e, t, r, i, n) {
          super(e, t, r, i, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if ("string" == typeof i && ty((i = i.trim()))) {
              let n = (function e(t, r, i = 1) {
                B(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (e) {
                  let t = tw.exec(e);
                  if (!t) return [,];
                  let [, r, i, n] = t;
                  return [`--${null != r ? r : i}`, n];
                })(t);
                if (!n) return;
                let a = window.getComputedStyle(r).getPropertyValue(n);
                if (a) {
                  let e = a.trim();
                  return tf(e) ? parseFloat(e) : e;
                }
                return ty(s) ? e(s, r, i + 1) : s;
              })(i, t.current);
              void 0 !== n && (e[r] = n),
                r === e.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !H.has(r) || 2 !== e.length))
            return;
          let [i, n] = e,
            s = tT(i),
            a = tT(n);
          if (s !== a) {
            if (tr(s) && tr(a))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                "string" == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var i;
            ("number" == typeof (i = e[t])
              ? 0 === i
              : null === i || "none" === i || "0" === i || eE(i)) && r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let i,
                n = 0;
              for (; n < e.length && !i; ) {
                let t = e[n];
                "string" == typeof t &&
                  !tt.has(t) &&
                  eK(t).values.length &&
                  (i = e[n]),
                  n++;
              }
              if (i && r) for (let n of t) e[n] = te(r, i);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e || !e.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = to[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let i = t[t.length - 1];
          void 0 !== i && e.getValue(r, i).jump(i, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let n = t.getValue(r);
          n && n.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            a = i[s];
          (i[s] = to[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let tC = (e, t) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (e1.test(e) || "0" === e) &&
              !e.startsWith("url("))
          ),
        tP = (e) => null !== e;
      function tA(e, { repeat: t, repeatType: r = "loop" }, i) {
        let n = e.filter(tP),
          s = t && "loop" !== r && t % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== i ? i : n[s];
      }
      class tk {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = "keyframes",
          repeat: i = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = ee.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: i,
              repeatDelay: n,
              repeatType: s,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (th(), tc()),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = ee.now()), (this.hasAttemptedResolve = !0);
          let {
            name: r,
            type: i,
            velocity: n,
            delay: s,
            onComplete: a,
            onUpdate: o,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, r, i) {
              let n = e[0];
              if (null === n) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let s = e[e.length - 1],
                a = tC(n, t),
                o = tC(s, t);
              return (
                B(
                  a === o,
                  `You are trying to animate ${t} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!a &&
                  !!o &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t) return !0;
                  })(e) ||
                    (("spring" === r || y(r)) && i))
              );
            })(e, r, i, n)
          ) {
            if (eh.current || !s) {
              o && o(tA(e, this.options, t)),
                a && a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      let tM = (e, t, r) => e + (t - e) * r;
      function tO(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      function t_(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      let tD = (e, t, r) => {
          let i = e * e,
            n = r * (t * t - i) + i;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        tj = [eR, eV, eU],
        tL = (e) => tj.find((t) => t.test(e));
      function tF(e) {
        let t = tL(e);
        if (
          (B(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let r = t.parse(e);
        return (
          t === eU &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: i }) {
              (e /= 360), (r /= 100);
              let n = 0,
                s = 0,
                a = 0;
              if ((t /= 100)) {
                let i = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  o = 2 * r - i;
                (n = tO(o, i, e + 1 / 3)),
                  (s = tO(o, i, e)),
                  (a = tO(o, i, e - 1 / 3));
              } else n = s = a = r;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: i,
              };
            })(r)),
          r
        );
      }
      let tV = (e, t) => {
          let r = tF(e),
            i = tF(t);
          if (!r || !i) return t_(e, t);
          let n = { ...r };
          return (e) => (
            (n.red = tD(r.red, i.red, e)),
            (n.green = tD(r.green, i.green, e)),
            (n.blue = tD(r.blue, i.blue, e)),
            (n.alpha = tM(r.alpha, i.alpha, e)),
            eV.transform(n)
          );
        },
        tR = (e, t) => (r) => t(e(r)),
        tI = (...e) => e.reduce(tR),
        tN = new Set(["none", "hidden"]);
      function tB(e, t) {
        return (r) => tM(e, t, r);
      }
      function t$(e) {
        return "number" == typeof e
          ? tB
          : "string" == typeof e
          ? ty(e)
            ? t_
            : eY.test(e)
            ? tV
            : tW
          : Array.isArray(e)
          ? tz
          : "object" == typeof e
          ? eY.test(e)
            ? tV
            : tH
          : t_;
      }
      function tz(e, t) {
        let r = [...e],
          i = r.length,
          n = e.map((e, r) => t$(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < i; t++) r[t] = n[t](e);
          return r;
        };
      }
      function tH(e, t) {
        let r = { ...e, ...t },
          i = {};
        for (let n in r)
          void 0 !== e[n] && void 0 !== t[n] && (i[n] = t$(e[n])(e[n], t[n]));
        return (e) => {
          for (let t in i) r[t] = i[t](e);
          return r;
        };
      }
      let tW = (e, t) => {
        let r = e1.createTransformer(t),
          i = eK(e),
          n = eK(t);
        return i.indexes.var.length === n.indexes.var.length &&
          i.indexes.color.length === n.indexes.color.length &&
          i.indexes.number.length >= n.indexes.number.length
          ? (tN.has(e) && !n.values.length) || (tN.has(t) && !i.values.length)
            ? (function (e, t) {
                return tN.has(e)
                  ? (r) => (r <= 0 ? e : t)
                  : (r) => (r >= 1 ? t : e);
              })(e, t)
            : tI(
                tz(
                  (function (e, t) {
                    var r;
                    let i = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < t.values.length; s++) {
                      let a = t.types[s],
                        o = e.indexes[a][n[a]],
                        l = null !== (r = e.values[o]) && void 0 !== r ? r : 0;
                      (i[s] = l), n[a]++;
                    }
                    return i;
                  })(i, n),
                  n.values
                ),
                r
              )
          : (B(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            t_(e, t));
      };
      function tU(e, t, r) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
          ? tM(e, t, r)
          : t$(e)(e, t);
      }
      function tY(e, t, r) {
        var i, n;
        let s = Math.max(t - 5, 0);
        return (i = r - e(s)), (n = t - s) ? (1e3 / n) * i : 0;
      }
      let tq = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function tG(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let tX = ["duration", "bounce"],
        tZ = ["stiffness", "damping", "mass"];
      function tK(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function tQ(e = tq.visualDuration, t = tq.bounce) {
        let r;
        let i =
            "object" != typeof e
              ? { visualDuration: e, keyframes: [0, 1], bounce: t }
              : e,
          { restSpeed: n, restDelta: s } = i,
          a = i.keyframes[0],
          o = i.keyframes[i.keyframes.length - 1],
          l = { done: !1, value: a },
          {
            stiffness: u,
            damping: d,
            mass: c,
            duration: h,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (e) {
            let t = {
              velocity: tq.velocity,
              stiffness: tq.stiffness,
              damping: tq.damping,
              mass: tq.mass,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!tK(e, tZ) && tK(e, tX)) {
              if (e.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * e.visualDuration),
                  i = r * r,
                  n = 2 * eC(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
                t = { ...t, mass: tq.mass, stiffness: i, damping: n };
              } else {
                let r = (function ({
                  duration: e = tq.duration,
                  bounce: t = tq.bounce,
                  velocity: r = tq.velocity,
                  mass: i = tq.mass,
                }) {
                  let n, s;
                  B(
                    e <= I(tq.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let a = 1 - t;
                  (a = eC(tq.minDamping, tq.maxDamping, a)),
                    (e = eC(tq.minDuration, tq.maxDuration, N(e))),
                    a < 1
                      ? ((n = (t) => {
                          let i = t * a,
                            n = i * e;
                          return 0.001 - ((i - r) / tG(t, a)) * Math.exp(-n);
                        }),
                        (s = (t) => {
                          let i = t * a * e,
                            s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                            o = Math.exp(-i),
                            l = tG(Math.pow(t, 2), a);
                          return (
                            ((i * r + r - s) *
                              o *
                              (-n(t) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((n = (t) =>
                          -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                        (s = (t) => e * e * (r - t) * Math.exp(-t * e)));
                  let o = (function (e, t, r) {
                    let i = r;
                    for (let r = 1; r < 12; r++) i -= e(i) / t(i);
                    return i;
                  })(n, s, 5 / e);
                  if (((e = I(e)), isNaN(o)))
                    return {
                      stiffness: tq.stiffness,
                      damping: tq.damping,
                      duration: e,
                    };
                  {
                    let t = Math.pow(o, 2) * i;
                    return {
                      stiffness: t,
                      damping: 2 * a * Math.sqrt(i * t),
                      duration: e,
                    };
                  }
                })(e);
                (t = { ...t, ...r, mass: tq.mass }).isResolvedFromDuration = !0;
              }
            }
            return t;
          })({ ...i, velocity: -N(i.velocity || 0) }),
          m = p || 0,
          v = d / (2 * Math.sqrt(u * c)),
          y = o - a,
          b = N(Math.sqrt(u / c)),
          w = 5 > Math.abs(y);
        if (
          (n || (n = w ? tq.restSpeed.granular : tq.restSpeed.default),
          s || (s = w ? tq.restDelta.granular : tq.restDelta.default),
          v < 1)
        ) {
          let e = tG(b, v);
          r = (t) =>
            o -
            Math.exp(-v * b * t) *
              (((m + v * b * y) / e) * Math.sin(e * t) + y * Math.cos(e * t));
        } else if (1 === v)
          r = (e) => o - Math.exp(-b * e) * (y + (m + b * y) * e);
        else {
          let e = b * Math.sqrt(v * v - 1);
          r = (t) => {
            let r = Math.exp(-v * b * t),
              i = Math.min(e * t, 300);
            return (
              o -
              (r * ((m + v * b * y) * Math.sinh(i) + e * y * Math.cosh(i))) / e
            );
          };
        }
        let x = {
          calculatedDuration: (f && h) || null,
          next: (e) => {
            let t = r(e);
            if (f) l.done = e >= h;
            else {
              let i = 0;
              v < 1 && (i = 0 === e ? I(m) : tY(r, e, t));
              let a = Math.abs(i) <= n,
                u = Math.abs(o - t) <= s;
              l.done = a && u;
            }
            return (l.value = l.done ? o : t), l;
          },
          toString: () => {
            let e = Math.min(g(x), 2e4),
              t = E((t) => x.next(e * t).value, e, 30);
            return e + "ms " + t;
          },
        };
        return x;
      }
      function tJ({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: i = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: d,
      }) {
        let c, h;
        let p = e[0],
          f = { done: !1, value: p },
          m = (e) => (void 0 !== o && e < o) || (void 0 !== l && e > l),
          v = (e) =>
            void 0 === o
              ? l
              : void 0 === l
              ? o
              : Math.abs(o - e) < Math.abs(l - e)
              ? o
              : l,
          g = r * t,
          y = p + g,
          b = void 0 === a ? y : a(y);
        b !== y && (g = b - p);
        let w = (e) => -g * Math.exp(-e / i),
          x = (e) => b + w(e),
          S = (e) => {
            let t = w(e),
              r = x(e);
            (f.done = Math.abs(t) <= u), (f.value = f.done ? b : r);
          },
          T = (e) => {
            m(f.value) &&
              ((c = e),
              (h = tQ({
                keyframes: [f.value, v(f.value)],
                velocity: tY(x, e, f.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: d,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (h || void 0 !== c || ((t = !0), S(e), T(e)),
              void 0 !== c && e >= c)
                ? h.next(e - c)
                : (t || S(e), f);
            },
          }
        );
      }
      let t0 = ef(0.42, 0, 1, 1),
        t1 = ef(0, 0, 0.58, 1),
        t2 = ef(0.42, 0, 0.58, 1),
        t5 = (e) => Array.isArray(e) && "number" != typeof e[0],
        t3 = {
          linear: B,
          easeIn: t0,
          easeInOut: t2,
          easeOut: t1,
          circIn: ex,
          circInOut: eT,
          circOut: eS,
          backIn: ey,
          backInOut: eb,
          backOut: eg,
          anticipate: ew,
        },
        t9 = (e) => {
          if (w(e)) {
            B(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, i, n] = e;
            return ef(t, r, i, n);
          }
          return "string" == typeof e
            ? (B(void 0 !== t3[e], `Invalid easing type '${e}'`), t3[e])
            : e;
        };
      function t6({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: i = "easeInOut",
      }) {
        let n = t5(i) ? i.map(t9) : t9(i),
          s = { done: !1, value: t[0] },
          a = (function (e, t, { clamp: r = !0, ease: i, mixer: n } = {}) {
            let s = e.length;
            if (
              (B(
                s === t.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => t[0];
            if (2 === s && t[0] === t[1]) return () => t[1];
            let a = e[0] === e[1];
            e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let o = (function (e, t, r) {
                let i = [],
                  n = r || tU,
                  s = e.length - 1;
                for (let r = 0; r < s; r++) {
                  let s = n(e[r], e[r + 1]);
                  t && (s = tI(Array.isArray(t) ? t[r] || B : t, s)), i.push(s);
                }
                return i;
              })(t, i, n),
              l = o.length,
              u = (r) => {
                if (a && r < e[0]) return t[0];
                let i = 0;
                if (l > 1) for (; i < e.length - 2 && !(r < e[i + 1]); i++);
                let n = T(e[i], e[i + 1], r);
                return o[i](n);
              };
            return r ? (t) => u(eC(e[0], e[s - 1], t)) : u;
          })(
            (r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let i = 1; i <= t; i++) {
                        let n = T(0, t, i);
                        e.push(tM(r, 1, n));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(n)
                ? n
                : t.map(() => n || t2).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((s.value = a(t)), (s.done = t >= e), s),
        };
      }
      let t8 = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => X.update(t, !0),
            stop: () => Z(t),
            now: () => (K.isProcessing ? K.timestamp : ee.now()),
          };
        },
        t4 = { decay: tJ, inertia: tJ, tween: t6, keyframes: t6, spring: tQ },
        t7 = (e) => e / 100;
      class re extends tk {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: r,
              element: i,
              keyframes: n,
            } = this.options,
            s = (null == i ? void 0 : i.KeyframeResolver) || tp;
          (this.resolver = new s(
            n,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            i
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(e) {
          let t, r;
          let {
              type: i = "keyframes",
              repeat: n = 0,
              repeatDelay: s = 0,
              repeatType: a,
              velocity: o = 0,
            } = this.options,
            l = y(i) ? i : t4[i] || t6;
          l !== t6 &&
            "number" != typeof e[0] &&
            ((t = tI(t7, tU(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === a &&
            (r = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -o,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = g(u));
          let { calculatedDuration: d } = u,
            c = d + s;
          return {
            generator: u,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: d,
            resolvedDuration: c,
            totalDuration: c * (n + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: o,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: d,
          } = r;
          if (null === this.startTime) return n.next(0);
          let {
            delay: c,
            repeat: h,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            b = n;
          if (h) {
            let e = Math.min(this.currentTime, u) / d,
              t = Math.floor(e),
              r = e % 1;
            !r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, h + 1)) % 2 &&
                ("reverse" === p
                  ? ((r = 1 - r), f && (r -= f / d))
                  : "mirror" === p && (b = s)),
              (y = eC(0, 1, r) * d);
          }
          let w = g ? { done: !1, value: o[0] } : b.next(y);
          a && (w.value = a(w.value));
          let { done: x } = w;
          g ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && x));
          return (
            S && void 0 !== i && (w.value = tA(o, this.options, i)),
            m && m(w.value),
            S && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? N(e.calculatedDuration) : 0;
        }
        get time() {
          return N(this.currentTime);
        }
        set time(e) {
          (e = I(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e), t && (this.time = N(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = t8, onPlay: t, startTime: r } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = i)
            : (this.startTime = null != r ? r : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let rt = new Set(["opacity", "clipPath", "filter", "transform"]),
        rr = h(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
        ri = { anticipate: ew, backInOut: eb, circInOut: eT };
      class rn extends tk {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: r,
            element: i,
            keyframes: n,
          } = this.options;
          (this.resolver = new tE(
            n,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var r;
          let {
            duration: i = 300,
            times: n,
            ease: s,
            type: a,
            motionValue: o,
            name: l,
            startTime: u,
          } = this.options;
          if (!o.owner || !o.owner.current) return !1;
          if (
            ("string" == typeof s && S() && s in ri && (s = ri[s]),
            y((r = this.options).type) ||
              "spring" === r.type ||
              !(function e(t) {
                return !!(
                  ("function" == typeof t && S()) ||
                  !t ||
                  ("string" == typeof t && (t in P || S())) ||
                  w(t) ||
                  (Array.isArray(t) && t.every(e))
                );
              })(r.ease))
          ) {
            let {
                onComplete: t,
                onUpdate: r,
                motionValue: o,
                element: l,
                ...u
              } = this.options,
              d = (function (e, t) {
                let r = new re({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: e[0] },
                  n = [],
                  s = 0;
                for (; !i.done && s < 2e4; )
                  n.push((i = r.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(e, u);
            1 === (e = d.keyframes).length && (e[1] = e[0]),
              (i = d.duration),
              (n = d.times),
              (s = d.ease),
              (a = "keyframes");
          }
          let d = (function (
            e,
            t,
            r,
            {
              delay: i = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: a = "loop",
              ease: o = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [t]: r };
            l && (u.offset = l);
            let d = (function e(t, r) {
              if (t)
                return "function" == typeof t && S()
                  ? E(t, r)
                  : w(t)
                  ? C(t)
                  : Array.isArray(t)
                  ? t.map((t) => e(t, r) || P.easeOut)
                  : P[t];
            })(o, n);
            return (
              Array.isArray(d) && (u.easing = d),
              e.animate(u, {
                delay: i,
                duration: n,
                easing: Array.isArray(d) ? "linear" : d,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(o.owner.current, l, e, {
            ...this.options,
            duration: i,
            times: n,
            ease: s,
          });
          return (
            (d.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (b(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: r } = this.options;
                  o.set(tA(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: i,
              times: n,
              type: a,
              ease: s,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return N(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return N(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = I(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return B;
            let { animation: r } = t;
            b(r, e);
          } else this.pendingTimeline = e;
          return B;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: r,
            duration: i,
            type: n,
            ease: s,
            times: a,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: o,
                element: l,
                ...u
              } = this.options,
              d = new re({
                ...u,
                keyframes: r,
                duration: i,
                type: n,
                ease: s,
                times: a,
                isGenerator: !0,
              }),
              c = I(this.time);
            e.setWithVelocity(d.sample(c - 10).value, d.sample(c).value, 10);
          }
          let { onStop: o } = this.options;
          o && o(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: r,
            repeatDelay: i,
            repeatType: n,
            damping: s,
            type: a,
          } = e;
          if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: o, transformTemplate: l } = t.owner.getProps();
          return (
            rr() &&
            r &&
            rt.has(r) &&
            !o &&
            !l &&
            !i &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== a
          );
        }
      }
      let rs = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ra = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ro = { type: "keyframes", duration: 0.8 },
        rl = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ru = (e, { keyframes: t }) =>
          t.length > 2
            ? ro
            : z.has(e)
            ? e.startsWith("scale")
              ? ra(t[1])
              : rs
            : rl,
        rd =
          (e, t, r, i = {}, n, s) =>
          (a) => {
            let o = v(i, e) || {},
              l = o.delay || i.delay || 0,
              { elapsed: u = 0 } = i;
            u -= I(l);
            let d = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: t.getVelocity(),
              ...o,
              delay: -u,
              onUpdate: (e) => {
                t.set(e), o.onUpdate && o.onUpdate(e);
              },
              onComplete: () => {
                a(), o.onComplete && o.onComplete();
              },
              name: e,
              motionValue: t,
              element: s ? void 0 : n,
            };
            !(function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: i,
              staggerDirection: n,
              repeat: s,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...d
            }) {
              return !!Object.keys(d).length;
            })(o) && (d = { ...d, ...ru(e, d) }),
              d.duration && (d.duration = I(d.duration)),
              d.repeatDelay && (d.repeatDelay = I(d.repeatDelay)),
              void 0 !== d.from && (d.keyframes[0] = d.from);
            let c = !1;
            if (
              ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) ||
                ((d.duration = 0), 0 !== d.delay || (c = !0)),
              (eh.current || Y.skipAnimations) &&
                ((c = !0), (d.duration = 0), (d.delay = 0)),
              c && !s && void 0 !== t.get())
            ) {
              let e = tA(d.keyframes, o);
              if (void 0 !== e)
                return (
                  X.update(() => {
                    d.onUpdate(e), d.onComplete();
                  }),
                  new m([])
                );
            }
            return !s && rn.supports(d) ? new rn(d) : new re(d);
          };
      function rc(e, t, { delay: r = 0, transitionOverride: i, type: n } = {}) {
        var s;
        let {
          transition: a = e.getDefaultTransition(),
          transitionEnd: o,
          ...l
        } = t;
        i && (a = i);
        let d = [],
          c = n && e.animationState && e.animationState.getState()[n];
        for (let t in l) {
          let i = e.getValue(
              t,
              null !== (s = e.latestValues[t]) && void 0 !== s ? s : null
            ),
            n = l[t];
          if (
            void 0 === n ||
            (c &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let i = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), i;
              })(c, t))
          )
            continue;
          let o = { delay: r, ...v(a || {}, t) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let r = e.props[ec];
            if (r) {
              let e = window.MotionHandoffAnimation(r, t, X);
              null !== e && ((o.startTime = e), (u = !0));
            }
          }
          eu(e, t),
            i.start(
              rd(
                t,
                i,
                n,
                e.shouldReduceMotion && H.has(t) ? { type: !1 } : o,
                e,
                u
              )
            );
          let h = i.animation;
          h && d.push(h);
        }
        return (
          o &&
            Promise.all(d).then(() => {
              X.update(() => {
                o &&
                  (function (e, t) {
                    let {
                      transitionEnd: r = {},
                      transition: i = {},
                      ...n
                    } = u(e, t) || {};
                    for (let t in (n = { ...n, ...r })) {
                      let r = U(n[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(r)
                        : e.addValue(t, eo(r));
                    }
                  })(e, o);
              });
            }),
          d
        );
      }
      function rh(e, t, r = {}) {
        var i;
        let n = u(
            e,
            t,
            "exit" === r.type
              ? null === (i = e.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: s = e.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (s = r.transitionOverride);
        let a = n ? () => Promise.all(rc(e, n, r)) : () => Promise.resolve(),
          o =
            e.variantChildren && e.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = s;
                  return (function (e, t, r = 0, i = 0, n = 1, s) {
                    let a = [],
                      o = (e.variantChildren.size - 1) * i,
                      l = 1 === n ? (e = 0) => e * i : (e = 0) => o - e * i;
                    return (
                      Array.from(e.variantChildren)
                        .sort(rp)
                        .forEach((e, i) => {
                          e.notify("AnimationStart", t),
                            a.push(
                              rh(e, t, { ...s, delay: r + l(i) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(e, t, n + i, a, o, r);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([a(), o(r.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [a, o] : [o, a];
          return e().then(() => t());
        }
      }
      function rp(e, t) {
        return e.sortNodePosition(t);
      }
      let rf = c.length,
        rm = [...d].reverse(),
        rv = d.length;
      function rg(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function ry() {
        return {
          animate: rg(!0),
          whileInView: rg(),
          whileHover: rg(),
          whileTap: rg(),
          whileDrag: rg(),
          whileFocus: rg(),
          exit: rg(),
        };
      }
      class rb {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      class rw extends rb {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) =>
                        (function (e, t, r = {}) {
                          let i;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            i = Promise.all(t.map((t) => rh(e, t, r)));
                          else if ("string" == typeof t) i = rh(e, t, r);
                          else {
                            let n =
                              "function" == typeof t ? u(e, t, r.custom) : t;
                            i = Promise.all(rc(e, n, r));
                          }
                          return i.then(() => {
                            e.notify("AnimationComplete", t);
                          });
                        })(e, t, r)
                      )
                    ),
                  r = ry(),
                  i = !0,
                  l = (t) => (r, i) => {
                    var n;
                    let s = u(
                      e,
                      i,
                      "exit" === t
                        ? null === (n = e.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: e, transitionEnd: t, ...i } = s;
                      r = { ...r, ...i, ...t };
                    }
                    return r;
                  };
                function d(u) {
                  let { props: d } = e,
                    h =
                      (function e(t) {
                        if (!t) return;
                        if (!t.isControllingVariants) {
                          let r = (t.parent && e(t.parent)) || {};
                          return (
                            void 0 !== t.props.initial &&
                              (r.initial = t.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let e = 0; e < rf; e++) {
                          let i = c[e],
                            n = t.props[i];
                          (o(n) || !1 === n) && (r[i] = n);
                        }
                        return r;
                      })(e.parent) || {},
                    p = [],
                    f = new Set(),
                    m = {},
                    v = 1 / 0;
                  for (let t = 0; t < rv; t++) {
                    var g;
                    let c = rm[t],
                      y = r[c],
                      b = void 0 !== d[c] ? d[c] : h[c],
                      w = o(b),
                      x = c === u ? y.isActive : null;
                    !1 === x && (v = t);
                    let S = b === h[c] && b !== d[c] && w;
                    if (
                      (S && i && e.manuallyAnimateOnMount && (S = !1),
                      (y.protectedKeys = { ...m }),
                      (!y.isActive && null === x) ||
                        (!b && !y.prevProp) ||
                        n(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let T =
                        ((g = y.prevProp),
                        "string" == typeof b
                          ? b !== g
                          : !!Array.isArray(b) && !a(b, g)),
                      E =
                        T || (c === u && y.isActive && !S && w) || (t > v && w),
                      C = !1,
                      P = Array.isArray(b) ? b : [b],
                      A = P.reduce(l(c), {});
                    !1 === x && (A = {});
                    let { prevResolvedValues: k = {} } = y,
                      M = { ...k, ...A },
                      O = (t) => {
                        (E = !0),
                          f.has(t) && ((C = !0), f.delete(t)),
                          (y.needsAnimating[t] = !0);
                        let r = e.getValue(t);
                        r && (r.liveStyle = !1);
                      };
                    for (let e in M) {
                      let t = A[e],
                        r = k[e];
                      if (!m.hasOwnProperty(e))
                        (s(t) && s(r) ? a(t, r) : t === r)
                          ? void 0 !== t && f.has(e)
                            ? O(e)
                            : (y.protectedKeys[e] = !0)
                          : null != t
                          ? O(e)
                          : f.add(e);
                    }
                    (y.prevProp = b),
                      (y.prevResolvedValues = A),
                      y.isActive && (m = { ...m, ...A }),
                      i && e.blockInitialAnimation && (E = !1);
                    let _ = !(S && T) || C;
                    E &&
                      _ &&
                      p.push(
                        ...P.map((e) => ({
                          animation: e,
                          options: { type: c },
                        }))
                      );
                  }
                  if (f.size) {
                    let t = {};
                    f.forEach((r) => {
                      let i = e.getBaseTarget(r),
                        n = e.getValue(r);
                      n && (n.liveStyle = !0), (t[r] = null != i ? i : null);
                    }),
                      p.push({ animation: t });
                  }
                  let y = !!p.length;
                  return (
                    i &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (y = !1),
                    (i = !1),
                    y ? t(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (t, i) {
                    var n;
                    if (r[t].isActive === i) return Promise.resolve();
                    null === (n = e.variantChildren) ||
                      void 0 === n ||
                      n.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(t, i);
                      }),
                      (r[t].isActive = i);
                    let s = d(t);
                    for (let e in r) r[e].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (r) {
                    t = r(e);
                  },
                  getState: () => r,
                  reset: () => {
                    (r = ry()), (i = !0);
                  },
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          n(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      }
      let rx = 0;
      class rS extends rb {
        constructor() {
          super(...arguments), (this.id = rx++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let i = this.node.animationState.setActive("exit", !e);
          t && !e && i.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      function rT(e, t, r, i = { passive: !0 }) {
        return e.addEventListener(t, r, i), () => e.removeEventListener(t, r);
      }
      function rE(e) {
        return { point: { x: e.pageX, y: e.pageY } };
      }
      let rC = (e) => (t) => _(t) && e(t, rE(t));
      function rP(e, t, r, i) {
        return rT(e, t, rC(r), i);
      }
      let rA = (e, t) => Math.abs(e - t);
      class rk {
        constructor(
          e,
          t,
          {
            transformPagePoint: r,
            contextWindow: i,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = r_(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                r =
                  (function (e, t) {
                    return Math.sqrt(rA(e.x, t.x) ** 2 + rA(e.y, t.y) ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !r) return;
              let { point: i } = e,
                { timestamp: n } = K;
              this.history.push({ ...i, timestamp: n });
              let { onStart: s, onMove: a } = this.handlers;
              t ||
                (s && s(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = rM(t, this.transformPagePoint)),
                X.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: i,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = r_(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : rM(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(e, s), i && i(e, s);
            }),
            !_(e))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = t),
            (this.transformPagePoint = r),
            (this.contextWindow = i || window);
          let s = rM(rE(e), this.transformPagePoint),
            { point: a } = s,
            { timestamp: o } = K;
          this.history = [{ ...a, timestamp: o }];
          let { onSessionStart: l } = t;
          l && l(e, r_(s, this.history)),
            (this.removeListeners = tI(
              rP(this.contextWindow, "pointermove", this.handlePointerMove),
              rP(this.contextWindow, "pointerup", this.handlePointerUp),
              rP(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), Z(this.updatePoint);
        }
      }
      function rM(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function rO(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function r_({ point: e }, t) {
        return {
          point: e,
          delta: rO(e, rD(t)),
          offset: rO(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              i = null,
              n = rD(e);
            for (
              ;
              r >= 0 && ((i = e[r]), !(n.timestamp - i.timestamp > I(0.1)));

            )
              r--;
            if (!i) return { x: 0, y: 0 };
            let s = N(n.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let a = { x: (n.x - i.x) / s, y: (n.y - i.y) / s };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(t, 0),
        };
      }
      function rD(e) {
        return e[e.length - 1];
      }
      function rj(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function rL(e) {
        return e.max - e.min;
      }
      function rF(e, t, r, i = 0.5) {
        (e.origin = i),
          (e.originPoint = tM(t.min, t.max, e.origin)),
          (e.scale = rL(r) / rL(t)),
          (e.translate = tM(r.min, r.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0);
      }
      function rV(e, t, r, i) {
        rF(e.x, t.x, r.x, i ? i.originX : void 0),
          rF(e.y, t.y, r.y, i ? i.originY : void 0);
      }
      function rR(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + rL(t));
      }
      function rI(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + rL(t));
      }
      function rN(e, t, r) {
        rI(e.x, t.x, r.x), rI(e.y, t.y, r.y);
      }
      function rB(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function r$(e, t) {
        let r = t.min - e.min,
          i = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, i] = [i, r]), { min: r, max: i }
        );
      }
      function rz(e, t, r) {
        return { min: rH(e, t), max: rH(e, r) };
      }
      function rH(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let rW = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        rU = () => ({ x: rW(), y: rW() }),
        rY = () => ({ min: 0, max: 0 }),
        rq = () => ({ x: rY(), y: rY() });
      function rG(e) {
        return [e("x"), e("y")];
      }
      function rX({ top: e, left: t, right: r, bottom: i }) {
        return { x: { min: t, max: r }, y: { min: e, max: i } };
      }
      function rZ(e) {
        return void 0 === e || 1 === e;
      }
      function rK({ scale: e, scaleX: t, scaleY: r }) {
        return !rZ(e) || !rZ(t) || !rZ(r);
      }
      function rQ(e) {
        return (
          rK(e) ||
          rJ(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function rJ(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function r0(e, t, r, i, n) {
        return void 0 !== n && (e = i + n * (e - i)), i + r * (e - i) + t;
      }
      function r1(e, t = 0, r = 1, i, n) {
        (e.min = r0(e.min, t, r, i, n)), (e.max = r0(e.max, t, r, i, n));
      }
      function r2(e, { x: t, y: r }) {
        r1(e.x, t.translate, t.scale, t.originPoint),
          r1(e.y, r.translate, r.scale, r.originPoint);
      }
      function r5(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function r3(e, t, r, i, n = 0.5) {
        let s = tM(e.min, e.max, n);
        r1(e, t, r, s, i);
      }
      function r9(e, t) {
        r3(e.x, t.x, t.scaleX, t.scale, t.originX),
          r3(e.y, t.y, t.scaleY, t.scale, t.originY);
      }
      function r6(e, t) {
        return rX(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              i = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: i.y, right: i.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let r8 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        r4 = new WeakMap();
      class r7 {
        constructor(e) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = rq()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new rk(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(rE(e).point);
              },
              onStart: (e, t) => {
                let {
                  drag: r,
                  dragPropagation: i,
                  onDragStart: n,
                } = this.getProps();
                if (
                  r &&
                  !i &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === r || "y" === r
                      ? A[r]
                        ? null
                        : ((A[r] = !0),
                          () => {
                            A[r] = !1;
                          })
                      : A.x || A.y
                      ? null
                      : ((A.x = A.y = !0),
                        () => {
                          A.x = A.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  rG((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (eB.test(t)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let i = r.layout.layoutBox[e];
                        i && (t = rL(i) * (parseFloat(t) / 100));
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  n && X.postRender(() => n(e, t)),
                  eu(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: i,
                  onDirectionLock: n,
                  onDrag: s,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: a } = t;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let r = null;
                    return (
                      Math.abs(e.y) > t
                        ? (r = "y")
                        : Math.abs(e.x) > t && (r = "x"),
                      r
                    );
                  })(a)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, a),
                  this.updateAxis("y", t.point, a),
                  this.visualElement.render(),
                  s && s(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                rG((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: r8(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: i } = t;
          this.startAnimation(i);
          let { onDragEnd: n } = this.getProps();
          n && X.postRender(() => n(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, r) {
          let { drag: i } = this.getProps();
          if (!r || !ie(e, i, this.currentDirection)) return;
          let n = this.getAxisMotionValue(e),
            s = this.originPoint[e] + r[e];
          this.constraints &&
            this.constraints[e] &&
            (s = (function (e, { min: t, max: r }, i) {
              return (
                void 0 !== t && e < t
                  ? (e = i ? tM(t, e, i.min) : Math.max(e, t))
                  : void 0 !== r &&
                    e > r &&
                    (e = i ? tM(r, e, i.max) : Math.min(e, r)),
                e
              );
            })(s, this.constraints[e], this.elastic[e])),
            n.set(s);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: r } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            n = this.constraints;
          t && rj(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                e,
                { top: t, left: r, bottom: i, right: n }
              ) {
                return { x: rB(e.x, r, n), y: rB(e.y, t, i) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: rz(e, "left", "right"), y: rz(e, "top", "bottom") }
              );
            })(r)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              rG((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(i.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } =
            this.getProps();
          if (!t || !rj(t)) return !1;
          let i = t.current;
          B(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (e, t, r) {
              let i = r6(e, r),
                { scroll: n } = t;
              return n && (r5(i.x, n.offset.x), r5(i.y, n.offset.y)), i;
            })(i, n.root, this.visualElement.getTransformPagePoint()),
            a = { x: r$((e = n.layout.layoutBox).x, s.x), y: r$(e.y, s.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!e), e && (a = rX(e));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: i,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: a,
            } = this.getProps(),
            o = this.constraints || {};
          return Promise.all(
            rG((a) => {
              if (!ie(a, t, this.currentDirection)) return;
              let l = (o && o[a]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? e[a] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(a, u);
            })
          ).then(a);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return (
            eu(this.visualElement, e),
            r.start(rd(e, r, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          rG((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          rG((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[t] ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          rG((t) => {
            let { drag: r } = this.getProps();
            if (!ie(t, r, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              n = this.getAxisMotionValue(t);
            if (i && i.layout) {
              let { min: r, max: s } = i.layout.layoutBox[t];
              n.set(e[t] - tM(r, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!rj(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          rG((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let r = t.get();
              i[e] = (function (e, t) {
                let r = 0.5,
                  i = rL(e),
                  n = rL(t);
                return (
                  n > i
                    ? (r = T(t.min, t.max - i, e.min))
                    : i > n && (r = T(e.min, e.max - n, t.min)),
                  eC(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            rG((t) => {
              if (!ie(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: n, max: s } = this.constraints[t];
              r.set(tM(n, s, i[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          r4.set(this.visualElement, this);
          let e = rP(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              rj(e) &&
                e.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener("measure", t);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            X.read(t);
          let n = rT(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = r.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (rG((t) => {
                    let r = this.getAxisMotionValue(t);
                    r &&
                      ((this.originPoint[t] += e[t].translate),
                      r.set(r.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), e(), i(), s && s();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: a = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: a,
          };
        }
      }
      function ie(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      class it extends rb {
        constructor(e) {
          super(e),
            (this.removeGroupControls = B),
            (this.removeListeners = B),
            (this.controls = new r7(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || B);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let ir = (e) => (t, r) => {
        e && X.postRender(() => e(t, r));
      };
      class ii extends rb {
        constructor() {
          super(...arguments), (this.removePointerDownListener = B);
        }
        onPointerDown(e) {
          this.session = new rk(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: r8(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: r,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: ir(e),
            onStart: ir(t),
            onMove: r,
            onEnd: (e, t) => {
              delete this.session, i && X.postRender(() => i(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = rP(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var is,
        ia,
        io = r(95155),
        il = r(12115),
        iu = r(85087),
        id = r(64710);
      let ic = (0, il.createContext)({}),
        ih = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ip(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let im = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!e$.test(e)) return e;
              e = parseFloat(e);
            }
            let r = ip(e, t.target.x),
              i = ip(e, t.target.y);
            return `${r}% ${i}%`;
          },
        },
        iv = {},
        { schedule: ig, cancel: iy } = G(queueMicrotask, !1);
      class ib extends il.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: i,
            } = this.props,
            { projection: n } = e;
          !(function (e) {
            for (let t in e)
              (iv[t] = e[t]), tv(t) && (iv[t].isCSSVariable = !0);
          })(ix),
            n &&
              (t.group && t.group.add(n),
              r && r.register && i && r.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ih.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: r,
              drag: i,
              isPresent: n,
            } = this.props,
            s = r.projection;
          return (
            s &&
              ((s.isPresent = n),
              i || e.layoutDependency !== t || void 0 === t
                ? s.willUpdate()
                : this.safeToRemove(),
              e.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    X.postRender(() => {
                      let e = s.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            ig.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
            } = this.props,
            { projection: i } = e;
          i &&
            (i.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(i),
            r && r.deregister && r.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function iw(e) {
        let [t, r] = (0, iu.xQ)(),
          i = (0, il.useContext)(id.L);
        return (0, io.jsx)(ib, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, il.useContext)(ic),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let ix = {
          borderRadius: {
            ...im,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: im,
          borderTopRightRadius: im,
          borderBottomLeftRadius: im,
          borderBottomRightRadius: im,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let i = e1.parse(e);
              if (i.length > 5) return e;
              let n = e1.createTransformer(e),
                s = "number" != typeof i[0] ? 1 : 0,
                a = r.x.scale * t.x,
                o = r.y.scale * t.y;
              (i[0 + s] /= a), (i[1 + s] /= o);
              let l = tM(a, o, 0.5);
              return (
                "number" == typeof i[2 + s] && (i[2 + s] /= l),
                "number" == typeof i[3 + s] && (i[3 + s] /= l),
                n(i)
              );
            },
          },
        },
        iS = (e, t) => e.depth - t.depth;
      class iT {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          et(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          er(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(iS),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      function iE(e) {
        let t = el(e) ? e.get() : e;
        return W(t) ? t.toValue() : t;
      }
      let iC = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        iP = iC.length,
        iA = (e) => ("string" == typeof e ? parseFloat(e) : e),
        ik = (e) => "number" == typeof e || e$.test(e);
      function iM(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let iO = iD(0, 0.5, eS),
        i_ = iD(0.5, 0.95, B);
      function iD(e, t, r) {
        return (i) => (i < e ? 0 : i > t ? 1 : r(T(e, t, i)));
      }
      function ij(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function iL(e, t) {
        ij(e.x, t.x), ij(e.y, t.y);
      }
      function iF(e, t) {
        (e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin);
      }
      function iV(e, t, r, i, n) {
        return (
          (e -= t),
          (e = i + (1 / r) * (e - i)),
          void 0 !== n && (e = i + (1 / n) * (e - i)),
          e
        );
      }
      function iR(e, t, [r, i, n], s, a) {
        !(function (e, t = 0, r = 1, i = 0.5, n, s = e, a = e) {
          if (
            (eB.test(t) &&
              ((t = parseFloat(t)), (t = tM(a.min, a.max, t / 100) - a.min)),
            "number" != typeof t)
          )
            return;
          let o = tM(s.min, s.max, i);
          e === s && (o -= t),
            (e.min = iV(e.min, t, r, o, n)),
            (e.max = iV(e.max, t, r, o, n));
        })(e, t[r], t[i], t[n], t.scale, s, a);
      }
      let iI = ["x", "scaleX", "originX"],
        iN = ["y", "scaleY", "originY"];
      function iB(e, t, r, i) {
        iR(e.x, t, iI, r ? r.x : void 0, i ? i.x : void 0),
          iR(e.y, t, iN, r ? r.y : void 0, i ? i.y : void 0);
      }
      function i$(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function iz(e) {
        return i$(e.x) && i$(e.y);
      }
      function iH(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function iW(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function iU(e, t) {
        return iW(e.x, t.x) && iW(e.y, t.y);
      }
      function iY(e) {
        return rL(e.x) / rL(e.y);
      }
      function iq(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      class iG {
        constructor() {
          this.members = [];
        }
        add(e) {
          et(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (er(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: i } = e.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let iX = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        iZ = "undefined" != typeof window && void 0 !== window.MotionDebug,
        iK = ["", "X", "Y", "Z"],
        iQ = { visibility: "hidden" },
        iJ = 0;
      function i0(e, t, r, i) {
        let { latestValues: n } = t;
        n[e] && ((r[e] = n[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
      }
      function i1({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: n,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = iJ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  iZ &&
                    (iX.totalNodes =
                      iX.resolvedTargetDeltas =
                      iX.recalculatedProjection =
                        0),
                  this.nodes.forEach(i3),
                  this.nodes.forEach(nt),
                  this.nodes.forEach(nr),
                  this.nodes.forEach(i9),
                  iZ && window.MotionDebug.record(iX);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iT());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new ei()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: i, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (n || i) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let i = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = ee.now(),
                      i = ({ timestamp: t }) => {
                        let n = t - r;
                        n >= 250 && (Z(i), e(n - 250));
                      };
                    return X.read(i, !0), () => Z(i);
                  })(i, 250)),
                  ih.hasAnimatedSinceResize &&
                    ((ih.hasAnimatedSinceResize = !1), this.nodes.forEach(ne));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeLayoutChanged: r,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nl,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: o,
                      } = s.getProps(),
                      l = !this.targetLayout || !iU(this.targetLayout, i),
                      u = !t && r;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...v(n, "layout"), onPlay: a, onComplete: o };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || ne(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              Z(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ni),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t))
                    return;
                  let { visualElement: r } = t.options;
                  if (!r) return;
                  let i = r.props[ec];
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: e, layoutId: r } = t.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      X,
                      !(e || r)
                    );
                  }
                  let { parent: n } = t;
                  n && !n.hasCheckedOptimisedAppear && e(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(i8);
              return;
            }
            this.isUpdating || this.nodes.forEach(i4),
              (this.isUpdating = !1),
              this.nodes.forEach(i7),
              this.nodes.forEach(i2),
              this.nodes.forEach(i5),
              this.clearAllSnapshots();
            let e = ee.now();
            (K.delta = eC(0, 1e3 / 60, e - K.timestamp)),
              (K.timestamp = e),
              (K.isProcessing = !0),
              Q.update.process(K),
              Q.preRender.process(K),
              Q.render.process(K),
              (K.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ig.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(i6), this.sharedNodes.forEach(nn);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              X.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            X.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                rL(this.snapshot.measuredBox.x) ||
                rL(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = rq()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !iz(this.projectionDelta),
              r = this.getTransformTemplate(),
              i = r ? r(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            e &&
              (t || rQ(this.latestValues) || s) &&
              (n(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              i = this.removeElementScroll(r);
            return (
              e && (i = this.removeTransform(i)),
              nc((t = i).x),
              nc(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return rq();
            let r = t.measureViewportBox();
            if (
              !(
                (null === (e = this.scroll) || void 0 === e
                  ? void 0
                  : e.wasRoot) || this.path.some(np)
              )
            ) {
              let { scroll: e } = this.root;
              e && (r5(r.x, e.offset.x), r5(r.y, e.offset.y));
            }
            return r;
          }
          removeElementScroll(e) {
            var t;
            let r = rq();
            if (
              (iL(r, e),
              null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
            )
              return r;
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t],
                { scroll: n, options: s } = i;
              i !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && iL(r, e),
                r5(r.x, n.offset.x),
                r5(r.y, n.offset.y));
            }
            return r;
          }
          applyTransform(e, t = !1) {
            let r = rq();
            iL(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              !t &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                r9(r, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                rQ(i.latestValues) && r9(r, i.latestValues);
            }
            return rQ(this.latestValues) && r9(r, this.latestValues), r;
          }
          removeTransform(e) {
            let t = rq();
            iL(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !rQ(r.latestValues)) continue;
              rK(r.latestValues) && r.updateSnapshot();
              let i = rq();
              iL(i, r.measurePageBox()),
                iB(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  i
                );
            }
            return rQ(this.latestValues) && iB(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== K.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, i, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let a = !!this.resumingFrom || this !== s;
            if (
              !(
                e ||
                (a && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: o, layoutId: l } = this.options;
            if (this.layout && (o || l)) {
              if (
                ((this.resolvedRelativeTargetAt = K.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = rq()),
                    (this.relativeTargetOrigin = rq()),
                    rN(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    iL(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = rq()), (this.targetWithTransforms = rq())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (i = this.relativeTarget),
                      (n = this.relativeParent.target),
                      rR(r.x, i.x, n.x),
                      rR(r.y, i.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : iL(this.target, this.layout.layoutBox),
                      r2(this.target, this.targetDelta))
                    : iL(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = rq()),
                      (this.relativeTargetOrigin = rq()),
                      rN(this.relativeTargetOrigin, this.target, e.target),
                      iL(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                iZ && iX.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              rK(this.parent.latestValues) ||
              rJ(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (i = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === K.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            iL(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
              o = this.treeScale.y;
            !(function (e, t, r, i = !1) {
              let n, s;
              let a = r.length;
              if (a) {
                t.x = t.y = 1;
                for (let o = 0; o < a; o++) {
                  s = (n = r[o]).projectionDelta;
                  let { visualElement: a } = n.options;
                  (!a ||
                    !a.props.style ||
                    "contents" !== a.props.style.display) &&
                    (i &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      r9(e, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((t.x *= s.x.scale), (t.y *= s.y.scale), r2(e, s)),
                    i && rQ(n.latestValues) && r9(e, n.latestValues));
                }
                t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                  t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = rq()));
            let { target: l } = t;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (iF(this.prevProjectionDelta.x, this.projectionDelta.x),
                iF(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              rV(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === a &&
                this.treeScale.y === o &&
                iq(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                iq(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              iZ && iX.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.scheduleRender(),
              e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = rU()),
              (this.projectionDelta = rU()),
              (this.projectionDeltaWithTransform = rU());
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let i = this.snapshot,
              n = i ? i.latestValues : {},
              s = { ...this.latestValues },
              a = rU();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let o = rq(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              d = !u || u.members.length <= 1,
              c = !!(
                l &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(no)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let i = t / 1e3;
                if (
                  (ns(a.x, e.x, i),
                  ns(a.y, e.y, i),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, p, f;
                  rN(
                    o,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    na(p.x, f.x, o.x, i),
                    na(p.y, f.y, o.y, i),
                    r &&
                      ((u = this.relativeTarget),
                      (h = r),
                      iH(u.x, h.x) && iH(u.y, h.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = rq()),
                    iL(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (e, t, r, i, n, s) {
                    n
                      ? ((e.opacity = tM(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          iO(i)
                        )),
                        (e.opacityExit = tM(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          i_(i)
                        )))
                      : s &&
                        (e.opacity = tM(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          i
                        ));
                    for (let n = 0; n < iP; n++) {
                      let s = `border${iC[n]}Radius`,
                        a = iM(t, s),
                        o = iM(r, s);
                      (void 0 !== a || void 0 !== o) &&
                        (a || (a = 0),
                        o || (o = 0),
                        0 === a || 0 === o || ik(a) === ik(o)
                          ? ((e[s] = Math.max(tM(iA(a), iA(o), i), 0)),
                            (eB.test(o) || eB.test(a)) && (e[s] += "%"))
                          : (e[s] = o));
                    }
                    (t.rotate || r.rotate) &&
                      (e.rotate = tM(t.rotate || 0, r.rotate || 0, i));
                  })(s, n, this.latestValues, i, c, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (Z(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = X.update(() => {
                (ih.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let i = el(0) ? 0 : eo(0);
                    return i.start(rd("", i, 1e3, r)), i.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: i,
                latestValues: n,
              } = e;
            if (t && r && i) {
              if (
                this !== e &&
                this.layout &&
                i &&
                nh(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                r = this.target || rq();
                let t = rL(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                let i = rL(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + i);
              }
              iL(t, r),
                r9(t, n),
                rV(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  n
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new iG()),
              this.sharedNodes.get(e).add(t);
            let r = t.options.initialPromotionConfig;
            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let i = {};
            r.z && i0("z", e, i, this.animationValues);
            for (let t = 0; t < iK.length; t++)
              i0(`rotate${iK[t]}`, e, i, this.animationValues),
                i0(`skew${iK[t]}`, e, i, this.animationValues);
            for (let t in (e.render(), i))
              e.setStaticValue(t, i[t]),
                this.animationValues && (this.animationValues[t] = i[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return iQ;
            let i = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  iE(null == e ? void 0 : e.pointerEvents) || ""),
                (i.transform = n ? n(this.latestValues, "") : "none"),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    iE(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !rQ(this.latestValues) &&
                  ((t.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let a = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = (function (e, t, r) {
                let i = "",
                  n = e.x.translate / t.x,
                  s = e.y.translate / t.y,
                  a = (null == r ? void 0 : r.z) || 0;
                if (
                  ((n || s || a) &&
                    (i = `translate3d(${n}px, ${s}px, ${a}px) `),
                  (1 !== t.x || 1 !== t.y) &&
                    (i += `scale(${1 / t.x}, ${1 / t.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: e,
                    rotate: t,
                    rotateX: n,
                    rotateY: s,
                    skewX: a,
                    skewY: o,
                  } = r;
                  e && (i = `perspective(${e}px) ${i}`),
                    t && (i += `rotate(${t}deg) `),
                    n && (i += `rotateX(${n}deg) `),
                    s && (i += `rotateY(${s}deg) `),
                    a && (i += `skewX(${a}deg) `),
                    o && (i += `skewY(${o}deg) `);
                }
                let o = e.x.scale * t.x,
                  l = e.y.scale * t.y;
                return (
                  (1 !== o || 1 !== l) && (i += `scale(${o}, ${l})`),
                  i || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, a)),
              n && (i.transform = n(a, i.transform));
            let { x: o, y: l } = this.projectionDelta;
            for (let e in ((i.transformOrigin = `${100 * o.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (r =
                          null !== (t = a.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            iv)) {
              if (void 0 === a[e]) continue;
              let { correct: t, applyTo: r, isCSSVariable: n } = iv[e],
                o = "none" === i.transform ? a[e] : t(a[e], s);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) i[r[t]] = o;
              } else
                n
                  ? (this.options.visualElement.renderState.vars[e] = o)
                  : (i[e] = o);
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this
                    ? iE(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(i8),
              this.root.sharedNodes.clear();
          }
        };
      }
      function i2(e) {
        e.updateLayout();
      }
      function i5(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: i } = e.layout,
            { animationType: n } = e.options,
            s = r.source !== e.layout.source;
          "size" === n
            ? rG((e) => {
                let i = s ? r.measuredBox[e] : r.layoutBox[e],
                  n = rL(i);
                (i.min = t[e].min), (i.max = i.min + n);
              })
            : nh(n, r.layoutBox, t) &&
              rG((i) => {
                let n = s ? r.measuredBox[i] : r.layoutBox[i],
                  a = rL(t[i]);
                (n.max = n.min + a),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[i].max = e.relativeTarget[i].min + a));
              });
          let a = rU();
          rV(a, t, r.layoutBox);
          let o = rU();
          s
            ? rV(o, e.applyTransform(i, !0), r.measuredBox)
            : rV(o, t, r.layoutBox);
          let l = !iz(a),
            u = !1;
          if (!e.resumeFrom) {
            let i = e.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: n, layout: s } = i;
              if (n && s) {
                let a = rq();
                rN(a, r.layoutBox, n.layoutBox);
                let o = rq();
                rN(o, t, s.layoutBox),
                  iU(a, o) || (u = !0),
                  i.options.layoutRoot &&
                    ((e.relativeTarget = o),
                    (e.relativeTargetOrigin = a),
                    (e.relativeParent = i));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: o,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function i3(e) {
        iZ && iX.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function i9(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function i6(e) {
        e.clearSnapshot();
      }
      function i8(e) {
        e.clearMeasurements();
      }
      function i4(e) {
        e.isLayoutDirty = !1;
      }
      function i7(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function ne(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function nt(e) {
        e.resolveTargetDelta();
      }
      function nr(e) {
        e.calcProjection();
      }
      function ni(e) {
        e.resetSkewAndRotation();
      }
      function nn(e) {
        e.removeLeadSnapshot();
      }
      function ns(e, t, r) {
        (e.translate = tM(t.translate, 0, r)),
          (e.scale = tM(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function na(e, t, r, i) {
        (e.min = tM(t.min, r.min, i)), (e.max = tM(t.max, r.max, i));
      }
      function no(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let nl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nu = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        nd = nu("applewebkit/") && !nu("chrome/") ? Math.round : B;
      function nc(e) {
        (e.min = nd(e.min)), (e.max = nd(e.max));
      }
      function nh(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !(0.2 >= Math.abs(iY(t) - iY(r))))
        );
      }
      function np(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      let nf = i1({
          attachResizeListener: (e, t) => rT(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nm = { current: void 0 },
        nv = i1({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!nm.current) {
              let e = new nf({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (nm.current = e);
            }
            return nm.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      function ng(e, t, r) {
        let { props: i } = e;
        e.animationState &&
          i.whileHover &&
          e.animationState.setActive("whileHover", "Start" === r);
        let n = i["onHover" + r];
        n && X.postRender(() => n(t, rE(t)));
      }
      class ny extends rb {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (function (e, t, r = {}) {
              let [i, n, s] = k(e, r),
                a = (e) => {
                  if (!M(e)) return;
                  let { target: r } = e,
                    i = t(r, e);
                  if ("function" != typeof i || !r) return;
                  let s = (e) => {
                    M(e) && (i(e), r.removeEventListener("pointerleave", s));
                  };
                  r.addEventListener("pointerleave", s, n);
                };
              return (
                i.forEach((e) => {
                  e.addEventListener("pointerenter", a, n);
                }),
                s
              );
            })(
              e,
              (e, t) => (
                ng(this.node, t, "Start"), (e) => ng(this.node, e, "End")
              )
            ));
        }
        unmount() {}
      }
      class nb extends rb {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = tI(
            rT(this.node.current, "focus", () => this.onFocus()),
            rT(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function nw(e, t, r) {
        let { props: i } = e;
        e.animationState &&
          i.whileTap &&
          e.animationState.setActive("whileTap", "Start" === r);
        let n = i["onTap" + ("End" === r ? "" : r)];
        n && X.postRender(() => n(t, rE(t)));
      }
      class nx extends rb {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (function (e, t, r = {}) {
              let [i, n, s] = k(e, r),
                a = (e) => {
                  let i = e.currentTarget;
                  if (!R(e) || j.has(i)) return;
                  j.add(i);
                  let s = t(i, e),
                    a = (e, t) => {
                      window.removeEventListener("pointerup", o),
                        window.removeEventListener("pointercancel", l),
                        R(e) &&
                          j.has(i) &&
                          (j.delete(i),
                          "function" == typeof s && s(e, { success: t }));
                    },
                    o = (e) => {
                      a(e, r.useGlobalTarget || O(i, e.target));
                    },
                    l = (e) => {
                      a(e, !1);
                    };
                  window.addEventListener("pointerup", o, n),
                    window.addEventListener("pointercancel", l, n);
                };
              return (
                i.forEach((e) => {
                  D.has(e.tagName) ||
                    -1 !== e.tabIndex ||
                    null !== e.getAttribute("tabindex") ||
                    (e.tabIndex = 0),
                    (r.useGlobalTarget ? window : e).addEventListener(
                      "pointerdown",
                      a,
                      n
                    ),
                    e.addEventListener("focus", (e) => V(e, n), n);
                }),
                s
              );
            })(
              e,
              (e, t) => (
                nw(this.node, t, "Start"),
                (e, { success: t }) => nw(this.node, e, t ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let nS = new WeakMap(),
        nT = new WeakMap(),
        nE = (e) => {
          let t = nS.get(e.target);
          t && t(e);
        },
        nC = (e) => {
          e.forEach(nE);
        },
        nP = { some: 0, all: 1 };
      class nA extends rb {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: r, amount: i = "some", once: n } = e,
            s = {
              root: t ? t.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof i ? i : nP[i],
            };
          return (function (e, t, r) {
            let i = (function ({ root: e, ...t }) {
              let r = e || document;
              nT.has(r) || nT.set(r, {});
              let i = nT.get(r),
                n = JSON.stringify(t);
              return (
                i[n] ||
                  (i[n] = new IntersectionObserver(nC, { root: e, ...t })),
                i[n]
              );
            })(t);
            return (
              nS.set(e, r),
              i.observe(e),
              () => {
                nS.delete(e), i.unobserve(e);
              }
            );
          })(this.node.current, s, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), n && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: r, onViewportLeave: i } =
                this.node.getProps(),
              s = t ? r : i;
            s && s(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (r) => e[r] !== t[r];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nk = (0, il.createContext)({ strict: !1 });
      var nM = r(27249);
      let nO = (0, il.createContext)({});
      function n_(e) {
        return n(e.animate) || c.some((t) => o(e[t]));
      }
      function nD(e) {
        return !!(n_(e) || e.variants);
      }
      function nj(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var nL = r(15687);
      let nF = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nV = {};
      for (let e in nF) nV[e] = { isEnabled: (t) => nF[e].some((e) => !!t[e]) };
      let nR = Symbol.for("motionComponentSymbol");
      var nI = r(39656),
        nN = r(35403);
      let nB = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function n$(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (nB.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      var nz = r(99234);
      let nH = (e) => (t, r) => {
          let i = (0, il.useContext)(nO),
            s = (0, il.useContext)(nI.t),
            a = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onUpdate: r,
                },
                i,
                s,
                a
              ) {
                let o = {
                  latestValues: (function (e, t, r, i) {
                    let s = {},
                      a = i(e, {});
                    for (let e in a) s[e] = iE(a[e]);
                    let { initial: o, animate: u } = e,
                      d = n_(e),
                      c = nD(e);
                    t &&
                      c &&
                      !d &&
                      !1 !== e.inherit &&
                      (void 0 === o && (o = t.initial),
                      void 0 === u && (u = t.animate));
                    let h = !!r && !1 === r.initial,
                      p = (h = h || !1 === o) ? u : o;
                    if (p && "boolean" != typeof p && !n(p)) {
                      let t = Array.isArray(p) ? p : [p];
                      for (let r = 0; r < t.length; r++) {
                        let i = l(e, t[r]);
                        if (i) {
                          let { transitionEnd: e, transition: t, ...r } = i;
                          for (let e in r) {
                            let t = r[e];
                            if (Array.isArray(t)) {
                              let e = h ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (s[e] = t);
                          }
                          for (let t in e) s[t] = e[t];
                        }
                      }
                    }
                    return s;
                  })(i, s, a, e),
                  renderState: t(),
                };
                return (
                  r &&
                    ((o.onMount = (e) => r({ props: i, current: e, ...o })),
                    (o.onUpdate = (e) => r(e))),
                  o
                );
              })(e, t, i, s);
          return r ? a() : (0, nz.M)(a);
        },
        nW = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        nU = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        nY = $.length;
      function nq(e, t, r) {
        let { style: i, vars: n, transformOrigin: s } = e,
          a = !1,
          o = !1;
        for (let e in t) {
          let r = t[e];
          if (z.has(e)) {
            a = !0;
            continue;
          }
          if (tv(e)) {
            n[e] = r;
            continue;
          }
          {
            let t = nW(r, e8[e]);
            e.startsWith("origin") ? ((o = !0), (s[e] = t)) : (i[e] = t);
          }
        }
        if (
          (!t.transform &&
            (a || r
              ? (i.transform = (function (e, t, r) {
                  let i = "",
                    n = !0;
                  for (let s = 0; s < nY; s++) {
                    let a = $[s],
                      o = e[a];
                    if (void 0 === o) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof o
                          ? o === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(o)) ||
                      r
                    ) {
                      let e = nW(o, e8[a]);
                      if (!l) {
                        n = !1;
                        let t = nU[a] || a;
                        i += `${t}(${e}) `;
                      }
                      r && (t[a] = e);
                    }
                  }
                  return (
                    (i = i.trim()),
                    r ? (i = r(t, n ? "" : i)) : n && (i = "none"),
                    i
                  );
                })(t, e.transform, r))
              : i.transform && (i.transform = "none")),
          o)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = s;
          i.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let nG = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        nX = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nZ(e, t, r) {
        return "string" == typeof e ? e : e$.transform(t + r * e);
      }
      function nK(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: i,
          originX: n,
          originY: s,
          pathLength: a,
          pathSpacing: o = 1,
          pathOffset: l = 0,
          ...u
        },
        d,
        c
      ) {
        if ((nq(e, u, c), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: h, style: p, dimensions: f } = e;
        h.transform && (f && (p.transform = h.transform), delete h.transform),
          f &&
            (void 0 !== n || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (e, t, r) {
              let i = nZ(t, e.x, e.width),
                n = nZ(r, e.y, e.height);
              return `${i} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== t && (h.x = t),
          void 0 !== r && (h.y = r),
          void 0 !== i && (h.scale = i),
          void 0 !== a &&
            (function (e, t, r = 1, i = 0, n = !0) {
              e.pathLength = 1;
              let s = n ? nG : nX;
              e[s.offset] = e$.transform(-i);
              let a = e$.transform(t),
                o = e$.transform(r);
              e[s.array] = `${a} ${o}`;
            })(h, a, o, l, !1);
      }
      let nQ = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        nJ = () => ({ ...nQ(), attrs: {} }),
        n0 = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function n1(e, { style: t, vars: r }, i, n) {
        for (let s in (Object.assign(e.style, t, n && n.getProjectionStyles(i)),
        r))
          e.style.setProperty(s, r[s]);
      }
      let n2 = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function n5(e, t, r, i) {
        for (let r in (n1(e, t, void 0, i), t.attrs))
          e.setAttribute(n2.has(r) ? r : ed(r), t.attrs[r]);
      }
      function n3(e, { layout: t, layoutId: r }) {
        return (
          z.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!iv[e] || "opacity" === e))
        );
      }
      function n9(e, t, r) {
        var i;
        let { style: n } = e,
          s = {};
        for (let a in n)
          (el(n[a]) ||
            (t.style && el(t.style[a])) ||
            n3(a, e) ||
            (null === (i = null == r ? void 0 : r.getValue(a)) || void 0 === i
              ? void 0
              : i.liveStyle) !== void 0) &&
            (s[a] = n[a]);
        return s;
      }
      function n6(e, t, r) {
        let i = n9(e, t, r);
        for (let r in e)
          (el(e[r]) || el(t[r])) &&
            (i[
              -1 !== $.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return i;
      }
      let n8 = ["x", "y", "width", "height", "cx", "cy", "r"],
        n4 = {
          useVisualState: nH({
            scrapeMotionValuesFromProps: n6,
            createRenderState: nJ,
            onUpdate: ({
              props: e,
              prevProps: t,
              current: r,
              renderState: i,
              latestValues: n,
            }) => {
              if (!r) return;
              let s = !!e.drag;
              if (!s) {
                for (let e in n)
                  if (z.has(e)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let a = !t;
              if (t)
                for (let r = 0; r < n8.length; r++) {
                  let i = n8[r];
                  e[i] !== t[i] && (a = !0);
                }
              a &&
                X.read(() => {
                  !(function (e, t) {
                    try {
                      t.dimensions =
                        "function" == typeof e.getBBox
                          ? e.getBBox()
                          : e.getBoundingClientRect();
                    } catch (e) {
                      t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(r, i),
                    X.render(() => {
                      nK(i, n, n0(r.tagName), e.transformTemplate), n5(r, i);
                    });
                });
            },
          }),
        },
        n7 = {
          useVisualState: nH({
            scrapeMotionValuesFromProps: n9,
            createRenderState: nQ,
          }),
        };
      function se(e, t, r) {
        for (let i in t) el(t[i]) || n3(i, r) || (e[i] = t[i]);
      }
      let st = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function sr(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          st.has(e)
        );
      }
      let si = (e) => !sr(e);
      try {
        !(function (e) {
          e && (si = (t) => (t.startsWith("on") ? !sr(t) : e(t)));
        })(require("@emotion/is-prop-valid").default);
      } catch (e) {}
      let sn = { current: null },
        ss = { current: !1 },
        sa = [...tS, eY, e1],
        so = (e) => sa.find(tx(e)),
        sl = new WeakMap(),
        su = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sd {
        scrapeMotionValuesFromProps(e, t, r) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: i,
            blockInitialAnimation: n,
            visualState: s,
          },
          a = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tp),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = ee.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), X.render(this.render, !1, !0));
            });
          let { latestValues: o, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = t.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = a),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = n_(t)),
            (this.isVariantNode = nD(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: d, ...c } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in c) {
            let t = c[e];
            void 0 !== o[e] && el(t) && t.set(o[e], !1);
          }
        }
        mount(e) {
          (this.current = e),
            sl.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            ss.current ||
              (function () {
                if (((ss.current = !0), nL.B)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (sn.current = e.matches);
                    e.addListener(t), t();
                  } else sn.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || sn.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (sl.delete(this.current),
          this.projection && this.projection.unmount(),
          Z(this.notifyUpdate),
          Z(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let i = z.has(e),
            n = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && X.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = t.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              n(), s(), r && r(), t.owner && t.stop();
            });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in nV) {
            let t = nV[e];
            if (!t) continue;
            let { isEnabled: r, Feature: i } = t;
            if (
              (!this.features[e] &&
                i &&
                r(this.props) &&
                (this.features[e] = new i(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : rq();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < su.length; t++) {
            let r = su[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let i = e["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i));
          }
          (this.prevMotionValues = (function (e, t, r) {
            for (let i in t) {
              let n = t[i],
                s = r[i];
              if (el(n)) e.addValue(i, n);
              else if (el(s)) e.addValue(i, eo(n, { owner: e }));
              else if (s !== n) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, eo(void 0 !== t ? t : n, { owner: e }));
                }
              }
            }
            for (let i in r) void 0 === t[i] && e.removeValue(i);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let r = this.values.get(e);
          t !== r &&
            (r && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = eo(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, r)),
            r
          );
        }
        readValue(e, t) {
          var r;
          let i =
            void 0 === this.latestValues[e] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != i &&
              ("string" == typeof i && (tf(i) || eE(i))
                ? (i = parseFloat(i))
                : !so(i) && e1.test(t) && (i = te(e, t)),
              this.setBaseTarget(e, el(i) ? i.get() : i)),
            el(i) ? i.get() : i
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let r;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = l(
              this.props,
              i,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            n && (r = n[e]);
          }
          if (i && void 0 !== r) return r;
          let n = this.getBaseTargetFromProps(this.props, e);
          return void 0 === n || el(n)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : n;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new ei()), this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class sc extends sd {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tE);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          el(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      class sh extends sc {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = n1);
        }
        readValueFromInstance(e, t) {
          if (z.has(t)) {
            let e = e7(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              i = (tv(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return r6(e, t);
        }
        build(e, t, r) {
          nq(e, t, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return n9(e, t, r);
        }
      }
      class sp extends sc {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = rq);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (z.has(t)) {
            let e = e7(t);
            return (e && e.default) || 0;
          }
          return (t = n2.has(t) ? t : ed(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return n6(e, t, r);
        }
        build(e, t, r) {
          nK(e, t, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, r, i) {
          n5(e, t, r, i);
        }
        mount(e) {
          (this.isSVGTag = n0(e.tagName)), super.mount(e);
        }
      }
      let sf = (function (e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (r, i) =>
            "create" === i ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
        });
      })(
        ((is = {
          animation: { Feature: rw },
          exit: { Feature: rS },
          inView: { Feature: nA },
          tap: { Feature: nx },
          focus: { Feature: nb },
          hover: { Feature: ny },
          pan: { Feature: ii },
          drag: { Feature: it, ProjectionNode: nv, MeasureLayout: iw },
          layout: { ProjectionNode: nv, MeasureLayout: iw },
        }),
        (ia = (e, t) =>
          n$(e)
            ? new sp(t)
            : new sh(t, { allowProjection: e !== il.Fragment })),
        function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
          return (function (e) {
            var t, r;
            let {
              preloadedFeatures: i,
              createVisualElement: n,
              useRender: s,
              useVisualState: a,
              Component: l,
            } = e;
            function u(e, t) {
              var r;
              let i;
              let u = {
                  ...(0, il.useContext)(nM.Q),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      r = (0, il.useContext)(id.L).id;
                    return r && void 0 !== t ? r + "-" + t : t;
                  })(e),
                },
                { isStatic: d } = u,
                c = (function (e) {
                  let { initial: t, animate: r } = (function (e, t) {
                    if (n_(e)) {
                      let { initial: t, animate: r } = e;
                      return {
                        initial: !1 === t || o(t) ? t : void 0,
                        animate: o(r) ? r : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, il.useContext)(nO));
                  return (0, il.useMemo)(
                    () => ({ initial: t, animate: r }),
                    [nj(t), nj(r)]
                  );
                })(e),
                h = a(e, d);
              if (!d && nL.B) {
                (0, il.useContext)(nk).strict;
                let e = (function (e) {
                  let { drag: t, layout: r } = nV;
                  if (!t && !r) return {};
                  let i = { ...t, ...r };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == r ? void 0 : r.isEnabled(e))
                        ? i.MeasureLayout
                        : void 0,
                    ProjectionNode: i.ProjectionNode,
                  };
                })(u);
                (i = e.MeasureLayout),
                  (c.visualElement = (function (e, t, r, i, n) {
                    var s, a;
                    let { visualElement: o } = (0, il.useContext)(nO),
                      l = (0, il.useContext)(nk),
                      u = (0, il.useContext)(nI.t),
                      d = (0, il.useContext)(nM.Q).reducedMotion,
                      c = (0, il.useRef)(null);
                    (i = i || l.renderer),
                      !c.current &&
                        i &&
                        (c.current = i(e, {
                          visualState: t,
                          parent: o,
                          props: r,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: d,
                        }));
                    let h = c.current,
                      p = (0, il.useContext)(ic);
                    h &&
                      !h.projection &&
                      n &&
                      ("html" === h.type || "svg" === h.type) &&
                      (function (e, t, r, i) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: a,
                          dragConstraints: o,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = t;
                        (e.projection = new r(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent)
                        )),
                          e.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!a || (o && rj(o)),
                            visualElement: e,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: i,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(c.current, r, n, p);
                    let f = (0, il.useRef)(!1);
                    (0, il.useInsertionEffect)(() => {
                      h && f.current && h.update(r, u);
                    });
                    let m = r[ec],
                      v = (0, il.useRef)(
                        !!m &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, m)) &&
                          (null === (a = window.MotionHasOptimisedAnimation) ||
                          void 0 === a
                            ? void 0
                            : a.call(window, m))
                      );
                    return (
                      (0, nN.E)(() => {
                        h &&
                          ((f.current = !0),
                          (window.MotionIsMounted = !0),
                          h.updateFeatures(),
                          ig.render(h.render),
                          v.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, il.useEffect)(() => {
                        h &&
                          (!v.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, m);
                            }),
                            (v.current = !1)));
                      }),
                      h
                    );
                  })(l, h, u, n, e.ProjectionNode));
              }
              return (0, io.jsxs)(nO.Provider, {
                value: c,
                children: [
                  i && c.visualElement
                    ? (0, io.jsx)(i, { visualElement: c.visualElement, ...u })
                    : null,
                  s(
                    l,
                    e,
                    ((r = c.visualElement),
                    (0, il.useCallback)(
                      (e) => {
                        e && h.onMount && h.onMount(e),
                          r && (e ? r.mount(e) : r.unmount()),
                          t &&
                            ("function" == typeof t
                              ? t(e)
                              : rj(t) && (t.current = e));
                      },
                      [r]
                    )),
                    h,
                    d,
                    c.visualElement
                  ),
                ],
              });
            }
            i &&
              (function (e) {
                for (let t in e) nV[t] = { ...nV[t], ...e[t] };
              })(i),
              (u.displayName = "motion.".concat(
                "string" == typeof l
                  ? l
                  : "create(".concat(
                      null !==
                        (r =
                          null !== (t = l.displayName) && void 0 !== t
                            ? t
                            : l.name) && void 0 !== r
                        ? r
                        : "",
                      ")"
                    )
              ));
            let d = (0, il.forwardRef)(u);
            return (d[nR] = l), d;
          })({
            ...(n$(e) ? n4 : n7),
            preloadedFeatures: is,
            useRender: (function (e = !1) {
              return (t, r, i, { latestValues: n }, s) => {
                let a = (
                    n$(t)
                      ? function (e, t, r, i) {
                          let n = (0, il.useMemo)(() => {
                            let r = nJ();
                            return (
                              nK(r, t, n0(i), e.transformTemplate),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            se(t, e.style, e), (n.style = { ...t, ...n.style });
                          }
                          return n;
                        }
                      : function (e, t) {
                          let r = {},
                            i = (function (e, t) {
                              let r = e.style || {},
                                i = {};
                              return (
                                se(i, r, e),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, il.useMemo)(() => {
                                      let r = nQ();
                                      return (
                                        nq(r, t, e),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [t]);
                                  })(e, t)
                                ),
                                i
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((r.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = i),
                            r
                          );
                        }
                  )(r, n, s, t),
                  o = (function (e, t, r) {
                    let i = {};
                    for (let n in e)
                      ("values" !== n || "object" != typeof e.values) &&
                        (si(n) ||
                          (!0 === r && sr(n)) ||
                          (!t && !sr(n)) ||
                          (e.draggable && n.startsWith("onDrag"))) &&
                        (i[n] = e[n]);
                    return i;
                  })(r, "string" == typeof t, e),
                  l = t !== il.Fragment ? { ...o, ...a, ref: i } : {},
                  { children: u } = r,
                  d = (0, il.useMemo)(() => (el(u) ? u.get() : u), [u]);
                return (0, il.createElement)(t, { ...l, children: d });
              };
            })(t),
            createVisualElement: ia,
            Component: e,
          });
        })
      );
    },
    15687: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => i });
      let i = "undefined" != typeof window;
    },
    99234: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => n });
      var i = r(12115);
      function n(e) {
        let t = (0, i.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    35403: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => n });
      var i = r(12115);
      let n = r(15687).B ? i.useLayoutEffect : i.useEffect;
    },
    69606: (e, t, r) => {
      "use strict";
      r.d(t, {
        Gb: () => V,
        Jt: () => g,
        hZ: () => x,
        mN: () => eS,
        xI: () => F,
      });
      var i = r(12115),
        n = (e) => "checkbox" === e.type,
        s = (e) => e instanceof Date,
        a = (e) => null == e;
      let o = (e) => "object" == typeof e;
      var l = (e) => !a(e) && !Array.isArray(e) && o(e) && !s(e),
        u = (e) =>
          l(e) && e.target
            ? n(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        d = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
        c = (e, t) => e.has(d(t)),
        h = (e) => {
          let t = e.constructor && e.constructor.prototype;
          return l(t) && t.hasOwnProperty("isPrototypeOf");
        },
        p =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function f(e) {
        let t;
        let r = Array.isArray(e),
          i = "undefined" != typeof FileList && e instanceof FileList;
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else if (!(!(p && (e instanceof Blob || i)) && (r || l(e)))) return e;
        else if (((t = r ? [] : {}), r || h(e)))
          for (let r in e) e.hasOwnProperty(r) && (t[r] = f(e[r]));
        else t = e;
        return t;
      }
      var m = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        v = (e) => void 0 === e,
        g = (e, t, r) => {
          if (!t || !l(e)) return r;
          let i = m(t.split(/[,[\].]+?/)).reduce(
            (e, t) => (a(e) ? e : e[t]),
            e
          );
          return v(i) || i === e ? (v(e[t]) ? r : e[t]) : i;
        },
        y = (e) => "boolean" == typeof e,
        b = (e) => /^\w*$/.test(e),
        w = (e) => m(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        x = (e, t, r) => {
          let i = -1,
            n = b(t) ? [t] : w(t),
            s = n.length,
            a = s - 1;
          for (; ++i < s; ) {
            let t = n[i],
              s = r;
            if (i !== a) {
              let r = e[t];
              s = l(r) || Array.isArray(r) ? r : isNaN(+n[i + 1]) ? {} : [];
            }
            if ("__proto__" === t || "constructor" === t || "prototype" === t)
              return;
            (e[t] = s), (e = e[t]);
          }
          return e;
        };
      let S = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
        T = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        E = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        },
        C = i.createContext(null),
        P = () => i.useContext(C);
      var A = (e, t, r, i = !0) => {
          let n = { defaultValues: t._defaultValues };
          for (let s in e)
            Object.defineProperty(n, s, {
              get: () => (
                t._proxyFormState[s] !== T.all &&
                  (t._proxyFormState[s] = !i || T.all),
                r && (r[s] = !0),
                e[s]
              ),
            });
          return n;
        },
        k = (e) => l(e) && !Object.keys(e).length,
        M = (e, t, r, i) => {
          r(e);
          let { name: n, ...s } = e;
          return (
            k(s) ||
            Object.keys(s).length >= Object.keys(t).length ||
            Object.keys(s).find((e) => t[e] === (!i || T.all))
          );
        },
        O = (e) => (Array.isArray(e) ? e : [e]),
        _ = (e, t, r) =>
          !e ||
          !t ||
          e === t ||
          O(e).some(
            (e) => e && (r ? e === t : e.startsWith(t) || t.startsWith(e))
          );
      function D(e) {
        let t = i.useRef(e);
        (t.current = e),
          i.useEffect(() => {
            let r =
              !e.disabled &&
              t.current.subject &&
              t.current.subject.subscribe({ next: t.current.next });
            return () => {
              r && r.unsubscribe();
            };
          }, [e.disabled]);
      }
      var j = (e) => "string" == typeof e,
        L = (e, t, r, i, n) =>
          j(e)
            ? (i && t.watch.add(e), g(r, e, n))
            : Array.isArray(e)
            ? e.map((e) => (i && t.watch.add(e), g(r, e)))
            : (i && (t.watchAll = !0), r);
      let F = (e) =>
        e.render(
          (function (e) {
            let t = P(),
              {
                name: r,
                disabled: n,
                control: s = t.control,
                shouldUnregister: a,
              } = e,
              o = c(s._names.array, r),
              l = (function (e) {
                let t = P(),
                  {
                    control: r = t.control,
                    name: n,
                    defaultValue: s,
                    disabled: a,
                    exact: o,
                  } = e || {},
                  l = i.useRef(n);
                (l.current = n),
                  D({
                    disabled: a,
                    subject: r._subjects.values,
                    next: (e) => {
                      _(l.current, e.name, o) &&
                        d(
                          f(
                            L(
                              l.current,
                              r._names,
                              e.values || r._formValues,
                              !1,
                              s
                            )
                          )
                        );
                    },
                  });
                let [u, d] = i.useState(r._getWatch(n, s));
                return i.useEffect(() => r._removeUnmounted()), u;
              })({
                control: s,
                name: r,
                defaultValue: g(
                  s._formValues,
                  r,
                  g(s._defaultValues, r, e.defaultValue)
                ),
                exact: !0,
              }),
              d = (function (e) {
                let t = P(),
                  {
                    control: r = t.control,
                    disabled: n,
                    name: s,
                    exact: a,
                  } = e || {},
                  [o, l] = i.useState(r._formState),
                  u = i.useRef(!0),
                  d = i.useRef({
                    isDirty: !1,
                    isLoading: !1,
                    dirtyFields: !1,
                    touchedFields: !1,
                    validatingFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1,
                  }),
                  c = i.useRef(s);
                return (
                  (c.current = s),
                  D({
                    disabled: n,
                    next: (e) =>
                      u.current &&
                      _(c.current, e.name, a) &&
                      M(e, d.current, r._updateFormState) &&
                      l({ ...r._formState, ...e }),
                    subject: r._subjects.state,
                  }),
                  i.useEffect(
                    () => (
                      (u.current = !0),
                      d.current.isValid && r._updateValid(!0),
                      () => {
                        u.current = !1;
                      }
                    ),
                    [r]
                  ),
                  i.useMemo(() => A(o, r, d.current, !1), [o, r])
                );
              })({ control: s, name: r, exact: !0 }),
              h = i.useRef(
                s.register(r, {
                  ...e.rules,
                  value: l,
                  ...(y(e.disabled) ? { disabled: e.disabled } : {}),
                })
              ),
              p = i.useMemo(
                () =>
                  Object.defineProperties(
                    {},
                    {
                      invalid: { enumerable: !0, get: () => !!g(d.errors, r) },
                      isDirty: {
                        enumerable: !0,
                        get: () => !!g(d.dirtyFields, r),
                      },
                      isTouched: {
                        enumerable: !0,
                        get: () => !!g(d.touchedFields, r),
                      },
                      isValidating: {
                        enumerable: !0,
                        get: () => !!g(d.validatingFields, r),
                      },
                      error: { enumerable: !0, get: () => g(d.errors, r) },
                    }
                  ),
                [d, r]
              ),
              m = i.useMemo(
                () => ({
                  name: r,
                  value: l,
                  ...(y(n) || d.disabled ? { disabled: d.disabled || n } : {}),
                  onChange: (e) =>
                    h.current.onChange({
                      target: { value: u(e), name: r },
                      type: S.CHANGE,
                    }),
                  onBlur: () =>
                    h.current.onBlur({
                      target: { value: g(s._formValues, r), name: r },
                      type: S.BLUR,
                    }),
                  ref: (e) => {
                    let t = g(s._fields, r);
                    t &&
                      e &&
                      (t._f.ref = {
                        focus: () => e.focus(),
                        select: () => e.select(),
                        setCustomValidity: (t) => e.setCustomValidity(t),
                        reportValidity: () => e.reportValidity(),
                      });
                  },
                }),
                [r, s._formValues, n, d.disabled, l, s._fields]
              );
            return (
              i.useEffect(() => {
                let e = s._options.shouldUnregister || a,
                  t = (e, t) => {
                    let r = g(s._fields, e);
                    r && r._f && (r._f.mount = t);
                  };
                if ((t(r, !0), e)) {
                  let e = f(g(s._options.defaultValues, r));
                  x(s._defaultValues, r, e),
                    v(g(s._formValues, r)) && x(s._formValues, r, e);
                }
                return (
                  o || s.register(r),
                  () => {
                    (o ? e && !s._state.action : e)
                      ? s.unregister(r)
                      : t(r, !1);
                  }
                );
              }, [r, s, o, a]),
              i.useEffect(() => {
                s._updateDisabledField({
                  disabled: n,
                  fields: s._fields,
                  name: r,
                });
              }, [n, r, s]),
              i.useMemo(
                () => ({ field: m, formState: d, fieldState: p }),
                [m, d, p]
              )
            );
          })(e)
        );
      var V = (e, t, r, i, n) =>
          t
            ? {
                ...r[e],
                types: {
                  ...(r[e] && r[e].types ? r[e].types : {}),
                  [i]: n || !0,
                },
              }
            : {},
        R = (e) => ({
          isOnSubmit: !e || e === T.onSubmit,
          isOnBlur: e === T.onBlur,
          isOnChange: e === T.onChange,
          isOnAll: e === T.all,
          isOnTouch: e === T.onTouched,
        }),
        I = (e, t, r) =>
          !r &&
          (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some(
              (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))
            ));
      let N = (e, t, r, i) => {
        for (let n of r || Object.keys(e)) {
          let r = g(e, n);
          if (r) {
            let { _f: e, ...s } = r;
            if (e) {
              if (
                (e.refs && e.refs[0] && t(e.refs[0], n) && !i) ||
                (e.ref && t(e.ref, e.name) && !i)
              )
                return !0;
              if (N(s, t)) break;
            } else if (l(s) && N(s, t)) break;
          }
        }
      };
      var B = (e, t, r) => {
          let i = O(g(e, r));
          return x(i, "root", t[r]), x(e, r, i), e;
        },
        $ = (e) => "file" === e.type,
        z = (e) => "function" == typeof e,
        H = (e) => {
          if (!p) return !1;
          let t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        W = (e) => j(e),
        U = (e) => "radio" === e.type,
        Y = (e) => e instanceof RegExp;
      let q = { value: !1, isValid: !1 },
        G = { value: !0, isValid: !0 };
      var X = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let t = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: t, isValid: !!t.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !v(e[0].attributes.value)
              ? v(e[0].value) || "" === e[0].value
                ? G
                : { value: e[0].value, isValid: !0 }
              : G
            : q;
        }
        return q;
      };
      let Z = { isValid: !1, value: null };
      var K = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) =>
                t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e,
              Z
            )
          : Z;
      function Q(e, t, r = "validate") {
        if (W(e) || (Array.isArray(e) && e.every(W)) || (y(e) && !e))
          return { type: r, message: W(e) ? e : "", ref: t };
      }
      var J = (e) => (l(e) && !Y(e) ? e : { value: e, message: "" }),
        ee = async (e, t, r, i, s, o) => {
          let {
              ref: u,
              refs: d,
              required: c,
              maxLength: h,
              minLength: p,
              min: f,
              max: m,
              pattern: b,
              validate: w,
              name: x,
              valueAsNumber: S,
              mount: T,
            } = e._f,
            C = g(r, x);
          if (!T || t.has(x)) return {};
          let P = d ? d[0] : u,
            A = (e) => {
              s &&
                P.reportValidity &&
                (P.setCustomValidity(y(e) ? "" : e || ""), P.reportValidity());
            },
            M = {},
            O = U(u),
            _ = n(u),
            D =
              ((S || $(u)) && v(u.value) && v(C)) ||
              (H(u) && "" === u.value) ||
              "" === C ||
              (Array.isArray(C) && !C.length),
            L = V.bind(null, x, i, M),
            F = (e, t, r, i = E.maxLength, n = E.minLength) => {
              let s = e ? t : r;
              M[x] = {
                type: e ? i : n,
                message: s,
                ref: u,
                ...L(e ? i : n, s),
              };
            };
          if (
            o
              ? !Array.isArray(C) || !C.length
              : c &&
                ((!(O || _) && (D || a(C))) ||
                  (y(C) && !C) ||
                  (_ && !X(d).isValid) ||
                  (O && !K(d).isValid))
          ) {
            let { value: e, message: t } = W(c)
              ? { value: !!c, message: c }
              : J(c);
            if (
              e &&
              ((M[x] = {
                type: E.required,
                message: t,
                ref: P,
                ...L(E.required, t),
              }),
              !i)
            )
              return A(t), M;
          }
          if (!D && (!a(f) || !a(m))) {
            let e, t;
            let r = J(m),
              n = J(f);
            if (a(C) || isNaN(C)) {
              let i = u.valueAsDate || new Date(C),
                s = (e) => new Date(new Date().toDateString() + " " + e),
                a = "time" == u.type,
                o = "week" == u.type;
              j(r.value) &&
                C &&
                (e = a
                  ? s(C) > s(r.value)
                  : o
                  ? C > r.value
                  : i > new Date(r.value)),
                j(n.value) &&
                  C &&
                  (t = a
                    ? s(C) < s(n.value)
                    : o
                    ? C < n.value
                    : i < new Date(n.value));
            } else {
              let i = u.valueAsNumber || (C ? +C : C);
              a(r.value) || (e = i > r.value), a(n.value) || (t = i < n.value);
            }
            if ((e || t) && (F(!!e, r.message, n.message, E.max, E.min), !i))
              return A(M[x].message), M;
          }
          if ((h || p) && !D && (j(C) || (o && Array.isArray(C)))) {
            let e = J(h),
              t = J(p),
              r = !a(e.value) && C.length > +e.value,
              n = !a(t.value) && C.length < +t.value;
            if ((r || n) && (F(r, e.message, t.message), !i))
              return A(M[x].message), M;
          }
          if (b && !D && j(C)) {
            let { value: e, message: t } = J(b);
            if (
              Y(e) &&
              !C.match(e) &&
              ((M[x] = {
                type: E.pattern,
                message: t,
                ref: u,
                ...L(E.pattern, t),
              }),
              !i)
            )
              return A(t), M;
          }
          if (w) {
            if (z(w)) {
              let e = Q(await w(C, r), P);
              if (e && ((M[x] = { ...e, ...L(E.validate, e.message) }), !i))
                return A(e.message), M;
            } else if (l(w)) {
              let e = {};
              for (let t in w) {
                if (!k(e) && !i) break;
                let n = Q(await w[t](C, r), P, t);
                n &&
                  ((e = { ...n, ...L(t, n.message) }),
                  A(n.message),
                  i && (M[x] = e));
              }
              if (!k(e) && ((M[x] = { ref: P, ...e }), !i)) return M;
            }
          }
          return A(!0), M;
        };
      function et(e, t) {
        let r = Array.isArray(t) ? t : b(t) ? [t] : w(t),
          i =
            1 === r.length
              ? e
              : (function (e, t) {
                  let r = t.slice(0, -1).length,
                    i = 0;
                  for (; i < r; ) e = v(e) ? i++ : e[t[i++]];
                  return e;
                })(e, r),
          n = r.length - 1,
          s = r[n];
        return (
          i && delete i[s],
          0 !== n &&
            ((l(i) && k(i)) ||
              (Array.isArray(i) &&
                (function (e) {
                  for (let t in e)
                    if (e.hasOwnProperty(t) && !v(e[t])) return !1;
                  return !0;
                })(i))) &&
            et(e, r.slice(0, -1)),
          e
        );
      }
      var er = () => {
          let e = [];
          return {
            get observers() {
              return e;
            },
            next: (t) => {
              for (let r of e) r.next && r.next(t);
            },
            subscribe: (t) => (
              e.push(t),
              {
                unsubscribe: () => {
                  e = e.filter((e) => e !== t);
                },
              }
            ),
            unsubscribe: () => {
              e = [];
            },
          };
        },
        ei = (e) => a(e) || !o(e);
      function en(e, t) {
        if (ei(e) || ei(t)) return e === t;
        if (s(e) && s(t)) return e.getTime() === t.getTime();
        let r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (let n of r) {
          let r = e[n];
          if (!i.includes(n)) return !1;
          if ("ref" !== n) {
            let e = t[n];
            if (
              (s(r) && s(e)) ||
              (l(r) && l(e)) ||
              (Array.isArray(r) && Array.isArray(e))
                ? !en(r, e)
                : r !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var es = (e) => "select-multiple" === e.type,
        ea = (e) => U(e) || n(e),
        eo = (e) => H(e) && e.isConnected,
        el = (e) => {
          for (let t in e) if (z(e[t])) return !0;
          return !1;
        };
      function eu(e, t = {}) {
        let r = Array.isArray(e);
        if (l(e) || r)
          for (let r in e)
            Array.isArray(e[r]) || (l(e[r]) && !el(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), eu(e[r], t[r]))
              : a(e[r]) || (t[r] = !0);
        return t;
      }
      var ed = (e, t) =>
          (function e(t, r, i) {
            let n = Array.isArray(t);
            if (l(t) || n)
              for (let n in t)
                Array.isArray(t[n]) || (l(t[n]) && !el(t[n]))
                  ? v(r) || ei(i[n])
                    ? (i[n] = Array.isArray(t[n])
                        ? eu(t[n], [])
                        : { ...eu(t[n]) })
                    : e(t[n], a(r) ? {} : r[n], i[n])
                  : (i[n] = !en(t[n], r[n]));
            return i;
          })(e, t, eu(t)),
        ec = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) =>
          v(e)
            ? e
            : t
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : r && j(e)
            ? new Date(e)
            : i
            ? i(e)
            : e;
      function eh(e) {
        let t = e.ref;
        return $(t)
          ? t.files
          : U(t)
          ? K(e.refs).value
          : es(t)
          ? [...t.selectedOptions].map(({ value: e }) => e)
          : n(t)
          ? X(e.refs).value
          : ec(v(t.value) ? e.ref.value : t.value, e);
      }
      var ep = (e, t, r, i) => {
          let n = {};
          for (let r of e) {
            let e = g(t, r);
            e && x(n, r, e._f);
          }
          return {
            criteriaMode: r,
            names: [...e],
            fields: n,
            shouldUseNativeValidation: i,
          };
        },
        ef = (e) =>
          v(e)
            ? e
            : Y(e)
            ? e.source
            : l(e)
            ? Y(e.value)
              ? e.value.source
              : e.value
            : e;
      let em = "AsyncFunction";
      var ev = (e) =>
          !!e &&
          !!e.validate &&
          !!(
            (z(e.validate) && e.validate.constructor.name === em) ||
            (l(e.validate) &&
              Object.values(e.validate).find((e) => e.constructor.name === em))
          ),
        eg = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function ey(e, t, r) {
        let i = g(e, r);
        if (i || b(r)) return { error: i, name: r };
        let n = r.split(".");
        for (; n.length; ) {
          let i = n.join("."),
            s = g(t, i),
            a = g(e, i);
          if (s && !Array.isArray(s) && r !== i) break;
          if (a && a.type) return { name: i, error: a };
          n.pop();
        }
        return { name: r };
      }
      var eb = (e, t, r, i, n) =>
          !n.isOnAll &&
          (!r && n.isOnTouch
            ? !(t || e)
            : (r ? i.isOnBlur : n.isOnBlur)
            ? !e
            : (r ? !i.isOnChange : !n.isOnChange) || e),
        ew = (e, t) => !m(g(e, t)).length && et(e, t);
      let ex = {
        mode: T.onSubmit,
        reValidateMode: T.onChange,
        shouldFocusError: !0,
      };
      function eS(e = {}) {
        let t = i.useRef(void 0),
          r = i.useRef(void 0),
          [o, d] = i.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: z(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            defaultValues: z(e.defaultValues) ? void 0 : e.defaultValues,
          });
        t.current ||
          (t.current = {
            ...(function (e = {}) {
              let t,
                r = { ...ex, ...e },
                i = {
                  submitCount: 0,
                  isDirty: !1,
                  isLoading: z(r.defaultValues),
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  validatingFields: {},
                  errors: r.errors || {},
                  disabled: r.disabled || !1,
                },
                o = {},
                d =
                  ((l(r.defaultValues) || l(r.values)) &&
                    f(r.defaultValues || r.values)) ||
                  {},
                h = r.shouldUnregister ? {} : f(d),
                b = { action: !1, mount: !1, watch: !1 },
                w = {
                  mount: new Set(),
                  disabled: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                E = 0,
                C = {
                  isDirty: !1,
                  dirtyFields: !1,
                  validatingFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                P = { values: er(), array: er(), state: er() },
                A = R(r.mode),
                M = R(r.reValidateMode),
                _ = r.criteriaMode === T.all,
                D = (e) => (t) => {
                  clearTimeout(E), (E = setTimeout(e, t));
                },
                F = async (e) => {
                  if (!r.disabled && (C.isValid || e)) {
                    let e = r.resolver ? k((await G()).errors) : await Z(o, !0);
                    e !== i.isValid && P.state.next({ isValid: e });
                  }
                },
                V = (e, t) => {
                  !r.disabled &&
                    (C.isValidating || C.validatingFields) &&
                    ((e || Array.from(w.mount)).forEach((e) => {
                      e &&
                        (t
                          ? x(i.validatingFields, e, t)
                          : et(i.validatingFields, e));
                    }),
                    P.state.next({
                      validatingFields: i.validatingFields,
                      isValidating: !k(i.validatingFields),
                    }));
                },
                W = (e, t) => {
                  x(i.errors, e, t), P.state.next({ errors: i.errors });
                },
                U = (e, t, r, i) => {
                  let n = g(o, e);
                  if (n) {
                    let s = g(h, e, v(r) ? g(d, e) : r);
                    v(s) || (i && i.defaultChecked) || t
                      ? x(h, e, t ? s : eh(n._f))
                      : J(e, s),
                      b.mount && F();
                  }
                },
                Y = (e, t, n, s, a) => {
                  let l = !1,
                    u = !1,
                    c = { name: e };
                  if (!r.disabled) {
                    let r = !!(g(o, e) && g(o, e)._f && g(o, e)._f.disabled);
                    if (!n || s) {
                      C.isDirty &&
                        ((u = i.isDirty),
                        (i.isDirty = c.isDirty = K()),
                        (l = u !== c.isDirty));
                      let n = r || en(g(d, e), t);
                      (u = !!(!r && g(i.dirtyFields, e))),
                        n || r ? et(i.dirtyFields, e) : x(i.dirtyFields, e, !0),
                        (c.dirtyFields = i.dirtyFields),
                        (l = l || (C.dirtyFields && !n !== u));
                    }
                    if (n) {
                      let t = g(i.touchedFields, e);
                      t ||
                        (x(i.touchedFields, e, n),
                        (c.touchedFields = i.touchedFields),
                        (l = l || (C.touchedFields && t !== n)));
                    }
                    l && a && P.state.next(c);
                  }
                  return l ? c : {};
                },
                q = (e, n, s, a) => {
                  let o = g(i.errors, e),
                    l = C.isValid && y(n) && i.isValid !== n;
                  if (
                    (r.delayError && s
                      ? (t = D(() => W(e, s)))(r.delayError)
                      : (clearTimeout(E),
                        (t = null),
                        s ? x(i.errors, e, s) : et(i.errors, e)),
                    (s ? !en(o, s) : o) || !k(a) || l)
                  ) {
                    let t = {
                      ...a,
                      ...(l && y(n) ? { isValid: n } : {}),
                      errors: i.errors,
                      name: e,
                    };
                    (i = { ...i, ...t }), P.state.next(t);
                  }
                },
                G = async (e) => {
                  V(e, !0);
                  let t = await r.resolver(
                    h,
                    r.context,
                    ep(
                      e || w.mount,
                      o,
                      r.criteriaMode,
                      r.shouldUseNativeValidation
                    )
                  );
                  return V(e), t;
                },
                X = async (e) => {
                  let { errors: t } = await G(e);
                  if (e)
                    for (let r of e) {
                      let e = g(t, r);
                      e ? x(i.errors, r, e) : et(i.errors, r);
                    }
                  else i.errors = t;
                  return t;
                },
                Z = async (e, t, n = { valid: !0 }) => {
                  for (let s in e) {
                    let a = e[s];
                    if (a) {
                      let { _f: e, ...o } = a;
                      if (e) {
                        let o = w.array.has(e.name),
                          l = a._f && ev(a._f);
                        l && C.validatingFields && V([s], !0);
                        let u = await ee(
                          a,
                          w.disabled,
                          h,
                          _,
                          r.shouldUseNativeValidation && !t,
                          o
                        );
                        if (
                          (l && C.validatingFields && V([s]),
                          u[e.name] && ((n.valid = !1), t))
                        )
                          break;
                        t ||
                          (g(u, e.name)
                            ? o
                              ? B(i.errors, u, e.name)
                              : x(i.errors, e.name, u[e.name])
                            : et(i.errors, e.name));
                      }
                      k(o) || (await Z(o, t, n));
                    }
                  }
                  return n.valid;
                },
                K = (e, t) =>
                  !r.disabled && (e && t && x(h, e, t), !en(eT(), d)),
                Q = (e, t, r) =>
                  L(
                    e,
                    w,
                    { ...(b.mount ? h : v(t) ? d : j(e) ? { [e]: t } : t) },
                    r,
                    t
                  ),
                J = (e, t, r = {}) => {
                  let i = g(o, e),
                    s = t;
                  if (i) {
                    let r = i._f;
                    r &&
                      (r.disabled || x(h, e, ec(t, r)),
                      (s = H(r.ref) && a(t) ? "" : t),
                      es(r.ref)
                        ? [...r.ref.options].forEach(
                            (e) => (e.selected = s.includes(e.value))
                          )
                        : r.refs
                        ? n(r.ref)
                          ? r.refs.length > 1
                            ? r.refs.forEach(
                                (e) =>
                                  (!e.defaultChecked || !e.disabled) &&
                                  (e.checked = Array.isArray(s)
                                    ? !!s.find((t) => t === e.value)
                                    : s === e.value)
                              )
                            : r.refs[0] && (r.refs[0].checked = !!s)
                          : r.refs.forEach((e) => (e.checked = e.value === s))
                        : $(r.ref)
                        ? (r.ref.value = "")
                        : ((r.ref.value = s),
                          r.ref.type ||
                            P.values.next({ name: e, values: { ...h } })));
                  }
                  (r.shouldDirty || r.shouldTouch) &&
                    Y(e, s, r.shouldTouch, r.shouldDirty, !0),
                    r.shouldValidate && eS(e);
                },
                ei = (e, t, r) => {
                  for (let i in t) {
                    let n = t[i],
                      a = `${e}.${i}`,
                      u = g(o, a);
                    (w.array.has(e) || l(n) || (u && !u._f)) && !s(n)
                      ? ei(a, n, r)
                      : J(a, n, r);
                  }
                },
                el = (e, t, r = {}) => {
                  let n = g(o, e),
                    s = w.array.has(e),
                    l = f(t);
                  x(h, e, l),
                    s
                      ? (P.array.next({ name: e, values: { ...h } }),
                        (C.isDirty || C.dirtyFields) &&
                          r.shouldDirty &&
                          P.state.next({
                            name: e,
                            dirtyFields: ed(d, h),
                            isDirty: K(e, l),
                          }))
                      : !n || n._f || a(l)
                      ? J(e, l, r)
                      : ei(e, l, r),
                    I(e, w) && P.state.next({ ...i }),
                    P.values.next({
                      name: b.mount ? e : void 0,
                      values: { ...h },
                    });
                },
                eu = async (e) => {
                  b.mount = !0;
                  let n = e.target,
                    a = n.name,
                    l = !0,
                    d = g(o, a),
                    c = (e) => {
                      l =
                        Number.isNaN(e) ||
                        (s(e) && isNaN(e.getTime())) ||
                        en(e, g(h, a, e));
                    };
                  if (d) {
                    let s, p;
                    let f = n.type ? eh(d._f) : u(e),
                      m = e.type === S.BLUR || e.type === S.FOCUS_OUT,
                      v =
                        (!eg(d._f) &&
                          !r.resolver &&
                          !g(i.errors, a) &&
                          !d._f.deps) ||
                        eb(m, g(i.touchedFields, a), i.isSubmitted, M, A),
                      y = I(a, w, m);
                    x(h, a, f),
                      m
                        ? (d._f.onBlur && d._f.onBlur(e), t && t(0))
                        : d._f.onChange && d._f.onChange(e);
                    let b = Y(a, f, m, !1),
                      T = !k(b) || y;
                    if (
                      (m ||
                        P.values.next({
                          name: a,
                          type: e.type,
                          values: { ...h },
                        }),
                      v)
                    )
                      return (
                        C.isValid &&
                          ("onBlur" === r.mode && m ? F() : m || F()),
                        T && P.state.next({ name: a, ...(y ? {} : b) })
                      );
                    if ((!m && y && P.state.next({ ...i }), r.resolver)) {
                      let { errors: e } = await G([a]);
                      if ((c(f), l)) {
                        let t = ey(i.errors, o, a),
                          r = ey(e, o, t.name || a);
                        (s = r.error), (a = r.name), (p = k(e));
                      }
                    } else
                      V([a], !0),
                        (s = (
                          await ee(
                            d,
                            w.disabled,
                            h,
                            _,
                            r.shouldUseNativeValidation
                          )
                        )[a]),
                        V([a]),
                        c(f),
                        l && (s ? (p = !1) : C.isValid && (p = await Z(o, !0)));
                    l && (d._f.deps && eS(d._f.deps), q(a, p, s, b));
                  }
                },
                em = (e, t) => {
                  if (g(i.errors, t) && e.focus) return e.focus(), 1;
                },
                eS = async (e, t = {}) => {
                  let n, s;
                  let a = O(e);
                  if (r.resolver) {
                    let t = await X(v(e) ? e : a);
                    (n = k(t)), (s = e ? !a.some((e) => g(t, e)) : n);
                  } else
                    e
                      ? ((s = (
                          await Promise.all(
                            a.map(async (e) => {
                              let t = g(o, e);
                              return await Z(t && t._f ? { [e]: t } : t);
                            })
                          )
                        ).every(Boolean)) ||
                          i.isValid) &&
                        F()
                      : (s = n = await Z(o));
                  return (
                    P.state.next({
                      ...(!j(e) || (C.isValid && n !== i.isValid)
                        ? {}
                        : { name: e }),
                      ...(r.resolver || !e ? { isValid: n } : {}),
                      errors: i.errors,
                    }),
                    t.shouldFocus && !s && N(o, em, e ? a : w.mount),
                    s
                  );
                },
                eT = (e) => {
                  let t = { ...(b.mount ? h : d) };
                  return v(e) ? t : j(e) ? g(t, e) : e.map((e) => g(t, e));
                },
                eE = (e, t) => ({
                  invalid: !!g((t || i).errors, e),
                  isDirty: !!g((t || i).dirtyFields, e),
                  error: g((t || i).errors, e),
                  isValidating: !!g(i.validatingFields, e),
                  isTouched: !!g((t || i).touchedFields, e),
                }),
                eC = (e, t, r) => {
                  let n = (g(o, e, { _f: {} })._f || {}).ref,
                    {
                      ref: s,
                      message: a,
                      type: l,
                      ...u
                    } = g(i.errors, e) || {};
                  x(i.errors, e, { ...u, ...t, ref: n }),
                    P.state.next({ name: e, errors: i.errors, isValid: !1 }),
                    r && r.shouldFocus && n && n.focus && n.focus();
                },
                eP = (e, t = {}) => {
                  for (let n of e ? O(e) : w.mount)
                    w.mount.delete(n),
                      w.array.delete(n),
                      t.keepValue || (et(o, n), et(h, n)),
                      t.keepError || et(i.errors, n),
                      t.keepDirty || et(i.dirtyFields, n),
                      t.keepTouched || et(i.touchedFields, n),
                      t.keepIsValidating || et(i.validatingFields, n),
                      r.shouldUnregister || t.keepDefaultValue || et(d, n);
                  P.values.next({ values: { ...h } }),
                    P.state.next({
                      ...i,
                      ...(t.keepDirty ? { isDirty: K() } : {}),
                    }),
                    t.keepIsValid || F();
                },
                eA = ({ disabled: e, name: t, field: r, fields: i }) => {
                  ((y(e) && b.mount) || e || w.disabled.has(t)) &&
                    (e ? w.disabled.add(t) : w.disabled.delete(t),
                    Y(t, eh(r ? r._f : g(i, t)._f), !1, !1, !0));
                },
                ek = (e, t = {}) => {
                  let i = g(o, e),
                    n = y(t.disabled) || y(r.disabled);
                  return (
                    x(o, e, {
                      ...(i || {}),
                      _f: {
                        ...(i && i._f ? i._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...t,
                      },
                    }),
                    w.mount.add(e),
                    i
                      ? eA({
                          field: i,
                          disabled: y(t.disabled) ? t.disabled : r.disabled,
                          name: e,
                        })
                      : U(e, !0, t.value),
                    {
                      ...(n ? { disabled: t.disabled || r.disabled } : {}),
                      ...(r.progressive
                        ? {
                            required: !!t.required,
                            min: ef(t.min),
                            max: ef(t.max),
                            minLength: ef(t.minLength),
                            maxLength: ef(t.maxLength),
                            pattern: ef(t.pattern),
                          }
                        : {}),
                      name: e,
                      onChange: eu,
                      onBlur: eu,
                      ref: (n) => {
                        if (n) {
                          ek(e, t), (i = g(o, e));
                          let r =
                              (v(n.value) &&
                                n.querySelectorAll &&
                                n.querySelectorAll(
                                  "input,select,textarea"
                                )[0]) ||
                              n,
                            s = ea(r),
                            a = i._f.refs || [];
                          (s ? a.find((e) => e === r) : r === i._f.ref) ||
                            (x(o, e, {
                              _f: {
                                ...i._f,
                                ...(s
                                  ? {
                                      refs: [
                                        ...a.filter(eo),
                                        r,
                                        ...(Array.isArray(g(d, e)) ? [{}] : []),
                                      ],
                                      ref: { type: r.type, name: e },
                                    }
                                  : { ref: r }),
                              },
                            }),
                            U(e, !1, void 0, r));
                        } else
                          (i = g(o, e, {}))._f && (i._f.mount = !1),
                            (r.shouldUnregister || t.shouldUnregister) &&
                              !(c(w.array, e) && b.action) &&
                              w.unMount.add(e);
                      },
                    }
                  );
                },
                eM = () => r.shouldFocusError && N(o, em, w.mount),
                eO = (e, t) => async (n) => {
                  let s;
                  n &&
                    (n.preventDefault && n.preventDefault(),
                    n.persist && n.persist());
                  let a = f(h);
                  if (w.disabled.size)
                    for (let e of w.disabled) x(a, e, void 0);
                  if ((P.state.next({ isSubmitting: !0 }), r.resolver)) {
                    let { errors: e, values: t } = await G();
                    (i.errors = e), (a = t);
                  } else await Z(o);
                  if ((et(i.errors, "root"), k(i.errors))) {
                    P.state.next({ errors: {} });
                    try {
                      await e(a, n);
                    } catch (e) {
                      s = e;
                    }
                  } else
                    t && (await t({ ...i.errors }, n)), eM(), setTimeout(eM);
                  if (
                    (P.state.next({
                      isSubmitted: !0,
                      isSubmitting: !1,
                      isSubmitSuccessful: k(i.errors) && !s,
                      submitCount: i.submitCount + 1,
                      errors: i.errors,
                    }),
                    s)
                  )
                    throw s;
                },
                e_ = (e, t = {}) => {
                  let n = e ? f(e) : d,
                    s = f(n),
                    a = k(e),
                    l = a ? d : s;
                  if ((t.keepDefaultValues || (d = n), !t.keepValues)) {
                    if (t.keepDirtyValues)
                      for (let e of Array.from(
                        new Set([...w.mount, ...Object.keys(ed(d, h))])
                      ))
                        g(i.dirtyFields, e) ? x(l, e, g(h, e)) : el(e, g(l, e));
                    else {
                      if (p && v(e))
                        for (let e of w.mount) {
                          let t = g(o, e);
                          if (t && t._f) {
                            let e = Array.isArray(t._f.refs)
                              ? t._f.refs[0]
                              : t._f.ref;
                            if (H(e)) {
                              let t = e.closest("form");
                              if (t) {
                                t.reset();
                                break;
                              }
                            }
                          }
                        }
                      o = {};
                    }
                    (h = r.shouldUnregister
                      ? t.keepDefaultValues
                        ? f(d)
                        : {}
                      : f(l)),
                      P.array.next({ values: { ...l } }),
                      P.values.next({ values: { ...l } });
                  }
                  (w = {
                    mount: t.keepDirtyValues ? w.mount : new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    disabled: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (b.mount =
                      !C.isValid || !!t.keepIsValid || !!t.keepDirtyValues),
                    (b.watch = !!r.shouldUnregister),
                    P.state.next({
                      submitCount: t.keepSubmitCount ? i.submitCount : 0,
                      isDirty:
                        !a &&
                        (t.keepDirty
                          ? i.isDirty
                          : !!(t.keepDefaultValues && !en(e, d))),
                      isSubmitted: !!t.keepIsSubmitted && i.isSubmitted,
                      dirtyFields: a
                        ? {}
                        : t.keepDirtyValues
                        ? t.keepDefaultValues && h
                          ? ed(d, h)
                          : i.dirtyFields
                        : t.keepDefaultValues && e
                        ? ed(d, e)
                        : t.keepDirty
                        ? i.dirtyFields
                        : {},
                      touchedFields: t.keepTouched ? i.touchedFields : {},
                      errors: t.keepErrors ? i.errors : {},
                      isSubmitSuccessful:
                        !!t.keepIsSubmitSuccessful && i.isSubmitSuccessful,
                      isSubmitting: !1,
                    });
                },
                eD = (e, t) => e_(z(e) ? e(h) : e, t);
              return {
                control: {
                  register: ek,
                  unregister: eP,
                  getFieldState: eE,
                  handleSubmit: eO,
                  setError: eC,
                  _executeSchema: G,
                  _getWatch: Q,
                  _getDirty: K,
                  _updateValid: F,
                  _removeUnmounted: () => {
                    for (let e of w.unMount) {
                      let t = g(o, e);
                      t &&
                        (t._f.refs
                          ? t._f.refs.every((e) => !eo(e))
                          : !eo(t._f.ref)) &&
                        eP(e);
                    }
                    w.unMount = new Set();
                  },
                  _updateFieldArray: (e, t = [], n, s, a = !0, l = !0) => {
                    if (s && n && !r.disabled) {
                      if (((b.action = !0), l && Array.isArray(g(o, e)))) {
                        let t = n(g(o, e), s.argA, s.argB);
                        a && x(o, e, t);
                      }
                      if (l && Array.isArray(g(i.errors, e))) {
                        let t = n(g(i.errors, e), s.argA, s.argB);
                        a && x(i.errors, e, t), ew(i.errors, e);
                      }
                      if (
                        C.touchedFields &&
                        l &&
                        Array.isArray(g(i.touchedFields, e))
                      ) {
                        let t = n(g(i.touchedFields, e), s.argA, s.argB);
                        a && x(i.touchedFields, e, t);
                      }
                      C.dirtyFields && (i.dirtyFields = ed(d, h)),
                        P.state.next({
                          name: e,
                          isDirty: K(e, t),
                          dirtyFields: i.dirtyFields,
                          errors: i.errors,
                          isValid: i.isValid,
                        });
                    } else x(h, e, t);
                  },
                  _updateDisabledField: eA,
                  _getFieldArray: (e) =>
                    m(
                      g(
                        b.mount ? h : d,
                        e,
                        r.shouldUnregister ? g(d, e, []) : []
                      )
                    ),
                  _reset: e_,
                  _resetDefaultValues: () =>
                    z(r.defaultValues) &&
                    r.defaultValues().then((e) => {
                      eD(e, r.resetOptions), P.state.next({ isLoading: !1 });
                    }),
                  _updateFormState: (e) => {
                    i = { ...i, ...e };
                  },
                  _disableForm: (e) => {
                    y(e) &&
                      (P.state.next({ disabled: e }),
                      N(
                        o,
                        (t, r) => {
                          let i = g(o, r);
                          i &&
                            ((t.disabled = i._f.disabled || e),
                            Array.isArray(i._f.refs) &&
                              i._f.refs.forEach((t) => {
                                t.disabled = i._f.disabled || e;
                              }));
                        },
                        0,
                        !1
                      ));
                  },
                  _subjects: P,
                  _proxyFormState: C,
                  _setErrors: (e) => {
                    (i.errors = e),
                      P.state.next({ errors: i.errors, isValid: !1 });
                  },
                  get _fields() {
                    return o;
                  },
                  get _formValues() {
                    return h;
                  },
                  get _state() {
                    return b;
                  },
                  set _state(value) {
                    b = value;
                  },
                  get _defaultValues() {
                    return d;
                  },
                  get _names() {
                    return w;
                  },
                  set _names(value) {
                    w = value;
                  },
                  get _formState() {
                    return i;
                  },
                  set _formState(value) {
                    i = value;
                  },
                  get _options() {
                    return r;
                  },
                  set _options(value) {
                    r = { ...r, ...value };
                  },
                },
                trigger: eS,
                register: ek,
                handleSubmit: eO,
                watch: (e, t) =>
                  z(e)
                    ? P.values.subscribe({ next: (r) => e(Q(void 0, t), r) })
                    : Q(e, t, !0),
                setValue: el,
                getValues: eT,
                reset: eD,
                resetField: (e, t = {}) => {
                  g(o, e) &&
                    (v(t.defaultValue)
                      ? el(e, f(g(d, e)))
                      : (el(e, t.defaultValue), x(d, e, f(t.defaultValue))),
                    t.keepTouched || et(i.touchedFields, e),
                    t.keepDirty ||
                      (et(i.dirtyFields, e),
                      (i.isDirty = t.defaultValue ? K(e, f(g(d, e))) : K())),
                    !t.keepError && (et(i.errors, e), C.isValid && F()),
                    P.state.next({ ...i }));
                },
                clearErrors: (e) => {
                  e && O(e).forEach((e) => et(i.errors, e)),
                    P.state.next({ errors: e ? i.errors : {} });
                },
                unregister: eP,
                setError: eC,
                setFocus: (e, t = {}) => {
                  let r = g(o, e),
                    i = r && r._f;
                  if (i) {
                    let e = i.refs ? i.refs[0] : i.ref;
                    e.focus &&
                      (e.focus(), t.shouldSelect && z(e.select) && e.select());
                  }
                },
                getFieldState: eE,
              };
            })(e),
            formState: o,
          });
        let h = t.current.control;
        return (
          (h._options = e),
          D({
            subject: h._subjects.state,
            next: (e) => {
              M(e, h._proxyFormState, h._updateFormState, !0) &&
                d({ ...h._formState });
            },
          }),
          i.useEffect(() => h._disableForm(e.disabled), [h, e.disabled]),
          i.useEffect(() => {
            if (h._proxyFormState.isDirty) {
              let e = h._getDirty();
              e !== o.isDirty && h._subjects.state.next({ isDirty: e });
            }
          }, [h, o.isDirty]),
          i.useEffect(() => {
            e.values && !en(e.values, r.current)
              ? (h._reset(e.values, h._options.resetOptions),
                (r.current = e.values),
                d((e) => ({ ...e })))
              : h._resetDefaultValues();
          }, [e.values, h]),
          i.useEffect(() => {
            e.errors && h._setErrors(e.errors);
          }, [e.errors, h]),
          i.useEffect(() => {
            h._state.mount || (h._updateValid(), (h._state.mount = !0)),
              h._state.watch &&
                ((h._state.watch = !1),
                h._subjects.state.next({ ...h._formState })),
              h._removeUnmounted();
          }),
          i.useEffect(() => {
            e.shouldUnregister &&
              h._subjects.values.next({ values: h._getWatch() });
          }, [e.shouldUnregister, h]),
          (t.current.formState = A(o, h)),
          t.current
        );
      }
    },
    84216: (e, t, r) => {
      "use strict";
      r.d(t, { Ij: () => a, Vx: () => s });
      var i = r(29948),
        n = r(66999);
      function s(e) {
        let { swiper: t, extendParams: r, on: i, emit: s } = e;
        function a(e) {
          let r;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (r = t.el.querySelector(e) || t.hostEl.querySelector(e))
            ? r
            : (e &&
                ("string" == typeof e &&
                  (r = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" == typeof e &&
                r &&
                r.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (r = t.el.querySelector(e))
                  : r && 1 === r.length && (r = r[0])),
              e && !r)
            ? e
            : r;
        }
        function o(e, r) {
          let i = t.params.navigation;
          (e = (0, n.m)(e)).forEach((e) => {
            e &&
              (e.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = r),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
          });
        }
        function l() {
          let { nextEl: e, prevEl: r } = t.navigation;
          if (t.params.loop) {
            o(r, !1), o(e, !1);
            return;
          }
          o(r, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function u(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), s("navigationPrev"));
        }
        function d(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), s("navigationNext"));
        }
        function c() {
          var e, r, i;
          let s = t.params.navigation;
          if (
            ((t.params.navigation =
              ((e = t.originalParams.navigation),
              (r = t.params.navigation),
              (i = {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }),
              t.params.createElements &&
                Object.keys(i).forEach((s) => {
                  if (!r[s] && !0 === r.auto) {
                    let a = (0, n.e)(t.el, `.${i[s]}`)[0];
                    a ||
                      (((a = (0, n.c)("div", i[s])).className = i[s]),
                      t.el.append(a)),
                      (r[s] = a),
                      (e[s] = a);
                  }
                }),
              r)),
            !(s.nextEl || s.prevEl))
          )
            return;
          let o = a(s.nextEl),
            l = a(s.prevEl);
          Object.assign(t.navigation, { nextEl: o, prevEl: l }),
            (o = (0, n.m)(o)),
            (l = (0, n.m)(l));
          let c = (e, r) => {
            e && e.addEventListener("click", "next" === r ? d : u),
              !t.enabled && e && e.classList.add(...s.lockClass.split(" "));
          };
          o.forEach((e) => c(e, "next")), l.forEach((e) => c(e, "prev"));
        }
        function h() {
          let { nextEl: e, prevEl: r } = t.navigation;
          (e = (0, n.m)(e)), (r = (0, n.m)(r));
          let i = (e, r) => {
            e.removeEventListener("click", "next" === r ? d : u),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => i(e, "next")), r.forEach((e) => i(e, "prev"));
        }
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          i("init", () => {
            !1 === t.params.navigation.enabled ? p() : (c(), l());
          }),
          i("toEdge fromEdge lock unlock", () => {
            l();
          }),
          i("destroy", () => {
            h();
          }),
          i("enable disable", () => {
            let { nextEl: e, prevEl: r } = t.navigation;
            if (((e = (0, n.m)(e)), (r = (0, n.m)(r)), t.enabled)) {
              l();
              return;
            }
            [...e, ...r]
              .filter((e) => !!e)
              .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          i("click", (e, r) => {
            let { nextEl: i, prevEl: a } = t.navigation;
            (i = (0, n.m)(i)), (a = (0, n.m)(a));
            let o = r.target,
              l = a.includes(o) || i.includes(o);
            if (t.isElement && !l) {
              let e = r.path || (r.composedPath && r.composedPath());
              e && (l = e.find((e) => i.includes(e) || a.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !l) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              i.length
                ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
                : a.length &&
                  (e = a[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                !0 === e ? s("navigationShow") : s("navigationHide"),
                [...i, ...a]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        let p = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            h();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              c(),
              l();
          },
          disable: p,
          update: l,
          init: c,
          destroy: h,
        });
      }
      function a(e) {
        let t,
          r,
          n,
          s,
          a,
          o,
          l,
          u,
          d,
          c,
          { swiper: h, extendParams: p, on: f, emit: m, params: v } = e;
        (h.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          p({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let g = v && v.autoplay ? v.autoplay.delay : 3e3,
          y = v && v.autoplay ? v.autoplay.delay : 3e3,
          b = new Date().getTime();
        function w(e) {
          h &&
            !h.destroyed &&
            h.wrapperEl &&
            e.target === h.wrapperEl &&
            (h.wrapperEl.removeEventListener("transitionend", w),
            !c && (!e.detail || !e.detail.bySwiperTouchMove) && A());
        }
        let x = () => {
            if (h.destroyed || !h.autoplay.running) return;
            h.autoplay.paused ? (s = !0) : s && ((y = n), (s = !1));
            let e = h.autoplay.paused ? n : b + y - new Date().getTime();
            (h.autoplay.timeLeft = e),
              m("autoplayTimeLeft", e, e / g),
              (r = requestAnimationFrame(() => {
                x();
              }));
          },
          S = () => {
            let e;
            if (
              (e =
                h.virtual && h.params.virtual.enabled
                  ? h.slides.find((e) =>
                      e.classList.contains("swiper-slide-active")
                    )
                  : h.slides[h.activeIndex])
            )
              return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          },
          T = (e) => {
            if (h.destroyed || !h.autoplay.running) return;
            cancelAnimationFrame(r), x();
            let i = void 0 === e ? h.params.autoplay.delay : e;
            (g = h.params.autoplay.delay), (y = h.params.autoplay.delay);
            let s = S();
            !Number.isNaN(s) &&
              s > 0 &&
              void 0 === e &&
              ((i = s), (g = s), (y = s)),
              (n = i);
            let a = h.params.speed,
              o = () => {
                h &&
                  !h.destroyed &&
                  (h.params.autoplay.reverseDirection
                    ? !h.isBeginning || h.params.loop || h.params.rewind
                      ? (h.slidePrev(a, !0, !0), m("autoplay"))
                      : h.params.autoplay.stopOnLastSlide ||
                        (h.slideTo(h.slides.length - 1, a, !0, !0),
                        m("autoplay"))
                    : !h.isEnd || h.params.loop || h.params.rewind
                    ? (h.slideNext(a, !0, !0), m("autoplay"))
                    : h.params.autoplay.stopOnLastSlide ||
                      (h.slideTo(0, a, !0, !0), m("autoplay")),
                  h.params.cssMode &&
                    ((b = new Date().getTime()),
                    requestAnimationFrame(() => {
                      T();
                    })));
              };
            return (
              i > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    o();
                  }, i)))
                : requestAnimationFrame(() => {
                    o();
                  }),
              i
            );
          },
          E = () => {
            (b = new Date().getTime()),
              (h.autoplay.running = !0),
              T(),
              m("autoplayStart");
          },
          C = () => {
            (h.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(r),
              m("autoplayStop");
          },
          P = (e, r) => {
            if (h.destroyed || !h.autoplay.running) return;
            clearTimeout(t), e || (d = !0);
            let i = () => {
              m("autoplayPause"),
                h.params.autoplay.waitForTransition
                  ? h.wrapperEl.addEventListener("transitionend", w)
                  : A();
            };
            if (((h.autoplay.paused = !0), r)) {
              u && (n = h.params.autoplay.delay), (u = !1), i();
              return;
            }
            (n = (n || h.params.autoplay.delay) - (new Date().getTime() - b)),
              (h.isEnd && n < 0 && !h.params.loop) || (n < 0 && (n = 0), i());
          },
          A = () => {
            (h.isEnd && n < 0 && !h.params.loop) ||
              h.destroyed ||
              !h.autoplay.running ||
              ((b = new Date().getTime()),
              d ? ((d = !1), T(n)) : T(),
              (h.autoplay.paused = !1),
              m("autoplayResume"));
          },
          k = () => {
            if (h.destroyed || !h.autoplay.running) return;
            let e = (0, i.g)();
            "hidden" === e.visibilityState && ((d = !0), P(!0)),
              "visible" === e.visibilityState && A();
          },
          M = (e) => {
            "mouse" === e.pointerType &&
              ((d = !0), (c = !0), h.animating || h.autoplay.paused || P(!0));
          },
          O = (e) => {
            "mouse" === e.pointerType && ((c = !1), h.autoplay.paused && A());
          },
          _ = () => {
            h.params.autoplay.pauseOnMouseEnter &&
              (h.el.addEventListener("pointerenter", M),
              h.el.addEventListener("pointerleave", O));
          },
          D = () => {
            h.el &&
              "string" != typeof h.el &&
              (h.el.removeEventListener("pointerenter", M),
              h.el.removeEventListener("pointerleave", O));
          },
          j = () => {
            (0, i.g)().addEventListener("visibilitychange", k);
          },
          L = () => {
            (0, i.g)().removeEventListener("visibilitychange", k);
          };
        f("init", () => {
          h.params.autoplay.enabled && (_(), j(), E());
        }),
          f("destroy", () => {
            D(), L(), h.autoplay.running && C();
          }),
          f("_freeModeStaticRelease", () => {
            (o || d) && A();
          }),
          f("_freeModeNoMomentumRelease", () => {
            h.params.autoplay.disableOnInteraction ? C() : P(!0, !0);
          }),
          f("beforeTransitionStart", (e, t, r) => {
            !h.destroyed &&
              h.autoplay.running &&
              (r || !h.params.autoplay.disableOnInteraction ? P(!0, !0) : C());
          }),
          f("sliderFirstMove", () => {
            if (!h.destroyed && h.autoplay.running) {
              if (h.params.autoplay.disableOnInteraction) {
                C();
                return;
              }
              (a = !0),
                (o = !1),
                (d = !1),
                (l = setTimeout(() => {
                  (d = !0), (o = !0), P(!0);
                }, 200));
            }
          }),
          f("touchEnd", () => {
            if (!h.destroyed && h.autoplay.running && a) {
              if (
                (clearTimeout(l),
                clearTimeout(t),
                h.params.autoplay.disableOnInteraction)
              ) {
                (o = !1), (a = !1);
                return;
              }
              o && h.params.cssMode && A(), (o = !1), (a = !1);
            }
          }),
          f("slideChange", () => {
            !h.destroyed && h.autoplay.running && (u = !0);
          }),
          Object.assign(h.autoplay, { start: E, stop: C, pause: P, resume: A });
      }
    },
    29948: (e, t, r) => {
      "use strict";
      function i(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function n(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((r) => {
            void 0 === e[r]
              ? (e[r] = t[r])
              : i(t[r]) &&
                i(e[r]) &&
                Object.keys(t[r]).length > 0 &&
                n(e[r], t[r]);
          });
      }
      r.d(t, { a: () => l, g: () => a });
      let s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        let e = "undefined" != typeof document ? document : {};
        return n(e, s), e;
      }
      let o = {
        document: s,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        let e = "undefined" != typeof window ? window : {};
        return n(e, o), e;
      }
    },
    66999: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => b,
        c: () => f,
        d: () => a,
        e: () => c,
        f: () => w,
        h: () => y,
        j: () => o,
        m: () => x,
        n: () => s,
        p: () => g,
        q: () => v,
        r: () => m,
        s: () => u,
        t: () => d,
        u: () => p,
        v: () => h,
        w: () =>
          function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              r = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
              let n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
              if (
                null != n &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(n instanceof HTMLElement)
                  : !n || (1 !== n.nodeType && 11 !== n.nodeType))
              ) {
                let i = Object.keys(Object(n)).filter((e) => 0 > r.indexOf(e));
                for (let r = 0, s = i.length; r < s; r += 1) {
                  let s = i[r],
                    a = Object.getOwnPropertyDescriptor(n, s);
                  void 0 !== a &&
                    a.enumerable &&
                    (l(t[s]) && l(n[s])
                      ? n[s].__swiper__
                        ? (t[s] = n[s])
                        : e(t[s], n[s])
                      : !l(t[s]) && l(n[s])
                      ? ((t[s] = {}),
                        n[s].__swiper__ ? (t[s] = n[s]) : e(t[s], n[s]))
                      : (t[s] = n[s]));
                }
              }
            }
            return t;
          },
        x: () => n,
      });
      var i = r(29948);
      function n(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function a() {
        return Date.now();
      }
      function o(e, t) {
        let r, n, s;
        void 0 === t && (t = "x");
        let a = (0, i.a)(),
          o = (function (e) {
            let t;
            let r = (0, i.a)();
            return (
              r.getComputedStyle && (t = r.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          a.WebKitCSSMatrix
            ? ((n = o.transform || o.webkitTransform).split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new a.WebKitCSSMatrix("none" === n ? "" : n)))
            : (r = (s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (n = a.WebKitCSSMatrix
              ? s.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (n = a.WebKitCSSMatrix
              ? s.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          n || 0
        );
      }
      function l(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function u(e, t, r) {
        e.style.setProperty(t, r);
      }
      function d(e) {
        let t,
          { swiper: r, targetPosition: n, side: s } = e,
          a = (0, i.a)(),
          o = -r.translate,
          l = null,
          u = r.params.speed;
        (r.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(r.cssModeFrameID);
        let d = n > o ? "next" : "prev",
          c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          h = () => {
            (t = new Date().getTime()), null === l && (l = t);
            let e =
              o +
              (0.5 -
                Math.cos(Math.max(Math.min((t - l) / u, 1), 0) * Math.PI) / 2) *
                (n - o);
            if (
              (c(e, n) && (e = n), r.wrapperEl.scrollTo({ [s]: e }), c(e, n))
            ) {
              (r.wrapperEl.style.overflow = "hidden"),
                (r.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (r.wrapperEl.style.overflow = ""),
                    r.wrapperEl.scrollTo({ [s]: e });
                }),
                a.cancelAnimationFrame(r.cssModeFrameID);
              return;
            }
            r.cssModeFrameID = a.requestAnimationFrame(h);
          };
        h();
      }
      function c(e, t) {
        void 0 === t && (t = "");
        let r = (0, i.a)(),
          n = [...e.children];
        return (r.HTMLSlotElement &&
          e instanceof HTMLSlotElement &&
          n.push(...e.assignedElements()),
        t)
          ? n.filter((e) => e.matches(t))
          : n;
      }
      function h(e, t) {
        let r = (0, i.a)(),
          n = t.contains(e);
        return (
          !n &&
            r.HTMLSlotElement &&
            t instanceof HTMLSlotElement &&
            !(n = [...t.assignedElements()].includes(e)) &&
            (n = (function (e, t) {
              let r = [t];
              for (; r.length > 0; ) {
                let t = r.shift();
                if (e === t) return !0;
                r.push(
                  ...t.children,
                  ...(t.shadowRoot?.children || []),
                  ...(t.assignedElements?.() || [])
                );
              }
            })(e, t)),
          n
        );
      }
      function p(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function f(e, t) {
        var r;
        void 0 === t && (t = []);
        let i = document.createElement(e);
        return (
          i.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (r = t) && (r = ""),
                r
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          i
        );
      }
      function m(e, t) {
        let r = [];
        for (; e.previousElementSibling; ) {
          let i = e.previousElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), (e = i);
        }
        return r;
      }
      function v(e, t) {
        let r = [];
        for (; e.nextElementSibling; ) {
          let i = e.nextElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), (e = i);
        }
        return r;
      }
      function g(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function y(e) {
        let t,
          r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling); )
            1 === r.nodeType && (t += 1);
          return t;
        }
      }
      function b(e, t) {
        let r = [],
          i = e.parentElement;
        for (; i; )
          t ? i.matches(t) && r.push(i) : r.push(i), (i = i.parentElement);
        return r;
      }
      function w(e, t, r) {
        let n = (0, i.a)();
        return r
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                n
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                n
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function x(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    1247: (e, t, r) => {
      "use strict";
      let i, n, s;
      r.d(t, { RC: () => U, qr: () => Y });
      var a = r(12115),
        o = r(29948),
        l = r(66999);
      function u() {
        return (
          i ||
            (i = (function () {
              let e = (0, o.a)(),
                t = (0, o.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          i
        );
      }
      function d(e) {
        return (
          void 0 === e && (e = {}),
          n ||
            (n = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                r = u(),
                i = (0, o.a)(),
                n = i.navigator.platform,
                s = t || i.navigator.userAgent,
                a = { ios: !1, android: !1 },
                l = i.screen.width,
                d = i.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/),
                h = s.match(/(iPad).*OS\s([\d_]+)/),
                p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !h && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === n;
              return (
                !h &&
                  m &&
                  r.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${l}x${d}`) >= 0 &&
                  ((h = s.match(/(Version)\/([\d.]+)/)) ||
                    (h = [0, 1, "13_0_0"]),
                  (m = !1)),
                c && "Win32" !== n && ((a.os = "android"), (a.android = !0)),
                (h || f || p) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          n
        );
      }
      let c = (e, t, r) => {
          t && !e.classList.contains(r)
            ? e.classList.add(r)
            : !t && e.classList.contains(r) && e.classList.remove(r);
        },
        h = (e, t, r) => {
          t && !e.classList.contains(r)
            ? e.classList.add(r)
            : !t && e.classList.contains(r) && e.classList.remove(r);
        },
        p = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let r = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (r.shadowRoot
                ? (t = r.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    r.shadowRoot &&
                      (t = r.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          let r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading");
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          let i =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            n = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let r = [n - t];
            r.push(...Array.from({ length: t }).map((e, t) => n + i + t)),
              e.slides.forEach((t, i) => {
                r.includes(t.column) && f(e, i);
              });
            return;
          }
          let s = n + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = n - t; i <= s + t; i += 1) {
              let t = ((i % r) + r) % r;
              (t < n || t > s) && f(e, t);
            }
          else
            for (
              let i = Math.max(n - t, 0);
              i <= Math.min(s + t, r - 1);
              i += 1
            )
              i !== n && (i > s || i < n) && f(e, i);
        };
      function v(e) {
        let { swiper: t, runCallbacks: r, direction: i, step: n } = e,
          { activeIndex: s, previousIndex: a } = t,
          o = i;
        if (
          (o || (o = s > a ? "next" : s < a ? "prev" : "reset"),
          t.emit(`transition${n}`),
          r && s !== a)
        ) {
          if ("reset" === o) {
            t.emit(`slideResetTransition${n}`);
            return;
          }
          t.emit(`slideChangeTransition${n}`),
            "next" === o
              ? t.emit(`slideNextTransition${n}`)
              : t.emit(`slidePrevTransition${n}`);
        }
      }
      function g(e, t, r) {
        let i = (0, o.a)(),
          { params: n } = e,
          s = n.edgeSwipeDetection,
          a = n.edgeSwipeThreshold;
        return (
          !s ||
          (!(r <= a) && !(r >= i.innerWidth - a)) ||
          ("prevent" === s && (t.preventDefault(), !0))
        );
      }
      function y(e) {
        let t = (0, o.g)(),
          r = e;
        r.originalEvent && (r = r.originalEvent);
        let i = this.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== i.pointerId && i.pointerId !== r.pointerId) return;
          i.pointerId = r.pointerId;
        } else
          "touchstart" === r.type &&
            1 === r.targetTouches.length &&
            (i.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) {
          g(this, r, r.targetTouches[0].pageX);
          return;
        }
        let { params: n, touches: s, enabled: a } = this;
        if (
          !a ||
          (!n.simulateTouch && "mouse" === r.pointerType) ||
          (this.animating && n.preventInteractionOnTransition)
        )
          return;
        !this.animating && n.cssMode && n.loop && this.loopFix();
        let u = r.target;
        if (
          ("wrapper" === n.touchEventsTarget && !(0, l.v)(u, this.wrapperEl)) ||
          ("which" in r && 3 === r.which) ||
          ("button" in r && r.button > 0) ||
          (i.isTouched && i.isMoved)
        )
          return;
        let d = !!n.noSwipingClass && "" !== n.noSwipingClass,
          c = r.composedPath ? r.composedPath() : r.path;
        d && r.target && r.target.shadowRoot && c && (u = c[0]);
        let h = n.noSwipingSelector
            ? n.noSwipingSelector
            : `.${n.noSwipingClass}`,
          p = !!(r.target && r.target.shadowRoot);
        if (
          n.noSwiping &&
          (p
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(r) {
                    if (!r || r === (0, o.g)() || r === (0, o.a)()) return null;
                    r.assignedSlot && (r = r.assignedSlot);
                    let i = r.closest(e);
                    return i || r.getRootNode
                      ? i || t(r.getRootNode().host)
                      : null;
                  })(t)
                );
              })(h, u)
            : u.closest(h))
        ) {
          this.allowClick = !0;
          return;
        }
        if (n.swipeHandler && !u.closest(n.swipeHandler)) return;
        (s.currentX = r.pageX), (s.currentY = r.pageY);
        let f = s.currentX,
          m = s.currentY;
        if (!g(this, r, f)) return;
        Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (s.startX = f),
          (s.startY = m),
          (i.touchStartTime = (0, l.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          n.threshold > 0 && (i.allowThresholdMove = !1);
        let v = !0;
        u.matches(i.focusableElements) &&
          ((v = !1), "SELECT" === u.nodeName && (i.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(i.focusableElements) &&
            t.activeElement !== u &&
            ("mouse" === r.pointerType ||
              ("mouse" !== r.pointerType && !u.matches(i.focusableElements))) &&
            t.activeElement.blur();
        let y = v && this.allowTouchMove && n.touchStartPreventDefault;
        (n.touchStartForcePreventDefault || y) &&
          !u.isContentEditable &&
          r.preventDefault(),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !n.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", r);
      }
      function b(e) {
        let t, r;
        let i = (0, o.g)(),
          n = this.touchEventsData,
          { params: s, touches: a, rtlTranslate: u, enabled: d } = this;
        if (!d || (!s.simulateTouch && "mouse" === e.pointerType)) return;
        let c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          "pointermove" === c.type &&
            (null !== n.touchId || c.pointerId !== n.pointerId))
        )
          return;
        if ("touchmove" === c.type) {
          if (
            !(t = [...c.changedTouches].find(
              (e) => e.identifier === n.touchId
            )) ||
            t.identifier !== n.touchId
          )
            return;
        } else t = c;
        if (!n.isTouched) {
          n.startMoving && n.isScrolling && this.emit("touchMoveOpposite", c);
          return;
        }
        let h = t.pageX,
          p = t.pageY;
        if (c.preventedByNestedSwiper) {
          (a.startX = h), (a.startY = p);
          return;
        }
        if (!this.allowTouchMove) {
          c.target.matches(n.focusableElements) || (this.allowClick = !1),
            n.isTouched &&
              (Object.assign(a, {
                startX: h,
                startY: p,
                currentX: h,
                currentY: p,
              }),
              (n.touchStartTime = (0, l.d)()));
          return;
        }
        if (s.touchReleaseOnEdges && !s.loop) {
          if (this.isVertical()) {
            if (
              (p < a.startY && this.translate <= this.maxTranslate()) ||
              (p > a.startY && this.translate >= this.minTranslate())
            ) {
              (n.isTouched = !1), (n.isMoved = !1);
              return;
            }
          } else if (
            (h < a.startX && this.translate <= this.maxTranslate()) ||
            (h > a.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          (i.activeElement &&
            i.activeElement.matches(n.focusableElements) &&
            i.activeElement !== c.target &&
            "mouse" !== c.pointerType &&
            i.activeElement.blur(),
          i.activeElement &&
            c.target === i.activeElement &&
            c.target.matches(n.focusableElements))
        ) {
          (n.isMoved = !0), (this.allowClick = !1);
          return;
        }
        n.allowTouchCallbacks && this.emit("touchMove", c),
          (a.previousX = a.currentX),
          (a.previousY = a.currentY),
          (a.currentX = h),
          (a.currentY = p);
        let f = a.currentX - a.startX,
          m = a.currentY - a.startY;
        if (
          this.params.threshold &&
          Math.sqrt(f ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === n.isScrolling) {
          let e;
          (this.isHorizontal() && a.currentY === a.startY) ||
          (this.isVertical() && a.currentX === a.startX)
            ? (n.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (n.isScrolling = this.isHorizontal()
                ? e > s.touchAngle
                : 90 - e > s.touchAngle));
        }
        if (
          (n.isScrolling && this.emit("touchMoveOpposite", c),
          void 0 === n.startMoving &&
            (a.currentX !== a.startX || a.currentY !== a.startY) &&
            (n.startMoving = !0),
          n.isScrolling ||
            ("touchmove" === c.type && n.preventTouchMoveFromPointerMove))
        ) {
          n.isTouched = !1;
          return;
        }
        if (!n.startMoving) return;
        (this.allowClick = !1),
          !s.cssMode && c.cancelable && c.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && c.stopPropagation();
        let v = this.isHorizontal() ? f : m,
          g = this.isHorizontal()
            ? a.currentX - a.previousX
            : a.currentY - a.previousY;
        s.oneWayMovement &&
          ((v = Math.abs(v) * (u ? 1 : -1)), (g = Math.abs(g) * (u ? 1 : -1))),
          (a.diff = v),
          (v *= s.touchRatio),
          u && ((v = -v), (g = -g));
        let y = this.touchesDirection;
        (this.swipeDirection = v > 0 ? "prev" : "next"),
          (this.touchesDirection = g > 0 ? "prev" : "next");
        let b = this.params.loop && !s.cssMode,
          w =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!n.isMoved) {
          if (
            (b && w && this.loopFix({ direction: this.swipeDirection }),
            (n.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (n.allowMomentumBounce = !1),
            s.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", c);
        }
        if (
          (new Date().getTime(),
          n.isMoved &&
            n.allowThresholdMove &&
            y !== this.touchesDirection &&
            b &&
            w &&
            Math.abs(v) >= 1)
        ) {
          Object.assign(a, {
            startX: h,
            startY: p,
            currentX: h,
            currentY: p,
            startTranslate: n.currentTranslate,
          }),
            (n.loopSwapReset = !0),
            (n.startTranslate = n.currentTranslate);
          return;
        }
        this.emit("sliderMove", c),
          (n.isMoved = !0),
          (n.currentTranslate = v + n.startTranslate);
        let x = !0,
          S = s.resistanceRatio;
        if (
          (s.touchReleaseOnEdges && (S = 0),
          v > 0
            ? (b &&
                w &&
                !r &&
                n.allowThresholdMove &&
                n.currentTranslate >
                  (s.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ("auto" !== s.slidesPerView &&
                      this.slides.length - s.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] +
                          this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              n.currentTranslate > this.minTranslate() &&
                ((x = !1),
                s.resistance &&
                  (n.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + n.startTranslate + v) ** S)))
            : v < 0 &&
              (b &&
                w &&
                !r &&
                n.allowThresholdMove &&
                n.currentTranslate <
                  (s.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ("auto" !== s.slidesPerView &&
                      this.slides.length - s.slidesPerView >= 2
                        ? this.slidesSizesGrid[
                            this.slidesSizesGrid.length - 1
                          ] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === s.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(s.slidesPerView, 10))),
                }),
              n.currentTranslate < this.maxTranslate() &&
                ((x = !1),
                s.resistance &&
                  (n.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - n.startTranslate - v) ** S))),
          x && (c.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            n.currentTranslate < n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            n.currentTranslate > n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (n.currentTranslate = n.startTranslate),
          s.threshold > 0)
        ) {
          if (Math.abs(v) > s.threshold || n.allowThresholdMove) {
            if (!n.allowThresholdMove) {
              (n.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (n.currentTranslate = n.startTranslate),
                (a.diff = this.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY);
              return;
            }
          } else {
            n.currentTranslate = n.startTranslate;
            return;
          }
        }
        s.followFinger &&
          !s.cssMode &&
          (((s.freeMode && s.freeMode.enabled && this.freeMode) ||
            s.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          s.freeMode &&
            s.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(n.currentTranslate),
          this.setTranslate(n.currentTranslate));
      }
      function w(e) {
        let t, r;
        let i = this,
          n = i.touchEventsData,
          s = e;
        if (
          (s.originalEvent && (s = s.originalEvent),
          "touchend" === s.type || "touchcancel" === s.type)
        ) {
          if (
            !(t = [...s.changedTouches].find(
              (e) => e.identifier === n.touchId
            )) ||
            t.identifier !== n.touchId
          )
            return;
        } else {
          if (null !== n.touchId || s.pointerId !== n.pointerId) return;
          t = s;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(s.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(s.type) &&
            (i.browser.isSafari || i.browser.isWebView)
          )
        )
          return;
        (n.pointerId = null), (n.touchId = null);
        let {
          params: a,
          touches: o,
          rtlTranslate: u,
          slidesGrid: d,
          enabled: c,
        } = i;
        if (!c || (!a.simulateTouch && "mouse" === s.pointerType)) return;
        if (
          (n.allowTouchCallbacks && i.emit("touchEnd", s),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        ) {
          n.isMoved && a.grabCursor && i.setGrabCursor(!1),
            (n.isMoved = !1),
            (n.startMoving = !1);
          return;
        }
        a.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) &&
          i.setGrabCursor(!1);
        let h = (0, l.d)(),
          p = h - n.touchStartTime;
        if (i.allowClick) {
          let e = s.path || (s.composedPath && s.composedPath());
          i.updateClickedSlide((e && e[0]) || s.target, e),
            i.emit("tap click", s),
            p < 300 &&
              h - n.lastClickTime < 300 &&
              i.emit("doubleTap doubleClick", s);
        }
        if (
          ((n.lastClickTime = (0, l.d)()),
          (0, l.n)(() => {
            i.destroyed || (i.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !i.swipeDirection ||
            (0 === o.diff && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
        ) {
          (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
          return;
        }
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (r = a.followFinger
            ? u
              ? i.translate
              : -i.translate
            : -n.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode && a.freeMode.enabled) {
          i.freeMode.onTouchEnd({ currentPos: r });
          return;
        }
        let f = r >= -i.maxTranslate() && !i.params.loop,
          m = 0,
          v = i.slidesSizesGrid[0];
        for (
          let e = 0;
          e < d.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t]
            ? (f || (r >= d[e] && r < d[e + t])) &&
              ((m = e), (v = d[e + t] - d[e]))
            : (f || r >= d[e]) &&
              ((m = e), (v = d[d.length - 1] - d[d.length - 2]));
        }
        let g = null,
          y = null;
        a.rewind &&
          (i.isBeginning
            ? (y =
                a.virtual && a.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1)
            : i.isEnd && (g = 0));
        let b = (r - d[m]) / v,
          w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (p > a.longSwipesMs) {
          if (!a.longSwipes) {
            i.slideTo(i.activeIndex);
            return;
          }
          "next" === i.swipeDirection &&
            (b >= a.longSwipesRatio
              ? i.slideTo(a.rewind && i.isEnd ? g : m + w)
              : i.slideTo(m)),
            "prev" === i.swipeDirection &&
              (b > 1 - a.longSwipesRatio
                ? i.slideTo(m + w)
                : null !== y && b < 0 && Math.abs(b) > a.longSwipesRatio
                ? i.slideTo(y)
                : i.slideTo(m));
        } else {
          if (!a.shortSwipes) {
            i.slideTo(i.activeIndex);
            return;
          }
          i.navigation &&
          (s.target === i.navigation.nextEl || s.target === i.navigation.prevEl)
            ? s.target === i.navigation.nextEl
              ? i.slideTo(m + w)
              : i.slideTo(m)
            : ("next" === i.swipeDirection && i.slideTo(null !== g ? g : m + w),
              "prev" === i.swipeDirection && i.slideTo(null !== y ? y : m));
        }
      }
      function x() {
        let e = this,
          { params: t, el: r } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: i, allowSlidePrev: n, snapGrid: s } = e,
          a = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let o = a && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !a
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = i),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function S(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function T() {
        let { wrapperEl: e, rtlTranslate: t, enabled: r } = this;
        if (!r) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function E(e) {
        p(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function C() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let P = (e, t) => {
          let r = (0, o.g)(),
            { params: i, el: n, wrapperEl: s, device: a } = e,
            l = !!i.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener";
          n &&
            "string" != typeof n &&
            (r[u]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: l,
            }),
            n[u]("touchstart", e.onTouchStart, { passive: !1 }),
            n[u]("pointerdown", e.onTouchStart, { passive: !1 }),
            r[u]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
            r[u]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
            r[u]("touchend", e.onTouchEnd, { passive: !0 }),
            r[u]("pointerup", e.onTouchEnd, { passive: !0 }),
            r[u]("pointercancel", e.onTouchEnd, { passive: !0 }),
            r[u]("touchcancel", e.onTouchEnd, { passive: !0 }),
            r[u]("pointerout", e.onTouchEnd, { passive: !0 }),
            r[u]("pointerleave", e.onTouchEnd, { passive: !0 }),
            r[u]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (i.preventClicks || i.preventClicksPropagation) &&
              n[u]("click", e.onClick, !0),
            i.cssMode && s[u]("scroll", e.onScroll),
            i.updateOnWindowResize
              ? e[t](
                  a.ios || a.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  x,
                  !0
                )
              : e[t]("observerUpdate", x, !0),
            n[u]("load", e.onLoad, { capture: !0 }));
        },
        A = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var k = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let M = {
          eventsEmitter: {
            on(e, t, r) {
              let i = this;
              if (!i.eventsListeners || i.destroyed || "function" != typeof t)
                return i;
              let n = r ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  i.eventsListeners[e] || (i.eventsListeners[e] = []),
                    i.eventsListeners[e][n](t);
                }),
                i
              );
            },
            once(e, t, r) {
              let i = this;
              if (!i.eventsListeners || i.destroyed || "function" != typeof t)
                return i;
              function n() {
                i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                for (var r = arguments.length, s = Array(r), a = 0; a < r; a++)
                  s[a] = arguments[a];
                t.apply(i, s);
              }
              return (n.__emitterProxy = t), i.on(e, n, r);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let r = this;
              return (
                r.eventsListeners &&
                  !r.destroyed &&
                  r.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (r.eventsListeners[e] = [])
                      : r.eventsListeners[e] &&
                        r.eventsListeners[e].forEach((i, n) => {
                          (i === t ||
                            (i.__emitterProxy && i.__emitterProxy === t)) &&
                            r.eventsListeners[e].splice(n, 1);
                        });
                  }),
                r
              );
            },
            emit() {
              let e, t, r;
              let i = this;
              if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
                return i;
              for (var n = arguments.length, s = Array(n), a = 0; a < n; a++)
                s[a] = arguments[a];
              return (
                "string" == typeof s[0] || Array.isArray(s[0])
                  ? ((e = s[0]), (t = s.slice(1, s.length)), (r = i))
                  : ((e = s[0].events),
                    (t = s[0].data),
                    (r = s[0].context || i)),
                t.unshift(r),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  i.eventsAnyListeners &&
                    i.eventsAnyListeners.length &&
                    i.eventsAnyListeners.forEach((i) => {
                      i.apply(r, [e, ...t]);
                    }),
                    i.eventsListeners &&
                      i.eventsListeners[e] &&
                      i.eventsListeners[e].forEach((e) => {
                        e.apply(r, t);
                      });
                }),
                i
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let r = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : r.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : r.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, l.p)(r, "padding-left") || 0, 10) -
                    parseInt((0, l.p)(r, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, l.p)(r, "padding-top") || 0, 10) -
                    parseInt((0, l.p)(r, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function r(e, r) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(r)) || 0
                );
              }
              let i = t.params,
                {
                  wrapperEl: n,
                  slidesEl: s,
                  size: a,
                  rtlTranslate: o,
                  wrongRTL: u,
                } = t,
                d = t.virtual && i.virtual.enabled,
                c = d ? t.virtual.slides.length : t.slides.length,
                h = (0, l.e)(s, `.${t.params.slideClass}, swiper-slide`),
                p = d ? t.virtual.slides.length : h.length,
                f = [],
                m = [],
                v = [],
                g = i.slidesOffsetBefore;
              "function" == typeof g && (g = i.slidesOffsetBefore.call(t));
              let y = i.slidesOffsetAfter;
              "function" == typeof y && (y = i.slidesOffsetAfter.call(t));
              let b = t.snapGrid.length,
                w = t.slidesGrid.length,
                x = i.spaceBetween,
                S = -g,
                T = 0,
                E = 0;
              if (void 0 === a) return;
              "string" == typeof x && x.indexOf("%") >= 0
                ? (x = (parseFloat(x.replace("%", "")) / 100) * a)
                : "string" == typeof x && (x = parseFloat(x)),
                (t.virtualSize = -x),
                h.forEach((e) => {
                  o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                i.centeredSlides &&
                  i.cssMode &&
                  ((0, l.s)(n, "--swiper-centered-offset-before", ""),
                  (0, l.s)(n, "--swiper-centered-offset-after", ""));
              let C = i.grid && i.grid.rows > 1 && t.grid;
              C ? t.grid.initSlides(h) : t.grid && t.grid.unsetSlides();
              let P =
                "auto" === i.slidesPerView &&
                i.breakpoints &&
                Object.keys(i.breakpoints).filter(
                  (e) => void 0 !== i.breakpoints[e].slidesPerView
                ).length > 0;
              for (let n = 0; n < p; n += 1) {
                let s;
                if (
                  ((e = 0),
                  h[n] && (s = h[n]),
                  C && t.grid.updateSlide(n, s, h),
                  !h[n] || "none" !== (0, l.p)(s, "display"))
                ) {
                  if ("auto" === i.slidesPerView) {
                    P && (h[n].style[t.getDirectionLabel("width")] = "");
                    let a = getComputedStyle(s),
                      o = s.style.transform,
                      u = s.style.webkitTransform;
                    if (
                      (o && (s.style.transform = "none"),
                      u && (s.style.webkitTransform = "none"),
                      i.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, l.f)(s, "width", !0)
                        : (0, l.f)(s, "height", !0);
                    else {
                      let t = r(a, "width"),
                        i = r(a, "padding-left"),
                        n = r(a, "padding-right"),
                        o = r(a, "margin-left"),
                        l = r(a, "margin-right"),
                        u = a.getPropertyValue("box-sizing");
                      if (u && "border-box" === u) e = t + o + l;
                      else {
                        let { clientWidth: r, offsetWidth: a } = s;
                        e = t + i + n + o + l + (a - r);
                      }
                    }
                    o && (s.style.transform = o),
                      u && (s.style.webkitTransform = u),
                      i.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (a - (i.slidesPerView - 1) * x) / i.slidesPerView),
                      i.roundLengths && (e = Math.floor(e)),
                      h[n] &&
                        (h[n].style[t.getDirectionLabel("width")] = `${e}px`);
                  h[n] && (h[n].swiperSlideSize = e),
                    v.push(e),
                    i.centeredSlides
                      ? ((S = S + e / 2 + T / 2 + x),
                        0 === T && 0 !== n && (S = S - a / 2 - x),
                        0 === n && (S = S - a / 2 - x),
                        0.001 > Math.abs(S) && (S = 0),
                        i.roundLengths && (S = Math.floor(S)),
                        E % i.slidesPerGroup == 0 && f.push(S),
                        m.push(S))
                      : (i.roundLengths && (S = Math.floor(S)),
                        (E - Math.min(t.params.slidesPerGroupSkip, E)) %
                          t.params.slidesPerGroup ==
                          0 && f.push(S),
                        m.push(S),
                        (S = S + e + x)),
                    (t.virtualSize += e + x),
                    (T = e),
                    (E += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, a) + y),
                o &&
                  u &&
                  ("slide" === i.effect || "coverflow" === i.effect) &&
                  (n.style.width = `${t.virtualSize + x}px`),
                i.setWrapperSize &&
                  (n.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + x
                  }px`),
                C && t.grid.updateWrapperSize(e, f),
                !i.centeredSlides)
              ) {
                let e = [];
                for (let r = 0; r < f.length; r += 1) {
                  let n = f[r];
                  i.roundLengths && (n = Math.floor(n)),
                    f[r] <= t.virtualSize - a && e.push(n);
                }
                (f = e),
                  Math.floor(t.virtualSize - a) - Math.floor(f[f.length - 1]) >
                    1 && f.push(t.virtualSize - a);
              }
              if (d && i.loop) {
                let e = v[0] + x;
                if (i.slidesPerGroup > 1) {
                  let r = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        i.slidesPerGroup
                    ),
                    n = e * i.slidesPerGroup;
                  for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + n);
                }
                for (
                  let r = 0;
                  r < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  r += 1
                )
                  1 === i.slidesPerGroup && f.push(f[f.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === f.length && (f = [0]), 0 !== x)) {
                let e =
                  t.isHorizontal() && o
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                h.filter(
                  (e, t) => !i.cssMode || !!i.loop || t !== h.length - 1
                ).forEach((t) => {
                  t.style[e] = `${x}px`;
                });
              }
              if (i.centeredSlides && i.centeredSlidesBounds) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (x || 0);
                });
                let t = (e -= x) > a ? e - a : 0;
                f = f.map((e) => (e <= 0 ? -g : e > t ? t + y : e));
              }
              if (i.centerInsufficientSlides) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (x || 0);
                }),
                  (e -= x);
                let t =
                  (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                if (e + t < a) {
                  let r = (a - e - t) / 2;
                  f.forEach((e, t) => {
                    f[t] = e - r;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + r;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: h,
                  snapGrid: f,
                  slidesGrid: m,
                  slidesSizesGrid: v,
                }),
                i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
              ) {
                (0, l.s)(n, "--swiper-centered-offset-before", `${-f[0]}px`),
                  (0, l.s)(
                    n,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - v[v.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  r = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + r));
              }
              if (
                (p !== c && t.emit("slidesLengthChange"),
                f.length !== b &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== w && t.emit("slidesGridLengthChange"),
                i.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !d &&
                  !i.cssMode &&
                  ("slide" === i.effect || "fade" === i.effect))
              ) {
                let e = `${i.containerModifierClass}backface-hidden`,
                  r = t.el.classList.contains(e);
                p <= i.maxBackfaceHiddenSlides
                  ? r || t.el.classList.add(e)
                  : r && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let r = this,
                i = [],
                n = r.virtual && r.params.virtual.enabled,
                s = 0;
              "number" == typeof e
                ? r.setTransition(e)
                : !0 === e && r.setTransition(r.params.speed);
              let a = (e) =>
                n ? r.slides[r.getSlideIndexByData(e)] : r.slides[e];
              if (
                "auto" !== r.params.slidesPerView &&
                r.params.slidesPerView > 1
              ) {
                if (r.params.centeredSlides)
                  (r.visibleSlides || []).forEach((e) => {
                    i.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(r.params.slidesPerView); t += 1) {
                    let e = r.activeIndex + t;
                    if (e > r.slides.length && !n) break;
                    i.push(a(e));
                  }
              } else i.push(a(r.activeIndex));
              for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                  let e = i[t].offsetHeight;
                  s = e > s ? e : s;
                }
              (s || 0 === s) && (r.wrapperEl.style.height = `${s}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let r = 0; r < e.length; r += 1)
                e[r].swiperSlideOffset =
                  (this.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: r, rtlTranslate: i, snapGrid: n } = this;
              if (0 === r.length) return;
              void 0 === r[0].swiperSlideOffset && this.updateSlidesOffset();
              let s = -e;
              i && (s = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let a = t.spaceBetween;
              "string" == typeof a && a.indexOf("%") >= 0
                ? (a = (parseFloat(a.replace("%", "")) / 100) * this.size)
                : "string" == typeof a && (a = parseFloat(a));
              for (let e = 0; e < r.length; e += 1) {
                let o = r[e],
                  l = o.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (l -= r[0].swiperSlideOffset);
                let u =
                    (s + (t.centeredSlides ? this.minTranslate() : 0) - l) /
                    (o.swiperSlideSize + a),
                  d =
                    (s -
                      n[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      l) /
                    (o.swiperSlideSize + a),
                  h = -(s - l),
                  p = h + this.slidesSizesGrid[e],
                  f = h >= 0 && h <= this.size - this.slidesSizesGrid[e],
                  m =
                    (h >= 0 && h < this.size - 1) ||
                    (p > 1 && p <= this.size) ||
                    (h <= 0 && p >= this.size);
                m &&
                  (this.visibleSlides.push(o),
                  this.visibleSlidesIndexes.push(e)),
                  c(o, m, t.slideVisibleClass),
                  c(o, f, t.slideFullyVisibleClass),
                  (o.progress = i ? -u : u),
                  (o.originalProgress = i ? -d : d);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                r = this.maxTranslate() - this.minTranslate(),
                {
                  progress: i,
                  isBeginning: n,
                  isEnd: s,
                  progressLoop: a,
                } = this,
                o = n,
                l = s;
              if (0 === r) (i = 0), (n = !0), (s = !0);
              else {
                i = (e - this.minTranslate()) / r;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  a = 1 > Math.abs(e - this.maxTranslate());
                (n = t || i <= 0),
                  (s = a || i >= 1),
                  t && (i = 0),
                  a && (i = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  r = this.getSlideIndexByData(this.slides.length - 1),
                  i = this.slidesGrid[t],
                  n = this.slidesGrid[r],
                  s = this.slidesGrid[this.slidesGrid.length - 1],
                  o = Math.abs(e);
                (a = o >= i ? (o - i) / s : (o + s - n) / s) > 1 && (a -= 1);
              }
              Object.assign(this, {
                progress: i,
                progressLoop: a,
                isBeginning: n,
                isEnd: s,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                n && !o && this.emit("reachBeginning toEdge"),
                s && !l && this.emit("reachEnd toEdge"),
                ((o && !n) || (l && !s)) && this.emit("fromEdge"),
                this.emit("progress", i);
            },
            updateSlidesClasses: function () {
              let e, t, r;
              let { slides: i, params: n, slidesEl: s, activeIndex: a } = this,
                o = this.virtual && n.virtual.enabled,
                u = this.grid && n.grid && n.grid.rows > 1,
                d = (e) =>
                  (0, l.e)(s, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
              if (o) {
                if (n.loop) {
                  let t = a - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = d(`[data-swiper-slide-index="${t}"]`));
                } else e = d(`[data-swiper-slide-index="${a}"]`);
              } else
                u
                  ? ((e = i.find((e) => e.column === a)),
                    (r = i.find((e) => e.column === a + 1)),
                    (t = i.find((e) => e.column === a - 1)))
                  : (e = i[a]);
              e &&
                !u &&
                ((r = (0, l.q)(e, `.${n.slideClass}, swiper-slide`)[0]),
                n.loop && !r && (r = i[0]),
                (t = (0, l.r)(e, `.${n.slideClass}, swiper-slide`)[0]),
                n.loop),
                i.forEach((i) => {
                  h(i, i === e, n.slideActiveClass),
                    h(i, i === r, n.slideNextClass),
                    h(i, i === t, n.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, r;
              let i = this,
                n = i.rtlTranslate ? i.translate : -i.translate,
                {
                  snapGrid: s,
                  params: a,
                  activeIndex: o,
                  realIndex: l,
                  snapIndex: u,
                } = i,
                d = e,
                c = (e) => {
                  let t = e - i.virtual.slidesBefore;
                  return (
                    t < 0 && (t = i.virtual.slides.length + t),
                    t >= i.virtual.slides.length &&
                      (t -= i.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === d &&
                  (d = (function (e) {
                    let t;
                    let { slidesGrid: r, params: i } = e,
                      n = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < r.length; e += 1)
                      void 0 !== r[e + 1]
                        ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2
                          ? (t = e)
                          : n >= r[e] && n < r[e + 1] && (t = e + 1)
                        : n >= r[e] && (t = e);
                    return (
                      i.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(i)),
                s.indexOf(n) >= 0)
              )
                t = s.indexOf(n);
              else {
                let e = Math.min(a.slidesPerGroupSkip, d);
                t = e + Math.floor((d - e) / a.slidesPerGroup);
              }
              if (
                (t >= s.length && (t = s.length - 1), d === o && !i.params.loop)
              ) {
                t !== u && ((i.snapIndex = t), i.emit("snapIndexChange"));
                return;
              }
              if (
                d === o &&
                i.params.loop &&
                i.virtual &&
                i.params.virtual.enabled
              ) {
                i.realIndex = c(d);
                return;
              }
              let h = i.grid && a.grid && a.grid.rows > 1;
              if (i.virtual && a.virtual.enabled && a.loop) r = c(d);
              else if (h) {
                let e = i.slides.find((e) => e.column === d),
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(i.slides.indexOf(e), 0)),
                  (r = Math.floor(t / a.grid.rows));
              } else if (i.slides[d]) {
                let e = i.slides[d].getAttribute("data-swiper-slide-index");
                r = e ? parseInt(e, 10) : d;
              } else r = d;
              Object.assign(i, {
                previousSnapIndex: u,
                snapIndex: t,
                previousRealIndex: l,
                realIndex: r,
                previousIndex: o,
                activeIndex: d,
              }),
                i.initialized && m(i),
                i.emit("activeIndexChange"),
                i.emit("snapIndexChange"),
                (i.initialized || i.params.runCallbacksOnInit) &&
                  (l !== r && i.emit("realIndexChange"), i.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let r;
              let i = this.params,
                n = e.closest(`.${i.slideClass}, swiper-slide`);
              !n &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !n &&
                    e.matches &&
                    e.matches(`.${i.slideClass}, swiper-slide`) &&
                    (n = e);
                });
              let s = !1;
              if (n) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === n) {
                    (s = !0), (r = e);
                    break;
                  }
              }
              if (n && s)
                (this.clickedSlide = n),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        n.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = r);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              i.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: r,
                translate: i,
                wrapperEl: n,
              } = this;
              if (t.virtualTranslate) return r ? -i : i;
              if (t.cssMode) return i;
              let s = (0, l.j)(n, e);
              return (s += this.cssOverflowAdjustment()), r && (s = -s), s || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: r,
                  params: i,
                  wrapperEl: n,
                  progress: s,
                } = this,
                a = 0,
                o = 0;
              this.isHorizontal() ? (a = r ? -e : e) : (o = e),
                i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? a : o),
                i.cssMode
                  ? (n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -a : -o)
                  : i.virtualTranslate ||
                    (this.isHorizontal()
                      ? (a -= this.cssOverflowAdjustment())
                      : (o -= this.cssOverflowAdjustment()),
                    (n.style.transform = `translate3d(${a}px, ${o}px, 0px)`));
              let l = this.maxTranslate() - this.minTranslate();
              (0 === l ? 0 : (e - this.minTranslate()) / l) !== s &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, r, i, n) {
              let s;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === r && (r = !0),
                void 0 === i && (i = !0);
              let a = this,
                { params: o, wrapperEl: u } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              let d = a.minTranslate(),
                c = a.maxTranslate();
              if (
                ((s = i && e > d ? d : i && e < c ? c : e),
                a.updateProgress(s),
                o.cssMode)
              ) {
                let e = a.isHorizontal();
                if (0 === t) u[e ? "scrollLeft" : "scrollTop"] = -s;
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, l.t)({
                        swiper: a,
                        targetPosition: -s,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  u.scrollTo({ [e ? "left" : "top"]: -s, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(s),
                    r &&
                      (a.emit("beforeTransitionStart", t, n),
                      a.emit("transitionEnd")))
                  : (a.setTransition(t),
                    a.setTranslate(s),
                    r &&
                      (a.emit("beforeTransitionStart", t, n),
                      a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.wrapperEl.removeEventListener(
                              "transitionend",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            (a.animating = !1),
                            r && a.emit("transitionEnd"));
                        }),
                      a.wrapperEl.addEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: r } = this;
              r.cssMode ||
                (r.autoHeight && this.updateAutoHeight(),
                v({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: r } = this;
              (this.animating = !1),
                r.cssMode ||
                  (this.setTransition(0),
                  v({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, r, i, n) {
              let s;
              void 0 === e && (e = 0),
                void 0 === r && (r = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let a = this,
                o = e;
              o < 0 && (o = 0);
              let {
                params: u,
                snapGrid: d,
                slidesGrid: c,
                previousIndex: h,
                activeIndex: p,
                rtlTranslate: f,
                wrapperEl: m,
                enabled: v,
              } = a;
              if (
                (!v && !i && !n) ||
                a.destroyed ||
                (a.animating && u.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = a.params.speed);
              let g = Math.min(a.params.slidesPerGroupSkip, o),
                y = g + Math.floor((o - g) / a.params.slidesPerGroup);
              y >= d.length && (y = d.length - 1);
              let b = -d[y];
              if (u.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                  let t = -Math.floor(100 * b),
                    r = Math.floor(100 * c[e]),
                    i = Math.floor(100 * c[e + 1]);
                  void 0 !== c[e + 1]
                    ? t >= r && t < i - (i - r) / 2
                      ? (o = e)
                      : t >= r && t < i && (o = e + 1)
                    : t >= r && (o = e);
                }
              if (
                a.initialized &&
                o !== p &&
                ((!a.allowSlideNext &&
                  (f
                    ? b > a.translate && b > a.minTranslate()
                    : b < a.translate && b < a.minTranslate())) ||
                  (!a.allowSlidePrev &&
                    b > a.translate &&
                    b > a.maxTranslate() &&
                    (p || 0) !== o))
              )
                return !1;
              o !== (h || 0) && r && a.emit("beforeSlideChangeStart"),
                a.updateProgress(b),
                (s = o > p ? "next" : o < p ? "prev" : "reset");
              let w = a.virtual && a.params.virtual.enabled;
              if (
                !(w && n) &&
                ((f && -b === a.translate) || (!f && b === a.translate))
              )
                return (
                  a.updateActiveIndex(o),
                  u.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  "slide" !== u.effect && a.setTranslate(b),
                  "reset" !== s &&
                    (a.transitionStart(r, s), a.transitionEnd(r, s)),
                  !1
                );
              if (u.cssMode) {
                let e = a.isHorizontal(),
                  r = f ? b : -b;
                if (0 === t)
                  w &&
                    ((a.wrapperEl.style.scrollSnapType = "none"),
                    (a._immediateVirtual = !0)),
                    w &&
                    !a._cssModeVirtualInitialSet &&
                    a.params.initialSlide > 0
                      ? ((a._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = r;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = r),
                    w &&
                      requestAnimationFrame(() => {
                        (a.wrapperEl.style.scrollSnapType = ""),
                          (a._immediateVirtual = !1);
                      });
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, l.t)({
                        swiper: a,
                        targetPosition: r,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
                }
                return !0;
              }
              return (
                a.setTransition(t),
                a.setTranslate(b),
                a.updateActiveIndex(o),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, i),
                a.transitionStart(r, s),
                0 === t
                  ? a.transitionEnd(r, s)
                  : a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.wrapperEl.removeEventListener(
                            "transitionend",
                            a.onSlideToWrapperTransitionEnd
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(r, s));
                      }),
                    a.wrapperEl.addEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, r, i) {
              void 0 === e && (e = 0),
                void 0 === r && (r = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let n = this;
              if (n.destroyed) return;
              void 0 === t && (t = n.params.speed);
              let s = n.grid && n.params.grid && n.params.grid.rows > 1,
                a = e;
              if (n.params.loop) {
                if (n.virtual && n.params.virtual.enabled)
                  a += n.virtual.slidesBefore;
                else {
                  let e;
                  if (s) {
                    let t = a * n.params.grid.rows;
                    e = n.slides.find(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    ).column;
                  } else e = n.getSlideIndexByData(a);
                  let t = s
                      ? Math.ceil(n.slides.length / n.params.grid.rows)
                      : n.slides.length,
                    { centeredSlides: r } = n.params,
                    o = n.params.slidesPerView;
                  "auto" === o
                    ? (o = n.slidesPerViewDynamic())
                    : ((o = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
                      r && o % 2 == 0 && (o += 1));
                  let l = t - e < o;
                  if (
                    (r && (l = l || e < Math.ceil(o / 2)),
                    i &&
                      r &&
                      "auto" !== n.params.slidesPerView &&
                      !s &&
                      (l = !1),
                    l)
                  ) {
                    let i = r
                      ? e < n.activeIndex
                        ? "prev"
                        : "next"
                      : e - n.activeIndex - 1 < n.params.slidesPerView
                      ? "next"
                      : "prev";
                    n.loopFix({
                      direction: i,
                      slideTo: !0,
                      activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === i ? n.realIndex : void 0,
                    });
                  }
                  if (s) {
                    let e = a * n.params.grid.rows;
                    a = n.slides.find(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    ).column;
                  } else a = n.getSlideIndexByData(a);
                }
              }
              return (
                requestAnimationFrame(() => {
                  n.slideTo(a, t, r, i);
                }),
                n
              );
            },
            slideNext: function (e, t, r) {
              void 0 === t && (t = !0);
              let i = this,
                { enabled: n, params: s, animating: a } = i;
              if (!n || i.destroyed) return i;
              void 0 === e && (e = i.params.speed);
              let o = s.slidesPerGroup;
              "auto" === s.slidesPerView &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
              let l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
                u = i.virtual && s.virtual.enabled;
              if (s.loop) {
                if (a && !u && s.loopPreventsSliding) return !1;
                if (
                  (i.loopFix({ direction: "next" }),
                  (i._clientLeft = i.wrapperEl.clientLeft),
                  i.activeIndex === i.slides.length - 1 && s.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      i.slideTo(i.activeIndex + l, e, t, r);
                    }),
                    !0
                  );
              }
              return s.rewind && i.isEnd
                ? i.slideTo(0, e, t, r)
                : i.slideTo(i.activeIndex + l, e, t, r);
            },
            slidePrev: function (e, t, r) {
              void 0 === t && (t = !0);
              let i = this,
                {
                  params: n,
                  snapGrid: s,
                  slidesGrid: a,
                  rtlTranslate: o,
                  enabled: l,
                  animating: u,
                } = i;
              if (!l || i.destroyed) return i;
              void 0 === e && (e = i.params.speed);
              let d = i.virtual && n.virtual.enabled;
              if (n.loop) {
                if (u && !d && n.loopPreventsSliding) return !1;
                i.loopFix({ direction: "prev" }),
                  (i._clientLeft = i.wrapperEl.clientLeft);
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let h = c(o ? i.translate : -i.translate),
                p = s.map((e) => c(e)),
                f = s[p.indexOf(h) - 1];
              if (void 0 === f && n.cssMode) {
                let e;
                s.forEach((t, r) => {
                  h >= t && (e = r);
                }),
                  void 0 !== e && (f = s[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = a.indexOf(f)) < 0 && (m = i.activeIndex - 1),
                  "auto" === n.slidesPerView &&
                    1 === n.slidesPerGroup &&
                    n.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - i.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                n.rewind && i.isBeginning)
              ) {
                let n =
                  i.params.virtual && i.params.virtual.enabled && i.virtual
                    ? i.virtual.slides.length - 1
                    : i.slides.length - 1;
                return i.slideTo(n, e, t, r);
              }
              return n.loop && 0 === i.activeIndex && n.cssMode
                ? (requestAnimationFrame(() => {
                    i.slideTo(m, e, t, r);
                  }),
                  !0)
                : i.slideTo(m, e, t, r);
            },
            slideReset: function (e, t, r) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, r)
                );
            },
            slideToClosest: function (e, t, r, i) {
              if (
                (void 0 === t && (t = !0),
                void 0 === i && (i = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let n = this.activeIndex,
                s = Math.min(this.params.slidesPerGroupSkip, n),
                a = s + Math.floor((n - s) / this.params.slidesPerGroup),
                o = this.rtlTranslate ? this.translate : -this.translate;
              if (o >= this.snapGrid[a]) {
                let e = this.snapGrid[a];
                o - e > (this.snapGrid[a + 1] - e) * i &&
                  (n += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[a - 1];
                o - e <= (this.snapGrid[a] - e) * i &&
                  (n -= this.params.slidesPerGroup);
              }
              return (
                (n = Math.min(
                  (n = Math.max(n, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(n, e, t, r)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: r, slidesEl: i } = t,
                n =
                  "auto" === r.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : r.slidesPerView,
                s = t.clickedIndex,
                a = t.isElement ? "swiper-slide" : `.${r.slideClass}`;
              if (r.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  r.centeredSlides
                    ? s < t.loopedSlides - n / 2 ||
                      s > t.slides.length - t.loopedSlides + n / 2
                      ? (t.loopFix(),
                        (s = t.getSlideIndex(
                          (0, l.e)(i, `${a}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, l.n)(() => {
                          t.slideTo(s);
                        }))
                      : t.slideTo(s)
                    : s > t.slides.length - n
                    ? (t.loopFix(),
                      (s = t.getSlideIndex(
                        (0, l.e)(i, `${a}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, l.n)(() => {
                        t.slideTo(s);
                      }))
                    : t.slideTo(s);
              } else t.slideTo(s);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: r, slidesEl: i } = t;
              if (!r.loop || (t.virtual && t.params.virtual.enabled)) return;
              let n = t.grid && r.grid && r.grid.rows > 1,
                s = r.slidesPerGroup * (n ? r.grid.rows : 1),
                a = t.slides.length % s != 0,
                o = n && t.slides.length % r.grid.rows != 0,
                u = (e) => {
                  for (let i = 0; i < e; i += 1) {
                    let e = t.isElement
                      ? (0, l.c)("swiper-slide", [r.slideBlankClass])
                      : (0, l.c)("div", [r.slideClass, r.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              a
                ? r.loopAddBlankSlides
                  ? (u(s - (t.slides.length % s)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, l.u)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : o &&
                  (r.loopAddBlankSlides
                    ? (u(r.grid.rows - (t.slides.length % r.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, l.u)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, l.e)(i, `.${r.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: r.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: r = !0,
                  direction: i,
                  setTranslate: n,
                  activeSlideIndex: s,
                  byController: a,
                  byMousewheel: o,
                } = void 0 === e ? {} : e,
                u = this;
              if (!u.params.loop) return;
              u.emit("beforeLoopFix");
              let {
                  slides: d,
                  allowSlidePrev: c,
                  allowSlideNext: h,
                  slidesEl: p,
                  params: f,
                } = u,
                { centeredSlides: m } = f;
              if (
                ((u.allowSlidePrev = !0),
                (u.allowSlideNext = !0),
                u.virtual && f.virtual.enabled)
              ) {
                r &&
                  (f.centeredSlides || 0 !== u.snapIndex
                    ? f.centeredSlides && u.snapIndex < f.slidesPerView
                      ? u.slideTo(
                          u.virtual.slides.length + u.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : u.snapIndex === u.snapGrid.length - 1 &&
                        u.slideTo(u.virtual.slidesBefore, 0, !1, !0)
                    : u.slideTo(u.virtual.slides.length, 0, !1, !0)),
                  (u.allowSlidePrev = c),
                  (u.allowSlideNext = h),
                  u.emit("loopFix");
                return;
              }
              let v = f.slidesPerView;
              "auto" === v
                ? (v = u.slidesPerViewDynamic())
                : ((v = Math.ceil(parseFloat(f.slidesPerView, 10))),
                  m && v % 2 == 0 && (v += 1));
              let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup,
                y = g;
              y % g != 0 && (y += g - (y % g)),
                (y += f.loopAdditionalSlides),
                (u.loopedSlides = y);
              let b = u.grid && f.grid && f.grid.rows > 1;
              d.length < v + y
                ? (0, l.u)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : b &&
                  "row" === f.grid.fill &&
                  (0, l.u)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let w = [],
                x = [],
                S = u.activeIndex;
              void 0 === s
                ? (s = u.getSlideIndex(
                    d.find((e) => e.classList.contains(f.slideActiveClass))
                  ))
                : (S = s);
              let T = "next" === i || !i,
                E = "prev" === i || !i,
                C = 0,
                P = 0,
                A = b ? Math.ceil(d.length / f.grid.rows) : d.length,
                k =
                  (b ? d[s].column : s) +
                  (m && void 0 === n ? -v / 2 + 0.5 : 0);
              if (k < y) {
                C = Math.max(y - k, g);
                for (let e = 0; e < y - k; e += 1) {
                  let t = e - Math.floor(e / A) * A;
                  if (b) {
                    let e = A - t - 1;
                    for (let t = d.length - 1; t >= 0; t -= 1)
                      d[t].column === e && w.push(t);
                  } else w.push(A - t - 1);
                }
              } else if (k + v > A - y) {
                P = Math.max(k - (A - 2 * y), g);
                for (let e = 0; e < P; e += 1) {
                  let t = e - Math.floor(e / A) * A;
                  b
                    ? d.forEach((e, r) => {
                        e.column === t && x.push(r);
                      })
                    : x.push(t);
                }
              }
              if (
                ((u.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  u.__preventObserver__ = !1;
                }),
                E &&
                  w.forEach((e) => {
                    (d[e].swiperLoopMoveDOM = !0),
                      p.prepend(d[e]),
                      (d[e].swiperLoopMoveDOM = !1);
                  }),
                T &&
                  x.forEach((e) => {
                    (d[e].swiperLoopMoveDOM = !0),
                      p.append(d[e]),
                      (d[e].swiperLoopMoveDOM = !1);
                  }),
                u.recalcSlides(),
                "auto" === f.slidesPerView
                  ? u.updateSlides()
                  : b &&
                    ((w.length > 0 && E) || (x.length > 0 && T)) &&
                    u.slides.forEach((e, t) => {
                      u.grid.updateSlide(t, e, u.slides);
                    }),
                f.watchSlidesProgress && u.updateSlidesOffset(),
                r)
              ) {
                if (w.length > 0 && E) {
                  if (void 0 === t) {
                    let e = u.slidesGrid[S],
                      t = u.slidesGrid[S + C] - e;
                    o
                      ? u.setTranslate(u.translate - t)
                      : (u.slideTo(S + Math.ceil(C), 0, !1, !0),
                        n &&
                          ((u.touchEventsData.startTranslate =
                            u.touchEventsData.startTranslate - t),
                          (u.touchEventsData.currentTranslate =
                            u.touchEventsData.currentTranslate - t)));
                  } else if (n) {
                    let e = b ? w.length / f.grid.rows : w.length;
                    u.slideTo(u.activeIndex + e, 0, !1, !0),
                      (u.touchEventsData.currentTranslate = u.translate);
                  }
                } else if (x.length > 0 && T) {
                  if (void 0 === t) {
                    let e = u.slidesGrid[S],
                      t = u.slidesGrid[S - P] - e;
                    o
                      ? u.setTranslate(u.translate - t)
                      : (u.slideTo(S - P, 0, !1, !0),
                        n &&
                          ((u.touchEventsData.startTranslate =
                            u.touchEventsData.startTranslate - t),
                          (u.touchEventsData.currentTranslate =
                            u.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = b ? x.length / f.grid.rows : x.length;
                    u.slideTo(u.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((u.allowSlidePrev = c),
                (u.allowSlideNext = h),
                u.controller && u.controller.control && !a)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: i,
                  setTranslate: n,
                  activeSlideIndex: s,
                  byController: !0,
                };
                Array.isArray(u.controller.control)
                  ? u.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === f.slidesPerView && r,
                        });
                    })
                  : u.controller.control instanceof u.constructor &&
                    u.controller.control.params.loop &&
                    u.controller.control.loopFix({
                      ...e,
                      slideTo:
                        u.controller.control.params.slidesPerView ===
                          f.slidesPerView && r,
                    });
              }
              u.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let r = [];
              this.slides.forEach((e) => {
                r[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                r.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let r =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (r.style.cursor = "move"),
                (r.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = y.bind(this)),
                (this.onTouchMove = b.bind(this)),
                (this.onTouchEnd = w.bind(this)),
                (this.onDocumentTouchStart = C.bind(this)),
                e.cssMode && (this.onScroll = T.bind(this)),
                (this.onClick = S.bind(this)),
                (this.onLoad = E.bind(this)),
                P(this, "on");
            },
            detachEvents: function () {
              P(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: r, params: i, el: n } = e,
                s = i.breakpoints;
              if (!s || (s && 0 === Object.keys(s).length)) return;
              let a = (0, o.g)(),
                u =
                  "window" !== i.breakpointsBase && i.breakpointsBase
                    ? "container"
                    : i.breakpointsBase,
                d =
                  ["window", "container"].includes(i.breakpointsBase) ||
                  !i.breakpointsBase
                    ? e.el
                    : a.querySelector(i.breakpointsBase),
                c = e.getBreakpoint(s, u, d);
              if (!c || e.currentBreakpoint === c) return;
              let h = (c in s ? s[c] : void 0) || e.originalParams,
                p = A(e, i),
                f = A(e, h),
                m = e.params.grabCursor,
                v = h.grabCursor,
                g = i.enabled;
              p && !f
                ? (n.classList.remove(
                    `${i.containerModifierClass}grid`,
                    `${i.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !p &&
                  f &&
                  (n.classList.add(`${i.containerModifierClass}grid`),
                  ((h.grid.fill && "column" === h.grid.fill) ||
                    (!h.grid.fill && "column" === i.grid.fill)) &&
                    n.classList.add(`${i.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                m && !v ? e.unsetGrabCursor() : !m && v && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === h[t]) return;
                  let r = i[t] && i[t].enabled,
                    n = h[t] && h[t].enabled;
                  r && !n && e[t].disable(), !r && n && e[t].enable();
                });
              let y = h.direction && h.direction !== i.direction,
                b = i.loop && (h.slidesPerView !== i.slidesPerView || y),
                w = i.loop;
              y && r && e.changeDirection(), (0, l.w)(e.params, h);
              let x = e.params.enabled,
                S = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                g && !x ? e.disable() : !g && x && e.enable(),
                (e.currentBreakpoint = c),
                e.emit("_beforeBreakpoint", h),
                r &&
                  (b
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !w && S
                    ? (e.loopCreate(t), e.updateSlides())
                    : w && !S && e.loopDestroy()),
                e.emit("breakpoint", h);
            },
            getBreakpoint: function (e, t, r) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !r))
              )
                return;
              let i = !1,
                n = (0, o.a)(),
                s = "window" === t ? n.innerHeight : r.clientHeight,
                a = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: s * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                let { point: s, value: o } = a[e];
                "window" === t
                  ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = s)
                  : o <= r.clientWidth && (i = s);
              }
              return i || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: r } = t;
              if (r) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * r;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: r, el: i, device: n } = this,
                s = (function (e, t) {
                  let r = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((i) => {
                            e[i] && r.push(t + i);
                          })
                        : "string" == typeof e && r.push(t + e);
                    }),
                    r
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: r },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: n.android },
                    { ios: n.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...s), i.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        O = {};
      class _ {
        constructor() {
          let e, t;
          for (var r = arguments.length, i = Array(r), n = 0; n < r; n++)
            i[n] = arguments[n];
          1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
            t || (t = {}),
            (t = (0, l.w)({}, t)),
            e && !t.el && (t.el = e);
          let a = (0, o.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            a.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              a.querySelectorAll(t.el).forEach((r) => {
                let i = (0, l.w)({}, t, { el: r });
                e.push(new _(i));
              }),
              e
            );
          }
          let c = this;
          (c.__swiper__ = !0),
            (c.support = u()),
            (c.device = d({ userAgent: t.userAgent })),
            (c.browser =
              (s ||
                (s = (function () {
                  let e = (0, o.a)(),
                    t = d(),
                    r = !1;
                  function i() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (i()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, i] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      r = e < 16 || (16 === e && i < 2);
                    }
                  }
                  let n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    s = i(),
                    a = s || (n && t.ios);
                  return {
                    isSafari: r || s,
                    needPerspectiveFix: r,
                    need3dFix: a,
                    isWebView: n,
                  };
                })()),
              s)),
            (c.eventsListeners = {}),
            (c.eventsAnyListeners = []),
            (c.modules = [...c.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              c.modules.push(...t.modules);
          let h = {};
          c.modules.forEach((e) => {
            e({
              params: t,
              swiper: c,
              extendParams: (function (e, t) {
                return function (r) {
                  void 0 === r && (r = {});
                  let i = Object.keys(r)[0],
                    n = r[i];
                  if (
                    "object" != typeof n ||
                    null === n ||
                    (!0 === e[i] && (e[i] = { enabled: !0 }),
                    "navigation" === i &&
                      e[i] &&
                      e[i].enabled &&
                      !e[i].prevEl &&
                      !e[i].nextEl &&
                      (e[i].auto = !0),
                    ["pagination", "scrollbar"].indexOf(i) >= 0 &&
                      e[i] &&
                      e[i].enabled &&
                      !e[i].el &&
                      (e[i].auto = !0),
                    !(i in e && "enabled" in n))
                  ) {
                    (0, l.w)(t, r);
                    return;
                  }
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                    e[i] || (e[i] = { enabled: !1 }),
                    (0, l.w)(t, r);
                };
              })(t, h),
              on: c.on.bind(c),
              once: c.once.bind(c),
              off: c.off.bind(c),
              emit: c.emit.bind(c),
            });
          });
          let p = (0, l.w)({}, k, h);
          return (
            (c.params = (0, l.w)({}, p, O, t)),
            (c.originalParams = (0, l.w)({}, c.params)),
            (c.passedParams = (0, l.w)({}, t)),
            c.params &&
              c.params.on &&
              Object.keys(c.params.on).forEach((e) => {
                c.on(e, c.params.on[e]);
              }),
            c.params && c.params.onAny && c.onAny(c.params.onAny),
            Object.assign(c, {
              enabled: c.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === c.params.direction,
              isVertical: () => "vertical" === c.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: c.params.allowSlideNext,
              allowSlidePrev: c.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: c.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: c.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            c.emit("_swiper"),
            c.params.init && c.init(),
            c
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: r } = this,
            i = (0, l.e)(t, `.${r.slideClass}, swiper-slide`),
            n = (0, l.h)(i[0]);
          return (0, l.h)(e) - n;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.find(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, l.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let r = this.minTranslate(),
            i = (this.maxTranslate() - r) * e + r;
          this.translateTo(i, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((r) => {
            let i = e.getSlideClasses(r);
            t.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: r,
              slides: i,
              slidesGrid: n,
              slidesSizesGrid: s,
              size: a,
              activeIndex: o,
            } = this,
            l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e,
              t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < i.length; r += 1)
              i[r] &&
                !e &&
                ((t += Math.ceil(i[r].swiperSlideSize)),
                (l += 1),
                t > a && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1)
              i[r] &&
                !e &&
                ((t += i[r].swiperSlideSize), (l += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1)
              (t ? n[e] + s[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          else for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < a && (l += 1);
          return l;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: r, params: i } = t;
          function n() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (i.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && p(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            i.freeMode && i.freeMode.enabled && !i.cssMode)
          )
            n(), i.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
              t.isEnd &&
              !i.centeredSlides
            ) {
              let r =
                t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(r.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || n();
          }
          i.watchOverflow && r !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let r = this.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${r}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if (("string" == typeof r && (r = document.querySelector(r)), !r))
            return !1;
          (r.swiper = t),
            r.parentNode &&
              r.parentNode.host &&
              r.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let i = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            n =
              r && r.shadowRoot && r.shadowRoot.querySelector
                ? r.shadowRoot.querySelector(i())
                : (0, l.e)(r, i())[0];
          return (
            !n &&
              t.params.createElements &&
              ((n = (0, l.c)("div", t.params.wrapperClass)),
              r.append(n),
              (0, l.e)(r, `.${t.params.slideClass}`).forEach((e) => {
                n.append(e);
              })),
            Object.assign(t, {
              el: r,
              wrapperEl: n,
              slidesEl:
                t.isElement && !r.parentNode.host.slideSlots
                  ? r.parentNode.host
                  : n,
              hostEl: t.isElement ? r.parentNode.host : r,
              mounted: !0,
              rtl:
                "rtl" === r.dir.toLowerCase() ||
                "rtl" === (0, l.p)(r, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === r.dir.toLowerCase() ||
                  "rtl" === (0, l.p)(r, "direction")),
              wrongRTL: "-webkit-box" === (0, l.p)(n, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            r.forEach((e) => {
              e.complete
                ? p(t, e)
                : e.addEventListener("load", (e) => {
                    p(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let r = this,
            { params: i, el: n, wrapperEl: s, slides: a } = r;
          return (
            void 0 === r.params ||
              r.destroyed ||
              (r.emit("beforeDestroy"),
              (r.initialized = !1),
              r.detachEvents(),
              i.loop && r.loopDestroy(),
              t &&
                (r.removeClasses(),
                n && "string" != typeof n && n.removeAttribute("style"),
                s && s.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      i.slideVisibleClass,
                      i.slideFullyVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              r.emit("destroy"),
              Object.keys(r.eventsListeners).forEach((e) => {
                r.off(e);
              }),
              !1 !== e &&
                (r.el && "string" != typeof r.el && (r.el.swiper = null),
                (0, l.x)(r)),
              (r.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, l.w)(O, e);
        }
        static get extendedDefaults() {
          return O;
        }
        static get defaults() {
          return k;
        }
        static installModule(e) {
          _.prototype.__modules__ || (_.prototype.__modules__ = []);
          let t = _.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => _.installModule(e))
              : _.installModule(e),
            _
          );
        }
      }
      Object.keys(M).forEach((e) => {
        Object.keys(M[e]).forEach((t) => {
          _.prototype[t] = M[e][t];
        });
      }),
        _.use([
          function (e) {
            let { swiper: t, on: r, emit: i } = e,
              n = (0, o.a)(),
              s = null,
              a = null,
              l = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              u = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s = new ResizeObserver((e) => {
                    a = n.requestAnimationFrame(() => {
                      let { width: r, height: i } = t,
                        n = r,
                        s = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: r,
                          contentRect: i,
                          target: a,
                        } = e;
                        (a && a !== t.el) ||
                          ((n = i ? i.width : (r[0] || r).inlineSize),
                          (s = i ? i.height : (r[0] || r).blockSize));
                      }),
                        (n !== r || s !== i) && l();
                    });
                  })).observe(t.el);
              },
              d = () => {
                a && n.cancelAnimationFrame(a),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
              },
              c = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            r("init", () => {
              if (t.params.resizeObserver && void 0 !== n.ResizeObserver) {
                u();
                return;
              }
              n.addEventListener("resize", l),
                n.addEventListener("orientationchange", c);
            }),
              r("destroy", () => {
                d(),
                  n.removeEventListener("resize", l),
                  n.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: r, on: i, emit: n } = e,
              s = [],
              a = (0, o.a)(),
              u = function (e, r) {
                void 0 === r && (r = {});
                let i = new (a.MutationObserver || a.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      n("observerUpdate", e[0]);
                      return;
                    }
                    let r = function () {
                      n("observerUpdate", e[0]);
                    };
                    a.requestAnimationFrame
                      ? a.requestAnimationFrame(r)
                      : a.setTimeout(r, 0);
                  }
                );
                i.observe(e, {
                  attributes: void 0 === r.attributes || r.attributes,
                  childList:
                    t.isElement || (void 0 === r.childList || r).childList,
                  characterData: void 0 === r.characterData || r.characterData,
                }),
                  s.push(i);
              };
            r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, l.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) u(e[t]);
                  }
                  u(t.hostEl, { childList: t.params.observeSlideChildren }),
                    u(t.wrapperEl, { attributes: !1 });
                }
              }),
              i("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      let D = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function j(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function L(e, t) {
        let r = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > r.indexOf(e))
          .forEach((r) => {
            void 0 === e[r]
              ? (e[r] = t[r])
              : j(t[r]) && j(e[r]) && Object.keys(t[r]).length > 0
              ? t[r].__swiper__
                ? (e[r] = t[r])
                : L(e[r], t[r])
              : (e[r] = t[r]);
          });
      }
      function F(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function V(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function R(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function I(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          r = [];
        return (
          t.forEach((e) => {
            0 > r.indexOf(e) && r.push(e);
          }),
          r.join(" ")
        );
      }
      let N = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      function $(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function z(e, t) {
        return "undefined" == typeof window
          ? (0, a.useEffect)(e, t)
          : (0, a.useLayoutEffect)(e, t);
      }
      let H = (0, a.createContext)(null),
        W = (0, a.createContext)(null),
        U = (0, a.forwardRef)(function (e, t) {
          var r;
          let {
              className: i,
              tag: n = "div",
              wrapperTag: s = "div",
              children: o,
              onSwiper: l,
              ...u
            } = void 0 === e ? {} : e,
            d = !1,
            [c, h] = (0, a.useState)("swiper"),
            [p, f] = (0, a.useState)(null),
            [m, v] = (0, a.useState)(!1),
            g = (0, a.useRef)(!1),
            y = (0, a.useRef)(null),
            b = (0, a.useRef)(null),
            w = (0, a.useRef)(null),
            x = (0, a.useRef)(null),
            S = (0, a.useRef)(null),
            T = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            C = (0, a.useRef)(null),
            {
              params: P,
              passedParams: A,
              rest: M,
              events: O,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let r = { on: {} },
                i = {},
                n = {};
              L(r, k), (r._emitClasses = !0), (r.init = !1);
              let s = {},
                a = D.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((o) => {
                  void 0 !== e[o] &&
                    (a.indexOf(o) >= 0
                      ? j(e[o])
                        ? ((r[o] = {}),
                          (n[o] = {}),
                          L(r[o], e[o]),
                          L(n[o], e[o]))
                        : ((r[o] = e[o]), (n[o] = e[o]))
                      : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o]
                      ? t
                        ? (i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
                        : (r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
                      : (s[o] = e[o]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e];
                }),
                { params: r, passedParams: n, rest: s, events: i }
              );
            })(u),
            { slides: H, slots: U } = (function (e) {
              let t = [],
                r = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                a.Children.toArray(e).forEach((e) => {
                  if ($(e)) t.push(e);
                  else if (e.props && e.props.slot && r[e.props.slot])
                    r[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let i = (function e(t) {
                      let r = [];
                      return (
                        a.Children.toArray(t).forEach((t) => {
                          $(t)
                            ? r.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => r.push(e));
                        }),
                        r
                      );
                    })(e.props.children);
                    i.length > 0
                      ? i.forEach((e) => t.push(e))
                      : r["container-end"].push(e);
                  } else r["container-end"].push(e);
                }),
                { slides: t, slots: r }
              );
            })(o),
            Y = () => {
              v(!m);
            };
          Object.assign(P.on, {
            _containerClasses(e, t) {
              h(t);
            },
          });
          let q = () => {
            Object.assign(P.on, O), (d = !0);
            let e = { ...P };
            if (
              (delete e.wrapperClass,
              (b.current = new _(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = H;
              let e = {
                cache: !1,
                slides: H,
                renderExternal: f,
                renderExternalUpdate: !1,
              };
              L(b.current.params.virtual, e),
                L(b.current.originalParams.virtual, e);
            }
          };
          y.current || q(), b.current && b.current.on("_beforeBreakpoint", Y);
          let G = () => {
              !d &&
                O &&
                b.current &&
                Object.keys(O).forEach((e) => {
                  b.current.on(e, O[e]);
                });
            },
            X = () => {
              O &&
                b.current &&
                Object.keys(O).forEach((e) => {
                  b.current.off(e, O[e]);
                });
            };
          return (
            (0, a.useEffect)(() => () => {
              b.current && b.current.off("_beforeBreakpoint", Y);
            }),
            (0, a.useEffect)(() => {
              !g.current &&
                b.current &&
                (b.current.emitSlidesClasses(), (g.current = !0));
            }),
            z(() => {
              if ((t && (t.current = y.current), y.current))
                return (
                  b.current.destroyed && q(),
                  (function (e, t) {
                    let {
                      el: r,
                      nextEl: i,
                      prevEl: n,
                      paginationEl: s,
                      scrollbarEl: a,
                      swiper: o,
                    } = e;
                    F(t) &&
                      i &&
                      n &&
                      ((o.params.navigation.nextEl = i),
                      (o.originalParams.navigation.nextEl = i),
                      (o.params.navigation.prevEl = n),
                      (o.originalParams.navigation.prevEl = n)),
                      V(t) &&
                        s &&
                        ((o.params.pagination.el = s),
                        (o.originalParams.pagination.el = s)),
                      R(t) &&
                        a &&
                        ((o.params.scrollbar.el = a),
                        (o.originalParams.scrollbar.el = a)),
                      o.init(r);
                  })(
                    {
                      el: y.current,
                      nextEl: S.current,
                      prevEl: T.current,
                      paginationEl: E.current,
                      scrollbarEl: C.current,
                      swiper: b.current,
                    },
                    P
                  ),
                  l && !b.current.destroyed && l(b.current),
                  () => {
                    b.current &&
                      !b.current.destroyed &&
                      b.current.destroy(!0, !1);
                  }
                );
            }, []),
            z(() => {
              G();
              let e = (function (e, t, r, i, n) {
                let s = [];
                if (!t) return s;
                let a = (e) => {
                  0 > s.indexOf(e) && s.push(e);
                };
                if (r && i) {
                  let e = i.map(n),
                    t = r.map(n);
                  e.join("") !== t.join("") && a("children"),
                    i.length !== r.length && a("children");
                }
                return (
                  D.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((r) => {
                      if (r in e && r in t) {
                        if (j(e[r]) && j(t[r])) {
                          let i = Object.keys(e[r]),
                            n = Object.keys(t[r]);
                          i.length !== n.length
                            ? a(r)
                            : (i.forEach((i) => {
                                e[r][i] !== t[r][i] && a(r);
                              }),
                              n.forEach((i) => {
                                e[r][i] !== t[r][i] && a(r);
                              }));
                        } else e[r] !== t[r] && a(r);
                      }
                    }),
                  s
                );
              })(A, w.current, H, x.current, (e) => e.key);
              return (
                (w.current = A),
                (x.current = H),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let t,
                      r,
                      i,
                      n,
                      s,
                      a,
                      o,
                      l,
                      {
                        swiper: u,
                        slides: d,
                        passedParams: c,
                        changedParams: h,
                        nextEl: p,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: v,
                      } = e,
                      g = h.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: y,
                        pagination: b,
                        navigation: w,
                        scrollbar: x,
                        virtual: S,
                        thumbs: T,
                      } = u;
                    h.includes("thumbs") &&
                      c.thumbs &&
                      c.thumbs.swiper &&
                      !c.thumbs.swiper.destroyed &&
                      y.thumbs &&
                      (!y.thumbs.swiper || y.thumbs.swiper.destroyed) &&
                      (t = !0),
                      h.includes("controller") &&
                        c.controller &&
                        c.controller.control &&
                        y.controller &&
                        !y.controller.control &&
                        (r = !0),
                      h.includes("pagination") &&
                        c.pagination &&
                        (c.pagination.el || v) &&
                        (y.pagination || !1 === y.pagination) &&
                        b &&
                        !b.el &&
                        (i = !0),
                      h.includes("scrollbar") &&
                        c.scrollbar &&
                        (c.scrollbar.el || m) &&
                        (y.scrollbar || !1 === y.scrollbar) &&
                        x &&
                        !x.el &&
                        (n = !0),
                      h.includes("navigation") &&
                        c.navigation &&
                        (c.navigation.prevEl || f) &&
                        (c.navigation.nextEl || p) &&
                        (y.navigation || !1 === y.navigation) &&
                        w &&
                        !w.prevEl &&
                        !w.nextEl &&
                        (s = !0);
                    let E = (e) => {
                      u[e] &&
                        (u[e].destroy(),
                        "navigation" === e
                          ? (u.isElement &&
                              (u[e].prevEl.remove(), u[e].nextEl.remove()),
                            (y[e].prevEl = void 0),
                            (y[e].nextEl = void 0),
                            (u[e].prevEl = void 0),
                            (u[e].nextEl = void 0))
                          : (u.isElement && u[e].el.remove(),
                            (y[e].el = void 0),
                            (u[e].el = void 0)));
                    };
                    h.includes("loop") &&
                      u.isElement &&
                      (y.loop && !c.loop
                        ? (a = !0)
                        : !y.loop && c.loop
                        ? (o = !0)
                        : (l = !0)),
                      g.forEach((e) => {
                        if (j(y[e]) && j(c[e]))
                          Object.assign(y[e], c[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in c[e] &&
                              !c[e].enabled &&
                              E(e);
                        else {
                          let t = c[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && E(e)
                            : (y[e] = c[e]);
                        }
                      }),
                      g.includes("controller") &&
                        !r &&
                        u.controller &&
                        u.controller.control &&
                        y.controller &&
                        y.controller.control &&
                        (u.controller.control = y.controller.control),
                      h.includes("children") && d && S && y.virtual.enabled
                        ? ((S.slides = d), S.update(!0))
                        : h.includes("virtual") &&
                          S &&
                          y.virtual.enabled &&
                          (d && (S.slides = d), S.update(!0)),
                      h.includes("children") && d && y.loop && (l = !0),
                      t && T.init() && T.update(!0),
                      r && (u.controller.control = y.controller.control),
                      i &&
                        (u.isElement &&
                          (!v || "string" == typeof v) &&
                          ((v = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          v.part.add("pagination"),
                          u.el.appendChild(v)),
                        v && (y.pagination.el = v),
                        b.init(),
                        b.render(),
                        b.update()),
                      n &&
                        (u.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          u.el.appendChild(m)),
                        m && (y.scrollbar.el = m),
                        x.init(),
                        x.updateSize(),
                        x.setTranslate()),
                      s &&
                        (u.isElement &&
                          ((p && "string" != typeof p) ||
                            ((p = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (p.innerHTML = u.hostEl.constructor.nextButtonSvg),
                            p.part.add("button-next"),
                            u.el.appendChild(p)),
                          (f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (f.innerHTML = u.hostEl.constructor.prevButtonSvg),
                            f.part.add("button-prev"),
                            u.el.appendChild(f))),
                        p && (y.navigation.nextEl = p),
                        f && (y.navigation.prevEl = f),
                        w.init(),
                        w.update()),
                      h.includes("allowSlideNext") &&
                        (u.allowSlideNext = c.allowSlideNext),
                      h.includes("allowSlidePrev") &&
                        (u.allowSlidePrev = c.allowSlidePrev),
                      h.includes("direction") &&
                        u.changeDirection(c.direction, !1),
                      (a || l) && u.loopDestroy(),
                      (o || l) && u.loopCreate(),
                      u.update();
                  })({
                    swiper: b.current,
                    slides: H,
                    passedParams: A,
                    changedParams: e,
                    nextEl: S.current,
                    prevEl: T.current,
                    scrollbarEl: C.current,
                    paginationEl: E.current,
                  }),
                () => {
                  X();
                }
              );
            }),
            z(() => {
              N(b.current);
            }, [p]),
            a.createElement(
              n,
              B({ ref: y, className: I(`${c}${i ? ` ${i}` : ""}`) }, M),
              a.createElement(
                W.Provider,
                { value: b.current },
                U["container-start"],
                a.createElement(
                  s,
                  {
                    className: (void 0 === (r = P.wrapperClass) && (r = ""), r)
                      ? r.includes("swiper-wrapper")
                        ? r
                        : `swiper-wrapper ${r}`
                      : "swiper-wrapper",
                  },
                  U["wrapper-start"],
                  P.virtual
                    ? (function (e, t, r) {
                        if (!r) return null;
                        let i = (e) => {
                            let r = e;
                            return (
                              e < 0
                                ? (r = t.length + e)
                                : r >= t.length && (r -= t.length),
                              r
                            );
                          },
                          n = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${r.offset}px`,
                              }
                            : { top: `${r.offset}px` },
                          { from: s, to: o } = r,
                          l = e.params.loop ? -t.length : 0,
                          u = e.params.loop ? 2 * t.length : t.length,
                          d = [];
                        for (let e = l; e < u; e += 1)
                          e >= s && e <= o && d.push(t[i(e)]);
                        return d.map((t, r) =>
                          a.cloneElement(t, {
                            swiper: e,
                            style: n,
                            key: t.props.virtualIndex || t.key || `slide-${r}`,
                          })
                        );
                      })(b.current, H, p)
                    : H.map((e, t) =>
                        a.cloneElement(e, {
                          swiper: b.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  U["wrapper-end"]
                ),
                F(P) &&
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("div", {
                      ref: T,
                      className: "swiper-button-prev",
                    }),
                    a.createElement("div", {
                      ref: S,
                      className: "swiper-button-next",
                    })
                  ),
                R(P) &&
                  a.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar",
                  }),
                V(P) &&
                  a.createElement("div", {
                    ref: E,
                    className: "swiper-pagination",
                  }),
                U["container-end"]
              )
            )
          );
        });
      U.displayName = "Swiper";
      let Y = (0, a.forwardRef)(function (e, t) {
        let {
            tag: r = "div",
            children: i,
            className: n = "",
            swiper: s,
            zoom: o,
            lazy: l,
            virtualIndex: u,
            swiperSlideIndex: d,
            ...c
          } = void 0 === e ? {} : e,
          h = (0, a.useRef)(null),
          [p, f] = (0, a.useState)("swiper-slide"),
          [m, v] = (0, a.useState)(!1);
        function g(e, t, r) {
          t === h.current && f(r);
        }
        z(() => {
          if (
            (void 0 !== d && (h.current.swiperSlideIndex = d),
            t && (t.current = h.current),
            h.current && s)
          ) {
            if (s.destroyed) {
              "swiper-slide" !== p && f("swiper-slide");
              return;
            }
            return (
              s.on("_slideClass", g),
              () => {
                s && s.off("_slideClass", g);
              }
            );
          }
        }),
          z(() => {
            s && h.current && !s.destroyed && f(s.getSlideClasses(h.current));
          }, [s]);
        let y = {
            isActive: p.indexOf("swiper-slide-active") >= 0,
            isVisible: p.indexOf("swiper-slide-visible") >= 0,
            isPrev: p.indexOf("swiper-slide-prev") >= 0,
            isNext: p.indexOf("swiper-slide-next") >= 0,
          },
          b = () => ("function" == typeof i ? i(y) : i);
        return a.createElement(
          r,
          B(
            {
              ref: h,
              className: I(`${p}${n ? ` ${n}` : ""}`),
              "data-swiper-slide-index": u,
              onLoad: () => {
                v(!0);
              },
            },
            c
          ),
          o &&
            a.createElement(
              H.Provider,
              { value: y },
              a.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof o ? o : void 0,
                },
                b(),
                l &&
                  !m &&
                  a.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !o &&
            a.createElement(
              H.Provider,
              { value: y },
              b(),
              l &&
                !m &&
                a.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      Y.displayName = "SwiperSlide";
    },
  },
]);
