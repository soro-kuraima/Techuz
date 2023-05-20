/*! For license information please see d6ca18e0c3d54d9d53b2d4f11ba85f9aa0092c6e-347e6dccfbcc76a9ab54.js.LICENSE.txt */
(self.webpackChunktechuz_site = self.webpackChunktechuz_site || []).push([
    [370], {
        8688: function(e, t, r) {
            "use strict";
            r.d(t, {
                kO: function() {
                    return a
                },
                GT: function() {
                    return i
                },
                zZ: function() {
                    return c
                },
                VG: function() {
                    return s
                },
                Bh: function() {
                    return u
                },
                eG: function() {
                    return O
                },
                Kx: function() {
                    return C
                }
            });
            var n = r(7294),
                o = {
                    USD: ["Less than $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000 - $1,00,000", "$100,000+"],
                    INR: ["< INR 1,00,000", "INR 1,00,00 to 2,50,000", "INR 2,50,000 to 5,00,000", "INR 5,00,000"]
                },
                a = function(e) {
                    var t = e.fieldCss,
                        r = e.errorCss,
                        a = e.currency,
                        i = void 0 === a ? "USD" : a,
                        c = e.formValue,
                        s = e.handleChange,
                        u = e.errorMessage,
                        l = e.darkTheme,
                        p = void 0 !== l && l,
                        f = o[i];
                    return n.createElement(n.Fragment, null, n.createElement("select", {
                        className: t + ("" === c.budget ? "appearance-none\ttext-[#9ca3af]" : p ? "appearance-none text-white" : "appearance-none text-black"),
                        name: "budget",
                        value: c.budget,
                        onChange: s
                    }, n.createElement("option", {
                        value: "",
                        hidden: !0
                    }, "Estimated Budget"), f.map((function(e, t) {
                        return n.createElement("option", {
                            key: e + "-" + t,
                            value: e
                        }, e)
                    }))), "" !== u.budgetError && n.createElement("p", {
                        className: r
                    }, u.budgetError))
                },
                i = function(e) {
                    var t = e.fieldCss,
                        r = e.errorCss,
                        o = e.formValue,
                        a = e.handleChange,
                        i = e.errorMessage;
                    return n.createElement(n.Fragment, null, n.createElement("input", {
                        className: t,
                        type: "email",
                        name: "email",
                        placeholder: "Email Address",
                        value: o.email,
                        onChange: a
                    }), "" !== i.emailError && n.createElement("p", {
                        className: r
                    }, i.emailError))
                },
                c = function(e) {
                    var t = e.selectedFlagRef,
                        r = e.setToggleDropdown,
                        o = e.selctedCountryFlag;
                    return n.createElement("div", {
                        className: "selected-flag",
                        ref: t,
                        onClick: function() {
                            r((function(e) {
                                return !e
                            }))
                        }
                    }, n.createElement("span", null, o || ""), n.createElement("div", {
                        className: "selected-flag-arrow"
                    }))
                },
                s = function(e) {
                    var t = e.fieldCss,
                        r = e.errorCss,
                        o = e.formValue,
                        a = e.handleChange,
                        i = e.errorMessage;
                    return n.createElement(n.Fragment, null, n.createElement("input", {
                        className: t,
                        type: "text",
                        name: "fullName",
                        placeholder: "Full Name",
                        value: o.fullName,
                        onChange: a
                    }), "" !== i.fullNameError && n.createElement("p", {
                        className: r
                    }, i.fullNameError))
                },
                u = function(e) {
                    var t = e.fieldCss,
                        r = e.errorCss,
                        o = e.toggleDropdown,
                        a = e.flags,
                        i = e.customPhoneDropdownRef,
                        c = e.setSelectedCountryFlag,
                        s = e.setSelectedCountryDialCode,
                        u = e.setToggleDropdown,
                        l = e.handleChange,
                        p = e.errorMessage;
                    return n.createElement(n.Fragment, null, n.createElement("input", {
                        type: "tel",
                        className: t,
                        name: "phoneNumber",
                        onChange: l,
                        max: "18",
                        placeholder: "Phone Number"
                    }), o && n.createElement("ul", {
                        className: "customPhoneDropdown",
                        ref: i
                    }, a.map((function(e, t) {
                        return n.createElement("li", {
                            key: t + "_" + e.dial_code,
                            onClick: function() {
                                c(e.flag), s(e.dial_code), u(!1)
                            }
                        }, e.flag + " " + e.name + " " + e.dial_code)
                    }))), "" !== p.phoneNumberError && n.createElement("p", {
                        className: r
                    }, p.phoneNumberError))
                };

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var f = function(e) {
                var t, r;

                function o() {
                    var t;
                    return (t = e.call(this) || this).handleExpired = t.handleExpired.bind(p(t)), t.handleErrored = t.handleErrored.bind(p(t)), t.handleChange = t.handleChange.bind(p(t)), t.handleRecaptchaRef = t.handleRecaptchaRef.bind(p(t)), t
                }
                r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a = o.prototype;
                return a.getValue = function() {
                    return this.props.grecaptcha && void 0 !== this._widgetId ? this.props.grecaptcha.getResponse(this._widgetId) : null
                }, a.getWidgetId = function() {
                    return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
                }, a.execute = function() {
                    var e = this.props.grecaptcha;
                    if (e && void 0 !== this._widgetId) return e.execute(this._widgetId);
                    this._executeRequested = !0
                }, a.executeAsync = function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e.executionResolve = t, e.executionReject = r, e.execute()
                    }))
                }, a.reset = function() {
                    this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
                }, a.handleExpired = function() {
                    this.props.onExpired ? this.props.onExpired() : this.handleChange(null)
                }, a.handleErrored = function() {
                    this.props.onErrored && this.props.onErrored(), this.executionReject && (this.executionReject(), delete this.executionResolve, delete this.executionReject)
                }, a.handleChange = function(e) {
                    this.props.onChange && this.props.onChange(e), this.executionResolve && (this.executionResolve(e), delete this.executionReject, delete this.executionResolve)
                }, a.explicitRender = function() {
                    if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
                        var e = document.createElement("div");
                        this._widgetId = this.props.grecaptcha.render(e, {
                            sitekey: this.props.sitekey,
                            callback: this.handleChange,
                            theme: this.props.theme,
                            type: this.props.type,
                            tabindex: this.props.tabindex,
                            "expired-callback": this.handleExpired,
                            "error-callback": this.handleErrored,
                            size: this.props.size,
                            stoken: this.props.stoken,
                            hl: this.props.hl,
                            badge: this.props.badge
                        }), this.captcha.appendChild(e)
                    }
                    this._executeRequested && this.props.grecaptcha && void 0 !== this._widgetId && (this._executeRequested = !1, this.execute())
                }, a.componentDidMount = function() {
                    this.explicitRender()
                }, a.componentDidUpdate = function() {
                    this.explicitRender()
                }, a.componentWillUnmount = function() {
                    void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
                }, a.delayOfCaptchaIframeRemoving = function() {
                    var e = document.createElement("div");
                    for (document.body.appendChild(e), e.style.display = "none"; this.captcha.firstChild;) e.appendChild(this.captcha.firstChild);
                    setTimeout((function() {
                        document.body.removeChild(e)
                    }), 5e3)
                }, a.handleRecaptchaRef = function(e) {
                    this.captcha = e
                }, a.render = function() {
                    var e = this.props,
                        t = (e.sitekey, e.onChange, e.theme, e.type, e.tabindex, e.onExpired, e.onErrored, e.size, e.stoken, e.grecaptcha, e.badge, e.hl, function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]));
                    return n.createElement("div", l({}, t, {
                        ref: this.handleRecaptchaRef
                    }))
                }, o
            }(n.Component);
            f.displayName = "ReCAPTCHA", f.defaultProps = {
                onChange: function() {},
                theme: "light",
                type: "image",
                tabindex: 0,
                size: "normal",
                badge: "bottomright"
            };
            var d = r(5697),
                h = r.n(d),
                m = r(7492),
                g = r.n(m);

            function y() {
                return y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, y.apply(this, arguments)
            }
            var v = {},
                b = 0;
            var E = "onloadcallback";
            var w, x, S = (w = function() {
                    return "https://" + (("undefined" != typeof window && window.recaptchaOptions || {}).useRecaptchaNet ? "recaptcha.net" : "www.google.com") + "/recaptcha/api.js?onload=" + E + "&render=explicit"
                }, x = (x = {
                    callbackName: E,
                    globalName: "grecaptcha"
                }) || {}, function(e) {
                    var t = e.displayName || e.name || "Component",
                        r = function(t) {
                            var r, o;

                            function a(e, r) {
                                var n;
                                return (n = t.call(this, e, r) || this).state = {}, n.__scriptURL = "", n
                            }
                            o = t, (r = a).prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
                            var i = a.prototype;
                            return i.asyncScriptLoaderGetScriptLoaderID = function() {
                                return this.__scriptLoaderID || (this.__scriptLoaderID = "async-script-loader-" + b++), this.__scriptLoaderID
                            }, i.setupScriptURL = function() {
                                return this.__scriptURL = "function" == typeof w ? w() : w, this.__scriptURL
                            }, i.asyncScriptLoaderHandleLoad = function(e) {
                                var t = this;
                                this.setState(e, (function() {
                                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                                }))
                            }, i.asyncScriptLoaderTriggerOnScriptLoaded = function() {
                                var e = v[this.__scriptURL];
                                if (!e || !e.loaded) throw new Error("Script is not loaded.");
                                for (var t in e.observers) e.observers[t](e);
                                delete window[x.callbackName]
                            }, i.componentDidMount = function() {
                                var e = this,
                                    t = this.setupScriptURL(),
                                    r = this.asyncScriptLoaderGetScriptLoaderID(),
                                    n = x,
                                    o = n.globalName,
                                    a = n.callbackName,
                                    i = n.scriptId;
                                if (o && void 0 !== window[o] && (v[t] = {
                                        loaded: !0,
                                        observers: {}
                                    }), v[t]) {
                                    var c = v[t];
                                    return c && (c.loaded || c.errored) ? void this.asyncScriptLoaderHandleLoad(c) : void(c.observers[r] = function(t) {
                                        return e.asyncScriptLoaderHandleLoad(t)
                                    })
                                }
                                var s = {};
                                s[r] = function(t) {
                                    return e.asyncScriptLoaderHandleLoad(t)
                                }, v[t] = {
                                    loaded: !1,
                                    observers: s
                                };
                                var u = document.createElement("script");
                                for (var l in u.src = t, u.async = !0, x.attributes) u.setAttribute(l, x.attributes[l]);
                                i && (u.id = i);
                                var p = function(e) {
                                    if (v[t]) {
                                        var r = v[t].observers;
                                        for (var n in r) e(r[n]) && delete r[n]
                                    }
                                };
                                a && "undefined" != typeof window && (window[a] = function() {
                                    return e.asyncScriptLoaderTriggerOnScriptLoaded()
                                }), u.onload = function() {
                                    var e = v[t];
                                    e && (e.loaded = !0, p((function(t) {
                                        return !a && (t(e), !0)
                                    })))
                                }, u.onerror = function() {
                                    var e = v[t];
                                    e && (e.errored = !0, p((function(t) {
                                        return t(e), !0
                                    })))
                                }, document.body.appendChild(u)
                            }, i.componentWillUnmount = function() {
                                var e = this.__scriptURL;
                                if (!0 === x.removeOnUnmount)
                                    for (var t = document.getElementsByTagName("script"), r = 0; r < t.length; r += 1) t[r].src.indexOf(e) > -1 && t[r].parentNode && t[r].parentNode.removeChild(t[r]);
                                var n = v[e];
                                n && (delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()], !0 === x.removeOnUnmount && delete v[e])
                            }, i.render = function() {
                                var t = x.globalName,
                                    r = this.props,
                                    o = (r.asyncScriptOnLoad, r.forwardedRef),
                                    a = function(e, t) {
                                        if (null == e) return {};
                                        var r, n, o = {},
                                            a = Object.keys(e);
                                        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                        return o
                                    }(r, ["asyncScriptOnLoad", "forwardedRef"]);
                                return t && "undefined" != typeof window && (a[t] = void 0 !== window[t] ? window[t] : void 0), a.ref = o, (0, n.createElement)(e, a)
                            }, a
                        }(n.Component),
                        o = (0, n.forwardRef)((function(e, t) {
                            return (0, n.createElement)(r, y({}, e, {
                                forwardedRef: t
                            }))
                        }));
                    return o.displayName = "AsyncScriptLoader(" + t + ")", o.propTypes = {
                        asyncScriptOnLoad: h().func
                    }, g()(o, e)
                })(f),
                k = S,
                O = function(e) {
                    var t = e.errorCss,
                        r = e.recaptchaRef,
                        o = e.handleToken,
                        a = e.errorMessage,
                        i = e.darkTheme,
                        c = void 0 !== i && i;
                    return n.createElement(n.Fragment, null, n.createElement(k, {
                        theme: c ? "dark" : "light",
                        name: "token",
                        ref: r,
                        sitekey: "6LfVxnsjAAAAAPQtAwPDiTdNuW_ikoHVfSZJIAnD",
                        onChange: function(e) {
                            return o(e)
                        }
                    }), a.tokenError && n.createElement("p", {
                        className: t
                    }, a.tokenError))
                },
                C = function(e) {
                    var t = e.fieldCss,
                        r = e.errorCss,
                        o = e.formValue,
                        a = e.handleChange,
                        i = e.errorMessage;
                    return n.createElement(n.Fragment, null, n.createElement("textarea", {
                        className: t,
                        placeholder: "Describe your project briefly",
                        name: "message",
                        value: o.message,
                        onChange: a
                    }), "" !== i.messageError && n.createElement("p", {
                        className: r
                    }, i.messageError))
                }
        },
        4690: function(e, t, r) {
            "use strict";
            var n = r(7294),
                o = r(3009);
            t.Z = function(e) {
                var t = e.title,
                    r = e.noIndex,
                    a = void 0 !== r && r,
                    i = e.description,
                    c = e.children,
                    s = e.canonical,
                    u = (0, o.Z)(),
                    l = u.image,
                    p = u.siteUrl;
                return n.createElement(n.Fragment, null, n.createElement("meta", {
                    charSet: "utf-8"
                }), !!s && n.createElement("link", {
                    rel: "canonical",
                    href: s
                }), n.createElement("title", null, t), i && n.createElement("meta", {
                    name: "description",
                    property: "og:description",
                    content: i
                }), a && n.createElement("meta", {
                    name: "robots",
                    content: "noindex"
                }), n.createElement("meta", {
                    property: "og:title",
                    content: t
                }), n.createElement("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), n.createElement("meta", {
                    property: "og:type",
                    content: "website"
                }), n.createElement("meta", {
                    property: "og:url",
                    content: s
                }), n.createElement("meta", {
                    property: "og:image",
                    content: "" + p + l
                }), n.createElement("meta", {
                    name: "twitter:title",
                    content: t
                }), i && n.createElement("meta", {
                    name: "twitter:description",
                    content: i
                }), n.createElement("meta", {
                    name: "twitter:image",
                    content: "" + p + l
                }), n.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }), c || null)
            }
        },
        5455: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return p
                }
            });
            var n = r(5861),
                o = r(4687),
                a = r.n(o),
                i = r(1082),
                c = r(7294),
                s = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                },
                u = function(e) {
                    var t = (0, c.useState)({
                            fullNameError: "",
                            emailError: "",
                            budgetError: "",
                            phoneNumberError: "",
                            messageError: "",
                            tokenError: ""
                        }),
                        r = t[0],
                        n = t[1],
                        o = (0, c.useState)({
                            fullName: "",
                            email: "",
                            budget: "",
                            phoneNumber: "",
                            message: "",
                            token: ""
                        }),
                        a = o[0],
                        i = o[1];
                    return {
                        formValue: a,
                        errorMessage: r,
                        handleChange: function(e) {
                            e.persist();
                            var t = e.target.name,
                                r = e.target.value;
                            ! function(e, t, r) {
                                switch (t) {
                                    case "fullName":
                                        n(r ? function(e) {
                                            return Object.assign({}, e, {
                                                fullNameError: ""
                                            })
                                        } : function(e) {
                                            return Object.assign({}, e, {
                                                fullNameError: "Please enter the full name"
                                            })
                                        });
                                        break;
                                    case "email":
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(r) ? n((function(e) {
                                            return Object.assign({}, e, {
                                                emailError: ""
                                            })
                                        })) : n((function(e) {
                                            return Object.assign({}, e, {
                                                emailError: "Please enter the valid email"
                                            })
                                        }));
                                        break;
                                    case "budget":
                                        n(r ? function(e) {
                                            return Object.assign({}, e, {
                                                budgetError: ""
                                            })
                                        } : function(e) {
                                            return Object.assign({}, e, {
                                                budgetError: "Please select the budget"
                                            })
                                        });
                                        break;
                                    case "phoneNumber":
                                        /^[0-9]{7,15}$/i.test(r) ? n((function(e) {
                                            return Object.assign({}, e, {
                                                phoneNumberError: ""
                                            })
                                        })) : n((function(e) {
                                            return Object.assign({}, e, {
                                                phoneNumberError: "Please enter the valid phone number"
                                            })
                                        }));
                                        break;
                                    case "message":
                                        n(r ? function(e) {
                                            return Object.assign({}, e, {
                                                messageError: ""
                                            })
                                        } : function(e) {
                                            return Object.assign({}, e, {
                                                messageError: "Please enter the message"
                                            })
                                        });
                                        break;
                                    case "token":
                                        n(r ? function(e) {
                                            return Object.assign({}, e, {
                                                tokenError: ""
                                            })
                                        } : function(e) {
                                            return Object.assign({}, e, {
                                                messageError: "Please enter the message"
                                            })
                                        })
                                }
                            }(0, t, r), i((function(e) {
                                var n;
                                return Object.assign({}, e, ((n = {})[t] = r, n))
                            }))
                        },
                        handleToken: function(e) {
                            e ? (i((function(t) {
                                return Object.assign({}, t, {
                                    token: e
                                })
                            })), n((function(e) {
                                return Object.assign({}, e, {
                                    tokenError: ""
                                })
                            }))) : n((function(e) {
                                return Object.assign({}, e, {
                                    tokenError: "This field is required"
                                })
                            }))
                        },
                        handleSubmit: function(t, o) {
                            void 0 === o && (o = ""), t && t.preventDefault();
                            var i = Object.assign({}, r);
                            a.fullName || (i = Object.assign({}, i, {
                                fullNameError: "Please enter the full name"
                            })), a.email || (i = Object.assign({}, i, {
                                emailError: "Please enter the valid email"
                            })), a.budget || (i = Object.assign({}, i, {
                                budgetError: "Please select the budget"
                            })), a.phoneNumber || (i = Object.assign({}, i, {
                                phoneNumberError: "Please enter the valid phone number"
                            })), a.message || (i = Object.assign({}, i, {
                                messageError: "Please enter the message"
                            })), a.token || (i = Object.assign({}, i, {
                                tokenError: "This field is required"
                            })), n(i), Object.keys(i).some((function(e) {
                                return !!i[e]
                            })) || e(o)
                        }
                    }
                },
                l = {
                    "/hire-react-developers-india/": {
                        navigateTo: "/thankyou-react-india/",
                        appendToEmailSubjectLine: "React India PPC"
                    },
                    "/hire-react-developers-usa/": {
                        navigateTo: "/thankyou-react-usa/",
                        appendToEmailSubjectLine: "React USA PPC"
                    },
                    "/web-design-company/": {
                        navigateTo: "/ThanksForInquiry/",
                        appendToEmailSubjectLine: "PPC"
                    }
                },
                p = function() {
                    var e = (0, i.useStaticQuery)("2241385712").allFlagJson.flags,
                        t = c.createRef(),
                        r = (0, c.useRef)(null),
                        o = function() {
                            var e = (0, c.useState)("PENDING"),
                                t = e[0],
                                r = e[1];
                            return {
                                submitRequest: (0, c.useCallback)((function(e) {
                                    r("IN_PROGRESS"), fetch("/api/contact", Object.assign({}, s, {
                                        body: JSON.stringify(e)
                                    })).then((function(e) {
                                        return e.json
                                    })).then((function() {
                                        r("SUBMITTED")
                                    })).catch((function() {
                                        r("ERROR")
                                    }))
                                }), [r]),
                                status: t
                            }
                        }(),
                        p = o.submitRequest,
                        f = function() {
                            var e = function() {
                                var e = (0, n.Z)(a().mark((function e() {
                                    var t, r, n;
                                    return a().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, fetch("https://ipinfo.io/json?token=eafba5451587c4");
                                            case 2:
                                                if (!(r = e.sent).ok) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.next = 6, r.json();
                                            case 6:
                                                n = e.sent, t = n.country, e.next = 11;
                                                break;
                                            case 10:
                                                t = "IN";
                                            case 11:
                                                return e.abrupt("return", t);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                            return {
                                getIpLookup: e
                            }
                        }(),
                        d = f.getIpLookup,
                        h = (0, c.useRef)(null),
                        m = (0, c.useState)(!1),
                        g = m[0],
                        y = m[1],
                        v = (0, c.useState)(!1),
                        b = v[0],
                        E = v[1],
                        w = (0, c.useState)(null),
                        x = w[0],
                        S = w[1],
                        k = (0, c.useState)(null),
                        O = k[0],
                        C = k[1],
                        _ = (0, c.useCallback)((0, n.Z)(a().mark((function t() {
                            var r, n, o;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, d();
                                    case 2:
                                        r = t.sent, n = e.filter((function(e) {
                                            return e.code === r
                                        })), (o = n[0]) && (S(o.flag), C(o.dial_code));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), [e, d]),
                        j = function(e) {
                            r.current && (r.current.contains(e.target) || h.current.contains(e.target)) || y(!1)
                        },
                        L = (0, c.useCallback)((function() {
                            "undefined" != typeof window && g && window.addEventListener("click", j)
                        }), [g]),
                        N = (0, c.useCallback)((function() {
                            b || E(!0)
                        }), [b, E]);
                    (0, c.useEffect)((function() {
                        return _(), L(),
                            function() {
                                window.removeEventListener("click", j)
                            }
                    }), []);
                    var R = function() {
                            var e = (0, n.Z)(a().mark((function e(t) {
                                var r, n, o;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o = Object.assign({}, $), o = Object.assign({}, o, {
                                                phoneNumber: O + (null == $ ? void 0 : $.phoneNumber)
                                            }), e.next = 4, p(Object.assign({}, o, {
                                                appendToEmailSubjectLine: (null === (r = l[t]) || void 0 === r ? void 0 : r.appendToEmailSubjectLine) || "website"
                                            }));
                                        case 4:
                                            (0, i.navigate)((null === (n = l[t]) || void 0 === n ? void 0 : n.navigateTo) || "/thankyou/");
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        P = u(R),
                        T = P.handleChange,
                        $ = P.formValue,
                        I = P.errorMessage,
                        D = P.handleSubmit,
                        F = P.handleToken;
                    return {
                        handleChange: T,
                        errorMessage: I,
                        formValue: $,
                        handleSubmit: D,
                        handleToken: F,
                        flags: e,
                        recaptchaRef: t,
                        customPhoneDropdownRef: r,
                        selectedFlagRef: h,
                        toggleDropdown: g,
                        renderRecaptcha: b,
                        shouldRenderRecaptcha: N,
                        setToggleDropdown: y,
                        selctedCountryFlag: x,
                        setSelectedCountryFlag: S,
                        setSelectedCountryDialCode: C
                    }
                }
        },
        3009: function(e, t, r) {
            "use strict";
            var n = r(1082);
            t.Z = function() {
                return (0, n.useStaticQuery)("2967666753").site.siteMetadata
            }
        },
        7492: function(e, t, r) {
            "use strict";
            var n = r(4222),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                c = {};

            function s(e) {
                return n.isMemo(e) ? i : c[e.$$typeof] || o
            }
            c[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, c[n.Memo] = i;
            var u = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                p = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                d = Object.getPrototypeOf,
                h = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" != typeof r) {
                    if (h) {
                        var o = d(r);
                        o && o !== h && e(t, o, n)
                    }
                    var i = l(r);
                    p && (i = i.concat(p(r)));
                    for (var c = s(t), m = s(r), g = 0; g < i.length; ++g) {
                        var y = i[g];
                        if (!(a[y] || n && n[y] || m && m[y] || c && c[y])) {
                            var v = f(r, y);
                            try {
                                u(t, y, v)
                            } catch (b) {}
                        }
                    }
                }
                return t
            }
        },
        9325: function(e, t) {
            "use strict";
            var r = "function" == typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                i = r ? Symbol.for("react.strict_mode") : 60108,
                c = r ? Symbol.for("react.profiler") : 60114,
                s = r ? Symbol.for("react.provider") : 60109,
                u = r ? Symbol.for("react.context") : 60110,
                l = r ? Symbol.for("react.async_mode") : 60111,
                p = r ? Symbol.for("react.concurrent_mode") : 60111,
                f = r ? Symbol.for("react.forward_ref") : 60112,
                d = r ? Symbol.for("react.suspense") : 60113,
                h = r ? Symbol.for("react.suspense_list") : 60120,
                m = r ? Symbol.for("react.memo") : 60115,
                g = r ? Symbol.for("react.lazy") : 60116,
                y = r ? Symbol.for("react.block") : 60121,
                v = r ? Symbol.for("react.fundamental") : 60117,
                b = r ? Symbol.for("react.responder") : 60118,
                E = r ? Symbol.for("react.scope") : 60119;

            function w(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case l:
                                case p:
                                case a:
                                case c:
                                case i:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case f:
                                        case g:
                                        case m:
                                        case s:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function x(e) {
                return w(e) === p
            }
            t.AsyncMode = l, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = s, t.Element = n, t.ForwardRef = f, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = c, t.StrictMode = i, t.Suspense = d, t.isAsyncMode = function(e) {
                return x(e) || w(e) === l
            }, t.isConcurrentMode = x, t.isContextConsumer = function(e) {
                return w(e) === u
            }, t.isContextProvider = function(e) {
                return w(e) === s
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return w(e) === f
            }, t.isFragment = function(e) {
                return w(e) === a
            }, t.isLazy = function(e) {
                return w(e) === g
            }, t.isMemo = function(e) {
                return w(e) === m
            }, t.isPortal = function(e) {
                return w(e) === o
            }, t.isProfiler = function(e) {
                return w(e) === c
            }, t.isStrictMode = function(e) {
                return w(e) === i
            }, t.isSuspense = function(e) {
                return w(e) === d
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === a || e === p || e === c || e === i || e === d || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === s || e.$$typeof === u || e.$$typeof === f || e.$$typeof === v || e.$$typeof === b || e.$$typeof === E || e.$$typeof === y)
            }, t.typeOf = w
        },
        4222: function(e, t, r) {
            "use strict";
            e.exports = r(9325)
        },
        7061: function(e, t, r) {
            var n = r(8698).default;

            function o() {
                "use strict";
                e.exports = o = function() {
                    return t
                }, e.exports.__esModule = !0, e.exports.default = e.exports;
                var t = {},
                    r = Object.prototype,
                    a = r.hasOwnProperty,
                    i = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    c = "function" == typeof Symbol ? Symbol : {},
                    s = c.iterator || "@@iterator",
                    u = c.asyncIterator || "@@asyncIterator",
                    l = c.toStringTag || "@@toStringTag";

                function p(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    p({}, "")
                } catch (R) {
                    p = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function f(e, t, r, n) {
                    var o = t && t.prototype instanceof m ? t : m,
                        a = Object.create(o.prototype),
                        c = new j(n || []);
                    return i(a, "_invoke", {
                        value: k(e, r, c)
                    }), a
                }

                function d(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (R) {
                        return {
                            type: "throw",
                            arg: R
                        }
                    }
                }
                t.wrap = f;
                var h = {};

                function m() {}

                function g() {}

                function y() {}
                var v = {};
                p(v, s, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    E = b && b(b(L([])));
                E && E !== r && a.call(E, s) && (v = E);
                var w = y.prototype = m.prototype = Object.create(v);

                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        p(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function S(e, t) {
                    function r(o, i, c, s) {
                        var u = d(e[o], e, i);
                        if ("throw" !== u.type) {
                            var l = u.arg,
                                p = l.value;
                            return p && "object" == n(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                r("next", e, c, s)
                            }), (function(e) {
                                r("throw", e, c, s)
                            })) : t.resolve(p).then((function(e) {
                                l.value = e, c(l)
                            }), (function(e) {
                                return r("throw", e, c, s)
                            }))
                        }
                        s(u.arg)
                    }
                    var o;
                    i(this, "_invoke", {
                        value: function(e, n) {
                            function a() {
                                return new t((function(t, o) {
                                    r(e, n, t, o)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function k(e, t, r) {
                    var n = "suspendedStart";
                    return function(o, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw a;
                            return N()
                        }
                        for (r.method = o, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var c = O(i, r);
                                if (c) {
                                    if (c === h) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var s = d(e, t, r);
                            if ("normal" === s.type) {
                                if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue;
                                return {
                                    value: s.arg,
                                    done: r.done
                                }
                            }
                            "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                        }
                    }
                }

                function O(e, t) {
                    var r = t.method,
                        n = e.iterator[r];
                    if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, O(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h;
                    var o = d(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, h;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function L(e) {
                    if (e) {
                        var t = e[s];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                n = function t() {
                                    for (; ++r < e.length;)
                                        if (a.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return g.prototype = y, i(w, "constructor", {
                    value: y,
                    configurable: !0
                }), i(y, "constructor", {
                    value: g,
                    configurable: !0
                }), g.displayName = p(y, l, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, p(e, l, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, x(S.prototype), p(S.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = S, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new S(f(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, x(w), p(w, l, "Generator"), p(w, s, (function() {
                    return this
                })), p(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = L, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function r(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                i = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var c = a.call(o, "catchLoc"),
                                    s = a.call(o, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), _(r), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    _(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }
            e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        8698: function(e) {
            function t(r) {
                return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r)
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        4687: function(e, t, r) {
            var n = r(7061)();
            e.exports = n;
            try {
                regeneratorRuntime = n
            } catch (o) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
            }
        },
        5861: function(e, t, r) {
            "use strict";

            function n(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (u) {
                    return void r(u)
                }
                c.done ? t(s) : Promise.resolve(s).then(n, o)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(o, a) {
                        var i = e.apply(t, r);

                        function c(e) {
                            n(i, o, a, c, s, "next", e)
                        }

                        function s(e) {
                            n(i, o, a, c, s, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            r.d(t, {
                Z: function() {
                    return o
                }
            })
        }
    }
]);
//# sourceMappingURL=d6ca18e0c3d54d9d53b2d4f11ba85f9aa0092c6e-347e6dccfbcc76a9ab54.js.map