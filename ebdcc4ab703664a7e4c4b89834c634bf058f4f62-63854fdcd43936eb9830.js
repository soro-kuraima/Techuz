"use strict";
(self.webpackChunktechuz_site = self.webpackChunktechuz_site || []).push([
    [644], {
        1668: function(e, t, r) {
            var n = r(7294),
                i = r(878),
                a = r(7053);
            t.Z = function(e) {
                var t = e.children,
                    r = e.autoplay,
                    s = void 0 !== r && r,
                    o = e.speed,
                    l = void 0 === o ? 300 : o,
                    d = e.swiperInstance;
                return n.createElement(a.tq, {
                    navigation: !0,
                    slidesPerView: 1,
                    loop: !0,
                    speed: l,
                    autoplay: s,
                    spaceBetween: 100,
                    modules: [i.s5, i.xW, i.pt],
                    pagination: {
                        clickable: !0
                    },
                    scrollbar: {
                        draggable: !0
                    },
                    onSwiper: function(e) {
                        return d && d(e)
                    }
                }, t)
            }
        },
        6241: function(e, t) {
            var r = "star",
                n = [11088, 61446],
                i = "f005",
                a = "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, n, i, a]
            }, t.T = t.DF
        },
        7053: function(e, t, r) {
            r.d(t, {
                tq: function() {
                    return k
                },
                o5: function() {
                    return _
                },
                oc: function() {
                    return C
                }
            });
            var n = r(181);

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a, s, o = [],
                            l = !0,
                            d = !1;
                        try {
                            if (a = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                l = !1
                            } else
                                for (; !(l = (n = a.call(r)).done) && (o.push(n.value), o.length !== t); l = !0);
                        } catch (c) {
                            d = !0, i = c
                        } finally {
                            try {
                                if (!l && null != r.return && (s = r.return(), Object(s) !== s)) return
                            } finally {
                                if (d) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || (0, n.Z)(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            var s = r(7294),
                o = r(878);

            function l(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t) {
                var r = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((function(e) {
                    return r.indexOf(e) < 0
                })).forEach((function(r) {
                    void 0 === e[r] ? e[r] = t[r] : l(t[r]) && l(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : d(e[r], t[r]) : e[r] = t[r]
                }))
            }

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.pagination && void 0 === e.pagination.el
            }

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = e.split(" ").map((function(e) {
                        return e.trim()
                    })).filter((function(e) {
                        return !!e
                    })),
                    r = [];
                return t.forEach((function(e) {
                    r.indexOf(e) < 0 && r.push(e)
                })), r.join(" ")
            }
            var v = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
            var h = r(2982),
                g = function(e, t) {
                    var r = t.slidesPerView;
                    if (t.breakpoints) {
                        var n = o.ZP.prototype.getBreakpoint(t.breakpoints),
                            i = n in t.breakpoints ? t.breakpoints[n] : void 0;
                        i && i.slidesPerView && (r = i.slidesPerView)
                    }
                    var a = Math.ceil(parseFloat(t.loopedSlides || r, 10));
                    return (a += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (a = e.length), a
                };

            function m(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function w(e) {
                var t = [];
                return s.Children.toArray(e).forEach((function(e) {
                    m(e) ? t.push(e) : e.props && e.props.children && w(e.props.children).forEach((function(e) {
                        return t.push(e)
                    }))
                })), t
            }

            function y(e) {
                var t = [],
                    r = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return s.Children.toArray(e).forEach((function(e) {
                    if (m(e)) t.push(e);
                    else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        var n = w(e.props.children);
                        n.length > 0 ? n.forEach((function(e) {
                            return t.push(e)
                        })) : r["container-end"].push(e)
                    } else r["container-end"].push(e)
                })), {
                    slides: t,
                    slots: r
                }
            }

            function b(e) {
                var t, r, n, i, a, s = e.swiper,
                    o = e.slides,
                    c = e.passedParams,
                    u = e.changedParams,
                    p = e.nextEl,
                    f = e.prevEl,
                    v = e.scrollbarEl,
                    h = e.paginationEl,
                    g = u.filter((function(e) {
                        return "children" !== e && "direction" !== e
                    })),
                    m = s.params,
                    w = s.pagination,
                    y = s.navigation,
                    b = s.scrollbar,
                    S = s.virtual,
                    E = s.thumbs;
                u.includes("thumbs") && c.thumbs && c.thumbs.swiper && m.thumbs && !m.thumbs.swiper && (t = !0), u.includes("controller") && c.controller && c.controller.control && m.controller && !m.controller.control && (r = !0), u.includes("pagination") && c.pagination && (c.pagination.el || h) && (m.pagination || !1 === m.pagination) && w && !w.el && (n = !0), u.includes("scrollbar") && c.scrollbar && (c.scrollbar.el || v) && (m.scrollbar || !1 === m.scrollbar) && b && !b.el && (i = !0), u.includes("navigation") && c.navigation && (c.navigation.prevEl || f) && (c.navigation.nextEl || p) && (m.navigation || !1 === m.navigation) && y && !y.prevEl && !y.nextEl && (a = !0);
                (g.forEach((function(e) {
                    if (l(m[e]) && l(c[e])) d(m[e], c[e]);
                    else {
                        var t = c[e];
                        !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? m[e] = c[e] : !1 === t && s[r = e] && (s[r].destroy(), "navigation" === r ? (m[r].prevEl = void 0, m[r].nextEl = void 0, s[r].prevEl = void 0, s[r].nextEl = void 0) : (m[r].el = void 0, s[r].el = void 0))
                    }
                    var r
                })), g.includes("controller") && !r && s.controller && s.controller.control && m.controller && m.controller.control && (s.controller.control = m.controller.control), u.includes("children") && o && S && m.virtual.enabled ? (S.slides = o, S.update(!0)) : u.includes("children") && s.lazy && s.params.lazy.enabled && s.lazy.load(), t) && (E.init() && E.update(!0));
                r && (s.controller.control = m.controller.control), n && (h && (m.pagination.el = h), w.init(), w.render(), w.update()), i && (v && (m.scrollbar.el = v), b.init(), b.updateSize(), b.setTranslate()), a && (p && (m.navigation.nextEl = p), f && (m.navigation.prevEl = f), y.init(), y.update()), u.includes("allowSlideNext") && (s.allowSlideNext = c.allowSlideNext), u.includes("allowSlidePrev") && (s.allowSlidePrev = c.allowSlidePrev), u.includes("direction") && s.changeDirection(c.direction, !1), s.update()
            }
            var S = r(4942);

            function E(e, t) {
                return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
            }
            var T = (0, s.createContext)(null),
                x = (0, s.createContext)(null),
                C = function() {
                    return (0, s.useContext)(x)
                },
                M = ["className", "tag", "wrapperTag", "children", "onSwiper"];

            function P() {
                return P = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, P.apply(this, arguments)
            }
            var k = (0, s.forwardRef)((function(e, t) {
                var r = void 0 === e ? {} : e,
                    n = r.className,
                    m = r.tag,
                    w = void 0 === m ? "div" : m,
                    T = r.wrapperTag,
                    C = void 0 === T ? "div" : T,
                    k = r.children,
                    O = r.onSwiper,
                    L = a(r, M),
                    _ = !1,
                    A = i((0, s.useState)("swiper"), 2),
                    I = A[0],
                    z = A[1],
                    D = i((0, s.useState)(null), 2),
                    N = D[0],
                    G = D[1],
                    j = i((0, s.useState)(!1), 2),
                    B = j[0],
                    $ = j[1],
                    R = (0, s.useRef)(!1),
                    F = (0, s.useRef)(null),
                    H = (0, s.useRef)(null),
                    V = (0, s.useRef)(null),
                    W = (0, s.useRef)(null),
                    Z = (0, s.useRef)(null),
                    q = (0, s.useRef)(null),
                    X = (0, s.useRef)(null),
                    Y = (0, s.useRef)(null),
                    U = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = {
                                on: {}
                            },
                            n = {},
                            i = {};
                        d(r, o.ZP.defaults), d(r, o.ZP.extendedDefaults), r._emitClasses = !0, r.init = !1;
                        var a = {},
                            s = v.map((function(e) {
                                return e.replace(/_/, "")
                            })),
                            c = Object.assign({}, e);
                        return Object.keys(c).forEach((function(o) {
                            void 0 !== e[o] && (s.indexOf(o) >= 0 ? l(e[o]) ? (r[o] = {}, i[o] = {}, d(r[o], e[o]), d(i[o], e[o])) : (r[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? n["".concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o] : r.on["".concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o] : a[o] = e[o])
                        })), ["navigation", "pagination", "scrollbar"].forEach((function(e) {
                            !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
                        })), {
                            params: r,
                            passedParams: i,
                            rest: a,
                            events: n
                        }
                    }(L),
                    K = U.params,
                    J = U.passedParams,
                    Q = U.rest,
                    ee = U.events,
                    te = y(k),
                    re = te.slides,
                    ne = te.slots,
                    ie = function() {
                        $(!B)
                    };
                Object.assign(K.on, {
                    _containerClasses: function(e, t) {
                        z(t)
                    }
                });
                var ae = function() {
                    if (Object.assign(K.on, ee), _ = !0, H.current = new o.ZP(K), H.current.loopCreate = function() {}, H.current.loopDestroy = function() {}, K.loop && (H.current.loopedSlides = g(re, K)), H.current.virtual && H.current.params.virtual.enabled) {
                        H.current.virtual.slides = re;
                        var e = {
                            cache: !1,
                            slides: re,
                            renderExternal: G,
                            renderExternalUpdate: !1
                        };
                        d(H.current.params.virtual, e), d(H.current.originalParams.virtual, e)
                    }
                };
                F.current || ae(), H.current && H.current.on("_beforeBreakpoint", ie);
                return (0, s.useEffect)((function() {
                    return function() {
                        H.current && H.current.off("_beforeBreakpoint", ie)
                    }
                })), (0, s.useEffect)((function() {
                    !R.current && H.current && (H.current.emitSlidesClasses(), R.current = !0)
                })), E((function() {
                    if (t && (t.current = F.current), F.current) return H.current.destroyed && ae(),
                        function(e, t) {
                            var r = e.el,
                                n = e.nextEl,
                                i = e.prevEl,
                                a = e.paginationEl,
                                s = e.scrollbarEl,
                                o = e.swiper;
                            c(t) && n && i && (o.params.navigation.nextEl = n, o.originalParams.navigation.nextEl = n, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), u(t) && a && (o.params.pagination.el = a, o.originalParams.pagination.el = a), p(t) && s && (o.params.scrollbar.el = s, o.originalParams.scrollbar.el = s), o.init(r)
                        }({
                            el: F.current,
                            nextEl: Z.current,
                            prevEl: q.current,
                            paginationEl: X.current,
                            scrollbarEl: Y.current,
                            swiper: H.current
                        }, K), O && O(H.current),
                        function() {
                            H.current && !H.current.destroyed && H.current.destroy(!0, !1)
                        }
                }), []), E((function() {
                    !_ && ee && H.current && Object.keys(ee).forEach((function(e) {
                        H.current.on(e, ee[e])
                    }));
                    var e = function(e, t, r, n, i) {
                        var a = [];
                        if (!t) return a;
                        var s = function(e) {
                            a.indexOf(e) < 0 && a.push(e)
                        };
                        if (r && n) {
                            var o = n.map(i),
                                d = r.map(i);
                            o.join("") !== d.join("") && s("children"), n.length !== r.length && s("children")
                        }
                        return v.filter((function(e) {
                            return "_" === e[0]
                        })).map((function(e) {
                            return e.replace(/_/, "")
                        })).forEach((function(r) {
                            if (r in e && r in t)
                                if (l(e[r]) && l(t[r])) {
                                    var n = Object.keys(e[r]),
                                        i = Object.keys(t[r]);
                                    n.length !== i.length ? s(r) : (n.forEach((function(n) {
                                        e[r][n] !== t[r][n] && s(r)
                                    })), i.forEach((function(n) {
                                        e[r][n] !== t[r][n] && s(r)
                                    })))
                                } else e[r] !== t[r] && s(r)
                        })), a
                    }(J, V.current, re, W.current, (function(e) {
                        return e.key
                    }));
                    return V.current = J, W.current = re, e.length && H.current && !H.current.destroyed && b({
                            swiper: H.current,
                            slides: re,
                            passedParams: J,
                            changedParams: e,
                            nextEl: Z.current,
                            prevEl: q.current,
                            scrollbarEl: Y.current,
                            paginationEl: X.current
                        }),
                        function() {
                            ee && H.current && Object.keys(ee).forEach((function(e) {
                                H.current.off(e, ee[e])
                            }))
                        }
                })), E((function() {
                    var e;
                    !(e = H.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [N]), s.createElement(w, P({
                    ref: F,
                    className: f("".concat(I).concat(n ? " ".concat(n) : ""))
                }, Q), s.createElement(x.Provider, {
                    value: H.current
                }, ne["container-start"], s.createElement(C, {
                    className: "swiper-wrapper"
                }, ne["wrapper-start"], K.virtual ? function(e, t, r) {
                    if (!r) return null;
                    var n = e.isHorizontal() ? (0, S.Z)({}, e.rtlTranslate ? "right" : "left", "".concat(r.offset, "px")) : {
                        top: "".concat(r.offset, "px")
                    };
                    return t.filter((function(e, t) {
                        return t >= r.from && t <= r.to
                    })).map((function(t) {
                        return s.cloneElement(t, {
                            swiper: e,
                            style: n
                        })
                    }))
                }(H.current, re, N) : !K.loop || H.current && H.current.destroyed ? re.map((function(e) {
                    return s.cloneElement(e, {
                        swiper: H.current
                    })
                })) : function(e, t, r) {
                    var n = t.map((function(t, r) {
                        return s.cloneElement(t, {
                            swiper: e,
                            "data-swiper-slide-index": r
                        })
                    }));

                    function i(e, t, n) {
                        return s.cloneElement(e, {
                            key: "".concat(e.key, "-duplicate-").concat(t, "-").concat(n),
                            className: "".concat(e.props.className || "", " ").concat(r.slideDuplicateClass)
                        })
                    }
                    if (r.loopFillGroupWithBlank) {
                        var a = r.slidesPerGroup - n.length % r.slidesPerGroup;
                        if (a !== r.slidesPerGroup)
                            for (var o = 0; o < a; o += 1) {
                                var l = s.createElement("div", {
                                    className: "".concat(r.slideClass, " ").concat(r.slideBlankClass)
                                });
                                n.push(l)
                            }
                    }
                    "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = n.length);
                    for (var d = g(n, r), c = [], u = [], p = 0; p < d; p += 1) {
                        var f = p - Math.floor(p / n.length) * n.length;
                        u.push(i(n[f], p, "append")), c.unshift(i(n[n.length - f - 1], p, "prepend"))
                    }
                    return e && (e.loopedSlides = d), [].concat(c, (0, h.Z)(n), u)
                }(H.current, re, K), ne["wrapper-end"]), c(K) && s.createElement(s.Fragment, null, s.createElement("div", {
                    ref: q,
                    className: "swiper-button-prev"
                }), s.createElement("div", {
                    ref: Z,
                    className: "swiper-button-next"
                })), p(K) && s.createElement("div", {
                    ref: Y,
                    className: "swiper-scrollbar"
                }), u(K) && s.createElement("div", {
                    ref: X,
                    className: "swiper-pagination"
                }), ne["container-end"]))
            }));
            k.displayName = "Swiper";
            var O = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];

            function L() {
                return L = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, L.apply(this, arguments)
            }
            var _ = (0, s.forwardRef)((function(e, t) {
                var r = void 0 === e ? {} : e,
                    n = r.tag,
                    o = void 0 === n ? "div" : n,
                    l = r.children,
                    d = r.className,
                    c = void 0 === d ? "" : d,
                    u = r.swiper,
                    p = r.zoom,
                    v = r.virtualIndex,
                    h = a(r, O),
                    g = (0, s.useRef)(null),
                    m = i((0, s.useState)("swiper-slide"), 2),
                    w = m[0],
                    y = m[1];

                function b(e, t, r) {
                    t === g.current && y(r)
                }
                E((function() {
                    if (t && (t.current = g.current), g.current && u) {
                        if (!u.destroyed) return u.on("_slideClass", b),
                            function() {
                                u && u.off("_slideClass", b)
                            };
                        "swiper-slide" !== w && y("swiper-slide")
                    }
                })), E((function() {
                    u && g.current && !u.destroyed && y(u.getSlideClasses(g.current))
                }), [u]);
                var S = {
                        isActive: w.indexOf("swiper-slide-active") >= 0 || w.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: w.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: w.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: w.indexOf("swiper-slide-prev") >= 0 || w.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: w.indexOf("swiper-slide-next") >= 0 || w.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    x = function() {
                        return "function" == typeof l ? l(S) : l
                    };
                return s.createElement(o, L({
                    ref: g,
                    className: f("".concat(w).concat(c ? " ".concat(c) : "")),
                    "data-swiper-slide-index": v
                }, h), s.createElement(T.Provider, {
                    value: S
                }, p ? s.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof p ? p : void 0
                }, x()) : x()))
            }));
            _.displayName = "SwiperSlide"
        },
        878: function(e, t, r) {
            r.d(t, {
                s5: function() {
                    return Ee
                },
                pt: function() {
                    return Te
                },
                xW: function() {
                    return Ce
                },
                ZP: function() {
                    return be
                }
            });
            var n = r(2982);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var a = r(9142);

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (0, a.Z)(n.key), n)
                }
            }

            function o(e, t, r) {
                return t && s(e.prototype, t), r && s(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function l(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(t).forEach((function(r) {
                    void 0 === e[r] ? e[r] = t[r] : l(t[r]) && l(e[r]) && Object.keys(t[r]).length > 0 && d(e[r], t[r])
                }))
            }
            var c = {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                createElementNS: function() {
                    return {}
                },
                importNode: function() {
                    return null
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function u() {
                var e = "undefined" != typeof document ? document : {};
                return d(e, c), e
            }
            var p = {
                document: c,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                },
                requestAnimationFrame: function(e) {
                    return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
                },
                cancelAnimationFrame: function(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function f() {
                var e = "undefined" != typeof window ? window : {};
                return d(e, p), e
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var h = r(9611);
            var g = r(1002);

            function m(e, t) {
                if (t && ("object" === (0, g.Z)(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return v(e)
            }

            function w(e) {
                return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, w(e)
            }

            function y() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function b(e, t, r) {
                return b = y() ? Reflect.construct.bind() : function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && (0, h.Z)(i, r.prototype), i
                }, b.apply(null, arguments)
            }

            function S(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return S = function(e) {
                    if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                    var r;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n)
                    }

                    function n() {
                        return b(e, arguments, w(this).constructor)
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), (0, h.Z)(n, e)
                }, S(e)
            }

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = w(e);
                    if (t) {
                        var i = w(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return m(this, r)
                }
            }
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && (0, h.Z)(e, t)
                }(r, e);
                var t = E(r);

                function r(e) {
                    var a, s, o;
                    return i(this, r), "number" == typeof e ? a = t.call(this, e) : (a = t.call.apply(t, [this].concat((0, n.Z)(e || []))), s = v(a), o = s.__proto__, Object.defineProperty(s, "__proto__", {
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            o.__proto__ = e
                        }
                    })), m(a)
                }
                return o(r)
            }(S(Array));

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = [];
                return e.forEach((function(e) {
                    Array.isArray(e) ? t.push.apply(t, (0, n.Z)(x(e))) : t.push(e)
                })), t
            }

            function C(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function M(e, t) {
                var r = f(),
                    n = u(),
                    i = [];
                if (!t && e instanceof T) return e;
                if (!e) return new T(i);
                if ("string" == typeof e) {
                    var a = e.trim();
                    if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                        var s = "div";
                        0 === a.indexOf("<li") && (s = "ul"), 0 === a.indexOf("<tr") && (s = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (s = "tr"), 0 === a.indexOf("<tbody") && (s = "table"), 0 === a.indexOf("<option") && (s = "select");
                        var o = n.createElement(s);
                        o.innerHTML = a;
                        for (var l = 0; l < o.childNodes.length; l += 1) i.push(o.childNodes[l])
                    } else i = function(e, t) {
                        if ("string" != typeof e) return [e];
                        for (var r = [], n = t.querySelectorAll(e), i = 0; i < n.length; i += 1) r.push(n[i]);
                        return r
                    }(e.trim(), t || n)
                } else if (e.nodeType || e === r || e === n) i.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof T) return e;
                    i = e
                }
                return new T(function(e) {
                    for (var t = [], r = 0; r < e.length; r += 1) - 1 === t.indexOf(e[r]) && t.push(e[r]);
                    return t
                }(i))
            }
            M.fn = T.prototype;
            var P = "resize scroll".split(" ");

            function k(e) {
                return function() {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    if (void 0 === r[0]) {
                        for (var i = 0; i < this.length; i += 1) P.indexOf(e) < 0 && (e in this[i] ? this[i][e]() : M(this[i]).trigger(e));
                        return this
                    }
                    return this.on.apply(this, [e].concat(r))
                }
            }
            k("click"), k("blur"), k("focus"), k("focusin"), k("focusout"), k("keyup"), k("keydown"), k("keypress"), k("submit"), k("change"), k("mousedown"), k("mousemove"), k("mouseup"), k("mouseenter"), k("mouseleave"), k("mouseout"), k("mouseover"), k("touchstart"), k("touchend"), k("touchmove"), k("resize"), k("scroll");
            var O = {
                addClass: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var i = x(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return this.forEach((function(e) {
                        var t;
                        (t = e.classList).add.apply(t, (0, n.Z)(i))
                    })), this
                },
                removeClass: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var i = x(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return this.forEach((function(e) {
                        var t;
                        (t = e.classList).remove.apply(t, (0, n.Z)(i))
                    })), this
                },
                hasClass: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = x(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return C(this, (function(e) {
                        return n.filter((function(t) {
                            return e.classList.contains(t)
                        })).length > 0
                    })).length > 0
                },
                toggleClass: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = x(t.map((function(e) {
                        return e.split(" ")
                    })));
                    this.forEach((function(e) {
                        n.forEach((function(t) {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var r = 0; r < this.length; r += 1)
                        if (2 === arguments.length) this[r].setAttribute(e, t);
                        else
                            for (var n in e) this[r][n] = e[n], this[r].setAttribute(n, e[n]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
                    return this
                },
                on: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = t[0],
                        i = t[1],
                        a = t[2],
                        s = t[3];

                    function o(e) {
                        var t = e.target;
                        if (t) {
                            var r = e.target.dom7EventData || [];
                            if (r.indexOf(e) < 0 && r.unshift(e), M(t).is(i)) a.apply(t, r);
                            else
                                for (var n = M(t).parents(), s = 0; s < n.length; s += 1) M(n[s]).is(i) && a.apply(n[s], r)
                        }
                    }

                    function l(e) {
                        var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
                    }
                    "function" == typeof t[1] && (n = t[0], a = t[1], s = t[2], i = void 0), s || (s = !1);
                    for (var d, c = n.split(" "), u = 0; u < this.length; u += 1) {
                        var p = this[u];
                        if (i)
                            for (d = 0; d < c.length; d += 1) {
                                var f = c[d];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                                    listener: a,
                                    proxyListener: o
                                }), p.addEventListener(f, o, s)
                            } else
                                for (d = 0; d < c.length; d += 1) {
                                    var v = c[d];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[v] || (p.dom7Listeners[v] = []), p.dom7Listeners[v].push({
                                        listener: a,
                                        proxyListener: l
                                    }), p.addEventListener(v, l, s)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = t[0],
                        i = t[1],
                        a = t[2],
                        s = t[3];
                    "function" == typeof t[1] && (n = t[0], a = t[1], s = t[2], i = void 0), s || (s = !1);
                    for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                        for (var d = o[l], c = 0; c < this.length; c += 1) {
                            var u = this[c],
                                p = void 0;
                            if (!i && u.dom7Listeners ? p = u.dom7Listeners[d] : i && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length)
                                for (var f = p.length - 1; f >= 0; f -= 1) {
                                    var v = p[f];
                                    a && v.listener === a || a && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === a ? (u.removeEventListener(d, v.proxyListener, s), p.splice(f, 1)) : a || (u.removeEventListener(d, v.proxyListener, s), p.splice(f, 1))
                                }
                        }
                    return this
                },
                trigger: function() {
                    for (var e = f(), t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    for (var i = r[0].split(" "), a = r[1], s = 0; s < i.length; s += 1)
                        for (var o = i[s], l = 0; l < this.length; l += 1) {
                            var d = this[l];
                            if (e.CustomEvent) {
                                var c = new e.CustomEvent(o, {
                                    detail: a,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                d.dom7EventData = r.filter((function(e, t) {
                                    return t > 0
                                })), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
                            }
                        }
                    return this
                },
                transitionEnd: function(e) {
                    var t = this;
                    return e && t.on("transitionend", (function r(n) {
                        n.target === this && (e.call(this, n), t.off("transitionend", r))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    var e = f();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = f(),
                            t = u(),
                            r = this[0],
                            n = r.getBoundingClientRect(),
                            i = t.body,
                            a = r.clientTop || i.clientTop || 0,
                            s = r.clientLeft || i.clientLeft || 0,
                            o = r === e ? e.scrollY : r.scrollTop,
                            l = r === e ? e.scrollX : r.scrollLeft;
                        return {
                            top: n.top + o - a,
                            left: n.left + l - s
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var r, n = f();
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (r = 0; r < this.length; r += 1)
                                for (var i in e) this[r].style[i] = e[i];
                            return this
                        }
                        if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach((function(t, r) {
                        e.apply(t, [t, r])
                    })), this) : this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    var t, r, n = f(),
                        i = u(),
                        a = this[0];
                    if (!a || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (a.matches) return a.matches(e);
                        if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
                        if (a.msMatchesSelector) return a.msMatchesSelector(e);
                        for (t = M(e), r = 0; r < t.length; r += 1)
                            if (t[r] === a) return !0;
                        return !1
                    }
                    if (e === i) return a === i;
                    if (e === n) return a === n;
                    if (e.nodeType || e instanceof T) {
                        for (t = e.nodeType ? [e] : e, r = 0; r < t.length; r += 1)
                            if (t[r] === a) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    var e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    var t = this.length;
                    if (e > t - 1) return M([]);
                    if (e < 0) {
                        var r = t + e;
                        return M(r < 0 ? [] : [this[r]])
                    }
                    return M([this[e]])
                },
                append: function() {
                    for (var e, t = u(), r = 0; r < arguments.length; r += 1) {
                        e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                        for (var n = 0; n < this.length; n += 1)
                            if ("string" == typeof e) {
                                var i = t.createElement("div");
                                for (i.innerHTML = e; i.firstChild;) this[n].appendChild(i.firstChild)
                            } else if (e instanceof T)
                            for (var a = 0; a < e.length; a += 1) this[n].appendChild(e[a]);
                        else this[n].appendChild(e)
                    }
                    return this
                },
                prepend: function(e) {
                    var t, r, n = u();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            var i = n.createElement("div");
                            for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1) this[t].insertBefore(i.childNodes[r], this[t].childNodes[0])
                        } else if (e instanceof T)
                        for (r = 0; r < e.length; r += 1) this[t].insertBefore(e[r], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && M(this[0].nextElementSibling).is(e) ? M([this[0].nextElementSibling]) : M([]) : this[0].nextElementSibling ? M([this[0].nextElementSibling]) : M([]) : M([])
                },
                nextAll: function(e) {
                    var t = [],
                        r = this[0];
                    if (!r) return M([]);
                    for (; r.nextElementSibling;) {
                        var n = r.nextElementSibling;
                        e ? M(n).is(e) && t.push(n) : t.push(n), r = n
                    }
                    return M(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        var t = this[0];
                        return e ? t.previousElementSibling && M(t.previousElementSibling).is(e) ? M([t.previousElementSibling]) : M([]) : t.previousElementSibling ? M([t.previousElementSibling]) : M([])
                    }
                    return M([])
                },
                prevAll: function(e) {
                    var t = [],
                        r = this[0];
                    if (!r) return M([]);
                    for (; r.previousElementSibling;) {
                        var n = r.previousElementSibling;
                        e ? M(n).is(e) && t.push(n) : t.push(n), r = n
                    }
                    return M(t)
                },
                parent: function(e) {
                    for (var t = [], r = 0; r < this.length; r += 1) null !== this[r].parentNode && (e ? M(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode));
                    return M(t)
                },
                parents: function(e) {
                    for (var t = [], r = 0; r < this.length; r += 1)
                        for (var n = this[r].parentNode; n;) e ? M(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                    return M(t)
                },
                closest: function(e) {
                    var t = this;
                    return void 0 === e ? M([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    for (var t = [], r = 0; r < this.length; r += 1)
                        for (var n = this[r].querySelectorAll(e), i = 0; i < n.length; i += 1) t.push(n[i]);
                    return M(t)
                },
                children: function(e) {
                    for (var t = [], r = 0; r < this.length; r += 1)
                        for (var n = this[r].children, i = 0; i < n.length; i += 1) e && !M(n[i]).is(e) || t.push(n[i]);
                    return M(t)
                },
                filter: function(e) {
                    return M(C(this, e))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(O).forEach((function(e) {
                Object.defineProperty(M.fn, e, {
                    value: O[e],
                    writable: !0
                })
            }));
            var L, _, A, I = M,
                z = r(4942);

            function D(e) {
                var t = e;
                Object.keys(t).forEach((function(e) {
                    try {
                        t[e] = null
                    } catch (r) {}
                    try {
                        delete t[e]
                    } catch (r) {}
                }))
            }

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return setTimeout(e, t)
            }

            function G() {
                return Date.now()
            }

            function j(e) {
                var t, r = f();
                return r.getComputedStyle && (t = r.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
            }

            function B(e) {
                var t, r, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                    a = f(),
                    s = j(e);
                return a.WebKitCSSMatrix ? ((r = s.transform || s.webkitTransform).split(",").length > 6 && (r = r.split(", ").map((function(e) {
                    return e.replace(",", ".")
                })).join(", ")), n = new a.WebKitCSSMatrix("none" === r ? "" : r)) : t = (n = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (r = a.WebKitCSSMatrix ? n.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === i && (r = a.WebKitCSSMatrix ? n.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), r || 0
            }

            function $(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function R(e) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function F() {
                for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], r = 1; r < arguments.length; r += 1) {
                    var n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                    if (null != n && !R(n))
                        for (var i = Object.keys(Object(n)).filter((function(e) {
                                return t.indexOf(e) < 0
                            })), a = 0, s = i.length; a < s; a += 1) {
                            var o = i[a],
                                l = Object.getOwnPropertyDescriptor(n, o);
                            void 0 !== l && l.enumerable && ($(e[o]) && $(n[o]) ? n[o].__swiper__ ? e[o] = n[o] : F(e[o], n[o]) : !$(e[o]) && $(n[o]) ? (e[o] = {}, n[o].__swiper__ ? e[o] = n[o] : F(e[o], n[o])) : e[o] = n[o])
                        }
                }
                return e
            }

            function H(e, t, r) {
                e.style.setProperty(t, r)
            }

            function V(e) {
                var t, r = e.swiper,
                    n = e.targetPosition,
                    i = e.side,
                    a = f(),
                    s = -r.translate,
                    o = null,
                    l = r.params.speed;
                r.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(r.cssModeFrameID);
                var d = n > s ? "next" : "prev",
                    c = function(e, t) {
                        return "next" === d && e >= t || "prev" === d && e <= t
                    };
                ! function e() {
                    t = (new Date).getTime(), null === o && (o = t);
                    var d = Math.max(Math.min((t - o) / l, 1), 0),
                        u = .5 - Math.cos(d * Math.PI) / 2,
                        p = s + u * (n - s);
                    if (c(p, n) && (p = n), r.wrapperEl.scrollTo((0, z.Z)({}, i, p)), c(p, n)) return r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.scrollSnapType = "", setTimeout((function() {
                        r.wrapperEl.style.overflow = "", r.wrapperEl.scrollTo((0, z.Z)({}, i, p))
                    })), void a.cancelAnimationFrame(r.cssModeFrameID);
                    r.cssModeFrameID = a.requestAnimationFrame(e)
                }()
            }

            function W() {
                return L || (L = function() {
                    var e = f(),
                        t = u();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            var t = !1;
                            try {
                                var r = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, r)
                            } catch (n) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), L
            }

            function Z() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.userAgent,
                    r = W(),
                    n = f(),
                    i = n.navigator.platform,
                    a = t || n.navigator.userAgent,
                    s = {
                        ios: !1,
                        android: !1
                    },
                    o = n.screen.width,
                    l = n.screen.height,
                    d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                    c = a.match(/(iPad).*OS\s([\d_]+)/),
                    u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                    p = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    v = "Win32" === i,
                    h = "MacIntel" === i,
                    g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
                return !c && h && r.touch && g.indexOf("".concat(o, "x").concat(l)) >= 0 && ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), h = !1), d && !v && (s.os = "android", s.android = !0), (c || p || u) && (s.os = "ios", s.ios = !0), s
            }

            function q() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return _ || (_ = Z(e)), _
            }

            function X() {
                return A || (A = function() {
                    var e, t = f();
                    return {
                        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                    }
                }()), A
            }
            var Y = {
                on: function(e, t, r) {
                    var n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" != typeof t) return n;
                    var i = r ? "unshift" : "push";
                    return e.split(" ").forEach((function(e) {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
                    })), n
                },
                once: function(e, t, r) {
                    var n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" != typeof t) return n;

                    function i() {
                        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                        for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                        t.apply(n, a)
                    }
                    return i.__emitterProxy = t, n.on(e, i, r)
                },
                onAny: function(e, t) {
                    var r = this;
                    if (!r.eventsListeners || r.destroyed) return r;
                    if ("function" != typeof e) return r;
                    var n = t ? "unshift" : "push";
                    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
                },
                offAny: function(e) {
                    var t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    var r = t.eventsAnyListeners.indexOf(e);
                    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
                },
                off: function(e, t) {
                    var r = this;
                    return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((function(e) {
                        void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach((function(n, i) {
                            (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
                        }))
                    })), r) : r
                },
                emit: function() {
                    var e, t, r, i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if (!i.eventsListeners) return i;
                    for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++) s[o] = arguments[o];
                    "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), r = i) : (e = s[0].events, t = s[0].data, r = s[0].context || i), t.unshift(r);
                    var l = Array.isArray(e) ? e : e.split(" ");
                    return l.forEach((function(e) {
                        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((function(i) {
                            i.apply(r, [e].concat((0, n.Z)(t)))
                        })), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach((function(e) {
                            e.apply(r, t)
                        }))
                    })), i
                }
            };
            var U = {
                updateSize: function() {
                    var e, t, r = this,
                        n = r.$el;
                    e = void 0 !== r.params.width && null !== r.params.width ? r.params.width : n[0].clientWidth, t = void 0 !== r.params.height && null !== r.params.height ? r.params.height : n[0].clientHeight, 0 === e && r.isHorizontal() || 0 === t && r.isVertical() || (e = e - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), t = t - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(r, {
                        width: e,
                        height: t,
                        size: r.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function r(e, r) {
                        return parseFloat(e.getPropertyValue(t(r)) || 0)
                    }
                    var n = e.params,
                        i = e.$wrapperEl,
                        a = e.size,
                        s = e.rtlTranslate,
                        o = e.wrongRTL,
                        l = e.virtual && n.virtual.enabled,
                        d = l ? e.virtual.slides.length : e.slides.length,
                        c = i.children(".".concat(e.params.slideClass)),
                        u = l ? e.virtual.slides.length : c.length,
                        p = [],
                        f = [],
                        v = [],
                        h = n.slidesOffsetBefore;
                    "function" == typeof h && (h = n.slidesOffsetBefore.call(e));
                    var g = n.slidesOffsetAfter;
                    "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
                    var m = e.snapGrid.length,
                        w = e.slidesGrid.length,
                        y = n.spaceBetween,
                        b = -h,
                        S = 0,
                        E = 0;
                    if (void 0 !== a) {
                        "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * a), e.virtualSize = -y, s ? c.css({
                            marginLeft: "",
                            marginBottom: "",
                            marginTop: ""
                        }) : c.css({
                            marginRight: "",
                            marginBottom: "",
                            marginTop: ""
                        }), n.centeredSlides && n.cssMode && (H(e.wrapperEl, "--swiper-centered-offset-before", ""), H(e.wrapperEl, "--swiper-centered-offset-after", ""));
                        var T, x = n.grid && n.grid.rows > 1 && e.grid;
                        x && e.grid.initSlides(u);
                        for (var C = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((function(e) {
                                return void 0 !== n.breakpoints[e].slidesPerView
                            })).length > 0, M = 0; M < u; M += 1) {
                            T = 0;
                            var P = c.eq(M);
                            if (x && e.grid.updateSlide(M, P, u, t), "none" !== P.css("display")) {
                                if ("auto" === n.slidesPerView) {
                                    C && (c[M].style[t("width")] = "");
                                    var k = getComputedStyle(P[0]),
                                        O = P[0].style.transform,
                                        L = P[0].style.webkitTransform;
                                    if (O && (P[0].style.transform = "none"), L && (P[0].style.webkitTransform = "none"), n.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                                    else {
                                        var _ = r(k, "width"),
                                            A = r(k, "padding-left"),
                                            I = r(k, "padding-right"),
                                            D = r(k, "margin-left"),
                                            N = r(k, "margin-right"),
                                            G = k.getPropertyValue("box-sizing");
                                        if (G && "border-box" === G) T = _ + D + N;
                                        else {
                                            var j = P[0],
                                                B = j.clientWidth;
                                            T = _ + A + I + D + N + (j.offsetWidth - B)
                                        }
                                    }
                                    O && (P[0].style.transform = O), L && (P[0].style.webkitTransform = L), n.roundLengths && (T = Math.floor(T))
                                } else T = (a - (n.slidesPerView - 1) * y) / n.slidesPerView, n.roundLengths && (T = Math.floor(T)), c[M] && (c[M].style[t("width")] = "".concat(T, "px"));
                                c[M] && (c[M].swiperSlideSize = T), v.push(T), n.centeredSlides ? (b = b + T / 2 + S / 2 + y, 0 === S && 0 !== M && (b = b - a / 2 - y), 0 === M && (b = b - a / 2 - y), Math.abs(b) < .001 && (b = 0), n.roundLengths && (b = Math.floor(b)), E % n.slidesPerGroup == 0 && p.push(b), f.push(b)) : (n.roundLengths && (b = Math.floor(b)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && p.push(b), f.push(b), b = b + T + y), e.virtualSize += T + y, S = T, E += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, a) + g, s && o && ("slide" === n.effect || "coverflow" === n.effect) && i.css({
                                width: "".concat(e.virtualSize + n.spaceBetween, "px")
                            }), n.setWrapperSize && i.css((0, z.Z)({}, t("width"), "".concat(e.virtualSize + n.spaceBetween, "px"))), x && e.grid.updateWrapperSize(T, p, t), !n.centeredSlides) {
                            for (var $ = [], R = 0; R < p.length; R += 1) {
                                var F = p[R];
                                n.roundLengths && (F = Math.floor(F)), p[R] <= e.virtualSize - a && $.push(F)
                            }
                            p = $, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
                        }
                        if (0 === p.length && (p = [0]), 0 !== n.spaceBetween) {
                            var V = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
                            c.filter((function(e, t) {
                                return !n.cssMode || t !== c.length - 1
                            })).css((0, z.Z)({}, V, "".concat(y, "px")))
                        }
                        if (n.centeredSlides && n.centeredSlidesBounds) {
                            var W = 0;
                            v.forEach((function(e) {
                                W += e + (n.spaceBetween ? n.spaceBetween : 0)
                            }));
                            var Z = (W -= n.spaceBetween) - a;
                            p = p.map((function(e) {
                                return e < 0 ? -h : e > Z ? Z + g : e
                            }))
                        }
                        if (n.centerInsufficientSlides) {
                            var q = 0;
                            if (v.forEach((function(e) {
                                    q += e + (n.spaceBetween ? n.spaceBetween : 0)
                                })), (q -= n.spaceBetween) < a) {
                                var X = (a - q) / 2;
                                p.forEach((function(e, t) {
                                    p[t] = e - X
                                })), f.forEach((function(e, t) {
                                    f[t] = e + X
                                }))
                            }
                        }
                        if (Object.assign(e, {
                                slides: c,
                                snapGrid: p,
                                slidesGrid: f,
                                slidesSizesGrid: v
                            }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                            H(e.wrapperEl, "--swiper-centered-offset-before", "".concat(-p[0], "px")), H(e.wrapperEl, "--swiper-centered-offset-after", "".concat(e.size / 2 - v[v.length - 1] / 2, "px"));
                            var Y = -e.snapGrid[0],
                                U = -e.slidesGrid[0];
                            e.snapGrid = e.snapGrid.map((function(e) {
                                return e + Y
                            })), e.slidesGrid = e.slidesGrid.map((function(e) {
                                return e + U
                            }))
                        }
                        if (u !== d && e.emit("slidesLengthChange"), p.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !(l || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
                            var K = "".concat(n.containerModifierClass, "backface-hidden"),
                                J = e.$el.hasClass(K);
                            u <= n.maxBackfaceHiddenSlides ? J || e.$el.addClass(K) : J && e.$el.removeClass(K)
                        }
                    }
                },
                updateAutoHeight: function(e) {
                    var t, r = this,
                        n = [],
                        i = r.virtual && r.params.virtual.enabled,
                        a = 0;
                    "number" == typeof e ? r.setTransition(e) : !0 === e && r.setTransition(r.params.speed);
                    var s = function(e) {
                        return i ? r.slides.filter((function(t) {
                            return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                        }))[0] : r.slides.eq(e)[0]
                    };
                    if ("auto" !== r.params.slidesPerView && r.params.slidesPerView > 1)
                        if (r.params.centeredSlides)(r.visibleSlides || I([])).each((function(e) {
                            n.push(e)
                        }));
                        else
                            for (t = 0; t < Math.ceil(r.params.slidesPerView); t += 1) {
                                var o = r.activeIndex + t;
                                if (o > r.slides.length && !i) break;
                                n.push(s(o))
                            } else n.push(s(r.activeIndex));
                    for (t = 0; t < n.length; t += 1)
                        if (void 0 !== n[t]) {
                            var l = n[t].offsetHeight;
                            a = l > a ? l : a
                        }(a || 0 === a) && r.$wrapperEl.css("height", "".concat(a, "px"))
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                        t = this,
                        r = t.params,
                        n = t.slides,
                        i = t.rtlTranslate,
                        a = t.snapGrid;
                    if (0 !== n.length) {
                        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                        var s = -e;
                        i && (s = e), n.removeClass(r.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var o = 0; o < n.length; o += 1) {
                            var l = n[o],
                                d = l.swiperSlideOffset;
                            r.cssMode && r.centeredSlides && (d -= n[0].swiperSlideOffset);
                            var c = (s + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + r.spaceBetween),
                                u = (s - a[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + r.spaceBetween),
                                p = -(s - d),
                                f = p + t.slidesSizesGrid[o],
                                v = p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size;
                            v && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), n.eq(o).addClass(r.slideVisibleClass)), l.progress = i ? -c : c, l.originalProgress = i ? -u : u
                        }
                        t.visibleSlides = I(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    if (void 0 === e) {
                        var r = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * r || 0
                    }
                    var n = t.params,
                        i = t.maxTranslate() - t.minTranslate(),
                        a = t.progress,
                        s = t.isBeginning,
                        o = t.isEnd,
                        l = s,
                        d = o;
                    0 === i ? (a = 0, s = !0, o = !0) : (s = (a = (e - t.minTranslate()) / i) <= 0, o = a >= 1), Object.assign(t, {
                        progress: a,
                        isBeginning: s,
                        isEnd: o
                    }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !s || d && !o) && t.emit("fromEdge"), t.emit("progress", a)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        r = t.slides,
                        n = t.params,
                        i = t.$wrapperEl,
                        a = t.activeIndex,
                        s = t.realIndex,
                        o = t.virtual && n.virtual.enabled;
                    r.removeClass("".concat(n.slideActiveClass, " ").concat(n.slideNextClass, " ").concat(n.slidePrevClass, " ").concat(n.slideDuplicateActiveClass, " ").concat(n.slideDuplicateNextClass, " ").concat(n.slideDuplicatePrevClass)), (e = o ? t.$wrapperEl.find(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(a, '"]')) : r.eq(a)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? i.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(s, '"]')).addClass(n.slideDuplicateActiveClass) : i.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(s, '"]')).addClass(n.slideDuplicateActiveClass));
                    var l = e.nextAll(".".concat(n.slideClass)).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = r.eq(0)).addClass(n.slideNextClass);
                    var d = e.prevAll(".".concat(n.slideClass)).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === d.length && (d = r.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass) : i.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass), d.hasClass(n.slideDuplicateClass) ? i.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass) : i.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass)), t.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    var t, r = this,
                        n = r.rtlTranslate ? r.translate : -r.translate,
                        i = r.slidesGrid,
                        a = r.snapGrid,
                        s = r.params,
                        o = r.activeIndex,
                        l = r.realIndex,
                        d = r.snapIndex,
                        c = e;
                    if (void 0 === c) {
                        for (var u = 0; u < i.length; u += 1) void 0 !== i[u + 1] ? n >= i[u] && n < i[u + 1] - (i[u + 1] - i[u]) / 2 ? c = u : n >= i[u] && n < i[u + 1] && (c = u + 1) : n >= i[u] && (c = u);
                        s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }
                    if (a.indexOf(n) >= 0) t = a.indexOf(n);
                    else {
                        var p = Math.min(s.slidesPerGroupSkip, c);
                        t = p + Math.floor((c - p) / s.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1), c !== o) {
                        var f = parseInt(r.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                        Object.assign(r, {
                            snapIndex: t,
                            realIndex: f,
                            previousIndex: o,
                            activeIndex: c
                        }), r.emit("activeIndexChange"), r.emit("snapIndexChange"), l !== f && r.emit("realIndexChange"), (r.initialized || r.params.runCallbacksOnInit) && r.emit("slideChange")
                    } else t !== d && (r.snapIndex = t, r.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t, r = this,
                        n = r.params,
                        i = I(e).closest(".".concat(n.slideClass))[0],
                        a = !1;
                    if (i)
                        for (var s = 0; s < r.slides.length; s += 1)
                            if (r.slides[s] === i) {
                                a = !0, t = s;
                                break
                            }
                    if (!i || !a) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
                    r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(I(i).attr("data-swiper-slide-index"), 10) : r.clickedIndex = t, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
                }
            };
            var K = {
                getTranslate: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                        t = this,
                        r = t.params,
                        n = t.rtlTranslate,
                        i = t.translate,
                        a = t.$wrapperEl;
                    if (r.virtualTranslate) return n ? -i : i;
                    if (r.cssMode) return i;
                    var s = B(a[0], e);
                    return n && (s = -s), s || 0
                },
                setTranslate: function(e, t) {
                    var r = this,
                        n = r.rtlTranslate,
                        i = r.params,
                        a = r.$wrapperEl,
                        s = r.wrapperEl,
                        o = r.progress,
                        l = 0,
                        d = 0;
                    r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), i.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || a.transform("translate3d(".concat(l, "px, ").concat(d, "px, ").concat(0, "px)")), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d;
                    var c = r.maxTranslate() - r.minTranslate();
                    (0 === c ? 0 : (e - r.minTranslate()) / c) !== o && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 ? arguments[4] : void 0,
                        a = this,
                        s = a.params,
                        o = a.wrapperEl;
                    if (a.animating && s.preventInteractionOnTransition) return !1;
                    var l, d = a.minTranslate(),
                        c = a.maxTranslate();
                    if (l = n && e > d ? d : n && e < c ? c : e, a.updateProgress(l), s.cssMode) {
                        var u = a.isHorizontal();
                        if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
                        else {
                            var p;
                            if (!a.support.smoothScroll) return V({
                                swiper: a,
                                targetPosition: -l,
                                side: u ? "left" : "top"
                            }), !0;
                            o.scrollTo((p = {}, (0, z.Z)(p, u ? "left" : "top", -l), (0, z.Z)(p, "behavior", "smooth"), p))
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(l), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(l), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, r && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function J(e) {
                var t = e.swiper,
                    r = e.runCallbacks,
                    n = e.direction,
                    i = e.step,
                    a = t.activeIndex,
                    s = t.previousIndex,
                    o = n;
                if (o || (o = a > s ? "next" : a < s ? "prev" : "reset"), t.emit("transition".concat(i)), r && a !== s) {
                    if ("reset" === o) return void t.emit("slideResetTransition".concat(i));
                    t.emit("slideChangeTransition".concat(i)), "next" === o ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i))
                }
            }
            var Q = {
                setTransition: function(e, t) {
                    var r = this;
                    r.params.cssMode || r.$wrapperEl.transition(e), r.emit("setTransition", e, t)
                },
                transitionStart: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = this,
                        n = r.params;
                    n.cssMode || (n.autoHeight && r.updateAutoHeight(), J({
                        swiper: r,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = this,
                        n = r.params;
                    r.animating = !1, n.cssMode || (r.setTransition(0), J({
                        swiper: r,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            };
            var ee = {
                slideTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    if ("number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(typeof e, "] given."));
                    if ("string" == typeof e) {
                        var a = parseInt(e, 10),
                            s = isFinite(a);
                        if (!s) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
                        e = a
                    }
                    var o = this,
                        l = e;
                    l < 0 && (l = 0);
                    var d = o.params,
                        c = o.snapGrid,
                        u = o.slidesGrid,
                        p = o.previousIndex,
                        f = o.activeIndex,
                        v = o.rtlTranslate,
                        h = o.wrapperEl,
                        g = o.enabled;
                    if (o.animating && d.preventInteractionOnTransition || !g && !n && !i) return !1;
                    var m = Math.min(o.params.slidesPerGroupSkip, l),
                        w = m + Math.floor((l - m) / o.params.slidesPerGroup);
                    w >= c.length && (w = c.length - 1);
                    var y, b = -c[w];
                    if (d.normalizeSlideIndex)
                        for (var S = 0; S < u.length; S += 1) {
                            var E = -Math.floor(100 * b),
                                T = Math.floor(100 * u[S]),
                                x = Math.floor(100 * u[S + 1]);
                            void 0 !== u[S + 1] ? E >= T && E < x - (x - T) / 2 ? l = S : E >= T && E < x && (l = S + 1) : E >= T && (l = S)
                        }
                    if (o.initialized && l !== f) {
                        if (!o.allowSlideNext && b < o.translate && b < o.minTranslate()) return !1;
                        if (!o.allowSlidePrev && b > o.translate && b > o.maxTranslate() && (f || 0) !== l) return !1
                    }
                    if (l !== (p || 0) && r && o.emit("beforeSlideChangeStart"), o.updateProgress(b), y = l > f ? "next" : l < f ? "prev" : "reset", v && -b === o.translate || !v && b === o.translate) return o.updateActiveIndex(l), d.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== d.effect && o.setTranslate(b), "reset" !== y && (o.transitionStart(r, y), o.transitionEnd(r, y)), !1;
                    if (d.cssMode) {
                        var C = o.isHorizontal(),
                            M = v ? b : -b;
                        if (0 === t) {
                            var P = o.virtual && o.params.virtual.enabled;
                            P && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), h[C ? "scrollLeft" : "scrollTop"] = M, P && requestAnimationFrame((function() {
                                o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1
                            }))
                        } else {
                            var k;
                            if (!o.support.smoothScroll) return V({
                                swiper: o,
                                targetPosition: M,
                                side: C ? "left" : "top"
                            }), !0;
                            h.scrollTo((k = {}, (0, z.Z)(k, C ? "left" : "top", M), (0, z.Z)(k, "behavior", "smooth"), k))
                        }
                        return !0
                    }
                    return o.setTransition(t), o.setTranslate(b), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, n), o.transitionStart(r, y), 0 === t ? o.transitionEnd(r, y) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(r, y))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0;
                    if ("string" == typeof e) {
                        var i = parseInt(e, 10),
                            a = isFinite(i);
                        if (!a) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
                        e = i
                    }
                    var s = this,
                        o = e;
                    return s.params.loop && (o += s.loopedSlides), s.slideTo(o, t, r, n)
                },
                slideNext: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = this,
                        i = n.animating,
                        a = n.enabled,
                        s = n.params;
                    if (!a) return n;
                    var o = s.slidesPerGroup;
                    "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                    var l = n.activeIndex < s.slidesPerGroupSkip ? 1 : o;
                    if (s.loop) {
                        if (i && s.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    return s.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
                },
                slidePrev: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = this,
                        i = n.params,
                        a = n.animating,
                        s = n.snapGrid,
                        o = n.slidesGrid,
                        l = n.rtlTranslate,
                        d = n.enabled;
                    if (!d) return n;
                    if (i.loop) {
                        if (a && i.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    var c = l ? n.translate : -n.translate;

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var p, f = u(c),
                        v = s.map((function(e) {
                            return u(e)
                        })),
                        h = s[v.indexOf(f) - 1];
                    void 0 === h && i.cssMode && (s.forEach((function(e, t) {
                        f >= e && (p = t)
                    })), void 0 !== p && (h = s[p > 0 ? p - 1 : p]));
                    var g = 0;
                    if (void 0 !== h && ((g = o.indexOf(h)) < 0 && (g = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (g = g - n.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && n.isBeginning) {
                        var m = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                        return n.slideTo(m, e, t, r)
                    }
                    return n.slideTo(g, e, t, r)
                },
                slideReset: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = this;
                    return n.slideTo(n.activeIndex, e, t, r)
                },
                slideToClosest: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                        i = this,
                        a = i.activeIndex,
                        s = Math.min(i.params.slidesPerGroupSkip, a),
                        o = s + Math.floor((a - s) / i.params.slidesPerGroup),
                        l = i.rtlTranslate ? i.translate : -i.translate;
                    if (l >= i.snapGrid[o]) {
                        var d = i.snapGrid[o],
                            c = i.snapGrid[o + 1];
                        l - d > (c - d) * n && (a += i.params.slidesPerGroup)
                    } else {
                        var u = i.snapGrid[o - 1],
                            p = i.snapGrid[o];
                        l - u <= (p - u) * n && (a -= i.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, i.slidesGrid.length - 1), i.slideTo(a, e, t, r)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        r = t.params,
                        n = t.$wrapperEl,
                        i = "auto" === r.slidesPerView ? t.slidesPerViewDynamic() : r.slidesPerView,
                        a = t.clickedIndex;
                    if (r.loop) {
                        if (t.animating) return;
                        e = parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"), 10), r.centeredSlides ? a < t.loopedSlides - i / 2 || a > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), a = n.children(".".concat(r.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(r.slideDuplicateClass, ")")).eq(0).index(), N((function() {
                            t.slideTo(a)
                        }))) : t.slideTo(a) : a > t.slides.length - i ? (t.loopFix(), a = n.children(".".concat(r.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(r.slideDuplicateClass, ")")).eq(0).index(), N((function() {
                            t.slideTo(a)
                        }))) : t.slideTo(a)
                    } else t.slideTo(a)
                }
            };
            var te = {
                loopCreate: function() {
                    var e = this,
                        t = u(),
                        r = e.params,
                        n = e.$wrapperEl,
                        i = n.children().length > 0 ? I(n.children()[0].parentNode) : n;
                    i.children(".".concat(r.slideClass, ".").concat(r.slideDuplicateClass)).remove();
                    var a = i.children(".".concat(r.slideClass));
                    if (r.loopFillGroupWithBlank) {
                        var s = r.slidesPerGroup - a.length % r.slidesPerGroup;
                        if (s !== r.slidesPerGroup) {
                            for (var o = 0; o < s; o += 1) {
                                var l = I(t.createElement("div")).addClass("".concat(r.slideClass, " ").concat(r.slideBlankClass));
                                i.append(l)
                            }
                            a = i.children(".".concat(r.slideClass))
                        }
                    }
                    "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10)), e.loopedSlides += r.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                    var d = [],
                        c = [];
                    a.each((function(e, t) {
                        I(e).attr("data-swiper-slide-index", t)
                    }));
                    for (var p = 0; p < e.loopedSlides; p += 1) {
                        var f = p - Math.floor(p / a.length) * a.length;
                        c.push(a.eq(f)[0]), d.unshift(a.eq(a.length - f - 1)[0])
                    }
                    for (var v = 0; v < c.length; v += 1) i.append(I(c[v].cloneNode(!0)).addClass(r.slideDuplicateClass));
                    for (var h = d.length - 1; h >= 0; h -= 1) i.prepend(I(d[h].cloneNode(!0)).addClass(r.slideDuplicateClass))
                },
                loopFix: function() {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t, r = e.activeIndex,
                        n = e.slides,
                        i = e.loopedSlides,
                        a = e.allowSlidePrev,
                        s = e.allowSlideNext,
                        o = e.snapGrid,
                        l = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var d = -o[r] - e.getTranslate();
                    if (r < i) t = n.length - 3 * i + r, t += i, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                    else if (r >= n.length - i) {
                        t = -n.length + r + i, t += i, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = a, e.allowSlideNext = s, e.emit("loopFix")
                },
                loopDestroy: function() {
                    var e = this,
                        t = e.$wrapperEl,
                        r = e.params,
                        n = e.slides;
                    t.children(".".concat(r.slideClass, ".").concat(r.slideDuplicateClass, ",.").concat(r.slideClass, ".").concat(r.slideBlankClass)).remove(), n.removeAttr("data-swiper-slide-index")
                }
            };

            function re(e) {
                var t = this,
                    r = u(),
                    n = f(),
                    i = t.touchEventsData,
                    a = t.params,
                    s = t.touches;
                if (t.enabled && (!t.animating || !a.preventInteractionOnTransition)) {
                    !t.animating && a.cssMode && a.loop && t.loopFix();
                    var o = e;
                    o.originalEvent && (o = o.originalEvent);
                    var l = I(o.target);
                    if (("wrapper" !== a.touchEventsTarget || l.closest(t.wrapperEl).length) && (i.isTouchEvent = "touchstart" === o.type, (i.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!i.isTouchEvent && "button" in o && o.button > 0 || i.isTouched && i.isMoved))) {
                        var d = !!a.noSwipingClass && "" !== a.noSwipingClass,
                            c = e.composedPath ? e.composedPath() : e.path;
                        d && o.target && o.target.shadowRoot && c && (l = I(c[0]));
                        var p = a.noSwipingSelector ? a.noSwipingSelector : ".".concat(a.noSwipingClass),
                            v = !(!o.target || !o.target.shadowRoot);
                        if (a.noSwiping && (v ? function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;

                                function r(t) {
                                    if (!t || t === u() || t === f()) return null;
                                    t.assignedSlot && (t = t.assignedSlot);
                                    var n = t.closest(e);
                                    return n || t.getRootNode ? n || r(t.getRootNode().host) : null
                                }
                                return r(t)
                            }(p, l[0]) : l.closest(p)[0])) t.allowClick = !0;
                        else if (!a.swipeHandler || l.closest(a.swipeHandler)[0]) {
                            s.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, s.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                            var h = s.currentX,
                                g = s.currentY,
                                m = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                                w = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                            if (m && (h <= w || h >= n.innerWidth - w)) {
                                if ("prevent" !== m) return;
                                e.preventDefault()
                            }
                            if (Object.assign(i, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), s.startX = h, s.startY = g, i.touchStartTime = G(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== o.type) {
                                var y = !0;
                                l.is(i.focusableElements) && (y = !1, "SELECT" === l[0].nodeName && (i.isTouched = !1)), r.activeElement && I(r.activeElement).is(i.focusableElements) && r.activeElement !== l[0] && r.activeElement.blur();
                                var b = y && t.allowTouchMove && a.touchStartPreventDefault;
                                !a.touchStartForcePreventDefault && !b || l[0].isContentEditable || o.preventDefault()
                            }
                            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
                        }
                    }
                }
            }

            function ne(e) {
                var t = u(),
                    r = this,
                    n = r.touchEventsData,
                    i = r.params,
                    a = r.touches,
                    s = r.rtlTranslate;
                if (r.enabled) {
                    var o = e;
                    if (o.originalEvent && (o = o.originalEvent), n.isTouched) {
                        if (!n.isTouchEvent || "touchmove" === o.type) {
                            var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                                d = "touchmove" === o.type ? l.pageX : o.pageX,
                                c = "touchmove" === o.type ? l.pageY : o.pageY;
                            if (o.preventedByNestedSwiper) return a.startX = d, void(a.startY = c);
                            if (!r.allowTouchMove) return I(o.target).is(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(a, {
                                startX: d,
                                startY: c,
                                currentX: d,
                                currentY: c
                            }), n.touchStartTime = G()));
                            if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                if (r.isVertical()) {
                                    if (c < a.startY && r.translate <= r.maxTranslate() || c > a.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                                } else if (d < a.startX && r.translate <= r.maxTranslate() || d > a.startX && r.translate >= r.minTranslate()) return;
                            if (n.isTouchEvent && t.activeElement && o.target === t.activeElement && I(o.target).is(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
                            if (n.allowTouchCallbacks && r.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                                a.currentX = d, a.currentY = c;
                                var p = a.currentX - a.startX,
                                    f = a.currentY - a.startY;
                                if (!(r.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < r.params.threshold)) {
                                    var v;
                                    if (void 0 === n.isScrolling) r.isHorizontal() && a.currentY === a.startY || r.isVertical() && a.currentX === a.startX ? n.isScrolling = !1 : p * p + f * f >= 25 && (v = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, n.isScrolling = r.isHorizontal() ? v > i.touchAngle : 90 - v > i.touchAngle);
                                    if (n.isScrolling && r.emit("touchMoveOpposite", o), void 0 === n.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                                    else if (n.startMoving) {
                                        r.allowClick = !1, !i.cssMode && o.cancelable && o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation(), n.isMoved || (i.loop && !i.cssMode && r.loopFix(), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", o)), r.emit("sliderMove", o), n.isMoved = !0;
                                        var h = r.isHorizontal() ? p : f;
                                        a.diff = h, h *= i.touchRatio, s && (h = -h), r.swipeDirection = h > 0 ? "prev" : "next", n.currentTranslate = h + n.startTranslate;
                                        var g = !0,
                                            m = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (m = 0), h > 0 && n.currentTranslate > r.minTranslate() ? (g = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + Math.pow(-r.minTranslate() + n.startTranslate + h, m))) : h < 0 && n.currentTranslate < r.maxTranslate() && (g = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - Math.pow(r.maxTranslate() - n.startTranslate - h, m))), g && (o.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
                                            if (!(Math.abs(h) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                                            if (!n.allowThresholdMove) return n.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, n.currentTranslate = n.startTranslate, void(a.diff = r.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                        }
                                        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
                                    }
                                }
                            }
                        }
                    } else n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", o)
                }
            }

            function ie(e) {
                var t = this,
                    r = t.touchEventsData,
                    n = t.params,
                    i = t.touches,
                    a = t.rtlTranslate,
                    s = t.slidesGrid;
                if (t.enabled) {
                    var o = e;
                    if (o.originalEvent && (o = o.originalEvent), r.allowTouchCallbacks && t.emit("touchEnd", o), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && n.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
                    n.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var l, d = G(),
                        c = d - r.touchStartTime;
                    if (t.allowClick) {
                        var u = o.path || o.composedPath && o.composedPath();
                        t.updateClickedSlide(u && u[0] || o.target), t.emit("tap click", o), c < 300 && d - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
                    }
                    if (r.lastClickTime = G(), N((function() {
                            t.destroyed || (t.allowClick = !0)
                        })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === i.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
                    if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, l = n.followFinger ? a ? t.translate : -t.translate : -r.currentTranslate, !n.cssMode)
                        if (t.params.freeMode && n.freeMode.enabled) t.freeMode.onTouchEnd({
                            currentPos: l
                        });
                        else {
                            for (var p = 0, f = t.slidesSizesGrid[0], v = 0; v < s.length; v += v < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                                var h = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                                void 0 !== s[v + h] ? l >= s[v] && l < s[v + h] && (p = v, f = s[v + h] - s[v]) : l >= s[v] && (p = v, f = s[s.length - 1] - s[s.length - 2])
                            }
                            var g = null,
                                m = null;
                            n.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                            var w = (l - s[p]) / f,
                                y = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                            if (c > n.longSwipesMs) {
                                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (w >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? g : p + y) : t.slideTo(p)), "prev" === t.swipeDirection && (w > 1 - n.longSwipesRatio ? t.slideTo(p + y) : null !== m && w < 0 && Math.abs(w) > n.longSwipesRatio ? t.slideTo(m) : t.slideTo(p))
                            } else {
                                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(p + y) : t.slideTo(p) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : p + y), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p))
                            }
                        }
                }
            }

            function ae() {
                var e = this,
                    t = e.params,
                    r = e.el;
                if (!r || 0 !== r.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var n = e.allowSlideNext,
                        i = e.allowSlidePrev,
                        a = e.snapGrid;
                    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
                }
            }

            function se(e) {
                var t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function oe() {
                var e = this,
                    t = e.wrapperEl,
                    r = e.rtlTranslate;
                if (e.enabled) {
                    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                    var n = e.maxTranslate() - e.minTranslate();
                    (0 === n ? 0 : (e.translate - e.minTranslate()) / n) !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
                }
            }
            var le = !1;

            function de() {}
            var ce = function(e, t) {
                var r = u(),
                    n = e.params,
                    i = e.touchEvents,
                    a = e.el,
                    s = e.wrapperEl,
                    o = e.device,
                    l = e.support,
                    d = !!n.nested,
                    c = "on" === t ? "addEventListener" : "removeEventListener",
                    p = t;
                if (l.touch) {
                    var f = !("touchstart" !== i.start || !l.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a[c](i.start, e.onTouchStart, f), a[c](i.move, e.onTouchMove, l.passiveListener ? {
                        passive: !1,
                        capture: d
                    } : d), a[c](i.end, e.onTouchEnd, f), i.cancel && a[c](i.cancel, e.onTouchEnd, f)
                } else a[c](i.start, e.onTouchStart, !1), r[c](i.move, e.onTouchMove, d), r[c](i.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && a[c]("click", e.onClick, !0), n.cssMode && s[c]("scroll", e.onScroll), n.updateOnWindowResize ? e[p](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ae, !0) : e[p]("observerUpdate", ae, !0)
            };
            var ue = {
                    attachEvents: function() {
                        var e = this,
                            t = u(),
                            r = e.params,
                            n = e.support;
                        e.onTouchStart = re.bind(e), e.onTouchMove = ne.bind(e), e.onTouchEnd = ie.bind(e), r.cssMode && (e.onScroll = oe.bind(e)), e.onClick = se.bind(e), n.touch && !le && (t.addEventListener("touchstart", de), le = !0), ce(e, "on")
                    },
                    detachEvents: function() {
                        ce(this, "off")
                    }
                },
                pe = function(e, t) {
                    return e.grid && t.grid && t.grid.rows > 1
                };
            var fe = {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        r = e.initialized,
                        n = e.loopedSlides,
                        i = void 0 === n ? 0 : n,
                        a = e.params,
                        s = e.$el,
                        o = a.breakpoints;
                    if (o && (!o || 0 !== Object.keys(o).length)) {
                        var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                        if (l && e.currentBreakpoint !== l) {
                            var d = (l in o ? o[l] : void 0) || e.originalParams,
                                c = pe(e, a),
                                u = pe(e, d),
                                p = a.enabled;
                            c && !u ? (s.removeClass("".concat(a.containerModifierClass, "grid ").concat(a.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !c && u && (s.addClass("".concat(a.containerModifierClass, "grid")), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === a.grid.fill) && s.addClass("".concat(a.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((function(t) {
                                var r = a[t] && a[t].enabled,
                                    n = d[t] && d[t].enabled;
                                r && !n && e[t].disable(), !r && n && e[t].enable()
                            }));
                            var f = d.direction && d.direction !== a.direction,
                                v = a.loop && (d.slidesPerView !== a.slidesPerView || f);
                            f && r && e.changeDirection(), F(e.params, d);
                            var h = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), v && r && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    if (e && ("container" !== t || r)) {
                        var n = !1,
                            i = f(),
                            a = "window" === t ? i.innerHeight : r.clientHeight,
                            s = Object.keys(e).map((function(e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var t = parseFloat(e.substr(1));
                                    return {
                                        value: a * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        s.sort((function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var o = 0; o < s.length; o += 1) {
                            var l = s[o],
                                d = l.point,
                                c = l.value;
                            "window" === t ? i.matchMedia("(min-width: ".concat(c, "px)")).matches && (n = d) : c <= r.clientWidth && (n = d)
                        }
                        return n || "max"
                    }
                }
            };
            var ve = {
                addClasses: function() {
                    var e, t, r, i = this,
                        a = i.classNames,
                        s = i.params,
                        o = i.rtl,
                        l = i.$el,
                        d = i.device,
                        c = i.support,
                        u = (e = ["initialized", s.direction, {
                            "pointer-events": !c.touch
                        }, {
                            "free-mode": i.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: o
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: d.android
                        }, {
                            ios: d.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], t = s.containerModifierClass, r = [], e.forEach((function(e) {
                            "object" == typeof e ? Object.keys(e).forEach((function(n) {
                                e[n] && r.push(t + n)
                            })) : "string" == typeof e && r.push(t + e)
                        })), r);
                    a.push.apply(a, (0, n.Z)(u)), l.addClass((0, n.Z)(a).join(" ")), i.emitContainerClasses()
                },
                removeClasses: function() {
                    var e = this,
                        t = e.$el,
                        r = e.classNames;
                    t.removeClass(r.join(" ")), e.emitContainerClasses()
                }
            };
            var he = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
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
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
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
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function ge(e, t) {
                return function() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = Object.keys(r)[0],
                        i = r[n];
                    "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in i ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), F(t, r)) : F(t, r)) : F(t, r)
                }
            }
            var me = {
                    eventsEmitter: Y,
                    update: U,
                    translate: K,
                    transition: Q,
                    slide: ee,
                    loop: te,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            var t = this;
                            if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                                var r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                                r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab"
                            }
                        },
                        unsetGrabCursor: function() {
                            var e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: ue,
                    breakpoints: fe,
                    checkOverflow: {
                        checkOverflow: function() {
                            var e = this,
                                t = e.isLocked,
                                r = e.params,
                                n = r.slidesOffsetBefore;
                            if (n) {
                                var i = e.slides.length - 1,
                                    a = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * n;
                                e.isLocked = e.size > a
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: ve,
                    images: {
                        loadImage: function(e, t, r, n, i, a) {
                            var s, o = f();

                            function l() {
                                a && a()
                            }
                            I(e).parent("picture")[0] || e.complete && i ? l() : t ? ((s = new o.Image).onload = l, s.onerror = l, n && (s.sizes = n), r && (s.srcset = r), t && (s.src = t)) : l()
                        },
                        preloadImages: function() {
                            var e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (var r = 0; r < e.imagesToLoad.length; r += 1) {
                                var n = e.imagesToLoad[r];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                we = {},
                ye = function() {
                    function e() {
                        var t, r;
                        i(this, e);
                        for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++) s[o] = arguments[o];
                        if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? r = s[0] : (t = s[0], r = s[1]), r || (r = {}), r = F({}, r), t && !r.el && (r.el = t), r.el && I(r.el).length > 1) {
                            var l = [];
                            return I(r.el).each((function(t) {
                                var n = F({}, r, {
                                    el: t
                                });
                                l.push(new e(n))
                            })), l
                        }
                        var d, c = this;
                        (c.__swiper__ = !0, c.support = W(), c.device = q({
                            userAgent: r.userAgent
                        }), c.browser = X(), c.eventsListeners = {}, c.eventsAnyListeners = [], c.modules = (0, n.Z)(c.__modules__), r.modules && Array.isArray(r.modules)) && (d = c.modules).push.apply(d, (0, n.Z)(r.modules));
                        var u = {};
                        c.modules.forEach((function(e) {
                            e({
                                swiper: c,
                                extendParams: ge(r, u),
                                on: c.on.bind(c),
                                once: c.once.bind(c),
                                off: c.off.bind(c),
                                emit: c.emit.bind(c)
                            })
                        }));
                        var p, f, v = F({}, he, u);
                        return c.params = F({}, v, we, r), c.originalParams = F({}, c.params), c.passedParams = F({}, r), c.params && c.params.on && Object.keys(c.params.on).forEach((function(e) {
                            c.on(e, c.params.on[e])
                        })), c.params && c.params.onAny && c.onAny(c.params.onAny), c.$ = I, Object.assign(c, {
                            enabled: c.params.enabled,
                            el: t,
                            classNames: [],
                            slides: I(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === c.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === c.params.direction
                            },
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: c.params.allowSlideNext,
                            allowSlidePrev: c.params.allowSlidePrev,
                            touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], f = ["pointerdown", "pointermove", "pointerup"], c.touchEventsTouch = {
                                start: p[0],
                                move: p[1],
                                end: p[2],
                                cancel: p[3]
                            }, c.touchEventsDesktop = {
                                start: f[0],
                                move: f[1],
                                end: f[2]
                            }, c.support.touch || !c.params.simulateTouch ? c.touchEventsTouch : c.touchEventsDesktop),
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
                                lastClickTime: G(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: c.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), c.emit("_swiper"), c.params.init && c.init(), c
                    }
                    return o(e, [{
                        key: "enable",
                        value: function() {
                            var e = this;
                            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            var e = this;
                            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                        }
                    }, {
                        key: "setProgress",
                        value: function(e, t) {
                            var r = this;
                            e = Math.min(Math.max(e, 0), 1);
                            var n = r.minTranslate(),
                                i = (r.maxTranslate() - n) * e + n;
                            r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
                        }
                    }, {
                        key: "emitContainerClasses",
                        value: function() {
                            var e = this;
                            if (e.params._emitClasses && e.el) {
                                var t = e.el.className.split(" ").filter((function(t) {
                                    return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)
                                }));
                                e.emit("_containerClasses", t.join(" "))
                            }
                        }
                    }, {
                        key: "getSlideClasses",
                        value: function(e) {
                            var t = this;
                            return t.destroyed ? "" : e.className.split(" ").filter((function(e) {
                                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                            })).join(" ")
                        }
                    }, {
                        key: "emitSlidesClasses",
                        value: function() {
                            var e = this;
                            if (e.params._emitClasses && e.el) {
                                var t = [];
                                e.slides.each((function(r) {
                                    var n = e.getSlideClasses(r);
                                    t.push({
                                        slideEl: r,
                                        classNames: n
                                    }), e.emit("_slideClass", r, n)
                                })), e.emit("_slideClasses", t)
                            }
                        }
                    }, {
                        key: "slidesPerViewDynamic",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this,
                                n = r.params,
                                i = r.slides,
                                a = r.slidesGrid,
                                s = r.slidesSizesGrid,
                                o = r.size,
                                l = r.activeIndex,
                                d = 1;
                            if (n.centeredSlides) {
                                for (var c, u = i[l].swiperSlideSize, p = l + 1; p < i.length; p += 1) i[p] && !c && (d += 1, (u += i[p].swiperSlideSize) > o && (c = !0));
                                for (var f = l - 1; f >= 0; f -= 1) i[f] && !c && (d += 1, (u += i[f].swiperSlideSize) > o && (c = !0))
                            } else if ("current" === e)
                                for (var v = l + 1; v < i.length; v += 1) {
                                    var h = t ? a[v] + s[v] - a[l] < o : a[v] - a[l] < o;
                                    h && (d += 1)
                                } else
                                    for (var g = l - 1; g >= 0; g -= 1) {
                                        var m = a[l] - a[g] < o;
                                        m && (d += 1)
                                    }
                            return d
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this;
                            if (e && !e.destroyed) {
                                var t = e.snapGrid,
                                    r = e.params;
                                r.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                            }

                            function n() {
                                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                    r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                                e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
                            }
                        }
                    }, {
                        key: "changeDirection",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = this,
                                n = r.params.direction;
                            return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.$el.removeClass("".concat(r.params.containerModifierClass).concat(n)).addClass("".concat(r.params.containerModifierClass).concat(e)), r.emitContainerClasses(), r.params.direction = e, r.slides.each((function(t) {
                                "vertical" === e ? t.style.width = "" : t.style.height = ""
                            })), r.emit("changeDirection"), t && r.update()), r
                        }
                    }, {
                        key: "changeLanguageDirection",
                        value: function(e) {
                            var t = this;
                            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.$el.removeClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update())
                        }
                    }, {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            if (t.mounted) return !0;
                            var r = I(e || t.params.el);
                            if (!(e = r[0])) return !1;
                            e.swiper = t;
                            var n = function() {
                                    return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."))
                                },
                                i = function() {
                                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                        var t = I(e.shadowRoot.querySelector(n()));
                                        return t.children = function(e) {
                                            return r.children(e)
                                        }, t
                                    }
                                    return r.children ? r.children(n()) : I(r).children(n())
                                }();
                            if (0 === i.length && t.params.createElements) {
                                var a = u().createElement("div");
                                i = I(a), a.className = t.params.wrapperClass, r.append(a), r.children(".".concat(t.params.slideClass)).each((function(e) {
                                    i.append(e)
                                }))
                            }
                            return Object.assign(t, {
                                $el: r,
                                el: e,
                                $wrapperEl: i,
                                wrapperEl: i[0],
                                mounted: !0,
                                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                                wrongRTL: "-webkit-box" === i.css("display")
                            }), !0
                        }
                    }, {
                        key: "init",
                        value: function(e) {
                            var t = this;
                            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = this,
                                n = r.params,
                                i = r.$el,
                                a = r.$wrapperEl,
                                s = r.slides;
                            return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((function(e) {
                                r.off(e)
                            })), !1 !== e && (r.$el[0].swiper = null, D(r)), r.destroyed = !0), null
                        }
                    }], [{
                        key: "extendDefaults",
                        value: function(e) {
                            F(we, e)
                        }
                    }, {
                        key: "extendedDefaults",
                        get: function() {
                            return we
                        }
                    }, {
                        key: "defaults",
                        get: function() {
                            return he
                        }
                    }, {
                        key: "installModule",
                        value: function(t) {
                            e.prototype.__modules__ || (e.prototype.__modules__ = []);
                            var r = e.prototype.__modules__;
                            "function" == typeof t && r.indexOf(t) < 0 && r.push(t)
                        }
                    }, {
                        key: "use",
                        value: function(t) {
                            return Array.isArray(t) ? (t.forEach((function(t) {
                                return e.installModule(t)
                            })), e) : (e.installModule(t), e)
                        }
                    }]), e
                }();
            Object.keys(me).forEach((function(e) {
                Object.keys(me[e]).forEach((function(t) {
                    ye.prototype[t] = me[e][t]
                }))
            })), ye.use([function(e) {
                var t = e.swiper,
                    r = e.on,
                    n = e.emit,
                    i = f(),
                    a = null,
                    s = null,
                    o = function() {
                        t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
                    },
                    l = function() {
                        t && !t.destroyed && t.initialized && n("orientationchange")
                    };
                r("init", (function() {
                    t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((function(e) {
                        s = i.requestAnimationFrame((function() {
                            var r = t.width,
                                n = t.height,
                                i = r,
                                a = n;
                            e.forEach((function(e) {
                                var r = e.contentBoxSize,
                                    n = e.contentRect,
                                    s = e.target;
                                s && s !== t.el || (i = n ? n.width : (r[0] || r).inlineSize, a = n ? n.height : (r[0] || r).blockSize)
                            })), i === r && a === n || o()
                        }))
                    })), a.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", l))
                })), r("destroy", (function() {
                    s && i.cancelAnimationFrame(s), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", l)
                }))
            }, function(e) {
                var t = e.swiper,
                    r = e.extendParams,
                    n = e.on,
                    i = e.emit,
                    a = [],
                    s = f(),
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = s.MutationObserver || s.WebkitMutationObserver,
                            n = new r((function(e) {
                                if (1 !== e.length) {
                                    var t = function() {
                                        i("observerUpdate", e[0])
                                    };
                                    s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
                                } else i("observerUpdate", e[0])
                            }));
                        n.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), a.push(n)
                    };
                r({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), n("init", (function() {
                    if (t.params.observer) {
                        if (t.params.observeParents)
                            for (var e = t.$el.parents(), r = 0; r < e.length; r += 1) o(e[r]);
                        o(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), o(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), n("destroy", (function() {
                    a.forEach((function(e) {
                        e.disconnect()
                    })), a.splice(0, a.length)
                }))
            }]);
            var be = ye;

            function Se() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."))
            }

            function Ee(e) {
                var t = e.swiper,
                    r = e.extendParams,
                    n = e.on;
                r({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                }), t.a11y = {
                    clicked: !1
                };
                var i = null;

                function a(e) {
                    var t = i;
                    0 !== t.length && (t.html(""), t.html(e))
                }

                function s(e) {
                    e.attr("tabIndex", "0")
                }

                function o(e) {
                    e.attr("tabIndex", "-1")
                }

                function l(e, t) {
                    e.attr("role", t)
                }

                function d(e, t) {
                    e.attr("aria-roledescription", t)
                }

                function c(e, t) {
                    e.attr("aria-label", t)
                }

                function u(e) {
                    e.attr("aria-disabled", !0)
                }

                function p(e) {
                    e.attr("aria-disabled", !1)
                }

                function f(e) {
                    if (13 === e.keyCode || 32 === e.keyCode) {
                        var r = t.params.a11y,
                            n = I(e.target);
                        t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? a(r.lastSlideMessage) : a(r.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? a(r.firstSlideMessage) : a(r.prevSlideMessage)), t.pagination && n.is(Se(t.params.pagination.bulletClass)) && n[0].click()
                    }
                }

                function v() {
                    return t.pagination && t.pagination.bullets && t.pagination.bullets.length
                }

                function h() {
                    return v() && t.params.pagination.clickable
                }
                var g = function(e, t, r) {
                        s(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", f)), c(e, r),
                            function(e, t) {
                                e.attr("aria-controls", t)
                            }(e, t)
                    },
                    m = function() {
                        t.a11y.clicked = !0
                    },
                    w = function() {
                        requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                t.destroyed || (t.a11y.clicked = !1)
                            }))
                        }))
                    },
                    y = function(e) {
                        if (!t.a11y.clicked) {
                            var r = e.target.closest(".".concat(t.params.slideClass));
                            if (r && t.slides.includes(r)) {
                                var n = t.slides.indexOf(r) === t.activeIndex,
                                    i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(r);
                                n || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(r), 0))
                            }
                        }
                    },
                    b = function() {
                        var e = t.params.a11y;
                        e.itemRoleDescriptionMessage && d(I(t.slides), e.itemRoleDescriptionMessage), e.slideRole && l(I(t.slides), e.slideRole);
                        var r = t.params.loop ? t.slides.filter((function(e) {
                            return !e.classList.contains(t.params.slideDuplicateClass)
                        })).length : t.slides.length;
                        e.slideLabelMessage && t.slides.each((function(n, i) {
                            var a = I(n),
                                s = t.params.loop ? parseInt(a.attr("data-swiper-slide-index"), 10) : i;
                            c(a, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, r))
                        }))
                    },
                    S = function() {
                        var e = t.params.a11y;
                        t.$el.append(i);
                        var r = t.$el;
                        e.containerRoleDescriptionMessage && d(r, e.containerRoleDescriptionMessage), e.containerMessage && c(r, e.containerMessage);
                        var n, a, s, o = t.$wrapperEl,
                            l = e.id || o.attr("id") || "swiper-wrapper-".concat(function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
                                    t = function() {
                                        return Math.round(16 * Math.random()).toString(16)
                                    };
                                return "x".repeat(e).replace(/x/g, t)
                            }(16)),
                            u = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                        n = l, o.attr("id", n),
                            function(e, t) {
                                e.attr("aria-live", t)
                            }(o, u), b(), t.navigation && t.navigation.$nextEl && (a = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), a && a.length && g(a, l, e.nextSlideMessage), s && s.length && g(s, l, e.prevSlideMessage), h() && t.pagination.$el.on("keydown", Se(t.params.pagination.bulletClass), f), t.$el.on("focus", y, !0), t.$el.on("pointerdown", m, !0), t.$el.on("pointerup", w, !0)
                    };
                n("beforeInit", (function() {
                    i = I('<span class="'.concat(t.params.a11y.notificationClass, '" aria-live="assertive" aria-atomic="true"></span>'))
                })), n("afterInit", (function() {
                    t.params.a11y.enabled && S()
                })), n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (function() {
                    t.params.a11y.enabled && b()
                })), n("fromEdge toEdge afterInit lock unlock", (function() {
                    t.params.a11y.enabled && function() {
                        if (!t.params.loop && !t.params.rewind && t.navigation) {
                            var e = t.navigation,
                                r = e.$nextEl,
                                n = e.$prevEl;
                            n && n.length > 0 && (t.isBeginning ? (u(n), o(n)) : (p(n), s(n))), r && r.length > 0 && (t.isEnd ? (u(r), o(r)) : (p(r), s(r)))
                        }
                    }()
                })), n("paginationUpdate", (function() {
                    var e;
                    t.params.a11y.enabled && (e = t.params.a11y, v() && t.pagination.bullets.each((function(r) {
                        var n = I(r);
                        t.params.pagination.clickable && (s(n), t.params.pagination.renderBullet || (l(n, "button"), c(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, n.index() + 1)))), n.is(".".concat(t.params.pagination.bulletActiveClass)) ? n.attr("aria-current", "true") : n.removeAttr("aria-current")
                    })))
                })), n("destroy", (function() {
                    var e, r;
                    t.params.a11y.enabled && (i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (r = t.navigation.$prevEl), e && e.off("keydown", f), r && r.off("keydown", f), h() && t.pagination.$el.off("keydown", Se(t.params.pagination.bulletClass), f), t.$el.off("focus", y, !0), t.$el.off("pointerdown", m, !0), t.$el.off("pointerup", w, !0))
                }))
            }

            function Te(e) {
                var t, r = e.swiper,
                    n = e.extendParams,
                    i = e.on,
                    a = e.emit;

                function s() {
                    if (!r.size) return r.autoplay.running = !1, void(r.autoplay.paused = !1);
                    var e = r.slides.eq(r.activeIndex),
                        n = r.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || r.params.autoplay.delay), clearTimeout(t), t = N((function() {
                        var e;
                        r.params.autoplay.reverseDirection ? r.params.loop ? (r.loopFix(), e = r.slidePrev(r.params.speed, !0, !0), a("autoplay")) : r.isBeginning ? r.params.autoplay.stopOnLastSlide ? l() : (e = r.slideTo(r.slides.length - 1, r.params.speed, !0, !0), a("autoplay")) : (e = r.slidePrev(r.params.speed, !0, !0), a("autoplay")) : r.params.loop ? (r.loopFix(), e = r.slideNext(r.params.speed, !0, !0), a("autoplay")) : r.isEnd ? r.params.autoplay.stopOnLastSlide ? l() : (e = r.slideTo(0, r.params.speed, !0, !0), a("autoplay")) : (e = r.slideNext(r.params.speed, !0, !0), a("autoplay")), (r.params.cssMode && r.autoplay.running || !1 === e) && s()
                    }), n)
                }

                function o() {
                    return void 0 === t && (!r.autoplay.running && (r.autoplay.running = !0, a("autoplayStart"), s(), !0))
                }

                function l() {
                    return !!r.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), r.autoplay.running = !1, a("autoplayStop"), !0))
                }

                function d(e) {
                    r.autoplay.running && (r.autoplay.paused || (t && clearTimeout(t), r.autoplay.paused = !0, 0 !== e && r.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        r.$wrapperEl[0].addEventListener(e, p)
                    })) : (r.autoplay.paused = !1, s())))
                }

                function c() {
                    var e = u();
                    "hidden" === e.visibilityState && r.autoplay.running && d(), "visible" === e.visibilityState && r.autoplay.paused && (s(), r.autoplay.paused = !1)
                }

                function p(e) {
                    r && !r.destroyed && r.$wrapperEl && e.target === r.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        r.$wrapperEl[0].removeEventListener(e, p)
                    })), r.autoplay.paused = !1, r.autoplay.running ? s() : l())
                }

                function f() {
                    r.params.autoplay.disableOnInteraction ? l() : (a("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        r.$wrapperEl[0].removeEventListener(e, p)
                    }))
                }

                function v() {
                    r.params.autoplay.disableOnInteraction || (r.autoplay.paused = !1, a("autoplayResume"), s())
                }
                r.autoplay = {
                    running: !1,
                    paused: !1
                }, n({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), i("init", (function() {
                    r.params.autoplay.enabled && (o(), u().addEventListener("visibilitychange", c), r.params.autoplay.pauseOnMouseEnter && (r.$el.on("mouseenter", f), r.$el.on("mouseleave", v)))
                })), i("beforeTransitionStart", (function(e, t, n) {
                    r.autoplay.running && (n || !r.params.autoplay.disableOnInteraction ? r.autoplay.pause(t) : l())
                })), i("sliderFirstMove", (function() {
                    r.autoplay.running && (r.params.autoplay.disableOnInteraction ? l() : d())
                })), i("touchEnd", (function() {
                    r.params.cssMode && r.autoplay.paused && !r.params.autoplay.disableOnInteraction && s()
                })), i("destroy", (function() {
                    r.$el.off("mouseenter", f), r.$el.off("mouseleave", v), r.autoplay.running && l(), u().removeEventListener("visibilitychange", c)
                })), Object.assign(r.autoplay, {
                    pause: d,
                    run: s,
                    start: o,
                    stop: l
                })
            }

            function xe(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function Ce(e) {
                var t = e.swiper,
                    r = e.extendParams,
                    n = e.on;
                r({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                });
                ! function(e) {
                    var t, r = e.effect,
                        n = e.swiper,
                        i = e.on,
                        a = e.setTranslate,
                        s = e.setTransition,
                        o = e.overwriteParams,
                        l = e.perspective,
                        d = e.recreateShadows,
                        c = e.getEffectParams;
                    i("beforeInit", (function() {
                        if (n.params.effect === r) {
                            n.classNames.push("".concat(n.params.containerModifierClass).concat(r)), l && l() && n.classNames.push("".concat(n.params.containerModifierClass, "3d"));
                            var e = o ? o() : {};
                            Object.assign(n.params, e), Object.assign(n.originalParams, e)
                        }
                    })), i("setTranslate", (function() {
                        n.params.effect === r && a()
                    })), i("setTransition", (function(e, t) {
                        n.params.effect === r && s(t)
                    })), i("transitionEnd", (function() {
                        if (n.params.effect === r && d) {
                            if (!c || !c().slideShadows) return;
                            n.slides.each((function(e) {
                                n.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                            })), d()
                        }
                    })), i("virtualUpdate", (function() {
                        n.params.effect === r && (n.slides.length || (t = !0), requestAnimationFrame((function() {
                            t && n.slides && n.slides.length && (a(), t = !1)
                        })))
                    }))
                }({
                    effect: "fade",
                    swiper: t,
                    on: n,
                    setTranslate: function() {
                        for (var e = t.slides, r = t.params.fadeEffect, n = 0; n < e.length; n += 1) {
                            var i = t.slides.eq(n),
                                a = -i[0].swiperSlideOffset;
                            t.params.virtualTranslate || (a -= t.translate);
                            var s = 0;
                            t.isHorizontal() || (s = a, a = 0);
                            var o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                            xe(r, i).css({
                                opacity: o
                            }).transform("translate3d(".concat(a, "px, ").concat(s, "px, 0px)"))
                        }
                    },
                    setTransition: function(e) {
                        var r = t.params.fadeEffect.transformEl;
                        (r ? t.slides.find(r) : t.slides).transition(e),
                            function(e) {
                                var t = e.swiper,
                                    r = e.duration,
                                    n = e.transformEl,
                                    i = e.allSlides,
                                    a = t.slides,
                                    s = t.activeIndex,
                                    o = t.$wrapperEl;
                                if (t.params.virtualTranslate && 0 !== r) {
                                    var l = !1;
                                    (i ? n ? a.find(n) : a : n ? a.eq(s).find(n) : a.eq(s)).transitionEnd((function() {
                                        if (!l && t && !t.destroyed) {
                                            l = !0, t.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend"], r = 0; r < e.length; r += 1) o.trigger(e[r])
                                        }
                                    }))
                                }
                            }({
                                swiper: t,
                                duration: e,
                                transformEl: r,
                                allSlides: !0
                            })
                    },
                    overwriteParams: function() {
                        return {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !t.params.cssMode
                        }
                    }
                })
            }
        },
        907: function(e, t, r) {
            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        4942: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(9142);

            function i(e, t, r) {
                return (t = (0, n.Z)(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
        },
        2982: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(907);
            var i = r(181);

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, n.Z)(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || (0, i.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        9142: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(1002);

            function i(e) {
                var t = function(e, t) {
                    if ("object" !== (0, n.Z)(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(e, t || "default");
                        if ("object" !== (0, n.Z)(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === (0, n.Z)(t) ? t : String(t)
            }
        },
        1002: function(e, t, r) {
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        181: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(907);

            function i(e, t) {
                if (e) {
                    if ("string" == typeof e) return (0, n.Z)(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.Z)(e, t) : void 0
                }
            }
        }
    }
]);
//# sourceMappingURL=ebdcc4ab703664a7e4c4b89834c634bf058f4f62-63854fdcd43936eb9830.js.map