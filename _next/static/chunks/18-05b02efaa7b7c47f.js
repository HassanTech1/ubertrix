"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [18],
  {
    15507: (e, t, n) => {
      n.d(t, { A: () => s });
      var i = (function (e) {
        return (
          (e[(e.XLG = 1200)] = "XLG"),
          (e[(e.LG = 992)] = "LG"),
          (e[(e.MD = 768)] = "MD"),
          (e[(e.SM = 576)] = "SM"),
          e
        );
      })(i || {});
      let s = i;
    },
    72687: (e, t, n) => {
      n.d(t, { A: () => p });
      var i = n(32020),
        s = n(21414),
        r = n(52868),
        a = n(71928),
        o = n(78451),
        l = n(73130),
        c = n(84779),
        h = n(57682),
        v = n(97802),
        d = n(63274),
        u = n(91270);
      let p = {
        logo: o.default,
        paperBox: l.default,
        puzzle: h.default,
        rabbit: v.default,
        fb: s.default,
        instagram: r.default,
        linkedin: a.default,
        chart: i.default,
        plant: c.default,
        rocket: d.default,
        seek: u.default,
      };
    },
    86140: (e, t, n) => {
      let i;
      n.d(t, { A: () => ic });
      var s,
        r,
        a,
        o,
        l,
        c,
        h,
        v,
        d,
        u,
        p,
        m,
        f,
        x,
        g,
        w = n(12115),
        b = n(85021),
        y = n(50587),
        M = n(45441),
        z = n(90949),
        S = n(82632),
        P = n(93412),
        T = n(80337),
        D = n(27274),
        A = n(63337),
        _ = n(37828),
        C = n(50299),
        k = n(31024),
        W = n(34128),
        L = n(11478);
      let R = new ((s = new WeakMap()),
        (r = new WeakMap()),
        (a = new WeakMap()),
        (o = new WeakMap()),
        class {
          constructor() {
            var e = this;
            (0, y._)(this, s, { writable: !0, value: void 0 }),
              (0, y._)(this, r, { writable: !0, value: void 0 }),
              (0, y._)(this, a, { writable: !0, value: void 0 }),
              (0, y._)(this, o, { writable: !0, value: void 0 }),
              (0, M._)(this, s, {}),
              (0, M._)(this, r, {}),
              (0, M._)(this, a, {}),
              (this.on = (e, t) => {
                (0, b._)(this, s)[e] || ((0, b._)(this, s)[e] = []),
                  (0, b._)(this, s)[e].push(t);
              }),
              (this.off = (e, t) => {
                e in (0, b._)(this, r) && (0, b._)(this, r)[e] > 0
                  ? e in (0, b._)(this, a)
                    ? (0, b._)(this, a)[e].push(t)
                    : ((0, b._)(this, a)[e] = [t])
                  : (0, b._)(this, o).call(this, e, t);
              }),
              (0, M._)(this, o, (e, t) => {
                let n = (0, b._)(this, s)[e];
                if (n) {
                  let e = n.indexOf(t);
                  -1 !== e && n.splice(e, 1);
                }
              }),
              (this.dispatch = function (t) {
                for (
                  var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), l = 1;
                  l < n;
                  l++
                )
                  i[l - 1] = arguments[l];
                t in (0, b._)(e, r)
                  ? (0, z._)(e, r).value[t]++
                  : ((0, b._)(e, r)[t] = 1),
                  (0, b._)(e, s)[t] &&
                    (0, b._)(e, s)[t].forEach((e) => e(...i)),
                  (0, z._)(e, r).value[t]--,
                  0 == (0, b._)(e, r)[t] &&
                    t in (0, b._)(e, a) &&
                    (0, b._)(e, a)[t].length > 0 &&
                    ((0, b._)(e, a)[t].forEach((n) =>
                      (0, b._)(e, o).call(e, t, n)
                    ),
                    delete b._(e, a)[t]);
              }),
              (this.checkSelf = () => {
                Object.keys((0, b._)(this, s)).forEach((e) => {
                  (0, b._)(this, s)[e].forEach((t) => {
                    if ("function" != typeof t)
                      throw ""
                        .concat(e, " listener ")
                        .concat(t, " is not a function!");
                  });
                });
              });
          }
        })(),
        N = {
          devMode: 0,
          camera: { fov: 45, depth: 10, near: 0.1, far: 1e3 },
          logoCount: 10,
          brandColor: "#d49c4d",
        },
        E = {
          tower: "/models/tower02.glb",
          env: "/textures/env.jpg",
          iridescenceMap: "/textures/iridescence.png",
          noiseMap: "/textures/LDR_RG01_0-512.png",
          noiseMapSmall: "/textures/LDR_RG01_0.png",
          sphereNormal: "/textures/sphere-normal.jpg",
          logos: [
            "/textures/logos/logo0.jpg",
            "/textures/logos/logo1.jpg",
            "/textures/logos/logo2.jpg",
            "/textures/logos/logo3.jpg",
            "/textures/logos/logo4.jpg",
            "/textures/logos/logo5.jpg",
            "/textures/logos/logo6.jpg",
            "/textures/logos/logo7.jpg",
            "/textures/logos/logo8.jpg",
            "/textures/logos/logo9.jpg",
          ],
          icons: [
            "/textures/icons/glimpse.png",
            "/textures/icons/pitch.png",
            "/textures/icons/due-dill.png",
          ],
        },
        j = {},
        B = (e, t) => (
          e in j ||
            (void 0 === t &&
              (N.devMode &&
                console.log("Using 0 for undefined uniform ".concat(e)),
              (t = 0)),
            (j[e] = { value: t })),
          j[e]
        ),
        O = (e, t) => {
          e in j ? (j[e].value = t) : (j[e] = { value: t });
        },
        F = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
          return O(t, n7.assetsManager.get(e)), B(t);
        },
        V = N.devMode ? new A.Ay() : null,
        q = {};
      function U(e, t, n, i) {
        return N.devMode ? V.add(e, t, n, i) : null;
      }
      function I(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : 0.5 * (t + n);
        if (!N.devMode) return B(e, i);
        for (; e in q; ) e += "_";
        return (q[e] = i), V.add(q, e, t, n).onChange((t) => O(e, t)), B(e, i);
      }
      class H {
        constructor() {
          I("aurora.intensity", 0, 1, 0.15);
        }
      }
      class X {
        constructor(e) {
          (this.load = (e, t, n, i) => {
            void 0 !== this.path && (e = this.path + e),
              (e = this.manager.resolveURL(e)),
              this.manager.itemStart(e),
              setTimeout(() => {
                fetch(e)
                  .then((e) => e.json())
                  .then((n) => {
                    t(n), this.manager.itemEnd(e);
                  })
                  .catch(i);
              }, 1e3);
          }),
            (this.manager = e);
        }
      }
      var Y = new WeakMap(),
        G = new WeakMap(),
        K = new WeakMap();
      class Z {
        constructor() {
          (0, y._)(this, Y, { writable: !0, value: void 0 }),
            (0, y._)(this, G, { writable: !0, value: void 0 }),
            (0, y._)(this, K, { writable: !0, value: void 0 }),
            (0, M._)(this, Y, (e) => {
              switch (e) {
                case "jpg":
                case "png":
                  return new T.Tap(this.manager);
                case "gltf":
                case "glb":
                  return new _.B(this.manager);
                case "json":
                  return new X(this.manager);
                default:
                  throw "Unknown resource type ".concat(e, "!");
              }
            }),
            (0, M._)(this, G, (e, t) => {
              let n, i;
              "string" == typeof e
                ? (n = (i = e).substring(i.lastIndexOf(".") + 1, i.length))
                : ((i = e.path), (n = e.type)),
                (this.paths[t] = i),
                (this.loaders[t] = (0, b._)(this, Y).call(this, n));
            }),
            (0, M._)(this, K, (e) => {
              Object.entries(e).forEach((e) => {
                let [t, n] = e;
                Array.isArray(n)
                  ? ((t = t.substr(0, t.length - 1)),
                    n.forEach((e, n) => {
                      (0, b._)(this, G).call(this, e, t + n);
                    }))
                  : (0, b._)(this, G).call(this, n, t);
              });
            }),
            (this.load = () => {
              Object.keys(this.paths).forEach((e) => {
                this.loaders[e].load(
                  this.paths[e],
                  (t) => (this.resources[e] = t)
                );
              });
            }),
            (this.get = (e) => this.resources[e]),
            (this.manager = new T.KPJ(
              () => R.dispatch("loading.complete", {}),
              (e, t, n) =>
                R.dispatch("loading.progress", { url: e, loaded: t, total: n }),
              (e) => R.dispatch("loading.error", { url: e })
            )),
            (this.paths = {}),
            (this.loaders = {}),
            (this.resources = {}),
            (0, b._)(this, K).call(this, E);
        }
      }
      class Q {
        get enabled() {
          return this._enabled;
        }
        set enabled(e) {
          this._enabled = e;
        }
        constructor(
          e = new T.Z58(),
          t = new T.ubm(
            n7.settings.camera.fov,
            n7.viewport.aspect,
            n7.settings.camera.near,
            n7.settings.camera.far
          ),
          n = {}
        ) {
          (this._enabled = !1),
            (this.scene = e),
            (this.camera = t),
            (this.postFx = n);
        }
      }
      class J {
        constructor(e, t, n = 1, i = 1) {
          (this.update = (e) => {
            let t = (this.target - this.value) * this.k,
              n = this.v * this.damp;
            (this.v += (t - n) * e), (this.value += this.v * e);
          }),
            (this.damp = i),
            (this.k = n),
            (this.v = 0),
            (this.value = t),
            (this.target = t),
            (J.collection[e] = this),
            J.array.push(this);
        }
      }
      (J.collection = {}),
        (J.array = []),
        (J.get = (e) => J.collection[e].value),
        (J.getV = (e) => J.collection[e].v),
        (J.set = (e, t) => (J.collection[e].target = t)),
        (J.update = (e) => J.array.forEach((t) => t.update(e)));
      class $ {
        constructor(e, t, n = 1, i = 1) {
          (this.getScalarNames = (e, t) => {
            let n = [];
            for (let i = 0; i < t; i++)
              n.push("!__vec".concat(t, "-").concat(i, "@").concat(e));
            return n;
          }),
            (this.name = e),
            (this.size = t.length),
            (this.scalarNames = this.getScalarNames(this.name, this.size)),
            (this.springs = this.scalarNames.map(
              (e, s) => new J(e, t[s], n, i)
            )),
            ($.collection[e] = this);
        }
      }
      ($.collection = {}),
        ($.get = (e) => $.collection[e].springs.map((e) => e.value)),
        ($.getV = (e) => $.collection[e].springs.map((e) => e.v)),
        ($.set = (e, t) =>
          $.collection[e].springs.forEach((e, n) => (e.target = t[n])));
      class ee {
        constructor() {
          (this.onFrame = (e) => {
            this.stats && this.stats.begin(),
              "prevTime" in this || (this.prevTime = e);
            let t = Math.min(1e3 / 30, e - this.prevTime),
              n = 0.001 * t,
              i = 0.001 * e;
            this.prevTime = e;
            let s = { time: e, dt: t, seconds: i, ds: n };
            J.update(n),
              O(ee.timeProvider, e),
              O(ee.secondsProvider, i),
              O(ee.dsProvider, n),
              R.dispatch(ee.event, s),
              R.dispatch("beforeRender", s),
              n7.pipeline.render(),
              R.dispatch("afterRender", s);
          }),
            R.on("frame.raw", this.onFrame);
        }
      }
      (ee.event = "Tick.event"),
        (ee.timeProvider = "Tick.timeProvider"),
        (ee.secondsProvider = "Tick.secondsProvider"),
        (ee.dsProvider = "Tick.dsProvider");
      class et {
        constructor() {
          (this.onTick = (e) => {
            let { time: t } = e;
            this.currentTick++,
              6 == this.currentTick &&
                (this.skippedStart
                  ? (6e3 / (t - this.benchmarkStartTime) < 40 &&
                      R.dispatch(et.lowFpsEvent),
                    R.off(ee.event, this.onTick))
                  : (this.skippedStart = !0),
                (this.benchmarkStartTime = t),
                (this.currentTick = 0));
          }),
            (this.skippedStart = !1),
            (this.currentTick = 0),
            (this.benchmarkStartTime = 0),
            R.on(ee.event, this.onTick);
        }
      }
      et.lowFpsEvent = "features.lowfps";
      var en = new WeakMap();
      class ei {
        constructor() {
          (0, y._)(this, en, { writable: !0, value: void 0 }),
            (this.level = 2),
            (0, M._)(this, en, []),
            (this.onFlush = () => {
              (0, b._)(this, en).length = 0;
            }),
            (this.onTick = (e) => {
              let { time: t } = e;
              (0, b._)(this, en).push(t),
                !((0, b._)(this, en).length < 40) &&
                  (t - (0, b._)(this, en).shift() < 1e3 ||
                    (((0, b._)(this, en).length = 0),
                    this.level--,
                    n7.settings.devMode &&
                      console.log("Performance.level:", this.level),
                    R.dispatch(ei.event, this.level),
                    0 == this.level && R.off(ee.event, this.onTick)));
            }),
            R.on("Performance.flushEvent", this.onFlush),
            R.on(ee.event, this.onTick);
        }
      }
      (ei.event = "Performance.event"),
        (ei.flushEvent = "Performance.flushEvent");
      var es = new WeakMap();
      class er {
        constructor() {
          (0, y._)(this, es, { writable: !0, value: void 0 }),
            (this.container = document.body),
            (this.x = 0),
            (this.y = 0),
            (this.v2 = new T.I9Y()),
            (this.iv2 = new T.I9Y()),
            (this.v4 = new T.IUQ()),
            (this.aspect = 1),
            (this.aspectV2 = new T.I9Y()),
            (this.dpr = 1),
            (this.isHorizontal = !0),
            (0, M._)(this, es, null),
            (this.resetDPR = () => {
              (this.dpr = Math.min(2, window.devicePixelRatio)), this.update();
            }),
            (this.debounceResize = () => {
              null !== (0, b._)(this, es) && clearTimeout((0, b._)(this, es)),
                (0, M._)(this, es, setTimeout(this.update, 333));
            }),
            (this.update = () => {
              (0, M._)(this, es, null),
                (this.x =
                  this.v2.x =
                  this.v4.x =
                    this.container.clientWidth || this.container.innerWidth),
                (this.y =
                  this.v2.y =
                  this.v4.y =
                    this.container.clientHeight || this.container.innerHeight),
                (this.aspect = this.x / this.y),
                (this.aspectV2.x = this.aspect > 1 ? this.aspect : 1),
                (this.aspectV2.y = this.aspect > 1 ? 1 : 1 / this.aspect),
                (this.iv2.x = this.v4.z = 1 / this.x),
                (this.iv2.y = this.v4.w = 1 / this.y),
                (this.isHorizontal = this.aspect >= 1),
                R.dispatch(er.resizeEvent, this);
            }),
            (this.container = n7.container),
            this.resetDPR(),
            O(er.iv2Provider, this.iv2),
            window.addEventListener("resize", this.debounceResize);
        }
      }
      (er.resizeEvent = "Viewport.resizeEvent"),
        (er.iv2Provider = "Viewport.iv2Provider");
      var ea =
        "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(2. * uv - 1., 0., 1.);\n}";
      class eo {
        constructor(e) {
          (this.render = (e, t, n) => {
            (t.material = this.material),
              e.setRenderTarget(null),
              e.render(t, n);
          }),
            e.forEach((e) => !e.out && (e.out = {}));
          let t = Object.assign(
              { map: B("post.screen"), texelSize: { value: n7.viewport.iv2 } },
              ...e.map((e) => e.out.uniforms)
            ),
            n =
              "\nprecision highp float;\n#define saturate(x) clamp(x, 0., 1.)\nvarying vec2 vUv;\nuniform sampler2D map;\nuniform vec2 texelSize;\n\n"
                .concat(
                  e.map((e) => e.out.declarations).join(""),
                  "\n\nvoid main() {\n  vec2 uv = vUv;\n  vec3 color = texture2D(map, uv).rgb;\n\n  "
                )
                .concat(
                  e.map((e) => e.out.inject).join(""),
                  "\n\n  gl_FragColor = vec4(saturate(color), 1.);\n}\n    "
                );
          this.material = new T.BKk({
            uniforms: t,
            vertexShader: ea,
            fragmentShader: n,
          });
        }
      }
      let el = new T.I9Y(1, 0),
        ec = new T.I9Y(0, 1);
      class eh {
        constructor() {
          (this.out = {
            uniforms: {
              bloomLevel0: B("post.bloom.level0"),
              bloomLevel1: B("post.bloom.level1"),
              bloomLevel2: B("post.bloom.level2"),
              bloomLevel3: B("post.bloom.level3"),
              bloomLevel4: B("post.bloom.level4"),
              bloomRadius: I("post.bloom.radius", 0, 1, 0),
              bloomPower: I("post.bloom.power", 0, 2, 0.1),
            },
            declarations:
              "\nuniform sampler2D bloomLevel0;\nuniform sampler2D bloomLevel1;\nuniform sampler2D bloomLevel2;\nuniform sampler2D bloomLevel3;\nuniform sampler2D bloomLevel4;\nuniform float bloomRadius;\nuniform float bloomPower;\n    ",
            inject:
              "\nvec3 bloom = (\n  mix(1., .2, bloomRadius) * texture2D(bloomLevel0, uv).rgb + \n  mix(.8, .4, bloomRadius) * texture2D(bloomLevel1, uv).rgb + \n  mix(.6, .6, bloomRadius) * texture2D(bloomLevel2, uv).rgb + \n  mix(.4, .8, bloomRadius) * texture2D(bloomLevel3, uv).rgb + \n  mix(.2, 1., bloomRadius) * texture2D(bloomLevel4, uv).rgb\n);\ncolor += bloomPower * bloom * bloom;\n    ",
          }),
            (this.render = (e, t, n) => {
              (t.material = this.filterMaterial),
                e.setRenderTarget(this.filterRenderTarget),
                e.render(t, n);
              let i = this.filterRenderTarget;
              for (let s = 0; s < this.nMips; s++) {
                let r = this.blurMaterials[s];
                (t.material = r),
                  (r.uniforms.t.value = i.texture),
                  (r.uniforms.direction.value = el),
                  e.setRenderTarget(this.renderTargetsHorizontal[s]),
                  e.render(t, n),
                  (r.uniforms.t.value =
                    this.renderTargetsHorizontal[s].texture),
                  (r.uniforms.direction.value = ec),
                  e.setRenderTarget(this.renderTargetsVertical[s]),
                  e.render(t, n),
                  (i = this.renderTargetsVertical[s]);
              }
            }),
            (this.onResize = (e) => {
              let { x: t, y: n } = e,
                i = t,
                s = n;
              for (let e = 0; e < this.nMips; e++)
                this.blurMaterials[e].uniforms.invSize.value.set(1 / i, 1 / s),
                  this.renderTargetsHorizontal[e].setSize(i, s),
                  this.renderTargetsVertical[e].setSize(i, s),
                  (i = Math.round(0.5 * i)),
                  (s = Math.round(0.5 * s));
              this.filterRenderTarget.setSize(t, n);
            });
          let e = [3, 5, 7, 9, 11];
          (this.renderTargetsHorizontal = []),
            (this.renderTargetsVertical = []),
            (this.blurMaterials = []),
            (this.nMips = 5),
            (this.resolutions = []);
          let t = n7.viewport.x,
            n = n7.viewport.y;
          for (let i = 0; i < this.nMips; i++) {
            this.resolutions.push(t, n),
              this.renderTargetsHorizontal.push(
                new T.nWS(t, n, eR.rtParameters)
              ),
              this.renderTargetsVertical.push(new T.nWS(t, n, eR.rtParameters));
            let s = e[i];
            this.blurMaterials.push(
              new T.BKk({
                defines: { KERNEL_RADIUS: s, SIGMA: s },
                uniforms: {
                  t: { value: null },
                  invSize: { value: new T.I9Y(1 / t, 1 / n) },
                  direction: { value: new T.I9Y(0.5, 0.5) },
                },
                vertexShader: ea,
                fragmentShader:
                  "varying vec2 vUv;\n\nuniform sampler2D t;\nuniform vec2 invSize;\nuniform vec2 direction;\n\nfloat gaussianPdf(float x, float sigma) {\n  return .39894 * exp(-.5 * x * x / (sigma * sigma)) / sigma;\n}\n\nvoid main() {\n  float fSigma = float(SIGMA);\n\n  float weightSum = gaussianPdf(0., fSigma);\n  vec3 diffuseSum = texture2D(t, vUv).rgb * weightSum;\n\n  #pragma unroll_loop_start\n  for (int i = 1; i < KERNEL_RADIUS; i++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = direction * invSize * x;\n    vec3 sample1 = texture2D(t, vUv + uvOffset).rgb;\n    vec3 sample2 = texture2D(t, vUv - uvOffset).rgb;\n    diffuseSum += (sample1 + sample2) * w;\n    weightSum += w + w;\n  }\n  #pragma unroll_loop_end\n\n  gl_FragColor = vec4(diffuseSum / weightSum, 1.);\n}",
              })
            ),
              (t = Math.round(0.5 * t)),
              (n = Math.round(0.5 * n));
          }
          (this.filterRenderTarget = new T.nWS(
            n7.viewport.x,
            n7.viewport.y,
            eR.rtParameters
          )),
            (this.filterMaterial = new T.BKk({
              uniforms: {
                t: B("post.screen"),
                threshold: I("post.bloom.filter.threshold", 0, 2, 0.1),
                width: I("post.bloom.filter.width", 1e-5, 0.5, 0.1),
                texelSize: { value: n7.viewport.iv2 },
              },
              vertexShader: ea,
              fragmentShader:
                "varying vec2 vUv;\n\nuniform sampler2D t;\nuniform float threshold;\nuniform float width;\nuniform vec2 texelSize;\n\nvoid main() {\n  vec2 uv = vUv;\n  vec3 color = texture2D(t, uv).rgb;\n\n  \n  float l = dot(color, vec3(0.299, 0.587, 0.114));\n  l = smoothstep(threshold - width, threshold + width, l);\n  color = max(color * l, 0.);\n\n  gl_FragColor = vec4(color, 1.);\n}",
            })),
            O("post.bloom.filter.result", this.filterRenderTarget.texture),
            O("post.bloom.level0", this.renderTargetsVertical[0].texture),
            O("post.bloom.level1", this.renderTargetsVertical[1].texture),
            O("post.bloom.level2", this.renderTargetsVertical[2].texture),
            O("post.bloom.level3", this.renderTargetsVertical[3].texture),
            O("post.bloom.level4", this.renderTargetsVertical[4].texture),
            R.on(er.resizeEvent, this.onResize);
        }
      }
      var ev =
          "varying vec2 vUv;\n\nuniform sampler2D map;\n\nvoid main() {\n  gl_FragColor = texture2D(map, vUv);\n}",
        ed = new WeakMap();
      class eu {
        get enabled() {
          return (0, b._)(this, ed);
        }
        set enabled(e) {
          (0, M._)(this, ed, e), this.updateSkipRender();
        }
        constructor() {
          (0, y._)(this, ed, { writable: !0, value: void 0 }),
            (this.skipRender = !0),
            (0, M._)(this, ed, !0),
            (this.superSampling = 2),
            (this.render = (e, t, n) => {
              if (this.skipRender) return;
              let i = n7.context.scene;
              (t.material = this.filterMaterial),
                e.setRenderTarget(this.filterRenderTarget),
                e.render(t, n),
                (t.material = this.overlayMaterial),
                e.setRenderTarget(this.overlayRenderTarget),
                e.render(t, n);
              let s = e.autoClear,
                r = i.background;
              (i.background = null),
                (e.autoClear = !1),
                e.render(i, n),
                (e.autoClear = s),
                (i.background = r),
                this.doDownscale
                  ? ((t.material = this.downscaleMaterial),
                    e.setRenderTarget(this.downscaleRenderTarget),
                    e.render(t, n),
                    O("post.screen", this.downscaleRenderTarget.texture))
                  : O("post.screen", this.overlayRenderTarget.texture);
            }),
            (this.onResize = (e) => {
              let { x: t, y: n } = e;
              this.filterRenderTarget.setSize(t, n),
                this.overlayRenderTarget.setSize(
                  t * this.superSampling,
                  n * this.superSampling
                ),
                this.doDownscale &&
                  this.downscaleRenderTarget.setSize(2 * t, 2 * n);
            }),
            (this.updateSkipRender = () => {
              this.skipRender =
                !(0, b._)(this, ed) ||
                1 === this.superSampling ||
                n7.viewport.x * n7.viewport.dpr > 2048 ||
                n7.viewport.y * n7.viewport.dpr > 2048;
            }),
            (this.doDownscale = this.superSampling > 2),
            (this.filterMaterial = new T.BKk({
              uniforms: {
                map: B("post.screen"),
                pixelSize: { value: n7.viewport.iv2 },
              },
              vertexShader: ea,
              fragmentShader:
                "#define s(x) clamp(x, 0., 1.)\n\nvarying vec2 vUv;\n\nuniform sampler2D map;\nuniform vec2 pixelSize;\n\nvoid main() {\n  vec3 c = s(texture2D(map, vUv).rgb);\n  vec3 N = s(texture2D(map, vec2(vUv.x, vUv.y - pixelSize.y)).rgb);\n  vec3 S = s(texture2D(map, vec2(vUv.x, vUv.y + pixelSize.y)).rgb);\n  vec3 W = s(texture2D(map, vec2(vUv.x - pixelSize.x, vUv.y)).rgb);\n  vec3 E = s(texture2D(map, vec2(vUv.x + pixelSize.x, vUv.y)).rgb);\n  vec3 m = max(\n    max(abs(c - N), abs(c - S)),\n    max(abs(c - W), abs(c - E))\n  );\n  float v = (m.x + m.y + m.z) * 10. - 1.;\n  gl_FragColor = vec4(v, 0., 0., 1.);\n}",
            })),
            (this.filterRenderTarget = new T.nWS(
              n7.viewport.x,
              n7.viewport.y,
              eR.rtParameters
            )),
            O("post.essaa.filter", this.filterRenderTarget.texture),
            (this.overlayMaterial = new T.BKk({
              uniforms: {
                scene: B("post.screen"),
                edges: { value: this.filterRenderTarget.texture },
              },
              vertexShader: ea,
              fragmentShader:
                "varying vec2 vUv;\n\nuniform sampler2D scene;\nuniform sampler2D edges;\n\nvoid main() {\n  if (texture2D(edges, vUv).r > 0.) discard;\n  \n  \n  \n  \n  gl_FragColor = texture2D(scene, vUv);\n}",
            })),
            (this.overlayRenderTarget = new T.nWS(
              n7.viewport.x * this.superSampling,
              n7.viewport.y * this.superSampling,
              eR.rtParameters
            )),
            O("post.essaa.overlay", this.overlayRenderTarget.texture),
            this.doDownscale &&
              ((this.downscaleMaterial = new T.BKk({
                uniforms: { map: { value: this.overlayRenderTarget.texture } },
                vertexShader: ea,
                fragmentShader: ev,
              })),
              (this.downscaleRenderTarget = new T.nWS(
                2 * n7.viewport.x,
                2 * n7.viewport.y,
                eR.rtParameters
              )),
              O("post.essaa.downscale", this.downscaleRenderTarget.texture)),
            R.on(er.resizeEvent, this.onResize),
            R.on(et.lowFpsEvent, () => {
              this.enabled = !1;
            }),
            U(this, "enabled");
        }
      }
      class ep {
        constructor() {
          (this.updatePointer = (e) => {
            let { x: t, y: n } = e;
            this.pointerV2.set(t / n7.viewport.x, 1 - n / n7.viewport.y),
              this.pointerNDC
                .copy(this.pointerV2)
                .multiplyScalar(2)
                .subScalar(1),
              R.dispatch(ep.pointerEvent, this.pointerV2),
              R.dispatch(ep.ndcEvent, this.pointerNDC),
              (this.pointerV3.x = this.pointerV2.x),
              (this.pointerV3.y = this.pointerV2.y);
          }),
            (this.onDown = () => {
              this.pointerV3.z = 1;
            }),
            (this.onUp = () => {
              this.pointerV3.z = 0;
            }),
            (this.pointerV2 = new T.I9Y()),
            (this.pointerNDC = new T.I9Y()),
            (this.pointerV3 = new T.Pq0()),
            O(ep.v2Provider, this.pointerV2),
            O(ep.v3Provider, this.pointerV3),
            this.updatePointer({
              x: 0.5 * n7.viewport.x,
              y: 0.5 * n7.viewport.y,
            }),
            R.on("pointer.raw", this.updatePointer),
            R.on("pointer.raw.down", this.onDown),
            R.on("pointer.raw.up", this.onUp);
        }
      }
      (ep.v2Provider = "Pointer.v2Provider"),
        (ep.v3Provider = "Pointer.v3Provider"),
        (ep.pointerEvent = "pointer.pointer"),
        (ep.ndcEvent = "pointer.ndc"),
        (ep.downEvent = "pointer.down"),
        (ep.upEvent = "pointer.up");
      let em = new T.bdM(2, 2, 1, 1),
        ef = new T.qUd(-1, 1, 1, -1, -1, 1),
        ex = function () {
          let {
              width: e,
              height: t,
              filter: n = T.hxR,
              format: i = T.GWd,
              type: s = T.ix0,
              wrapping: r = T.ghU,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            a = new T.nWS(e, t, {
              type: s,
              format: i,
              minFilter: n,
              magFilter: n,
              colorSpace: T.Zr2,
              depthBuffer: !1,
            });
          return (a.texture.wrapS = a.texture.wrapT = r), a;
        },
        eg = function () {
          let {
            width: e,
            height: t,
            filter: n = T.hxR,
            format: i = T.GWd,
            type: s = T.ix0,
            wrapping: r = T.ghU,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            read: ex({
              width: e,
              height: t,
              filter: n,
              format: i,
              type: s,
              wrapping: r,
            }),
            write: ex({
              width: e,
              height: t,
              filter: n,
              format: i,
              type: s,
              wrapping: r,
            }),
            swap() {
              let e = this.read;
              (this.read = this.write), (this.write = e);
            },
            isDFBO: !0,
          };
        },
        ew = (e) => {
          let {
            vertex: t,
            fragment: n,
            uniforms: i,
            glslVersion: s = null,
            geometry: r = em,
          } = e;
          return new T.eaF(
            r,
            new T.D$Q({
              vertexShader: t,
              fragmentShader: n,
              uniforms: i,
              depthTest: !1,
              depthWrite: !1,
              glslVersion: s,
            })
          );
        },
        eb = (e, t) => {
          let n = t.isDFBO ? t.write : t;
          n7.pipeline.renderer.setRenderTarget(n),
            n7.pipeline.renderer.render(e, ef),
            t.isDFBO && t.swap();
        };
      var ey =
          "precision highp float;\n\nattribute vec2 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\n\nuniform vec2 texelSize;\n\nvoid main () {\n  vUv = uv;\n  vL = vUv - vec2(texelSize.x, 0.);\n  vR = vUv + vec2(texelSize.x, 0.);\n  vT = vUv + vec2(0., texelSize.y);\n  vB = vUv - vec2(0., texelSize.y);\n  gl_Position = vec4(position, 0., 1);\n}",
        eM = new WeakMap(),
        ez = new WeakMap();
      class eS {
        constructor() {
          (0, y._)(this, eM, { writable: !0, value: void 0 }),
            (0, y._)(this, ez, { writable: !0, value: void 0 }),
            (0, M._)(this, eM, !1),
            (0, M._)(this, ez, !1),
            (this.createRTs = (e, t, n) => {
              (this.densityDFBO = eg({
                width: n * e,
                height: n * t,
                filter: T.k6q,
                format: T.GWd,
              })),
                (this.velocityDFBO = eg({
                  width: e,
                  height: t,
                  filter: T.k6q,
                  format: T.paN,
                })),
                (this.pressureDFBO = eg({ width: e, height: t })),
                (this.divergenceRT = ex({ width: e, height: t })),
                (this.curlRT = ex({ width: e, height: t })),
                (this.normalRT = ex({ width: n * e, height: n * t }));
            }),
            (this.onResize = (e) => {
              let { aspect: t } = e,
                n = n7.viewport.aspect > 1,
                i = n ? 256 : 128,
                s = n ? 128 : 256;
              this.texelSize.value.set(1 / i, 1 / s),
                this.dyeTexelSize.value.set(1 / i / 2, 1 / s / 2),
                (this.aspectRatio.value = t),
                this.divergenceRT.dispose(),
                this.curlRT.dispose(),
                this.normalRT.dispose(),
                this.densityDFBO.read.dispose(),
                this.densityDFBO.write.dispose(),
                this.velocityDFBO.read.dispose(),
                this.velocityDFBO.write.dispose(),
                this.pressureDFBO.read.dispose(),
                this.pressureDFBO.write.dispose(),
                this.createRTs(i, s, 2);
            }),
            (this.onPointer = (e) => {
              let { x: t, y: n } = e;
              "oldPointer" in this &&
                this.splats.push({
                  x: t,
                  y: n,
                  dx: 1e4 * (t - this.oldPointer.x),
                  dy: 1e4 * (n - this.oldPointer.y),
                }),
                (this.oldPointer = { x: t, y: n });
            }),
            (this.renderSplat = (e) => {
              let { x: t, y: n, dx: i, dy: s } = e;
              this.splatProgram.material.uniforms.point.value.set(t, n),
                this.splatProgram.material.uniforms.color.value.set(i, s, 1),
                (this.splatProgram.material.uniforms.radius.value = 0.002),
                (this.splatProgram.material.uniforms.baseMap.value =
                  this.velocityDFBO.read.texture),
                eb(this.splatProgram, this.velocityDFBO),
                this.splatProgram.material.uniforms.color.value.set(i, s, 1),
                (this.splatProgram.material.uniforms.baseMap.value =
                  this.densityDFBO.read.texture),
                eb(this.splatProgram, this.densityDFBO);
            }),
            (this.render = (e) => {
              let { ds: t } = e,
                n = n7.pipeline.renderer.autoClear;
              (n7.pipeline.renderer.autoClear = !1),
                (0, b._)(this, eM) &&
                  ((this.spawnerProgram.material.uniforms.baseMap.value =
                    this.velocityDFBO.read.texture),
                  (this.spawnerProgram.material.uniforms.amplification = B(
                    "fluid.spawn.velocity"
                  )),
                  eb(this.spawnerProgram, this.velocityDFBO),
                  (this.spawnerProgram.material.uniforms.baseMap.value =
                    this.densityDFBO.read.texture),
                  (this.spawnerProgram.material.uniforms.amplification = B(
                    "fluid.spawn.density"
                  )),
                  eb(this.spawnerProgram, this.densityDFBO));
              for (let e = this.splats.length - 1; e >= 0; e--)
                this.renderSplat(this.splats[e]);
              (this.splats.length = 0),
                (this.curlProgram.material.uniforms.uVelocity.value =
                  this.velocityDFBO.read.texture),
                eb(this.curlProgram, this.curlRT),
                (this.vorticityProgram.material.uniforms.uVelocity.value =
                  this.velocityDFBO.read.texture),
                (this.vorticityProgram.material.uniforms.uCurl.value =
                  this.curlRT.texture),
                (this.vorticityProgram.material.uniforms.dt.value = t),
                eb(this.vorticityProgram, this.velocityDFBO),
                (this.divergenceProgram.material.uniforms.uVelocity.value =
                  this.velocityDFBO.read.texture),
                eb(this.divergenceProgram, this.divergenceRT),
                (this.clearProgram.material.uniforms.uTexture.value =
                  this.pressureDFBO.read.texture),
                (this.clearProgram.material.uniforms.value.value = 0.8),
                eb(this.clearProgram, this.pressureDFBO),
                (this.pressureProgram.material.uniforms.uDivergence.value =
                  this.divergenceRT.texture);
              for (let e = 0; e < 2; e++)
                (this.pressureProgram.material.uniforms.uPressure.value =
                  this.pressureDFBO.read.texture),
                  eb(this.pressureProgram, this.pressureDFBO);
              (this.gradienSubtractProgram.material.uniforms.uPressure.value =
                this.pressureDFBO.read.texture),
                (this.gradienSubtractProgram.material.uniforms.uVelocity.value =
                  this.velocityDFBO.read.texture),
                eb(this.gradienSubtractProgram, this.velocityDFBO),
                this.advectionProgram.material.uniforms.dyeTexelSize.value.copy(
                  this.texelSize.value
                ),
                (this.advectionProgram.material.uniforms.uVelocity.value =
                  this.velocityDFBO.read.texture),
                (this.advectionProgram.material.uniforms.uSource.value =
                  this.velocityDFBO.read.texture),
                (this.advectionProgram.material.uniforms.dissipation.value = 0.98),
                eb(this.advectionProgram, this.velocityDFBO),
                this.advectionProgram.material.uniforms.dyeTexelSize.value.copy(
                  this.dyeTexelSize.value
                ),
                (this.advectionProgram.material.uniforms.uVelocity.value =
                  this.velocityDFBO.read.texture),
                (this.advectionProgram.material.uniforms.uSource.value =
                  this.densityDFBO.read.texture),
                (this.advectionProgram.material.uniforms.dissipation.value = 0.97),
                eb(this.advectionProgram, this.densityDFBO),
                (0, b._)(this, ez) &&
                  ((this.normalProgram.material.uniforms.uDensity.value =
                    this.densityDFBO.read.texture),
                  eb(this.normalProgram, this.normalRT)),
                (n7.pipeline.renderer.autoClear = n),
                O(eS.velocityProvider, this.velocityDFBO.read.texture),
                O(eS.densityProvider, this.densityDFBO.read.texture),
                O(eS.normalProvider, this.normalRT.texture),
                R.dispatch("fluid", this);
            });
          let e = n7.viewport.aspect > 1,
            t = e ? 256 : 128,
            n = e ? 128 : 256,
            i = { value: new T.I9Y(1 / t, 1 / n) },
            s = { value: new T.I9Y(1 / t / 2, 1 / n / 2) },
            r = { value: n7.viewport.aspect };
          (this.texelSize = i),
            (this.dyeTexelSize = s),
            (this.aspectRatio = r),
            this.createRTs(t, n, 2),
            (this.clearProgram = ew({
              vertex: ey,
              fragment:
                "precision mediump float;\nprecision mediump sampler2D;\n\nvarying highp vec2 vUv;\n\nuniform sampler2D uTexture;\nuniform float value;\n\nvoid main () {\n  gl_FragColor.rgb = value * texture2D(uTexture, vUv).rgb;\n  gl_FragColor.a = 1.;\n}",
              uniforms: {
                texelSize: i,
                uTexture: { value: null },
                value: { value: 0.8 },
              },
            })),
            (this.splatProgram = ew({
              vertex: ey,
              fragment:
                "precision highp float;\nprecision highp sampler2D;\n\nvarying vec2 vUv;\n\nuniform sampler2D baseMap;\nuniform float aspectRatio;\nuniform vec3 color;\nuniform vec2 point;\nuniform float radius;\n\nvoid main () {\n  vec2 p = vUv - point.xy;\n  p.x *= aspectRatio;\n\n  vec3 splat = exp(-dot(p, p) / radius) * color;\n  vec3 base = texture2D(baseMap, vUv).xyz;\n  \n  gl_FragColor = vec4(base + splat, 1.);\n}",
              uniforms: {
                texelSize: i,
                baseMap: { value: null },
                aspectRatio: r,
                color: { value: new T.Pq0() },
                point: { value: new T.I9Y() },
                radius: { value: 0.002 },
              },
            })),
            (0, b._)(this, eM) &&
              ((this.spawnerProgram = ew({
                vertex: ey,
                fragment:
                  "precision highp float;\nprecision highp sampler2D;\n\nvarying vec2 vUv;\n\nuniform sampler2D spawner;\nuniform sampler2D baseMap;\nuniform float amplification;\nuniform float threshold;\nuniform float aspectRatio;\n\nvoid main () {\n  vec3 base = texture2D(baseMap, vUv).xyz;\n  vec3 spawn = texture2D(spawner, vUv).xyz;\n  float power = dot(spawn, vec3(.333));\n\n  \n  \n  \n  \n  \n  \n\n  \n  \n  \n  \n  \n  \n  \n\n  base.y += power * amplification * step(threshold, power);\n  gl_FragColor = vec4(base, 1.);\n}",
                uniforms: {
                  baseMap: { value: null },
                  spawner: B("post.screen"),
                  aspectRatio: { value: t / n },
                  amplification: { value: 0 },
                  threshold: I("fluid.spawn.threshold", 0, 5, 0.1),
                },
              })),
              I("fluid.spawn.velocity", 0, 10, 3),
              I("fluid.spawn.density", 0, 100, 33)),
            (this.advectionProgram = ew({
              vertex: ey,
              fragment:
                "precision highp float;\nprecision highp sampler2D;\n\nvarying vec2 vUv;\n\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\n\nvoid main () {\n  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n  gl_FragColor = dissipation * texture2D(uSource, coord);\n  gl_FragColor.a = 1.;\n}",
              uniforms: {
                texelSize: i,
                dyeTexelSize: s,
                uVelocity: { value: null },
                uSource: { value: null },
                dt: { value: 0.016 },
                dissipation: { value: 1 },
              },
            })),
            (this.divergenceProgram = ew({
              vertex: ey,
              fragment:
                "precision mediump float;\nprecision mediump sampler2D;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nuniform sampler2D uVelocity;\n\nvoid main () {\n  float L = texture2D(uVelocity, vL).x;\n  float R = texture2D(uVelocity, vR).x;\n  float T = texture2D(uVelocity, vT).y;\n  float B = texture2D(uVelocity, vB).y;\n  vec2 C = texture2D(uVelocity, vUv).xy;\n  if (vL.x < 0.0) { L = -C.x; }\n  if (vR.x > 1.0) { R = -C.x; }\n  if (vT.y > 1.0) { T = -C.y; }\n  if (vB.y < 0.0) { B = -C.y; }\n  float div = 0.5 * (R - L + T - B);\n  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n}",
              uniforms: { texelSize: i, uVelocity: { value: null } },
            })),
            (this.curlProgram = ew({
              vertex: ey,
              fragment:
                "precision mediump float;\nprecision mediump sampler2D;\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\nuniform sampler2D uVelocity;\nvoid main () {\n  float L = texture2D(uVelocity, vL).y;\n  float R = texture2D(uVelocity, vR).y;\n  float T = texture2D(uVelocity, vT).x;\n  float B = texture2D(uVelocity, vB).x;\n  float vorticity = R - L - T + B;\n  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n}",
              uniforms: { texelSize: i, uVelocity: { value: null } },
            })),
            (this.vorticityProgram = ew({
              vertex: ey,
              fragment:
                "precision highp float;\nprecision highp sampler2D;\n\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\n\nuniform sampler2D uVelocity;\nuniform sampler2D uCurl;\nuniform float curl;\nuniform float dt;\n\nvoid main () {\n  float L = texture2D(uCurl, vL).x;\n  float R = texture2D(uCurl, vR).x;\n  float T = texture2D(uCurl, vT).x;\n  float B = texture2D(uCurl, vB).x;\n  float C = texture2D(uCurl, vUv).x;\n  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n  force /= length(force) + 0.0001;\n  force *= curl * C;\n  force.y *= -1.0;\n  vec2 vel = texture2D(uVelocity, vUv).xy;\n  gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n}",
              uniforms: {
                texelSize: i,
                uVelocity: { value: null },
                uCurl: { value: null },
                curl: { value: 20 },
                dt: { value: 0.016 },
              },
            })),
            (this.pressureProgram = ew({
              vertex: ey,
              fragment:
                "precision mediump float;\nprecision mediump sampler2D;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nuniform sampler2D uPressure;\nuniform sampler2D uDivergence;\n\nvoid main () {\n  float L = texture2D(uPressure, vL).x;\n  float R = texture2D(uPressure, vR).x;\n  float T = texture2D(uPressure, vT).x;\n  float B = texture2D(uPressure, vB).x;\n  float C = texture2D(uPressure, vUv).x;\n  float divergence = texture2D(uDivergence, vUv).x;\n  float pressure = (L + R + B + T - divergence) * 0.25;\n  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n}",
              uniforms: {
                texelSize: i,
                uPressure: { value: null },
                uDivergence: { value: null },
              },
            })),
            (this.gradienSubtractProgram = ew({
              vertex: ey,
              fragment:
                "precision mediump float;\nprecision mediump sampler2D;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nuniform sampler2D uPressure;\nuniform sampler2D uVelocity;\n\nvoid main () {\n  float L = texture2D(uPressure, vL).x;\n  float R = texture2D(uPressure, vR).x;\n  float T = texture2D(uPressure, vT).x;\n  float B = texture2D(uPressure, vB).x;\n  vec2 velocity = texture2D(uVelocity, vUv).xy;\n  velocity.xy -= vec2(R - L, T - B);\n  gl_FragColor = vec4(velocity, 0.0, 1.0);\n}",
              uniforms: {
                texelSize: i,
                uPressure: { value: null },
                uVelocity: { value: null },
              },
            })),
            (0, b._)(this, ez) &&
              (this.normalProgram = ew({
                vertex: ey,
                fragment:
                  "precision mediump float;\nprecision mediump sampler2D;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nuniform sampler2D uDensity;\n\nvoid main () {\n  float C = length(texture2D(uDensity, vUv).xy);\n  float R = length(texture2D(uDensity, vR).xy);\n  float B = length(texture2D(uDensity, vB).xy);\n  vec2 dN = vec2(R - C, B - C);\n  vec3 N = vec3(0., 1., 0.);\n  vec2 eps = vec2(.001, 0.);\n  N = normalize(N + cross(dN.x * N + eps.xyy, dN.y * N + eps.yyx));\n\n  gl_FragColor = vec4(N, 1.0);\n}",
                uniforms: { texelSize: i, uDensity: { value: null } },
              })),
            (this.splats = []),
            R.on(ee.event, this.render),
            R.on(ep.pointerEvent, this.onPointer),
            R.on(er.resizeEvent, this.onResize);
        }
      }
      (eS.velocityProvider = "Fluid.velocityProvider"),
        (eS.densityProvider = "Fluid.densityProvider"),
        (eS.normalProvider = "Fluid.normalProvider");
      class eP {
        constructor() {
          (this.shift = new T.I9Y()),
            (this.onTick = () => {
              (this.shift.x += 0.25),
                this.shift.x >= 1 &&
                  ((this.shift.x = 0), (this.shift.y += 0.25)),
                this.shift.y >= 1 && (this.shift.y = 0);
            });
          let e = n7.assetsManager.get("noiseMap");
          (e.colorSpace = T.er$),
            (e.generateMipmaps = !1),
            O(eP.mapProvider, e),
            O(eP.shiftProvider, this.shift),
            R.on(ee.event, this.onTick);
        }
      }
      (eP.mapProvider = "BlueNoise.mapProvider"),
        (eP.shiftProvider = "BlueNoise.shiftProvider");
      class eT {
        constructor() {
          (this.enabled = !0),
            (this.render = (e, t, n) => {
              this.enabled &&
                ((t.material = this.material),
                e.setRenderTarget(this.rt),
                e.render(t, n),
                O("post.screen", this.rt.texture));
            }),
            (this.onResize = (e) => {
              let { x: t, y: n } = e;
              this.rt.setSize(t, n);
            }),
            (this.setEnabled = (e) => {
              this.enabled = e;
            }),
            (this.material = new T.BKk({
              uniforms: {
                param: I("fluid.param", 0, 1, 0.005),
                seconds: B(ee.secondsProvider),
                pixelSize: B(er.iv2Provider),
                map: B("post.screen"),
                fluidMap: B(eS.densityProvider),
                noiseMap: B(eP.mapProvider),
                noiseShift: B(eP.shiftProvider),
                iridescenceMap: F("iridescenceMap"),
              },
              vertexShader: ea,
              fragmentShader:
                "varying vec2 vUv;\n\nuniform float param;\nuniform float seconds;\nuniform vec2 pixelSize;\nuniform sampler2D map;\nuniform sampler2D fluidMap;\nuniform sampler2D noiseMap;\nuniform vec2 noiseShift;\nuniform sampler2D iridescenceMap;\n\n#define steps 8.\n\nvec3 getHue(float hue) {\n  hue = fract(hue);\n  float r = abs(hue * 6.0 - 3.0) - 1.0;\n  float g = 2.0 - abs(hue * 6.0 - 2.0);\n  float b = 2.0 - abs(hue * 6.0 - 4.0);\n  return clamp(vec3(r, g, b), 0.0, 1.0) * 0.9 + 0.1;\n}\n\nvec2 getNoise() {\n  vec2 uv = fract(gl_FragCoord.xy / 128.) * 0.25 + noiseShift;\n  return texture2D(noiseMap, uv).rg;\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec2 noise = getNoise();\n  vec2 duv = texture2D(fluidMap, uv).xy * 1e-4;\n  uv += duv * (noise * 0.5 + 1.);\n  vec3 color = texture2D(map, uv).rgb;\n  float power = smoothstep(0.005, 0.015, length(duv));\n  vec2 fc = uv - 0.5;\n  vec2 barrel2 = uv * (1. - uv);\n  float barrel = pow(1. - 16. * barrel2.x * barrel2.y, 3.);\n  power += barrel;\n  if (power > 0.) {\n    duv += fc * barrel;\n    duv = normalize(duv) * pixelSize * 3.;\n    duv += normalize(fc) * pixelSize * barrel;\n    uv -= duv * (steps * 0.5 + noise.r * 3.);\n    vec3 weight = vec3(1.);\n    for (float i = 0.; i < steps; i++) {\n      uv += duv;\n      vec3 hue = getHue(i / steps) * power;\n      color += texture2D(map, uv).rgb * hue;\n      weight += hue;\n    }\n    color /= weight;\n  }\n  \n  float fluid = smoothstep(0., 0.99, power) * smoothstep(1., 0.99, power) * noise.r;\n  color = color + fluid * 0.02;\n  gl_FragColor = vec4(color, 1.);\n}",
            })),
            (this.rt = new T.nWS(
              n7.viewport.x,
              n7.viewport.y,
              eR.rtParameters
            )),
            R.on(er.resizeEvent, this.onResize),
            R.on(eT.enableEvent, this.setEnabled);
        }
      }
      eT.enableEvent = "Fluidifier.enableEvent";
      class eD {
        constructor() {
          (this.out = {
            uniforms: {
              aspectRatio: { value: n7.viewport.aspectV2 },
              haloReaction: B("post.halo.reaction", 0),
              haloAmp: I("post.halo.amp", 0, 100, 20),
            },
            declarations:
              "\nuniform vec2 aspectRatio;\nuniform float haloReaction;\nuniform float haloAmp;\n    ",
            inject:
              "\n{\n  vec2 fromCenter = (vUv - .5) * aspectRatio;\n  vec2 direction = normalize(fromCenter);\n  vec2 st = .5 - fromCenter + direction * 0.6667;\n  vec2 anaglyph = direction * texelSize.y * 25.;\n  color += haloReaction * haloAmp *\n    smoothstep(0.25, 0.75, length(fromCenter)) * (\n      0.5 * vec3(\n        texture2D(bloomLevel3, st - anaglyph).b * 0.5,\n        texture2D(bloomLevel3, st).b * 0.3,\n        texture2D(bloomLevel3, st + anaglyph).r\n      ) + \n      vec3(\n        texture2D(bloomLevel4, st - anaglyph * 8.).b * 0.7,\n        texture2D(bloomLevel4, st).b * 0.2,\n        texture2D(bloomLevel4, st + anaglyph * 8.).r * 0.8\n      )\n    );\n}\n    ",
          }),
            (this.reaction = 0),
            (this.target = 0),
            (this.pointer = new T.I9Y()),
            (this.oldPointer = new T.I9Y()),
            (this.onTick = () => {
              this.pointer.copy(B(ep.v2Provider).value).sub(this.oldPointer),
                (this.target *= 0.95),
                (this.target = Math.max(
                  0.1 * this.pointer.length(),
                  this.target
                )),
                (this.target = Math.max(this.target, 0.01)),
                (this.reaction += 0.1 * (this.target - this.reaction)),
                O("post.halo.reaction", this.reaction),
                this.oldPointer.add(this.pointer);
            }),
            R.on(ee.event, this.onTick);
        }
      }
      class eA {
        constructor() {
          this.out = {
            uniforms: {
              toneMappingExposure: I("post.exposure", 0.001, 10, 0.65),
            },
            declarations:
              "\n\nuniform float toneMappingExposure;\n\nconst float softness_scale = 0.1; \nconst float offset = 1.; \nconst float chroma_scale = 1.2; \n\nvec3 s_curve(vec3 x)\n{\n    float a = 2.51f;\n    float b = 0.03f;\n    float c = 2.43f;\n    float d = 0.59f;\n    float e = 0.14f;\n    x = max(x, 0.0);\n    return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0);\n}\n\nvec3 d_s_curve(vec3 x)\n{\n    float a = 2.51f;\n    float b = 0.03f;\n    float c = 2.43f;\n    float d = 0.59f;\n    float e = 0.14f;\n    \n    x = max(x, 0.0);\n    vec3 r = (x*(c*x + d) + e);\n    return (a*x*(d*x + 2.0*e) + b*(e - c*x*x))/(r*r);\n}\n\nvec3 tonemap_per_channel(vec3 c)\n{\n    return s_curve(c);\n}\n\nvec2 findCenterAndPurity(vec3 x)\n{\n    \n    \n    mat3 M = mat3(\n        2.26775149, -1.43293879,  0.1651873,\n        -0.98535505,  2.1260072, -0.14065215,\n        -0.02501605, -0.26349465,  1.2885107);\n\n    x = x*M;\n    \n    float x_min = min(x.r,min(x.g,x.b));\n    float x_max = max(x.r,max(x.g,x.b));\n    \n    float c = 0.5*(x_max+x_min);\n    float s = (x_max-x_min);\n    \n    \n    vec3 y = (x-c)/s;\n    float c_smooth = c + dot(y*y*y, vec3(1.0/3.0))*s;\n    float s_smooth = sqrt(dot(x-c_smooth,x-c_smooth)/2.0);\n    return vec2(c_smooth, s_smooth);\n}\n\nvec3 toLms(vec3 c)\n{\n    mat3 rgbToLms = mat3(\n        0.4122214708, 0.5363325363, 0.0514459929,\n        0.2119034982, 0.6806995451, 0.1073969566,\n        0.0883024619, 0.2817188376, 0.6299787005);\n\n    vec3 lms_ = c*rgbToLms;\n    return sign(lms_)*pow(abs(lms_), vec3(1.0/3.0));\n}\n\nfloat calculateC(vec3 lms)\n{\n    \n    \n\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    float a = 1.9779984951f*lms.x - 2.4285922050f*lms.y + 0.4505937099f*lms.z;\n    float b = 0.0259040371f*lms.x + 0.7827717662f*lms.y - 0.8086757660f*lms.z;\n\n    return sqrt(a*a + b*b);\n}\n\nvec2 calculateMC(vec3 c)\n{\n    vec3 lms = toLms(c);\n    \n    float M = findCenterAndPurity(lms).x; \n    \n    return vec2(M, calculateC(lms));\n}\n\nvec2 expandShape(vec3 rgb, vec2 ST)\n{\n    vec2 MC = calculateMC(rgb);\n    vec2 STnew = vec2((MC.x)/MC.y, (1.0-MC.x)/MC.y);\n    STnew = (STnew + 3.0*STnew*STnew*MC.y);\n    \n    return vec2(min(ST.x, STnew.x), min(ST.y, STnew.y));\n}\n\nfloat expandScale(vec3 rgb, vec2 ST, float scale)\n{\n    vec2 MC = calculateMC(rgb);\n    float Cnew = (1.0/((ST.x/(MC.x)) + (ST.y/(1.0-MC.x))));\n\n    return max(MC.y/Cnew, scale);\n}\n\nvec2 approximateShape()\n{\n    float m = -softness_scale*0.2;\n    float s = 1.0 + (softness_scale*0.2+softness_scale*0.8);\n    \n    vec2 ST = vec2(1000.0,1000.0);\n    ST = expandShape(m+s*vec3(1.0,0.0,0.0), ST);\n    ST = expandShape(m+s*vec3(1.0,1.0,0.0), ST);\n    ST = expandShape(m+s*vec3(0.0,1.0,0.0), ST);\n    ST = expandShape(m+s*vec3(0.0,1.0,1.0), ST);\n    ST = expandShape(m+s*vec3(0.0,0.0,1.0), ST);\n    ST = expandShape(m+s*vec3(1.0,0.0,1.0), ST);\n    \n    float scale = 0.0;\n    scale = expandScale(m+s*vec3(1.0,0.0,0.0), ST, scale);\n    scale = expandScale(m+s*vec3(1.0,1.0,0.0), ST, scale);\n    scale = expandScale(m+s*vec3(0.0,1.0,0.0), ST, scale);\n    scale = expandScale(m+s*vec3(0.0,1.0,1.0), ST, scale);\n    scale = expandScale(m+s*vec3(0.0,0.0,1.0), ST, scale);\n    scale = expandScale(m+s*vec3(1.0,0.0,1.0), ST, scale);\n    \n    return ST/scale;\n}\n\nvec3 tonemap_hue_preserving(vec3 c)\n{\n    mat3 toLms = mat3(\n        0.4122214708, 0.5363325363, 0.0514459929,\n        0.2119034982, 0.6806995451, 0.1073969566,\n        0.0883024619, 0.2817188376, 0.6299787005);\n        \n    mat3 fromLms = mat3(\n        +4.0767416621, -3.3077115913, +0.2309699292,\n        -1.2684380046, +2.6097574011, -0.3413193965,\n        -0.0041960863, -0.7034186147, +1.7076147010);\n        \n    vec3 lms_ = c*toLms;\n    vec3 lms = sign(lms_)*pow(abs(lms_), vec3(1.0/3.0));\n\n    vec2 MP = findCenterAndPurity(lms);\n    \n    \n    \n    \n    float I = (MP.x+(1.0-offset)*MP.y);\n\n    \n    I = dot(lms, vec3(0.2104542553, 0.7936177850, - 0.0040720468));\n\n    lms = lms * I * I;\n    I = I * I * I;\n    vec3 dLms = lms - I;\n\n    float Icurve = s_curve(vec3(I)).x;\n    lms = 1.0 + chroma_scale * dLms * d_s_curve(vec3(I)) / Icurve;     \n    I = pow(Icurve, 1.0 / 3.0);\n\n    lms = lms * I;\n    \n    \n    { \n        float M = findCenterAndPurity(lms).x;\n        \n        vec2 ST = vec2(1.411595781, 0.2315381093);\n        float C_smooth_gamut = (1.0) / ((ST.x / (M)) + (ST.y / (1.0 - M)));\n        float C = calculateC(lms);\n\n        lms = (lms - M) / sqrt(C * C / C_smooth_gamut / C_smooth_gamut + 1.0) + M;\n    }\n    \n    vec3 rgb = lms * lms * lms * fromLms;\n\n    return rgb;\n}\n\nvec3 softSaturate(vec3 x, vec3 a)\n{\n    a = clamp(a, 0.0,softness_scale);\n    a = 1.0+a;\n    x = min(x, a);\n    vec3 b = (a-1.0)*sqrt(a/(2.0-a));\n    return 1.0 - (sqrt((x-a)*(x-a) + b*b) - b)/(sqrt(a*a+b*b)-b);\n}\n\nvec3 softClipColor(vec3 color)\n{\n    \n    \n    \n    \n    float grey = 0.2;\n        \n    vec3 x = color-grey;\n\n    vec3 xsgn = sign(x);\n    vec3 xscale = 0.5 + xsgn*(0.5-grey);\n    x /= xscale;\n\n    float maxRGB = max(color.r, max(color.g, color.b));\n    float minRGB = min(color.r, min(color.g, color.b));\n\n    float softness_0 = maxRGB/(1.0+softness_scale)*softness_scale; \n    float softness_1 = (1.0-minRGB)/(1.0+softness_scale)*softness_scale;\n    \n    vec3 softness = vec3(0.5)*(softness_0+softness_1 + xsgn*(softness_1 - softness_0));\n\n    return grey + xscale*xsgn*softSaturate(abs(x), softness);\n}\n",
            inject:
              "{\n      color = max(vec3(0.), color);\n      color.g *= 0.99;\n      color = tonemap_hue_preserving(color * toneMappingExposure);\n      // color = mix(color, softClipColor(color), qq);\n    }",
          };
        }
      }
      var e_ = new WeakMap();
      class eC {
        constructor() {
          (0, y._)(this, e_, { writable: !0, value: void 0 }),
            (this.render = (e, t, n) => {
              this.enabled &&
                ((t.material = this.edgesMaterial),
                e.setRenderTarget(this.edgesRT),
                e.render(t, n),
                (t.material = this.weightsMaterial),
                e.setRenderTarget(this.weightsRT),
                e.render(t, n),
                (t.material = this.blendMaterial),
                e.setRenderTarget(this.blendRT),
                e.render(t, n),
                O("post.screen", this.blendRT.texture));
            }),
            (this.onResize = (e) => {
              let { x: t, y: n } = e;
              this.blendRT.setSize(t, n),
                this.edgesRT.setSize(t, n),
                this.weightsRT.setSize(t, n);
            }),
            (0, M._)(this, e_, function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : T.k6q,
                n = new Image(),
                i = new T.gPd(n);
              return (
                (i.minFilter = t),
                (i.magFilter = t),
                (i.generateMipmaps = !1),
                (i.flipY = !1),
                (n.onload = () => {
                  i.needsUpdate = !0;
                }),
                (n.src = e),
                i
              );
            }),
            (this.areaImage =
              "data:image/png;base64,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"),
            (this.searchImage =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="),
            (this.enabled = !0),
            (this.blendRT = new T.nWS(
              n7.viewport.x,
              n7.viewport.y,
              eR.rtParameters
            )),
            (this.edgesRT = new T.nWS(
              n7.viewport.x,
              n7.viewport.y,
              eR.rtParameters
            )),
            (this.weightsRT = new T.nWS(
              n7.viewport.x,
              n7.viewport.y,
              eR.rtParameters
            )),
            (this.edgesMaterial = new T.BKk({
              defines: { SMAA_THRESHOLD: "0.1" },
              uniforms: {
                colorMap: B("post.screen"),
                resolution: B(er.iv2Provider),
              },
              vertexShader:
                "uniform vec2 resolution;\n\nvarying vec2 vUv;\nvarying vec4 vOffset[3];\n\nvoid SMAAEdgeDetectionVS(vec2 texcoord) {\n  vOffset[0] = texcoord.xyxy + resolution.xyxy * vec4(-1.0, 0.0, 0.0,  1.0); \n  vOffset[1] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0); \n  vOffset[2] = texcoord.xyxy + resolution.xyxy * vec4(-2.0, 0.0, 0.0,  2.0); \n}\n\nvoid main() {\n  vUv = uv;\n  SMAAEdgeDetectionVS(vUv);\n  gl_Position = vec4(2. * uv - 1., 0., 1.);\n}",
              fragmentShader:
                "uniform sampler2D colorMap;\n\nvarying vec2 vUv;\nvarying vec4 vOffset[3];\n\nvec4 SMAAColorEdgeDetectionPS(vec2 uv, vec4 offset[3], sampler2D colorMap) {\n  vec2 threshold = vec2(SMAA_THRESHOLD, SMAA_THRESHOLD);\n\n  \n  vec4 delta;\n  vec3 C = texture2D(colorMap, uv).rgb;\n\n  vec3 Cleft = texture2D(colorMap, offset[0].xy).rgb;\n  vec3 t = abs(C - Cleft);\n  delta.x = max(max(t.r, t.g), t.b);\n\n  vec3 Ctop = texture2D(colorMap, offset[0].zw).rgb;\n  t = abs(C - Ctop);\n  delta.y = max(max(t.r, t.g), t.b);\n\n  \n  vec2 edges = step(threshold, delta.xy);\n\n  \n  if (dot(edges, vec2(1.0, 1.0)) == 0.0)\n    discard;\n\n  \n  vec3 Cright = texture2D(colorMap, offset[1].xy).rgb;\n  t = abs(C - Cright);\n  delta.z = max(max(t.r, t.g), t.b);\n\n  vec3 Cbottom  = texture2D(colorMap, offset[1].zw).rgb;\n  t = abs(C - Cbottom);\n  delta.w = max(max(t.r, t.g), t.b);\n\n  \n  float maxDelta = max(max(max(delta.x, delta.y), delta.z), delta.w);\n\n  \n  vec3 Cleftleft  = texture2D(colorMap, offset[2].xy).rgb;\n  t = abs(C - Cleftleft);\n  delta.z = max(max(t.r, t.g), t.b);\n\n  vec3 Ctoptop = texture2D(colorMap, offset[2].zw).rgb;\n  t = abs(C - Ctoptop);\n  delta.w = max(max(t.r, t.g), t.b);\n\n  \n  maxDelta = max(max(maxDelta, delta.z), delta.w);\n\n  \n  edges.xy *= step(0.5 * maxDelta, delta.xy);\n\n  return vec4(edges, 0.0, 1.0);\n}\n\nvoid main() {\n  gl_FragColor = SMAAColorEdgeDetectionPS(vUv, vOffset, colorMap);\n}",
            })),
            (this.weightsMaterial = new T.BKk({
              defines: {
                SMAA_MAX_SEARCH_STEPS: "8",
                SMAA_AREATEX_MAX_DISTANCE: "16",
                SMAA_AREATEX_PIXEL_SIZE: "(1. / vec2(160., 560.))",
                SMAA_AREATEX_SUBTEX_SIZE: "(1. / 7.)",
              },
              uniforms: {
                edgesMap: { value: this.edgesRT.texture },
                areaMap: {
                  value: (0, b._)(this, e_).call(this, this.areaImage),
                },
                searchMap: {
                  value: (0, b._)(this, e_).call(this, this.searchImage, T.hxR),
                },
                resolution: B(er.iv2Provider),
              },
              vertexShader:
                "uniform vec2 resolution;\n\nvarying vec2 vUv;\nvarying vec4 vOffset[3];\nvarying vec2 vPixcoord;\n\nvoid SMAABlendingWeightCalculationVS(vec2 texcoord) {\n  vPixcoord = texcoord / resolution;\n\n  \n  vOffset[0] = texcoord.xyxy + resolution.xyxy * vec4(-0.25, 0.125, 1.25, 0.125); \n  vOffset[1] = texcoord.xyxy + resolution.xyxy * vec4(-0.125, 0.25, -0.125, -1.25); \n\n  \n  vOffset[2] = vec4(vOffset[0].xz, vOffset[1].yw) + vec4(-2.0, 2.0, -2.0, 2.0) * resolution.xxyy * float(SMAA_MAX_SEARCH_STEPS);\n}\n\nvoid main() {\n  vUv = uv;\n  SMAABlendingWeightCalculationVS(uv);\n  gl_Position = vec4(2. * uv - 1., 0., 1.);\n}",
              fragmentShader:
                "#define SMAASampleLevelZeroOffset(tex, coord, offset) texture2D(tex, coord + float(offset) * resolution, 0.0)\n\nuniform sampler2D edgesMap;\nuniform sampler2D areaMap;\nuniform sampler2D searchMap;\nuniform vec2 resolution;\n\nvarying vec2 vUv;\nvarying vec4 vOffset[3];\nvarying vec2 vPixcoord;\n\n#if __VERSION__ == 100\nvec2 round(vec2 x) {\n  return sign(x) * floor(abs(x) + 0.5);\n}\n#endif\n\nfloat SMAASearchLength(sampler2D searchTex, vec2 e, float bias, float scale) {\n  \n  \n  \n  \n  e.r = bias + e.r * scale;\n  return 255.0 * texture2D(searchTex, e, 0.0).r;\n}\n\nfloat SMAASearchXLeft(sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end) {\n  \n  vec2 e = vec2(0.0, 1.0);\n\n  for (int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++) { \n    e = texture2D(edgesTex, texcoord, 0.0).rg;\n    texcoord -= vec2(2.0, 0.0) * resolution;\n    if (! (texcoord.x > end && e.g > 0.8281 && e.r == 0.0)) break;\n  }\n\n  \n  texcoord.x += 0.25 * resolution.x;\n\n  \n  texcoord.x += resolution.x;\n\n  \n  texcoord.x += 2.0 * resolution.x; \n  texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);\n\n  return texcoord.x;\n}\n\nfloat SMAASearchXRight(sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end) {\n  vec2 e = vec2(0.0, 1.0);\n\n  for (int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++) { \n    e = texture2D(edgesTex, texcoord, 0.0).rg;\n    texcoord += vec2(2.0, 0.0) * resolution;\n    if (! (texcoord.x < end && e.g > 0.8281 && e.r == 0.0)) break;\n  }\n\n  texcoord.x -= 0.25 * resolution.x;\n  texcoord.x -= resolution.x;\n  texcoord.x -= 2.0 * resolution.x;\n  texcoord.x += resolution.x * SMAASearchLength(searchTex, e, 0.5, 0.5);\n\n  return texcoord.x;\n}\n\nfloat SMAASearchYUp(sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end) {\n  vec2 e = vec2(1.0, 0.0);\n\n  for (int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++) { \n    e = texture2D(edgesTex, texcoord, 0.0).rg;\n    texcoord += vec2(0.0, 2.0) * resolution; \n    if (! (texcoord.y > end && e.r > 0.8281 && e.g == 0.0)) break;\n  }\n\n  texcoord.y -= 0.25 * resolution.y; \n  texcoord.y -= resolution.y; \n  texcoord.y -= 2.0 * resolution.y; \n  texcoord.y += resolution.y * SMAASearchLength(searchTex, e.gr, 0.0, 0.5); \n\n  return texcoord.y;\n}\n\nfloat SMAASearchYDown(sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end) {\n  vec2 e = vec2(1.0, 0.0);\n\n  for (int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++) { \n    e = texture2D(edgesTex, texcoord, 0.0).rg;\n    texcoord -= vec2(0.0, 2.0) * resolution; \n    if (! (texcoord.y < end && e.r > 0.8281 && e.g == 0.0)) break;\n  }\n\n  texcoord.y += 0.25 * resolution.y; \n  texcoord.y += resolution.y; \n  texcoord.y += 2.0 * resolution.y; \n  texcoord.y -= resolution.y * SMAASearchLength(searchTex, e.gr, 0.5, 0.5); \n\n  return texcoord.y;\n}\n\nvec2 SMAAArea(sampler2D areaTex, vec2 dist, float e1, float e2, float offset) {\n  \n  vec2 texcoord = float(SMAA_AREATEX_MAX_DISTANCE) * round(4.0 * vec2(e1, e2)) + dist;\n\n  \n  texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + (0.5 * SMAA_AREATEX_PIXEL_SIZE);\n\n  \n  texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;\n\n  return texture2D(areaTex, texcoord, 0.0).rg;\n}\n\nvec4 SMAABlendingWeightCalculationPS(vec2 texcoord, vec2 pixcoord, vec4 offset[3], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices) {\n  vec4 weights = vec4(0.0, 0.0, 0.0, 0.0);\n\n  vec2 e = texture2D(edgesTex, texcoord).rg;\n\n  if (e.g > 0.0) { \n    vec2 d;\n\n    \n    vec2 coords;\n    coords.x = SMAASearchXLeft(edgesTex, searchTex, offset[0].xy, offset[2].x);\n    coords.y = offset[1].y; \n    d.x = coords.x;\n\n    \n    \n    \n    float e1 = texture2D(edgesTex, coords, 0.0).r;\n\n    \n    coords.x = SMAASearchXRight(edgesTex, searchTex, offset[0].zw, offset[2].y);\n    d.y = coords.x;\n\n    \n    \n    d = d / resolution.x - pixcoord.x;\n\n    \n    \n    vec2 sqrt_d = sqrt(abs(d));\n\n    \n    coords.y -= 1.0 * resolution.y; \n    float e2 = SMAASampleLevelZeroOffset(edgesTex, coords, ivec2(1, 0)).r;\n\n    \n    \n    weights.rg = SMAAArea(areaTex, sqrt_d, e1, e2, float(subsampleIndices.y));\n  }\n\n  if (e.r > 0.0) { \n    vec2 d;\n\n    \n    vec2 coords;\n\n    coords.y = SMAASearchYUp(edgesTex, searchTex, offset[1].xy, offset[2].z);\n    coords.x = offset[0].x; \n    d.x = coords.y;\n\n    \n    float e1 = texture2D(edgesTex, coords, 0.0).g;\n\n    \n    coords.y = SMAASearchYDown(edgesTex, searchTex, offset[1].zw, offset[2].w);\n    d.y = coords.y;\n\n    \n    d = d / resolution.y - pixcoord.y;\n\n    \n    \n    vec2 sqrt_d = sqrt(abs(d));\n\n    \n    coords.y -= 1.0 * resolution.y; \n    float e2 = SMAASampleLevelZeroOffset(edgesTex, coords, ivec2(0, 1)).g;\n\n    \n    weights.ba = SMAAArea(areaTex, sqrt_d, e1, e2, float(subsampleIndices.x));\n  }\n\n  return weights;\n}\n\nvoid main() {\n  gl_FragColor = SMAABlendingWeightCalculationPS(vUv, vPixcoord, vOffset, edgesMap, areaMap, searchMap, ivec4(0.0));\n}",
            })),
            (this.blendMaterial = new T.BKk({
              uniforms: {
                blendMap: { value: this.weightsRT.texture },
                colorMap: B("post.screen"),
                resolution: B(er.iv2Provider),
              },
              vertexShader:
                "uniform vec2 resolution;\n\nvarying vec2 vUv;\nvarying vec4 vOffset[2];\n\nvoid SMAANeighborhoodBlendingVS(vec2 uv) {\n  vOffset[0] = uv.xyxy + resolution.xyxy * vec4(-1.0, 0.0, 0.0, 1.0); \n  vOffset[1] = uv.xyxy + resolution.xyxy * vec4(1.0, 0.0, 0.0, -1.0); \n}\n\nvoid main() {\n  vUv = uv;\n  SMAANeighborhoodBlendingVS(uv);\n  gl_Position = vec4(2. * uv - 1., 0., 1.);\n}",
              fragmentShader:
                "uniform sampler2D blendMap;\nuniform sampler2D colorMap;\nuniform vec2 resolution;\n\nvarying vec2 vUv;\nvarying vec4 vOffset[2];\n\nvec4 SMAANeighborhoodBlendingPS(vec2 uv, vec4 offset[2], sampler2D colorTex, sampler2D blendTex) {\n  \n  vec4 a;\n  a.xz = texture2D(blendTex, uv).xz;\n  a.y = texture2D(blendTex, offset[1].zw).g;\n  a.w = texture2D(blendTex, offset[1].xy).a;\n\n  \n  if (dot(a, vec4(1.0, 1.0, 1.0, 1.0)) < 1e-5) {\n    return texture2D(colorTex, uv, 0.0);\n  } else {\n    \n    \n    \n    vec2 offset;\n    offset.x = a.a > a.b ? a.a : -a.b; \n    offset.y = a.g > a.r ? -a.g : a.r; \n\n    \n    if (abs(offset.x) > abs(offset.y)) { \n      offset.y = 0.0;\n    } else {\n      offset.x = 0.0;\n    }\n\n    \n    vec4 C = texture2D(colorTex, uv, 0.0);\n    uv += sign(offset) * resolution;\n    vec4 Cop = texture2D(colorTex, uv, 0.0);\n    float s = abs(offset.x) > abs(offset.y) ? abs(offset.x) : abs(offset.y);\n\n    \n    C.xyz = pow(C.xyz, vec3(2.2));\n    Cop.xyz = pow(Cop.xyz, vec3(2.2));\n    vec4 mixed = mix(C, Cop, s);\n    mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));\n\n    return mixed;\n  }\n}\n\nvoid main() {\n  gl_FragColor = SMAANeighborhoodBlendingPS(vUv, vOffset, colorMap, blendMap);\n}",
            })),
            O("post.smaa.map", this.blendRT.texture),
            R.on(er.resizeEvent, this.onResize),
            U(this, "enabled");
        }
      }
      class ek {
        constructor() {
          this.out = {
            declarations:
              "\nvec3 LinearTosRGB(vec3 value) {\n  return vec3(\n    mix(\n      pow(value.rgb, vec3(.41666)) * 1.055 - vec3(.055),\n      value.rgb * 12.92,\n      vec3(lessThanEqual(value.rgb, vec3(.0031308)))\n    )\n  );\n}\n",
            inject: "{\n      color = LinearTosRGB(color);\n    }",
          };
        }
      }
      class eW {
        constructor() {
          (this.enabled = !1),
            (this.render = (e, t, n) => {
              this.enabled &&
                ((t.material = this.material),
                e.setRenderTarget(this.rt),
                e.render(t, n),
                O("post.screen", this.rt.texture));
            }),
            (this.onResize = (e) => {
              let { x: t, y: n } = e;
              this.rt.setSize(t, n);
            }),
            (this.setEnabled = (e) => {
              this.enabled = e;
            }),
            (this.material = new T.BKk({
              uniforms: {
                seconds: B(ee.secondsProvider),
                pixelSize: B(er.iv2Provider),
                map: B("post.screen"),
                fluidMap: B(eS.densityProvider),
                noiseMap: F("noiseMapSmall"),
                iridescenceMap: {
                  value: n7.assetsManager.get("iridescenceMap"),
                },
              },
              vertexShader: ea,
              fragmentShader:
                "\n        varying vec2 vUv;\n        uniform float seconds;\n        uniform vec2 pixelSize;\n        uniform sampler2D map;\n        uniform sampler2D fluidMap;\n        uniform sampler2D noiseMap;\n        uniform sampler2D iridescenceMap;\n        #define steps 8.\n        vec3 getHue(float hue) {\n          hue = fract(hue); // Ensure hue is in [0, 1] range\n          float r = abs(hue * 6.0 - 3.0) - 1.0;\n          float g = 2.0 - abs(hue * 6.0 - 2.0);\n          float b = 2.0 - abs(hue * 6.0 - 4.0);\n          return clamp(vec3(r, g, b), 0.0, 1.0);\n        }\n        void main() {\n          vec2 noise = texture2D(noiseMap, fract(gl_FragCoord.xy / 64. + seconds)).rg;\n          vec2 uv = vUv;\n          vec2 duv = texture2D(fluidMap, uv).xy * noise * 1e-4;\n          uv += duv;\n          vec3 color = texture2D(map, uv).rgb;\n          vec3 weight = vec3(1.);\n          float power = smoothstep(0.005, 0.015, length(duv));\n          if (power > 0.) {\n            duv = normalize(duv) * pixelSize * 2.;\n            for (float i = 0.; i < steps; i++) {\n              uv += duv;\n              vec3 hue = getHue(i / steps) * power;\n              color += texture2D(map, uv).rgb * hue;\n              weight += hue;\n            }\n            color /= weight;\n          }\n          \n          gl_FragColor = vec4(color, 1.);\n          \n          vec3 fluid = texture2D(iridescenceMap, vec2(power * 0.3, 0.5)).rgb * smoothstep(1., 0.8, power);\n          gl_FragColor = vec4(color * fluid, 1.);\n        }\n      ",
            })),
            (this.rt = new T.nWS(
              n7.viewport.x,
              n7.viewport.y,
              eR.rtParameters
            )),
            R.on(er.resizeEvent, this.onResize),
            R.on(eW.enableEvent, this.setEnabled);
        }
      }
      eW.enableEvent = "Fluidifier404.enableEvent";
      class eL {
        constructor() {
          (this.render = (e, t, n) => {
            0 !== B(eL.powerProvider).value &&
              ((t.material = this.material),
              e.setRenderTarget(this.rt),
              e.render(t, n),
              O("post.screen", this.rt.texture));
          }),
            (this.onResize = (e) => {
              let { x: t, y: n } = e;
              this.rt.setSize(t, n);
            }),
            (this.rt = new T.nWS(
              n7.viewport.x,
              n7.viewport.y,
              eR.rtParameters
            )),
            (this.material = new T.BKk({
              uniforms: {
                map: B("post.screen"),
                time: B(ee.secondsProvider),
                glitch: B(eL.powerProvider, 0),
              },
              vertexShader: ea,
              fragmentShader:
                "\n        varying vec2 vUv;\n        uniform float time;\n        uniform float glitch;\n        uniform sampler2D map;\n        float nn(float y, float t) {\n          float n = (\n            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +\n            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +\n            sin(y * 1.1 + t * 2.8) * .4\n          );\n          n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;\n          return n;\n        }\n        vec4 readTex(sampler2D tex, vec2 uv) {\n          if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) {\n            return vec4(0);\n          }\n          return texture(tex, uv);\n        }\n        void main() {\n          vec2 uv = vUv;\n          vec3 color = texture2D(map, uv).rgb;\n          if (glitch > 0.) {\n            vec3 c = color;\n            float t = mod(time, 3.14 * 10.);\n            float v = fract(sin(t * 2.) * 700.) * 0.4;\n            if (abs(nn(uv.y, t)) < 1.2) {\n                v *= 0.01;\n            }\n            vec2 focus = vec2(0.5);\n            float d = v * 0.6;\n            vec2 ruv = focus + (uv - focus) * (1. - d);\n            vec2 guv = focus + (uv - focus) * (1. - 2. * d);\n            vec2 buv = focus + (uv - focus) * (1. - 3. * d);\n            if (v > 0.1) {\n              float y = floor(uv.y * 13. * sin(35. * t)) + 1.;\n              if (sin(36. * y * v) > 0.9) {\n                ruv.x = uv.x + sin(76. * y) * 0.1;\n                guv.x = uv.x + sin(34. * y) * 0.1;\n                buv.x = uv.x + sin(59. * y) * 0.1;\n              }\n              v = pow(v * 1.5, 2.) * 0.15;\n              c.rgb *= 0.3;\n              c.r += readTex(map, vec2(uv.x + sin(t * 123.45) * v, uv.y)).r;\n              c.g += readTex(map, vec2(uv.x + sin(t * 157.67) * v, uv.y)).g;\n              c.b += readTex(map, vec2(uv.x + sin(t * 143.67) * v, uv.y)).b;\n            }\n            if (abs(nn(uv.y, t)) > 0.1) {\n              c.r = c.r * 0.5 + c.r * texture(map, ruv).r;\n              c.g = c.g * 0.5 + c.g * texture(map, guv).g;\n              c.b = c.b * 0.5 + c.b * texture(map, buv).b;\n              c *= 2.;\n            }\n            color = mix(color, c, glitch);\n          }\n          gl_FragColor = vec4(color, 1.);\n        }\n      ",
            })),
            R.on(er.resizeEvent, this.onResize);
        }
      }
      eL.powerProvider = "Glitch.powerProvider";
      class eR {
        constructor() {
          (this.render = () => {
            this.renderer.autoClear = !0;
            let { scene: e, camera: t } = n7.context;
            this.renderer.setRenderTarget(this.sceneRT),
              this.renderer.render(e, t),
              O("post.screen", this.sceneRT.texture),
              this.fx.forEach(
                (e) => e.render && e.render(this.renderer, this.quad, t)
              ),
              "" == this.debugBuffer
                ? this.composer.render(this.renderer, this.quad, t)
                : ((this.quad.material = this.debugMaterial),
                  this.renderer.setRenderTarget(null),
                  this.renderer.render(this.quad, t));
          }),
            (this.updateRendererSize = (e) => {
              let { x: t, y: n, dpr: i } = e;
              this.renderer.setSize(t, n), this.renderer.setPixelRatio(i);
            }),
            (this.onResize = (e) => {
              let { x: t, y: n, dpr: i } = e;
              this.updateRendererSize({ x: t, y: n, dpr: i }),
                this.sceneRT.setSize(
                  t * i * this.superSampling,
                  n * i * this.superSampling
                );
            }),
            (this.renderer = new D.JeP({
              antialias: !1,
              powerPreference: "high-performance",
              premultipliedAlpha: !1,
            })),
            (this.renderer.outputColorSpace = T.Zr2),
            (this.renderer.toneMapping = T.y_p),
            n7.container.appendChild(this.renderer.domElement),
            (this.quad = new T.eaF(new T.bdM(1, 1, 1, 1), null)),
            (this.quad.frustumCulled = !1),
            (this.superSampling = 1),
            (this.sceneRT = new T.nWS(
              n7.viewport.x * this.superSampling,
              n7.viewport.y * this.superSampling,
              eR.rtParameters
            )),
            (this.fx = [
              new eu(),
              new eC(),
              new eT(),
              new eW(),
              new eh(),
              new eD(),
              new eL(),
              new eA(),
              new ek(),
            ]),
            (this.composer = new eo(this.fx)),
            (this.debugBuffer = ""),
            "" != this.debugBuffer &&
              (this.debugMaterial = new T.BKk({
                uniforms: { map: B(this.debugBuffer) },
                vertexShader: ea,
                fragmentShader: ev,
              })),
            this.updateRendererSize(n7.viewport),
            R.on(er.resizeEvent, this.onResize);
        }
      }
      eR.rtParameters = {
        magFilter: T.k6q,
        minFilter: T.k6q,
        generateMipmaps: !1,
        type: T.ix0,
        format: T.GWd,
        colorSpace: T.Zr2,
      };
      class eN {
        constructor() {
          I("cubes.aa", 0, 3, 1.666666666666666),
            I("glass.eta", 0.1, 3, 1.5),
            I("envIntensity", 0, 10, 5),
            I("iridescenseInfluence", 0, 1, 0.4),
            I("inifinite.glow", 0, 1, 0.64),
            I("inifinite.glowWidth", 0, 0.1, 0.025),
            I("inifinite.complexity", 0, 1, 0),
            I("logo.envIntensity", 0, 1, 1);
        }
      }
      class eE {
        constructor() {
          (this.rect = {}),
            (this.a = new T.Pq0()),
            (this.b = new T.Pq0()),
            (this.c = new T.Pq0()),
            (this.size = new T.I9Y()),
            (this.ndcCenter = new T.I9Y());
        }
      }
      class ej {
        constructor() {
          (this.items = []),
            (this.itemsByName = {}),
            (this.viewportHeight = 0),
            (this.camera = new T.ubm(
              n7.settings.camera.fov,
              n7.viewport.aspect,
              n7.settings.camera.near,
              n7.settings.camera.far
            )),
            (this.enabled = !1),
            (this.setDivs = (e) => {
              (this.items = []),
                (this.itemsByName = {}),
                Object.keys(e).forEach((t) => {
                  let n = new eE(),
                    i = e[t];
                  (n.name = t.toLowerCase()),
                    (n.element = i),
                    this.items.push(n),
                    (this.itemsByName[n.name] = n);
                }),
                (this.enabled = !0),
                this.onResize(n7.viewport);
            }),
            (this.onScroll = () => {
              if (!this.enabled) return;
              let e = window.scrollY,
                { x: t, y: n } = n7.viewport;
              this.items.forEach((i) => {
                (i.ndcCenter.x = (i.rect.left + i.rect.right) / t - 1),
                  (i.ndcCenter.y =
                    1 - (i.rect.top + i.rect.bottom - 2 * e) / n);
                let s = (i.rect.left / t) * 2 - 1,
                  r = -(((i.rect.top - e) / n) * 2) + 1,
                  a = -(((i.rect.bottom - e) / n) * 2) + 1,
                  o = (i.rect.right / t) * 2 - 1;
                i.a
                  .set(s, r, 1)
                  .unproject(this.camera)
                  .normalize()
                  .divideScalar(i.a.z),
                  i.b
                    .set(s, a, 1)
                    .unproject(this.camera)
                    .normalize()
                    .divideScalar(i.b.z),
                  i.c
                    .set(o, a, 1)
                    .unproject(this.camera)
                    .normalize()
                    .divideScalar(i.c.z),
                  i.size.set(i.b.distanceTo(i.c), i.b.distanceTo(i.a));
              }),
                R.dispatch(ej.updateEvent, this.itemsByName, e);
            }),
            (this.onResize = (e) => {
              let { x: t, y: n, aspect: i } = e;
              if (!this.enabled) return;
              let s = window.scrollY;
              (this.camera.aspect = i),
                this.camera.updateProjectionMatrix(),
                this.items.forEach((e) => {
                  let t = e.element.getBoundingClientRect();
                  (e.rect.top = t.top + s),
                    (e.rect.bottom = t.bottom + s),
                    (e.rect.left = t.left),
                    (e.rect.right = t.right);
                }),
                this.onScroll();
            }),
            R.on(er.resizeEvent, this.onResize),
            document.addEventListener("scroll", this.onScroll);
        }
      }
      (ej.updateEvent = "LayoutController.updateEvent"),
        (ej.itemVisibilityEvent = "LayoutController.itemVisibilityEvent");
      var eB = new WeakMap();
      class eO {
        constructor() {
          (0, y._)(this, eB, { writable: !0, value: void 0 }),
            (0, M._)(this, eB, (e) => {
              this.light.position.copy(e),
                this.light.lookAt(0, 0, 0),
                this.light.scale.set(10, 2, 1),
                this.light.updateMatrixWorld(),
                this.lm.copy(this.light.matrix).invert();
            }),
            (this.light = new T.B69()),
            this.light.position.set(0, 0, 3),
            this.light.lookAt(0, 0, 0),
            this.light.scale.set(10, 2, 1),
            this.light.updateMatrixWorld(),
            (this.lm = this.light.matrix.clone().invert()),
            O(eO.matrixProvider, this.lm),
            R.on(eO.setEvent, (0, b._)(this, eB));
        }
      }
      (eO.matrixProvider = "Light.matrixProvider"),
        (eO.setEvent = "Light.setEvent");
      class eF {
        constructor() {
          I("particles.focus", 0, 1, 0.9),
            I("particles.focusDistance", 0, 5, 3),
            I("particles.size", 0, 1, 0.01),
            I("particles.grid", 0, 1, 0),
            I("particles.sine", 0, 1, 0);
        }
      }
      class eV {
        get scene() {
          return this.context.scene;
        }
        get camera() {
          return this.context.camera;
        }
        constructor(e) {
          this.context = e;
        }
      }
      let eq = new T.qUd(-1, 1, 1, -1, 0, 1),
        eU = new (class extends T.LoY {
          constructor() {
            super(),
              this.setAttribute(
                "position",
                new T.qtW([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
              ),
              this.setAttribute("uv", new T.qtW([0, 2, 0, 0, 2, 0], 2));
          }
        })();
      class eI {
        dispose() {
          this._mesh.geometry.dispose();
        }
        render(e) {
          e.render(this._mesh, eq);
        }
        get material() {
          return this._mesh.material;
        }
        set material(e) {
          this._mesh.material = e;
        }
        constructor(e) {
          this._mesh = new T.eaF(eU, e);
        }
      }
      class eH {
        constructor(e, t, n) {
          (this.variables = []), (this.currentTextureIndex = 0);
          let i = T.RQf,
            s = { passThruTexture: { value: null } },
            r = l(
              "uniform sampler2D passThruTexture;\n\nvoid main() {\n\n	vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n	gl_FragColor = texture2D( passThruTexture, uv );\n\n}\n",
              s
            ),
            a = new eI(r);
          function o(n) {
            n.defines.resolution =
              "vec2( " + e.toFixed(1) + ", " + t.toFixed(1) + " )";
          }
          function l(e, t) {
            let n = new T.BKk({
              name: "GPUComputationShader",
              uniforms: (t = t || {}),
              vertexShader:
                "void main()	{\n\n	gl_Position = vec4( position, 1.0 );\n\n}\n",
              fragmentShader: e,
            });
            return o(n), n;
          }
          (this.setDataType = function (e) {
            return (i = e), this;
          }),
            (this.addVariable = function (e, t, n) {
              let i = {
                name: e,
                initialValueTexture: n,
                material: this.createShaderMaterial(t),
                dependencies: null,
                renderTargets: [],
                wrapS: null,
                wrapT: null,
                minFilter: T.hxR,
                magFilter: T.hxR,
              };
              return this.variables.push(i), i;
            }),
            (this.setVariableDependencies = function (e, t) {
              e.dependencies = t;
            }),
            (this.init = function () {
              if (0 === n.capabilities.maxVertexTextures)
                return "No support for vertex shader textures.";
              for (let n = 0; n < this.variables.length; n++) {
                let i = this.variables[n];
                (i.renderTargets[0] = this.createRenderTarget(
                  e,
                  t,
                  i.wrapS,
                  i.wrapT,
                  i.minFilter,
                  i.magFilter
                )),
                  (i.renderTargets[1] = this.createRenderTarget(
                    e,
                    t,
                    i.wrapS,
                    i.wrapT,
                    i.minFilter,
                    i.magFilter
                  )),
                  this.renderTexture(i.initialValueTexture, i.renderTargets[0]),
                  this.renderTexture(i.initialValueTexture, i.renderTargets[1]);
                let s = i.material,
                  r = s.uniforms;
                if (null !== i.dependencies)
                  for (let e = 0; e < i.dependencies.length; e++) {
                    let t = i.dependencies[e];
                    if (t.name !== i.name) {
                      let e = !1;
                      for (let n = 0; n < this.variables.length; n++)
                        if (t.name === this.variables[n].name) {
                          e = !0;
                          break;
                        }
                      if (!e)
                        return (
                          "Variable dependency not found. Variable=" +
                          i.name +
                          ", dependency=" +
                          t.name
                        );
                    }
                    (r[t.name] = { value: null }),
                      (s.fragmentShader =
                        "\nuniform sampler2D " +
                        t.name +
                        ";\n" +
                        s.fragmentShader);
                  }
              }
              return (this.currentTextureIndex = 0), null;
            }),
            (this.compute = function () {
              let e = this.currentTextureIndex,
                t = 0 === this.currentTextureIndex ? 1 : 0;
              for (let n = 0, i = this.variables.length; n < i; n++) {
                let i = this.variables[n];
                if (null !== i.dependencies) {
                  let t = i.material.uniforms;
                  for (let n = 0, s = i.dependencies.length; n < s; n++) {
                    let s = i.dependencies[n];
                    t[s.name].value = s.renderTargets[e].texture;
                  }
                }
                this.doRenderTarget(i.material, i.renderTargets[t]);
              }
              this.currentTextureIndex = t;
            }),
            (this.getCurrentRenderTarget = function (e) {
              return e.renderTargets[this.currentTextureIndex];
            }),
            (this.getAlternateRenderTarget = function (e) {
              return e.renderTargets[0 === this.currentTextureIndex ? 1 : 0];
            }),
            (this.dispose = function () {
              a.dispose();
              let e = this.variables;
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                n.initialValueTexture && n.initialValueTexture.dispose();
                let i = n.renderTargets;
                for (let e = 0; e < i.length; e++) i[e].dispose();
              }
            }),
            (this.addResolutionDefine = o),
            (this.createShaderMaterial = l),
            (this.createRenderTarget = function (n, s, r, a, o, l) {
              return new T.nWS((n = n || e), (s = s || t), {
                wrapS: (r = r || T.ghU),
                wrapT: (a = a || T.ghU),
                minFilter: (o = o || T.hxR),
                magFilter: (l = l || T.hxR),
                format: T.GWd,
                type: i,
                depthBuffer: !1,
              });
            }),
            (this.createTexture = function () {
              let n = new Float32Array(e * t * 4),
                i = new T.GYF(n, e, t, T.GWd, T.RQf);
              return (i.needsUpdate = !0), i;
            }),
            (this.renderTexture = function (e, t) {
              (s.passThruTexture.value = e),
                this.doRenderTarget(r, t),
                (s.passThruTexture.value = null);
            }),
            (this.doRenderTarget = function (e, t) {
              let i = n.getRenderTarget(),
                s = n.xr.enabled,
                o = n.shadowMap.autoUpdate;
              (n.xr.enabled = !1),
                (n.shadowMap.autoUpdate = !1),
                (a.material = e),
                n.setRenderTarget(t),
                a.render(n),
                (a.material = r),
                (n.xr.enabled = s),
                (n.shadowMap.autoUpdate = o),
                n.setRenderTarget(i);
            });
        }
      }
      class eX extends T.BKk {
        constructor(e) {
          super({
            uniforms: {
              cam: { value: e },
              fluidMap: B(eS.velocityProvider),
              uFocus: B("particles.focus", 0),
              uFocusDistance: B("particles.focusDistance", 0),
              texturePosition: { value: null },
              textureVelocity: { value: null },
              uGrid: { value: 0 },
              uSize: B("particles.size", 0),
              uSine: { value: 0 },
              uChaos: { value: 0 },
              uNormals: F("sphereNormal"),
              seconds: B(ee.secondsProvider),
            },
            vertexShader:
              "#define PI 3.141592653589793238;\n\nattribute vec3 aRandom;\nattribute float aColor;\nattribute float aSize;\nattribute vec2 aUv;\n\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying float vDepth;\nvarying float vColor;\nvarying float vfl;\n\nuniform float uFocus;\nuniform float uFocusDistance;\nuniform float uSize;\nuniform sampler2D fluidMap;\nuniform sampler2D texturePosition;\n\nvoid main() {\n  vColor = aColor;\n\n  vec3 pos = texture2D(texturePosition, aUv).xyz;\n\n  vec4 worldPos = modelMatrix * vec4(pos, 1.);\n  vec4 ndcPos = projectionMatrix * viewMatrix * vec4(pos, 1.0);\n  vec2 fluidUV = ndcPos.xy / ndcPos.w * 0.5 + 0.5;\n  vec4 fluid = texture2D(fluidMap, fluidUV);\n  vec3 z = normalize(cameraPosition - worldPos.xyz);\n  vec3 x = normalize(cross(worldPos.xyz, vec3(0., 1., 0.)));\n  vec3 y = normalize(cross(x, z));\n  pos -= (fluid.x * x - fluid.z * y) * 1e-3;\n  vfl = length(fluid.xyz);\n\n  vDepth = mix(abs(uFocusDistance - length(worldPos.xyz - cameraPosition)) * 3., 0., uFocus);\n  \n  \n  \n  gl_PointSize = aSize * 5.;\n  \n  \n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}",
            fragmentShader:
              "uniform float seconds;\nuniform float progress;\nuniform sampler2D uNormals;\nuniform sampler2D fluidMap;\nvarying vec2 vUv;\nvarying float vfl;\nvarying vec3 vPosition;\nvarying float vDepth;\nvarying float vColor;\n\nfloat PI = 3.141592653589793238;\n\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\n\nfloat circle(in vec2 _st, in float _radius, in float _blur) {\n    vec2 dist = _st-vec2(0.5);\n    return 1.-smoothstep(_radius-(_radius*_blur), _radius+(_radius*0.01), dot(dist, dist)*4.0);\n}\n\nvec3 rgb2xyz( vec3 c ) {\n    vec3 tmp;\n    tmp.x = ( c.r > 0.04045 ) ? pow( ( c.r + 0.055 ) / 1.055, 2.4 ) : c.r / 12.92;\n    tmp.y = ( c.g > 0.04045 ) ? pow( ( c.g + 0.055 ) / 1.055, 2.4 ) : c.g / 12.92,\n    tmp.z = ( c.b > 0.04045 ) ? pow( ( c.b + 0.055 ) / 1.055, 2.4 ) : c.b / 12.92;\n    return 100.0 * tmp *\n        mat3( 0.4124, 0.3576, 0.1805,\n              0.2126, 0.7152, 0.0722,\n              0.0193, 0.1192, 0.9505 );\n}\n\nvec3 xyz2lab( vec3 c ) {\n    vec3 n = c / vec3( 95.047, 100, 108.883 );\n    vec3 v;\n    v.x = ( n.x > 0.008856 ) ? pow( n.x, 1.0 / 3.0 ) : ( 7.787 * n.x ) + ( 16.0 / 116.0 );\n    v.y = ( n.y > 0.008856 ) ? pow( n.y, 1.0 / 3.0 ) : ( 7.787 * n.y ) + ( 16.0 / 116.0 );\n    v.z = ( n.z > 0.008856 ) ? pow( n.z, 1.0 / 3.0 ) : ( 7.787 * n.z ) + ( 16.0 / 116.0 );\n    return vec3(( 116.0 * v.y ) - 16.0, 500.0 * ( v.x - v.y ), 200.0 * ( v.y - v.z ));\n}\n\nvec3 rgb2lab(vec3 c) {\n    vec3 lab = xyz2lab( rgb2xyz( c ) );\n    return vec3( lab.x / 100.0, 0.5 + 0.5 * ( lab.y / 127.0 ), 0.5 + 0.5 * ( lab.z / 127.0 ));\n}\n\nvec3 lab2xyz( vec3 c ) {\n    float fy = ( c.x + 16.0 ) / 116.0;\n    float fx = c.y / 500.0 + fy;\n    float fz = fy - c.z / 200.0;\n    return vec3(\n         95.047 * (( fx > 0.206897 ) ? fx * fx * fx : ( fx - 16.0 / 116.0 ) / 7.787),\n        100.000 * (( fy > 0.206897 ) ? fy * fy * fy : ( fy - 16.0 / 116.0 ) / 7.787),\n        108.883 * (( fz > 0.206897 ) ? fz * fz * fz : ( fz - 16.0 / 116.0 ) / 7.787)\n    );\n}\n\nvec3 xyz2rgb( vec3 c ) {\n    vec3 v =  c / 100.0 * mat3( \n        3.2406, -1.5372, -0.4986,\n        -0.9689, 1.8758, 0.0415,\n        0.0557, -0.2040, 1.0570\n    );\n    vec3 r;\n    r.x = ( v.r > 0.0031308 ) ? (( 1.055 * pow( v.r, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.r;\n    r.y = ( v.g > 0.0031308 ) ? (( 1.055 * pow( v.g, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.g;\n    r.z = ( v.b > 0.0031308 ) ? (( 1.055 * pow( v.b, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.b;\n    return r;\n}\n\nvec3 lab2rgb(vec3 c) {\n    return xyz2rgb( lab2xyz( vec3(100.0 * c.x, 2.0 * 127.0 * (c.y - 0.5), 2.0 * 127.0 * (c.z - 0.5)) ) );\n}\n\nvec3 hsl2rgb( in vec3 c )\n{\n    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );\n\n    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));\n}\n\nvec3 rgb2hsl( in vec3 c ){\n  float h = 0.0;\n	float s = 0.0;\n	float l = 0.0;\n	float r = c.r;\n	float g = c.g;\n	float b = c.b;\n	float cMin = min( r, min( g, b ) );\n	float cMax = max( r, max( g, b ) );\n\n	l = ( cMax + cMin ) / 2.0;\n	if ( cMax > cMin ) {\n		float cDelta = cMax - cMin;\n        \n        \n		s = l < .0 ? cDelta / ( cMax + cMin ) : cDelta / ( 2.0 - ( cMax + cMin ) );\n        \n		if ( r == cMax ) {\n			h = ( g - b ) / cDelta;\n		} else if ( g == cMax ) {\n			h = 2.0 + ( b - r ) / cDelta;\n		} else {\n			h = 4.0 + ( r - g ) / cDelta;\n		}\n\n		if ( h < 0.0) {\n			h += 6.0;\n		}\n		h = h / 6.0;\n	}\n	return vec3( h, s, l );\n}\n\nvec3 rgb2hsv(vec3 c)\n{\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n \n\nvec3 hsv2rgb(vec3 c)\n{\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvoid main()	{\n	vec3 color = vec3(0.136, 0.559, 0.832);\n  	float time = seconds;\n\n	vec2 st = gl_PointCoord.xy;\n\n	float circleMask = circle(st, 1., min(vDepth,2.5));\n	if(circleMask<0.001)discard;\n	vec3 particleColor = vec3(0.108, 0.118, 0.177);\n\n	vec3 rgb1 = vec3(0.994, 0.162, 0.848);\n	vec3 rgb2 = vec3(0.000, 1.000, 1.000);\n\n    rgb1 = vec3(0.792, 0.859, 0.013); \n\n	vec3 lab1 = rgb2lab(rgb1);\n	vec3 lab2 = rgb2lab(rgb2);\n\n	vec3 finalColor = mix(lab1, lab2, vColor);\n	finalColor = lab2rgb(finalColor);\n\n	float opacity = clamp(0.1,1., vDepth );\n	gl_FragColor = vec4(finalColor*circleMask, circleMask*opacity*0.5);\n\n  gl_FragColor.rgb+= 0.1*vfl;\n	\n\n	\n	\n\n	\n\n	\n    \n\n    \n\n	\n	\n	\n	\n	\n}",
            transparent: !0,
            depthWrite: !1,
          });
        }
      }
      let eY = (e) => Math.random() * e - e / 2;
      var eG = new WeakMap();
      class eK extends eV {
        constructor(e, t) {
          super(e),
            (0, y._)(this, eG, { writable: !0, value: void 0 }),
            (0, M._)(this, eG, n7.pipeline.renderer),
            (this.fillGrid = () => {
              let e = this.gpuCompute.createTexture(),
                t = e.image.data;
              for (let e = 0, n = t.length; e < n; e += 4) {
                let n = ((e / 4) % 64) / 64 - 0.5,
                  i = Math.floor(e / 4 / 64) / 64 - 0.5;
                (n *= 10),
                  (i *= 10),
                  (t[e + 0] = n),
                  (t[e + 1] = -i / 10),
                  (t[e + 2] = i),
                  (t[e + 3] = 1);
              }
              return e;
            }),
            (this.fillTextures = (e, t) => {
              let n = e.image.data,
                i = t.image.data;
              for (let e = 0, t = n.length; e < t; e += 4) {
                let t = eY(20),
                  s = eY(20),
                  r = eY(20),
                  a = eY(0.1),
                  o = eY(0.1),
                  l = eY(0.1),
                  c = eY(1);
                (n[e + 0] = t),
                  (n[e + 1] = s),
                  (n[e + 2] = r),
                  (n[e + 3] = 1),
                  (i[e + 0] = a),
                  (i[e + 1] = o),
                  (i[e + 2] = l),
                  (i[e + 3] = c);
              }
            }),
            (this.initComputeRenderer = () => {
              this.gpuCompute = new eH(64, 64, (0, b._)(this, eG));
              let e = this.gpuCompute.createTexture(),
                t = this.gpuCompute.createTexture();
              this.fillTextures(e, t),
                (this.velocityVariable = this.gpuCompute.addVariable(
                  "textureVelocity",
                  "#include <common>\n\n#define delta (1.0 / 60.0)\n\nuniform float gravityConstant;\nuniform sampler2D fluidMap;\nuniform mat4 projMatrix;\nuniform mat4 mvMatrix;\n\nconst float width = resolution.x;\nconst float height = resolution.y;\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n	mat4 m = rotationMatrix(axis, angle);\n	return (m * vec4(v, 1.0)).xyz;\n}\n\nfloat PHI = 1.61803398874989484820459;  \n\nfloat gold_noise(in vec2 xy, in float seed){\n       return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);\n}\n\nvoid main() {\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  float idParticle = uv.y * resolution.x + uv.x;\n\n  \n  \n\n  vec4 tmpPos = texture2D(texturePosition, uv);\n  vec3 pos = tmpPos.xyz;\n\n  vec4 tmpVel = texture2D(textureVelocity, uv);\n  vec3 vel = tmpVel.xyz;\n\n  \n  vec4 ndcPos = projMatrix * mvMatrix * vec4(pos, 1.0);\n  \n  vec2 fluidUV = 0.5* vec2(ndcPos.x + 1.,ndcPos.y + 1.);\n  vec4 fluid = texture2D(fluidMap,fluidUV);\n\n  vec3 dir = normalize(fluid.xyz);\n  if(length(dir)>0.5){\n    \n  }\n\n  \n\n  \n\n  \n\n  vel = rotate(vel, vec3(0, 1, gold_noise(uv, 0.01)), 0.005);\n\n  \n\n  gl_FragColor = vec4(vel, 1.);\n}",
                  t
                )),
                (this.positionVariable = this.gpuCompute.addVariable(
                  "texturePosition",
                  "#define delta (1.0 / 60.0)\nuniform float uGrid;\nuniform float uSine;\nuniform sampler2D grid;\nuniform sampler2D fluidMap;\nuniform float time;\nuniform mat4 modelMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main() {\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n  vec4 tmpPos = texture2D(texturePosition, uv);\n  vec4 gridPos = texture2D(grid, uv);\n  vec3 pos = tmpPos.xyz;\n\n  vec4 tmpVel = texture2D(textureVelocity, uv);\n  vec3 vel = tmpVel.xyz;\n  float age = tmpVel.w;\n\n  if (age == 0.0) {\n    vel = vec3(0.0);\n  }\n\n  \n  pos += vel * delta;\n\npos = mix(pos, gridPos.xyz, uGrid);\n\nvec3 sinePos = gridPos.xyz + 0.4*vec3(0., sin(gridPos.x*1.0 + time*0.1), 0.0);\nsinePos.y += 0.4*sin(sinePos.y + 0.1);\n\npos = mix(pos, sinePos, uSine);\n\n  gl_FragColor = vec4(pos, age);\n}",
                  e
                )),
                this.gpuCompute.setVariableDependencies(this.velocityVariable, [
                  this.positionVariable,
                  this.velocityVariable,
                ]),
                this.gpuCompute.setVariableDependencies(this.positionVariable, [
                  this.positionVariable,
                  this.velocityVariable,
                ]),
                (this.velocityUniforms =
                  this.velocityVariable.material.uniforms),
                (this.positionUniforms =
                  this.positionVariable.material.uniforms);
              let n = this.fillGrid();
              (this.positionUniforms.grid = { value: n }),
                (this.positionUniforms.time = { value: 0 }),
                (this.positionUniforms.uSine = B("particles.sine", 0)),
                (this.positionUniforms.uGrid = B("particles.grid", 0)),
                (this.velocityUniforms.gravityConstant = { value: 0 }),
                (this.velocityUniforms.fluidMap = B(eS.velocityProvider)),
                (this.velocityUniforms.projMatrix = {
                  value: this.context.camera.projectionMatrix,
                }),
                (this.velocityUniforms.mvMatrix = {
                  value: this.particles.modelViewMatrix,
                });
              let i = this.gpuCompute.init();
              null !== i && console.error(i);
            }),
            (this.onTick = (e) => {
              let { seconds: t } = e;
              this.gpuCompute.compute(),
                (this.velocityUniforms.projMatrix.value =
                  this.context.camera.projectionMatrix),
                (this.velocityUniforms.mvMatrix.value =
                  this.particles.modelViewMatrix),
                (this.particles.material.uniforms.texturePosition.value =
                  this.gpuCompute.getCurrentRenderTarget(
                    this.positionVariable
                  ).texture),
                (this.particles.material.uniforms.textureVelocity.value =
                  this.gpuCompute.getCurrentRenderTarget(
                    this.velocityVariable
                  ).texture),
                (this.positionUniforms.time.value = t);
            }),
            (this.context = e),
            (this.geo = new T.LoY());
          let n = [],
            i = [],
            s = [],
            r = [];
          for (let e = 0; e < 4096; e++)
            n.push(0),
              n.push(0),
              n.push(0),
              i.push(Math.random(), Math.random(), Math.random()),
              s.push(Math.random()),
              r.push(Math.random());
          let a = new Float32Array(8192),
            o = 0;
          for (let e = 0; e < 64; e++)
            for (let t = 0; t < 64; t++) (a[o++] = t / 63), (a[o++] = e / 63);
          this.geo.setAttribute("position", new T.qtW(n, 3)),
            this.geo.setAttribute("aRandom", new T.qtW(i, 3)),
            this.geo.setAttribute("aSize", new T.qtW(s, 1)),
            this.geo.setAttribute("aColor", new T.qtW(r, 1)),
            this.geo.setAttribute("aUv", new T.qtW(a, 2)),
            (this.particles = new T.ONl(this.geo, new eX())),
            (this.particles.frustumCulled = !1),
            e.scene.add(this.particles),
            this.initComputeRenderer(),
            R.on(ee.event, this.onTick);
        }
      }
      var eZ = new WeakMap();
      class eQ {
        constructor({
          camera: e,
          position: t = new T.Pq0(0, 0, n7.settings.camera.depth),
          target: n = new T.Pq0(),
        }) {
          (0, y._)(this, eZ, { writable: !0, value: void 0 }),
            (0, M._)(this, eZ, "cam.positionShift" + Math.random()),
            (this.shiftMultiplier = 0.2),
            (this.x4 = new T.IUQ(1, 0, 0, 0)),
            (this.y4 = new T.IUQ(0, 1, 0, 0)),
            (this.x3 = new T.Pq0(1, 0, 0)),
            (this.y3 = new T.Pq0(0, 1, 0)),
            (this.objectSize = new T.I9Y(1, 1)),
            (this.objectScale = 1),
            (this.layoutSize = new T.I9Y()),
            (this.layoutCenterNDC = new T.I9Y()),
            (this.v3 = new T.Pq0()),
            (this.dtc = new T.Pq0()),
            (this.dtt = new T.Pq0()),
            (this.onPointer = (e) => {
              let { x: t, y: n } = e;
              $.set((0, b._)(this, eZ), [-t, -n]);
            }),
            (this.onTick = (e) => {
              let { seconds: t } = e;
              this.camera.position
                .subVectors(this.position, this.target)
                .normalize()
                .multiplyScalar(
                  Math.max(
                    this.objectSize.x / this.layoutSize.x,
                    this.objectSize.y / this.layoutSize.y
                  ) / this.objectScale
                )
                .add(this.target),
                this.camera.lookAt(this.target),
                this.camera.updateMatrix();
              let n = this.position.distanceTo(this.target);
              this.x4.set(1, 0, 0, 0).applyMatrix4(this.camera.matrix),
                this.x3.set(this.x4.x, this.x4.y, this.x4.z).normalize(),
                this.y4.set(0, 1, 0, 0).applyMatrix4(this.camera.matrix),
                this.y3.set(this.y4.x, this.y4.y, this.y4.z).normalize();
              let i = 2 * t * Math.PI,
                s = $.get((0, b._)(this, eZ));
              this.camera.position
                .addScaledVector(
                  this.x3,
                  (s[0] + 0.1 * Math.sin(i / 17)) * this.shiftMultiplier * n
                )
                .addScaledVector(
                  this.y3,
                  (s[1] + 0.1 * Math.sin(i / 13)) * this.shiftMultiplier * n
                ),
                this.camera.lookAt(this.target),
                this.camera.updateMatrix(),
                this.v3.copy(this.target).project(this.camera),
                (this.v3.x += this.layoutCenterNDC.x),
                (this.v3.y += this.layoutCenterNDC.y),
                this.v3.unproject(this.camera),
                this.dtt.subVectors(this.v3, this.camera.position).normalize(),
                this.dtc
                  .subVectors(this.target, this.camera.position)
                  .normalize(),
                this.v3.crossVectors(this.dtt, this.dtc).normalize();
              let r = Math.acos(Math.min(1, Math.abs(this.dtc.dot(this.dtt))));
              this.v3.lengthSq() > 0 &&
                this.camera.rotateOnWorldAxis(this.v3, r);
            }),
            (this.onResize = (e) => {
              let { aspect: t } = e;
              (this.camera.aspect = t), this.camera.updateProjectionMatrix();
            }),
            (this.camera = e),
            (this.position = t),
            (this.target = n),
            new $((0, b._)(this, eZ), [0, 0], 10, 5),
            R.on(ep.ndcEvent, this.onPointer),
            R.on(ee.event, this.onTick),
            R.on(er.resizeEvent, this.onResize);
        }
      }
      var eJ =
        "varying vec3 pos;\nvarying float aaStep;\n\nuniform float aa;\nuniform vec2 pixelSize;\nuniform mat4 cameraMatrix;\nuniform mat4 projectionMatrixInverse;\n\nvoid main() {\n  pos = position;\n\n  vec4 world = modelMatrix * vec4(position, 1.);\n  gl_Position = projectionMatrix * viewMatrix * world;\n\n  vec4 dp = gl_Position;\n  dp.x += pixelSize.x * dp.w;\n  dp = cameraMatrix * projectionMatrixInverse * dp - world;\n\n  aaStep = aa * length(dp.xyz / vec3(\n    length(modelMatrix[0].xyz),\n    length(modelMatrix[1].xyz),\n    length(modelMatrix[2].xyz)\n  ));\n}";
      class e$ extends T.BKk {
        constructor(e, t, n, i) {
          super({
            uniforms: {
              aa: B("cubes.aa"),
              cam: { value: t },
              camX: { value: n },
              camY: { value: i },
              pixelSize: B(er.iv2Provider),
              projectionMatrixInverse: { value: e.projectionMatrixInverse },
              cameraMatrix: { value: e.matrixWorld },
              whiten: { value: 0 },
              eta: B("glass.eta", 1.5),
              iridescenceMap: F("iridescenceMap"),
              iridescenseInfluence: B("iridescenseInfluence"),
              envIntensity: B("envIntensity", 3),
              lightMatrix: B(eO.matrixProvider),
              seconds: B(ee.secondsProvider),
            },
            vertexShader: eJ,
            fragmentShader:
              "varying vec3 pos;\nvarying float aaStep;\n\nuniform mat4 modelMatrix;\nuniform float eta;\nuniform vec3 cam;\nuniform vec3 camX;\nuniform vec3 camY;\nuniform float envIntensity;\nuniform float iridescenseInfluence;\nuniform mat4 lightMatrix;\nuniform float whiten;\nuniform float seconds;\nuniform sampler2D iridescenceMap;\n\nfloat rand(vec2 c) {\n  return fract(sin(dot(fract(c), vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat roundedboxIntersect(in vec3 ro, in vec3 rd, in vec3 size, in float rad) {\n  \n  vec3 m = 1.0 / rd;\n  vec3 n = m * ro;\n  vec3 k = abs(m) * (size + rad);\n  vec3 t1 = -n - k;\n  vec3 t2 = -n + k;\n  float tN = max(max(t1.x, t1.y), t1.z);\n  float tF = min(min(t2.x, t2.y), t2.z);\n  if (tN > tF || tF < 0.0) return -1.0;\n  float t = tN;\n\n  \n  vec3 pos = ro + t * rd;\n  vec3 s = sign(pos);\n  ro  *= s;\n  rd  *= s;\n  pos *= s;\n      \n  \n  pos -= size;\n  pos = max(pos.xyz, pos.yzx);\n  if (min(min(pos.x, pos.y), pos.z) < 0.0) return t;\n\n  \n  vec3 oc = ro - size;\n  vec3 dd = rd * rd;\n  vec3 oo = oc * oc;\n  vec3 od = oc * rd;\n  float ra2 = rad * rad;\n\n  t = 1e20;\n\n  \n  {\n    float b = od.x + od.y + od.z;\n    float c = oo.x + oo.y + oo.z - ra2;\n    float h = b * b - c;\n    if(h > 0.0) t = -b - sqrt(h);\n  }\n  \n  {\n    float a = dd.y + dd.z;\n    float b = od.y + od.z;\n    float c = oo.y + oo.z - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.x + rd.x * h) < size.x) t = h;\n    }\n  }\n  \n  {\n    float a = dd.z + dd.x;\n    float b = od.z + od.x;\n    float c = oo.z + oo.x - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.y + rd.y * h) < size.y) t = h;\n    }\n  }\n  \n  {\n    float a = dd.x + dd.y;\n    float b = od.x + od.y;\n    float c = oo.x + oo.y - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.z + rd.z * h) < size.z) t = h;\n    }\n  }\n\n  if (t > 1e19) t = -1.0;\n  return t;\n}\n\nvec3 roundedboxNormal(in vec3 pos, in vec3 size, in float rad) {\n  return sign(pos) * normalize(max(abs(pos) - size, 0.0));\n}\nfloat fresnelReflectivity(vec3 rd, vec3 n, vec3 rfr, float n1, float n2) {\n  if (dot(rfr, rfr) == 0.) return 1.;\n\n  float cos1 = -dot(rd, n);\n  float cos2 = -dot(rfr, n);\n\n  float n1c1 = n1 * cos1;\n  float n2c1 = n2 * cos1;\n  float n1c2 = n1 * cos2;\n  float n2c2 = n2 * cos2;\n\n  float rs = (n1c1 - n2c2) / (n1c1 + n2c2);\n  float rp = (n1c2 - n2c1) / (n1c2 + n2c1);\n\n  return 0.5 * (rs * rs + rp * rp);\n}\n\nfloat fresnelReflectivity(vec3 rd, vec3 n, float n1, float n2) {\n  vec3 rfr = refract(rd, n, n1 / n2);\n  return fresnelReflectivity(rd, n, rfr, n1, n2);\n}\n\nfloat fresnelSchlick(float F0, vec3 rd, vec3 n) {\n  return F0 + (1.0 - F0) * pow(1.0 - abs(dot(n, rd)), 5.0);\n}\n\nfloat fresnelSchlick(float F0, float cosTheta) {\n  return F0 + (1.0 - F0) * pow(1.0 - abs(cosTheta), 5.0);\n}\n\nfloat fresnelSchlick(vec3 rd, vec3 n) {\n  return 0.04 + 0.96 * pow(1.0 - abs(dot(n, rd)), 5.0);\n}\n\nfloat fresnelSchlick(float cosTheta) {\n  return 0.04 + 0.96 * pow(1.0 - abs(cosTheta), 5.0);\n}\n\n#define rad 0.05\n#define size vec3(0.5 - rad)\n\nvec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )\n{\n  return a + b*cos( 6.28318*(c*t+d) );\n}\n\nvec3 getEnv(vec3 ro, vec3 rd, vec3 nor) {\n  float thickness = dot(rd, nor);\n  thickness = (1. - abs(thickness)) * 0.33;\n  vec3 iridescence = texture2D(iridescenceMap, vec2(thickness, 0.5)).rgb * iridescenseInfluence + 1. - iridescenseInfluence;\n  vec3 ori = (lightMatrix * modelMatrix * vec4(ro, 1.)).xyz;\n  vec3 dir = (lightMatrix * modelMatrix * vec4(rd, 0.)).xyz;\n  vec3 color = vec3(0.);\n  {\n    float d = -ori.z / dir.z;\n    if (d > 0.) {\n      vec2 pos = ori.xy + dir.xy * d;\n      pos = 1. - pos * pos;\n      float l = step(0., pos.x) * step(0., pos.y);\n      l *= 1. - 0.8 * pos.x * pos.y;\n      \n      color += l * envIntensity * iridescence;\n    }\n  }\n  return color;\n}\n\nvec3 trace(vec3 cam, vec3 rd, float dd, float eta) {\n  float ieta = 1. / eta;\n  vec3 pos = cam + rd * dd;\n  vec3 nor = roundedboxNormal(pos, size, rad);\n  float d = dot(rd, nor);\n\n  vec3 color = getEnv(pos, reflect(rd, nor), nor) * fresnelSchlick(rd, nor);\n  \n  float k = d * d + eta * eta - 1.;\n  if (k < 0.) {\n    return color;\n  }\n\n  vec3 ref = normalize(nor * (sqrt(k) + d) - rd);\n  float power = 1. - fresnelReflectivity(ref, -nor, eta, 1.);\n\n  for (int i = 0; i < 4; i++) {\n\n    pos = pos - ref * 4.;\n    float d = roundedboxIntersect(pos, ref, size, rad);\n    if (d < 0.)\n      return color; \n    pos += ref * d;\n\n    nor = roundedboxNormal(pos, size, rad);\n  \n    float drn = dot(ref, nor),\n          hyp = drn * drn + ieta * ieta;\n    if (hyp >= 1.) {\n      vec3 rr = ((sqrt(hyp - 1.) + drn) * nor - ref) * eta;\n      color += getEnv(pos, rr, nor) * (1. - fresnelSchlick(rr, nor)) * power;\n    }\n\n    ref = reflect(ref, nor);\n    power *= fresnelReflectivity(ref, -nor, eta, 1.);\n  }\n\n  return color;\n}\n\nvoid main() {\n  vec3 rd = normalize(pos - cam);\n\n  float d = roundedboxIntersect(cam, rd, size, rad);\n  if (d < 0.) {\n    discard;\n    gl_FragColor = vec4(getEnv(cam, rd, vec3(0.)), 1.); \n    return;\n  }\n  \n  vec3 color = trace(cam, rd, d, eta);\n\n  color +=\n    trace(cam + (camX + camY) * aaStep, rd, d, eta) +\n    trace(cam + (camX - camY) * aaStep, rd, d, eta) +\n    trace(cam - (camX + camY) * aaStep, rd, d, eta) +\n    trace(cam - (camX - camY) * aaStep, rd, d, eta);\n  color /= 5.;\n\n  \n  \n  \n  \n  \n  \n  \n  \n  \n\n  color = mix(color, vec3(1.), whiten);\n  \n  color = max(vec3(0.), color - 0.5 / 255. + rand(pos.xy - pos.z + seconds) / 255.);\n\n  gl_FragColor = vec4(color, 1.);\n}",
          });
        }
      }
      var e0 = new WeakMap(),
        e1 = new WeakMap(),
        e2 = new WeakMap(),
        e3 = new WeakMap(),
        e5 = new WeakMap(),
        e4 = new WeakMap(),
        e9 = new WeakMap(),
        e8 = new WeakMap();
      class e7 extends T.eaF {
        constructor(e) {
          super(new T.iNn(1, 1, 1), null),
            (0, y._)(this, e0, { writable: !0, value: void 0 }),
            (0, y._)(this, e1, { writable: !0, value: void 0 }),
            (0, y._)(this, e2, { writable: !0, value: void 0 }),
            (0, y._)(this, e3, { writable: !0, value: void 0 }),
            (0, y._)(this, e5, { writable: !0, value: void 0 }),
            (0, y._)(this, e4, { writable: !0, value: void 0 }),
            (0, y._)(this, e9, { writable: !0, value: void 0 }),
            (0, y._)(this, e8, { writable: !0, value: void 0 }),
            (0, M._)(this, e1, new T.Pq0()),
            (0, M._)(this, e2, new T.Pq0()),
            (0, M._)(this, e3, new T.Pq0()),
            (0, M._)(this, e5, new T.IUQ()),
            (0, M._)(this, e4, new T.IUQ()),
            (0, M._)(this, e9, new T.PTz()),
            (0, M._)(this, e8, () => {
              (0, b._)(this, e9).copy(this.quaternion).conjugate(),
                (0, b._)(this, e5)
                  .set(1, 0, 0, 0)
                  .applyMatrix4((0, b._)(this, e0).camera.matrix),
                (0, b._)(this, e2)
                  .set(
                    (0, b._)(this, e5).x,
                    (0, b._)(this, e5).y,
                    (0, b._)(this, e5).z
                  )
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, e9)),
                (0, b._)(this, e4)
                  .set(0, 1, 0, 0)
                  .applyMatrix4((0, b._)(this, e0).camera.matrix),
                (0, b._)(this, e3)
                  .set(
                    (0, b._)(this, e4).x,
                    (0, b._)(this, e4).y,
                    (0, b._)(this, e4).z
                  )
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, e9)),
                (0, b._)(this, e1)
                  .copy((0, b._)(this, e0).camera.position)
                  .sub(this.position)
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, e9));
            }),
            (0, M._)(this, e0, e),
            (this.material = new e$(
              (0, b._)(this, e0).camera,
              (0, b._)(this, e1),
              (0, b._)(this, e2),
              (0, b._)(this, e3)
            )),
            (0, b._)(this, e0).scene.add(this),
            R.on(ee.event, (0, b._)(this, e8));
        }
      }
      function e6(e, t, n) {
        let i = (e - t) / (n - t);
        return i <= 0 ? 0 : i >= 1 ? 1 : i * i * (3 - 2 * i);
      }
      function te(e, t) {
        var n;
        let i = 0;
        for (; t > e[i].x && i < e.length - 1; ) i++;
        if (0 == i) return e[0].v;
        let s = tt(t, e[i - 1].x, e[i].x);
        return (n = e[i - 1].v), n + s * (e[i].v - n);
      }
      function tt(e, t, n) {
        return Math.min(1, Math.max(0, (e - t) / (n - t)));
      }
      function tn(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      class ti {
        constructor() {
          (this.index = 0),
            (this.progress = 0),
            (this.placeProgress = 0),
            (this.placeVisibility = 0),
            (this.visibility = 0),
            (this.weight = 0);
        }
      }
      var ts = new WeakMap(),
        tr = new WeakMap(),
        ta = new WeakMap();
      class to {
        constructor() {
          (0, y._)(this, ts, { writable: !0, value: void 0 }),
            (0, y._)(this, tr, { writable: !0, value: void 0 }),
            (0, y._)(this, ta, { writable: !0, value: void 0 }),
            (this.sps = {}),
            (0, M._)(this, tr, []),
            (0, M._)(this, ta, !1),
            (this.init = (e) => {
              (0, M._)(
                this,
                ts,
                Object.keys(e)
                  .filter((e) => e.startsWith("section"))
                  .sort((t, n) => e[t].rect.top - e[n].rect.top)
              ),
                (0, b._)(this, ts).forEach((t, n) => {
                  let i = new ti();
                  (i.sectionId = t), (i.section = e[t]);
                  let s = "place" + t.substring(7);
                  if (s in e) i.place = e[s];
                  else {
                    let n,
                      s = 1;
                    do
                      (n = "place" + t.substring(7) + s) in e &&
                        (i.place ? i.place.push(e[n]) : (i.place = [e[n]])),
                        s++;
                    while (n in e);
                  }
                  (i.index = n), (this.sps[t] = i);
                }),
                (0, M._)(this, ta, !0);
            }),
            (this.onLayout = (e, t) => {
              (0, b._)(this, ta) || this.init(e);
              let n = t + n7.viewport.y;
              (0, b._)(this, tr).length = 0;
              let i = 0,
                s = 0;
              for (let r = 0; r < (0, b._)(this, ts).length; r++) {
                let a = (0, b._)(this, ts)[r],
                  o = e[a].rect;
                if (o.top > n || o.bottom < t) continue;
                let l =
                    Math.min(o.bottom - t, n7.viewport.y) -
                    Math.max(o.top - t, 0),
                  c = this.sps[a];
                if (
                  ((c.progress = (t - o.top) / (o.bottom - o.top)),
                  (c.visibility =
                    (Math.min(n, o.bottom) - Math.max(t, o.top)) /
                    n7.viewport.y),
                  c.place)
                ) {
                  if (((c.weight = l), !Array.isArray(c.place))) {
                    let e = c.place.rect;
                    (c.placeProgress = tt(t, e.top - n7.viewport.y, e.bottom)),
                      (c.placeVisibility = Math.min(
                        tt(n, e.top, e.bottom),
                        tt(t, e.bottom, e.top)
                      ));
                  }
                } else
                  (c.placeProgress = c.progress),
                    (c.weight = Math.min(
                      tt(n, o.top, o.bottom),
                      tt(t, o.bottom, o.top)
                    )),
                    (c.placeVisibility = c.weight);
                (0, b._)(this, tr).push(c), (i += l * r), (s += l);
              }
              0 !== s &&
                ((i /= s),
                O(to.progressProvider, i),
                R.dispatch(to.event, i, (0, b._)(this, tr), this.sps));
            }),
            (this.reset = () => {
              (0, M._)(this, ta, !1),
                (0, M._)(this, ts, null),
                (this.sps = {}),
                ((0, b._)(this, tr).length = 0);
            }),
            R.on(ej.updateEvent, this.onLayout);
        }
      }
      (to.progressProvider = "ScrollProgress.progressProvider"),
        (to.event = "ScrollProgress.event");
      let tl = class {
        constructor() {
          this.size = 1;
        }
      };
      var tc = new WeakMap(),
        th = new WeakMap(),
        tv = new WeakMap(),
        td = new WeakMap(),
        tu = new WeakMap(),
        tp = new WeakMap();
      class tm extends Q {
        set enabled(e) {
          this._enabled !== e &&
            ((this._enabled = e),
            this._enabled
              ? (R.on(to.event, this.onProgress),
                R.on(ee.event, (0, b._)(this, tp)),
                R.on(ep.ndcEvent, (0, b._)(this, tu)))
              : (R.off(to.event, this.onProgress),
                R.off(ee.event, (0, b._)(this, tp)),
                R.off(ep.ndcEvent, (0, b._)(this, tu))),
            this._enabled && R.dispatch(eO.setEvent, { x: 0, y: 0, z: 10 }));
        }
        get enabled() {
          return this._enabled;
        }
        constructor() {
          super(),
            (0, y._)(this, tc, { writable: !0, value: void 0 }),
            (0, y._)(this, th, { writable: !0, value: void 0 }),
            (0, y._)(this, tv, { writable: !0, value: void 0 }),
            (0, y._)(this, td, { writable: !0, value: void 0 }),
            (0, y._)(this, tu, { writable: !0, value: void 0 }),
            (0, y._)(this, tp, { writable: !0, value: void 0 }),
            (0, M._)(this, th, new T.RlV()),
            (0, M._)(this, tv, new T.Pq0()),
            (0, M._)(this, td, new k.eB()),
            (0, M._)(this, tu, (e) => {
              let { x: t, y: n } = e;
              (0, b._)(this, th).origin.copy(n7.context.camera.position),
                (0, b._)(this, th)
                  .direction.set(t, n, 0)
                  .unproject(n7.context.camera)
                  .sub((0, b._)(this, th).origin)
                  .normalize();
            }),
            (0, M._)(this, tp, (e) => {
              let { ds: t } = e;
              t < 0.001 ||
                ((0, b._)(this, tc).step(1 / 60, t, 3),
                this.elements.forEach((e) => {
                  e.mesh.position.copy(e.body.position),
                    e.mesh.quaternion.copy(e.body.quaternion);
                  let t = e.mesh.position;
                  (0, b._)(this, tv).subVectors(t, (0, b._)(this, th).origin);
                  let n = (0, b._)(this, tv).dot((0, b._)(this, th).direction);
                  (0, b._)(this, tv)
                    .copy((0, b._)(this, th).origin)
                    .addScaledVector((0, b._)(this, th).direction, n);
                  let i = -5 * e6(t.distanceTo((0, b._)(this, tv)), 3, 0);
                  (0, b._)(this, tv).sub(t).normalize().multiplyScalar(i),
                    (0, b._)(this, tv).addScaledVector(t, -0.1),
                    (0, b._)(this, td).set(
                      (0, b._)(this, tv).x,
                      (0, b._)(this, tv).y,
                      (0, b._)(this, tv).z
                    ),
                    e.body.applyImpulse((0, b._)(this, td));
                }));
            }),
            (this.onProgress = (e, t, n) => {
              if (!this.enabled) return;
              let i = n.sectioncontact.place;
              this.cameraController.layoutCenterNDC.copy(i.ndcCenter),
                this.cameraController.layoutSize.copy(i.size);
            }),
            (this.cameraController = new eQ({
              camera: this.camera,
              position: new T.Pq0(0, 0, 7),
            })),
            this.cameraController.objectSize.setScalar(7),
            (this.scene.environment = n7.assetsManager.get("env")),
            (this.scene.environment.mapping = T.wfO),
            (this.particles = new eK(this)),
            (this.cubes = []);
          for (let e = 0; e < 9; e++) this.cubes.push(new e7(this));
          for (let e = 0; e < 9; e++) {
            let e = new T.eaF(
              new C.j(1, 1, 1, 4, 0.05),
              new T._4j({
                metalness: 1,
                roughness: 0.1 + 0.3 * Math.random(),
                color: new T.Q1f(n7.settings.brandColor),
              })
            );
            this.scene.add(e), this.cubes.push(e);
          }
          for (let e = 0; e < 36; e++) {
            let e = new T.eaF(
              new C.j(1, 1, 1, 4, 0.05),
              new T._4j({
                metalness: 1,
                roughness: 0.1 + 0.3 * Math.random(),
                color: 8421504,
              })
            );
            this.scene.add(e), this.cubes.push(e);
          }
          (0, M._)(this, tc, new k.HK()),
            (this.elements = this.cubes.map((e, t) => {
              let n = new tl();
              return (
                (n.size = 0.5 * Math.random() + 1),
                (n.mesh = e),
                n.mesh.scale.setScalar(n.size),
                (n.body = new k.nB({
                  mass: n.size ** 3,
                  shape: new k.az(
                    new k.eB(0.5 * n.size, 0.5 * n.size, 0.5 * n.size)
                  ),
                  position: new k.eB(
                    10 * Math.random() - 5,
                    10 * Math.random() - 5,
                    10 * Math.random() - 5
                  ),
                  linearDamping: 0.05,
                  angularDamping: 0.05,
                })),
                (0, b._)(this, tc).addBody(n.body),
                n
              );
            }));
        }
      }
      class tf extends T.BKk {
        constructor(e, t, n, i) {
          super({
            uniforms: {
              aa: B("cubes.aa"),
              cam: { value: t },
              camX: { value: n },
              camY: { value: i },
              pixelSize: B(er.iv2Provider),
              projectionMatrixInverse: { value: e.projectionMatrixInverse },
              cameraMatrix: { value: e.matrixWorld },
              whiten: { value: 0 },
              eta: B("glass.eta", 1.5),
              envIntensity: B("envIntensity", 3),
              iridescenceMap: F("iridescenceMap"),
              complexity: B("inifinite.complexity"),
              lightColor: { value: new T.Q1f("white") },
              glow: B("inifinite.glow", 0.64),
              glowWidth: B("inifinite.glowWidth", 0.025),
              lightMatrix: B(eO.matrixProvider),
              seconds: B(ee.secondsProvider),
            },
            vertexShader: eJ,
            fragmentShader:
              "varying vec3 pos;\nvarying float aaStep;\n\nuniform float eta;\nuniform vec3 cam;\nuniform vec3 camX;\nuniform vec3 camY;\nuniform mat4 lightMatrix;\nuniform mat4 modelMatrix;\nuniform vec3 lightColor;\nuniform float envIntensity;\nuniform float glow;\nuniform float glowWidth;\nuniform float seconds;\nuniform float whiten;\nuniform float complexity;\nuniform sampler2D iridescenceMap;\n\nfloat rand(vec2 c) {\n  return fract(sin(dot(fract(c), vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat roundedboxIntersect(in vec3 ro, in vec3 rd, in vec3 size, in float rad) {\n  \n  vec3 m = 1.0 / rd;\n  vec3 n = m * ro;\n  vec3 k = abs(m) * (size + rad);\n  vec3 t1 = -n - k;\n  vec3 t2 = -n + k;\n  float tN = max(max(t1.x, t1.y), t1.z);\n  float tF = min(min(t2.x, t2.y), t2.z);\n  if (tN > tF || tF < 0.0) return -1.0;\n  float t = tN;\n\n  \n  vec3 pos = ro + t * rd;\n  vec3 s = sign(pos);\n  ro  *= s;\n  rd  *= s;\n  pos *= s;\n      \n  \n  pos -= size;\n  pos = max(pos.xyz, pos.yzx);\n  if (min(min(pos.x, pos.y), pos.z) < 0.0) return t;\n\n  \n  vec3 oc = ro - size;\n  vec3 dd = rd * rd;\n  vec3 oo = oc * oc;\n  vec3 od = oc * rd;\n  float ra2 = rad * rad;\n\n  t = 1e20;\n\n  \n  {\n    float b = od.x + od.y + od.z;\n    float c = oo.x + oo.y + oo.z - ra2;\n    float h = b * b - c;\n    if(h > 0.0) t = -b - sqrt(h);\n  }\n  \n  {\n    float a = dd.y + dd.z;\n    float b = od.y + od.z;\n    float c = oo.y + oo.z - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.x + rd.x * h) < size.x) t = h;\n    }\n  }\n  \n  {\n    float a = dd.z + dd.x;\n    float b = od.z + od.x;\n    float c = oo.z + oo.x - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.y + rd.y * h) < size.y) t = h;\n    }\n  }\n  \n  {\n    float a = dd.x + dd.y;\n    float b = od.x + od.y;\n    float c = oo.x + oo.y - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.z + rd.z * h) < size.z) t = h;\n    }\n  }\n\n  if (t > 1e19) t = -1.0;\n  return t;\n}\n\nvec3 roundedboxNormal(in vec3 pos, in vec3 size, in float rad) {\n  return sign(pos) * normalize(max(abs(pos) - size, 0.0));\n}\nfloat fresnelReflectivity(vec3 rd, vec3 n, vec3 rfr, float n1, float n2) {\n  if (dot(rfr, rfr) == 0.) return 1.;\n\n  float cos1 = -dot(rd, n);\n  float cos2 = -dot(rfr, n);\n\n  float n1c1 = n1 * cos1;\n  float n2c1 = n2 * cos1;\n  float n1c2 = n1 * cos2;\n  float n2c2 = n2 * cos2;\n\n  float rs = (n1c1 - n2c2) / (n1c1 + n2c2);\n  float rp = (n1c2 - n2c1) / (n1c2 + n2c1);\n\n  return 0.5 * (rs * rs + rp * rp);\n}\n\nfloat fresnelReflectivity(vec3 rd, vec3 n, float n1, float n2) {\n  vec3 rfr = refract(rd, n, n1 / n2);\n  return fresnelReflectivity(rd, n, rfr, n1, n2);\n}\n\nfloat fresnelSchlick(float F0, vec3 rd, vec3 n) {\n  return F0 + (1.0 - F0) * pow(1.0 - abs(dot(n, rd)), 5.0);\n}\n\nfloat fresnelSchlick(float F0, float cosTheta) {\n  return F0 + (1.0 - F0) * pow(1.0 - abs(cosTheta), 5.0);\n}\n\nfloat fresnelSchlick(vec3 rd, vec3 n) {\n  return 0.04 + 0.96 * pow(1.0 - abs(dot(n, rd)), 5.0);\n}\n\nfloat fresnelSchlick(float cosTheta) {\n  return 0.04 + 0.96 * pow(1.0 - abs(cosTheta), 5.0);\n}\n\n#define rad 0.05\n#define size vec3(0.5 - rad)\n#define onesubglow 1. - glowWidth\n\nvec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )\n{\n    return a + b*cos( 6.28318*(c*t+d) );\n}\n\nvec3 getEnv(vec3 ro, vec3 rd) {\n  vec3 ori = (lightMatrix * modelMatrix * vec4(ro, 1.)).xyz;\n  vec3 dir = (lightMatrix * modelMatrix * vec4(rd, 0.)).xyz;\n  vec3 color = vec3(0.);\n  {\n    float d = -ori.z / dir.z;\n    if (d > 0.) {\n      vec2 pos = ori.xy + dir.xy * d;\n      pos = 1. - pos * pos;\n      float l = step(0., pos.x) * step(0., pos.y);\n      l *= 1. - 0.8 * pos.x * pos.y;\n      \n      \n      color += l * envIntensity;\n    }\n  }\n  return color;\n}\n\nvec3 finite(vec3 ro, vec3 rd, vec3 ird) {\n  float sz = rd.z < 0. ? -1. : 1.;\n  float irdz = ird.z * sz;\n  float d = (glowWidth - 0.5 - ro.z * sz) * irdz;\n  float i = 0., v = 1e6, di = 1e6, p = 0.;\n  if (d < 0.) {\n    vec2 xy = ro.xy + rd.xy * d + 0.5;\n    for (; i < 16.; i++) {\n      vec2 uv = fract(xy);\n      if (uv.x <= glowWidth || uv.x >= onesubglow || uv.y <= glowWidth || uv.y >= onesubglow) {\n        vec2 xyi = abs(floor(xy));\n        v = max(xyi.x, xyi.y) + i;\n        di = i * irdz - d;\n        vec2 frame = abs(uv - 0.5) - 0.5 + glowWidth;\n        float sdf = length(max(frame, 0.)) + min(max(frame.x, frame.y), 0.);\n        sdf = sdf / glowWidth;\n        \n        sdf *= sdf;\n        vec2 f = 1. - 2. * abs(uv - 0.5);\n        p = 3. - 2. * max(f.x, f.y);\n        p = pow(p, 4.);\n        p *= sdf * sdf;\n        p = max(p, 0.);\n        p = mix(1., p, complexity);\n        break;\n      }\n      xy -= rd.xy * irdz;\n    }\n  }\n  return vec3(v, di, p);\n}\n\nvec3 trace(vec3 cam, vec3 rd, float dist, float eta) {\n  float ieta = 1. / eta;\n  vec3 pos = cam + rd * dist;\n  vec3 nor = roundedboxNormal(pos, size, rad);\n  float d = dot(rd, nor);\n\n  vec3 color = getEnv(pos, reflect(rd, nor)) * fresnelSchlick(rd, nor);\n  \n  float k = d * d + eta * eta - 1.;\n  if (k < 0.) {\n    return color;\n  }\n\n  vec3 ref = normalize(nor * (sqrt(k) + d) - rd);\n  float power = 1. - fresnelReflectivity(ref, -nor, eta, 1.);\n\n  vec3 pc = pos + 0.5;\n  if (\n    (pc.x <= glowWidth || pc.x >= onesubglow || pc.y <= glowWidth || pc.y >= onesubglow) &&\n    (pc.y <= glowWidth || pc.y >= onesubglow || pc.z <= glowWidth || pc.z >= onesubglow) &&\n    (pc.x <= glowWidth || pc.x >= onesubglow || pc.z <= glowWidth || pc.z >= onesubglow)\n  ) {\n    color += vec3(1.) * lightColor;\n  } else {\n    vec3 iref = 1. / ref;\n\n    vec3 fz = finite(pos, ref, iref);\n    vec3 fy = finite(pos.xzy, ref.xzy, iref.xzy);\n    vec3 fx = finite(pos.zyx, ref.zyx, iref.zyx);\n\n    vec3 f = fx.y < fz.y ? fx : fz;\n    f = f.y < fy.y ? f : fy;\n\n    color += vec3(pow(glow, f.x)) * f.z * power * lightColor;\n  }\n\n  \n\n  \n  \n  \n  \n  \n\n  \n  \n  \n  \n  \n  \n  \n  \n\n  \n  \n  \n\n  return clamp(color, 0., 5.);\n}\n\nvoid main() {\n  vec3 rd = normalize(pos - cam);\n\n  float d = roundedboxIntersect(cam, rd, size, rad);\n  if (d < 0.) {\n    discard;\n    gl_FragColor = vec4(getEnv(cam, rd), 1.); \n    return;\n  }\n\n  if (whiten == 1.) {\n    gl_FragColor = vec4(1.);\n    return;\n  }\n  \n  vec3 color = trace(cam, rd, d, eta);\n  \n\n  \n    \n    \n    \n    \n    \n    color +=\n      trace(cam + (camX + camY) * aaStep, rd, d, eta) +\n      trace(cam + (camX - camY) * aaStep, rd, d, eta) +\n      trace(cam - (camX + camY) * aaStep, rd, d, eta) +\n      trace(cam - (camX - camY) * aaStep, rd, d, eta);\n    color /= 5.;\n  \n\n  \n  \n  \n  \n  \n  \n  \n  \n  \n\n  color = mix(color, vec3(1.), whiten);\n\n  color = max(vec3(0.), color - 0.5 / 255. + rand(pos.xy - pos.z + seconds) / 255.);\n\n  gl_FragColor = vec4(color, 1.);\n}",
          });
        }
      }
      var tx = new WeakMap(),
        tg = new WeakMap(),
        tw = new WeakMap(),
        tb = new WeakMap(),
        ty = new WeakMap(),
        tM = new WeakMap(),
        tz = new WeakMap(),
        tS = new WeakMap();
      class tP extends T.eaF {
        constructor(e) {
          super(new T.iNn(1.05, 1.05, 1.05), null),
            (0, y._)(this, tx, { writable: !0, value: void 0 }),
            (0, y._)(this, tg, { writable: !0, value: void 0 }),
            (0, y._)(this, tw, { writable: !0, value: void 0 }),
            (0, y._)(this, tb, { writable: !0, value: void 0 }),
            (0, y._)(this, ty, { writable: !0, value: void 0 }),
            (0, y._)(this, tM, { writable: !0, value: void 0 }),
            (0, y._)(this, tz, { writable: !0, value: void 0 }),
            (0, y._)(this, tS, { writable: !0, value: void 0 }),
            (0, M._)(this, tg, new T.Pq0()),
            (0, M._)(this, tw, new T.Pq0()),
            (0, M._)(this, tb, new T.Pq0()),
            (0, M._)(this, ty, new T.IUQ()),
            (0, M._)(this, tM, new T.IUQ()),
            (0, M._)(this, tz, new T.PTz()),
            (0, M._)(this, tS, () => {
              (0, b._)(this, tz).copy(this.quaternion).conjugate(),
                (0, b._)(this, ty)
                  .set(1, 0, 0, 0)
                  .applyMatrix4((0, b._)(this, tx).camera.matrix),
                (0, b._)(this, tw)
                  .set(
                    (0, b._)(this, ty).x,
                    (0, b._)(this, ty).y,
                    (0, b._)(this, ty).z
                  )
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tz)),
                (0, b._)(this, tM)
                  .set(0, 1, 0, 0)
                  .applyMatrix4((0, b._)(this, tx).camera.matrix),
                (0, b._)(this, tb)
                  .set(
                    (0, b._)(this, tM).x,
                    (0, b._)(this, tM).y,
                    (0, b._)(this, tM).z
                  )
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tz)),
                (0, b._)(this, tg)
                  .copy((0, b._)(this, tx).camera.position)
                  .sub(this.position)
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tz));
            }),
            (0, M._)(this, tx, e),
            (this.material = new tf(
              (0, b._)(this, tx).camera,
              (0, b._)(this, tg),
              (0, b._)(this, tw),
              (0, b._)(this, tb)
            )),
            (0, b._)(this, tx).scene.add(this),
            R.on(ee.event, (0, b._)(this, tS));
        }
      }
      class tT extends T.BKk {
        constructor(e, t, n, i, s, r) {
          super({
            uniforms: {
              aa: B("cubes.aa"),
              cam: { value: t },
              camX: { value: n },
              camY: { value: i },
              pixelSize: B(er.iv2Provider),
              projectionMatrixInverse: { value: e.projectionMatrixInverse },
              cameraMatrix: { value: e.matrixWorld },
              logoMap: { value: n7.assetsManager.get(s) },
              logoMat: { value: r },
              logo: { value: 1 },
              whiten: { value: 0 },
              eta: B("glass.eta", 1.5),
              iridescenceMap: F("iridescenceMap"),
              iridescenseInfluence: B("iridescenseInfluence"),
              envIntensity: B("logo.envIntensity", 1),
              lightMatrix: B(eO.matrixProvider),
              seconds: B(ee.secondsProvider),
            },
            vertexShader: eJ,
            fragmentShader:
              "varying vec3 pos;\nvarying float aaStep;\n\nuniform mat4 modelMatrix;\nuniform float eta;\nuniform vec3 cam;\nuniform vec3 camX;\nuniform vec3 camY;\nuniform float envIntensity;\nuniform float iridescenseInfluence;\nuniform mat4 lightMatrix;\nuniform float seconds;\nuniform sampler2D iridescenceMap;\nuniform mat3 logoMat;\nuniform sampler2D logoMap;\nuniform float logo;\nuniform float whiten;\n\nfloat rand(vec2 c) {\n  return fract(sin(dot(fract(c), vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat roundedboxIntersect(in vec3 ro, in vec3 rd, in vec3 size, in float rad) {\n  \n  vec3 m = 1.0 / rd;\n  vec3 n = m * ro;\n  vec3 k = abs(m) * (size + rad);\n  vec3 t1 = -n - k;\n  vec3 t2 = -n + k;\n  float tN = max(max(t1.x, t1.y), t1.z);\n  float tF = min(min(t2.x, t2.y), t2.z);\n  if (tN > tF || tF < 0.0) return -1.0;\n  float t = tN;\n\n  \n  vec3 pos = ro + t * rd;\n  vec3 s = sign(pos);\n  ro  *= s;\n  rd  *= s;\n  pos *= s;\n      \n  \n  pos -= size;\n  pos = max(pos.xyz, pos.yzx);\n  if (min(min(pos.x, pos.y), pos.z) < 0.0) return t;\n\n  \n  vec3 oc = ro - size;\n  vec3 dd = rd * rd;\n  vec3 oo = oc * oc;\n  vec3 od = oc * rd;\n  float ra2 = rad * rad;\n\n  t = 1e20;\n\n  \n  {\n    float b = od.x + od.y + od.z;\n    float c = oo.x + oo.y + oo.z - ra2;\n    float h = b * b - c;\n    if(h > 0.0) t = -b - sqrt(h);\n  }\n  \n  {\n    float a = dd.y + dd.z;\n    float b = od.y + od.z;\n    float c = oo.y + oo.z - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.x + rd.x * h) < size.x) t = h;\n    }\n  }\n  \n  {\n    float a = dd.z + dd.x;\n    float b = od.z + od.x;\n    float c = oo.z + oo.x - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.y + rd.y * h) < size.y) t = h;\n    }\n  }\n  \n  {\n    float a = dd.x + dd.y;\n    float b = od.x + od.y;\n    float c = oo.x + oo.y - ra2;\n    float h = b * b - a * c;\n    if (h > 0.0) {\n      h = (-b - sqrt(h)) / a;\n      if (h > 0.0 && h < t && abs(ro.z + rd.z * h) < size.z) t = h;\n    }\n  }\n\n  if (t > 1e19) t = -1.0;\n  return t;\n}\n\nvec3 roundedboxNormal(in vec3 pos, in vec3 size, in float rad) {\n  return sign(pos) * normalize(max(abs(pos) - size, 0.0));\n}\nfloat fresnelReflectivity(vec3 rd, vec3 n, vec3 rfr, float n1, float n2) {\n  if (dot(rfr, rfr) == 0.) return 1.;\n\n  float cos1 = -dot(rd, n);\n  float cos2 = -dot(rfr, n);\n\n  float n1c1 = n1 * cos1;\n  float n2c1 = n2 * cos1;\n  float n1c2 = n1 * cos2;\n  float n2c2 = n2 * cos2;\n\n  float rs = (n1c1 - n2c2) / (n1c1 + n2c2);\n  float rp = (n1c2 - n2c1) / (n1c2 + n2c1);\n\n  return 0.5 * (rs * rs + rp * rp);\n}\n\nfloat fresnelReflectivity(vec3 rd, vec3 n, float n1, float n2) {\n  vec3 rfr = refract(rd, n, n1 / n2);\n  return fresnelReflectivity(rd, n, rfr, n1, n2);\n}\n\nfloat fresnelSchlick(float F0, vec3 rd, vec3 n) {\n  return F0 + (1.0 - F0) * pow(1.0 - abs(dot(n, rd)), 5.0);\n}\n\nfloat fresnelSchlick(float F0, float cosTheta) {\n  return F0 + (1.0 - F0) * pow(1.0 - abs(cosTheta), 5.0);\n}\n\nfloat fresnelSchlick(vec3 rd, vec3 n) {\n  return 0.04 + 0.96 * pow(1.0 - abs(dot(n, rd)), 5.0);\n}\n\nfloat fresnelSchlick(float cosTheta) {\n  return 0.04 + 0.96 * pow(1.0 - abs(cosTheta), 5.0);\n}\n\n#define rad 0.05\n#define size vec3(0.5 - rad)\n\nvec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )\n{\n  return a + b*cos( 6.28318*(c*t+d) );\n}\n\nvec3 getEnv(vec3 ro, vec3 rd, vec3 nor) {\n  float thickness = dot(rd, nor);\n  thickness = (1. - abs(thickness)) * 0.33;\n  vec3 iridescence = texture2D(iridescenceMap, vec2(thickness, 0.5)).rgb * iridescenseInfluence + 1. - iridescenseInfluence;\n  vec3 ori = (lightMatrix * modelMatrix * vec4(ro, 1.)).xyz;\n  vec3 dir = (lightMatrix * modelMatrix * vec4(rd, 0.)).xyz;\n  vec3 color = vec3(0.);\n  {\n    float d = -ori.z / dir.z;\n    if (d > 0.) {\n      vec2 pos = ori.xy + dir.xy * d;\n      pos = 1. - pos * pos;\n      float l = step(0., pos.x) * step(0., pos.y);\n      l *= 1. - 0.8 * pos.x * pos.y;\n      \n      color += l * envIntensity * iridescence;\n    }\n  }\n  return color;\n}\n\nvec3 trace(vec3 cam, vec3 rd, float dd, float eta) {\n  float ieta = 1. / eta;\n  vec3 pos = cam + rd * dd;\n  vec3 nor = roundedboxNormal(pos, size, rad);\n  float d = dot(rd, nor);\n\n  vec3 color = getEnv(pos, reflect(rd, nor), nor) * fresnelSchlick(rd, nor);\n  \n  float k = d * d + eta * eta - 1.;\n  if (k < 0.) {\n    return color;\n  }\n\n  vec3 ref = normalize(nor * (sqrt(k) + d) - rd);\n  float power = 1. - fresnelReflectivity(ref, -nor, eta, 1.);\n\n  for (int i = 0; i < 4; i++) {\n\n    float logoD = dot(pos, logoMat[2]) / dot(ref, logoMat[2]);\n    \n    if (logoD >= 0.) {\n      vec3 lpos = pos - ref * logoD;\n      \n      vec2 uv = vec2(\n        dot(logoMat[0], lpos) + 0.5,\n        dot(logoMat[1], lpos) + 0.5\n      );\n      if (uv.x > 0. && uv.x < 1. && uv.y > 0. && uv.y < 1.) {\n        color += logo * power * texture2D(logoMap, uv).rgb;\n        \n        \n      }\n    }\n\n    pos = pos - ref * 4.;\n    float d = roundedboxIntersect(pos, ref, size, rad);\n    if (d < 0.)\n      return color; \n    pos += ref * d;\n\n    nor = roundedboxNormal(pos, size, rad);\n  \n    float drn = dot(ref, nor),\n          hyp = drn * drn + ieta * ieta;\n    if (hyp >= 1.) {\n      vec3 rr = ((sqrt(hyp - 1.) + drn) * nor - ref) * eta;\n      color += getEnv(pos, rr, nor) * (1. - fresnelSchlick(rr, nor)) * power;\n    }\n\n    ref = reflect(ref, nor);\n    power *= fresnelReflectivity(ref, -nor, eta, 1.);\n  }\n\n  return color;\n}\n\nvoid main() {\n  vec3 rd = normalize(pos - cam);\n\n  float d = roundedboxIntersect(cam, rd, size, rad);\n  if (d < 0.) {\n    discard;\n    gl_FragColor = vec4(getEnv(cam, rd, vec3(0.)), 1.); \n    return;\n  }\n  \n  vec3 color = trace(cam, rd, d, eta);\n\n  color +=\n    trace(cam + (camX + camY) * aaStep, rd, d, eta) +\n    trace(cam + (camX - camY) * aaStep, rd, d, eta) +\n    trace(cam - (camX + camY) * aaStep, rd, d, eta) +\n    trace(cam - (camX - camY) * aaStep, rd, d, eta);\n  color /= 5.;\n\n  color = mix(color, vec3(1.), whiten);\n\n  color = max(vec3(0.), color - 0.5 / 255. + rand(pos.xy - pos.z + seconds) / 255.);\n\n  gl_FragColor = vec4(color, 1.);\n}",
          });
        }
      }
      var tD = new WeakMap(),
        tA = new WeakMap(),
        t_ = new WeakMap(),
        tC = new WeakMap(),
        tk = new WeakMap(),
        tW = new WeakMap(),
        tL = new WeakMap(),
        tR = new WeakMap(),
        tN = new WeakMap(),
        tE = new WeakMap(),
        tj = new WeakMap(),
        tB = new WeakMap();
      class tO extends T.eaF {
        constructor(e, t) {
          super(new T.iNn(1, 1, 1), null),
            (0, y._)(this, tD, { writable: !0, value: void 0 }),
            (0, y._)(this, tA, { writable: !0, value: void 0 }),
            (0, y._)(this, t_, { writable: !0, value: void 0 }),
            (0, y._)(this, tC, { writable: !0, value: void 0 }),
            (0, y._)(this, tk, { writable: !0, value: void 0 }),
            (0, y._)(this, tW, { writable: !0, value: void 0 }),
            (0, y._)(this, tL, { writable: !0, value: void 0 }),
            (0, y._)(this, tR, { writable: !0, value: void 0 }),
            (0, y._)(this, tN, { writable: !0, value: void 0 }),
            (0, y._)(this, tE, { writable: !0, value: void 0 }),
            (0, y._)(this, tj, { writable: !0, value: void 0 }),
            (0, y._)(this, tB, { writable: !0, value: void 0 }),
            (0, M._)(this, tA, new T.Pq0()),
            (0, M._)(this, t_, new T.Pq0()),
            (0, M._)(this, tC, new T.Pq0()),
            (0, M._)(this, tk, new T.IUQ()),
            (0, M._)(this, tW, new T.IUQ()),
            (0, M._)(this, tL, new T.PTz()),
            (0, M._)(this, tR, new T.dwI()),
            (0, M._)(this, tN, new T.Pq0()),
            (0, M._)(this, tE, new T.Pq0()),
            (0, M._)(this, tj, new T.Pq0()),
            (0, M._)(this, tB, () => {
              (0, b._)(this, tL).copy(this.quaternion).conjugate(),
                (0, b._)(this, tk)
                  .set(1, 0, 0, 0)
                  .applyMatrix4((0, b._)(this, tD).camera.matrix),
                (0, b._)(this, t_)
                  .set(
                    (0, b._)(this, tk).x,
                    (0, b._)(this, tk).y,
                    (0, b._)(this, tk).z
                  )
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tL)),
                (0, b._)(this, tW)
                  .set(0, 1, 0, 0)
                  .applyMatrix4((0, b._)(this, tD).camera.matrix),
                (0, b._)(this, tC)
                  .set(
                    (0, b._)(this, tW).x,
                    (0, b._)(this, tW).y,
                    (0, b._)(this, tW).z
                  )
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tL)),
                (0, b._)(this, tA)
                  .copy((0, b._)(this, tD).camera.position)
                  .sub(this.position)
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tL)),
                (0, b._)(this, tN)
                  .set(1, 0, 0)
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tL)),
                (0, b._)(this, tE)
                  .set(0, 1, 0)
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tL)),
                (0, b._)(this, tj)
                  .set(0, 0, 1)
                  .divide(this.scale)
                  .applyQuaternion((0, b._)(this, tL)),
                (0, b._)(this, tR).set(
                  (0, b._)(this, tN).x,
                  (0, b._)(this, tE).x,
                  (0, b._)(this, tj).x,
                  (0, b._)(this, tN).y,
                  (0, b._)(this, tE).y,
                  (0, b._)(this, tj).y,
                  (0, b._)(this, tN).z,
                  (0, b._)(this, tE).z,
                  (0, b._)(this, tj).z
                );
            }),
            (0, M._)(this, tD, e),
            (this.material = new tT(
              (0, b._)(this, tD).camera,
              (0, b._)(this, tA),
              (0, b._)(this, t_),
              (0, b._)(this, tC),
              t,
              (0, b._)(this, tR)
            )),
            (0, b._)(this, tD).scene.add(this),
            R.on(ee.event, (0, b._)(this, tB));
        }
      }
      let tF =
          ((l = new WeakMap()),
          (c = new WeakMap()),
          (h = new WeakMap()),
          (v = new WeakMap()),
          (d = new WeakMap()),
          (u = new WeakMap()),
          (p = new WeakMap()),
          (m = new WeakMap()),
          (f = new WeakMap()),
          class {
            constructor(e, t) {
              (0, y._)(this, l, { writable: !0, value: void 0 }),
                (0, y._)(this, c, { writable: !0, value: void 0 }),
                (0, y._)(this, h, { writable: !0, value: void 0 }),
                (0, y._)(this, v, { writable: !0, value: void 0 }),
                (0, y._)(this, d, { writable: !0, value: void 0 }),
                (0, y._)(this, u, { writable: !0, value: void 0 }),
                (0, y._)(this, p, { writable: !0, value: void 0 }),
                (0, y._)(this, m, { writable: !0, value: void 0 }),
                (0, y._)(this, f, { writable: !0, value: void 0 }),
                (0, M._)(this, l, new T.Pq0()),
                (0, M._)(this, c, new T.I9Y()),
                (0, M._)(this, h, new T.I9Y()),
                (0, M._)(this, v, new T.I9Y()),
                (0, M._)(this, d, new T.Pq0()),
                (0, M._)(this, u, new T.I9Y()),
                (0, M._)(this, p, 0),
                (0, M._)(this, m, 0),
                (0, M._)(this, f, new T.Pq0()),
                (this.go = (e, t, n) => {
                  let i = 0;
                  (0, b._)(this, h).set(0, 0),
                    (0, b._)(this, v).set(0, 0),
                    (0, b._)(this, d).set(0, 0, 0),
                    (0, b._)(this, u).set(0, 0),
                    (0, M._)(this, p, 0),
                    (0, M._)(this, m, 0),
                    (0, b._)(this, f).set(0, 0, 0),
                    t.forEach((e) => {
                      let t = e.index,
                        n = t < 2 ? e.visibility : e.placeVisibility,
                        s = 0;
                      if (
                        (0 == t && (n *= n),
                        "sectionlocation" == e.sectionId && (n *= n),
                        e.place)
                      ) {
                        if (Array.isArray(e.place)) {
                          let t = e.place,
                            i = te(
                              [
                                { x: t[3].ndcCenter.y + t[3].size.y, v: 3 },
                                { x: t[2].ndcCenter.y - t[2].size.y, v: 2 },
                                { x: t[2].ndcCenter.y + t[2].size.y, v: 2 },
                                { x: t[1].ndcCenter.y - t[1].size.y, v: 1 },
                                { x: t[1].ndcCenter.y + t[1].size.y, v: 1 },
                                { x: t[0].ndcCenter.y - t[0].size.y, v: 0 },
                              ],
                              0
                            ),
                            r = Math.floor(i),
                            a = Math.ceil(i),
                            o = e6(i - r, 0, 1);
                          (0, b._)(this, c).lerpVectors(
                            t[r].ndcCenter,
                            t[a].ndcCenter,
                            o
                          ),
                            (0, b._)(this, v).addScaledVector(
                              (0, b._)(this, c),
                              n
                            ),
                            (0, b._)(this, c).lerpVectors(
                              t[r].size,
                              t[a].size,
                              o
                            ),
                            (0, b._)(this, h).addScaledVector(
                              (0, b._)(this, c),
                              n
                            ),
                            (s = n7.viewport.x >= 768 ? 2 : i);
                        } else
                          (0, b._)(this, h).addScaledVector(e.place.size, n),
                            (0, b._)(this, v).addScaledVector(
                              e.place.ndcCenter,
                              n
                            );
                      } else (0, b._)(this, h).addScalar(n);
                      (0, b._)(this, d).addScaledVector(
                        this.positions[t]((0, b._)(this, l), e.progress, s),
                        n
                      ),
                        (0, b._)(this, u).addScaledVector(
                          this.objectSizes[t]((0, b._)(this, c)),
                          n
                        ),
                        (0, M._)(
                          this,
                          p,
                          (0, b._)(this, p) +
                            this.objectScales[t](e.progress) * n
                        ),
                        (0, M._)(
                          this,
                          m,
                          (0, b._)(this, m) + this.shiftMuls[t] * n
                        ),
                        (0, b._)(this, f).addScaledVector(
                          this.ups[t]((0, b._)(this, l), e.progress),
                          n
                        ),
                        (i += n);
                    }),
                    i > 0 &&
                      ((0, b._)(this, h).divideScalar(i),
                      (0, b._)(this, v).divideScalar(i),
                      (0, b._)(this, d).divideScalar(i),
                      (0, b._)(this, u).divideScalar(i),
                      (0, M._)(this, p, (0, b._)(this, p) / i),
                      (0, M._)(this, m, (0, b._)(this, m) / i),
                      this.cameraController.layoutSize.copy((0, b._)(this, h)),
                      this.cameraController.layoutCenterNDC.copy(
                        (0, b._)(this, v)
                      ),
                      this.cameraController.position.copy((0, b._)(this, d)),
                      this.cameraController.objectSize.copy((0, b._)(this, u)),
                      (this.cameraController.objectScale = (0, b._)(this, p)),
                      (this.cameraController.shiftMultiplier = (0, b._)(
                        this,
                        m
                      )),
                      this.camera.up.copy((0, b._)(this, f)).normalize());
                }),
                (this.on = () => {}),
                (this.off = () => {}),
                (this.camera = e),
                (this.cameraController = t),
                (this.positions = [
                  function (e, t) {
                    arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    let n = (-1.25 - t) * Math.PI;
                    return e.set(Math.cos(n), 2 * t - 0.5, Math.sin(n)), e;
                  },
                  function (e, t) {
                    let n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      i = 0.5 * (n + 2) * Math.PI;
                    return (
                      e.set(
                        Math.cos(i),
                        Math.sin(n * Math.PI * 0.5),
                        Math.sin(i)
                      ),
                      e
                    );
                  },
                  (e) => e.set(0, 0, 1),
                  (e) => e.set(1, 1, 1),
                  (e) => e.set(0, 0, 1.075),
                ]),
                (this.ups = [
                  (e) => e.set(0, 1, 0),
                  (e) => e.set(0, 1, 0),
                  (e) => e.set(0, 1, 0),
                  (e) => e.set(-0.3, 1, 0.3),
                  (e) => e.set(0, 1, 0),
                ]),
                (this.objectScales = [
                  (e) => 0.5,
                  (e) => 0.5,
                  (e) => 0.8,
                  (e) => 1,
                  (e) => 1,
                ]),
                (this.objectSizes = [
                  (e) => e.set(1, 1),
                  (e) => e.set(1, 1),
                  (e) => (n7.viewport.x >= 768 ? e.set(5, 1) : e.set(1, 5)),
                  (e) => e.set(2, 2),
                  (e) => e.set(1, 1),
                ]),
                (this.shiftMuls = [1.5, 1.5, 1, 1, 0.1]);
            }
          }),
        tV = class {
          constructor() {
            (this.targetPosition = new T.Pq0()),
              (this.v3 = new T.Pq0()),
              (this.cv3 = new k.eB());
          }
        };
      var tq = new WeakMap(),
        tU = new WeakMap(),
        tI = new WeakMap(),
        tH = new WeakMap(),
        tX = new WeakMap(),
        tY = new WeakMap(),
        tG = new WeakMap(),
        tK = new WeakMap(),
        tZ = new WeakMap(),
        tQ = new WeakMap(),
        tJ = new WeakMap(),
        t$ = new WeakMap();
      class t0 {
        constructor(e, t, n) {
          (0, y._)(this, tq, { writable: !0, value: void 0 }),
            (0, y._)(this, tU, { writable: !0, value: void 0 }),
            (0, y._)(this, tI, { writable: !0, value: void 0 }),
            (0, y._)(this, tH, { writable: !0, value: void 0 }),
            (0, y._)(this, tX, { writable: !0, value: void 0 }),
            (0, y._)(this, tY, { writable: !0, value: void 0 }),
            (0, y._)(this, tG, { writable: !0, value: void 0 }),
            (0, y._)(this, tK, { writable: !0, value: void 0 }),
            (0, y._)(this, tZ, { writable: !0, value: void 0 }),
            (0, y._)(this, tQ, { writable: !0, value: void 0 }),
            (0, y._)(this, tJ, { writable: !0, value: void 0 }),
            (0, y._)(this, t$, { writable: !0, value: void 0 }),
            (0, M._)(this, tU, new T.RlV()),
            (0, M._)(this, tI, new T.PTz()),
            (0, M._)(this, tH, new T.PTz()),
            (0, M._)(this, tX, new T.Pq0()),
            (0, M._)(this, tY, 0),
            (0, M._)(this, tG, !1),
            (0, M._)(this, tK, [new T.Pq0(), new T.Pq0(), new T.Pq0()]),
            (0, M._)(this, tZ, [
              () => ({ x: 0, y: 0, z: 0 }),
              () =>
                n7.viewport.x >= 768
                  ? { x: -2, y: 0, z: 0 }
                  : { x: 0, y: -2, z: 0 },
              () =>
                n7.viewport.x >= 768
                  ? { x: 2, y: 0, z: 0 }
                  : { x: 0, y: 2, z: 0 },
            ]),
            (0, M._)(this, tQ, [
              new T.Pq0(),
              new T.Pq0(-2, 0, 0),
              new T.Pq0(0, 0, -2),
            ]),
            (this.go = (e, t, n) => {
              let i =
                e6(n.sectiontriple.placeProgress, 0.2, 0.3) *
                e6(n.sectiontriple.placeProgress, 0.8, 0.7);
              if (
                ((this.cubes[0].material.uniforms.logo.value = i),
                (this.cubes[1].material.uniforms.logo.value = i),
                (this.cubes[2].material.uniforms.logo.value = i),
                e <= 1)
              ) {
                (0, M._)(this, tY, 0);
                for (let e = 1; e < this.cubes.length; e++)
                  this.cubes[e].visible = !1;
                return (
                  (this.axisXLine.visible = !1),
                  (this.axisZLine.visible = !1),
                  void (this.infinite.visible = !1)
                );
              }
              let s = n.sectiontriple.placeProgress,
                r = n.sectiontriple.placeVisibility,
                a = n.sectionlocation.placeProgress;
              n.sectionlocation.placeVisibility;
              let o = s < 0.5 ? r : 1,
                l = a > 0 ? 1 - r : 0,
                c = tt(l, 0.9, 1),
                h = e6(l, 0, 1);
              this.elements.forEach((e, t) => {
                e.targetPosition
                  .lerpVectors(
                    (0, b._)(this, tK)[t],
                    (0, b._)(this, tZ)[t](),
                    o
                  )
                  .lerp((0, b._)(this, tQ)[t], h);
              });
              let v = (1 + h * (2 / 3 - 1)) * e6(s, 0, 0.1);
              this.elements[1].mesh.scale.setScalar(v),
                this.elements[2].mesh.scale.setScalar(v),
                this.axisXLine.scale.setScalar(c),
                (this.axisXLine.visible = e > 2 && c > 0),
                this.axisZLine.scale.setScalar(c),
                (this.axisZLine.visible = e > 2 && c > 0),
                (0, M._)(this, tY, e6(r, 0.85, 1)),
                (this.cubes[0].visible = e < 3.5),
                (this.cubes[0].material.uniforms.whiten.value = tt(
                  e,
                  3.45,
                  3.5
                )),
                (this.cubes[1].visible = e < 3.75),
                (this.cubes[2].visible = e < 3.75),
                (this.infinite.visible = e >= 3.5),
                (this.infinite.material.uniforms.eta.value =
                  0.1 + 1.9 * tt(e, 3.5, 3.95)),
                (this.infinite.material.uniforms.glow.value =
                  0.4 + 0.4 * tt(e, 3.7, 3.95)),
                (this.infinite.material.uniforms.whiten.value =
                  tt(e, 3.55, 3.5) + tt(e, 3.9, 4));
            }),
            (0, M._)(this, tJ, (e) => {
              let { x: t, y: n } = e;
              (0, b._)(this, tU).origin.copy(n7.context.camera.position),
                (0, b._)(this, tU)
                  .direction.set(t, n, 0)
                  .unproject(n7.context.camera)
                  .sub((0, b._)(this, tU).origin)
                  .normalize();
            }),
            (0, M._)(this, t$, (e) => {
              let { ds: t } = e;
              t < 0.001 ||
                ((0, b._)(this, tY) > 0
                  ? ((0, b._)(this, tG) &&
                      this.elements.forEach((e) => {
                        e.body.position.set(
                          e.targetPosition.x,
                          e.targetPosition.y,
                          e.targetPosition.z
                        ),
                          e.body.velocity.setZero(),
                          e.body.angularVelocity.setZero();
                      }),
                    (0, b._)(this, tq).step(1 / 60, t, 3),
                    this.elements.forEach((e) => {
                      (isNaN(e.body.position.x) ||
                        isNaN(e.body.position.y) ||
                        isNaN(e.body.position.z)) &&
                        (console.warn("NaN position after step"),
                        (0, b._)(this, tq).removeBody(e.body),
                        (e.body = new k.nB({
                          mass: 1,
                          shape: new k.az(new k.eB(0.5, 0.5, 0.5)),
                          position: new k.eB(
                            e.targetPosition.x,
                            e.targetPosition.y,
                            e.targetPosition.z
                          ),
                          linearDamping: 0.99,
                          angularDamping: 0.2,
                        })),
                        (0, b._)(this, tq).addBody(e.body));
                    }),
                    (0, M._)(this, tG, !1))
                  : (0, b._)(this, tG) ||
                    (this.elements.forEach((e) => {
                      e.body.position.set(
                        e.targetPosition.x,
                        e.targetPosition.y,
                        e.targetPosition.z
                      ),
                        e.body.velocity.setZero(),
                        e.body.quaternion.set(0, 0, 0, 1),
                        e.body.angularVelocity.setZero();
                    }),
                    (0, M._)(this, tG, !0)),
                this.elements.forEach((e) => {
                  let t = e.mesh.position;
                  t.lerpVectors(
                    e.targetPosition,
                    e.body.position,
                    (0, b._)(this, tY)
                  );
                  let n = e.mesh.quaternion;
                  if (
                    (0 == (0, b._)(this, tY)
                      ? n.slerp((0, b._)(this, tI), 0.05)
                      : ((0, b._)(this, tH).copy(e.body.quaternion),
                        n.slerp(
                          (0, b._)(this, tH),
                          (0, b._)(this, tY) * (0, b._)(this, tY)
                        )),
                    (0, b._)(this, tY) > 0)
                  ) {
                    (0, b._)(this, tX).subVectors(t, (0, b._)(this, tU).origin);
                    let n = (0, b._)(this, tX).dot(
                      (0, b._)(this, tU).direction
                    );
                    (0, b._)(this, tX)
                      .copy((0, b._)(this, tU).origin)
                      .addScaledVector((0, b._)(this, tU).direction, n);
                    let i = -1 * e6(t.distanceTo((0, b._)(this, tX)), 1, 0);
                    (0, b._)(this, tX).sub(t).normalize().multiplyScalar(i),
                      e.v3
                        .copy(t)
                        .sub(e.targetPosition)
                        .multiplyScalar(-1)
                        .add((0, b._)(this, tX))
                        .multiplyScalar((0, b._)(this, tY)),
                      e.v3.lengthSq() > 100 &&
                        e.v3.normalize().multiplyScalar(10),
                      e.cv3.set(e.v3.x, e.v3.y, e.v3.z),
                      e.body.applyImpulse(e.cv3);
                  }
                }));
            }),
            (this.on = () => {
              R.on(ee.event, (0, b._)(this, t$)),
                R.on(ep.ndcEvent, (0, b._)(this, tJ));
            }),
            (this.off = () => {
              R.off(ee.event, (0, b._)(this, t$)),
                R.off(ep.ndcEvent, (0, b._)(this, tJ));
            }),
            (this.cubes = e),
            (this.infinite = t),
            (this.infinite.visible = !1),
            (this.infinite.material.uniforms.eta = { value: 1 }),
            (this.infinite.material.uniforms.complexity = { value: 1 }),
            (0, M._)(this, tq, new k.HK()),
            (this.elements = e.map((e, t) => {
              let n = new tV();
              return (
                (n.mesh = e),
                n.targetPosition.copy((0, b._)(this, tK)[t]),
                (n.body = new k.nB({
                  mass: 1,
                  shape: new k.az(new k.eB(0.5, 0.5, 0.5)),
                  position: new k.eB(
                    n.targetPosition.x,
                    n.targetPosition.y,
                    n.targetPosition.z
                  ),
                  linearDamping: 0.99,
                  angularDamping: 0.2,
                })),
                (0, b._)(this, tq).addBody(n.body),
                n
              );
            })),
            (this.axisZLine = new T.eaF(
              new T.Ho_(0.01, 0.01, 2, 8, 1),
              new T.V9B()
            )),
            (this.axisZLine.position.x = -1),
            (this.axisZLine.rotation.z = 0.5 * Math.PI),
            this.axisZLine.scale.setScalar(0),
            (this.axisXLine = new T.eaF(
              new T.Ho_(0.01, 0.01, 2, 8, 1),
              new T.V9B()
            )),
            (this.axisXLine.position.z = -1),
            (this.axisXLine.rotation.x = 0.5 * Math.PI),
            this.axisXLine.scale.setScalar(0),
            n.scene.add(this.axisZLine, this.axisXLine);
        }
      }
      let t1 =
        ((x = new WeakMap()),
        (g = new WeakMap()),
        class {
          constructor() {
            (0, y._)(this, x, { writable: !0, value: void 0 }),
              (0, y._)(this, g, { writable: !0, value: void 0 }),
              (0, M._)(this, x, [
                { x: 0, v: 0.5 },
                { x: 1, v: 1 },
                { x: 2, v: 0 },
              ]),
              (0, M._)(this, g, [
                { x: 0, v: 3 },
                { x: 0.65, v: 0.05 },
                { x: 1.35, v: 0.05 },
                { x: 2, v: 3 },
              ]),
              (this.go = (e, t, n) => {
                O("post.halo.amp", 5);
                let i = te((0, b._)(this, x), e);
                O(eL.powerProvider, i),
                  n7.viewport.x >= 768 &&
                    O("envIntensity", te((0, b._)(this, g), e));
              }),
              (this.on = () => {}),
              (this.off = () => {});
          }
        });
      class t2 extends Q {
        set enabled(e) {
          this._enabled === e ||
            ((this._enabled = e),
            this.timelines.forEach((e) => (this._enabled ? e.on() : e.off())),
            this._enabled && R.dispatch(eO.setEvent, { x: 0, y: 0, z: 3 }),
            this._enabled || O(eL.powerProvider, 0));
        }
        get enabled() {
          return this._enabled;
        }
        constructor() {
          super(),
            (this.onProgress = (e, t, n) => {
              this.enabled &&
                this.timelines.forEach((i) => {
                  i.go(e, t, n);
                });
            }),
            (this.cameraController = new eQ({ camera: this.camera })),
            (this.particles = new eK(this)),
            (this.cubes = [
              new tO(this, "icon0"),
              new tO(this, "icon1"),
              new tO(this, "icon2"),
            ]),
            (this.infinite = new tP(this)),
            (this.timelines = [
              new tF(this.camera, this.cameraController),
              new t0(this.cubes, this.infinite, this),
              new t1(),
            ]),
            (this.enabled = !0),
            R.on(to.event, this.onProgress),
            n7.pipeline.renderer.compile(this.scene, this.camera);
        }
      }
      class t3 extends T.BKk {
        constructor(e) {
          super({
            uniforms: {
              uColor: { value: (null == e ? void 0 : e.uColor) ? 1 : 0 },
              fluidMap: B(eS.densityProvider),
              iridescenceMap: F("iridescenceMap"),
              uIntensity: B("aurora.intensity", 0),
              seconds: B(ee.secondsProvider),
            },
            vertexShader:
              "uniform float seconds;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nuniform float uFocus;\nuniform float uFocusDistance;\nuniform float uSize;\nuniform sampler2D texture1;\nattribute vec3 aRandom;\nattribute float aColor;\nattribute float aSize;\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\nattribute vec2 aUv;\nvarying float vDepth;\nvarying float vColor;\nfloat PI = 3.141592653589793238;\n\nvoid main() {\n  \n  vUv = uv;\n  float time = seconds;\n  vColor = aColor;\n	vec3 pos = position;\n\n  vec4 mvPosition = modelViewMatrix * vec4( pos, 1. );\n  vec3 worldPos = (modelMatrix * vec4(pos, 1.0)).xyz;\n  vDepth = mix(abs(uFocusDistance-length( worldPos-cameraPosition))*3.,0., uFocus);\n   \n\n  gl_Position = projectionMatrix * mvPosition;\n}",
            fragmentShader:
              "uniform float seconds;\nuniform float uIntensity;\nuniform float uColor;\nuniform sampler2D iridescenceMap;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying float vDepth;\nvarying float vColor;\n\nfloat PI = 3.141592653589793238;\n\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\n\nfloat circle(in vec2 _st, in float _radius, in float _blur) {\n    vec2 dist = _st-vec2(0.5);\n    return 1.-smoothstep(_radius-(_radius*_blur), _radius+(_radius*0.01), dot(dist, dist)*4.0);\n}\n\nvec3 rgb2xyz( vec3 c ) {\n    vec3 tmp;\n    tmp.x = ( c.r > 0.04045 ) ? pow( ( c.r + 0.055 ) / 1.055, 2.4 ) : c.r / 12.92;\n    tmp.y = ( c.g > 0.04045 ) ? pow( ( c.g + 0.055 ) / 1.055, 2.4 ) : c.g / 12.92,\n    tmp.z = ( c.b > 0.04045 ) ? pow( ( c.b + 0.055 ) / 1.055, 2.4 ) : c.b / 12.92;\n    return 100.0 * tmp *\n        mat3( 0.4124, 0.3576, 0.1805,\n              0.2126, 0.7152, 0.0722,\n              0.0193, 0.1192, 0.9505 );\n}\n\nvec3 xyz2lab( vec3 c ) {\n    vec3 n = c / vec3( 95.047, 100, 108.883 );\n    vec3 v;\n    v.x = ( n.x > 0.008856 ) ? pow( n.x, 1.0 / 3.0 ) : ( 7.787 * n.x ) + ( 16.0 / 116.0 );\n    v.y = ( n.y > 0.008856 ) ? pow( n.y, 1.0 / 3.0 ) : ( 7.787 * n.y ) + ( 16.0 / 116.0 );\n    v.z = ( n.z > 0.008856 ) ? pow( n.z, 1.0 / 3.0 ) : ( 7.787 * n.z ) + ( 16.0 / 116.0 );\n    return vec3(( 116.0 * v.y ) - 16.0, 500.0 * ( v.x - v.y ), 200.0 * ( v.y - v.z ));\n}\n\nvec3 rgb2lab(vec3 c) {\n    vec3 lab = xyz2lab( rgb2xyz( c ) );\n    return vec3( lab.x / 100.0, 0.5 + 0.5 * ( lab.y / 127.0 ), 0.5 + 0.5 * ( lab.z / 127.0 ));\n}\n\nvec3 lab2xyz( vec3 c ) {\n    float fy = ( c.x + 16.0 ) / 116.0;\n    float fx = c.y / 500.0 + fy;\n    float fz = fy - c.z / 200.0;\n    return vec3(\n         95.047 * (( fx > 0.206897 ) ? fx * fx * fx : ( fx - 16.0 / 116.0 ) / 7.787),\n        100.000 * (( fy > 0.206897 ) ? fy * fy * fy : ( fy - 16.0 / 116.0 ) / 7.787),\n        108.883 * (( fz > 0.206897 ) ? fz * fz * fz : ( fz - 16.0 / 116.0 ) / 7.787)\n    );\n}\n\nvec3 xyz2rgb( vec3 c ) {\n    vec3 v =  c / 100.0 * mat3( \n        3.2406, -1.5372, -0.4986,\n        -0.9689, 1.8758, 0.0415,\n        0.0557, -0.2040, 1.0570\n    );\n    vec3 r;\n    r.x = ( v.r > 0.0031308 ) ? (( 1.055 * pow( v.r, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.r;\n    r.y = ( v.g > 0.0031308 ) ? (( 1.055 * pow( v.g, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.g;\n    r.z = ( v.b > 0.0031308 ) ? (( 1.055 * pow( v.b, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.b;\n    return r;\n}\n\nvec3 lab2rgb(vec3 c) {\n    return xyz2rgb( lab2xyz( vec3(100.0 * c.x, 2.0 * 127.0 * (c.y - 0.5), 2.0 * 127.0 * (c.z - 0.5)) ) );\n}\n\nvec3 hsl2rgb( in vec3 c )\n{\n    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );\n\n    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));\n}\n\nvec3 rgb2hsl( in vec3 c ){\n  float h = 0.0;\n	float s = 0.0;\n	float l = 0.0;\n	float r = c.r;\n	float g = c.g;\n	float b = c.b;\n	float cMin = min( r, min( g, b ) );\n	float cMax = max( r, max( g, b ) );\n\n	l = ( cMax + cMin ) / 2.0;\n	if ( cMax > cMin ) {\n		float cDelta = cMax - cMin;\n        \n        \n		s = l < .0 ? cDelta / ( cMax + cMin ) : cDelta / ( 2.0 - ( cMax + cMin ) );\n        \n		if ( r == cMax ) {\n			h = ( g - b ) / cDelta;\n		} else if ( g == cMax ) {\n			h = 2.0 + ( b - r ) / cDelta;\n		} else {\n			h = 4.0 + ( r - g ) / cDelta;\n		}\n\n		if ( h < 0.0) {\n			h += 6.0;\n		}\n		h = h / 6.0;\n	}\n	return vec3( h, s, l );\n}\n\nvec3 rgb2hsv(vec3 c)\n{\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n \n\nvec3 hsv2rgb(vec3 c)\n{\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise(vec2 v){\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n           -0.577350269189626, 0.024390243902439);\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n    dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main()	{\n	\n\n	vec3 rgb1 = vec3(0.823, 0.949, 0.702); \n	vec3 rgb2 = vec3(0.882, 0.285, 0.640); \n\n	vec3 lab1 = rgb2lab(rgb1);\n	vec3 lab2 = rgb2lab(rgb2);\n\n	\n\n    float grad = fract(vUv.y*2.);\n    if(vUv.y>0.5) grad = 1. - grad;\n\n    float noise =  0.5 + 0.5*( 0.5*snoise(vec2(vUv.x*50.,seconds*0.1)) + 0.5*snoise(vec2(vUv.x*30.,seconds*0.05))); \n    float noise1 =  0.5 + 0.5*snoise(vec2(vUv.x*40.,2.*seconds*0.15));\n    float slowerNoise =  snoise(vec2(vUv.y*5.,vUv.x*10.+2.*seconds*0.05));\n\n    float bottomFill = smoothstep(0.6,1.,grad);\n\n    float fadeTop = smoothstep(0.,0.8,grad - 0.3*noise1);\n    \n\n    float fadeBottom = smoothstep(1.,0.9,grad);\n\n    slowerNoise *= (1.-fadeTop);\n\n    vec3 iridescence = texture2D(iridescenceMap, vUv).rgb;\n\nvec3 finalColor = mix(lab1, lab2, slowerNoise);\n	finalColor = lab2rgb(finalColor);\n\n    finalColor = vec3(0.385, 0.50, 0.861);\n\n    vec3 redColor = vec3(0.306, 0.471, 0.462);\n\n	\n	\n	gl_FragColor = vec4(fadeTop,0.,0.,1.);\n	gl_FragColor = vec4(fadeBottom,0.,0.,1.);\n\n    \n    gl_FragColor.a = fadeBottom*fadeTop ;\n    \n    gl_FragColor.r = (noise + bottomFill); \n\n    gl_FragColor.a *= uIntensity;\n\n    \n    \n    \n    \n    \n    \n\n    gl_FragColor.rgb = finalColor* (noise + bottomFill); \n    if(uColor> 0.5) gl_FragColor.rgb = redColor* (noise + bottomFill); \n\n    \n	\n}",
            side: T.hB5,
            transparent: !0,
            blending: T.NTi,
            depthWrite: !1,
          });
        }
      }
      let t5 = (0, W.Cf)();
      class t4 extends eV {
        getAuroraMesh(e) {
          let {
              radius: t,
              zOffset: n,
              noiseScale: i,
              noiseAmplitude: s,
              noiseOffset: r,
              isred: a = !1,
            } = e,
            o = [];
          for (let e = 0; e <= 100; e++) {
            let a = (e / 100) * Math.PI * 2 + 0 * Math.PI,
              l = Math.cos(a) * (t + s * t5(i * a, e / 100, r)),
              c = Math.sin(a) * (t + s * t5(i * a, e / 100, r));
            o.push(new T.Pq0(c, n, l));
          }
          let l = new T.B6O(o),
            c = new T.j6(l, 200, 0.9, 2, !0);
          return new T.eaF(c, new t3({ uColor: a }));
        }
        constructor(e) {
          super(e),
            (this.onTick = (e) => {
              let { seconds: t } = e;
            }),
            (this.group = new T.YJl()),
            this.group.position.set(0, 10, 0.3),
            this.group.scale.setScalar(4.5),
            this.group.add(
              this.getAuroraMesh({
                radius: 1,
                zOffset: 0,
                noiseScale: 1,
                noiseAmplitude: 0.2,
                noiseOffset: 0,
                isred: !1,
              })
            ),
            this.group.add(
              this.getAuroraMesh({
                radius: 0.99,
                zOffset: 0,
                noiseScale: 1,
                noiseAmplitude: 0.2,
                noiseOffset: 0.05,
                isred: !0,
              })
            ),
            this.group.add(
              this.getAuroraMesh({
                radius: 2,
                zOffset: 0,
                noiseScale: 2,
                noiseAmplitude: 0.2,
                noiseOffset: 0,
                isred: !1,
              })
            ),
            this.group.add(
              this.getAuroraMesh({
                radius: 2.01,
                zOffset: 0.05,
                noiseScale: 2,
                noiseAmplitude: 0.2,
                noiseOffset: 0,
                isred: !0,
              })
            ),
            this.group.add(
              this.getAuroraMesh({
                radius: 3.5,
                zOffset: 0,
                noiseScale: 3,
                noiseAmplitude: 0.4,
                noiseOffset: 0.4,
                isred: !1,
              })
            ),
            this.group.add(
              this.getAuroraMesh({
                radius: 3.51,
                zOffset: 0,
                noiseScale: 3,
                noiseAmplitude: 0.4,
                noiseOffset: 0.45,
                isred: !0,
              })
            ),
            this.scene.add(this.group);
        }
      }
      var t9 = new WeakMap(),
        t8 = new WeakMap(),
        t7 = new WeakMap(),
        t6 = new WeakMap(),
        ne = new WeakMap(),
        nt = new WeakMap(),
        nn = new WeakMap(),
        ni = new WeakMap(),
        ns = new WeakMap();
      class nr {
        constructor(e, t) {
          (0, y._)(this, t9, { writable: !0, value: void 0 }),
            (0, y._)(this, t8, { writable: !0, value: void 0 }),
            (0, y._)(this, t7, { writable: !0, value: void 0 }),
            (0, y._)(this, t6, { writable: !0, value: void 0 }),
            (0, y._)(this, ne, { writable: !0, value: void 0 }),
            (0, y._)(this, nt, { writable: !0, value: void 0 }),
            (0, y._)(this, nn, { writable: !0, value: void 0 }),
            (0, y._)(this, ni, { writable: !0, value: void 0 }),
            (0, y._)(this, ns, { writable: !0, value: void 0 }),
            (0, M._)(this, t9, new T.Pq0()),
            (0, M._)(this, t8, new T.I9Y()),
            (0, M._)(this, t7, new T.I9Y()),
            (0, M._)(this, t6, new T.I9Y()),
            (0, M._)(this, ne, new T.Pq0()),
            (0, M._)(this, nt, new T.I9Y()),
            (0, M._)(this, nn, 0),
            (0, M._)(this, ni, 0),
            (0, M._)(this, ns, new T.Pq0()),
            (this.go = (e, t, n) => {
              var i, s;
              let r = 0;
              (0, b._)(this, t7).set(0, 0),
                (0, b._)(this, t6).set(0, 0),
                (0, b._)(this, ne).set(0, 0, 0),
                (0, b._)(this, nt).set(0, 0),
                (0, M._)(this, nn, 0),
                (0, M._)(this, ni, 0),
                (0, b._)(this, ns).set(0, 0, 0),
                t.forEach((t) => {
                  let n = t.index,
                    i = e < 1 ? t.weight : t.placeVisibility;
                  "sectionlocation" == t.sectionId && ((i *= i), (i *= i)),
                    t.place
                      ? ((0, b._)(this, t7).addScaledVector(t.place.size, i),
                        (0, b._)(this, t6).addScaledVector(
                          t.place.ndcCenter,
                          i
                        ))
                      : (0, b._)(this, t7).addScalar(i),
                    (0, b._)(this, ne).addScaledVector(
                      this.positions[n]((0, b._)(this, t9), t.progress),
                      i
                    ),
                    (0, b._)(this, nt).addScaledVector(
                      this.objectSizes[n]((0, b._)(this, t8)),
                      i
                    ),
                    (0, M._)(
                      this,
                      nn,
                      (0, b._)(this, nn) + this.objectScales[n](t.progress) * i
                    ),
                    (0, M._)(
                      this,
                      ni,
                      (0, b._)(this, ni) + this.shiftMuls[n] * i
                    ),
                    (0, b._)(this, ns).addScaledVector(
                      this.ups[n]((0, b._)(this, t9), t.progress),
                      i
                    ),
                    (r += i);
                }),
                r > 0 &&
                  ("sectionhero" == t[0].sectionId &&
                    ((0, b._)(this, t6).y =
                      ((i = (0, b._)(this, t6).y),
                      (s = n7.viewport.isHorizontal ? 0 : 0.5 * r),
                      i + (t[0].weight / r) * (s - i))),
                  (0, b._)(this, t7).divideScalar(r),
                  (0, b._)(this, t6).divideScalar(r),
                  (0, b._)(this, ne).divideScalar(r),
                  (0, b._)(this, nt).divideScalar(r),
                  (0, M._)(this, nn, (0, b._)(this, nn) / r),
                  (0, M._)(this, ni, (0, b._)(this, ni) / r),
                  this.cameraController.layoutSize.copy((0, b._)(this, t7)),
                  this.cameraController.layoutCenterNDC.copy(
                    (0, b._)(this, t6)
                  ),
                  this.cameraController.position.copy((0, b._)(this, ne)),
                  this.cameraController.objectSize.copy((0, b._)(this, nt)),
                  (this.cameraController.objectScale = (0, b._)(this, nn)),
                  (this.cameraController.shiftMultiplier = (0, b._)(this, ni)),
                  this.camera.up.copy((0, b._)(this, ns)).normalize());
            }),
            (this.on = () => {}),
            (this.off = () => {}),
            (this.camera = e),
            (this.cameraController = t),
            (this.positions = [
              (e, t) => {
                let n = (-1.25 - t) * Math.PI;
                return e.set(Math.cos(n), 2 * t - 0.5, Math.sin(n)), e;
              },
              (e) => e.set(1, 0, 0),
              (e) => e.set(1, 0, 1),
              (e) => e.set(1, 1, 1),
              (e) => e.set(0, 0, 1.075),
            ]),
            (this.ups = [
              (e) => e.set(0, 1, 0),
              (e) => e.set(0, 1, 0),
              (e) => e.set(0, 1, 0),
              (e) => e.set(-0.3, 1, 0.3),
              (e) => e.set(0, 1, 0),
            ]),
            (this.objectScales = [
              (e) => 1 / 3 + (2 * e) / 3,
              (e) => 1,
              (e) => 1,
              (e) => 1,
              (e) => 1,
            ]),
            (this.objectSizes = [
              (e) => e.set(3, 3),
              (e) => e.set(1.1 * nZ.processCubesCount, 1),
              (e) =>
                e.set(
                  n7.viewport.aspect >= 1 ? 5 * Math.SQRT2 * 1.2 : 2,
                  n7.viewport.aspect >= 1 ? 2 * Math.SQRT2 * 1.2 : 5
                ),
              (e) => e.set(2, 2),
              (e) => e.set(1, 1),
            ]),
            (this.shiftMuls = [5, 5, 3, 1, 0.1]);
        }
      }
      var na = new WeakMap(),
        no = new WeakMap(),
        nl = new WeakMap(),
        nc = new WeakMap(),
        nh = new WeakMap(),
        nv = new WeakMap(),
        nd = new WeakMap(),
        nu = new WeakMap();
      class np {
        constructor(e, t, n) {
          (0, y._)(this, na, { writable: !0, value: void 0 }),
            (0, y._)(this, no, { writable: !0, value: void 0 }),
            (0, y._)(this, nl, { writable: !0, value: void 0 }),
            (0, y._)(this, nc, { writable: !0, value: void 0 }),
            (0, y._)(this, nh, { writable: !0, value: void 0 }),
            (0, y._)(this, nv, { writable: !0, value: void 0 }),
            (0, y._)(this, nd, { writable: !0, value: void 0 }),
            (0, y._)(this, nu, { writable: !0, value: void 0 }),
            (0, M._)(this, na, new T.tBo()),
            (0, M._)(this, no, !1),
            (0, M._)(this, nv, new T.Q1f("white")),
            (0, M._)(this, nd, new T.Q1f("black")),
            (0, M._)(this, nu, (e) => {
              (0, b._)(this, na).setFromCamera(e, n7.context.camera);
              let t =
                (0, b._)(this, na).intersectObject(this.infinite).length > 0;
              (0, b._)(this, no) !== t &&
                ((0, M._)(this, no, t),
                (0, b._)(this, no)
                  ? (0, b._)(this, nl).play()
                  : (0, b._)(this, nl).reverse(),
                (0, b._)(this, no)
                  ? (0, b._)(this, nc).play()
                  : (0, b._)(this, nc).reverse());
            }),
            (this.go = (e, t, n) => {
              O(
                "aurora.intensity",
                tn(0.025 * (1 - 2 * n.sectionhero.progress), 0, 1)
              );
              let i = e6(Math.abs(e - 0.05), 0.05, 0);
              (this.infinite.material.uniforms.whiten.value = i),
                (this.aurora.group.visible = e < 1),
                (this.infinite.visible = e < 0.05),
                (this.tower.position.y = -1.5 - e * e * 20),
                (this.tower.visible = e < 0.5);
              let s = this.tower.material.emissive;
              s.lerpColors((0, b._)(this, nh), (0, b._)(this, nv), i),
                s.lerpColors(s, (0, b._)(this, nd), tn(2 * e, 0, 1));
            }),
            (this.on = () => {
              R.on(ep.ndcEvent, (0, b._)(this, nu));
            }),
            (this.off = () => {
              R.off(ep.ndcEvent, (0, b._)(this, nu));
            }),
            (this.infinite = e),
            (this.aurora = t),
            this.infinite.scale.setScalar(3),
            (this.infinite.material.uniforms.glow = { value: 0.64 }),
            (this.infinite.material.uniforms.eta = { value: 1.75 }),
            (this.infinite.material.uniforms.complexity = { value: 1 }),
            (0, M._)(
              this,
              nl,
              L.Ay.fromTo(
                this.infinite.material.uniforms.eta,
                { value: 3.75 },
                { value: 3, ease: "power2.inOut", duration: 0.5 }
              ).pause()
            ),
            (0, M._)(
              this,
              nc,
              L.Ay.fromTo(
                this.infinite.material.uniforms.complexity,
                { value: 0.5 },
                { value: 1, ease: "power2.inOut", duration: 0.5 }
              ).pause()
            ),
            (this.tower = n),
            (this.tower.position.y = -1.5),
            this.tower.scale.setScalar(3),
            (0, M._)(this, nh, this.tower.material.emissive.clone());
        }
      }
      var nm = new WeakMap(),
        nf = new WeakMap();
      class nx {
        constructor() {
          (0, y._)(this, nm, { writable: !0, value: void 0 }),
            (0, y._)(this, nf, { writable: !0, value: void 0 }),
            (0, M._)(this, nm, new T.Pq0(3, 0, 0)),
            (0, M._)(this, nf, -1),
            (this.go = (e, t, n) => {
              let i = tt(e, 0.5, 0) + tt(e, 1.4, 1.6);
              if (i === (0, b._)(this, nf)) return;
              (0, M._)(this, nf, i);
              let s = 0.5 * i * Math.PI;
              (0, b._)(this, nm).set(3 * Math.cos(s), 0, 3 * Math.sin(s)),
                R.dispatch(eO.setEvent, (0, b._)(this, nm));
            }),
            (this.on = () => {
              R.dispatch(eO.setEvent, { x: 0, y: 0, z: 3 });
            }),
            (this.off = () => {});
        }
      }
      let ng = class {
          constructor() {
            (this.targetPosition = new T.Pq0()),
              (this.v3 = new T.Pq0()),
              (this.cv3 = new k.eB());
          }
        },
        nw = [
          [0, -1],
          [-1.2, -1],
          [1.2, -1],
          [-2.4, -1],
          [2.4, -1],
          [-2, 1],
          [-0.667, 1],
          [0.667, 1],
          [2, 1],
          [3.2, 1],
        ],
        nb = [
          [-0.1, 0],
          [-0.1, 0],
          [-0.1, 0],
          [-0.1, 0],
          [-0.1, 0],
          [0.1, 0],
          [0.1, 0],
          [0.1, 0],
          [0.1, 0],
          [0.1, 0],
        ];
      var ny = new WeakMap(),
        nM = new WeakMap(),
        nz = new WeakMap(),
        nS = new WeakMap(),
        nP = new WeakMap(),
        nT = new WeakMap(),
        nD = new WeakMap(),
        nA = new WeakMap(),
        n_ = new WeakMap(),
        nC = new WeakMap(),
        nk = new WeakMap(),
        nW = new WeakMap(),
        nL = new WeakMap(),
        nR = new WeakMap();
      class nN {
        constructor(e, t) {
          (0, y._)(this, ny, { writable: !0, value: void 0 }),
            (0, y._)(this, nM, { writable: !0, value: void 0 }),
            (0, y._)(this, nz, { writable: !0, value: void 0 }),
            (0, y._)(this, nS, { writable: !0, value: void 0 }),
            (0, y._)(this, nP, { writable: !0, value: void 0 }),
            (0, y._)(this, nT, { writable: !0, value: void 0 }),
            (0, y._)(this, nD, { writable: !0, value: void 0 }),
            (0, y._)(this, nA, { writable: !0, value: void 0 }),
            (0, y._)(this, n_, { writable: !0, value: void 0 }),
            (0, y._)(this, nC, { writable: !0, value: void 0 }),
            (0, y._)(this, nk, { writable: !0, value: void 0 }),
            (0, y._)(this, nW, { writable: !0, value: void 0 }),
            (0, y._)(this, nL, { writable: !0, value: void 0 }),
            (0, y._)(this, nR, { writable: !0, value: void 0 }),
            (0, M._)(this, nM, new T.RlV()),
            (0, M._)(this, nz, new T.Pq0()),
            (0, M._)(this, nS, new T.PTz()),
            (0, M._)(this, nP, new T.PTz()),
            (0, M._)(this, nT, new T.Pq0()),
            (0, M._)(this, nD, 0),
            (0, M._)(this, nA, !1),
            (0, M._)(this, n_, []),
            (0, M._)(this, nC, []),
            (0, M._)(this, nk, [
              new T.Pq0(),
              new T.Pq0(-2, 0, 0),
              new T.Pq0(0, 0, -2),
            ]),
            (this.go = (e, t, n) => {
              if (e <= 1) {
                for (let e = 0; e < this.cubes.length; e++)
                  this.cubes[e].visible = !1;
                return (
                  (this.axisXLine.visible = !1),
                  (this.axisZLine.visible = !1),
                  void (this.infinite.visible = !1)
                );
              }
              let i = n.sectionpartners.placeProgress,
                s = n.sectionpartners.placeVisibility,
                r = n.sectionlocation.placeProgress;
              n.sectionlocation.placeVisibility;
              let a = i < 0.5 ? s : 1,
                o = r > 0 ? 1 - s : 0,
                l = tt(o, 0.9, 1),
                c = e6(o, 0, 1);
              this.elements.forEach((e, t) => {
                e.targetPosition
                  .lerpVectors((0, b._)(this, n_)[t], (0, b._)(this, nC)[t], a)
                  .lerp((0, b._)(this, nk)[t], c);
              });
              let h = n7.viewport.isHorizontal ? 0.833 : 0.75;
              this.elements[1].mesh.scale.setScalar(1.05 + c * (h - 1.05)),
                this.elements[2].mesh.scale.setScalar(1.05 + c * (h - 1.05)),
                this.axisXLine.scale.setScalar(l),
                (this.axisXLine.visible = l > 0),
                this.axisZLine.scale.setScalar(l),
                (this.axisZLine.visible = l > 0),
                (0, M._)(this, nD, e6(s, 0.85, 1));
              let v = tt(e, 2.75, 2.5),
                d = n.sectionprocess.progress > 0.333 || e >= 2;
              (this.cubes[0].visible = d && e < 3.5),
                (this.cubes[0].material.uniforms.logo.value = v),
                (this.cubes[0].material.uniforms.whiten.value = tt(
                  e,
                  3.45,
                  3.5
                )),
                (this.cubes[1].visible = d && e < 3.75),
                (this.cubes[1].material.uniforms.logo.value = v),
                (this.cubes[2].visible = d && e < 3.75),
                (this.cubes[2].material.uniforms.logo.value = v);
              for (let t = 3; t < this.cubes.length; t++) {
                let n = n7.viewport.isHorizontal ? 1.05 : 0.75;
                this.cubes[t].scale.setScalar(n * (1 - c)),
                  (this.cubes[t].visible = d && e < 3);
              }
              (this.infinite.visible = e >= 3.5),
                (this.infinite.material.uniforms.eta.value =
                  0.1 + 1.9 * tt(e, 3.5, 3.95)),
                (this.infinite.material.uniforms.glow.value =
                  0.4 + 0.4 * tt(e, 3.7, 3.95)),
                (this.infinite.material.uniforms.whiten.value =
                  tt(e, 3.55, 3.5) + tt(e, 3.9, 4));
            }),
            (0, M._)(this, nW, (e) => {
              let { x: t, y: n } = e;
              (0, b._)(this, nM).origin.copy(n7.context.camera.position),
                (0, b._)(this, nM)
                  .direction.set(t, n, 0)
                  .unproject(n7.context.camera)
                  .sub((0, b._)(this, nM).origin)
                  .normalize();
            }),
            (0, M._)(this, nL, (e) => {
              let { ds: t } = e;
              t < 0.001 ||
                ((0, b._)(this, nD) > 0
                  ? ((0, b._)(this, nA) &&
                      this.elements.forEach((e) => {
                        e.body.position.set(
                          e.targetPosition.x,
                          e.targetPosition.y,
                          e.targetPosition.z
                        ),
                          e.body.velocity.setZero(),
                          e.body.angularVelocity.setZero();
                      }),
                    (0, b._)(this, ny).step(1 / 60, t, 3),
                    this.elements.forEach((e) => {
                      (isNaN(e.body.position.x) ||
                        isNaN(e.body.position.y) ||
                        isNaN(e.body.position.z)) &&
                        (console.warn("NaN position after step"),
                        (0, b._)(this, ny).removeBody(e.body),
                        (e.body = new k.nB({
                          mass: 1,
                          shape: new k.az(new k.eB(0.5, 0.5, 0.5)),
                          position: new k.eB(
                            e.targetPosition.x,
                            e.targetPosition.y,
                            e.targetPosition.z
                          ),
                          linearDamping: 0.99,
                          angularDamping: 0.2,
                        })),
                        (0, b._)(this, ny).addBody(e.body));
                    }),
                    (0, M._)(this, nA, !1))
                  : (0, b._)(this, nA) ||
                    (this.elements.forEach((e) => {
                      e.body.position.set(
                        e.targetPosition.x,
                        e.targetPosition.y,
                        e.targetPosition.z
                      ),
                        e.body.velocity.setZero(),
                        e.body.quaternion.set(0, 0, 0, 1),
                        e.body.angularVelocity.setZero();
                    }),
                    (0, M._)(this, nA, !0)),
                this.elements.forEach((e) => {
                  let t = e.mesh.position;
                  t.lerpVectors(
                    e.targetPosition,
                    e.body.position,
                    (0, b._)(this, nD)
                  );
                  let n = e.mesh.quaternion;
                  if (
                    (0 == (0, b._)(this, nD)
                      ? n.slerp((0, b._)(this, nS), 0.05)
                      : ((0, b._)(this, nP).copy(e.body.quaternion),
                        n.slerp(
                          (0, b._)(this, nP),
                          (0, b._)(this, nD) * (0, b._)(this, nD)
                        )),
                    (0, b._)(this, nD) > 0)
                  ) {
                    (0, b._)(this, nT).subVectors(t, (0, b._)(this, nM).origin);
                    let n = (0, b._)(this, nT).dot(
                      (0, b._)(this, nM).direction
                    );
                    (0, b._)(this, nT)
                      .copy((0, b._)(this, nM).origin)
                      .addScaledVector((0, b._)(this, nM).direction, n);
                    let i = -5 * e6(t.distanceTo((0, b._)(this, nT)), 3, 0);
                    (0, b._)(this, nT).sub(t).normalize().multiplyScalar(i),
                      e.v3
                        .copy(t)
                        .sub(e.targetPosition)
                        .multiplyScalar(-1)
                        .add((0, b._)(this, nT))
                        .multiplyScalar((0, b._)(this, nD)),
                      e.v3.lengthSq() > 100 &&
                        e.v3.normalize().multiplyScalar(10),
                      e.cv3.set(e.v3.x, e.v3.y, e.v3.z),
                      e.body.applyImpulse(e.cv3);
                  }
                }));
            }),
            (0, M._)(this, nR, (e) => {
              let { isHorizontal: t } = e,
                n = t ? nw : nb;
              (0, b._)(this, nC).forEach((e, t) => {
                e.set(n[t][0], n[t][1], -n[t][0]);
              });
            }),
            (this.on = () => {
              R.on(ee.event, (0, b._)(this, nL)),
                R.on(ep.ndcEvent, (0, b._)(this, nW)),
                R.on(er.resizeEvent, (0, b._)(this, nR));
            }),
            (this.off = () => {
              R.off(ee.event, (0, b._)(this, nL)),
                R.off(ep.ndcEvent, (0, b._)(this, nW)),
                R.off(er.resizeEvent, (0, b._)(this, nR));
            }),
            (this.cubes = e),
            (this.infinite = new tP(t)),
            (this.infinite.visible = !1),
            (this.infinite.material.uniforms.eta = { value: 1 }),
            (this.infinite.material.uniforms.complexity = { value: 1 }),
            (0, M._)(
              this,
              nC,
              e.map(() => new T.Pq0())
            ),
            (0, b._)(this, nR).call(this, n7.viewport),
            (0, M._)(
              this,
              n_,
              (0, b._)(this, nC).map((e) => {
                let t = e.clone();
                return (t.x += 10), (t.z -= 10), t;
              })
            );
          for (let t = 3; t < e.length; t++)
            (0, b._)(this, nk)[t] = (0, b._)(this, nC)
              [t].clone()
              .normalize()
              .multiplyScalar(10);
          (0, M._)(this, ny, new k.HK()),
            (this.elements = e.map((e, t) => {
              let n = new ng();
              return (
                (n.mesh = e),
                n.mesh.scale.setScalar(1),
                n.targetPosition.copy((0, b._)(this, n_)[t]),
                (n.body = new k.nB({
                  mass: 1,
                  shape: new k.az(new k.eB(0.625, 0.625, 0.625)),
                  position: new k.eB(
                    n.targetPosition.x,
                    n.targetPosition.y,
                    n.targetPosition.z
                  ),
                  linearDamping: 0.99,
                  angularDamping: 0.2,
                })),
                (0, b._)(this, ny).addBody(n.body),
                n
              );
            })),
            (this.axisZLine = new T.eaF(
              new T.Ho_(0.01, 0.01, 2, 8, 1),
              new T.V9B()
            )),
            (this.axisZLine.position.x = -1),
            (this.axisZLine.rotation.z = 0.5 * Math.PI),
            this.axisZLine.scale.setScalar(0),
            (this.axisXLine = new T.eaF(
              new T.Ho_(0.01, 0.01, 2, 8, 1),
              new T.V9B()
            )),
            (this.axisXLine.position.z = -1),
            (this.axisXLine.rotation.x = 0.5 * Math.PI),
            this.axisXLine.scale.setScalar(0),
            t.scene.add(this.axisZLine, this.axisXLine);
        }
      }
      var nE = new WeakMap();
      class nj {
        constructor() {
          (0, y._)(this, nE, { writable: !0, value: void 0 }),
            (0, M._)(this, nE, [
              { x: 0, v: 10 },
              { x: 0.01, v: 2.5 },
              { x: 0.2, v: 2.5 },
              { x: 0.4, v: 20 },
              { x: 2.5, v: 20 },
              { x: 2.9, v: 75 },
              { x: 3.333, v: 20 },
              { x: 3.45, v: 0 },
              { x: 3.55, v: 0 },
              { x: 3.666, v: 20 },
            ]),
            (this.go = (e, t, n) => {
              (n7.pipeline.fx[0].enabled = e < 3.5),
                (n7.pipeline.fx[1].enabled = e < 3.5),
                O("post.halo.amp", te((0, b._)(this, nE), e));
            }),
            (this.on = () => {}),
            (this.off = () => {});
        }
      }
      class nB {
        constructor() {
          (this.targetPosition = new T.Pq0()),
            (this.v3 = new T.Pq0()),
            (this.cv3 = new k.eB());
        }
      }
      var nO = new WeakMap(),
        nF = new WeakMap(),
        nV = new WeakMap(),
        nq = new WeakMap(),
        nU = new WeakMap(),
        nI = new WeakMap(),
        nH = new WeakMap(),
        nX = new WeakMap(),
        nY = new WeakMap(),
        nG = new WeakMap();
      class nK {
        constructor(e) {
          (0, y._)(this, nO, { writable: !0, value: void 0 }),
            (0, y._)(this, nF, { writable: !0, value: void 0 }),
            (0, y._)(this, nV, { writable: !0, value: void 0 }),
            (0, y._)(this, nq, { writable: !0, value: void 0 }),
            (0, y._)(this, nU, { writable: !0, value: void 0 }),
            (0, y._)(this, nI, { writable: !0, value: void 0 }),
            (0, y._)(this, nH, { writable: !0, value: void 0 }),
            (0, y._)(this, nX, { writable: !0, value: void 0 }),
            (0, y._)(this, nY, { writable: !0, value: void 0 }),
            (0, y._)(this, nG, { writable: !0, value: void 0 }),
            (0, M._)(this, nF, new T.RlV()),
            (0, M._)(this, nV, new T.Pq0()),
            (0, M._)(this, nq, new T.PTz()),
            (0, M._)(this, nU, new T.Pq0()),
            (0, M._)(this, nI, 0),
            (0, M._)(this, nH, !1),
            (0, M._)(this, nX, []),
            (this.go = (e, t, n) => {
              if ((e -= 0.05) <= 0 || e + 0.05 >= 2)
                return void this.elements.forEach((e) => (e.mesh.visible = !1));
              let i = n.sectionprocess.placeProgress,
                s = tt(e, 0, 0.2),
                r = tt(e, 0.2, 0.4),
                a = tt(i, 0.8, 1);
              this.elements.forEach((t, n) => {
                var i, o;
                (t.mesh.visible = !0),
                  (t.targetPosition.x =
                    (1 - r) * ((0, b._)(this, nX)[n].x * (1 + 2 * s)) + 0 * r),
                  (t.targetPosition.y =
                    (1 - r) * ((0, b._)(this, nX)[n].y * (1 + 2 * s)) +
                    r *
                      (4 * Math.sin((n / nZ.processCubesCount) * 3 * Math.PI))),
                  (t.targetPosition.y =
                    ((i = t.targetPosition.y), (1 - (o = e)) * i + 0 * o)),
                  (t.targetPosition.z =
                    (1 - r) * ((0, b._)(this, nX)[n].z * (1 + 2 * s)) +
                    r * (1.1 * (0.5 * nZ.processCubesCount - n))),
                  (t.targetPosition.z -= 50 * a),
                  t.mesh.scale.setScalar(1 - a);
              }),
                (0, M._)(this, nI, tt(e, 0.1, 0.2)),
                (0, M._)(this, nI, Math.max(0, (0, b._)(this, nI) - 5 * a));
            }),
            (0, M._)(this, nY, (e) => {
              let { x: t, y: n } = e;
              (0, b._)(this, nF).origin.copy(n7.context.camera.position),
                (0, b._)(this, nF)
                  .direction.set(t, n, 0)
                  .unproject(n7.context.camera)
                  .sub((0, b._)(this, nF).origin)
                  .normalize();
            }),
            (0, M._)(this, nG, (e) => {
              let { ds: t } = e;
              t < 0.001 ||
                ((0, b._)(this, nI) > 0
                  ? ((0, b._)(this, nH) &&
                      this.elements.forEach((e) => {
                        e.body.position.set(
                          e.targetPosition.x,
                          e.targetPosition.y,
                          e.targetPosition.z
                        ),
                          e.body.velocity.setZero(),
                          e.body.angularVelocity.setZero();
                      }),
                    (0, b._)(this, nO).step(1 / 60, t, 3),
                    this.elements.forEach((e) => {
                      (isNaN(e.body.position.x) ||
                        isNaN(e.body.position.y) ||
                        isNaN(e.body.position.z)) &&
                        (console.warn("NaN position after step"),
                        (0, b._)(this, nO).removeBody(e.body),
                        (e.body = new k.nB({
                          mass: 1,
                          shape: new k.az(new k.eB(0.5, 0.5, 0.5)),
                          position: new k.eB(
                            e.targetPosition.x,
                            e.targetPosition.y,
                            e.targetPosition.z
                          ),
                          linearDamping: 0.95,
                          angularDamping: 0.5,
                        })),
                        (0, b._)(this, nO).addBody(e.body));
                    }),
                    (0, M._)(this, nH, !1))
                  : (0, b._)(this, nH) ||
                    (this.elements.forEach((e) => {
                      e.body.position.set(
                        e.targetPosition.x,
                        e.targetPosition.y,
                        e.targetPosition.z
                      ),
                        e.body.velocity.setZero(),
                        e.body.angularVelocity.setZero();
                    }),
                    (0, M._)(this, nH, !0)),
                this.elements.forEach((e) => {
                  let t = e.mesh.position;
                  t.lerpVectors(
                    e.targetPosition,
                    e.body.position,
                    (0, b._)(this, nI)
                  );
                  let n = e.mesh.quaternion;
                  if (
                    (n.copy(e.body.quaternion),
                    1 > (0, b._)(this, nI) &&
                      n.slerp((0, b._)(this, nq), 1 - (0, b._)(this, nI)),
                    (0, b._)(this, nI) > 0)
                  ) {
                    (0, b._)(this, nU).subVectors(t, (0, b._)(this, nF).origin);
                    let n = (0, b._)(this, nU).dot(
                      (0, b._)(this, nF).direction
                    );
                    (0, b._)(this, nU)
                      .copy((0, b._)(this, nF).origin)
                      .addScaledVector((0, b._)(this, nF).direction, n);
                    let i = -5 * e6(t.distanceTo((0, b._)(this, nU)), 3, 0);
                    (0, b._)(this, nU).sub(t).normalize().multiplyScalar(i),
                      e.v3
                        .copy(t)
                        .sub(e.targetPosition)
                        .multiplyScalar(-1)
                        .add((0, b._)(this, nU))
                        .multiplyScalar((0, b._)(this, nI)),
                      e.v3.lengthSq() > 100 &&
                        e.v3.normalize().multiplyScalar(10),
                      e.cv3.set(e.v3.x, e.v3.y, e.v3.z),
                      e.body.applyImpulse(e.cv3);
                  }
                }));
            }),
            (this.on = () => {
              R.on(ee.event, (0, b._)(this, nG)),
                R.on(ep.ndcEvent, (0, b._)(this, nY));
            }),
            (this.off = () => {
              R.off(ee.event, (0, b._)(this, nG)),
                R.off(ep.ndcEvent, (0, b._)(this, nY));
            }),
            (this.cubes = e),
            (0, M._)(this, nX, [
              new T.Pq0(-1, -1, 1),
              new T.Pq0(0, -1, 1),
              new T.Pq0(1, -1, 1),
              new T.Pq0(-1, 0, 1),
              new T.Pq0(0, 0, 1),
              new T.Pq0(1, 0, 1),
              new T.Pq0(-1, 1, 1),
              new T.Pq0(0, 1, 1),
              new T.Pq0(1, 1, 1),
              new T.Pq0(-1, 1, 0),
              new T.Pq0(0, 1, 0),
              new T.Pq0(1, 1, 0),
              new T.Pq0(-1, 1, -1),
              new T.Pq0(0, 1, -1),
              new T.Pq0(1, 1, -1),
              new T.Pq0(1, -1, 0),
              new T.Pq0(1, 0, 0),
              new T.Pq0(1, -1, -1),
              new T.Pq0(1, 0, -1),
            ]),
            (0, M._)(this, nO, new k.HK()),
            (this.elements = e.map((e, t) => {
              let n = new nB();
              return (
                (n.mesh = e),
                n.targetPosition.copy((0, b._)(this, nX)[t]),
                (n.body = new k.nB({
                  mass: 1,
                  shape: new k.az(new k.eB(0.5, 0.5, 0.5)),
                  position: new k.eB(
                    n.targetPosition.x,
                    n.targetPosition.y,
                    n.targetPosition.z
                  ),
                  linearDamping: 0.95,
                  angularDamping: 0.5,
                })),
                (0, b._)(this, nO).addBody(n.body),
                n
              );
            }));
        }
      }
      class nZ extends Q {
        static get processCubesCount() {
          return window.innerWidth < 768 ? 9 : 19;
        }
        set enabled(e) {
          this._enabled !== e &&
            ((this._enabled = e),
            this.timelines.forEach((e) => (this._enabled ? e.on() : e.off())));
        }
        get enabled() {
          return this._enabled;
        }
        constructor() {
          super(),
            (this.onProgress = (e, t, n) => {
              this.enabled &&
                this.timelines.forEach((i) => {
                  i.go(e, t, n);
                });
            }),
            (this.cameraController = new eQ({ camera: this.camera })),
            (this.aurora = new t4(this)),
            (this.particles = new eK(this));
          let e = new T.Q1f(n7.settings.brandColor);
          (this.infinite = new tP(this)),
            (this.infinite.material.uniforms.lightColor.value = e);
          let t = n7.assetsManager.get("tower");
          (this.tower = t.scene.children[0]),
            (this.tower.material.emissive = e),
            this.scene.add(this.tower),
            (this.glassCubes = Array(nZ.processCubesCount)
              .fill(0)
              .map((e) => new e7(this))),
            (this.logoCubes = Array(n7.settings.logoCount)
              .fill(0)
              .map((e, t) => new tO(this, "logo" + t))),
            (this.timelines = [
              new nr(this.camera, this.cameraController),
              new np(this.infinite, this.aurora, this.tower),
              new nK(this.glassCubes),
              new nN(this.logoCubes, this),
              new nj(),
              new nx(),
            ]),
            (this.enabled = !0),
            R.on(to.event, this.onProgress),
            n7.pipeline.renderer.compile(this.scene, this.camera);
        }
      }
      class nQ extends Q {
        set enabled(e) {
          this._enabled !== e &&
            ((this._enabled = e),
            this._enabled
              ? R.on(to.event, this.onProgress)
              : R.off(to.event, this.onProgress),
            this._enabled && R.dispatch(eO.setEvent, { x: 0, y: 0, z: 3 }));
        }
        get enabled() {
          return this._enabled;
        }
        constructor() {
          super(),
            (this.onProgress = (e, t, n) => {
              if (!this.enabled) return;
              let i = n.sectionhero.place;
              this.cameraController.layoutCenterNDC.copy(i.ndcCenter),
                this.cameraController.layoutSize.copy(i.size);
            }),
            (this.cameraController = new eQ({
              camera: this.camera,
              position: new T.Pq0(1, 1, 1),
            })),
            (this.particles = new eK(this));
        }
      }
      var nJ = new WeakMap();
      class n$ {
        constructor({
          camera: e,
          position: t = new T.Pq0(0, 0, n7.settings.camera.depth),
          target: n = new T.Pq0(),
        }) {
          (0, y._)(this, nJ, { writable: !0, value: void 0 }),
            (0, M._)(this, nJ, "cam.positionShift" + Math.random()),
            (this.x4 = new T.IUQ(1, 0, 0, 0)),
            (this.y4 = new T.IUQ(0, 1, 0, 0)),
            (this.x3 = new T.Pq0(1, 0, 0)),
            (this.y3 = new T.Pq0(0, 1, 0)),
            (this.onPointer = (e) => {
              let { x: t, y: n } = e;
              $.set((0, b._)(this, nJ), [-t, -n]);
            }),
            (this.onTick = () => {
              this.camera.position.copy(this.position),
                (this.distToCam = this.position.distanceTo(this.target));
              let e = $.get((0, b._)(this, nJ));
              this.x4.set(1, 0, 0, 0).applyMatrix4(this.camera.matrix),
                this.x3
                  .set(this.x4.x, this.x4.y, this.x4.z)
                  .normalize()
                  .multiplyScalar(0.25 * e[0] * this.distToCam),
                this.y4.set(0, 1, 0, 0).applyMatrix4(this.camera.matrix),
                this.y3
                  .set(this.y4.x, this.y4.y, this.y4.z)
                  .normalize()
                  .multiplyScalar(0.25 * e[1] * this.distToCam),
                this.camera.position.add(this.x3).add(this.y3),
                this.camera.lookAt(this.target);
            }),
            (this.onResize = (e) => {
              let { aspect: t } = e;
              (this.camera.aspect = t), this.camera.updateProjectionMatrix();
            }),
            (this.camera = e),
            (this.position = t),
            (this.target = n),
            new $((0, b._)(this, nJ), [0, 0], 10, 5),
            R.on(ep.ndcEvent, this.onPointer),
            R.on(ee.event, this.onTick),
            R.on(er.resizeEvent, this.onResize);
        }
      }
      class n0 extends Q {
        set enabled(e) {
          this._enabled !== e &&
            ((this._enabled = e),
            this._enabled
              ? (O(eL.powerProvider, 0.25),
                R.dispatch(eO.setEvent, { x: 0, y: 0, z: 3 }),
                R.dispatch(eW.enableEvent, !0),
                R.dispatch(eT.enableEvent, !1))
              : (O(eL.powerProvider, 0),
                R.dispatch(eT.enableEvent, !0),
                R.dispatch(eW.enableEvent, !1)));
        }
        get enabled() {
          return this._enabled;
        }
        constructor() {
          super(),
            (this.cameraController = new n$({
              camera: this.camera,
              position: new T.Pq0(1.5, 1.5, 1.5),
            })),
            (this.particles = new eK(this)),
            (this.cube = new tP(this)),
            (this.cube.material.uniforms.complexity = { value: 1 });
        }
      }
      var n1 = new WeakMap(),
        n2 = new WeakMap(),
        n3 = new WeakMap(),
        n5 = new WeakMap(),
        n4 = new WeakMap(),
        n9 = new WeakMap(),
        n8 = new WeakMap();
      class n7 {
        static get instance() {
          return null !== (0, S._)(n7, n7, n6)
            ? (0, S._)(n7, n7, n6)
            : new n7();
        }
        constructor({ container: e, settings: t = {} } = {}) {
          var n = this;
          if (
            ((0, y._)(this, n1, { writable: !0, value: void 0 }),
            (0, y._)(this, n2, { writable: !0, value: void 0 }),
            (0, y._)(this, n3, { writable: !0, value: void 0 }),
            (0, y._)(this, n5, { writable: !0, value: void 0 }),
            (0, y._)(this, n4, { writable: !0, value: void 0 }),
            (0, y._)(this, n9, { writable: !0, value: void 0 }),
            (0, y._)(this, n8, { writable: !0, value: void 0 }),
            (0, M._)(this, n3, {}),
            (0, M._)(this, n5, !1),
            (0, M._)(this, n4, []),
            (0, M._)(this, n9, ""),
            (this.create = () => {
              (n7.pipeline = new eR()),
                new ee(),
                new ep(),
                new eO(),
                (n7.assetsManager.get("iridescenceMap").colorSpace = T.er$),
                new eP(),
                new eS(),
                new eN(),
                new H(),
                new eF(),
                (0, M._)(this, n2, new ej()),
                (0, M._)(this, n1, new to()),
                (0, M._)(this, n5, !0),
                (0, b._)(this, n4).forEach((e) => {
                  let { pageID: t, places: n } = e;
                  return this.setPage(t, n, !1);
                });
            }),
            (0, M._)(this, n8, (e) => {
              switch (e) {
                case "main":
                  return new nZ();
                case "dni":
                  return new t2();
                case "contact":
                  return new tm();
                case "news":
                  return new nQ();
                case "404":
                  return new n0();
                default:
                  throw "unknown page ID!";
              }
            }),
            (this.setPage = function (e, t) {
              let i =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2];
              (i && e == (0, b._)(n, n9)) ||
                ((0, M._)(n, n9, e),
                (0, b._)(n, n5)
                  ? (e in (0, b._)(n, n3) ||
                      ((0, b._)(n, n3)[e] = (0, b._)(n, n8).call(n, e)),
                    (n7.context = (0, b._)(n, n3)[e]),
                    (n7.context.enabled = !0),
                    (0, b._)(n, n2).setDivs(t))
                  : (0, b._)(n, n4).push({ pageID: e, places: t }));
            }),
            (this.reset = () => {
              (0, M._)(this, n9, ""),
                (0, b._)(this, n1).reset(),
                ((0, b._)(this, n2).enabled = !1),
                (n7.context.enabled = !1);
            }),
            null !== (0, S._)(n7, n7, n6))
          )
            throw "Root already exists";
          (0, P._)(n7, n7, n6, this),
            (n7.container = e),
            (n7.settings = Object.assign(n7.settings, t)),
            (n7.features = new et()),
            (n7.viewport = new er());
        }
      }
      (n7.assetsManager = new Z()),
        (n7.settings = N),
        (n7.performance = new ei());
      var n6 = { writable: !0, value: null },
        ie = new WeakMap(),
        it = new WeakMap(),
        ii = new WeakMap(),
        is = new WeakMap(),
        ir = new WeakMap(),
        ia = new WeakMap(),
        io = new WeakMap();
      class il {
        constructor(e, t = !1) {
          (0, y._)(this, ie, { writable: !0, value: void 0 }),
            (0, y._)(this, it, { writable: !0, value: void 0 }),
            (0, y._)(this, ii, { writable: !0, value: void 0 }),
            (0, y._)(this, is, { writable: !0, value: void 0 }),
            (0, y._)(this, ir, { writable: !0, value: void 0 }),
            (0, y._)(this, ia, { writable: !0, value: void 0 }),
            (0, y._)(this, io, { writable: !0, value: void 0 }),
            (0, M._)(this, ie, !1),
            (this.isVisible = !0),
            (0, M._)(this, it, null),
            (this.onload = (e) => {
              let { url: t, loaded: n, total: i } = e;
            }),
            (this.load = () =>
              (0, b._)(this, ie)
                ? new Promise((e) => e())
                : ((0, M._)(this, ie, !0),
                  R.on("loading.progress", this.onload),
                  R.on("loading.complete", (0, b._)(this, ii)),
                  n7.assetsManager.load(),
                  new Promise((e) => {
                    (0, M._)(this, it, e);
                  }))),
            (this.setPage = (e, t) => {
              n7.instance.setPage(e, t),
                this.debug &&
                  Object.keys(t).forEach((e) => {
                    e.startsWith("section") &&
                      (t[e].style.border = "1px dotted green"),
                      e.startsWith("place") &&
                        (t[e].style.border = "1px dotted blue");
                  });
            }),
            (this.beforeNav = () => {
              n7.instance.reset();
            }),
            (0, M._)(this, ii, () => {
              n7.instance.create(),
                document.body.addEventListener("mousemove", (0, b._)(this, is)),
                document.body.addEventListener("mousedown", (0, b._)(this, ir)),
                document.body.addEventListener("mouseup", (0, b._)(this, ia)),
                requestAnimationFrame((0, b._)(this, io)),
                (0, b._)(this, it).call(this);
            }),
            (0, M._)(this, is, (e) => {
              R.dispatch("pointer.raw", { x: e.clientX, y: e.clientY });
            }),
            (0, M._)(this, ir, () => {
              R.dispatch("pointer.raw.down");
            }),
            (0, M._)(this, ia, () => {
              R.dispatch("pointer.raw.up");
            }),
            (0, M._)(this, io, (e) => {
              requestAnimationFrame((0, b._)(this, io)),
                this.isVisible
                  ? (document.hasFocus() ||
                      R.dispatch("Performance.flushEvent"),
                    R.dispatch("frame.raw", e))
                  : R.dispatch("Performance.flushEvent");
            }),
            new n7({ container: e }),
            (this.debug = t);
        }
      }
      let ic = () => {
        let [e, t] = (0, w.useState)();
        return (
          (0, w.useEffect)(() => {
            if (i) return;
            let e = document.querySelector(".gl-container");
            e && t((i = new il(e)));
          }, []),
          { gl: e || i }
        );
      };
    },
    25851: (e, t, n) => {
      n.d(t, { A: () => a });
      var i = n(15507),
        s = n(12115);
      let r = () => {
          let [e, t] = (0, s.useState)({ width: void 0, height: void 0 });
          return (
            (0, s.useEffect)(() => {
              {
                let e = () => {
                  t({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  window.addEventListener("resize", e),
                  e(),
                  () => window.removeEventListener("resize", e)
                );
              }
            }, []),
            e
          );
        },
        a = () => {
          let { width: e } = r();
          return {
            isXLG: e >= Number(i.A.XLG),
            isLG: e >= Number(i.A.LG),
            isMD: e >= Number(i.A.MD),
            isSM: e >= Number(i.A.SM),
            isXSM: e < Number(i.A.SM),
            innerWidth: e,
          };
        };
    },
    87579: (e, t, n) => {
      n.d(t, { default: () => l });
      var i = n(95155),
        s = n(48173),
        r = n.n(s),
        a = n(7493),
        o = n(14441);
      let l = () =>
        (0, i.jsx)("footer", {
          className: "py-10 md:py-20 bg-black",
          children: (0, i.jsxs)(a.mc, {
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex max-md:flex-col md:justify-between md:items-center gap-10 mb-8 md:mb-14",
                children: [
                  (0, i.jsx)("div", {
                    className: "max-md:flex max-md:flex-col gap-6",
                    children: (0, i.jsx)(a.EY, {
                      animation: "none",
                      className: "max-w-[48ch] !text-sm max-md:!text-[14px]",
                      children:
                        "Effortless excellence drives us. We combine deliberate action, innovative approaches, and disruptive execution, making us the partner of choice for those who dare to dream big. Ready to rise with us? Contact us to disrupt the future of innovation together.",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(o.Nav, {
                        className: "mb-8",
                        contactAs: "link",
                        isDynamic: !1,
                      }),
                      (0, i.jsx)(o.SocialMedia, {}),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("hr", {
                className: "w-full border-0 h-0",
                style: {
                  borderImageSource:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(212, 156, 77, 0.5) 20.24%, rgba(212, 156, 77, 0.5) 50%, rgba(212, 156, 77, 0.5) 79.61%, rgba(0, 0, 0, 0.5) 100%)",
                  borderImageSlice: 1,
                  borderTopWidth: "2px",
                },
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex max-md:flex-col md:justify-between gap-2 mt-8 md:mt-14",
                children: [
                  (0, i.jsx)("p", {
                    className: "text-sm text-jasper-orange font-light",
                    children:
                      "\xa9 2025 CONTINUOUS VENTURES. All rights reserved.",
                  }),
                  (0, i.jsx)(r(), {
                    className:
                      "text-sm text-jasper-orange font-light hover:underline",
                    href: "https://granitemena.com/",
                    children: "Developed by Granite MENA",
                  }),
                ],
              }),
            ],
          }),
        });
    },
    9369: (e, t, n) => {
      n.d(t, { default: () => f });
      var i = n(95155),
        s = n(25851),
        r = n(12115),
        a = n(7493),
        o = n(14441);
      let l = () => {
        let [e, t] = (0, r.useState)(!0),
          [n, s] = (0, r.useState)(0),
          [l, c] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              let e = window.scrollY;
              c(e > 0.25 * window.innerHeight && e > 250),
                t(n > e || e < 10),
                s(e);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, [n]),
          (0, i.jsx)("header", {
            className:
              "fixed box-border z-40 top-0 left-0 right-0 py-2 transition-all duration-300 "
                .concat(
                  l
                    ? "bg-black bg-opacity-10 backdrop-blur-lg text-white"
                    : "bg-transparent text-white",
                  " "
                )
                .concat(e ? "translate-y-0" : "-translate-y-full"),
            children: (0, i.jsx)(a.mc, {
              children: (0, i.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [(0, i.jsx)(o.Logo, {}), (0, i.jsx)(o.Nav, {})],
              }),
            }),
          })
        );
      };
      var c = n(73263),
        h = n(33755),
        v = n(4617),
        d = n.n(v),
        u = n(11478);
      let p = (e) => {
          let { onClose: t, buttonRef: n } = e,
            s = (0, r.useRef)(null),
            l = (0, r.useRef)(null);
          return (
            (0, h._p)(),
            (0, c.L)(
              () => {
                s.current &&
                  u.Ay.fromTo(
                    s.current,
                    { y: "-100%", opacity: 0 },
                    { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
                  );
              },
              { dependencies: [], scope: s }
            ),
            (0, i.jsx)("div", {
              ref: s,
              className:
                "fixed top-0 left-0 right-0 h-[100svh]  bg-black/50 backdrop-blur-[20px] text-white z-50",
              style: { transform: "translateY(0)", opacity: 1 },
              children: (0, i.jsx)(a.mc, {
                className: "h-full",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col justify-between h-full pt-2 pb-10",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "w-full flex justify-between items-center",
                      children: [
                        (0, i.jsx)(o.Logo, { className: "w-[84px]" }),
                        (0, i.jsx)("button", {
                          ref: l,
                          "aria-label": "Close menu",
                          onClick: () => {
                            if (!s.current || !l.current || !n.current) return;
                            let e = u.Ay.timeline({ onComplete: t });
                            e.to(l.current, {
                              rotation: 180,
                              scale: 0.7,
                              duration: 0.3,
                              ease: "power2.in",
                            }),
                              e.to(
                                s.current,
                                {
                                  y: "-100%",
                                  opacity: 0,
                                  duration: 0.5,
                                  ease: "power2.inOut",
                                },
                                0
                              );
                          },
                          children: (0, i.jsxs)("svg", {
                            fill: "none",
                            height: "24",
                            viewBox: "0 0 24 24",
                            width: "24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, i.jsx)("path", {
                                d: "M3 3.27319L21 20.2732",
                                stroke: "white",
                                strokeLinecap: "round",
                                strokeWidth: "2",
                              }),
                              (0, i.jsx)("path", {
                                d: "M21 3.27319L3 20.2732",
                                stroke: "white",
                                strokeLinecap: "round",
                                strokeWidth: "2",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.Nav, {
                      className: "flex flex-col !gap-0",
                      contactAs: "link",
                      linkClassName:
                        "relative uppercase text-2xl text-center  after:content-[''] after:block after:w-16 after:h-[1px] after:bg-white  after:bg-opacity-20 after:my-[min(4vh,40px)] after:mx-auto last:after:hidden",
                    }),
                    (0, i.jsx)(o.SocialMedia, { className: "mx-auto" }),
                  ],
                }),
              }),
            })
          );
        },
        m = () => {
          let [e, t] = (0, r.useState)(!1),
            n = (0, r.useRef)(null),
            s = (0, r.useRef)(null),
            [l, c] = (0, r.useState)(!0),
            [h, v] = (0, r.useState)(0),
            [m, f] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            let e = () => {
              let e = window.scrollY;
              f(e > 0.25 * window.innerHeight), c(h > e || e < 10), v(e);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, [h]),
            (0, r.useEffect)(() => {
              var t, n, i, s;
              e
                ? null === (t = (n = window).destroyLenis) ||
                  void 0 === t ||
                  t.call(n)
                : null === (i = (s = window).initLenis) ||
                  void 0 === i ||
                  i.call(s);
            }, [e]);
          let x = () => {
            s.current &&
              u.Ay.to(s.current.children, {
                scaleX: 1,
                stagger: 0.1,
                duration: 0.3,
                ease: "power2.out",
              });
          };
          return (0, i.jsx)("header", {
            ref: n,
            className:
              "fixed z-40 top-0 left-0 right-0 py-4 transition-all duration-300 w-[100vw] "
                .concat(
                  m
                    ? "bg-black bg-opacity-10 backdrop-blur-lg"
                    : "bg-gradient-to-b from-black/75 via-black/50 to-transparent",
                  " "
                )
                .concat(l ? "translate-y-0" : "-translate-y-full"),
            children: (0, i.jsxs)(a.mc, {
              children: [
                (0, i.jsxs)("div", {
                  className: d()(
                    "flex justify-between items-center transition-opacity",
                    { "opacity-0": e }
                  ),
                  children: [
                    (0, i.jsx)(o.Logo, { className: "w-[84px]" }),
                    (0, i.jsxs)("button", {
                      ref: s,
                      "aria-label": "Open menu",
                      className: "w-6 flex flex-col gap-[6px]",
                      onClick: () => {
                        s.current &&
                          u.Ay.timeline({
                            onComplete: () => {
                              t(!0);
                            },
                          }).to(s.current.children, {
                            scaleX: 0,
                            stagger: 0.1,
                            duration: 0.3,
                            ease: "power2.inOut",
                          });
                      },
                      children: [
                        (0, i.jsx)("span", {
                          className: "block w-full h-[2px] bg-white",
                        }),
                        (0, i.jsx)("span", {
                          className: "block w-full h-[2px] bg-white",
                        }),
                        (0, i.jsx)("span", {
                          className: "block w-full h-[2px] bg-white",
                        }),
                      ],
                    }),
                  ],
                }),
                e &&
                  (0, i.jsx)(p, {
                    buttonRef: s,
                    onClose: () => {
                      x(), t(!1);
                    },
                  }),
              ],
            }),
          });
        },
        f = () => {
          let { isMD: e, innerWidth: t } = (0, s.A)();
          return t
            ? (0, i.jsx)(i.Fragment, {
                children: e ? (0, i.jsx)(l, {}) : (0, i.jsx)(m, {}),
              })
            : (0, i.jsx)(i.Fragment, {});
        };
    },
    24907: (e, t, n) => {
      n.d(t, { default: () => c });
      var i = n(95155),
        s = n(4617),
        r = n.n(s),
        a = n(12115),
        o = n(7493),
        l = n(17994);
      let c = (e) => {
        let {
            className: t,
            linkClassName: n,
            contactAs: s = "button",
            isDynamic: c = !0,
          } = e,
          [h, v] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          if (!c) return;
          let e = document.querySelector("#fadeToBlack"),
            t = () => {
              let t = window.scrollY > 250,
                n = !1;
              e && (n = e.getBoundingClientRect().top <= 0), v(t && n);
            };
          return (
            window.addEventListener("scroll", t),
            t(),
            () => {
              window.removeEventListener("scroll", t);
            }
          );
        }, [c]);
        let d =
          c && h
            ? "text-black hover:text-jasper-orange"
            : "text-white hover:text-jasper-orange";
        return (0, i.jsxs)("nav", {
          "aria-label": "Main navigation",
          className: r()("flex gap-6 md:gap-6 items-center flex-wrap ", t),
          children: [
            (0, i.jsx)(o.GT, {
              ariaCurrentPage: !0,
              className: r()(d, n, "px-4 transition-all duration-300"),
              href: "/",
              transitionEffect: l.zO,
              children: "Home",
            }),
            (0, i.jsx)(o.GT, {
              className: r()(d, n, "px-4 transition-all duration-300"),
              href: "/disruption-and-intelligence",
              transitionEffect: l.zO,
              children: "D&I",
            }),
            (0, i.jsx)(o.GT, {
              className: r()(d, n, "px-4 transition-all duration-300"),
              href: "/news",
              transitionEffect: l.zO,
              children: "News",
            }),
            "link" === s &&
              (0, i.jsx)(o.GT, {
                className: r()(d, n),
                href: "/contact",
                transitionEffect: l.zO,
                children: "Contact",
              }),
            "button" === s &&
              (0, i.jsx)(o.U, {
                "aria-label": "Contact us",
                className: h ? "!bg-jasper-orange" : "",
                href: "/contact",
                transitionEffect: l.zO,
                variant: "transparent",
                children: "Contact",
              }),
          ],
        });
      };
    },
    34311: (e, t, n) => {
      n.d(t, { default: () => v });
      var i = n(95155),
        s = n(4617),
        r = n.n(s),
        a = n(5565),
        o = n(48173),
        l = n.n(o),
        c = n(72687),
        h = n(7493);
      let v = (e) => {
        let { className: t } = e;
        return (0, i.jsxs)("ul", {
          className: r()("flex gap-4 md:justify-end", t),
          children: [
            (0, i.jsx)("li", {
              children: (0, i.jsx)(l(), {
                href: "https://www.instagram.com/continuous.vc",
                children: (0, i.jsx)(h.hh, {
                  animate: !1,
                  className:
                    "max-md:w-10 max-md:h-10 max-md:p-0 cursor-pointer transition-all duration-300 hover:scale-[110%]",
                  children: (0, i.jsx)(a.default, {
                    alt: "Instagram",
                    className: "max-md:w-4 max-md:h-4 ",
                    height: 24,
                    src: c.A.instagram,
                    width: 24,
                  }),
                }),
              }),
            }),
            (0, i.jsx)("li", {
              children: (0, i.jsx)(l(), {
                href: "https://www.linkedin.com/company/continuousventures/",
                children: (0, i.jsx)(h.hh, {
                  animate: !1,
                  className:
                    "max-md:w-10 max-md:h-10 max-md:p-0 cursor-pointer transition-all duration-300 hover:scale-[110%]",
                  children: (0, i.jsx)(a.default, {
                    alt: "Linkedin",
                    className: "max-md:w-4 max-md:h-4",
                    height: 24,
                    src: c.A.linkedin,
                    width: 24,
                  }),
                }),
              }),
            }),
            (0, i.jsx)("li", {
              children: (0, i.jsx)(l(), {
                href: "https://www.facebook.com/continuous.vc/",
                children: (0, i.jsx)(h.hh, {
                  animate: !1,
                  className:
                    "max-md:w-10 max-md:h-10 max-md:p-0 cursor-pointer transition-all duration-300 hover:scale-[110%]",
                  children: (0, i.jsx)(a.default, {
                    alt: "Facebook",
                    className: "max-md:w-4 max-md:h-4",
                    height: 24,
                    src: c.A.fb,
                    width: 24,
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    14441: (e, t, n) => {
      n.r(t),
        n.d(t, {
          ArticleCard: () => f,
          Footer: () => r.default,
          Header: () => s.default,
          Logo: () => u,
          Nav: () => i.default,
          SocialMedia: () => x.default,
        });
      var i = n(24907),
        s = n(9369),
        r = n(87579),
        a = n(95155),
        o = n(5565),
        l = n(48173),
        c = n.n(l),
        h = n(12115),
        v = n(72687);
      let d = (0, h.forwardRef)((e, t) => {
        let { className: n } = e;
        return (0, a.jsx)(c(), {
          ref: t,
          href: "/",
          children: (0, a.jsx)(o.default, {
            alt: "Continuous ventures",
            className: n,
            height: 64,
            src: v.A.logo,
            width: 106,
          }),
        });
      });
      d.displayName = "Logo";
      let u = d;
      var p = n(30113),
        m = n(47395);
      let f = (e) => {
        var t, n, i, s, r, l, h, v, d, u, f, x, g, w, b, y, M, z;
        let { post: S } = e,
          P = (0, p.H)(S.first_publication_date),
          T = (0, m.GP)(P, "dd"),
          D = (0, m.GP)(P, "MMM"),
          A = (0, m.GP)(P, "yy");
        return (0, a.jsx)("article", {
          className: "relative w-full md:max-w-[420px] bg-white bg-opacity-10",
          children: (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)(c(), {
                className: "absolute inset-0",
                href: "/news/".concat(S.uid),
              }),
              (0, a.jsxs)("div", {
                className: "p-6",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex justify-between items-start mb-6",
                    children: [
                      (0, a.jsx)("time", {
                        dateTime: "".concat(A, "-").concat(D, "-").concat(T),
                        children: (0, a.jsx)("strong", {
                          className:
                            "font-semibold text-transparent font-mosvita text-[64px] md:text-[96px] stroke-[1px] stroke-white leading-none",
                          style: { WebkitTextStroke: "2px white" },
                          children: T,
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "font-light text-right max-md:text-sm",
                        children: [
                          (0, a.jsx)("p", {
                            children: (0, a.jsxs)("time", {
                              dateTime: "".concat(A, "-").concat(D),
                              children: [D, " / ", A],
                            }),
                          }),
                          (0, a.jsx)("span", { children: S.tags[0] }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("h3", {
                    children:
                      null === (s = S.data) || void 0 === s
                        ? void 0
                        : null === (i = s.slices) || void 0 === i
                        ? void 0
                        : null === (n = i[0]) || void 0 === n
                        ? void 0
                        : null === (t = n.primary) || void 0 === t
                        ? void 0
                        : t.title,
                  }),
                  (0, a.jsx)("address", {
                    className: "text-sm opacity-50 not-italic",
                    children:
                      null === (v = S.data) || void 0 === v
                        ? void 0
                        : null === (h = v.slices) || void 0 === h
                        ? void 0
                        : null === (l = h[0]) || void 0 === l
                        ? void 0
                        : null === (r = l.primary) || void 0 === r
                        ? void 0
                        : r.author,
                  }),
                ],
              }),
              (null === (x = S.data) || void 0 === x
                ? void 0
                : null === (f = x.slices) || void 0 === f
                ? void 0
                : null === (u = f[0]) || void 0 === u
                ? void 0
                : null === (d = u.primary) || void 0 === d
                ? void 0
                : d.post_image.url) &&
                (0, a.jsx)(o.default, {
                  alt:
                    (null === (g = S.data.slices[0]) || void 0 === g
                      ? void 0
                      : g.primary.post_image.alt) || "",
                  className: "h-[320px] w-full object-cover",
                  height:
                    null === (b = S.data.slices[0]) || void 0 === b
                      ? void 0
                      : null === (w = b.primary.post_image.dimensions) ||
                        void 0 === w
                      ? void 0
                      : w.height,
                  quality: 70,
                  src:
                    null === (y = S.data.slices[0]) || void 0 === y
                      ? void 0
                      : y.primary.post_image.url,
                  width:
                    null === (z = S.data.slices[0]) || void 0 === z
                      ? void 0
                      : null === (M = z.primary.post_image.dimensions) ||
                        void 0 === M
                      ? void 0
                      : M.width,
                }),
            ],
          }),
        });
      };
      var x = n(34311);
    },
    32020: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/chart.02b1720e.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    21414: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/fb.1b07f87f.svg",
        height: 27,
        width: 28,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    52868: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/instagram.c0f262f7.svg",
        height: 29,
        width: 28,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    71928: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/linkedin.ff0fbe60.svg",
        height: 23,
        width: 22,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    78451: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/logo.f3e83419.svg",
        height: 240,
        width: 384,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    73130: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/paper-box.cb959eef.svg",
        height: 21,
        width: 25,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    84779: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/plant.99ff0368.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    57682: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/puzzle.612b07c5.svg",
        height: 25,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    97802: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/rabbit.e443c27e.svg",
        height: 25,
        width: 25,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    63274: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/rocket.bc84ebeb.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    91270: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/seek.995a005f.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
