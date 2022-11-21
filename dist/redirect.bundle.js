!(function () {
  "use strict";
  var n = {
      449: function (n, r, e) {
        var t = e(81),
          o = e.n(t),
          a = e(645),
          i = e.n(a)()(o());
        i.push([
          n.id,
          ".expectation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.expectation p {\r\n  text-align: center;\r\n}\r\n\r\n.circles {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.circles span {\r\n  display: block;\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: #0049FF;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circles span:first-child {\r\n  animation: circle 1s linear infinite;\r\n}\r\n\r\n.circles span:last-child {\r\n  animation: circle 2s linear infinite;\r\n}\r\n\r\n@keyframes circle {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.5);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}",
          "",
        ]),
          (r.Z = i);
      },
      419: function (n, r, e) {
        var t = e(81),
          o = e.n(t),
          a = e(645),
          i = e.n(a)()(o());
        i.push([
          n.id,
          ".road {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n}",
          "",
        ]),
          (r.Z = i);
      },
      645: function (n) {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  t = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  t &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += n(r)),
                  t && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, t, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (t)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < n.length; u++) {
                var l = [].concat(n[u]);
                (t && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  e &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = e))
                      : (l[2] = e)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  r.push(l));
              }
            }),
            r
          );
        };
      },
      81: function (n) {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: function (n) {
        var r = [];
        function e(n) {
          for (var e = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === n) {
              e = t;
              break;
            }
          return e;
        }
        function t(n, t) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              u = t.base ? s[0] + t.base : s[0],
              l = a[u] || 0,
              f = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = e(f),
              d = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) r[p].references++, r[p].updater(d);
            else {
              var v = o(d, t);
              (t.byIndex = c),
                r.splice(c, 0, { identifier: f, updater: v, references: 1 });
            }
            i.push(f);
          }
          return i;
        }
        function o(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = t((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = e(a[i]);
              r[c].references--;
            }
            for (var s = t(n, o), u = 0; u < a.length; u++) {
              var l = e(a[u]);
              0 === r[l].references && (r[l].updater(), r.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: function (n) {
        var r = {};
        n.exports = function (n, e) {
          var t = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(e);
        };
      },
      216: function (n) {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: function (n, r, e) {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: function (n) {
        n.exports = function (n) {
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")),
                  e.media && (t += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (t += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (t += e.css),
                  o && (t += "}"),
                  e.media && (t += "}"),
                  e.supports && (t += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  r.styleTagTransform(t, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: function (n) {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    r = {};
  function e(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var a = (r[t] = { id: t, exports: {} });
    return n[t](a, a.exports, e), a.exports;
  }
  (e.n = function (n) {
    var r =
      n && n.__esModule
        ? function () {
            return n.default;
          }
        : function () {
            return n;
          };
    return e.d(r, { a: r }), r;
  }),
    (e.d = function (n, r) {
      for (var t in r)
        e.o(r, t) &&
          !e.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
    }),
    (e.o = function (n, r) {
      return Object.prototype.hasOwnProperty.call(n, r);
    }),
    (e.nc = void 0),
    (function () {
      var n = e(379),
        r = e.n(n),
        t = e(795),
        o = e.n(t),
        a = e(569),
        i = e.n(a),
        c = e(565),
        s = e.n(c),
        u = e(216),
        l = e.n(u),
        f = e(589),
        p = e.n(f),
        d = e(419),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = s()),
        (v.insert = i().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = l()),
        r()(d.Z, v),
        d.Z && d.Z.locals && d.Z.locals;
      var m = e(449),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = s()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        r()(m.Z, h),
        m.Z && m.Z.locals && m.Z.locals;
    })();
})();
