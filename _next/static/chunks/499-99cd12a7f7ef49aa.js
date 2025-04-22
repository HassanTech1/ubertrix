(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [499],
  {
    73263: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => u });
      var n = r(12115),
        i = r(11478);
      let o = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect,
        s = (e) => e && !Array.isArray(e) && "object" == typeof e,
        a = [],
        l = {},
        c = i.Ay,
        u = (e, t = a) => {
          let r = l;
          s(e)
            ? ((r = e),
              (e = null),
              (t = "dependencies" in r ? r.dependencies : a))
            : s(t) && (t = "dependencies" in (r = t) ? r.dependencies : a),
            e &&
              "function" != typeof e &&
              console.warn(
                "First parameter must be a function or config object"
              );
          let { scope: i, revertOnUpdate: u } = r,
            f = (0, n.useRef)(!1),
            p = (0, n.useRef)(c.context(() => {}, i)),
            d = (0, n.useRef)((e) => p.current.add(null, e)),
            h = t && t.length && !u;
          return (
            h && o(() => ((f.current = !0), () => p.current.revert()), a),
            o(() => {
              if ((e && p.current.add(e, i), !h || !f.current))
                return () => p.current.revert();
            }, t),
            { context: p.current, contextSafe: d.current }
          );
        };
      (u.register = (e) => {
        c = e;
      }),
        (u.headless = !0);
    },
    25415: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => t0 });
      var n,
        i,
        o,
        s,
        a,
        l,
        c,
        u,
        f,
        p,
        d,
        h,
        g,
        v = function () {
          return (
            n ||
            ("undefined" != typeof window &&
              (n = window.gsap) &&
              n.registerPlugin &&
              n)
          );
        },
        m = 1,
        y = [],
        b = [],
        x = [],
        w = Date.now,
        _ = function (e, t) {
          return t;
        },
        O = function () {
          var e = f.core,
            t = e.bridge || {},
            r = e._scrollers,
            n = e._proxies;
          r.push.apply(r, b),
            n.push.apply(n, x),
            (b = r),
            (x = n),
            (_ = function (e, r) {
              return t[e](r);
            });
        },
        E = function (e, t) {
          return ~x.indexOf(e) && x[x.indexOf(e) + 1][t];
        },
        S = function (e) {
          return !!~p.indexOf(e);
        },
        C = function (e, t, r, n, i) {
          return e.addEventListener(t, r, { passive: !1 !== n, capture: !!i });
        },
        P = function (e, t, r, n) {
          return e.removeEventListener(t, r, !!n);
        },
        T = "scrollLeft",
        M = "scrollTop",
        k = function () {
          return (d && d.isPressed) || b.cache++;
        },
        A = function (e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              m && (o.history.scrollRestoration = "manual");
              var i = d && d.isPressed;
              e((n = r.v = Math.round(n) || (d && d.iOS ? 1 : 0))),
                (r.cacheID = b.cache),
                i && _("ss", n);
            } else
              (t || b.cache !== r.cacheID || _("ref")) &&
                ((r.cacheID = b.cache), (r.v = e()));
            return r.v + r.offset;
          };
          return (r.offset = 0), e && r;
        },
        j = {
          s: T,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: A(function (e) {
            return arguments.length
              ? o.scrollTo(e, Y.sc())
              : o.pageXOffset || s[T] || a[T] || l[T] || 0;
          }),
        },
        Y = {
          s: M,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: j,
          sc: A(function (e) {
            return arguments.length
              ? o.scrollTo(j.sc(), e)
              : o.pageYOffset || s[M] || a[M] || l[M] || 0;
          }),
        },
        D = function (e, t) {
          return (
            ((t && t._ctx && t._ctx.selector) || n.utils.toArray)(e)[0] ||
            ("string" == typeof e && !1 !== n.config().nullTargetWarn
              ? console.warn("Element not found:", e)
              : null)
          );
        },
        R = function (e, t) {
          var r = t.s,
            i = t.sc;
          S(e) && (e = s.scrollingElement || a);
          var o = b.indexOf(e),
            l = i === Y.sc ? 1 : 2;
          ~o || (o = b.push(e) - 1), b[o + l] || C(e, "scroll", k);
          var c = b[o + l],
            u =
              c ||
              (b[o + l] =
                A(E(e, r), !0) ||
                (S(e)
                  ? i
                  : A(function (t) {
                      return arguments.length ? (e[r] = t) : e[r];
                    })));
          return (
            (u.target = e),
            c || (u.smooth = "smooth" === n.getProperty(e, "scrollBehavior")),
            u
          );
        },
        F = function (e, t, r) {
          var n = e,
            i = e,
            o = w(),
            s = o,
            a = t || 50,
            l = Math.max(500, 3 * a),
            c = function (e, t) {
              var l = w();
              t || l - o > a
                ? ((i = n), (n = e), (s = o), (o = l))
                : r
                ? (n += e)
                : (n = i + ((e - i) / (l - s)) * (o - s));
            };
          return {
            update: c,
            reset: function () {
              (i = n = r ? 0 : n), (s = o = 0);
            },
            getVelocity: function (e) {
              var t = s,
                a = i,
                u = w();
              return (
                (e || 0 === e) && e !== n && c(e),
                o === s || u - s > l
                  ? 0
                  : ((n + (r ? a : -a)) / ((r ? u : o) - t)) * 1e3
              );
            },
          };
        },
        z = function (e, t) {
          return (
            t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
          );
        },
        B = function (e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r;
        },
        N = function () {
          (f = n.core.globals().ScrollTrigger) && f.core && O();
        },
        X = function (e) {
          return (
            (n = e || v()),
            !i &&
              n &&
              "undefined" != typeof document &&
              document.body &&
              ((o = window),
              (a = (s = document).documentElement),
              (l = s.body),
              (p = [o, s, a, l]),
              n.utils.clamp,
              (g = n.core.context || function () {}),
              (u = "onpointerenter" in l ? "pointer" : "mouse"),
              (c = I.isTouch =
                o.matchMedia &&
                o.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in o ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (h = I.eventTypes =
                (
                  "ontouchstart" in a
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in a
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (m = 0);
              }, 500),
              N(),
              (i = 1)),
            i
          );
        };
      (j.op = Y), (b.cache = 0);
      var I = (function () {
        function e(e) {
          this.init(e);
        }
        return (
          (e.prototype.init = function (e) {
            i || X(n) || console.warn("Please gsap.registerPlugin(Observer)"),
              f || N();
            var t = e.tolerance,
              r = e.dragMinimum,
              p = e.type,
              v = e.target,
              m = e.lineHeight,
              b = e.debounce,
              x = e.preventDefault,
              _ = e.onStop,
              O = e.onStopDelay,
              E = e.ignore,
              T = e.wheelSpeed,
              M = e.event,
              A = e.onDragStart,
              I = e.onDragEnd,
              W = e.onDrag,
              L = e.onPress,
              H = e.onRelease,
              V = e.onRight,
              q = e.onLeft,
              U = e.onUp,
              G = e.onDown,
              $ = e.onChangeX,
              J = e.onChangeY,
              Z = e.onChange,
              K = e.onToggleX,
              Q = e.onToggleY,
              ee = e.onHover,
              et = e.onHoverEnd,
              er = e.onMove,
              en = e.ignoreCheck,
              ei = e.isNormalizer,
              eo = e.onGestureStart,
              es = e.onGestureEnd,
              ea = e.onWheel,
              el = e.onEnable,
              ec = e.onDisable,
              eu = e.onClick,
              ef = e.scrollSpeed,
              ep = e.capture,
              ed = e.allowClicks,
              eh = e.lockAxis,
              eg = e.onLockAxis;
            (this.target = v = D(v) || a),
              (this.vars = e),
              E && (E = n.utils.toArray(E)),
              (t = t || 1e-9),
              (r = r || 0),
              (T = T || 1),
              (ef = ef || 1),
              (p = p || "wheel,touch,pointer"),
              (b = !1 !== b),
              m || (m = parseFloat(o.getComputedStyle(l).lineHeight) || 22);
            var ev,
              em,
              ey,
              eb,
              ex,
              ew,
              e_,
              eO = this,
              eE = 0,
              eS = 0,
              eC = e.passive || (!x && !1 !== e.passive),
              eP = R(v, j),
              eT = R(v, Y),
              eM = eP(),
              ek = eT(),
              eA =
                ~p.indexOf("touch") &&
                !~p.indexOf("pointer") &&
                "pointerdown" === h[0],
              ej = S(v),
              eY = v.ownerDocument || s,
              eD = [0, 0, 0],
              eR = [0, 0, 0],
              eF = 0,
              ez = function () {
                return (eF = w());
              },
              eB = function (e, t) {
                return (
                  ((eO.event = e) && E && ~E.indexOf(e.target)) ||
                  (t && eA && "touch" !== e.pointerType) ||
                  (en && en(e, t))
                );
              },
              eN = function () {
                var e = (eO.deltaX = B(eD)),
                  r = (eO.deltaY = B(eR)),
                  n = Math.abs(e) >= t,
                  i = Math.abs(r) >= t;
                Z && (n || i) && Z(eO, e, r, eD, eR),
                  n &&
                    (V && eO.deltaX > 0 && V(eO),
                    q && eO.deltaX < 0 && q(eO),
                    $ && $(eO),
                    K && eO.deltaX < 0 != eE < 0 && K(eO),
                    (eE = eO.deltaX),
                    (eD[0] = eD[1] = eD[2] = 0)),
                  i &&
                    (G && eO.deltaY > 0 && G(eO),
                    U && eO.deltaY < 0 && U(eO),
                    J && J(eO),
                    Q && eO.deltaY < 0 != eS < 0 && Q(eO),
                    (eS = eO.deltaY),
                    (eR[0] = eR[1] = eR[2] = 0)),
                  (eb || ey) &&
                    (er && er(eO),
                    ey && (A && 1 === ey && A(eO), W && W(eO), (ey = 0)),
                    (eb = !1)),
                  ew && ((ew = !1), 1) && eg && eg(eO),
                  ex && (ea(eO), (ex = !1)),
                  (ev = 0);
              },
              eX = function (e, t, r) {
                (eD[r] += e),
                  (eR[r] += t),
                  eO._vx.update(e),
                  eO._vy.update(t),
                  b ? ev || (ev = requestAnimationFrame(eN)) : eN();
              },
              eI = function (e, t) {
                eh &&
                  !e_ &&
                  ((eO.axis = e_ = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                  (ew = !0)),
                  "y" !== e_ && ((eD[2] += e), eO._vx.update(e, !0)),
                  "x" !== e_ && ((eR[2] += t), eO._vy.update(t, !0)),
                  b ? ev || (ev = requestAnimationFrame(eN)) : eN();
              },
              eW = function (e) {
                if (!eB(e, 1)) {
                  var t = (e = z(e, x)).clientX,
                    n = e.clientY,
                    i = t - eO.x,
                    o = n - eO.y,
                    s = eO.isDragging;
                  (eO.x = t),
                    (eO.y = n),
                    (s ||
                      ((i || o) &&
                        (Math.abs(eO.startX - t) >= r ||
                          Math.abs(eO.startY - n) >= r))) &&
                      ((ey = s ? 2 : 1), s || (eO.isDragging = !0), eI(i, o));
                }
              },
              eL = (eO.onPress = function (e) {
                eB(e, 1) ||
                  (e && e.button) ||
                  ((eO.axis = e_ = null),
                  em.pause(),
                  (eO.isPressed = !0),
                  (e = z(e)),
                  (eE = eS = 0),
                  (eO.startX = eO.x = e.clientX),
                  (eO.startY = eO.y = e.clientY),
                  eO._vx.reset(),
                  eO._vy.reset(),
                  C(ei ? v : eY, h[1], eW, eC, !0),
                  (eO.deltaX = eO.deltaY = 0),
                  L && L(eO));
              }),
              eH = (eO.onRelease = function (e) {
                if (!eB(e, 1)) {
                  P(ei ? v : eY, h[1], eW, !0);
                  var t = !isNaN(eO.y - eO.startY),
                    r = eO.isDragging,
                    i =
                      r &&
                      (Math.abs(eO.x - eO.startX) > 3 ||
                        Math.abs(eO.y - eO.startY) > 3),
                    s = z(e);
                  !i &&
                    t &&
                    (eO._vx.reset(),
                    eO._vy.reset(),
                    x &&
                      ed &&
                      n.delayedCall(0.08, function () {
                        if (w() - eF > 300 && !e.defaultPrevented) {
                          if (e.target.click) e.target.click();
                          else if (eY.createEvent) {
                            var t = eY.createEvent("MouseEvents");
                            t.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              o,
                              1,
                              s.screenX,
                              s.screenY,
                              s.clientX,
                              s.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              e.target.dispatchEvent(t);
                          }
                        }
                      })),
                    (eO.isDragging = eO.isGesturing = eO.isPressed = !1),
                    _ && r && !ei && em.restart(!0),
                    ey && eN(),
                    I && r && I(eO),
                    H && H(eO, i);
                }
              }),
              eV = function (e) {
                return (
                  e.touches &&
                  e.touches.length > 1 &&
                  (eO.isGesturing = !0) &&
                  eo(e, eO.isDragging)
                );
              },
              eq = function () {
                return (eO.isGesturing = !1), es(eO);
              },
              eU = function (e) {
                if (!eB(e)) {
                  var t = eP(),
                    r = eT();
                  eX((t - eM) * ef, (r - ek) * ef, 1),
                    (eM = t),
                    (ek = r),
                    _ && em.restart(!0);
                }
              },
              eG = function (e) {
                if (!eB(e)) {
                  (e = z(e, x)), ea && (ex = !0);
                  var t =
                    (1 === e.deltaMode
                      ? m
                      : 2 === e.deltaMode
                      ? o.innerHeight
                      : 1) * T;
                  eX(e.deltaX * t, e.deltaY * t, 0), _ && !ei && em.restart(!0);
                }
              },
              e$ = function (e) {
                if (!eB(e)) {
                  var t = e.clientX,
                    r = e.clientY,
                    n = t - eO.x,
                    i = r - eO.y;
                  (eO.x = t),
                    (eO.y = r),
                    (eb = !0),
                    _ && em.restart(!0),
                    (n || i) && eI(n, i);
                }
              },
              eJ = function (e) {
                (eO.event = e), ee(eO);
              },
              eZ = function (e) {
                (eO.event = e), et(eO);
              },
              eK = function (e) {
                return eB(e) || (z(e, x) && eu(eO));
              };
            (em = eO._dc =
              n
                .delayedCall(O || 0.25, function () {
                  eO._vx.reset(), eO._vy.reset(), em.pause(), _ && _(eO);
                })
                .pause()),
              (eO.deltaX = eO.deltaY = 0),
              (eO._vx = F(0, 50, !0)),
              (eO._vy = F(0, 50, !0)),
              (eO.scrollX = eP),
              (eO.scrollY = eT),
              (eO.isDragging = eO.isGesturing = eO.isPressed = !1),
              g(this),
              (eO.enable = function (e) {
                return (
                  !eO.isEnabled &&
                    (C(ej ? eY : v, "scroll", k),
                    p.indexOf("scroll") >= 0 &&
                      C(ej ? eY : v, "scroll", eU, eC, ep),
                    p.indexOf("wheel") >= 0 && C(v, "wheel", eG, eC, ep),
                    ((p.indexOf("touch") >= 0 && c) ||
                      p.indexOf("pointer") >= 0) &&
                      (C(v, h[0], eL, eC, ep),
                      C(eY, h[2], eH),
                      C(eY, h[3], eH),
                      ed && C(v, "click", ez, !0, !0),
                      eu && C(v, "click", eK),
                      eo && C(eY, "gesturestart", eV),
                      es && C(eY, "gestureend", eq),
                      ee && C(v, u + "enter", eJ),
                      et && C(v, u + "leave", eZ),
                      er && C(v, u + "move", e$)),
                    (eO.isEnabled = !0),
                    (eO.isDragging =
                      eO.isGesturing =
                      eO.isPressed =
                      eb =
                      ey =
                        !1),
                    eO._vx.reset(),
                    eO._vy.reset(),
                    (eM = eP()),
                    (ek = eT()),
                    e && e.type && eL(e),
                    el && el(eO)),
                  eO
                );
              }),
              (eO.disable = function () {
                eO.isEnabled &&
                  (y.filter(function (e) {
                    return e !== eO && S(e.target);
                  }).length || P(ej ? eY : v, "scroll", k),
                  eO.isPressed &&
                    (eO._vx.reset(),
                    eO._vy.reset(),
                    P(ei ? v : eY, h[1], eW, !0)),
                  P(ej ? eY : v, "scroll", eU, ep),
                  P(v, "wheel", eG, ep),
                  P(v, h[0], eL, ep),
                  P(eY, h[2], eH),
                  P(eY, h[3], eH),
                  P(v, "click", ez, !0),
                  P(v, "click", eK),
                  P(eY, "gesturestart", eV),
                  P(eY, "gestureend", eq),
                  P(v, u + "enter", eJ),
                  P(v, u + "leave", eZ),
                  P(v, u + "move", e$),
                  (eO.isEnabled = eO.isPressed = eO.isDragging = !1),
                  ec && ec(eO));
              }),
              (eO.kill = eO.revert =
                function () {
                  eO.disable();
                  var e = y.indexOf(eO);
                  e >= 0 && y.splice(e, 1), d === eO && (d = 0);
                }),
              y.push(eO),
              ei && S(v) && (d = eO),
              eO.enable(M);
          }),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(e.prototype, [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]),
          e
        );
      })();
      (I.version = "3.12.7"),
        (I.create = function (e) {
          return new I(e);
        }),
        (I.register = X),
        (I.getAll = function () {
          return y.slice();
        }),
        (I.getById = function (e) {
          return y.filter(function (t) {
            return t.vars.id === e;
          })[0];
        }),
        v() && n.registerPlugin(I);
      var W,
        L,
        H,
        V,
        q,
        U,
        G,
        $,
        J,
        Z,
        K,
        Q,
        ee,
        et,
        er,
        en,
        ei,
        eo,
        es,
        ea,
        el,
        ec,
        eu,
        ef,
        ep,
        ed,
        eh,
        eg,
        ev,
        em,
        ey,
        eb,
        ex,
        ew,
        e_,
        eO,
        eE,
        eS,
        eC = 1,
        eP = Date.now,
        eT = eP(),
        eM = 0,
        ek = 0,
        eA = function (e, t, r) {
          var n =
            eV(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
        },
        ej = function (e, t) {
          return t && (!eV(e) || "clamp(" !== e.substr(0, 6))
            ? "clamp(" + e + ")"
            : e;
        },
        eY = function () {
          return (et = 1);
        },
        eD = function () {
          return (et = 0);
        },
        eR = function (e) {
          return e;
        },
        eF = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        ez = function () {
          return "undefined" != typeof window;
        },
        eB = function () {
          return W || (ez() && (W = window.gsap) && W.registerPlugin && W);
        },
        eN = function (e) {
          return !!~G.indexOf(e);
        },
        eX = function (e) {
          return (
            ("Height" === e ? ey : H["inner" + e]) ||
            q["client" + e] ||
            U["client" + e]
          );
        },
        eI = function (e) {
          return (
            E(e, "getBoundingClientRect") ||
            (eN(e)
              ? function () {
                  return (tU.width = H.innerWidth), (tU.height = ey), tU;
                }
              : function () {
                  return tn(e);
                })
          );
        },
        eW = function (e, t, r) {
          var n = r.d,
            i = r.d2,
            o = r.a;
          return (o = E(e, "getBoundingClientRect"))
            ? function () {
                return o()[n];
              }
            : function () {
                return (t ? eX(i) : e["client" + i]) || 0;
              };
        },
        eL = function (e, t) {
          var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
          return Math.max(
            0,
            (o = E(e, (r = "scroll" + n)))
              ? o() - eI(e)()[i]
              : eN(e)
              ? (q[r] || U[r]) - eX(n)
              : e[r] - e["offset" + n]
          );
        },
        eH = function (e, t) {
          for (var r = 0; r < es.length; r += 3)
            (!t || ~t.indexOf(es[r + 1])) && e(es[r], es[r + 1], es[r + 2]);
        },
        eV = function (e) {
          return "string" == typeof e;
        },
        eq = function (e) {
          return "function" == typeof e;
        },
        eU = function (e) {
          return "number" == typeof e;
        },
        eG = function (e) {
          return "object" == typeof e;
        },
        e$ = function (e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause();
        },
        eJ = function (e, t) {
          if (e.enabled) {
            var r = e._ctx
              ? e._ctx.add(function () {
                  return t(e);
                })
              : t(e);
            r && r.totalTime && (e.callbackAnimation = r);
          }
        },
        eZ = Math.abs,
        eK = "left",
        eQ = "right",
        e0 = "bottom",
        e1 = "width",
        e2 = "height",
        e3 = "Right",
        e5 = "Left",
        e6 = "Bottom",
        e9 = "padding",
        e4 = "margin",
        e8 = "Width",
        e7 = "Height",
        te = function (e) {
          return H.getComputedStyle(e);
        },
        tt = function (e) {
          var t = te(e).position;
          e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
        },
        tr = function (e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e;
        },
        tn = function (e, t) {
          var r =
              t &&
              "matrix(1, 0, 0, 1, 0, 0)" !== te(e)[er] &&
              W.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            n = e.getBoundingClientRect();
          return r && r.progress(0).kill(), n;
        },
        ti = function (e, t) {
          var r = t.d2;
          return e["offset" + r] || e["client" + r] || 0;
        },
        to = function (e) {
          var t,
            r = [],
            n = e.labels,
            i = e.duration();
          for (t in n) r.push(n[t] / i);
          return r;
        },
        ts = function (e) {
          var t = W.utils.snap(e),
            r =
              Array.isArray(e) &&
              e.slice(0).sort(function (e, t) {
                return e - t;
              });
          return r
            ? function (e, n, i) {
                var o;
                if ((void 0 === i && (i = 0.001), !n)) return t(e);
                if (n > 0) {
                  for (e -= i, o = 0; o < r.length; o++)
                    if (r[o] >= e) return r[o];
                  return r[o - 1];
                }
                for (o = r.length, e += i; o--; ) if (r[o] <= e) return r[o];
                return r[0];
              }
            : function (r, n, i) {
                void 0 === i && (i = 0.001);
                var o = t(r);
                return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
                  ? o
                  : t(n < 0 ? r - e : r + e);
              };
        },
        ta = function (e, t, r, n) {
          return r.split(",").forEach(function (r) {
            return e(t, r, n);
          });
        },
        tl = function (e, t, r, n, i) {
          return e.addEventListener(t, r, { passive: !n, capture: !!i });
        },
        tc = function (e, t, r, n) {
          return e.removeEventListener(t, r, !!n);
        },
        tu = function (e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
        },
        tf = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        tp = { toggleActions: "play", anticipatePin: 0 },
        td = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        th = function (e, t) {
          if (eV(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r &&
              (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
              (e =
                n +
                (e in td
                  ? td[e] * t
                  : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0));
          }
          return e;
        },
        tg = function (e, t, r, n, i, o, s, a) {
          var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            p = i.fontWeight,
            d = V.createElement("div"),
            h = eN(r) || "fixed" === E(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            v = h ? U : r,
            m = -1 !== e.indexOf("start"),
            y = m ? l : c,
            b =
              "border-color:" +
              y +
              ";font-size:" +
              u +
              ";color:" +
              y +
              ";font-weight:" +
              p +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (b += "position:" + ((g || a) && h ? "fixed;" : "absolute;")),
            (g || a || !h) &&
              (b += (n === Y ? eQ : e0) + ":" + (o + parseFloat(f)) + "px;"),
            s &&
              (b +=
                "box-sizing:border-box;text-align:left;width:" +
                s.offsetWidth +
                "px;"),
            (d._isStart = m),
            d.setAttribute(
              "class",
              "gsap-marker-" + e + (t ? " marker-" + t : "")
            ),
            (d.style.cssText = b),
            (d.innerText = t || 0 === t ? e + "-" + t : e),
            v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
            (d._offset = d["offset" + n.op.d2]),
            tv(d, 0, n, m),
            d
          );
        },
        tv = function (e, t, r, n) {
          var i = { display: "block" },
            o = r[n ? "os2" : "p2"],
            s = r[n ? "p2" : "os2"];
          (e._isFlipped = n),
            (i[r.a + "Percent"] = n ? -100 : 0),
            (i[r.a] = n ? "1px" : 0),
            (i["border" + o + e8] = 1),
            (i["border" + s + e8] = 0),
            (i[r.p] = t + "px"),
            W.set(e, i);
        },
        tm = [],
        ty = {},
        tb = function () {
          return eP() - eM > 34 && (e_ || (e_ = requestAnimationFrame(tB)));
        },
        tx = function () {
          (eu && eu.isPressed && !(eu.startX > U.clientWidth)) ||
            (b.cache++,
            eu ? e_ || (e_ = requestAnimationFrame(tB)) : tB(),
            eM || tC("scrollStart"),
            (eM = eP()));
        },
        tw = function () {
          (ed = H.innerWidth), (ep = H.innerHeight);
        },
        t_ = function (e) {
          b.cache++,
            (!0 === e ||
              (!ee &&
                !ec &&
                !V.fullscreenElement &&
                !V.webkitFullscreenElement &&
                (!ef ||
                  ed !== H.innerWidth ||
                  Math.abs(H.innerHeight - ep) > 0.25 * H.innerHeight))) &&
              $.restart(!0);
        },
        tO = {},
        tE = [],
        tS = function e() {
          return tc(t0, "scrollEnd", e) || tR(!0);
        },
        tC = function (e) {
          return (
            (tO[e] &&
              tO[e].map(function (e) {
                return e();
              })) ||
            tE
          );
        },
        tP = [],
        tT = function (e) {
          for (var t = 0; t < tP.length; t += 5)
            (!e || (tP[t + 4] && tP[t + 4].query === e)) &&
              ((tP[t].style.cssText = tP[t + 1]),
              tP[t].getBBox && tP[t].setAttribute("transform", tP[t + 2] || ""),
              (tP[t + 3].uncache = 1));
        },
        tM = function (e, t) {
          var r;
          for (en = 0; en < tm.length; en++)
            (r = tm[en]) &&
              (!t || r._ctx === t) &&
              (e ? r.kill(1) : r.revert(!0, !0));
          (eb = !0), t && tT(t), t || tC("revert");
        },
        tk = function (e, t) {
          b.cache++,
            (t || !eO) &&
              b.forEach(function (e) {
                return eq(e) && e.cacheID++ && (e.rec = 0);
              }),
            eV(e) && (H.history.scrollRestoration = ev = e);
        },
        tA = 0,
        tj = function () {
          if (eE !== tA) {
            var e = (eE = tA);
            requestAnimationFrame(function () {
              return e === tA && tR(!0);
            });
          }
        },
        tY = function () {
          U.appendChild(em),
            (ey = (!eu && em.offsetHeight) || H.innerHeight),
            U.removeChild(em);
        },
        tD = function (e) {
          return J(
            ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
          ).forEach(function (t) {
            return (t.style.display = e ? "none" : "block");
          });
        },
        tR = function (e, t) {
          if (
            ((q = V.documentElement),
            (U = V.body),
            (G = [H, V, q, U]),
            eM && !e && !eb)
          ) {
            tl(t0, "scrollEnd", tS);
            return;
          }
          tY(),
            (eO = t0.isRefreshing = !0),
            b.forEach(function (e) {
              return eq(e) && ++e.cacheID && (e.rec = e());
            });
          var r = tC("refreshInit");
          ea && t0.sort(),
            t || tM(),
            b.forEach(function (e) {
              eq(e) &&
                (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
            }),
            tm.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            (eb = !1),
            tm.forEach(function (e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
              }
            }),
            (ex = 1),
            tD(!0),
            tm.forEach(function (e) {
              var t = eL(e.scroller, e._dir),
                r = "max" === e.vars.end || (e._endClamp && e.end > t),
                n = e._startClamp && e.start >= t;
              (r || n) &&
                e.setPositions(
                  n ? t - 1 : e.start,
                  r ? Math.max(n ? t : e.start + 1, t) : e.end,
                  !0
                );
            }),
            tD(!1),
            (ex = 0),
            r.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            b.forEach(function (e) {
              eq(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = "smooth");
                  }),
                e.rec && e(e.rec));
            }),
            tk(ev, 1),
            $.pause(),
            tA++,
            (eO = 2),
            tB(2),
            tm.forEach(function (e) {
              return eq(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (eO = t0.isRefreshing = !1),
            tC("refresh");
        },
        tF = 0,
        tz = 1,
        tB = function (e) {
          if (2 === e || (!eO && !eb)) {
            (t0.isUpdating = !0), eS && eS.update(0);
            var t = tm.length,
              r = eP(),
              n = r - eT >= 50,
              i = t && tm[0].scroll();
            if (
              ((tz = tF > i ? -1 : 1),
              eO || (tF = i),
              n &&
                (eM && !et && r - eM > 200 && ((eM = 0), tC("scrollEnd")),
                (K = eT),
                (eT = r)),
              tz < 0)
            ) {
              for (en = t; en-- > 0; ) tm[en] && tm[en].update(0, n);
              tz = 1;
            } else for (en = 0; en < t; en++) tm[en] && tm[en].update(0, n);
            t0.isUpdating = !1;
          }
          e_ = 0;
        },
        tN = [
          eK,
          "top",
          e0,
          eQ,
          e4 + e6,
          e4 + e3,
          e4 + "Top",
          e4 + e5,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        tX = tN.concat([
          e1,
          e2,
          "boxSizing",
          "max" + e8,
          "max" + e7,
          "position",
          e4,
          e9,
          e9 + "Top",
          e9 + e3,
          e9 + e6,
          e9 + e5,
        ]),
        tI = function (e, t, r) {
          tH(r);
          var n = e._gsap;
          if (n.spacerIsNative) tH(n.spacerState);
          else if (e._gsap.swappedIn) {
            var i = t.parentNode;
            i && (i.insertBefore(e, t), i.removeChild(t));
          }
          e._gsap.swappedIn = !1;
        },
        tW = function (e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var i, o = tN.length, s = t.style, a = e.style; o--; )
              s[(i = tN[o])] = r[i];
            (s.position = "absolute" === r.position ? "absolute" : "relative"),
              "inline" === r.display && (s.display = "inline-block"),
              (a[e0] = a[eQ] = "auto"),
              (s.flexBasis = r.flexBasis || "auto"),
              (s.overflow = "visible"),
              (s.boxSizing = "border-box"),
              (s[e1] = ti(e, j) + "px"),
              (s[e2] = ti(e, Y) + "px"),
              (s[e9] = a[e4] = a.top = a[eK] = "0"),
              tH(n),
              (a[e1] = a["max" + e8] = r[e1]),
              (a[e2] = a["max" + e7] = r[e2]),
              (a[e9] = r[e9]),
              e.parentNode !== t &&
                (e.parentNode.insertBefore(t, e), t.appendChild(e)),
              (e._gsap.swappedIn = !0);
          }
        },
        tL = /([A-Z])/g,
        tH = function (e) {
          if (e) {
            var t,
              r,
              n = e.t.style,
              i = e.length,
              o = 0;
            for ((e.t._gsap || W.core.getCache(e.t)).uncache = 1; o < i; o += 2)
              (r = e[o + 1]),
                (t = e[o]),
                r
                  ? (n[t] = r)
                  : n[t] &&
                    n.removeProperty(t.replace(tL, "-$1").toLowerCase());
          }
        },
        tV = function (e) {
          for (var t = tX.length, r = e.style, n = [], i = 0; i < t; i++)
            n.push(tX[i], r[tX[i]]);
          return (n.t = e), n;
        },
        tq = function (e, t, r) {
          for (var n, i = [], o = e.length, s = r ? 8 : 0; s < o; s += 2)
            (n = e[s]), i.push(n, n in t ? t[n] : e[s + 1]);
          return (i.t = e.t), i;
        },
        tU = { left: 0, top: 0 },
        tG = function (e, t, r, n, i, o, s, a, l, c, u, f, p, d) {
          eq(e) && (e = e(a)),
            eV(e) &&
              "max" === e.substr(0, 3) &&
              (e = f + ("=" === e.charAt(4) ? th("0" + e.substr(3), r) : 0));
          var h,
            g,
            v,
            m = p ? p.time() : 0;
          if ((p && p.seek(0), isNaN(e) || (e = +e), eU(e)))
            p &&
              (e = W.utils.mapRange(
                p.scrollTrigger.start,
                p.scrollTrigger.end,
                0,
                f,
                e
              )),
              s && tv(s, r, n, !0);
          else {
            eq(t) && (t = t(a));
            var y,
              b,
              x,
              w,
              _ = (e || "0").split(" ");
            (y = tn((v = D(t, a) || U)) || {}).left ||
              y.top ||
              "none" !== te(v).display ||
              ((w = v.style.display),
              (v.style.display = "block"),
              (y = tn(v)),
              w ? (v.style.display = w) : v.style.removeProperty("display")),
              (b = th(_[0], y[n.d])),
              (x = th(_[1] || "0", r)),
              (e = y[n.p] - l[n.p] - c + b + i - x),
              s && tv(s, x, n, r - x < 20 || (s._isStart && x > 20)),
              (r -= r - x);
          }
          if ((d && ((a[d] = e || -0.001), e < 0 && (e = 0)), o)) {
            var O = e + r,
              E = o._isStart;
            (h = "scroll" + n.d2),
              tv(
                o,
                O,
                n,
                (E && O > 20) ||
                  (!E && (u ? Math.max(U[h], q[h]) : o.parentNode[h]) <= O + 1)
              ),
              u &&
                ((l = tn(s)),
                u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px"));
          }
          return (
            p &&
              v &&
              ((h = tn(v)),
              p.seek(f),
              (g = tn(v)),
              (p._caScrollDist = h[n.p] - g[n.p]),
              (e = (e / p._caScrollDist) * f)),
            p && p.seek(m),
            p ? e : Math.round(e)
          );
        },
        t$ = /(webkit|moz|length|cssText|inset)/i,
        tJ = function (e, t, r, n) {
          if (e.parentNode !== t) {
            var i,
              o,
              s = e.style;
            if (t === U) {
              for (i in ((e._stOrig = s.cssText), (o = te(e))))
                +i ||
                  t$.test(i) ||
                  !o[i] ||
                  "string" != typeof s[i] ||
                  "0" === i ||
                  (s[i] = o[i]);
              (s.top = r), (s.left = n);
            } else s.cssText = e._stOrig;
            (W.core.getCache(e).uncache = 1), t.appendChild(e);
          }
        },
        tZ = function (e, t, r) {
          var n = t,
            i = n;
          return function (t) {
            var o = Math.round(e());
            return (
              o !== n &&
                o !== i &&
                Math.abs(o - n) > 3 &&
                Math.abs(o - i) > 3 &&
                ((t = o), r && r()),
              (i = n),
              (n = Math.round(t))
            );
          };
        },
        tK = function (e, t, r) {
          var n = {};
          (n[t.p] = "+=" + r), W.set(e, n);
        },
        tQ = function (e, t) {
          var r = R(e, t),
            n = "_scroll" + t.p2,
            i = function t(i, o, s, a, l) {
              var c = t.tween,
                u = o.onComplete,
                f = {};
              s = s || r();
              var p = tZ(r, s, function () {
                c.kill(), (t.tween = 0);
              });
              return (
                (l = (a && l) || 0),
                (a = a || i - s),
                c && c.kill(),
                (o[n] = i),
                (o.inherit = !1),
                (o.modifiers = f),
                (f[n] = function () {
                  return p(s + a * c.ratio + l * c.ratio * c.ratio);
                }),
                (o.onUpdate = function () {
                  b.cache++, t.tween && tB();
                }),
                (o.onComplete = function () {
                  (t.tween = 0), u && u.call(c);
                }),
                (c = t.tween = W.to(e, o))
              );
            };
          return (
            (e[n] = r),
            (r.wheelHandler = function () {
              return i.tween && i.tween.kill() && (i.tween = 0);
            }),
            tl(e, "wheel", r.wheelHandler),
            t0.isTouch && tl(e, "touchmove", r.wheelHandler),
            i
          );
        },
        t0 = (function () {
          function e(t, r) {
            L ||
              e.register(W) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              eg(this),
              this.init(t, r);
          }
          return (
            (e.prototype.init = function (t, r) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                !ek)
              ) {
                this.update = this.refresh = this.kill = eR;
                return;
              }
              var n,
                i,
                o,
                s,
                a,
                l,
                c,
                u,
                f,
                p,
                d,
                h,
                g,
                v,
                m,
                y,
                w,
                _,
                O,
                S,
                C,
                P,
                T,
                M,
                k,
                A,
                F,
                z,
                B,
                N,
                X,
                I,
                L,
                G,
                $,
                Q,
                er,
                ei,
                eo,
                es,
                ec,
                eu = (t = tr(
                  eV(t) || eU(t) || t.nodeType ? { trigger: t } : t,
                  tp
                )),
                ef = eu.onUpdate,
                ep = eu.toggleClass,
                ed = eu.id,
                eh = eu.onToggle,
                eg = eu.onRefresh,
                ev = eu.scrub,
                em = eu.trigger,
                ey = eu.pin,
                eb = eu.pinSpacing,
                e_ = eu.invalidateOnRefresh,
                eE = eu.anticipatePin,
                eT = eu.onScrubComplete,
                eY = eu.onSnapComplete,
                eD = eu.once,
                ez = eu.snap,
                eB = eu.pinReparent,
                eX = eu.pinSpacer,
                eH = eu.containerAnimation,
                eK = eu.fastScrollEnd,
                eQ = eu.preventOverlaps,
                e0 =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? j
                    : Y,
                ta = !ev && 0 !== ev,
                tu = D(t.scroller || H),
                td = W.core.getCache(tu),
                tv = eN(tu),
                tb =
                  ("pinType" in t
                    ? t.pinType
                    : E(tu, "pinType") || (tv && "fixed")) === "fixed",
                tw = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                tO = ta && t.toggleActions.split(" "),
                tE = "markers" in t ? t.markers : tp.markers,
                tC = tv ? 0 : parseFloat(te(tu)["border" + e0.p2 + e8]) || 0,
                tP = this,
                tT =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(tP);
                  },
                tM = eW(tu, tv, e0),
                tk =
                  !tv || ~x.indexOf(tu)
                    ? eI(tu)
                    : function () {
                        return tU;
                      },
                tA = 0,
                tY = 0,
                tD = 0,
                tR = R(tu, e0);
              if (
                ((tP._startClamp = tP._endClamp = !1),
                (tP._dir = e0),
                (eE *= 45),
                (tP.scroller = tu),
                (tP.scroll = eH ? eH.time.bind(eH) : tR),
                (l = tR()),
                (tP.vars = t),
                (r = r || t.animation),
                "refreshPriority" in t &&
                  ((ea = 1), -9999 === t.refreshPriority && (eS = tP)),
                (td.tweenScroll = td.tweenScroll || {
                  top: tQ(tu, Y),
                  left: tQ(tu, j),
                }),
                (tP.tweenTo = o = td.tweenScroll[e0.p]),
                (tP.scrubDuration = function (e) {
                  ($ = eU(e) && e)
                    ? G
                      ? G.duration(e)
                      : (G = W.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: $,
                          paused: !0,
                          onComplete: function () {
                            return eT && eT(tP);
                          },
                        }))
                    : (G && G.progress(1).kill(), (G = 0));
                }),
                r &&
                  ((r.vars.lazy = !1),
                  (r._initted && !tP.isReverted) ||
                    (!1 !== r.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      r.duration() &&
                      r.render(0, !0, !0)),
                  (tP.animation = r.pause()),
                  (r.scrollTrigger = tP),
                  tP.scrubDuration(ev),
                  (I = 0),
                  ed || (ed = r.vars.id)),
                ez &&
                  ((!eG(ez) || ez.push) && (ez = { snapTo: ez }),
                  "scrollBehavior" in U.style &&
                    W.set(tv ? [U, q] : tu, { scrollBehavior: "auto" }),
                  b.forEach(function (e) {
                    return (
                      eq(e) &&
                      e.target === (tv ? V.scrollingElement || q : tu) &&
                      (e.smooth = !1)
                    );
                  }),
                  (a = eq(ez.snapTo)
                    ? ez.snapTo
                    : "labels" === ez.snapTo
                    ? ((n = r),
                      function (e) {
                        return W.utils.snap(to(n), e);
                      })
                    : "labelsDirectional" === ez.snapTo
                    ? ((i = r),
                      function (e, t) {
                        return ts(to(i))(e, t.direction);
                      })
                    : !1 !== ez.directional
                    ? function (e, t) {
                        return ts(ez.snapTo)(
                          e,
                          eP() - tY < 500 ? 0 : t.direction
                        );
                      }
                    : W.utils.snap(ez.snapTo)),
                  (Q = eG((Q = ez.duration || { min: 0.1, max: 2 }))
                    ? Z(Q.min, Q.max)
                    : Z(Q, Q)),
                  (er = W.delayedCall(ez.delay || $ / 2 || 0.1, function () {
                    var e = tR(),
                      t = eP() - tY < 500,
                      n = o.tween;
                    if (
                      (t || 10 > Math.abs(tP.getVelocity())) &&
                      !n &&
                      !et &&
                      tA !== e
                    ) {
                      var i,
                        s,
                        l = (e - u) / y,
                        c = r && !ta ? r.totalProgress() : l,
                        p = t ? 0 : ((c - L) / (eP() - K)) * 1e3 || 0,
                        d = W.utils.clamp(-l, 1 - l, (eZ(p / 2) * p) / 0.185),
                        h = l + (!1 === ez.inertia ? 0 : d),
                        g = ez,
                        v = g.onStart,
                        m = g.onInterrupt,
                        b = g.onComplete;
                      if (
                        (eU((i = a(h, tP))) || (i = h),
                        (s = Math.max(0, Math.round(u + i * y))),
                        e <= f && e >= u && s !== e)
                      ) {
                        if (n && !n._initted && n.data <= eZ(s - e)) return;
                        !1 === ez.inertia && (d = i - l),
                          o(
                            s,
                            {
                              duration: Q(
                                eZ(
                                  (0.185 * Math.max(eZ(h - c), eZ(i - c))) /
                                    p /
                                    0.05 || 0
                                )
                              ),
                              ease: ez.ease || "power3",
                              data: eZ(s - e),
                              onInterrupt: function () {
                                return er.restart(!0) && m && m(tP);
                              },
                              onComplete: function () {
                                tP.update(),
                                  (tA = tR()),
                                  r &&
                                    !ta &&
                                    (G
                                      ? G.resetTo(
                                          "totalProgress",
                                          i,
                                          r._tTime / r._tDur
                                        )
                                      : r.progress(i)),
                                  (I = L =
                                    r && !ta ? r.totalProgress() : tP.progress),
                                  eY && eY(tP),
                                  b && b(tP);
                              },
                            },
                            e,
                            d * y,
                            s - e - d * y
                          ),
                          v && v(tP, o.tween);
                      }
                    } else tP.isActive && tA !== e && er.restart(!0);
                  }).pause())),
                ed && (ty[ed] = tP),
                (ec =
                  (em = tP.trigger = D(em || (!0 !== ey && ey))) &&
                  em._gsap &&
                  em._gsap.stRevert) && (ec = ec(tP)),
                (ey = !0 === ey ? em : D(ey)),
                eV(ep) && (ep = { targets: em, className: ep }),
                ey &&
                  (!1 === eb ||
                    eb === e4 ||
                    (eb =
                      (!!eb ||
                        !ey.parentNode ||
                        !ey.parentNode.style ||
                        "flex" !== te(ey.parentNode).display) &&
                      e9),
                  (tP.pin = ey),
                  (s = W.core.getCache(ey)).spacer
                    ? (w = s.pinState)
                    : (eX &&
                        ((eX = D(eX)) &&
                          !eX.nodeType &&
                          (eX = eX.current || eX.nativeElement),
                        (s.spacerIsNative = !!eX),
                        eX && (s.spacerState = tV(eX))),
                      (s.spacer = S = eX || V.createElement("div")),
                      S.classList.add("pin-spacer"),
                      ed && S.classList.add("pin-spacer-" + ed),
                      (s.pinState = w = tV(ey))),
                  !1 !== t.force3D && W.set(ey, { force3D: !0 }),
                  (tP.spacer = S = s.spacer),
                  (A = (X = te(ey))[eb + e0.os2]),
                  (P = W.getProperty(ey)),
                  (T = W.quickSetter(ey, e0.a, "px")),
                  tW(ey, S, X),
                  (O = tV(ey))),
                tE)
              ) {
                (v = eG(tE) ? tr(tE, tf) : tf),
                  (h = tg("scroller-start", ed, tu, e0, v, 0)),
                  (g = tg("scroller-end", ed, tu, e0, v, 0, h)),
                  (C = h["offset" + e0.op.d2]);
                var tF = D(E(tu, "content") || tu);
                (p = this.markerStart = tg("start", ed, tF, e0, v, C, 0, eH)),
                  (d = this.markerEnd = tg("end", ed, tF, e0, v, C, 0, eH)),
                  eH && (es = W.quickSetter([p, d], e0.a, "px")),
                  tb ||
                    (x.length && !0 === E(tu, "fixedMarkers")) ||
                    (tt(tv ? U : tu),
                    W.set([h, g], { force3D: !0 }),
                    (z = W.quickSetter(h, e0.a, "px")),
                    (N = W.quickSetter(g, e0.a, "px")));
              }
              if (eH) {
                var tB = eH.vars.onUpdate,
                  tN = eH.vars.onUpdateParams;
                eH.eventCallback("onUpdate", function () {
                  tP.update(0, 0, 1), tB && tB.apply(eH, tN || []);
                });
              }
              if (
                ((tP.previous = function () {
                  return tm[tm.indexOf(tP) - 1];
                }),
                (tP.next = function () {
                  return tm[tm.indexOf(tP) + 1];
                }),
                (tP.revert = function (e, t) {
                  if (!t) return tP.kill(!0);
                  var n = !1 !== e || !tP.enabled,
                    i = ee;
                  n !== tP.isReverted &&
                    (n &&
                      ((ei = Math.max(tR(), tP.scroll.rec || 0)),
                      (tD = tP.progress),
                      (eo = r && r.progress())),
                    p &&
                      [p, d, h, g].forEach(function (e) {
                        return (e.style.display = n ? "none" : "block");
                      }),
                    n && ((ee = tP), tP.update(n)),
                    !ey ||
                      (eB && tP.isActive) ||
                      (n ? tI(ey, S, w) : tW(ey, S, te(ey), F)),
                    n || tP.update(n),
                    (ee = i),
                    (tP.isReverted = n));
                }),
                (tP.refresh = function (n, i, s, a) {
                  if ((!ee && tP.enabled) || i) {
                    if (ey && n && eM) {
                      tl(e, "scrollEnd", tS);
                      return;
                    }
                    !eO && tT && tT(tP),
                      (ee = tP),
                      o.tween && !s && (o.tween.kill(), (o.tween = 0)),
                      G && G.pause(),
                      e_ && r && r.revert({ kill: !1 }).invalidate(),
                      tP.isReverted || tP.revert(!0, !0),
                      (tP._subPinOffset = !1);
                    var v,
                      b,
                      x,
                      E,
                      C,
                      T,
                      A,
                      z,
                      N,
                      X,
                      I,
                      L,
                      H,
                      $ = tM(),
                      J = tk(),
                      Z = eH ? eH.duration() : eL(tu, e0),
                      K = y <= 0.01,
                      Q = 0,
                      et = a || 0,
                      en = eG(s) ? s.end : t.end,
                      es = t.endTrigger || em,
                      ea = eG(s)
                        ? s.start
                        : t.start ||
                          (0 !== t.start && em ? (ey ? "0 0" : "0 100%") : 0),
                      ec = (tP.pinnedContainer =
                        t.pinnedContainer && D(t.pinnedContainer, tP)),
                      eu = (em && Math.max(0, tm.indexOf(tP))) || 0,
                      ef = eu;
                    for (
                      tE &&
                      eG(s) &&
                      ((L = W.getProperty(h, e0.p)),
                      (H = W.getProperty(g, e0.p)));
                      ef-- > 0;

                    )
                      (T = tm[ef]).end || T.refresh(0, 1) || (ee = tP),
                        (A = T.pin) &&
                          (A === em || A === ey || A === ec) &&
                          !T.isReverted &&
                          (X || (X = []), X.unshift(T), T.revert(!0, !0)),
                        T !== tm[ef] && (eu--, ef--);
                    for (
                      eq(ea) && (ea = ea(tP)),
                        u =
                          tG(
                            (ea = eA(ea, "start", tP)),
                            em,
                            $,
                            e0,
                            tR(),
                            p,
                            h,
                            tP,
                            J,
                            tC,
                            tb,
                            Z,
                            eH,
                            tP._startClamp && "_startClamp"
                          ) || (ey ? -0.001 : 0),
                        eq(en) && (en = en(tP)),
                        eV(en) &&
                          !en.indexOf("+=") &&
                          (~en.indexOf(" ")
                            ? (en = (eV(ea) ? ea.split(" ")[0] : "") + en)
                            : ((Q = th(en.substr(2), $)),
                              (en = eV(ea)
                                ? ea
                                : (eH
                                    ? W.utils.mapRange(
                                        0,
                                        eH.duration(),
                                        eH.scrollTrigger.start,
                                        eH.scrollTrigger.end,
                                        u
                                      )
                                    : u) + Q),
                              (es = em))),
                        en = eA(en, "end", tP),
                        f =
                          Math.max(
                            u,
                            tG(
                              en || (es ? "100% 0" : Z),
                              es,
                              $,
                              e0,
                              tR() + Q,
                              d,
                              g,
                              tP,
                              J,
                              tC,
                              tb,
                              Z,
                              eH,
                              tP._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        Q = 0,
                        ef = eu;
                      ef--;

                    )
                      (A = (T = tm[ef]).pin) &&
                        T.start - T._pinPush <= u &&
                        !eH &&
                        T.end > 0 &&
                        ((v =
                          T.end -
                          (tP._startClamp ? Math.max(0, T.start) : T.start)),
                        ((A === em && T.start - T._pinPush < u) || A === ec) &&
                          isNaN(ea) &&
                          (Q += v * (1 - T.progress)),
                        A === ey && (et += v));
                    if (
                      ((u += Q),
                      (f += Q),
                      tP._startClamp && (tP._startClamp += Q),
                      tP._endClamp &&
                        !eO &&
                        ((tP._endClamp = f || -0.001),
                        (f = Math.min(f, eL(tu, e0)))),
                      (y = f - u || ((u -= 0.01) && 0.001)),
                      K &&
                        (tD = W.utils.clamp(0, 1, W.utils.normalize(u, f, ei))),
                      (tP._pinPush = et),
                      p &&
                        Q &&
                        (((v = {})[e0.a] = "+=" + Q),
                        ec && (v[e0.p] = "-=" + tR()),
                        W.set([p, d], v)),
                      ey && !(ex && tP.end >= eL(tu, e0)))
                    )
                      (v = te(ey)),
                        (E = e0 === Y),
                        (x = tR()),
                        (M = parseFloat(P(e0.a)) + et),
                        !Z &&
                          f > 1 &&
                          ((I = {
                            style: (I = (tv ? V.scrollingElement || q : tu)
                              .style),
                            value: I["overflow" + e0.a.toUpperCase()],
                          }),
                          tv &&
                            "scroll" !==
                              te(U)["overflow" + e0.a.toUpperCase()] &&
                            (I.style["overflow" + e0.a.toUpperCase()] =
                              "scroll")),
                        tW(ey, S, v),
                        (O = tV(ey)),
                        (b = tn(ey, !0)),
                        (z = tb && R(tu, E ? j : Y)()),
                        eb
                          ? (((F = [eb + e0.os2, y + et + "px"]).t = S),
                            (ef = eb === e9 ? ti(ey, e0) + y + et : 0) &&
                              (F.push(e0.d, ef + "px"),
                              "auto" !== S.style.flexBasis &&
                                (S.style.flexBasis = ef + "px")),
                            tH(F),
                            ec &&
                              tm.forEach(function (e) {
                                e.pin === ec &&
                                  !1 !== e.vars.pinSpacing &&
                                  (e._subPinOffset = !0);
                              }),
                            tb && tR(ei))
                          : (ef = ti(ey, e0)) &&
                            "auto" !== S.style.flexBasis &&
                            (S.style.flexBasis = ef + "px"),
                        tb &&
                          (((C = {
                            top: b.top + (E ? x - u : z) + "px",
                            left: b.left + (E ? z : x - u) + "px",
                            boxSizing: "border-box",
                            position: "fixed",
                          })[e1] = C["max" + e8] =
                            Math.ceil(b.width) + "px"),
                          (C[e2] = C["max" + e7] = Math.ceil(b.height) + "px"),
                          (C[e4] =
                            C[e4 + "Top"] =
                            C[e4 + e3] =
                            C[e4 + e6] =
                            C[e4 + e5] =
                              "0"),
                          (C[e9] = v[e9]),
                          (C[e9 + "Top"] = v[e9 + "Top"]),
                          (C[e9 + e3] = v[e9 + e3]),
                          (C[e9 + e6] = v[e9 + e6]),
                          (C[e9 + e5] = v[e9 + e5]),
                          (_ = tq(w, C, eB)),
                          eO && tR(0)),
                        r
                          ? ((N = r._initted),
                            el(1),
                            r.render(r.duration(), !0, !0),
                            (k = P(e0.a) - M + y + et),
                            (B = Math.abs(y - k) > 1),
                            tb && B && _.splice(_.length - 2, 2),
                            r.render(0, !0, !0),
                            N || r.invalidate(!0),
                            r.parent || r.totalTime(r.totalTime()),
                            el(0))
                          : (k = y),
                        I &&
                          (I.value
                            ? (I.style["overflow" + e0.a.toUpperCase()] =
                                I.value)
                            : I.style.removeProperty("overflow-" + e0.a));
                    else if (em && tR() && !eH)
                      for (b = em.parentNode; b && b !== U; )
                        b._pinOffset &&
                          ((u -= b._pinOffset), (f -= b._pinOffset)),
                          (b = b.parentNode);
                    X &&
                      X.forEach(function (e) {
                        return e.revert(!1, !0);
                      }),
                      (tP.start = u),
                      (tP.end = f),
                      (l = c = eO ? ei : tR()),
                      eH || eO || (l < ei && tR(ei), (tP.scroll.rec = 0)),
                      tP.revert(!1, !0),
                      (tY = eP()),
                      er && ((tA = -1), er.restart(!0)),
                      (ee = 0),
                      r &&
                        ta &&
                        (r._initted || eo) &&
                        r.progress() !== eo &&
                        r.progress(eo || 0, !0).render(r.time(), !0, !0),
                      (K ||
                        tD !== tP.progress ||
                        eH ||
                        e_ ||
                        (r && !r._initted)) &&
                        (r &&
                          !ta &&
                          r.totalProgress(
                            eH && u < -0.001 && !tD
                              ? W.utils.normalize(u, f, 0)
                              : tD,
                            !0
                          ),
                        (tP.progress = K || (l - u) / y === tD ? 0 : tD)),
                      ey && eb && (S._pinOffset = Math.round(tP.progress * k)),
                      G && G.invalidate(),
                      isNaN(L) ||
                        ((L -= W.getProperty(h, e0.p)),
                        (H -= W.getProperty(g, e0.p)),
                        tK(h, e0, L),
                        tK(p, e0, L - (a || 0)),
                        tK(g, e0, H),
                        tK(d, e0, H - (a || 0))),
                      K && !eO && tP.update(),
                      !eg || eO || m || ((m = !0), eg(tP), (m = !1));
                  }
                }),
                (tP.getVelocity = function () {
                  return ((tR() - c) / (eP() - K)) * 1e3 || 0;
                }),
                (tP.endAnimation = function () {
                  e$(tP.callbackAnimation),
                    r &&
                      (G
                        ? G.progress(1)
                        : r.paused()
                        ? ta || e$(r, tP.direction < 0, 1)
                        : e$(r, r.reversed()));
                }),
                (tP.labelToScroll = function (e) {
                  return (
                    (r &&
                      r.labels &&
                      (u || tP.refresh() || u) +
                        (r.labels[e] / r.duration()) * y) ||
                    0
                  );
                }),
                (tP.getTrailing = function (e) {
                  var t = tm.indexOf(tP),
                    r =
                      tP.direction > 0
                        ? tm.slice(0, t).reverse()
                        : tm.slice(t + 1);
                  return (
                    eV(e)
                      ? r.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : r
                  ).filter(function (e) {
                    return tP.direction > 0 ? e.end <= u : e.start >= f;
                  });
                }),
                (tP.update = function (e, t, n) {
                  if (!eH || n || e) {
                    var i,
                      s,
                      a,
                      p,
                      d,
                      g,
                      v,
                      m = !0 === eO ? ei : tP.scroll(),
                      b = e ? 0 : (m - u) / y,
                      x = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                      w = tP.progress;
                    if (
                      (t &&
                        ((c = l),
                        (l = eH ? tR() : m),
                        ez &&
                          ((L = I), (I = r && !ta ? r.totalProgress() : x))),
                      eE &&
                        ey &&
                        !ee &&
                        !eC &&
                        eM &&
                        (!x && u < m + ((m - c) / (eP() - K)) * eE
                          ? (x = 1e-4)
                          : 1 === x &&
                            f > m + ((m - c) / (eP() - K)) * eE &&
                            (x = 0.9999)),
                      x !== w && tP.enabled)
                    ) {
                      if (
                        ((p =
                          (d =
                            (i = tP.isActive = !!x && x < 1) !=
                            (!!w && w < 1)) || !!x != !!w),
                        (tP.direction = x > w ? 1 : -1),
                        (tP.progress = x),
                        p &&
                          !ee &&
                          ((s = x && !w ? 0 : 1 === x ? 1 : 1 === w ? 2 : 3),
                          ta &&
                            ((a =
                              (!d && "none" !== tO[s + 1] && tO[s + 1]) ||
                              tO[s]),
                            (v =
                              r &&
                              ("complete" === a || "reset" === a || a in r)))),
                        eQ &&
                          (d || v) &&
                          (v || ev || !r) &&
                          (eq(eQ)
                            ? eQ(tP)
                            : tP.getTrailing(eQ).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        !ta &&
                          (!G || ee || eC
                            ? r && r.totalProgress(x, !!(ee && (tY || e)))
                            : (G._dp._time - G._start !== G._time &&
                                G.render(G._dp._time - G._start),
                              G.resetTo
                                ? G.resetTo(
                                    "totalProgress",
                                    x,
                                    r._tTime / r._tDur
                                  )
                                : ((G.vars.totalProgress = x),
                                  G.invalidate().restart()))),
                        ey)
                      ) {
                        if ((e && eb && (S.style[eb + e0.os2] = A), tb)) {
                          if (p) {
                            if (
                              ((g =
                                !e &&
                                x > w &&
                                f + 1 > m &&
                                m + 1 >= eL(tu, e0)),
                              eB)
                            ) {
                              if (!e && (i || g)) {
                                var E = tn(ey, !0),
                                  C = m - u;
                                tJ(
                                  ey,
                                  U,
                                  E.top + (e0 === Y ? C : 0) + "px",
                                  E.left + (e0 === Y ? 0 : C) + "px"
                                );
                              } else tJ(ey, S);
                            }
                            tH(i || g ? _ : O),
                              (B && x < 1 && i) ||
                                T(M + (1 !== x || g ? 0 : k));
                          }
                        } else T(eF(M + k * x));
                      }
                      !ez || o.tween || ee || eC || er.restart(!0),
                        ep &&
                          (d || (eD && x && (x < 1 || !ew))) &&
                          J(ep.targets).forEach(function (e) {
                            return e.classList[i || eD ? "add" : "remove"](
                              ep.className
                            );
                          }),
                        !ef || ta || e || ef(tP),
                        p && !ee
                          ? (ta &&
                              (v &&
                                ("complete" === a
                                  ? r.pause().totalProgress(1)
                                  : "reset" === a
                                  ? r.restart(!0).pause()
                                  : "restart" === a
                                  ? r.restart(!0)
                                  : r[a]()),
                              ef && ef(tP)),
                            (d || !ew) &&
                              (eh && d && eJ(tP, eh),
                              tw[s] && eJ(tP, tw[s]),
                              eD && (1 === x ? tP.kill(!1, 1) : (tw[s] = 0)),
                              !d && tw[(s = 1 === x ? 1 : 3)] && eJ(tP, tw[s])),
                            eK &&
                              !i &&
                              Math.abs(tP.getVelocity()) >
                                (eU(eK) ? eK : 2500) &&
                              (e$(tP.callbackAnimation),
                              G
                                ? G.progress(1)
                                : e$(r, "reverse" === a ? 1 : !x, 1)))
                          : ta && ef && !ee && ef(tP);
                    }
                    if (N) {
                      var P = eH
                        ? (m / eH.duration()) * (eH._caScrollDist || 0)
                        : m;
                      z(P + (h._isFlipped ? 1 : 0)), N(P);
                    }
                    es && es((-m / eH.duration()) * (eH._caScrollDist || 0));
                  }
                }),
                (tP.enable = function (t, r) {
                  tP.enabled ||
                    ((tP.enabled = !0),
                    tl(tu, "resize", t_),
                    tv || tl(tu, "scroll", tx),
                    tT && tl(e, "refreshInit", tT),
                    !1 !== t && ((tP.progress = tD = 0), (l = c = tA = tR())),
                    !1 !== r && tP.refresh());
                }),
                (tP.getTween = function (e) {
                  return e && o ? o.tween : G;
                }),
                (tP.setPositions = function (e, t, r, n) {
                  if (eH) {
                    var i = eH.scrollTrigger,
                      o = eH.duration(),
                      s = i.end - i.start;
                    (e = i.start + (s * e) / o), (t = i.start + (s * t) / o);
                  }
                  tP.refresh(
                    !1,
                    !1,
                    {
                      start: ej(e, r && !!tP._startClamp),
                      end: ej(t, r && !!tP._endClamp),
                    },
                    n
                  ),
                    tP.update();
                }),
                (tP.adjustPinSpacing = function (e) {
                  if (F && e) {
                    var t = F.indexOf(e0.d) + 1;
                    (F[t] = parseFloat(F[t]) + e + "px"),
                      (F[1] = parseFloat(F[1]) + e + "px"),
                      tH(F);
                  }
                }),
                (tP.disable = function (t, r) {
                  if (
                    tP.enabled &&
                    (!1 !== t && tP.revert(!0, !0),
                    (tP.enabled = tP.isActive = !1),
                    r || (G && G.pause()),
                    (ei = 0),
                    s && (s.uncache = 1),
                    tT && tc(e, "refreshInit", tT),
                    er &&
                      (er.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                    !tv)
                  ) {
                    for (var n = tm.length; n--; )
                      if (tm[n].scroller === tu && tm[n] !== tP) return;
                    tc(tu, "resize", t_), tv || tc(tu, "scroll", tx);
                  }
                }),
                (tP.kill = function (e, n) {
                  tP.disable(e, n), G && !n && G.kill(), ed && delete ty[ed];
                  var i = tm.indexOf(tP);
                  i >= 0 && tm.splice(i, 1),
                    i === en && tz > 0 && en--,
                    (i = 0),
                    tm.forEach(function (e) {
                      return e.scroller === tP.scroller && (i = 1);
                    }),
                    i || eO || (tP.scroll.rec = 0),
                    r &&
                      ((r.scrollTrigger = null),
                      e && r.revert({ kill: !1 }),
                      n || r.kill()),
                    p &&
                      [p, d, h, g].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    eS === tP && (eS = 0),
                    ey &&
                      (s && (s.uncache = 1),
                      (i = 0),
                      tm.forEach(function (e) {
                        return e.pin === ey && i++;
                      }),
                      i || (s.spacer = 0)),
                    t.onKill && t.onKill(tP);
                }),
                tm.push(tP),
                tP.enable(!1, !1),
                ec && ec(tP),
                r && r.add && !y)
              ) {
                var tX = tP.update;
                (tP.update = function () {
                  (tP.update = tX), b.cache++, u || f || tP.refresh();
                }),
                  W.delayedCall(0.01, tP.update),
                  (y = 0.01),
                  (u = f = 0);
              } else tP.refresh();
              ey && tj();
            }),
            (e.register = function (t) {
              return (
                L ||
                  ((W = t || eB()),
                  ez() && window.document && e.enable(),
                  (L = ek)),
                L
              );
            }),
            (e.defaults = function (e) {
              if (e) for (var t in e) tp[t] = e[t];
              return tp;
            }),
            (e.disable = function (e, t) {
              (ek = 0),
                tm.forEach(function (r) {
                  return r[t ? "kill" : "disable"](e);
                }),
                tc(H, "wheel", tx),
                tc(V, "scroll", tx),
                clearInterval(Q),
                tc(V, "touchcancel", eR),
                tc(U, "touchstart", eR),
                ta(tc, V, "pointerdown,touchstart,mousedown", eY),
                ta(tc, V, "pointerup,touchend,mouseup", eD),
                $.kill(),
                eH(tc);
              for (var r = 0; r < b.length; r += 3)
                tu(tc, b[r], b[r + 1]), tu(tc, b[r], b[r + 2]);
            }),
            (e.enable = function () {
              if (
                ((H = window),
                (q = (V = document).documentElement),
                (U = V.body),
                W &&
                  ((J = W.utils.toArray),
                  (Z = W.utils.clamp),
                  (eg = W.core.context || eR),
                  (el = W.core.suppressOverwrites || eR),
                  (ev = H.history.scrollRestoration || "auto"),
                  (tF = H.pageYOffset || 0),
                  W.core.globals("ScrollTrigger", e),
                  U))
              ) {
                (ek = 1),
                  ((em = document.createElement("div")).style.height = "100vh"),
                  (em.style.position = "absolute"),
                  tY(),
                  (function e() {
                    return ek && requestAnimationFrame(e);
                  })(),
                  I.register(W),
                  (e.isTouch = I.isTouch),
                  (eh =
                    I.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (ef = 1 === I.isTouch),
                  tl(H, "wheel", tx),
                  (G = [H, V, q, U]),
                  W.matchMedia
                    ? ((e.matchMedia = function (e) {
                        var t,
                          r = W.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r;
                      }),
                      W.addEventListener("matchMediaInit", function () {
                        return tM();
                      }),
                      W.addEventListener("matchMediaRevert", function () {
                        return tT();
                      }),
                      W.addEventListener("matchMedia", function () {
                        tR(0, 1), tC("matchMedia");
                      }),
                      W.matchMedia().add(
                        "(orientation: portrait)",
                        function () {
                          return tw(), tw;
                        }
                      ))
                    : console.warn("Requires GSAP 3.11.0 or later"),
                  tw(),
                  tl(V, "scroll", tx);
                var t,
                  r,
                  n = U.hasAttribute("style"),
                  i = U.style,
                  o = i.borderTopStyle,
                  s = W.core.Animation.prototype;
                for (
                  s.revert ||
                    Object.defineProperty(s, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    i.borderTopStyle = "solid",
                    t = tn(U),
                    Y.m = Math.round(t.top + Y.sc()) || 0,
                    j.m = Math.round(t.left + j.sc()) || 0,
                    o
                      ? (i.borderTopStyle = o)
                      : i.removeProperty("border-top-style"),
                    n ||
                      (U.setAttribute("style", ""), U.removeAttribute("style")),
                    Q = setInterval(tb, 250),
                    W.delayedCall(0.5, function () {
                      return (eC = 0);
                    }),
                    tl(V, "touchcancel", eR),
                    tl(U, "touchstart", eR),
                    ta(tl, V, "pointerdown,touchstart,mousedown", eY),
                    ta(tl, V, "pointerup,touchend,mouseup", eD),
                    er = W.utils.checkPrefix("transform"),
                    tX.push(er),
                    L = eP(),
                    $ = W.delayedCall(0.2, tR).pause(),
                    es = [
                      V,
                      "visibilitychange",
                      function () {
                        var e = H.innerWidth,
                          t = H.innerHeight;
                        V.hidden
                          ? ((ei = e), (eo = t))
                          : (ei !== e || eo !== t) && t_();
                      },
                      V,
                      "DOMContentLoaded",
                      tR,
                      H,
                      "load",
                      tR,
                      H,
                      "resize",
                      t_,
                    ],
                    eH(tl),
                    tm.forEach(function (e) {
                      return e.enable(0, 1);
                    }),
                    r = 0;
                  r < b.length;
                  r += 3
                )
                  tu(tc, b[r], b[r + 1]), tu(tc, b[r], b[r + 2]);
              }
            }),
            (e.config = function (t) {
              "limitCallbacks" in t && (ew = !!t.limitCallbacks);
              var r = t.syncInterval;
              (r && clearInterval(Q)) || ((Q = r) && setInterval(tb, r)),
                "ignoreMobileResize" in t &&
                  (ef = 1 === e.isTouch && t.ignoreMobileResize),
                "autoRefreshEvents" in t &&
                  (eH(tc) || eH(tl, t.autoRefreshEvents || "none"),
                  (ec = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
            }),
            (e.scrollerProxy = function (e, t) {
              var r = D(e),
                n = b.indexOf(r),
                i = eN(r);
              ~n && b.splice(n, i ? 6 : 2),
                t && (i ? x.unshift(H, t, U, t, q, t) : x.unshift(r, t));
            }),
            (e.clearMatchMedia = function (e) {
              tm.forEach(function (t) {
                return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
              });
            }),
            (e.isInViewport = function (e, t, r) {
              var n = (eV(e) ? D(e) : e).getBoundingClientRect(),
                i = n[r ? e1 : e2] * t || 0;
              return r
                ? n.right - i > 0 && n.left + i < H.innerWidth
                : n.bottom - i > 0 && n.top + i < H.innerHeight;
            }),
            (e.positionInViewport = function (e, t, r) {
              eV(e) && (e = D(e));
              var n = e.getBoundingClientRect(),
                i = n[r ? e1 : e2],
                o =
                  null == t
                    ? i / 2
                    : t in td
                    ? td[t] * i
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * i) / 100
                    : parseFloat(t) || 0;
              return r
                ? (n.left + o) / H.innerWidth
                : (n.top + o) / H.innerHeight;
            }),
            (e.killAll = function (e) {
              if (
                (tm.slice(0).forEach(function (e) {
                  return "ScrollSmoother" !== e.vars.id && e.kill();
                }),
                !0 !== e)
              ) {
                var t = tO.killAll || [];
                (tO = {}),
                  t.forEach(function (e) {
                    return e();
                  });
              }
            }),
            e
          );
        })();
      (t0.version = "3.12.7"),
        (t0.saveStyles = function (e) {
          return e
            ? J(e).forEach(function (e) {
                if (e && e.style) {
                  var t = tP.indexOf(e);
                  t >= 0 && tP.splice(t, 5),
                    tP.push(
                      e,
                      e.style.cssText,
                      e.getBBox && e.getAttribute("transform"),
                      W.core.getCache(e),
                      eg()
                    );
                }
              })
            : tP;
        }),
        (t0.revert = function (e, t) {
          return tM(!e, t);
        }),
        (t0.create = function (e, t) {
          return new t0(e, t);
        }),
        (t0.refresh = function (e) {
          return e ? t_(!0) : (L || t0.register()) && tR(!0);
        }),
        (t0.update = function (e) {
          return ++b.cache && tB(!0 === e ? 2 : 0);
        }),
        (t0.clearScrollMemory = tk),
        (t0.maxScroll = function (e, t) {
          return eL(e, t ? j : Y);
        }),
        (t0.getScrollFunc = function (e, t) {
          return R(D(e), t ? j : Y);
        }),
        (t0.getById = function (e) {
          return ty[e];
        }),
        (t0.getAll = function () {
          return tm.filter(function (e) {
            return "ScrollSmoother" !== e.vars.id;
          });
        }),
        (t0.isScrolling = function () {
          return !!eM;
        }),
        (t0.snapDirectional = ts),
        (t0.addEventListener = function (e, t) {
          var r = tO[e] || (tO[e] = []);
          ~r.indexOf(t) || r.push(t);
        }),
        (t0.removeEventListener = function (e, t) {
          var r = tO[e],
            n = r && r.indexOf(t);
          n >= 0 && r.splice(n, 1);
        }),
        (t0.batch = function (e, t) {
          var r,
            n = [],
            i = {},
            o = t.interval || 0.016,
            s = t.batchMax || 1e9,
            a = function (e, t) {
              var r = [],
                n = [],
                i = W.delayedCall(o, function () {
                  t(r, n), (r = []), (n = []);
                }).pause();
              return function (e) {
                r.length || i.restart(!0),
                  r.push(e.trigger),
                  n.push(e),
                  s <= r.length && i.progress(1);
              };
            };
          for (r in t)
            i[r] =
              "on" === r.substr(0, 2) && eq(t[r]) && "onRefreshInit" !== r
                ? a(r, t[r])
                : t[r];
          return (
            eq(s) &&
              ((s = s()),
              tl(t0, "refresh", function () {
                return (s = t.batchMax());
              })),
            J(e).forEach(function (e) {
              var t = {};
              for (r in i) t[r] = i[r];
              (t.trigger = e), n.push(t0.create(t));
            }),
            n
          );
        });
      var t1,
        t2 = function (e, t, r, n) {
          return (
            t > n ? e(n) : t < 0 && e(0),
            r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
          );
        },
        t3 = function e(t, r) {
          !0 === r
            ? t.style.removeProperty("touch-action")
            : (t.style.touchAction =
                !0 === r
                  ? "auto"
                  : r
                  ? "pan-" + r + (I.isTouch ? " pinch-zoom" : "")
                  : "none"),
            t === q && e(U, r);
        },
        t5 = { auto: 1, scroll: 1 },
        t6 = function (e) {
          var t,
            r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            s = o._gsap || W.core.getCache(o),
            a = eP();
          if (!s._isScrollT || a - s._isScrollT > 2e3) {
            for (
              ;
              o &&
              o !== U &&
              ((o.scrollHeight <= o.clientHeight &&
                o.scrollWidth <= o.clientWidth) ||
                !(t5[(t = te(o)).overflowY] || t5[t.overflowX]));

            )
              o = o.parentNode;
            (s._isScroll =
              o &&
              o !== n &&
              !eN(o) &&
              (t5[(t = te(o)).overflowY] || t5[t.overflowX])),
              (s._isScrollT = a);
          }
          (s._isScroll || "x" === i) &&
            (r.stopPropagation(), (r._gsapAllow = !0));
        },
        t9 = function (e, t, r, n) {
          return I.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: (n = n && t6),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return r && tl(V, I.eventTypes[0], t8, !1, !0);
            },
            onDisable: function () {
              return tc(V, I.eventTypes[0], t8, !0);
            },
          });
        },
        t4 = /(input|label|select|textarea)/i,
        t8 = function (e) {
          var t = t4.test(e.target.tagName);
          (t || t1) && ((e._gsapAllow = !0), (t1 = t));
        },
        t7 = function (e) {
          eG(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = "wheel,touch"),
            (e.debounce = !!e.debounce),
            (e.id = e.id || "normalizer");
          var t,
            r,
            n,
            i,
            o,
            s,
            a,
            l,
            c = e,
            u = c.normalizeScrollX,
            f = c.momentum,
            p = c.allowNestedScroll,
            d = c.onRelease,
            h = D(e.target) || q,
            g = W.core.globals().ScrollSmoother,
            v = g && g.get(),
            m =
              eh &&
              ((e.content && D(e.content)) ||
                (v && !1 !== e.content && !v.smooth() && v.content())),
            y = R(h, Y),
            x = R(h, j),
            w = 1,
            _ =
              (I.isTouch && H.visualViewport
                ? H.visualViewport.scale * H.visualViewport.width
                : H.outerWidth) / H.innerWidth,
            O = 0,
            E = eq(f)
              ? function () {
                  return f(t);
                }
              : function () {
                  return f || 2.8;
                },
            S = t9(h, e.type, !0, p),
            C = function () {
              return (i = !1);
            },
            P = eR,
            T = eR,
            M = function () {
              (r = eL(h, Y)),
                (T = Z(eh ? 1 : 0, r)),
                u && (P = Z(0, eL(h, j))),
                (n = tA);
            },
            k = function () {
              (m._gsap.y = eF(parseFloat(m._gsap.y) + y.offset) + "px"),
                (m.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  parseFloat(m._gsap.y) +
                  ", 0, 1)"),
                (y.offset = y.cacheID = 0);
            },
            A = function () {
              if (i) {
                requestAnimationFrame(C);
                var e = eF(t.deltaY / 2),
                  r = T(y.v - e);
                if (m && r !== y.v + y.offset) {
                  y.offset = r - y.v;
                  var n = eF((parseFloat(m && m._gsap.y) || 0) - y.offset);
                  (m.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    n +
                    ", 0, 1)"),
                    (m._gsap.y = n + "px"),
                    (y.cacheID = b.cache),
                    tB();
                }
                return !0;
              }
              y.offset && k(), (i = !0);
            },
            F = function () {
              M(),
                o.isActive() &&
                  o.vars.scrollY > r &&
                  (y() > r ? o.progress(1) && y(r) : o.resetTo("scrollY", r));
            };
          return (
            m && W.set(m, { y: "+=0" }),
            (e.ignoreCheck = function (e) {
              return (
                (eh && "touchmove" === e.type && A(e)) ||
                (w > 1.05 && "touchstart" !== e.type) ||
                t.isGesturing ||
                (e.touches && e.touches.length > 1)
              );
            }),
            (e.onPress = function () {
              i = !1;
              var e = w;
              (w = eF(((H.visualViewport && H.visualViewport.scale) || 1) / _)),
                o.pause(),
                e !== w && t3(h, w > 1.01 || (!u && "x")),
                (s = x()),
                (a = y()),
                M(),
                (n = tA);
            }),
            (e.onRelease = e.onGestureStart =
              function (e, t) {
                if ((y.offset && k(), t)) {
                  b.cache++;
                  var n,
                    i,
                    s = E();
                  u &&
                    ((i = (n = x()) + -(0.05 * s * e.velocityX) / 0.227),
                    (s *= t2(x, n, i, eL(h, j))),
                    (o.vars.scrollX = P(i))),
                    (i = (n = y()) + -(0.05 * s * e.velocityY) / 0.227),
                    (s *= t2(y, n, i, eL(h, Y))),
                    (o.vars.scrollY = T(i)),
                    o.invalidate().duration(s).play(0.01),
                    ((eh && o.vars.scrollY >= r) || n >= r - 1) &&
                      W.to({}, { onUpdate: F, duration: s });
                } else l.restart(!0);
                d && d(e);
              }),
            (e.onWheel = function () {
              o._ts && o.pause(), eP() - O > 1e3 && ((n = 0), (O = eP()));
            }),
            (e.onChange = function (e, t, r, i, o) {
              if (
                (tA !== n && M(),
                t &&
                  u &&
                  x(P(i[2] === t ? s + (e.startX - e.x) : x() + t - i[1])),
                r)
              ) {
                y.offset && k();
                var l = o[2] === r,
                  c = l ? a + e.startY - e.y : y() + r - o[1],
                  f = T(c);
                l && c !== f && (a += f - c), y(f);
              }
              (r || t) && tB();
            }),
            (e.onEnable = function () {
              t3(h, !u && "x"),
                t0.addEventListener("refresh", F),
                tl(H, "resize", F),
                y.smooth &&
                  ((y.target.style.scrollBehavior = "auto"),
                  (y.smooth = x.smooth = !1)),
                S.enable();
            }),
            (e.onDisable = function () {
              t3(h, !0),
                tc(H, "resize", F),
                t0.removeEventListener("refresh", F),
                S.kill();
            }),
            (e.lockAxis = !1 !== e.lockAxis),
            ((t = new I(e)).iOS = eh),
            eh && !y() && y(1),
            eh && W.ticker.add(eR),
            (l = t._dc),
            (o = W.to(t, {
              ease: "power4",
              paused: !0,
              inherit: !1,
              scrollX: u ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              modifiers: {
                scrollY: tZ(y, y(), function () {
                  return o.pause();
                }),
              },
              onUpdate: tB,
              onComplete: l.vars.onComplete,
            })),
            t
          );
        };
      (t0.sort = function (e) {
        if (eq(e)) return tm.sort(e);
        var t = H.pageYOffset || 0;
        return (
          t0.getAll().forEach(function (e) {
            return (e._sortY = e.trigger
              ? t + e.trigger.getBoundingClientRect().top
              : e.start + H.innerHeight);
          }),
          tm.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  (e.vars.containerAnimation ? 1e6 : e._sortY) -
                  ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                    -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          )
        );
      }),
        (t0.observe = function (e) {
          return new I(e);
        }),
        (t0.normalizeScroll = function (e) {
          if (void 0 === e) return eu;
          if (!0 === e && eu) return eu.enable();
          if (!1 === e) {
            eu && eu.kill(), (eu = e);
            return;
          }
          var t = e instanceof I ? e : t7(e);
          return (
            eu && eu.target === t.target && eu.kill(),
            eN(t.target) && (eu = t),
            t
          );
        }),
        (t0.core = {
          _getVelocityProp: F,
          _inputObserver: t9,
          _scrollers: b,
          _proxies: x,
          bridge: {
            ss: function () {
              eM || tC("scrollStart"), (eM = eP());
            },
            ref: function () {
              return ee;
            },
          },
        }),
        eB() && W.registerPlugin(t0);
    },
    11478: (e, t, r) => {
      "use strict";
      r.d(t, { Ay: () => ex, os: () => ex });
      var n,
        i,
        o,
        s,
        a,
        l,
        c,
        u = r(63091),
        f = {},
        p = 180 / Math.PI,
        d = Math.PI / 180,
        h = Math.atan2,
        g = /([A-Z])/g,
        v = /(left|right|width|margin|padding|x)/i,
        m = /[\s,\(]\S/,
        y = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        b = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        x = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        w = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t
          );
        },
        _ = function (e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        O = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        E = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        S = function (e, t, r) {
          return (e.style[t] = r);
        },
        C = function (e, t, r) {
          return e.style.setProperty(t, r);
        },
        P = function (e, t, r) {
          return (e._gsap[t] = r);
        },
        T = function (e, t, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        M = function (e, t, r, n, i) {
          var o = e._gsap;
          (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
        },
        k = function (e, t, r, n, i) {
          var o = e._gsap;
          (o[t] = r), o.renderTransform(i, o);
        },
        A = "transform",
        j = A + "Origin",
        Y = function e(t, r) {
          var n = this,
            i = this.target,
            o = i.style,
            s = i._gsap;
          if (t in f && o) {
            if (((this.tfm = this.tfm || {}), "transform" === t))
              return y.transform.split(",").forEach(function (t) {
                return e.call(n, t, r);
              });
            if (
              (~(t = y[t] || t).indexOf(",")
                ? t.split(",").forEach(function (e) {
                    return (n.tfm[e] = Z(i, e));
                  })
                : (this.tfm[t] = s.x ? s[t] : Z(i, t)),
              t === j && (this.tfm.zOrigin = s.zOrigin),
              this.props.indexOf(A) >= 0)
            )
              return;
            s.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(j, r, "")),
              (t = A);
          }
          (o || r) && this.props.push(t, r, o[t]);
        },
        D = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        R = function () {
          var e,
            t,
            r = this.props,
            n = this.target,
            i = n.style,
            o = n._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? 2 === r[e + 1]
                ? n[r[e]](r[e + 2])
                : (n[r[e]] = r[e + 2])
              : r[e + 2]
              ? (i[r[e]] = r[e + 2])
              : i.removeProperty(
                  "--" === r[e].substr(0, 2)
                    ? r[e]
                    : r[e].replace(g, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (t in this.tfm) o[t] = this.tfm[t];
            o.svg &&
              (o.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = l()) && e.isStart) ||
                i[A] ||
                (D(i),
                o.zOrigin &&
                  i[j] &&
                  ((i[j] += " " + o.zOrigin + "px"),
                  (o.zOrigin = 0),
                  o.renderTransform()),
                (o.uncache = 1));
          }
        },
        F = function (e, t) {
          var r = { target: e, props: [], revert: R, save: Y };
          return (
            e._gsap || u.os.core.getCache(e),
            t &&
              e.style &&
              e.nodeType &&
              t.split(",").forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        z = function (e, t) {
          var r = n.createElementNS
            ? n.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : n.createElement(e);
          return r && r.style ? r : n.createElement(e);
        },
        B = function e(t, r, n) {
          var i = getComputedStyle(t);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(g, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && e(t, X(r) || r, 1)) ||
            ""
          );
        },
        N = "O,Moz,ms,Ms,Webkit".split(","),
        X = function (e, t, r) {
          var n = (t || s).style,
            i = 5;
          if (e in n && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            i-- && !(N[i] + e in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? N[i] : "") + e;
        },
        I = function () {
          "undefined" != typeof window &&
            window.document &&
            ((i = (n = window.document).documentElement),
            (s = z("div") || { style: {} }),
            z("div"),
            (j = (A = X(A)) + "Origin"),
            (s.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (c = !!X("perspective")),
            (l = u.os.core.reverting),
            (o = 1));
        },
        W = function (e) {
          var t,
            r = e.ownerSVGElement,
            n = z(
              "svg",
              (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
            ),
            o = e.cloneNode(!0);
          (o.style.display = "block"), n.appendChild(o), i.appendChild(n);
          try {
            t = o.getBBox();
          } catch (e) {}
          return n.removeChild(o), i.removeChild(n), t;
        },
        L = function (e, t) {
          for (var r = t.length; r--; )
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
        },
        H = function (e) {
          var t, r;
          try {
            t = e.getBBox();
          } catch (n) {
            (t = W(e)), (r = 1);
          }
          return (
            (t && (t.width || t.height)) || r || (t = W(e)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +L(e, ["x", "cx", "x1"]) || 0,
                  y: +L(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        V = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && H(e));
        },
        q = function (e, t) {
          if (t) {
            var r,
              n = e.style;
            t in f && t !== j && (t = A),
              n.removeProperty
                ? (("ms" === (r = t.substr(0, 2)) ||
                    "webkit" === t.substr(0, 6)) &&
                    (t = "-" + t),
                  n.removeProperty(
                    "--" === r ? t : t.replace(g, "-$1").toLowerCase()
                  ))
                : n.removeAttribute(t);
          }
        },
        U = function (e, t, r, n, i, o) {
          var s = new u.J7(e._pt, t, r, 0, 1, o ? E : O);
          return (e._pt = s), (s.b = n), (s.e = i), e._props.push(r), s;
        },
        G = { deg: 1, rad: 1, turn: 1 },
        $ = { grid: 1, flex: 1 },
        J = function e(t, r, i, o) {
          var a,
            l,
            c,
            p,
            d = parseFloat(i) || 0,
            h = (i + "").trim().substr((d + "").length) || "px",
            g = s.style,
            m = v.test(r),
            y = "svg" === t.tagName.toLowerCase(),
            b = (y ? "client" : "offset") + (m ? "Width" : "Height"),
            x = "px" === o,
            w = "%" === o;
          if (o === h || !d || G[o] || G[h]) return d;
          if (
            ("px" === h || x || (d = e(t, r, i, "px")),
            (p = t.getCTM && V(t)),
            (w || "%" === h) && (f[r] || ~r.indexOf("adius")))
          )
            return (
              (a = p ? t.getBBox()[m ? "width" : "height"] : t[b]),
              (0, u.E_)(w ? (d / a) * 100 : (d / 100) * a)
            );
          if (
            ((g[m ? "width" : "height"] = 100 + (x ? h : o)),
            (l =
              ("rem" !== o && ~r.indexOf("adius")) ||
              ("em" === o && t.appendChild && !y)
                ? t
                : t.parentNode),
            p && (l = (t.ownerSVGElement || {}).parentNode),
            (l && l !== n && l.appendChild) || (l = n.body),
            (c = l._gsap) &&
              w &&
              c.width &&
              m &&
              c.time === u.au.time &&
              !c.uncache)
          )
            return (0, u.E_)((d / c.width) * 100);
          if (w && ("height" === r || "width" === r)) {
            var _ = t.style[r];
            (t.style[r] = 100 + o), (a = t[b]), _ ? (t.style[r] = _) : q(t, r);
          } else
            (w || "%" === h) &&
              !$[B(l, "display")] &&
              (g.position = B(t, "position")),
              l === t && (g.position = "static"),
              l.appendChild(s),
              (a = s[b]),
              l.removeChild(s),
              (g.position = "absolute");
          return (
            m && w && (((c = (0, u.a0)(l)).time = u.au.time), (c.width = l[b])),
            (0, u.E_)(x ? (a * d) / 100 : a && d ? (100 / a) * d : 0)
          );
        },
        Z = function (e, t, r, n) {
          var i;
          return (
            o || I(),
            t in y &&
              "transform" !== t &&
              ~(t = y[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            f[t] && "transform" !== t
              ? ((i = ec(e, n)),
                (i =
                  "transformOrigin" !== t
                    ? i[t]
                    : i.svg
                    ? i.origin
                    : eu(B(e, j)) + " " + i.zOrigin + "px"))
              : (!(i = e.style[t]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (er[t] && er[t](e, t, r)) ||
                  B(e, t) ||
                  (0, u.n)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? J(e, t, i, r) + r : i
          );
        },
        K = function (e, t, r, n) {
          if (!r || "none" === r) {
            var i = X(t, e, 1),
              o = i && B(e, i, 1);
            o && o !== r
              ? ((t = i), (r = o))
              : "borderColor" === t && (r = B(e, "borderTopColor"));
          }
          var s,
            a,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y = new u.J7(this._pt, e.style, t, 0, 1, u.l1),
            b = 0,
            x = 0;
          if (
            ((y.b = r),
            (y.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((p = e.style[t]),
              (e.style[t] = n),
              (n = B(e, t) || n),
              p ? (e.style[t] = p) : q(e, t)),
            (s = [r, n]),
            (0, u.Uc)(s),
            (r = s[0]),
            (n = s[1]),
            (l = r.match(u.vM) || []),
            (n.match(u.vM) || []).length)
          ) {
            for (; (a = u.vM.exec(n)); )
              (d = a[0]),
                (g = n.substring(b, a.index)),
                f
                  ? (f = (f + 1) % 5)
                  : ("rgba(" === g.substr(-5) || "hsla(" === g.substr(-5)) &&
                    (f = 1),
                d !== (p = l[x++] || "") &&
                  ((c = parseFloat(p) || 0),
                  (m = p.substr((c + "").length)),
                  "=" === d.charAt(1) && (d = (0, u.B0)(c, d) + m),
                  (h = parseFloat(d)),
                  (v = d.substr((h + "").length)),
                  (b = u.vM.lastIndex - v.length),
                  v ||
                    ((v = v || u.Yz.units[t] || m),
                    b !== n.length || ((n += v), (y.e += v))),
                  m !== v && (c = J(e, t, p, v) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: g || 1 === x ? g : ",",
                    s: c,
                    c: h - c,
                    m: (f && f < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            y.c = b < n.length ? n.substring(b, n.length) : "";
          } else y.r = "display" === t && "none" === n ? E : O;
          return u.Ks.test(n) && (y.e = 0), (this._pt = y), y;
        },
        Q = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        ee = function (e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((e = r), (r = n), (n = e)),
            (t[0] = Q[r] || r),
            (t[1] = Q[n] || n),
            t.join(" ")
          );
        },
        et = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r,
              n,
              i,
              o = t.t,
              s = o.style,
              a = t.u,
              l = o._gsap;
            if ("all" === a || !0 === a) (s.cssText = ""), (n = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                f[(r = a[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? j : A)),
                  q(o, r);
            n &&
              (q(o, A),
              l &&
                (l.svg && o.removeAttribute("transform"),
                (s.scale = s.rotate = s.translate = "none"),
                ec(o, 1),
                (l.uncache = 1),
                D(s)));
          }
        },
        er = {
          clearProps: function (e, t, r, n, i) {
            if ("isFromStart" !== i.data) {
              var o = (e._pt = new u.J7(e._pt, t, r, 0, 0, et));
              return (
                (o.u = n), (o.pr = -10), (o.tween = i), e._props.push(r), 1
              );
            }
          },
        },
        en = [1, 0, 0, 1, 0, 0],
        ei = {},
        eo = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        es = function (e) {
          var t = B(e, A);
          return eo(t) ? en : t.substr(7).match(u.vX).map(u.E_);
        },
        ea = function (e, t) {
          var r,
            n,
            o,
            s,
            a = e._gsap || (0, u.a0)(e),
            l = e.style,
            c = es(e);
          return a.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (c = [
                (o = e.transform.baseVal.consolidate().matrix).a,
                o.b,
                o.c,
                o.d,
                o.e,
                o.f,
              ]).join(",")
              ? en
              : c
            : (c !== en ||
                e.offsetParent ||
                e === i ||
                a.svg ||
                ((o = l.display),
                (l.display = "block"),
                ((r = e.parentNode) &&
                  (e.offsetParent || e.getBoundingClientRect().width)) ||
                  ((s = 1), (n = e.nextElementSibling), i.appendChild(e)),
                (c = es(e)),
                o ? (l.display = o) : q(e, "display"),
                s &&
                  (n
                    ? r.insertBefore(e, n)
                    : r
                    ? r.appendChild(e)
                    : i.removeChild(e))),
              t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        el = function (e, t, r, n, i, o) {
          var s,
            a,
            l,
            c,
            u = e._gsap,
            f = i || ea(e, !0),
            p = u.xOrigin || 0,
            d = u.yOrigin || 0,
            h = u.xOffset || 0,
            g = u.yOffset || 0,
            v = f[0],
            m = f[1],
            y = f[2],
            b = f[3],
            x = f[4],
            w = f[5],
            _ = t.split(" "),
            O = parseFloat(_[0]) || 0,
            E = parseFloat(_[1]) || 0;
          r
            ? f !== en &&
              (a = v * b - m * y) &&
              ((l = (b / a) * O + (-y / a) * E + (y * w - b * x) / a),
              (c = (-m / a) * O + (v / a) * E - (v * w - m * x) / a),
              (O = l),
              (E = c))
            : ((O =
                (s = H(e)).x + (~_[0].indexOf("%") ? (O / 100) * s.width : O)),
              (E =
                s.y +
                (~(_[1] || _[0]).indexOf("%") ? (E / 100) * s.height : E))),
            n || (!1 !== n && u.smooth)
              ? ((x = O - p),
                (w = E - d),
                (u.xOffset = h + (x * v + w * y) - x),
                (u.yOffset = g + (x * m + w * b) - w))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = O),
            (u.yOrigin = E),
            (u.smooth = !!n),
            (u.origin = t),
            (u.originIsAbsolute = !!r),
            (e.style[j] = "0px 0px"),
            o &&
              (U(o, u, "xOrigin", p, O),
              U(o, u, "yOrigin", d, E),
              U(o, u, "xOffset", h, u.xOffset),
              U(o, u, "yOffset", g, u.yOffset)),
            e.setAttribute("data-svg-origin", O + " " + E);
        },
        ec = function (e, t) {
          var r = e._gsap || new u.n6(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n,
            i,
            o,
            s,
            a,
            l,
            f,
            g,
            v,
            m,
            y,
            b,
            x,
            w,
            _,
            O,
            E,
            S,
            C,
            P,
            T,
            M,
            k,
            Y,
            D,
            R,
            F,
            z,
            N,
            X,
            I,
            W,
            L = e.style,
            H = r.scaleX < 0,
            q = getComputedStyle(e),
            U = B(e, j) || "0";
          return (
            (n = i = o = l = f = g = v = m = y = 0),
            (s = a = 1),
            (r.svg = !!(e.getCTM && V(e))),
            q.translate &&
              (("none" !== q.translate ||
                "none" !== q.scale ||
                "none" !== q.rotate) &&
                (L[A] =
                  ("none" !== q.translate
                    ? "translate3d(" +
                      (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") +
                  ("none" !== q.scale
                    ? "scale(" + q.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== q[A] ? q[A] : "")),
              (L.scale = L.rotate = L.translate = "none")),
            (w = ea(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((D = e.getBBox()),
                  (U = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
                  (Y = ""))
                : (Y = !t && e.getAttribute("data-svg-origin")),
              el(e, Y || U, !!Y || r.originIsAbsolute, !1 !== r.smooth, w)),
            (b = r.xOrigin || 0),
            (x = r.yOrigin || 0),
            w !== en &&
              ((S = w[0]),
              (C = w[1]),
              (P = w[2]),
              (T = w[3]),
              (n = M = w[4]),
              (i = k = w[5]),
              6 === w.length
                ? ((s = Math.sqrt(S * S + C * C)),
                  (a = Math.sqrt(T * T + P * P)),
                  (l = S || C ? h(C, S) * p : 0),
                  (v = P || T ? h(P, T) * p + l : 0) &&
                    (a *= Math.abs(Math.cos(v * d))),
                  r.svg &&
                    ((n -= b - (b * S + x * P)), (i -= x - (b * C + x * T))))
                : ((W = w[6]),
                  (X = w[7]),
                  (F = w[8]),
                  (z = w[9]),
                  (N = w[10]),
                  (I = w[11]),
                  (n = w[12]),
                  (i = w[13]),
                  (o = w[14]),
                  (f = (_ = h(W, N)) * p),
                  _ &&
                    ((Y = M * (O = Math.cos(-_)) + F * (E = Math.sin(-_))),
                    (D = k * O + z * E),
                    (R = W * O + N * E),
                    (F = -(M * E) + F * O),
                    (z = -(k * E) + z * O),
                    (N = -(W * E) + N * O),
                    (I = -(X * E) + I * O),
                    (M = Y),
                    (k = D),
                    (W = R)),
                  (g = (_ = h(-P, N)) * p),
                  _ &&
                    ((Y = S * (O = Math.cos(-_)) - F * (E = Math.sin(-_))),
                    (D = C * O - z * E),
                    (R = P * O - N * E),
                    (I = T * E + I * O),
                    (S = Y),
                    (C = D),
                    (P = R)),
                  (l = (_ = h(C, S)) * p),
                  _ &&
                    ((Y = S * (O = Math.cos(_)) + C * (E = Math.sin(_))),
                    (D = M * O + k * E),
                    (C = C * O - S * E),
                    (k = k * O - M * E),
                    (S = Y),
                    (M = D)),
                  f &&
                    Math.abs(f) + Math.abs(l) > 359.9 &&
                    ((f = l = 0), (g = 180 - g)),
                  (s = (0, u.E_)(Math.sqrt(S * S + C * C + P * P))),
                  (a = (0, u.E_)(Math.sqrt(k * k + W * W))),
                  (v = Math.abs((_ = h(M, k))) > 2e-4 ? _ * p : 0),
                  (y = I ? 1 / (I < 0 ? -I : I) : 0)),
              r.svg &&
                ((Y = e.getAttribute("transform")),
                (r.forceCSS = e.setAttribute("transform", "") || !eo(B(e, A))),
                Y && e.setAttribute("transform", Y))),
            Math.abs(v) > 90 &&
              270 > Math.abs(v) &&
              (H
                ? ((s *= -1),
                  (v += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (v += v <= 0 ? 180 : -180))),
            (t = t || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!t && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!t && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = o + "px"),
            (r.scaleX = (0, u.E_)(s)),
            (r.scaleY = (0, u.E_)(a)),
            (r.rotation = (0, u.E_)(l) + "deg"),
            (r.rotationX = (0, u.E_)(f) + "deg"),
            (r.rotationY = (0, u.E_)(g) + "deg"),
            (r.skewX = v + "deg"),
            (r.skewY = m + "deg"),
            (r.transformPerspective = y + "px"),
            (r.zOrigin =
              parseFloat(U.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
              (L[j] = eu(U)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = u.Yz.force3D),
            (r.renderTransform = r.svg ? eg : c ? eh : ep),
            (r.uncache = 0),
            r
          );
        },
        eu = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        ef = function (e, t, r) {
          var n = (0, u.l_)(t);
          return (
            (0, u.E_)(parseFloat(t) + parseFloat(J(e, "x", r + "px", n))) + n
          );
        },
        ep = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            eh(e, t);
        },
        ed = "0deg",
        eh = function (e, t) {
          var r = t || this,
            n = r.xPercent,
            i = r.yPercent,
            o = r.x,
            s = r.y,
            a = r.z,
            l = r.rotation,
            c = r.rotationY,
            u = r.rotationX,
            f = r.skewX,
            p = r.skewY,
            h = r.scaleX,
            g = r.scaleY,
            v = r.transformPerspective,
            m = r.force3D,
            y = r.target,
            b = r.zOrigin,
            x = "",
            w = ("auto" === m && e && 1 !== e) || !0 === m;
          if (b && (u !== ed || c !== ed)) {
            var _,
              O = parseFloat(c) * d,
              E = Math.sin(O),
              S = Math.cos(O);
            (o = ef(y, o, -(E * (_ = Math.cos((O = parseFloat(u) * d))) * b))),
              (s = ef(y, s, -(-Math.sin(O) * b))),
              (a = ef(y, a, -(S * _ * b) + b));
          }
          "0px" !== v && (x += "perspective(" + v + ") "),
            (n || i) && (x += "translate(" + n + "%, " + i + "%) "),
            (w || "0px" !== o || "0px" !== s || "0px" !== a) &&
              (x +=
                "0px" !== a || w
                  ? "translate3d(" + o + ", " + s + ", " + a + ") "
                  : "translate(" + o + ", " + s + ") "),
            l !== ed && (x += "rotate(" + l + ") "),
            c !== ed && (x += "rotateY(" + c + ") "),
            u !== ed && (x += "rotateX(" + u + ") "),
            (f !== ed || p !== ed) && (x += "skew(" + f + ", " + p + ") "),
            (1 !== h || 1 !== g) && (x += "scale(" + h + ", " + g + ") "),
            (y.style[A] = x || "translate(0, 0)");
        },
        eg = function (e, t) {
          var r,
            n,
            i,
            o,
            s,
            a = t || this,
            l = a.xPercent,
            c = a.yPercent,
            f = a.x,
            p = a.y,
            h = a.rotation,
            g = a.skewX,
            v = a.skewY,
            m = a.scaleX,
            y = a.scaleY,
            b = a.target,
            x = a.xOrigin,
            w = a.yOrigin,
            _ = a.xOffset,
            O = a.yOffset,
            E = a.forceCSS,
            S = parseFloat(f),
            C = parseFloat(p);
          (h = parseFloat(h)),
            (g = parseFloat(g)),
            (v = parseFloat(v)) && ((g += v = parseFloat(v)), (h += v)),
            h || g
              ? ((h *= d),
                (g *= d),
                (r = Math.cos(h) * m),
                (n = Math.sin(h) * m),
                (i = -(Math.sin(h - g) * y)),
                (o = Math.cos(h - g) * y),
                g &&
                  ((v *= d),
                  (i *= s = Math.sqrt(1 + (s = Math.tan(g - v)) * s)),
                  (o *= s),
                  v &&
                    ((r *= s = Math.sqrt(1 + (s = Math.tan(v)) * s)),
                    (n *= s))),
                (r = (0, u.E_)(r)),
                (n = (0, u.E_)(n)),
                (i = (0, u.E_)(i)),
                (o = (0, u.E_)(o)))
              : ((r = m), (o = y), (n = i = 0)),
            ((S && !~(f + "").indexOf("px")) ||
              (C && !~(p + "").indexOf("px"))) &&
              ((S = J(b, "x", f, "px")), (C = J(b, "y", p, "px"))),
            (x || w || _ || O) &&
              ((S = (0, u.E_)(S + x - (x * r + w * i) + _)),
              (C = (0, u.E_)(C + w - (x * n + w * o) + O))),
            (l || c) &&
              ((s = b.getBBox()),
              (S = (0, u.E_)(S + (l / 100) * s.width)),
              (C = (0, u.E_)(C + (c / 100) * s.height))),
            (s =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              o +
              "," +
              S +
              "," +
              C +
              ")"),
            b.setAttribute("transform", s),
            E && (b.style[A] = s);
        },
        ev = function (e, t, r, n, i) {
          var o,
            s,
            a = (0, u.vQ)(i),
            l = parseFloat(i) * (a && ~i.indexOf("rad") ? p : 1) - n,
            c = n + l + "deg";
          return (
            a &&
              ("short" === (o = i.split("_")[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === o && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = s = new u.J7(e._pt, t, r, n, l, x)),
            (s.e = c),
            (s.u = "deg"),
            e._props.push(r),
            s
          );
        },
        em = function (e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        },
        ey = function (e, t, r) {
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            p = em({}, r._gsap),
            d = r.style;
          for (i in (p.svg
            ? ((o = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (d[A] = t),
              (n = ec(r, 1)),
              q(r, A),
              r.setAttribute("transform", o))
            : ((o = getComputedStyle(r)[A]),
              (d[A] = t),
              (n = ec(r, 1)),
              (d[A] = o)),
          f))
            (o = p[i]) !== (s = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((a =
                (0, u.l_)(o) !== (c = (0, u.l_)(s))
                  ? J(r, i, o, c)
                  : parseFloat(o)),
              (l = parseFloat(s)),
              (e._pt = new u.J7(e._pt, n, i, a, l - a, b)),
              (e._pt.u = c || 0),
              e._props.push(i));
          em(n, p);
        };
      (0, u.fA)("padding,margin,Width,Radius", function (e, t) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          o = (
            t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return t < 2 ? e + r : "border" + r + e;
          });
        er[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
          var s, a;
          if (arguments.length < 4)
            return 5 ===
              (a = (s = o.map(function (t) {
                return Z(e, t, r);
              })).join(" ")).split(s[0]).length
              ? s[0]
              : a;
          (s = (n + "").split(" ")),
            (a = {}),
            o.forEach(function (e, t) {
              return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
            }),
            e.init(t, a, i);
        };
      });
      var eb = {
        name: "css",
        register: I,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, r, n, i) {
          var s,
            a,
            l,
            c,
            p,
            d,
            h,
            g,
            v,
            x,
            O,
            E,
            S,
            C,
            P,
            T,
            M = this._props,
            k = e.style,
            Y = r.vars.startAt;
          for (h in (o || I(),
          (this.styles = this.styles || F(e)),
          (T = this.styles.props),
          (this.tween = r),
          t))
            if (
              "autoRound" !== h &&
              ((a = t[h]), !(u.wU[h] && (0, u.Zm)(h, t, r, n, e, i)))
            ) {
              if (
                ((p = typeof a),
                (d = er[h]),
                "function" === p && (p = typeof (a = a.call(r, n, e, i))),
                "string" === p && ~a.indexOf("random(") && (a = (0, u.Vy)(a)),
                d)
              )
                d(this, e, h, a, r) && (P = 1);
              else if ("--" === h.substr(0, 2))
                (s = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
                  (a += ""),
                  (u.qA.lastIndex = 0),
                  u.qA.test(s) || ((g = (0, u.l_)(s)), (v = (0, u.l_)(a))),
                  v ? g !== v && (s = J(e, h, s, v) + v) : g && (a += g),
                  this.add(k, "setProperty", s, a, n, i, 0, 0, h),
                  M.push(h),
                  T.push(h, 0, k[h]);
              else if ("undefined" !== p) {
                if (
                  (Y && h in Y
                    ? ((s =
                        "function" == typeof Y[h]
                          ? Y[h].call(r, n, e, i)
                          : Y[h]),
                      (0, u.vQ)(s) &&
                        ~s.indexOf("random(") &&
                        (s = (0, u.Vy)(s)),
                      (0, u.l_)(s + "") ||
                        "auto" === s ||
                        (s += u.Yz.units[h] || (0, u.l_)(Z(e, h)) || ""),
                      "=" === (s + "").charAt(1) && (s = Z(e, h)))
                    : (s = Z(e, h)),
                  (c = parseFloat(s)),
                  (x =
                    "string" === p && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (l = parseFloat(a)),
                  h in y &&
                    ("autoAlpha" === h &&
                      (1 === c &&
                        "hidden" === Z(e, "visibility") &&
                        l &&
                        (c = 0),
                      T.push("visibility", 0, k.visibility),
                      U(
                        this,
                        k,
                        "visibility",
                        c ? "inherit" : "hidden",
                        l ? "inherit" : "hidden",
                        !l
                      )),
                    "scale" !== h &&
                      "transform" !== h &&
                      ~(h = y[h]).indexOf(",") &&
                      (h = h.split(",")[0])),
                  (O = h in f))
                ) {
                  if (
                    (this.styles.save(h),
                    E ||
                      (((S = e._gsap).renderTransform && !t.parseTransform) ||
                        ec(e, t.parseTransform),
                      (C = !1 !== t.smoothOrigin && S.smooth),
                      ((E = this._pt =
                        new u.J7(
                          this._pt,
                          k,
                          A,
                          0,
                          1,
                          S.renderTransform,
                          S,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === h)
                  )
                    (this._pt = new u.J7(
                      this._pt,
                      S,
                      "scaleY",
                      S.scaleY,
                      (x ? (0, u.B0)(S.scaleY, x + l) : l) - S.scaleY || 0,
                      b
                    )),
                      (this._pt.u = 0),
                      M.push("scaleY", h),
                      (h += "X");
                  else if ("transformOrigin" === h) {
                    T.push(j, 0, k[j]),
                      (a = ee(a)),
                      S.svg
                        ? el(e, a, 0, C, 0, this)
                        : ((v = parseFloat(a.split(" ")[2]) || 0) !==
                            S.zOrigin && U(this, S, "zOrigin", S.zOrigin, v),
                          U(this, k, h, eu(s), eu(a)));
                    continue;
                  } else if ("svgOrigin" === h) {
                    el(e, a, 1, C, 0, this);
                    continue;
                  } else if (h in ei) {
                    ev(this, S, h, c, x ? (0, u.B0)(c, x + a) : a);
                    continue;
                  } else if ("smoothOrigin" === h) {
                    U(this, S, "smooth", S.smooth, a);
                    continue;
                  } else if ("force3D" === h) {
                    S[h] = a;
                    continue;
                  } else if ("transform" === h) {
                    ey(this, a, e);
                    continue;
                  }
                } else h in k || (h = X(h) || h);
                if (
                  O ||
                  ((l || 0 === l) && (c || 0 === c) && !m.test(a) && h in k)
                )
                  (g = (s + "").substr((c + "").length)),
                    l || (l = 0),
                    (v = (0, u.l_)(a) || (h in u.Yz.units ? u.Yz.units[h] : g)),
                    g !== v && (c = J(e, h, s, v)),
                    (this._pt = new u.J7(
                      this._pt,
                      O ? S : k,
                      h,
                      c,
                      (x ? (0, u.B0)(c, x + l) : l) - c,
                      O || ("px" !== v && "zIndex" !== h) || !1 === t.autoRound
                        ? b
                        : _
                    )),
                    (this._pt.u = v || 0),
                    g !== v &&
                      "%" !== v &&
                      ((this._pt.b = s), (this._pt.r = w));
                else if (h in k) K.call(this, e, h, s, x ? x + a : a);
                else if (h in e) this.add(e, h, s || e[h], x ? x + a : a, n, i);
                else if ("parseTransform" !== h) {
                  (0, u.dg)(h, a);
                  continue;
                }
                O ||
                  (h in k
                    ? T.push(h, 0, k[h])
                    : "function" == typeof e[h]
                    ? T.push(h, 2, e[h]())
                    : T.push(h, 1, s || e[h])),
                  M.push(h);
              }
            }
          P && (0, u.St)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !l())
            for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
          else t.styles.revert();
        },
        get: Z,
        aliases: y,
        getSetter: function (e, t, r) {
          var n = y[t];
          return (
            n && 0 > n.indexOf(",") && (t = n),
            t in f && t !== j && (e._gsap.x || Z(e, "x"))
              ? r && a === r
                ? "scale" === t
                  ? T
                  : P
                : ((a = r || {}), "scale" === t ? M : k)
              : e.style && !(0, u.OF)(e.style[t])
              ? S
              : ~t.indexOf("-")
              ? C
              : (0, u.Dx)(e, t)
          );
        },
        core: { _removeProperty: q, _getMatrix: ea },
      };
      (u.os.utils.checkPrefix = X),
        (u.os.core.getStyleSaver = F),
        (function (e, t, r, n) {
          var i = (0, u.fA)(e + "," + t + "," + r, function (e) {
            f[e] = 1;
          });
          (0, u.fA)(t, function (e) {
            (u.Yz.units[e] = "deg"), (ei[e] = 1);
          }),
            (y[i[13]] = e + "," + t),
            (0, u.fA)(n, function (e) {
              var t = e.split(":");
              y[t[1]] = i[t[0]];
            });
        })(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
          "rotation,rotationX,rotationY,skewX,skewY",
          "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
        ),
        (0, u.fA)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            u.Yz.units[e] = "px";
          }
        ),
        u.os.registerPlugin(eb);
      var ex = u.os.registerPlugin(eb) || u.os;
      ex.core.Tween;
    },
    41933: (e, t, r) => {
      var n = r(62673).Symbol;
      e.exports = n;
    },
    43600: (e, t, r) => {
      var n = r(41933),
        i = r(8273),
        o = r(96798),
        s = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
          ? i(e)
          : o(e);
      };
    },
    34952: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n;
    },
    8273: (e, t, r) => {
      var n = r(41933),
        i = Object.prototype,
        o = i.hasOwnProperty,
        s = i.toString,
        a = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = o.call(e, a),
          r = e[a];
        try {
          e[a] = void 0;
          var n = !0;
        } catch (e) {}
        var i = s.call(e);
        return n && (t ? (e[a] = r) : delete e[a]), i;
      };
    },
    96798: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    62673: (e, t, r) => {
      var n = r(34952),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = n || i || Function("return this")();
      e.exports = o;
    },
    33196: (e, t, r) => {
      var n = r(43600),
        i = r(95255);
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = n(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    95255: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    82665: (e, t, r) => {
      "use strict";
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n;
                (n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var s, a = e[Symbol.iterator]();
                  !(n = (s = a.next()).done) &&
                  (r.push(s.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            }
          })(e, t) ||
          c(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          c(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        if (e) {
          if ("string" == typeof e) return u(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return u(e, t);
        }
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        return Object.getOwnPropertyNames(Object(e)).reduce(function (r, n) {
          var i = Object.getOwnPropertyDescriptor(Object(e), n),
            o = Object.getOwnPropertyDescriptor(Object(t), n);
          return Object.defineProperty(r, n, o || i);
        }, {});
      }
      function p(e) {
        return "string" == typeof e;
      }
      function d(e) {
        return Array.isArray(e);
      }
      function h() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = f(t);
        return (
          void 0 !== r.types
            ? (e = r.types)
            : void 0 !== r.split && (e = r.split),
          void 0 !== e &&
            (r.types = (p(e) || d(e) ? String(e) : "")
              .split(",")
              .map(function (e) {
                return String(e).trim();
              })
              .filter(function (e) {
                return /((line)|(word)|(char))/i.test(e);
              })),
          (r.absolute || r.position) &&
            (r.absolute = r.absolute || /absolute/.test(t.position)),
          r
        );
      }
      function g(e) {
        var t = p(e) || d(e) ? String(e) : "";
        return {
          none: !t,
          lines: /line/i.test(t),
          words: /word/i.test(t),
          chars: /char/i.test(t),
        };
      }
      function v(e) {
        return null !== e && "object" == typeof e;
      }
      function m(e) {
        return v(e) && /^(1|3|11)$/.test(e.nodeType);
      }
      function y(e) {
        var t;
        return d(e)
          ? e
          : null == e
          ? []
          : v(e) && "number" == typeof (t = e.length) && t > -1 && t % 1 == 0
          ? Array.prototype.slice.call(e)
          : [e];
      }
      function b(e) {
        var t = e;
        return (
          p(e) &&
            (t = /^(#[a-z]\w+)$/.test(e.trim())
              ? document.getElementById(e.trim().slice(1))
              : document.querySelectorAll(e)),
          y(t).reduce(function (e, t) {
            return [].concat(l(e), l(y(t).filter(m)));
          }, [])
        );
      }
      r.d(t, { A: () => G }),
        (function () {
          function e() {
            for (var e = arguments.length, t = 0; t < e; t++) {
              var r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
              1 === r.nodeType || 11 === r.nodeType
                ? this.appendChild(r)
                : this.appendChild(document.createTextNode(String(r)));
            }
          }
          function t() {
            for (; this.lastChild; ) this.removeChild(this.lastChild);
            arguments.length && this.append.apply(this, arguments);
          }
          function r() {
            for (
              var e = this.parentNode,
                t = arguments.length,
                r = Array(t),
                n = 0;
              n < t;
              n++
            )
              r[n] = arguments[n];
            var i = r.length;
            if (e)
              for (i || e.removeChild(this); i--; ) {
                var o = r[i];
                "object" != typeof o
                  ? (o = this.ownerDocument.createTextNode(o))
                  : o.parentNode && o.parentNode.removeChild(o),
                  i
                    ? e.insertBefore(this.previousSibling, o)
                    : e.replaceChild(o, this);
              }
          }
          "undefined" == typeof Element ||
            (Element.prototype.append ||
              ((Element.prototype.append = e),
              (DocumentFragment.prototype.append = e)),
            Element.prototype.replaceChildren ||
              ((Element.prototype.replaceChildren = t),
              (DocumentFragment.prototype.replaceChildren = t)),
            Element.prototype.replaceWith ||
              ((Element.prototype.replaceWith = r),
              (DocumentFragment.prototype.replaceWith = r)));
        })();
      var x = Object.entries,
        w = "_splittype",
        _ = {},
        O = 0;
      function E(e, t, r) {
        if (!v(e))
          return console.warn("[data.set] owner is not an object"), null;
        var n = e[w] || (e[w] = ++O),
          i = _[n] || (_[n] = {});
        return (
          void 0 === r
            ? t &&
              Object.getPrototypeOf(t) === Object.prototype &&
              (_[n] = s(s({}, i), t))
            : void 0 !== t && (i[t] = r),
          r
        );
      }
      function S(e, t) {
        var r = v(e) ? e[w] : null,
          n = (r && _[r]) || {};
        return void 0 === t ? n : n[t];
      }
      function C(e) {
        var t = e && e[w];
        t && (delete e[t], delete _[t]);
      }
      var P = "\ud800-\udfff",
        T = "\\u0300-\\u036f\\ufe20-\\ufe23",
        M = "\\u20d0-\\u20f0",
        k = "\\ufe0e\\ufe0f",
        A = "[".concat(T).concat(M, "]"),
        j = "\ud83c[\udffb-\udfff]",
        Y = "(?:".concat(A, "|").concat(j, ")"),
        D = "[^".concat(P, "]"),
        R = "(?:\ud83c[\udde6-\uddff]){2}",
        F = "[\ud800-\udbff][\udc00-\udfff]",
        z = "\\u200d",
        B = "".concat(Y, "?"),
        N = "[".concat(k, "]?"),
        X = "(?:" + z + "(?:" + [D, R, F].join("|") + ")" + N + B + ")*",
        I = "(?:".concat(
          ["".concat(D).concat(A, "?"), A, R, F, "[".concat(P, "]")].join("|"),
          "\n)"
        ),
        W = RegExp(
          ""
            .concat(j, "(?=")
            .concat(j, ")|")
            .concat(I)
            .concat(N + B + X),
          "g"
        ),
        L = [z, P, T, M, k],
        H = RegExp("[".concat(L.join(""), "]"));
      function V(e, t) {
        var r = document.createElement(e);
        return (
          t &&
            Object.keys(t).forEach(function (e) {
              var n = t[e],
                i = p(n) ? n.trim() : n;
              null !== i &&
                "" !== i &&
                ("children" === e
                  ? r.append.apply(r, l(y(i)))
                  : r.setAttribute(e, i));
            }),
          r
        );
      }
      var q = {
          splitClass: "",
          lineClass: "line",
          wordClass: "word",
          charClass: "char",
          types: ["lines", "words", "chars"],
          absolute: !1,
          tagName: "div",
        },
        U = f(q, {}),
        G = (function () {
          function e(t, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (this.isSplit = !1),
              (this.settings = f(U, h(r))),
              (this.elements = b(t)),
              this.split();
          }
          return (
            i(e, null, [
              {
                key: "clearData",
                value: function () {
                  Object.keys(_).forEach(function (e) {
                    delete _[e];
                  });
                },
              },
              {
                key: "setDefaults",
                value: function (e) {
                  return (U = f(U, h(e))), q;
                },
              },
              {
                key: "revert",
                value: function (e) {
                  b(e).forEach(function (e) {
                    var t = S(e),
                      r = t.isSplit,
                      n = t.html,
                      i = t.cssWidth,
                      o = t.cssHeight;
                    r &&
                      ((e.innerHTML = n),
                      (e.style.width = i || ""),
                      (e.style.height = o || ""),
                      C(e));
                  });
                },
              },
              {
                key: "create",
                value: function (t, r) {
                  return new e(t, r);
                },
              },
              {
                key: "data",
                get: function () {
                  return _;
                },
              },
              {
                key: "defaults",
                get: function () {
                  return U;
                },
                set: function (e) {
                  U = f(U, h(e));
                },
              },
            ]),
            i(e, [
              {
                key: "split",
                value: function (e) {
                  var t = this;
                  this.revert(),
                    this.elements.forEach(function (e) {
                      E(e, "html", e.innerHTML);
                    }),
                    (this.lines = []),
                    (this.words = []),
                    (this.chars = []);
                  var r = [window.pageXOffset, window.pageYOffset];
                  void 0 !== e && (this.settings = f(this.settings, h(e)));
                  var n = g(this.settings.types);
                  n.none ||
                    (this.elements.forEach(function (e) {
                      E(e, "isRoot", !0);
                      var r = (function e(t, r) {
                          var n,
                            i,
                            o,
                            s,
                            a,
                            c,
                            u,
                            d = t.nodeType,
                            h = { words: [], chars: [] };
                          if (!/(1|3|11)/.test(d)) return h;
                          if (3 === d && /\S/.test(t.nodeValue))
                            return (
                              (i = g((n = f(q, (n = r))).types)),
                              (o = n.tagName),
                              (s = t.nodeValue),
                              (a = document.createDocumentFragment()),
                              (c = []),
                              (u = []),
                              /^\s/.test(s) && a.append(" "),
                              (c = (function (e) {
                                var t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : " ";
                                return (e ? String(e) : "")
                                  .trim()
                                  .replace(/\s+/g, " ")
                                  .split(t);
                              })(s).reduce(function (e, t, r, s) {
                                var c, f;
                                return (
                                  i.chars &&
                                    (f = (function (e) {
                                      var t,
                                        r,
                                        n,
                                        i =
                                          arguments.length > 1 &&
                                          void 0 !== arguments[1]
                                            ? arguments[1]
                                            : "";
                                      return (e =
                                        null == (r = e) ? "" : String(r)) &&
                                        p(e) &&
                                        !i &&
                                        ((n = e), H.test(n))
                                        ? ((t = e),
                                          H.test(t)
                                            ? t.match(W) || []
                                            : t.split(""))
                                        : e.split(i);
                                    })(t).map(function (e) {
                                      var t = V(o, {
                                        class: ""
                                          .concat(n.splitClass, " ")
                                          .concat(n.charClass),
                                        style: "display: inline-block;",
                                        children: e,
                                      });
                                      return (
                                        E(t, "isChar", !0),
                                        (u = [].concat(l(u), [t])),
                                        t
                                      );
                                    })),
                                  i.words || i.lines
                                    ? (E(
                                        (c = V(o, {
                                          class: ""
                                            .concat(n.wordClass, " ")
                                            .concat(n.splitClass),
                                          style:
                                            "display: inline-block; ".concat(
                                              i.words && n.absolute
                                                ? "position: relative;"
                                                : ""
                                            ),
                                          children: i.chars ? f : t,
                                        })),
                                        {
                                          isWord: !0,
                                          isWordStart: !0,
                                          isWordEnd: !0,
                                        }
                                      ),
                                      a.appendChild(c))
                                    : f.forEach(function (e) {
                                        a.appendChild(e);
                                      }),
                                  r < s.length - 1 && a.append(" "),
                                  i.words ? e.concat(c) : e
                                );
                              }, [])),
                              /\s$/.test(s) && a.append(" "),
                              t.replaceWith(a),
                              { words: c, chars: u }
                            );
                          var v = y(t.childNodes);
                          if (v.length && (E(t, "isSplit", !0), !S(t).isRoot)) {
                            (t.style.display = "inline-block"),
                              (t.style.position = "relative");
                            var m = t.nextSibling,
                              b = t.previousSibling,
                              x = t.textContent || "",
                              w = m ? m.textContent : " ",
                              _ = b ? b.textContent : " ";
                            E(t, {
                              isWordEnd: /\s$/.test(x) || /^\s/.test(w),
                              isWordStart: /^\s/.test(x) || /\s$/.test(_),
                            });
                          }
                          return v.reduce(function (t, n) {
                            var i = e(n, r),
                              o = i.words,
                              s = i.chars;
                            return {
                              words: [].concat(l(t.words), l(o)),
                              chars: [].concat(l(t.chars), l(s)),
                            };
                          }, h);
                        })(e, t.settings),
                        n = r.words,
                        i = r.chars;
                      (t.words = [].concat(l(t.words), l(n))),
                        (t.chars = [].concat(l(t.chars), l(i)));
                    }),
                    this.elements.forEach(function (e) {
                      if (n.lines || t.settings.absolute) {
                        var i,
                          o,
                          s,
                          c,
                          u,
                          f,
                          p,
                          d,
                          h,
                          v,
                          m,
                          b,
                          x,
                          w,
                          _,
                          O,
                          P,
                          T =
                            ((u = g((i = t.settings).types)),
                            (f = i.tagName),
                            (p = e.getElementsByTagName("*")),
                            (d = []),
                            (h = []),
                            (v = null),
                            (m = []),
                            (b = e.parentElement),
                            (x = e.nextElementSibling),
                            (w = document.createDocumentFragment()),
                            (O = (_ = window.getComputedStyle(e)).textAlign),
                            (P = 0.2 * parseFloat(_.fontSize)),
                            i.absolute &&
                              ((c = {
                                left: e.offsetLeft,
                                top: e.offsetTop,
                                width: e.offsetWidth,
                              }),
                              (s = e.offsetWidth),
                              (o = e.offsetHeight),
                              E(e, {
                                cssWidth: e.style.width,
                                cssHeight: e.style.height,
                              })),
                            y(p).forEach(function (t) {
                              var n = t.parentElement === e,
                                o = (function (e, t, r, n) {
                                  if (!r.absolute)
                                    return { top: t ? e.offsetTop : null };
                                  var i = e.offsetParent,
                                    o = a(n, 2),
                                    s = o[0],
                                    l = o[1],
                                    c = 0,
                                    u = 0;
                                  if (i && i !== document.body) {
                                    var f = i.getBoundingClientRect();
                                    (c = f.x + s), (u = f.y + l);
                                  }
                                  var p = e.getBoundingClientRect(),
                                    d = p.width,
                                    h = p.height,
                                    g = p.x;
                                  return {
                                    width: d,
                                    height: h,
                                    top: p.y + l - u,
                                    left: g + s - c,
                                  };
                                })(t, n, i, r),
                                s = o.width,
                                l = o.height,
                                c = o.top,
                                f = o.left;
                              !/^br$/i.test(t.nodeName) &&
                                (u.lines &&
                                  n &&
                                  ((null === v || c - v >= P) &&
                                    ((v = c), d.push((h = []))),
                                  h.push(t)),
                                i.absolute &&
                                  E(t, {
                                    top: c,
                                    left: f,
                                    width: s,
                                    height: l,
                                  }));
                            }),
                            b && b.removeChild(e),
                            u.lines &&
                              ((m = d.map(function (e) {
                                var t = V(f, {
                                  class: ""
                                    .concat(i.splitClass, " ")
                                    .concat(i.lineClass),
                                  style: "display: block; text-align: ".concat(
                                    O,
                                    "; width: 100%;"
                                  ),
                                });
                                E(t, "isLine", !0);
                                var r = { height: 0, top: 1e4 };
                                return (
                                  w.appendChild(t),
                                  e.forEach(function (e, n, i) {
                                    var o = S(e),
                                      s = o.isWordEnd,
                                      a = o.top,
                                      l = o.height,
                                      c = i[n + 1];
                                    (r.height = Math.max(r.height, l)),
                                      (r.top = Math.min(r.top, a)),
                                      t.appendChild(e),
                                      s && S(c).isWordStart && t.append(" ");
                                  }),
                                  i.absolute &&
                                    E(t, { height: r.height, top: r.top }),
                                  t
                                );
                              })),
                              u.words ||
                                (function e(t) {
                                  S(t).isWord
                                    ? (C(t),
                                      t.replaceWith.apply(t, l(t.childNodes)))
                                    : y(t.children).forEach(function (t) {
                                        return e(t);
                                      });
                                })(w),
                              e.replaceChildren(w)),
                            i.absolute &&
                              ((e.style.width = "".concat(
                                e.style.width || s,
                                "px"
                              )),
                              (e.style.height = "".concat(o, "px")),
                              y(p).forEach(function (e) {
                                var t = S(e),
                                  r = t.isLine,
                                  n = t.top,
                                  i = t.left,
                                  o = t.width,
                                  s = t.height,
                                  a = S(e.parentElement),
                                  l = !r && a.isLine;
                                (e.style.top = "".concat(
                                  l ? n - a.top : n,
                                  "px"
                                )),
                                  (e.style.left = r
                                    ? "".concat(c.left, "px")
                                    : "".concat(i - (l ? c.left : 0), "px")),
                                  (e.style.height = "".concat(s, "px")),
                                  (e.style.width = r
                                    ? "".concat(c.width, "px")
                                    : "".concat(o, "px")),
                                  (e.style.position = "absolute");
                              })),
                            b && (x ? b.insertBefore(e, x) : b.appendChild(e)),
                            m);
                        t.lines = [].concat(l(t.lines), l(T));
                      }
                    }),
                    (this.isSplit = !0),
                    window.scrollTo(r[0], r[1]),
                    x(_).forEach(function (e) {
                      var t = a(e, 2),
                        r = t[0],
                        n = t[1],
                        i = n.isRoot,
                        o = n.isSplit;
                      (i && o) || ((_[r] = null), delete _[r]);
                    }));
                },
              },
              {
                key: "revert",
                value: function () {
                  this.isSplit &&
                    ((this.lines = null),
                    (this.words = null),
                    (this.chars = null),
                    (this.isSplit = !1)),
                    e.revert(this.elements);
                },
              },
            ]),
            e
          );
        })();
    },
    4617: (e, t) => {
      var r;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function i() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            r &&
              (e = o(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return i.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var r in e) n.call(e, r) && e[r] && (t = o(t, r));
                  return t;
                })(r)
              ));
          }
          return e;
        }
        function o(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (r = function () {
                return i;
              }.apply(t, [])) && (e.exports = r);
      })();
    },
    83126: (e, t, r) => {
      "use strict";
      r.d(t, { ViewTransitions: () => u, o: () => d });
      var n = r(95155);
      r(48173);
      var i = r(76046),
        o = r(12115);
      function s() {
        return window.location.hash;
      }
      function a() {
        return "";
      }
      function l(e) {
        return (
          window.addEventListener("hashchange", e),
          () => window.removeEventListener("hashchange", e)
        );
      }
      let c = (0, o.createContext)(() => () => {});
      function u(e) {
        let { children: t } = e,
          [r, u] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            r && (r(), u(null));
          }, [r]),
          !(function () {
            let e = (0, i.usePathname)(),
              t = (0, o.useRef)(e),
              [r, n] = (0, o.useState)(null);
            (0, o.useEffect)(() => {
              if (!("startViewTransition" in document)) return () => {};
              let e = () => {
                let e;
                let t = new Promise((t) => {
                  e = t;
                });
                n([
                  new Promise((e) => {
                    document.startViewTransition(() => (e(), t));
                  }),
                  e,
                ]);
              };
              return (
                window.addEventListener("popstate", e),
                () => {
                  window.removeEventListener("popstate", e);
                }
              );
            }, []),
              r && t.current !== e && (0, o.use)(r[0]);
            let c = (0, o.useRef)(r);
            (0, o.useEffect)(() => {
              c.current = r;
            }, [r]);
            let u = (0, o.useSyncExternalStore)(l, s, a);
            (0, o.useEffect)(() => {
              (t.current = e),
                c.current && (c.current[1](), (c.current = null));
            }, [u, e]);
          })(),
          (0, n.jsx)(c.Provider, { value: u, children: t })
        );
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i;
      }
      function d() {
        let e = (0, i.useRouter)(),
          t = (0, o.use)(c),
          r = (0, o.useCallback)(function (e) {
            let { onTransitionReady: r } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (!("startViewTransition" in document)) return e();
            {
              let n = document.startViewTransition(
                () =>
                  new Promise((r) => {
                    (0, o.startTransition)(() => {
                      e(), t(() => r);
                    });
                  })
              );
              r && n.ready.then(r);
            }
          }, []),
          n = (0, o.useCallback)(
            function (t) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              var { onTransitionReady: i } = n,
                o = p(n, ["onTransitionReady"]);
              r(() => e.push(t, o), { onTransitionReady: i });
            },
            [r, e]
          ),
          s = (0, o.useCallback)(
            function (t) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              var { onTransitionReady: i } = n,
                o = p(n, ["onTransitionReady"]);
              r(() => e.replace(t, o), { onTransitionReady: i });
            },
            [r, e]
          );
        return (0, o.useMemo)(
          () => f({}, e, { push: n, replace: s }),
          [n, s, e]
        );
      }
    },
    99827: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => l });
      var n = r(12115);
      let i = (e) => {
          let t;
          let r = new Set(),
            n = (e, n) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != n ? n : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  r.forEach((r) => r(t, e));
              }
            },
            i = () => t,
            o = {
              setState: n,
              getState: i,
              getInitialState: () => s,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
            },
            s = (t = e(n, i, o));
          return o;
        },
        o = (e) => (e ? i(e) : i),
        s = (e) => e,
        a = (e) => {
          let t = o(e),
            r = (e) =>
              (function (e, t = s) {
                let r = n.useSyncExternalStore(
                  e.subscribe,
                  () => t(e.getState()),
                  () => t(e.getInitialState())
                );
                return n.useDebugValue(r), r;
              })(t, e);
          return Object.assign(r, t), r;
        },
        l = (e) => (e ? a(e) : a);
    },
  },
]);
