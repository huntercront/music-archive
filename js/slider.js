! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Siema", [], t) : "object" == typeof exports ? exports.Siema = t() : e.Siema = t() }("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(n) { if (i[n]) return i[n].exports; var r = i[n] = { i: n, l: !1, exports: {} }; return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports }
        var i = {};
        return t.m = e, t.c = i, t.d = function(e, i, n) { t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: n }) }, t.n = function(e) { var i = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(i, "a", i), i }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 0)
    }([function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }(),
            s = function() {
                function e(t) {
                    var i = this;
                    if (function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
                    this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function(e) { i[e] = i[e].bind(i) }), this.init()
                }
                return r(e, [{ key: "attachEvents", value: function() { window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null, preventClick: !1 }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler)) } }, { key: "detachEvents", value: function() { window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler) } }, { key: "init", value: function() { this.attachEvents(), this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this) } }, {
                    key: "buildSliderFrame",
                    value: function() {
                        var e = this.selectorWidth / this.perPage,
                            t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
                        this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
                        var i = document.createDocumentFragment();
                        if (this.config.loop)
                            for (var n = this.innerElements.length - this.perPage; n < this.innerElements.length; n++) {
                                var r = this.buildSliderFrameItem(this.innerElements[n].cloneNode(!0));
                                i.appendChild(r)
                            }
                        for (var s = 0; s < this.innerElements.length; s++) {
                            var o = this.buildSliderFrameItem(this.innerElements[s]);
                            i.appendChild(o)
                        }
                        if (this.config.loop)
                            for (var l = 0; l < this.perPage; l++) {
                                var a = this.buildSliderFrameItem(this.innerElements[l].cloneNode(!0));
                                i.appendChild(a)
                            }
                        this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent()
                    }
                }, { key: "buildSliderFrameItem", value: function(e) { var t = document.createElement("div"); return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style.float = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t } }, {
                    key: "resolveSlidesNumber",
                    value: function() {
                        if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;
                        else if ("object" === n(this.config.perPage))
                            for (var e in this.perPage = 1, this.config.perPage) window.innerWidth >= e && (this.perPage = this.config.perPage[e])
                    }
                }, {
                    key: "prev",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments[1];
                        if (!(this.innerElements.length <= this.perPage)) {
                            var i = this.currentSlide;
                            if (this.config.loop)
                                if (this.currentSlide - e < 0) {
                                    this.disableTransition();
                                    var n = this.currentSlide + this.innerElements.length,
                                        r = n + this.perPage,
                                        s = (this.config.rtl ? 1 : -1) * r * (this.selectorWidth / this.perPage),
                                        o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                                    this.sliderFrame.style[this.transformProperty] = "translate3d(" + (s + o) + "px, 0, 0)", this.currentSlide = n - e
                                } else this.currentSlide = this.currentSlide - e;
                            else this.currentSlide = Math.max(this.currentSlide - e, 0);
                            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this))
                        }
                    }
                }, {
                    key: "next",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments[1];
                        if (!(this.innerElements.length <= this.perPage)) {
                            var i = this.currentSlide;
                            if (this.config.loop)
                                if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                                    this.disableTransition();
                                    var n = this.currentSlide - this.innerElements.length,
                                        r = n + this.perPage,
                                        s = (this.config.rtl ? 1 : -1) * r * (this.selectorWidth / this.perPage),
                                        o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                                    this.sliderFrame.style[this.transformProperty] = "translate3d(" + (s + o) + "px, 0, 0)", this.currentSlide = n + e
                                } else this.currentSlide = this.currentSlide + e;
                            else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);
                            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this))
                        }
                    }
                }, { key: "disableTransition", value: function() { this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing } }, { key: "enableTransition", value: function() { this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing } }, {
                    key: "goTo",
                    value: function(e, t) {
                        if (!(this.innerElements.length <= this.perPage)) {
                            var i = this.currentSlide;
                            this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this))
                        }
                    }
                }, {
                    key: "slideToCurrent",
                    value: function(e) {
                        var t = this,
                            i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                            n = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
                        e ? requestAnimationFrame(function() { requestAnimationFrame(function() { t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + n + "px, 0, 0)" }) }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + n + "px, 0, 0)"
                    }
                }, {
                    key: "updateAfterDrag",
                    value: function() {
                        var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
                            t = Math.abs(e),
                            i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
                            n = e > 0 && this.currentSlide - i < 0,
                            r = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
                        e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(n || r)
                    }
                }, { key: "resizeHandler", value: function() { this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame() } }, { key: "clearDrag", value: function() { this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null, preventClick: this.drag.preventClick } } }, { key: "touchstartHandler", value: function(e) {-1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY) } }, { key: "touchendHandler", value: function(e) { e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag() } }, {
                    key: "touchmoveHandler",
                    value: function(e) {
                        if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
                            e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                            var t = (this.config.loop ? this.currentSlide + this.perPage : this.currentSlide) * (this.selectorWidth / this.perPage),
                                i = this.drag.endX - this.drag.startX,
                                n = this.config.rtl ? t + i : t - i;
                            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)"
                        }
                    }
                }, { key: "mousedownHandler", value: function(e) {-1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX) } }, { key: "mouseupHandler", value: function(e) { e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag() } }, {
                    key: "mousemoveHandler",
                    value: function(e) {
                        if (e.preventDefault(), this.pointerDown) {
                            "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                            var t = (this.config.loop ? this.currentSlide + this.perPage : this.currentSlide) * (this.selectorWidth / this.perPage),
                                i = this.drag.endX - this.drag.startX,
                                n = this.config.rtl ? t + i : t - i;
                            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)"
                        }
                    }
                }, { key: "mouseleaveHandler", value: function(e) { this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag()) } }, { key: "clickHandler", value: function(e) { this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1 } }, {
                    key: "remove",
                    value: function(e, t) {
                        if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
                        var i = e < this.currentSlide,
                            n = this.currentSlide + this.perPage - 1 === e;
                        (i || n) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this)
                    }
                }, {
                    key: "insert",
                    value: function(e, t, i) {
                        if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
                        if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
                        var n = t <= this.currentSlide > 0 && this.innerElements.length;
                        this.currentSlide = n ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this)
                    }
                }, { key: "prepend", value: function(e, t) { this.insert(e, 0), t && t.call(this) } }, { key: "append", value: function(e, t) { this.insert(e, this.innerElements.length + 1), t && t.call(this) } }, {
                    key: "destroy",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments[1];
                        if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
                            for (var i = document.createDocumentFragment(), n = 0; n < this.innerElements.length; n++) i.appendChild(this.innerElements[n]);
                            this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style")
                        }
                        t && t.call(this)
                    }
                }], [{
                    key: "mergeSettings",
                    value: function(e) {
                        var t = { selector: ".siema", duration: 200, easing: "ease-out", perPage: 1, startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !1, rtl: !1, onInit: function() {}, onChange: function() {} },
                            i = e;
                        for (var n in i) t[n] = i[n];
                        return t
                    }
                }, { key: "webkitOrNot", value: function() { return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform" } }]), e
            }();
        t.default = s, e.exports = t.default
    }])
}), document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelector(".slider");
    if (console.log(e), e) {
        class s extends Siema {
            addDots() {
                this.dots = document.createElement("div"), this.dots.classList.add("dots");
                for (let e = 0; e < this.innerElements.length; e++) {
                    const t = document.createElement("button");
                    t.classList.add("dots__item"), t.addEventListener("click", () => { this.goTo(e) }), this.dots.appendChild(t)
                }
                this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling)
            }
            updateDots() {
                for (let e = 0; e < this.dots.querySelectorAll("button").length; e++) {
                    const t = this.currentSlide === e ? "add" : "remove";
                    this.dots.querySelectorAll("button")[e].classList[t]("dots__item--active")
                }
            }
            curentShowSlide() { return this.currentSlide }
        }
        e = new s({ selector: ".slider", duration: 400, easing: "ease-out", perPage: 1, startIndex: 0, autoplay: !0, draggable: !0, multipleDrag: !1, threshold: 30, loop: !0, rtl: !1, onInit: function() {! function() { for (var e = document.querySelectorAll(".slider-init"), t = 0; t < e.length; t++) e[t].classList.remove("slider-init") }(), this.addDots(), this.updateDots() }, onChange: function() { this.updateDots() } });
        for (var t = setInterval(() => e.next(), 5e3), i = document.querySelectorAll(".slide-left"), n = 0; n < i.length; n++) {
            var r = i[n];
            r.onmouseover = function() { console.log("mouse in"), clearInterval(t) }, r.onmouseout = function() { t = setInterval(() => e.next(), 5e3) }
        }
    }
});