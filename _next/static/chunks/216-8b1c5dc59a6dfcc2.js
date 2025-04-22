(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [216],
  {
    19257: (e, t, s) => {
      "use strict";
      s.d(t, { B: () => w, E: () => C });
      var a = s(95155),
        i = s(81860),
        l = s(45967),
        r = s(10643),
        n = s(12115),
        d = s(69606),
        o = s(7493),
        c = s(33760),
        m = s(4617),
        h = s.n(m);
      let u = (e) => {
        let {
            options: t,
            placeholder: s = "Choose Option",
            disabled: i = !1,
            className: l = "",
          } = e,
          { value: r, onChange: n } = e.standalone
            ? { value: e.value, onChange: e.onChange }
            : e.field;
        return (0, a.jsxs)(c.bL, {
          disabled: i,
          value: r,
          onOpenChange: (e) => {
            var t, s, a, i;
            e
              ? null === (t = (s = window).destroyLenis) ||
                void 0 === t ||
                t.call(s)
              : null === (a = (i = window).initLenis) ||
                void 0 === a ||
                a.call(i);
          },
          onValueChange: n,
          children: [
            (0, a.jsxs)(c.l9, {
              className:
                "inline-flex items-center justify-between text-[#5c5c5c] text-sm font-light bg-[#F4F4F4] px-4 py-[11px] w-full max-w-[300px] outline-none ".concat(
                  l
                ),
              children: [
                (0, a.jsx)(c.WT, { placeholder: s }),
                (0, a.jsx)(c.In, {
                  className: "transition-transform duration-200",
                  children: (0, a.jsx)("svg", {
                    fill: "none",
                    height: "6",
                    viewBox: "0 0 14 8",
                    width: "12",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                      d: "M1 1L7 7L13 1",
                      stroke: "#5C5C5C",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(c.ZL, {
              children: (0, a.jsx)(c.UC, {
                className:
                  "z-50 bg-white border border-black border-opacity-20 shadow-md text-[#5c5c5c] text-sm font-light w-[var(--radix-select-trigger-width)] max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent",
                position: "popper",
                sideOffset: 8,
                children: (0, a.jsx)(c.LM, {
                  className: "px-4 py-3",
                  children: t.map((e) =>
                    (0, a.jsxs)(
                      c.q7,
                      {
                        className: h()(
                          "relative flex hover:bg-silver-chalice items-center gap-2 px-3 py-2 outline-none cursor-pointer",
                          { "bg-[#f4f4f4]": e.value === r }
                        ),
                        value: e.value,
                        children: [
                          (0, a.jsx)("div", {
                            className: h()(
                              "flex items-center justify-center border border-jasper-orange w-3 h-3",
                              { "bg-jasper-orange": e.value === r }
                            ),
                            children:
                              e.value === r &&
                              (0, a.jsx)("svg", {
                                fill: "none",
                                height: "6",
                                viewBox: "0 0 8 6",
                                width: "8",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                  d: "M6.66878 1L3.00212 4.66667L1.33545 3",
                                  stroke: "white",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                          }),
                          (0, a.jsx)(c.p4, { children: e.label }),
                        ],
                      },
                      e.value
                    )
                  ),
                }),
              }),
            }),
          ],
        });
      };
      var x = s(19938);
      let p = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
        f = x.Ik().shape({
          firstName: x.Yj().required("First Name is required"),
          lastName: x.Yj().required("Last Name is required"),
          email: x.Yj().email("Invalid email").required("Email is required"),
          phonePrefix: x.Yj().required("Prefix is required"),
          phone: x
            .Yj()
            .trim()
            .matches(
              /^(\+?\d{1,4})?[-.\s]?(\d{5,15})$/,
              "Invalid phone number"
            ),
          companyName: x.Yj().required("Company Name is required"),
          industry: x.Yj().required("Industry is required"),
          jobTitle: x.Yj().required("Job Title is required"),
          teamSize: x.Yj().required("Team Size is required"),
          startupPhase: x.Yj().required("Startup Phase is required"),
          investmentAsk: x.Yj().required("Investment Ask is required"),
          location: x.Yj().required("Location is required"),
          website: x
            .Yj()
            .test({
              message: "Invalid URL format",
              test: (e) => !e || "" === e.trim() || p.test(e),
            }),
          pitchdeckLink: x
            .Yj()
            .required("Pitch Deck Link is required")
            .test({
              message: "Invalid URL format",
              test: (e) => !e || "" === e.trim() || p.test(e),
            }),
          referralSource: x.Yj(),
          message: x.Yj().required("Message is required"),
        });
      var v = s(73263),
        g = s(11478),
        j = s(25415);
      g.os.registerPlugin(j.u);
      let b = (0, n.memo)((e) => {
          let {
              title: t,
              children: s,
              step: i,
              onSubmit: l,
              totalSteps: r,
              buttonText: d = "Submit Form",
              message: c,
              messageType: m = "error",
            } = e,
            h = (0, n.useRef)(null),
            u = (0, n.useRef)(null),
            x = (0, n.useRef)(null);
          return (
            (0, v.L)(() => {
              let e = g.os.timeline({
                scrollTrigger: {
                  trigger: h.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              });
              e.fromTo(
                u.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
              ),
                e.fromTo(
                  x.current,
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                  "-=0.3"
                );
            }, []),
            (0, a.jsxs)("div", {
              ref: h,
              className: "relative flex max-md:flex-col md:justify-between",
              children: [
                (0, a.jsx)("div", {
                  ref: u,
                  children: (0, a.jsxs)(o.hE, {
                    animation: "none",
                    className:
                      "!text-[#717171] self-start !leading-[1] max-md:mb-6",
                    size: "small",
                    variant: "h3",
                    children: [
                      "Step ",
                      i + 1,
                      "/",
                      r,
                      " ",
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("span", {
                        className:
                          "text-sm md:text-base font-bold text-[#262626]",
                        children: t,
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  ref: x,
                  className: "w-full max-w-[720px]",
                  children: (0, a.jsxs)("form", {
                    action: "https://api.web3forms.com/submit",
                    className:
                      "border p-5 md:py-9 md:px-12 space-y-2 md:space-y-6",
                    method: "POST",
                    onSubmit: l,
                    children: [
                      s,
                      l &&
                        (0, a.jsx)("div", {
                          className:
                            "flex md:justify-end md:items-stretch max-md:flex-col",
                          children: (0, a.jsxs)("div", {
                            className: "flex flex-col items-end w-full",
                            children: [
                              (0, a.jsx)(o.$n, {
                                className:
                                  "hover:!text-white !text-jasper-orange",
                                type: "submit",
                                variant: "transparent",
                                children: d,
                              }),
                              c &&
                                (0, a.jsx)("p", {
                                  className: "text-sm mt-2 ".concat(
                                    (() => {
                                      switch (m) {
                                        case "error":
                                        default:
                                          return "text-red-500";
                                        case "success":
                                          return "text-green-500";
                                        case "info":
                                          return "text-blue-500";
                                      }
                                    })()
                                  ),
                                  children: c,
                                }),
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            })
          );
        }),
        w = () => {
          let [e, t] = (0, n.useState)(0),
            [s, c] = (0, n.useState)(!1),
            {
              formState: { errors: m, isSubmitted: h },
              register: x,
              handleSubmit: p,
              control: v,
              getFieldState: g,
              reset: j,
            } = (0, d.mN)({
              resolver: (0, i.t)(f),
              mode: "onSubmit",
              shouldFocusError: !1,
              defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                phonePrefix: "+971",
                phone: "",
                companyName: "",
                industry: "",
                jobTitle: "",
                teamSize: "",
                startupPhase: "",
                investmentAsk: "",
                location: "",
                website: "",
                pitchdeckLink: "",
                referralSource: "",
                message: "",
              },
            }),
            [w, y] = (0, n.useState)(!1),
            { submit: N } = (0, r.A)({
              access_key: "e94e6320-0af4-4e59-9551-7aff7446239d",
              settings: {
                from_name: "** CONTINUOUS Website **",
                subject: "New In",
              },
              onSuccess: (e) => {
                y(!0),
                  j(),
                  t(0),
                  (0, l.u)("Form Success"),
                  (window.dataLayer = window.dataLayer || []),
                  window.dataLayer.push({
                    event: "web3forms_submission",
                    formID: "contact-form",
                    status: "success",
                    response: e,
                  });
              },
              onError: (e) => {
                y(!1),
                  alert(e),
                  (0, l.u)("Form Failure"),
                  (window.dataLayer = window.dataLayer || []),
                  window.dataLayer.push({
                    event: "web3forms_submission",
                    formID: "contact-form",
                    status: "error",
                    errorMessage: e,
                  });
              },
            });
          return (0, a.jsx)(o.wn, {
            className: "bg-white !py-12 md:!py-[132px]",
            id: "contact",
            children: (0, a.jsxs)(o.mc, {
              children: [
                w &&
                  (0, a.jsxs)("div", {
                    className:
                      "px-6 py-8 md:py-[111px] md:px-12 border border-black border-opacity-20",
                    children: [
                      (0, a.jsx)("h3", {
                        className:
                          "font-mosvita font-normal text-2xl md:text-4xl mb-4 text-jasper-orange",
                        children: "Thank You for Submitting Your Pitch!",
                      }),
                      (0, a.jsx)(o.EY, {
                        animation: "none",
                        children:
                          "Your ambition fuels innovation, and we're excited to explore what's next. Our team will review your pitch with the attention it deserves, and we'll be in touch soon. The future is built by those who dare—let's make an impact together.",
                      }),
                    ],
                  }),
                !w &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex gap-4 max-md:flex-col md:justify-between mb-8 md:mb-14",
                        id: "fadeToBlack",
                        children: [
                          (0, a.jsx)(o.hE, {
                            animation: "none",
                            className: "!text-[#111] mb-4",
                            variant: "h2",
                            children: "Get in Touch",
                          }),
                          (0, a.jsxs)("div", {
                            className: "max-w-[640px]",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col md:flex-col md:gap-4 mb-4 transform:none md:transform md:-translate-x-8",
                                children: [
                                  (0, a.jsxs)(o.EY, {
                                    animation: "none",
                                    className:
                                      "text-xs md:text-sm mb-2 md:mb-0 flex items-start",
                                    children: [
                                      (0, a.jsx)(o.hh, {
                                        animate: !1,
                                        className:
                                          "rounded-none !p-0 !inline-flex !items-center !justify-center !bg-quick-silver text-white text-sm font-light w-6 h-6 mr-2 flex-shrink-0",
                                        children: (0, a.jsx)("span", {
                                          className:
                                            "flex items-center justify-center w-full h-full leading-none",
                                          children: "I",
                                        }),
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children:
                                          "Submit your pitch by filling in the form below.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)(o.EY, {
                                    animation: "none",
                                    className:
                                      "text-xs md:text-sm mb-2 md:mb-0 flex items-start",
                                    children: [
                                      (0, a.jsx)(o.hh, {
                                        animate: !1,
                                        className:
                                          "rounded-none !p-0 !inline-flex !items-center !justify-center !bg-quick-silver text-white text-sm font-light w-6 h-6 mr-2 flex-shrink-0",
                                        children: (0, a.jsx)("span", {
                                          className:
                                            "flex items-center justify-center w-full h-full leading-none",
                                          children: "II",
                                        }),
                                      }),
                                      (0, a.jsxs)("span", {
                                        className: "text-sm",
                                        children: [
                                          "The D&I team will thoroughly review your pitch. If successful, you will be invited for a",
                                          " ",
                                          (0, a.jsxs)("span", {
                                            className:
                                              "relative inline-block group",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className:
                                                  "cursor-help underline font-medium",
                                                children: "Glimpse ⓘ",
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10",
                                                children:
                                                  "A Glimpse is a startup's opportunity to present its business idea, value proposition, and growth potential to our D&I team. When invited, the startup typically delivers a concise and compelling presentation outlining its problem-solving approach, market opportunity, business model, competitive advantage, financial projections, and funding needs giving the D&I team a Glimpse into why and how we are going to disrupt and innovate together.",
                                              }),
                                            ],
                                          }),
                                          " ",
                                          "with the D&I team where you can present your pitch, and interact with the team in a Q&A. If unsuccessful, the D&I team will provide you with a complete scorecard review to highlight the areas which need improvement.",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)(o.EY, {
                                    animation: "none",
                                    className:
                                      "text-xs md:text-sm mb-2 md:mb-0 flex items-start",
                                    children: [
                                      (0, a.jsx)(o.hh, {
                                        animate: !1,
                                        className:
                                          "rounded-none !p-0 !inline-flex !items-center !justify-center !bg-quick-silver text-white text-sm font-light w-6 h-6 mr-2 flex-shrink-0",
                                        children: (0, a.jsx)("span", {
                                          className:
                                            "flex items-center justify-center w-full h-full leading-none",
                                          children: "III",
                                        }),
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children:
                                          "If successful, the D&I team will work closely with your team to complete a due diligence process. We will work with you every step of the way to ensure transparency and guidance throughout the exciting process.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)(o.EY, {
                                animation: "none",
                                className: "!text-sm",
                                children:
                                  "We look forward to receiving your submission!",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "w-full h-[2px] bg-[#DCDCDC] mb-8 md:mb-14",
                        children: (0, a.jsx)("span", {
                          className: "block bg-jasper-orange h-[2px]",
                          style: { width: "".concat((e / 4) * 100, "%") },
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-8 md:space-y-14",
                        children: [
                          (0, a.jsxs)(b, {
                            step: 0,
                            title: "Personal Information",
                            totalSteps: 4,
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex md:gap-4 max-md:flex-col",
                                children: [
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("firstName"),
                                    labelProps: {
                                      required: !0,
                                      children: "First Name",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "name",
                                        ...x("firstName"),
                                      }),
                                  }),
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("lastName"),
                                    labelProps: {
                                      required: !0,
                                      children: "Last Name",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "name",
                                        ...x("lastName"),
                                      }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex md:gap-4 max-md:flex-col",
                                children: [
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full md:w-1/2",
                                    fieldState: g("email"),
                                    labelProps: {
                                      required: !0,
                                      children: "Email",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "email",
                                        ...x("email"),
                                      }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex gap-2 w-full md:w-1/2",
                                    children: [
                                      (0, a.jsx)(o.zB, {
                                        className: "w-[100px] flex-shrink-0",
                                        fieldState: g("phonePrefix"),
                                        labelProps: {
                                          required: !0,
                                          children: "Prefix",
                                        },
                                        children: (e) =>
                                          (0, a.jsx)(o.pd, {
                                            defaultValue: "+971",
                                            id: e,
                                            placeholder: "",
                                            type: "text",
                                            ...x("phonePrefix"),
                                          }),
                                      }),
                                      (0, a.jsx)(o.zB, {
                                        className: "w-full",
                                        fieldState: g("phone"),
                                        labelProps: { children: "Phone" },
                                        children: (e) =>
                                          (0, a.jsx)(o.pd, {
                                            id: e,
                                            placeholder: "",
                                            type: "tel",
                                            ...x("phone"),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)(b, {
                            step: 1,
                            title: "Company Details",
                            totalSteps: 4,
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex md:gap-4 max-md:flex-col",
                                children: [
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("companyName"),
                                    labelProps: {
                                      required: !0,
                                      children: "Company Name",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "text",
                                        ...x("companyName"),
                                      }),
                                  }),
                                  (0, a.jsx)(d.xI, {
                                    control: v,
                                    name: "industry",
                                    render: (e) => {
                                      let { field: t } = e,
                                        i = (e) => {
                                          if ("Other" === e) {
                                            var s, a;
                                            c(!0),
                                              null ===
                                                (s = (a = window).initLenis) ||
                                                void 0 === s ||
                                                s.call(a),
                                              t.onChange("");
                                          } else c(!1), t.onChange(e);
                                        };
                                      return (0, a.jsx)(o.zB, {
                                        className: "w-full",
                                        fieldState: g("industry"),
                                        labelProps: {
                                          required: !0,
                                          children: "Industry",
                                        },
                                        showSuccess: !s,
                                        children: s
                                          ? (0, a.jsxs)("div", {
                                              className: "flex items-stretch",
                                              children: [
                                                (0, a.jsx)(o.pd, {
                                                  placeholder: "",
                                                  type: "text",
                                                  ...x("industry"),
                                                  className: "flex-grow w-full",
                                                }),
                                                (0, a.jsx)("button", {
                                                  className:
                                                    "bg-jasper-orange px-2",
                                                  type: "button",
                                                  onClick: () => {
                                                    c(!1), t.onChange("");
                                                  },
                                                  children: (0, a.jsxs)("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    height: "12",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    width: "12",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    children: [
                                                      (0, a.jsx)("line", {
                                                        x1: "18",
                                                        x2: "6",
                                                        y1: "6",
                                                        y2: "18",
                                                      }),
                                                      (0, a.jsx)("line", {
                                                        x1: "6",
                                                        x2: "18",
                                                        y1: "6",
                                                        y2: "18",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            })
                                          : (0, a.jsx)(u, {
                                              className: "max-w-full",
                                              field: {
                                                ...t,
                                                onChange: (e) => i(e),
                                              },
                                              options: [
                                                {
                                                  label:
                                                    "Technology & Software",
                                                  value:
                                                    "Technology & Software",
                                                },
                                                {
                                                  label: "Fintech & Payments",
                                                  value: "Fintech & Payments",
                                                },
                                                {
                                                  label: "Healthcare & MedTech",
                                                  value: "Healthcare & MedTech",
                                                },
                                                {
                                                  label:
                                                    "Sustainability & Circular Economy",
                                                  value:
                                                    "Sustainability & Circular Economy",
                                                },
                                                {
                                                  label:
                                                    "Mobility & Transportation",
                                                  value:
                                                    "Mobility & Transportation",
                                                },
                                                {
                                                  label:
                                                    "E-Commerce & Retail Tech",
                                                  value:
                                                    "E-Commerce & Retail Tech",
                                                },
                                                {
                                                  label:
                                                    "PropTech & Real Estate Innovation",
                                                  value:
                                                    "PropTech & Real Estate Innovation",
                                                },
                                                {
                                                  label:
                                                    "EdTech & Workforce Solutions",
                                                  value:
                                                    "EdTech & Workforce Solutions",
                                                },
                                                {
                                                  label:
                                                    "Entertainment, Media & Gaming",
                                                  value:
                                                    "Entertainment, Media & Gaming",
                                                },
                                                {
                                                  label:
                                                    "DeepTech & Industrial Innovation",
                                                  value:
                                                    "DeepTech & Industrial Innovation",
                                                },
                                                {
                                                  label:
                                                    "Hospitality, Travel & Tourism Tech",
                                                  value:
                                                    "Hospitality, Travel & Tourism Tech",
                                                },
                                                {
                                                  label: "FoodTech & AgriTech",
                                                  value: "FoodTech & AgriTech",
                                                },
                                                {
                                                  label:
                                                    "PetTech & Animal Welfare Solutions",
                                                  value:
                                                    "PetTech & Animal Welfare Solutions",
                                                },
                                                {
                                                  label: "Other",
                                                  value: "Other",
                                                },
                                              ],
                                            }),
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex md:gap-4 max-md:flex-col",
                                children: [
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("jobTitle"),
                                    labelProps: {
                                      required: !0,
                                      children: "Job Title",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "text",
                                        ...x("jobTitle"),
                                      }),
                                  }),
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("teamSize"),
                                    labelProps: {
                                      required: !0,
                                      children: "Team Size",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "text",
                                        ...x("teamSize"),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)(b, {
                            step: 2,
                            title: "Additional Information",
                            totalSteps: 4,
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex md:gap-4 max-md:flex-col",
                                children: [
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("startupPhase"),
                                    labelProps: {
                                      required: !0,
                                      children: "Startup Phase",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "text",
                                        ...x("startupPhase"),
                                      }),
                                  }),
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("investmentAsk"),
                                    labelProps: {
                                      required: !0,
                                      children: "Investment Ask",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "text",
                                        ...x("investmentAsk"),
                                      }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex md:gap-4 max-md:flex-col",
                                children: [
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("location"),
                                    labelProps: {
                                      required: !0,
                                      children: "Location",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "text",
                                        ...x("location"),
                                      }),
                                  }),
                                  (0, a.jsx)(o.zB, {
                                    className: "w-full",
                                    fieldState: g("website"),
                                    labelProps: {
                                      required: !1,
                                      children: "Website",
                                    },
                                    children: (e) =>
                                      (0, a.jsx)(o.pd, {
                                        id: e,
                                        placeholder: "",
                                        type: "url",
                                        ...x("website"),
                                      }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)(o.zB, {
                                className: "w-full",
                                fieldState: g("pitchdeckLink"),
                                labelProps: {
                                  required: !0,
                                  children: "Pitchdeck Link",
                                },
                                children: (e) =>
                                  (0, a.jsx)(o.pd, {
                                    id: e,
                                    placeholder: "",
                                    type: "url",
                                    ...x("pitchdeckLink"),
                                  }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)(b, {
                            message:
                              h && Object.keys(m).length > 0
                                ? "Please fill in all required fields correctly before submitting."
                                : "",
                            messageType: "error",
                            step: 3,
                            title: "Referred By",
                            totalSteps: 4,
                            onSubmit: (e) => {
                              e.preventDefault(), p(N)(e);
                            },
                            children: [
                              (0, a.jsx)("div", {
                                className: "flex md:gap-4 max-md:flex-col",
                                children: (0, a.jsx)(o.zB, {
                                  className: "w-full",
                                  fieldState: g("referralSource"),
                                  labelProps: { children: "Referral Source" },
                                  children: (e) =>
                                    (0, a.jsx)(o.pd, {
                                      id: e,
                                      placeholder: "",
                                      type: "text",
                                      ...x("referralSource"),
                                    }),
                                }),
                              }),
                              (0, a.jsx)(o.zB, {
                                className: "w-full",
                                fieldState: g("message"),
                                labelProps: {
                                  required: !0,
                                  children: "Message",
                                },
                                children: (e) =>
                                  (0, a.jsx)(o.TM, {
                                    id: e,
                                    placeholder: "",
                                    ...x("message"),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      var y = s(47395),
        N = s(34773);
      let k = [
          {
            city: "Dubai, UAE",
            timezone: "Asia/Dubai",
            address:
              "Office 302, Galadari Building 17 b, Dubai Production City",
            contact: "dubai@continuous.vc",
          },
          {
            city: "Dublin, Ireland",
            timezone: "Europe/Dublin",
            address: "26 Pembroke Street Upper, Dublin 2, D02 X361, IRL.",
            contact: "dublin@continuous.vc",
          },
          {
            city: "New York, USA",
            timezone: "America/New_York",
            address:
              "41st floor NYC Hub, 2 Grand Central Tower, 140 E 45th St, NY 10017",
            contact: "nyc@continuous.vc",
          },
        ],
        C = () => {
          let [e, t] = (0, n.useState)({}),
            s = (0, n.useRef)(null);
          (0, v.L)(
            () => {
              s.current &&
                g.os.fromTo(
                  s.current.children,
                  { opacity: 0, x: -100 },
                  {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.3,
                    scrollTrigger: {
                      trigger: s.current,
                      start: "top 80%",
                      end: "top 20%",
                      scrub: !0,
                      toggleActions: "play reverse play reverse",
                      markers: !1,
                    },
                  }
                );
            },
            { dependencies: [], scope: s }
          );
          let i = () => {
            t(
              k.reduce((e, t) => {
                let s = new Date(),
                  a = (0, N.L_)(s, t.timezone);
                return (e[t.city] = (0, y.GP)(a, "HH:mm")), e;
              }, {})
            );
          };
          return (
            (0, v.L)(() => {
              i();
              let e = setInterval(i, 6e4);
              return () => clearInterval(e);
            }, []),
            (0, a.jsx)("div", {
              ref: s,
              className: "mb-8",
              children: k.map((t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className:
                      "grid grid-cols-1 md:grid-cols-[3fr,1fr,1fr] gap-5 border-b border-opacity-25 border-quick-silver pt-4 pb-8 opacity-0",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex justify-between md:block",
                        children: [
                          (0, a.jsx)(o.hE, {
                            animation: "blur",
                            size: "small",
                            variant: "h3",
                            children: t.city,
                          }),
                          (0, a.jsx)("div", {
                            className: "md:hidden",
                            children: e[t.city]
                              ? (0, a.jsx)("time", {
                                  className: "text-sm font-light",
                                  children: e[t.city],
                                })
                              : "Loading...",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "hidden md:block",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-quick-silver text-sm font-light",
                            children: "Current time",
                          }),
                          e[t.city]
                            ? (0, a.jsx)("time", {
                                className: "text-sm font-light",
                                children: e[t.city],
                              })
                            : "Loading...",
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "md:block",
                        children: (0, a.jsxs)("address", {
                          className: "text-sm font-light not-italic",
                          children: [
                            t.address,
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)("span", {
                              className: "text-jasper-orange",
                              children: t.contact,
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  t.address
                )
              ),
            })
          );
        };
    },
    33581: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => v });
      var a = s(95155),
        i = s(79989),
        l = s(77711),
        r = s(5565),
        n = s(12115),
        d = s(84216),
        o = s(1247),
        c = s(15507),
        m = s(86140),
        h = s(31593),
        u = s(7493),
        x = s(20936),
        p = s.n(x);
      let f = (0, l.default)(
          () =>
            Promise.resolve()
              .then(s.bind(s, 14441))
              .then((e) => e.ArticleCard),
          { loadableGenerated: { webpack: () => [14441] } }
        ),
        v = (e) => {
          var t, s, l, x, v, g;
          let { page: j, relatedPosts: b } = e,
            { setPreloaderPercentage: w } = (0, h.R)(),
            { gl: y } = (0, m.A)(),
            N = (0, n.useRef)(null),
            k = (0, n.useRef)(null),
            [C, E] = (0, n.useState)(
              (null === (t = j.data.slices[0]) || void 0 === t
                ? void 0
                : t.primary.content) || []
            );
          return (
            (0, n.useEffect)(() => {
              var e;
              let t =
                null === (e = j.data.slices[0]) || void 0 === e
                  ? void 0
                  : e.primary.content;
              if (!t || 0 === t.length) return;
              let s = [],
                a = [];
              for (let [e, i] of t.entries())
                "image" === i.type
                  ? (a.push(i),
                    (t[e + 1] && "image" === t[e + 1].type) ||
                      (a.length > 1
                        ? s.push({ type: "carousel", imageGroup: [...a] })
                        : s.push(...a),
                      (a = [])))
                  : s.push(i);
              E(s);
            }, [j.data.slices]),
            (0, n.useEffect)(() => {
              w(100);
            }, [w]),
            (0, n.useEffect)(() => {
              if (y)
                return (
                  y.setPage("news", {
                    sectionHero: N.current,
                    placeHero: k.current,
                  }),
                  (y.onload = (e) => {
                    let { loaded: t, total: s } = e;
                    return w((t / s) * 100);
                  }),
                  y
                    .load()
                    .then(() => 0)
                    .catch(() => {
                      console.error("Not loaded");
                    }),
                  () => {
                    y.beforeNav();
                  }
                );
            }, [w, y]),
            (0, a.jsx)("main", {
              children: (0, a.jsxs)(u.wn, {
                ref: N,
                className: "md:py-[144px]",
                children: [
                  (0, a.jsxs)("div", {
                    ref: k,
                    className:
                      "relative w-full min-h-[600px] flex items-center md:items-end max-w-[1000px] mx-auto max-md:py-[120px] px-5 md:px-15 mb-14 md:mb-[450px]",
                    children: [
                      (0, a.jsx)("div", {
                        "aria-hidden": "true",
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                          backgroundImage: "url(".concat(
                            (null === (l = j.data.slices[0]) || void 0 === l
                              ? void 0
                              : null === (s = l.primary.post_image) ||
                                void 0 === s
                              ? void 0
                              : s.url) || "",
                            ")"
                          ),
                        },
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-black/90 to-transparent",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full relative z-10 md:translate-y-2/3 text-center",
                        children: [
                          (0, a.jsx)("button", {
                            className:
                              "py-2 px-4 md:py-3 md:px-6 bg-white bg-opacity-10 border border-white border-opacity-10 mb-4",
                            children: j.tags[0] || "",
                          }),
                          (0, a.jsx)(u.hE, {
                            animation: "none",
                            className:
                              "w-full !font-semibold !text-4xl md:!text-[96px] !leading-[1.2] mx-auto mb-6 md:mb-8",
                            children:
                              (null === (x = j.data.slices[0]) || void 0 === x
                                ? void 0
                                : x.primary.title) || "",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "font-light font-mosvita text-2xl md:text-4xl mb-2 md:mb-4",
                            children:
                              (null === (v = j.data.slices[0]) || void 0 === v
                                ? void 0
                                : v.primary.description) || "",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-sm md:text-lg font-light text-quick-silver",
                            children:
                              (null === (g = j.data.slices[0]) || void 0 === g
                                ? void 0
                                : g.primary.subdescription) || "",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(u.mc, {
                    className: "max-w-[880px] mb-14 md:mb-[220px]",
                    children: (0, a.jsx)("article", {
                      className: p().article,
                      children: (0, a.jsx)(i.$, {
                        components: {
                          carousel: (e) => {
                            let { node: t } = e;
                            return (0, a.jsx)("div", {
                              className: "mx-auto w-1/2",
                              children: (0, a.jsxs)(o.RC, {
                                loop: !0,
                                autoplay: {
                                  delay: 3e3,
                                  disableOnInteraction: !1,
                                },
                                className: "w-full relative",
                                modules: [d.Vx, d.Ij],
                                navigation: {
                                  nextEl: ".carousel-button-next",
                                  prevEl: ".carousel-button-prev",
                                },
                                slidesPerView: 1.1,
                                spaceBetween: 20,
                                children: [
                                  t.imageGroup.map((e, t) => {
                                    var s, i;
                                    return (0, a.jsx)(
                                      o.qr,
                                      {
                                        children: (0, a.jsxs)("div", {
                                          className: "relative",
                                          children: [
                                            (0, a.jsx)(r.default, {
                                              alt: e.alt || "",
                                              className:
                                                "w-full h-auto object-cover rounded",
                                              height:
                                                (null === (s = e.dimensions) ||
                                                void 0 === s
                                                  ? void 0
                                                  : s.height) || 500,
                                              src: e.url || "",
                                              width:
                                                (null === (i = e.dimensions) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.width) || 800,
                                            }),
                                            e.alt &&
                                              (0, a.jsx)("div", {
                                                className:
                                                  "text-center text-sm text-gray-400 mt-2",
                                                children: e.alt,
                                              }),
                                          ],
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "carousel-button-prev absolute left-2 top-1/2 z-10 bg-black/50 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer -translate-y-1/2",
                                    children: (0, a.jsx)("svg", {
                                      fill: "none",
                                      height: "16",
                                      viewBox: "0 0 7 11",
                                      width: "9",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        d: "M6 0.5L1 5.5L6 10.5",
                                        stroke: "white",
                                        strokeWidth: "2",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "carousel-button-next absolute right-2 top-1/2 z-10 bg-black/50 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer -translate-y-1/2",
                                    children: (0, a.jsx)("svg", {
                                      fill: "none",
                                      height: "16",
                                      viewBox: "0 0 7 11",
                                      width: "9",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        d: "M1 0.5L6 5.5L1 10.5",
                                        stroke: "white",
                                        strokeWidth: "2",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            });
                          },
                        },
                        field: C,
                      }),
                    }),
                  }),
                  !!(null == b ? void 0 : b.length) &&
                    (0, a.jsx)("aside", {
                      children: (0, a.jsxs)(u.mc, {
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center justify-between mb-6 md:mb-12",
                            children: [
                              (0, a.jsx)(u.hE, {
                                variant: "h2",
                                children: "Related News",
                              }),
                              (null == b ? void 0 : b.length) > 1 &&
                                (0, a.jsxs)("nav", {
                                  className: "flex gap-4 md:hidden",
                                  children: [
                                    (0, a.jsx)("button", {
                                      className: "swiper-button-prev p-2",
                                      children: (0, a.jsx)("svg", {
                                        fill: "none",
                                        height: "11",
                                        viewBox: "0 0 7 11",
                                        width: "7",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, a.jsx)("path", {
                                          d: "M6 0.5L1 5.5L6 10.5",
                                          stroke: "white",
                                          strokeWidth: "2",
                                        }),
                                      }),
                                    }),
                                    (0, a.jsx)("button", {
                                      className: "swiper-button-next p-2",
                                      children: (0, a.jsx)("svg", {
                                        fill: "none",
                                        height: "11",
                                        viewBox: "0 0 7 11",
                                        width: "7",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, a.jsx)("path", {
                                          d: "M1 0.5L6 5.5L1 10.5",
                                          stroke: "white",
                                          strokeWidth: "2",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, a.jsx)(o.RC, {
                            breakpoints: {
                              [c.A.MD]: { slidesPerView: 3, spaceBetween: 32 },
                            },
                            modules: [d.Vx],
                            navigation: {
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev",
                              disabledClass: "!opacity-50 cursor-not-allowed",
                            },
                            slidesPerView: 0.8,
                            spaceBetween: 12,
                            children: b.map((e) =>
                              (0, a.jsx)(
                                o.qr,
                                { children: (0, a.jsx)(f, { post: e }) },
                                e.id
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            })
          );
        };
    },
    18113: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var a = s(95155),
        i = s(12115),
        l = s(19257),
        r = s(86140),
        n = s(31593),
        d = s(7493);
      let o = () => {
        let e = (0, i.useRef)(null),
          t = (0, i.useRef)(null),
          { gl: s } = (0, r.A)(),
          { setPreloaderPercentage: o } = (0, n.R)();
        return (
          (0, i.useEffect)(() => {
            if (s)
              return (
                s.setPage("contact", {
                  sectionContact: e.current,
                  placeContact: t.current,
                }),
                (s.onload = (e) => {
                  let { loaded: t, total: s } = e;
                  return o((t / s) * 100);
                }),
                s
                  .load()
                  .then(() => 0)
                  .catch(() => {
                    console.error("Not loaded");
                  }),
                () => {
                  s.beforeNav();
                }
              );
          }, [o, s]),
          (0, a.jsxs)("main", {
            children: [
              (0, a.jsx)(d.wn, {
                ref: e,
                className: "relative md:pt-[220px] md:pb-20 pt-[120px] pb-10",
                children: (0, a.jsxs)(d.mc, {
                  children: [
                    (0, a.jsx)(d.hE, {
                      animation: "instant-blur",
                      animationTo: { duration: 0.3, stagger: 0.02 },
                      className: "w-2/3 mb-10 md:mb-16",
                      children:
                        "Your global partner in tech-driven venture accerleration, investment & disruption",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center md:gap-7 gap-4  uppercase font-mosvita",
                      children: [
                        (0, a.jsxs)("span", {
                          children: [
                            "Private",
                            (0, a.jsx)("br", {}),
                            "accelerator",
                          ],
                        }),
                        (0, a.jsx)("svg", {
                          fill: "none",
                          height: "39",
                          viewBox: "0 0 48 39",
                          width: "48",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, a.jsx)("path", {
                            d: "M47.064 30.152C42.52 35.528 37.016 38.28 30.808 38.28C27.032 38.28 22.936 36.936 19.032 34.184C15.768 36.36 12.824 37.448 10.008 37.448C4.312 37.448 0.344 33.48 0.344 27.976C0.344 22.6 3.928 18.376 11.096 15.24C11.48 10.824 12.824 7.624 15.64 4.616C18.264 1.864 21.592 0.327999 23.96 0.327999C26.52 0.327999 28.312 1.992 28.312 4.232C28.312 6.728 26.072 9.096 21.656 11.464C20.76 11.912 18.52 12.936 14.936 14.472C15.064 21.192 17.24 26.632 21.592 31.176C26.136 26.76 28.824 23.176 30.68 21.192C33.432 18.312 35.8 16.84 38.296 16.84C40.92 16.84 42.648 18.44 42.648 20.424C42.648 21.448 42.072 22.536 41.048 23.624C40.28 21.384 38.744 20.168 36.568 20.168C32.088 20.168 28.696 24.968 22.04 31.688C26.008 34.952 29.784 36.616 33.752 36.616C38.808 36.616 42.456 34.44 46.68 29.832L47.064 30.152ZM14.936 13.832C21.4 11.592 24.856 7.176 24.856 4.04C24.856 2.504 23.768 1.352 22.296 1.352C19.416 1.352 15.576 5.832 14.936 13.832ZM11.096 15.88C6.616 18.824 4.44 21.96 4.44 25.928C4.44 31.56 8.28 35.72 13.016 35.72C14.872 35.72 16.6 35.016 18.456 33.736C13.4 29.256 11.096 24.008 11.096 17.224C11.096 16.776 11.096 16.328 11.096 15.88Z",
                            fill: "#D49C4D",
                          }),
                        }),
                        (0, a.jsxs)("span", {
                          children: [
                            "Venture ",
                            (0, a.jsx)("br", {}),
                            "Capital",
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      ref: t,
                      className:
                        "absolute w-[100%] h-[100%] left-0 top-0 md:w-[50%] md:left-[50%]",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(l.B, {}),
            ],
          })
        );
      };
    },
    84953: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => m });
      var a = s(95155),
        i = s(11478),
        l = s(25415),
        r = s(12115),
        n = s(19257),
        d = s(86140),
        o = s(31593),
        c = s(7493);
      i.Ay.registerPlugin(l.u);
      let m = () => {
        let e = (0, r.useRef)(null),
          t = (0, r.useRef)(null),
          s = (0, r.useRef)(null),
          l = (0, r.useRef)(null),
          m = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          u = (0, r.useRef)(null),
          x = (0, r.useRef)(null),
          p = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          v = (0, r.useRef)(null),
          { gl: g } = (0, d.A)(),
          { setPreloaderPercentage: j } = (0, o.R)(),
          b = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (g)
              return (
                g.setPage("dni", {
                  sectionHero: e.current,
                  placeHero: t.current,
                  sectionList: s.current,
                  placeList1: l.current,
                  placeList2: m.current,
                  placeList3: h.current,
                  placeList4: u.current,
                  sectionTriple: x.current,
                  placeTriple: p.current,
                  sectionLocation: f.current,
                  placeLocation: v.current,
                }),
                (g.onload = (e) => {
                  let { loaded: t, total: s } = e;
                  return j((t / s) * 100);
                }),
                g
                  .load()
                  .then(() => 0)
                  .catch(() => {
                    console.error("Not loaded");
                  }),
                () => {
                  g.beforeNav();
                }
              );
          }, [j, g]),
          (0, r.useEffect)(() => {
            var e;
            let t =
              null === (e = b.current) || void 0 === e ? void 0 : e.children;
            t &&
              i.Ay.fromTo(
                t,
                { y: 100, opacity: 0, scale: 0.9 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.3,
                  stagger: 0.1,
                  ease: "power3.easeOut",
                  scrollTrigger: {
                    trigger: b.current,
                    start: "top 95%",
                    end: "65% 95%",
                    scrub: !0,
                    toggleActions: "play none none reverse",
                    markers: !0,
                  },
                }
              );
          }, []),
          (0, a.jsxs)("main", {
            children: [
              (0, a.jsx)(c.wn, {
                ref: e,
                className: "pb-[112px] md:pb-[174px]",
                children: (0, a.jsxs)(c.mc, {
                  className: "flex relative",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "pt-[499px] md:pt-[320px] md:w-[45%] max-md:text-center",
                      children: [
                        (0, a.jsxs)(c.hE, {
                          animation: "instant-blur",
                          animationTo: { duration: 0.3, stagger: 0.02 },
                          className: "md:mb-4 mb-2",
                          size: "large",
                          children: [
                            "Disruption & ",
                            (0, a.jsx)("br", {}),
                            " Intelligence Team",
                          ],
                        }),
                        (0, a.jsx)(c.EY, {
                          animation: "instant-blur",
                          animationTo: { duration: 0.3, stagger: 0.005 },
                          className: "md:mb-12 mb-8",
                          children:
                            "Built for entrepreneurs, by entrepreneurs, the D&I team consists of a COO, CTO, UX/UI Director, Senior Creative Brand Architect, Data Scientist, and Senior Growth and Marketing Strategist, to help you build every aspect of your startup. We provide hands-on mentorship and expertise across key business functions, ensuring that startups we invest in and mentor are fully equipped to scale and succeed. Our team consists of industry veterans with specialized skills that cover every aspect of startup growth - from operations and technology to branding, data, and marketing.",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      ref: t,
                      className:
                        "absolute inset-0 w-screen h-2/3 md:static md:w-[55%] md:h-screen p-4 z-[-1]",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(c.wn, {
                ref: s,
                className: "pb-15 md:py-[120px] md:relative",
                children: (0, a.jsxs)(c.mc, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "mb-20",
                      children: [
                        (0, a.jsx)(c.hE, {
                          animation: "blur",
                          className: "mb-4 md:max-w-[16ch]",
                          variant: "h2",
                          children: "A 360\xb0 Approach to Startup Success",
                        }),
                        (0, a.jsx)(c.EY, {
                          animation: "blur",
                          className: "mb-2 md:max-w-[54ch]",
                          children:
                            "With expertise spanning operations, technology, branding, data, and marketing, the D&I team is a powerhouse of support, ensuring every startup we invest in is built for resilience, scalability, and longterm success. Whether refining product-market fit, strengthening branding, or optimizing growth channels, we provide hands-on mentorship and strategic execution to maximize your startup's potential.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("ul", {
                      className:
                        "grid md:grid-cols-4 gap-y-[74px] gap-x-[clamp(20px,6vw,64px)]",
                      children: [
                        (0, a.jsx)("li", {
                          children: (0, a.jsxs)("div", {
                            className: "relative md:static",
                            children: [
                              (0, a.jsx)(c.hh, {
                                className:
                                  "w-10 md:w-14 h-10 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                                children: "I",
                              }),
                              (0, a.jsx)(c.hE, {
                                className: "mb-2 md:!text-2xl",
                                variant: "h3",
                                children: "Seed Funding",
                              }),
                              (0, a.jsx)(c.EY, {
                                className: "!text-sm",
                                children:
                                  "The focus is on ensuring the portfolio of companies gains traction and achieves a growth trajectory in appropriate markets.",
                              }),
                              (0, a.jsx)("div", {
                                ref: l,
                                className:
                                  "absolute inset-0 w-[50%] h-[100%] left-[50%] md:w-[100%] md:left-0",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsxs)("div", {
                            className:
                              "relative md:static max-md:flex max-md:flex-col max-md:items-end max-md:text-right",
                            children: [
                              (0, a.jsx)(c.hh, {
                                className:
                                  "w-10 md:w-14 h-10 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                                children: "II",
                              }),
                              (0, a.jsx)(c.hE, {
                                className: "mb-2 md:!text-2xl",
                                variant: "h3",
                                children: "Growth Funding",
                              }),
                              (0, a.jsx)(c.EY, {
                                className: "!text-sm",
                                children:
                                  "Marketing efforts are scaled to support the growth and expansion of startups.",
                              }),
                              (0, a.jsx)("div", {
                                ref: m,
                                className:
                                  "absolute inset-0 w-[50%] h-[100%] left-0 md:w-[100%] md:left-0",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsxs)("div", {
                            className: "relative md:static",
                            children: [
                              (0, a.jsx)(c.hh, {
                                className:
                                  "w-10 md:w-14 h-10 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                                children: "III",
                              }),
                              (0, a.jsx)(c.hE, {
                                className: "mb-2 md:!text-2xl",
                                variant: "h3",
                                children: "Deep Dive",
                              }),
                              (0, a.jsx)(c.EY, {
                                className: "!text-sm",
                                children:
                                  "The D&l team conducts thorough market research and du diligence feasibility studies to evaluate the viability and potential of new products and technologies.",
                              }),
                              (0, a.jsx)("div", {
                                ref: h,
                                className:
                                  "absolute inset-0 w-[50%] h-[100%] left-[50%] md:w-[100%] md:left-0",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsxs)("div", {
                            className:
                              "relative md:static max-md:flex max-md:flex-col max-md:items-end max-md:text-right",
                            children: [
                              (0, a.jsx)(c.hh, {
                                className:
                                  "w-10 md:w-14 h-10 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                                children: "IV",
                              }),
                              (0, a.jsx)(c.hE, {
                                className: "mb-2 md:!text-2xl",
                                variant: "h3",
                                children: "MVP Development",
                              }),
                              (0, a.jsx)(c.EY, {
                                className: "!text-sm",
                                children:
                                  "The D&I team creates and implements marketing strategies to support the strategies and launch of Minimum Viable Products.",
                              }),
                              (0, a.jsx)("div", {
                                ref: u,
                                className:
                                  "absolute inset-0 w-[50%] h-[100%] left-0 md:w-[100%] md:left-0",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(c.wn, {
                ref: x,
                className: "py-10 md:py-[96px]",
                children: (0, a.jsxs)(c.mc, {
                  className: "relative",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "max-w-[673px] md:mx-auto md:text-center",
                      children: [
                        (0, a.jsx)(c.hE, {
                          className: "mb-4",
                          variant: "h2",
                          children: "Our Secret Formula",
                        }),
                        (0, a.jsx)(c.EY, {
                          children:
                            "Carefully curated to ensure growth, our formula is designed with mentorship and your team's success in mind.",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      ref: p,
                      className:
                        "absolute w-[100%] h-[100%] top-0 left-0 md:relative md:h-[454px]",
                    }),
                    (0, a.jsxs)("ul", {
                      className:
                        "grid md:grid-cols-3 gap-y-[50px] gap-x-[clamp(20px,5vw,56px)] text-center",
                      children: [
                        (0, a.jsx)("li", {
                          children: (0, a.jsxs)("div", {
                            className: "pt-[150px] md:pt-0",
                            children: [
                              (0, a.jsx)(c.hE, {
                                className: "mb-2 md:!text-2xl",
                                variant: "h3",
                                children: "Submit Your Pitch",
                              }),
                              (0, a.jsx)(c.EY, {
                                className: "!text-sm",
                                children:
                                  "The D&I team will review your pitch and assess if it aligns with our investment thesis.",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsxs)("div", {
                            className: "pt-[150px] md:pt-0",
                            children: [
                              (0, a.jsx)(c.hE, {
                                className: "mb-2 md:!text-2xl",
                                variant: "h3",
                                children: "Glimpse",
                              }),
                              (0, a.jsx)(c.EY, {
                                className: "!text-sm",
                                children:
                                  "Pitches that align with our thesis will be invited in for a Glimpse session where our D&I team will assess where your business stands and how we can add value that will lead to disruption.",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsxs)("div", {
                            className: "pt-[150px] md:pt-0",
                            children: [
                              (0, a.jsx)(c.hE, {
                                className: "mb-2 md:!text-2xl",
                                variant: "h3",
                                children: "Due Diligence",
                              }),
                              (0, a.jsx)(c.EY, {
                                className: "!text-sm",
                                children:
                                  "From tech, data and go to market strategies, to financials and brand positioning, the D&I team will work with you to build a data room, and work on a strategy for each aspect of your startup.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(c.wn, {
                ref: f,
                className: "md:py-[132px]",
                children: (0, a.jsxs)(c.mc, {
                  className: "flex flex-col md:flex-row-reverse",
                  children: [
                    (0, a.jsx)("div", {
                      ref: v,
                      className:
                        "h-[250px] w-[100%] md:w-1/6 md:h-[550px] md:mr-[16.6667%]",
                    }),
                    (0, a.jsxs)("div", {
                      className: "md:w-2/3",
                      children: [
                        (0, a.jsx)(c.hE, {
                          className: "mb-16",
                          variant: "h2",
                          children: "Where we are",
                        }),
                        (0, a.jsx)(n.E, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    49111: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => u });
      var a = s(95155),
        i = s(5565),
        l = s(12115),
        r = s(68190),
        n = s(36016),
        d = s(19257),
        o = s(72687),
        c = s(86140),
        m = s(31593),
        h = s(7493);
      let u = () => {
        let e = (0, l.useRef)(null),
          t = (0, l.useRef)(null),
          s = (0, l.useRef)(null),
          u = (0, l.useRef)(null),
          x = (0, l.useRef)(null),
          p = (0, l.useRef)(null),
          f = (0, l.useRef)(null),
          v = (0, l.useRef)(null),
          g = (0, l.useRef)(null),
          j = (0, l.useRef)(null),
          { gl: b } = (0, c.A)(),
          w = (0, r.Ub)({ query: "(min-width: 768px)" }),
          { setPreloaderPercentage: y } = (0, m.R)();
        return (
          (0, l.useEffect)(() => {
            if (b)
              return (
                b.setPage("main", {
                  sectionHero: e.current,
                  placeHero: w ? s.current : t.current,
                  sectionProcess: u.current,
                  placeProcess: x.current,
                  sectionPartners: p.current,
                  placePartners: f.current,
                  sectionLocation: v.current,
                  placeLocation: g.current,
                  sectionContacts: j.current,
                }),
                (b.onload = (e) => {
                  let { loaded: t, total: s } = e;
                  return y((t / s) * 100);
                }),
                b
                  .load()
                  .then(() => 0)
                  .catch(() => {
                    console.error("Not loaded");
                  }),
                () => {
                  b.beforeNav();
                }
              );
          }, [y, b, w]),
          (0, a.jsxs)("main", {
            children: [
              (0, a.jsx)(h.wn, {
                ref: e,
                className: "pb-0 md:pb-[190px] md:min-h-[100vh]",
                children: (0, a.jsxs)(h.mc, {
                  className: "flex",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "md:w-[50%]",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "pt-[392px] md:w-[70ch] pb-8 md:pt-[192px] md:pb-12 min-h-[100vh] content-center",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "max-md:text-center",
                              children: [
                                (0, a.jsxs)(h.hE, {
                                  animation: "instant-blur",
                                  animationTo: { duration: 0.3, stagger: 0.02 },
                                  className: "md:mb-4 mb-2 !leading-none",
                                  size: "large",
                                  children: [
                                    "Continuous Ventures:",
                                    (0, a.jsx)("br", {}),
                                    " Invest, Innovate, Disrupt",
                                  ],
                                }),
                                (0, a.jsx)(h.EY, {
                                  animation: "instant-blur",
                                  animationTo: {
                                    duration: 0.3,
                                    stagger: 0.005,
                                  },
                                  className: "md:mb-12 mb-8",
                                  children:
                                    "Founded in 2018, Continuous Ventures is an award winning, global private accelerator empowering visionary entrepreneurs and leaders to create lasting impact. Using cutting-edge technology, we provide smart, deliberate, and groundbreaking mentorship to transform ideas into reality.",
                                }),
                              ],
                            }),
                            (0, a.jsx)(h._2, {
                              isInstant: !0,
                              animationTo: { delay: 0.2 },
                              children: (0, a.jsx)(h.$n, {
                                className:
                                  "md:mb-14 mb-8 opacity-0 max-md:block max-md:mx-auto",
                                variant: "transparent",
                                onClick: () => {
                                  n.XG.scrollTo("contact", {
                                    smooth: !0,
                                    duration: 500,
                                  });
                                },
                                children: "Get in touch",
                              }),
                            }),
                            (0, a.jsx)(h._2, {
                              isInstant: !0,
                              animationTo: { delay: 0.6 },
                              children: (0, a.jsxs)("div", {
                                className:
                                  "flex items-center md:gap-4 gap-4 max-md:justify-center uppercase font-mosvita",
                                children: [
                                  (0, a.jsxs)("span", {
                                    children: [
                                      "Private",
                                      (0, a.jsx)("br", {}),
                                      "accelerator",
                                    ],
                                  }),
                                  (0, a.jsx)("svg", {
                                    fill: "none",
                                    height: "39",
                                    viewBox: "0 0 48 39",
                                    width: "48",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsx)("path", {
                                      d: "M47.064 30.152C42.52 35.528 37.016 38.28 30.808 38.28C27.032 38.28 22.936 36.936 19.032 34.184C15.768 36.36 12.824 37.448 10.008 37.448C4.312 37.448 0.344 33.48 0.344 27.976C0.344 22.6 3.928 18.376 11.096 15.24C11.48 10.824 12.824 7.624 15.64 4.616C18.264 1.864 21.592 0.327999 23.96 0.327999C26.52 0.327999 28.312 1.992 28.312 4.232C28.312 6.728 26.072 9.096 21.656 11.464C20.76 11.912 18.52 12.936 14.936 14.472C15.064 21.192 17.24 26.632 21.592 31.176C26.136 26.76 28.824 23.176 30.68 21.192C33.432 18.312 35.8 16.84 38.296 16.84C40.92 16.84 42.648 18.44 42.648 20.424C42.648 21.448 42.072 22.536 41.048 23.624C40.28 21.384 38.744 20.168 36.568 20.168C32.088 20.168 28.696 24.968 22.04 31.688C26.008 34.952 29.784 36.616 33.752 36.616C38.808 36.616 42.456 34.44 46.68 29.832L47.064 30.152ZM14.936 13.832C21.4 11.592 24.856 7.176 24.856 4.04C24.856 2.504 23.768 1.352 22.296 1.352C19.416 1.352 15.576 5.832 14.936 13.832ZM11.096 15.88C6.616 18.824 4.44 21.96 4.44 25.928C4.44 31.56 8.28 35.72 13.016 35.72C14.872 35.72 16.6 35.016 18.456 33.736C13.4 29.256 11.096 24.008 11.096 17.224C11.096 16.776 11.096 16.328 11.096 15.88Z",
                                      fill: "#D49C4D",
                                    }),
                                  }),
                                  (0, a.jsxs)("span", {
                                    children: [
                                      "Venture ",
                                      (0, a.jsx)("br", {}),
                                      "Capital",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          ref: t,
                          className: "md:max-w-[662px] pt-[180px]",
                          children: [
                            (0, a.jsx)(h.hE, {
                              className: "text-[26px] md:text-4xl mb-8",
                              size: "custom",
                              variant: "h2",
                              children:
                                "We empower early-stage entrepreneurs with capital, mentorship, and strategic expertise to scale from concept to exit. Through strategic partnerships, we drive measurable success, global reach, and transformative impact.",
                            }),
                            (0, a.jsx)(h.EY, {
                              className: "mb-12 md:mb-[109px]",
                              children:
                                "For investors, we offer transparent, high-impact investment opportunities with due diligence and top-tier performance. For governments, we provide strategic partnerships that drive economic growth and innovation.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      ref: s,
                      className:
                        "absolute inset-0 w-screen h-full md:static md:w-[55%] md:h-screen p-4 z-[-1]",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(h.wn, {
                ref: u,
                className: "pb-14 md:pt-[104px] md:pb-[105px]",
                children: (0, a.jsxs)(h.mc, {
                  children: [
                    (0, a.jsx)("div", {
                      ref: x,
                      className:
                        "absolute left-0 w-full h-[250px] md:relative md:h-[400px]",
                    }),
                    (0, a.jsxs)("div", {
                      className: "pt-[250px] md:pt-0 md:max-w-[892px]",
                      children: [
                        (0, a.jsx)(h.hE, {
                          className: "text-[26px] md:text-4xl mb-8",
                          size: "custom",
                          variant: "h2",
                          children:
                            "At Continuous Ventures, we do more than just invest. Our Disruption & Intelligence team – a group of experienced strategists, designers, and technologists – takes an active role in accelerating your growth.",
                        }),
                        (0, a.jsx)(h.EY, {
                          className: "mb-12 md:mb-[109px]",
                          children:
                            "From feasibility studies to market entry and scaling, we offer hands-on support at every stage of development, ensuring success with minimized risk.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "grid grid-cols-2 gap-y-10 md:gap-y-[64px] gap-x-[clamp(32px,6vw,128px)]",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(h.hh, {
                              className:
                                "w-12 md:w-14 h-12 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                              children: (0, a.jsx)(i.default, {
                                alt: "seek",
                                height: 20,
                                src: o.A.seek,
                                width: 20,
                              }),
                            }),
                            (0, a.jsx)(h.hE, {
                              className: "mb-2",
                              size: "small",
                              variant: "h3",
                              children: "Deep Dive",
                            }),
                            (0, a.jsx)(h.EY, {
                              children:
                                "The D&I team conducts thorough market research and due diligence feasibility studies to evaluate the viability and potential of new products and technologies, ensuring informed decision-making and strategic growth opportunities. We uncover key market insights and risks, empowering businesses to innovate with confidence.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(h.hh, {
                              className:
                                "w-12 md:w-14 h-12 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                              children: (0, a.jsx)(i.default, {
                                alt: "rocket",
                                height: 20,
                                src: o.A.rocket,
                                width: 20,
                              }),
                            }),
                            (0, a.jsx)(h.hE, {
                              className: "mb-2",
                              size: "small",
                              variant: "h3",
                              children: "MVP Development",
                            }),
                            (0, a.jsx)(h.EY, {
                              children:
                                "The D&I team creates and implements marketing strategies to support the launch and growth of Minimum Viable Products, ensuring market fit and early traction. We refine positioning, optimize messaging, and drive engagement to accelerate product success.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(h.hh, {
                              className:
                                "w-12 md:w-14 h-12 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                              children: (0, a.jsx)(i.default, {
                                alt: "plant",
                                height: 20,
                                src: o.A.plant,
                                width: 20,
                              }),
                            }),
                            (0, a.jsx)(h.hE, {
                              className: "mb-2",
                              size: "small",
                              variant: "h3",
                              children: "Multi-Stage Funding",
                            }),
                            (0, a.jsx)(h.EY, {
                              children:
                                "The focus is on ensuring the portfolio of companies gains traction and achieves a growth trajectory in appropriate markets. Marketing efforts are scaled to support the growth and expansion of startups.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(h.hh, {
                              className:
                                "w-12 md:w-14 h-12 md:h-14 text-white text-base font-light md:!text-2xl mb-6",
                              children: (0, a.jsx)(i.default, {
                                alt: "chart",
                                height: 20,
                                src: o.A.chart,
                                width: 20,
                              }),
                            }),
                            (0, a.jsx)(h.hE, {
                              className: "mb-2",
                              size: "small",
                              variant: "h3",
                              children: "Build for Success",
                            }),
                            (0, a.jsx)(h.EY, {
                              children:
                                "We identify gaps within leaders and their teams, providing targeted mentorship, training, and support to maximize their capacity for success. Our holistic approach empowers entrepreneurs, making them resilient and fully prepared to achieve lasting success.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(h.wn, {
                ref: p,
                className: "pt-12 pb-5 md:pt-20 md:pb-8",
                children: (0, a.jsxs)(h.mc, {
                  children: [
                    (0, a.jsx)(h.hE, {
                      variant: "h2",
                      children: "Client Partners",
                    }),
                    (0, a.jsx)("div", {
                      ref: f,
                      className: "w-full h-[500px]",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(h.wn, {
                ref: v,
                className: "md:py-[132px]",
                children: (0, a.jsxs)(h.mc, {
                  className: "flex",
                  children: [
                    (0, a.jsx)("div", { ref: g, className: "md:w-1/3" }),
                    (0, a.jsxs)("div", {
                      className: "md:w-2/3",
                      children: [
                        (0, a.jsx)(h.hE, {
                          className: "md:text-right mb-16",
                          variant: "h2",
                          children: "Where we are",
                        }),
                        (0, a.jsx)(d.E, {}),
                        (0, a.jsx)("div", {
                          className: "flex max-md:hidden",
                          children: (0, a.jsx)(h._2, {
                            children: (0, a.jsx)(h.$n, {
                              className: "ml-auto",
                              variant: "transparent",
                              onClick: () => {
                                n.XG.scrollTo("contact", {
                                  smooth: !0,
                                  duration: 500,
                                });
                              },
                              children: "Get in touch",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(h.wn, {
                ref: j,
                className: "w-full h-[100vh]",
                id: "fadeToBlack",
              }),
              (0, a.jsx)(d.B, {}),
            ],
          })
        );
      };
    },
    67406: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => j });
      var a = s(95155),
        i = s(4617),
        l = s.n(i),
        r = s(30113),
        n = s(47395),
        d = s(25683),
        o = s(39124),
        c = s(5565),
        m = s(76046),
        h = s(12115),
        u = s(86140),
        x = s(25851),
        p = s(31593),
        f = s(7493);
      let v = (e) => {
        if (!e) return { day: "", suffix: "" };
        let t = e % 10,
          s = e % 100;
        return {
          day: e,
          suffix:
            t >= 1 && t <= 3 && !(s >= 11 && s <= 13)
              ? ["th", "st", "nd", "rd"][t]
              : "th",
        };
      };
      var g = s(17994);
      let j = (e) => {
        let { initialPosts: t, tags: s } = e,
          { isMD: i } = (0, x.A)(),
          j = (0, m.useRouter)(),
          b = (0, m.useSearchParams)(),
          w = (0, h.useRef)(null),
          y = (0, h.useRef)(null),
          N = (null == b ? void 0 : b.get("tag")) || "all",
          k = Number(null == b ? void 0 : b.get("page")) || 1,
          [C, E] = (0, h.useState)(N),
          [T, S] = (0, h.useState)(k),
          { gl: P } = (0, u.A)(),
          { setPreloaderPercentage: I } = (0, p.R)();
        (0, h.useEffect)(() => {
          if (P)
            return (
              P.setPage("news", {
                sectionHero: w.current,
                placeHero: y.current,
              }),
              (P.onload = (e) => {
                let { loaded: t, total: s } = e;
                return I((t / s) * 100);
              }),
              P.load()
                .then(() => 0)
                .catch(() => {
                  console.error("Not loaded");
                }),
              () => {
                P.beforeNav();
              }
            );
        }, [I, P]),
          (0, h.useEffect)(() => {
            E(N), S(k);
          }, [N, k]);
        let L = (e, t) => {
            let s = new URLSearchParams();
            "all" !== e && s.set("tag", e),
              t > 1 && s.set("page", String(t)),
              j.push("?".concat(s.toString()), { scroll: !1 });
          },
          q = (0, h.useMemo)(
            () =>
              ("all" === C
                ? t
                : t.filter((e) => {
                    var t;
                    return null === (t = e.tags) || void 0 === t
                      ? void 0
                      : t.includes(C);
                  })
              ).sort((e, t) => {
                var s, a, i, l, r, n, d, o;
                let c =
                    null === (l = e.data) || void 0 === l
                      ? void 0
                      : null === (i = l.slices) || void 0 === i
                      ? void 0
                      : null === (a = i[0]) || void 0 === a
                      ? void 0
                      : null === (s = a.primary) || void 0 === s
                      ? void 0
                      : s.date,
                  m =
                    null === (o = t.data) || void 0 === o
                      ? void 0
                      : null === (d = o.slices) || void 0 === d
                      ? void 0
                      : null === (n = d[0]) || void 0 === n
                      ? void 0
                      : null === (r = n.primary) || void 0 === r
                      ? void 0
                      : r.date,
                  h = e.first_publication_date,
                  u = t.first_publication_date;
                return new Date(m || u).getTime() - new Date(c || h).getTime();
              }),
            [t, C]
          ),
          z = i ? 6 : 3,
          D = (0, h.useMemo)(() => {
            let e = (T - 1) * z;
            return q.slice(e, e + z);
          }, [q, T, z]),
          R = Math.ceil(q.length / z),
          Y = (e) => {
            E(e), S(1), L(e, 1);
          };
        return (0, a.jsx)(f.wn, {
          ref: w,
          className: "md:pt-[220px] md:pb-[120px] py-[120px]",
          children: (0, a.jsxs)(f.mc, {
            className: "relative",
            children: [
              (0, a.jsx)("div", {
                ref: y,
                className: "absolute inset-0  h-[200px] p-4 z-[-1]",
              }),
              (0, a.jsx)(f.hE, {
                animation: "instant-blur",
                animationTo: { duration: 0.3, stagger: 0.02 },
                className: "mb-4",
                children: "News & Insights",
              }),
              (0, a.jsx)(f.EY, {
                animation: "instant-blur",
                animationTo: { duration: 0.3, stagger: 0.005 },
                className: "md:w-1/2 mb-6 md:mb-[88px]",
                children:
                  "Giving you the inside scoop on what it takes to run Continuous Ventures. Follow along our journey and get exciting updates below!",
              }),
              (0, a.jsxs)("div", {
                className: "mb-10 md:mb-[68px] flex flex-wrap gap-2",
                children: [
                  (0, a.jsx)("button", {
                    className: l()(
                      "py-2 px-4 md:py-3 md:px-6 bg-white bg-opacity-10 border border-white border-opacity-10",
                      { "!bg-jasper-orange  text-black-pearl ": "all" === C }
                    ),
                    onClick: () => Y("all"),
                    children: "All",
                  }),
                  s.map((e) =>
                    (0, a.jsx)(
                      "button",
                      {
                        className: l()(
                          "py-2 px-4 md:py-3 md:px-6 bg-white bg-opacity-10 hover:bg-opacity-25 transition-all duration-300 border border-white border-opacity-10 whitespace-nowrap",
                          { "!bg-jasper-orange text-black-pearl": C === e }
                        ),
                        onClick: () => Y(e),
                        children: e,
                      },
                      e
                    )
                  ),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12",
                children: (0, a.jsx)(d.N, {
                  mode: "wait",
                  children: D.map((e) => {
                    var t,
                      s,
                      i,
                      l,
                      d,
                      m,
                      h,
                      u,
                      x,
                      p,
                      j,
                      b,
                      w,
                      y,
                      N,
                      k,
                      C,
                      E,
                      T,
                      S,
                      P,
                      I,
                      L;
                    let q = (0, r.H)(e.first_publication_date),
                      z = (0, n.GP)(q, "dd"),
                      D = (0, n.GP)(q, "MMM"),
                      R = (0, n.GP)(q, "yy"),
                      [Y = "", A = "", B = ""] = (
                        null !==
                          (L =
                            null === (l = e.data) || void 0 === l
                              ? void 0
                              : null === (i = l.slices) || void 0 === i
                              ? void 0
                              : null === (s = i[0]) || void 0 === s
                              ? void 0
                              : null === (t = s.primary) || void 0 === t
                              ? void 0
                              : t.date) && void 0 !== L
                          ? L
                          : ""
                      ).split("-");
                    return (0, a.jsx)(
                      o.P.article,
                      {
                        animate: { opacity: 1 },
                        className:
                          "relative w-full bg-white bg-opacity-10 flex flex-col h-full hover:scale-[1.01] hover:bg-opacity-25 transition-all duration-300",
                        exit: { opacity: 0 },
                        initial: { opacity: 0 },
                        transition: { duration: 0.1, ease: "easeInOut" },
                        children: (0, a.jsxs)("div", {
                          className: "flex flex-col h-full",
                          children: [
                            (0, a.jsx)(f.GT, {
                              className: "absolute inset-0",
                              href: "/news/".concat(e.uid),
                              transitionEffect: g.zO,
                              children: (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Read more",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "p-6 h-64",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex justify-between items-start mb-6",
                                  children: [
                                    (0, a.jsx)("time", {
                                      dateTime: ""
                                        .concat(R, "-")
                                        .concat(D, "-")
                                        .concat(z),
                                      children: (0, a.jsxs)("strong", {
                                        className:
                                          "font-semibold text-transparent font-mosvita text-[64px] md:text-[96px] stroke-[1px] stroke-white leading-none",
                                        style: {
                                          WebkitTextStroke: "1px white",
                                        },
                                        children: [
                                          v(+(B || z)).day,
                                          (0, a.jsx)("span", {
                                            className:
                                              "text-[24px] md:text-[38px]  align-baseline",
                                            children: v(+(B || z)).suffix,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "font-light text-right max-md:text-sm",
                                      children: [
                                        (0, a.jsx)("p", {
                                          children: (0, a.jsxs)("time", {
                                            dateTime: ""
                                              .concat(Y || R, "-")
                                              .concat(A || D),
                                            children: [A || D, " / ", Y || R],
                                          }),
                                        }),
                                        (0, a.jsx)("span", {
                                          children: e.tags[0],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("h3", {
                                  className: "overflow-hidden text-ellipsis",
                                  style: {
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    whiteSpace: "normal",
                                  },
                                  children:
                                    null === (u = e.data) || void 0 === u
                                      ? void 0
                                      : null === (h = u.slices) || void 0 === h
                                      ? void 0
                                      : null === (m = h[0]) || void 0 === m
                                      ? void 0
                                      : null === (d = m.primary) || void 0 === d
                                      ? void 0
                                      : d.title,
                                }),
                                (0, a.jsx)("address", {
                                  className: "text-sm opacity-50 not-italic",
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      (null === (b = e.data) || void 0 === b
                                        ? void 0
                                        : null === (j = b.slices) ||
                                          void 0 === j
                                        ? void 0
                                        : null === (p = j[0]) || void 0 === p
                                        ? void 0
                                        : null === (x = p.primary) ||
                                          void 0 === x
                                        ? void 0
                                        : x.author) || "&#8203;",
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "h-80 w-full",
                              children:
                                (null === (k = e.data) || void 0 === k
                                  ? void 0
                                  : null === (N = k.slices) || void 0 === N
                                  ? void 0
                                  : null === (y = N[0]) || void 0 === y
                                  ? void 0
                                  : null === (w = y.primary) || void 0 === w
                                  ? void 0
                                  : w.post_image.url) &&
                                (0, a.jsx)(c.default, {
                                  alt:
                                    (null === (C = e.data.slices[0]) ||
                                    void 0 === C
                                      ? void 0
                                      : C.primary.post_image.alt) || "",
                                  className: "w-full h-full object-cover",
                                  height:
                                    null === (T = e.data.slices[0]) ||
                                    void 0 === T
                                      ? void 0
                                      : null ===
                                          (E =
                                            T.primary.post_image.dimensions) ||
                                        void 0 === E
                                      ? void 0
                                      : E.height,
                                  quality: 70,
                                  src:
                                    null === (S = e.data.slices[0]) ||
                                    void 0 === S
                                      ? void 0
                                      : S.primary.post_image.url,
                                  width:
                                    null === (I = e.data.slices[0]) ||
                                    void 0 === I
                                      ? void 0
                                      : null ===
                                          (P =
                                            I.primary.post_image.dimensions) ||
                                        void 0 === P
                                      ? void 0
                                      : P.width,
                                }),
                            }),
                          ],
                        }),
                      },
                      e.id
                    );
                  }),
                }),
              }),
              0 === q.length &&
                (0, a.jsx)("div", {
                  className: "mt-8 text-center text-gray-500",
                  children: "No posts found for the selected tag.",
                }),
              q.length > z &&
                (0, a.jsx)(f.dK, {
                  currentPage: T,
                  totalPages: R,
                  onChange: (e) => {
                    S(e), L(C, e);
                  },
                }),
            ],
          }),
        });
      };
    },
    20936: (e) => {
      e.exports = { article: "blog-post_article__BFZin" };
    },
  },
]);
