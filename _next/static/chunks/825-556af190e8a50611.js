(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [825],
  {
    54203: (t, e, i) => {
      "use strict";
      i.d(e, { default: () => n.a });
      var s = i(53704),
        n = i.n(s);
    },
    53704: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return w;
          },
          handleClientScriptLoad: function () {
            return f;
          },
          initScriptLoader: function () {
            return v;
          },
        });
      let s = i(60306),
        n = i(29955),
        o = i(95155),
        r = s._(i(47650)),
        l = n._(i(12115)),
        a = i(81147),
        h = i(22815),
        c = i(68571),
        d = new Map(),
        u = new Set(),
        p = (t) => {
          if (r.default.preinit) {
            t.forEach((t) => {
              r.default.preinit(t, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let e = document.head;
            t.forEach((t) => {
              let i = document.createElement("link");
              (i.type = "text/css"),
                (i.rel = "stylesheet"),
                (i.href = t),
                e.appendChild(i);
            });
          }
        },
        m = (t) => {
          let {
              src: e,
              id: i,
              onLoad: s = () => {},
              onReady: n = null,
              dangerouslySetInnerHTML: o,
              children: r = "",
              strategy: l = "afterInteractive",
              onError: a,
              stylesheets: c,
            } = t,
            m = i || e;
          if (m && u.has(m)) return;
          if (d.has(e)) {
            u.add(m), d.get(e).then(s, a);
            return;
          }
          let f = () => {
              n && n(), u.add(m);
            },
            v = document.createElement("script"),
            g = new Promise((t, e) => {
              v.addEventListener("load", function (e) {
                t(), s && s.call(this, e), f();
              }),
                v.addEventListener("error", function (t) {
                  e(t);
                });
            }).catch(function (t) {
              a && a(t);
            });
          o
            ? ((v.innerHTML = o.__html || ""), f())
            : r
            ? ((v.textContent =
                "string" == typeof r ? r : Array.isArray(r) ? r.join("") : ""),
              f())
            : e && ((v.src = e), d.set(e, g)),
            (0, h.setAttributesFromProps)(v, t),
            "worker" === l && v.setAttribute("type", "text/partytown"),
            v.setAttribute("data-nscript", l),
            c && p(c),
            document.body.appendChild(v);
        };
      function f(t) {
        let { strategy: e = "afterInteractive" } = t;
        "lazyOnload" === e
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => m(t));
            })
          : m(t);
      }
      function v(t) {
        t.forEach(f),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((t) => {
            let e = t.id || t.getAttribute("src");
            u.add(e);
          });
      }
      function g(t) {
        let {
            id: e,
            src: i = "",
            onLoad: s = () => {},
            onReady: n = null,
            strategy: h = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...f
          } = t,
          {
            updateScripts: v,
            scripts: g,
            getIsSsr: w,
            appDir: S,
            nonce: y,
          } = (0, l.useContext)(a.HeadManagerContext),
          _ = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let t = e || i;
          _.current || (n && t && u.has(t) && n(), (_.current = !0));
        }, [n, e, i]);
        let b = (0, l.useRef)(!1);
        if (
          ((0, l.useEffect)(() => {
            !b.current &&
              ("afterInteractive" === h
                ? m(t)
                : "lazyOnload" === h &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => m(t))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => m(t));
                      })),
              (b.current = !0));
          }, [t, h]),
          ("beforeInteractive" === h || "worker" === h) &&
            (v
              ? ((g[h] = (g[h] || []).concat([
                  { id: e, src: i, onLoad: s, onReady: n, onError: d, ...f },
                ])),
                v(g))
              : w && w()
              ? u.add(e || i)
              : w && !w() && m(t)),
          S)
        ) {
          if (
            (p &&
              p.forEach((t) => {
                r.default.preinit(t, { as: "style" });
              }),
            "beforeInteractive" === h)
          )
            return i
              ? (r.default.preload(
                  i,
                  f.integrity
                    ? {
                        as: "script",
                        integrity: f.integrity,
                        nonce: y,
                        crossOrigin: f.crossOrigin,
                      }
                    : { as: "script", nonce: y, crossOrigin: f.crossOrigin }
                ),
                (0, o.jsx)("script", {
                  nonce: y,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([i, { ...f, id: e }]) +
                      ")",
                  },
                }))
              : (f.dangerouslySetInnerHTML &&
                  ((f.children = f.dangerouslySetInnerHTML.__html),
                  delete f.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: y,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...f, id: e }]) +
                      ")",
                  },
                }));
          "afterInteractive" === h &&
            i &&
            r.default.preload(
              i,
              f.integrity
                ? {
                    as: "script",
                    integrity: f.integrity,
                    nonce: y,
                    crossOrigin: f.crossOrigin,
                  }
                : { as: "script", nonce: y, crossOrigin: f.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(g, "__nextScript", { value: !0 });
      let w = g;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    22815: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let i = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        s = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function n(t) {
        return ["async", "defer", "noModule"].includes(t);
      }
      function o(t, e) {
        for (let [o, r] of Object.entries(e)) {
          if (!e.hasOwnProperty(o) || s.includes(o) || void 0 === r) continue;
          let l = i[o] || o.toLowerCase();
          "SCRIPT" === t.tagName && n(l)
            ? (t[l] = !!r)
            : t.setAttribute(l, String(r)),
            (!1 === r ||
              ("SCRIPT" === t.tagName && n(l) && (!r || "false" === r))) &&
              (t.setAttribute(l, ""), t.removeAttribute(l));
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2252: () => {},
    14185: (t) => {
      t.exports = {
        style: { fontFamily: "'mosvita', 'mosvita Fallback'" },
        className: "__className_c8413f",
        variable: "__variable_c8413f",
      };
    },
    45782: (t, e, i) => {
      "use strict";
      function s(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      i.d(e, { A: () => h });
      class n {
        advance(t) {
          var e, i, n;
          if (!this.isRunning) return;
          let o = !1;
          if (this.lerp)
            (this.value =
              ((e = this.value),
              (i = this.to),
              (1 - (n = 1 - Math.exp(-(60 * this.lerp) * t))) * e + n * i)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (o = !0));
          else {
            this.currentTime += t;
            let e = s(0, this.currentTime / this.duration, 1),
              i = (o = e >= 1) ? 1 : this.easing(e);
            this.value = this.from + (this.to - this.from) * i;
          }
          this.onUpdate?.(this.value, o), o && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          t,
          e,
          {
            lerp: i = 0.1,
            duration: s = 1,
            easing: n = (t) => t,
            onStart: o,
            onUpdate: r,
          }
        ) {
          (this.from = this.value = t),
            (this.to = e),
            (this.lerp = i),
            (this.duration = s),
            (this.easing = n),
            (this.currentTime = 0),
            (this.isRunning = !0),
            o?.(),
            (this.onUpdate = r);
        }
      }
      class o {
        constructor({
          wrapper: t,
          content: e,
          autoResize: i = !0,
          debounce: s = 250,
        } = {}) {
          (this.wrapper = t),
            (this.content = e),
            i &&
              ((this.debouncedResize = (function (t, e) {
                let i;
                return function () {
                  let s = arguments,
                    n = this;
                  clearTimeout(i),
                    (i = setTimeout(function () {
                      t.apply(n, s);
                    }, e));
                };
              })(this.resize, s)),
              this.wrapper === window
                ? window.addEventListener("resize", this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize();
        }
        destroy() {
          this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            window.removeEventListener("resize", this.debouncedResize, !1);
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper === window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class r {
        constructor() {
          this.events = {};
        }
        emit(t, ...e) {
          let i = this.events[t] || [];
          for (let t = 0, s = i.length; t < s; t++) i[t](...e);
        }
        on(t, e) {
          return (
            this.events[t]?.push(e) || (this.events[t] = [e]),
            () => {
              this.events[t] = this.events[t]?.filter((t) => e !== t);
            }
          );
        }
        off(t, e) {
          this.events[t] = this.events[t]?.filter((t) => e !== t);
        }
        destroy() {
          this.events = {};
        }
      }
      let l = 100 / 6;
      class a {
        constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 1 }) {
          (this.element = t),
            (this.wheelMultiplier = e),
            (this.touchMultiplier = i),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new r()),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        destroy() {
          this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        onTouchStart = (t) => {
          let { clientX: e, clientY: i } = t.targetTouches
            ? t.targetTouches[0]
            : t;
          (this.touchStart.x = e),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
        };
        onTouchMove = (t) => {
          let { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t,
            s = -(e - this.touchStart.x) * this.touchMultiplier,
            n = -(i - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = i),
            (this.lastDelta = { x: s, y: n }),
            this.emitter.emit("scroll", { deltaX: s, deltaY: n, event: t });
        };
        onTouchEnd = (t) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        };
        onWheel = (t) => {
          let { deltaX: e, deltaY: i, deltaMode: s } = t;
          (e *= 1 === s ? l : 2 === s ? this.windowWidth : 1),
            (i *= 1 === s ? l : 2 === s ? this.windowHeight : 1),
            (e *= this.wheelMultiplier),
            (i *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
        };
        onWindowResize = () => {
          (this.windowWidth = window.innerWidth),
            (this.windowHeight = window.innerHeight);
        };
      }
      class h {
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          wheelEventsTarget: i = t,
          eventsTarget: s = i,
          smoothWheel: l = !0,
          syncTouch: h = !1,
          syncTouchLerp: c = 0.075,
          touchInertiaMultiplier: d = 35,
          duration: u,
          easing: p = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: m = !u && 0.1,
          infinite: f = !1,
          orientation: v = "vertical",
          gestureOrientation: g = "vertical",
          touchMultiplier: w = 1,
          wheelMultiplier: S = 1,
          autoResize: y = !0,
          __experimental__naiveDimensions: _ = !1,
        } = {}) {
          (this.__isSmooth = !1),
            (this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
              if (i.ctrlKey) return;
              let s = i.type.includes("touch"),
                n = i.type.includes("wheel");
              if (
                this.options.syncTouch &&
                s &&
                "touchstart" === i.type &&
                !this.isStopped &&
                !this.isLocked
              )
                return void this.reset();
              let o =
                ("vertical" === this.options.gestureOrientation && 0 === e) ||
                ("horizontal" === this.options.gestureOrientation && 0 === t);
              if ((0 === t && 0 === e) || o) return;
              let r = i.composedPath();
              if (
                (r = r.slice(0, r.indexOf(this.rootElement))).find((t) => {
                  var e, i, o, r, l;
                  return (
                    (null === (e = t.hasAttribute) || void 0 === e
                      ? void 0
                      : e.call(t, "data-lenis-prevent")) ||
                    (s &&
                      (null === (i = t.hasAttribute) || void 0 === i
                        ? void 0
                        : i.call(t, "data-lenis-prevent-touch"))) ||
                    (n &&
                      (null === (o = t.hasAttribute) || void 0 === o
                        ? void 0
                        : o.call(t, "data-lenis-prevent-wheel"))) ||
                    ((null === (r = t.classList) || void 0 === r
                      ? void 0
                      : r.contains("lenis")) &&
                      !(null === (l = t.classList) || void 0 === l
                        ? void 0
                        : l.contains("lenis-stopped")))
                  );
                })
              )
                return;
              if (this.isStopped || this.isLocked)
                return void i.preventDefault();
              if (
                ((this.isSmooth =
                  (this.options.syncTouch && s) ||
                  (this.options.smoothWheel && n)),
                !this.isSmooth)
              )
                return (this.isScrolling = !1), void this.animate.stop();
              i.preventDefault();
              let l = e;
              "both" === this.options.gestureOrientation
                ? (l = Math.abs(e) > Math.abs(t) ? e : t)
                : "horizontal" === this.options.gestureOrientation && (l = t);
              let a = s && this.options.syncTouch,
                h = s && "touchend" === i.type && Math.abs(l) > 5;
              h && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    a
                      ? { lerp: h ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                );
            }),
            (this.onNativeScroll = () => {
              if (!this.__preventNextScrollEvent && !this.isScrolling) {
                let t = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.velocity = 0),
                  (this.direction = Math.sign(this.animatedScroll - t)),
                  this.emit();
              }
            }),
            (window.lenisVersion = "1.0.42"),
            (t !== document.documentElement && t !== document.body) ||
              (t = window),
            (this.options = {
              wrapper: t,
              content: e,
              wheelEventsTarget: i,
              eventsTarget: s,
              smoothWheel: l,
              syncTouch: h,
              syncTouchLerp: c,
              touchInertiaMultiplier: d,
              duration: u,
              easing: p,
              lerp: m,
              infinite: f,
              gestureOrientation: g,
              orientation: v,
              touchMultiplier: w,
              wheelMultiplier: S,
              autoResize: y,
              __experimental__naiveDimensions: _,
            }),
            (this.animate = new n()),
            (this.emitter = new r()),
            (this.dimensions = new o({
              wrapper: t,
              content: e,
              autoResize: y,
            })),
            this.toggleClassName("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = h || l),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            (this.virtualScroll = new a(s, {
              touchMultiplier: w,
              wheelMultiplier: S,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClassName("lenis", !1),
            this.toggleClassName("lenis-smooth", !1),
            this.toggleClassName("lenis-scrolling", !1),
            this.toggleClassName("lenis-stopped", !1),
            this.toggleClassName("lenis-locked", !1);
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          return this.emitter.off(t, e);
        }
        setScroll(t) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = t)
            : (this.rootElement.scrollTop = t);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(t) {
          let e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }
        scrollTo(
          t,
          {
            offset: e = 0,
            immediate: i = !1,
            lock: n = !1,
            duration: o = this.options.duration,
            easing: r = this.options.easing,
            lerp: l = !o && this.options.lerp,
            onComplete: a,
            force: h = !1,
            programmatic: c = !0,
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || h) {
            if (["top", "left", "start"].includes(t)) t = 0;
            else if (["bottom", "right", "end"].includes(t)) t = this.limit;
            else {
              let i;
              if (
                ("string" == typeof t
                  ? (i = document.querySelector(t))
                  : (null == t ? void 0 : t.nodeType) && (i = t),
                i)
              ) {
                if (this.options.wrapper !== window) {
                  let t = this.options.wrapper.getBoundingClientRect();
                  e -= this.isHorizontal ? t.left : t.top;
                }
                let s = i.getBoundingClientRect();
                t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof t) {
              if (
                ((t += e),
                (t = Math.round(t)),
                this.options.infinite
                  ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (t = s(0, t, this.limit)),
                i)
              )
                return (
                  (this.animatedScroll = this.targetScroll = t),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (null == a || a(this))
                );
              if (!c) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: o,
                easing: r,
                lerp: l,
                onStart: () => {
                  n && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (t, e) => {
                  (this.isScrolling = !0),
                    (this.velocity = t - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = t),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = t),
                    e || this.emit(),
                    e &&
                      (this.reset(),
                      this.emit(),
                      null == a || a(this),
                      (this.__preventNextScrollEvent = !0),
                      requestAnimationFrame(() => {
                        delete this.__preventNextScrollEvent;
                      }));
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          var t;
          return this.options.infinite
            ? ((this.animatedScroll % (t = this.limit)) + t) % t
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(t) {
          this.__isSmooth !== t &&
            ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t) {
          this.__isScrolling !== t &&
            ((this.__isScrolling = t),
            this.toggleClassName("lenis-scrolling", t));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t) {
          this.__isStopped !== t &&
            ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(t) {
          this.__isLocked !== t &&
            ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
        }
        get className() {
          let t = "lenis";
          return (
            this.isStopped && (t += " lenis-stopped"),
            this.isLocked && (t += " lenis-locked"),
            this.isScrolling && (t += " lenis-scrolling"),
            this.isSmooth && (t += " lenis-smooth"),
            t
          );
        }
        toggleClassName(t, e) {
          this.rootElement.classList.toggle(t, e),
            this.emitter.emit("className change", this);
        }
      }
    },
    45967: (t, e, i) => {
      "use strict";
      i.d(e, { Analytics: () => u, u: () => d });
      var s = i(12115),
        n = i(2818),
        o = () => {
          window.va ||
            (window.va = function () {
              for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
              (window.vaq = window.vaq || []).push(e);
            });
        };
      function r() {
        return "undefined" != typeof window;
      }
      function l() {
        return "production";
      }
      function a() {
        return (r() ? window.vam : l()) || "production";
      }
      function h() {
        return "production" === a();
      }
      function c() {
        return "development" === a();
      }
      function d(t, e, i) {
        var s, n;
        if (!r()) {
          let t =
            "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
          if (h()) console.warn(t);
          else throw Error(t);
          return;
        }
        if (!e) {
          null == (s = window.va) ||
            s.call(window, "event", { name: t, options: i });
          return;
        }
        try {
          let s = (function (t, e) {
            if (!t) return;
            let i = t,
              s = [];
            for (let [n, o] of Object.entries(t))
              "object" == typeof o &&
                null !== o &&
                (e.strip
                  ? (i = (function (t, e) {
                      let { [t]: i, ...s } = e;
                      return s;
                    })(n, i))
                  : s.push(n));
            if (s.length > 0 && !e.strip)
              throw Error(
                "The following properties are not valid: ".concat(
                  s.join(", "),
                  ". Only strings, numbers, booleans, and null are allowed."
                )
              );
            return i;
          })(e, { strip: h() });
          null == (n = window.va) ||
            n.call(window, "event", { name: t, data: s, options: i });
        } catch (t) {
          t instanceof Error && c() && console.error(t);
        }
      }
      function u(t) {
        return (
          (0, s.useEffect)(() => {
            var e;
            t.beforeSend &&
              (null == (e = window.va) ||
                e.call(window, "beforeSend", t.beforeSend));
          }, [t.beforeSend]),
          (0, s.useEffect)(() => {
            var e;
            !(function () {
              var t;
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!r()) return;
              (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === t) {
                  window.vam = l();
                  return;
                }
                window.vam = t;
              })(e.mode),
                o(),
                e.beforeSend &&
                  (null == (t = window.va) ||
                    t.call(window, "beforeSend", e.beforeSend));
              let i = e.scriptSrc
                ? e.scriptSrc
                : c()
                ? "https://va.vercel-scripts.com/v1/script.debug.js"
                : e.basePath
                ? "".concat(e.basePath, "/insights/script.js")
                : "/_vercel/insights/script.js";
              if (document.head.querySelector('script[src*="'.concat(i, '"]')))
                return;
              let s = document.createElement("script");
              (s.src = i),
                (s.defer = !0),
                (s.dataset.sdkn =
                  "@vercel/analytics" +
                  (e.framework ? "/".concat(e.framework) : "")),
                (s.dataset.sdkv = "1.5.0"),
                e.disableAutoTrack && (s.dataset.disableAutoTrack = "1"),
                e.endpoint
                  ? (s.dataset.endpoint = e.endpoint)
                  : e.basePath &&
                    (s.dataset.endpoint = "".concat(e.basePath, "/insights")),
                e.dsn && (s.dataset.dsn = e.dsn),
                (s.onerror = () => {
                  let t = c()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(i, ". ")
                      .concat(t)
                  );
                }),
                c() && !1 === e.debug && (s.dataset.debug = "false"),
                document.head.appendChild(s);
            })({
              framework: t.framework || "react",
              basePath:
                null !== (e = t.basePath) && void 0 !== e
                  ? e
                  : (function () {
                      if (void 0 !== n && void 0 !== n.env)
                        return n.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                    })(),
              ...(void 0 !== t.route && { disableAutoTrack: !0 }),
              ...t,
            });
          }, []),
          (0, s.useEffect)(() => {
            t.route &&
              t.path &&
              (function (t) {
                var e;
                let { route: i, path: s } = t;
                null == (e = window.va) ||
                  e.call(window, "pageview", { route: i, path: s });
              })({ route: t.route, path: t.path });
          }, [t.route, t.path]),
          null
        );
      }
    },
  },
]);
