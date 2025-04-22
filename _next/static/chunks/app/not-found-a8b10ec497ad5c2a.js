(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [345],
  {
    30477: (e, a, n) => {
      Promise.resolve().then(n.bind(n, 85408));
    },
    85408: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, { default: () => c });
      var s = n(95155),
        r = n(12115),
        t = n(86140),
        o = n(31593),
        l = n(7493),
        d = n(14441);
      let c = () => {
        let { gl: e } = (0, t.A)(),
          { setPreloaderPercentage: a } = (0, o.R)();
        return (
          (0, r.useEffect)(() => {
            if (e)
              return (
                e.setPage("404", {}),
                (e.onload = (e) => {
                  let { loaded: n, total: s } = e;
                  return a((n / s) * 100);
                }),
                e
                  .load()
                  .then(() => 0)
                  .catch(() => {
                    console.error("Not loaded");
                  }),
                () => {
                  e.beforeNav();
                }
              );
          }, [e, a]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(d.Header, {}),
              (0, s.jsx)("main", {
                children: (0, s.jsx)(l.wn, {
                  className: "pt-[500px] pb-[100px] md:py-[320px]",
                  children: (0, s.jsx)(l.mc, {
                    children: (0, s.jsxs)("div", {
                      className: "max-w-[600px] max-md:text-center",
                      children: [
                        (0, s.jsxs)(l.hE, {
                          animation: "none",
                          className: "mb-4",
                          children: [
                            "Oops!",
                            (0, s.jsx)("br", {}),
                            "Page Not Found.",
                          ],
                        }),
                        (0, s.jsx)(l.EY, {
                          animation: "none",
                          className: "mb-8 md:mb-12 max-w-[500px]",
                          children:
                            "It looks like the page you're trying to reach doesn't exist or has been moved.",
                        }),
                        (0, s.jsx)(l.$n, {
                          href: "/",
                          variant: "transparent",
                          children: "Home Page.",
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(
      0,
      [592, 831, 367, 547, 28, 565, 499, 617, 493, 18, 441, 517, 358],
      () => a(30477)
    ),
      (_N_E = e.O());
  },
]);
