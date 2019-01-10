window.TILE_VERSION = {
    "ditu": {
        "normal": {"version": "088", "updateDate": "20181030"},
        "satellite": {"version": "009", "updateDate": "20181030"},
        "normalTraffic": {"version": "081", "updateDate": "20181030"},
        "satelliteTraffic": {"version": "083", "updateDate": "20181030"},
        "mapJS": {"version": "104", "updateDate": "20181030"},
        "satelliteStreet": {"version": "083", "updateDate": "20181030"},
        "panoClick": {"version": "1033", "updateDate": "20181024"},
        "panoUdt": {"version": "20181024", "updateDate": "20181024"},
        "panoSwfAPI": {"version": "20150123", "updateDate": "20150123"},
        "panoSwfPlace": {"version": "20141112", "updateDate": "20141112"},
        "earthVector": {"version": "001", "updateDate": "20181030"}
    },
    "webapp": {
        "high_normal": {"version": "001", "updateDate": "20181030"},
        "lower_normal": {"version": "002", "updateDate": "20181030"}
    },
    "api_for_mobile": {
        "vector": {"version": "002", "updateDate": "20181030"},
        "vectorIcon": {"version": "002", "updateDate": "20181030"}
    }
};
tilesPath = "tiles/";
window.BMAP_AUTHENTIC_KEY = "";
(function () {
    var k = k || {
        version: "20080809", emptyFn: function () {
        }
    };
    (function () {
        k._log = [];
        var ar = 0;
        var at = {};
        k.BaseClass = function (au) {
            at[(this.hashCode = (au || k.BaseClass.guid()))] = this
        };
        k.BaseClass.guid = function () {
            return "mz_" + (ar++).toString(36)
        };
        k.BaseClass.create = function () {
            var au = new k.BaseClass();
            au.decontrol();
            return au
        };
        var e = k.instance = k.I = function (au) {
            return at[au]
        };
        k.BaseClass.prototype.dispose = function () {
            if (this.hashCode) {
                delete at[this.hashCode]
            }
            for (var au in this) {
                if (typeof this[au] != "function") {
                    delete this[au]
                }
            }
        };
        k.BaseClass.prototype.getHashCode = function () {
            if (!this.hashCode) {
                at[(this.hashCode = k.BaseClass.guid())] = this
            }
            return this.hashCode
        };
        k.BaseClass.prototype.decontrol = function () {
            delete at[this.hashCode]
        };
        k.BaseClass.prototype.toString = function () {
            return "[object " + (this._className || "Object") + "]"
        };
        k.BaseClass.prototype._wlog = function (av, aw) {
            var au = k._log;
            if (au.length > 100) {
                au.reverse().length = 50;
                au.reverse()
            }
            au[au.length] = "[" + av + "][" + (this._className || "Object") + " " + this.hashCode + "] " + aw
        }
    })();
    Function.prototype.inherits = function (at, ar) {
        var e, au, aw = this.prototype, av = function () {
        };
        av.prototype = at.prototype;
        au = this.prototype = new av();
        if (typeof(ar) == "string") {
            au._className = ar
        }
        for (e in aw) {
            au[e] = aw[e]
        }
        this.prototype.constructor = aw.constructor;
        aw = av = null;
        return au
    };
    k.BaseEvent = function (e, ar) {
        this.type = e;
        this.returnValue = true;
        this.target = ar || null;
        this.currentTarget = this.srcElement = null;
        this.cancelBubble = false;
        this.domEvent = null
    };
    k.BaseClass.prototype.addEventListener = function (au, at, ar) {
        if (typeof at != "function") {
            return this._wlog("error", "addEventListener:" + at + " is not a function")
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        var e = this._listeners, av;
        if (typeof ar == "string" && ar) {
            if (/[^\w\-]/.test(ar)) {
                this._wlog("warning", "nonstandard key:" + ar)
            } else {
                at.hashCode = ar;
                av = ar
            }
        }
        if (au.indexOf("on") != 0) {
            au = "on" + au
        }
        if (typeof e[au] != "object") {
            e[au] = {}
        }
        av = av || k.BaseClass.guid();
        at.hashCode = av;
        if (e[au][av]) {
            this._wlog("warning", "repeat key:" + av)
        }
        e[au][av] = at
    };
    k.BaseClass.prototype.removeEventListener = function (at, ar) {
        if (typeof ar == "function") {
            ar = ar.hashCode
        } else {
            if (typeof ar != "string") {
                return
            }
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        if (at.indexOf("on") != 0) {
            at = "on" + at
        }
        var e = this._listeners;
        if (!e[at]) {
            return
        }
        if (e[at][ar]) {
            delete e[at][ar]
        }
    };
    k.BaseClass.prototype.dispatchEvent = function (at) {
        if (!this._listeners) {
            this._listeners = {}
        }
        var ar, e = this._listeners, au = at.type;
        at.target = at.srcElement = at.target || at.srcElement || this;
        at.currentTarget = this;
        if (typeof this[au] == "function") {
            this[au](at)
        }
        if (typeof e[au] == "object") {
            for (ar in e[au]) {
                if (typeof e[au][ar] == "function") {
                    e[au][ar].call(this, at)
                }
            }
        }
        return at.returnValue
    };
    k.BaseEvent.prototype.inherit = function (at) {
        var ar = this;
        this.domEvent = at = window.event || at;
        ar.clientX = at.clientX || at.pageX;
        ar.clientY = at.clientY || at.pageY;
        ar.offsetX = at.offsetX || at.layerX;
        ar.offsetY = at.offsetY || at.layerY;
        ar.screenX = at.screenX;
        ar.screenY = at.screenY;
        ar.ctrlKey = at.ctrlKey || at.metaKey;
        ar.shiftKey = at.shiftKey;
        ar.altKey = at.altKey;
        return ar
    };
    k.Browser = (function () {
        var at = navigator.userAgent;
        var ax = 0, e = 0, aw = 0, av = 0;
        var au = 0, ay = 0, ar = 0;
        if (typeof(window.opera) == "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(at)) {
            e = parseFloat(RegExp.$2)
        } else {
            if (/MSIE (\d+(\.\d+)?)/.test(at)) {
                ax = parseFloat(RegExp.$1)
            } else {
                if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(at)) {
                    av = parseFloat(RegExp.$2)
                } else {
                    if (navigator.vendor == "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(at)) {
                        ar = parseFloat(RegExp.$2)
                    } else {
                        if (at.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(at)) {
                            aw = parseFloat(RegExp.$1)
                        }
                    }
                }
            }
        }
        if (at.indexOf("Gecko") > -1 && at.indexOf("KHTML") == -1 && /rv\:(\d+(\.\d+)?)/.test(at)) {
            ay = parseFloat(RegExp.$1)
        }
        return {ie: ax, firefox: av, gecko: ay, netscape: ar, opera: e, safari: aw}
    })();
    window.FeBrowser = k.Browser;
    k.Dom = {};
    k.Dom.createDom = function (ar, e) {
        if (k.isIE && e && e.name) {
            ar = "<" + ar + ' name="' + k.String.escapeHTML(e.name) + '">'
        }
        var at = document.createElement(ar);
        if (e) {
            k.Dom.setProperties(at, e)
        }
        return at
    };
    k.Dom.getOffset = function (au) {
        var ax = k.Dom.getOwnerDocument(au);
        var aw = k.isGecko > 0 && ax.getBoxObjectFor && k.Dom.getStyle(au, "position") == "absolute" && (au.style.top === "" || au.style.left === "");
        var ay = {left: 0, top: 0};
        var ar = (k.isIE && !k.isStrict) ? ax.body : ax.documentElement;
        if (au == ar) {
            return ay
        }
        var at = null;
        var av;
        if (au.getBoundingClientRect) {
            av = au.getBoundingClientRect();
            ay.left = av.left + Math.max(ax.documentElement.scrollLeft, ax.body.scrollLeft);
            ay.top = av.top + Math.max(ax.documentElement.scrollTop, ax.body.scrollTop);
            ay.left -= ax.documentElement.clientLeft;
            ay.top -= ax.documentElement.clientTop;
            if (k.isIE && !k.isStrict) {
                ay.left -= 2;
                ay.top -= 2
            }
        } else {
            if (ax.getBoxObjectFor && !aw) {
                av = ax.getBoxObjectFor(au);
                var e = ax.getBoxObjectFor(ar);
                ay.left = av.screenX - e.screenX;
                ay.top = av.screenY - e.screenY
            } else {
                at = au;
                do {
                    ay.left += at.offsetLeft;
                    ay.top += at.offsetTop;
                    if (k.isWebkit > 0 && k.Dom.getStyle(at, "position") == "fixed") {
                        ay.left += ax.body.scrollLeft;
                        ay.top += ax.body.scrollTop;
                        break
                    }
                    at = at.offsetParent
                } while (at && at != au);
                if (k.isOpera > 0 || (k.isWebkit > 0 && k.Dom.getStyle(au, "position") == "absolute")) {
                    ay.top -= ax.body.offsetTop
                }
                at = au.offsetParent;
                while (at && at != ax.body) {
                    ay.left -= at.scrollLeft;
                    if (!k.isOpera || at.tagName != "TR") {
                        ay.top -= at.scrollTop
                    }
                    at = at.offsetParent
                }
            }
        }
        return ay
    };
    k.Dom.getOwnerDocument = function (e) {
        return e.nodeType == 9 ? e : e.ownerDocument || e.document
    };
    k.Dom.setProperties = function (ar, e) {
        k.each(e, function (au, at) {
            k.Dom._setProperty(ar, at, au)
        })
    };
    k.Dom._setProperty = function (ar, e, at) {
        if (e == "style") {
            ar.style.cssText = at
        } else {
            if (e == "class") {
                ar.className = at
            } else {
                if (e == "for") {
                    ar.htmlFor = at
                } else {
                    if (e in k.Dom._DIRECT_ATTRIBUTE_MAP) {
                        ar.setAttribute(k.Dom._DIRECT_ATTRIBUTE_MAP[e], at)
                    } else {
                        ar[e] = at
                    }
                }
            }
        }
    };
    k.Dom._DIRECT_ATTRIBUTE_MAP = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    k.G = function () {
        for (var ar = [], at = arguments.length - 1; at > -1; at--) {
            var au = arguments[at];
            ar[at] = null;
            if (typeof au == "object" && au && au.dom) {
                ar[at] = au.dom
            } else {
                if ((typeof au == "object" && au && au.tagName) || au == window || au == document) {
                    ar[at] = au
                } else {
                    if (typeof au == "string" && (au = document.getElementById(au))) {
                        ar[at] = au
                    }
                }
            }
        }
        return ar.length < 2 ? ar[0] : ar
    };
    if (typeof(HTMLElement) != "undefined" && !window.opera) {
        HTMLElement.prototype.__defineGetter__("currentStyle", function () {
            return this.ownerDocument.defaultView.getComputedStyle(this, null)
        })
    }
    k.ac = function (e, ar) {
        if (!(e = this.G(e))) {
            return
        }
        ar = this.trim(ar);
        if (!new RegExp("(^| )" + ar.replace(/(\W)/g, "\\$1") + "( |$)").test(e.className)) {
            e.className = e.className.split(/\s+/).concat(ar).join(" ")
        }
    };
    k.addClassName = k.ac;
    k.each = function (av, e) {
        if (typeof e != "function") {
            return av
        }
        if (av) {
            if (av.length === undefined) {
                for (var ar in av) {
                    e.call(av[ar], av[ar], ar)
                }
            } else {
                for (var at = 0, au = av.length; at < au; at++) {
                    e.call(av[at], av[at], at)
                }
            }
        }
        return av
    };
    k.extend = function (aw, au) {
        if (aw && au && typeof(au) == "object") {
            for (var av in au) {
                aw[av] = au[av]
            }
            var at = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            for (var e = 0, ar; e < at.length; e++) {
                ar = at[e];
                if (Object.prototype.hasOwnProperty.call(au, ar)) {
                    aw[ar] = au[ar]
                }
            }
        }
        return aw
    };
    k.hide = function () {
        k.each(arguments, function (e) {
            if (e = k.G(e)) {
                e.style.display = "none"
            }
        })
    };
    k.inherit = function (ax, at, ar) {
        var aw = ax.prototype;
        var av = function () {
        };
        av.prototype = at.prototype;
        var au = ax.prototype = new av();
        if (typeof ar == "string") {
            au._className = ar
        }
        for (var e in aw) {
            au[e] = aw[e]
        }
        ax.prototype.constructor = aw.constructor;
        aw = null;
        return au
    };
    k.isIE = 0;
    (function () {
        if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) {
            /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
            k.isIE = parseFloat(RegExp.$1)
        }
    })();
    k.rc = function (e, ar) {
        if (!(e = this.G(e))) {
            return
        }
        ar = this.trim(ar);
        var at = e.className.replace(new RegExp("(^| +)" + ar.replace(/(\W)/g, "\\$1") + "( +|$)", "g"), "$2");
        if (e.className != at) {
            e.className = at
        }
    };
    k.removeClassName = k.rc;
    k.show = function () {
        this.each(arguments, function (e) {
            if (e = k.G(e)) {
                e.style.display = ""
            }
        })
    };
    k.trim = function (e) {
        return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    };
    var q = k.BaseClass;
    q.prototype.toString = function () {
        return this._className || ""
    };
    var ak = k.BaseEvent;
    k.on = function (at, ar, e) {
        if (!(at = k.G(at))) {
            return at
        }
        ar = ar.replace(/^on/, "").toLowerCase();
        if (at.addEventListener) {
            at.addEventListener(ar, e, false)
        } else {
            if (at.attachEvent) {
                at.attachEvent("on" + ar, e)
            }
        }
        return at
    };
    k.un = function (at, ar, e) {
        if (!(at = k.G(at))) {
            return at
        }
        ar = ar.replace(/^on/, "").toLowerCase();
        if (at.removeEventListener) {
            at.removeEventListener(ar, e, false)
        } else {
            if (at.detachEvent) {
                at.detachEvent("on" + ar, e)
            }
        }
        return at
    };
    k.hc = function (au, at) {
        if (!au || !au.className || typeof au.className != "string") {
            return false
        }
        var ar = -1;
        try {
            ar = au.className == at || au.className.search(new RegExp("(\\s|^)" + at + "(\\s|$)"))
        } catch (av) {
            return false
        }
        return ar > -1
    };
    if (typeof(HTMLElement) != "undefined" && !window.opera) {
        try {
            HTMLElement.prototype.__defineGetter__("children", function () {
                for (var ar = [], at = 0, av, au = 0, e = this.childNodes.length; au < e; au++) {
                    av = this.childNodes[au];
                    if (av.nodeType == 1) {
                        ar[at++] = av;
                        if (av.name) {
                            if (!ar[av.name]) {
                                ar[av.name] = []
                            }
                            ar[av.name][ar[av.name].length] = av
                        }
                        if (av.id) {
                            ar[av.id] = av
                        }
                    }
                }
                return ar
            })
        } catch (am) {
        }
    }
    if (typeof(HTMLElement) != "undefined" && !window.opera && HTMLElement.prototype && !HTMLElement.prototype.insertAdjacentHTML) {
        HTMLElement.prototype.insertAdjacentHTML = function (ar, at) {
            var au = this.ownerDocument.createRange();
            au.setStartBefore(this);
            au = au.createContextualFragment(at);
            ar = ar.toLowerCase();
            switch (ar) {
                case"beforebegin":
                    this.parentNode.insertBefore(au, this);
                    break;
                case"afterbegin":
                    this.insertBefore(au, this.firstChild);
                    break;
                case"beforeend":
                    this.appendChild(au);
                    break;
                case"afterend":
                    if (!this.nextSibling) {
                        this.parentNode.appendChild(au)
                    } else {
                        this.parentNode.insertBefore(au, this.nextSibling)
                    }
                    break
            }
        }
    }
    var aj = {imgPath: "images/"};
    k.extend(aj, {
        distCursor: "url(" + aj.imgPath + "ruler.cur),crosshair",
        defaultCursor: "url(" + aj.imgPath + "openhand.cur),default",
        draggingCursor: "url(" + aj.imgPath + "closedhand.cur),move"
    });
    var z = z || {
        version: "20090107", emptyFn: function () {
        }, _register: new Array(), register: function (e) {
            this._register[this._register.length] = e
        }
    };
    BMapLanguage = {Unit: {m: "\u7c73", km: "\u516c\u91cc", mile: "\u82f1\u91cc"}};

    function x(at, au) {
        at = k.G(at);
        if (!at) {
            return
        }
        q.call(this);
        this.container = at;
        this._setStyle(at);
        at.unselectable = "on";
        at.innerHTML = "";
        at.appendChild(this.render());
        this.width = 0;
        this.height = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.platform = at.childNodes[0];
        this.maskLayer = this.platform.childNodes[0];
        this._bind();
        this.centerPoint = null;
        this.zoomLevel = 0;
        this.lastLevel = 0;
        this.defaultZoomLevel = null;
        this.defaultCenter = null;
        this.currentOperation = 0;
        this.config = {
            clickInterval: 200,
            movingInterval: 0,
            enableDragging: true,
            enableKeyboard: false,
            enableClickPan: false,
            enableDblclickZoom: true,
            enableWheelZoom: false,
            enableMouseDown: true,
            dblclickZoomStep: 1,
            zoomStep: 1,
            fps: 30,
            zoomerSizeMin: 60,
            zoomerSizeMax: 120,
            zoomerDuration: 300,
            actionDuration: 450,
            defaultCursor: aj.defaultCursor,
            draggingCursor: aj.draggingCursor,
            isOverviewMap: false,
            centerPoint: {},
            zoomLevel: 10,
            zoomLevelMin: 1,
            zoomLevelMax: 18,
            enableMapArea: true,
            coordType: BMAP_COORD_LNGLAT,
            mapType: BMAP_TYPE_NORMAL,
            restrictBounds: false
        };
        this.setConfig(au);
        this.mapType = this.config.mapType;
        this.temp = {
            undoList: [],
            operating: false,
            arrow: 0,
            undoPoint: 0,
            undoLength: 30,
            lastDomMoveTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            I: function (av) {
                return k.I(av)
            },
            curSpots: [],
            spotsGuid: 1
        };
        window.InstanceCore = this.temp.I;
        this.platform.style.cursor = this.config.defaultCursor;
        if (k.Browser.ie) {
            try {
                document.execCommand("BackgroundImageCache", false, true)
            } catch (ar) {
            }
        }
        for (var e = 0; e < z._register.length; e++) {
            z._register[e](this)
        }
    }

    x.inherits(q, "Map");
    k.extend(x.prototype, {
        render: function () {
            var e = document.createElement("font");
            e.id = "platform";
            var au = e.style;
            au.overflow = "visible";
            au.position = "absolute";
            au.zIndex = "0";
            au.top = au.left = "0px";
            var ar = document.createElement("font");
            ar.id = "mask";
            ar.className = "BMap_mask";
            var at = ar.style;
            at.position = "absolute";
            at.top = at.left = "0px";
            at.zIndex = "9";
            at.overflow = "hidden";
            e.appendChild(ar);
            return e
        }, _setStyle: function (e) {
            e.style.overflow = "hidden";
            if (e.currentStyle.position != "absolute") {
                e.style.position = "relative"
            }
            e.style.backgroundImage = "url(" + aj.imgPath + "bg.png)";
            e.style.color = "#000";
            e.style.textAlign = "left"
        }, _bind: function () {
            var at = this;
            var ar = this.platform;

            function au(aw, ay) {
                var ax = aw.srcElement || aw.target;
                var av = aw.offsetX || aw.layerX || 0;
                var az = aw.offsetY || aw.layerY || 0;
                if (ax.nodeType != 1) {
                    ax = ax.parentNode
                }
                while (ax && ax != at.container) {
                    if (!(ax.clientWidth == 0 && ax.clientHeight == 0 && ax.offsetParent && ax.offsetParent.nodeName == "TD") && ax.namespaceURI != "http://www.w3.org/2000/svg") {
                        av += ax.offsetLeft || 0;
                        az += ax.offsetTop || 0
                    } else {
                        if (ax.namespaceURI == "http://www.w3.org/2000/svg") {
                            if (navigator.userAgent.indexOf("Safari") > -1 && ax.tagName != "svg") {
                                ax = at.palette
                            }
                            if (at.palette) {
                                av += parseFloat(at.palette.style.left) + at.offsetX;
                                az += parseFloat(at.palette.style.top) + at.offsetY
                            }
                        }
                    }
                    ax = ax.offsetParent
                }
                ay.offsetX = av;
                ay.offsetY = az;
                ay.pixel = new s(av, az);
                ay.point = at.pixelToPoint(ay.pixel);
                return ay
            }

            this.container.onselectstart = function () {
                return false
            };
            this.container.oncontextmenu = function () {
                return false
            };
            k.on(at.platform, "contextmenu", function (av) {
                if (at.currentOperation == 0) {
                    at.dispatchEvent(au(av, new ak("onrightclick").inherit(av)))
                }
            });
            k.on(at.platform, "mousemove", function (av) {
                if (at.currentOperation == 0) {
                    at.dispatchEvent(au(av, new ak("onmousemove").inherit(av)))
                }
            });
            k.on(at.platform, "mousedown", function (ay) {
                if (!at.config.enableMouseDown) {
                    return
                }
                var ay = window.event || ay;
                at.temp.operating = true;
                var ax = ay.srcElement || ay.target;
                at._bind.upValid = true;
                if (at._bind.dTimer) {
                    clearTimeout(at._bind.dTimer);
                    delete at._bind.dTimer
                }
                at._bind.dTimer = setTimeout(function () {
                    at._bind.upValid = false
                }, 500);
                var av = ax;
                while (av) {
                    if (av == at.container) {
                        break
                    }
                    if (k.hc(av, "BMap_Marker")) {
                        return
                    }
                    av = av.parentNode
                }
                if (ax.nodeType != 1) {
                    ax = ax.parentNode
                }
                if (k.Browser.ie && at.maskLayer.setCapture) {
                    at.maskLayer.setCapture()
                } else {
                    if (window.captureEvents) {
                        window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
                    }
                }
                at.temp.tpx = ay.clientX || ay.pageX;
                at.temp.tpy = ay.clientY || ay.pageY;
                at.dispatchEvent(au(ay, new ak("onmousedown").inherit(ay)));
                if (at.config.enableDragging && !(at.currentOperation & g.drag) && ay.button != 2) {
                    var aw = at.temp;
                    aw.mx = (ay.clientX || ay.pageX);
                    aw.my = (ay.clientY || ay.pageY);
                    aw.pl = at.offsetX;
                    aw.pt = at.offsetY;
                    at.currentOperation |= g.drag;
                    if (at.temp.curSpots.length == 0) {
                        at.platform.style.cursor = at.config.draggingCursor
                    } else {
                        at.platform.style.cursor = "pointer"
                    }
                }
            });
            k.on(document, "mousemove", function (ay) {
                var ay = window.event || ay;
                if (at.temp.tpx || at.temp.tpy) {
                    at.temp.mox = ay.clientX || ay.pageX - at.temp.tpx;
                    at.temp.moy = ay.clientY || ay.pageY - at.temp.tpy
                }
                var az = new Date().getTime();
                if (az - at.temp.lastDomMoveTime < 18) {
                    return false
                }
                at.temp.lastDomMoveTime = az;
                if (at.currentOperation & g.drag && at.config.enableDragging) {
                    if (at.platform.style.cursor != at.config.draggingCursor) {
                        at.platform.style.cursor = at.config.draggingCursor
                    }
                    var ax;
                    if (!at.temp._moved) {
                        ax = au(ay, new ak("ondragstart").inherit(ay))
                    } else {
                        ax = au(ay, new ak("ondragging").inherit(ay))
                    }
                    at.dispatchEvent(ax);
                    var aw = at.temp;
                    var av = ay.clientX || ay.pageX || 0;
                    var aA = ay.clientY || ay.pageY || 0;
                    if (aw.mx == 0 && aw.my == 0 && at.temp.keyboardDrag) {
                        aw.mx = av;
                        aw.my = aA;
                        aw.pl = at.offsetX;
                        aw.pt = at.offsetY
                    }
                    if (av - aw.mx != 0 || aA - aw.my != 0) {
                        at.temp._moved = true;
                        at._setPlatformPosition(aw.pl + av - aw.mx, aw.pt + aA - aw.my)
                    }
                }
            });
            k.on(document, "mouseup", function (av) {
                if (k.Browser.ie && at.maskLayer.releaseCapture) {
                    at.maskLayer.releaseCapture()
                } else {
                    if (window.releaseEvents) {
                        window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP)
                    }
                }
                if (at.temp.preEnableClickPan) {
                    at.enableClickPan(true)
                }
                if (at.currentOperation & g.drag && at.config.enableDragging) {
                    var av = window.event || av;
                    at.currentOperation ^= g.drag;
                    if (at.temp.curSpots.length == 0) {
                        at.platform.style.cursor = at.config.defaultCursor
                    } else {
                        at.platform.style.cursor = "pointer"
                    }
                    if (at.temp._moved) {
                        at.dispatchEvent(au(av, new ak("ondragend").inherit(av)))
                    } else {
                        if (at._bind.upValid == true) {
                            at.closeInfoWindow()
                        }
                    }
                    at.temp._moved = false
                }
                at.temp.operating = false
            });

            function e(aw) {
                if (at.config.enableWheelZoom) {
                    at.currentOperation |= g.mousewheel;
                    var aw = window.event || aw;
                    at.lastLevel = at.zoomLevel;
                    var av = new ak("onmousewheel");
                    av.trend = aw.wheelDelta >= 0 || aw.detail < 0;
                    if (av.trend == true && at.zoomLevel == N[at.mapType].zoomLevelMax || av.trend == false && at.zoomLevel == N[at.mapType].zoomLevelMin) {
                        at.currentOperation ^= g.mousewheel;
                        U(aw);
                        return
                    }
                    au(aw, av.inherit(aw));
                    at.dispatchEvent(av);
                    at.currentOperation ^= g.mousewheel;
                    aw.returnValue = false;
                    U(aw)
                }
            }

            k.on(at.container, "mousewheel", e);
            if (window.addEventListener) {
                at.container.addEventListener("DOMMouseScroll", e, false)
            }
            k.on(at.platform, "click", function (ax) {
                var aw = new ak("onclick");
                au(ax, aw.inherit(ax));
                if (!at.currentOperation) {
                    if (at.temp.mox > 0 || at.temp.moy > 0) {
                        if (at.config.enableDragging) {
                            if (at.config.enableClickPan == true) {
                                at.enableClickPan(true)
                            }
                        } else {
                            at.temp.preEnableClickPan = at.config.enableClickPan;
                            at.enableClickPan(false)
                        }
                    } else {
                        if (at.config.enableClickPan) {
                            at.enableClickPan(true)
                        }
                    }
                    if (at._bind.clicker) {
                        clearTimeout(at._bind.clicker)
                    }
                    var av = false;
                    if (!at.temp.mox && !at.temp.moy) {
                        av = true
                    }
                    if (at.temp.curSpots.length > 0 && av == true) {
                        var ax = new ak("onspotclick");
                        ax.spots = at.temp.curSpots.slice(0);
                        at.dispatchEvent(ax)
                    }
                    at._bind.clicker = setTimeout(function () {
                        at._bind.clicker = false;
                        if (av) {
                            at.dispatchEvent(aw)
                        }
                    }, at.config.clickInterval);
                    at.temp.tpx = null;
                    at.temp.tpy = null;
                    at.temp.mox = 0;
                    at.temp.moy = 0
                }
            });
            k.on(at.platform, "dblclick", function (aw) {
                if (!at.currentOperation) {
                    if (at._bind.clicker) {
                        clearTimeout(at._bind.clicker);
                        at._bind.clicker = false
                    }
                    at.currentOperation |= g.dblclick;
                    var av = new ak("ondblclick").inherit(aw);
                    at.dispatchEvent(au(aw, av));
                    at.currentOperation ^= g.dblclick
                }
            });
            at._watchSize = function () {
                var aw = at.getSize();
                if (at.width != aw.width || at.height != aw.height) {
                    var aA = (aw.width - at.width) / 2;
                    var aC = (aw.height - at.height) / 2;
                    var ax = at.getZoomUnits();
                    var az = at.centerPoint;
                    if (az) {
                        at.centerPoint = new D(az.lng + aA * ax, az.lat - aC * ax)
                    }
                    at.maskLayer.style.width = (at.width = aw.width) + "px";
                    at.maskLayer.style.height = (at.height = aw.height) + "px";
                    var ay = new ak("onresize");
                    ay.size = aw;
                    at.dispatchEvent(ay);
                    var av = parseInt(at.platform.style.left) || 0;
                    var aB = parseInt(at.platform.style.top) || 0;
                    if (at.currentOperation != "undefined" && at.currentOperation != 0 && (at.offsetX != av || at.offsetY != aB)) {
                        at._setPlatformPosition(av, aB)
                    }
                }
            };
            at._watchSize();
            setInterval(at._watchSize, 80);
            if (typeof HTMLElement != "undefined" && !window.opera) {
                HTMLElement.prototype.contains = function (av) {
                    if (av == this) {
                        return true
                    }
                    while (av = av.parentNode) {
                        if (av == this) {
                            return true
                        }
                    }
                    return false
                }
            }
            if (!k.Browser.ie && typeof Event != "undefined" && !window.opera) {
                Event.prototype.__defineSetter__("returnValue", function (av) {
                    if (!av) {
                        this.preventDefault()
                    }
                    return av
                });
                Event.prototype.__defineSetter__("cancelBubble", function (av) {
                    if (av) {
                        this.stopPropagation()
                    }
                    return av
                })
            }
            k.on(document, "mousedown", function (aw) {
                var aw = window.event || aw;
                var av = aw.srcElement || aw.target;
                if (at.temp.canKeyboard) {
                    at.temp.canKeyboard = at.container.contains(av)
                } else {
                    at.temp.canKeyboard = at.platform.contains(av)
                }
            });
            k.on(document, "keydown", function (av) {
                if (at.temp.stopArrow == true) {
                    at.temp.stopArrow = false
                }
                if (at.config.enableKeyboard && at.temp.canKeyboard) {
                    var av = window.event || av;
                    switch (av.keyCode || av.which) {
                        case 43:
                        case 189:
                        case 109:
                            at.temp.operating = true;
                            at.zoomOut();
                            break;
                        case 43:
                        case 61:
                        case 187:
                        case 107:
                            at.temp.operating = true;
                            at.zoomIn();
                            break;
                        case 33:
                            at.temp.operating = false;
                            at.temp.stopArrow = true;
                            at.panBy(0, Math.round(at.height * 0.8));
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break;
                        case 34:
                            at.temp.operating = false;
                            at.temp.stopArrow = true;
                            at.panBy(0, -Math.round(at.height * 0.8));
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break;
                        case 35:
                            at.temp.operating = false;
                            at.temp.stopArrow = true;
                            at.panBy(-Math.round(at.width * 0.8), 0);
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break;
                        case 36:
                            at.temp.operating = false;
                            at.temp.stopArrow = true;
                            at.panBy(Math.round(at.width * 0.8), 0);
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break;
                        case 37:
                            at.temp.operating = true;
                            at.temp.arrow |= 1;
                            at._arrow();
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break;
                        case 38:
                            at.temp.operating = true;
                            at.temp.arrow |= 2;
                            at._arrow();
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break;
                        case 39:
                            at.temp.operating = true;
                            at.temp.arrow |= 4;
                            at._arrow();
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break;
                        case 40:
                            at.temp.operating = true;
                            at.temp.arrow |= 8;
                            at._arrow();
                            av.cancelBubble = true;
                            av.returnValue = false;
                            break
                    }
                }
            });
            k.on(document, "keyup", function (av) {
                if (at.config.enableKeyboard) {
                    var av = window.event || av;
                    switch (av.keyCode || av.which) {
                        case 37:
                            at.temp.arrow = at.temp.arrow & ~1;
                            if (at.temp.arrow != 0) {
                                at._arrow()
                            }
                            break;
                        case 38:
                            at.temp.arrow = at.temp.arrow & ~2;
                            if (at.temp.arrow != 0) {
                                at._arrow()
                            }
                            break;
                        case 39:
                            at.temp.arrow = at.temp.arrow & ~4;
                            if (at.temp.arrow != 0) {
                                at._arrow()
                            }
                            break;
                        case 40:
                            at.temp.arrow = at.temp.arrow & ~8;
                            if (at.temp.arrow != 0) {
                                at._arrow()
                            }
                            break
                    }
                }
                at.temp.operating = false
            })
        }, _setPlatformPosition: function (aC, aA, au) {
            if (isNaN(aC) || isNaN(aA)) {
                return
            }
            var av = this.offsetX - aC;
            var at = this.offsetY - aA;
            var aw = this.getZoomUnits();
            var aB = this.centerPoint.lng;
            var az = this.centerPoint.lat;
            var ay = new D(aB, az);
            this.centerPoint = new D(ay.lng + av * aw, ay.lat - at * aw);
            if (au) {
                this.centerPoint = au
            }
            if (this.zoomLevel <= 4 || this.config.restrictBounds) {
                var ar = N[this.mapType].bounds;
                if (this.centerPoint.lng - this.width / 2 * aw <= ar.minX && av < 0 || this.centerPoint.lng + this.width / 2 * aw > ar.maxX && av >= 0) {
                    aC = this.offsetX
                }
                if (this.centerPoint.lat - this.height / 2 * aw <= ar.minY && at >= 0 || this.centerPoint.lat + this.height / 2 * aw > ar.maxY && at < 0) {
                    aA = this.offsetY
                }
                this.centerPoint = new D(ay.lng + (this.offsetX - aC) * aw, ay.lat - (this.offsetY - aA) * aw);
                var ax = new ak("onreachbounds");
                this.dispatchEvent(ax)
            }
            this.offsetX = aC;
            this.offsetY = aA;
            this.platform.style.left = aC + "px";
            this.platform.style.top = aA + "px";
            this.maskLayer.style.left = -aC + "px";
            this.maskLayer.style.top = -aA + "px";
            this.dispatchEvent(new ak("onmoving"))
        }, setViewSize: function (e) {
            Y(this.maskLayer, e);
            this.width = e[0];
            this.height = e[1]
        }, zoomTo: function (ay, ar) {
            if (typeof ay != "number") {
                return
            }
            var ax = N[this.mapType];
            if (typeof ax != "object") {
                return
            }
            var aw = this.config.zoomLevelMin;
            if (aw) {
                if (ay < aw) {
                    ay = aw
                }
            }
            var at = this.config.zoomLevelMax;
            if (at) {
                if (ay > at) {
                    ay = at
                }
            }
            if (ay < ax.zoomLevelMin) {
                ay = ax.zoomLevelMin
            }
            if (ay > ax.zoomLevelMax) {
                ay = ax.zoomLevelMax
            }
            if (this.zoomLevel == ay) {
                return
            }
            this.lastLevel = this.zoomLevel;
            if (ar) {
                this.temp._cPoint = ar;
                this.temp._cPixel = this.pointToPixel(ar)
            } else {
                if (!ar && this.temp.infoWin && this.temp.infoWin.isOpen()) {
                    this.temp._cPixel = this.pointToPixel(this.temp.infoWin.overlay.getPoint());
                    ar = this.temp.infoWin.overlay.getPoint();
                    this.temp._cPoint = this.config.coordType == BMAP_COORD_LNGLAT ? an.convertLL2MC(ar) : ar
                }
            }
            this.dispatchEvent(new ak("onzoomstart"));
            this.zoomLevel = ay;
            if (ar || this.temp.infoWin && this.temp.infoWin.isOpen()) {
                var au = this.temp._cPoint;
                var e = this.temp._cPixel;
                var av = this.getZoomUnits(ay);
                this.centerPoint = new D(au.lng + av * (this.width / 2 - e.x), au.lat - av * (this.height / 2 - e.y))
            }
        }, zoomIn: function (e) {
            this.zoomTo(this.zoomLevel + this.config.zoomStep, e)
        }, zoomOut: function (e) {
            this.zoomTo(this.zoomLevel - this.config.zoomStep, e)
        }, panTo: function (ar, au, av) {
            if (!ar || ar.toString() != "Point") {
                return
            }
            var at = this.pointToPixel(ar);
            ar = this.config.coordType == BMAP_COORD_LNGLAT ? an.convertLL2MC(ar) : ar;
            var e = Math.round(this.width / 2);
            var aw = Math.round(this.height / 2);
            if (Math.abs(e - at.x) > this.width || Math.abs(aw - at.y) > this.height || au == true) {
                this._panTo(e - at.x, aw - at.y, ar)
            } else {
                this._panBy(e - at.x, aw - at.y, {duration: av})
            }
        }, _panTo: function (ar, e, at) {
            if (this.temp.operating == true) {
                return
            }
            this.dispatchEvent(new ak("onmovestart"));
            this._setPlatformPosition(this.offsetX + ar, this.offsetY + e, at);
            this.dispatchEvent(new ak("onmoveend"))
        }, panBy: function (ar, e) {
            ar = Math.round(ar) || 0;
            e = Math.round(e) || 0;
            if (Math.abs(ar) <= this.width && Math.abs(e) <= this.height) {
                this._panBy(ar, e, {fps: arguments[2]})
            } else {
                this._panTo(ar, e)
            }
        }, _panBy: function (ar, e, av) {
            if (this.temp.operating == true) {
                return
            }
            av = av || {};
            this.dispatchEvent(new ak("onmovestart"));
            var au = this, at = au.temp;
            at.pl = au.offsetX;
            at.pt = au.offsetY;
            if (this.temp.tlPan) {
                this.temp.tlPan.cancel()
            }
            this.temp.tlPan = new A({
                fps: av.fps || au.config.fps,
                duration: av.duration || au.config.actionDuration,
                transition: av.transition || p.easeInOutQuad,
                render: function (aw) {
                    this.terminative = au.temp.operating;
                    if (au.temp.operating) {
                        return
                    }
                    au._setPlatformPosition(at.pl + Math.ceil(ar * aw), at.pt + Math.ceil(e * aw))
                },
                finish: function (aw) {
                    au.dispatchEvent(new ak("onmoveend"));
                    au.temp.tlPan = false;
                    if (au.temp.stopArrow == true) {
                        au.temp.stopArrow = false;
                        if (au.temp.arrow != 0) {
                            au._arrow()
                        }
                    }
                }
            })
        }, _arrow: function () {
            if (this._arrow.occurrent && this._arrow._lastArrow == this.temp.arrow && this.temp.stopArrow == true) {
                return
            }
            var e = this;
            var at = e.temp.arrow;
            e._arrow._lastArrow = at;
            e._arrow.interval = 30;
            e._arrow.duration = 999;
            e._arrow.dx = e._arrow.dy = 0;
            if (at & 1) {
                e._arrow.dx = 1
            }
            if (at & 2) {
                e._arrow.dy = 1
            }
            if (at & 4) {
                e._arrow.dx = -1
            }
            if (at & 8) {
                e._arrow.dy = -1
            }
            if (at & 1 && at & 4) {
                e._arrow.dx = 0
            }
            if (at & 2 && at & 8) {
                e._arrow.dy = 0
            }
            if (!e._arrow.occurrent) {
                e._arrow.occurrent = true;
                e._arrow.time = new Date().getTime();
                e._arrow.beginTime = e._arrow.time;
                e.dispatchEvent(new ak("onmovestart"));
                var ar = new A({
                    fps: e._arrow.interval,
                    duration: e._arrow.duration,
                    transition: p.linear,
                    render: function (aA) {
                        var av = e._arrow;
                        var ay = e.temp.arrow;
                        if (e._arrow._lastArrow != ay) {
                            e._arrow._lastArrow = ay;
                            if (ay & 1) {
                                av.dx = 1
                            }
                            if (ay & 2) {
                                av.dy = 1
                            }
                            if (ay & 4) {
                                av.dx = -1
                            }
                            if (ay & 8) {
                                av.dy = -1
                            }
                            if (ay & 1 && ay & 4) {
                                av.dx = 0
                            }
                            if (ay & 2 && ay & 8) {
                                av.dy = 0
                            }
                        }
                        if (e.temp.stopArrow == true) {
                            av.dx = 0;
                            av.dy = 0
                        }
                        var az = new Date().getTime();
                        var ax = Math.pow((az - av.beginTime) / av.duration, 2);
                        if (!e.temp.arrow) {
                            av.occurrent = false;
                            ar.terminative = true;
                            e._arrow.time = new Date().getTime();
                            setTimeout(function () {
                                e.dispatchEvent(new ak("onmoveend"))
                            }, 40)
                        }
                        var aB = (az - av.time);
                        var aw = av.dx * aB * ax >= 0 ? Math.ceil(av.dx * aB * ax) : Math.floor(av.dx * aB * ax);
                        var au = av.dy * aB * ax >= 0 ? Math.ceil(av.dy * aB * ax) : Math.floor(av.dy * aB * ax);
                        if (aw != 0 && au != 0) {
                            aw = Math.round(aw * 0.7);
                            au = Math.round(au * 0.7)
                        }
                        av.time = az;
                        e._setPlatformPosition(e.offsetX + aw, e.offsetY + au)
                    },
                    finish: function () {
                        e._arrow.time = new Date().getTime();
                        setTimeout(function () {
                            e._arrowPan()
                        }, e._arrow.interval)
                    }
                })
            }
        }, _arrowPan: function () {
            var au = this;
            var ar = au._arrow;
            if (au.temp.stopArrow) {
                ar.dx = 0;
                ar.dy = 0
            }
            if (!au.temp.arrow) {
                ar.occurrent = false;
                au.dispatchEvent(new ak("onmoveend"));
                return
            }
            var av = new Date().getTime();
            var aw = (av - ar.time);
            var at = Math.ceil(ar.dx * aw);
            var e = Math.ceil(ar.dy * aw);
            ar.time = av;
            au._setPlatformPosition(au.offsetX + at, au.offsetY + e);
            setTimeout(function () {
                au._arrowPan()
            }, ar.interval)
        }, addControl: function (e) {
            if (e && e._type == "control" && typeof e._i == "function") {
                e._i(this);
                this.dispatchEvent(new ak("onaddcontrol", e))
            }
        }, removeControl: function (e) {
            if (e && e._type == "control" && typeof e.remove == "function") {
                this.dispatchEvent(new ak("onremovecontrol", e));
                e.remove()
            }
        }, addContextMenu: function (e) {
            if (e && e._type == "contextmenu" && typeof e.initialize == "function") {
                e.initialize(this);
                this.dispatchEvent(new ak("onaddcontextmenu", e))
            }
        }, removeContextMenu: function (e) {
            if (e && e._type == "contextmenu" && typeof e.remove == "function") {
                this.dispatchEvent(new ak("onremovecontextmenu", e));
                e.remove()
            }
        }, addOverlay: function (e) {
            if (e && e._type == "overlay" && typeof e.initialize == "function") {
                this.dispatchEvent(new ak("onaddoverlay", e));
                e.initialize(this)
            }
        }, removeOverlay: function (e) {
            if (e && e._type == "overlay" && typeof e.remove == "function") {
                this.dispatchEvent(new ak("onremoveoverlay", e));
                e.remove()
            }
        }, clearOverlays: function () {
            this.dispatchEvent(new ak("onclearoverlays"))
        }, addTileLayer: function (e) {
            if (e && e._type == "tilelayer" && typeof e.initialize == "function") {
                e.initialize(this);
                this.dispatchEvent(new ak("onaddtilelayer", e))
            }
        }, removeTileLayer: function (e) {
            if (e && e._type == "tilelayer" && typeof e.remove == "function") {
                e.remove();
                this.dispatchEvent(new ak("onremovetilelayer", e))
            }
        }, getTileLayer: function (e) {
            if (this.tileMgr) {
                return this.tileMgr.getTileLayer(e)
            }
            return
        }, getTileId: function (e, aw) {
            var au = N[this.mapType];
            if (typeof au != "object") {
                return null
            }
            var ar = au.baseUnits * Math.pow(2, (au.zoomLevelMax - aw));
            var av = parseInt(e.lng / ar);
            var at = parseInt(e.lat / ar);
            return {row: av, column: at, level: aw}
        }, setCenter: function (e) {
            if (!(e instanceof D)) {
                return
            }
            this.panTo(e, true)
        }, centerAndZoom: function (aB, at, aA) {
            if (!aB && this.config.centerPoint) {
                aB = this.config.centerPoint
            }
            if (!at && this.config.zoomLevel) {
                at = this.config.zoomLevel
            }
            var au = this.config.zoomLevelMin;
            if (au && at < au) {
                at = au
            }
            var ax = this.config.zoomLevelMax;
            if (ax && at > ax) {
                at = ax
            }
            if (typeof at != "number") {
                return
            }
            var aw = N[this.mapType];
            if (typeof aw != "object") {
                return
            }
            if (at < aw.zoomLevelMin) {
                at = aw.zoomLevelMin
            }
            if (at > aw.zoomLevelMax) {
                at = aw.zoomLevelMax
            }
            this.lastLevel = this.zoomLevel || at;
            this.zoomLevel = at;
            var az = new ak("onload");
            az.point = aB;
            az.zoom = at;
            if (!aA && this.config.coordType == BMAP_COORD_LNGLAT) {
                aB = this.config.coordType == BMAP_COORD_LNGLAT ? an.convertLL2MC(aB) : aB
            }
            this.centerPoint = aB;
            this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
            this.defaultCenter = this.defaultCenter || this.centerPoint;
            if (!this.loaded) {
                var ar = new m(-21364736, -10616832, 23855104, 15859712);
                var ay = new ac("baidu", ar, "\u767e\u5ea6\u5730\u56fe");
                var av = new v({mapType: this.mapType, copyright: ay});
                av.baseLayer = true;
                this.addTileLayer(av)
            }
            az.pixel = this.pointToPixel(this.centerPoint, this.zoomLevel, true);
            this.dispatchEvent(az)
        }, reset: function () {
            var ar = this;
            var at = ar.defaultZoomLevel;
            var e = ar.defaultCenter;
            ar.centerAndZoom(e, at, true)
        }, openInfoWindow: function (au, e) {
            if (!au || au.toString() != "InfoWindow" || e.toString() != "Point") {
                return
            }
            if (!this.temp.marker) {
                var ar = new n(aj.imgPath + "blank.gif", {width: 1, height: 1});
                this.temp.marker = new K(e, {
                    icon: ar,
                    width: 1,
                    height: 1,
                    offset: new f(0, 0),
                    infoWindowOffset: new f(0, 0)
                })
            } else {
                this.temp.marker.setPoint(e)
            }
            this.addOverlay(this.temp.marker);
            this.temp.marker.openInfoWindow(au);
            this.temp._infoWindowOpened = true;
            var at = this;
            au.addEventListener("onclose", function () {
                at.temp._infoWindowOpened = false
            })
        }, closeInfoWindow: function () {
            if (this.temp.infoWin && this.temp.infoWin.overlay) {
                this.temp.infoWin.overlay.closeInfoWindow()
            }
        },resizeMapDiv: function () {
            var at = this.getSize();
            if (this.width && at.width == this.width && at.height == this.height) {
                return
            }
            this.setViewSize(at);
            var ar = new ak("onresize");
            ar.size = at;
            this.dispatchEvent(ar)
        }, enableDragging: function (e) {
            this.config.enableDragging = true
        }, disableDragging: function () {
            this.config.enableDragging = false
        }, enableScrollWheelZoom: function (e) {
            this.config.enableWheelZoom = true
        }, disableScrollWheelZoom: function (e) {
            this.config.enableWheelZoom = false
        }, enableClickPan: function (e) {
            this.config.enableClickPan = !!e
        }, enableDoubleClickZoom: function (e) {
            this.config.enableDblclickZoom = true
        }, disableDoubleClickZoom: function (e) {
            this.config.enableDblclickZoom = false
        }, enableKeyboard: function (e) {
            this.config.enableKeyboard = true
        }, disableKeyboard: function (e) {
            this.config.enableKeyboard = false
        }, enableMapArea: function (e) {
            this.config.enableMapArea = !!e
        }, getSize: function () {
            var e = new f(this.container.clientWidth, this.container.clientHeight);
            return e
        }, getCenter: function () {
            var e = this.centerPoint;
            e = this.config.coordType == BMAP_COORD_LNGLAT ? an.convertMC2LL(e) : e;
            return e
        }, getZoom: function () {
            return this.zoomLevel
        }, getContainer: function () {
            return this.container
        }, getZoomUnits: function (at) {
            var e = N[this.mapType];
            if (typeof e != "object") {
                return null
            }
            var ar = at || this.zoomLevel;
            return Math.pow(2, (e.zoomLevelMax - ar)) * e.baseUnits / e.tileSize
        }, pointToPixel: function (ar, aw, au) {
            if (!ar) {
                return
            }
            if (!au) {
                ar = this.config.coordType == BMAP_COORD_LNGLAT ? an.convertLL2MC(ar) : ar
            }
            var at = this.getZoomUnits(aw);
            var e = Math.round((ar.lng - this.centerPoint.lng) / at + this.width / 2);
            var av = Math.round((this.centerPoint.lat - ar.lat) / at + this.height / 2);
            return new s(e, av)
        }, pixelToPoint: function (av, ax, at) {
            if (!av) {
                return
            }
            var ar = this.getZoomUnits(ax);
            var au = this.centerPoint.lng + ar * (av.x - this.width / 2);
            var aw = this.centerPoint.lat - ar * (av.y - this.height / 2);
            var e = new D(au, aw);
            if (!at && this.config.coordType == BMAP_COORD_LNGLAT) {
                e = this.config.coordType == BMAP_COORD_LNGLAT ? an.convertMC2LL(e) : e
            }
            return e
        }, lnglatToMercator: function (ar, au) {
            if (isNaN(ar) || isNaN(au)) {
                return []
            }
            ar = parseFloat(ar);
            au = parseFloat(au);
            var e = new D(ar, au);
            var at = an.convertLL2MC(e);
            return [at.lng, at.lat]
        }, mercatorToLnglat: function (at, ar) {
            if (isNaN(at) || isNaN(ar)) {
                return []
            }
            at = parseFloat(at);
            ar = parseFloat(ar);
            var au = new D(at, ar);
            var e = an.convertMC2LL(au);
            return [e.lng, e.lat]
        }, pt2px: function (e, at) {
            var ar = this.pointToPixel(e, at);
            return new s(ar.x + this.offsetX, ar.y + this.offsetY)
        }, px2pt: function (e, at) {
            var ar = new s(e.x - this.offsetX, e.y - this.offsetY);
            return this.pixelToPoint(ar, at, true)
        }, getEventPoint: function (at, au) {
            if (typeof at.offsetY == "number") {
                var ar = new s(at.offsetX, at.offsetY);
                return this.pixelToPoint(ar, au, true)
            } else {
                return null
            }
        }, getBounds: function () {
            var ar = this.pixelToPoint({x: 0, y: this.height}, null, true);
            var e = this.pixelToPoint({x: this.width, y: 0}, null, true);
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                ar = an.convertMC2LL(ar);
                e = an.convertMC2LL(e)
            }
            return new m(ar.lng, ar.lat, e.lng, e.lat)
        }, setConfig: function (e) {
            if (!e) {
                return
            }
            for (var ar in e) {
                if (typeof(e[ar]) != "undefined" && typeof(this.config[ar]) == typeof(e[ar])) {
                    this.config[ar] = e[ar]
                }
            }
        }, getPointsBounds: function (ar) {
            var at = new m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
            for (var e = ar.length - 1; e >= 0; e--) {
                at.extend(ar[e])
            }
            if (at.minX == Number.MAX_VALUE && at.minY == Number.MAX_VALUE && at.maxX == Number.MIN_VALUE && at.maxY == Number.MIN_VALUE) {
                return null
            }
            return at
        }, getBestMap: function (aE, ax, au, e, ay) {
            if (aE.length == 0) {
                return
            }
            var aC = [];
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                for (var aw = 0, av = aE.length; aw < av; aw++) {
                    var at = an.convertLL2MC(aE[aw]);
                    aC.push(at)
                }
            } else {
                aC = aE
            }
            var aD = this.getBounds();
            var aA = this.getPointsBounds(aC);
            if (!aA) {
                return
            }
            var aB = this;
            var az = aA.getCenterPoint();
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                az = an.convertMC2LL(az)
            }
            var ar = this.getBestLevel(aA, ax, ay);
            if (au) {
                if (!aD.containsBounds(aA)) {
                    if (ar == this.zoomLevel) {
                        setTimeout(function () {
                            aB.panTo(az, false, 210)
                        }, 200)
                    } else {
                        this.centerAndZoom(az, ar)
                    }
                }
            } else {
                if (!e) {
                    if (ar == this.zoomLevel) {
                        setTimeout(function () {
                            aB.panTo(az, false, 210)
                        }, 200)
                    } else {
                        this.centerAndZoom(az, ar)
                    }
                }
            }
            return {center: az, level: ar}
        }, getBestLevel: function (ar, au, av) {
            var aw = N[this.mapType];
            au = au || 10;
            av = av || false;
            var ax = typeof(au);
            var ay = eh = au;
            if (ax == "object") {
                ay = au[0];
                eh = au[1]
            }
            if (typeof aw != "object") {
                return
            }
            var e = aw.zoomLevelMin;
            var aA = aw.zoomLevelMax;
            for (var at = aA; at >= e; at--) {
                var az = this.getZoomUnits(at);
                if ((ar.getMaxX() - ar.getMinX()) / az < this.width - ay * 2 && (ar.getMaxY() - ar.getMinY()) / az < this.height - eh * 2) {
                    break
                }
            }
            if (at == -1) {
                at++
            }
            if (at == aw.zoomLevelMax && !av) {
                at--
            }
            return at
        }, addHotspot: function (e) {
            if (!e) {
                return
            }
            if (!this.arrHotspot) {
                this.arrHotspot = []
            }
            this.arrHotspot[this.arrHotspot.length] = e
        }, clearHotspot: function () {
            delete this.arrHotspot
        }, addSpots: function (ar) {
            if (!ar || ar.length == 0) {
                return
            }
            this.spotsPool = this.spotsPool || {};
            var e = "sp" + (this.temp.spotsGuid++);
            this.spotsPool[e] = ar.slice(0);
            return e
        }, getSpots: function (e) {
            return this.spotsPool[e] || []
        }, removeSpots: function (e) {
            if (!e || !this.spotsPool[e]) {
                return
            }
            delete this.spotsPool[e]
        }, clearSpots: function () {
            delete this.spotsPool
        }, clearHotspot: function () {
            delete this.arrHotspot
        }, setMapBounds: function (ar) {
            var e = this.centerPoint;
            if (ar.containsPoint(e)) {
                return
            }
            if (e.lng > ar.getMaxX()) {
                e.lng = ar.getMaxX()
            }
            if (e.lat > ar.getMaxY()) {
                e.lat = ar.getMaxY()
            }
            if (e.lng < ar.getMinX()) {
                e.lng = ar.getMinX()
            }
            if (e.lat < ar.getMinY()) {
                e.lat = ar.getMinY()
            }
            this.centerPoint = e
        }, setBounds: function (e) {
            N[this.mapType].bounds = new m(e.minX, e.minY, e.maxX, e.maxY)
        }, getCoordType: function () {
            return this.config.coordType
        }
    });
    window.BMAP_API_VERSION = "1.0";
    window.BMAP_TYPE_NORMAL = "B_NORMAL_MAP";
    window.BMAP_TYPE_SATELLITE = "B_SATELLITE_MAP";
    window.BMAP_TYPE_PHYSICAL = "B_PHYSICAL_MAP";
    window.BMAP_COORD_LNGLAT = 0;
    window.BMAP_COORD_MERCATOR = 1;
    var N = {
        B_NORMAL_MAP: {
            tileUrls: ["tiles/", "tiles/", "tiles/", "tiles/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 18,
            errorUrl: aj.imgPath + "bg.png",
            bounds: new m(-21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        },
        B_SATELLITE_MAP: {
            tileUrls: ["SatelliteTiles/", "SatelliteTiles/", "SatelliteTiles/", "SatelliteTiles/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 18,
            errorUrl: aj.imgPath + "bg.png",
            bounds: new m(-21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        },
        B_PHYSICAL_MAP: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 18,
            errorUrl: aj.imgPath + "bg.png",
            bounds: new m(-21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        },
        BMAP_CUSTOM_LAYER: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 18,
            errorUrl: aj.imgPath + "blank.gif",
            bounds: new m(-21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        }
    };

    function A(au) {
        var e = {duration: 1000, fps: 30, delay: 0, transition: p.linear};
        if (au) {
            for (var ar in au) {
                e[ar] = au[ar]
            }
        }
        this._opts = e;
        if (e.delay) {
            var at = this;
            setTimeout(function () {
                at._beginTime = new Date().getTime();
                at._endTime = at._beginTime + at._opts.duration;
                at._launch()
            }, e.delay)
        } else {
            this._beginTime = new Date().getTime();
            this._endTime = this._beginTime + this._opts.duration;
            this._launch()
        }
    }

    A.prototype._launch = function () {
        var ar = this;
        var e = new Date().getTime();
        if (e >= ar._endTime) {
            if (typeof ar._opts.render == "function") {
                ar._opts.render(ar._opts.transition(1))
            }
            if (typeof ar._opts.finish == "function") {
                ar._opts.finish()
            }
            return
        }
        ar.schedule = ar._opts.transition((e - ar._beginTime) / ar._opts.duration);
        if (typeof ar._opts.render == "function") {
            ar._opts.render(ar.schedule)
        }
        if (!ar.terminative) {
            ar._timer = setTimeout(function () {
                ar._launch()
            }, 1000 / ar._opts.fps)
        }
    };
    A.prototype.stop = function (e) {
        this.terminative = true;
        if (this._timer) {
            clearTimeout(this._timer)
        }
        if (e) {
            this._endTime = this._beginTime;
            this._launch()
        }
    };
    A.prototype.cancel = function () {
        if (this._timer) {
            clearTimeout(this._timer)
        }
        this._endTime = this._beginTime;
        this.schedule = 0
    };
    var p = {
        linear: function (e) {
            return e
        }, reverse: function (e) {
            return 1 - e
        }, easeInQuad: function (e) {
            return e * e
        }, easeInCubic: function (e) {
            return Math.pow(e, 3)
        }, easeOutQuad: function (e) {
            return -(e * (e - 2))
        }, easeOutCubic: function (e) {
            return Math.pow((e - 1), 3) + 1
        }, easeInOutQuad: function (e) {
            if (e < 0.5) {
                return e * e * 2
            } else {
                return -2 * (e - 2) * e - 1
            }
            return
        }, easeInOutCubic: function (e) {
            if (e < 0.5) {
                return Math.pow(e, 3) * 4
            } else {
                return Math.pow(e - 1, 3) * 4 + 1
            }
        }, easeInOutSine: function (e) {
            return (1 - Math.cos(Math.PI * e)) / 2
        }
    };

    function E(e) {
        q.call(this);
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._opts = {printable: false};
        this._visible = true
    }

    E.inherits(q, "Control");
    k.extend(E.prototype, {
        initialize: function (e) {
            this._map = e;
            if (this._container) {
                e.container.appendChild(this._container);
                return this._container
            }
            return
        }, _i: function (ar) {
            if (!this._container && this.initialize && typeof this.initialize == "function") {
                this._container = this.initialize(ar)
            }
            var at = this._container;
            if (at) {
                var e = at.style;
                e.position = "absolute";
                e.zIndex = this._cZIndex || "10";
                e.MozUserSelect = "none";
                at._hashCode = this.hashCode;
                if (!this._opts.printable) {
                    k.ac(at, "BMap_noprint")
                }
            }
            this._setPosition()
        }, remove: function () {
            this._map = null;
            if (!this._container) {
                return
            }
            this._container.parentNode && this._container.parentNode.removeChild(this._container);
            this._container = null
        }, _render: function () {
            this._container = V(this._map.container, "<div unselectable='on'></div>");
            if (this._visible == false) {
                this._container.style.display = "none"
            }
            return this._container
        }, _setPosition: function () {
            this.setAnchor(this._opts.anchor)
        }, setAnchor: function (au) {
            if (this.anchorFixed || typeof au != "number" || isNaN(au) || au < BMAP_ANCHOR_TOP_LEFT || au > BMAP_ANCHOR_BOTTOM_RIGHT) {
                au = this.defaultAnchor
            }
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var at = this._opts.anchor;
            this._opts.anchor = au;
            if (!this._container) {
                return
            }
            var aw = this._container;
            var e = this._opts.offset.width;
            var av = this._opts.offset.height;
            aw.style.left = aw.style.top = aw.style.right = aw.style.bottom = "auto";
            switch (au) {
                case BMAP_ANCHOR_TOP_LEFT:
                    aw.style.top = av + "px";
                    aw.style.left = e + "px";
                    break;
                case BMAP_ANCHOR_TOP_RIGHT:
                    aw.style.top = av + "px";
                    aw.style.right = e + "px";
                    break;
                case BMAP_ANCHOR_BOTTOM_LEFT:
                    aw.style.bottom = av + "px";
                    aw.style.left = e + "px";
                    break;
                case BMAP_ANCHOR_BOTTOM_RIGHT:
                    aw.style.bottom = av + "px";
                    aw.style.right = e + "px";
                    break;
                default:
                    break
            }
            var ar = ["TL", "TR", "BL", "BR"];
            k.rc(this._container, "anchor" + ar[at]);
            k.ac(this._container, "anchor" + ar[au])
        }, getAnchor: function () {
            return this._opts.anchor
        }, setOffset: function (e) {
            if (!e || e && e.toString() != "Size") {
                return
            }
            this._opts.offset = new f(e.width, e.height);
            this.setAnchor(this._opts.anchor)
        }, getOffset: function () {
            return this._opts.offset
        }, getDom: function () {
            return this._container
        }, show: function () {
            if (this._visible == true) {
                return
            }
            this._visible = true;
            if (this._container) {
                this._container.style.display = ""
            }
        }, hide: function () {
            if (this._visible == false) {
                return
            }
            this._visible = false;
            if (this._container) {
                this._container.style.display = "none"
            }
        }, isPrintable: function () {
            return !!this._opts.printable
        }, isVisible: function () {
            if (!this._container) {
                return false
            }
            return !!this._visible
        }
    });
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;

    function u(e) {
        E.call(this);
        e = e || {};
        k.extend(this._opts, e);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new f(5, 2);
        this.setAnchor(e.anchor);
        this._canShow = true;
        this.blockInfoWindow = false
    }

    u.inherits(E, "CopyrightControl");
    k.extend(u.prototype, {
        initialize: function (ar) {
            E.prototype.initialize.call(this, ar);
            this._render();
            this._updateState();
            var e = this;
            ar.addEventListener("load", function (at) {
                e._updateState()
            });
            ar.addEventListener("moveend", function (at) {
                e._updateState()
            });
            ar.addEventListener("dragend", function (at) {
                e._updateState()
            });
            ar.addEventListener("zoomend", function (at) {
                e._updateState()
            });
            return this._container
        }, _render: function () {
            //E.prototype._render.call(this);
            //k.ac(this._container, "BMap_cpyCtrl");
            //this._container.style.cursor = "default";
            //this._container.style.whiteSpace = "nowrap";
            //this._container.style.MozUserSelect = "none";
            //E.prototype._setPosition.call(this)
        }, _updateState: function () {
            if (!this._map || !this._container || this._copyrightCollection.length == 0) {
                return
            }
            for (var av = 0, at = this._copyrightCollection.length; av < at; av++) {
                var ar;
                var e = this._map.getZoom();
                if (this._copyrightCollection[av].mapType != "" && this._map.mapType != this._copyrightCollection[av].mapType) {
                    ar = false
                } else {
                    if (e < this._copyrightCollection[av].minZoom) {
                        ar = false
                    } else {
                        var az = this._map.pixelToPoint({x: 0, y: 0});
                        var ay = this._map.pixelToPoint({x: this._map.width, y: this._map.height});
                        var ax = new m(az.lng, az.lat, ay.lng, ay.lat);
                        if (this._copyrightCollection[av].bounds && ax.intersects(this._copyrightCollection[av].bounds) == null) {
                            ar = false
                        } else {
                            ar = true
                        }
                    }
                }
                if (ar) {
                    if (this._container) {
                        var aA = false;
                        for (var au = 0, aw = this._container.children.length; au < aw; au++) {
                            if (this._container.children[au].getAttribute("_cid") == this._copyrightCollection[av].id) {
                                aA = true;
                                this._container.children[au].style.display = "inline";
                                if (this._container.children[au].innerHTML != this._copyrightCollection[av].content) {
                                    this._container.children[au].innerHTML = this._copyrightCollection[av].content
                                }
                                break
                            }
                        }
                        if (!aA) {
                            this._generateHTML(this._copyrightCollection[av])
                        }
                    }
                } else {
                    if (this._container) {
                        for (var au = 0; au < this._container.children.length; au++) {
                            if (this._container.children[au].getAttribute("_cid") == this._copyrightCollection[av].id && this._container.children[au].style.display != "none") {
                                this._container.children[au].style.display = "none";
                                return
                            }
                        }
                    }
                }
            }
        }, addCopyright: function (at) {
            if (!at || typeof at.id != "number" || isNaN(at.id)) {
                return
            }
            var e = {minZoom: 0, bounds: null, content: "", mapType: ""};
            for (var ar in at) {
                e[ar] = at[ar]
            }
            if (this._map) {
                var aw = e.minZoom;
                if (aw == -1 || aw < N[this._map.mapType].zoomLevelMin || aw > N[this._map.mapType].zoomLevelMax) {
                    e.minZoom = N[this._map.mapType].zoomLevelMin
                }
                if (e.mapType != "" && !N[e.mapType]) {
                    e.mapType = BMAP_TYPE_NORMAL
                }
            }
            var au = this.getCopyright(at.id);
            if (au) {
                for (var av in e) {
                    au[av] = e[av]
                }
            } else {
                this._copyrightCollection.push(e)
            }
            this._updateState()
        }, getCopyright: function (at) {
            for (var ar = 0, e = this._copyrightCollection.length; ar < e; ar++) {
                if (this._copyrightCollection[ar].id == at) {
                    return this._copyrightCollection[ar]
                }
            }
        }, getCopyrightCollection: function () {
            return this._copyrightCollection
        }, removeCopyright: function (av) {
            var at;
            for (var ar = 0, e = this._copyrightCollection.length; ar < e; ar++) {
                if (this._copyrightCollection[ar].id == av) {
                    at = this._copyrightCollection.splice(ar, 1);
                    ar--;
                    e = this._copyrightCollection.length
                }
            }
            var au = this.getDom(av);
            if (au && au.parentNode) {
                au.parentNode.removeChild(au);
                au = null
            }
            this._updateState();
            return at
        }, _generateHTML: function (e) {
            if (!this._container) {
                return
            }
            this._container.innerHTML += "<span style='color:#000;background:none;line-height:15px;font:11px arial,simsun' _cid='" + e.id + "'>" + e.content + "</span>"
        }, getDom: function (au) {
            var at = E.prototype.getDom.call(this);
            if (typeof au == "undefined") {
                return at
            } else {
                if (at) {
                    for (var ar = 0, e = at.children.length; ar < e; ar++) {
                        if (at.children[ar].getAttribute("_cid") == au) {
                            return at.children[ar]
                        }
                    }
                }
            }
        }
    });

    function ao(e) {
        E.call(this);
        e = e || {};
        this._opts = k.extend(k.extend(this._opts, {
            size: new f(150, 150),
            padding: 8,
            isOpen: false,
            zoomInterval: 4
        }), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this.defaultOffset = new f(0, 0);
        this.setAnchor(e.anchor);
        this.setSize(this._opts.size);
        this._omCanvas;
        this._omMapContainer;
        this._omView;
        this._omViewMv;
        this._omBtn;
        this._borderWidth = 1;
        this._btnWidth = 15;
        this._btnHeight = 15;
        this._quad = 4;
        this._overviewMap = null;
        this._minZoomLevel = -1;
        this._maxZoomLevel = -1;
        this._curOMZoomLevel = -1;
        this._wRatio = 1;
        this._hRatio = 1;
        this._temp = {};
        this._currentOp = "";
        this._overviewInitialized = false
    }

    ao.inherits(E, "OverviewMapControl");
    k.extend(ao.prototype, {
        initialize: function (e) {
            E.prototype.initialize.call(this, e);
            this._render();
            this._bind();
            this._initOverviewMap();
            k.on(this._container, "click", function (ar) {
                al(ar)
            });
            k.on(this._container, "dblclick", function (ar) {
                al(ar)
            });
            k.on(this._container, "mousewheel", function (ar) {
                al(ar)
            });
            if (window.addEventListener) {
                this._container.addEventListener("DOMMouseScroll", function (ar) {
                    al(ar)
                }, true)
            }
            return this._container
        }, _getCurOMZoomLevel: function () {
            if (!this._map) {
                return
            }
            var e = this._map.zoomLevel;
            var ar = e - this._opts.zoomInterval;
            if (ar < this._minZoomLevel) {
                return this._minZoomLevel
            } else {
                if (ar > this._maxZoomLevel) {
                    return this._maxZoomLevel
                } else {
                    return ar
                }
            }
            return -1
        }, _render: function () {
            E.prototype._render.call(this);
            var e = k.Browser.ie != false ? " BMap_ie" + k.Browser.ie : "";
            var ar = this._container;
            ar.innerHTML = this._generateHTML();
            k.ac(ar, "BMap_omCtrl" + e);
            this._omCanvas = ar.children[0].children[0];
            this._omMapContainer = this._omCanvas.children[0];
            this._omViewMv = this._omCanvas.children[1];
            this._omViewMvInn = this._omViewMv.children[0];
            this._omBtn = ar.children[1];
            this.setSize(this._opts.size);
            this._omViewMv.style.cursor = aj.defaultCursor
        }, _generateHTML: function () {
            var e = ['<div class="BMap_omOutFrame"><div class="BMap_omInnFrame">', '<div class="BMap_omMapContainer"></div>', '<div class="BMap_omViewMv"><div class="BMap_omViewInnFrame"><div></div></div></div>', '</div></div><div class="BMap_omBtn"></div>'];
            return e.join("")
        }, _bind: function () {
            var e = this;
            k.on(this._omBtn, "click", function () {
                e.changeView()
            });
            if (k.Browser.ie) {
                k.on(this._omBtn, "dblclick", function () {
                    e.changeView()
                })
            }
            k.on(this._omViewMv, "mousedown", function (ar) {
                if (e._omViewMv && typeof e._omViewMv._drag != "undefined" && e._omViewMv._drag == "true") {
                    return
                }
                e._omViewMv._drag = "true";
                var ar = window.event || ar;
                if (e._omViewMv.setCapture) {
                    e._omViewMv.setCapture()
                }
                e._bind.iniX = parseInt(e._omViewMv.currentStyle.left);
                e._bind.iniY = parseInt(e._omViewMv.currentStyle.top);
                e._bind.mx = ar.pageX || ar.clientX;
                e._bind.my = ar.pageY || ar.clientY;
                e._bind.i = 0;
                e._bind.j = 0;
                e._setViewMvCursor(aj.draggingCursor);
                al(ar);
                return U(ar)
            });
            k.on(document, "mousemove", function (ay) {
                if (e._omViewMv && e._omViewMv._drag == "true") {
                    var ay = window.event || ay;
                    var ar = ay.pageX || ay.clientX;
                    var az = ay.pageY || ay.clientY;
                    e._bind.curX = e._bind.iniX + ar - e._bind.mx;
                    e._bind.curY = e._bind.iniY + az - e._bind.my;
                    var ax = 3;
                    e._bind._moveX = 0;
                    e._bind._moveY = 0;
                    if (e._bind.curX <= 0) {
                        e._bind._moveX = ax
                    }
                    if (e._bind.curY <= 0) {
                        e._bind._moveY = ax
                    }
                    if (e._bind.curX + e._omViewMv.offsetWidth >= e._overviewMap.width) {
                        e._bind._moveX = -ax
                    }
                    if (e._bind.curY + e._omViewMv.offsetHeight >= e._overviewMap.height) {
                        e._bind._moveY = -ax
                    }
                    e._omViewMv.style.left = e._bind.curX + "px";
                    e._omViewMv.style.top = e._bind.curY + "px";
                    if ((e._bind._moveX != 0 || e._bind._moveY != 0) && !e._bind.intervalId) {
                        e._bind._mapMoving = true;
                        var aw = e._overviewMap.offsetX;
                        var au = e._overviewMap.offsetY;
                        var av = aw + e._bind._moveX;
                        var at = au + e._bind._moveY;
                        e._overviewMap._setPlatformPosition(av, at);
                        e._bind.intervalId = setInterval(function () {
                            var aB = e._bind._moveX != 0 ? (e._bind._moveX > 0 ? e._bind.i += ax : e._bind.i -= ax) : e._bind.i;
                            var aA = e._bind._moveY != 0 ? (e._bind._moveY > 0 ? e._bind.j += ax : e._bind.j -= ax) : e._bind.j;
                            e._overviewMap._setPlatformPosition(av + aB, at + aA)
                        }, 30)
                    }
                    if (e._bind._moveX == 0 && e._bind._moveY == 0) {
                        clearInterval(e._bind.intervalId);
                        delete e._bind.intervalId;
                        e._bind.i = 0;
                        e._bind.j = 0
                    }
                    al(ay);
                    return U(ay)
                }
            });
            k.on(document, "mouseup", function (aw) {
                if (e._omViewMv && e._omViewMv._drag == "true") {
                    e._omViewMv._drag = "";
                    e._setViewMvCursor(aj.defaultCursor);
                    if (e._omViewMv.releaseCapture) {
                        e._omViewMv.releaseCapture()
                    }
                    if (e._bind.initX == e._bind.curX && e._bind.initY == e._bind.curY) {
                        al(aw);
                        return U(aw)
                    }
                    e._currentOp = "dragView";
                    e._overviewMap.config.enableMouseDown = false;
                    e._map.temp.operating = true;
                    if (typeof e._bind.curX == "undefined" || typeof e._bind.curY == "undefined") {
                        return
                    }
                    var av = e._bind.curX + parseInt(e._omViewMv.style.width) / 2 + 1;
                    var au = e._bind.curY + parseInt(e._omViewMv.style.height) / 2 + 1;
                    delete e._bind.curX;
                    delete e._bind.curY;
                    var at = e._overviewMap.pixelToPoint({x: av, y: au}, e._overviewMap.zoomLevel);
                    var ar = N[e._map.mapType].bounds;
                    if (at.lng < ar[0] || at.lng > ar[2] || at.lat < ar[1] || at.lat > ar[3]) {
                        at = e._overviewMap.getCenter()
                    }
                    e._map.temp.operating = false;
                    if (e._bind._mapMoving == true) {
                        clearInterval(e._bind.intervalId);
                        delete e._bind.intervalId;
                        e._bind._mapMoving = false
                    }
                    e._map.temp.operating = true;
                    setTimeout(function () {
                        e._map.temp.operating = false;
                        e._map.panTo(at)
                    }, 50);
                    al(aw);
                    return U(aw)
                }
            })
        }, _initOverviewMap: function () {
            if (this._overviewInitialized == true) {
                return
            }
            var at = this;
            var au = at._map;
            au.addEventListener("resize", function () {
                if (at._overviewMap != null) {
                    at._overviewMap.setCenter(au.getCenter())
                }
                if (at._omView != null) {
                    at._omView.setPoint(au.getCenter());
                    at._setRatio()
                }
                at.setAnchor(at._opts.anchor)
            });
            if (this._opts.isOpen == false) {
                return
            }
            if (!this._binded) {
                au.addEventListener("load", function () {
                    at._onMainZoomEnd()
                });
                au.addEventListener("moving", function () {
                    at._moveView()
                });
                au.addEventListener("moveend", function (av) {
                    at._onMainMoveEnd(av)
                });
                au.addEventListener("dragend", function (av) {
                    at._onMainMoveEnd(av)
                });
                au.addEventListener("zoomend", function (av) {
                    at._onMainZoomEnd(av)
                });
                this._binded = true
            }
            var e = au.getCenter();
            this._minZoomLevel = N[au.mapType].zoomLevelMin;
            this._maxZoomLevel = N[au.mapType].zoomLevelMax;
            this._curOMZoomLevel = this._getCurOMZoomLevel();
            this._overviewMap = new x(this._omMapContainer, {coordType: au.config.coordType, isOverviewMap: true});
            this._overviewMap.enableClickPan(false);
            this._overviewMap.enableScrollWheelZoom(false);
            this._overviewMap.enableDoubleClickZoom(false);
            this._overviewMap.enableKeyboard(false);
            this._overviewMap.enableMapArea(false);
            this._overviewMap.centerAndZoom(e, this._curOMZoomLevel);
            this._omView = new H({point: au.getCenter(), lineStroke: 1, lineColor: "#6688cc"});
            this._overviewMap.addOverlay(this._omView);
            this._omView.getDom().innerHTML = '<div class="BMap_omViewInnFrame"><div class="BMap_omViewMask"></div></div>';
            this._omViewInn = this._omView.getDom().children[0];
            var ar = this._omView.getDom().style;
            ar.borderLeftColor = "#84b0df";
            ar.borderTopColor = "#adcff4";
            ar.borderRightColor = "#274b8b";
            ar.borderBottomColor = "#274b8b";
            this._setRatio();
            this._overviewMap.addEventListener("dragend", function () {
                at._currentOp = "dragMap";
                au.panTo(at._overviewMap.getCenter())
            });
            this._overviewMap.addEventListener("moveend", function () {
                at._onViewMapMoveEnd()
            });
            this._overviewMap.addEventListener("mousedown", function (av) {
                at._temp._downX = av.offsetX;
                at._temp._downY = av.offsetY
            });
            this._overviewMap.addEventListener("resize", function (av) {
                if (at._map && at._overviewMap) {
                    at._overviewMap.setCenter(at._map.getCenter())
                }
                at._setRatio()
            });
            this._overviewInitialized = true
        }, _setViewMvCursor: function (e) {
            this._omViewMv.style.cursor = e
        }, setAnchor: function (av) {
            E.prototype.setAnchor.call(this, av);
            if (!this._map) {
                return
            }
            if (k.Browser.ie) {
                var ay = this._map.width;
                var au = this._map.height;
                var ar = this._opts.size.width;
                var aw = this._opts.size.height;
                var at = this._opts.offset.width;
                var e = this._opts.offset.height;
                if (this._opts.isOpen == false) {
                    ar = this._btnWidth;
                    aw = this._btnHeight
                }
                var ax = this._container;
                switch (av) {
                    case BMAP_ANCHOR_TOP_RIGHT:
                        ax.style.right = "auto";
                        ax.style.left = ay - ar - at + "px";
                        break;
                    case BMAP_ANCHOR_BOTTOM_LEFT:
                        ax.style.bottom = "auto";
                        ax.style.top = au - aw - e + "px";
                        break;
                    case BMAP_ANCHOR_BOTTOM_RIGHT:
                        ax.style.bottom = "auto";
                        ax.style.right = "auto";
                        ax.style.top = au - aw - e + "px";
                        ax.style.left = ay - ar - at + "px";
                        break;
                    default:
                        break
                }
            }
            this._setQuad();
            this._redraw()
        }, changeView: function () {
            this.changeView._running = true;
            this._opts.isOpen = !this._opts.isOpen;
            if (!this._container) {
                this.changeView._running = false;
                return
            }
            var aw = this._container;
            var e = this._opts.size.width;
            var at = this._opts.size.height;
            var av = this._btnWidth;
            var ar = this._btnHeight;
            var au = this;
            if (!this._opts.isOpen) {
                this.changeView._preBtnTop = this._omBtn.style.top;
                this.changeView._preBtnLeft = this._omBtn.style.left;
                new A({
                    fps: 30, duration: 120, transition: p.easeInCubic, render: function (ax) {
                        aw.style.width = (e - Math.ceil((e - av) * ax)) + "px";
                        aw.style.height = (at - Math.ceil((at - ar) * ax)) + "px";
                        if (k.Browser.ie) {
                            au._omBtn.style.top = (au._quad == 3 || au._quad == 4) ? parseInt(aw.style.height) - ar + "px" : "0";
                            au._omBtn.style.left = (au._quad == 1 || au._quad == 4) ? parseInt(aw.style.width) - av + "px" : "0";
                            if (au._opts.anchor >= 0 && au._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                                if (au._quad == 3 || au._quad == 4) {
                                    aw.style.top = au._map.height - parseInt(aw.style.height) - au._opts.offset.height + "px"
                                }
                                if (au._quad == 1 || au._quad == 4) {
                                    aw.style.left = au._map.width - parseInt(aw.style.width) - au._opts.offset.width + "px"
                                }
                            }
                        }
                        au.dispatchEvent(new ak("onviewchanging"))
                    }, finish: function () {
                        if (k.Browser.ie) {
                            au._omBtn.style.left = "0";
                            au._omBtn.style.top = "0";
                            if (au._opts.anchor >= 0 && au._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                                if (au._quad == 3 || au._quad == 4) {
                                    aw.style.top = au._map.height - au._btnHeight - au._opts.offset.height + "px"
                                }
                                if (au._quad == 1 || au._quad == 4) {
                                    aw.style.left = au._map.width - au._btnWidth - au._opts.offset.width + "px"
                                }
                            }
                        }
                        au._redraw();
                        k.ac(au._omBtn, "BMap_omBtnClosed");
                        var ax = new ak("onviewchanged");
                        ax.isOpen = au._opts.isOpen;
                        au.dispatchEvent(ax);
                        au.changeView._running = false
                    }
                })
            } else {
                if (this._overviewInitialized == false) {
                    this._initOverviewMap()
                }
                new A({
                    fps: 40, duration: 120, transition: p.easeOutCubic, render: function (ax) {
                        aw.style.width = (Math.ceil(e * ax)) + "px";
                        aw.style.height = (Math.ceil(at * ax)) + "px";
                        if (k.Browser.ie) {
                            au._omBtn.style.top = (au._quad == 3 || au._quad == 4) ? parseInt(aw.style.height) - ar + "px" : "0";
                            au._omBtn.style.left = (au._quad == 1 || au._quad == 4) ? parseInt(aw.style.width) - av + "px" : "0";
                            if (au._opts.anchor >= 0 && au._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                                if (au._quad == 3 || au._quad == 4) {
                                    aw.style.top = au._map.height - parseInt(aw.style.height) - au._opts.offset.height + "px"
                                }
                                if (au._quad == 1 || au._quad == 4) {
                                    aw.style.left = au._map.width - parseInt(aw.style.width) - au._opts.offset.width + "px"
                                }
                            }
                        }
                        au.dispatchEvent(new ak("onviewchanging"))
                    }, finish: function () {
                        if (au._opts.anchor >= 0 && au._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                            if (k.Browser.ie) {
                                if (au._quad == 3 || au._quad == 4) {
                                    aw.style.top = au._map.height - at - au._opts.offset.height + "px"
                                }
                                if (au._quad == 1 || au._quad == 4) {
                                    aw.style.left = au._map.width - e - au._opts.offset.width + "px"
                                }
                            }
                        }
                        au._redraw();
                        au._setBtnPosition();
                        k.rc(au._omBtn, "BMap_omBtnClosed");
                        var ax = new ak("onviewchanged");
                        ax.isOpen = au._opts.isOpen;
                        au.dispatchEvent(ax);
                        au.changeView._running = false
                    }
                })
            }
        }, _setRatio: function () {
            if (!this._map) {
                return
            }
            var ax = this._map.zoomLevel;
            var az = this._map.pixelToPoint({x: 0, y: 0}, ax);
            var au = this._map.pixelToPoint({x: this._map.width, y: this._map.height}, ax);
            var ar = this._overviewMap.pixelToPoint({x: 0, y: 0}, this._curOMZoomLevel);
            var at = this._overviewMap.pixelToPoint({
                x: this._overviewMap.width,
                y: this._overviewMap.height
            }, this._curOMZoomLevel);
            this._wRatio = (au.lng - az.lng) / (at.lng - ar.lng);
            this._hRatio = (au.lat - az.lat) / (at.lat - ar.lat);
            if (this._wRatio >= 1 || this._hRatio >= 1) {
                this._omViewMv.style.display = "none";
                this._omView.hide()
            } else {
                var av = parseInt(this._overviewMap.width);
                var e = parseInt(this._overviewMap.height);
                var ay = Math.round(av * this._wRatio);
                var aw = Math.round(e * this._hRatio);
                this._omView.show();
                this._omView.setDimension(ay, aw);
                this._omViewMv.style.display = ""
            }
            this._setOMViewMvPos()
        }, _setOMViewMvPos: function () {
            if (!this._omView || !this._omView.getDom()) {
                return
            }
            if (this._wRatio >= 1 || this._hRatio >= 1) {
                this._omViewMv.style.display = "none";
                return
            }
            var ar = this._omView.getDom().style;
            this._omViewMv.style.display = "";
            this._omViewMv.style.width = ar.width;
            this._omViewMv.style.height = ar.height;
            var e = parseInt(ar.width) - 2;
            var at = parseInt(ar.height) - 2;
            e = e < 0 ? 0 : e;
            at = at < 0 ? 0 : at;
            this._omViewMvInn.style.width = e + "px";
            this._omViewMvInn.style.height = at + "px";
            this._omViewInn.style.width = this._omViewMvInn.style.width;
            this._omViewInn.style.height = this._omViewMvInn.style.height;
            this._omViewMv.style.left = parseInt(ar.left) + this._overviewMap.offsetX + "px";
            this._omViewMv.style.top = parseInt(ar.top) + this._overviewMap.offsetY + "px"
        }, setSize: function (at) {
            if (!at || at.toString() != "Size") {
                at = new f(150, 150)
            }
            var ar = at.width;
            var au = at.height;
            ar = ar > 0 ? ar : 150;
            au = au > 0 ? au : 150;
            this._opts.size = at;
            if (!this._container) {
                return
            }
            if (this.changeView._running == true) {
                var e = arguments;
                var av = this;
                setTimeout(function () {
                    e.callee.call(av, at)
                }, 120);
                return
            }
            Y(this._container, [ar, au]);
            var av = this;
            setTimeout(function () {
                if (av._overviewMap && av._map) {
                    av._overviewMap.setCenter(av._map.getCenter())
                }
            }, 100);
            this.setAnchor(this._opts.anchor);
            this.dispatchEvent(new ak("resize"))
        }, getSize: function () {
            if (this._container) {
                return new f(parseInt(this._container.style.width), parseInt(this._container.style.height))
            } else {
                return this._opts.size
            }
        }, setOffset: function (e) {
            if (!e || e.toString() != "Size") {
                return
            }
            E.prototype.setOffset.call(this, e);
            if (e.width != 0 || e.height != 0) {
                k.ac(this._container, "withOffset")
            } else {
                k.rc(this._container, "withOffset")
            }
        }, _redraw: function () {
            if (!this._omCanvas) {
                return
            }
            var at = this._opts.size.width;
            var aw = this._opts.size.height;
            var ay = this._opts.padding;
            var e = this._borderWidth;
            var au = 0;
            var ax = 0;
            var ar = 0;
            var av = 0;
            this._omCanvas.style.left = this._omCanvas.style.top = this._omCanvas.style.right = this._omCanvas.style.bottom = "auto";
            this._omBtn.style.left = this._omBtn.style.top = this._omBtn.style.right = this._omBtn.style.bottom = "auto";
            if (this._opts.offset.width == 0 && this._opts.offset.height == 0) {
                switch (this._opts.anchor) {
                    case BMAP_ANCHOR_TOP_LEFT:
                        this._omCanvas.style.left = "0px";
                        this._omCanvas.style.top = "0px";
                        break;
                    case BMAP_ANCHOR_TOP_RIGHT:
                        this._omCanvas.style.left = ay + "px";
                        this._omCanvas.style.top = "0px";
                        break;
                    case BMAP_ANCHOR_BOTTOM_LEFT:
                        this._omCanvas.style.top = ay + "px";
                        this._omCanvas.style.left = "0px";
                        break;
                    case BMAP_ANCHOR_BOTTOM_RIGHT:
                        this._omCanvas.style.top = ay + "px";
                        this._omCanvas.style.left = ay + "px";
                        break;
                    default:
                        break
                }
                au = at - e;
                ax = aw - e;
                ar = au - ay - 2 * e;
                av = ax - ay - 2 * e;
                if (k.Browser.ie && document.compatMode == "BackCompat") {
                    au = au + 1;
                    ax = ax + 1;
                    ar = ar + 2;
                    av = av + 2
                }
            } else {
                this._omCanvas.style.left = this._omCanvas.style.top = this._omCanvas.style.right = this._omCanvas.style.bottom = ay + "px";
                au = at - 2 * e;
                ax = aw - 2 * e;
                ar = au - 2 * ay - 2 * e;
                av = ax - 2 * ay - 2 * e;
                if (this._opts.offset.width != 0 || this._opts.offset.height != 0) {
                    k.ac(this._container, "withOffset")
                }
                if (k.Browser.ie && document.compatMode == "BackCompat") {
                    au = au + 2;
                    ax = ax + 2;
                    ar = ar + 2;
                    av = av + 2
                }
            }
            if (au > 0 && ax > 0) {
                Y(this._container.children[0], [au, ax])
            }
            if (ar > 0 && av > 0) {
                Y(this._omCanvas, [ar, av])
            }
            this._setBtnPosition();
            k.rc(this._omBtn, "BMap_omBtnClosed");
            if (!this._opts.isOpen) {
                this._container.style.width = this._btnWidth + "px";
                this._container.style.height = this._btnHeight + "px";
                if (k.Browser.ie) {
                    this.changeView._preBtnTop = this._omBtn.style.top;
                    this.changeView._preBtnLeft = this._omBtn.style.left;
                    this._omBtn.style.left = "0";
                    this._omBtn.style.top = "0"
                }
                k.ac(this._omBtn, "BMap_omBtnClosed")
            }
        }, _setQuad: function () {
            var ar = this._container;
            if (!ar) {
                return
            }
            var e = this._quad;
            switch (this._opts.anchor) {
                case BMAP_ANCHOR_TOP_LEFT:
                    this._quad = 2;
                    break;
                case BMAP_ANCHOR_TOP_RIGHT:
                    this._quad = 1;
                    break;
                case BMAP_ANCHOR_BOTTOM_LEFT:
                    this._quad = 3;
                    break;
                case BMAP_ANCHOR_BOTTOM_RIGHT:
                    this._quad = 4;
                    break;
                default:
                    break
            }
            k.rc(ar, "quad" + e);
            k.ac(ar, "quad" + this._quad)
        }, _setBtnPosition: function () {
            if (!k.Browser.ie) {
                switch (this._quad) {
                    case 2:
                        this._omBtn.style.top = "0";
                        this._omBtn.style.left = "0";
                        break;
                    case 1:
                        this._omBtn.style.top = "0";
                        this._omBtn.style.right = "0";
                        break;
                    case 4:
                        this._omBtn.style.bottom = "0";
                        this._omBtn.style.right = "0";
                        break;
                    case 3:
                        this._omBtn.style.bottom = "0";
                        this._omBtn.style.left = "0";
                        break;
                    default:
                        break
                }
            } else {
                var au = this._btnWidth;
                var ar = this._btnHeight;
                var e = this._opts.size.width;
                var at = this._opts.size.height;
                this._omBtn.style.left = "auto";
                this._omBtn.style.top = "auto";
                this._omBtn.style.right = "auto";
                this._omBtn.style.bottom = "auto";
                switch (this._quad) {
                    case 2:
                        this._omBtn.style.left = "0px";
                        this._omBtn.style.top = "0px";
                        break;
                    case 1:
                        this._omBtn.style.left = e - au + "px";
                        this._omBtn.style.top = "0px";
                        break;
                    case 4:
                        this._omBtn.style.top = at - ar + "px";
                        this._omBtn.style.left = e - au + "px";
                        break;
                    case 3:
                        this._omBtn.style.left = "0px";
                        this._omBtn.style.top = at - ar + "px";
                        break;
                    default:
                        break
                }
            }
        }, _moveView: function () {
            if (this._omView) {
                this._omView.setPoint(this._map.getCenter())
            }
        }, _onMainMoveEnd: function (ar) {
            switch (this._currentOp) {
                case"dragMap":
                    this._setOMViewMvPos();
                    this._currentOp = "";
                    break;
                case"dragView":
                    this._omViewMv.style.display = "none";
                    this._overviewMap.panTo(this._map.getCenter(), false, 90);
                    this._currentOp = "";
                    break;
                default:
                    if (this._overviewMap) {
                        this._overviewMap.panTo(this._map.getCenter(), false, 90)
                    }
                    break
            }
        }, _onMainZoomEnd: function () {
            if (!this._overviewMap) {
                return
            }
            var e = this;
            e._curOMZoomLevel = e._getCurOMZoomLevel();
            setTimeout(function () {
                e._overviewMap.centerAndZoom(e._map.getCenter(), e._curOMZoomLevel);
                e._omView.setPoint(e._map.getCenter());
                e._setRatio()
            }, 100)
        }, _onViewMapMoveEnd: function () {
            this._setOMViewMvPos();
            this._overviewMap.config.enableMouseDown = true
        }, remove: function () {
            E.prototype.remove.call(this);
            this._omCanvas = null;
            this._omMapContainer = null;
            this._omView = null;
            this._omViewInn = null;
            this._omViewMv = null;
            this._omViewMvInn = null;
            this._omBtn = null;
            this._overviewInitialized = false;
            this._overviewMap = null
        }, isOpen: function () {
            if (!this._container) {
                return false
            }
            return this._opts.isOpen
        }
    });

    function F(e) {
        E.call(this);
        e = e || {};
        this._opts = k.extend(k.extend(this._opts, {color: "black", unit: "metric"}), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new f(18, 18);
        this.setAnchor(e.anchor);
        this._units = {
            metric: {name: "metric", conv: 1, incon: 1000, u1: "\u7c73", u2: "\u516c\u91cc"},
            us: {name: "us", conv: 3.2808, incon: 5280, u1: "\u82f1\u5c3a", u2: "\u82f1\u91cc"}
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._scaleText = null;
        this._numberArray = {}
    }

    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    F.inherits(E, "ScaleControl");
    k.extend(F.prototype, {
        initialize: function (ar) {
            E.prototype.initialize.call(this, ar);
            this._render();
            this._numberArray = {
                us: [5280 * 5000, 5280 * 2500, 5280 * 2000, 5280 * 1000, 5280 * 500, 5280 * 200, 5280 * 100, 5280 * 50, 5280 * 25, 5280 * 20, 5280 * 10, 5280 * 5, 5280 * 2, 5280, 2000, 1000, 500, 200, 100, 50, 20, 10, 5],
                metric: [10000000, 5000000, 2000000, 1000000, 500000, 200000, 100000, 50000, 25000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
            };
            this._updateScale();
            var e = this;
            ar.addEventListener("zoomend", function (at) {
                e._updateScale()
            });
            ar.addEventListener("load", function (at) {
                e._updateScale()
            });
            ar.addEventListener("moveend", function (at) {
                e._updateScale()
            });
            ar.addEventListener("dragend", function (at) {
                e._updateScale()
            });
            return this._container
        }, _render: function () {
            E.prototype._render.call(this);
            k.ac(this._container, "BMap_scaleCtrl");
            this._container.innerHTML = this._generateHTML();
            this._scaleText = this._container.children[0];
            E.prototype._setPosition.call(this)
        }, _generateHTML: function () {
            var e = '<div class="BMap_scaleTxt" unselectable="on"></div><div class="BMap_scaleBar BMap_scaleHBar"><img src="' + aj.imgPath + 'mapctrls11.png" /></div><div class="BMap_scaleBar BMap_scaleLBar"><img src="' + aj.imgPath + 'mapctrls11.png" /></div><div class="BMap_scaleBar BMap_scaleRBar"><img src="' + aj.imgPath + 'mapctrls11.png" /></div>';
            return e
        }, setColor: function (e) {
            this._opts.color = e + "";
            if (!this._container) {
                return
            }
            this._container.children[0].style.backgroundColor = "transparent";
            this._container.children[0].style.color = e;
            for (var at = 1, ar = this._container.children.length; at < ar; at++) {
                this._container.children[at].style.backgroundColor = e
            }
        }, getColor: function () {
            return this._opts.color
        }, setUnit: function (e) {
            this._opts.unit = this._units[e] && this._units[e].name || this._opts.unit;
            if (!this._map) {
                return
            }
            this._updateScale()
        }, getUnit: function () {
            return this._opts.unit
        }, _setScaleText: function (ar, e) {
            if (typeof ar != "number" || typeof e != "string") {
                return
            }
            this._scaleText.innerHTML = ar + "&nbsp;" + e
        }, _updateScale: function () {
            if (!this._map || !this._container) {
                return
            }
            var aw = this._map.config.coordType;
            var ar = aw == BMAP_COORD_LNGLAT ? 10 : 500000;
            var av = new D(this._map.getCenter().lng, this._map.getCenter().lat + ar);
            var ax = Math.abs(this._map.pointToPixel(this._map.getCenter()).y - this._map.pointToPixel(av).y);
            var aB;
            if (aw == BMAP_COORD_LNGLAT) {
                aB = an.getDistanceByLL(this._map.getCenter(), av) / ax
            } else {
                if (aw == BMAP_COORD_MERCATOR) {
                    aB = an.getDistanceByMC(this._map.getCenter(), av) / ax
                }
            }
            if (aB == 0 || isNaN(aB)) {
                return
            }
            var az = this._convertUnit(aB, this._opts.unit);
            var e = 0;
            var at = this._units[this._opts.unit].incon;
            var ay = this._map.getZoom();
            var au = this._numberArray[this._opts.unit][this._map.getZoom() - 1];
            e = au / az;
            var aA = au >= at ? this._units[this._opts.unit].u2 : this._units[this._opts.unit].u1;
            if (au >= at) {
                au = Math.round(au / at)
            }
            this._setScaleText(au, aA);
            if (Math.round(e) % 2 != 0 && k.Browser.ie == 6) {
                e = e + 1
            }
            this._container.style.width = Math.round(e) + "px"
        }, _convertUnit: function (e, ar) {
            ar = ar || "metric";
            if (this._units[ar]) {
                return e * this._units[ar].conv
            }
            return e
        }
    });
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;

    function Z(e) {
        E.call(this);
        e = e || {};
        k.extend(this._opts, e);
        this.controlHeight = [{
            width: 52,
            height: 226,
            zoomHeight: 167,
            zoomWidth: 37,
            sliderHeight: 133,
            sliderCHeight: 124
        }, {width: 37, height: 97, zoomHeight: 38, zoomWidth: 37, sliderHeight: 0, sliderCHeight: 0}, {
            width: 37,
            height: 57,
            zoomHeight: 0,
            zoomWidth: 0,
            sliderHeight: 0,
            sliderCHeight: 0
        }, {width: 18, height: 38, zoomHeight: 38, zoomWidth: 18, sliderHeight: 0, sliderCHeight: 0}];
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new f(10, 10);
        this.setAnchor(e.anchor);
        this.setType(e.type);
        this._maxTotalZoomLv = 18;
        this._minZoomLevel = -1;
        this._maxZoomLevel = -1;
        this._totalZoomLv = -1;
        this._sliderInterval = 7;
        this._minBarY = 1;
        this._maxBarY = -1;
        this._curBarY = -1;
        this._zoomDom = null;
        this._zoomBtnDom = null;
        this._sliderDom = null;
        this._sliderBaseDom = null;
        this._cZIndex = "1100"
    }

    Z.inherits(E, "NavigationControl");
    k.extend(Z.prototype, {
        initialize: function (ar) {
            E.prototype.initialize.call(this, ar);
            this._setParam();
            this._render();
            this._bind();
            this._setSliderZoomLv(ar.getZoom());
            var e = this;
            ar.addEventListener("zoomend", function (at) {
                if (!e._map) {
                    return
                }
                e._setSliderZoomLv(e._map.getZoom());
                if (e._msover) {
                    return
                }
                if (e._isShowLevelHint) {
                    e._hideTimerId = setTimeout(function () {
                        e._hideLevelHint()
                    }, 1000)
                }
            });
            ar.addEventListener("mousewheel", function () {
                if (!e._map) {
                    return
                }
                if (e._map.config.enableWheelZoom && e._isShowLevelHint) {
                    if (e._hideTimerId) {
                        clearTimeout(e._hideTimerId);
                        e._hideTimerId = null
                    }
                    e._showLevelHint()
                }
            });
            ar.addEventListener("load", function (at) {
                if (!e._map) {
                    return
                }
                e._setSliderZoomLv(e._map.getZoom())
            });
            return this._container
        }, _setParam: function () {
            var e = this._map.mapType;
            this._minZoomLevel = this._map.config.zoomLevelMin;
            this._maxZoomLevel = this._map.config.zoomLevelMax;
            if (this._minZoomLevel != N[e].zoomLevelMin || this._maxZoomLevel != N[e].zoomLevelMax) {
                this._isShowLevelHint = false
            } else {
                this._isShowLevelHint = true
            }
            this._totalZoomLv = this._maxZoomLevel - this._minZoomLevel + 1;
            this._maxBarY = this._minBarY + (this._totalZoomLv - 1) * this._sliderInterval
        }, _render: function () {
            E.prototype._render.call(this);
            var at = k.Browser.ie == 6 ? " BMap_ie6" : "";
            var ar = " BMap_stdMpType" + this._opts.type;
            var au = this._container;
            k.ac(au, "BMap_stdMpCtrl");
            k.ac(au, at);
            k.ac(au, ar);
            au.innerHTML = this._generateHtml(this._opts.type);
            this._setSliderBarCursor(k.Browser.opera ? "pointer" : aj.defaultCursor);
            this._zoomDom = k.G(au.children[1]);
            var e = this._zoomDom;
            this._zoomBtnDom = k.G(e.children[0]);
            this._sliderDom = k.G(e.children[1]);
            this._sliderBaseDom = k.G(e.children[1].children[0]);
            this._sliderBotDom = k.G(e.children[1].children[1]);
            this.setType(this._opts.type)
        }, _setSliderHeight: function () {
            var az = this._opts.type;
            var ax = this.controlHeight[az].width;
            var e = this.controlHeight[az].height;
            var au = this.controlHeight[az].zoomHeight;
            var ay = this.controlHeight[az].zoomWidth;
            var ar = this.controlHeight[az].sliderHeight;
            var av = this.controlHeight[az].sliderCHeight;
            var at = (this._maxTotalZoomLv - this._totalZoomLv) * this._sliderInterval;
            if (this._opts.type == BMAP_NAVIGATION_CONTROL_LARGE) {
                e = e - at >= 0 ? e - at : 0;
                au = au - at >= 0 ? au - at : 0;
                ar = ar - at >= 0 ? ar - at : 0;
                av = av - at >= 0 ? av - at : 0;
                sliderBotDomTop = 124 - at >= 0 ? 124 - at : 0;
                this._sliderBotDom.style.top = sliderBotDomTop + "px"
            }
            this._container.style.width = ax + "px";
            this._container.style.height = e + "px";
            this._zoomDom.style.height = au + "px";
            this._zoomDom.style.width = ax + "px";
            this._zoomBtnDom.style.height = au + "px";
            this._zoomBtnDom.style.width = ay + "px";
            this._sliderDom.style.height = ar + "px";
            this._sliderBaseDom.style.height = av + "px";
            var aw = this._zoomBtnDom.children;
            if (this._opts.type == BMAP_NAVIGATION_CONTROL_ZOOM) {
                aw[0].style.left = aw[1].style.left = "0"
            } else {
                aw[0].style.left = aw[1].style.left = ""
            }
        }, _generateHtml: function () {
            var e = [];
            e.push(this._generatePanHtml());
            e.push(this._generateZoomContainerHtml());
            return e.join("")
        }, _generatePanHtml: function () {
            var e = '<div class="BMap_stdMpPan"><div class="BMap_button BMap_panN" title="\u5411\u4e0a\u5e73\u79fb"></div><div class="BMap_button BMap_panW" title="\u5411\u5de6\u5e73\u79fb"></div><div class="BMap_button BMap_panE" title="\u5411\u53f3\u5e73\u79fb"></div><div class="BMap_button BMap_panS" title="\u5411\u4e0b\u5e73\u79fb"></div><div class="BMap_stdMpPanBg BMap_smcbg"></div></div>';
            return e
        }, _generateZoomContainerHtml: function () {
            var e = '<div class="BMap_stdMpZoom">' + this._generateZoomHtml() + this._generateSliderHtml() + this._generateZoomBalloonHtml() + "</div>";
            return e
        }, _generateZoomHtml: function () {
            var e = '<div><div class="BMap_button BMap_stdMpZoomIn" title="\u653e\u5927\u4e00\u7ea7"><div class="BMap_smcbg"></div></div><div class="BMap_button BMap_stdMpZoomOut" title="\u7f29\u5c0f\u4e00\u7ea7"><div class="BMap_smcbg"></div></div></div>';
            return e
        }, _generateSliderHtml: function () {
            var e = '<div class="BMap_stdMpSlider"><div class="BMap_stdMpSliderBgTop"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderMask" title="\u653e\u7f6e\u5230\u6b64\u7ea7\u522b"></div><div class="BMap_stdMpSliderBar" title="\u62d6\u52a8\u7f29\u653e"><div class="BMap_smcbg"></div></div></div>';
            return e
        }, _generateZoomBalloonHtml: function () {
            var e = '<div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div>';
            return e
        }, setType: function (e) {
            if (typeof e == "number" && e >= BMAP_NAVIGATION_CONTROL_LARGE && e <= BMAP_NAVIGATION_CONTROL_ZOOM) {
                this._opts.type = e
            } else {
                this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
            }
            if (!this._map || !this._container) {
                return
            }
            var ar = this._container;
            ar.className = ar.className.replace(/BMap_stdMpType\d/, "BMap_stdMpType" + this._opts.type);
            this._setSliderHeight();
            if (e != BMAP_NAVIGATION_CONTROL_LARGE) {
                k.rc(ar.children[1].children[2], "hvr")
            }
            this.setAnchor(this._opts.anchor)
        }, getType: function () {
            return this._opts.type
        }, _bind: function () {
            var ay = this;
            var ax = ay._container;
            k.on(this._zoomDom, "mouseover", function () {
                if (!ay._isShowLevelHint) {
                    return
                }
                ay._msover = true;
                if (ay._hideTimerId) {
                    clearTimeout(ay._hideTimerId);
                    ay._hideTimerId = null
                }
                ay._showLevelHint()
            });
            k.on(this._zoomDom, "mouseout", function () {
                if (!ay._isShowLevelHint) {
                    return
                }
                if (ay._hideTimerId) {
                    clearTimeout(ay._hideTimerId)
                }
                ay._msover = false;
                ay._hideTimerId = setTimeout(function () {
                    ay._hideLevelHint();
                    ay._hideTimerId = null
                }, 1000)
            });
            k.on(ax.children[0], "mouseover", function () {
                ay._hideLevelHint(true)
            });
            k.on(ax.children[0].children[0], "click", function () {
                ay._panBy(0, Math.round(ay._map.height / 3))
            });
            k.on(ax.children[0].children[1], "click", function () {
                ay._panBy(Math.round(ay._map.width / 3), 0)
            });
            k.on(ax.children[0].children[2], "click", function () {
                ay._panBy(-Math.round(ay._map.width / 3), 0)
            });
            k.on(ax.children[0].children[3], "click", function () {
                ay._panBy(0, -Math.round(ay._map.height / 3))
            });
            var av = ax.children[1].children[0].children;
            k.on(av[0], "click", function () {
                ay._zoomIn()
            });
            k.on(av[1], "click", function () {
                ay._zoomOut()
            });
            for (var at = 1; at < 6; at++) {
                k.on(ax.children[0].children[at], "mouseup", function (aA) {
                    if ((ay._map.currentOperation & g.stdMapCtrlDrag) == 0 && (ay._map.currentOperation & g.drag) == 0) {
                        al(aA)
                    }
                });
                k.on(ax.children[0].children[at], "contextmenu", function (aA) {
                    U(aA)
                });
                k.on(ax.children[0].children[at], "click", function (aA) {
                    U(aA)
                })
            }
            k.on(av[0], "mouseup", function (aA) {
                if ((ay._map.currentOperation & g.stdMapCtrlDrag) == 0 && (ay._map.currentOperation & g.drag) == 0) {
                    al(aA)
                }
            });
            k.on(av[1], "mouseup", function (aA) {
                if ((ay._map.currentOperation & g.stdMapCtrlDrag) == 0 && (ay._map.currentOperation & g.drag) == 0) {
                    al(aA)
                }
            });
            k.on(av[0], "contextmenu", function (aA) {
                U(aA)
            });
            k.on(av[1], "contextmenu", function (aA) {
                U(aA)
            });
            var az = ax.children[1].children[1].children[2];
            k.on(az, "mouseup", function (aA) {
                if ((ay._map.currentOperation & g.stdMapCtrlDrag) == 0 && (ay._map.currentOperation & g.drag) == 0) {
                    al(aA)
                }
            });
            k.on(av[0], "click", function (aA) {
                al(aA)
            });
            k.on(av[1], "click", function (aA) {
                al(aA)
            });
            k.on(az, "click", function (aA) {
                al(aA)
            });
            var aw = ax.children[1].children[1].children[3];
            k.on(aw, "mouseup", function (aA) {
                if (aA.button == 2) {
                    al(aA)
                }
            });
            k.on(aw, "contextmenu", function (aA) {
                U(aA)
            });
            k.on(this._zoomDom.children[2].children[0], "click", function (aA) {
                ay._map.zoomTo(18)
            });
            k.on(this._zoomDom.children[2].children[1], "click", function (aA) {
                ay._map.zoomTo(12)
            });
            k.on(this._zoomDom.children[2].children[2], "click", function (aA) {
                ay._map.zoomTo(8)
            });
            k.on(this._zoomDom.children[2].children[3], "click", function (aA) {
                ay._map.zoomTo(4)
            });
            k.on(az, "mousedown", function (aB) {
                aB = window.event || aB;
                var aA = 0;
                if (typeof aB.layerY != "undefined") {
                    aA = aB.layerY
                } else {
                    if (typeof aB.offsetY != "undefined") {
                        aA = aB.offsetY
                    }
                }
                var aC = 0;
                aC = (ay._maxZoomLevel + 1) - Math.round(ay._totalZoomLv * parseFloat(aA / (ay._totalZoomLv * ay._sliderInterval)));
                ay._map.zoomTo(aC)
            });
            k.on(aw, "mouseover", function () {
                k.ac(aw, "h")
            });
            k.on(aw, "mouseout", function () {
                if ((ay._map.currentOperation & g.stdMapCtrlDrag) == 0) {
                    k.rc(aw, "h")
                }
            });
            var au = function (aA) {
                var aA = window.event || aA;
                if (aA.button == 2) {
                    return
                }
                if ((k.Browser.ie && aA.button != 1)) {
                    return
                }
                if (aw.setCapture) {
                    aw.setCapture()
                }
                ay._map.currentOperation |= g.stdMapCtrlDrag;
                ay._bind.my = aA.pageY || aA.clientY || 0;
                if (!k.Browser.opera) {
                    ay._setSliderBarCursor(aj.draggingCursor)
                }
                k.on(document, "mousemove", e);
                k.on(document, "mouseup", ar);
                al(aA);
                return U(aA)
            };
            var e = function (aB) {
                if ((ay._map.currentOperation & g.stdMapCtrlDrag) != 0) {
                    var aB = window.event || aB;
                    var aC = aB.pageY || aB.clientY;
                    var aA = ay._curBarY + aC - ay._bind.my;
                    if (aA < ay._minBarY) {
                        aw.style.top = ay._minBarY + "px"
                    } else {
                        if (aA > ay._maxBarY) {
                            aw.style.top = ay._maxBarY + "px"
                        } else {
                            aw.style.top = aA + "px"
                        }
                    }
                }
            };
            var ar = function (aB) {
                if ((ay._map.currentOperation & g.stdMapCtrlDrag) != 0) {
                    var aA = k.G(aw);
                    ay._curBarY = parseInt(aA.style.top);
                    k.rc(aw, "h");
                    ay._map.currentOperation &= ~g.stdMapCtrlDrag;
                    if (ax && aw && aw.releaseCapture) {
                        aw.releaseCapture()
                    }
                    if (!k.Browser.opera) {
                        ay._setSliderBarCursor(aj.defaultCursor)
                    }
                    var aC = (ay._maxZoomLevel + 1) - Math.round(parseFloat(ay._curBarY - ay._minBarY) / parseFloat(ay._maxBarY - ay._minBarY) * (ay._totalZoomLv - 1) + 1);
                    ay._map.zoomTo(aC);
                    k.un(document, "mousemove", e);
                    k.un(document, "mouseup", ar)
                }
            };
            k.on(aw, "mousedown", au)
        }, _setSliderBarCursor: function (e) {
            this._container.children[1].children[1].children[3].style.cursor = e
        }, _panBy: function (ar, e) {
            this._map.panBy(ar, e)
        }, _zoomIn: function () {
            this._map.zoomIn()
        }, _zoomOut: function () {
            this._map.zoomOut()
        }, _setSliderZoomLv: function (ar) {
            if (!this._container || this.getType() != BMAP_NAVIGATION_CONTROL_LARGE) {
                return
            }
            var e = (this._maxZoomLevel - ar) * this._sliderInterval + this._minBarY;
            this._curBarY = e > this._maxBarY ? this._maxBarY : e < this._minBarY ? this._minBarY : e;
            this._container.children[1].children[1].children[3].style.top = this._curBarY + "px"
        }, _hideLevelHint: function (e) {
            if (this._opts.type == 0) {
                k.rc(this._container.children[1].children[2], "hvr")
            }
            if (e && this._hideTimerId) {
                clearTimeout(this._hideTimerId);
                this._hideTimerId = null
            }
        }, _showLevelHint: function () {
            if (this._opts.type == 0) {
                k.ac(this._container.children[1].children[2], "hvr")
            }
        }
    });

    function M(e) {
        q.call(this);
        this._opts = {container: null, cursor: "default"};
        this._opts = k.extend(this._opts, e);
        this._type = "contextmenu";
        this._map = null;
        this._container;
        this._shadow;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this.curPixel = null;
        this.curPoint = null;
        this._isOpen = false
    }

    M.inherits(q, "ContextMenu");
    k.extend(M.prototype, {
        initialize: function (au) {
            if (this._container) {
                return false
            }
            this._map = au;
            this._render();
            var at = this;
            this._container.style.cursor = au.config.defaultCursor;
            this._shadow.style.cursor = this._container.style.cursor;
            k.on(document, "mousedown", function (aw) {
                if (!at._container) {
                    return
                }
                at.hide()
            });
            k.on(this._container, "click", function (aw) {
                at.hide();
                al(aw)
            });
            var av = this._opts.container;
            if (!av) {
                av = this._map.container
            }
            k.on(av, "contextmenu", function (ax) {
                if (!at._container) {
                    return
                }
                ax = window.event || ax;
                var aw = ax.target || ax.srcElement;
                while (aw && !k.hc(aw, "pop")) {
                    aw = aw.parentNode
                }
                if (aw && k.hc(aw, "pop")) {
                    at.hide();
                    return
                }
                at._showMenu(ax, av);
                return U(ax)
            });
            for (var ar = 0, e = this._items.length; ar < e; ar++) {
                if (this._items[ar]._type == "menuitem") {
                    this._items[ar].initialize(au, this)
                }
                if (this._items[ar]._type == "divider") {
                    this._dividers[this._items[ar]._dIndex].dom = V(this._container, "<div class='BMap_cmDivider'></div>")
                }
            }
            this._updateShadowSize()
        }, remove: function () {
            if (this._container) {
                this._container.parentNode.removeChild(this._container);
                this._container = null
            }
            if (this._shadow) {
                this._shadow.parentNode.removeChild(this._shadow);
                this._shadow = null
            }
            this._map = null
        }, _render: function () {
            this._container = V(this._map.container, "<div unselectable='on'></div>");
            this._container.className = "BMap_contextMenu";
            this._container.style.font = "12px arial, simsun";
            this._shadow = V(this._map.container, "<div class='BMap_cmShadow'></div>");
            return this._container
        }, addItem: function (at) {
            if (!at || at._type != "menuitem" || at._text == "" || at._width <= 0) {
                return
            }
            for (var ar = 0, e = this._items.length; ar < e; ar++) {
                if (this._items[ar] === at) {
                    return
                }
            }
            this._items.push(at);
            this._rItems.push(at);
            at.initialize(this._map, this);
            k.ac(at.getDom(), "BMap_cmLstItem");
            if (this._items.length > 1) {
                this._items[this._items.length - 2]._type == "menuitem" && k.rc(this._items[this._items.length - 2].getDom(), "BMap_cmLstItem")
            } else {
                this._items[0]._type == "menuitem" && k.ac(this._items[0].getDom(), "BMap_cmFstItem")
            }
            this._updateShadowSize()
        }, removeItem: function (at) {
            if (!at || at._type != "menuitem") {
                return
            }
            for (var ar = 0, e = this._items.length; ar < e; ar++) {
                if (this._items[ar] === at) {
                    this._items[ar].remove();
                    this._items.splice(ar, 1);
                    e--
                }
            }
            for (var ar = 0, e = this._rItems.length; ar < e; ar++) {
                if (this._rItems[ar] === at) {
                    this._rItems[ar].remove();
                    this._rItems.splice(ar, 1);
                    e--
                }
            }
            if (!this._container) {
                return
            }
            if (this._items.length > 0) {
                this._items[this._items.length - 1]._type == "menuitem" && k.ac(this._items[this._items.length - 1].getDom(), "BMap_cmLstItem")
            }
            this._updateShadowSize()
        }, addSeparator: function () {
            this._items.push({_type: "divider", _dIndex: this._dividers.length});
            this._dividers.push({dom: null});
            if (!this._container) {
                return
            }
            var e = "<div class='BMap_cmDivider'></div>";
            this._dividers[this._dividers.length - 1].dom = V(this._container, e);
            this._updateShadowSize()
        }, removeSeparator: function (ar) {
            if (!this._dividers[ar]) {
                return
            }
            if (this._dividers[ar].dom && this._dividers[ar].dom.parentNode) {
                this._dividers[ar].dom.parentNode.removeChild(this._dividers[ar].dom)
            }
            for (var at = 0, e = this._items.length; at < e; at++) {
                if (this._items[at] && this._items[at]._type == "divider" && this._items[at]._dIndex == ar) {
                    this._items.splice(at, 1);
                    e--
                }
                if (this._items[at] && this._items[at]._type == "divider" && this._items[at]._dIndex > ar) {
                    this._items[at]._dIndex--
                }
            }
            this._dividers.splice(ar, 1);
            this._updateShadowSize()
        }, getDom: function () {
            return this._container
        }, setPosition: function (e, ar) {
            this._left = e;
            this._top = ar;
            this._container.style.left = e + "px";
            this._container.style.top = ar + "px";
            this._shadow.style.left = e + 1 + "px";
            this._shadow.style.top = ar + 2 + "px"
        }, show: function () {
            if (this._isOpen == true) {
                return
            }
            if (this._rItems.length == 0) {
                return
            }
            this._isOpen = true;
            if (this._container) {
                this._container.style.visibility = "visible"
            }
            if (this._shadow) {
                this._shadow.style.visibility = "visible"
            }
            var e = new ak("onopen");
            e.point = this.curPoint;
            e.pixel = this.curPixel;
            this.dispatchEvent(e)
        }, hide: function () {
            if (this._isOpen == false) {
                return
            }
            this._isOpen = false;
            if (this._container) {
                this._container.style.visibility = "hidden"
            }
            if (this._shadow) {
                this._shadow.style.visibility = "hidden"
            }
            var e = new ak("onclose");
            e.point = this.curPoint;
            e.pixel = this.curPixel;
            this.dispatchEvent(e)
        }, setCursor: function (e) {
            if (!e) {
                return
            }
            this._opts.cursor = e;
            if (this._container) {
                this._container.style.cursor = this._opts.cursor
            }
            if (this._shadow) {
                this._shadow.style.cursor = this._opts.cursor
            }
        }, _updateShadowSize: function () {
            if (this._container && this._shadow) {
                this._shadow.style.width = this._container.offsetWidth + "px";
                this._shadow.style.height = this._container.offsetHeight + "px"
            }
        }, getItem: function (e) {
            return this._rItems[e]
        }, _showMenu: function (av, ax) {
            if (this._rItems.length == 0) {
                return
            }
            var ay = this;
            var aA = av.layerX || av.offsetX;
            var az = av.layerY || av.offsetY;
            var aC = av.target || av.srcElement;
            var aw = aC;
            if (ax == ay._map.container && aw !== ay._map.maskLayer && aw.nodeName.toLowerCase() != "svg") {
                while (aw && !k.hc(aw, "shadow")) {
                    aw = aw.parentNode
                }
                if (!k.hc(aw, "shadow") || aw.getAttribute("type") != "infowindow_shadow") {
                    ay.hide();
                    return
                }
            }
            while (aC && aC != ay._map.container) {
                if (!(aC.clientWidth == 0 && aC.clientHeight == 0 && aC.offsetParent && aC.offsetParent.nodeName.toLowerCase() == "td")) {
                    if (aC.nodeName.toLowerCase() == "svg") {
                        aA += parseInt(aC.getAttribute("viewBox").split(" ")[0]) || 0;
                        az += parseInt(aC.getAttribute("viewBox").split(" ")[1]) || 0
                    } else {
                        aA += aC.offsetLeft;
                        az += aC.offsetTop
                    }
                }
                aC = aC.offsetParent || aC.parentNode
            }
            ay.curPixel = new s(aA, az);
            ay.curPoint = ay._map.pixelToPoint(ay.curPixel);
            if (ay.curPoint.lng < N[ay._map.mapType].bounds[0] || ay.curPoint.lng > N[ay._map.mapType].bounds[2] || ay.curPoint.lat < N[ay._map.mapType].bounds[1] || ay.curPoint.lat > N[ay._map.mapType].bounds[3]) {
                return
            }
            var au = ay.getDom().offsetHeight;
            var aB = ay.getDom().offsetWidth;
            var at = aA;
            var ar = az;
            if (aA + aB > this._map.width) {
                at = aA - aB
            }
            if (az + au > this._map.height) {
                ar = az - au
            }
            ay.setPosition(at, ar);
            ay.show()
        }
    });

    function L(ar, at, e) {
        if (!ar || !at || typeof at != "function") {
            return
        }
        q.call(this);
        this._opts = {width: 100, id: ""};
        e = e || {};
        this._opts.width = (e.width * 1) ? e.width : 100;
        this._opts.id = e.id ? e.id : "";
        this._text = ar + "";
        this._callback = at;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true
    }

    L.inherits(q, "MenuItem");
    k.extend(L.prototype, {
        initialize: function (e, ar) {
            if (this._container) {
                return false
            }
            this._map = e;
            this._contextmenu = ar;
            if (ar.getDom()) {
                this._render();
                this._bind()
            }
            return true
        }, remove: function () {
            var e = this;
            if (this._container) {
                this._container.parentNode.removeChild(this._container);
                this._container = null
            }
            this._contextmenu = null;
            this._map = null
        }, _render: function () {
            var e = "<div" + (this._opts.id ? " id='" + this._opts.id + "'" : "") + " unselectable='on'><span>" + this._text + "</span></div>";
            this._container = V(this._contextmenu.getDom(), e);
            var ar = this._container.style;
            ar.padding = "2px 6px";
            ar.margin = "0 2px";
            ar.fontSize = "12px";
            ar.MozUserSelect = "none";
            ar.lineHeight = "17px";
            ar.width = this._opts.width + "px";
            if (this._enabled) {
                ar.color = "#000";
                ar.cursor = "pointer"
            } else {
                ar.color = "#aaa";
                ar.cursor = this._map.config.defaultCursor
            }
            return this._container
        }, _bind: function () {
            var e = this;
            k.on(this._container, "click", function (ar) {
                if (!e._enabled) {
                    al(ar);
                    return
                }
                if (e._callback && e._callback.call) {
                    e._callback.call(e, e._contextmenu.curPoint, e._contextmenu.curPixel)
                }
            });
            k.on(this._container, "mousedown", function (ar) {
                al(ar)
            });
            k.on(this._container, "mouseover", function () {
                if (!e._enabled) {
                    return
                }
                e._container.style.color = "#6688cc"
            });
            k.on(this._container, "mouseout", function () {
                if (!e._enabled) {
                    return
                }
                e._container.style.color = "#000"
            })
        }, setText: function (e) {
            if (!e) {
                return
            }
            this._text = e + "";
            if (this._container) {
                this._container.innerHTML = "<span>" + this._text + "</span>"
            }
        }, getDom: function () {
            return this._container
        }, enable: function () {
            this._enabled = true;
            if (this._container) {
                this._container.style.color = "#000";
                this._container.style.cursor = "pointer"
            }
        }, disable: function () {
            this._enabled = false;
            if (this._container) {
                this._container.style.color = "#aaa";
                this._container.style.cursor = this._map.config.defaultCursor
            }
        }
    });

    function m(e, au, at, ar) {
        this.minX = e;
        this.minY = au;
        this.maxX = at;
        this.maxY = ar
    }

    k.extend(m.prototype, {
        isEmpty: function () {
            var e = "number";
            return (typeof(this.minX) != e || typeof(this.minY) != e || typeof(this.maxX) != e || typeof(this.maxY) != e)
        }, equals: function (e) {
            if (!e || e.toString() != "Bounds") {
                return
            }
            return (this.minX == e.minX && this.minY == e.minY && this.maxX == e.maxX && this.maxY == e.maxY)
        }, getMaxX: function () {
            return this.maxX
        }, getMaxY: function () {
            return this.maxY
        }, getMinX: function () {
            return this.minX
        }, getMinY: function () {
            return this.minY
        }, containsBounds: function (e) {
            if (!e || e.toString() != "Bounds") {
                return
            }
            return (e.minX > this.minX && e.maxX < this.maxX && e.minY > this.minY && e.maxY < this.maxY)
        }, getCenterPoint: function () {
            var e = (this.minX + this.maxX) / 2;
            var ar = (this.minY + this.maxY) / 2;
            return new D(e, ar)
        }, getCenter: function () {
            return this.getCenterPoint()
        }, intersects: function (at) {
            if (!at || at.toString() != "Bounds") {
                return
            }
            if (Math.max(at.minX, at.maxX) < Math.min(this.minX, this.maxX) || Math.min(at.minX, at.maxX) > Math.max(this.minX, this.maxX) || Math.max(at.minY, at.maxY) < Math.min(this.minY, this.maxY) || Math.min(at.minY, at.maxY) > Math.max(this.minY, this.maxY)) {
                return null
            }
            var av = Math.max(this.minX, at.minX);
            var ar = Math.min(this.maxX, at.maxX);
            var au = Math.max(this.minY, at.minY);
            var e = Math.min(this.maxY, at.maxY);
            return new m(av, au, ar, e)
        }, containsPoint: function (e) {
            if (!e || e.toString() != "Point") {
                return
            }
            return (e.lng >= this.minX && e.lng <= this.maxX && e.lat >= this.minY && e.lat <= this.maxY)
        }, extend: function (e) {
            if (!e || e.toString() != "Point") {
                return
            }
            var at = e.lng, ar = e.lat;
            if (this.minX > at) {
                this.minX = at
            }
            if (this.maxX < at) {
                this.maxX = at
            }
            if (this.minY > ar) {
                this.minY = ar
            }
            if (this.maxY < ar) {
                this.maxY = ar
            }
        }, getIntersectLine: function (e) {
            if (!e || e.toString() != "Line") {
                return
            }
            var ar = e.sPoint;
            var au = e.ePoint;
            var at = [];
            if (ar.lat == au.lat) {
                if (ar.lng == au.lng) {
                    return null
                }
                if (ar.lat > this.minY && ar.lat < this.maxY) {
                }
                var e = new Line(at.lng, at.lat);
                return e
            }
        }, getMin: function () {
            return new D(this.minX, this.minY)
        }, getMax: function () {
            return new D(this.maxX, this.maxY)
        }, toString: function () {
            return "Bounds"
        }
    });

    function D(e, ar) {
        if (isNaN(e)) {
            e = 0
        } else {
            if (typeof e == "string") {
                e = parseFloat(e)
            }
        }
        if (isNaN(ar)) {
            ar = 0
        } else {
            if (typeof ar == "string") {
                ar = parseFloat(ar)
            }
        }
        this.lng = e;
        this.lat = ar
    }

    D.inherits(q, "Point");
    D.prototype.equals = function (e) {
        if (!e || e.toString() != "Point") {
            return
        }
        return (this.lat == e.lat && this.lng == e.lng)
    };
    var g = {
        undo: 1,
        redo: 2,
        zoom: 4,
        drag: 8,
        move: 16,
        mousewheel: 32,
        toolbarOperation: 64,
        stdMapCtrlDrag: 128,
        dblclick: 256
    };
    var j = {
        _map: null,
        _html: "<div class='BMap_opMask' unselectable='on'></div>",
        _maskElement: null,
        _cursor: "default",
        inUse: false,
        show: function (e) {
            if (!this._map) {
                this._map = e
            }
            this.inUse = true;
            if (!this._maskElement) {
                this._createMask(e)
            }
            this._maskElement.style.display = "block"
        },
        _createMask: function (e) {
            if (!this._map) {
                this._map = e
            }
            if (!this._map) {
                return
            }
            this._maskElement = V(this._map.container, this._html);
            k.on(this._maskElement, "mouseup", function (ar) {
                if (ar.button == 2) {
                    al(ar);
                    return U(ar)
                }
            });
            k.on(this._maskElement, "click", function (ar) {
            });
            this._maskElement.style.display = "none"
        },
        getDrawPoint: function (au, ax, av) {
            au = window.event || au;
            var ar = au.layerX || au.offsetX || 0;
            var aw = au.layerY || au.offsetY || 0;
            var at = au.target || au.srcElement;
            if (at != j.getDom(this._map) && ax == true) {
                while (at && at != this._map.container) {
                    if (!(at.clientWidth == 0 && at.clientHeight == 0 && at.offsetParent && at.offsetParent.nodeName.toLowerCase() == "td")) {
                        ar += at.offsetLeft;
                        aw += at.offsetTop
                    }
                    at = at.offsetParent
                }
            }
            if (at != j.getDom(this._map) && at != this._map.container) {
                return
            }
            if (typeof ar === "undefined" || typeof aw === "undefined") {
                return
            }
            if (isNaN(ar) || isNaN(aw)) {
                return
            }
            if (av) {
                ar = ar + av.x;
                aw = aw + av.y
            }
            return this._map.pixelToPoint(new s(ar, aw))
        },
        hide: function () {
            if (!this._map) {
                return
            }
            this.inUse = false;
            if (this._maskElement) {
                this._maskElement.style.display = "none"
            }
        },
        getDom: function (e) {
            if (!this._maskElement) {
                this._createMask(e)
            }
            return this._maskElement
        },
        setCursor: function (e) {
            this._cursor = e || "default";
            if (this._maskElement) {
                this._maskElement.style.cursor = this._cursor
            }
        }
    };

    function ag() {
        k.BaseClass.call(this);
        this._visible = true;
        this._type = "overlay";
        this.infoWindow = null
    }

    ag.inherits(k.BaseClass, "Overlay");
    z.register(function (at) {
        var ar = '<div style="position:absolute;top:0;left:0;width:0;height:0;z-index:200"></div>';
        at.temp.overlayDiv = at.overlayDiv = V(at.platform, ar);
        var e = '<div style="position:absolute;top:0;left:0;width:0;height:0" type="system"></div>';
        at.temp.areaDiv = V(at.temp.overlayDiv, e);
        at.temp.areaDiv.style.zIndex = 700;
        at.temp.labelDiv = V(at.temp.overlayDiv, e);
        at.temp.labelDiv.style.zIndex = 500;
        at.markerDiv = at.temp.markerDiv = V(at.temp.overlayDiv, e);
        at.temp.markerDiv.style.zIndex = 400
    });
    ag.getZIndex = function (ar, e) {
        ar = ar * 1;
        if (!ar) {
            return 0
        }
        if (e && e == BMAP_COORD_MERCATOR) {
            ar = an.convertMC2LL(new z.Point(0, ar)).lat
        }
        return (ar * -100000) << 5
    };
    k.extend(ag.prototype, {
        remove: function () {
            if (this.domElement && this.domElement.parentNode && this.domElement.parentNode.tagName) {
                if (this.infoWindow && this.infoWindow.overlay && this.infoWindow.overlay == this) {
                    this.closeInfoWindow()
                }
                this.domElement.parentNode.removeChild(this.domElement);
                this.domElement = null;
                this.dispatchEvent(new ak("onremove"))
            }
        }, _addOverlayDom: function () {
            var at = this.map;
            if (!this.domElement) {
                switch (this.toString()) {
                    case"Marker":
                        this.domElement = V(at.temp.areaDiv, this.render());
                        this.siblingElement = V(at.temp.markerDiv, this.siblingRender());
                        this.siblingElement.hashCode = this.getHashCode();
                        break;
                    case"Label":
                        this.domElement = V(at.temp.labelDiv, this.render());
                        break;
                    default:
                        this.domElement = V(at.temp.overlayDiv, this.render());
                        break
                }
                var e = this;
                if (this.domElement) {
                    k.on(this.domElement, "mousemove", function (au) {
                        if (e.isDraging) {
                            return true
                        }
                        return al(au)
                    })
                }
                this.domElement.hashCode = this.getHashCode();
                if (this._visible == false) {
                    this.domElement.style.display = "none";
                    if (this.siblingElement) {
                        this.siblingElement.style.display = "none"
                    }
                }

                function ar(ax, aw) {
                    var av = ax.srcElement || ax.target;
                    var au = ax.clientX || ax.pageX;
                    var az = ax.clientY || ax.pageY;
                    if (ax && aw && au && az && av) {
                        var ay = k.Dom.getOffset(at.container);
                        aw.pixel = new s(au - ay.left, az - ay.top);
                        aw.point = at.pixelToPoint(aw.pixel);
                        return aw
                    } else {
                        return aw
                    }
                }

                var e = this;
                k.on(this.domElement, "mouseover", function (au) {
                    if (!e._dragstarted) {
                        e.dispatchEvent(ar(au, new ak("onmouseover").inherit(au)))
                    }
                });
                k.on(this.domElement, "mouseout", function (au) {
                    if (!e._dragstarted) {
                        e.dispatchEvent(ar(au, new ak("onmouseout").inherit(au)))
                    }
                });
                k.on(this.domElement, "click", function (av) {
                    var au = av.srcElement || av.target;
                    while (au) {
                        if (au == e.domElement) {
                            if (e.toString() != "Marker" || e.toString() == "Marker" && (!e._lastPt || e._lastPt && e.getPoint().equals(e._lastPt))) {
                                e.dispatchEvent(ar(av, new ak("onclick").inherit(av)))
                            }
                            break
                        } else {
                            if (e.map.infoWindow && au == e.map.infoWindow.popDom) {
                                break
                            }
                        }
                        au = au.parentNode
                    }
                    av.cancelBubble = true
                });
                k.on(this.domElement, "mousedown", function (au) {
                    if (e.toString() == "Marker") {
                        e._lastPt = e.getPoint()
                    }
                    e.dispatchEvent(ar(au, new ak("onmousedown").inherit(au)))
                });
                k.on(this.domElement, "mouseup", function (au) {
                    e.dispatchEvent(ar(au, new ak("onmouseup").inherit(au)))
                });
                k.on(this.domElement, "dblclick", function (au) {
                    e.dispatchEvent(ar(au, new ak("ondblclick").inherit(au)));
                    au.cancelBubble = true;
                    au.returnValue = false
                })
            } else {
                if (this.toString() == "Marker") {
                    at.temp.areaDiv.appendChild(this.domElement);
                    at.temp.markerDiv.appendChild(this.siblingElement)
                } else {
                    if (this.toString() == "Label") {
                        at.temp.labelDiv.appendChild(this.domElement)
                    } else {
                        at.overlayDiv.appendChild(this.domElement)
                    }
                }
            }
            this.setPoint(this.point)
        }, hide: function () {
            if (this._visible == false) {
                return
            }
            this._visible = false;
            if (this.infoWindow && this.infoWindow.overlay && this.infoWindow.overlay == this) {
                this.closeInfoWindow()
            }
            k.hide(this.domElement)
        }, show: function () {
            if (this._visible == true) {
                return
            }
            this._visible = true;
            k.show(this.domElement)
        }, dispose: function () {
            k.BaseClass.prototype.dispose.call(this)
        }, openInfoWindow: function (aw, av) {
            if (!aw || !this.domElement || this.domElement.style.display == "none" || aw.toString() != "InfoWindow") {
                return
            }
            if (this.map.temp.infoWin === aw && this.map.temp.infoWin.isOpen() && this.map.temp.infoWin.overlay === this) {
                return
            }
            if (this.map.temp.infoWin && this.map.temp.infoWin.isOpen()) {
                this.map.closeInfoWindow()
            }
            this.infoWindow = aw;
            var e = false;
            if (this.map.temp.infoWin == null || this.map.temp.infoWin != aw) {
                e = true;
                aw.initialize(this)
            }
            aw.overlay = this;
            var ar = this.map.infoWindow;
            var at = this.map.temp;
            at.infoWin = aw;
            if (!at.pop) {
                at.pop = V(this.map.temp.overlayDiv, "<span style='position: absolute;z-index:800' type='system'></span>")
            }
            if (!at.shadow) {
                at.shadow = V(this.map.temp.overlayDiv, "<span style='position: absolute;z-index:600' type='system'></span>")
            }
            aw.setPosition();
            at.shadow.appendChild(ar.shadowDom);
            at.pop.appendChild(ar.popDom);
            aw.reset(null);
            aw.reset(true);
            if (!e) {
                aw.reset(true)
            }
            if (!(av && av.notMove)) {
                setTimeout(function () {
                    aw.setPanTo()
                }, 200)
            }
            var au = this;
            this.dispatchEvent(new ak("oninfowindowopen"))
        }, closeInfoWindow: function () {
            if (!this.map || !this.map.infoWindow) {
                return
            }
            var ar = this;
            if (this.infoWindow != null && this.infoWindow.hashCode == this.map.infoWindow.hashCode) {
                try {
                    ar.infoWindow.hide()
                } catch (e) {
                }
                this.dispatchEvent(new ak("oninfowindowclose"))
            }
            this.infoWindow = null
        }, setStyle: function (e) {
            if (this.domElement) {
                if (this.siblingElement) {
                    this.siblingElement.style.cssText = this.siblingElement.style.cssText + ";" + e
                } else {
                    this.domElement.style.cssText = this.domElement.style.cssText + ";" + e
                }
            }
        }, getDom: function () {
            return this.domElement
        }, setConfig: function (ar) {
            if (ar == null) {
                return
            }
            for (var e in ar) {
                if (typeof(this._config[e]) == typeof(ar[e])) {
                    this._config[e] = ar[e]
                }
            }
        }, overlayPoints: function (at) {
            if (at.length == 0) {
                return {pixels: [], points: []}
            }
            if (typeof(at) == "string") {
                return this._overlayPoints(at)
            } else {
                if (typeof(at[0]) == "string") {
                    var ar = [];
                    for (var e = 0; e < at.length; e++) {
                        var au = this._overlayPoints(at[e]);
                        ar.push(au)
                    }
                    return ar
                } else {
                    return this._overlayPoints(at)
                }
            }
        }, _overlayPoints: function (av) {
            var au = [];
            var at = [];
            var e = typeof(av) == "string" ? av.split(";") : av;
            for (var ar = 0; ar < e.length; ar++) {
                if (typeof(e[ar]) == "string") {
                    var aw = e[ar].split(",");
                    var ax = new D(parseFloat(aw[0]), parseFloat(aw[1]));
                    at.push(ax);
                    au.push(this.getOverLayPosition(ax))
                } else {
                    au.push(this.getOverLayPosition(e[ar]))
                }
            }
            if (typeof(av) != "string") {
                at = av
            }
            return {pixels: au, points: at}
        }, getOverLayPosition: function (ar) {
            var au = this.map;
            var at = au.pointToPixel(ar);
            var e = at.x - au.offsetX;
            var av = at.y - au.offsetY;
            return new s(e, av)
        }, overlayPixel: function (e) {
            var ar = this.map;
            if (e.toString() == "Point") {
                return ar.pt2px(e, ar.zoomLevel)
            } else {
                return ar.px2pt(e, ar.zoomLevel)
            }
        }, setPoint: function (e) {
            if (e && e.toString() == "Point") {
                this.point = this._config.point = e;
                if (this.domElement && this.domElement.style) {
                    var at = (this._config && this._config.offset) ? this._config.offset : new f(0, 0);
                    var ar = this.getOverLayPosition(e);
                    this.domElement.style.left = (ar.x + at.width) + "px";
                    this.domElement.style.top = (ar.y + at.height) + "px"
                }
            }
        }, getPoint: function (at, au) {
            if (!at) {
                return this.point
            } else {
                var e = au ? au.width : 0;
                var av = au ? au.height : 0;
                if (this.map) {
                    var ar = this.map.pointToPixel(this.point);
                    if (this._config && this._config.offset) {
                        ar.x = ar.x + this._config.offset.width + e;
                        ar.y = ar.y + this._config.offset.height + av
                    } else {
                        ar.x = ar.x + e;
                        ar.y = ar.y + av
                    }
                    return this.map.pixelToPoint(ar)
                }
            }
        }, isVisible: function () {
            if (!this.domElement) {
                return false
            }
            return !!this._visible
        }
    });

    function d() {
        this.map = null;
        this.lengthMax = 200;
        this.cacheBox = null
    }

    z.register(function (ar) {
        var e = new d();
        e.map = ar;
        ar.overlayCache = e;
        e.cacheBox = document.createElement("div");
        ar.addEventListener("load", function (at) {
            e.district();
            e.zoom(at)
        });
        ar.addEventListener("moveend", function (at) {
            e.district();
            e.zoom(at)
        });
        ar.addEventListener("dragend", function (at) {
            e.district();
            e.zoom(at)
        });
        ar.addEventListener("zoomend", function (at) {
            e.district();
            e.zoom(at)
        });
        ar.addEventListener("onclearoverlays", function (az) {
            var ay = ar.overlayDiv.childNodes;
            for (var au = 0; au < ay.length; au++) {
                var ax = ay[au];
                if (ax.getAttribute("type") != "system") {
                    if (ax.getAttribute("hashCode")) {
                        k.I(ax.getAttribute("hashCode")).remove()
                    } else {
                    }
                    au--
                } else {
                    var aA = ax.childNodes;
                    for (var at = 0; at < aA.length; at++) {
                        var aw, av;
                        if (!k.Browser.ie) {
                            aw = aA[at].getAttribute("type")
                        } else {
                            av = true
                        }
                        if (aw != "system" && !av || av == true) {
                            if (aA[at].hashCode != null) {
                                k.I(aA[at].hashCode).remove()
                            } else {
                                try {
                                    aA[at].parentNode.removeChild(aA[at]);
                                    if (aA[at]) {
                                        aA[at] = null
                                    }
                                } catch (az) {
                                }
                            }
                            at--
                        }
                    }
                }
            }
            ar.infoWindow = ar.temp.infoWin = ar.temp.pop = ar.temp.shadow = null;
            ay = null
        });
        ar.addEventListener("oninfowindowopen", function (au) {
            var at = this.map.infoWindow;
            k.hide(at.popDom);
            k.hide(at.shadowDom)
        })
    });
    d.prototype.zoom = function (aD) {
        var aE = this.map.temp.overlayDiv.childNodes;
        var az = this.map.temp.markerDiv.childNodes;
        var aC = this.map.temp.labelDiv.childNodes;
        for (var aB = 0; aB < aE.length; aB++) {
            if (aE[aB].tagName == "svg") {
                continue
            }
            var aA = k.I(aE[aB].hashCode);
            if (aA && aA.point) {
                if (aA.point.toString() == "Point") {
                    aA.setPoint(aA.point)
                }
            }
        }
        this.revisePoint(az);
        this.revisePoint(aC);
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition()
        }
        if (this.map.palette) {
            var av = this.map.palette;
            var at = av.childNodes;
            if ((av.tagName != "svg" && (aD.type == "ondragend" || aD.type == "onmoveend"))) {
                var ar = this.map.temp.drawView;
                if (ar == null) {
                    return
                }
                var au = this.map.pointToPixel(ar.point);
                var ax = ar.margin;
                if (Math.abs(au.x - this.map.width / 2) < ax && Math.abs(au.y - this.map.height / 2) < ax) {
                    return
                }
            }
            for (var aB = 0; aB < at.length; aB++) {
                if (at[aB].tagName == "shape" || at[aB].tagName == "path") {
                    var aw = k.I(at[aB].hashCode);
                    if (aw && aw.points) {
                        if (at[aB].tagName == "shape") {
                            at[aB].setAttribute("path", "m0 0")
                        }
                        aw.setPolylinePoint(at[aB], aw.points)
                    }
                }
            }
            if (aw && av.tagName == "svg") {
                var ay = k.I(aw.hashCode);
                aw.setPalette()
            }
        }
    };
    d.prototype.revisePoint = function (at) {
        for (var ar = 0; ar < at.length; ar++) {
            var e = k.I(at[ar].hashCode);
            if (e && e.point) {
                if (e.point.toString() == "Point") {
                    e.setPoint(e.point)
                }
            }
        }
    };
    d.prototype.district = function () {
        var at = this.map;
        var ay = at.overlayDiv.childNodes;
        var aA = at.markerDiv.childNodes;
        var au = this.cacheBox.childNodes;
        var aB = at.pixelToPoint(new s(-at.width / 2, at.height * 3 / 2));
        var az = at.pixelToPoint(new s(at.width * 3 / 2, -at.height / 2));
        var ar = new m(aB.lng, aB.lat, az.lng, az.lat);
        for (var ax = 0; ax < au.length; ax++) {
            var e = au[ax];
            if (!e.hashCode) {
                continue
            }
            var aw = k.I(e.hashCode);
            if (!aw.point) {
                continue
            }
            if (ar.containsPoint(aw.point)) {
                at.addOverlay(aw)
            }
        }
        if (ay.length < 4000) {
            return
        }
        if (aA.length < 4000) {
            return
        }
        for (var ax = 0; ax < ay.length; ax++) {
            var e = ay[ax];
            if (!e.hashCode) {
                continue
            }
            var aw = k.I(e.hashCode);
            if (!aw.point) {
                continue
            }
            if (!ar.containsPoint(aw.point)) {
                this.cacheBox.appendChild(e)
            }
        }
        for (var ax = 0; ax < aA.length; ax++) {
            var aC = aA[ax];
            if (!aC.hashCode) {
                continue
            }
            var av = k.I(aC.hashCode);
            if (!av.point) {
                continue
            }
            if (!ar.containsPoint(av.point)) {
                this.cacheBox.appendChild(aC);
                this.cacheBox.appendChild(av.siblingElement)
            }
        }
    };
    d.prototype.addCache = function (e) {
        this.cacheBox.appendChild(e);
        if (this.cacheBox.childNodes.length > this.lengthMax) {
            this.remove(this.cacheBox.firstChild)
        }
    };
    d.prototype.addMap = function (e) {
        this.map.addOverlay(e)
    };
    d.prototype.remove = function (e) {
        e.domElement.parentNode.removeChild(e.domElement)
    };
    d.prototype.clear = function () {
        this.cacheBox.innerHTML = ""
    };

    function v(e) {
        this.opts = e || {};
        this.copyright = this.opts.copyright || {};
        this.transparentPng = this.opts.transparentPng || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.offset = [0, 0];
        this._type = "tilelayer"
    }

    v.inherits(q, "TileLayer");
    k.extend(v.prototype, {
        isTransparentPng: function () {
            return this.transparentPng
        },
        //getTilesUrl : function(tileCoord, zoom) {
        //    console.log(tileCoord)
        //    console.log(zoom)
        //var x = tileCoord.x;
        //var y = tileCoord.y;
        //var url = "tiles/" + zoom + '/' + x + '/' + y + ".jpg";
        //console.log(url)
        //return url;
        //}
        // ,
        getTilesUrl: function (ay, ar) {
            var at = N[this.mapType];
            if (typeof at != "object") {
                return null
            }
            var ax = at.baseUnits * Math.pow(2, (at.zoomLevelMax - ar));
            var az = parseInt(ay.lng / ax) - this.offset[0];
            var au = parseInt(ay.lat / ax - this.offset[1]);
            var aw = Math.floor(az / 200);
            var av = Math.floor(au / 200);
            //if (this.opts.tileUrlTemplate) {
            //    e = this.opts.tileUrlTemplate;
            //    e = e.replace(/\{X\}/, az);
            //    e = e.replace(/\{Y\}/, au);
            //    e = e.replace(/\{Z\}/, ar)
            //} else {
        //e = at.tileUrls[Math.abs(az + au) % at.tileUrls.length] + "?qt=tile&x=" + az + "&y=" + au + "&z=" + ar + "&styles=pl&udt=20140928";
                //console.log(" az" + az + " au" + au + " ar" + ar)
                //e = e.replace(/-(\d+)/gi, "M$1")
            //}
            var e = tilesPath + ar + "/" + az + "/" + au + ".jpg"
            //console.log(e)
            return e
        },
        initialize: function (at) {
            if (!at.temp.layerZIndex) {
                at.temp.layerZIndex = 0
            }
            this.zIndex = this.zIndex || -1;
            if (this.baseLayer) {
                this.zIndex = -1
            }
            if (!at.temp.layid) {
                at.temp.layid = 0
            }
            if (!this.opts.mapType) {
                this.mapType = "BMAP_CUSTOM_LAYER_" + at.temp.layid;
                at.temp.layid++
            } else {
                this.mapType = this.opts.mapType
            }
            var e = N[this.mapType];
            if (!e) {
                N[this.mapType] = {
                    tileUrls: [],
                    tileSize: 256,
                    baseUnits: 256,
                    zoomLevelMin: 1,
                    zoomLevelMax: 18,
                    errorUrl: aj.imgPath + "/blank.gif",
                    bounds: new m(-21364736, -10616832, 23855104, 15859712),
                    imgExtend: "png"
                }
            }
            var ar = V(at.platform, '<div style="position:absolute;z-index:' + this.zIndex + '"></div>');
            ar.style.display = "";
            ar.style.left = Math.ceil(-at.offsetX + at.width / 2) + "px";
            ar.style.top = Math.ceil(-at.offsetY + at.height / 2) + "px";
            this.tilesDiv = ar;
            this.map = at
        }, remove: function () {
            if (this.tilesDiv && this.tilesDiv.parentNode) {
                this.tilesDiv.innerHTML = "";
                this.tilesDiv.parentNode.removeChild(this.tilesDiv)
            }
            delete this.tilesDiv
        }, getCopyright: function () {
            return this.copyright
        }, getMapType: function () {
            return this.mapType
        },  setZIndex: function (e) {
            this.zIndex = e;
            if (this.tilesDiv) {
                this.tilesDiv.style.zIndex = e
            }
        }
    });

    function ac(ar, e, at) {
        this.bounds = ar;
        this.content = e;
        this.mapType = at
    }

    ac.inherits(q, "Copyright");

    function af(e) {
        ag.call(this);
        this._config = {
            strokeColor: "#3a6bdb",
            strokeWeight: 5,
            strokeOpacity: 0.65,
            fillColor: "#fff",
            fillOpacity: 0.65,
            strokeStyle: "solid",
            startArrow: "none",
            endArrow: "none"
        };
        this.drawMargin = 350;
        this.setConfig(e);
        if (this._config.strokeWeight <= 0) {
            this._config.strokeWeight = 1
        }
        if (this._config.strokeOpacity < 0) {
            this._config.strokeOpacity = 0
        } else {
            if (this._config.strokeOpacity > 1) {
                this._config.strokeOpacity = 1
            }
        }
        if (this._config.fillOpacity < 0) {
            this._config.fillOpacity = 0
        } else {
            if (this._config.fillOpacity > 1) {
                this._config.fillOpacity = 1
            }
        }
        if (this._config.strokeStyle != "solid" && this._config.strokeStyle != "dashed") {
            this._config.strokeStyle = "solid"
        }
        this.domElement = null;
        this.isSvg = !!window.SVGAngle;
        this.isVml = !window.SVGAngle;
        this.svgs = "http://www.w3.org/2000/svg";
        this.svgType = {
            strokeweight: "stroke-width",
            strokecolor: "stroke",
            stroked: "stroke",
            fillcolor: "fill",
            filled: "fill"
        }
    }

    af.inherits(ag, "Draw");
    k.extend(af.prototype, {
        _addOverlayDom: function () {
            if (this.map.palette) {
                this.setPalette()
            }
        }, createPalette: function () {
            if (this.map.palette) {
                this.setPalette();
                return
            }
            var at = this.map.overlayDiv;
            var e;
            if (this.isSvg) {
                e = document.createElementNS(this.svgs, "svg");
                this.setTypeNS(e, "font-size", "24px");
                this.setTypeNS(e, "version", "1.1");
                e.style.position = "absolute";
                e.style.zIndex = "200";
                e.setAttribute("type", "system");
                at.appendChild(e);
                k.on(e, "mousedown", function (au) {
                    U(au)
                })
            } else {
                if (this.isVml) {
                    var ar = '<font style="overflow:visible;z-index:200" type="system"></font>';
                    e = V(at, ar)
                }
            }
            this.map.palette = e;
            this.setPalette()
        }, setPalette: function () {
            if (!this.isSvg) {
                return
            }
            var aw = this.map;
            var ar = aw.palette;
            var at = aw.width * 3;
            var e = aw.height * 3;
            var av = -aw.offsetX - aw.width;
            var au = -aw.offsetY - aw.height;
            this.setTypeNS(ar, "x", at + "px");
            this.setTypeNS(ar, "y", e + "px");
            ar.style.top = au + "px";
            ar.style.left = av + "px";
            ar.style.width = at + "px";
            ar.style.height = e + "px";
            this.setTypeNS(ar, "viewBox", av + " " + au + " " + at + " " + e)
        }, polyline: function (at, aw) {
            var au = this;
            var ar = this.map.palette;
            if (this.getDom() == null) {
                if (this.isSvg) {
                    var e = document.createElementNS(this.svgs, "path");
                    this.setTypeNS(e, "stroke-linejoin", "round");
                    this.setTypeNS(e, "stroke-linecap", "round");
                    this.setTypeNS(e, "fill-rule", "evenodd");
                    ar.appendChild(e)
                } else {
                    if (this.isVml) {
                        var ax = ['<v:shape style="behavior:url(#default#VML);z-index:1;width:1px;height:1px;position:absolute;left:0;top:0;"', 'coordsize="1,1" coordorigin="0,0" filled="t" fillcolor="white">', '<v:stroke style="behavior:url(#default#VML);" endcap="round" oned="true" />', '<v:fill style="behavior:url(#default#VML);"/>', "</v:shape>"].join("");
                        var e = V(ar, ax)
                    }
                }
            } else {
                var e = this.getDom()
            }
            this.setPolylinePoint(e, at, aw);
            if (this._config.startArrow != "none") {
                this.startArrow(this._config.startArrow, e)
            }
            if (this._config.endArrow != "none") {
                this.endArrow(this._config.endArrow, e)
            }

            function av(aD, aB) {
                var aA = aD.srcElement || aD.target;
                var az = B();
                var ay = aD.pageX ? aD.pageX : (aD.clientX + az[1]);
                var aF = aD.pageY ? aD.pageY : (aD.clientY + az[0]);
                if (aD && aB && ay && aF && aA) {
                    var aC = k.I(aA.hashCode).map;
                    var aE = k.Dom.getOffset(aC.container);
                    aB.pixel = new s(ay - aE.left, aF - aE.top);
                    aB.point = aC.pixelToPoint(aB.pixel);
                    return aB
                } else {
                    return aB
                }
            }

            k.on(e, "mouseover", function (ay) {
                au.dispatchEvent(au.dispatchEvent(av(ay, new ak("onmouseover").inherit(ay))))
            });
            k.on(e, "mousemove", function (ay) {
                au.dispatchEvent(au.dispatchEvent(av(ay, new ak("onmousemove").inherit(ay))))
            });
            k.on(e, "mouseout", function (ay) {
                au.dispatchEvent(au.dispatchEvent(av(ay, new ak("onmouseout").inherit(ay))))
            });
            k.on(e, "click", function (ay) {
                au.dispatchEvent(au.dispatchEvent(av(ay, new ak("onclick").inherit(ay))))
            });
            k.on(e, "mousedown", function (ay) {
                au.dispatchEvent(au.dispatchEvent(av(ay, new ak("onmousedown").inherit(ay))))
            });
            k.on(e, "mouseup", function (ay) {
                au.dispatchEvent(au.dispatchEvent(av(ay, new ak("onmouseup").inherit(ay))))
            });
            k.on(e, "dblclick", function (ay) {
                au.dispatchEvent(au.dispatchEvent(av(ay, new ak("ondblclick").inherit(ay))))
            });
            k.on(this, "remove", function (ay) {
                this.remove();
                au.dispatchEvent(new ak("remove").inherit(ay))
            });
            return e
        }, setPolylinePoint: function (av, au) {
            var au = this.overlayPoints(au);
            this.points = au.points;
            if (this.points && this.points.length == 0) {
                return
            }
            if (this.toString() == "Polygon" || this.toString() == "Oval") {
                var aw = au.points[0];
                var e = au.points[au.points.length - 1];
                if (aw.lng != e.lng || aw.lat != e.lat) {
                    au.points.push(au.points[0]);
                    au.pixels.push(au.pixels[0])
                }
            }
            if (au[0] == null) {
                var at = this._setPolylinePoint(av, au)
            } else {
                var ax = [];
                for (var ar = 0; ar < au.length; ar++) {
                    ax.push(this._setPolylinePoint(av, au[ar]))
                }
                at = ax.join(" ")
            }
            if (this.isSvg) {
                if (this.toString() == "Polygon") {
                }
                this.setTypeNS(av, "d", at)
            } else {
                if (this.toString() == "Polygon") {
                    at += "E"
                }
                this.setTypeNS(av, "path", at)
            }
            if (this.isVml) {
                this.map.temp.drawView = {point: this.map.centerPoint, margin: this.drawMargin}
            }
        }, _setPolylinePoint: function (au, ay) {
            var az = ay.points;
            var ax = ay.pixels;
            if (az.length == 0) {
                return
            }
            if ((az[az.length - 1].lat != az[0].lat || az[az.length - 1].lng != az[0].lng) && !this.isSvg && this.toString() == "Polygon") {
                az[az.length] = az[0];
                ax[ax.length] = ax[0]
            }
            if (!au) {
                return
            }
            var ar = [];
            for (var aw = 0; aw < ax.length; aw++) {
                if (ax[aw + 1] != null) {
                    if (ax[aw].x == ax[aw + 1].x && ax[aw].y == ax[aw + 1].y) {
                        continue
                    }
                    var at = this.getIntersectLine(ax[aw], ax[aw + 1]);
                    if (at.length == 0) {
                        if (ar.length != 0 && ar[ar.length - 1] != "M") {
                            ar.push("M")
                        }
                    }
                    for (var av = 0; av < at.length; av++) {
                        if (at[av] == null) {
                            continue
                        }
                        if (ar.length == 0) {
                            ar.push("M" + at[av].x + "," + at[av].y)
                        }
                        if (ar[ar.length - 1] == "M") {
                            ar.push(at[av].x + "," + at[av].y)
                        } else {
                            if (ar[ar.length - 1] != "L" + at[av].x + "," + at[av].y) {
                                ar.push("L" + at[av].x + "," + at[av].y)
                            }
                        }
                    }
                }
            }
            if (ar[ar.length - 1] == "M") {
                ar[ar.length - 1] = null;
                delete ar[ar.length - 1]
            }
            var e = ar.join().replace(/,/g, " ");
            return e
        }, setPoints: function (e) {
            if (this.isVml && this.getDom()) {
                this.getDom().path = "m-9999999,-9999999 e"
            }
            this.setPolylinePoint(this.getDom(), e)
        }, setPath: function (e, at) {
            if (!this.points || !this.points[at]) {
                return
            }
            this.points[at] = e;
            var ar = this.domElement;
            this.setPolylinePoint(ar, this.points)
        }, oval: function () {
        }, arrow: function (ar) {
            if (this.isSvg) {
                var e = document.createElementNS(this.svgs, "marker");
                this.setTypeNS(e, "id", ar);
                this.setTypeNS(e, "viewBox", "0 0 10 10");
                this.setTypeNS(e, "refX", "8");
                if (navigator.userAgent.indexOf("Safari") > 0) {
                    this.setTypeNS(e, "refY", "8")
                } else {
                    this.setTypeNS(e, "refY", "5")
                }
                this.setTypeNS(e, "markerUnits", "strokeWidth");
                this.setTypeNS(e, "markerWidth", "4");
                this.setTypeNS(e, "markerHeight", "9");
                this.setTypeNS(e, "orient", "auto");
                switch (ar) {
                    case"oval":
                        break;
                    case"classic":
                        var at = document.createElementNS(this.svgs, "path");
                        this.setTypeNS(at, "fill", this._config.strokeColor);
                        at.setAttributeNS(null, "d", "M 0 0 L10 5 L0 10 L3 5 z")
                }
                e.appendChild(at);
                this.map.palette.appendChild(e);
                return at
            }
        }, setTypeNS: function (at, ar, au) {
            if (!at) {
                return
            }
            if (this.isSvg) {
                var e = this.svgType;
                if (e[ar]) {
                    ar = e[ar];
                    if (au == false) {
                        au = "none"
                    }
                }
                at.setAttributeNS(null, ar, au)
            } else {
                if (this.isVml) {
                    at[ar] = au
                }
            }
        }, getTypeNS: function (at, ar) {
            if (this.isSvg) {
                var e = this.svgType;
                if (e[ar]) {
                    ar = e[ar]
                }
                return at.getAttributeNS(null, ar)
            } else {
                if (this.isVml) {
                    return at.getAttribute(ar)
                }
            }
        }, getDrawPoint: function (at) {
            at = window.event || at;
            var ar = (at.pageX || at.clientX);
            var av = (at.pageY || at.clientY);
            var au = k.Dom.getOffset(this.map.container);
            ar = ar - au.left;
            av = av - au.top;
            return {x: ar, y: av}
        }, startArrow: function (ar, e, au) {
            e = e || this.getDom();
            if (!e) {
                return
            }
            ar = ar.toLowerCase();
            if (this.isSvg && au == true) {
                if (this.map.palette.getElementsByTagName("marker").length == 0) {
                    this.arrowElement = this.arrow(ar);
                    e._arrow = this.map.palette.getElementsByTagName("marker")[0]
                }
                this.setTypeNS(e, "marker-start", "url(#" + ar + ")")
            } else {
                if (this.isVml) {
                    if (e.childNodes.length == 0) {
                        var at = V(e, "<v:Stroke StartArrow=" + ar + "/>")
                    } else {
                        var at = e.childNodes[0];
                        at.setAttribute("StartArrow", ar)
                    }
                }
            }
        }, _startArrowF: function (ar, e) {
            this.startArrow(ar, e, true)
        }, endArrow: function (ar, e, au) {
            e = e || this.getDom();
            if (!e) {
                return
            }
            ar = ar.toLowerCase();
            if (this.isSvg && au == true) {
                if (this.map.palette.getElementsByTagName("marker").length == 0) {
                    this.arrowElement = this.arrow(ar);
                    e._arrow = this.map.palette.getElementsByTagName("marker")[0]
                }
                this.setTypeNS(e, "marker-end", "url(#" + ar + ")")
            } else {
                if (this.isVml) {
                    if (e.childNodes.length == 0) {
                        var at = V(e, "<v:Stroke endarrow=" + ar + "/>")
                    } else {
                        var at = e.childNodes[0];
                        at.setAttribute("endarrow", ar)
                    }
                }
            }
        }, _endArrowF: function (ar, e) {
            this.endArrow(ar, e, true)
        }, setStrokeColor: function (e) {
            if (this._config) {
                this._config.strokeColor = e
            }
            if (this.domElement) {
                this.setTypeNS(this.domElement, "strokecolor", e)
            }
            if (this.arrowElement) {
                this.setTypeNS(this.arrowElement, "fill", e)
            }
        }, getStrokeColor: function () {
            return this._config.strokeColor
        }, setStrokeWeight: function (e) {
            if (e > 0) {
                this._config.strokeWeight = e;
                this.setTypeNS(this.domElement, "strokeweight", this._config.strokeWeight + "px")
            }
        }, getStrokeWeight: function () {
            return this._config.strokeWeight
        }, setStrokeOpacity: function (e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.strokeOpacity = e;
            if (!this.map) {
                return
            }
            if (this.isSvg) {
                this.setTypeNS(this.getDom(), "stroke-opacity", e)
            } else {
                if (this.getDom() && this.getDom().childNodes) {
                    this.setTypeNS(this.getDom().childNodes[0], "opacity", e)
                }
            }
        }, getStrokeOpacity: function () {
            return this._config.strokeOpacity
        }, setFillOpacity: function (e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.fillOpacity = e;
            if (!this.map) {
                return
            }
            if (this.isSvg) {
                this.setTypeNS(this.getDom(), "fill-opacity", e)
            } else {
                if (this.getDom() && this.getDom().childNodes) {
                    this.setTypeNS(this.getDom().childNodes[1], "opacity", e)
                }
            }
        }, getFillOpacity: function () {
            return this._config.fillOpacity
        }, setStrokeStyle: function (ar) {
            if (ar != "solid" && ar != "dashed") {
                return
            }
            if (!ar) {
                ar = this._config.strokeStyle
            } else {
                this._config.strokeStyle = ar
            }
            if (!this.map) {
                return
            }
            var e = this.getDom();
            if (this.isSvg) {
                ar = ar == "solid" ? 0 : this.getStrokeWeight() * 2;
                this.setTypeNS(e, "stroke-dasharray", ar)
            } else {
                if (this.isVml) {
                    ar = ar == "solid" ? "solid" : "4 2 1 2";
                    if (e && e.childNodes && e.childNodes[0]) {
                        e.childNodes[0]["dashstyle"] = ar
                    }
                }
            }
        }, getStrokeStyle: function () {
            return this._config.strokeStyle
        }, setFillColor: function (e) {
            if (e) {
                this._config.fillColor = e;
                if (this.domElement) {
                    if (this.domElement.getElementsByTagName("fill").length == 0 && this.isVml) {
                        this.domElement.innerHTML += "<v:fill />"
                    }
                    this.setTypeNS(this.domElement, "filled", true);
                    this.setTypeNS(this.domElement, "fillcolor", e)
                }
            } else {
                this._config.fillColor = "";
                this.setTypeNS(this.domElement, "filled", false)
            }
        }, getFillColor: function () {
            if (this.toString() != "Rect" && this.toString() != "Polygon" && this.toString() != "Oval") {
                return
            }
            return this._config.fillColor
        }, getIntersectLine: function (aH, aF) {
            if (!aF) {
                return [aH]
            }
            if (this.toString() == "Rect" || this.toString() == "Polygon" || this.toString() == "Oval") {
                return [aH, aF]
            }
            var aw = [{
                x: (-this.map.offsetX - this.drawMargin),
                y: (-this.map.offsetY + this.map.height + this.drawMargin)
            }, {x: (-this.map.offsetX + this.map.width + this.drawMargin), y: (-this.map.offsetY - this.drawMargin)}];
            var aA = [{x: (aH.x > aF.x ? aF.x : aH.x), y: (aH.y > aF.y ? aH.y : aF.y)}, {
                x: (aH.x > aF.x ? aH.x : aF.x),
                y: (aH.y > aF.y ? aF.y : aH.y)
            }];
            var au = [];
            var av = function (aK, aI) {
                try {
                    if (parseInt(aK.x) >= (aI[0]["x"] - 2) && parseInt(aK.x) <= (aI[1]["x"] + 2) && parseInt(aK.y) >= (aI[1]["y"] - 2) && parseInt(aK.y) <= (aI[0]["y"] + 2)) {
                        return true
                    } else {
                        return false
                    }
                } catch (aJ) {
                    return true
                }
            };
            var aG = function (aJ) {
                if (aF.y == aH.y) {
                    return
                } else {
                    var aI = parseInt(((aF.x - aH.x) * (aJ - aH.y)) / (aF.y - aH.y) + aH.x);
                    if (av({x: aI, y: aJ}, aw)) {
                        return {x: aI, y: aJ}
                    }
                }
            };
            var aE = function (aI) {
                if (aF.x == aH.x) {
                    return
                } else {
                    var aJ = parseInt(((aF.y - aH.y) * (aI - aH.x)) / (aF.x - aH.x) + aH.y);
                    if (av({x: aI, y: aJ}, aw)) {
                        return {x: aI, y: aJ}
                    }
                }
            };
            var ay = av(aH, aw);
            var aD = av(aF, aw);
            if (ay && aD) {
                au.push(aH);
                au.push(aF)
            } else {
                if (ay || aD) {
                    var at = [];
                    if (ay) {
                        at.push(aH)
                    }
                    if (aH.x == aF.x) {
                        var ar = {x: aH.x, y: aw[0].y};
                        var e = {x: aH.x, y: aw[1].y};
                        if (av(ar, aA)) {
                            au.push(ar)
                        }
                        if (av(e, aA)) {
                            au.push(e)
                        }
                    } else {
                        if ((aH.y == aF.y)) {
                            var ar = {x: aw[0].x, y: aH.y};
                            var ar = {x: aw[0].x, y: aH.y};
                            if (av(ar, aA)) {
                                au.push(ar)
                            }
                            if (av(e, aA)) {
                                au.push(e)
                            }
                        } else {
                            for (var ax = 0; ax < 2; ax++) {
                                var az = aw[ax];
                                var aC = aE(az.x);
                                if (aC != null && av(aC, aA)) {
                                    at.push(aC)
                                }
                                var aB = aG(az.y);
                                if (aB != null && av(aB, aA)) {
                                    at.push(aB)
                                }
                            }
                        }
                    }
                    if (aD) {
                        at.push(aF)
                    }
                    if (at.length == 2) {
                        if (((aH.x - aF.x) > 0) == ((at[0].x - at[1].x) > 0) && ((aH.y - aF.y) > 0) == ((at[0].y - at[1].y) > 0)) {
                            au.push(at[0]);
                            au.push(at[1])
                        } else {
                            au.push(at[1]);
                            au.push(at[0])
                        }
                    }
                } else {
                    var at = [];
                    for (var ax = 0; ax < 2; ax++) {
                        var az = aw[ax];
                        var aC = aE(az.x);
                        if (aC != null && av(aC, aw) && av(aC, aA)) {
                            at.push(aC)
                        }
                        var aB = aG(az.y);
                        if (aB != null && av(aB, aw) && av(aB, aA)) {
                            at.push(aB)
                        }
                    }
                    if (at.length == 2) {
                        if (((aH.x - aF.x) > 0) == ((at[0].x - at[1].x) > 0)) {
                            au.push(at[0]);
                            au.push(at[1])
                        } else {
                            au.push(at[1]);
                            au.push(at[0])
                        }
                    }
                }
            }
            return au
        }
    });
    if (document.namespaces && !document.namespaces.olv) {
        document.namespaces.add("olv", "urn:schemas-microsoft-com:vml")
    }

    function H(e) {
        ag.call(this);
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            height: 0,
            offset: new f(0, 0),
            opacity: 1,
            background: "transparent",
            lineStroke: 1,
            lineColor: "#000",
            lineStyle: "solid",
            point: null
        };
        this.setConfig(e);
        this.point = this._config.point
    }

    H.inherits(ag, "Division");
    k.extend(H.prototype, {
        render: function () {
            var e = this._config;
            var at = this.content;
            var ar = ['<div class="BMap_Division" style="position:absolute;'];
            ar.push("width:" + e.width + "px;display:block;");
            ar.push("overflow:hidden;");
            if (e.borderColor != "none") {
                ar.push("border:" + e.lineStroke + "px " + e.lineStyle + " " + e.lineColor + ";")
            }
            ar.push("opacity:" + e.opacity + "; filter:(opacity=" + e.opacity * 100 + ")");
            ar.push("background:" + e.background + ";");
            ar.push('z-index:60;">');
            ar.push(at);
            ar.push("</div>");
            return ar.join("")
        }, initialize: function (e) {
            this.map = e;
            this._addOverlayDom();
            if (this.domElement) {
                k.on(this.domElement, "mousedown", function (ar) {
                    al(ar)
                })
            }
        }, getPoint: function () {
            return this._config.point
        }, _getPixel: function (e) {
            return this.map.pointToPixel(this.getPoint())
        }, setPoint: function (e) {
            this._config.offset = new f(-Math.round(this._config.width / 2) - Math.round(this._config.lineStroke), -Math.round(this._config.height / 2) - Math.round(this._config.lineStroke));
            ag.prototype.setPoint.call(this, e)
        }, setDimension: function (e, ar) {
            this._config.width = Math.round(e);
            this._config.height = Math.round(ar);
            if (this.domElement) {
                this.domElement.style.width = this._config.width + "px";
                this.domElement.style.height = this._config.height + "px";
                this.setPoint(this._config.point)
            }
        }
    });

    function n(ar, at, av) {
        if (!ar || !at) {
            return
        }
        this.imageUrl = ar;
        this.size = at;
        var au = new f(Math.floor(at.width / 2), Math.floor(at.height / 2));
        var aw = {offset: au, imageOffset: new f(0, 0)};
        av = av || {};
        for (var e in av) {
            if (typeof(aw[e]) == typeof(av[e])) {
                aw[e] = av[e]
            }
        }
        this.offset = aw.offset;
        this.imageOffset = aw.imageOffset;
        this.infoWindowOffset = av.infoWindowOffset || this.offset
    }

    k.inherit(n, k.BaseClass, "Icon");
    n.prototype.setImageUrl = function (e) {
        if (!e || typeof e != "string") {
            return
        }
        this.imageUrl = e
    };
    n.prototype.getHTML = function () {
        if (k.Browser.ie == 6 && this.imageUrl.toLowerCase().indexOf(".png") > 0) {
            return ["<div", ' style="width: 1px; height: 1px;', "; left:" + parseInt(this.imageOffset.width) + "px", "; top:" + parseInt(this.imageOffset.height) + "px", "; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src='" + this.imageUrl + "')", '; position:absolute;"></div>'].join("")
        } else {
            return ['<img src="', this.imageUrl, '" style="left:' + parseInt(this.imageOffset.width) + "px", "; top:" + parseInt(this.imageOffset.height) + "px", '; position:absolute;" />'].join("")
        }
    };
    n.prototype.setSize = function (e) {
        if (!e || e.toString() != "Size") {
            return
        }
        this.size = new f(e.width, e.height)
    };
    n.prototype.setOffset = function (e) {
        if (!e || e.toString() != "Size") {
            return
        }
        this.offset = new f(e.width, e.height)
    };
    n.prototype.setImageOffset = function (e) {
        if (!e || e.toString() != "Size") {
            return
        }
        this.imageOffset = new f(e.width, e.height)
    };
    n.prototype.setInfoWindowOffset = function (e) {
        if (!e || e.toString() != "Size") {
            return
        }
        this.infoWindowOffset = new f(e.width, e.height)
    };
    n.prototype.toString = function () {
        return "Icon"
    };

    function Q(ar, e) {
        k.BaseClass.call(this);
        this.content = ar;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new f(0, 0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            margin: [10, 10, 40, 10],
            collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
            ifMaxScene: false
        };
        this.setConfig(e);
        if (this._config.width != 0) {
            if (this._config.width < 220) {
                this._config.width = 220
            }
            if (this._config.width > 730) {
                this._config.width = 730
            }
        }
        if (this._config.height != 0) {
            if (this._config.height < 60) {
                this._config.height = 60
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth != 0) {
            if (this._config.maxWidth < 220) {
                this._config.maxWidth = 220
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = aj.imgPath;
        this.overlay = null
    }

    Q.inherits(k.BaseClass, "InfoWindow");
    k.extend(Q.prototype, {
        initialize: function (at) {
            if (!at.map) {
                return
            }
            this.overlay = at;
            this.map = at.map;
            if (this.map.infoWindow) {
                var ar = this.map.infoWindow;
                k.hide(ar.popDom);
                k.hide(ar.shadowDom)
            }
            this.render();
            this._bind();
            if (this._config.enableMaximize) {
                this.enableMaximize()
            } else {
                this.disableMaximize()
            }
            this.setTitle();
            this.setContent();
            if (this._config.ifMaxScene) {
                this.setMaxScene(true)
            }
            this.reset(true);
            if (this.map.infoWindow.marker) {
                var e = this.map.infoWindow.marker;
                this.map.infoWindow.marker = null
            }
            if (at.toString() == "Marker") {
                this.map.infoWindow.marker = at
            }
            if (!this._binded) {
                var au = this;
                this.map.addEventListener("dragstart", function () {
                    au._setOverflow()
                });
                this.map.addEventListener("movestart", function () {
                    au._setOverflow()
                });
                this.map.addEventListener("dragend", function () {
                    au._resetOverflow()
                });
                this.map.addEventListener("moveend", function () {
                    au._resetOverflow()
                });
                this._binded = true
            }
        }, render: function () {
            var av = this.map;
            var ar = this;
            if (!av.infoWindow) {
                av.infoWindow = {};
                var e = ['<div class="shadow" style="position: absolute;display:none" type="infowindow_shadow">'];
                e.push('<div><img onmousedown="return false" style=" left: -323px; top: 0px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style=" left: -393px; top: 0px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style=" left: -1033px; top: 0px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style="top: -30px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style=" left: -360px; top: -30px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style="top: -30px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style=" left: -14px; top: -310px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style="left: -345px; top: -310px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style=" left: -440px; top: -310px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style=" left: -345px; top: -310px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push('<div><img onmousedown="return false" style=" left: -754px; top: -310px;" src="' + this.IMG_PATH + 'iws3.png"/></div>');
                e.push("</div>");
                e.push('<div class="pop" style="position: absolute;display:none;cursor:default">');
                e.push('<div><img style="border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 690px; height: 786px;" src="' + this.IMG_PATH + 'iw3.png"/></div>');
                e.push('<div class="top"><img src="' + this.IMG_PATH + 'iw3.png" style="position: absolute; left: -65px; top: -60px;"/></div>');
                e.push('<div><img style="border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -665px; top: 0px; width: 690px; height: 786px; " src="' + this.IMG_PATH + 'iw3.png"/></div>');
                e.push('<div class="center"><img src="' + this.IMG_PATH + 'iw3.png" style="position: absolute; left: -65px; top: -60px;"/></div>');
                e.push('<div><img style="border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: 0px; top: -665px; width: 690px; height: 786px; " src="' + this.IMG_PATH + 'iw3.png"/></div>');
                e.push('<div class="bottom"><img src="' + this.IMG_PATH + 'iw3.png" style="position: absolute; left: -65px; top: -146px;"/></div>');
                e.push('<div><img style="border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -665px; top: -665px; width: 690px; height: 786px; " src="' + this.IMG_PATH + 'iw3.png"/></div>');
                e.push('<div><img onmousedown="return false" style="border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -155px; top: -691px; width: 690px; height: 786px;" src="' + this.IMG_PATH + 'iw3.png"/></div>');
                e.push('<div style="overflow-y: hidde;overflow-x:hidde; width:auto;height:auto;position:absolute;left: 16px; top: 16px;z-index: 10;"></div>');
                e.push("</div>");
                av.infoWindow.popDom = V(av.platform, e.join(""));
                av.infoWindow.shadowDom = av.infoWindow.popDom.previousSibling;
                av.infoWindow.popDiv = av.infoWindow.popDom.getElementsByTagName("div");
                av.infoWindow.shadoDiv = av.infoWindow.shadowDom.getElementsByTagName("div");
                av.infoWindow.contentMain = av.infoWindow.popDiv[8];
                av.infoWindow.titleDiv = V(av.infoWindow.popDiv[8], '<div class="BMap_bubble_title" style="display:block;overflow:hidden;height:24px;line-height:24px"></div>');
                av.infoWindow.contentDiv = V(av.infoWindow.popDiv[8], '<div class="BMap_bubble_content" style="display:block"></div>');
                av.infoWindow.maxContentDiv = V(av.infoWindow.popDiv[8], '<div class="BMap_bubble_max_content" style="display:none;position:relative"></div>');
                var at = '<img style="position: absolute;top:12px; width: 12px; height: 12px; -moz-user-select: none; cursor: pointer; z-index: 10000;" src="' + this.IMG_PATH + 'iw_close.png"/>';
                av.infoWindow.closeButton = V(av.infoWindow.popDom, at);
                var au = '<img style="position: absolute;top:12px; width: 12px; height: 12px; -moz-user-select: none; cursor: pointer; z-index: 10000;display:none" src="' + this.IMG_PATH + 'iw_plus.png"/>';
                av.infoWindow.maxButton = V(av.infoWindow.popDom, au);
                this._mendIE6(av.infoWindow)
            }
            av.infoWindow.hashCode = this.hashCode
        }, _bind: function () {
            var ar = this.map;
            var e = this;
            ar.infoWindow.closeButton.onclick = function (at) {
                var at = at || window.event;
                e.hide();
                e.dispatchEvent(new ak("onclickclose"));
                at.cancelBubble = true;
                at.returnValue = false
            };
            k.on(ar.infoWindow.closeButton, "mouseout", function (at) {
                at.cancelBubble = true;
                at.returnValue = false
            });
            k.on(ar.infoWindow.popDiv, "click", function (at) {
                if (!at) {
                    return
                }
                at.cancelBubble = true;
                at.returnValue = false
            });
            k.on(ar.infoWindow.popDom, "mousedown", function (at) {
                if (!at) {
                    return
                }
                at.cancelBubble = true
            });
            k.on(ar.infoWindow.popDom, "mouseout", function (at) {
                at.cancelBubble = true;
                at.returnValue = false
            });
            k.on(ar.infoWindow.popDom, "mousemove", function (at) {
                at.cancelBubble = true;
                at.returnValue = false
            });
            k.on(ar.infoWindow.popDom, "mouseover", function (at) {
                if (!at) {
                    return
                }
                at.cancelBubble = true;
                at.returnValue = false
            });
            k.on(ar.infoWindow.popDom, "click", function (at) {
                if (!at) {
                    return
                }
                at.cancelBubble = true
            });
            k.on(ar.infoWindow.popDom, "dblclick", function (at) {
                if (!at) {
                    return
                }
                at.cancelBubble = true;
                at.returnValue = false
            });
            k.on(ar.infoWindow.popDom, "mousewheel", function (at) {
                if (!at) {
                    return
                }
                at.cancelBubble = true;
                at.returnValue = false
            });
            k.on(ar.infoWindow.popDom, "keydown", function (at) {
                if (!at) {
                    return
                }
                at.cancelBubble = true
            });
            k.on(ar.infoWindow.popDom, "selectstart", function (at) {
                at.cancelBubble = true
            });
            if (window.addEventListener) {
                ar.infoWindow.popDom.addEventListener("DOMMouseScroll", function (at) {
                    if (!at) {
                        return
                    }
                    at.cancelBubble = true;
                    at.returnValue = false
                }, false)
            }
            ar.infoWindow.maxButton.onclick = function (au) {
                var at = e.map.infoWindow.maxButton;
                if (at.src.indexOf("iw_plus") > 0 || at.src.indexOf("blank.gif") > 0) {
                    e.isWinMax = true;
                    at.src = e.IMG_PATH + "iw_minus.gif";
                    e.setMaxContent();
                    e.map.infoWindow.maxContentDiv.style.display = "block"
                } else {
                    e.isWinMax = false;
                    at.src = e.IMG_PATH + "iw_plus.png";
                    e.setContent();
                    e.map.infoWindow.maxContentDiv.style.display = "none"
                }
                e.reset(false);
                e.reset(true);
                setTimeout(function () {
                    e.setPanTo()
                }, 200);
                au = au || window.event;
                if (!au) {
                    return
                }
                au.cancelBubble = true;
                au.returnValue = false
            }
        }, _mendIE6: function (au) {
            if (k.isIE > 6 || k.isIE == 0) {
                return
            }
            var at = au.popDom.getElementsByTagName("IMG");
            for (var ar = 0; ar < at.length; ar++) {
                at[ar].style.cssText += ";FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + at[ar].src + ",sizingMethod=crop)";
                at[ar].src = this.IMG_PATH + "blank.gif"
            }
            var e = au.shadowDom.getElementsByTagName("IMG");
            for (var ar = 0; ar < e.length; ar++) {
                e[ar].style.cssText += ";FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + e[ar].src + ",sizingMethod=crop)";
                e[ar].src = this.IMG_PATH + "blank.gif"
            }
        }, _setWinSize: function (aB, aA, aO) {
            var aL = this._config;
            aB = aB || aL.width;
            aA = aA || aL.height;
            if (aA < 0) {
                aA = 0
            }
            var av = aL.offset.width;
            var az = aL.offset.height;
            var aK = [25, -1, 25, -1, 25, -1, 25, 97];
            var au = [25, -1, 25, -1, 25, -1, 25, 50];
            aK[1] = aB - aK[0] - aK[2];
            if (k.isIE && document.compatMode != "CSS1Compat") {
                aK[3] = aB
            } else {
                aK[3] = aB - 2
            }
            aK[5] = aB - aK[4] - aK[6];
            au[1] = au[0];
            au[3] = aA - au[0] - au[4];
            if (k.isIE && document.compatMode != "CSS1Compat") {
                au[5] = au[4]
            } else {
                au[5] = au[4] - 1
            }
            var aM = [0, aK[0], aB - aK[2], 0, 0, aK[4], aB - aK[6], Math.ceil((aB - aK[7]) / 2)];
            var aG = [0, 0, 0, aK[0], aA - aK[4], aA - aK[4], aA - aK[4], aA - aK[4]];
            var ar = av - (aB - aK[7]) / 2 - 32;
            var aH = az - aA - 24;
            var aN = Math.floor((aA + au[7]) / 2.03) + 30;
            var ax = [70, -1, 70, -1, -1, -1, 50, -1, 140, -1, 70];
            var aF = [30, 30, 30, 25, 25, 25, 60, 60, 60, 60, 60];
            ax[7] = (aB + 80 - (ax[6] + ax[8] + ax[10]) - 50) / 2;
            ax[9] = ax[7] + 50;
            var aJ = ax[6] + ax[7] + ax[8] + ax[9] + ax[10];
            ax[1] = aJ - ax[0] - ax[2] - 29;
            ax[5] = ax[3] = aN - aF[0] - aF[6] + 70;
            aF[3] = aF[4] = aF[5] = aN - aF[0] - aF[6];
            ax[4] = (ax[0] + ax[1] + ax[2] + aF[3] + 29) - ax[5] - ax[3];
            var e = [aN - 60 - 1, aN - 60 - 1 + ax[0], aN - 60 - 1 + ax[0] + ax[1], 29, 29 + ax[3], 29 + ax[3] + ax[4], 0, ax[6], ax[6] + ax[7], ax[6] + ax[7] + ax[8], ax[6] + ax[7] + ax[8] + ax[9],];
            var aE = [0, 0, 0, aF[0], aF[0], aF[0], aF[0] + aF[3], aF[0] + aF[3], aF[0] + aF[3], aF[0] + aF[3], aF[0] + aF[3]];
            allShadowLeft = av - ax[6] - ax[7] - 70;
            allShadowTop = az - aN + 30;
            var aw = 323 - aN + 90;
            shadowRightImageLeft = 740 + aw;
            var at = "";
            var aI = function (aP) {
                return "overflow: hidden; z-index: 1; position: absolute;              left:" + aM[aP] + "px;              top:" + aG[aP] + "px;              width:" + aK[aP] + "px;              height:" + au[aP] + "px"
            };
            var aC = function (aP) {
                return "overflow: hidden; z-index: 1; position: absolute;              left:" + e[aP] + "px;              top:" + aE[aP] + "px;              width:" + ax[aP] + "px;              height:" + aF[aP] + "px;"
            };
            var ay = this.map.infoWindow;
            ay.popDom.style.top = aH + "px";
            ay.popDom.style.left = ar + "px";
            ay.shadowDom.style.top = allShadowTop + "px";
            ay.shadowDom.style.left = allShadowLeft + "px";
            for (var aD = 0; aD < 8; aD++) {
                ay.popDiv[aD].style.cssText = aI(aD)
            }
            for (var aD = 0; aD < ay.shadoDiv.length; aD++) {
                ay.shadoDiv[aD].style.cssText = aC(aD)
            }
            ay.shadoDiv[3].firstChild.style.left = "-" + aw + "px";
            ay.shadoDiv[5].firstChild.style.left = "-" + shadowRightImageLeft + "px";
            if (aO !== null) {
                this.show()
            }
        }, setWidth: function (e) {
            if (typeof(e) != "number") {
                return
            }
            if (e < 0) {
                return
            }
            this._config.width = e;
            if (e != 0) {
                if (e < 220) {
                    this._config.width = 220
                }
                if (e > 730) {
                    this._config.width = 730
                }
            }
            if (this.map && this.map.infoWindow && this.map.infoWindow.hashCode == this.hashCode && this.isOpen()) {
                this.reset(true);
                var ar = this;
                setTimeout(function () {
                    ar.setPanTo(), 200
                })
            }
        }, setHeight: function (e) {
            if (typeof(e) != "number") {
                return
            }
            if (e < 0) {
                return
            }
            if (e != 0) {
                if (e < 60) {
                    e = 60
                }
                if (e > 650) {
                    e = 650
                }
            }
            this._config.height = e;
            var at = this.map;
            if (this.map && this.map.infoWindow && this.map.infoWindow.hashCode == this.hashCode && this.isOpen()) {
                if (this._config.width != 0) {
                    at.infoWindow.contentDiv.style.width = this._config.width + "px"
                }
                this.reset(true);
                var ar = this;
                setTimeout(function () {
                    ar.setPanTo(), 200
                })
            }
        }, setMaxWidth: function (e) {
            if (!typeof(e) != "number") {
                return
            }
            if (e < 0) {
                return
            }
            this._config.maxWidth = e
        }, setTitle: function (ar) {
            var e = this.map;
            ar = ar || this._config.title;
            ar = ar.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "");
            this._config.title = ar;
            if (!e || !e.infoWindow || e.infoWindow.hashCode != this.hashCode) {
                return
            }
            if (ar == "") {
                k.hide(this.map.infoWindow.titleDiv);
                return
            }
            e.infoWindow.titleDiv.innerHTML = ar;
            k.show(this.map.infoWindow.titleDiv)
        }, setContent: function (ar) {
            var e = ar;
            ar = ar || this.content;
            var at = this.map;
            this.content = ar;
            if (!at || !at.infoWindow || at.infoWindow.hashCode != this.hashCode) {
                return
            }
            if (this.isWinMax) {
                return
            }
            at.infoWindow.contentDiv.innerHTML = ar;
            if (this._config.width != 0) {
                at.infoWindow.contentDiv.style.width = this._config.width + "px"
            }
            at.infoWindow.maxContentDiv.style.display = "none";
            if (navigator.userAgent.indexOf("Safari") > 0) {
                at.infoWindow.contentDiv.style.display = "block"
            } else {
                at.infoWindow.contentDiv.style.display = "inline"
            }
        }, setMaxContent: function (e) {
            if (!e) {
                e = this._config.maxContent
            } else {
                this._config.maxContent = e
            }
            var ar = this.map;
            if (!ar || !ar.infoWindow || ar.infoWindow.hashCode != this.hashCode) {
                return
            }
            ar.infoWindow.maxContentDiv.innerHTML = e;
            if (!this.isWinMax) {
                return
            }
            ar.infoWindow.contentDiv.style.display = "none";
            if (navigator.userAgent.indexOf("Safari") > 0) {
                ar.infoWindow.maxContentDiv.style.display = "block"
            } else {
                ar.infoWindow.maxContentDiv.style.display = "inline"
            }
        }, reset: function (e) {
            return this.redraw(e)
        }, redraw: function (ar) {
            if (!this.map || !this.map.infoWindow || this.map.infoWindow.hashCode != this.hashCode) {
                return
            }
            var at = this;
            timeout = 100;
            var e = at.map.infoWindow;
            var au = 0;
            if (e.titleDiv.style.display != "none") {
                au = 24
            }
            if (this.isWinMax) {
                w = at._config.maxWidth;
                setTimeout(function () {
                    var av = au + e.maxContentDiv.scrollHeight;
                    av = av > at.map.height ? at.map.height - 60 : av;
                    if (at._config.width == 0) {
                        e.contentMain.style.overflowX = "hidden"
                    } else {
                        e.contentMain.style.overflowX = "auto"
                    }
                    if (at._config.height == 0) {
                        e.contentMain.style.overflowY = "hidden"
                    } else {
                        e.contentMain.style.overflowY = "auto"
                    }
                    w = w < 220 ? 220 : w;
                    w = w > 600 ? 600 : w;
                    av = av < 55 ? 55 : av;
                    av = av > 440 ? 440 : av;
                    at._setWinSize(w + 32, av + 32, ar);
                    e.contentMain.style.width = w + "px";
                    e.contentMain.style.height = av + "px";
                    e.closeButton.style.left = w + 7 + "px";
                    e.maxButton.style.left = (w - 20) + 7 + "px";
                    if (ar != false) {
                        at.dispatchEvent(new ak("onresize"))
                    }
                }, timeout)
            } else {
                e.contentDiv.style.width = e.contentMain.style.width = "auto";
                e.contentDiv.style.height = e.contentMain.style.height = "auto";
                if (e.contentDiv.style.display != "block") {
                    e.contentDiv.style.display = "block"
                }
                e.contentDiv.style.whiteSpace = "nowrap";
                setTimeout(function () {
                    var av = e.contentMain.scrollWidth || 0;
                    av = at._config.width == 0 ? av : at._config.width;
                    av = av < 220 ? 220 : av;
                    av = av > 600 ? 600 : av;
                    e.contentMain.style.width = av + "px";
                    h = e.contentMain.scrollHeight || 0;
                    h = at._config.height == 0 ? h : at._config.height;
                    if (at._config.width == 0) {
                        e.contentMain.style.overflowX = "hidden"
                    } else {
                        e.contentMain.style.overflowX = "auto"
                    }
                    e.contentDiv.style.whiteSpace = "";
                    if (at._config.height == 0) {
                        e.contentMain.style.overflowY = "hidden"
                    } else {
                        e.contentMain.style.overflowY = "auto"
                    }
                    h = h < 55 ? 55 : h;
                    h = h > 440 ? 440 : h;
                    at._setWinSize(av + 32, h + 32, ar);
                    e.contentMain.style.height = h + "px";
                    e.closeButton.style.left = av + 7 + "px";
                    e.maxButton.style.left = (av - 20) + 7 + "px";
                    if (ar != false) {
                        at.dispatchEvent(new ak("onresize"))
                    }
                }, timeout)
            }
        }, setPosition: function () {
            var ar = this.map.temp;
            var at = this.overlay;
            if (ar.pop && at && at.getDom()) {
                var e = parseInt(at.getDom().style.left) + at.getIcon().infoWindowOffset.width;
                var au = parseInt(at.getDom().style.top) + at.getIcon().infoWindowOffset.height;
                ar.pop.style.left = ar.shadow.style.left = e + "px";
                ar.pop.style.top = ar.shadow.style.top = au + "px"
            }
        }, setPanTo: function () {
            if (!this.overlay || !this.overlay.point) {
                return
            }
            var aH = this.map;
            var au = aH.infoWindow.popDiv;
            var aI = aH.infoWindow.popDom;
            var av = parseInt(au[3].style.width) + 2;
            var aE = parseInt(au[1].style.height) + parseInt(au[3].style.height) + parseInt(au[7].style.height);
            var aC = parseInt(aI.style.left);
            var ax = parseInt(aI.style.top);
            var ar = aH.pointToPixel(this.getPoint());
            ar.x = ar.x - this.overlay.getIcon().offset.width + this.overlay.getIcon().infoWindowOffset.width;
            ar.y = ar.y - this.overlay.getIcon().offset.height + this.overlay.getIcon().infoWindowOffset.height;
            var az = new s(ar.x + aC, ar.y + ax);
            var ay = new s(ar.x + av + aC, ar.y + aE + ax);
            if (this._config.height != 0 && document.all) {
                if (!aH.temp.infoKey) {
                    aH.temp.infoKey = -1
                }
                var aF = -aH.temp.infoKey;
                aH.temp.infoKey = -aH.temp.infoKey
            }
            var aF = 0;
            var aD = 0;
            var e = 10;
            var at = this._config.margin[0];
            var aw = this._config.margin[1];
            var aG = this._config.margin[2];
            var aA = this._config.margin[3];
            if (az.x < aA) {
                aF = -az.x + aA
            }
            if (az.y < at) {
                aD = -az.y + at
            }
            if (ay.x > aH.width - aw) {
                aF = aH.width - ay.x - aw
            }
            if (ay.y > aH.height - aG) {
                aD = aH.height - ay.y - aG
            }
            this._loadCollisions();
            var aB = this._config.collisions;
            if (az.x < aB[0][0] && az.y < aB[0][1]) {
                if (Math.abs(-az.x + aB[0][0]) < Math.abs(-az.y + aB[0][1])) {
                    aF = -az.x + aB[0][0]
                } else {
                    if (aH.height - aB[0][1] - aB[3][1] < aE) {
                        aF = -az.x + aB[0][0]
                    } else {
                        aD = -az.y + aB[0][1]
                    }
                }
                if (aH.width - aB[0][0] - aB[1][0] < av && az.y < aB[1][1]) {
                    aD = -az.y + aB[1][1]
                }
            }
            if (ay.x > aH.width - aB[1][0] && az.y < aB[1][1]) {
                if (Math.abs(-ay.x + aH.width - aB[1][0]) < Math.abs(-az.y + aB[1][1]) && aH.width - aB[0][0] - aB[1][0] >= av) {
                    aF = -ay.x + aH.width - aB[1][0]
                } else {
                    aD = -az.y + aB[1][1];
                    if (aH.width - aB[0][0] - aB[1][0] < av && aH.width - aB[0][0] < av) {
                        aF = -az.x + aB[0][0]
                    }
                }
            }
            if (az.x < aB[3][0] && ay.y > aH.height - aB[3][1]) {
                if (Math.abs(-az.x + aB[3][0]) < Math.abs(-ay.y + aH.height - aB[3][1]) && (Math.abs(-az.x + aB[3][0]) < Math.abs(aD) && aD != 0 || aD == 0) && aH.width - aB[3][0] >= av) {
                    aF = -az.x + aB[3][0]
                } else {
                    aD = -ay.y + aH.height - aB[3][1]
                }
                if (aH.height - aB[0][1] - aB[3][1] < aE && az.x < aB[0][0]) {
                    aF = -az.x + aB[0][0]
                }
            }
            if (ay.x > aH.width - aB[2][0] && ay.y > aH.height - aB[2][1]) {
                if (Math.abs(-ay.x + aH.width - aB[2][0]) < Math.abs(-ay.y + aH.height - aB[2][1]) && (Math.abs(-ay.x + aH.width - aB[2][0]) < Math.abs(aD) && aD != 0 || aD == 0) && aH.width - aB[0][0] - aB[1][0] >= av) {
                    aF = -ay.x + aH.width - aB[2][0]
                } else {
                    if (aH.height - aB[1][1] - aB[2][1] >= aE) {
                        aD = -ay.y + aH.height - aB[2][1]
                    } else {
                        aD = -az.y + aB[1][1]
                    }
                    if (aH.width - aB[0][0] - aB[2][0] < av) {
                        aF = -az.x + aB[0][0]
                    }
                }
            }
            if (aF != 0 || aD != 0) {
                aH.panBy(aF, aD)
            }
        }, _loadCollisions: function () {
            if (!this.map) {
                return
            }
            var ar = this.map;
            this._config.collisions = [[10, 10], [10, 10], [10, 10], [10, 10]];
            var aB = this.map.container;
            for (var az = 0, at = aB.children.length; az < at; az++) {
                var aw;
                var aC;
                if (aB.children[az]._hashCode && k.I(aB.children[az]._hashCode) && k.I(aB.children[az]._hashCode) instanceof E && k.I(aB.children[az]._hashCode).blockInfoWindow == true) {
                    aw = aB.children[az]
                } else {
                    if (typeof aB.children[az]._anchor != "undefined" && aB.children[az]._offset) {
                        aw = aB.children[az]
                    } else {
                        continue
                    }
                }
                var aD = aw.offsetWidth;
                var aA = aw.offsetHeight;
                var e = ar.temp.I(aw._hashCode);
                var av, ay;
                if (!e) {
                    if (typeof aw._anchor != "undefined" && aw._offset && aw.currentStyle.display != "none" && aw.currentStyle.visibility != "hidden") {
                        av = aw._offset;
                        ay = aw._anchor
                    } else {
                        continue
                    }
                } else {
                    if (e.isVisible() == false) {
                        continue
                    }
                    av = e.getOffset();
                    ay = e.getAnchor()
                }
                switch (ay) {
                    case BMAP_ANCHOR_TOP_LEFT:
                        aC = 0;
                        break;
                    case BMAP_ANCHOR_TOP_RIGHT:
                        aC = 1;
                        break;
                    case BMAP_ANCHOR_BOTTOM_LEFT:
                        aC = 3;
                        break;
                    case BMAP_ANCHOR_BOTTOM_RIGHT:
                        aC = 2;
                        break;
                    default:
                        break
                }
                var ax = aD + av.width + 10;
                var au = aA + av.height + 10;
                var aE = this._config.collisions[aC];
                this._config.collisions[aC] = [ax > aE[0] ? ax : aE[0], au > aE[1] ? au : aE[1]]
            }
        }, enableMaximize: function () {
            this._config.enableMaximize = true;
            if (this.map && this.map.infoWindow && this.map.infoWindow.hashCode == this.hashCode) {
                this.map.infoWindow.maxButton.style.display = "block"
            }
        }, disableMaximize: function () {
            this._config.enableMaximize = false;
            if (this.map && this.map.infoWindow && this.map.infoWindow.hashCode == this.hashCode) {
                this.map.infoWindow.maxButton.style.display = "none"
            }
        }, show: function () {
            if (!this.map || !this.map.infoWindow || this.map.infoWindow.hashCode != this.hashCode) {
                return
            }
            var ar = this.map.infoWindow;
            if (ar.popDom.style.display != "none") {
                return
            }
            k.show(ar.popDom);
            k.show(ar.shadowDom);
            var e = new ak("onopen");
            e.point = this.getPoint();
            this.dispatchEvent(e)
        }, hide: function () {
            if (!this.map || !this.map.infoWindow || this.map.infoWindow.hashCode != this.hashCode) {
                return
            }
            var ar = this.map.infoWindow;
            if (ar.popDom.style.display == "none") {
                return
            }
            k.hide(ar.popDom);
            k.hide(ar.shadowDom);
            if (this.isWinMax) {
                this.isWinMax = false;
                ar.maxContentDiv.style.display = "none";
                this.map.infoWindow.maxButton.src = this.IMG_PATH + "iw_plus.png"
            }
            var e = new ak("onclose");
            e.point = this.getPoint();
            this.dispatchEvent(e)
        }, close: function () {
            this.hide()
        }, dispose: function () {
            k.BaseClass.prototype.dispose.call(this)
        }, getObject: function () {
            return this.domElement
        }, setConfig: function (ar) {
            if (ar == null) {
                return
            }
            for (var e in ar) {
                if (typeof(this._config[e]) == typeof(ar[e])) {
                    this._config[e] = ar[e]
                }
            }
        }, _revert: function () {
            if (!this.map || !this.map.infoWindow || this.map.infoWindow.hashCode != this.hashCode) {
                return
            }
            this.isWinMax = false;
            this.map.infoWindow.titleDiv.innerHTML = "";
            this.map.infoWindow.contentDiv.innerHTML = "";
            this.map.infoWindow.maxContentDiv.innerHTML = "";
            this.map.infoWindow.maxButton.src = this.IMG_PATH + "iw_plus.png"
        }, _setOverflow: function () {
            var e = this.map;
            if (!e || !e.infoWindow || e.infoWindow.hashCode != this.hashCode) {
                return
            }
            e.infoWindow._overflowX = e.infoWindow.contentMain.style.overflowX;
            e.infoWindow._overflowY = e.infoWindow.contentMain.style.overflowY;
            e.infoWindow.contentMain.style.overflowX = "hidden";
            e.infoWindow.contentMain.style.overflowY = "hidden"
        }, _resetOverflow: function () {
            var e = this;
            var ar = this.map;
            if (!ar || !ar.infoWindow || ar.infoWindow.hashCode != this.hashCode || !ar.infoWindow._overflowX || !ar.infoWindow._overflowY) {
                return
            }
            ar.infoWindow.contentMain.style.overflowX = ar.infoWindow._overflowX;
            ar.infoWindow.contentMain.style.overflowY = ar.infoWindow._overflowY;
            delete ar.infoWindow._overflowX;
            delete ar.infoWindow._overflowY
        }, isVisible: function () {
            return this.isOpen()
        }, isOpen: function () {
            if (!this.map) {
                return false
            }
            var e = this.map.temp.infoWin;
            if (this.map.infoWindow && this.map.infoWindow.hashCode != this.hashCode) {
                return false
            }
            if (e && e.overlay == this.overlay && this.map.infoWindow && this.map.infoWindow.popDom.style.display == "none") {
                return false
            } else {
                return true
            }
        }, getPoint: function () {
            if (this.overlay && this.overlay.getPoint && this.overlay.getPoint()) {
                return this.overlay.getPoint()
            }
        }, getOffset: function () {
            return this._config.offset
        }, setMaxScene: function (e) {
            var ar = this;
            if (!ar.map || !ar.map.infoWindow || ar.map.infoWindow.hashCode != this.hashCode) {
                return
            }
            ar.map.infoWindow.maxButton.style.display = "block";
            var at = ar.map.infoWindow.maxButton;
            if (!!e == !!this.isWinMax) {
                return
            }
            if (e) {
                ar.isWinMax = true;
                at.src = ar.IMG_PATH + "iw_minus.gif";
                ar.setMaxContent();
                ar.map.infoWindow.maxContentDiv.style.display = "block"
            } else {
                ar.isWinMax = false;
                at.src = ar.IMG_PATH + "iw_plus.png";
                ar.setContent();
                ar.map.infoWindow.maxContentDiv.style.display = "none"
            }
            this.reset(false)
        }, toString: function () {
            return "InfoWindow"
        }
    });

    function R(ar, e) {
        ag.call(this);
        this.content = ar;
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            offset: new f(0, 0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px arial,simsun",
                zIndex: "80",
                MozUserSelect: "none"
            },
            point: null
        };
        e = e || {};
        this.setConfig(e);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        this.point = e.point
    }

    R.inherits(ag, "Label");
    k.extend(R.prototype, {
        render: function () {
            var e = this._config;
            var at = this.content;
            var ar = ['<label class="BMapLabel" unselectable="on" '];
            if (e.title) {
                ar.push('title="' + e.title + '" ')
            }
            ar.push('style="position:absolute;');
            if (e.width == 0 || e.width == "auto") {
                ar.push("display:inline;")
            } else {
                ar.push("width:" + e.width + "px;display:block;");
                ar.push("overflow:hidden;")
            }
            ar.push('">');
            ar.push(at);
            ar.push("</label>");
            return ar.join("")
        }, initialize: function (e) {
            this.map = e;
            this._addOverlayDom();
            this.setStyle(this._config.styles);
            if (!k.Browser.ie) {
                this.domElement.style.cursor = "inherit"
            }
        }, _getPixel: function (e) {
            return this.map.pointToPixel(this.getPoint())
        }, setContent: function (e) {
            this.content = e;
            if (this.domElement) {
                this.domElement.innerHTML = e
            }
        }, setOpacity: function (e) {
            if (e >= 0 && e <= 1) {
                this._config.opacity = e
            }
            if (this.domElement) {
                ad(this.domElement, e)
            }
        }, setOffset: function (e) {
            if (!e || e.toString() != "Size") {
                return
            }
            this._config.offset = new f(e.width, e.height);
            this.setPoint(this.getPoint())
        }, getOffset: function () {
            return this._config.offset
        }, setStyle: function (ar) {
            ar = ar || {};
            this._config.styles = k.extend(this._config.styles, ar);
            if (this.domElement) {
                for (var au in ar) {
                    try {
                        this.domElement.style[au] = ar[au]
                    } catch (at) {
                        alert(at.message)
                    }
                }
            }
        }, setStyles: function (e) {
            return this.setStyle(e)
        }, setTitle: function (e) {
            this._config.title = e || "";
            if (this.domElement) {
                this.domElement.title = this._config.title
            }
        }, getTitle: function () {
            return this._config.title
        }
    });

    function K(e, ar) {
        ag.call(this);
        ar = ar || {};
        this.point = e;
        this.map = null;
        this.domElement = null;
        this.iconDom = null;
        this.infoWindowDom = null;
        this.siblingElement = null;
        this.iconClassName = "none";
        this.isDraging = false;
        this._config = {
            offset: new f(0, 0),
            opacity: 1,
            icon: null,
            infoWindow: null,
            label: null,
            baseZIndex: 2500000,
            clickable: true,
            zIndexFixed: false,
            isTop: false
        };
        this.setConfig(ar);
        if (!ar.icon) {
            this._config.icon = new z.Icon(aj.imgPath + "marker_red.png", new f(23, 25), {
                offset: new f(10, 25),
                infoWindowOffset: new f(10, 0)
            })
        }
    }

    K.inherits(ag, "Marker");
    k.extend(K.prototype, {
        initialize: function (e) {
            this.map = e;
            this._addOverlayDom();
            this.setIcon(this._config.icon);
            this.setLabel(this._config.label);
            this.enableDragging(this.isDraging)
        }, render: function () {
            var e = ['<span class="BMap_Marker BMap_noprint" unselectable="on" '];
            e.push(this._config.title ? 'title="' + this._config.title + '"' : '"');
            e.push(' style="position:absolute;padding:0;margin:0;border:0;width:0;height:0;-moz-user-select:none;');
            e.push(this._config.clickable ? "cursor:pointer;" : "");
            e.push("background:url(" + aj.imgPath + "blank.gif);");
            e.push("width:" + this._config.icon.size.width + "px;");
            e.push("height:" + this._config.icon.size.height + "px;");
            e.push('">');
            e.push("</span>");
            return e.join("")
        }, siblingRender: function () {
            var e = ['<span class="BMap_Marker" unselectable="on" '];
            e.push('style="position:absolute;padding:0;margin:0;border:0;width:0;height:0;-moz-user-select:none">');
            e.push("</span>");
            return e.join("")
        }, remove: function () {
            if (this.domElement && this.domElement.parentNode) {
                this.domElement.parentNode.removeChild(this.domElement)
            }
            if (this.siblingElement && this.siblingElement.parentNode) {
                this.siblingElement.parentNode.removeChild(this.siblingElement)
            }
            if (this.infoWindow && this.infoWindow.overlay && this.infoWindow.overlay === this) {
                this.closeInfoWindow();
                this.infoWindow = null
            }
            this.domElement = null;
            this.siblingElement = null;
            this.iconDom = null;
            if (this._config.label) {
                this._config.label.domElement = null;
                this._config.label = null
            }
            this.dispatchEvent(new ak("onremove"))
        }, hide: function () {
            ag.prototype.hide.call(this);
            if (this.infoWindow && this.infoWindow.overlay && this.infoWindow.overlay == this) {
                this.closeInfoWindow()
            }
            k.hide(this.domElement);
            k.hide(this.siblingElement)
        }, show: function () {
            ag.prototype.show.call(this);
            if (this.domElement) {
                this.domElement.style.display = ""
            }
            k.show(this.siblingElement)
        }, setIcon: function (at) {
            if (!at || at.toString() != "Icon") {
                return
            }
            this._config.icon = at;
            if (!this.map || !this.domElement || !this.siblingElement) {
                return
            }
            var av = this.map;
            try {
                if (this.iconDom) {
                    this.siblingElement.removeChild(this.iconDom);
                    this.iconDom = null
                }
                this.domElement.style.width = at.size.width + "px";
                this.domElement.style.height = at.size.height + "px"
            } catch (au) {
            }
            if (this._config.icon) {
                var ar = ['<div style="position:absolute;padding:0;margin:0;border:0;overflow:hidden;'];
                ar.push("width:" + at.size.width + "px;");
                ar.push("height:" + at.size.height + "px;");
                ar.push("left:" + (-at.offset.width) + "px;");
                ar.push("top:" + (-at.offset.height) + 'px;"');
                if (this.iconClassName != "none") {
                    ar.push(' class="' + this.iconClassName + '"')
                }
                ar.push("> ");
                ar.push(at.getHTML());
                ar.push(" </div>");
                this.iconDom = V(this.siblingElement, ar.join(""));
                this.iconDom.galleryImg = false
            }
            this.setPoint(this.getPoint())
        }, setIconClassName: function (e) {
            if (this.iconDom) {
                this.iconDom.className = e
            }
        }, getIcon: function () {
            return this._config.icon
        }, setLabel: function (e) {
            if (!e || e.toString() != "Label") {
                return
            }
            this._config.label = e;
            var ar = this;
            if (!this._config.label._binded) {
                this._config.label._binded = true;
                this._config.label.addEventListener("remove", function () {
                    ar._config.label = null
                })
            }
            if (!this.map) {
                return
            }
            this.map.addOverlay(e);
            if (e.getDom()) {
                this.siblingElement.appendChild(e.getDom())
            } else {
                e.domElement = V(this.domElement, e.render());
                e.domElement.hashCode = e.getHashCode()
            }
            e.domElement.style.left = (e._config.offset.width) + "px";
            e.domElement.style.top = (e._config.offset.height) + "px"
        }, getLabel: function () {
            return this._config.label
        }, enableDragging: function (av) {
            this.isDraging = !!av;
            if (!this.domElement) {
                return
            }
            var az = this;
            var aw = 0;
            var au = 0;
            var at = 0;
            var ar = false;
            var aA = {x: 0, y: 0};

            function ay(aE, aD) {
                var aC = aE.srcElement || aE.target;
                var aB = aE.clientX || aE.pageX;
                var aG = aE.clientY || aE.pageY;
                if (aE && aD && aB && aG && aC) {
                    var aF = k.Dom.getOffset(map.container);
                    aD.pixel = new s(aB - aF.left, aG - aF.top);
                    aD.point = map.pixelToPoint(aD.pixel);
                    return aD
                } else {
                    return aD
                }
            }

            this.dragStart = function (aC) {
                ar = true;
                var aB = az.map.pointToPixel(az.point);
                aw = aC.clientX - aB.x;
                au = aC.clientY - aB.y;
                at = new Date().getTime();
                k.on(document, "mousemove", az.dragIng);
                k.on(document, "mouseup", az.dragEnd);
                if (az.domElement && az.domElement.setCapture) {
                    az.domElement.setCapture()
                }
            };
            this.dragEnd = function (aB) {
                if (az.domElement && az.domElement.releaseCapture) {
                    az.domElement.releaseCapture()
                }
                ar = false;
                k.un(document, "mousemove", az.dragIng);
                k.un(document, "mouseup", az.dragEnd);
                aw = au = 0;
                if ((new Date()).getTime() - at >= 100 && (aA.x > 2 || aA.y > 2)) {
                    az._dragstarted = false;
                    az.dispatchEvent(ay(aB, new ak("ondragend").inherit(aB)))
                }
            };
            this.dragIng = function (aD) {
                if (ar == false) {
                    return
                }
                if (!az._dragstarted) {
                    az.dispatchEvent(ay(aD, new ak("ondragstart").inherit(aD)));
                    az._dragstarted = true
                }
                var aC = new s((aD.clientX - aw), (aD.clientY - au));
                aA = aC;
                if ((aC.x > 15 && aC.x < map.width - 15) && (aC.y > 30 && aC.y < map.height - 15)) {
                    var aB = az.map.pixelToPoint(aC);
                    az.setPoint(aB)
                }
                az.dispatchEvent(ay(aD, new ak("ondragging").inherit(aD)))
            };
            if (av == true) {
                k.on(this.domElement, "mousedown", this.dragStart)
            } else {
                try {
                    k.un(this.domElement, "mousedown", this.dragStart)
                } catch (ax) {
                }
            }
        }, setTop: function (ar, e) {
            if (ar) {
                this._config.isTop = true
            } else {
                this._config.isTop = false
            }
            if (this.map && this.getPoint()) {
                this.setZIndex(ag.getZIndex(this.getPoint().lat, this.map.getCoordType()), e)
            }
        }, setPoint: function (e) {
            ag.prototype.setPoint.call(this, e);
            if (this.siblingElement) {
                this.siblingElement.style.left = this.domElement.style.left;
                this.siblingElement.style.top = this.domElement.style.top
            }
            if (this.domElement) {
                this.domElement.style.left = parseInt(this.domElement.style.left) - this._config.icon.offset.width + "px";
                this.domElement.style.top = parseInt(this.domElement.style.top) - this._config.icon.offset.height + "px"
            }
            if (this.infoWindow != null && this.infoWindow.isOpen()) {
                this.infoWindow.setPosition()
            }
            if (this.map) {
                this.setZIndex(ag.getZIndex(this.getPoint().lat, this.map.getCoordType()))
            }
        }, setZIndex: function (e, at) {
            var ar = this;
            ar.zIndex = ar._config.baseZIndex + (ar._config.isTop ? at || 1000000 : 0);
            if (ar._config.zIndexFixed == false) {
                ar.zIndex = e + ar.zIndex
            }
            if (ar.domElement && ar.domElement.style) {
                ar.domElement.style.zIndex = ar.zIndex
            }
            if (ar.siblingElement && ar.siblingElement.style) {
                ar.siblingElement.style.zIndex = ar.zIndex
            }
        }, setTitle: function (e) {
            this._config.title = e;
            if (this.getDom()) {
                this.getDom().title = e
            }
        }, getTitle: function () {
            return this._config.title || ""
        }, setOffset: function (e) {
            if (!e || e.toString() != "Size") {
                return
            }
            this._config.offset = e;
            this.setPoint(this.getPoint())
        }, getOffset: function () {
            return this._config.offset
        }
    });

    function y(e, ar) {
        af.call(this, ar);
        this.points = e.slice(0);
        this.pixels = null;
        this.map = null;
        this.domElement = null
    }

    y.inherits(af, "Polygon");
    k.extend(y.prototype, {
        render: function () {
            return ""
        }, initialize: function (e) {
            this.map = e;
            this.createPalette();
            this.domElement = this.polyline(this.points, true);
            this.domElement.hashCode = this.getHashCode();
            if (this._visible == false) {
                this.domElement.style.display = "none"
            }
            this.setStrokeColor(this._config.strokeColor);
            this.setStrokeWeight(this._config.strokeWeight);
            this.setStrokeStyle(this._config.strokeStyle);
            this.setFillColor(this._config.fillColor);
            this.setStrokeOpacity(this._config.strokeOpacity);
            this.setFillOpacity(this._config.fillOpacity)
        }, getPoints: function () {
            return this.points
        }
    });

    function C(e, ar) {
        af.call(this, ar);
        this.points = e.slice(0);
        this.pixels = null;
        this.map = null;
        this.domElement = null
    }

    C.inherits(af, "Polyline");
    k.extend(C.prototype, {
        render: function () {
            return ""
        }, initialize: function (e) {
            this.map = e;
            this.createPalette();
            this.domElement = this.polyline(this.points);
            this.domElement.hashCode = this.getHashCode();
            if (this._visible == false) {
                this.domElement.style.display = "none"
            }
            this.setTypeNS(this.domElement, "filled", false);
            this.setStrokeColor(this._config.strokeColor);
            this.setStrokeWeight(this._config.strokeWeight);
            this.setStrokeStyle(this._config.strokeStyle);
            this.setStrokeOpacity(this._config.strokeOpacity)
        }, getPoints: function () {
            return this.points
        }
    });

    function ap(ar, e, at) {
        this.point = ar;
        this.radius = e;
        this.map = null;
        this.domElement = null;
        this.points = [];
        this.pointUnit = 50;
        af.call(this, at)
    }

    ap.inherits(af, "Oval");
    k.extend(ap.prototype, {
        render: function () {
            var e = [""];
            return e.join("")
        }, afterZoom: function () {
        }, initialize: function (ar) {
            this.map = ar;
            this.setPoints(this.point, this.radius);
            this.createPalette();
            this.domElement = this.polyline(this.points, true);
            this.domElement.hashCode = this.getHashCode();
            if (this._visible == false) {
                this.domElement.style.display = "none"
            }
            this.setStrokeColor(this._config.strokeColor);
            this.setStrokeWeight(this._config.strokeWeight);
            this.setStrokeStyle(this._config.strokeStyle);
            this.setFillColor(this._config.fillColor);
            this.setStrokeOpacity(this._config.strokeOpacity);
            this.setFillOpacity(this._config.fillOpacity);
            var e = this
        }, getPoint: function () {
            return this.point
        }, setPoint: function (e) {
            this.point = e;
            this.setPoints(this.point, this.radius)
        }, getRadius: function () {
            return this.radius
        }, setRadius: function (e) {
            this.radius = e;
            this.setPoints(this.point, this.radius)
        }, setPoints: function (az, au) {
            if (!az || !au) {
                return
            }
            var ar = this.map;
            var aA = az.lng;
            var ay = az.lat;
            if (ar.config.coordType == BMAP_COORD_LNGLAT) {
                var ax = ar.lnglatToMercator(aA, ay);
                aA = ax[0];
                ay = ax[1]
            }
            var aB = [];
            for (var at = 0; at < this.pointUnit; at++) {
                var e = ((360 / this.pointUnit) * at * Math.PI) / 180;
                var aw = aA + au * Math.cos(e);
                var av = ay - au * Math.sin(e);
                if (ar.config.coordType == BMAP_COORD_LNGLAT) {
                    var ax = ar.mercatorToLnglat(aw, av);
                    aB.push(new z.Point(ax[0], ax[1]))
                } else {
                    aB.push(new z.Point(aw, av))
                }
            }
            this.points = aB;
            if (this.domElement) {
                this.setPolylinePoint(this.domElement, this.points)
            }
        }, getPoints: function () {
            return this.points
        }
    });

    function J(ar, e, at) {
        this.setPoints(ar, e);
        this.pixels = null;
        this.map = null;
        this.domElement = null;
        af.call(this, at)
    }

    J.inherits(af, "Rect");
    k.extend(J.prototype, {
        render: function () {
            var e = [""];
            return e.join("")
        }, afterZoom: function () {
        }, initialize: function (e) {
            this.map = e;
            this.createPalette();
            this.domElement = this.polyline(this.points, true);
            this.domElement.hashCode = this.getHashCode();
            this.setStrokeColor(this._config.strokeColor);
            this.setStrokeWeight(this._config.strokeWeight);
            this.setStrokeStyle(this._config.strokeStyle);
            this.setFillColor(this._config.fillColor);
            this.setStrokeOpacity(this._config.strokeOpacity);
            this.setFillOpacity(this._config.fillOpacity)
        }, getPoint: function () {
        }, setPoint: function () {
        }, setPoints: function (at, e) {
            if (!at || !e || at.toString() != "Point" || e.toString() != "Point") {
                return
            }
            var ax = at;
            var av = e;
            var aw = new D(ax.lng, av.lat);
            var au = new D(av.lng, ax.lat);
            var ar = at;
            this.points = [ax, aw, av, au, ar];
            if (this.domElement) {
                this.setPolylinePoint(this.domElement, this.points)
            }
        }, getPoints: function () {
            return [this.points[0], this.points[2]]
        }
    });

    function s(e, ar) {
        e = isNaN(e) ? 0 : parseFloat(e);
        ar = isNaN(ar) ? 0 : parseFloat(ar);
        this.x = e;
        this.y = ar
    }

    s.inherits(q, "Pixel");

    function an() {
    }

    k.extend(an, {
        EARTHRADIUS: 6370996.81,
        MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        LLBAND: [75, 60, 45, 30, 15, 0],
        MC2LL: [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]],
        LL2MC: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        getDistanceByMC: function (aw, au) {
            if (typeof(aw) == "undefined" || typeof(au) == "undefined") {
                return 0
            }
            var ar, av, e, at;
            aw = this.convertMC2LL(aw);
            if (typeof(aw) == "undefined") {
                return 0
            }
            ar = this.toRadians(aw.lng);
            av = this.toRadians(aw.lat);
            au = this.convertMC2LL(au);
            if (typeof(au) == "undefined") {
                return 0
            }
            e = this.toRadians(au.lng);
            at = this.toRadians(au.lat);
            return this.getDistance(ar, e, av, at)
        },
        getDistanceByLL: function (aw, au) {
            if (typeof(aw) == "undefined" || typeof(au) == "undefined") {
                return 0
            }
            aw.lng = this.getLoop(aw.lng, -180, 180);
            aw.lat = this.getRange(aw.lat, -74, 74);
            au.lng = this.getLoop(au.lng, -180, 180);
            au.lat = this.getRange(au.lat, -74, 74);
            var ar, e, av, at;
            ar = this.toRadians(aw.lng);
            av = this.toRadians(aw.lat);
            e = this.toRadians(au.lng);
            at = this.toRadians(au.lat);
            return this.getDistance(ar, e, av, at)
        },
        convertMC2LL: function (ar) {
            var at, av;
            at = new D(Math.abs(ar.lng), Math.abs(ar.lat));
            for (var au = 0; au < this.MCBAND.length; au++) {
                if (at.lat >= this.MCBAND[au]) {
                    av = this.MC2LL[au];
                    break
                }
            }
            var e = this.convertor(ar, av);
            var ar = new D(e.lng.toFixed(6), e.lat.toFixed(6));
            return ar
        },
        convertLL2MC: function (e) {
            var ar, au;
            e.lng = this.getLoop(e.lng, -180, 180);
            e.lat = this.getRange(e.lat, -74, 74);
            ar = new D(e.lng, e.lat);
            for (var at = 0; at < this.LLBAND.length; at++) {
                if (ar.lat >= this.LLBAND[at]) {
                    au = this.LL2MC[at];
                    break
                }
            }
            if (!au) {
                for (var at = this.LLBAND.length - 1; at >= 0; at--) {
                    if (ar.lat <= -this.LLBAND[at]) {
                        au = this.LL2MC[at];
                        break
                    }
                }
            }
            var av = this.convertor(e, au);
            var e = new D(av.lng.toFixed(2), av.lat.toFixed(2));
            return e
        },
        convertor: function (at, au) {
            if (!at || !au) {
                return
            }
            var e = au[0] + au[1] * Math.abs(at.lng);
            var ar = Math.abs(at.lat) / au[9];
            var av = au[2] + au[3] * ar + au[4] * ar * ar + au[5] * ar * ar * ar + au[6] * ar * ar * ar * ar + au[7] * ar * ar * ar * ar * ar + au[8] * ar * ar * ar * ar * ar * ar;
            e *= (at.lng < 0 ? -1 : 1);
            av *= (at.lat < 0 ? -1 : 1);
            return new D(e, av)
        },
        getDistance: function (ar, e, au, at) {
            return this.EARTHRADIUS * Math.acos((Math.sin(au) * Math.sin(at) + Math.cos(au) * Math.cos(at) * Math.cos(e - ar)))
        },
        toRadians: function (e) {
            return Math.PI * e / 180
        },
        toDegrees: function (e) {
            return (180 * e) / Math.PI
        },
        getRange: function (at, ar, e) {
            if (ar != null) {
                at = Math.max(at, ar)
            }
            if (e != null) {
                at = Math.min(at, e)
            }
            return at
        },
        getLoop: function (at, ar, e) {
            while (at > e) {
                at -= e - ar
            }
            while (at < ar) {
                at += e - ar
            }
            return at
        }
    });

    function f(ar, e) {
        this.width = parseFloat(ar) || 0;
        this.height = parseFloat(e) || 0
    }

    f.prototype.equals = function (e) {
        return !!(e && this.width == e.width && this.height == e.height)
    };
    f.prototype.toString = function () {
        return "Size"
    };

    function c(aw, ax, ar, e, at) {
        k.BaseClass.call(this);
        this.tilelayer = at;
        this.position = ar;
        this.mgr = aw;
        this.name = aw.getTileName(e, at);
        this.info = e;
        var av = document.createElement("img");
        Y(av, [aw.tileSize, aw.tileSize]);
        T(av);
        aa(av).position = "absolute";
        av.galleryImg = false;
        ai(av, ar);
        this.img = av;
        this.src = ax;
        var au = this;
        this.img.onload = function (aD) {
            if (!au.mgr) {
                return
            }
            var aA = au.mgr;
            var aE = aA.bufferTiles;
            if (aA.bufferNumber > 0) {
                aE[au.name] = au;
                aE.push(au.name)
            }
            var aH = aE.length - aA.bufferNumber;
            for (var aB = 0; aH > 0 && aB < aE.length; aB++) {
                var ay = aE[aB];
                if (!aA.mapTiles[ay]) {
                    if (aE[ay]) {
                        aE[ay].mgr = null;
                        var aC = aE[ay].img;
                        if (aC.parentNode) {
                            O(aC);
                            aC.parentNode.removeChild(aC)
                        }
                        aC = null;
                        aE[ay].img = null;
                        delete aE[ay]
                    }
                    aE.splice(aB, 1);
                    aB--;
                    aH--
                }
            }
            au.loaded = true;
            if (!G(au.img)) {
                if (at.tilesDiv) {
                    at.tilesDiv.appendChild(au.img);
                    if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && at.isTransparentPng() == true) {
                        var aG = au.src.toUpperCase();
                        if (aG.indexOf(".PNG") > 0) {
                            var az = au.img.style.width;
                            var aI = au.img.style.height;
                            var aF = 'position:absolute;FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + au.src + '",sizingMethod=scale);';
                            au.img.style.cssText = aF;
                            au.img.style.width = az;
                            au.img.style.height = aI;
                            ai(au.img, au.position)
                        }
                    }
                }
            }
        };
        this.img.onerror = function (aA) {
            if (!au.mgr) {
                return
            }
            var ay = au.mgr;
            au.error = true;
            var az = N[at.mapType];
            if (az.errorUrl) {
                au.img.src = az.errorUrl
            }
            if (!G(au.img)) {
                if (at.tilesDiv) {
                    at.tilesDiv.appendChild(au.img)
                }
            }
        };
        if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && at.isTransparentPng() == true) {
            av.src = aj.imgPath + "blank.gif"
        } else {
            av.src = ax
        }
    }

    function S(e) {
        this.tileLayers = [];
        this.cacheDiv = null;
        this.map = e;
        this.bufferNumber = 500;
        this.mapTiles = [];
        this.bufferTiles = [];
        this.slideMaxZoom = 4;
        this.config = N[this.map.mapType];
        this.errorUrl = this.config.errorUrl;
        this.tileSize = this.config.tileSize;
        this.baseUnits = this.config.baseUnits;
        this.minZoomLevel = this.config.zoomLevelMin;
        this.maxZoomLevel = this.config.zoomLevelMax;
        this.tileURLs = this.config.tileUrls;
        this.temp = {}
    }

    z.register(function (ar) {
        var e = ar.tileMgr = new S(ar);
        ar.addEventListener("dragstart", function (at) {
            e.dragStart(at)
        });
        ar.addEventListener("dragend", function (at) {
            e.dragEnd(at)
        });
        ar.addEventListener("click", function (at) {
            e.click(at)
        });
        ar.addEventListener("mousewheel", function (at) {
            e.mouseWheel(at)
        });
        ar.addEventListener("dblclick", function (at) {
            e.dblClick(at)
        });
        ar.addEventListener("load", function (at) {
            e.loadTiles()
        });
        ar.addEventListener("zoomstart", function (at) {
            e._zoom(at)
        });
        ar.addEventListener("moving", function (at) {
            e.mend(at)
        });
        ar.addEventListener("resize", function (at) {
            e.resizeMap(at)
        });
        ar.addEventListener("addtilelayer", function (at) {
            e.addTileLayer(at)
        });
        ar.addEventListener("removetilelayer", function (at) {
            e.removeTileLayer(at)
        })
    });
    k.extend(S.prototype, {
        addTileLayer: function (au) {
            var at = this;
            var ar = au.target;
            at.tileLayers.push(ar);
            at.moveGridTiles(true)
        }, removeTileLayer: function (az) {
            var aA = this;
            var ax = az.target;
            var av = ax.mapType;
            var au = aA.mapTiles;
            var aB = aA.bufferTiles;
            for (var ar in aB) {
                var at = ar.split("-")[1];
                if (at == av) {
                    delete aB[ar]
                }
            }
            for (var ar in au) {
                var at = ar.split("-")[1];
                if (at == av) {
                    delete au[ar]
                }
            }
            if (aA.zoomsDiv && aA.zoomsDiv.parentNode) {
                aA.zoomsDiv.parentNode.removeChild(aA.zoomsDiv);
                aA.zoomsDiv.innerHTML = ""
            }
            for (var ay = 0, aw = aA.tileLayers.length; ay < aw; ay++) {
                if (ax == aA.tileLayers[ay]) {
                    aA.tileLayers.splice(ay, 1);
                    delete ax
                }
            }
            aA.moveGridTiles(true)
        }, getTileLayer: function (au) {
            var at = this;
            for (var ar = 0, e = at.tileLayers.length; ar < e; ar++) {
                tilelayer = at.tileLayers[ar];
                if (tilelayer.mapType == au) {
                    return tilelayer
                }
            }
            return
        }, mend: function (ar) {
            this.moveGridTiles(true)
        }, _zoom: function (at) {
            var ar = this;
            if ((ar.map.currentOperation & g.mousewheel) != 0 || (ar.map.currentOperation & g.dblclick) != 0) {
                return
            }
            if (!at.forWheel) {
                if (ar.zoomsDiv && ar.zoomsDiv.style.display != "none") {
                    ar.zoomsDiv.style.display = "none"
                }
            }
            setTimeout(function () {
                ar.moveGridTiles(true);
                ar.map.dispatchEvent(new ak("onzoomend"))
            }, 10)
        }, resizeMap: function (at) {
            this.loaded = false;
            var ar = this.map;
            this.moveGridTiles(true)
        }, zoom: function (aA, aG, aF) {
            aG = aG || 0;
            aF = aF || 0;
            var at = this.map;
            var av = aA ? new s(aA.offsetX, aA.offsetY) : new s(at.width / 2, at.height / 2);
            var aC = this;
            if (at.overlayDiv) {
                at.overlayDiv.style.visibility = "hidden"
            }
            if (at.markerDiv) {
                at.markerDiv.style.visibility = "hidden"
            }
            for (var ay = 0, ax = aC.tileLayers.length; ay < ax; ay++) {
                tilelayer = aC.tileLayers[ay];
                if (!tilelayer.baseLayer) {
                    tilelayer.tilesDiv.style.visibility = "hidden"
                }
            }
            if (!this.zoomsDiv) {
                this.zoomsDiv = this.tilesDiv.cloneNode(true)
            } else {
                if (this.zoomsDiv && this.zoomsDiv.parentNode && !this._zTimeLine) {
                    this.zoomsDiv.parentNode.removeChild(this.zoomsDiv);
                    this.zoomsDiv = null;
                    this.zoomsDiv = this.tilesDiv.cloneNode(true)
                }
            }
            this.zoomsDiv.style.display = "block";
            at.platform.insertBefore(this.zoomsDiv, at.platform.firstChild);
            var ar = {
                x: av.x - parseInt(this.tilesDiv.style.left) - at.offsetX,
                y: av.y - parseInt(this.tilesDiv.style.top) - at.offsetY
            };
            var aw = [];
            var aD = at.zoomLevel - at.lastLevel;
            if (!aC._diff) {
                aC._diff = aD
            } else {
                if (at.zoomLevel - at.lastLevel > 0) {
                    aC._diff++
                } else {
                    aC._diff--
                }
            }
            if (this._zTimeLine && this._zTimeLine.schedule == 0) {
                this._zTimeLine.stop();
                this._zTimeLine = null;
                aD = aC._diff
            }
            var aB = Math.pow(2, aD);
            var az = this.zoomsDiv.childNodes.length;
            for (var ay = az - 1; ay > -1; ay--) {
                var au = {};
                var aE = this.zoomsDiv.childNodes[ay].style;
                au.top = parseInt(aE.top) || 0;
                au.left = parseInt(aE.left) || 0;
                au.width = parseInt(aE.width);
                au.height = parseInt(aE.height);
                au.dw = au.width * aB - au.width;
                au.dh = au.height * aB - au.height;
                au.dx = (au.left - ar.x) * aB - (au.left - ar.x);
                au.dy = (au.top - ar.y) * aB - (au.top - ar.y);
                aw[ay] = au
            }
            this.zoomsDiv._ol = parseInt(this.zoomsDiv.style.left);
            this.zoomsDiv._ot = parseInt(this.zoomsDiv.style.top);
            if (this._zTimeLine != null) {
                this._zTimeLine.stop();
                this._zTimeLine = null
            }
            this._zTimeLine = new A({
                fps: 20,
                duration: at.config.zoomerDuration,
                transition: p.easeInQuad,
                render: function (aI) {
                    if (aI < 0.1) {
                        return
                    }
                    for (var aH = aw.length - 1; aH > -1; aH--) {
                        var aJ = aw[aH];
                        if (aC.zoomsDiv && aC.zoomsDiv.childNodes[aH]) {
                            var e = aC.zoomsDiv.childNodes[aH].style;
                            e.top = Math.round(aJ.top + aJ.dy * aI) + "px";
                            e.left = Math.round(aJ.left + aJ.dx * aI) + "px";
                            e.width = Math.ceil(aJ.width + aJ.dw * aI) + "px";
                            e.height = Math.ceil(aJ.height + aJ.dh * aI) + "px"
                        }
                    }
                    if (aG || aF) {
                        aC.zoomsDiv.style.left = aC.zoomsDiv._ol - (aG * aI) + "px";
                        aC.zoomsDiv.style.top = aC.zoomsDiv._ot - (aF * aI) + "px"
                    }
                },
                finish: function () {
                    aC.moveGridTiles(true);
                    aC._zTimeLine = null;
                    if (at.overlayDiv) {
                        at.overlayDiv.style.visibility = ""
                    }
                    if (at.markerDiv) {
                        at.markerDiv.style.visibility = ""
                    }
                    for (var aH = 0, e = aC.tileLayers.length; aH < e; aH++) {
                        tilelayer = aC.tileLayers[aH];
                        if (!tilelayer.baseLayer) {
                            tilelayer.tilesDiv.style.visibility = ""
                        }
                    }
                    aC.tilesDiv.style.visibility = "";
                    delete aC._diff;
                    at.dispatchEvent(new ak("onzoomend"));
                    return
                }
            });
            this.tilesDiv.style.visibility = "hidden"
        }, showTile: function (aw, av, aB, ay) {
            this.centerPos = av;
            var ax = N[ay.mapType];
            var at = this.getTileName(aw, ay);
            var au = (aw[0] * ax.tileSize) + av[0];
            var ar = (-1 - aw[1]) * ax.tileSize + av[1];
            var az = [au, ar];
            var aA = this.mapTiles[at];
            if (aA) {
                if (aB) {
                    ai(aA.img, az)
                }
                return
            }
            aA = this.bufferTiles[at];
            if (aA) {
                ay.tilesDiv.insertBefore(aA.img, ay.tilesDiv.lastChild);
                this.mapTiles[at] = aA;
                ai(aA.img, az);
                return
            } else {
                var aD = ax.baseUnits * Math.pow(2, (ax.zoomLevelMax - aw[2]));
                var aC = new D(aw[0] * aD, aw[1] * aD);
                var e = ay.getTilesUrl(aC, aw[2]);
                aA = new c(this, e, az, aw, ay);
                this.mapTiles[at] = aA
            }
        }, getTileName: function (e, ar) {
            var at = ar.mapType;
            return "TILE-" + at + "-" + e[0] + "-" + e[1] + "-" + e[2]
        }, hideTile: function (at) {
            var ar = false;
            var e = at.img;
            if (G(e)) {
                if (at.loaded) {
                    ar = true
                }
                if (e.parentNode) {
                    O(e);
                    e.parentNode.removeChild(e)
                }
            }
            delete this.mapTiles[at.name];
            if (!ar) {
                if (e.parentNode) {
                    O(e);
                    e.parentNode.removeChild(e)
                }
                e = null;
                at.img = null;
                at.mgr = null;
                at = null
            }
        }, loadTiles: function () {
            var ar = this;
            if (k.Browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch (at) {
                }
            }
            if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
                this.zoomsDiv.style.display = "none"
            }
            ar.moveGridTiles(true);
            ar.map.loaded = true
        }, getCell: function (av, au) {
            var e = this.baseUnits * Math.pow(2, (this.maxZoomLevel - au));
            var at = parseInt(av.lng / e);
            var ar = parseInt(av.lat / e);
            return [at, ar, e * (at + 0.5), e * (ar + 0.5)]
        }, moveGridTiles: function (aI) {
            var aE = this.tileLayers.length;
            for (var aG = 0; aG < aE; aG++) {
                var av = this.tileLayers[aG];
                if (av.baseLayer || aE == 1) {
                    this.tilesDiv = av.tilesDiv
                }
                var aO = N[av.mapType];
                var aS = this.map;
                var aF = aS.zoomLevel;
                var aJ = aS.centerPoint;
                this.mapCenterPoint = aJ;
                var az = aS.getZoomUnits(aS.zoomLevel);
                var aB = aO.baseUnits * Math.pow(2, (aO.zoomLevelMax - aF));
                var aA = parseInt(aJ.lng / aB);
                if (aJ.lng < 0) {
                    aA -= 1
                }
                var aw = parseInt(aJ.lat / aB);
                if (aJ.lat < 0) {
                    aw -= 1
                }
                var aD = aO.tileSize;
                var au = [aA, aw, (aJ.lng - aA * aB) / aB * aD, (aJ.lat - aw * aB) / aB * aD];
                var aN = au[0] - Math.ceil((aS.width / 2 - au[2]) / aD);
                var at = au[1] - Math.ceil((aS.height / 2 - au[3]) / aD);
                var aK = au[0] + Math.ceil((aS.width / 2 + au[2]) / aD) - 1;
                var aC = au[1] + Math.ceil((aS.height / 2 + au[3]) / aD) - 1;
                if (aI) {
                    this.areaCenter = new D(aJ.lng, aJ.lat)
                }
                var ar = this.mapTiles;
                var ay = -Math.round(this.areaCenter.lng / az);
                var ax = Math.round(this.areaCenter.lat / az);
                var aQ = [ay, ax];
                for (var aR in ar) {
                    var aT = ar[aR];
                    var aP = aT.info;
                    if (!aP) {
                        continue
                    }
                    if (aP[2] == aS.zoomLevel && (aN > aP[0] || aK < aP[0] || at > aP[1] || aC < aP[1])) {
                        this.hideTile(aT)
                    } else {
                        if (aP[2] != aS.zoomLevel) {
                            this.hideTile(aT)
                        } else {
                            if (aP[2] == aS.lastLevel) {
                                this.showTile(aP, [aQ[0] * Math.pow(2, aS.zoomLevel - aS.lastLevel), aQ[1] * Math.pow(2, aS.zoomLevel - aS.lastLevel)], aI, av)
                            }
                        }
                    }
                }
                av.tilesDiv.style.left = Math.ceil(-aS.offsetX + aS.width / 2) + "px";
                av.tilesDiv.style.top = Math.ceil(-aS.offsetY + aS.height / 2) + "px";
                var e = [];
                for (var aM = aN; aM <= aK; aM++) {
                    for (var aL = at; aL <= aC; aL++) {
                        e.push([aM, aL])
                    }
                }
                e.sort((function (aU) {
                    return function (aV, aW) {
                        return (Math.abs(aV[0] - aU[0] + aV[1] - aU[1]) - Math.abs(aW[0] - aU[0] + aW[1] - aU[1]))
                    }
                })([au[0], au[1]]));
                for (var aM = 0, aH = e.length; aM < aH; aM++) {
                    this.showTile([e[aM][0], e[aM][1], aS.zoomLevel], aQ, aI, av)
                }
            }
            return
        }, dragStart: function (ar) {
            this.temp.pps = {x: this.map.offsetX, y: this.map.offsetY}
        }, dragEnd: function (ar) {
            this.temp.ppe = {x: this.map.offsetX, y: this.map.offsetY}
        }, click: function (at) {
            if (!this.map.config.enableClickPan) {
                return
            }
            var ar = this.temp;
            if (this.map.currentOperation == 0 && !ar.ppe && !ar.pps || (ar.ppe && ar.pps && (ar.ppe.x - ar.pps.x == 0 && ar.ppe.y - ar.pps.y == 0))) {
                this.map.panBy(this.map.width / 2 - at.offsetX, this.map.height / 2 - at.offsetY)
            }
            ar.pps = null;
            ar.ppe = null
        }, mouseWheel: function (ax) {
            if (!this.map.config.enableWheelZoom) {
                return
            }
            var ay = this.map;
            var az = new ak("onzoomstart");
            az.forWheel = true;
            ay.dispatchEvent(az);
            var av = N[ay.mapType];
            ay.zoomLevel = ay.zoomLevel + (ax.trend == true ? 1 : -1);
            var at = ay.config.zoomLevelMin;
            if (at) {
                if (ay.zoomLevel < at) {
                    ay.zoomLevel = at;
                    return
                }
            }
            var aw = ay.config.zoomLevelMax;
            if (aw) {
                if (ay.zoomLevel > aw) {
                    ay.zoomLevel = aw;
                    return
                }
            }
            if (ay.zoomLevel > av.zoomLevelMax) {
                ay.zoomLevel = av.zoomLevelMax;
                return
            }
            if (ay.zoomLevel < av.zoomLevelMin) {
                ay.zoomLevel = av.zoomLevelMin;
                return
            }
            if (ax) {
                var aA = new s(ax.offsetX, ax.offsetY);
                var ar = ay.pixelToPoint(aA, ay.lastLevel, true);
                var au = ay.getZoomUnits(ay.zoomLevel);
                ay.centerPoint = new D(ar.lng + au * (ay.width / 2 - aA.x), ar.lat - au * (ay.height / 2 - aA.y));
                this.zoom(ax)
            } else {
                var ay = this;
                setTimeout(function () {
                    ay.moveGridTiles(true)
                }, 10)
            }
        }, dblClick: function (ax) {
            var ay = this.map;
            if (!ay.config.enableDblclickZoom) {
                return
            }
            var aB = new s(ax.offsetX, ax.offsetY);
            var at = ay.pixelToPoint(aB, null, true);
            var az = N[ay.mapType].zoomLevelMax;
            if (ay.zoomLevel > az) {
                ay.zoomLevel = az
            }
            var aw = ay.config.zoomLevelMax;
            if (aw) {
                if (ay.zoomLevel > aw) {
                    ay.zoomLevel = aw;
                    az = aw
                }
            }
            if (ay.zoomLevel < az) {
                ay.dispatchEvent(new ak("onzoomstart"));
                ay.lastLevel = ay.zoomLevel;
                ay.zoomLevel++;
                var au = ay.config.zoomLevelMin;
                if (au) {
                    if (ay.zoomLevel < au) {
                        ay.zoomLevel = au;
                        return
                    }
                }
                var av = ay.getZoomUnits(ay.zoomLevel);
                ay.centerPoint = new D(at.lng, at.lat);
                var ar = (ay.getZoomUnits(ay.zoomLevel - 1)) / av * 0.5;
                var aD = aB.x - Math.round(ay.width / 2) * ar;
                var aA = aB.y - Math.round(ay.height / 2) * ar;
                this.zoom(ax, aD, aA)
            } else {
                var aC = ay.pixelToPoint(aB, null);
                ay.panTo(aC)
            }
        }
    });

    function a(e) {
        q.call(this);
        if (!e) {
            return
        }
        this._opts = {};
        this._map = e
    }

    a.inherits(q, "ToolbarItem");
    k.extend(a.prototype, {
        initialize: function () {
        }, _bind: function () {
            var ar = this;
            ar.setCursor(ar._opts.cursor);
            k.on(ar._map.container, "mousemove", function (av) {
                if (!ar._isOpen) {
                    return
                }
                if (!ar.followTitle) {
                    return
                }
                av = window.event || av;
                var at = av.target || av.srcElement;
                if (at != j.getDom(ar._map)) {
                    ar.followTitle.hide();
                    return
                }
                if (!ar._mapMoving) {
                    ar.followTitle.show()
                }
                var au = j.getDrawPoint(av, true);
                ar.followTitle.setPoint(au)
            });
            if (this._opts.followText) {
                var e = this.followTitle = new R(this._opts.followText, {offset: new f(14, 16)});
                this.followTitle.setStyles({color: "#333", borderColor: "#ff0103"});
                this._map.addOverlay(e);
                e.hide()
            }
        }, _checkStr: function (e) {
            if (!e) {
                return ""
            }
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    });

    function aq(ar, e) {
        a.call(this, ar);
        this._opts = k.extend(k.extend(this._opts, {
            icon: null,
            iconFollow: false,
            followText: "",
            cursor: "pointer"
        }), e);
        this._isOpen = false;
        this._opts.followText = this._checkStr(this._opts.followText);
        this.followTitle = this._opts.followText;
        this.followMarker = null;
        this._overlays = []
    }

    aq.inherits(a, "PushpinTool");
    k.extend(aq.prototype, {
        open: function () {
            if (this._isOpen == true) {
                return true
            }
            if (this._map._toolInUse) {
                return false
            }
            this._map._toolInUse = true;
            this._isOpen = true;
            if (!this.binded) {
                this._bind();
                this.binded = true
            }
            if (this.followMarker == null) {
                this.followMarker = new K(this._map.getCenter(), {icon: this._opts.icon})
            }
            this._map.addOverlay(this.followMarker);
            this.followMarker.hide();
            j.show(this._map);
            this.setCursor(this._opts.cursor)
        }, close: function () {
            if (!this._isOpen) {
                return
            }
            this._map._toolInUse = false;
            this._isOpen = false;
            if (this.followMarker) {
                this.followMarker.remove();
                this.followMarker = null
            }
            if (this.followTitle) {
                this.followTitle.hide()
            }
            j.hide()
        }, _bind: function () {
            a.prototype._bind.call(this);
            var e = this;
            k.on(j.getDom(e._map), "click", function (aw) {
                if (!e._isOpen) {
                    return
                }
                aw = window.event || aw;
                var ar = aw.layerX || aw.offsetX;
                var ax = aw.layerY || aw.offsetY;
                var av = j.getDrawPoint(aw);
                var at = new K(av, {icon: e._opts.icon});
                e._map.addOverlay(at);
                e._overlays.push(at);
                var au = new ak("onmarkend");
                au.marker = at;
                e.dispatchEvent(au);
                e.close()
            })
        }, setIcon: function (e) {
            if (!e || e && e.toString() != "Icon") {
                return
            }
            this._opts.icon = e
        }, getIcon: function () {
            return this._opts.icon
        }, setCursor: function (e) {
            this._opts.cursor = e;
            j.setCursor(this._opts.cursor)
        }, getCursor: function () {
            return this._opts.cursor
        }, clear: function () {
            for (var ar = 0, e = this._overlays.length; ar < e; ar++) {
                if (this._overlays[ar].remove) {
                    this._overlays[ar].remove();
                    this._overlays[ar].dispose()
                }
            }
            this._overlays.length = 0
        }, toString: function () {
            return "PushPinTool"
        }
    });

    function t(ar, e) {
        a.call(this, ar);
        e = e || {};
        this._opts = k.extend(k.extend(this._opts || {}, {
            autoClear: false,
            tips: "\u6d4b\u8ddd",
            followText: "\u5355\u51fb\u786e\u5b9a\u8d77\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f\u7ed8\u5236",
            unit: "metric",
            showResult: true,
            lineColor: "blue",
            lineStroke: 2,
            opacity: 1,
            lineStyle: "solid",
            cursor: aj.imgPath + "ruler.cur",
            styleCodes: {lnCode: 0, spCode: 0, slCode: 0, tlCode: 0}
        }), e);
        if (this._opts.showResult == false) {
            if (typeof e.tips == "undefined") {
                this._opts.tips = "\u7ed8\u5236\u6298\u7ebf"
            }
            if (!e.cursor) {
                this._opts.cursor = "crosshair"
            }
        }
        if (this._opts.lineStroke <= 0) {
            lineStroke = 2
        }
        if (this._opts.opacity > 1) {
            this._opts.opacity = 1
        } else {
            if (this._opts.opacity < 0) {
                this._opts.opacity = 0
            }
        }
        if (this._opts.lineStyle != "solid" && this._opts.lineStyle != "dashed") {
            this._opts.lineStyle = "solid"
        }
        this._checked = false;
        this._drawing = null;
        this.followTitle = null;
        this._totalDis = {};
        this._points = [];
        this._paths = [];
        this._dots = [];
        this._segDistance = [];
        this._overlays = [];
        this._units = {
            metric: {name: "metric", conv: 1, incon: 1000, u1: "\u7c73", u2: "\u516c\u91cc"},
            us: {name: "us", conv: 3.2808, incon: 5279.856, u1: "\u82f1\u5c3a", u2: "\u82f1\u91cc"}
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._dLineColor = "#ff6319";
        this._dLineStroke = 3;
        this._dOpacity = 0.8;
        this._dLineStyle = "solid";
        this._dCursor = aj.imgPath + "ruler.cur";
        if (this._opts.showResult) {
            this._opts.followText = "\u5355\u51fb\u786e\u5b9a\u8d77\u70b9"
        }
        this._followTextM = "\u5355\u51fb\u786e\u5b9a\u5730\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f";
        this._movingTimerId = null;
        if (this._opts.showResult) {
            this.text = "\u6d4b\u8ddd"
        } else {
            this.text = "\u7ed8\u7ebf"
        }
        this._isOpen = false
    }

    t.inherits(a, "PolylineTItem");
    k.extend(t.prototype, {
        initialize: function (ar, e) {
            if (a.prototype.initialize.call(this, ar, e) == false) {
                return
            }
        }, open: function () {
            if (this._isOpen == true) {
                return true
            }
            if (this._map._toolInUse) {
                return false
            }
            this._map._toolInUse = true;
            this._isOpen = true;
            if (this._mapMoving) {
                delete this._mapMoving
            }
            var au = this;
            if (!this._binded) {
                this._binded = true;
                this._bind();
                this._map.addEventListener("moving", function () {
                    au._hideCurrent()
                })
            }
            var at = function (aC) {
                var ax = au._map;
                if (ax.currentOperation & g.toolbarOperation == 0 || !au._isOpen) {
                    return
                }
                aC = window.event || aC;
                var az = j.getDrawPoint(aC, true);
                if (!au._isPointValid(az)) {
                    return
                }
                au._bind.initX = aC.pageX || aC.clientX || 0;
                au._bind.initY = aC.pageY || aC.clientY || 0;
                if (au._points.length > 0) {
                    var aF = ax.pointToPixel(au._points[au._points.length - 1]);
                    var ay = ax.pointToPixel(az);
                    var aB = Math.sqrt(Math.pow(aF.x - ay.x, 2) + Math.pow(aF.y - ay.y, 2));
                    if (aB < 5) {
                        return
                    }
                }
                au._bind.x = aC.layerX || aC.offsetX || 0;
                au._bind.y = aC.layerY || aC.offsetY || 0;
                au._points.push(az);
                if (au._opts.showResult) {
                    au._addSecPoint(az)
                }
                if (au._opts.showResult && au._paths.length == 0) {
                    au._formatTitle(1, au._followTextM, au.getTotalDistance())
                }
                if (au._paths.length > 0) {
                    au._paths[au._paths.length - 1].show();
                    if (au._opts.showResult) {
                        au._paths[au._paths.length - 1].setStrokeOpacity(au._dOpacity)
                    }
                }
                var aI = new C([az, az]);
                au._map.addOverlay(aI);
                aI._stCode = au._opts.styleCodes.lnCode;
                au._paths.push(aI);
                au._overlays.push(aI);
                if (au._opts.showResult) {
                    aI.setStrokeWeight(au._dLineStroke);
                    aI.setStrokeColor(au._dLineColor);
                    aI.setStrokeOpacity(au._dOpacity / 2);
                    aI.setStrokeStyle(au._dLineStyle)
                } else {
                    aI.setStrokeStroke(au._opts.lineStroke);
                    aI.setStrokeColor(au._opts.lineColor);
                    aI.setStrokeOpacity(au._opts.opacity);
                    aI.setStrokeStyle(au._opts.lineStyle)
                }
                if (au._mapMoving) {
                    aI.hide()
                }
                if (au._points.length > 1) {
                    var aA = au._paths[au._points.length - 2];
                    aA.setPath(az, 1)
                }
                if (au._opts.showResult) {
                    var aD = "";
                    if (au._points.length > 1) {
                        var aG = au._setSegDistance(au._points[au._points.length - 2], au._points[au._points.length - 1]);
                        var aE = au.getTotalDistance();
                        aD = au._formatDisStr(aE)
                    } else {
                        aD = "\u8d77\u70b9"
                    }
                    var aH = new R(aD, {offset: new z.Size(10, -5)});
                    aH.setStyles({color: "#333", borderColor: "#ff0103"});
                    aH._stCode = au._opts.styleCodes.slCode;
                    au._map.addOverlay(aH);
                    au._formatSegLabel(aH, aD);
                    au._overlays.push(aH);
                    az.disLabel = aH;
                    aH.setPoint(az)
                }
            };
            var ar = function (aO) {
                if (!au._isOpen) {
                    return
                }
                if (au._paths.length > 0) {
                    aO = window.event || aO;
                    var aE = aO.pageX || aO.clientX || 0;
                    var aD = aO.pageY || aO.clientY || 0;
                    if (typeof au._bind.initX == "undefined") {
                        au._bind.x = aO.layerX || aO.offsetX || 0;
                        au._bind.y = aO.layerY || aO.offsetY || 0;
                        au._bind.initX = aE;
                        au._bind.initY = aD
                    }
                    var aG = au._bind.x + aE - au._bind.initX;
                    var aF = au._bind.y + aD - au._bind.initY;
                    var aM = au._paths[au._paths.length - 1];
                    var aK = au._map.pixelToPoint(new s(aG, aF));
                    aM.setPath(aK, 1);
                    if (!au._mapMoving) {
                        aM.show()
                    }
                    var aI = 0;
                    var aH = 0;
                    if (aG < 10) {
                        aI = 8
                    } else {
                        if (aG > au._map.width - 10) {
                            aI = -8
                        }
                    }
                    if (aF < 10) {
                        aH = 8
                    } else {
                        if (aF > au._map.height - 10) {
                            aH = -8
                        }
                    }
                    if (aI != 0 || aH != 0) {
                        if (!ar._movingTimerId) {
                            var az = au._map.offsetX;
                            var ay = au._map.offsetY;
                            var aB = az + aI;
                            var aA = ay + aH;
                            au._mapMoving = true;
                            au._map._setPlatformPosition(aB, aA);
                            au._bind.i = 0;
                            au._bind.j = 0;
                            ar._movingTimerId = setInterval(function () {
                                var aQ = aI != 0 ? au._bind.i += aI : 0;
                                var aP = aH != 0 ? au._bind.j += aH : 0;
                                au._map._setPlatformPosition(aB + aQ, aA + aP)
                            }, 30);
                            au._movingTimerId = ar._movingTimerId;
                            aM.hide();
                            au.followTitle && au.followTitle.hide()
                        }
                    } else {
                        if (ar._movingTimerId) {
                            clearInterval(ar._movingTimerId);
                            delete ar._movingTimerId;
                            delete au._movingTimerId;
                            var aJ = au._paths[au._paths.length - 1];
                            var ax = au._map.pixelToPoint(new s(aG, aF));
                            if (!aJ) {
                                return
                            }
                            aJ.setPath(ax, 1);
                            aJ.show();
                            if (au.followTitle) {
                                au.followTitle.setPoint(ax);
                                au.followTitle.show()
                            }
                            au._bind.i = 0;
                            au._bind.j = 0;
                            delete au._mapMoving
                        }
                    }
                    if (au._opts.showResult && au.followTitle) {
                        var aC = au.getTotalDistance();
                        var aN = au._getDistance(au._points[au._points.length - 1], aK);
                        au._updateInstDis(au.followTitle.getDom(), aC + aN)
                    }
                } else {
                    if (au.followTitle) {
                        au.followTitle.show();
                        aO = window.event || aO;
                        var aL = aO.target || aO.srcElement;
                        if (aL != j.getDom()) {
                            au.followTitle.hide()
                        }
                    }
                }
            };
            var e = function (aE) {
                if (!au._isOpen) {
                    return
                }
                k.un(j.getDom(au._map), "click", at);
                k.un(document, "mousemove", ar);
                k.un(j.getDom(au._map), "dblclick", e);
                if (au._opts.showResult && au._points.length > 0) {
                    var aD = au._points[au._points.length - 1];
                    aD.disLabel.remove();
                    delete aD.disLabel
                }
                var ay = 0;
                if (au._paths.length > 0) {
                    var aC = au._paths[au._paths.length - 1];
                    var aB = au._map.pointToPixel(au._points[au._points.length - 1]);
                    var az = au._map.pointToPixel(au._points[au._points.length - 2]);
                    if (aB && az) {
                        var ax = Math.round(Math.sqrt((aB.x - az.x) * (aB.x - az.x) + (aB.y - az.y) * (aB.y - az.y)));
                        if (ax < 5) {
                            aC.remove();
                            au._paths.length = au._paths.length - 1
                        }
                        if (au._opts.showResult && au._paths.length > 0) {
                            ay = au.getTotalDistance();
                            au._processLastOp()
                        }
                    }
                } else {
                    if (au._opts.showResult == true && au._paths.length < 1) {
                        au._clearThis()
                    }
                }
                var aA = new ak("ondrawend");
                aA.points = au._points.slice(0);
                aA.overlays = au._paths.slice(0);
                if (au._opts.showResult) {
                    aA.distance = ay.toFixed(0)
                }
                au.dispatchEvent(aA);
                setTimeout(function () {
                    if (au._isOpen == true) {
                        au.close()
                    }
                }, 50)
            };
            var aw = function (ax) {
                ax = window.event || ax;
                if (ax.keyCode == 27) {
                    au._clearThis();
                    au.dispatchEvent(new ak("ondrawended"));
                    setTimeout(function () {
                        if (au._isOpen == true) {
                            au.close()
                        }
                    }, 50)
                }
            };
            var av = function (ax) {
                ax = window.event || ax;
                if (k.Browser.ie && ax.button != 1 || ax.button == 2) {
                    if (au._isOpen == true) {
                        au.dispatchEvent(new ak("ondrawend"));
                        au.close()
                    }
                }
            };
            au._initArrays();
            if (this._opts.showResult) {
                this._formatTitle()
            }
            j.show(this._map);
            this.setCursor(this._opts.cursor);
            k.on(j.getDom(this._map), "click", at);
            k.on(document, "mousemove", ar);
            k.on(j.getDom(this._map), "dblclick", e);
            k.on(document, "keydown", aw);
            k.on(j.getDom(this._map), "mouseup", av);
            this.bindFunc = [{elem: j.getDom(this._map), type: "click", func: at}, {
                elem: j.getDom(this._map),
                type: "dblclick",
                func: e
            }, {elem: document, type: "mousemove", func: ar}, {
                elem: document,
                type: "keydown",
                func: aw
            }, {elem: j.getDom(this._map), type: "mouseup", func: av}];
            return true
        }, close: function () {
            if (this._isOpen == false) {
                return
            }
            this._isOpen = false;
            this._map._toolInUse = false;
            if (this._mapMoving) {
                delete this._mapMoving
            }
            var at = this;
            if (at._points.length < 2) {
                at._clearThis()
            } else {
                at._paths[at._paths.length - 1].remove();
                at._paths[at._paths.length - 1] = null;
                at._paths.length = at._paths.length - 1;
                var au = at._points[at._points.length - 1];
                if (au.disLabel) {
                    au.disLabel.remove()
                }
                at._processLastOp()
            }
            j.hide();
            for (var ar = 0, e = this.bindFunc.length; ar < e; ar++) {
                k.un(this.bindFunc[ar].elem, this.bindFunc[ar].type, this.bindFunc[ar].func)
            }
            if (at._movingTimerId) {
                clearInterval(at._movingTimerId);
                at._movingTimerId = null
            }
            if (this.followTitle) {
                this.followTitle.hide()
            }
        }, _bind: function () {
            a.prototype._bind.call(this);
            var e = this;
            k.on(j.getDom(e._map), "mousedown", function (ar) {
                if (e._map.config.enableKeyboard == true) {
                    e._map.temp.canKeyboard = true;
                    al(ar)
                }
            })
        }, _clearThis: function () {
            for (var ar = 0, e = this._points.length; ar < e; ar++) {
                if (this._points[ar].disLabel) {
                    this._points[ar].disLabel.remove()
                }
            }
            for (var ar = 0, e = this._paths.length; ar < e; ar++) {
                this._paths[ar].remove()
            }
            for (var ar = 0, e = this._dots.length; ar < e; ar++) {
                this._dots[ar].remove()
            }
            this._initArrays()
        }, _initArrays: function () {
            this._points.length = 0;
            this._paths.length = 0;
            this._segDistance.length = 0;
            this._dots.length = 0
        }, _updatePoi: function (ar, at) {
            var e = this._points[this._points.length - 1];
            this._drawing.setPolylinePoint(ar, [e, at])
        }, _setSegDistance: function (at, ar) {
            if (!at || !ar) {
                return
            }
            var e = this._getDistance(at, ar);
            this._segDistance.push(e);
            return e
        }, getTotalDistance: function () {
            var at = 0;
            for (var ar = 0, e = this._segDistance.length; ar < e; ar++) {
                at += this._segDistance[ar]
            }
            return at
        }, _convertUnit: function (e, ar) {
            ar = ar || "metric";
            if (this._units[ar]) {
                return e * this._units[ar].conv
            }
            return e
        }, _addSecPoint: function (at) {
            var ar = new n(aj.imgPath + "mapctrls11.png", new z.Size(11, 11), {imageOffset: new z.Size(-26, -313)});
            var e = new K(at, {icon: ar, clickable: false, baseZIndex: 3500000, zIndexFixed: true});
            e._stCode = this._opts.styleCodes.spCode;
            this._map.addOverlay(e);
            this._dots.push(e)
        }, _formatDisStr: function (au) {
            var ar = this._opts.unit;
            var at = this._units[ar].u1;
            var e = this._convertUnit(au, ar);
            if (e > this._units[ar].incon) {
                e = e / this._units[ar].incon;
                at = this._units[ar].u2;
                e = e.toFixed(1)
            } else {
                e = e.toFixed(0)
            }
            return e + at
        }, setLineColor: function (e) {
            if (e && typeof e == "string") {
                this._opts.lineColor = e
            }
        }, setLineStroke: function (e) {
            if (Math.round(e) > 0) {
                this._opts.lineStroke = Math.round(e)
            }
        }, setOpacity: function (e) {
            if (e >= 0 && e <= 1) {
                this._opts.opacity = e
            }
        }, setLineStyle: function (e) {
            if (e == "solid" || e == "dashed") {
                this._opts.lineStyle = e
            }
        }, clear: function () {
            for (var ar = 0, e = this._overlays.length; ar < e; ar++) {
                if (this._overlays[ar] && this._overlays[ar].remove) {
                    this._overlays[ar].remove()
                }
            }
            this._overlays.length = 0;
            for (var ar = 0, e = this._dots.length; ar < e; ar++) {
                if (this._dots[ar] && this._dots[ar].parentNode) {
                    this._dots[ar].parentNode.removeChild(this._dots[ar])
                }
            }
            this._dots.length = 0
        }, setCursor: function (e) {
            if (this._opts.showResult == true) {
                j.setCursor("url(" + this._dCursor + "), crosshair")
            } else {
                j.setCursor(this._opts.cursor)
            }
        }, getCursor: function () {
            if (this._opts.showResult == true) {
                return this._dCursor
            }
            var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
            if (e != null) {
                return e[1]
            } else {
                return this._opts.cursor
            }
        }, showResult: function (e) {
            this._opts.showResult = !!e
        }, _formatSegLabel: function (e, at) {
            var ar = e.getDom();
            ar.style.border = "none";
            ar.style.padding = "0";
            ar.innerHTML = "<span class='BMap_diso'><span class='BMap_disi'>" + at + "</span></span>"
        }, _processLastOp: function () {
            var av = this;
            delete av._bind.x;
            delete av._bind.y;
            delete av._bind.initX;
            delete av._bind.initY;
            if (av._paths.length > av._points.length - 1) {
                var at = av._paths.length - 1;
                av._paths[at].remove();
                av._paths[at] = null;
                av._paths.length = at
            }
            if (!av._opts.showResult) {
                return
            }
            var e = av._totalDis[av._points[0].getHashCode()] = {};
            e.points = av._points.slice(0);
            e.paths = av._paths.slice(0);
            e.dots = av._dots.slice(0);
            e.segDis = av._segDistance.slice(0);
            var aw = av._map.pointToPixel(e.points[e.points.length - 1]);
            var au = av._map.pointToPixel(e.points[e.points.length - 2]);
            var ax = [0, 0];
            var ar = [0, 0];
            if (aw.y - au.y >= 0) {
                ar = [-5, 11]
            } else {
                ar = [-5, -35]
            }
            if (aw.x - au.x >= 0) {
                ax = [14, 0]
            } else {
                ax = [-14, 0]
            }
            var aA = e.points[e.points.length - 1];
            aA.disLabel = new R("", {offset: new z.Size(-15, -40)});
            aA.disLabel.setStyles({color: "#333", borderColor: "#ff0103"});
            aA.disLabel._stCode = av._opts.styleCodes.tlCode;
            av._map.addOverlay(aA.disLabel);
            aA.disLabel.setOffset(new z.Size(ar[0], ar[1]));
            aA.disLabel.setPoint(aA);
            av._formatTitle(2, "", "", aA.disLabel);
            var az = new n(aj.imgPath + "mapctrls.png", new z.Size(12, 12), {imageOffset: new z.Size(0, -14)});
            e.closeBtn = new K(e.points[e.points.length - 1], {
                icon: az,
                offset: new z.Size(ax[0], ax[1]),
                baseZIndex: 3600000
            });
            av._map.addOverlay(e.closeBtn);
            e.closeBtn.getDom().title = "\u6e05\u9664\u672c\u6b21\u6d4b\u8ddd";
            e.closeBtn.addEventListener("click", function (aE) {
                var aC = e.points[0].getHashCode();
                for (var aD = 0, aB = e.points.length; aD < aB; aD++) {
                    e.points[aD].disLabel.remove();
                    e.points[aD].disLabel = null
                }
                for (var aD = 0, aB = e.paths.length; aD < aB; aD++) {
                    e.paths[aD].remove();
                    e.paths[aD] = null
                }
                for (var aD = 0, aB = e.dots.length; aD < aB; aD++) {
                    e.dots[aD].remove();
                    e.dots[aD] = null
                }
                e.closeBtn.remove();
                e.closeBtn = null;
                delete av._totalDis[aC];
                al(aE)
            });
            var ay = e.dots[e.dots.length - 1];
            if (ay && ay._bind != true) {
                ay._bind = true;
                ay.getDom().style.cursor = "pointer";
                ay.addEventListener("click", function (aF) {
                    av.open();
                    av._points = e.points.slice(0);
                    av._paths = e.paths.slice(0);
                    av._dots = e.dots.slice(0);
                    av._segDistance = e.segDis.slice(0, e.points.length - 1);
                    var aG = av._points[av._points.length - 1];
                    var aE = new C([aG, aG]);
                    aE._stCode = av._opts.styleCodes.lnCode;
                    av._map.addOverlay(aE);
                    av._paths.push(aE);
                    av._overlays.push(aE);
                    aE.setStrokeWeight(av._dLineStroke);
                    aE.setStrokeColor(av._dLineColor);
                    aE.setStrokeOpacity(av._dOpacity / 2);
                    aE.setStrokeStyle(av._dLineStyle);
                    var aH = av._map.pointToPixel(av._points[av._points.length - 1]);
                    av._formatTitle(1, av._followTextM, av.getTotalDistance());
                    e.closeBtn.remove();
                    e.points[e.points.length - 1].disLabel.remove();
                    var aC = av.getTotalDistance();
                    var aD = av._formatDisStr(aC);
                    var aB = new R(aD, {offset: new z.Size(10, -5)});
                    aB.setStyles({color: "#333", borderColor: "#ff0103"});
                    aB._stCode = av._opts.styleCodes.slCode;
                    av._map.addOverlay(aB);
                    av._formatSegLabel(aB, aD);
                    av._overlays.push(aB);
                    e.points[e.points.length - 1].disLabel = aB;
                    aB.setPoint(aG);
                    ay.removeEventListener("click", arguments.callee);
                    ay._bind = false;
                    ay.getDom().style.cursor = av._map.config.defaultCursor
                })
            }
            av._initArrays()
        }, _formatTitle: function (au, aA, e, aw) {
            var av = aw || this.followTitle;
            if (!av) {
                return
            }
            var at = av.getDom();
            if (!at) {
                return
            }
            k.ac(at, "BMap_disLabel");
            var aC = at.style;
            var aB = av.content;
            aC.zIndex = "85";
            aC.padding = "3px 5px";
            var ay = [];
            if (au == 1) {
                av.setOffset(0, 25);
                var az = this._opts.unit;
                var ax = this._units[az].u1;
                var ar = this._convertUnit(e, az);
                if (ar > this._units[az].incon) {
                    ar = ar / this._units[az].incon;
                    ax = this._units[az].u2;
                    ar = ar.toFixed(1)
                } else {
                    ar = ar.toFixed(0)
                }
                ay.push("<span>\u603b\u957f\uff1a<span class='BMap_disBoxDis'>" + ar + "</span>" + ax + "</span><br />");
                ay.push("<span style='color:#7a7a7a'>" + aA + "</span>")
            } else {
                if (au == 2) {
                    var az = this._opts.unit;
                    var ax = this._units[az].u1;
                    var ar = this._convertUnit(this.getTotalDistance(), az);
                    if (ar > this._units[az].incon) {
                        ar = ar / this._units[az].incon;
                        ax = this._units[az].u2;
                        ar = ar.toFixed(1)
                    } else {
                        ar = ar.toFixed(0)
                    }
                    ay.push("\u603b\u957f\uff1a<span class='BMap_disBoxDis'>" + ar + "</span>" + ax);
                    av.content = "\u603b\u957f\uff1a" + ar + ax
                } else {
                    av.setOffset(0, 25);
                    ay.push(aB)
                }
            }
            at.innerHTML = ay.join("")
        }, _updateInstDis: function (at, e) {
            var ar = this._opts.unit;
            var au = this._units[ar].u1;
            if (e > this._units[ar].incon) {
                e = e / this._units[ar].incon;
                au = this._units[ar].u2;
                e = e.toFixed(1)
            } else {
                e = e.toFixed(0)
            }
            at.children[0].innerHTML = "\u603b\u957f\uff1a<span class='BMap_disBoxDis'>" + e + "</span>" + au
        }, _hideCurrent: function () {
            if (!this._isOpen) {
                return
            }
            if (this._paths.length > 0) {
                var e = this._paths[this._paths.length - 1];
                e.hide()
            }
            this.followTitle && this.followTitle.hide()
        }, _isPointValid: function (e) {
            if (!e) {
                return false
            }
            if (e.lng < N[this._map.mapType].bounds[0] || e.lng > N[this._map.mapType].bounds[2] || e.lat < N[this._map.mapType].bounds[1] || e.lat > N[this._map.mapType].bounds[3]) {
                return false
            }
            return true
        }, _getDistance: function (at, ar) {
            var e = 0;
            if (this._map.config.coordType == BMAP_COORD_LNGLAT) {
                e = an.getDistanceByLL(at, ar)
            } else {
                e = an.getDistanceByMC(at, ar)
            }
            return e
        }, toString: function () {
            return "DistanceTool"
        }
    });
    window.BMAP_ZOOM_IN = 0;
    window.BMAP_ZOOM_OUT = 1;

    function l(ar, e) {
        a.call(this, ar);
        this._opts = k.extend(k.extend(this._opts, {
            zoomType: BMAP_ZOOM_IN,
            followText: "",
            strokeWeight: 2,
            strokeColor: "#111",
            style: "solid",
            fillColor: "#ccc",
            opacity: 0.4,
            cursor: "crosshair",
            autoClose: false
        }), e);
        this._opts.strokeWeight = this._opts.strokeWeight <= 0 ? 1 : this._opts.strokeWeight;
        this._opts.opacity = this._opts.opacity < 0 ? 0 : this._opts.opacity > 1 ? 1 : this._opts.opacity;
        if (this._opts.zoomType < BMAP_ZOOM_IN || this._opts.zoomType > BMAP_ZOOM_OUT) {
            this._opts.zoomType = BMAP_ZOOM_IN
        }
        this._isOpen = false;
        this._fDiv = null;
        this.followTitle = null
    }

    l.inherits(a, "DragAndZoomTool");
    k.extend(l.prototype, {
        open: function () {
            if (this._isOpen == true) {
                return true
            }
            if (this._map._toolInUse) {
                return false
            }
            this._map._toolInUse = true;
            this._isOpen = true;
            if (!this.binded) {
                this._bind();
                this.binded = true
            }
            var at = this;
            var au = this._map;
            var ar = function (aw) {
                aw = window.event || aw;
                if (aw.button != 0 && !k.Browser.ie || k.Browser.ie && aw.button != 1) {
                    return
                }
                if (z.OperationMask.getDom(au).setCapture) {
                    z.OperationMask.getDom(au).setCapture()
                }
                if (!at._isOpen) {
                    return
                }
                at._bind.isZooming = true;
                k.on(document, "mousemove", e);
                k.on(document, "mouseup", av);
                at._bind.mx = aw.layerX || aw.offsetX || 0;
                at._bind.my = aw.layerY || aw.offsetY || 0;
                at._bind.ix = aw.pageX || aw.clientX || 0;
                at._bind.iy = aw.pageY || aw.clientY || 0;
                j.getDom(au).insertAdjacentHTML("beforeBegin", at._generateHTML());
                at._fDiv = j.getDom(au).previousSibling;
                at._fDiv.style.width = "0";
                at._fDiv.style.height = "0";
                at._fDiv.style.left = at._bind.mx + "px";
                at._fDiv.style.top = at._bind.my + "px";
                al(aw);
                return U(aw)
            };
            var e = function (aC) {
                if (at._isOpen == true && at._bind.isZooming == true) {
                    var aC = window.event || aC;
                    var ay = aC.pageX || aC.clientX || 0;
                    var aw = aC.pageY || aC.clientY || 0;
                    var aA = at._bind.dx = ay - at._bind.ix;
                    var ax = at._bind.dy = aw - at._bind.iy;
                    var az = Math.abs(aA) - at._opts.strokeWeight;
                    var aB = Math.abs(ax) - at._opts.strokeWeight;
                    at._fDiv.style.width = (az < 0 ? 0 : az) + "px";
                    at._fDiv.style.height = (aB < 0 ? 0 : aB) + "px";
                    if (aA >= 0) {
                        at._fDiv.style.right = "auto";
                        at._fDiv.style.left = at._bind.mx + "px";
                        if (at._bind.mx + aA >= au.width - 2 * at._opts.strokeWeight) {
                            at._fDiv.style.width = au.width - at._bind.mx - 2 * at._opts.strokeWeight + "px";
                            at.followTitle && at.followTitle.hide()
                        }
                    } else {
                        at._fDiv.style.left = "auto";
                        at._fDiv.style.right = au.width - at._bind.mx + "px";
                        if (at._bind.mx + aA <= 2 * at._opts.strokeWeight) {
                            at._fDiv.style.width = at._bind.mx - 2 * at._opts.strokeWeight + "px";
                            at.followTitle && at.followTitle.hide()
                        }
                    }
                    if (ax >= 0) {
                        at._fDiv.style.bottom = "auto";
                        at._fDiv.style.top = at._bind.my + "px";
                        if (at._bind.my + ax >= au.height - 2 * at._opts.strokeWeight) {
                            at._fDiv.style.height = au.height - at._bind.my - 2 * at._opts.strokeWeight + "px";
                            at.followTitle && at.followTitle.hide()
                        }
                    } else {
                        at._fDiv.style.top = "auto";
                        at._fDiv.style.bottom = au.height - at._bind.my + "px";
                        if (at._bind.my + ax <= 2 * at._opts.strokeWeight) {
                            at._fDiv.style.height = at._bind.my - 2 * at._opts.strokeWeight + "px";
                            at.followTitle && at.followTitle.hide()
                        }
                    }
                    al(aC);
                    return U(aC)
                }
            };
            var av = function (aD) {
                if (at._isOpen == true) {
                    k.un(document, "mousemove", e);
                    k.un(document, "mouseup", av);
                    if (z.OperationMask.getDom(au).releaseCapture) {
                        z.OperationMask.getDom(au).releaseCapture()
                    }
                    var az = parseInt(at._fDiv.style.left) + parseInt(at._fDiv.style.width) / 2;
                    var ay = parseInt(at._fDiv.style.top) + parseInt(at._fDiv.style.height) / 2;
                    if (isNaN(az)) {
                        az = at._map.width - parseInt(at._fDiv.style.right) - parseInt(at._fDiv.style.width) / 2
                    }
                    if (isNaN(ay)) {
                        ay = at._map.height - parseInt(at._fDiv.style.bottom) - parseInt(at._fDiv.style.height) / 2
                    }
                    var aE = Math.min(au.width / Math.abs(at._bind.dx), au.height / Math.abs(at._bind.dy));
                    aE = Math.floor(aE);
                    var aB = new s(az - parseInt(at._fDiv.style.width) / 2, ay - parseInt(at._fDiv.style.height) / 2);
                    var aA = new s(az + parseInt(at._fDiv.style.width) / 2, ay + parseInt(at._fDiv.style.height) / 2);
                    var aH = at._map.pixelToPoint(aB);
                    var aG = at._map.pixelToPoint(aA);
                    var aC = new m(aH.lng, aG.lat, aG.lng, aH.lat);
                    delete at._bind.dx;
                    delete at._bind.dy;
                    delete at._bind.ix;
                    delete at._bind.iy;
                    if (!isNaN(aE)) {
                        var aI = at._map.getZoomUnits(at._map.getZoom());
                        if (at._opts.zoomType == BMAP_ZOOM_IN) {
                            targetZoomLv = Math.round(au.getZoom() + (Math.log(aE) / Math.log(2)));
                            if (targetZoomLv < au.getZoom()) {
                                targetZoomLv = au.getZoom()
                            }
                        } else {
                            targetZoomLv = Math.round(au.getZoom() + (Math.log(1 / aE) / Math.log(2)));
                            if (targetZoomLv > au.getZoom()) {
                                targetZoomLv = au.getZoom()
                            }
                        }
                    } else {
                        targetZoomLv = at._map.getZoom() + (at._opts.zoomType == BMAP_ZOOM_IN ? 1 : -1)
                    }
                    var ax = at._map.pixelToPoint({x: az, y: ay}, at._map.getZoom());
                    at._map.centerAndZoom(ax, targetZoomLv);
                    var aJ = j.getDrawPoint(aD);
                    if (at.followTitle) {
                        at.followTitle.setPoint(aJ);
                        at.followTitle.show()
                    }
                    at._bind.isZooming = false;
                    at._fDiv.parentNode.removeChild(at._fDiv);
                    at._fDiv = null
                }
                var aw = new ak("ondrawend");
                aw.bounds = aC;
                at.dispatchEvent(aw);
                var aF = new J(new D(aC.minX, aC.minY), new D(aC.maxX, aC.maxY));
                aF.setStrokeWeight(2);
                aF.setStrokeColor("#111");
                aF.setStrokeOpacity(0.3);
                aF.setFillColor("");
                au.addOverlay(aF);
                new A({
                    duration: 240, fps: 20, delay: 1000, render: function (aL) {
                        var aK = 0.3 * (1 - aL);
                        aF.setStrokeOpacity(aK)
                    }, finish: function () {
                        aF.remove();
                        aF.dispose();
                        aF = null
                    }
                });
                if (at._opts.autoClose) {
                    setTimeout(function () {
                        if (at._isOpen == true) {
                            at.close()
                        }
                    }, 70)
                }
                al(aD);
                return U(aD)
            };
            j.show(this._map);
            this.setCursor(this._opts.cursor);
            if (!this._bind[this.hashCode]) {
                k.on(j.getDom(this._map), "mousedown", ar);
                this._bind[this.hashCode] = true
            }
            return true
        }, close: function () {
            if (!this._isOpen) {
                return
            }
            this._map._toolInUse = false;
            this._isOpen = false;
            if (this.followTitle) {
                this.followTitle.hide()
            }
            j.hide()
        }, _generateHTML: function () {
            return ["<div style='position:absolute;z-index:300;border:", this._opts.strokeWeight, "px ", this._opts.style, " ", this._opts.strokeColor, "; opacity:", this._opts.opacity, "; background: ", this._opts.fillColor, "; filter:alpha(opacity=", Math.round(this._opts.opacity * 100), "); width:0; height:0; font-size:0'></div>"].join("")
        }, setStrokeColor: function (e) {
            if (typeof e == "string") {
                this._opts.strokeColor = e;
                this._updateStyle()
            }
        }, setLineStroke: function (e) {
            if (typeof e == "number" && Math.round(e) > 0) {
                this._opts.strokeWeight = Math.round(e);
                this._updateStyle()
            }
        }, setLineStyle: function (e) {
            if (e == "solid" || e == "dashed") {
                this._opts.style = e;
                this._updateStyle()
            }
        }, setOpacity: function (e) {
            if (typeof e == "number" && e >= 0 && e <= 1) {
                this._opts.opacity = e;
                this._updateStyle()
            }
        }, setLineStyle: function (e) {
            if (e == "solid" || e == "dashed") {
                this._opts.style = e;
                this._updateStyle()
            }
        }, setFillColor: function (e) {
            this._opts.fillColor = e;
            this._updateStyle()
        }, _updateStyle: function () {
            if (this._fDiv != null) {
                this._fDiv.style.border = [this._opts.strokeWeight, "px ", this._opts.style, " ", this._opts.color].join("");
                this._fDiv.style.opacity = this._opts.opacity;
                this._fDiv.style.filter = "alpha(opacity=" + Math.round(opacity * 100) + ")"
            }
        }, setCursor: function (e) {
            this._opts.cursor = e;
            j.setCursor(this._opts.cursor)
        }, getCursor: function () {
            return this._opts.cursor
        }, toString: function () {
            return "DragAndZoomTool"
        }
    });

    function i() {
    }

    function ab(ar, e, au) {
        var at = document.createElement("div");
        if (ar > 0) {
            aa(at).position = (ar == 2) ? "relative" : "absolute"
        }
        if (e) {
            ai(at, e)
        }
        if (au) {
            b(at, au)
        }
        return at
    }

    function aa(e) {
        return e.style
    }

    function b(e, ar) {
        aa(e).zIndex = ar
    }

    function ai(ar, e) {
        aa(ar).left = ae(e[0]);
        aa(ar).top = ae(e[1])
    }

    function ad(at, ar) {
        var e = aa(at);
        e.opacity = ar;
        e.MozOpacity = ar;
        e.KhtmlOpacity = ar;
        e.filter = "alpha(opacity=" + (ar * 100) + ")";
        e = null
    }

    function ae(at) {
        if (typeof at == "number") {
            return at + "px"
        } else {
            if (typeof at == "string") {
                var ar = /"\\s","g"/;
                var au = /"^\\d+(px|%)+$","i"/;
                var e = at.replace(ar, "");
                if (au.exec(e)) {
                    return e
                }
                var av = new RegExp("^\\d+$");
                if (av.exec(e)) {
                    return e + "px"
                }
                return "0px"
            }
        }
    }

    function T(e) {
        if (k.Browser.ie > 0) {
            e.unselectable = "on";
            e.selectstart = function () {
                return false
            }
        } else {
            aa(e).MozUserSelect = "none"
        }
    }

    function Y(ar, e) {
        aa(ar).width = ae(e[0]);
        aa(ar).height = ae(e[1])
    }

    function W(at) {
        var ar = [at.offsetWidth, at.offsetHeight];
        if (at == document.body && !document.all) {
            ar[1] = at.clientHeight
        }
        if (!ar[0]) {
            ar[0] = at.clientWidth
        }
        if (!ar[0]) {
            ar[0] = parseInt(aa(at).width)
        }
        if (!ar[1]) {
            ar[1] = at.clientHeight
        }
        if (!ar[1]) {
            ar[1] = parseInt(aa(at).height)
        }
        if (!ar[0] || !ar[1]) {
            var e = at.parentElement;
            while (e) {
                if (!ar[0] && e.offsetWidth) {
                    ar[0] = e.offsetWidth
                }
                if (!ar[1] && e.offsetHeight) {
                    ar[1] = e.offsetHeight
                }
                if (ar[0] && ar[1]) {
                    break
                }
                e = e.parentElement
            }
        }
        return ar
    }

    function G(e) {
        return e.parentNode && e.parentNode.nodeType != 11
    }

    function V(ar, e) {
        ar.insertAdjacentHTML("beforeEnd", e);
        return ar.lastChild
    }

    function I(e, ar) {
        if (e.lng < ar.minX || e.lng > ar.maxX || e.lat < ar.minY || e.lat > ar.maxY) {
            return false
        } else {
            return true
        }
    }

    function al(ar) {
        var ar = window.event || ar;
        ar.stopPropagation ? ar.stopPropagation() : ar.cancelBubble = true
    }

    function U(ar) {
        var ar = window.event || ar;
        ar.preventDefault ? ar.preventDefault() : ar.returnValue = false;
        return false
    }

    function P(aw, au) {
        aw = aw || window.event;
        var ar = aw.clientX || aw.pageX;
        var ay = aw.clientY || aw.pageY;
        var at = aw.target || aw.srcElement;
        if (aw && au && ar && ay && at && k.I(at.hashCode)) {
            var av = k.I(at.hashCode).map;
            var ax = k.Dom.getOffset(av.container);
            au.pixel = new s(ar - ax.left, ay - ax.top);
            au.point = av.pixelToPoint(au.pixel);
            return au
        } else {
            return au
        }
    }

    function o(au) {
        au = au || window.event;
        if (au && au.clientX && au.clientY && au.target && k.I(au.target.hashCode)) {
            var at = k.I(au.target.hashCode).map;
            var av = k.Dom.getOffset(at.container);
            var ar = au.clientX || au.x;
            var aw = au.clientY || au.y;
            au.pixel = new s(ar - av.left, aw - av.top);
            au.point = at.pixelToPoint(au.pixel);
            return au
        } else {
            return au
        }
    }

    function X(at, e) {
        if (document.createEvent) {
            var ar = document.createEvent("MouseEvents");
            ar.initEvent(e, true, false);
            at.dispatchEvent(ar)
        } else {
            if (document.createEventObject) {
                at.fireEvent("on" + e)
            }
        }
    }

    function B() {
        var e = document.documentElement, ar = document.body;
        if (e && (e.scrollTop || e.scrollLeft)) {
            return [e.scrollTop, e.scrollLeft]
        } else {
            if (ar) {
                return [ar.scrollTop, ar.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }

    function O(au) {
        var ar = au.attributes, at, e, av;
        if (ar) {
            e = ar.length;
            for (at = 0; at < e; at += 1) {
                av = ar[at].name;
                if (typeof au[av] === "function") {
                    au[av] = null
                }
            }
        }
        ar = au.childNodes;
        if (ar) {
            e = ar.length;
            for (at = 0; at < e; at += 1) {
                O(au.childNodes[at])
            }
        }
    }

    function ah(e) {
        this._container = null;
        this._map = e
    }

    z.register(function (ar) {
        if (ar.config && ar.config.isOverviewMap) {
            return
        }
        var e = new ah(ar);
        ar.container.insertAdjacentHTML("beforeEnd", e.render());
        e._container = ar.container.lastChild;
        ar.addEventListener("onmousewheel", function (at) {
            e.action(at, ar)
        })
    });
    ah.prototype.render = function () {
        var e = ['<div id=zoomer style="position:absolute; z-index:0; top:0px; left:0px;overflow:hidden; visibility: hidden;cursor:' + aj.defaultCursor + '">'];
        e.push('<div class="BMap_zoomer" style="top:0;left:0;"></div>');
        e.push('<div class="BMap_zoomer" style="top:0;right:0;"></div>');
        e.push('<div class="BMap_zoomer" style="bottom:0;left:0;"></div>');
        e.push('<div class="BMap_zoomer" style="bottom:0;right:0;"></div>');
        e.push("</div>");
        return e.join("")
    };
    ah.prototype.action = function (aB) {
        if (ah._timeline) {
            return
        }
        var az = this._container;
        if (!az) {
            return
        }
        var at = aB.currentTarget;
        var aI = aB.trend;
        if (aB.oldZoomLevel == at.zoomLevel || at.lastLevel == N[at.mapType].zoomLevelMin && !aI || at.lastLevel == N[at.mapType].zoomLevelMax && aI) {
            return
        }
        var av = at.config.zoomerSizeMin || 60;
        var aH = at.config.zoomerSizeMax || 120;
        var aC = at.width / at.height;
        var aA = aC >= 1;
        var ax = Math.ceil((aI ? av : aH) / 2);
        var ay = Math.max(15, (aA ? ax / aC : ax * aC));
        az.style[(aA ? "width" : "height")] = ax * 2 + "px";
        az.style[(aA ? "height" : "width")] = ay * 2 + "px";
        az.style.visibility = "visible";
        var aE = az.children;
        if (aI) {
            aE[0].style.backgroundPosition = "0 0";
            aE[1].style.backgroundPosition = "-7px 0";
            aE[2].style.backgroundPosition = "0 -7px";
            aE[3].style.backgroundPosition = "-7px -7px"
        } else {
            aE[0].style.backgroundPosition = "-7px -7px";
            aE[1].style.backgroundPosition = "0 -7px";
            aE[2].style.backgroundPosition = "-7px 0";
            aE[3].style.backgroundPosition = "0 0"
        }
        aE = null;
        var aG = aB.offsetX - (aA ? ax : ay);
        var aF = aB.offsetY - (aA ? ay : ax);
        if (isNaN(aG) || isNaN(aF)) {
            return
        }
        az.style.left = aG + "px";
        az.style.top = aF + "px";
        var au = Math.ceil((aI ? aH : av) / 2);
        var aw = Math.max(15, (aA ? au / aC : au * aC));
        au = au - ax;
        aw = Math.ceil(aw - ay);
        var aD = this;
        var ar = aD._container.style;
        if (ah._timeline) {
            ah._timeline.end()
        }
        ah._timeline = new A({
            fps: 20,
            duration: aD._map.config.zoomerDuration,
            transition: p.easeInQuad,
            delay: 100,
            render: function (aJ) {
                if (aJ < 0.1) {
                    return
                }
                var aK = Math.ceil(au * aJ);
                var e = Math.ceil(aw * aJ);
                ar[aA ? "width" : "height"] = (ax + aK) * 2 + "px";
                ar[aA ? "height" : "width"] = (ay + e) * 2 + "px";
                ar[aA ? "left" : "top"] = ((aA ? aG : aF) - aK) + "px";
                ar[aA ? "top" : "left"] = ((aA ? aF : aG) - e) + "px"
            },
            finish: function () {
                ah._timeline = false;
                setTimeout(function () {
                    az.style.visibility = "hidden"
                }, 300)
            }
        })
    };
    window.BMap = z;
    z.Map = x;
    z.MapType = N;
    z.Point = D;
    z.Pixel = s;
    z.Size = f;
    z.Bounds = m;
    z.TileLayer = v;
    z.Copyright = ac;
    z.Project = an;
    z.Overlay = ag;
    z.Draw = af;
    z.Label = R;
    z.Marker = K;
    z.Icon = n;
    z.Polyline = C;
    z.Polygon = y;
    z.Rect = J;
    z.InfoWindow = Q;
    z.Oval = ap;
    z.Control = E;
    z.NavigationControl = Z;
    z.OverviewMapControl = ao;
    z.CopyrightControl = u;
    z.ScaleControl = F;
    z.PushpinTool = aq;
    z.DistanceTool = t;
    z.DragAndZoomTool = l;
    z.ContextMenu = M;
    z.MenuItem = L;
    z.OperationMask = j;
    z.Util = i;
    z.register(function (e) {
        if (e.config && e.config.isOverviewMap) {
            return
        }
        e.addEventListener("load", function () {
            if (e.temp.copyadded) {
                return
            }
            e.temp.copyadded = true;
            var at = new u({offset: new f(81, 2), printable: true});
            at.addCopyright({content: "&copy; 2015 Baidu", id: 1});
            e.addControl(at);
            var ar = new r();
            ar._opts.printable = true;
            e.addControl(ar)
        })
    });

    function r(e) {
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new f(1, 0);
        this.IMG_URL = aj.imgPath + "copyright_logo.png"
    }

    r.prototype = new E();
    r.prototype.initialize = function (at) {
        //this._map = at;
        //var au = document.createElement("div");
        //au.style.height = "32px";
        //var e = this._link = document.createElement("a");
        //e.title = "\u5230\u767e\u5ea6\u5730\u56fe\u9996\u9875";
        //e.target = "_blank";
        //e.href = "http://map.baidu.com/?sr=1";
        //e.style.outline = "none";
        //if (k.Browser.ie == 6) {
        //    e.innerHTML = "<div style='cursor:pointer;width:77px;height:32px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.IMG_URL + ")'></div>"
        //} else {
        //    e.innerHTML = "<img style='border:none;width:77px;height:32px' src='" + this.IMG_URL + "' />"
        //}
        //var ar = this;
        //au.appendChild(e);
        //at.getContainer().appendChild(au);
        //return au
    };
    z.register(function (ar) {
        if (ar.config && ar.config.isOverviewMap) {
            return
        }
        ar.addEventListener("mousemove", function (aD) {
            if (ar.temp.spottimer) {
                clearTimeout(ar.temp.spottimer);
                ar.temp.spottimer = null
            }
            if (ar.spotsPool && !(ar.currentOperation & g.drag)) {
                var at = ar.temp.curSpots.slice(0);
                ar.temp.curSpots = [];
                for (var au in ar.spotsPool) {
                    var aC = ar.spotsPool[au];
                    for (var aA = 0, ax = aC.length; aA < ax; aA++) {
                        var aE = aC[aA];
                        if (aE.lr && (ar.getZoom() < aE.lr[0] || ar.getZoom() > aE.lr[1])) {
                            continue
                        }
                        var av = ar.pointToPixel(aE.pt);
                        if (av.x < ar.width && av.y < ar.height) {
                            if ((aD.offsetX - av.x < aE.bd[2] && aD.offsetX - av.x > aE.bd[0]) && (av.y - aD.offsetY < aE.bd[3] && av.y - aD.offsetY > aE.bd[1])) {
                                ar.platform.style.cursor = "pointer";
                                ar.temp.curSpots.push(aE)
                            }
                        }
                    }
                }
                var aF = ar.temp.curSpots.slice(0);
                for (var aA = 0, ax = at.length; aA < ax; aA++) {
                    for (var az = 0, ay = 0, aw = ar.temp.curSpots.length; az < aw; az++, ay++) {
                        if (at[aA] === ar.temp.curSpots[az]) {
                            at.splice(aA, 1);
                            aA--;
                            aF.splice(ay, 1);
                            ay--
                        }
                    }
                }
                if (at.length > 0) {
                    var aB = new ak("onspotmouseout");
                    aB.spots = at.slice(0);
                    ar.dispatchEvent(aB)
                }
                if (ar.temp.curSpots.length == 0) {
                    if (ar.platform.style.cursor != ar.config.defaultCursor) {
                        ar.platform.style.cursor = ar.config.defaultCursor
                    }
                } else {
                    if (aF.length > 0) {
                        var aB = new ak("onspotmouseover");
                        aB.spots = aF.slice(0);
                        ar.dispatchEvent(aB)
                    }
                }
            }
        });

        function e() {
            ar.temp.curSpots = [];
            ar.platform.style.cursor = ar.config.defaultCursor
        }

        ar.addEventListener("load", e);
        ar.addEventListener("moveend", e);
        ar.addEventListener("zoomend", e)
    });
    window._addStat = function (f, e) {
        if (!f) {
            return
        }
        e = e || {};
        var d = "";
        for (var b in e) {
            d = d + "&" + b + "=" + encodeURIComponent(e[b])
        }
        var g = function (h) {
            if (!h) {
                return
            }
            _addStat._sending = true;
            setTimeout(function () {
                _addStat._img.src = "images/blank.gif"
            }, 50)
        };
        var a = function () {
            var h = _addStat._reqQueue.shift();
            if (h) {
                g(h)
            }
        };
        var c = (Math.random() * 100000000).toFixed(0);
        if (_addStat._sending) {
            _addStat._reqQueue.push({src: "t=" + c + "&code=" + f + d})
        } else {
            g({src: "t=" + c + "&code=" + f + d})
        }
        if (!_addStat._binded) {
            k.on(_addStat._img, "load", function () {
                _addStat._sending = false;
                a()
            });
            k.on(_addStat._img, "error", function () {
                _addStat._sending = false;
                a()
            });
            _addStat._binded = true
        }
    };
    window._addStat._reqQueue = [];
    window._addStat._img = new Image();
    var STAT_JS_EXECUTE = 5000;
    _addStat(STAT_JS_EXECUTE, {v: "1.0"});
})();
