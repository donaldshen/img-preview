webpackJsonp([0], {
  833: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', {value: !0})
    var r = (function() {
        function defineProperties(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(e, t, n) {
          return (
            t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
          )
        }
      })(),
      o = n(1),
      i = _interopRequireDefault(o),
      a = _interopRequireDefault(n(2)),
      s = _interopRequireDefault(n(112)),
      l = n(835)
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {default: e}
    }
    n(836), n(839), n(841)
    var c = 10,
      u = (function(e) {
        function Editor() {
          !(function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, Editor)
          var e = (function _possibleConstructorReturn(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this)
          )
          return (e.handleChange = (0, s.default)(e.handleChange.bind(e), c)), e
        }
        return (
          (function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(Editor, o.Component),
          r(Editor, [
            {
              key: 'shouldComponentUpdate',
              value: function shouldComponentUpdate() {
                return !1
              }
            },
            {
              key: 'handleChange',
              value: function handleChange(e, t, n) {
                this.props.onChange(n)
              }
            },
            {
              key: 'render',
              value: function render() {
                var e = this.props.code,
                  t = this.context.config.editorConfig
                return i.default.createElement(l.UnControlled, {
                  value: e,
                  onChange: this.handleChange,
                  options: t
                })
              }
            }
          ]),
          Editor
        )
      })()
    ;(u.propTypes = {
      code: a.default.string.isRequired,
      onChange: a.default.func.isRequired
    }),
      (u.contextTypes = {config: a.default.object.isRequired}),
      (t.default = u)
  },
  834: function(e, t, n) {
    var r
    ;(r = function() {
      'use strict'
      var e = navigator.userAgent,
        t = navigator.platform,
        n = /gecko\/\d/i.test(e),
        r = /MSIE \d/.test(e),
        o = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        i = /Edge\/(\d+)/.exec(e),
        a = r || o || i,
        s = a && (r ? document.documentMode || 6 : +(i || o)[1]),
        l = !i && /WebKit\//.test(e),
        c = l && /Qt\/\d+\.\d+/.test(e),
        u = !i && /Chrome\//.test(e),
        d = /Opera\//.test(e),
        p = /Apple Computer/.test(navigator.vendor),
        h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        f = /PhantomJS/.test(e),
        g = !i && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
        m = /Android/.test(e),
        v =
          g || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        y = g || /Mac/.test(t),
        b = /\bCrOS\b/.test(e),
        x = /win/i.test(t),
        C = d && e.match(/Version\/(\d*\.\d*)/)
      C && (C = Number(C[1])), C && C >= 15 && ((d = !1), (l = !0))
      var w = y && (c || (d && (null == C || C < 12.11))),
        S = n || (a && s >= 9)
      function classTest(e) {
        return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*')
      }
      var k,
        L = function(e, t) {
          var n = e.className,
            r = classTest(t).exec(n)
          if (r) {
            var o = n.slice(r.index + r[0].length)
            e.className = n.slice(0, r.index) + (o ? r[1] + o : '')
          }
        }
      function removeChildren(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild)
        return e
      }
      function removeChildrenAndAdd(e, t) {
        return removeChildren(e).appendChild(t)
      }
      function elt(e, t, n, r) {
        var o = document.createElement(e)
        if (
          (n && (o.className = n),
          r && (o.style.cssText = r),
          'string' == typeof t)
        )
          o.appendChild(document.createTextNode(t))
        else if (t) for (var i = 0; i < t.length; ++i) o.appendChild(t[i])
        return o
      }
      function eltP(e, t, n, r) {
        var o = elt(e, t, n, r)
        return o.setAttribute('role', 'presentation'), o
      }
      function contains(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
          return e.contains(t)
        do {
          if ((11 == t.nodeType && (t = t.host), t == e)) return !0
        } while ((t = t.parentNode))
      }
      function activeElt() {
        var e
        try {
          e = document.activeElement
        } catch (t) {
          e = document.body || null
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
          e = e.shadowRoot.activeElement
        return e
      }
      function addClass(e, t) {
        var n = e.className
        classTest(t).test(n) || (e.className += (n ? ' ' : '') + t)
      }
      function joinClasses(e, t) {
        for (var n = e.split(' '), r = 0; r < n.length; r++)
          n[r] && !classTest(n[r]).test(t) && (t += ' ' + n[r])
        return t
      }
      k = document.createRange
        ? function(e, t, n, r) {
            var o = document.createRange()
            return o.setEnd(r || e, n), o.setStart(e, t), o
          }
        : function(e, t, n) {
            var r = document.body.createTextRange()
            try {
              r.moveToElementText(e.parentNode)
            } catch (e) {
              return r
            }
            return (
              r.collapse(!0),
              r.moveEnd('character', n),
              r.moveStart('character', t),
              r
            )
          }
      var M = function(e) {
        e.select()
      }
      function bind(e) {
        var t = Array.prototype.slice.call(arguments, 1)
        return function() {
          return e.apply(null, t)
        }
      }
      function copyObj(e, t, n) {
        for (var r in (t || (t = {}), e))
          !e.hasOwnProperty(r) ||
            (!1 === n && t.hasOwnProperty(r)) ||
            (t[r] = e[r])
        return t
      }
      function countColumn(e, t, n, r, o) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length)
        for (var i = r || 0, a = o || 0; ; ) {
          var s = e.indexOf('\t', i)
          if (s < 0 || s >= t) return a + (t - i)
          ;(a += s - i), (a += n - a % n), (i = s + 1)
        }
      }
      g
        ? (M = function(e) {
            ;(e.selectionStart = 0), (e.selectionEnd = e.value.length)
          })
        : a &&
          (M = function(e) {
            try {
              e.select()
            } catch (e) {}
          })
      var T = function() {
        this.id = null
      }
      function indexOf(e, t) {
        for (var n = 0; n < e.length; ++n) if (e[n] == t) return n
        return -1
      }
      T.prototype.set = function(e, t) {
        clearTimeout(this.id), (this.id = setTimeout(t, e))
      }
      var O = 30,
        P = {
          toString: function() {
            return 'CodeMirror.Pass'
          }
        },
        A = {scroll: !1},
        N = {origin: '*mouse'},
        D = {origin: '+move'}
      function findColumn(e, t, n) {
        for (var r = 0, o = 0; ; ) {
          var i = e.indexOf('\t', r)
          ;-1 == i && (i = e.length)
          var a = i - r
          if (i == e.length || o + a >= t) return r + Math.min(a, t - o)
          if (((o += i - r), (r = i + 1), (o += n - o % n) >= t)) return r
        }
      }
      var H = ['']
      function spaceStr(e) {
        for (; H.length <= e; ) H.push(lst(H) + ' ')
        return H[e]
      }
      function lst(e) {
        return e[e.length - 1]
      }
      function map(e, t) {
        for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r)
        return n
      }
      function nothing() {}
      function createObj(e, t) {
        var n
        return (
          Object.create
            ? (n = Object.create(e))
            : ((nothing.prototype = e), (n = new nothing())),
          t && copyObj(t, n),
          n
        )
      }
      var W = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
      function isWordCharBasic(e) {
        return (
          /\w/.test(e) ||
          (e > '' && (e.toUpperCase() != e.toLowerCase() || W.test(e)))
        )
      }
      function isWordChar(e, t) {
        return t
          ? !!(t.source.indexOf('\\w') > -1 && isWordCharBasic(e)) || t.test(e)
          : isWordCharBasic(e)
      }
      function isEmpty(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1
        return !0
      }
      var E = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
      function isExtendingChar(e) {
        return e.charCodeAt(0) >= 768 && E.test(e)
      }
      function skipExtendingChars(e, t, n) {
        for (; (n < 0 ? t > 0 : t < e.length) && isExtendingChar(e.charAt(t)); )
          t += n
        return t
      }
      function findFirst(e, t, n) {
        for (var r = t > n ? -1 : 1; ; ) {
          if (t == n) return t
          var o = (t + n) / 2,
            i = r < 0 ? Math.ceil(o) : Math.floor(o)
          if (i == t) return e(i) ? t : n
          e(i) ? (n = i) : (t = i + r)
        }
      }
      function getLine(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
          throw new Error(
            'There is no line ' + (t + e.first) + ' in the document.'
          )
        for (var n = e; !n.lines; )
          for (var r = 0; ; ++r) {
            var o = n.children[r],
              i = o.chunkSize()
            if (t < i) {
              n = o
              break
            }
            t -= i
          }
        return n.lines[t]
      }
      function getBetween(e, t, n) {
        var r = [],
          o = t.line
        return (
          e.iter(t.line, n.line + 1, function(e) {
            var i = e.text
            o == n.line && (i = i.slice(0, n.ch)),
              o == t.line && (i = i.slice(t.ch)),
              r.push(i),
              ++o
          }),
          r
        )
      }
      function getLines(e, t, n) {
        var r = []
        return (
          e.iter(t, n, function(e) {
            r.push(e.text)
          }),
          r
        )
      }
      function updateLineHeight(e, t) {
        var n = t - e.height
        if (n) for (var r = e; r; r = r.parent) r.height += n
      }
      function lineNo(e) {
        if (null == e.parent) return null
        for (
          var t = e.parent, n = indexOf(t.lines, e), r = t.parent;
          r;
          t = r, r = r.parent
        )
          for (var o = 0; r.children[o] != t; ++o)
            n += r.children[o].chunkSize()
        return n + t.first
      }
      function lineAtHeight(e, t) {
        var n = e.first
        e: do {
          for (var r = 0; r < e.children.length; ++r) {
            var o = e.children[r],
              i = o.height
            if (t < i) {
              e = o
              continue e
            }
            ;(t -= i), (n += o.chunkSize())
          }
          return n
        } while (!e.lines)
        for (var a = 0; a < e.lines.length; ++a) {
          var s = e.lines[a].height
          if (t < s) break
          t -= s
        }
        return n + a
      }
      function isLine(e, t) {
        return t >= e.first && t < e.first + e.size
      }
      function lineNumberFor(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
      }
      function Pos(e, t, n) {
        if ((void 0 === n && (n = null), !(this instanceof Pos)))
          return new Pos(e, t, n)
        ;(this.line = e), (this.ch = t), (this.sticky = n)
      }
      function cmp(e, t) {
        return e.line - t.line || e.ch - t.ch
      }
      function equalCursorPos(e, t) {
        return e.sticky == t.sticky && 0 == cmp(e, t)
      }
      function copyPos(e) {
        return Pos(e.line, e.ch)
      }
      function maxPos(e, t) {
        return cmp(e, t) < 0 ? t : e
      }
      function minPos(e, t) {
        return cmp(e, t) < 0 ? e : t
      }
      function clipLine(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1))
      }
      function clipPos(e, t) {
        if (t.line < e.first) return Pos(e.first, 0)
        var n = e.first + e.size - 1
        return t.line > n
          ? Pos(n, getLine(e, n).text.length)
          : (function clipToLen(e, t) {
              var n = e.ch
              return null == n || n > t
                ? Pos(e.line, t)
                : n < 0
                  ? Pos(e.line, 0)
                  : e
            })(t, getLine(e, t.line).text.length)
      }
      function clipPosArray(e, t) {
        for (var n = [], r = 0; r < t.length; r++) n[r] = clipPos(e, t[r])
        return n
      }
      var I = !1,
        F = !1
      function MarkedSpan(e, t, n) {
        ;(this.marker = e), (this.from = t), (this.to = n)
      }
      function getMarkedSpanFor(e, t) {
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var r = e[n]
            if (r.marker == t) return r
          }
      }
      function removeMarkedSpan(e, t) {
        for (var n, r = 0; r < e.length; ++r)
          e[r] != t && (n || (n = [])).push(e[r])
        return n
      }
      function stretchSpansOverChange(e, t) {
        if (t.full) return null
        var n = isLine(e, t.from.line) && getLine(e, t.from.line).markedSpans,
          r = isLine(e, t.to.line) && getLine(e, t.to.line).markedSpans
        if (!n && !r) return null
        var o = t.from.ch,
          i = t.to.ch,
          a = 0 == cmp(t.from, t.to),
          s = (function markedSpansBefore(e, t, n) {
            var r
            if (e)
              for (var o = 0; o < e.length; ++o) {
                var i = e[o],
                  a = i.marker
                if (
                  null == i.from ||
                  (a.inclusiveLeft ? i.from <= t : i.from < t) ||
                  (i.from == t &&
                    'bookmark' == a.type &&
                    (!n || !i.marker.insertLeft))
                ) {
                  var s =
                    null == i.to || (a.inclusiveRight ? i.to >= t : i.to > t)
                  ;(r || (r = [])).push(
                    new MarkedSpan(a, i.from, s ? null : i.to)
                  )
                }
              }
            return r
          })(n, o, a),
          l = (function markedSpansAfter(e, t, n) {
            var r
            if (e)
              for (var o = 0; o < e.length; ++o) {
                var i = e[o],
                  a = i.marker
                if (
                  null == i.to ||
                  (a.inclusiveRight ? i.to >= t : i.to > t) ||
                  (i.from == t &&
                    'bookmark' == a.type &&
                    (!n || i.marker.insertLeft))
                ) {
                  var s =
                    null == i.from ||
                    (a.inclusiveLeft ? i.from <= t : i.from < t)
                  ;(r || (r = [])).push(
                    new MarkedSpan(
                      a,
                      s ? null : i.from - t,
                      null == i.to ? null : i.to - t
                    )
                  )
                }
              }
            return r
          })(r, i, a),
          c = 1 == t.text.length,
          u = lst(t.text).length + (c ? o : 0)
        if (s)
          for (var d = 0; d < s.length; ++d) {
            var p = s[d]
            if (null == p.to) {
              var h = getMarkedSpanFor(l, p.marker)
              h ? c && (p.to = null == h.to ? null : h.to + u) : (p.to = o)
            }
          }
        if (l)
          for (var f = 0; f < l.length; ++f) {
            var g = l[f]
            if ((null != g.to && (g.to += u), null == g.from))
              getMarkedSpanFor(s, g.marker) ||
                ((g.from = u), c && (s || (s = [])).push(g))
            else (g.from += u), c && (s || (s = [])).push(g)
          }
        s && (s = clearEmptySpans(s)), l && l != s && (l = clearEmptySpans(l))
        var m = [s]
        if (!c) {
          var v,
            y = t.text.length - 2
          if (y > 0 && s)
            for (var b = 0; b < s.length; ++b)
              null == s[b].to &&
                (v || (v = [])).push(new MarkedSpan(s[b].marker, null, null))
          for (var x = 0; x < y; ++x) m.push(v)
          m.push(l)
        }
        return m
      }
      function clearEmptySpans(e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t]
          null != n.from &&
            n.from == n.to &&
            !1 !== n.marker.clearWhenEmpty &&
            e.splice(t--, 1)
        }
        return e.length ? e : null
      }
      function detachMarkedSpans(e) {
        var t = e.markedSpans
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e)
          e.markedSpans = null
        }
      }
      function attachMarkedSpans(e, t) {
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e)
          e.markedSpans = t
        }
      }
      function extraLeft(e) {
        return e.inclusiveLeft ? -1 : 0
      }
      function extraRight(e) {
        return e.inclusiveRight ? 1 : 0
      }
      function compareCollapsedMarkers(e, t) {
        var n = e.lines.length - t.lines.length
        if (0 != n) return n
        var r = e.find(),
          o = t.find(),
          i = cmp(r.from, o.from) || extraLeft(e) - extraLeft(t)
        if (i) return -i
        var a = cmp(r.to, o.to) || extraRight(e) - extraRight(t)
        return a || t.id - e.id
      }
      function collapsedSpanAtSide(e, t) {
        var n,
          r = F && e.markedSpans
        if (r)
          for (var o = void 0, i = 0; i < r.length; ++i)
            (o = r[i]).marker.collapsed &&
              null == (t ? o.from : o.to) &&
              (!n || compareCollapsedMarkers(n, o.marker) < 0) &&
              (n = o.marker)
        return n
      }
      function collapsedSpanAtStart(e) {
        return collapsedSpanAtSide(e, !0)
      }
      function collapsedSpanAtEnd(e) {
        return collapsedSpanAtSide(e, !1)
      }
      function collapsedSpanAround(e, t) {
        var n,
          r = F && e.markedSpans
        if (r)
          for (var o = 0; o < r.length; ++o) {
            var i = r[o]
            i.marker.collapsed &&
              (null == i.from || i.from < t) &&
              (null == i.to || i.to > t) &&
              (!n || compareCollapsedMarkers(n, i.marker) < 0) &&
              (n = i.marker)
          }
        return n
      }
      function conflictingCollapsedRange(e, t, n, r, o) {
        var i = getLine(e, t),
          a = F && i.markedSpans
        if (a)
          for (var s = 0; s < a.length; ++s) {
            var l = a[s]
            if (l.marker.collapsed) {
              var c = l.marker.find(0),
                u = cmp(c.from, n) || extraLeft(l.marker) - extraLeft(o),
                d = cmp(c.to, r) || extraRight(l.marker) - extraRight(o)
              if (
                !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                ((u <= 0 &&
                  (l.marker.inclusiveRight && o.inclusiveLeft
                    ? cmp(c.to, n) >= 0
                    : cmp(c.to, n) > 0)) ||
                  (u >= 0 &&
                    (l.marker.inclusiveRight && o.inclusiveLeft
                      ? cmp(c.from, r) <= 0
                      : cmp(c.from, r) < 0)))
              )
                return !0
            }
          }
      }
      function visualLine(e) {
        for (var t; (t = collapsedSpanAtStart(e)); ) e = t.find(-1, !0).line
        return e
      }
      function visualLineNo(e, t) {
        var n = getLine(e, t),
          r = visualLine(n)
        return n == r ? t : lineNo(r)
      }
      function visualLineEndNo(e, t) {
        if (t > e.lastLine()) return t
        var n,
          r = getLine(e, t)
        if (!lineIsHidden(e, r)) return t
        for (; (n = collapsedSpanAtEnd(r)); ) r = n.find(1, !0).line
        return lineNo(r) + 1
      }
      function lineIsHidden(e, t) {
        var n = F && t.markedSpans
        if (n)
          for (var r = void 0, o = 0; o < n.length; ++o)
            if ((r = n[o]).marker.collapsed) {
              if (null == r.from) return !0
              if (
                !r.marker.widgetNode &&
                0 == r.from &&
                r.marker.inclusiveLeft &&
                lineIsHiddenInner(e, t, r)
              )
                return !0
            }
      }
      function lineIsHiddenInner(e, t, n) {
        if (null == n.to) {
          var r = n.marker.find(1, !0)
          return lineIsHiddenInner(
            e,
            r.line,
            getMarkedSpanFor(r.line.markedSpans, n.marker)
          )
        }
        if (n.marker.inclusiveRight && n.to == t.text.length) return !0
        for (var o = void 0, i = 0; i < t.markedSpans.length; ++i)
          if (
            (o = t.markedSpans[i]).marker.collapsed &&
            !o.marker.widgetNode &&
            o.from == n.to &&
            (null == o.to || o.to != n.from) &&
            (o.marker.inclusiveLeft || n.marker.inclusiveRight) &&
            lineIsHiddenInner(e, t, o)
          )
            return !0
      }
      function heightAtLine(e) {
        for (
          var t = 0, n = (e = visualLine(e)).parent, r = 0;
          r < n.lines.length;
          ++r
        ) {
          var o = n.lines[r]
          if (o == e) break
          t += o.height
        }
        for (var i = n.parent; i; i = (n = i).parent)
          for (var a = 0; a < i.children.length; ++a) {
            var s = i.children[a]
            if (s == n) break
            t += s.height
          }
        return t
      }
      function lineLength(e) {
        if (0 == e.height) return 0
        for (var t, n = e.text.length, r = e; (t = collapsedSpanAtStart(r)); ) {
          var o = t.find(0, !0)
          ;(r = o.from.line), (n += o.from.ch - o.to.ch)
        }
        for (r = e; (t = collapsedSpanAtEnd(r)); ) {
          var i = t.find(0, !0)
          ;(n -= r.text.length - i.from.ch),
            (n += (r = i.to.line).text.length - i.to.ch)
        }
        return n
      }
      function findMaxLine(e) {
        var t = e.display,
          n = e.doc
        ;(t.maxLine = getLine(n, n.first)),
          (t.maxLineLength = lineLength(t.maxLine)),
          (t.maxLineChanged = !0),
          n.iter(function(e) {
            var n = lineLength(e)
            n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e))
          })
      }
      var B = null
      function getBidiPartAt(e, t, n) {
        var r
        B = null
        for (var o = 0; o < e.length; ++o) {
          var i = e[o]
          if (i.from < t && i.to > t) return o
          i.to == t && (i.from != i.to && 'before' == n ? (r = o) : (B = o)),
            i.from == t && (i.from != i.to && 'before' != n ? (r = o) : (B = o))
        }
        return null != r ? r : B
      }
      var z = (function() {
        var e =
            'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
          t =
            'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'
        var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          r = /[stwN]/,
          o = /[LRr]/,
          i = /[Lb1n]/,
          a = /[1n]/
        function BidiSpan(e, t, n) {
          ;(this.level = e), (this.from = t), (this.to = n)
        }
        return function(s, l) {
          var c = 'ltr' == l ? 'L' : 'R'
          if (0 == s.length || ('ltr' == l && !n.test(s))) return !1
          for (var u, d = s.length, p = [], h = 0; h < d; ++h)
            p.push(
              (u = s.charCodeAt(h)) <= 247
                ? e.charAt(u)
                : 1424 <= u && u <= 1524
                  ? 'R'
                  : 1536 <= u && u <= 1785
                    ? t.charAt(u - 1536)
                    : 1774 <= u && u <= 2220
                      ? 'r'
                      : 8192 <= u && u <= 8203
                        ? 'w'
                        : 8204 == u
                          ? 'b'
                          : 'L'
            )
          for (var f = 0, g = c; f < d; ++f) {
            var m = p[f]
            'm' == m ? (p[f] = g) : (g = m)
          }
          for (var v = 0, y = c; v < d; ++v) {
            var b = p[v]
            '1' == b && 'r' == y
              ? (p[v] = 'n')
              : o.test(b) && ((y = b), 'r' == b && (p[v] = 'R'))
          }
          for (var x = 1, C = p[0]; x < d - 1; ++x) {
            var w = p[x]
            '+' == w && '1' == C && '1' == p[x + 1]
              ? (p[x] = '1')
              : ',' != w ||
                C != p[x + 1] ||
                ('1' != C && 'n' != C) ||
                (p[x] = C),
              (C = w)
          }
          for (var S = 0; S < d; ++S) {
            var k = p[S]
            if (',' == k) p[S] = 'N'
            else if ('%' == k) {
              var L = void 0
              for (L = S + 1; L < d && '%' == p[L]; ++L);
              for (
                var M =
                    (S && '!' == p[S - 1]) || (L < d && '1' == p[L])
                      ? '1'
                      : 'N',
                  T = S;
                T < L;
                ++T
              )
                p[T] = M
              S = L - 1
            }
          }
          for (var O = 0, P = c; O < d; ++O) {
            var A = p[O]
            'L' == P && '1' == A ? (p[O] = 'L') : o.test(A) && (P = A)
          }
          for (var N = 0; N < d; ++N)
            if (r.test(p[N])) {
              var D = void 0
              for (D = N + 1; D < d && r.test(p[D]); ++D);
              for (
                var H = 'L' == (N ? p[N - 1] : c),
                  W = H == ('L' == (D < d ? p[D] : c)) ? (H ? 'L' : 'R') : c,
                  E = N;
                E < D;
                ++E
              )
                p[E] = W
              N = D - 1
            }
          for (var I, F = [], B = 0; B < d; )
            if (i.test(p[B])) {
              var z = B
              for (++B; B < d && i.test(p[B]); ++B);
              F.push(new BidiSpan(0, z, B))
            } else {
              var R = B,
                V = F.length
              for (++B; B < d && 'L' != p[B]; ++B);
              for (var U = R; U < B; )
                if (a.test(p[U])) {
                  R < U && F.splice(V, 0, new BidiSpan(1, R, U))
                  var j = U
                  for (++U; U < B && a.test(p[U]); ++U);
                  F.splice(V, 0, new BidiSpan(2, j, U)), (R = U)
                } else ++U
              R < B && F.splice(V, 0, new BidiSpan(1, R, B))
            }
          return (
            'ltr' == l &&
              (1 == F[0].level &&
                (I = s.match(/^\s+/)) &&
                ((F[0].from = I[0].length),
                F.unshift(new BidiSpan(0, 0, I[0].length))),
              1 == lst(F).level &&
                (I = s.match(/\s+$/)) &&
                ((lst(F).to -= I[0].length),
                F.push(new BidiSpan(0, d - I[0].length, d)))),
            'rtl' == l ? F.reverse() : F
          )
        }
      })()
      function getOrder(e, t) {
        var n = e.order
        return null == n && (n = e.order = z(e.text, t)), n
      }
      var R = [],
        V = function(e, t, n) {
          if (e.addEventListener) e.addEventListener(t, n, !1)
          else if (e.attachEvent) e.attachEvent('on' + t, n)
          else {
            var r = e._handlers || (e._handlers = {})
            r[t] = (r[t] || R).concat(n)
          }
        }
      function getHandlers(e, t) {
        return (e._handlers && e._handlers[t]) || R
      }
      function off(e, t, n) {
        if (e.removeEventListener) e.removeEventListener(t, n, !1)
        else if (e.detachEvent) e.detachEvent('on' + t, n)
        else {
          var r = e._handlers,
            o = r && r[t]
          if (o) {
            var i = indexOf(o, n)
            i > -1 && (r[t] = o.slice(0, i).concat(o.slice(i + 1)))
          }
        }
      }
      function signal(e, t) {
        var n = getHandlers(e, t)
        if (n.length)
          for (
            var r = Array.prototype.slice.call(arguments, 2), o = 0;
            o < n.length;
            ++o
          )
            n[o].apply(null, r)
      }
      function signalDOMEvent(e, t, n) {
        return (
          'string' == typeof t &&
            (t = {
              type: t,
              preventDefault: function() {
                this.defaultPrevented = !0
              }
            }),
          signal(e, n || t.type, e, t),
          e_defaultPrevented(t) || t.codemirrorIgnore
        )
      }
      function signalCursorActivity(e) {
        var t = e._handlers && e._handlers.cursorActivity
        if (t)
          for (
            var n =
                e.curOp.cursorActivityHandlers ||
                (e.curOp.cursorActivityHandlers = []),
              r = 0;
            r < t.length;
            ++r
          )
            -1 == indexOf(n, t[r]) && n.push(t[r])
      }
      function hasHandler(e, t) {
        return getHandlers(e, t).length > 0
      }
      function eventMixin(e) {
        ;(e.prototype.on = function(e, t) {
          V(this, e, t)
        }),
          (e.prototype.off = function(e, t) {
            off(this, e, t)
          })
      }
      function e_preventDefault(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
      }
      function e_stopPropagation(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
      }
      function e_defaultPrevented(e) {
        return null != e.defaultPrevented
          ? e.defaultPrevented
          : 0 == e.returnValue
      }
      function e_stop(e) {
        e_preventDefault(e), e_stopPropagation(e)
      }
      function e_target(e) {
        return e.target || e.srcElement
      }
      function e_button(e) {
        var t = e.which
        return (
          null == t &&
            (1 & e.button
              ? (t = 1)
              : 2 & e.button
                ? (t = 3)
                : 4 & e.button && (t = 2)),
          y && e.ctrlKey && 1 == t && (t = 3),
          t
        )
      }
      var U,
        j,
        _ = (function() {
          if (a && s < 9) return !1
          var e = elt('div')
          return 'draggable' in e || 'dragDrop' in e
        })()
      function zeroWidthElement(e) {
        if (null == U) {
          var t = elt('span', '​')
          removeChildrenAndAdd(
            e,
            elt('span', [t, document.createTextNode('x')])
          ),
            0 != e.firstChild.offsetHeight &&
              (U = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && s < 8))
        }
        var n = U
          ? elt('span', '​')
          : elt(
              'span',
              ' ',
              null,
              'display: inline-block; width: 1px; margin-right: -1px'
            )
        return n.setAttribute('cm-text', ''), n
      }
      function hasBadBidiRects(e) {
        if (null != j) return j
        var t = removeChildrenAndAdd(e, document.createTextNode('AخA')),
          n = k(t, 0, 1).getBoundingClientRect(),
          r = k(t, 1, 2).getBoundingClientRect()
        return (
          removeChildren(e),
          !(!n || n.left == n.right) && (j = r.right - n.right < 3)
        )
      }
      var G,
        K =
          3 != '\n\nb'.split(/\n/).length
            ? function(e) {
                for (var t = 0, n = [], r = e.length; t <= r; ) {
                  var o = e.indexOf('\n', t)
                  ;-1 == o && (o = e.length)
                  var i = e.slice(t, '\r' == e.charAt(o - 1) ? o - 1 : o),
                    a = i.indexOf('\r')
                  ;-1 != a
                    ? (n.push(i.slice(0, a)), (t += a + 1))
                    : (n.push(i), (t = o + 1))
                }
                return n
              }
            : function(e) {
                return e.split(/\r\n?|\n/)
              },
        q = window.getSelection
          ? function(e) {
              try {
                return e.selectionStart != e.selectionEnd
              } catch (e) {
                return !1
              }
            }
          : function(e) {
              var t
              try {
                t = e.ownerDocument.selection.createRange()
              } catch (e) {}
              return (
                !(!t || t.parentElement() != e) &&
                0 != t.compareEndPoints('StartToEnd', t)
              )
            },
        X =
          'oncopy' in (G = elt('div')) ||
          (G.setAttribute('oncopy', 'return;'), 'function' == typeof G.oncopy),
        $ = null
      var Y = {},
        Z = {}
      function resolveMode(e) {
        if ('string' == typeof e && Z.hasOwnProperty(e)) e = Z[e]
        else if (e && 'string' == typeof e.name && Z.hasOwnProperty(e.name)) {
          var t = Z[e.name]
          'string' == typeof t && (t = {name: t}),
            ((e = createObj(t, e)).name = t.name)
        } else {
          if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return resolveMode('application/xml')
          if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return resolveMode('application/json')
        }
        return 'string' == typeof e ? {name: e} : e || {name: 'null'}
      }
      function getMode(e, t) {
        t = resolveMode(t)
        var n = Y[t.name]
        if (!n) return getMode(e, 'text/plain')
        var r = n(e, t)
        if (Q.hasOwnProperty(t.name)) {
          var o = Q[t.name]
          for (var i in o)
            o.hasOwnProperty(i) &&
              (r.hasOwnProperty(i) && (r['_' + i] = r[i]), (r[i] = o[i]))
        }
        if (
          ((r.name = t.name),
          t.helperType && (r.helperType = t.helperType),
          t.modeProps)
        )
          for (var a in t.modeProps) r[a] = t.modeProps[a]
        return r
      }
      var Q = {}
      function extendMode(e, t) {
        copyObj(t, Q.hasOwnProperty(e) ? Q[e] : (Q[e] = {}))
      }
      function copyState(e, t) {
        if (!0 === t) return t
        if (e.copyState) return e.copyState(t)
        var n = {}
        for (var r in t) {
          var o = t[r]
          o instanceof Array && (o = o.concat([])), (n[r] = o)
        }
        return n
      }
      function innerMode(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
          (t = n.state), (e = n.mode)
        return n || {mode: e, state: t}
      }
      function startState(e, t, n) {
        return !e.startState || e.startState(t, n)
      }
      var J = function(e, t, n) {
        ;(this.pos = this.start = 0),
          (this.string = e),
          (this.tabSize = t || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0),
          (this.lineOracle = n)
      }
      ;(J.prototype.eol = function() {
        return this.pos >= this.string.length
      }),
        (J.prototype.sol = function() {
          return this.pos == this.lineStart
        }),
        (J.prototype.peek = function() {
          return this.string.charAt(this.pos) || void 0
        }),
        (J.prototype.next = function() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++)
        }),
        (J.prototype.eat = function(e) {
          var t = this.string.charAt(this.pos)
          if ('string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos, t
        }),
        (J.prototype.eatWhile = function(e) {
          for (var t = this.pos; this.eat(e); );
          return this.pos > t
        }),
        (J.prototype.eatSpace = function() {
          for (
            var e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos
          return this.pos > e
        }),
        (J.prototype.skipToEnd = function() {
          this.pos = this.string.length
        }),
        (J.prototype.skipTo = function(e) {
          var t = this.string.indexOf(e, this.pos)
          if (t > -1) return (this.pos = t), !0
        }),
        (J.prototype.backUp = function(e) {
          this.pos -= e
        }),
        (J.prototype.column = function() {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = countColumn(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? countColumn(this.string, this.lineStart, this.tabSize)
                : 0)
          )
        }),
        (J.prototype.indentation = function() {
          return (
            countColumn(this.string, null, this.tabSize) -
            (this.lineStart
              ? countColumn(this.string, this.lineStart, this.tabSize)
              : 0)
          )
        }),
        (J.prototype.match = function(e, t, n) {
          if ('string' != typeof e) {
            var r = this.string.slice(this.pos).match(e)
            return r && r.index > 0
              ? null
              : (r && !1 !== t && (this.pos += r[0].length), r)
          }
          var o = function(e) {
            return n ? e.toLowerCase() : e
          }
          if (o(this.string.substr(this.pos, e.length)) == o(e))
            return !1 !== t && (this.pos += e.length), !0
        }),
        (J.prototype.current = function() {
          return this.string.slice(this.start, this.pos)
        }),
        (J.prototype.hideFirstChars = function(e, t) {
          this.lineStart += e
          try {
            return t()
          } finally {
            this.lineStart -= e
          }
        }),
        (J.prototype.lookAhead = function(e) {
          var t = this.lineOracle
          return t && t.lookAhead(e)
        }),
        (J.prototype.baseToken = function() {
          var e = this.lineOracle
          return e && e.baseToken(this.pos)
        })
      var ee = function(e, t) {
          ;(this.state = e), (this.lookAhead = t)
        },
        te = function(e, t, n, r) {
          ;(this.state = t),
            (this.doc = e),
            (this.line = n),
            (this.maxLookAhead = r || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1)
        }
      function highlightLine(e, t, n, r) {
        var o = [e.state.modeGen],
          i = {}
        runMode(
          e,
          t.text,
          e.doc.mode,
          n,
          function(e, t) {
            return o.push(e, t)
          },
          i,
          r
        )
        for (
          var a = n.state,
            s = function(r) {
              n.baseTokens = o
              var s = e.state.overlays[r],
                l = 1,
                c = 0
              ;(n.state = !0),
                runMode(
                  e,
                  t.text,
                  s.mode,
                  n,
                  function(e, t) {
                    for (var n = l; c < e; ) {
                      var r = o[l]
                      r > e && o.splice(l, 1, e, o[l + 1], r),
                        (l += 2),
                        (c = Math.min(e, r))
                    }
                    if (t)
                      if (s.opaque)
                        o.splice(n, l - n, e, 'overlay ' + t), (l = n + 2)
                      else
                        for (; n < l; n += 2) {
                          var i = o[n + 1]
                          o[n + 1] = (i ? i + ' ' : '') + 'overlay ' + t
                        }
                  },
                  i
                ),
                (n.state = a),
                (n.baseTokens = null),
                (n.baseTokenPos = 1)
            },
            l = 0;
          l < e.state.overlays.length;
          ++l
        )
          s(l)
        return {styles: o, classes: i.bgClass || i.textClass ? i : null}
      }
      function getLineStyles(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = getContextBefore(e, lineNo(t)),
            o =
              t.text.length > e.options.maxHighlightLength &&
              copyState(e.doc.mode, r.state),
            i = highlightLine(e, t, r)
          o && (r.state = o),
            (t.stateAfter = r.save(!o)),
            (t.styles = i.styles),
            i.classes
              ? (t.styleClasses = i.classes)
              : t.styleClasses && (t.styleClasses = null),
            n === e.doc.highlightFrontier &&
              (e.doc.modeFrontier = Math.max(
                e.doc.modeFrontier,
                ++e.doc.highlightFrontier
              ))
        }
        return t.styles
      }
      function getContextBefore(e, t, n) {
        var r = e.doc,
          o = e.display
        if (!r.mode.startState) return new te(r, !0, t)
        var i = (function findStartLine(e, t, n) {
            for (
              var r,
                o,
                i = e.doc,
                a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                s = t;
              s > a;
              --s
            ) {
              if (s <= i.first) return i.first
              var l = getLine(i, s - 1),
                c = l.stateAfter
              if (
                c &&
                (!n ||
                  s + (c instanceof ee ? c.lookAhead : 0) <= i.modeFrontier)
              )
                return s
              var u = countColumn(l.text, null, e.options.tabSize)
              ;(null == o || r > u) && ((o = s - 1), (r = u))
            }
            return o
          })(e, t, n),
          a = i > r.first && getLine(r, i - 1).stateAfter,
          s = a ? te.fromSaved(r, a, i) : new te(r, startState(r.mode), i)
        return (
          r.iter(i, t, function(n) {
            processLine(e, n.text, s)
            var r = s.line
            ;(n.stateAfter =
              r == t - 1 || r % 5 == 0 || (r >= o.viewFrom && r < o.viewTo)
                ? s.save()
                : null),
              s.nextLine()
          }),
          n && (r.modeFrontier = s.line),
          s
        )
      }
      function processLine(e, t, n, r) {
        var o = e.doc.mode,
          i = new J(t, e.options.tabSize, n)
        for (
          i.start = i.pos = r || 0, '' == t && callBlankLine(o, n.state);
          !i.eol();

        )
          readToken(o, i, n.state), (i.start = i.pos)
      }
      function callBlankLine(e, t) {
        if (e.blankLine) return e.blankLine(t)
        if (e.innerMode) {
          var n = innerMode(e, t)
          return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
        }
      }
      function readToken(e, t, n, r) {
        for (var o = 0; o < 10; o++) {
          r && (r[0] = innerMode(e, n).mode)
          var i = e.token(t, n)
          if (t.pos > t.start) return i
        }
        throw new Error('Mode ' + e.name + ' failed to advance stream.')
      }
      ;(te.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e)
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
      }),
        (te.prototype.baseToken = function(e) {
          if (!this.baseTokens) return null
          for (; this.baseTokens[this.baseTokenPos] <= e; )
            this.baseTokenPos += 2
          var t = this.baseTokens[this.baseTokenPos + 1]
          return {
            type: t && t.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - e
          }
        }),
        (te.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
        }),
        (te.fromSaved = function(e, t, n) {
          return t instanceof ee
            ? new te(e, copyState(e.mode, t.state), n, t.lookAhead)
            : new te(e, copyState(e.mode, t), n)
        }),
        (te.prototype.save = function(e) {
          var t = !1 !== e ? copyState(this.doc.mode, this.state) : this.state
          return this.maxLookAhead > 0 ? new ee(t, this.maxLookAhead) : t
        })
      var ne = function(e, t, n) {
        ;(this.start = e.start),
          (this.end = e.pos),
          (this.string = e.current()),
          (this.type = t || null),
          (this.state = n)
      }
      function takeToken(e, t, n, r) {
        var o,
          i,
          a = e.doc,
          s = a.mode,
          l = getLine(a, (t = clipPos(a, t)).line),
          c = getContextBefore(e, t.line, n),
          u = new J(l.text, e.options.tabSize, c)
        for (r && (i = []); (r || u.pos < t.ch) && !u.eol(); )
          (u.start = u.pos),
            (o = readToken(s, u, c.state)),
            r && i.push(new ne(u, o, copyState(a.mode, c.state)))
        return r ? i : new ne(u, o, c.state)
      }
      function extractLineClasses(e, t) {
        if (e)
          for (;;) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/)
            if (!n) break
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length)
            var r = n[1] ? 'bgClass' : 'textClass'
            null == t[r]
              ? (t[r] = n[2])
              : new RegExp('(?:^|s)' + n[2] + '(?:$|s)').test(t[r]) ||
                (t[r] += ' ' + n[2])
          }
        return e
      }
      function runMode(e, t, n, r, o, i, a) {
        var s = n.flattenSpans
        null == s && (s = e.options.flattenSpans)
        var l,
          c = 0,
          u = null,
          d = new J(t, e.options.tabSize, r),
          p = e.options.addModeClass && [null]
        for (
          '' == t && extractLineClasses(callBlankLine(n, r.state), i);
          !d.eol();

        ) {
          if (
            (d.pos > e.options.maxHighlightLength
              ? ((s = !1),
                a && processLine(e, t, r, d.pos),
                (d.pos = t.length),
                (l = null))
              : (l = extractLineClasses(readToken(n, d, r.state, p), i)),
            p)
          ) {
            var h = p[0].name
            h && (l = 'm-' + (l ? h + ' ' + l : h))
          }
          if (!s || u != l) {
            for (; c < d.start; ) o((c = Math.min(d.start, c + 5e3)), u)
            u = l
          }
          d.start = d.pos
        }
        for (; c < d.pos; ) {
          var f = Math.min(d.pos, c + 5e3)
          o(f, u), (c = f)
        }
      }
      var re = function(e, t, n) {
        ;(this.text = e),
          attachMarkedSpans(this, t),
          (this.height = n ? n(this) : 1)
      }
      function cleanUpLine(e) {
        ;(e.parent = null), detachMarkedSpans(e)
      }
      ;(re.prototype.lineNo = function() {
        return lineNo(this)
      }),
        eventMixin(re)
      var oe = {},
        ie = {}
      function interpretTokenStyle(e, t) {
        if (!e || /^\s*$/.test(e)) return null
        var n = t.addModeClass ? ie : oe
        return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'))
      }
      function buildLineContent(e, t) {
        var n = eltP('span', null, null, l ? 'padding-right: .1px' : null),
          r = {
            pre: eltP('pre', [n], 'CodeMirror-line'),
            content: n,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: e.getOption('lineWrapping')
          }
        t.measure = {}
        for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
          var i = o ? t.rest[o - 1] : t.line,
            a = void 0
          ;(r.pos = 0),
            (r.addToken = buildToken),
            hasBadBidiRects(e.display.measure) &&
              (a = getOrder(i, e.doc.direction)) &&
              (r.addToken = buildTokenBadBidi(r.addToken, a)),
            (r.map = []),
            insertLineContent(
              i,
              r,
              getLineStyles(e, i, t != e.display.externalMeasured && lineNo(i))
            ),
            i.styleClasses &&
              (i.styleClasses.bgClass &&
                (r.bgClass = joinClasses(
                  i.styleClasses.bgClass,
                  r.bgClass || ''
                )),
              i.styleClasses.textClass &&
                (r.textClass = joinClasses(
                  i.styleClasses.textClass,
                  r.textClass || ''
                ))),
            0 == r.map.length &&
              r.map.push(
                0,
                0,
                r.content.appendChild(zeroWidthElement(e.display.measure))
              ),
            0 == o
              ? ((t.measure.map = r.map), (t.measure.cache = {}))
              : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                (t.measure.caches || (t.measure.caches = [])).push({}))
        }
        if (l) {
          var s = r.content.lastChild
          ;(/\bcm-tab\b/.test(s.className) ||
            (s.querySelector && s.querySelector('.cm-tab'))) &&
            (r.content.className = 'cm-tab-wrap-hack')
        }
        return (
          signal(e, 'renderLine', e, t.line, r.pre),
          r.pre.className &&
            (r.textClass = joinClasses(r.pre.className, r.textClass || '')),
          r
        )
      }
      function defaultSpecialCharPlaceholder(e) {
        var t = elt('span', '•', 'cm-invalidchar')
        return (
          (t.title = '\\u' + e.charCodeAt(0).toString(16)),
          t.setAttribute('aria-label', t.title),
          t
        )
      }
      function buildToken(e, t, n, r, o, i, l) {
        if (t) {
          var c,
            u = e.splitSpaces
              ? (function splitSpaces(e, t) {
                  if (e.length > 1 && !/  /.test(e)) return e
                  for (var n = t, r = '', o = 0; o < e.length; o++) {
                    var i = e.charAt(o)
                    ' ' != i ||
                      !n ||
                      (o != e.length - 1 && 32 != e.charCodeAt(o + 1)) ||
                      (i = ' '),
                      (r += i),
                      (n = ' ' == i)
                  }
                  return r
                })(t, e.trailingSpace)
              : t,
            d = e.cm.state.specialChars,
            p = !1
          if (d.test(t)) {
            c = document.createDocumentFragment()
            for (var h = 0; ; ) {
              d.lastIndex = h
              var f = d.exec(t),
                g = f ? f.index - h : t.length - h
              if (g) {
                var m = document.createTextNode(u.slice(h, h + g))
                a && s < 9 ? c.appendChild(elt('span', [m])) : c.appendChild(m),
                  e.map.push(e.pos, e.pos + g, m),
                  (e.col += g),
                  (e.pos += g)
              }
              if (!f) break
              h += g + 1
              var v = void 0
              if ('\t' == f[0]) {
                var y = e.cm.options.tabSize,
                  b = y - e.col % y
                ;(v = c.appendChild(
                  elt('span', spaceStr(b), 'cm-tab')
                )).setAttribute('role', 'presentation'),
                  v.setAttribute('cm-text', '\t'),
                  (e.col += b)
              } else
                '\r' == f[0] || '\n' == f[0]
                  ? ((v = c.appendChild(
                      elt('span', '\r' == f[0] ? '␍' : '␤', 'cm-invalidchar')
                    )).setAttribute('cm-text', f[0]),
                    (e.col += 1))
                  : ((v = e.cm.options.specialCharPlaceholder(
                      f[0]
                    )).setAttribute('cm-text', f[0]),
                    a && s < 9
                      ? c.appendChild(elt('span', [v]))
                      : c.appendChild(v),
                    (e.col += 1))
              e.map.push(e.pos, e.pos + 1, v), e.pos++
            }
          } else
            (e.col += t.length),
              (c = document.createTextNode(u)),
              e.map.push(e.pos, e.pos + t.length, c),
              a && s < 9 && (p = !0),
              (e.pos += t.length)
          if (
            ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
            n || r || o || p || i)
          ) {
            var x = n || ''
            r && (x += r), o && (x += o)
            var C = elt('span', [c], x, i)
            if (l)
              for (var w in l)
                l.hasOwnProperty(w) &&
                  'style' != w &&
                  'class' != w &&
                  C.setAttribute(w, l[w])
            return e.content.appendChild(C)
          }
          e.content.appendChild(c)
        }
      }
      function buildTokenBadBidi(e, t) {
        return function(n, r, o, i, a, s, l) {
          o = o ? o + ' cm-force-border' : 'cm-force-border'
          for (var c = n.pos, u = c + r.length; ; ) {
            for (
              var d = void 0, p = 0;
              p < t.length && !((d = t[p]).to > c && d.from <= c);
              p++
            );
            if (d.to >= u) return e(n, r, o, i, a, s, l)
            e(n, r.slice(0, d.to - c), o, i, null, s, l),
              (i = null),
              (r = r.slice(d.to - c)),
              (c = d.to)
          }
        }
      }
      function buildCollapsedSpan(e, t, n, r) {
        var o = !r && n.widgetNode
        o && e.map.push(e.pos, e.pos + t, o),
          !r &&
            e.cm.display.input.needsContentAttribute &&
            (o || (o = e.content.appendChild(document.createElement('span'))),
            o.setAttribute('cm-marker', n.id)),
          o && (e.cm.display.input.setUneditable(o), e.content.appendChild(o)),
          (e.pos += t),
          (e.trailingSpace = !1)
      }
      function insertLineContent(e, t, n) {
        var r = e.markedSpans,
          o = e.text,
          i = 0
        if (r)
          for (
            var a, s, l, c, u, d, p, h = o.length, f = 0, g = 1, m = '', v = 0;
            ;

          ) {
            if (v == f) {
              ;(l = c = u = s = ''), (p = null), (d = null), (v = 1 / 0)
              for (var y = [], b = void 0, x = 0; x < r.length; ++x) {
                var C = r[x],
                  w = C.marker
                if ('bookmark' == w.type && C.from == f && w.widgetNode)
                  y.push(w)
                else if (
                  C.from <= f &&
                  (null == C.to ||
                    C.to > f ||
                    (w.collapsed && C.to == f && C.from == f))
                ) {
                  if (
                    (null != C.to &&
                      C.to != f &&
                      v > C.to &&
                      ((v = C.to), (c = '')),
                    w.className && (l += ' ' + w.className),
                    w.css && (s = (s ? s + ';' : '') + w.css),
                    w.startStyle && C.from == f && (u += ' ' + w.startStyle),
                    w.endStyle &&
                      C.to == v &&
                      (b || (b = [])).push(w.endStyle, C.to),
                    w.title && ((p || (p = {})).title = w.title),
                    w.attributes)
                  )
                    for (var S in w.attributes)
                      (p || (p = {}))[S] = w.attributes[S]
                  w.collapsed &&
                    (!d || compareCollapsedMarkers(d.marker, w) < 0) &&
                    (d = C)
                } else C.from > f && v > C.from && (v = C.from)
              }
              if (b)
                for (var k = 0; k < b.length; k += 2)
                  b[k + 1] == v && (c += ' ' + b[k])
              if (!d || d.from == f)
                for (var L = 0; L < y.length; ++L)
                  buildCollapsedSpan(t, 0, y[L])
              if (d && (d.from || 0) == f) {
                if (
                  (buildCollapsedSpan(
                    t,
                    (null == d.to ? h + 1 : d.to) - f,
                    d.marker,
                    null == d.from
                  ),
                  null == d.to)
                )
                  return
                d.to == f && (d = !1)
              }
            }
            if (f >= h) break
            for (var M = Math.min(h, v); ; ) {
              if (m) {
                var T = f + m.length
                if (!d) {
                  var O = T > M ? m.slice(0, M - f) : m
                  t.addToken(
                    t,
                    O,
                    a ? a + l : l,
                    u,
                    f + O.length == v ? c : '',
                    s,
                    p
                  )
                }
                if (T >= M) {
                  ;(m = m.slice(M - f)), (f = M)
                  break
                }
                ;(f = T), (u = '')
              }
              ;(m = o.slice(i, (i = n[g++]))),
                (a = interpretTokenStyle(n[g++], t.cm.options))
            }
          }
        else
          for (var P = 1; P < n.length; P += 2)
            t.addToken(
              t,
              o.slice(i, (i = n[P])),
              interpretTokenStyle(n[P + 1], t.cm.options)
            )
      }
      function LineView(e, t, n) {
        ;(this.line = t),
          (this.rest = (function visualLineContinued(e) {
            for (var t, n; (t = collapsedSpanAtEnd(e)); )
              (e = t.find(1, !0).line), (n || (n = [])).push(e)
            return n
          })(t)),
          (this.size = this.rest ? lineNo(lst(this.rest)) - n + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = lineIsHidden(e, t))
      }
      function buildViewArray(e, t, n) {
        for (var r, o = [], i = t; i < n; i = r) {
          var a = new LineView(e.doc, getLine(e.doc, i), i)
          ;(r = i + a.size), o.push(a)
        }
        return o
      }
      var ae = null
      var se = null
      function signalLater(e, t) {
        var n = getHandlers(e, t)
        if (n.length) {
          var r,
            o = Array.prototype.slice.call(arguments, 2)
          ae
            ? (r = ae.delayedCallbacks)
            : se
              ? (r = se)
              : ((r = se = []), setTimeout(fireOrphanDelayed, 0))
          for (
            var i = function(e) {
                r.push(function() {
                  return n[e].apply(null, o)
                })
              },
              a = 0;
            a < n.length;
            ++a
          )
            i(a)
        }
      }
      function fireOrphanDelayed() {
        var e = se
        se = null
        for (var t = 0; t < e.length; ++t) e[t]()
      }
      function updateLineForChanges(e, t, n, r) {
        for (var o = 0; o < t.changes.length; o++) {
          var i = t.changes[o]
          'text' == i
            ? updateLineText(e, t)
            : 'gutter' == i
              ? updateLineGutter(e, t, n, r)
              : 'class' == i
                ? updateLineClasses(e, t)
                : 'widget' == i && updateLineWidgets(e, t, r)
        }
        t.changes = null
      }
      function ensureLineWrapped(e) {
        return (
          e.node == e.text &&
            ((e.node = elt('div', null, null, 'position: relative')),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            a && s < 8 && (e.node.style.zIndex = 2)),
          e.node
        )
      }
      function getLineContent(e, t) {
        var n = e.display.externalMeasured
        return n && n.line == t.line
          ? ((e.display.externalMeasured = null),
            (t.measure = n.measure),
            n.built)
          : buildLineContent(e, t)
      }
      function updateLineText(e, t) {
        var n = t.text.className,
          r = getLineContent(e, t)
        t.text == t.node && (t.node = r.pre),
          t.text.parentNode.replaceChild(r.pre, t.text),
          (t.text = r.pre),
          r.bgClass != t.bgClass || r.textClass != t.textClass
            ? ((t.bgClass = r.bgClass),
              (t.textClass = r.textClass),
              updateLineClasses(e, t))
            : n && (t.text.className = n)
      }
      function updateLineClasses(e, t) {
        !(function updateLineBackground(e, t) {
          var n = t.bgClass
            ? t.bgClass + ' ' + (t.line.bgClass || '')
            : t.line.bgClass
          if ((n && (n += ' CodeMirror-linebackground'), t.background))
            n
              ? (t.background.className = n)
              : (t.background.parentNode.removeChild(t.background),
                (t.background = null))
          else if (n) {
            var r = ensureLineWrapped(t)
            ;(t.background = r.insertBefore(elt('div', null, n), r.firstChild)),
              e.display.input.setUneditable(t.background)
          }
        })(e, t),
          t.line.wrapClass
            ? (ensureLineWrapped(t).className = t.line.wrapClass)
            : t.node != t.text && (t.node.className = '')
        var n = t.textClass
          ? t.textClass + ' ' + (t.line.textClass || '')
          : t.line.textClass
        t.text.className = n || ''
      }
      function updateLineGutter(e, t, n, r) {
        if (
          (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
          t.gutterBackground &&
            (t.node.removeChild(t.gutterBackground),
            (t.gutterBackground = null)),
          t.line.gutterClass)
        ) {
          var o = ensureLineWrapped(t)
          ;(t.gutterBackground = elt(
            'div',
            null,
            'CodeMirror-gutter-background ' + t.line.gutterClass,
            'left: ' +
              (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
              'px; width: ' +
              r.gutterTotalWidth +
              'px'
          )),
            e.display.input.setUneditable(t.gutterBackground),
            o.insertBefore(t.gutterBackground, t.text)
        }
        var i = t.line.gutterMarkers
        if (e.options.lineNumbers || i) {
          var a = ensureLineWrapped(t),
            s = (t.gutter = elt(
              'div',
              null,
              'CodeMirror-gutter-wrapper',
              'left: ' +
                (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                'px'
            ))
          if (
            (e.display.input.setUneditable(s),
            a.insertBefore(s, t.text),
            t.line.gutterClass && (s.className += ' ' + t.line.gutterClass),
            !e.options.lineNumbers ||
              (i && i['CodeMirror-linenumbers']) ||
              (t.lineNumber = s.appendChild(
                elt(
                  'div',
                  lineNumberFor(e.options, n),
                  'CodeMirror-linenumber CodeMirror-gutter-elt',
                  'left: ' +
                    r.gutterLeft['CodeMirror-linenumbers'] +
                    'px; width: ' +
                    e.display.lineNumInnerWidth +
                    'px'
                )
              )),
            i)
          )
            for (var l = 0; l < e.options.gutters.length; ++l) {
              var c = e.options.gutters[l],
                u = i.hasOwnProperty(c) && i[c]
              u &&
                s.appendChild(
                  elt(
                    'div',
                    [u],
                    'CodeMirror-gutter-elt',
                    'left: ' +
                      r.gutterLeft[c] +
                      'px; width: ' +
                      r.gutterWidth[c] +
                      'px'
                  )
                )
            }
        }
      }
      function updateLineWidgets(e, t, n) {
        t.alignable && (t.alignable = null)
        for (var r = t.node.firstChild, o = void 0; r; r = o)
          (o = r.nextSibling),
            'CodeMirror-linewidget' == r.className && t.node.removeChild(r)
        insertLineWidgets(e, t, n)
      }
      function buildLineElement(e, t, n, r) {
        var o = getLineContent(e, t)
        return (
          (t.text = t.node = o.pre),
          o.bgClass && (t.bgClass = o.bgClass),
          o.textClass && (t.textClass = o.textClass),
          updateLineClasses(e, t),
          updateLineGutter(e, t, n, r),
          insertLineWidgets(e, t, r),
          t.node
        )
      }
      function insertLineWidgets(e, t, n) {
        if ((insertLineWidgetsFor(e, t.line, t, n, !0), t.rest))
          for (var r = 0; r < t.rest.length; r++)
            insertLineWidgetsFor(e, t.rest[r], t, n, !1)
      }
      function insertLineWidgetsFor(e, t, n, r, o) {
        if (t.widgets)
          for (
            var i = ensureLineWrapped(n), a = 0, s = t.widgets;
            a < s.length;
            ++a
          ) {
            var l = s[a],
              c = elt('div', [l.node], 'CodeMirror-linewidget')
            l.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
              positionLineWidget(l, c, n, r),
              e.display.input.setUneditable(c),
              o && l.above
                ? i.insertBefore(c, n.gutter || n.text)
                : i.appendChild(c),
              signalLater(l, 'redraw')
          }
      }
      function positionLineWidget(e, t, n, r) {
        if (e.noHScroll) {
          ;(n.alignable || (n.alignable = [])).push(t)
          var o = r.wrapperWidth
          ;(t.style.left = r.fixedPos + 'px'),
            e.coverGutter ||
              ((o -= r.gutterTotalWidth),
              (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
            (t.style.width = o + 'px')
        }
        e.coverGutter &&
          ((t.style.zIndex = 5),
          (t.style.position = 'relative'),
          e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'))
      }
      function widgetHeight(e) {
        if (null != e.height) return e.height
        var t = e.doc.cm
        if (!t) return 0
        if (!contains(document.body, e.node)) {
          var n = 'position: relative;'
          e.coverGutter &&
            (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
            e.noHScroll &&
              (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
            removeChildrenAndAdd(
              t.display.measure,
              elt('div', [e.node], null, n)
            )
        }
        return (e.height = e.node.parentNode.offsetHeight)
      }
      function eventInWidget(e, t) {
        for (var n = e_target(t); n != e.wrapper; n = n.parentNode)
          if (
            !n ||
            (1 == n.nodeType && 'true' == n.getAttribute('cm-ignore-events')) ||
            (n.parentNode == e.sizer && n != e.mover)
          )
            return !0
      }
      function paddingTop(e) {
        return e.lineSpace.offsetTop
      }
      function paddingVert(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
      }
      function paddingH(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH
        var t = removeChildrenAndAdd(e.measure, elt('pre', 'x')),
          n = window.getComputedStyle
            ? window.getComputedStyle(t)
            : t.currentStyle,
          r = {left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight)}
        return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r
      }
      function scrollGap(e) {
        return O - e.display.nativeBarWidth
      }
      function displayWidth(e) {
        return (
          e.display.scroller.clientWidth - scrollGap(e) - e.display.barWidth
        )
      }
      function displayHeight(e) {
        return (
          e.display.scroller.clientHeight - scrollGap(e) - e.display.barHeight
        )
      }
      function mapFromLineView(e, t, n) {
        if (e.line == t) return {map: e.measure.map, cache: e.measure.cache}
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return {map: e.measure.maps[r], cache: e.measure.caches[r]}
        for (var o = 0; o < e.rest.length; o++)
          if (lineNo(e.rest[o]) > n)
            return {
              map: e.measure.maps[o],
              cache: e.measure.caches[o],
              before: !0
            }
      }
      function measureChar(e, t, n, r) {
        return measureCharPrepared(e, prepareMeasureForLine(e, t), n, r)
      }
      function findViewForLine(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[findViewIndex(e, t)]
        var n = e.display.externalMeasured
        return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
      }
      function prepareMeasureForLine(e, t) {
        var n = lineNo(t),
          r = findViewForLine(e, n)
        r && !r.text
          ? (r = null)
          : r &&
            r.changes &&
            (updateLineForChanges(e, r, n, getDimensions(e)),
            (e.curOp.forceUpdate = !0)),
          r ||
            (r = (function updateExternalMeasurement(e, t) {
              var n = lineNo((t = visualLine(t))),
                r = (e.display.externalMeasured = new LineView(e.doc, t, n))
              r.lineN = n
              var o = (r.built = buildLineContent(e, r))
              return (
                (r.text = o.pre),
                removeChildrenAndAdd(e.display.lineMeasure, o.pre),
                r
              )
            })(e, t))
        var o = mapFromLineView(r, t, n)
        return {
          line: t,
          view: r,
          rect: null,
          map: o.map,
          cache: o.cache,
          before: o.before,
          hasHeights: !1
        }
      }
      function measureCharPrepared(e, t, n, r, o) {
        t.before && (n = -1)
        var i,
          l = n + (r || '')
        return (
          t.cache.hasOwnProperty(l)
            ? (i = t.cache[l])
            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
              t.hasHeights ||
                (!(function ensureLineHeights(e, t, n) {
                  var r = e.options.lineWrapping,
                    o = r && displayWidth(e)
                  if (!t.measure.heights || (r && t.measure.width != o)) {
                    var i = (t.measure.heights = [])
                    if (r) {
                      t.measure.width = o
                      for (
                        var a = t.text.firstChild.getClientRects(), s = 0;
                        s < a.length - 1;
                        s++
                      ) {
                        var l = a[s],
                          c = a[s + 1]
                        Math.abs(l.bottom - c.bottom) > 2 &&
                          i.push((l.bottom + c.top) / 2 - n.top)
                      }
                    }
                    i.push(n.bottom - n.top)
                  }
                })(e, t.view, t.rect),
                (t.hasHeights = !0)),
              (i = (function measureCharInner(e, t, n, r) {
                var o,
                  i = nodeAndOffsetInLineMap(t.map, n, r),
                  l = i.node,
                  c = i.start,
                  u = i.end,
                  d = i.collapse
                if (3 == l.nodeType) {
                  for (var p = 0; p < 4; p++) {
                    for (
                      ;
                      c &&
                      isExtendingChar(t.line.text.charAt(i.coverStart + c));

                    )
                      --c
                    for (
                      ;
                      i.coverStart + u < i.coverEnd &&
                      isExtendingChar(t.line.text.charAt(i.coverStart + u));

                    )
                      ++u
                    if (
                      (o =
                        a && s < 9 && 0 == c && u == i.coverEnd - i.coverStart
                          ? l.parentNode.getBoundingClientRect()
                          : getUsefulRect(k(l, c, u).getClientRects(), r))
                        .left ||
                      o.right ||
                      0 == c
                    )
                      break
                    ;(u = c), (c -= 1), (d = 'right')
                  }
                  a &&
                    s < 11 &&
                    (o = (function maybeUpdateRectForZooming(e, t) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function hasBadZoomedRects(e) {
                          if (null != $) return $
                          var t = removeChildrenAndAdd(e, elt('span', 'x')),
                            n = t.getBoundingClientRect(),
                            r = k(t, 0, 1).getBoundingClientRect()
                          return ($ = Math.abs(n.left - r.left) > 1)
                        })(e)
                      )
                        return t
                      var n = screen.logicalXDPI / screen.deviceXDPI,
                        r = screen.logicalYDPI / screen.deviceYDPI
                      return {
                        left: t.left * n,
                        right: t.right * n,
                        top: t.top * r,
                        bottom: t.bottom * r
                      }
                    })(e.display.measure, o))
                } else {
                  var h
                  c > 0 && (d = r = 'right'),
                    (o =
                      e.options.lineWrapping &&
                      (h = l.getClientRects()).length > 1
                        ? h['right' == r ? h.length - 1 : 0]
                        : l.getBoundingClientRect())
                }
                if (a && s < 9 && !c && (!o || (!o.left && !o.right))) {
                  var f = l.parentNode.getClientRects()[0]
                  o = f
                    ? {
                        left: f.left,
                        right: f.left + charWidth(e.display),
                        top: f.top,
                        bottom: f.bottom
                      }
                    : ce
                }
                for (
                  var g = o.top - t.rect.top,
                    m = o.bottom - t.rect.top,
                    v = (g + m) / 2,
                    y = t.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(v < y[b]);
                  b++
                );
                var x = b ? y[b - 1] : 0,
                  C = y[b],
                  w = {
                    left: ('right' == d ? o.right : o.left) - t.rect.left,
                    right: ('left' == d ? o.left : o.right) - t.rect.left,
                    top: x,
                    bottom: C
                  }
                o.left || o.right || (w.bogus = !0)
                e.options.singleCursorHeightPerLine ||
                  ((w.rtop = g), (w.rbottom = m))
                return w
              })(e, t, n, r)).bogus || (t.cache[l] = i)),
          {
            left: i.left,
            right: i.right,
            top: o ? i.rtop : i.top,
            bottom: o ? i.rbottom : i.bottom
          }
        )
      }
      var le,
        ce = {left: 0, right: 0, top: 0, bottom: 0}
      function nodeAndOffsetInLineMap(e, t, n) {
        for (var r, o, i, a, s, l, c = 0; c < e.length; c += 3)
          if (
            ((s = e[c]),
            (l = e[c + 1]),
            t < s
              ? ((o = 0), (i = 1), (a = 'left'))
              : t < l
                ? (i = (o = t - s) + 1)
                : (c == e.length - 3 || (t == l && e[c + 3] > t)) &&
                  ((o = (i = l - s) - 1), t >= l && (a = 'right')),
            null != o)
          ) {
            if (
              ((r = e[c + 2]),
              s == l && n == (r.insertLeft ? 'left' : 'right') && (a = n),
              'left' == n && 0 == o)
            )
              for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                (r = e[2 + (c -= 3)]), (a = 'left')
            if ('right' == n && o == l - s)
              for (
                ;
                c < e.length - 3 &&
                e[c + 3] == e[c + 4] &&
                !e[c + 5].insertLeft;

              )
                (r = e[(c += 3) + 2]), (a = 'right')
            break
          }
        return {
          node: r,
          start: o,
          end: i,
          collapse: a,
          coverStart: s,
          coverEnd: l
        }
      }
      function getUsefulRect(e, t) {
        var n = ce
        if ('left' == t)
          for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
        else
          for (var o = e.length - 1; o >= 0 && (n = e[o]).left == n.right; o--);
        return n
      }
      function clearLineMeasurementCacheFor(e) {
        if (
          e.measure &&
          ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
          for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
      }
      function clearLineMeasurementCache(e) {
        ;(e.display.externalMeasure = null),
          removeChildren(e.display.lineMeasure)
        for (var t = 0; t < e.display.view.length; t++)
          clearLineMeasurementCacheFor(e.display.view[t])
      }
      function clearCaches(e) {
        clearLineMeasurementCache(e),
          (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
          e.options.lineWrapping || (e.display.maxLineChanged = !0),
          (e.display.lineNumChars = null)
      }
      function pageScrollX() {
        return u && m
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft
      }
      function pageScrollY() {
        return u && m
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop
      }
      function widgetTopHeight(e) {
        var t = 0
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n)
            e.widgets[n].above && (t += widgetHeight(e.widgets[n]))
        return t
      }
      function intoCoordSystem(e, t, n, r, o) {
        if (!o) {
          var i = widgetTopHeight(t)
          ;(n.top += i), (n.bottom += i)
        }
        if ('line' == r) return n
        r || (r = 'local')
        var a = heightAtLine(t)
        if (
          ('local' == r
            ? (a += paddingTop(e.display))
            : (a -= e.display.viewOffset),
          'page' == r || 'window' == r)
        ) {
          var s = e.display.lineSpace.getBoundingClientRect()
          a += s.top + ('window' == r ? 0 : pageScrollY())
          var l = s.left + ('window' == r ? 0 : pageScrollX())
          ;(n.left += l), (n.right += l)
        }
        return (n.top += a), (n.bottom += a), n
      }
      function fromCoordSystem(e, t, n) {
        if ('div' == n) return t
        var r = t.left,
          o = t.top
        if ('page' == n) (r -= pageScrollX()), (o -= pageScrollY())
        else if ('local' == n || !n) {
          var i = e.display.sizer.getBoundingClientRect()
          ;(r += i.left), (o += i.top)
        }
        var a = e.display.lineSpace.getBoundingClientRect()
        return {left: r - a.left, top: o - a.top}
      }
      function charCoords(e, t, n, r, o) {
        return (
          r || (r = getLine(e.doc, t.line)),
          intoCoordSystem(e, r, measureChar(e, r, t.ch, o), n)
        )
      }
      function cursorCoords(e, t, n, r, o, i) {
        function get(t, a) {
          var s = measureCharPrepared(e, o, t, a ? 'right' : 'left', i)
          return (
            a ? (s.left = s.right) : (s.right = s.left),
            intoCoordSystem(e, r, s, n)
          )
        }
        ;(r = r || getLine(e.doc, t.line)),
          o || (o = prepareMeasureForLine(e, r))
        var a = getOrder(r, e.doc.direction),
          s = t.ch,
          l = t.sticky
        if (
          (s >= r.text.length
            ? ((s = r.text.length), (l = 'before'))
            : s <= 0 && ((s = 0), (l = 'after')),
          !a)
        )
          return get('before' == l ? s - 1 : s, 'before' == l)
        function getBidi(e, t, n) {
          var r = 1 == a[t].level
          return get(n ? e - 1 : e, r != n)
        }
        var c = getBidiPartAt(a, s, l),
          u = B,
          d = getBidi(s, c, 'before' == l)
        return null != u && (d.other = getBidi(s, u, 'before' != l)), d
      }
      function estimateCoords(e, t) {
        var n = 0
        ;(t = clipPos(e.doc, t)),
          e.options.lineWrapping || (n = charWidth(e.display) * t.ch)
        var r = getLine(e.doc, t.line),
          o = heightAtLine(r) + paddingTop(e.display)
        return {left: n, right: n, top: o, bottom: o + r.height}
      }
      function PosWithInfo(e, t, n, r, o) {
        var i = Pos(e, t, n)
        return (i.xRel = o), r && (i.outside = !0), i
      }
      function coordsChar(e, t, n) {
        var r = e.doc
        if ((n += e.display.viewOffset) < 0)
          return PosWithInfo(r.first, 0, null, !0, -1)
        var o = lineAtHeight(r, n),
          i = r.first + r.size - 1
        if (o > i)
          return PosWithInfo(
            r.first + r.size - 1,
            getLine(r, i).text.length,
            null,
            !0,
            1
          )
        t < 0 && (t = 0)
        for (var a = getLine(r, o); ; ) {
          var s = coordsCharInner(e, a, o, t, n),
            l = collapsedSpanAround(a, s.ch + (s.xRel > 0 ? 1 : 0))
          if (!l) return s
          var c = l.find(1)
          if (c.line == o) return c
          a = getLine(r, (o = c.line))
        }
      }
      function wrappedLineExtent(e, t, n, r) {
        r -= widgetTopHeight(t)
        var o = t.text.length,
          i = findFirst(
            function(t) {
              return measureCharPrepared(e, n, t - 1).bottom <= r
            },
            o,
            0
          )
        return {
          begin: i,
          end: (o = findFirst(
            function(t) {
              return measureCharPrepared(e, n, t).top > r
            },
            i,
            o
          ))
        }
      }
      function wrappedLineExtentChar(e, t, n, r) {
        return (
          n || (n = prepareMeasureForLine(e, t)),
          wrappedLineExtent(
            e,
            t,
            n,
            intoCoordSystem(e, t, measureCharPrepared(e, n, r), 'line').top
          )
        )
      }
      function boxIsAfter(e, t, n, r) {
        return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t)
      }
      function coordsCharInner(e, t, n, r, o) {
        o -= heightAtLine(t)
        var i = prepareMeasureForLine(e, t),
          a = widgetTopHeight(t),
          s = 0,
          l = t.text.length,
          c = !0,
          u = getOrder(t, e.doc.direction)
        if (u) {
          var d = (e.options.lineWrapping
            ? function coordsBidiPartWrapped(e, t, n, r, o, i, a) {
                var s = wrappedLineExtent(e, t, r, a),
                  l = s.begin,
                  c = s.end
                ;/\s/.test(t.text.charAt(c - 1)) && c--
                for (var u = null, d = null, p = 0; p < o.length; p++) {
                  var h = o[p]
                  if (!(h.from >= c || h.to <= l)) {
                    var f = 1 != h.level,
                      g = measureCharPrepared(
                        e,
                        r,
                        f ? Math.min(c, h.to) - 1 : Math.max(l, h.from)
                      ).right,
                      m = g < i ? i - g + 1e9 : g - i
                    ;(!u || d > m) && ((u = h), (d = m))
                  }
                }
                u || (u = o[o.length - 1])
                u.from < l && (u = {from: l, to: u.to, level: u.level})
                u.to > c && (u = {from: u.from, to: c, level: u.level})
                return u
              }
            : function coordsBidiPart(e, t, n, r, o, i, a) {
                var s = findFirst(
                    function(s) {
                      var l = o[s],
                        c = 1 != l.level
                      return boxIsAfter(
                        cursorCoords(
                          e,
                          Pos(n, c ? l.to : l.from, c ? 'before' : 'after'),
                          'line',
                          t,
                          r
                        ),
                        i,
                        a,
                        !0
                      )
                    },
                    0,
                    o.length - 1
                  ),
                  l = o[s]
                if (s > 0) {
                  var c = 1 != l.level,
                    u = cursorCoords(
                      e,
                      Pos(n, c ? l.from : l.to, c ? 'after' : 'before'),
                      'line',
                      t,
                      r
                    )
                  boxIsAfter(u, i, a, !0) && u.top > a && (l = o[s - 1])
                }
                return l
              })(e, t, n, i, u, r, o)
          ;(s = (c = 1 != d.level) ? d.from : d.to - 1),
            (l = c ? d.to : d.from - 1)
        }
        var p,
          h,
          f = null,
          g = null,
          m = findFirst(
            function(t) {
              var n = measureCharPrepared(e, i, t)
              return (
                (n.top += a),
                (n.bottom += a),
                !!boxIsAfter(n, r, o, !1) &&
                  (n.top <= o && n.left <= r && ((f = t), (g = n)), !0)
              )
            },
            s,
            l
          ),
          v = !1
        if (g) {
          var y = r - g.left < g.right - r,
            b = y == c
          ;(m = f + (b ? 0 : 1)),
            (h = b ? 'after' : 'before'),
            (p = y ? g.left : g.right)
        } else {
          c || (m != l && m != s) || m++,
            (h =
              0 == m
                ? 'after'
                : m == t.text.length
                  ? 'before'
                  : measureCharPrepared(e, i, m - (c ? 1 : 0)).bottom + a <=
                      o ==
                    c
                    ? 'after'
                    : 'before')
          var x = cursorCoords(e, Pos(n, m, h), 'line', t, i)
          ;(p = x.left), (v = o < x.top || o >= x.bottom)
        }
        return PosWithInfo(
          n,
          (m = skipExtendingChars(t.text, m, 1)),
          h,
          v,
          r - p
        )
      }
      function textHeight(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight
        if (null == le) {
          le = elt('pre')
          for (var t = 0; t < 49; ++t)
            le.appendChild(document.createTextNode('x')),
              le.appendChild(elt('br'))
          le.appendChild(document.createTextNode('x'))
        }
        removeChildrenAndAdd(e.measure, le)
        var n = le.offsetHeight / 50
        return (
          n > 3 && (e.cachedTextHeight = n), removeChildren(e.measure), n || 1
        )
      }
      function charWidth(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth
        var t = elt('span', 'xxxxxxxxxx'),
          n = elt('pre', [t])
        removeChildrenAndAdd(e.measure, n)
        var r = t.getBoundingClientRect(),
          o = (r.right - r.left) / 10
        return o > 2 && (e.cachedCharWidth = o), o || 10
      }
      function getDimensions(e) {
        for (
          var t = e.display,
            n = {},
            r = {},
            o = t.gutters.clientLeft,
            i = t.gutters.firstChild,
            a = 0;
          i;
          i = i.nextSibling, ++a
        )
          (n[e.options.gutters[a]] = i.offsetLeft + i.clientLeft + o),
            (r[e.options.gutters[a]] = i.clientWidth)
        return {
          fixedPos: compensateForHScroll(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth
        }
      }
      function compensateForHScroll(e) {
        return (
          e.scroller.getBoundingClientRect().left -
          e.sizer.getBoundingClientRect().left
        )
      }
      function estimateHeight(e) {
        var t = textHeight(e.display),
          n = e.options.lineWrapping,
          r =
            n &&
            Math.max(
              5,
              e.display.scroller.clientWidth / charWidth(e.display) - 3
            )
        return function(o) {
          if (lineIsHidden(e.doc, o)) return 0
          var i = 0
          if (o.widgets)
            for (var a = 0; a < o.widgets.length; a++)
              o.widgets[a].height && (i += o.widgets[a].height)
          return n ? i + (Math.ceil(o.text.length / r) || 1) * t : i + t
        }
      }
      function estimateLineHeights(e) {
        var t = e.doc,
          n = estimateHeight(e)
        t.iter(function(e) {
          var t = n(e)
          t != e.height && updateLineHeight(e, t)
        })
      }
      function posFromMouse(e, t, n, r) {
        var o = e.display
        if (!n && 'true' == e_target(t).getAttribute('cm-not-content'))
          return null
        var i,
          a,
          s = o.lineSpace.getBoundingClientRect()
        try {
          ;(i = t.clientX - s.left), (a = t.clientY - s.top)
        } catch (t) {
          return null
        }
        var l,
          c = coordsChar(e, i, a)
        if (
          r &&
          1 == c.xRel &&
          (l = getLine(e.doc, c.line).text).length == c.ch
        ) {
          var u = countColumn(l, l.length, e.options.tabSize) - l.length
          c = Pos(
            c.line,
            Math.max(
              0,
              Math.round(
                (i - paddingH(e.display).left) / charWidth(e.display)
              ) - u
            )
          )
        }
        return c
      }
      function findViewIndex(e, t) {
        if (t >= e.display.viewTo) return null
        if ((t -= e.display.viewFrom) < 0) return null
        for (var n = e.display.view, r = 0; r < n.length; r++)
          if ((t -= n[r].size) < 0) return r
      }
      function updateSelection(e) {
        e.display.input.showSelection(e.display.input.prepareSelection())
      }
      function prepareSelection(e, t) {
        void 0 === t && (t = !0)
        for (
          var n = e.doc,
            r = {},
            o = (r.cursors = document.createDocumentFragment()),
            i = (r.selection = document.createDocumentFragment()),
            a = 0;
          a < n.sel.ranges.length;
          a++
        )
          if (t || a != n.sel.primIndex) {
            var s = n.sel.ranges[a]
            if (
              !(
                s.from().line >= e.display.viewTo ||
                s.to().line < e.display.viewFrom
              )
            ) {
              var l = s.empty()
              ;(l || e.options.showCursorWhenSelecting) &&
                drawSelectionCursor(e, s.head, o),
                l || drawSelectionRange(e, s, i)
            }
          }
        return r
      }
      function drawSelectionCursor(e, t, n) {
        var r = cursorCoords(
            e,
            t,
            'div',
            null,
            null,
            !e.options.singleCursorHeightPerLine
          ),
          o = n.appendChild(elt('div', ' ', 'CodeMirror-cursor'))
        if (
          ((o.style.left = r.left + 'px'),
          (o.style.top = r.top + 'px'),
          (o.style.height =
            Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
          r.other)
        ) {
          var i = n.appendChild(
            elt('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
          )
          ;(i.style.display = ''),
            (i.style.left = r.other.left + 'px'),
            (i.style.top = r.other.top + 'px'),
            (i.style.height = 0.85 * (r.other.bottom - r.other.top) + 'px')
        }
      }
      function cmpCoords(e, t) {
        return e.top - t.top || e.left - t.left
      }
      function drawSelectionRange(e, t, n) {
        var r = e.display,
          o = e.doc,
          i = document.createDocumentFragment(),
          a = paddingH(e.display),
          s = a.left,
          l =
            Math.max(r.sizerWidth, displayWidth(e) - r.sizer.offsetLeft) -
            a.right,
          c = 'ltr' == o.direction
        function add(e, t, n, r) {
          t < 0 && (t = 0),
            (t = Math.round(t)),
            (r = Math.round(r)),
            i.appendChild(
              elt(
                'div',
                null,
                'CodeMirror-selected',
                'position: absolute; left: ' +
                  e +
                  'px;\n                             top: ' +
                  t +
                  'px; width: ' +
                  (null == n ? l - e : n) +
                  'px;\n                             height: ' +
                  (r - t) +
                  'px'
              )
            )
        }
        function drawForLine(t, n, r) {
          var i,
            a,
            u = getLine(o, t),
            d = u.text.length
          function coords(n, r) {
            return charCoords(e, Pos(t, n), 'div', u, r)
          }
          function wrapX(t, n, r) {
            var o = wrappedLineExtentChar(e, u, null, t),
              i = ('ltr' == n) == ('after' == r) ? 'left' : 'right'
            return coords(
              'after' == r
                ? o.begin
                : o.end - (/\s/.test(u.text.charAt(o.end - 1)) ? 2 : 1),
              i
            )[i]
          }
          var p = getOrder(u, o.direction)
          return (
            (function iterateBidiSections(e, t, n, r) {
              if (!e) return r(t, n, 'ltr', 0)
              for (var o = !1, i = 0; i < e.length; ++i) {
                var a = e[i]
                ;((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                  (r(
                    Math.max(a.from, t),
                    Math.min(a.to, n),
                    1 == a.level ? 'rtl' : 'ltr',
                    i
                  ),
                  (o = !0))
              }
              o || r(t, n, 'ltr')
            })(p, n || 0, null == r ? d : r, function(e, t, o, u) {
              var h = 'ltr' == o,
                f = coords(e, h ? 'left' : 'right'),
                g = coords(t - 1, h ? 'right' : 'left'),
                m = null == n && 0 == e,
                v = null == r && t == d,
                y = 0 == u,
                b = !p || u == p.length - 1
              if (g.top - f.top <= 3) {
                var x = (c ? v : m) && b,
                  C = (c ? m : v) && y ? s : (h ? f : g).left,
                  w = x ? l : (h ? g : f).right
                add(C, f.top, w - C, f.bottom)
              } else {
                var S, k, L, M
                h
                  ? ((S = c && m && y ? s : f.left),
                    (k = c ? l : wrapX(e, o, 'before')),
                    (L = c ? s : wrapX(t, o, 'after')),
                    (M = c && v && b ? l : g.right))
                  : ((S = c ? wrapX(e, o, 'before') : s),
                    (k = !c && m && y ? l : f.right),
                    (L = !c && v && b ? s : g.left),
                    (M = c ? wrapX(t, o, 'after') : l)),
                  add(S, f.top, k - S, f.bottom),
                  f.bottom < g.top && add(s, f.bottom, null, g.top),
                  add(L, g.top, M - L, g.bottom)
              }
              ;(!i || cmpCoords(f, i) < 0) && (i = f),
                cmpCoords(g, i) < 0 && (i = g),
                (!a || cmpCoords(f, a) < 0) && (a = f),
                cmpCoords(g, a) < 0 && (a = g)
            }),
            {start: i, end: a}
          )
        }
        var u = t.from(),
          d = t.to()
        if (u.line == d.line) drawForLine(u.line, u.ch, d.ch)
        else {
          var p = getLine(o, u.line),
            h = getLine(o, d.line),
            f = visualLine(p) == visualLine(h),
            g = drawForLine(u.line, u.ch, f ? p.text.length + 1 : null).end,
            m = drawForLine(d.line, f ? 0 : null, d.ch).start
          f &&
            (g.top < m.top - 2
              ? (add(g.right, g.top, null, g.bottom),
                add(s, m.top, m.left, m.bottom))
              : add(g.right, g.top, m.left - g.right, g.bottom)),
            g.bottom < m.top && add(s, g.bottom, null, m.top)
        }
        n.appendChild(i)
      }
      function restartBlink(e) {
        if (e.state.focused) {
          var t = e.display
          clearInterval(t.blinker)
          var n = !0
          ;(t.cursorDiv.style.visibility = ''),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function() {
                  return (t.cursorDiv.style.visibility = (n = !n)
                    ? ''
                    : 'hidden')
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 &&
                (t.cursorDiv.style.visibility = 'hidden')
        }
      }
      function ensureFocus(e) {
        e.state.focused || (e.display.input.focus(), onFocus(e))
      }
      function delayBlurEvent(e) {
        ;(e.state.delayingBlurEvent = !0),
          setTimeout(function() {
            e.state.delayingBlurEvent &&
              ((e.state.delayingBlurEvent = !1), onBlur(e))
          }, 100)
      }
      function onFocus(e, t) {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
          'nocursor' != e.options.readOnly &&
            (e.state.focused ||
              (signal(e, 'focus', e, t),
              (e.state.focused = !0),
              addClass(e.display.wrapper, 'CodeMirror-focused'),
              e.curOp ||
                e.display.selForContextMenu == e.doc.sel ||
                (e.display.input.reset(),
                l &&
                  setTimeout(function() {
                    return e.display.input.reset(!0)
                  }, 20)),
              e.display.input.receivedFocus()),
            restartBlink(e))
      }
      function onBlur(e, t) {
        e.state.delayingBlurEvent ||
          (e.state.focused &&
            (signal(e, 'blur', e, t),
            (e.state.focused = !1),
            L(e.display.wrapper, 'CodeMirror-focused')),
          clearInterval(e.display.blinker),
          setTimeout(function() {
            e.state.focused || (e.display.shift = !1)
          }, 150))
      }
      function updateHeightsInViewport(e) {
        for (
          var t = e.display, n = t.lineDiv.offsetTop, r = 0;
          r < t.view.length;
          r++
        ) {
          var o = t.view[r],
            i = e.options.lineWrapping,
            l = void 0,
            c = 0
          if (!o.hidden) {
            if (a && s < 8) {
              var u = o.node.offsetTop + o.node.offsetHeight
              ;(l = u - n), (n = u)
            } else {
              var d = o.node.getBoundingClientRect()
              ;(l = d.bottom - d.top),
                !i &&
                  o.text.firstChild &&
                  (c =
                    o.text.firstChild.getBoundingClientRect().right -
                    d.left -
                    1)
            }
            var p = o.line.height - l
            if (
              (l < 2 && (l = textHeight(t)),
              (p > 0.005 || p < -0.005) &&
                (updateLineHeight(o.line, l),
                updateWidgetHeight(o.line),
                o.rest))
            )
              for (var h = 0; h < o.rest.length; h++)
                updateWidgetHeight(o.rest[h])
            if (c > e.display.sizerWidth) {
              var f = Math.ceil(c / charWidth(e.display))
              f > e.display.maxLineLength &&
                ((e.display.maxLineLength = f),
                (e.display.maxLine = o.line),
                (e.display.maxLineChanged = !0))
            }
          }
        }
      }
      function updateWidgetHeight(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t],
              r = n.node.parentNode
            r && (n.height = r.offsetHeight)
          }
      }
      function visibleLines(e, t, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop
        r = Math.floor(r - paddingTop(e))
        var o = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
          i = lineAtHeight(t, r),
          a = lineAtHeight(t, o)
        if (n && n.ensure) {
          var s = n.ensure.from.line,
            l = n.ensure.to.line
          s < i
            ? ((i = s),
              (a = lineAtHeight(
                t,
                heightAtLine(getLine(t, s)) + e.wrapper.clientHeight
              )))
            : Math.min(l, t.lastLine()) >= a &&
              ((i = lineAtHeight(
                t,
                heightAtLine(getLine(t, l)) - e.wrapper.clientHeight
              )),
              (a = l))
        }
        return {from: i, to: Math.max(a, i + 1)}
      }
      function alignHorizontally(e) {
        var t = e.display,
          n = t.view
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
          for (
            var r =
                compensateForHScroll(t) -
                t.scroller.scrollLeft +
                e.doc.scrollLeft,
              o = t.gutters.offsetWidth,
              i = r + 'px',
              a = 0;
            a < n.length;
            a++
          )
            if (!n[a].hidden) {
              e.options.fixedGutter &&
                (n[a].gutter && (n[a].gutter.style.left = i),
                n[a].gutterBackground && (n[a].gutterBackground.style.left = i))
              var s = n[a].alignable
              if (s) for (var l = 0; l < s.length; l++) s[l].style.left = i
            }
          e.options.fixedGutter && (t.gutters.style.left = r + o + 'px')
        }
      }
      function maybeUpdateLineNumberWidth(e) {
        if (!e.options.lineNumbers) return !1
        var t = e.doc,
          n = lineNumberFor(e.options, t.first + t.size - 1),
          r = e.display
        if (n.length != r.lineNumChars) {
          var o = r.measure.appendChild(
              elt(
                'div',
                [elt('div', n)],
                'CodeMirror-linenumber CodeMirror-gutter-elt'
              )
            ),
            i = o.firstChild.offsetWidth,
            a = o.offsetWidth - i
          return (
            (r.lineGutter.style.width = ''),
            (r.lineNumInnerWidth =
              Math.max(i, r.lineGutter.offsetWidth - a) + 1),
            (r.lineNumWidth = r.lineNumInnerWidth + a),
            (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
            (r.lineGutter.style.width = r.lineNumWidth + 'px'),
            updateGutterSpace(e),
            !0
          )
        }
        return !1
      }
      function calculateScrollPos(e, t) {
        var n = e.display,
          r = textHeight(e.display)
        t.top < 0 && (t.top = 0)
        var o =
            e.curOp && null != e.curOp.scrollTop
              ? e.curOp.scrollTop
              : n.scroller.scrollTop,
          i = displayHeight(e),
          a = {}
        t.bottom - t.top > i && (t.bottom = t.top + i)
        var s = e.doc.height + paddingVert(n),
          l = t.top < r,
          c = t.bottom > s - r
        if (t.top < o) a.scrollTop = l ? 0 : t.top
        else if (t.bottom > o + i) {
          var u = Math.min(t.top, (c ? s : t.bottom) - i)
          u != o && (a.scrollTop = u)
        }
        var d =
            e.curOp && null != e.curOp.scrollLeft
              ? e.curOp.scrollLeft
              : n.scroller.scrollLeft,
          p =
            displayWidth(e) -
            (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
          h = t.right - t.left > p
        return (
          h && (t.right = t.left + p),
          t.left < 10
            ? (a.scrollLeft = 0)
            : t.left < d
              ? (a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)))
              : t.right > p + d - 3 &&
                (a.scrollLeft = t.right + (h ? 0 : 10) - p),
          a
        )
      }
      function addToScrollTop(e, t) {
        null != t &&
          (resolveScrollToPos(e),
          (e.curOp.scrollTop =
            (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) +
            t))
      }
      function ensureCursorVisible(e) {
        resolveScrollToPos(e)
        var t = e.getCursor()
        e.curOp.scrollToPos = {
          from: t,
          to: t,
          margin: e.options.cursorScrollMargin
        }
      }
      function scrollToCoords(e, t, n) {
        ;(null == t && null == n) || resolveScrollToPos(e),
          null != t && (e.curOp.scrollLeft = t),
          null != n && (e.curOp.scrollTop = n)
      }
      function resolveScrollToPos(e) {
        var t = e.curOp.scrollToPos
        t &&
          ((e.curOp.scrollToPos = null),
          scrollToCoordsRange(
            e,
            estimateCoords(e, t.from),
            estimateCoords(e, t.to),
            t.margin
          ))
      }
      function scrollToCoordsRange(e, t, n, r) {
        var o = calculateScrollPos(e, {
          left: Math.min(t.left, n.left),
          top: Math.min(t.top, n.top) - r,
          right: Math.max(t.right, n.right),
          bottom: Math.max(t.bottom, n.bottom) + r
        })
        scrollToCoords(e, o.scrollLeft, o.scrollTop)
      }
      function updateScrollTop(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
          (n || updateDisplaySimple(e, {top: t}),
          setScrollTop(e, t, !0),
          n && updateDisplaySimple(e),
          startWorker(e, 100))
      }
      function setScrollTop(e, t, n) {
        ;(t = Math.min(
          e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
          t
        )),
          (e.display.scroller.scrollTop != t || n) &&
            ((e.doc.scrollTop = t),
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t &&
              (e.display.scroller.scrollTop = t))
      }
      function setScrollLeft(e, t, n, r) {
        ;(t = Math.min(
          t,
          e.display.scroller.scrollWidth - e.display.scroller.clientWidth
        )),
          ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
            !r) ||
            ((e.doc.scrollLeft = t),
            alignHorizontally(e),
            e.display.scroller.scrollLeft != t &&
              (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t))
      }
      function measureForScrollbars(e) {
        var t = e.display,
          n = t.gutters.offsetWidth,
          r = Math.round(e.doc.height + paddingVert(e.display))
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + scrollGap(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: n
        }
      }
      var ue = function(e, t, n) {
        this.cm = n
        var r = (this.vert = elt(
            'div',
            [elt('div', null, null, 'min-width: 1px')],
            'CodeMirror-vscrollbar'
          )),
          o = (this.horiz = elt(
            'div',
            [elt('div', null, null, 'height: 100%; min-height: 1px')],
            'CodeMirror-hscrollbar'
          ))
        ;(r.tabIndex = o.tabIndex = -1),
          e(r),
          e(o),
          V(r, 'scroll', function() {
            r.clientHeight && t(r.scrollTop, 'vertical')
          }),
          V(o, 'scroll', function() {
            o.clientWidth && t(o.scrollLeft, 'horizontal')
          }),
          (this.checkedZeroWidth = !1),
          a &&
            s < 8 &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = '18px')
      }
      ;(ue.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1,
          n = e.scrollHeight > e.clientHeight + 1,
          r = e.nativeBarWidth
        if (n) {
          ;(this.vert.style.display = 'block'),
            (this.vert.style.bottom = t ? r + 'px' : '0')
          var o = e.viewHeight - (t ? r : 0)
          this.vert.firstChild.style.height =
            Math.max(0, e.scrollHeight - e.clientHeight + o) + 'px'
        } else
          (this.vert.style.display = ''),
            (this.vert.firstChild.style.height = '0')
        if (t) {
          ;(this.horiz.style.display = 'block'),
            (this.horiz.style.right = n ? r + 'px' : '0'),
            (this.horiz.style.left = e.barLeft + 'px')
          var i = e.viewWidth - e.barLeft - (n ? r : 0)
          this.horiz.firstChild.style.width =
            Math.max(0, e.scrollWidth - e.clientWidth + i) + 'px'
        } else
          (this.horiz.style.display = ''),
            (this.horiz.firstChild.style.width = '0')
        return (
          !this.checkedZeroWidth &&
            e.clientHeight > 0 &&
            (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          {right: n ? r : 0, bottom: t ? r : 0}
        )
      }),
        (ue.prototype.setScrollLeft = function(e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz')
        }),
        (ue.prototype.setScrollTop = function(e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, 'vert')
        }),
        (ue.prototype.zeroWidthHack = function() {
          var e = y && !h ? '12px' : '18px'
          ;(this.horiz.style.height = this.vert.style.width = e),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              'none'),
            (this.disableHoriz = new T()),
            (this.disableVert = new T())
        }),
        (ue.prototype.enableZeroWidthBar = function(e, t, n) {
          ;(e.style.pointerEvents = 'auto'),
            t.set(1e3, function maybeDisable() {
              var r = e.getBoundingClientRect()
              ;('vert' == n
                ? document.elementFromPoint(r.right - 1, (r.top + r.bottom) / 2)
                : document.elementFromPoint(
                    (r.right + r.left) / 2,
                    r.bottom - 1
                  )) != e
                ? (e.style.pointerEvents = 'none')
                : t.set(1e3, maybeDisable)
            })
        }),
        (ue.prototype.clear = function() {
          var e = this.horiz.parentNode
          e.removeChild(this.horiz), e.removeChild(this.vert)
        })
      var de = function() {}
      function updateScrollbars(e, t) {
        t || (t = measureForScrollbars(e))
        var n = e.display.barWidth,
          r = e.display.barHeight
        updateScrollbarsInner(e, t)
        for (
          var o = 0;
          (o < 4 && n != e.display.barWidth) || r != e.display.barHeight;
          o++
        )
          n != e.display.barWidth &&
            e.options.lineWrapping &&
            updateHeightsInViewport(e),
            updateScrollbarsInner(e, measureForScrollbars(e)),
            (n = e.display.barWidth),
            (r = e.display.barHeight)
      }
      function updateScrollbarsInner(e, t) {
        var n = e.display,
          r = n.scrollbars.update(t)
        ;(n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
          (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
          (n.heightForcer.style.borderBottom =
            r.bottom + 'px solid transparent'),
          r.right && r.bottom
            ? ((n.scrollbarFiller.style.display = 'block'),
              (n.scrollbarFiller.style.height = r.bottom + 'px'),
              (n.scrollbarFiller.style.width = r.right + 'px'))
            : (n.scrollbarFiller.style.display = ''),
          r.bottom &&
          e.options.coverGutterNextToScrollbar &&
          e.options.fixedGutter
            ? ((n.gutterFiller.style.display = 'block'),
              (n.gutterFiller.style.height = r.bottom + 'px'),
              (n.gutterFiller.style.width = t.gutterWidth + 'px'))
            : (n.gutterFiller.style.display = '')
      }
      ;(de.prototype.update = function() {
        return {bottom: 0, right: 0}
      }),
        (de.prototype.setScrollLeft = function() {}),
        (de.prototype.setScrollTop = function() {}),
        (de.prototype.clear = function() {})
      var pe = {native: ue, null: de}
      function initScrollbars(e) {
        e.display.scrollbars &&
          (e.display.scrollbars.clear(),
          e.display.scrollbars.addClass &&
            L(e.display.wrapper, e.display.scrollbars.addClass)),
          (e.display.scrollbars = new pe[e.options.scrollbarStyle](
            function(t) {
              e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                V(t, 'mousedown', function() {
                  e.state.focused &&
                    setTimeout(function() {
                      return e.display.input.focus()
                    }, 0)
                }),
                t.setAttribute('cm-not-content', 'true')
            },
            function(t, n) {
              'horizontal' == n ? setScrollLeft(e, t) : updateScrollTop(e, t)
            },
            e
          )),
          e.display.scrollbars.addClass &&
            addClass(e.display.wrapper, e.display.scrollbars.addClass)
      }
      var he = 0
      function startOperation(e) {
        ;(e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: null,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++he
        }),
          (function pushOperation(e) {
            ae
              ? ae.ops.push(e)
              : (e.ownsGroup = ae = {ops: [e], delayedCallbacks: []})
          })(e.curOp)
      }
      function endOperation(e) {
        var t = e.curOp
        t &&
          (function finishOperation(e, t) {
            var n = e.ownsGroup
            if (n)
              try {
                !(function fireCallbacksForOps(e) {
                  var t = e.delayedCallbacks,
                    n = 0
                  do {
                    for (; n < t.length; n++) t[n].call(null)
                    for (var r = 0; r < e.ops.length; r++) {
                      var o = e.ops[r]
                      if (o.cursorActivityHandlers)
                        for (
                          ;
                          o.cursorActivityCalled <
                          o.cursorActivityHandlers.length;

                        )
                          o.cursorActivityHandlers[
                            o.cursorActivityCalled++
                          ].call(null, o.cm)
                    }
                  } while (n < t.length)
                })(n)
              } finally {
                ;(ae = null), t(n)
              }
          })(t, function(e) {
            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null
            !(function endOperations(e) {
              for (var t = e.ops, n = 0; n < t.length; n++)
                endOperation_R1(t[n])
              for (var r = 0; r < t.length; r++)
                (o = t[r]).updatedDisplay =
                  o.mustUpdate && updateDisplayIfNeeded(o.cm, o.update)
              var o
              for (var i = 0; i < t.length; i++) endOperation_R2(t[i])
              for (var a = 0; a < t.length; a++) endOperation_W2(t[a])
              for (var s = 0; s < t.length; s++) endOperation_finish(t[s])
            })(e)
          })
      }
      function endOperation_R1(e) {
        var t = e.cm,
          n = t.display
        !(function maybeClipScrollbars(e) {
          var t = e.display
          !t.scrollbarsClipped &&
            t.scroller.offsetWidth &&
            ((t.nativeBarWidth =
              t.scroller.offsetWidth - t.scroller.clientWidth),
            (t.heightForcer.style.height = scrollGap(e) + 'px'),
            (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
            (t.sizer.style.borderRightWidth = scrollGap(e) + 'px'),
            (t.scrollbarsClipped = !0))
        })(t),
          e.updateMaxLine && findMaxLine(t),
          (e.mustUpdate =
            e.viewChanged ||
            e.forceUpdate ||
            null != e.scrollTop ||
            (e.scrollToPos &&
              (e.scrollToPos.from.line < n.viewFrom ||
                e.scrollToPos.to.line >= n.viewTo)) ||
            (n.maxLineChanged && t.options.lineWrapping)),
          (e.update =
            e.mustUpdate &&
            new fe(
              t,
              e.mustUpdate && {top: e.scrollTop, ensure: e.scrollToPos},
              e.forceUpdate
            ))
      }
      function endOperation_R2(e) {
        var t = e.cm,
          n = t.display
        e.updatedDisplay && updateHeightsInViewport(t),
          (e.barMeasure = measureForScrollbars(t)),
          n.maxLineChanged &&
            !t.options.lineWrapping &&
            ((e.adjustWidthTo =
              measureChar(t, n.maxLine, n.maxLine.text.length).left + 3),
            (t.display.sizerWidth = e.adjustWidthTo),
            (e.barMeasure.scrollWidth = Math.max(
              n.scroller.clientWidth,
              n.sizer.offsetLeft +
                e.adjustWidthTo +
                scrollGap(t) +
                t.display.barWidth
            )),
            (e.maxScrollLeft = Math.max(
              0,
              n.sizer.offsetLeft + e.adjustWidthTo - displayWidth(t)
            ))),
          (e.updatedDisplay || e.selectionChanged) &&
            (e.preparedSelection = n.input.prepareSelection())
      }
      function endOperation_W2(e) {
        var t = e.cm
        null != e.adjustWidthTo &&
          ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
          e.maxScrollLeft < t.doc.scrollLeft &&
            setScrollLeft(
              t,
              Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
              !0
            ),
          (t.display.maxLineChanged = !1))
        var n = e.focus && e.focus == activeElt()
        e.preparedSelection &&
          t.display.input.showSelection(e.preparedSelection, n),
          (e.updatedDisplay || e.startHeight != t.doc.height) &&
            updateScrollbars(t, e.barMeasure),
          e.updatedDisplay && setDocumentHeight(t, e.barMeasure),
          e.selectionChanged && restartBlink(t),
          t.state.focused && e.updateInput && t.display.input.reset(e.typing),
          n && ensureFocus(e.cm)
      }
      function endOperation_finish(e) {
        var t = e.cm,
          n = t.display,
          r = t.doc
        ;(e.updatedDisplay && postUpdateDisplay(t, e.update),
        null == n.wheelStartX ||
          (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
          (n.wheelStartX = n.wheelStartY = null),
        null != e.scrollTop && setScrollTop(t, e.scrollTop, e.forceScroll),
        null != e.scrollLeft && setScrollLeft(t, e.scrollLeft, !0, !0),
        e.scrollToPos) &&
          (function maybeScrollWindow(e, t) {
            if (!signalDOMEvent(e, 'scrollCursorIntoView')) {
              var n = e.display,
                r = n.sizer.getBoundingClientRect(),
                o = null
              if (
                (t.top + r.top < 0
                  ? (o = !0)
                  : t.bottom + r.top >
                      (window.innerHeight ||
                        document.documentElement.clientHeight) && (o = !1),
                null != o && !f)
              ) {
                var i = elt(
                  'div',
                  '​',
                  null,
                  'position: absolute;\n                         top: ' +
                    (t.top - n.viewOffset - paddingTop(e.display)) +
                    'px;\n                         height: ' +
                    (t.bottom - t.top + scrollGap(e) + n.barHeight) +
                    'px;\n                         left: ' +
                    t.left +
                    'px; width: ' +
                    Math.max(2, t.right - t.left) +
                    'px;'
                )
                e.display.lineSpace.appendChild(i),
                  i.scrollIntoView(o),
                  e.display.lineSpace.removeChild(i)
              }
            }
          })(
            t,
            (function scrollPosIntoView(e, t, n, r) {
              var o
              null == r && (r = 0),
                e.options.lineWrapping ||
                  t != n ||
                  (n =
                    'before' ==
                    (t = t.ch
                      ? Pos(
                          t.line,
                          'before' == t.sticky ? t.ch - 1 : t.ch,
                          'after'
                        )
                      : t).sticky
                      ? Pos(t.line, t.ch + 1, 'before')
                      : t)
              for (var i = 0; i < 5; i++) {
                var a = !1,
                  s = cursorCoords(e, t),
                  l = n && n != t ? cursorCoords(e, n) : s,
                  c = calculateScrollPos(
                    e,
                    (o = {
                      left: Math.min(s.left, l.left),
                      top: Math.min(s.top, l.top) - r,
                      right: Math.max(s.left, l.left),
                      bottom: Math.max(s.bottom, l.bottom) + r
                    })
                  ),
                  u = e.doc.scrollTop,
                  d = e.doc.scrollLeft
                if (
                  (null != c.scrollTop &&
                    (updateScrollTop(e, c.scrollTop),
                    Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                  null != c.scrollLeft &&
                    (setScrollLeft(e, c.scrollLeft),
                    Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                  !a)
                )
                  break
              }
              return o
            })(
              t,
              clipPos(r, e.scrollToPos.from),
              clipPos(r, e.scrollToPos.to),
              e.scrollToPos.margin
            )
          )
        var o = e.maybeHiddenMarkers,
          i = e.maybeUnhiddenMarkers
        if (o)
          for (var a = 0; a < o.length; ++a)
            o[a].lines.length || signal(o[a], 'hide')
        if (i)
          for (var s = 0; s < i.length; ++s)
            i[s].lines.length && signal(i[s], 'unhide')
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
          e.changeObjs && signal(t, 'changes', t, e.changeObjs),
          e.update && e.update.finish()
      }
      function runInOp(e, t) {
        if (e.curOp) return t()
        startOperation(e)
        try {
          return t()
        } finally {
          endOperation(e)
        }
      }
      function operation(e, t) {
        return function() {
          if (e.curOp) return t.apply(e, arguments)
          startOperation(e)
          try {
            return t.apply(e, arguments)
          } finally {
            endOperation(e)
          }
        }
      }
      function methodOp(e) {
        return function() {
          if (this.curOp) return e.apply(this, arguments)
          startOperation(this)
          try {
            return e.apply(this, arguments)
          } finally {
            endOperation(this)
          }
        }
      }
      function docMethodOp(e) {
        return function() {
          var t = this.cm
          if (!t || t.curOp) return e.apply(this, arguments)
          startOperation(t)
          try {
            return e.apply(this, arguments)
          } finally {
            endOperation(t)
          }
        }
      }
      function regChange(e, t, n, r) {
        null == t && (t = e.doc.first),
          null == n && (n = e.doc.first + e.doc.size),
          r || (r = 0)
        var o = e.display
        if (
          (r &&
            n < o.viewTo &&
            (null == o.updateLineNumbers || o.updateLineNumbers > t) &&
            (o.updateLineNumbers = t),
          (e.curOp.viewChanged = !0),
          t >= o.viewTo)
        )
          F && visualLineNo(e.doc, t) < o.viewTo && resetView(e)
        else if (n <= o.viewFrom)
          F && visualLineEndNo(e.doc, n + r) > o.viewFrom
            ? resetView(e)
            : ((o.viewFrom += r), (o.viewTo += r))
        else if (t <= o.viewFrom && n >= o.viewTo) resetView(e)
        else if (t <= o.viewFrom) {
          var i = viewCuttingPoint(e, n, n + r, 1)
          i
            ? ((o.view = o.view.slice(i.index)),
              (o.viewFrom = i.lineN),
              (o.viewTo += r))
            : resetView(e)
        } else if (n >= o.viewTo) {
          var a = viewCuttingPoint(e, t, t, -1)
          a
            ? ((o.view = o.view.slice(0, a.index)), (o.viewTo = a.lineN))
            : resetView(e)
        } else {
          var s = viewCuttingPoint(e, t, t, -1),
            l = viewCuttingPoint(e, n, n + r, 1)
          s && l
            ? ((o.view = o.view
                .slice(0, s.index)
                .concat(buildViewArray(e, s.lineN, l.lineN))
                .concat(o.view.slice(l.index))),
              (o.viewTo += r))
            : resetView(e)
        }
        var c = o.externalMeasured
        c &&
          (n < c.lineN
            ? (c.lineN += r)
            : t < c.lineN + c.size && (o.externalMeasured = null))
      }
      function regLineChange(e, t, n) {
        e.curOp.viewChanged = !0
        var r = e.display,
          o = e.display.externalMeasured
        if (
          (o &&
            t >= o.lineN &&
            t < o.lineN + o.size &&
            (r.externalMeasured = null),
          !(t < r.viewFrom || t >= r.viewTo))
        ) {
          var i = r.view[findViewIndex(e, t)]
          if (null != i.node) {
            var a = i.changes || (i.changes = [])
            ;-1 == indexOf(a, n) && a.push(n)
          }
        }
      }
      function resetView(e) {
        ;(e.display.viewFrom = e.display.viewTo = e.doc.first),
          (e.display.view = []),
          (e.display.viewOffset = 0)
      }
      function viewCuttingPoint(e, t, n, r) {
        var o,
          i = findViewIndex(e, t),
          a = e.display.view
        if (!F || n == e.doc.first + e.doc.size) return {index: i, lineN: n}
        for (var s = e.display.viewFrom, l = 0; l < i; l++) s += a[l].size
        if (s != t) {
          if (r > 0) {
            if (i == a.length - 1) return null
            ;(o = s + a[i].size - t), i++
          } else o = s - t
          ;(t += o), (n += o)
        }
        for (; visualLineNo(e.doc, n) != n; ) {
          if (i == (r < 0 ? 0 : a.length - 1)) return null
          ;(n += r * a[i - (r < 0 ? 1 : 0)].size), (i += r)
        }
        return {index: i, lineN: n}
      }
      function countDirtyView(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
          var o = t[r]
          o.hidden || (o.node && !o.changes) || ++n
        }
        return n
      }
      function startWorker(e, t) {
        e.doc.highlightFrontier < e.display.viewTo &&
          e.state.highlight.set(t, bind(highlightWorker, e))
      }
      function highlightWorker(e) {
        var t = e.doc
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var n = +new Date() + e.options.workTime,
            r = getContextBefore(e, t.highlightFrontier),
            o = []
          t.iter(
            r.line,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function(i) {
              if (r.line >= e.display.viewFrom) {
                var a = i.styles,
                  s =
                    i.text.length > e.options.maxHighlightLength
                      ? copyState(t.mode, r.state)
                      : null,
                  l = highlightLine(e, i, r, !0)
                s && (r.state = s), (i.styles = l.styles)
                var c = i.styleClasses,
                  u = l.classes
                u ? (i.styleClasses = u) : c && (i.styleClasses = null)
                for (
                  var d =
                      !a ||
                      a.length != i.styles.length ||
                      (c != u &&
                        (!c ||
                          !u ||
                          c.bgClass != u.bgClass ||
                          c.textClass != u.textClass)),
                    p = 0;
                  !d && p < a.length;
                  ++p
                )
                  d = a[p] != i.styles[p]
                d && o.push(r.line), (i.stateAfter = r.save()), r.nextLine()
              } else
                i.text.length <= e.options.maxHighlightLength &&
                  processLine(e, i.text, r),
                  (i.stateAfter = r.line % 5 == 0 ? r.save() : null),
                  r.nextLine()
              if (+new Date() > n)
                return startWorker(e, e.options.workDelay), !0
            }
          ),
            (t.highlightFrontier = r.line),
            (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
            o.length &&
              runInOp(e, function() {
                for (var t = 0; t < o.length; t++)
                  regLineChange(e, o[t], 'text')
              })
        }
      }
      var fe = function(e, t, n) {
        var r = e.display
        ;(this.viewport = t),
          (this.visible = visibleLines(r, e.doc, t)),
          (this.editorIsHidden = !r.wrapper.offsetWidth),
          (this.wrapperHeight = r.wrapper.clientHeight),
          (this.wrapperWidth = r.wrapper.clientWidth),
          (this.oldDisplayWidth = displayWidth(e)),
          (this.force = n),
          (this.dims = getDimensions(e)),
          (this.events = [])
      }
      function updateDisplayIfNeeded(e, t) {
        var n = e.display,
          r = e.doc
        if (t.editorIsHidden) return resetView(e), !1
        if (
          !t.force &&
          t.visible.from >= n.viewFrom &&
          t.visible.to <= n.viewTo &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
          n.renderedView == n.view &&
          0 == countDirtyView(e)
        )
          return !1
        maybeUpdateLineNumberWidth(e) &&
          (resetView(e), (t.dims = getDimensions(e)))
        var o = r.first + r.size,
          i = Math.max(t.visible.from - e.options.viewportMargin, r.first),
          a = Math.min(o, t.visible.to + e.options.viewportMargin)
        n.viewFrom < i &&
          i - n.viewFrom < 20 &&
          (i = Math.max(r.first, n.viewFrom)),
          n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(o, n.viewTo)),
          F && ((i = visualLineNo(e.doc, i)), (a = visualLineEndNo(e.doc, a)))
        var s =
          i != n.viewFrom ||
          a != n.viewTo ||
          n.lastWrapHeight != t.wrapperHeight ||
          n.lastWrapWidth != t.wrapperWidth
        !(function adjustView(e, t, n) {
          var r = e.display
          0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
            ? ((r.view = buildViewArray(e, t, n)), (r.viewFrom = t))
            : (r.viewFrom > t
                ? (r.view = buildViewArray(e, t, r.viewFrom).concat(r.view))
                : r.viewFrom < t &&
                  (r.view = r.view.slice(findViewIndex(e, t))),
              (r.viewFrom = t),
              r.viewTo < n
                ? (r.view = r.view.concat(buildViewArray(e, r.viewTo, n)))
                : r.viewTo > n &&
                  (r.view = r.view.slice(0, findViewIndex(e, n)))),
            (r.viewTo = n)
        })(e, i, a),
          (n.viewOffset = heightAtLine(getLine(e.doc, n.viewFrom))),
          (e.display.mover.style.top = n.viewOffset + 'px')
        var c = countDirtyView(e)
        if (
          !s &&
          0 == c &&
          !t.force &&
          n.renderedView == n.view &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
        )
          return !1
        var u = (function selectionSnapshot(e) {
          if (e.hasFocus()) return null
          var t = activeElt()
          if (!t || !contains(e.display.lineDiv, t)) return null
          var n = {activeElt: t}
          if (window.getSelection) {
            var r = window.getSelection()
            r.anchorNode &&
              r.extend &&
              contains(e.display.lineDiv, r.anchorNode) &&
              ((n.anchorNode = r.anchorNode),
              (n.anchorOffset = r.anchorOffset),
              (n.focusNode = r.focusNode),
              (n.focusOffset = r.focusOffset))
          }
          return n
        })(e)
        return (
          c > 4 && (n.lineDiv.style.display = 'none'),
          (function patchDisplay(e, t, n) {
            var r = e.display,
              o = e.options.lineNumbers,
              i = r.lineDiv,
              a = i.firstChild
            function rm(t) {
              var n = t.nextSibling
              return (
                l && y && e.display.currentWheelTarget == t
                  ? (t.style.display = 'none')
                  : t.parentNode.removeChild(t),
                n
              )
            }
            for (var s = r.view, c = r.viewFrom, u = 0; u < s.length; u++) {
              var d = s[u]
              if (d.hidden);
              else if (d.node && d.node.parentNode == i) {
                for (; a != d.node; ) a = rm(a)
                var p = o && null != t && t <= c && d.lineNumber
                d.changes &&
                  (indexOf(d.changes, 'gutter') > -1 && (p = !1),
                  updateLineForChanges(e, d, c, n)),
                  p &&
                    (removeChildren(d.lineNumber),
                    d.lineNumber.appendChild(
                      document.createTextNode(lineNumberFor(e.options, c))
                    )),
                  (a = d.node.nextSibling)
              } else {
                var h = buildLineElement(e, d, c, n)
                i.insertBefore(h, a)
              }
              c += d.size
            }
            for (; a; ) a = rm(a)
          })(e, n.updateLineNumbers, t.dims),
          c > 4 && (n.lineDiv.style.display = ''),
          (n.renderedView = n.view),
          (function restoreSelection(e) {
            if (
              e &&
              e.activeElt &&
              e.activeElt != activeElt() &&
              (e.activeElt.focus(),
              e.anchorNode &&
                contains(document.body, e.anchorNode) &&
                contains(document.body, e.focusNode))
            ) {
              var t = window.getSelection(),
                n = document.createRange()
              n.setEnd(e.anchorNode, e.anchorOffset),
                n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                t.extend(e.focusNode, e.focusOffset)
            }
          })(u),
          removeChildren(n.cursorDiv),
          removeChildren(n.selectionDiv),
          (n.gutters.style.height = n.sizer.style.minHeight = 0),
          s &&
            ((n.lastWrapHeight = t.wrapperHeight),
            (n.lastWrapWidth = t.wrapperWidth),
            startWorker(e, 400)),
          (n.updateLineNumbers = null),
          !0
        )
      }
      function postUpdateDisplay(e, t) {
        for (
          var n = t.viewport, r = !0;
          ((r &&
            e.options.lineWrapping &&
            t.oldDisplayWidth != displayWidth(e)) ||
            (n &&
              null != n.top &&
              (n = {
                top: Math.min(
                  e.doc.height + paddingVert(e.display) - displayHeight(e),
                  n.top
                )
              }),
            (t.visible = visibleLines(e.display, e.doc, n)),
            !(
              t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo
            ))) &&
          updateDisplayIfNeeded(e, t);
          r = !1
        ) {
          updateHeightsInViewport(e)
          var o = measureForScrollbars(e)
          updateSelection(e),
            updateScrollbars(e, o),
            setDocumentHeight(e, o),
            (t.force = !1)
        }
        t.signal(e, 'update', e),
          (e.display.viewFrom == e.display.reportedViewFrom &&
            e.display.viewTo == e.display.reportedViewTo) ||
            (t.signal(
              e,
              'viewportChange',
              e,
              e.display.viewFrom,
              e.display.viewTo
            ),
            (e.display.reportedViewFrom = e.display.viewFrom),
            (e.display.reportedViewTo = e.display.viewTo))
      }
      function updateDisplaySimple(e, t) {
        var n = new fe(e, t)
        if (updateDisplayIfNeeded(e, n)) {
          updateHeightsInViewport(e), postUpdateDisplay(e, n)
          var r = measureForScrollbars(e)
          updateSelection(e),
            updateScrollbars(e, r),
            setDocumentHeight(e, r),
            n.finish()
        }
      }
      function updateGutterSpace(e) {
        var t = e.display.gutters.offsetWidth
        e.display.sizer.style.marginLeft = t + 'px'
      }
      function setDocumentHeight(e, t) {
        ;(e.display.sizer.style.minHeight = t.docHeight + 'px'),
          (e.display.heightForcer.style.top = t.docHeight + 'px'),
          (e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + scrollGap(e) + 'px')
      }
      function updateGutters(e) {
        var t = e.display.gutters,
          n = e.options.gutters
        removeChildren(t)
        for (var r = 0; r < n.length; ++r) {
          var o = n[r],
            i = t.appendChild(elt('div', null, 'CodeMirror-gutter ' + o))
          'CodeMirror-linenumbers' == o &&
            ((e.display.lineGutter = i),
            (i.style.width = (e.display.lineNumWidth || 1) + 'px'))
        }
        ;(t.style.display = r ? '' : 'none'), updateGutterSpace(e)
      }
      function setGuttersForLineNumbers(e) {
        var t = indexOf(e.gutters, 'CodeMirror-linenumbers')
        ;-1 == t && e.lineNumbers
          ? (e.gutters = e.gutters.concat(['CodeMirror-linenumbers']))
          : t > -1 &&
            !e.lineNumbers &&
            ((e.gutters = e.gutters.slice(0)), e.gutters.splice(t, 1))
      }
      ;(fe.prototype.signal = function(e, t) {
        hasHandler(e, t) && this.events.push(arguments)
      }),
        (fe.prototype.finish = function() {
          for (var e = 0; e < this.events.length; e++)
            signal.apply(null, this.events[e])
        })
      var ge = 0,
        me = null
      function wheelEventDelta(e) {
        var t = e.wheelDeltaX,
          n = e.wheelDeltaY
        return (
          null == t &&
            e.detail &&
            e.axis == e.HORIZONTAL_AXIS &&
            (t = e.detail),
          null == n && e.detail && e.axis == e.VERTICAL_AXIS
            ? (n = e.detail)
            : null == n && (n = e.wheelDelta),
          {x: t, y: n}
        )
      }
      function wheelEventPixels(e) {
        var t = wheelEventDelta(e)
        return (t.x *= me), (t.y *= me), t
      }
      function onScrollWheel(e, t) {
        var r = wheelEventDelta(t),
          o = r.x,
          i = r.y,
          a = e.display,
          s = a.scroller,
          c = s.scrollWidth > s.clientWidth,
          u = s.scrollHeight > s.clientHeight
        if ((o && c) || (i && u)) {
          if (i && y && l)
            e: for (var p = t.target, h = a.view; p != s; p = p.parentNode)
              for (var f = 0; f < h.length; f++)
                if (h[f].node == p) {
                  e.display.currentWheelTarget = p
                  break e
                }
          if (o && !n && !d && null != me)
            return (
              i && u && updateScrollTop(e, Math.max(0, s.scrollTop + i * me)),
              setScrollLeft(e, Math.max(0, s.scrollLeft + o * me)),
              (!i || (i && u)) && e_preventDefault(t),
              void (a.wheelStartX = null)
            )
          if (i && null != me) {
            var g = i * me,
              m = e.doc.scrollTop,
              v = m + a.wrapper.clientHeight
            g < 0
              ? (m = Math.max(0, m + g - 50))
              : (v = Math.min(e.doc.height, v + g + 50)),
              updateDisplaySimple(e, {top: m, bottom: v})
          }
          ge < 20 &&
            (null == a.wheelStartX
              ? ((a.wheelStartX = s.scrollLeft),
                (a.wheelStartY = s.scrollTop),
                (a.wheelDX = o),
                (a.wheelDY = i),
                setTimeout(function() {
                  if (null != a.wheelStartX) {
                    var e = s.scrollLeft - a.wheelStartX,
                      t = s.scrollTop - a.wheelStartY,
                      n =
                        (t && a.wheelDY && t / a.wheelDY) ||
                        (e && a.wheelDX && e / a.wheelDX)
                    ;(a.wheelStartX = a.wheelStartY = null),
                      n && ((me = (me * ge + n) / (ge + 1)), ++ge)
                  }
                }, 200))
              : ((a.wheelDX += o), (a.wheelDY += i)))
        }
      }
      a ? (me = -0.53) : n ? (me = 15) : u ? (me = -0.7) : p && (me = -1 / 3)
      var ve = function(e, t) {
        ;(this.ranges = e), (this.primIndex = t)
      }
      ;(ve.prototype.primary = function() {
        return this.ranges[this.primIndex]
      }),
        (ve.prototype.equals = function(e) {
          if (e == this) return !0
          if (
            e.primIndex != this.primIndex ||
            e.ranges.length != this.ranges.length
          )
            return !1
          for (var t = 0; t < this.ranges.length; t++) {
            var n = this.ranges[t],
              r = e.ranges[t]
            if (
              !equalCursorPos(n.anchor, r.anchor) ||
              !equalCursorPos(n.head, r.head)
            )
              return !1
          }
          return !0
        }),
        (ve.prototype.deepCopy = function() {
          for (var e = [], t = 0; t < this.ranges.length; t++)
            e[t] = new ye(
              copyPos(this.ranges[t].anchor),
              copyPos(this.ranges[t].head)
            )
          return new ve(e, this.primIndex)
        }),
        (ve.prototype.somethingSelected = function() {
          for (var e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].empty()) return !0
          return !1
        }),
        (ve.prototype.contains = function(e, t) {
          t || (t = e)
          for (var n = 0; n < this.ranges.length; n++) {
            var r = this.ranges[n]
            if (cmp(t, r.from()) >= 0 && cmp(e, r.to()) <= 0) return n
          }
          return -1
        })
      var ye = function(e, t) {
        ;(this.anchor = e), (this.head = t)
      }
      function normalizeSelection(e, t, n) {
        var r = e && e.options.selectionsMayTouch,
          o = t[n]
        t.sort(function(e, t) {
          return cmp(e.from(), t.from())
        }),
          (n = indexOf(t, o))
        for (var i = 1; i < t.length; i++) {
          var a = t[i],
            s = t[i - 1],
            l = cmp(s.to(), a.from())
          if (r && !a.empty() ? l > 0 : l >= 0) {
            var c = minPos(s.from(), a.from()),
              u = maxPos(s.to(), a.to()),
              d = s.empty() ? a.from() == a.head : s.from() == s.head
            i <= n && --n, t.splice(--i, 2, new ye(d ? u : c, d ? c : u))
          }
        }
        return new ve(t, n)
      }
      function simpleSelection(e, t) {
        return new ve([new ye(e, t || e)], 0)
      }
      function changeEnd(e) {
        return e.text
          ? Pos(
              e.from.line + e.text.length - 1,
              lst(e.text).length + (1 == e.text.length ? e.from.ch : 0)
            )
          : e.to
      }
      function adjustForChange(e, t) {
        if (cmp(e, t.from) < 0) return e
        if (cmp(e, t.to) <= 0) return changeEnd(t)
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          r = e.ch
        return (
          e.line == t.to.line && (r += changeEnd(t).ch - t.to.ch), Pos(n, r)
        )
      }
      function computeSelAfterChange(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
          var o = e.sel.ranges[r]
          n.push(
            new ye(adjustForChange(o.anchor, t), adjustForChange(o.head, t))
          )
        }
        return normalizeSelection(e.cm, n, e.sel.primIndex)
      }
      function offsetPos(e, t, n) {
        return e.line == t.line
          ? Pos(n.line, e.ch - t.ch + n.ch)
          : Pos(n.line + (e.line - t.line), e.ch)
      }
      function loadMode(e) {
        ;(e.doc.mode = getMode(e.options, e.doc.modeOption)), resetModeState(e)
      }
      function resetModeState(e) {
        e.doc.iter(function(e) {
          e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
        }),
          (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
          startWorker(e, 100),
          e.state.modeGen++,
          e.curOp && regChange(e)
      }
      function isWholeLineUpdate(e, t) {
        return (
          0 == t.from.ch &&
          0 == t.to.ch &&
          '' == lst(t.text) &&
          (!e.cm || e.cm.options.wholeLineUpdateBefore)
        )
      }
      function updateDoc(e, t, n, r) {
        function spansFor(e) {
          return n ? n[e] : null
        }
        function update(e, n, o) {
          !(function updateLine(e, t, n, r) {
            ;(e.text = t),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null),
              detachMarkedSpans(e),
              attachMarkedSpans(e, n)
            var o = r ? r(e) : 1
            o != e.height && updateLineHeight(e, o)
          })(e, n, o, r),
            signalLater(e, 'change', e, t)
        }
        function linesFor(e, t) {
          for (var n = [], o = e; o < t; ++o)
            n.push(new re(a[o], spansFor(o), r))
          return n
        }
        var o = t.from,
          i = t.to,
          a = t.text,
          s = getLine(e, o.line),
          l = getLine(e, i.line),
          c = lst(a),
          u = spansFor(a.length - 1),
          d = i.line - o.line
        if (t.full)
          e.insert(0, linesFor(0, a.length)),
            e.remove(a.length, e.size - a.length)
        else if (isWholeLineUpdate(e, t)) {
          var p = linesFor(0, a.length - 1)
          update(l, l.text, u),
            d && e.remove(o.line, d),
            p.length && e.insert(o.line, p)
        } else if (s == l)
          if (1 == a.length)
            update(s, s.text.slice(0, o.ch) + c + s.text.slice(i.ch), u)
          else {
            var h = linesFor(1, a.length - 1)
            h.push(new re(c + s.text.slice(i.ch), u, r)),
              update(s, s.text.slice(0, o.ch) + a[0], spansFor(0)),
              e.insert(o.line + 1, h)
          }
        else if (1 == a.length)
          update(
            s,
            s.text.slice(0, o.ch) + a[0] + l.text.slice(i.ch),
            spansFor(0)
          ),
            e.remove(o.line + 1, d)
        else {
          update(s, s.text.slice(0, o.ch) + a[0], spansFor(0)),
            update(l, c + l.text.slice(i.ch), u)
          var f = linesFor(1, a.length - 1)
          d > 1 && e.remove(o.line + 1, d - 1), e.insert(o.line + 1, f)
        }
        signalLater(e, 'change', e, t)
      }
      function linkedDocs(e, t, n) {
        !(function propagate(e, r, o) {
          if (e.linked)
            for (var i = 0; i < e.linked.length; ++i) {
              var a = e.linked[i]
              if (a.doc != r) {
                var s = o && a.sharedHist
                ;(n && !s) || (t(a.doc, s), propagate(a.doc, e, s))
              }
            }
        })(e, null, !0)
      }
      function attachDoc(e, t) {
        if (t.cm) throw new Error('This document is already in use.')
        ;(e.doc = t),
          (t.cm = e),
          estimateLineHeights(e),
          loadMode(e),
          setDirectionClass(e),
          e.options.lineWrapping || findMaxLine(e),
          (e.options.mode = t.modeOption),
          regChange(e)
      }
      function setDirectionClass(e) {
        ;('rtl' == e.doc.direction ? addClass : L)(
          e.display.lineDiv,
          'CodeMirror-rtl'
        )
      }
      function History(e) {
        ;(this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = e || 1)
      }
      function historyChangeFromChange(e, t) {
        var n = {
          from: copyPos(t.from),
          to: changeEnd(t),
          text: getBetween(e, t.from, t.to)
        }
        return (
          attachLocalSpans(e, n, t.from.line, t.to.line + 1),
          linkedDocs(
            e,
            function(e) {
              return attachLocalSpans(e, n, t.from.line, t.to.line + 1)
            },
            !0
          ),
          n
        )
      }
      function clearSelectionEvents(e) {
        for (; e.length; ) {
          if (!lst(e).ranges) break
          e.pop()
        }
      }
      function addChangeToHistory(e, t, n, r) {
        var o = e.history
        o.undone.length = 0
        var i,
          a,
          s = +new Date()
        if (
          (o.lastOp == r ||
            (o.lastOrigin == t.origin &&
              t.origin &&
              (('+' == t.origin.charAt(0) &&
                o.lastModTime >
                  s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                '*' == t.origin.charAt(0)))) &&
          (i = (function lastChangeEvent(e, t) {
            return t
              ? (clearSelectionEvents(e.done), lst(e.done))
              : e.done.length && !lst(e.done).ranges
                ? lst(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                  ? (e.done.pop(), lst(e.done))
                  : void 0
          })(o, o.lastOp == r))
        )
          (a = lst(i.changes)),
            0 == cmp(t.from, t.to) && 0 == cmp(t.from, a.to)
              ? (a.to = changeEnd(t))
              : i.changes.push(historyChangeFromChange(e, t))
        else {
          var l = lst(o.done)
          for (
            (l && l.ranges) || pushSelectionToHistory(e.sel, o.done),
              i = {
                changes: [historyChangeFromChange(e, t)],
                generation: o.generation
              },
              o.done.push(i);
            o.done.length > o.undoDepth;

          )
            o.done.shift(), o.done[0].ranges || o.done.shift()
        }
        o.done.push(n),
          (o.generation = ++o.maxGeneration),
          (o.lastModTime = o.lastSelTime = s),
          (o.lastOp = o.lastSelOp = r),
          (o.lastOrigin = o.lastSelOrigin = t.origin),
          a || signal(e, 'historyAdded')
      }
      function addSelectionToHistory(e, t, n, r) {
        var o = e.history,
          i = r && r.origin
        n == o.lastSelOp ||
        (i &&
          o.lastSelOrigin == i &&
          ((o.lastModTime == o.lastSelTime && o.lastOrigin == i) ||
            (function selectionEventCanBeMerged(e, t, n, r) {
              var o = t.charAt(0)
              return (
                '*' == o ||
                ('+' == o &&
                  n.ranges.length == r.ranges.length &&
                  n.somethingSelected() == r.somethingSelected() &&
                  new Date() - e.history.lastSelTime <=
                    (e.cm ? e.cm.options.historyEventDelay : 500))
              )
            })(e, i, lst(o.done), t)))
          ? (o.done[o.done.length - 1] = t)
          : pushSelectionToHistory(t, o.done),
          (o.lastSelTime = +new Date()),
          (o.lastSelOrigin = i),
          (o.lastSelOp = n),
          r && !1 !== r.clearRedo && clearSelectionEvents(o.undone)
      }
      function pushSelectionToHistory(e, t) {
        var n = lst(t)
        ;(n && n.ranges && n.equals(e)) || t.push(e)
      }
      function attachLocalSpans(e, t, n, r) {
        var o = t['spans_' + e.id],
          i = 0
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(
          n
        ) {
          n.markedSpans &&
            ((o || (o = t['spans_' + e.id] = {}))[i] = n.markedSpans),
            ++i
        })
      }
      function removeClearedSpans(e) {
        if (!e) return null
        for (var t, n = 0; n < e.length; ++n)
          e[n].marker.explicitlyCleared
            ? t || (t = e.slice(0, n))
            : t && t.push(e[n])
        return t ? (t.length ? t : null) : e
      }
      function mergeOldSpans(e, t) {
        var n = (function getOldSpans(e, t) {
            var n = t['spans_' + e.id]
            if (!n) return null
            for (var r = [], o = 0; o < t.text.length; ++o)
              r.push(removeClearedSpans(n[o]))
            return r
          })(e, t),
          r = stretchSpansOverChange(e, t)
        if (!n) return r
        if (!r) return n
        for (var o = 0; o < n.length; ++o) {
          var i = n[o],
            a = r[o]
          if (i && a)
            e: for (var s = 0; s < a.length; ++s) {
              for (var l = a[s], c = 0; c < i.length; ++c)
                if (i[c].marker == l.marker) continue e
              i.push(l)
            }
          else a && (n[o] = a)
        }
        return n
      }
      function copyHistoryArray(e, t, n) {
        for (var r = [], o = 0; o < e.length; ++o) {
          var i = e[o]
          if (i.ranges) r.push(n ? ve.prototype.deepCopy.call(i) : i)
          else {
            var a = i.changes,
              s = []
            r.push({changes: s})
            for (var l = 0; l < a.length; ++l) {
              var c = a[l],
                u = void 0
              if ((s.push({from: c.from, to: c.to, text: c.text}), t))
                for (var d in c)
                  (u = d.match(/^spans_(\d+)$/)) &&
                    indexOf(t, Number(u[1])) > -1 &&
                    ((lst(s)[d] = c[d]), delete c[d])
            }
          }
        }
        return r
      }
      function extendRange(e, t, n, r) {
        if (r) {
          var o = e.anchor
          if (n) {
            var i = cmp(t, o) < 0
            i != cmp(n, o) < 0
              ? ((o = t), (t = n))
              : i != cmp(t, n) < 0 && (t = n)
          }
          return new ye(o, t)
        }
        return new ye(n || t, t)
      }
      function extendSelection(e, t, n, r, o) {
        null == o && (o = e.cm && (e.cm.display.shift || e.extend)),
          setSelection(e, new ve([extendRange(e.sel.primary(), t, n, o)], 0), r)
      }
      function extendSelections(e, t, n) {
        for (
          var r = [], o = e.cm && (e.cm.display.shift || e.extend), i = 0;
          i < e.sel.ranges.length;
          i++
        )
          r[i] = extendRange(e.sel.ranges[i], t[i], null, o)
        setSelection(e, normalizeSelection(e.cm, r, e.sel.primIndex), n)
      }
      function replaceOneSelection(e, t, n, r) {
        var o = e.sel.ranges.slice(0)
        ;(o[t] = n),
          setSelection(e, normalizeSelection(e.cm, o, e.sel.primIndex), r)
      }
      function setSimpleSelection(e, t, n, r) {
        setSelection(e, simpleSelection(t, n), r)
      }
      function setSelectionReplaceHistory(e, t, n) {
        var r = e.history.done,
          o = lst(r)
        o && o.ranges
          ? ((r[r.length - 1] = t), setSelectionNoUndo(e, t, n))
          : setSelection(e, t, n)
      }
      function setSelection(e, t, n) {
        setSelectionNoUndo(e, t, n),
          addSelectionToHistory(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
      }
      function setSelectionNoUndo(e, t, n) {
        ;(hasHandler(e, 'beforeSelectionChange') ||
          (e.cm && hasHandler(e.cm, 'beforeSelectionChange'))) &&
          (t = (function filterSelectionChange(e, t, n) {
            var r = {
              ranges: t.ranges,
              update: function(t) {
                this.ranges = []
                for (var n = 0; n < t.length; n++)
                  this.ranges[n] = new ye(
                    clipPos(e, t[n].anchor),
                    clipPos(e, t[n].head)
                  )
              },
              origin: n && n.origin
            }
            return (
              signal(e, 'beforeSelectionChange', e, r),
              e.cm && signal(e.cm, 'beforeSelectionChange', e.cm, r),
              r.ranges != t.ranges
                ? normalizeSelection(e.cm, r.ranges, r.ranges.length - 1)
                : t
            )
          })(e, t, n)),
          setSelectionInner(
            e,
            skipAtomicInSelection(
              e,
              t,
              (n && n.bias) ||
                (cmp(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1),
              !0
            )
          ),
          (n && !1 === n.scroll) || !e.cm || ensureCursorVisible(e.cm)
      }
      function setSelectionInner(e, t) {
        t.equals(e.sel) ||
          ((e.sel = t),
          e.cm &&
            ((e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0),
            signalCursorActivity(e.cm)),
          signalLater(e, 'cursorActivity', e))
      }
      function reCheckSelection(e) {
        setSelectionInner(e, skipAtomicInSelection(e, e.sel, null, !1))
      }
      function skipAtomicInSelection(e, t, n, r) {
        for (var o, i = 0; i < t.ranges.length; i++) {
          var a = t.ranges[i],
            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[i],
            l = skipAtomic(e, a.anchor, s && s.anchor, n, r),
            c = skipAtomic(e, a.head, s && s.head, n, r)
          ;(o || l != a.anchor || c != a.head) &&
            (o || (o = t.ranges.slice(0, i)), (o[i] = new ye(l, c)))
        }
        return o ? normalizeSelection(e.cm, o, t.primIndex) : t
      }
      function skipAtomicInner(e, t, n, r, o) {
        var i = getLine(e, t.line)
        if (i.markedSpans)
          for (var a = 0; a < i.markedSpans.length; ++a) {
            var s = i.markedSpans[a],
              l = s.marker
            if (
              (null == s.from ||
                (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) &&
              (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))
            ) {
              if (o && (signal(l, 'beforeCursorEnter'), l.explicitlyCleared)) {
                if (i.markedSpans) {
                  --a
                  continue
                }
                break
              }
              if (!l.atomic) continue
              if (n) {
                var c = l.find(r < 0 ? 1 : -1),
                  u = void 0
                if (
                  ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) &&
                    (c = movePos(e, c, -r, c && c.line == t.line ? i : null)),
                  c &&
                    c.line == t.line &&
                    (u = cmp(c, n)) &&
                    (r < 0 ? u < 0 : u > 0))
                )
                  return skipAtomicInner(e, c, t, r, o)
              }
              var d = l.find(r < 0 ? -1 : 1)
              return (
                (r < 0 ? l.inclusiveLeft : l.inclusiveRight) &&
                  (d = movePos(e, d, r, d.line == t.line ? i : null)),
                d ? skipAtomicInner(e, d, t, r, o) : null
              )
            }
          }
        return t
      }
      function skipAtomic(e, t, n, r, o) {
        var i = r || 1,
          a =
            skipAtomicInner(e, t, n, i, o) ||
            (!o && skipAtomicInner(e, t, n, i, !0)) ||
            skipAtomicInner(e, t, n, -i, o) ||
            (!o && skipAtomicInner(e, t, n, -i, !0))
        return a || ((e.cantEdit = !0), Pos(e.first, 0))
      }
      function movePos(e, t, n, r) {
        return n < 0 && 0 == t.ch
          ? t.line > e.first
            ? clipPos(e, Pos(t.line - 1))
            : null
          : n > 0 && t.ch == (r || getLine(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
              ? Pos(t.line + 1, 0)
              : null
            : new Pos(t.line, t.ch + n)
      }
      function selectAll(e) {
        e.setSelection(Pos(e.firstLine(), 0), Pos(e.lastLine()), A)
      }
      function filterChange(e, t, n) {
        var r = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return (r.canceled = !0)
          }
        }
        return (
          n &&
            (r.update = function(t, n, o, i) {
              t && (r.from = clipPos(e, t)),
                n && (r.to = clipPos(e, n)),
                o && (r.text = o),
                void 0 !== i && (r.origin = i)
            }),
          signal(e, 'beforeChange', e, r),
          e.cm && signal(e.cm, 'beforeChange', e.cm, r),
          r.canceled
            ? null
            : {from: r.from, to: r.to, text: r.text, origin: r.origin}
        )
      }
      function makeChange(e, t, n) {
        if (e.cm) {
          if (!e.cm.curOp) return operation(e.cm, makeChange)(e, t, n)
          if (e.cm.state.suppressEdits) return
        }
        if (
          !(
            hasHandler(e, 'beforeChange') ||
            (e.cm && hasHandler(e.cm, 'beforeChange'))
          ) ||
          (t = filterChange(e, t, !0))
        ) {
          var r =
            I &&
            !n &&
            (function removeReadOnlyRanges(e, t, n) {
              var r = null
              if (
                (e.iter(t.line, n.line + 1, function(e) {
                  if (e.markedSpans)
                    for (var t = 0; t < e.markedSpans.length; ++t) {
                      var n = e.markedSpans[t].marker
                      !n.readOnly ||
                        (r && -1 != indexOf(r, n)) ||
                        (r || (r = [])).push(n)
                    }
                }),
                !r)
              )
                return null
              for (var o = [{from: t, to: n}], i = 0; i < r.length; ++i)
                for (var a = r[i], s = a.find(0), l = 0; l < o.length; ++l) {
                  var c = o[l]
                  if (!(cmp(c.to, s.from) < 0 || cmp(c.from, s.to) > 0)) {
                    var u = [l, 1],
                      d = cmp(c.from, s.from),
                      p = cmp(c.to, s.to)
                    ;(d < 0 || (!a.inclusiveLeft && !d)) &&
                      u.push({from: c.from, to: s.from}),
                      (p > 0 || (!a.inclusiveRight && !p)) &&
                        u.push({from: s.to, to: c.to}),
                      o.splice.apply(o, u),
                      (l += u.length - 3)
                  }
                }
              return o
            })(e, t.from, t.to)
          if (r)
            for (var o = r.length - 1; o >= 0; --o)
              makeChangeInner(e, {
                from: r[o].from,
                to: r[o].to,
                text: o ? [''] : t.text,
                origin: t.origin
              })
          else makeChangeInner(e, t)
        }
      }
      function makeChangeInner(e, t) {
        if (1 != t.text.length || '' != t.text[0] || 0 != cmp(t.from, t.to)) {
          var n = computeSelAfterChange(e, t)
          addChangeToHistory(e, t, n, e.cm ? e.cm.curOp.id : NaN),
            makeChangeSingleDoc(e, t, n, stretchSpansOverChange(e, t))
          var r = []
          linkedDocs(e, function(e, n) {
            n ||
              -1 != indexOf(r, e.history) ||
              (rebaseHist(e.history, t), r.push(e.history)),
              makeChangeSingleDoc(e, t, null, stretchSpansOverChange(e, t))
          })
        }
      }
      function makeChangeFromHistory(e, t, n) {
        var r = e.cm && e.cm.state.suppressEdits
        if (!r || n) {
          for (
            var o,
              i = e.history,
              a = e.sel,
              s = 'undo' == t ? i.done : i.undone,
              l = 'undo' == t ? i.undone : i.done,
              c = 0;
            c < s.length &&
            ((o = s[c]), n ? !o.ranges || o.equals(e.sel) : o.ranges);
            c++
          );
          if (c != s.length) {
            for (i.lastOrigin = i.lastSelOrigin = null; ; ) {
              if (!(o = s.pop()).ranges) {
                if (r) return void s.push(o)
                break
              }
              if ((pushSelectionToHistory(o, l), n && !o.equals(e.sel)))
                return void setSelection(e, o, {clearRedo: !1})
              a = o
            }
            var u = []
            pushSelectionToHistory(a, l),
              l.push({changes: u, generation: i.generation}),
              (i.generation = o.generation || ++i.maxGeneration)
            for (
              var d =
                  hasHandler(e, 'beforeChange') ||
                  (e.cm && hasHandler(e.cm, 'beforeChange')),
                p = function(n) {
                  var r = o.changes[n]
                  if (((r.origin = t), d && !filterChange(e, r, !1)))
                    return (s.length = 0), {}
                  u.push(historyChangeFromChange(e, r))
                  var i = n ? computeSelAfterChange(e, r) : lst(s)
                  makeChangeSingleDoc(e, r, i, mergeOldSpans(e, r)),
                    !n &&
                      e.cm &&
                      e.cm.scrollIntoView({from: r.from, to: changeEnd(r)})
                  var a = []
                  linkedDocs(e, function(e, t) {
                    t ||
                      -1 != indexOf(a, e.history) ||
                      (rebaseHist(e.history, r), a.push(e.history)),
                      makeChangeSingleDoc(e, r, null, mergeOldSpans(e, r))
                  })
                },
                h = o.changes.length - 1;
              h >= 0;
              --h
            ) {
              var f = p(h)
              if (f) return f.v
            }
          }
        }
      }
      function shiftDoc(e, t) {
        if (
          0 != t &&
          ((e.first += t),
          (e.sel = new ve(
            map(e.sel.ranges, function(e) {
              return new ye(
                Pos(e.anchor.line + t, e.anchor.ch),
                Pos(e.head.line + t, e.head.ch)
              )
            }),
            e.sel.primIndex
          )),
          e.cm)
        ) {
          regChange(e.cm, e.first, e.first - t, t)
          for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            regLineChange(e.cm, r, 'gutter')
        }
      }
      function makeChangeSingleDoc(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
          return operation(e.cm, makeChangeSingleDoc)(e, t, n, r)
        if (t.to.line < e.first)
          shiftDoc(e, t.text.length - 1 - (t.to.line - t.from.line))
        else if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var o = t.text.length - 1 - (e.first - t.from.line)
            shiftDoc(e, o),
              (t = {
                from: Pos(e.first, 0),
                to: Pos(t.to.line + o, t.to.ch),
                text: [lst(t.text)],
                origin: t.origin
              })
          }
          var i = e.lastLine()
          t.to.line > i &&
            (t = {
              from: t.from,
              to: Pos(i, getLine(e, i).text.length),
              text: [t.text[0]],
              origin: t.origin
            }),
            (t.removed = getBetween(e, t.from, t.to)),
            n || (n = computeSelAfterChange(e, t)),
            e.cm
              ? (function makeChangeSingleDocInEditor(e, t, n) {
                  var r = e.doc,
                    o = e.display,
                    i = t.from,
                    a = t.to,
                    s = !1,
                    l = i.line
                  e.options.lineWrapping ||
                    ((l = lineNo(visualLine(getLine(r, i.line)))),
                    r.iter(l, a.line + 1, function(e) {
                      if (e == o.maxLine) return (s = !0), !0
                    }))
                  r.sel.contains(t.from, t.to) > -1 && signalCursorActivity(e)
                  updateDoc(r, t, n, estimateHeight(e)),
                    e.options.lineWrapping ||
                      (r.iter(l, i.line + t.text.length, function(e) {
                        var t = lineLength(e)
                        t > o.maxLineLength &&
                          ((o.maxLine = e),
                          (o.maxLineLength = t),
                          (o.maxLineChanged = !0),
                          (s = !1))
                      }),
                      s && (e.curOp.updateMaxLine = !0))
                  ;(function retreatFrontier(e, t) {
                    if (
                      ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                      !(e.highlightFrontier < t - 10))
                    ) {
                      for (var n = e.first, r = t - 1; r > n; r--) {
                        var o = getLine(e, r).stateAfter
                        if (o && (!(o instanceof ee) || r + o.lookAhead < t)) {
                          n = r + 1
                          break
                        }
                      }
                      e.highlightFrontier = Math.min(e.highlightFrontier, n)
                    }
                  })(r, i.line),
                    startWorker(e, 400)
                  var c = t.text.length - (a.line - i.line) - 1
                  t.full
                    ? regChange(e)
                    : i.line != a.line ||
                      1 != t.text.length ||
                      isWholeLineUpdate(e.doc, t)
                      ? regChange(e, i.line, a.line + 1, c)
                      : regLineChange(e, i.line, 'text')
                  var u = hasHandler(e, 'changes'),
                    d = hasHandler(e, 'change')
                  if (d || u) {
                    var p = {
                      from: i,
                      to: a,
                      text: t.text,
                      removed: t.removed,
                      origin: t.origin
                    }
                    d && signalLater(e, 'change', e, p),
                      u &&
                        (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(
                          p
                        )
                  }
                  e.display.selForContextMenu = null
                })(e.cm, t, r)
              : updateDoc(e, t, r),
            setSelectionNoUndo(e, n, A)
        }
      }
      function replaceRange(e, t, n, r, o) {
        var i
        r || (r = n),
          cmp(r, n) < 0 && ((n = (i = [r, n])[0]), (r = i[1])),
          'string' == typeof t && (t = e.splitLines(t)),
          makeChange(e, {from: n, to: r, text: t, origin: o})
      }
      function rebaseHistSelSingle(e, t, n, r) {
        n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0))
      }
      function rebaseHistArray(e, t, n, r) {
        for (var o = 0; o < e.length; ++o) {
          var i = e[o],
            a = !0
          if (i.ranges) {
            i.copied || ((i = e[o] = i.deepCopy()).copied = !0)
            for (var s = 0; s < i.ranges.length; s++)
              rebaseHistSelSingle(i.ranges[s].anchor, t, n, r),
                rebaseHistSelSingle(i.ranges[s].head, t, n, r)
          } else {
            for (var l = 0; l < i.changes.length; ++l) {
              var c = i.changes[l]
              if (n < c.from.line)
                (c.from = Pos(c.from.line + r, c.from.ch)),
                  (c.to = Pos(c.to.line + r, c.to.ch))
              else if (t <= c.to.line) {
                a = !1
                break
              }
            }
            a || (e.splice(0, o + 1), (o = 0))
          }
        }
      }
      function rebaseHist(e, t) {
        var n = t.from.line,
          r = t.to.line,
          o = t.text.length - (r - n) - 1
        rebaseHistArray(e.done, n, r, o), rebaseHistArray(e.undone, n, r, o)
      }
      function changeLine(e, t, n, r) {
        var o = t,
          i = t
        return (
          'number' == typeof t
            ? (i = getLine(e, clipLine(e, t)))
            : (o = lineNo(t)),
          null == o ? null : (r(i, o) && e.cm && regLineChange(e.cm, o, n), i)
        )
      }
      function LeafChunk(e) {
        ;(this.lines = e), (this.parent = null)
        for (var t = 0, n = 0; n < e.length; ++n)
          (e[n].parent = this), (t += e[n].height)
        this.height = t
      }
      function BranchChunk(e) {
        this.children = e
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
          var o = e[r]
          ;(t += o.chunkSize()), (n += o.height), (o.parent = this)
        }
        ;(this.size = t), (this.height = n), (this.parent = null)
      }
      ;(ye.prototype.from = function() {
        return minPos(this.anchor, this.head)
      }),
        (ye.prototype.to = function() {
          return maxPos(this.anchor, this.head)
        }),
        (ye.prototype.empty = function() {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          )
        }),
        (LeafChunk.prototype = {
          chunkSize: function() {
            return this.lines.length
          },
          removeInner: function(e, t) {
            for (var n = e, r = e + t; n < r; ++n) {
              var o = this.lines[n]
              ;(this.height -= o.height),
                cleanUpLine(o),
                signalLater(o, 'delete')
            }
            this.lines.splice(e, t)
          },
          collapse: function(e) {
            e.push.apply(e, this.lines)
          },
          insertInner: function(e, t, n) {
            ;(this.height += n),
              (this.lines = this.lines
                .slice(0, e)
                .concat(t)
                .concat(this.lines.slice(e)))
            for (var r = 0; r < t.length; ++r) t[r].parent = this
          },
          iterN: function(e, t, n) {
            for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0
          }
        }),
        (BranchChunk.prototype = {
          chunkSize: function() {
            return this.size
          },
          removeInner: function(e, t) {
            this.size -= t
            for (var n = 0; n < this.children.length; ++n) {
              var r = this.children[n],
                o = r.chunkSize()
              if (e < o) {
                var i = Math.min(t, o - e),
                  a = r.height
                if (
                  (r.removeInner(e, i),
                  (this.height -= a - r.height),
                  o == i && (this.children.splice(n--, 1), (r.parent = null)),
                  0 == (t -= i))
                )
                  break
                e = 0
              } else e -= o
            }
            if (
              this.size - t < 25 &&
              (this.children.length > 1 ||
                !(this.children[0] instanceof LeafChunk))
            ) {
              var s = []
              this.collapse(s),
                (this.children = [new LeafChunk(s)]),
                (this.children[0].parent = this)
            }
          },
          collapse: function(e) {
            for (var t = 0; t < this.children.length; ++t)
              this.children[t].collapse(e)
          },
          insertInner: function(e, t, n) {
            ;(this.size += t.length), (this.height += n)
            for (var r = 0; r < this.children.length; ++r) {
              var o = this.children[r],
                i = o.chunkSize()
              if (e <= i) {
                if ((o.insertInner(e, t, n), o.lines && o.lines.length > 50)) {
                  for (
                    var a = o.lines.length % 25 + 25, s = a;
                    s < o.lines.length;

                  ) {
                    var l = new LeafChunk(o.lines.slice(s, (s += 25)))
                    ;(o.height -= l.height),
                      this.children.splice(++r, 0, l),
                      (l.parent = this)
                  }
                  ;(o.lines = o.lines.slice(0, a)), this.maybeSpill()
                }
                break
              }
              e -= i
            }
          },
          maybeSpill: function() {
            if (!(this.children.length <= 10)) {
              var e = this
              do {
                var t = new BranchChunk(
                  e.children.splice(e.children.length - 5, 5)
                )
                if (e.parent) {
                  ;(e.size -= t.size), (e.height -= t.height)
                  var n = indexOf(e.parent.children, e)
                  e.parent.children.splice(n + 1, 0, t)
                } else {
                  var r = new BranchChunk(e.children)
                  ;(r.parent = e), (e.children = [r, t]), (e = r)
                }
                t.parent = e.parent
              } while (e.children.length > 10)
              e.parent.maybeSpill()
            }
          },
          iterN: function(e, t, n) {
            for (var r = 0; r < this.children.length; ++r) {
              var o = this.children[r],
                i = o.chunkSize()
              if (e < i) {
                var a = Math.min(t, i - e)
                if (o.iterN(e, a, n)) return !0
                if (0 == (t -= a)) break
                e = 0
              } else e -= i
            }
          }
        })
      var be = function(e, t, n) {
        if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r])
        ;(this.doc = e), (this.node = t)
      }
      function adjustScrollWhenAboveVisible(e, t, n) {
        heightAtLine(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
          addToScrollTop(e, n)
      }
      ;(be.prototype.clear = function() {
        var e = this.doc.cm,
          t = this.line.widgets,
          n = this.line,
          r = lineNo(n)
        if (null != r && t) {
          for (var o = 0; o < t.length; ++o) t[o] == this && t.splice(o--, 1)
          t.length || (n.widgets = null)
          var i = widgetHeight(this)
          updateLineHeight(n, Math.max(0, n.height - i)),
            e &&
              (runInOp(e, function() {
                adjustScrollWhenAboveVisible(e, n, -i),
                  regLineChange(e, r, 'widget')
              }),
              signalLater(e, 'lineWidgetCleared', e, this, r))
        }
      }),
        (be.prototype.changed = function() {
          var e = this,
            t = this.height,
            n = this.doc.cm,
            r = this.line
          this.height = null
          var o = widgetHeight(this) - t
          o &&
            (lineIsHidden(this.doc, r) || updateLineHeight(r, r.height + o),
            n &&
              runInOp(n, function() {
                ;(n.curOp.forceUpdate = !0),
                  adjustScrollWhenAboveVisible(n, r, o),
                  signalLater(n, 'lineWidgetChanged', n, e, lineNo(r))
              }))
        }),
        eventMixin(be)
      var xe = 0,
        Ce = function(e, t) {
          ;(this.lines = []), (this.type = t), (this.doc = e), (this.id = ++xe)
        }
      function markText(e, t, n, r, o) {
        if (r && r.shared)
          return (function markTextShared(e, t, n, r, o) {
            ;(r = copyObj(r)).shared = !1
            var i = [markText(e, t, n, r, o)],
              a = i[0],
              s = r.widgetNode
            return (
              linkedDocs(e, function(e) {
                s && (r.widgetNode = s.cloneNode(!0)),
                  i.push(markText(e, clipPos(e, t), clipPos(e, n), r, o))
                for (var l = 0; l < e.linked.length; ++l)
                  if (e.linked[l].isParent) return
                a = lst(i)
              }),
              new we(i, a)
            )
          })(e, t, n, r, o)
        if (e.cm && !e.cm.curOp) return operation(e.cm, markText)(e, t, n, r, o)
        var i = new Ce(e, o),
          a = cmp(t, n)
        if (
          (r && copyObj(r, i, !1), a > 0 || (0 == a && !1 !== i.clearWhenEmpty))
        )
          return i
        if (
          (i.replacedWith &&
            ((i.collapsed = !0),
            (i.widgetNode = eltP(
              'span',
              [i.replacedWith],
              'CodeMirror-widget'
            )),
            r.handleMouseEvents ||
              i.widgetNode.setAttribute('cm-ignore-events', 'true'),
            r.insertLeft && (i.widgetNode.insertLeft = !0)),
          i.collapsed)
        ) {
          if (
            conflictingCollapsedRange(e, t.line, t, n, i) ||
            (t.line != n.line && conflictingCollapsedRange(e, n.line, t, n, i))
          )
            throw new Error(
              'Inserting collapsed marker partially overlapping an existing one'
            )
          !(function seeCollapsedSpans() {
            F = !0
          })()
        }
        i.addToHistory &&
          addChangeToHistory(
            e,
            {from: t, to: n, origin: 'markText'},
            e.sel,
            NaN
          )
        var s,
          l = t.line,
          c = e.cm
        if (
          (e.iter(l, n.line + 1, function(e) {
            c &&
              i.collapsed &&
              !c.options.lineWrapping &&
              visualLine(e) == c.display.maxLine &&
              (s = !0),
              i.collapsed && l != t.line && updateLineHeight(e, 0),
              (function addMarkedSpan(e, t) {
                ;(e.markedSpans = e.markedSpans
                  ? e.markedSpans.concat([t])
                  : [t]),
                  t.marker.attachLine(e)
              })(
                e,
                new MarkedSpan(
                  i,
                  l == t.line ? t.ch : null,
                  l == n.line ? n.ch : null
                )
              ),
              ++l
          }),
          i.collapsed &&
            e.iter(t.line, n.line + 1, function(t) {
              lineIsHidden(e, t) && updateLineHeight(t, 0)
            }),
          i.clearOnEnter &&
            V(i, 'beforeCursorEnter', function() {
              return i.clear()
            }),
          i.readOnly &&
            (!(function seeReadOnlySpans() {
              I = !0
            })(),
            (e.history.done.length || e.history.undone.length) &&
              e.clearHistory()),
          i.collapsed && ((i.id = ++xe), (i.atomic = !0)),
          c)
        ) {
          if ((s && (c.curOp.updateMaxLine = !0), i.collapsed))
            regChange(c, t.line, n.line + 1)
          else if (
            i.className ||
            i.startStyle ||
            i.endStyle ||
            i.css ||
            i.attributes ||
            i.title
          )
            for (var u = t.line; u <= n.line; u++) regLineChange(c, u, 'text')
          i.atomic && reCheckSelection(c.doc),
            signalLater(c, 'markerAdded', c, i)
        }
        return i
      }
      ;(Ce.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm,
            t = e && !e.curOp
          if ((t && startOperation(e), hasHandler(this, 'clear'))) {
            var n = this.find()
            n && signalLater(this, 'clear', n.from, n.to)
          }
          for (var r = null, o = null, i = 0; i < this.lines.length; ++i) {
            var a = this.lines[i],
              s = getMarkedSpanFor(a.markedSpans, this)
            e && !this.collapsed
              ? regLineChange(e, lineNo(a), 'text')
              : e &&
                (null != s.to && (o = lineNo(a)),
                null != s.from && (r = lineNo(a))),
              (a.markedSpans = removeMarkedSpan(a.markedSpans, s)),
              null == s.from &&
                this.collapsed &&
                !lineIsHidden(this.doc, a) &&
                e &&
                updateLineHeight(a, textHeight(e.display))
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var c = visualLine(this.lines[l]),
                u = lineLength(c)
              u > e.display.maxLineLength &&
                ((e.display.maxLine = c),
                (e.display.maxLineLength = u),
                (e.display.maxLineChanged = !0))
            }
          null != r && e && this.collapsed && regChange(e, r, o + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), e && reCheckSelection(e.doc)),
            e && signalLater(e, 'markerCleared', e, this, r, o),
            t && endOperation(e),
            this.parent && this.parent.clear()
        }
      }),
        (Ce.prototype.find = function(e, t) {
          var n, r
          null == e && 'bookmark' == this.type && (e = 1)
          for (var o = 0; o < this.lines.length; ++o) {
            var i = this.lines[o],
              a = getMarkedSpanFor(i.markedSpans, this)
            if (
              null != a.from &&
              ((n = Pos(t ? i : lineNo(i), a.from)), -1 == e)
            )
              return n
            if (null != a.to && ((r = Pos(t ? i : lineNo(i), a.to)), 1 == e))
              return r
          }
          return n && {from: n, to: r}
        }),
        (Ce.prototype.changed = function() {
          var e = this,
            t = this.find(-1, !0),
            n = this,
            r = this.doc.cm
          t &&
            r &&
            runInOp(r, function() {
              var o = t.line,
                i = lineNo(t.line),
                a = findViewForLine(r, i)
              if (
                (a &&
                  (clearLineMeasurementCacheFor(a),
                  (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                (r.curOp.updateMaxLine = !0),
                !lineIsHidden(n.doc, o) && null != n.height)
              ) {
                var s = n.height
                n.height = null
                var l = widgetHeight(n) - s
                l && updateLineHeight(o, o.height + l)
              }
              signalLater(r, 'markerChanged', r, e)
            })
        }),
        (Ce.prototype.attachLine = function(e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp
            ;(t.maybeHiddenMarkers &&
              -1 != indexOf(t.maybeHiddenMarkers, this)) ||
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                this
              )
          }
          this.lines.push(e)
        }),
        (Ce.prototype.detachLine = function(e) {
          if (
            (this.lines.splice(indexOf(this.lines, e), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var t = this.doc.cm.curOp
            ;(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
          }
        }),
        eventMixin(Ce)
      var we = function(e, t) {
        ;(this.markers = e), (this.primary = t)
        for (var n = 0; n < e.length; ++n) e[n].parent = this
      }
      function findSharedMarkers(e) {
        return e.findMarks(
          Pos(e.first, 0),
          e.clipPos(Pos(e.lastLine())),
          function(e) {
            return e.parent
          }
        )
      }
      function detachSharedMarkers(e) {
        for (
          var t = function(t) {
              var n = e[t],
                r = [n.primary.doc]
              linkedDocs(n.primary.doc, function(e) {
                return r.push(e)
              })
              for (var o = 0; o < n.markers.length; o++) {
                var i = n.markers[o]
                ;-1 == indexOf(r, i.doc) &&
                  ((i.parent = null), n.markers.splice(o--, 1))
              }
            },
            n = 0;
          n < e.length;
          n++
        )
          t(n)
      }
      ;(we.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0
          for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear()
          signalLater(this, 'clear')
        }
      }),
        (we.prototype.find = function(e, t) {
          return this.primary.find(e, t)
        }),
        eventMixin(we)
      var Se = 0,
        ke = function(e, t, n, r, o) {
          if (!(this instanceof ke)) return new ke(e, t, n, r, o)
          null == n && (n = 0),
            BranchChunk.call(this, [new LeafChunk([new re('', null)])]),
            (this.first = n),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = n)
          var i = Pos(n, 0)
          ;(this.sel = simpleSelection(i)),
            (this.history = new History(null)),
            (this.id = ++Se),
            (this.modeOption = t),
            (this.lineSep = r),
            (this.direction = 'rtl' == o ? 'rtl' : 'ltr'),
            (this.extend = !1),
            'string' == typeof e && (e = this.splitLines(e)),
            updateDoc(this, {from: i, to: i, text: e}),
            setSelection(this, simpleSelection(i), A)
        }
      ;(ke.prototype = createObj(BranchChunk.prototype, {
        constructor: ke,
        iter: function(e, t, n) {
          n
            ? this.iterN(e - this.first, t - e, n)
            : this.iterN(this.first, this.first + this.size, e)
        },
        insert: function(e, t) {
          for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height
          this.insertInner(e - this.first, t, n)
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t)
        },
        getValue: function(e) {
          var t = getLines(this, this.first, this.first + this.size)
          return !1 === e ? t : t.join(e || this.lineSeparator())
        },
        setValue: docMethodOp(function(e) {
          var t = Pos(this.first, 0),
            n = this.first + this.size - 1
          makeChange(
            this,
            {
              from: t,
              to: Pos(n, getLine(this, n).text.length),
              text: this.splitLines(e),
              origin: 'setValue',
              full: !0
            },
            !0
          ),
            this.cm && scrollToCoords(this.cm, 0, 0),
            setSelection(this, simpleSelection(t), A)
        }),
        replaceRange: function(e, t, n, r) {
          replaceRange(
            this,
            e,
            (t = clipPos(this, t)),
            (n = n ? clipPos(this, n) : t),
            r
          )
        },
        getRange: function(e, t, n) {
          var r = getBetween(this, clipPos(this, e), clipPos(this, t))
          return !1 === n ? r : r.join(n || this.lineSeparator())
        },
        getLine: function(e) {
          var t = this.getLineHandle(e)
          return t && t.text
        },
        getLineHandle: function(e) {
          if (isLine(this, e)) return getLine(this, e)
        },
        getLineNumber: function(e) {
          return lineNo(e)
        },
        getLineHandleVisualStart: function(e) {
          return 'number' == typeof e && (e = getLine(this, e)), visualLine(e)
        },
        lineCount: function() {
          return this.size
        },
        firstLine: function() {
          return this.first
        },
        lastLine: function() {
          return this.first + this.size - 1
        },
        clipPos: function(e) {
          return clipPos(this, e)
        },
        getCursor: function(e) {
          var t = this.sel.primary()
          return null == e || 'head' == e
            ? t.head
            : 'anchor' == e
              ? t.anchor
              : 'end' == e || 'to' == e || !1 === e
                ? t.to()
                : t.from()
        },
        listSelections: function() {
          return this.sel.ranges
        },
        somethingSelected: function() {
          return this.sel.somethingSelected()
        },
        setCursor: docMethodOp(function(e, t, n) {
          setSimpleSelection(
            this,
            clipPos(this, 'number' == typeof e ? Pos(e, t || 0) : e),
            null,
            n
          )
        }),
        setSelection: docMethodOp(function(e, t, n) {
          setSimpleSelection(this, clipPos(this, e), clipPos(this, t || e), n)
        }),
        extendSelection: docMethodOp(function(e, t, n) {
          extendSelection(this, clipPos(this, e), t && clipPos(this, t), n)
        }),
        extendSelections: docMethodOp(function(e, t) {
          extendSelections(this, clipPosArray(this, e), t)
        }),
        extendSelectionsBy: docMethodOp(function(e, t) {
          extendSelections(this, clipPosArray(this, map(this.sel.ranges, e)), t)
        }),
        setSelections: docMethodOp(function(e, t, n) {
          if (e.length) {
            for (var r = [], o = 0; o < e.length; o++)
              r[o] = new ye(
                clipPos(this, e[o].anchor),
                clipPos(this, e[o].head)
              )
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              setSelection(this, normalizeSelection(this.cm, r, t), n)
          }
        }),
        addSelection: docMethodOp(function(e, t, n) {
          var r = this.sel.ranges.slice(0)
          r.push(new ye(clipPos(this, e), clipPos(this, t || e))),
            setSelection(this, normalizeSelection(this.cm, r, r.length - 1), n)
        }),
        getSelection: function(e) {
          for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
            var o = getBetween(this, n[r].from(), n[r].to())
            t = t ? t.concat(o) : o
          }
          return !1 === e ? t : t.join(e || this.lineSeparator())
        },
        getSelections: function(e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var o = getBetween(this, n[r].from(), n[r].to())
            !1 !== e && (o = o.join(e || this.lineSeparator())), (t[r] = o)
          }
          return t
        },
        replaceSelection: function(e, t, n) {
          for (var r = [], o = 0; o < this.sel.ranges.length; o++) r[o] = e
          this.replaceSelections(r, t, n || '+input')
        },
        replaceSelections: docMethodOp(function(e, t, n) {
          for (var r = [], o = this.sel, i = 0; i < o.ranges.length; i++) {
            var a = o.ranges[i]
            r[i] = {
              from: a.from(),
              to: a.to(),
              text: this.splitLines(e[i]),
              origin: n
            }
          }
          for (
            var s =
                t &&
                'end' != t &&
                (function computeReplacedSel(e, t, n) {
                  for (
                    var r = [], o = Pos(e.first, 0), i = o, a = 0;
                    a < t.length;
                    a++
                  ) {
                    var s = t[a],
                      l = offsetPos(s.from, o, i),
                      c = offsetPos(changeEnd(s), o, i)
                    if (((o = s.to), (i = c), 'around' == n)) {
                      var u = e.sel.ranges[a],
                        d = cmp(u.head, u.anchor) < 0
                      r[a] = new ye(d ? c : l, d ? l : c)
                    } else r[a] = new ye(l, l)
                  }
                  return new ve(r, e.sel.primIndex)
                })(this, r, t),
              l = r.length - 1;
            l >= 0;
            l--
          )
            makeChange(this, r[l])
          s
            ? setSelectionReplaceHistory(this, s)
            : this.cm && ensureCursorVisible(this.cm)
        }),
        undo: docMethodOp(function() {
          makeChangeFromHistory(this, 'undo')
        }),
        redo: docMethodOp(function() {
          makeChangeFromHistory(this, 'redo')
        }),
        undoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, 'undo', !0)
        }),
        redoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, 'redo', !0)
        }),
        setExtending: function(e) {
          this.extend = e
        },
        getExtending: function() {
          return this.extend
        },
        historySize: function() {
          for (
            var e = this.history, t = 0, n = 0, r = 0;
            r < e.done.length;
            r++
          )
            e.done[r].ranges || ++t
          for (var o = 0; o < e.undone.length; o++) e.undone[o].ranges || ++n
          return {undo: t, redo: n}
        },
        clearHistory: function() {
          this.history = new History(this.history.maxGeneration)
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function(e) {
          return (
            e &&
              (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
          )
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration)
        },
        getHistory: function() {
          return {
            done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone)
          }
        },
        setHistory: function(e) {
          var t = (this.history = new History(this.history.maxGeneration))
          ;(t.done = copyHistoryArray(e.done.slice(0), null, !0)),
            (t.undone = copyHistoryArray(e.undone.slice(0), null, !0))
        },
        setGutterMarker: docMethodOp(function(e, t, n) {
          return changeLine(this, e, 'gutter', function(e) {
            var r = e.gutterMarkers || (e.gutterMarkers = {})
            return (r[t] = n), !n && isEmpty(r) && (e.gutterMarkers = null), !0
          })
        }),
        clearGutter: docMethodOp(function(e) {
          var t = this
          this.iter(function(n) {
            n.gutterMarkers &&
              n.gutterMarkers[e] &&
              changeLine(t, n, 'gutter', function() {
                return (
                  (n.gutterMarkers[e] = null),
                  isEmpty(n.gutterMarkers) && (n.gutterMarkers = null),
                  !0
                )
              })
          })
        }),
        lineInfo: function(e) {
          var t
          if ('number' == typeof e) {
            if (!isLine(this, e)) return null
            if (((t = e), !(e = getLine(this, e)))) return null
          } else if (null == (t = lineNo(e))) return null
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          }
        },
        addLineClass: docMethodOp(function(e, t, n) {
          return changeLine(
            this,
            e,
            'gutter' == t ? 'gutter' : 'class',
            function(e) {
              var r =
                'text' == t
                  ? 'textClass'
                  : 'background' == t
                    ? 'bgClass'
                    : 'gutter' == t
                      ? 'gutterClass'
                      : 'wrapClass'
              if (e[r]) {
                if (classTest(n).test(e[r])) return !1
                e[r] += ' ' + n
              } else e[r] = n
              return !0
            }
          )
        }),
        removeLineClass: docMethodOp(function(e, t, n) {
          return changeLine(
            this,
            e,
            'gutter' == t ? 'gutter' : 'class',
            function(e) {
              var r =
                  'text' == t
                    ? 'textClass'
                    : 'background' == t
                      ? 'bgClass'
                      : 'gutter' == t
                        ? 'gutterClass'
                        : 'wrapClass',
                o = e[r]
              if (!o) return !1
              if (null == n) e[r] = null
              else {
                var i = o.match(classTest(n))
                if (!i) return !1
                var a = i.index + i[0].length
                e[r] =
                  o.slice(0, i.index) +
                    (i.index && a != o.length ? ' ' : '') +
                    o.slice(a) || null
              }
              return !0
            }
          )
        }),
        addLineWidget: docMethodOp(function(e, t, n) {
          return (function addLineWidget(e, t, n, r) {
            var o = new be(e, n, r),
              i = e.cm
            return (
              i && o.noHScroll && (i.display.alignWidgets = !0),
              changeLine(e, t, 'widget', function(t) {
                var n = t.widgets || (t.widgets = [])
                if (
                  (null == o.insertAt
                    ? n.push(o)
                    : n.splice(
                        Math.min(n.length - 1, Math.max(0, o.insertAt)),
                        0,
                        o
                      ),
                  (o.line = t),
                  i && !lineIsHidden(e, t))
                ) {
                  var r = heightAtLine(t) < e.scrollTop
                  updateLineHeight(t, t.height + widgetHeight(o)),
                    r && addToScrollTop(i, o.height),
                    (i.curOp.forceUpdate = !0)
                }
                return !0
              }),
              i &&
                signalLater(
                  i,
                  'lineWidgetAdded',
                  i,
                  o,
                  'number' == typeof t ? t : lineNo(t)
                ),
              o
            )
          })(this, e, t, n)
        }),
        removeLineWidget: function(e) {
          e.clear()
        },
        markText: function(e, t, n) {
          return markText(
            this,
            clipPos(this, e),
            clipPos(this, t),
            n,
            (n && n.type) || 'range'
          )
        },
        setBookmark: function(e, t) {
          var n = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents
          }
          return markText(this, (e = clipPos(this, e)), e, n, 'bookmark')
        },
        findMarksAt: function(e) {
          var t = [],
            n = getLine(this, (e = clipPos(this, e)).line).markedSpans
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var o = n[r]
              ;(null == o.from || o.from <= e.ch) &&
                (null == o.to || o.to >= e.ch) &&
                t.push(o.marker.parent || o.marker)
            }
          return t
        },
        findMarks: function(e, t, n) {
          ;(e = clipPos(this, e)), (t = clipPos(this, t))
          var r = [],
            o = e.line
          return (
            this.iter(e.line, t.line + 1, function(i) {
              var a = i.markedSpans
              if (a)
                for (var s = 0; s < a.length; s++) {
                  var l = a[s]
                  ;(null != l.to && o == e.line && e.ch >= l.to) ||
                    (null == l.from && o != e.line) ||
                    (null != l.from && o == t.line && l.from >= t.ch) ||
                    (n && !n(l.marker)) ||
                    r.push(l.marker.parent || l.marker)
                }
              ++o
            }),
            r
          )
        },
        getAllMarks: function() {
          var e = []
          return (
            this.iter(function(t) {
              var n = t.markedSpans
              if (n)
                for (var r = 0; r < n.length; ++r)
                  null != n[r].from && e.push(n[r].marker)
            }),
            e
          )
        },
        posFromIndex: function(e) {
          var t,
            n = this.first,
            r = this.lineSeparator().length
          return (
            this.iter(function(o) {
              var i = o.text.length + r
              if (i > e) return (t = e), !0
              ;(e -= i), ++n
            }),
            clipPos(this, Pos(n, t))
          )
        },
        indexFromPos: function(e) {
          var t = (e = clipPos(this, e)).ch
          if (e.line < this.first || e.ch < 0) return 0
          var n = this.lineSeparator().length
          return (
            this.iter(this.first, e.line, function(e) {
              t += e.text.length + n
            }),
            t
          )
        },
        copy: function(e) {
          var t = new ke(
            getLines(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          )
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          )
        },
        linkedDoc: function(e) {
          e || (e = {})
          var t = this.first,
            n = this.first + this.size
          null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < n && (n = e.to)
          var r = new ke(
            getLines(this, t, n),
            e.mode || this.modeOption,
            t,
            this.lineSep,
            this.direction
          )
          return (
            e.sharedHist && (r.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: r,
              sharedHist: e.sharedHist
            }),
            (r.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}]),
            (function copySharedMarkers(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n],
                  o = r.find(),
                  i = e.clipPos(o.from),
                  a = e.clipPos(o.to)
                if (cmp(i, a)) {
                  var s = markText(e, i, a, r.primary, r.primary.type)
                  r.markers.push(s), (s.parent = r)
                }
              }
            })(r, findSharedMarkers(this)),
            r
          )
        },
        unlinkDoc: function(e) {
          if ((e instanceof CodeMirror && (e = e.doc), this.linked))
            for (var t = 0; t < this.linked.length; ++t) {
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1),
                  e.unlinkDoc(this),
                  detachSharedMarkers(findSharedMarkers(this))
                break
              }
            }
          if (e.history == this.history) {
            var n = [e.id]
            linkedDocs(
              e,
              function(e) {
                return n.push(e.id)
              },
              !0
            ),
              (e.history = new History(null)),
              (e.history.done = copyHistoryArray(this.history.done, n)),
              (e.history.undone = copyHistoryArray(this.history.undone, n))
          }
        },
        iterLinkedDocs: function(e) {
          linkedDocs(this, e)
        },
        getMode: function() {
          return this.mode
        },
        getEditor: function() {
          return this.cm
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : K(e)
        },
        lineSeparator: function() {
          return this.lineSep || '\n'
        },
        setDirection: docMethodOp(function(e) {
          'rtl' != e && (e = 'ltr'),
            e != this.direction &&
              ((this.direction = e),
              this.iter(function(e) {
                return (e.order = null)
              }),
              this.cm &&
                (function directionChanged(e) {
                  runInOp(e, function() {
                    setDirectionClass(e), regChange(e)
                  })
                })(this.cm))
        })
      })),
        (ke.prototype.eachLine = ke.prototype.iter)
      var Le = 0
      function onDrop(e) {
        var t = this
        if (
          (clearDragCursor(t),
          !signalDOMEvent(t, e) && !eventInWidget(t.display, e))
        ) {
          e_preventDefault(e), a && (Le = +new Date())
          var n = posFromMouse(t, e, !0),
            r = e.dataTransfer.files
          if (n && !t.isReadOnly())
            if (r && r.length && window.FileReader && window.File)
              for (
                var o = r.length,
                  i = Array(o),
                  s = 0,
                  l = function(e, r) {
                    if (
                      !t.options.allowDropFileTypes ||
                      -1 != indexOf(t.options.allowDropFileTypes, e.type)
                    ) {
                      var a = new FileReader()
                      ;(a.onload = operation(t, function() {
                        var e = a.result
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ''),
                          (i[r] = e),
                          ++s == o)
                        ) {
                          var l = {
                            from: (n = clipPos(t.doc, n)),
                            to: n,
                            text: t.doc.splitLines(
                              i.join(t.doc.lineSeparator())
                            ),
                            origin: 'paste'
                          }
                          makeChange(t.doc, l),
                            setSelectionReplaceHistory(
                              t.doc,
                              simpleSelection(n, changeEnd(l))
                            )
                        }
                      })),
                        a.readAsText(e)
                    }
                  },
                  c = 0;
                c < o;
                ++c
              )
                l(r[c], c)
            else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                return (
                  t.state.draggingText(e),
                  void setTimeout(function() {
                    return t.display.input.focus()
                  }, 20)
                )
              try {
                var u = e.dataTransfer.getData('Text')
                if (u) {
                  var d
                  if (
                    (t.state.draggingText &&
                      !t.state.draggingText.copy &&
                      (d = t.listSelections()),
                    setSelectionNoUndo(t.doc, simpleSelection(n, n)),
                    d)
                  )
                    for (var p = 0; p < d.length; ++p)
                      replaceRange(t.doc, '', d[p].anchor, d[p].head, 'drag')
                  t.replaceSelection(u, 'around', 'paste'),
                    t.display.input.focus()
                }
              } catch (e) {}
            }
        }
      }
      function clearDragCursor(e) {
        e.display.dragCursor &&
          (e.display.lineSpace.removeChild(e.display.dragCursor),
          (e.display.dragCursor = null))
      }
      function forEachCodeMirror(e) {
        if (document.getElementsByClassName) {
          for (
            var t = document.getElementsByClassName('CodeMirror'),
              n = [],
              r = 0;
            r < t.length;
            r++
          ) {
            var o = t[r].CodeMirror
            o && n.push(o)
          }
          n.length &&
            n[0].operation(function() {
              for (var t = 0; t < n.length; t++) e(n[t])
            })
        }
      }
      var Me = !1
      function ensureGlobalHandlers() {
        Me ||
          (!(function registerGlobalHandlers() {
            var e
            V(window, 'resize', function() {
              null == e &&
                (e = setTimeout(function() {
                  ;(e = null), forEachCodeMirror(onResize)
                }, 100))
            }),
              V(window, 'blur', function() {
                return forEachCodeMirror(onBlur)
              })
          })(),
          (Me = !0))
      }
      function onResize(e) {
        var t = e.display
        ;(t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
          (t.scrollbarsClipped = !1),
          e.setSize()
      }
      for (
        var Te = {
            3: 'Pause',
            8: 'Backspace',
            9: 'Tab',
            13: 'Enter',
            16: 'Shift',
            17: 'Ctrl',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Esc',
            32: 'Space',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'Left',
            38: 'Up',
            39: 'Right',
            40: 'Down',
            44: 'PrintScrn',
            45: 'Insert',
            46: 'Delete',
            59: ';',
            61: '=',
            91: 'Mod',
            92: 'Mod',
            93: 'Mod',
            106: '*',
            107: '=',
            109: '-',
            110: '.',
            111: '/',
            127: 'Delete',
            145: 'ScrollLock',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'",
            63232: 'Up',
            63233: 'Down',
            63234: 'Left',
            63235: 'Right',
            63272: 'Delete',
            63273: 'Home',
            63275: 'End',
            63276: 'PageUp',
            63277: 'PageDown',
            63302: 'Insert'
          },
          Oe = 0;
        Oe < 10;
        Oe++
      )
        Te[Oe + 48] = Te[Oe + 96] = String(Oe)
      for (var Pe = 65; Pe <= 90; Pe++) Te[Pe] = String.fromCharCode(Pe)
      for (var Ae = 1; Ae <= 12; Ae++) Te[Ae + 111] = Te[Ae + 63235] = 'F' + Ae
      var Ne = {}
      function normalizeKeyName(e) {
        var t,
          n,
          r,
          o,
          i = e.split(/-(?!$)/)
        e = i[i.length - 1]
        for (var a = 0; a < i.length - 1; a++) {
          var s = i[a]
          if (/^(cmd|meta|m)$/i.test(s)) o = !0
          else if (/^a(lt)?$/i.test(s)) t = !0
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0
          else {
            if (!/^s(hift)?$/i.test(s))
              throw new Error('Unrecognized modifier name: ' + s)
            r = !0
          }
        }
        return (
          t && (e = 'Alt-' + e),
          n && (e = 'Ctrl-' + e),
          o && (e = 'Cmd-' + e),
          r && (e = 'Shift-' + e),
          e
        )
      }
      function normalizeKeyMap(e) {
        var t = {}
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n]
            if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue
            if ('...' == r) {
              delete e[n]
              continue
            }
            for (
              var o = map(n.split(' '), normalizeKeyName), i = 0;
              i < o.length;
              i++
            ) {
              var a = void 0,
                s = void 0
              i == o.length - 1
                ? ((s = o.join(' ')), (a = r))
                : ((s = o.slice(0, i + 1).join(' ')), (a = '...'))
              var l = t[s]
              if (l) {
                if (l != a) throw new Error('Inconsistent bindings for ' + s)
              } else t[s] = a
            }
            delete e[n]
          }
        for (var c in t) e[c] = t[c]
        return e
      }
      function lookupKey(e, t, n, r) {
        var o = (t = getKeyMap(t)).call ? t.call(e, r) : t[e]
        if (!1 === o) return 'nothing'
        if ('...' === o) return 'multi'
        if (null != o && n(o)) return 'handled'
        if (t.fallthrough) {
          if ('[object Array]' != Object.prototype.toString.call(t.fallthrough))
            return lookupKey(e, t.fallthrough, n, r)
          for (var i = 0; i < t.fallthrough.length; i++) {
            var a = lookupKey(e, t.fallthrough[i], n, r)
            if (a) return a
          }
        }
      }
      function isModifierKey(e) {
        var t = 'string' == typeof e ? e : Te[e.keyCode]
        return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t
      }
      function addModifierNames(e, t, n) {
        var r = e
        return (
          t.altKey && 'Alt' != r && (e = 'Alt-' + e),
          (w ? t.metaKey : t.ctrlKey) && 'Ctrl' != r && (e = 'Ctrl-' + e),
          (w ? t.ctrlKey : t.metaKey) && 'Cmd' != r && (e = 'Cmd-' + e),
          !n && t.shiftKey && 'Shift' != r && (e = 'Shift-' + e),
          e
        )
      }
      function keyName(e, t) {
        if (d && 34 == e.keyCode && e.char) return !1
        var n = Te[e.keyCode]
        return (
          null != n &&
          !e.altGraphKey &&
          (3 == e.keyCode && e.code && (n = e.code), addModifierNames(n, e, t))
        )
      }
      function getKeyMap(e) {
        return 'string' == typeof e ? Ne[e] : e
      }
      function deleteNearSelection(e, t) {
        for (var n = e.doc.sel.ranges, r = [], o = 0; o < n.length; o++) {
          for (var i = t(n[o]); r.length && cmp(i.from, lst(r).to) <= 0; ) {
            var a = r.pop()
            if (cmp(a.from, i.from) < 0) {
              i.from = a.from
              break
            }
          }
          r.push(i)
        }
        runInOp(e, function() {
          for (var t = r.length - 1; t >= 0; t--)
            replaceRange(e.doc, '', r[t].from, r[t].to, '+delete')
          ensureCursorVisible(e)
        })
      }
      function moveCharLogically(e, t, n) {
        var r = skipExtendingChars(e.text, t + n, n)
        return r < 0 || r > e.text.length ? null : r
      }
      function moveLogically(e, t, n) {
        var r = moveCharLogically(e, t.ch, n)
        return null == r ? null : new Pos(t.line, r, n < 0 ? 'after' : 'before')
      }
      function endOfLine(e, t, n, r, o) {
        if (e) {
          var i = getOrder(n, t.doc.direction)
          if (i) {
            var a,
              s = o < 0 ? lst(i) : i[0],
              l = o < 0 == (1 == s.level) ? 'after' : 'before'
            if (s.level > 0 || 'rtl' == t.doc.direction) {
              var c = prepareMeasureForLine(t, n)
              a = o < 0 ? n.text.length - 1 : 0
              var u = measureCharPrepared(t, c, a).top
              ;(a = findFirst(
                function(e) {
                  return measureCharPrepared(t, c, e).top == u
                },
                o < 0 == (1 == s.level) ? s.from : s.to - 1,
                a
              )),
                'before' == l && (a = moveCharLogically(n, a, 1))
            } else a = o < 0 ? s.to : s.from
            return new Pos(r, a, l)
          }
        }
        return new Pos(r, o < 0 ? n.text.length : 0, o < 0 ? 'before' : 'after')
      }
      ;(Ne.basic = {
        Left: 'goCharLeft',
        Right: 'goCharRight',
        Up: 'goLineUp',
        Down: 'goLineDown',
        End: 'goLineEnd',
        Home: 'goLineStartSmart',
        PageUp: 'goPageUp',
        PageDown: 'goPageDown',
        Delete: 'delCharAfter',
        Backspace: 'delCharBefore',
        'Shift-Backspace': 'delCharBefore',
        Tab: 'defaultTab',
        'Shift-Tab': 'indentAuto',
        Enter: 'newlineAndIndent',
        Insert: 'toggleOverwrite',
        Esc: 'singleSelection'
      }),
        (Ne.pcDefault = {
          'Ctrl-A': 'selectAll',
          'Ctrl-D': 'deleteLine',
          'Ctrl-Z': 'undo',
          'Shift-Ctrl-Z': 'redo',
          'Ctrl-Y': 'redo',
          'Ctrl-Home': 'goDocStart',
          'Ctrl-End': 'goDocEnd',
          'Ctrl-Up': 'goLineUp',
          'Ctrl-Down': 'goLineDown',
          'Ctrl-Left': 'goGroupLeft',
          'Ctrl-Right': 'goGroupRight',
          'Alt-Left': 'goLineStart',
          'Alt-Right': 'goLineEnd',
          'Ctrl-Backspace': 'delGroupBefore',
          'Ctrl-Delete': 'delGroupAfter',
          'Ctrl-S': 'save',
          'Ctrl-F': 'find',
          'Ctrl-G': 'findNext',
          'Shift-Ctrl-G': 'findPrev',
          'Shift-Ctrl-F': 'replace',
          'Shift-Ctrl-R': 'replaceAll',
          'Ctrl-[': 'indentLess',
          'Ctrl-]': 'indentMore',
          'Ctrl-U': 'undoSelection',
          'Shift-Ctrl-U': 'redoSelection',
          'Alt-U': 'redoSelection',
          fallthrough: 'basic'
        }),
        (Ne.emacsy = {
          'Ctrl-F': 'goCharRight',
          'Ctrl-B': 'goCharLeft',
          'Ctrl-P': 'goLineUp',
          'Ctrl-N': 'goLineDown',
          'Alt-F': 'goWordRight',
          'Alt-B': 'goWordLeft',
          'Ctrl-A': 'goLineStart',
          'Ctrl-E': 'goLineEnd',
          'Ctrl-V': 'goPageDown',
          'Shift-Ctrl-V': 'goPageUp',
          'Ctrl-D': 'delCharAfter',
          'Ctrl-H': 'delCharBefore',
          'Alt-D': 'delWordAfter',
          'Alt-Backspace': 'delWordBefore',
          'Ctrl-K': 'killLine',
          'Ctrl-T': 'transposeChars',
          'Ctrl-O': 'openLine'
        }),
        (Ne.macDefault = {
          'Cmd-A': 'selectAll',
          'Cmd-D': 'deleteLine',
          'Cmd-Z': 'undo',
          'Shift-Cmd-Z': 'redo',
          'Cmd-Y': 'redo',
          'Cmd-Home': 'goDocStart',
          'Cmd-Up': 'goDocStart',
          'Cmd-End': 'goDocEnd',
          'Cmd-Down': 'goDocEnd',
          'Alt-Left': 'goGroupLeft',
          'Alt-Right': 'goGroupRight',
          'Cmd-Left': 'goLineLeft',
          'Cmd-Right': 'goLineRight',
          'Alt-Backspace': 'delGroupBefore',
          'Ctrl-Alt-Backspace': 'delGroupAfter',
          'Alt-Delete': 'delGroupAfter',
          'Cmd-S': 'save',
          'Cmd-F': 'find',
          'Cmd-G': 'findNext',
          'Shift-Cmd-G': 'findPrev',
          'Cmd-Alt-F': 'replace',
          'Shift-Cmd-Alt-F': 'replaceAll',
          'Cmd-[': 'indentLess',
          'Cmd-]': 'indentMore',
          'Cmd-Backspace': 'delWrappedLineLeft',
          'Cmd-Delete': 'delWrappedLineRight',
          'Cmd-U': 'undoSelection',
          'Shift-Cmd-U': 'redoSelection',
          'Ctrl-Up': 'goDocStart',
          'Ctrl-Down': 'goDocEnd',
          fallthrough: ['basic', 'emacsy']
        }),
        (Ne.default = y ? Ne.macDefault : Ne.pcDefault)
      var De = {
        selectAll: selectAll,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), A)
        },
        killLine: function(e) {
          return deleteNearSelection(e, function(t) {
            if (t.empty()) {
              var n = getLine(e.doc, t.head.line).text.length
              return t.head.ch == n && t.head.line < e.lastLine()
                ? {from: t.head, to: Pos(t.head.line + 1, 0)}
                : {from: t.head, to: Pos(t.head.line, n)}
            }
            return {from: t.from(), to: t.to()}
          })
        },
        deleteLine: function(e) {
          return deleteNearSelection(e, function(t) {
            return {
              from: Pos(t.from().line, 0),
              to: clipPos(e.doc, Pos(t.to().line + 1, 0))
            }
          })
        },
        delLineLeft: function(e) {
          return deleteNearSelection(e, function(e) {
            return {from: Pos(e.from().line, 0), to: e.from()}
          })
        },
        delWrappedLineLeft: function(e) {
          return deleteNearSelection(e, function(t) {
            var n = e.charCoords(t.head, 'div').top + 5
            return {from: e.coordsChar({left: 0, top: n}, 'div'), to: t.from()}
          })
        },
        delWrappedLineRight: function(e) {
          return deleteNearSelection(e, function(t) {
            var n = e.charCoords(t.head, 'div').top + 5,
              r = e.coordsChar(
                {left: e.display.lineDiv.offsetWidth + 100, top: n},
                'div'
              )
            return {from: t.from(), to: r}
          })
        },
        undo: function(e) {
          return e.undo()
        },
        redo: function(e) {
          return e.redo()
        },
        undoSelection: function(e) {
          return e.undoSelection()
        },
        redoSelection: function(e) {
          return e.redoSelection()
        },
        goDocStart: function(e) {
          return e.extendSelection(Pos(e.firstLine(), 0))
        },
        goDocEnd: function(e) {
          return e.extendSelection(Pos(e.lastLine()))
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return lineStart(e, t.head.line)
            },
            {origin: '+move', bias: 1}
          )
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return lineStartSmart(e, t.head)
            },
            {origin: '+move', bias: 1}
          )
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return (function lineEnd(e, t) {
                var n = getLine(e.doc, t),
                  r = (function visualLineEnd(e) {
                    for (var t; (t = collapsedSpanAtEnd(e)); )
                      e = t.find(1, !0).line
                    return e
                  })(n)
                r != n && (t = lineNo(r))
                return endOfLine(!0, e, n, t, -1)
              })(e, t.head.line)
            },
            {origin: '+move', bias: -1}
          )
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, 'div').top + 5
            return e.coordsChar(
              {left: e.display.lineDiv.offsetWidth + 100, top: n},
              'div'
            )
          }, D)
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, 'div').top + 5
            return e.coordsChar({left: 0, top: n}, 'div')
          }, D)
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, 'div').top + 5,
              r = e.coordsChar({left: 0, top: n}, 'div')
            return r.ch < e.getLine(r.line).search(/\S/)
              ? lineStartSmart(e, t.head)
              : r
          }, D)
        },
        goLineUp: function(e) {
          return e.moveV(-1, 'line')
        },
        goLineDown: function(e) {
          return e.moveV(1, 'line')
        },
        goPageUp: function(e) {
          return e.moveV(-1, 'page')
        },
        goPageDown: function(e) {
          return e.moveV(1, 'page')
        },
        goCharLeft: function(e) {
          return e.moveH(-1, 'char')
        },
        goCharRight: function(e) {
          return e.moveH(1, 'char')
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, 'column')
        },
        goColumnRight: function(e) {
          return e.moveH(1, 'column')
        },
        goWordLeft: function(e) {
          return e.moveH(-1, 'word')
        },
        goGroupRight: function(e) {
          return e.moveH(1, 'group')
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, 'group')
        },
        goWordRight: function(e) {
          return e.moveH(1, 'word')
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, 'char')
        },
        delCharAfter: function(e) {
          return e.deleteH(1, 'char')
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, 'word')
        },
        delWordAfter: function(e) {
          return e.deleteH(1, 'word')
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, 'group')
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, 'group')
        },
        indentAuto: function(e) {
          return e.indentSelection('smart')
        },
        indentMore: function(e) {
          return e.indentSelection('add')
        },
        indentLess: function(e) {
          return e.indentSelection('subtract')
        },
        insertTab: function(e) {
          return e.replaceSelection('\t')
        },
        insertSoftTab: function(e) {
          for (
            var t = [], n = e.listSelections(), r = e.options.tabSize, o = 0;
            o < n.length;
            o++
          ) {
            var i = n[o].from(),
              a = countColumn(e.getLine(i.line), i.ch, r)
            t.push(spaceStr(r - a % r))
          }
          e.replaceSelections(t)
        },
        defaultTab: function(e) {
          e.somethingSelected()
            ? e.indentSelection('add')
            : e.execCommand('insertTab')
        },
        transposeChars: function(e) {
          return runInOp(e, function() {
            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
              if (t[r].empty()) {
                var o = t[r].head,
                  i = getLine(e.doc, o.line).text
                if (i)
                  if (
                    (o.ch == i.length && (o = new Pos(o.line, o.ch - 1)),
                    o.ch > 0)
                  )
                    (o = new Pos(o.line, o.ch + 1)),
                      e.replaceRange(
                        i.charAt(o.ch - 1) + i.charAt(o.ch - 2),
                        Pos(o.line, o.ch - 2),
                        o,
                        '+transpose'
                      )
                  else if (o.line > e.doc.first) {
                    var a = getLine(e.doc, o.line - 1).text
                    a &&
                      ((o = new Pos(o.line, 1)),
                      e.replaceRange(
                        i.charAt(0) +
                          e.doc.lineSeparator() +
                          a.charAt(a.length - 1),
                        Pos(o.line - 1, a.length - 1),
                        o,
                        '+transpose'
                      ))
                  }
                n.push(new ye(o, o))
              }
            e.setSelections(n)
          })
        },
        newlineAndIndent: function(e) {
          return runInOp(e, function() {
            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
              e.replaceRange(
                e.doc.lineSeparator(),
                t[n].anchor,
                t[n].head,
                '+input'
              )
            t = e.listSelections()
            for (var r = 0; r < t.length; r++)
              e.indentLine(t[r].from().line, null, !0)
            ensureCursorVisible(e)
          })
        },
        openLine: function(e) {
          return e.replaceSelection('\n', 'start')
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite()
        }
      }
      function lineStart(e, t) {
        var n = getLine(e.doc, t),
          r = visualLine(n)
        return r != n && (t = lineNo(r)), endOfLine(!0, e, r, t, 1)
      }
      function lineStartSmart(e, t) {
        var n = lineStart(e, t.line),
          r = getLine(e.doc, n.line),
          o = getOrder(r, e.doc.direction)
        if (!o || 0 == o[0].level) {
          var i = Math.max(0, r.text.search(/\S/)),
            a = t.line == n.line && t.ch <= i && t.ch
          return Pos(n.line, a ? 0 : i, n.sticky)
        }
        return n
      }
      function doHandleBinding(e, t, n) {
        if ('string' == typeof t && !(t = De[t])) return !1
        e.display.input.ensurePolled()
        var r = e.display.shift,
          o = !1
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
            n && (e.display.shift = !1),
            (o = t(e) != P)
        } finally {
          ;(e.display.shift = r), (e.state.suppressEdits = !1)
        }
        return o
      }
      var He = new T()
      function dispatchKey(e, t, n, r) {
        var o = e.state.keySeq
        if (o) {
          if (isModifierKey(t)) return 'handled'
          if (
            (/\'$/.test(t)
              ? (e.state.keySeq = null)
              : He.set(50, function() {
                  e.state.keySeq == o &&
                    ((e.state.keySeq = null), e.display.input.reset())
                }),
            dispatchKeyInner(e, o + ' ' + t, n, r))
          )
            return !0
        }
        return dispatchKeyInner(e, t, n, r)
      }
      function dispatchKeyInner(e, t, n, r) {
        var o = (function lookupKeyForEditor(e, t, n) {
          for (var r = 0; r < e.state.keyMaps.length; r++) {
            var o = lookupKey(t, e.state.keyMaps[r], n, e)
            if (o) return o
          }
          return (
            (e.options.extraKeys && lookupKey(t, e.options.extraKeys, n, e)) ||
            lookupKey(t, e.options.keyMap, n, e)
          )
        })(e, t, r)
        return (
          'multi' == o && (e.state.keySeq = t),
          'handled' == o && signalLater(e, 'keyHandled', e, t, n),
          ('handled' != o && 'multi' != o) ||
            (e_preventDefault(n), restartBlink(e)),
          !!o
        )
      }
      function handleKeyBinding(e, t) {
        var n = keyName(t, !0)
        return (
          !!n &&
          (t.shiftKey && !e.state.keySeq
            ? dispatchKey(e, 'Shift-' + n, t, function(t) {
                return doHandleBinding(e, t, !0)
              }) ||
              dispatchKey(e, n, t, function(t) {
                if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                  return doHandleBinding(e, t)
              })
            : dispatchKey(e, n, t, function(t) {
                return doHandleBinding(e, t)
              }))
        )
      }
      var We = null
      function onKeyDown(e) {
        var t = this
        if (((t.curOp.focus = activeElt()), !signalDOMEvent(t, e))) {
          a && s < 11 && 27 == e.keyCode && (e.returnValue = !1)
          var n = e.keyCode
          t.display.shift = 16 == n || e.shiftKey
          var r = handleKeyBinding(t, e)
          d &&
            ((We = r ? n : null),
            !r &&
              88 == n &&
              !X &&
              (y ? e.metaKey : e.ctrlKey) &&
              t.replaceSelection('', null, 'cut')),
            18 != n ||
              /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
              (function showCrossHair(e) {
                var t = e.display.lineDiv
                function up(e) {
                  ;(18 != e.keyCode && e.altKey) ||
                    (L(t, 'CodeMirror-crosshair'),
                    off(document, 'keyup', up),
                    off(document, 'mouseover', up))
                }
                addClass(t, 'CodeMirror-crosshair'),
                  V(document, 'keyup', up),
                  V(document, 'mouseover', up)
              })(t)
        }
      }
      function onKeyUp(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), signalDOMEvent(this, e)
      }
      function onKeyPress(e) {
        var t = this
        if (
          !(
            eventInWidget(t.display, e) ||
            signalDOMEvent(t, e) ||
            (e.ctrlKey && !e.altKey) ||
            (y && e.metaKey)
          )
        ) {
          var n = e.keyCode,
            r = e.charCode
          if (d && n == We) return (We = null), void e_preventDefault(e)
          if (!d || (e.which && !(e.which < 10)) || !handleKeyBinding(t, e)) {
            var o = String.fromCharCode(null == r ? n : r)
            '\b' != o &&
              ((function handleCharBinding(e, t, n) {
                return dispatchKey(e, "'" + n + "'", t, function(t) {
                  return doHandleBinding(e, t, !0)
                })
              })(t, e, o) ||
                t.display.input.onKeyPress(e))
          }
        }
      }
      var Ee,
        Ie,
        Fe = function(e, t, n) {
          ;(this.time = e), (this.pos = t), (this.button = n)
        }
      function onMouseDown(e) {
        var t = this,
          n = t.display
        if (
          !(signalDOMEvent(t, e) || (n.activeTouch && n.input.supportsTouch()))
        )
          if (
            (n.input.ensurePolled(),
            (n.shift = e.shiftKey),
            eventInWidget(n, e))
          )
            l ||
              ((n.scroller.draggable = !1),
              setTimeout(function() {
                return (n.scroller.draggable = !0)
              }, 100))
          else if (!clickInGutter(t, e)) {
            var r = posFromMouse(t, e),
              o = e_button(e),
              i = r
                ? (function clickRepeat(e, t) {
                    var n = +new Date()
                    return Ie && Ie.compare(n, e, t)
                      ? ((Ee = Ie = null), 'triple')
                      : Ee && Ee.compare(n, e, t)
                        ? ((Ie = new Fe(n, e, t)), (Ee = null), 'double')
                        : ((Ee = new Fe(n, e, t)), (Ie = null), 'single')
                  })(r, o)
                : 'single'
            window.focus(),
              1 == o && t.state.selectingText && t.state.selectingText(e),
              (r &&
                (function handleMappedButton(e, t, n, r, o) {
                  var i = 'Click'
                  'double' == r
                    ? (i = 'Double' + i)
                    : 'triple' == r && (i = 'Triple' + i)
                  return dispatchKey(
                    e,
                    addModifierNames(
                      (i = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + i),
                      o
                    ),
                    o,
                    function(t) {
                      if (('string' == typeof t && (t = De[t]), !t)) return !1
                      var r = !1
                      try {
                        e.isReadOnly() && (e.state.suppressEdits = !0),
                          (r = t(e, n) != P)
                      } finally {
                        e.state.suppressEdits = !1
                      }
                      return r
                    }
                  )
                })(t, o, r, i, e)) ||
                (1 == o
                  ? r
                    ? (function leftButtonDown(e, t, n, r) {
                        a
                          ? setTimeout(bind(ensureFocus, e), 0)
                          : (e.curOp.focus = activeElt())
                        var o,
                          i = (function configureMouse(e, t, n) {
                            var r = e.getOption('configureMouse'),
                              o = r ? r(e, t, n) : {}
                            if (null == o.unit) {
                              var i = b ? n.shiftKey && n.metaKey : n.altKey
                              o.unit = i
                                ? 'rectangle'
                                : 'single' == t
                                  ? 'char'
                                  : 'double' == t
                                    ? 'word'
                                    : 'line'
                            }
                            ;(null == o.extend || e.doc.extend) &&
                              (o.extend = e.doc.extend || n.shiftKey)
                            null == o.addNew &&
                              (o.addNew = y ? n.metaKey : n.ctrlKey)
                            null == o.moveOnDrag &&
                              (o.moveOnDrag = !(y ? n.altKey : n.ctrlKey))
                            return o
                          })(e, n, r),
                          c = e.doc.sel
                        e.options.dragDrop &&
                        _ &&
                        !e.isReadOnly() &&
                        'single' == n &&
                        (o = c.contains(t)) > -1 &&
                        (cmp((o = c.ranges[o]).from(), t) < 0 || t.xRel > 0) &&
                        (cmp(o.to(), t) > 0 || t.xRel < 0)
                          ? (function leftButtonStartDrag(e, t, n, r) {
                              var o = e.display,
                                i = !1,
                                c = operation(e, function(t) {
                                  l && (o.scroller.draggable = !1),
                                    (e.state.draggingText = !1),
                                    off(o.wrapper.ownerDocument, 'mouseup', c),
                                    off(
                                      o.wrapper.ownerDocument,
                                      'mousemove',
                                      u
                                    ),
                                    off(o.scroller, 'dragstart', d),
                                    off(o.scroller, 'drop', c),
                                    i ||
                                      (e_preventDefault(t),
                                      r.addNew ||
                                        extendSelection(
                                          e.doc,
                                          n,
                                          null,
                                          null,
                                          r.extend
                                        ),
                                      l || (a && 9 == s)
                                        ? setTimeout(function() {
                                            o.wrapper.ownerDocument.body.focus(),
                                              o.input.focus()
                                          }, 20)
                                        : o.input.focus())
                                }),
                                u = function(e) {
                                  i =
                                    i ||
                                    Math.abs(t.clientX - e.clientX) +
                                      Math.abs(t.clientY - e.clientY) >=
                                      10
                                },
                                d = function() {
                                  return (i = !0)
                                }
                              l && (o.scroller.draggable = !0)
                              ;(e.state.draggingText = c),
                                (c.copy = !r.moveOnDrag),
                                o.scroller.dragDrop && o.scroller.dragDrop()
                              V(o.wrapper.ownerDocument, 'mouseup', c),
                                V(o.wrapper.ownerDocument, 'mousemove', u),
                                V(o.scroller, 'dragstart', d),
                                V(o.scroller, 'drop', c),
                                delayBlurEvent(e),
                                setTimeout(function() {
                                  return o.input.focus()
                                }, 20)
                            })(e, r, t, i)
                          : (function leftButtonSelect(e, t, n, r) {
                              var o = e.display,
                                i = e.doc
                              e_preventDefault(t)
                              var a,
                                s,
                                l = i.sel,
                                c = l.ranges
                              r.addNew && !r.extend
                                ? ((s = i.sel.contains(n)),
                                  (a = s > -1 ? c[s] : new ye(n, n)))
                                : ((a = i.sel.primary()), (s = i.sel.primIndex))
                              if ('rectangle' == r.unit)
                                r.addNew || (a = new ye(n, n)),
                                  (n = posFromMouse(e, t, !0, !0)),
                                  (s = -1)
                              else {
                                var u = rangeForUnit(e, n, r.unit)
                                a = r.extend
                                  ? extendRange(a, u.anchor, u.head, r.extend)
                                  : u
                              }
                              r.addNew
                                ? -1 == s
                                  ? ((s = c.length),
                                    setSelection(
                                      i,
                                      normalizeSelection(e, c.concat([a]), s),
                                      {scroll: !1, origin: '*mouse'}
                                    ))
                                  : c.length > 1 &&
                                    c[s].empty() &&
                                    'char' == r.unit &&
                                    !r.extend
                                    ? (setSelection(
                                        i,
                                        normalizeSelection(
                                          e,
                                          c.slice(0, s).concat(c.slice(s + 1)),
                                          0
                                        ),
                                        {scroll: !1, origin: '*mouse'}
                                      ),
                                      (l = i.sel))
                                    : replaceOneSelection(i, s, a, N)
                                : ((s = 0),
                                  setSelection(i, new ve([a], 0), N),
                                  (l = i.sel))
                              var d = n
                              function extendTo(t) {
                                if (0 != cmp(d, t))
                                  if (((d = t), 'rectangle' == r.unit)) {
                                    for (
                                      var o = [],
                                        c = e.options.tabSize,
                                        u = countColumn(
                                          getLine(i, n.line).text,
                                          n.ch,
                                          c
                                        ),
                                        p = countColumn(
                                          getLine(i, t.line).text,
                                          t.ch,
                                          c
                                        ),
                                        h = Math.min(u, p),
                                        f = Math.max(u, p),
                                        g = Math.min(n.line, t.line),
                                        m = Math.min(
                                          e.lastLine(),
                                          Math.max(n.line, t.line)
                                        );
                                      g <= m;
                                      g++
                                    ) {
                                      var v = getLine(i, g).text,
                                        y = findColumn(v, h, c)
                                      h == f
                                        ? o.push(new ye(Pos(g, y), Pos(g, y)))
                                        : v.length > y &&
                                          o.push(
                                            new ye(
                                              Pos(g, y),
                                              Pos(g, findColumn(v, f, c))
                                            )
                                          )
                                    }
                                    o.length || o.push(new ye(n, n)),
                                      setSelection(
                                        i,
                                        normalizeSelection(
                                          e,
                                          l.ranges.slice(0, s).concat(o),
                                          s
                                        ),
                                        {origin: '*mouse', scroll: !1}
                                      ),
                                      e.scrollIntoView(t)
                                  } else {
                                    var b,
                                      x = a,
                                      C = rangeForUnit(e, t, r.unit),
                                      w = x.anchor
                                    cmp(C.anchor, w) > 0
                                      ? ((b = C.head),
                                        (w = minPos(x.from(), C.anchor)))
                                      : ((b = C.anchor),
                                        (w = maxPos(x.to(), C.head)))
                                    var S = l.ranges.slice(0)
                                    ;(S[s] = (function bidiSimplify(e, t) {
                                      var n = t.anchor,
                                        r = t.head,
                                        o = getLine(e.doc, n.line)
                                      if (
                                        0 == cmp(n, r) &&
                                        n.sticky == r.sticky
                                      )
                                        return t
                                      var i = getOrder(o)
                                      if (!i) return t
                                      var a = getBidiPartAt(i, n.ch, n.sticky),
                                        s = i[a]
                                      if (s.from != n.ch && s.to != n.ch)
                                        return t
                                      var l,
                                        c =
                                          a +
                                          ((s.from == n.ch) == (1 != s.level)
                                            ? 0
                                            : 1)
                                      if (0 == c || c == i.length) return t
                                      if (r.line != n.line)
                                        l =
                                          (r.line - n.line) *
                                            ('ltr' == e.doc.direction
                                              ? 1
                                              : -1) >
                                          0
                                      else {
                                        var u = getBidiPartAt(
                                            i,
                                            r.ch,
                                            r.sticky
                                          ),
                                          d =
                                            u - a ||
                                            (r.ch - n.ch) *
                                              (1 == s.level ? -1 : 1)
                                        l = u == c - 1 || u == c ? d < 0 : d > 0
                                      }
                                      var p = i[c + (l ? -1 : 0)],
                                        h = l == (1 == p.level),
                                        f = h ? p.from : p.to,
                                        g = h ? 'after' : 'before'
                                      return n.ch == f && n.sticky == g
                                        ? t
                                        : new ye(new Pos(n.line, f, g), r)
                                    })(e, new ye(clipPos(i, w), b))),
                                      setSelection(
                                        i,
                                        normalizeSelection(e, S, s),
                                        N
                                      )
                                  }
                              }
                              var p = o.wrapper.getBoundingClientRect(),
                                h = 0
                              function done(t) {
                                ;(e.state.selectingText = !1),
                                  (h = 1 / 0),
                                  e_preventDefault(t),
                                  o.input.focus(),
                                  off(o.wrapper.ownerDocument, 'mousemove', f),
                                  off(o.wrapper.ownerDocument, 'mouseup', g),
                                  (i.history.lastSelOrigin = null)
                              }
                              var f = operation(e, function(t) {
                                  0 !== t.buttons && e_button(t)
                                    ? (function extend(t) {
                                        var n = ++h
                                        var a = posFromMouse(
                                          e,
                                          t,
                                          !0,
                                          'rectangle' == r.unit
                                        )
                                        if (!a) return
                                        if (0 != cmp(a, d)) {
                                          ;(e.curOp.focus = activeElt()),
                                            extendTo(a)
                                          var s = visibleLines(o, i)
                                          ;(a.line >= s.to ||
                                            a.line < s.from) &&
                                            setTimeout(
                                              operation(e, function() {
                                                h == n && extend(t)
                                              }),
                                              150
                                            )
                                        } else {
                                          var l =
                                            t.clientY < p.top
                                              ? -20
                                              : t.clientY > p.bottom
                                                ? 20
                                                : 0
                                          l &&
                                            setTimeout(
                                              operation(e, function() {
                                                h == n &&
                                                  ((o.scroller.scrollTop += l),
                                                  extend(t))
                                              }),
                                              50
                                            )
                                        }
                                      })(t)
                                    : done(t)
                                }),
                                g = operation(e, done)
                              ;(e.state.selectingText = g),
                                V(o.wrapper.ownerDocument, 'mousemove', f),
                                V(o.wrapper.ownerDocument, 'mouseup', g)
                            })(e, r, t, i)
                      })(t, r, i, e)
                    : e_target(e) == n.scroller && e_preventDefault(e)
                  : 2 == o
                    ? (r && extendSelection(t.doc, r),
                      setTimeout(function() {
                        return n.input.focus()
                      }, 20))
                    : 3 == o &&
                      (S
                        ? t.display.input.onContextMenu(e)
                        : delayBlurEvent(t)))
          }
      }
      function rangeForUnit(e, t, n) {
        if ('char' == n) return new ye(t, t)
        if ('word' == n) return e.findWordAt(t)
        if ('line' == n)
          return new ye(Pos(t.line, 0), clipPos(e.doc, Pos(t.line + 1, 0)))
        var r = n(e, t)
        return new ye(r.from, r.to)
      }
      function gutterEvent(e, t, n, r) {
        var o, i
        if (t.touches) (o = t.touches[0].clientX), (i = t.touches[0].clientY)
        else
          try {
            ;(o = t.clientX), (i = t.clientY)
          } catch (t) {
            return !1
          }
        if (o >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1
        r && e_preventDefault(t)
        var a = e.display,
          s = a.lineDiv.getBoundingClientRect()
        if (i > s.bottom || !hasHandler(e, n)) return e_defaultPrevented(t)
        i -= s.top - a.viewOffset
        for (var l = 0; l < e.options.gutters.length; ++l) {
          var c = a.gutters.childNodes[l]
          if (c && c.getBoundingClientRect().right >= o)
            return (
              signal(e, n, e, lineAtHeight(e.doc, i), e.options.gutters[l], t),
              e_defaultPrevented(t)
            )
        }
      }
      function clickInGutter(e, t) {
        return gutterEvent(e, t, 'gutterClick', !0)
      }
      function onContextMenu(e, t) {
        eventInWidget(e.display, t) ||
          (function contextMenuInGutter(e, t) {
            if (!hasHandler(e, 'gutterContextMenu')) return !1
            return gutterEvent(e, t, 'gutterContextMenu', !1)
          })(e, t) ||
          signalDOMEvent(e, t, 'contextmenu') ||
          S ||
          e.display.input.onContextMenu(t)
      }
      function themeChanged(e) {
        ;(e.display.wrapper.className =
          e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
          e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
          clearCaches(e)
      }
      Fe.prototype.compare = function(e, t, n) {
        return this.time + 400 > e && 0 == cmp(t, this.pos) && n == this.button
      }
      var Be = {
          toString: function() {
            return 'CodeMirror.Init'
          }
        },
        ze = {},
        Re = {}
      function guttersChanged(e) {
        updateGutters(e), regChange(e), alignHorizontally(e)
      }
      function dragDropChanged(e, t, n) {
        if (!t != !(n && n != Be)) {
          var r = e.display.dragFunctions,
            o = t ? V : off
          o(e.display.scroller, 'dragstart', r.start),
            o(e.display.scroller, 'dragenter', r.enter),
            o(e.display.scroller, 'dragover', r.over),
            o(e.display.scroller, 'dragleave', r.leave),
            o(e.display.scroller, 'drop', r.drop)
        }
      }
      function wrappingChanged(e) {
        e.options.lineWrapping
          ? (addClass(e.display.wrapper, 'CodeMirror-wrap'),
            (e.display.sizer.style.minWidth = ''),
            (e.display.sizerWidth = null))
          : (L(e.display.wrapper, 'CodeMirror-wrap'), findMaxLine(e)),
          estimateLineHeights(e),
          regChange(e),
          clearCaches(e),
          setTimeout(function() {
            return updateScrollbars(e)
          }, 100)
      }
      function CodeMirror(e, t) {
        var r = this
        if (!(this instanceof CodeMirror)) return new CodeMirror(e, t)
        ;(this.options = t = t ? copyObj(t) : {}),
          copyObj(ze, t, !1),
          setGuttersForLineNumbers(t)
        var o = t.value
        'string' == typeof o
          ? (o = new ke(o, t.mode, null, t.lineSeparator, t.direction))
          : t.mode && (o.modeOption = t.mode),
          (this.doc = o)
        var i = new CodeMirror.inputStyles[t.inputStyle](this),
          c = (this.display = new function Display(e, t, r) {
            var o = this
            ;(this.input = r),
              (o.scrollbarFiller = elt(
                'div',
                null,
                'CodeMirror-scrollbar-filler'
              )),
              o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
              (o.gutterFiller = elt('div', null, 'CodeMirror-gutter-filler')),
              o.gutterFiller.setAttribute('cm-not-content', 'true'),
              (o.lineDiv = eltP('div', null, 'CodeMirror-code')),
              (o.selectionDiv = elt(
                'div',
                null,
                null,
                'position: relative; z-index: 1'
              )),
              (o.cursorDiv = elt('div', null, 'CodeMirror-cursors')),
              (o.measure = elt('div', null, 'CodeMirror-measure')),
              (o.lineMeasure = elt('div', null, 'CodeMirror-measure')),
              (o.lineSpace = eltP(
                'div',
                [
                  o.measure,
                  o.lineMeasure,
                  o.selectionDiv,
                  o.cursorDiv,
                  o.lineDiv
                ],
                null,
                'position: relative; outline: none'
              ))
            var i = eltP('div', [o.lineSpace], 'CodeMirror-lines')
            ;(o.mover = elt('div', [i], null, 'position: relative')),
              (o.sizer = elt('div', [o.mover], 'CodeMirror-sizer')),
              (o.sizerWidth = null),
              (o.heightForcer = elt(
                'div',
                null,
                null,
                'position: absolute; height: ' + O + 'px; width: 1px;'
              )),
              (o.gutters = elt('div', null, 'CodeMirror-gutters')),
              (o.lineGutter = null),
              (o.scroller = elt(
                'div',
                [o.sizer, o.heightForcer, o.gutters],
                'CodeMirror-scroll'
              )),
              o.scroller.setAttribute('tabIndex', '-1'),
              (o.wrapper = elt(
                'div',
                [o.scrollbarFiller, o.gutterFiller, o.scroller],
                'CodeMirror'
              )),
              a &&
                s < 8 &&
                ((o.gutters.style.zIndex = -1),
                (o.scroller.style.paddingRight = 0)),
              l || (n && v) || (o.scroller.draggable = !0),
              e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
              (o.viewFrom = o.viewTo = t.first),
              (o.reportedViewFrom = o.reportedViewTo = t.first),
              (o.view = []),
              (o.renderedView = null),
              (o.externalMeasured = null),
              (o.viewOffset = 0),
              (o.lastWrapHeight = o.lastWrapWidth = 0),
              (o.updateLineNumbers = null),
              (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
              (o.scrollbarsClipped = !1),
              (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
              (o.alignWidgets = !1),
              (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
              (o.maxLine = null),
              (o.maxLineLength = 0),
              (o.maxLineChanged = !1),
              (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
              (o.shift = !1),
              (o.selForContextMenu = null),
              (o.activeTouch = null),
              r.init(o)
          }(e, o, i))
        for (var u in ((c.wrapper.CodeMirror = this),
        updateGutters(this),
        themeChanged(this),
        t.lineWrapping &&
          (this.display.wrapper.className += ' CodeMirror-wrap'),
        initScrollbars(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: !1,
          cutIncoming: !1,
          selectingText: !1,
          draggingText: !1,
          highlight: new T(),
          keySeq: null,
          specialChars: null
        }),
        t.autofocus && !v && c.input.focus(),
        a &&
          s < 11 &&
          setTimeout(function() {
            return r.display.input.reset(!0)
          }, 20),
        (function registerEventHandlers(e) {
          var t = e.display
          V(t.scroller, 'mousedown', operation(e, onMouseDown)),
            V(
              t.scroller,
              'dblclick',
              a && s < 11
                ? operation(e, function(t) {
                    if (!signalDOMEvent(e, t)) {
                      var n = posFromMouse(e, t)
                      if (
                        n &&
                        !clickInGutter(e, t) &&
                        !eventInWidget(e.display, t)
                      ) {
                        e_preventDefault(t)
                        var r = e.findWordAt(n)
                        extendSelection(e.doc, r.anchor, r.head)
                      }
                    }
                  })
                : function(t) {
                    return signalDOMEvent(e, t) || e_preventDefault(t)
                  }
            )
          V(t.scroller, 'contextmenu', function(t) {
            return onContextMenu(e, t)
          })
          var n,
            r = {end: 0}
          function finishTouch() {
            t.activeTouch &&
              ((n = setTimeout(function() {
                return (t.activeTouch = null)
              }, 1e3)),
              ((r = t.activeTouch).end = +new Date()))
          }
          function farAway(e, t) {
            if (null == t.left) return !0
            var n = t.left - e.left,
              r = t.top - e.top
            return n * n + r * r > 400
          }
          V(t.scroller, 'touchstart', function(o) {
            if (
              !signalDOMEvent(e, o) &&
              !(function isMouseLikeTouchEvent(e) {
                if (1 != e.touches.length) return !1
                var t = e.touches[0]
                return t.radiusX <= 1 && t.radiusY <= 1
              })(o) &&
              !clickInGutter(e, o)
            ) {
              t.input.ensurePolled(), clearTimeout(n)
              var i = +new Date()
              ;(t.activeTouch = {
                start: i,
                moved: !1,
                prev: i - r.end <= 300 ? r : null
              }),
                1 == o.touches.length &&
                  ((t.activeTouch.left = o.touches[0].pageX),
                  (t.activeTouch.top = o.touches[0].pageY))
            }
          }),
            V(t.scroller, 'touchmove', function() {
              t.activeTouch && (t.activeTouch.moved = !0)
            }),
            V(t.scroller, 'touchend', function(n) {
              var r = t.activeTouch
              if (
                r &&
                !eventInWidget(t, n) &&
                null != r.left &&
                !r.moved &&
                new Date() - r.start < 300
              ) {
                var o,
                  i = e.coordsChar(t.activeTouch, 'page')
                ;(o =
                  !r.prev || farAway(r, r.prev)
                    ? new ye(i, i)
                    : !r.prev.prev || farAway(r, r.prev.prev)
                      ? e.findWordAt(i)
                      : new ye(
                          Pos(i.line, 0),
                          clipPos(e.doc, Pos(i.line + 1, 0))
                        )),
                  e.setSelection(o.anchor, o.head),
                  e.focus(),
                  e_preventDefault(n)
              }
              finishTouch()
            }),
            V(t.scroller, 'touchcancel', finishTouch),
            V(t.scroller, 'scroll', function() {
              t.scroller.clientHeight &&
                (updateScrollTop(e, t.scroller.scrollTop),
                setScrollLeft(e, t.scroller.scrollLeft, !0),
                signal(e, 'scroll', e))
            }),
            V(t.scroller, 'mousewheel', function(t) {
              return onScrollWheel(e, t)
            }),
            V(t.scroller, 'DOMMouseScroll', function(t) {
              return onScrollWheel(e, t)
            }),
            V(t.wrapper, 'scroll', function() {
              return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0)
            }),
            (t.dragFunctions = {
              enter: function(t) {
                signalDOMEvent(e, t) || e_stop(t)
              },
              over: function(t) {
                signalDOMEvent(e, t) ||
                  (!(function onDragOver(e, t) {
                    var n = posFromMouse(e, t)
                    if (n) {
                      var r = document.createDocumentFragment()
                      drawSelectionCursor(e, n, r),
                        e.display.dragCursor ||
                          ((e.display.dragCursor = elt(
                            'div',
                            null,
                            'CodeMirror-cursors CodeMirror-dragcursors'
                          )),
                          e.display.lineSpace.insertBefore(
                            e.display.dragCursor,
                            e.display.cursorDiv
                          )),
                        removeChildrenAndAdd(e.display.dragCursor, r)
                    }
                  })(e, t),
                  e_stop(t))
              },
              start: function(t) {
                return (function onDragStart(e, t) {
                  if (a && (!e.state.draggingText || +new Date() - Le < 100))
                    e_stop(t)
                  else if (
                    !signalDOMEvent(e, t) &&
                    !eventInWidget(e.display, t) &&
                    (t.dataTransfer.setData('Text', e.getSelection()),
                    (t.dataTransfer.effectAllowed = 'copyMove'),
                    t.dataTransfer.setDragImage && !p)
                  ) {
                    var n = elt(
                      'img',
                      null,
                      null,
                      'position: fixed; left: 0; top: 0;'
                    )
                    ;(n.src =
                      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                      d &&
                        ((n.width = n.height = 1),
                        e.display.wrapper.appendChild(n),
                        (n._top = n.offsetTop)),
                      t.dataTransfer.setDragImage(n, 0, 0),
                      d && n.parentNode.removeChild(n)
                  }
                })(e, t)
              },
              drop: operation(e, onDrop),
              leave: function(t) {
                signalDOMEvent(e, t) || clearDragCursor(e)
              }
            })
          var o = t.input.getField()
          V(o, 'keyup', function(t) {
            return onKeyUp.call(e, t)
          }),
            V(o, 'keydown', operation(e, onKeyDown)),
            V(o, 'keypress', operation(e, onKeyPress)),
            V(o, 'focus', function(t) {
              return onFocus(e, t)
            }),
            V(o, 'blur', function(t) {
              return onBlur(e, t)
            })
        })(this),
        ensureGlobalHandlers(),
        startOperation(this),
        (this.curOp.forceUpdate = !0),
        attachDoc(this, o),
        (t.autofocus && !v) || this.hasFocus()
          ? setTimeout(bind(onFocus, this), 20)
          : onBlur(this),
        Re))
          Re.hasOwnProperty(u) && Re[u](r, t[u], Be)
        maybeUpdateLineNumberWidth(this), t.finishInit && t.finishInit(this)
        for (var h = 0; h < Ve.length; ++h) Ve[h](r)
        endOperation(this),
          l &&
            t.lineWrapping &&
            'optimizelegibility' == getComputedStyle(c.lineDiv).textRendering &&
            (c.lineDiv.style.textRendering = 'auto')
      }
      ;(CodeMirror.defaults = ze), (CodeMirror.optionHandlers = Re)
      var Ve = []
      function indentLine(e, t, n, r) {
        var o,
          i = e.doc
        null == n && (n = 'add'),
          'smart' == n &&
            (i.mode.indent ? (o = getContextBefore(e, t).state) : (n = 'prev'))
        var a = e.options.tabSize,
          s = getLine(i, t),
          l = countColumn(s.text, null, a)
        s.stateAfter && (s.stateAfter = null)
        var c,
          u = s.text.match(/^\s*/)[0]
        if (r || /\S/.test(s.text)) {
          if (
            'smart' == n &&
            ((c = i.mode.indent(o, s.text.slice(u.length), s.text)) == P ||
              c > 150)
          ) {
            if (!r) return
            n = 'prev'
          }
        } else (c = 0), (n = 'not')
        'prev' == n
          ? (c = t > i.first ? countColumn(getLine(i, t - 1).text, null, a) : 0)
          : 'add' == n
            ? (c = l + e.options.indentUnit)
            : 'subtract' == n
              ? (c = l - e.options.indentUnit)
              : 'number' == typeof n && (c = l + n),
          (c = Math.max(0, c))
        var d = '',
          p = 0
        if (e.options.indentWithTabs)
          for (var h = Math.floor(c / a); h; --h) (p += a), (d += '\t')
        if ((p < c && (d += spaceStr(c - p)), d != u))
          return (
            replaceRange(i, d, Pos(t, 0), Pos(t, u.length), '+input'),
            (s.stateAfter = null),
            !0
          )
        for (var f = 0; f < i.sel.ranges.length; f++) {
          var g = i.sel.ranges[f]
          if (g.head.line == t && g.head.ch < u.length) {
            var m = Pos(t, u.length)
            replaceOneSelection(i, f, new ye(m, m))
            break
          }
        }
      }
      CodeMirror.defineInitHook = function(e) {
        return Ve.push(e)
      }
      var Ue = null
      function setLastCopied(e) {
        Ue = e
      }
      function applyTextInput(e, t, n, r, o) {
        var i = e.doc
        ;(e.display.shift = !1), r || (r = i.sel)
        var a,
          s = e.state.pasteIncoming || 'paste' == o,
          l = K(t),
          c = null
        if (s && r.ranges.length > 1)
          if (Ue && Ue.text.join('\n') == t) {
            if (r.ranges.length % Ue.text.length == 0) {
              c = []
              for (var u = 0; u < Ue.text.length; u++)
                c.push(i.splitLines(Ue.text[u]))
            }
          } else
            l.length == r.ranges.length &&
              e.options.pasteLinesPerSelection &&
              (c = map(l, function(e) {
                return [e]
              }))
        for (var d = r.ranges.length - 1; d >= 0; d--) {
          var p = r.ranges[d],
            h = p.from(),
            f = p.to()
          p.empty() &&
            (n && n > 0
              ? (h = Pos(h.line, h.ch - n))
              : e.state.overwrite && !s
                ? (f = Pos(
                    f.line,
                    Math.min(
                      getLine(i, f.line).text.length,
                      f.ch + lst(l).length
                    )
                  ))
                : s &&
                  Ue &&
                  Ue.lineWise &&
                  Ue.text.join('\n') == t &&
                  (h = f = Pos(h.line, 0))),
            (a = e.curOp.updateInput)
          var g = {
            from: h,
            to: f,
            text: c ? c[d % c.length] : l,
            origin: o || (s ? 'paste' : e.state.cutIncoming ? 'cut' : '+input')
          }
          makeChange(e.doc, g), signalLater(e, 'inputRead', e, g)
        }
        t && !s && triggerElectric(e, t),
          ensureCursorVisible(e),
          (e.curOp.updateInput = a),
          (e.curOp.typing = !0),
          (e.state.pasteIncoming = e.state.cutIncoming = !1)
      }
      function handlePaste(e, t) {
        var n = e.clipboardData && e.clipboardData.getData('Text')
        if (n)
          return (
            e.preventDefault(),
            t.isReadOnly() ||
              t.options.disableInput ||
              runInOp(t, function() {
                return applyTextInput(t, n, 0, null, 'paste')
              }),
            !0
          )
      }
      function triggerElectric(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
          for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var o = n.ranges[r]
            if (
              !(
                o.head.ch > 100 ||
                (r && n.ranges[r - 1].head.line == o.head.line)
              )
            ) {
              var i = e.getModeAt(o.head),
                a = !1
              if (i.electricChars) {
                for (var s = 0; s < i.electricChars.length; s++)
                  if (t.indexOf(i.electricChars.charAt(s)) > -1) {
                    a = indentLine(e, o.head.line, 'smart')
                    break
                  }
              } else
                i.electricInput &&
                  i.electricInput.test(
                    getLine(e.doc, o.head.line).text.slice(0, o.head.ch)
                  ) &&
                  (a = indentLine(e, o.head.line, 'smart'))
              a && signalLater(e, 'electricInput', e, o.head.line)
            }
          }
      }
      function copyableRanges(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var o = e.doc.sel.ranges[r].head.line,
            i = {anchor: Pos(o, 0), head: Pos(o + 1, 0)}
          n.push(i), t.push(e.getRange(i.anchor, i.head))
        }
        return {text: t, ranges: n}
      }
      function disableBrowserMagic(e, t) {
        e.setAttribute('autocorrect', 'off'),
          e.setAttribute('autocapitalize', 'off'),
          e.setAttribute('spellcheck', !!t)
      }
      function hiddenTextarea() {
        var e = elt(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
          ),
          t = elt(
            'div',
            [e],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;'
          )
        return (
          l ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
          g && (e.style.border = '1px solid black'),
          disableBrowserMagic(e),
          t
        )
      }
      function findPosH(e, t, n, r, o) {
        var i = t,
          a = n,
          s = getLine(e, t.line)
        function moveOnce(r) {
          var i
          if (
            null ==
            (i = o
              ? (function moveVisually(e, t, n, r) {
                  var o = getOrder(t, e.doc.direction)
                  if (!o) return moveLogically(t, n, r)
                  n.ch >= t.text.length
                    ? ((n.ch = t.text.length), (n.sticky = 'before'))
                    : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'))
                  var i = getBidiPartAt(o, n.ch, n.sticky),
                    a = o[i]
                  if (
                    'ltr' == e.doc.direction &&
                    a.level % 2 == 0 &&
                    (r > 0 ? a.to > n.ch : a.from < n.ch)
                  )
                    return moveLogically(t, n, r)
                  var s,
                    l = function(e, n) {
                      return moveCharLogically(
                        t,
                        e instanceof Pos ? e.ch : e,
                        n
                      )
                    },
                    c = function(n) {
                      return e.options.lineWrapping
                        ? ((s = s || prepareMeasureForLine(e, t)),
                          wrappedLineExtentChar(e, t, s, n))
                        : {begin: 0, end: t.text.length}
                    },
                    u = c('before' == n.sticky ? l(n, -1) : n.ch)
                  if ('rtl' == e.doc.direction || 1 == a.level) {
                    var d = (1 == a.level) == r < 0,
                      p = l(n, d ? 1 : -1)
                    if (
                      null != p &&
                      (d
                        ? p <= a.to && p <= u.end
                        : p >= a.from && p >= u.begin)
                    ) {
                      var h = d ? 'before' : 'after'
                      return new Pos(n.line, p, h)
                    }
                  }
                  var f = function(e, t, r) {
                      for (
                        var i = function(e, t) {
                          return t
                            ? new Pos(n.line, l(e, 1), 'before')
                            : new Pos(n.line, e, 'after')
                        };
                        e >= 0 && e < o.length;
                        e += t
                      ) {
                        var a = o[e],
                          s = t > 0 == (1 != a.level),
                          c = s ? r.begin : l(r.end, -1)
                        if (a.from <= c && c < a.to) return i(c, s)
                        if (
                          ((c = s ? a.from : l(a.to, -1)),
                          r.begin <= c && c < r.end)
                        )
                          return i(c, s)
                      }
                    },
                    g = f(i + r, r, u)
                  if (g) return g
                  var m = r > 0 ? u.end : l(u.begin, -1)
                  return null == m ||
                    (r > 0 && m == t.text.length) ||
                    !(g = f(r > 0 ? 0 : o.length - 1, r, c(m)))
                    ? null
                    : g
                })(e.cm, s, t, n)
              : moveLogically(s, t, n))
          ) {
            if (
              r ||
              !(function findNextLine() {
                var r = t.line + n
                return (
                  !(r < e.first || r >= e.first + e.size) &&
                  ((t = new Pos(r, t.ch, t.sticky)), (s = getLine(e, r)))
                )
              })()
            )
              return !1
            t = endOfLine(o, e.cm, s, t.line, n)
          } else t = i
          return !0
        }
        if ('char' == r) moveOnce()
        else if ('column' == r) moveOnce(!0)
        else if ('word' == r || 'group' == r)
          for (
            var l = null,
              c = 'group' == r,
              u = e.cm && e.cm.getHelper(t, 'wordChars'),
              d = !0;
            !(n < 0) || moveOnce(!d);
            d = !1
          ) {
            var p = s.text.charAt(t.ch) || '\n',
              h = isWordChar(p, u)
                ? 'w'
                : c && '\n' == p
                  ? 'n'
                  : !c || /\s/.test(p)
                    ? null
                    : 'p'
            if ((!c || d || h || (h = 's'), l && l != h)) {
              n < 0 && ((n = 1), moveOnce(), (t.sticky = 'after'))
              break
            }
            if ((h && (l = h), n > 0 && !moveOnce(!d))) break
          }
        var f = skipAtomic(e, t, i, a, !0)
        return equalCursorPos(i, f) && (f.hitSide = !0), f
      }
      function findPosV(e, t, n, r) {
        var o,
          i,
          a = e.doc,
          s = t.left
        if ('page' == r) {
          var l = Math.min(
              e.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            c = Math.max(l - 0.5 * textHeight(e.display), 3)
          o = (n > 0 ? t.bottom : t.top) + n * c
        } else 'line' == r && (o = n > 0 ? t.bottom + 3 : t.top - 3)
        for (; (i = coordsChar(e, s, o)).outside; ) {
          if (n < 0 ? o <= 0 : o >= a.height) {
            i.hitSide = !0
            break
          }
          o += 5 * n
        }
        return i
      }
      var je = function(e) {
        ;(this.cm = e),
          (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
          (this.polling = new T()),
          (this.composing = null),
          (this.gracePeriod = !1),
          (this.readDOMTimeout = null)
      }
      function posToDOM(e, t) {
        var n = findViewForLine(e, t.line)
        if (!n || n.hidden) return null
        var r = getLine(e.doc, t.line),
          o = mapFromLineView(n, r, t.line),
          i = getOrder(r, e.doc.direction),
          a = 'left'
        i && (a = getBidiPartAt(i, t.ch) % 2 ? 'right' : 'left')
        var s = nodeAndOffsetInLineMap(o.map, t.ch, a)
        return (s.offset = 'right' == s.collapse ? s.end : s.start), s
      }
      function badPos(e, t) {
        return t && (e.bad = !0), e
      }
      function domToPos(e, t, n) {
        var r
        if (t == e.display.lineDiv) {
          if (!(r = e.display.lineDiv.childNodes[n]))
            return badPos(e.clipPos(Pos(e.display.viewTo - 1)), !0)
          ;(t = null), (n = 0)
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv) return null
            if (r.parentNode && r.parentNode == e.display.lineDiv) break
          }
        for (var o = 0; o < e.display.view.length; o++) {
          var i = e.display.view[o]
          if (i.node == r) return locateNodeInLineView(i, t, n)
        }
      }
      function locateNodeInLineView(e, t, n) {
        var r = e.text.firstChild,
          o = !1
        if (!t || !contains(r, t)) return badPos(Pos(lineNo(e.line), 0), !0)
        if (t == r && ((o = !0), (t = r.childNodes[n]), (n = 0), !t)) {
          var i = e.rest ? lst(e.rest) : e.line
          return badPos(Pos(lineNo(i), i.text.length), o)
        }
        var a = 3 == t.nodeType ? t : null,
          s = t
        for (
          a ||
          1 != t.childNodes.length ||
          3 != t.firstChild.nodeType ||
          ((a = t.firstChild), n && (n = a.nodeValue.length));
          s.parentNode != r;

        )
          s = s.parentNode
        var l = e.measure,
          c = l.maps
        function find(t, n, r) {
          for (var o = -1; o < (c ? c.length : 0); o++)
            for (var i = o < 0 ? l.map : c[o], a = 0; a < i.length; a += 3) {
              var s = i[a + 2]
              if (s == t || s == n) {
                var u = lineNo(o < 0 ? e.line : e.rest[o]),
                  d = i[a] + r
                return (r < 0 || s != t) && (d = i[a + (r ? 1 : 0)]), Pos(u, d)
              }
            }
        }
        var u = find(a, s, n)
        if (u) return badPos(u, o)
        for (
          var d = s.nextSibling, p = a ? a.nodeValue.length - n : 0;
          d;
          d = d.nextSibling
        ) {
          if ((u = find(d, d.firstChild, 0)))
            return badPos(Pos(u.line, u.ch - p), o)
          p += d.textContent.length
        }
        for (var h = s.previousSibling, f = n; h; h = h.previousSibling) {
          if ((u = find(h, h.firstChild, -1)))
            return badPos(Pos(u.line, u.ch + f), o)
          f += h.textContent.length
        }
      }
      ;(je.prototype.init = function(e) {
        var t = this,
          n = this,
          r = n.cm,
          o = (n.div = e.lineDiv)
        function onCopyCut(e) {
          if (!signalDOMEvent(r, e)) {
            if (r.somethingSelected())
              setLastCopied({lineWise: !1, text: r.getSelections()}),
                'cut' == e.type && r.replaceSelection('', null, 'cut')
            else {
              if (!r.options.lineWiseCopyCut) return
              var t = copyableRanges(r)
              setLastCopied({lineWise: !0, text: t.text}),
                'cut' == e.type &&
                  r.operation(function() {
                    r.setSelections(t.ranges, 0, A),
                      r.replaceSelection('', null, 'cut')
                  })
            }
            if (e.clipboardData) {
              e.clipboardData.clearData()
              var i = Ue.text.join('\n')
              if (
                (e.clipboardData.setData('Text', i),
                e.clipboardData.getData('Text') == i)
              )
                return void e.preventDefault()
            }
            var a = hiddenTextarea(),
              s = a.firstChild
            r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild),
              (s.value = Ue.text.join('\n'))
            var l = document.activeElement
            M(s),
              setTimeout(function() {
                r.display.lineSpace.removeChild(a),
                  l.focus(),
                  l == o && n.showPrimarySelection()
              }, 50)
          }
        }
        disableBrowserMagic(o, r.options.spellcheck),
          V(o, 'paste', function(e) {
            signalDOMEvent(r, e) ||
              handlePaste(e, r) ||
              (s <= 11 &&
                setTimeout(
                  operation(r, function() {
                    return t.updateFromDOM()
                  }),
                  20
                ))
          }),
          V(o, 'compositionstart', function(e) {
            t.composing = {data: e.data, done: !1}
          }),
          V(o, 'compositionupdate', function(e) {
            t.composing || (t.composing = {data: e.data, done: !1})
          }),
          V(o, 'compositionend', function(e) {
            t.composing &&
              (e.data != t.composing.data && t.readFromDOMSoon(),
              (t.composing.done = !0))
          }),
          V(o, 'touchstart', function() {
            return n.forceCompositionEnd()
          }),
          V(o, 'input', function() {
            t.composing || t.readFromDOMSoon()
          }),
          V(o, 'copy', onCopyCut),
          V(o, 'cut', onCopyCut)
      }),
        (je.prototype.prepareSelection = function() {
          var e = prepareSelection(this.cm, !1)
          return (e.focus = this.cm.state.focused), e
        }),
        (je.prototype.showSelection = function(e, t) {
          e &&
            this.cm.display.view.length &&
            ((e.focus || t) && this.showPrimarySelection(),
            this.showMultipleSelections(e))
        }),
        (je.prototype.getSelection = function() {
          return this.cm.display.wrapper.ownerDocument.getSelection()
        }),
        (je.prototype.showPrimarySelection = function() {
          var e = this.getSelection(),
            t = this.cm,
            r = t.doc.sel.primary(),
            o = r.from(),
            i = r.to()
          if (
            t.display.viewTo == t.display.viewFrom ||
            o.line >= t.display.viewTo ||
            i.line < t.display.viewFrom
          )
            e.removeAllRanges()
          else {
            var a = domToPos(t, e.anchorNode, e.anchorOffset),
              s = domToPos(t, e.focusNode, e.focusOffset)
            if (
              !a ||
              a.bad ||
              !s ||
              s.bad ||
              0 != cmp(minPos(a, s), o) ||
              0 != cmp(maxPos(a, s), i)
            ) {
              var l = t.display.view,
                c = (o.line >= t.display.viewFrom && posToDOM(t, o)) || {
                  node: l[0].measure.map[2],
                  offset: 0
                },
                u = i.line < t.display.viewTo && posToDOM(t, i)
              if (!u) {
                var d = l[l.length - 1].measure,
                  p = d.maps ? d.maps[d.maps.length - 1] : d.map
                u = {
                  node: p[p.length - 1],
                  offset: p[p.length - 2] - p[p.length - 3]
                }
              }
              if (c && u) {
                var h,
                  f = e.rangeCount && e.getRangeAt(0)
                try {
                  h = k(c.node, c.offset, u.offset, u.node)
                } catch (e) {}
                h &&
                  (!n && t.state.focused
                    ? (e.collapse(c.node, c.offset),
                      h.collapsed || (e.removeAllRanges(), e.addRange(h)))
                    : (e.removeAllRanges(), e.addRange(h)),
                  f && null == e.anchorNode
                    ? e.addRange(f)
                    : n && this.startGracePeriod()),
                  this.rememberSelection()
              } else e.removeAllRanges()
            }
          }
        }),
        (je.prototype.startGracePeriod = function() {
          var e = this
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function() {
              ;(e.gracePeriod = !1),
                e.selectionChanged() &&
                  e.cm.operation(function() {
                    return (e.cm.curOp.selectionChanged = !0)
                  })
            }, 20))
        }),
        (je.prototype.showMultipleSelections = function(e) {
          removeChildrenAndAdd(this.cm.display.cursorDiv, e.cursors),
            removeChildrenAndAdd(this.cm.display.selectionDiv, e.selection)
        }),
        (je.prototype.rememberSelection = function() {
          var e = this.getSelection()
          ;(this.lastAnchorNode = e.anchorNode),
            (this.lastAnchorOffset = e.anchorOffset),
            (this.lastFocusNode = e.focusNode),
            (this.lastFocusOffset = e.focusOffset)
        }),
        (je.prototype.selectionInEditor = function() {
          var e = this.getSelection()
          if (!e.rangeCount) return !1
          var t = e.getRangeAt(0).commonAncestorContainer
          return contains(this.div, t)
        }),
        (je.prototype.focus = function() {
          'nocursor' != this.cm.options.readOnly &&
            (this.selectionInEditor() ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus())
        }),
        (je.prototype.blur = function() {
          this.div.blur()
        }),
        (je.prototype.getField = function() {
          return this.div
        }),
        (je.prototype.supportsTouch = function() {
          return !0
        }),
        (je.prototype.receivedFocus = function() {
          var e = this
          this.selectionInEditor()
            ? this.pollSelection()
            : runInOp(this.cm, function() {
                return (e.cm.curOp.selectionChanged = !0)
              }),
            this.polling.set(this.cm.options.pollInterval, function poll() {
              e.cm.state.focused &&
                (e.pollSelection(),
                e.polling.set(e.cm.options.pollInterval, poll))
            })
        }),
        (je.prototype.selectionChanged = function() {
          var e = this.getSelection()
          return (
            e.anchorNode != this.lastAnchorNode ||
            e.anchorOffset != this.lastAnchorOffset ||
            e.focusNode != this.lastFocusNode ||
            e.focusOffset != this.lastFocusOffset
          )
        }),
        (je.prototype.pollSelection = function() {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var e = this.getSelection(),
              t = this.cm
            if (
              m &&
              u &&
              this.cm.options.gutters.length &&
              (function isInGutter(e) {
                for (var t = e; t; t = t.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0
                return !1
              })(e.anchorNode)
            )
              return (
                this.cm.triggerOnKeyDown({
                  type: 'keydown',
                  keyCode: 8,
                  preventDefault: Math.abs
                }),
                this.blur(),
                void this.focus()
              )
            if (!this.composing) {
              this.rememberSelection()
              var n = domToPos(t, e.anchorNode, e.anchorOffset),
                r = domToPos(t, e.focusNode, e.focusOffset)
              n &&
                r &&
                runInOp(t, function() {
                  setSelection(t.doc, simpleSelection(n, r), A),
                    (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                })
            }
          }
        }),
        (je.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null))
          var e,
            t,
            n,
            r = this.cm,
            o = r.display,
            i = r.doc.sel.primary(),
            a = i.from(),
            s = i.to()
          if (
            (0 == a.ch &&
              a.line > r.firstLine() &&
              (a = Pos(a.line - 1, getLine(r.doc, a.line - 1).length)),
            s.ch == getLine(r.doc, s.line).text.length &&
              s.line < r.lastLine() &&
              (s = Pos(s.line + 1, 0)),
            a.line < o.viewFrom || s.line > o.viewTo - 1)
          )
            return !1
          a.line == o.viewFrom || 0 == (e = findViewIndex(r, a.line))
            ? ((t = lineNo(o.view[0].line)), (n = o.view[0].node))
            : ((t = lineNo(o.view[e].line)),
              (n = o.view[e - 1].node.nextSibling))
          var l,
            c,
            u = findViewIndex(r, s.line)
          if (
            (u == o.view.length - 1
              ? ((l = o.viewTo - 1), (c = o.lineDiv.lastChild))
              : ((l = lineNo(o.view[u + 1].line) - 1),
                (c = o.view[u + 1].node.previousSibling)),
            !n)
          )
            return !1
          for (
            var d = r.doc.splitLines(
                (function domTextBetween(e, t, n, r, o) {
                  var i = '',
                    a = !1,
                    s = e.doc.lineSeparator(),
                    l = !1
                  function close() {
                    a && ((i += s), l && (i += s), (a = l = !1))
                  }
                  function addText(e) {
                    e && (close(), (i += e))
                  }
                  function walk(t) {
                    if (1 == t.nodeType) {
                      var n = t.getAttribute('cm-text')
                      if (n) return void addText(n)
                      var i,
                        c = t.getAttribute('cm-marker')
                      if (c) {
                        var u = e.findMarks(
                          Pos(r, 0),
                          Pos(o + 1, 0),
                          (function recognizeMarker(e) {
                            return function(t) {
                              return t.id == e
                            }
                          })(+c)
                        )
                        return void (
                          u.length &&
                          (i = u[0].find(0)) &&
                          addText(getBetween(e.doc, i.from, i.to).join(s))
                        )
                      }
                      if ('false' == t.getAttribute('contenteditable')) return
                      var d = /^(pre|div|p|li|table|br)$/i.test(t.nodeName)
                      if (
                        !/^br$/i.test(t.nodeName) &&
                        0 == t.textContent.length
                      )
                        return
                      d && close()
                      for (var p = 0; p < t.childNodes.length; p++)
                        walk(t.childNodes[p])
                      ;/^(pre|p)$/i.test(t.nodeName) && (l = !0), d && (a = !0)
                    } else
                      3 == t.nodeType &&
                        addText(
                          t.nodeValue
                            .replace(/\u200b/g, '')
                            .replace(/\u00a0/g, ' ')
                        )
                  }
                  for (; walk(t), t != n; ) (t = t.nextSibling), (l = !1)
                  return i
                })(r, n, c, t, l)
              ),
              p = getBetween(
                r.doc,
                Pos(t, 0),
                Pos(l, getLine(r.doc, l).text.length)
              );
            d.length > 1 && p.length > 1;

          )
            if (lst(d) == lst(p)) d.pop(), p.pop(), l--
            else {
              if (d[0] != p[0]) break
              d.shift(), p.shift(), t++
            }
          for (
            var h = 0,
              f = 0,
              g = d[0],
              m = p[0],
              v = Math.min(g.length, m.length);
            h < v && g.charCodeAt(h) == m.charCodeAt(h);

          )
            ++h
          for (
            var y = lst(d),
              b = lst(p),
              x = Math.min(
                y.length - (1 == d.length ? h : 0),
                b.length - (1 == p.length ? h : 0)
              );
            f < x &&
            y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);

          )
            ++f
          if (1 == d.length && 1 == p.length && t == a.line)
            for (
              ;
              h &&
              h > a.ch &&
              y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);

            )
              h--, f++
          ;(d[d.length - 1] = y.slice(0, y.length - f).replace(/^\u200b+/, '')),
            (d[0] = d[0].slice(h).replace(/\u200b+$/, ''))
          var C = Pos(t, h),
            w = Pos(l, p.length ? lst(p).length - f : 0)
          return d.length > 1 || d[0] || cmp(C, w)
            ? (replaceRange(r.doc, d, C, w, '+input'), !0)
            : void 0
        }),
        (je.prototype.ensurePolled = function() {
          this.forceCompositionEnd()
        }),
        (je.prototype.reset = function() {
          this.forceCompositionEnd()
        }),
        (je.prototype.forceCompositionEnd = function() {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus())
        }),
        (je.prototype.readFromDOMSoon = function() {
          var e = this
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function() {
              if (((e.readDOMTimeout = null), e.composing)) {
                if (!e.composing.done) return
                e.composing = null
              }
              e.updateFromDOM()
            }, 80))
        }),
        (je.prototype.updateFromDOM = function() {
          var e = this
          ;(!this.cm.isReadOnly() && this.pollContent()) ||
            runInOp(this.cm, function() {
              return regChange(e.cm)
            })
        }),
        (je.prototype.setUneditable = function(e) {
          e.contentEditable = 'false'
        }),
        (je.prototype.onKeyPress = function(e) {
          0 == e.charCode ||
            this.composing ||
            (e.preventDefault(),
            this.cm.isReadOnly() ||
              operation(this.cm, applyTextInput)(
                this.cm,
                String.fromCharCode(
                  null == e.charCode ? e.keyCode : e.charCode
                ),
                0
              ))
        }),
        (je.prototype.readOnlyChanged = function(e) {
          this.div.contentEditable = String('nocursor' != e)
        }),
        (je.prototype.onContextMenu = function() {}),
        (je.prototype.resetPosition = function() {}),
        (je.prototype.needsContentAttribute = !0)
      var _e = function(e) {
        ;(this.cm = e),
          (this.prevInput = ''),
          (this.pollingFast = !1),
          (this.polling = new T()),
          (this.hasSelection = !1),
          (this.composing = null)
      }
      ;(_e.prototype.init = function(e) {
        var t = this,
          n = this,
          r = this.cm
        this.createField(e)
        var o = this.textarea
        function prepareCopyCut(e) {
          if (!signalDOMEvent(r, e)) {
            if (r.somethingSelected())
              setLastCopied({lineWise: !1, text: r.getSelections()})
            else {
              if (!r.options.lineWiseCopyCut) return
              var t = copyableRanges(r)
              setLastCopied({lineWise: !0, text: t.text}),
                'cut' == e.type
                  ? r.setSelections(t.ranges, null, A)
                  : ((n.prevInput = ''), (o.value = t.text.join('\n')), M(o))
            }
            'cut' == e.type && (r.state.cutIncoming = !0)
          }
        }
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
          g && (o.style.width = '0px'),
          V(o, 'input', function() {
            a && s >= 9 && t.hasSelection && (t.hasSelection = null), n.poll()
          }),
          V(o, 'paste', function(e) {
            signalDOMEvent(r, e) ||
              handlePaste(e, r) ||
              ((r.state.pasteIncoming = !0), n.fastPoll())
          }),
          V(o, 'cut', prepareCopyCut),
          V(o, 'copy', prepareCopyCut),
          V(e.scroller, 'paste', function(t) {
            eventInWidget(e, t) ||
              signalDOMEvent(r, t) ||
              ((r.state.pasteIncoming = !0), n.focus())
          }),
          V(e.lineSpace, 'selectstart', function(t) {
            eventInWidget(e, t) || e_preventDefault(t)
          }),
          V(o, 'compositionstart', function() {
            var e = r.getCursor('from')
            n.composing && n.composing.range.clear(),
              (n.composing = {
                start: e,
                range: r.markText(e, r.getCursor('to'), {
                  className: 'CodeMirror-composing'
                })
              })
          }),
          V(o, 'compositionend', function() {
            n.composing &&
              (n.poll(), n.composing.range.clear(), (n.composing = null))
          })
      }),
        (_e.prototype.createField = function(e) {
          ;(this.wrapper = hiddenTextarea()),
            (this.textarea = this.wrapper.firstChild)
        }),
        (_e.prototype.prepareSelection = function() {
          var e = this.cm,
            t = e.display,
            n = e.doc,
            r = prepareSelection(e)
          if (e.options.moveInputWithCursor) {
            var o = cursorCoords(e, n.sel.primary().head, 'div'),
              i = t.wrapper.getBoundingClientRect(),
              a = t.lineDiv.getBoundingClientRect()
            ;(r.teTop = Math.max(
              0,
              Math.min(t.wrapper.clientHeight - 10, o.top + a.top - i.top)
            )),
              (r.teLeft = Math.max(
                0,
                Math.min(t.wrapper.clientWidth - 10, o.left + a.left - i.left)
              ))
          }
          return r
        }),
        (_e.prototype.showSelection = function(e) {
          var t = this.cm.display
          removeChildrenAndAdd(t.cursorDiv, e.cursors),
            removeChildrenAndAdd(t.selectionDiv, e.selection),
            null != e.teTop &&
              ((this.wrapper.style.top = e.teTop + 'px'),
              (this.wrapper.style.left = e.teLeft + 'px'))
        }),
        (_e.prototype.reset = function(e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm
            if (t.somethingSelected()) {
              this.prevInput = ''
              var n = t.getSelection()
              ;(this.textarea.value = n),
                t.state.focused && M(this.textarea),
                a && s >= 9 && (this.hasSelection = n)
            } else
              e ||
                ((this.prevInput = this.textarea.value = ''),
                a && s >= 9 && (this.hasSelection = null))
          }
        }),
        (_e.prototype.getField = function() {
          return this.textarea
        }),
        (_e.prototype.supportsTouch = function() {
          return !1
        }),
        (_e.prototype.focus = function() {
          if (
            'nocursor' != this.cm.options.readOnly &&
            (!v || activeElt() != this.textarea)
          )
            try {
              this.textarea.focus()
            } catch (e) {}
        }),
        (_e.prototype.blur = function() {
          this.textarea.blur()
        }),
        (_e.prototype.resetPosition = function() {
          this.wrapper.style.top = this.wrapper.style.left = 0
        }),
        (_e.prototype.receivedFocus = function() {
          this.slowPoll()
        }),
        (_e.prototype.slowPoll = function() {
          var e = this
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function() {
              e.poll(), e.cm.state.focused && e.slowPoll()
            })
        }),
        (_e.prototype.fastPoll = function() {
          var e = !1,
            t = this
          ;(t.pollingFast = !0),
            t.polling.set(20, function p() {
              t.poll() || e
                ? ((t.pollingFast = !1), t.slowPoll())
                : ((e = !0), t.polling.set(60, p))
            })
        }),
        (_e.prototype.poll = function() {
          var e = this,
            t = this.cm,
            n = this.textarea,
            r = this.prevInput
          if (
            this.contextMenuPending ||
            !t.state.focused ||
            (q(n) && !r && !this.composing) ||
            t.isReadOnly() ||
            t.options.disableInput ||
            t.state.keySeq
          )
            return !1
          var o = n.value
          if (o == r && !t.somethingSelected()) return !1
          if (
            (a && s >= 9 && this.hasSelection === o) ||
            (y && /[\uf700-\uf7ff]/.test(o))
          )
            return t.display.input.reset(), !1
          if (t.doc.sel == t.display.selForContextMenu) {
            var i = o.charCodeAt(0)
            if ((8203 != i || r || (r = '​'), 8666 == i))
              return this.reset(), this.cm.execCommand('undo')
          }
          for (
            var l = 0, c = Math.min(r.length, o.length);
            l < c && r.charCodeAt(l) == o.charCodeAt(l);

          )
            ++l
          return (
            runInOp(t, function() {
              applyTextInput(
                t,
                o.slice(l),
                r.length - l,
                null,
                e.composing ? '*compose' : null
              ),
                o.length > 1e3 || o.indexOf('\n') > -1
                  ? (n.value = e.prevInput = '')
                  : (e.prevInput = o),
                e.composing &&
                  (e.composing.range.clear(),
                  (e.composing.range = t.markText(
                    e.composing.start,
                    t.getCursor('to'),
                    {className: 'CodeMirror-composing'}
                  )))
            }),
            !0
          )
        }),
        (_e.prototype.ensurePolled = function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1)
        }),
        (_e.prototype.onKeyPress = function() {
          a && s >= 9 && (this.hasSelection = null), this.fastPoll()
        }),
        (_e.prototype.onContextMenu = function(e) {
          var t = this,
            n = t.cm,
            r = n.display,
            o = t.textarea,
            i = posFromMouse(n, e),
            c = r.scroller.scrollTop
          if (i && !d) {
            n.options.resetSelectionOnContextMenu &&
              -1 == n.doc.sel.contains(i) &&
              operation(n, setSelection)(n.doc, simpleSelection(i), A)
            var u = o.style.cssText,
              p = t.wrapper.style.cssText
            t.wrapper.style.cssText = 'position: absolute'
            var h,
              f = t.wrapper.getBoundingClientRect()
            if (
              ((o.style.cssText =
                'position: absolute; width: 30px; height: 30px;\n      top: ' +
                (e.clientY - f.top - 5) +
                'px; left: ' +
                (e.clientX - f.left - 5) +
                'px;\n      z-index: 1000; background: ' +
                (a ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
              l && (h = window.scrollY),
              r.input.focus(),
              l && window.scrollTo(null, h),
              r.input.reset(),
              n.somethingSelected() || (o.value = t.prevInput = ' '),
              (t.contextMenuPending = !0),
              (r.selForContextMenu = n.doc.sel),
              clearTimeout(r.detectingSelectAll),
              a && s >= 9 && prepareSelectAllHack(),
              S)
            ) {
              e_stop(e)
              var g = function() {
                off(window, 'mouseup', g), setTimeout(rehide, 20)
              }
              V(window, 'mouseup', g)
            } else setTimeout(rehide, 50)
          }
          function prepareSelectAllHack() {
            if (null != o.selectionStart) {
              var e = n.somethingSelected(),
                i = '​' + (e ? o.value : '')
              ;(o.value = '⇚'),
                (o.value = i),
                (t.prevInput = e ? '' : '​'),
                (o.selectionStart = 1),
                (o.selectionEnd = i.length),
                (r.selForContextMenu = n.doc.sel)
            }
          }
          function rehide() {
            if (
              ((t.contextMenuPending = !1),
              (t.wrapper.style.cssText = p),
              (o.style.cssText = u),
              a &&
                s < 9 &&
                r.scrollbars.setScrollTop((r.scroller.scrollTop = c)),
              null != o.selectionStart)
            ) {
              ;(!a || (a && s < 9)) && prepareSelectAllHack()
              var e = 0,
                i = function() {
                  r.selForContextMenu == n.doc.sel &&
                  0 == o.selectionStart &&
                  o.selectionEnd > 0 &&
                  '​' == t.prevInput
                    ? operation(n, selectAll)(n)
                    : e++ < 10
                      ? (r.detectingSelectAll = setTimeout(i, 500))
                      : ((r.selForContextMenu = null), r.input.reset())
                }
              r.detectingSelectAll = setTimeout(i, 200)
            }
          }
        }),
        (_e.prototype.readOnlyChanged = function(e) {
          e || this.reset(), (this.textarea.disabled = 'nocursor' == e)
        }),
        (_e.prototype.setUneditable = function() {}),
        (_e.prototype.needsContentAttribute = !1),
        (function defineOptions(e) {
          var t = e.optionHandlers
          function option(n, r, o, i) {
            ;(e.defaults[n] = r),
              o &&
                (t[n] = i
                  ? function(e, t, n) {
                      n != Be && o(e, t, n)
                    }
                  : o)
          }
          ;(e.defineOption = option),
            (e.Init = Be),
            option(
              'value',
              '',
              function(e, t) {
                return e.setValue(t)
              },
              !0
            ),
            option(
              'mode',
              null,
              function(e, t) {
                ;(e.doc.modeOption = t), loadMode(e)
              },
              !0
            ),
            option('indentUnit', 2, loadMode, !0),
            option('indentWithTabs', !1),
            option('smartIndent', !0),
            option(
              'tabSize',
              4,
              function(e) {
                resetModeState(e), clearCaches(e), regChange(e)
              },
              !0
            ),
            option('lineSeparator', null, function(e, t) {
              if (((e.doc.lineSep = t), t)) {
                var n = [],
                  r = e.doc.first
                e.doc.iter(function(e) {
                  for (var o = 0; ; ) {
                    var i = e.text.indexOf(t, o)
                    if (-1 == i) break
                    ;(o = i + t.length), n.push(Pos(r, i))
                  }
                  r++
                })
                for (var o = n.length - 1; o >= 0; o--)
                  replaceRange(
                    e.doc,
                    t,
                    n[o],
                    Pos(n[o].line, n[o].ch + t.length)
                  )
              }
            }),
            option(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
              function(e, t, n) {
                ;(e.state.specialChars = new RegExp(
                  t.source + (t.test('\t') ? '' : '|\t'),
                  'g'
                )),
                  n != Be && e.refresh()
              }
            ),
            option(
              'specialCharPlaceholder',
              defaultSpecialCharPlaceholder,
              function(e) {
                return e.refresh()
              },
              !0
            ),
            option('electricChars', !0),
            option(
              'inputStyle',
              v ? 'contenteditable' : 'textarea',
              function() {
                throw new Error(
                  'inputStyle can not (yet) be changed in a running editor'
                )
              },
              !0
            ),
            option(
              'spellcheck',
              !1,
              function(e, t) {
                return (e.getInputField().spellcheck = t)
              },
              !0
            ),
            option('rtlMoveVisually', !x),
            option('wholeLineUpdateBefore', !0),
            option(
              'theme',
              'default',
              function(e) {
                themeChanged(e), guttersChanged(e)
              },
              !0
            ),
            option('keyMap', 'default', function(e, t, n) {
              var r = getKeyMap(t),
                o = n != Be && getKeyMap(n)
              o && o.detach && o.detach(e, r),
                r.attach && r.attach(e, o || null)
            }),
            option('extraKeys', null),
            option('configureMouse', null),
            option('lineWrapping', !1, wrappingChanged, !0),
            option(
              'gutters',
              [],
              function(e) {
                setGuttersForLineNumbers(e.options), guttersChanged(e)
              },
              !0
            ),
            option(
              'fixedGutter',
              !0,
              function(e, t) {
                ;(e.display.gutters.style.left = t
                  ? compensateForHScroll(e.display) + 'px'
                  : '0'),
                  e.refresh()
              },
              !0
            ),
            option(
              'coverGutterNextToScrollbar',
              !1,
              function(e) {
                return updateScrollbars(e)
              },
              !0
            ),
            option(
              'scrollbarStyle',
              'native',
              function(e) {
                initScrollbars(e),
                  updateScrollbars(e),
                  e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                  e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
              },
              !0
            ),
            option(
              'lineNumbers',
              !1,
              function(e) {
                setGuttersForLineNumbers(e.options), guttersChanged(e)
              },
              !0
            ),
            option('firstLineNumber', 1, guttersChanged, !0),
            option(
              'lineNumberFormatter',
              function(e) {
                return e
              },
              guttersChanged,
              !0
            ),
            option('showCursorWhenSelecting', !1, updateSelection, !0),
            option('resetSelectionOnContextMenu', !0),
            option('lineWiseCopyCut', !0),
            option('pasteLinesPerSelection', !0),
            option('selectionsMayTouch', !1),
            option('readOnly', !1, function(e, t) {
              'nocursor' == t && (onBlur(e), e.display.input.blur()),
                e.display.input.readOnlyChanged(t)
            }),
            option(
              'disableInput',
              !1,
              function(e, t) {
                t || e.display.input.reset()
              },
              !0
            ),
            option('dragDrop', !0, dragDropChanged),
            option('allowDropFileTypes', null),
            option('cursorBlinkRate', 530),
            option('cursorScrollMargin', 0),
            option('cursorHeight', 1, updateSelection, !0),
            option('singleCursorHeightPerLine', !0, updateSelection, !0),
            option('workTime', 100),
            option('workDelay', 100),
            option('flattenSpans', !0, resetModeState, !0),
            option('addModeClass', !1, resetModeState, !0),
            option('pollInterval', 100),
            option('undoDepth', 200, function(e, t) {
              return (e.doc.history.undoDepth = t)
            }),
            option('historyEventDelay', 1250),
            option(
              'viewportMargin',
              10,
              function(e) {
                return e.refresh()
              },
              !0
            ),
            option('maxHighlightLength', 1e4, resetModeState, !0),
            option('moveInputWithCursor', !0, function(e, t) {
              t || e.display.input.resetPosition()
            }),
            option('tabindex', null, function(e, t) {
              return (e.display.input.getField().tabIndex = t || '')
            }),
            option('autofocus', null),
            option(
              'direction',
              'ltr',
              function(e, t) {
                return e.doc.setDirection(t)
              },
              !0
            ),
            option('phrases', null)
        })(CodeMirror),
        (function addEditorMethods(e) {
          var t = e.optionHandlers,
            n = (e.helpers = {})
          ;(e.prototype = {
            constructor: e,
            focus: function() {
              window.focus(), this.display.input.focus()
            },
            setOption: function(e, n) {
              var r = this.options,
                o = r[e]
              ;(r[e] == n && 'mode' != e) ||
                ((r[e] = n),
                t.hasOwnProperty(e) && operation(this, t[e])(this, n, o),
                signal(this, 'optionChange', this, e))
            },
            getOption: function(e) {
              return this.options[e]
            },
            getDoc: function() {
              return this.doc
            },
            addKeyMap: function(e, t) {
              this.state.keyMaps[t ? 'push' : 'unshift'](getKeyMap(e))
            },
            removeKeyMap: function(e) {
              for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
            },
            addOverlay: methodOp(function(t, n) {
              var r = t.token ? t : e.getMode(this.options, t)
              if (r.startState) throw new Error('Overlays may not be stateful.')
              !(function insertSorted(e, t, n) {
                for (var r = 0, o = n(t); r < e.length && n(e[r]) <= o; ) r++
                e.splice(r, 0, t)
              })(
                this.state.overlays,
                {
                  mode: r,
                  modeSpec: t,
                  opaque: n && n.opaque,
                  priority: (n && n.priority) || 0
                },
                function(e) {
                  return e.priority
                }
              ),
                this.state.modeGen++,
                regChange(this)
            }),
            removeOverlay: methodOp(function(e) {
              for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec
                if (r == e || ('string' == typeof e && r.name == e))
                  return (
                    t.splice(n, 1), this.state.modeGen++, void regChange(this)
                  )
              }
            }),
            indentLine: methodOp(function(e, t, n) {
              'string' != typeof t &&
                'number' != typeof t &&
                (t =
                  null == t
                    ? this.options.smartIndent
                      ? 'smart'
                      : 'prev'
                    : t
                      ? 'add'
                      : 'subtract'),
                isLine(this.doc, e) && indentLine(this, e, t, n)
            }),
            indentSelection: methodOp(function(e) {
              for (
                var t = this.doc.sel.ranges, n = -1, r = 0;
                r < t.length;
                r++
              ) {
                var o = t[r]
                if (o.empty())
                  o.head.line > n &&
                    (indentLine(this, o.head.line, e, !0),
                    (n = o.head.line),
                    r == this.doc.sel.primIndex && ensureCursorVisible(this))
                else {
                  var i = o.from(),
                    a = o.to(),
                    s = Math.max(n, i.line)
                  n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1
                  for (var l = s; l < n; ++l) indentLine(this, l, e)
                  var c = this.doc.sel.ranges
                  0 == i.ch &&
                    t.length == c.length &&
                    c[r].from().ch > 0 &&
                    replaceOneSelection(this.doc, r, new ye(i, c[r].to()), A)
                }
              }
            }),
            getTokenAt: function(e, t) {
              return takeToken(this, e, t)
            },
            getLineTokens: function(e, t) {
              return takeToken(this, Pos(e), t, !0)
            },
            getTokenTypeAt: function(e) {
              e = clipPos(this.doc, e)
              var t,
                n = getLineStyles(this, getLine(this.doc, e.line)),
                r = 0,
                o = (n.length - 1) / 2,
                i = e.ch
              if (0 == i) t = n[2]
              else
                for (;;) {
                  var a = (r + o) >> 1
                  if ((a ? n[2 * a - 1] : 0) >= i) o = a
                  else {
                    if (!(n[2 * a + 1] < i)) {
                      t = n[2 * a + 2]
                      break
                    }
                    r = a + 1
                  }
                }
              var s = t ? t.indexOf('overlay ') : -1
              return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
            },
            getModeAt: function(t) {
              var n = this.doc.mode
              return n.innerMode
                ? e.innerMode(n, this.getTokenAt(t).state).mode
                : n
            },
            getHelper: function(e, t) {
              return this.getHelpers(e, t)[0]
            },
            getHelpers: function(e, t) {
              var r = []
              if (!n.hasOwnProperty(t)) return r
              var o = n[t],
                i = this.getModeAt(e)
              if ('string' == typeof i[t]) o[i[t]] && r.push(o[i[t]])
              else if (i[t])
                for (var a = 0; a < i[t].length; a++) {
                  var s = o[i[t][a]]
                  s && r.push(s)
                }
              else
                i.helperType && o[i.helperType]
                  ? r.push(o[i.helperType])
                  : o[i.name] && r.push(o[i.name])
              for (var l = 0; l < o._global.length; l++) {
                var c = o._global[l]
                c.pred(i, this) && -1 == indexOf(r, c.val) && r.push(c.val)
              }
              return r
            },
            getStateAfter: function(e, t) {
              var n = this.doc
              return getContextBefore(
                this,
                (e = clipLine(n, null == e ? n.first + n.size - 1 : e)) + 1,
                t
              ).state
            },
            cursorCoords: function(e, t) {
              var n = this.doc.sel.primary()
              return cursorCoords(
                this,
                null == e
                  ? n.head
                  : 'object' == typeof e
                    ? clipPos(this.doc, e)
                    : e
                      ? n.from()
                      : n.to(),
                t || 'page'
              )
            },
            charCoords: function(e, t) {
              return charCoords(this, clipPos(this.doc, e), t || 'page')
            },
            coordsChar: function(e, t) {
              return coordsChar(
                this,
                (e = fromCoordSystem(this, e, t || 'page')).left,
                e.top
              )
            },
            lineAtHeight: function(e, t) {
              return (
                (e = fromCoordSystem(this, {top: e, left: 0}, t || 'page').top),
                lineAtHeight(this.doc, e + this.display.viewOffset)
              )
            },
            heightAtLine: function(e, t, n) {
              var r,
                o = !1
              if ('number' == typeof e) {
                var i = this.doc.first + this.doc.size - 1
                e < this.doc.first
                  ? (e = this.doc.first)
                  : e > i && ((e = i), (o = !0)),
                  (r = getLine(this.doc, e))
              } else r = e
              return (
                intoCoordSystem(this, r, {top: 0, left: 0}, t || 'page', n || o)
                  .top + (o ? this.doc.height - heightAtLine(r) : 0)
              )
            },
            defaultTextHeight: function() {
              return textHeight(this.display)
            },
            defaultCharWidth: function() {
              return charWidth(this.display)
            },
            getViewport: function() {
              return {from: this.display.viewFrom, to: this.display.viewTo}
            },
            addWidget: function(e, t, n, r, o) {
              var i = this.display,
                a = (e = cursorCoords(this, clipPos(this.doc, e))).bottom,
                s = e.left
              if (
                ((t.style.position = 'absolute'),
                t.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(t),
                i.sizer.appendChild(t),
                'over' == r)
              )
                a = e.top
              else if ('above' == r || 'near' == r) {
                var l = Math.max(i.wrapper.clientHeight, this.doc.height),
                  c = Math.max(i.sizer.clientWidth, i.lineSpace.clientWidth)
                ;('above' == r || e.bottom + t.offsetHeight > l) &&
                e.top > t.offsetHeight
                  ? (a = e.top - t.offsetHeight)
                  : e.bottom + t.offsetHeight <= l && (a = e.bottom),
                  s + t.offsetWidth > c && (s = c - t.offsetWidth)
              }
              ;(t.style.top = a + 'px'),
                (t.style.left = t.style.right = ''),
                'right' == o
                  ? ((s = i.sizer.clientWidth - t.offsetWidth),
                    (t.style.right = '0px'))
                  : ('left' == o
                      ? (s = 0)
                      : 'middle' == o &&
                        (s = (i.sizer.clientWidth - t.offsetWidth) / 2),
                    (t.style.left = s + 'px')),
                n &&
                  (function scrollIntoView(e, t) {
                    var n = calculateScrollPos(e, t)
                    null != n.scrollTop && updateScrollTop(e, n.scrollTop),
                      null != n.scrollLeft && setScrollLeft(e, n.scrollLeft)
                  })(this, {
                    left: s,
                    top: a,
                    right: s + t.offsetWidth,
                    bottom: a + t.offsetHeight
                  })
            },
            triggerOnKeyDown: methodOp(onKeyDown),
            triggerOnKeyPress: methodOp(onKeyPress),
            triggerOnKeyUp: onKeyUp,
            triggerOnMouseDown: methodOp(onMouseDown),
            execCommand: function(e) {
              if (De.hasOwnProperty(e)) return De[e].call(null, this)
            },
            triggerElectric: methodOp(function(e) {
              triggerElectric(this, e)
            }),
            findPosH: function(e, t, n, r) {
              var o = 1
              t < 0 && ((o = -1), (t = -t))
              for (
                var i = clipPos(this.doc, e), a = 0;
                a < t && !(i = findPosH(this.doc, i, o, n, r)).hitSide;
                ++a
              );
              return i
            },
            moveH: methodOp(function(e, t) {
              var n = this
              this.extendSelectionsBy(function(r) {
                return n.display.shift || n.doc.extend || r.empty()
                  ? findPosH(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                  : e < 0
                    ? r.from()
                    : r.to()
              }, D)
            }),
            deleteH: methodOp(function(e, t) {
              var n = this.doc.sel,
                r = this.doc
              n.somethingSelected()
                ? r.replaceSelection('', null, '+delete')
                : deleteNearSelection(this, function(n) {
                    var o = findPosH(r, n.head, e, t, !1)
                    return e < 0 ? {from: o, to: n.head} : {from: n.head, to: o}
                  })
            }),
            findPosV: function(e, t, n, r) {
              var o = 1,
                i = r
              t < 0 && ((o = -1), (t = -t))
              for (var a = clipPos(this.doc, e), s = 0; s < t; ++s) {
                var l = cursorCoords(this, a, 'div')
                if (
                  (null == i ? (i = l.left) : (l.left = i),
                  (a = findPosV(this, l, o, n)).hitSide)
                )
                  break
              }
              return a
            },
            moveV: methodOp(function(e, t) {
              var n = this,
                r = this.doc,
                o = [],
                i =
                  !this.display.shift && !r.extend && r.sel.somethingSelected()
              if (
                (r.extendSelectionsBy(function(a) {
                  if (i) return e < 0 ? a.from() : a.to()
                  var s = cursorCoords(n, a.head, 'div')
                  null != a.goalColumn && (s.left = a.goalColumn),
                    o.push(s.left)
                  var l = findPosV(n, s, e, t)
                  return (
                    'page' == t &&
                      a == r.sel.primary() &&
                      addToScrollTop(n, charCoords(n, l, 'div').top - s.top),
                    l
                  )
                }, D),
                o.length)
              )
                for (var a = 0; a < r.sel.ranges.length; a++)
                  r.sel.ranges[a].goalColumn = o[a]
            }),
            findWordAt: function(e) {
              var t = getLine(this.doc, e.line).text,
                n = e.ch,
                r = e.ch
              if (t) {
                var o = this.getHelper(e, 'wordChars')
                ;('before' != e.sticky && r != t.length) || !n ? ++r : --n
                for (
                  var i = t.charAt(n),
                    a = isWordChar(i, o)
                      ? function(e) {
                          return isWordChar(e, o)
                        }
                      : /\s/.test(i)
                        ? function(e) {
                            return /\s/.test(e)
                          }
                        : function(e) {
                            return !/\s/.test(e) && !isWordChar(e)
                          };
                  n > 0 && a(t.charAt(n - 1));

                )
                  --n
                for (; r < t.length && a(t.charAt(r)); ) ++r
              }
              return new ye(Pos(e.line, n), Pos(e.line, r))
            },
            toggleOverwrite: function(e) {
              ;(null != e && e == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? addClass(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : L(this.display.cursorDiv, 'CodeMirror-overwrite'),
                signal(this, 'overwriteToggle', this, this.state.overwrite))
            },
            hasFocus: function() {
              return this.display.input.getField() == activeElt()
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit)
            },
            scrollTo: methodOp(function(e, t) {
              scrollToCoords(this, e, t)
            }),
            getScrollInfo: function() {
              var e = this.display.scroller
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height:
                  e.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: e.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this),
                clientWidth: displayWidth(this)
              }
            },
            scrollIntoView: methodOp(function(e, t) {
              null == e
                ? ((e = {from: this.doc.sel.primary().head, to: null}),
                  null == t && (t = this.options.cursorScrollMargin))
                : 'number' == typeof e
                  ? (e = {from: Pos(e, 0), to: null})
                  : null == e.from && (e = {from: e, to: null}),
                e.to || (e.to = e.from),
                (e.margin = t || 0),
                null != e.from.line
                  ? (function scrollToRange(e, t) {
                      resolveScrollToPos(e), (e.curOp.scrollToPos = t)
                    })(this, e)
                  : scrollToCoordsRange(this, e.from, e.to, e.margin)
            }),
            setSize: methodOp(function(e, t) {
              var n = this,
                r = function(e) {
                  return 'number' == typeof e || /^\d+$/.test(String(e))
                    ? e + 'px'
                    : e
                }
              null != e && (this.display.wrapper.style.width = r(e)),
                null != t && (this.display.wrapper.style.height = r(t)),
                this.options.lineWrapping && clearLineMeasurementCache(this)
              var o = this.display.viewFrom
              this.doc.iter(o, this.display.viewTo, function(e) {
                if (e.widgets)
                  for (var t = 0; t < e.widgets.length; t++)
                    if (e.widgets[t].noHScroll) {
                      regLineChange(n, o, 'widget')
                      break
                    }
                ++o
              }),
                (this.curOp.forceUpdate = !0),
                signal(this, 'refresh', this)
            }),
            operation: function(e) {
              return runInOp(this, e)
            },
            startOperation: function() {
              return startOperation(this)
            },
            endOperation: function() {
              return endOperation(this)
            },
            refresh: methodOp(function() {
              var e = this.display.cachedTextHeight
              regChange(this),
                (this.curOp.forceUpdate = !0),
                clearCaches(this),
                scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop),
                updateGutterSpace(this),
                (null == e || Math.abs(e - textHeight(this.display)) > 0.5) &&
                  estimateLineHeights(this),
                signal(this, 'refresh', this)
            }),
            swapDoc: methodOp(function(e) {
              var t = this.doc
              return (
                (t.cm = null),
                attachDoc(this, e),
                clearCaches(this),
                this.display.input.reset(),
                scrollToCoords(this, e.scrollLeft, e.scrollTop),
                (this.curOp.forceScroll = !0),
                signalLater(this, 'swapDoc', this, t),
                t
              )
            }),
            phrase: function(e) {
              var t = this.options.phrases
              return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
            },
            getInputField: function() {
              return this.display.input.getField()
            },
            getWrapperElement: function() {
              return this.display.wrapper
            },
            getScrollerElement: function() {
              return this.display.scroller
            },
            getGutterElement: function() {
              return this.display.gutters
            }
          }),
            eventMixin(e),
            (e.registerHelper = function(t, r, o) {
              n.hasOwnProperty(t) || (n[t] = e[t] = {_global: []}),
                (n[t][r] = o)
            }),
            (e.registerGlobalHelper = function(t, r, o, i) {
              e.registerHelper(t, r, i), n[t]._global.push({pred: o, val: i})
            })
        })(CodeMirror)
      var Ge = 'iter insert remove copy getEditor constructor'.split(' ')
      for (var Ke in ke.prototype)
        ke.prototype.hasOwnProperty(Ke) &&
          indexOf(Ge, Ke) < 0 &&
          (CodeMirror.prototype[Ke] = (function(e) {
            return function() {
              return e.apply(this.doc, arguments)
            }
          })(ke.prototype[Ke]))
      return (
        eventMixin(ke),
        (CodeMirror.inputStyles = {textarea: _e, contenteditable: je}),
        (CodeMirror.defineMode = function(e) {
          CodeMirror.defaults.mode ||
            'null' == e ||
            (CodeMirror.defaults.mode = e),
            function defineMode(e, t) {
              arguments.length > 2 &&
                (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                (Y[e] = t)
            }.apply(this, arguments)
        }),
        (CodeMirror.defineMIME = function defineMIME(e, t) {
          Z[e] = t
        }),
        CodeMirror.defineMode('null', function() {
          return {
            token: function(e) {
              return e.skipToEnd()
            }
          }
        }),
        CodeMirror.defineMIME('text/plain', 'null'),
        (CodeMirror.defineExtension = function(e, t) {
          CodeMirror.prototype[e] = t
        }),
        (CodeMirror.defineDocExtension = function(e, t) {
          ke.prototype[e] = t
        }),
        (CodeMirror.fromTextArea = function fromTextArea(e, t) {
          if (
            (((t = t ? copyObj(t) : {}).value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus)
          ) {
            var n = activeElt()
            t.autofocus =
              n == e ||
              (null != e.getAttribute('autofocus') && n == document.body)
          }
          function save() {
            e.value = a.getValue()
          }
          var r
          if (
            e.form &&
            (V(e.form, 'submit', save), !t.leaveSubmitMethodAlone)
          ) {
            var o = e.form
            r = o.submit
            try {
              var i = (o.submit = function() {
                save(), (o.submit = r), o.submit(), (o.submit = i)
              })
            } catch (e) {}
          }
          ;(t.finishInit = function(t) {
            ;(t.save = save),
              (t.getTextArea = function() {
                return e
              }),
              (t.toTextArea = function() {
                ;(t.toTextArea = isNaN),
                  save(),
                  e.parentNode.removeChild(t.getWrapperElement()),
                  (e.style.display = ''),
                  e.form &&
                    (off(e.form, 'submit', save),
                    'function' == typeof e.form.submit && (e.form.submit = r))
              })
          }),
            (e.style.display = 'none')
          var a = CodeMirror(function(t) {
            return e.parentNode.insertBefore(t, e.nextSibling)
          }, t)
          return a
        }),
        (function addLegacyProps(e) {
          ;(e.off = off),
            (e.on = V),
            (e.wheelEventPixels = wheelEventPixels),
            (e.Doc = ke),
            (e.splitLines = K),
            (e.countColumn = countColumn),
            (e.findColumn = findColumn),
            (e.isWordChar = isWordCharBasic),
            (e.Pass = P),
            (e.signal = signal),
            (e.Line = re),
            (e.changeEnd = changeEnd),
            (e.scrollbarModel = pe),
            (e.Pos = Pos),
            (e.cmpPos = cmp),
            (e.modes = Y),
            (e.mimeModes = Z),
            (e.resolveMode = resolveMode),
            (e.getMode = getMode),
            (e.modeExtensions = Q),
            (e.extendMode = extendMode),
            (e.copyState = copyState),
            (e.startState = startState),
            (e.innerMode = innerMode),
            (e.commands = De),
            (e.keyMap = Ne),
            (e.keyName = keyName),
            (e.isModifierKey = isModifierKey),
            (e.lookupKey = lookupKey),
            (e.normalizeKeyMap = normalizeKeyMap),
            (e.StringStream = J),
            (e.SharedTextMarker = we),
            (e.TextMarker = Ce),
            (e.LineWidget = be),
            (e.e_preventDefault = e_preventDefault),
            (e.e_stopPropagation = e_stopPropagation),
            (e.e_stop = e_stop),
            (e.addClass = addClass),
            (e.contains = contains),
            (e.rmClass = L),
            (e.keyNames = Te)
        })(CodeMirror),
        (CodeMirror.version = '5.42.0'),
        CodeMirror
      )
    }),
      (e.exports = r())
  },
  835: function(e, t, n) {
    'use strict'
    ;(function(e) {
      var r,
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              },
        a = ((r =
          Object.setPrototypeOf ||
          ({__proto__: []} instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        function(e, t) {
          function __() {
            this.constructor = e
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((__.prototype = t.prototype), new __()))
        })
      Object.defineProperty(t, '__esModule', {value: !0})
      var s,
        l = n(1),
        c =
          'undefined' == typeof navigator || !0 === e.PREVENT_CODEMIRROR_RENDER
      c || (s = n(834))
      var u = (function() {
          function Helper() {}
          return (
            (Helper.equals = function(e, t) {
              var n = this,
                r = Object.keys,
                o = void 0 === e ? 'undefined' : i(e),
                a = void 0 === t ? 'undefined' : i(t)
              return e && t && 'object' === o && o === a
                ? r(e).length === r(t).length &&
                    r(e).every(function(r) {
                      return n.equals(e[r], t[r])
                    })
                : e === t
            }),
            Helper
          )
        })(),
        d = (function() {
          function Shared(e, t) {
            ;(this.editor = e), (this.props = t)
          }
          return (
            (Shared.prototype.delegateCursor = function(e, t, n) {
              var r = this.editor.getDoc()
              n && this.editor.focus(),
                t ? r.setCursor(e) : r.setCursor(e, null, {scroll: !1})
            }),
            (Shared.prototype.delegateScroll = function(e) {
              this.editor.scrollTo(e.x, e.y)
            }),
            (Shared.prototype.delegateSelection = function(e, t) {
              this.editor.setSelections(e), t && this.editor.focus()
            }),
            (Shared.prototype.apply = function(e) {
              e &&
                e.selection &&
                e.selection.ranges &&
                this.delegateSelection(
                  e.selection.ranges,
                  e.selection.focus || !1
                ),
                e &&
                  e.cursor &&
                  this.delegateCursor(
                    e.cursor,
                    e.autoScroll || !1,
                    e.autoFocus || !1
                  ),
                e && e.scroll && this.delegateScroll(e.scroll)
            }),
            (Shared.prototype.applyNext = function(e, t, n) {
              e &&
                e.selection &&
                e.selection.ranges &&
                t &&
                t.selection &&
                t.selection.ranges &&
                !u.equals(e.selection.ranges, t.selection.ranges) &&
                this.delegateSelection(
                  t.selection.ranges,
                  t.selection.focus || !1
                ),
                e &&
                  e.cursor &&
                  t &&
                  t.cursor &&
                  !u.equals(e.cursor, t.cursor) &&
                  this.delegateCursor(
                    n.cursor || t.cursor,
                    t.autoScroll || !1,
                    t.autoCursor || !1
                  ),
                e &&
                  e.scroll &&
                  t &&
                  t.scroll &&
                  !u.equals(e.scroll, t.scroll) &&
                  this.delegateScroll(t.scroll)
            }),
            (Shared.prototype.applyUserDefined = function(e, t) {
              t &&
                t.cursor &&
                this.delegateCursor(
                  t.cursor,
                  e.autoScroll || !1,
                  e.autoFocus || !1
                )
            }),
            (Shared.prototype.wire = function(e) {
              var t = this
              Object.keys(e || {})
                .filter(function(e) {
                  return /^on/.test(e)
                })
                .forEach(function(e) {
                  switch (e) {
                    case 'onBlur':
                      t.editor.on('blur', function(e, n) {
                        t.props.onBlur(t.editor, n)
                      })
                      break
                    case 'onContextMenu':
                      t.editor.on('contextmenu', function(e, n) {
                        t.props.onContextMenu(t.editor, n)
                      })
                      break
                    case 'onCopy':
                      t.editor.on('copy', function(e, n) {
                        t.props.onCopy(t.editor, n)
                      })
                      break
                    case 'onCursor':
                      t.editor.on('cursorActivity', function(e) {
                        t.props.onCursor(t.editor, t.editor.getCursor())
                      })
                      break
                    case 'onCursorActivity':
                      t.editor.on('cursorActivity', function(e) {
                        t.props.onCursorActivity(t.editor)
                      })
                      break
                    case 'onCut':
                      t.editor.on('cut', function(e) {
                        t.props.onCut(t.editor, event)
                      })
                      break
                    case 'onDblClick':
                      t.editor.on('dblclick', function(e) {
                        t.props.onDblClick(t.editor, event)
                      })
                      break
                    case 'onDragEnter':
                      t.editor.on('dragenter', function(e, n) {
                        t.props.onDragEnter(t.editor, n)
                      })
                      break
                    case 'onDragLeave':
                      t.editor.on('dragleave', function(e) {
                        t.props.onDragLeave(t.editor, event)
                      })
                      break
                    case 'onDragOver':
                      t.editor.on('dragover', function(e, n) {
                        t.props.onDragOver(t.editor, n)
                      })
                      break
                    case 'onDragStart':
                      t.editor.on('dragstart', function(e) {
                        t.props.onDragStart(t.editor, event)
                      })
                      break
                    case 'onDrop':
                      t.editor.on('drop', function(e, n) {
                        t.props.onDrop(t.editor, n)
                      })
                      break
                    case 'onFocus':
                      t.editor.on('focus', function(e, n) {
                        t.props.onFocus(t.editor, n)
                      })
                      break
                    case 'onGutterClick':
                      t.editor.on('gutterClick', function(e, n, r, o) {
                        t.props.onGutterClick(t.editor, n, r, o)
                      })
                      break
                    case 'onKeyDown':
                      t.editor.on('keydown', function(e, n) {
                        t.props.onKeyDown(t.editor, n)
                      })
                      break
                    case 'onKeyPress':
                      t.editor.on('keypress', function(e, n) {
                        t.props.onKeyPress(t.editor, n)
                      })
                      break
                    case 'onKeyUp':
                      t.editor.on('keyup', function(e, n) {
                        t.props.onKeyUp(t.editor, n)
                      })
                      break
                    case 'onMouseDown':
                      t.editor.on('mousedown', function(e) {
                        t.props.onMouseDown(t.editor, event)
                      })
                      break
                    case 'onPaste':
                      t.editor.on('paste', function(e) {
                        t.props.onPaste(t.editor, event)
                      })
                      break
                    case 'onScroll':
                      t.editor.on('scroll', function(e) {
                        t.props.onScroll(t.editor, t.editor.getScrollInfo())
                      })
                      break
                    case 'onSelection':
                      t.editor.on('beforeSelectionChange', function(e, n) {
                        t.props.onSelection(t.editor, n)
                      })
                      break
                    case 'onTouchStart':
                      t.editor.on('touchstart', function(e) {
                        t.props.onTouchStart(t.editor, event)
                      })
                      break
                    case 'onUpdate':
                      t.editor.on('update', function(e) {
                        t.props.onUpdate(t.editor)
                      })
                      break
                    case 'onViewportChange':
                      t.editor.on('viewportChange', function(e, n, r) {
                        t.props.onViewportChange(t.editor, n, r)
                      })
                  }
                })
            }),
            Shared
          )
        })(),
        p = (function(e) {
          function Controlled(t) {
            var n = e.call(this, t) || this
            return c
              ? n
              : ((n.applied = !1),
                (n.appliedNext = !1),
                (n.appliedUserDefined = !1),
                (n.deferred = null),
                (n.emulating = !1),
                (n.hydrated = !1),
                (n.initCb = function() {
                  n.props.editorDidConfigure &&
                    n.props.editorDidConfigure(n.editor)
                }),
                (n.mounted = !1),
                n)
          }
          return (
            a(Controlled, e),
            (Controlled.prototype.hydrate = function(e) {
              var t = this,
                n = o({}, s.defaults, this.editor.options, e.options || {})
              Object.keys(n).some(function(e) {
                return t.editor.getOption(e) !== n[e]
              }) &&
                Object.keys(n).forEach(function(r) {
                  e.options.hasOwnProperty(r) &&
                    t.editor.getOption(r) !== n[r] &&
                    (t.editor.setOption(r, n[r]), t.mirror.setOption(r, n[r]))
                }),
                this.hydrated ||
                  (this.mounted && this.deferred
                    ? this.resolveChange()
                    : this.initChange(e.value || '')),
                (this.hydrated = !0)
            }),
            (Controlled.prototype.initChange = function(e) {
              this.emulating = !0
              var t = this.editor.lastLine(),
                n = this.editor.getLine(this.editor.lastLine()).length
              this.editor.replaceRange(
                e || '',
                {line: 0, ch: 0},
                {line: t, ch: n}
              ),
                this.mirror.setValue(e),
                this.editor.clearHistory(),
                this.mirror.clearHistory(),
                (this.emulating = !1)
            }),
            (Controlled.prototype.resolveChange = function() {
              ;(this.emulating = !0),
                'undo' === this.deferred.origin
                  ? this.editor.undo()
                  : 'redo' === this.deferred.origin
                    ? this.editor.redo()
                    : this.editor.replaceRange(
                        this.deferred.text,
                        this.deferred.from,
                        this.deferred.to,
                        this.deferred.origin
                      ),
                (this.emulating = !1),
                (this.deferred = null)
            }),
            (Controlled.prototype.mirrorChange = function(e) {
              return (
                'undo' === e.origin
                  ? (this.editor.setHistory(this.mirror.getHistory()),
                    this.mirror.undo())
                  : 'redo' === e.origin
                    ? (this.editor.setHistory(this.mirror.getHistory()),
                      this.mirror.redo())
                    : this.mirror.replaceRange(e.text, e.from, e.to, e.origin),
                this.mirror.getValue()
              )
            }),
            (Controlled.prototype.componentWillMount = function() {
              c || (this.props.editorWillMount && this.props.editorWillMount())
            }),
            (Controlled.prototype.componentDidMount = function() {
              var e = this
              c ||
                (this.props.defineMode &&
                  this.props.defineMode.name &&
                  this.props.defineMode.fn &&
                  s.defineMode(
                    this.props.defineMode.name,
                    this.props.defineMode.fn
                  ),
                (this.editor = s(this.ref)),
                (this.shared = new d(this.editor, this.props)),
                (this.mirror = s(function() {})),
                this.editor.on('electricInput', function() {
                  e.mirror.setHistory(e.editor.getHistory())
                }),
                this.editor.on('cursorActivity', function() {
                  e.mirror.setCursor(e.editor.getCursor())
                }),
                this.editor.on('beforeChange', function(t, n) {
                  if (!e.emulating) {
                    n.cancel(), (e.deferred = n)
                    var r = e.mirrorChange(e.deferred)
                    e.props.onBeforeChange &&
                      e.props.onBeforeChange(e.editor, e.deferred, r)
                  }
                }),
                this.editor.on('change', function(t, n) {
                  e.mounted &&
                    e.props.onChange &&
                    e.props.onChange(e.editor, n, e.editor.getValue())
                }),
                this.hydrate(this.props),
                this.shared.apply(this.props),
                (this.applied = !0),
                (this.mounted = !0),
                this.shared.wire(this.props),
                this.props.editorDidMount &&
                  this.props.editorDidMount(
                    this.editor,
                    this.editor.getValue(),
                    this.initCb
                  ))
            }),
            (Controlled.prototype.componentWillReceiveProps = function(e) {
              if (!c) {
                var t = {cursor: null}
                e.value !== this.props.value && (this.hydrated = !1),
                  this.props.autoCursor ||
                    void 0 === this.props.autoCursor ||
                    (t.cursor = this.editor.getCursor()),
                  this.hydrate(e),
                  this.appliedNext ||
                    (this.shared.applyNext(this.props, e, t),
                    (this.appliedNext = !0)),
                  this.shared.applyUserDefined(this.props, t),
                  (this.appliedUserDefined = !0)
              }
            }),
            (Controlled.prototype.componentWillUnmount = function() {
              c ||
                (this.props.editorWillUnmount &&
                  this.props.editorWillUnmount(s))
            }),
            (Controlled.prototype.shouldComponentUpdate = function(e, t) {
              return !c
            }),
            (Controlled.prototype.render = function() {
              var e = this
              if (c) return null
              var t = this.props.className
                ? 'react-codemirror2 ' + this.props.className
                : 'react-codemirror2'
              return l.createElement('div', {
                className: t,
                ref: function ref(t) {
                  return (e.ref = t)
                }
              })
            }),
            Controlled
          )
        })(l.Component)
      t.Controlled = p
      var h = (function(e) {
        function UnControlled(t) {
          var n = e.call(this, t) || this
          return c
            ? n
            : ((n.applied = !1),
              (n.appliedUserDefined = !1),
              (n.continueChange = !1),
              (n.detached = !1),
              (n.hydrated = !1),
              (n.initCb = function() {
                n.props.editorDidConfigure &&
                  n.props.editorDidConfigure(n.editor)
              }),
              (n.mounted = !1),
              (n.onBeforeChangeCb = function() {
                n.continueChange = !0
              }),
              n)
        }
        return (
          a(UnControlled, e),
          (UnControlled.prototype.hydrate = function(e) {
            var t = this,
              n = o({}, s.defaults, this.editor.options, e.options || {})
            if (
              (Object.keys(n).some(function(e) {
                return t.editor.getOption(e) !== n[e]
              }) &&
                Object.keys(n).forEach(function(r) {
                  e.options.hasOwnProperty(r) &&
                    t.editor.getOption(r) !== n[r] &&
                    t.editor.setOption(r, n[r])
                }),
              !this.hydrated)
            ) {
              var r = this.editor.lastLine(),
                i = this.editor.getLine(this.editor.lastLine()).length
              this.editor.replaceRange(
                e.value || '',
                {line: 0, ch: 0},
                {line: r, ch: i}
              )
            }
            this.hydrated = !0
          }),
          (UnControlled.prototype.componentWillMount = function() {
            c || (this.props.editorWillMount && this.props.editorWillMount())
          }),
          (UnControlled.prototype.componentDidMount = function() {
            var e = this
            c ||
              ((this.detached = !0 === this.props.detach),
              this.props.defineMode &&
                this.props.defineMode.name &&
                this.props.defineMode.fn &&
                s.defineMode(
                  this.props.defineMode.name,
                  this.props.defineMode.fn
                ),
              (this.editor = s(this.ref)),
              (this.shared = new d(this.editor, this.props)),
              this.editor.on('beforeChange', function(t, n) {
                e.props.onBeforeChange &&
                  e.props.onBeforeChange(
                    e.editor,
                    n,
                    e.editor.getValue(),
                    e.onBeforeChangeCb
                  )
              }),
              this.editor.on('change', function(t, n) {
                e.mounted &&
                  e.props.onChange &&
                  (e.props.onBeforeChange
                    ? e.continueChange &&
                      e.props.onChange(e.editor, n, e.editor.getValue())
                    : e.props.onChange(e.editor, n, e.editor.getValue()))
              }),
              this.hydrate(this.props),
              this.shared.apply(this.props),
              (this.applied = !0),
              (this.mounted = !0),
              this.shared.wire(this.props),
              this.editor.clearHistory(),
              this.props.editorDidMount &&
                this.props.editorDidMount(
                  this.editor,
                  this.editor.getValue(),
                  this.initCb
                ))
          }),
          (UnControlled.prototype.componentWillReceiveProps = function(e) {
            if (
              (this.detached &&
                !1 === e.detach &&
                ((this.detached = !1),
                this.props.editorDidAttach &&
                  this.props.editorDidAttach(this.editor)),
              this.detached ||
                !0 !== e.detach ||
                ((this.detached = !0),
                this.props.editorDidDetach &&
                  this.props.editorDidDetach(this.editor)),
              !c && !this.detached)
            ) {
              var t = {cursor: null}
              e.value !== this.props.value &&
                ((this.hydrated = !1),
                (this.applied = !1),
                (this.appliedUserDefined = !1)),
                this.props.autoCursor ||
                  void 0 === this.props.autoCursor ||
                  (t.cursor = this.editor.getCursor()),
                this.hydrate(e),
                this.applied ||
                  (this.shared.apply(this.props), (this.applied = !0)),
                this.appliedUserDefined ||
                  (this.shared.applyUserDefined(this.props, t),
                  (this.appliedUserDefined = !0))
            }
          }),
          (UnControlled.prototype.componentWillUnmount = function() {
            c ||
              (this.props.editorWillUnmount && this.props.editorWillUnmount(s))
          }),
          (UnControlled.prototype.shouldComponentUpdate = function(e, t) {
            var n = !0
            return c && (n = !1), this.detached && (n = !1), n
          }),
          (UnControlled.prototype.render = function() {
            var e = this
            if (c) return null
            var t = this.props.className
              ? 'react-codemirror2 ' + this.props.className
              : 'react-codemirror2'
            return l.createElement('div', {
              className: t,
              ref: function ref(t) {
                return (e.ref = t)
              }
            })
          }),
          UnControlled
        )
      })(l.Component)
      t.UnControlled = h
    }.call(t, n(4)))
  },
  836: function(e, t, n) {
    ;(function(e) {
      'use strict'
      function Context(e, t, n, r) {
        ;(this.state = e), (this.mode = t), (this.depth = n), (this.prev = r)
      }
      e.defineMode(
        'jsx',
        function(t, n) {
          var r = e.getMode(t, {
              name: 'xml',
              allowMissing: !0,
              multilineTagIndentPastTag: !1,
              allowMissingTagName: !0
            }),
            o = e.getMode(t, (n && n.base) || 'javascript')
          function flatXMLIndent(e) {
            var t = e.tagName
            e.tagName = null
            var n = r.indent(e, '')
            return (e.tagName = t), n
          }
          function token(n, i) {
            return i.context.mode == r
              ? (function xmlToken(n, i, a) {
                  if (2 == a.depth)
                    return (
                      n.match(/^.*?\*\//) ? (a.depth = 1) : n.skipToEnd(),
                      'comment'
                    )
                  if ('{' == n.peek()) {
                    r.skipAttribute(a.state)
                    var s = flatXMLIndent(a.state),
                      l = a.state.context
                    if (l && n.match(/^[^>]*>\s*$/, !1)) {
                      for (; l.prev && !l.startOfLine; ) l = l.prev
                      l.startOfLine
                        ? (s -= t.indentUnit)
                        : a.prev.state.lexical &&
                          (s = a.prev.state.lexical.indented)
                    } else 1 == a.depth && (s += t.indentUnit)
                    return (
                      (i.context = new Context(
                        e.startState(o, s),
                        o,
                        0,
                        i.context
                      )),
                      null
                    )
                  }
                  if (1 == a.depth) {
                    if ('<' == n.peek())
                      return (
                        r.skipAttribute(a.state),
                        (i.context = new Context(
                          e.startState(r, flatXMLIndent(a.state)),
                          r,
                          0,
                          i.context
                        )),
                        null
                      )
                    if (n.match('//')) return n.skipToEnd(), 'comment'
                    if (n.match('/*')) return (a.depth = 2), token(n, i)
                  }
                  var c,
                    u = r.token(n, a.state),
                    d = n.current()
                  ;/\btag\b/.test(u)
                    ? />$/.test(d)
                      ? a.state.context
                        ? (a.depth = 0)
                        : (i.context = i.context.prev)
                      : /^</.test(d) && (a.depth = 1)
                    : !u && (c = d.indexOf('{')) > -1 && n.backUp(d.length - c)
                  return u
                })(n, i, i.context)
              : (function jsToken(t, n, i) {
                  if ('<' == t.peek() && o.expressionAllowed(t, i.state))
                    return (
                      o.skipExpression(i.state),
                      (n.context = new Context(
                        e.startState(r, o.indent(i.state, '')),
                        r,
                        0,
                        n.context
                      )),
                      null
                    )
                  var a = o.token(t, i.state)
                  if (!a && null != i.depth) {
                    var s = t.current()
                    '{' == s
                      ? i.depth++
                      : '}' == s &&
                        0 == --i.depth &&
                        (n.context = n.context.prev)
                  }
                  return a
                })(n, i, i.context)
          }
          return {
            startState: function() {
              return {context: new Context(e.startState(o), o)}
            },
            copyState: function(t) {
              return {
                context: (function copyContext(t) {
                  return new Context(
                    e.copyState(t.mode, t.state),
                    t.mode,
                    t.depth,
                    t.prev && copyContext(t.prev)
                  )
                })(t.context)
              }
            },
            token: token,
            indent: function(e, t, n) {
              return e.context.mode.indent(e.context.state, t, n)
            },
            innerMode: function(e) {
              return e.context
            }
          }
        },
        'xml',
        'javascript'
      ),
        e.defineMIME('text/jsx', 'jsx'),
        e.defineMIME('text/typescript-jsx', {
          name: 'jsx',
          base: {name: 'javascript', typescript: !0}
        })
    })(n(834), n(837), n(838))
  },
  837: function(e, t, n) {
    ;(function(e) {
      'use strict'
      var t = {
          autoSelfClosers: {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            frame: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
            menuitem: !0
          },
          implicitlyClosed: {
            dd: !0,
            li: !0,
            optgroup: !0,
            option: !0,
            p: !0,
            rp: !0,
            rt: !0,
            tbody: !0,
            td: !0,
            tfoot: !0,
            th: !0,
            tr: !0
          },
          contextGrabbers: {
            dd: {dd: !0, dt: !0},
            dt: {dd: !0, dt: !0},
            li: {li: !0},
            option: {option: !0, optgroup: !0},
            optgroup: {optgroup: !0},
            p: {
              address: !0,
              article: !0,
              aside: !0,
              blockquote: !0,
              dir: !0,
              div: !0,
              dl: !0,
              fieldset: !0,
              footer: !0,
              form: !0,
              h1: !0,
              h2: !0,
              h3: !0,
              h4: !0,
              h5: !0,
              h6: !0,
              header: !0,
              hgroup: !0,
              hr: !0,
              menu: !0,
              nav: !0,
              ol: !0,
              p: !0,
              pre: !0,
              section: !0,
              table: !0,
              ul: !0
            },
            rp: {rp: !0, rt: !0},
            rt: {rp: !0, rt: !0},
            tbody: {tbody: !0, tfoot: !0},
            td: {td: !0, th: !0},
            tfoot: {tbody: !0},
            th: {td: !0, th: !0},
            thead: {tbody: !0, tfoot: !0},
            tr: {tr: !0}
          },
          doNotIndent: {pre: !0},
          allowUnquoted: !0,
          allowMissing: !0,
          caseFold: !0
        },
        n = {
          autoSelfClosers: {},
          implicitlyClosed: {},
          contextGrabbers: {},
          doNotIndent: {},
          allowUnquoted: !1,
          allowMissing: !1,
          allowMissingTagName: !1,
          caseFold: !1
        }
      e.defineMode('xml', function(r, o) {
        var i,
          a,
          s = r.indentUnit,
          l = {},
          c = o.htmlMode ? t : n
        for (var u in c) l[u] = c[u]
        for (var u in o) l[u] = o[u]
        function inText(e, t) {
          function chain(n) {
            return (t.tokenize = n), n(e, t)
          }
          var n = e.next()
          return '<' == n
            ? e.eat('!')
              ? e.eat('[')
                ? e.match('CDATA[')
                  ? chain(inBlock('atom', ']]>'))
                  : null
                : e.match('--')
                  ? chain(inBlock('comment', '--\x3e'))
                  : e.match('DOCTYPE', !0, !0)
                    ? (e.eatWhile(/[\w\._\-]/),
                      chain(
                        (function doctype(e) {
                          return function(t, n) {
                            for (var r; null != (r = t.next()); ) {
                              if ('<' == r)
                                return (
                                  (n.tokenize = doctype(e + 1)),
                                  n.tokenize(t, n)
                                )
                              if ('>' == r) {
                                if (1 == e) {
                                  n.tokenize = inText
                                  break
                                }
                                return (
                                  (n.tokenize = doctype(e - 1)),
                                  n.tokenize(t, n)
                                )
                              }
                            }
                            return 'meta'
                          }
                        })(1)
                      ))
                    : null
              : e.eat('?')
                ? (e.eatWhile(/[\w\._\-]/),
                  (t.tokenize = inBlock('meta', '?>')),
                  'meta')
                : ((i = e.eat('/') ? 'closeTag' : 'openTag'),
                  (t.tokenize = inTag),
                  'tag bracket')
            : '&' == n
              ? (e.eat('#')
                ? e.eat('x')
                  ? e.eatWhile(/[a-fA-F\d]/) && e.eat(';')
                  : e.eatWhile(/[\d]/) && e.eat(';')
                : e.eatWhile(/[\w\.\-:]/) && e.eat(';'))
                ? 'atom'
                : 'error'
              : (e.eatWhile(/[^&<]/), null)
        }
        function inTag(e, t) {
          var n = e.next()
          if ('>' == n || ('/' == n && e.eat('>')))
            return (
              (t.tokenize = inText),
              (i = '>' == n ? 'endTag' : 'selfcloseTag'),
              'tag bracket'
            )
          if ('=' == n) return (i = 'equals'), null
          if ('<' == n) {
            ;(t.tokenize = inText),
              (t.state = baseState),
              (t.tagName = t.tagStart = null)
            var r = t.tokenize(e, t)
            return r ? r + ' tag error' : 'tag error'
          }
          return /[\'\"]/.test(n)
            ? ((t.tokenize = (function inAttribute(e) {
                var t = function(t, n) {
                  for (; !t.eol(); )
                    if (t.next() == e) {
                      n.tokenize = inTag
                      break
                    }
                  return 'string'
                }
                return (t.isInAttribute = !0), t
              })(n)),
              (t.stringStartCol = e.column()),
              t.tokenize(e, t))
            : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word')
        }
        function inBlock(e, t) {
          return function(n, r) {
            for (; !n.eol(); ) {
              if (n.match(t)) {
                r.tokenize = inText
                break
              }
              n.next()
            }
            return e
          }
        }
        function popContext(e) {
          e.context && (e.context = e.context.prev)
        }
        function maybePopContext(e, t) {
          for (var n; ; ) {
            if (!e.context) return
            if (
              ((n = e.context.tagName),
              !l.contextGrabbers.hasOwnProperty(n) ||
                !l.contextGrabbers[n].hasOwnProperty(t))
            )
              return
            popContext(e)
          }
        }
        function baseState(e, t, n) {
          return 'openTag' == e
            ? ((n.tagStart = t.column()), tagNameState)
            : 'closeTag' == e
              ? closeTagNameState
              : baseState
        }
        function tagNameState(e, t, n) {
          return 'word' == e
            ? ((n.tagName = t.current()), (a = 'tag'), attrState)
            : l.allowMissingTagName && 'endTag' == e
              ? ((a = 'tag bracket'), attrState(e, t, n))
              : ((a = 'error'), tagNameState)
        }
        function closeTagNameState(e, t, n) {
          if ('word' == e) {
            var r = t.current()
            return (
              n.context &&
                n.context.tagName != r &&
                l.implicitlyClosed.hasOwnProperty(n.context.tagName) &&
                popContext(n),
              (n.context && n.context.tagName == r) || !1 === l.matchClosing
                ? ((a = 'tag'), closeState)
                : ((a = 'tag error'), closeStateErr)
            )
          }
          return l.allowMissingTagName && 'endTag' == e
            ? ((a = 'tag bracket'), closeState(e, t, n))
            : ((a = 'error'), closeStateErr)
        }
        function closeState(e, t, n) {
          return 'endTag' != e
            ? ((a = 'error'), closeState)
            : (popContext(n), baseState)
        }
        function closeStateErr(e, t, n) {
          return (a = 'error'), closeState(e, 0, n)
        }
        function attrState(e, t, n) {
          if ('word' == e) return (a = 'attribute'), attrEqState
          if ('endTag' == e || 'selfcloseTag' == e) {
            var r = n.tagName,
              o = n.tagStart
            return (
              (n.tagName = n.tagStart = null),
              'selfcloseTag' == e || l.autoSelfClosers.hasOwnProperty(r)
                ? maybePopContext(n, r)
                : (maybePopContext(n, r),
                  (n.context = new function Context(e, t, n) {
                    ;(this.prev = e.context),
                      (this.tagName = t),
                      (this.indent = e.indented),
                      (this.startOfLine = n),
                      (l.doNotIndent.hasOwnProperty(t) ||
                        (e.context && e.context.noIndent)) &&
                        (this.noIndent = !0)
                  }(n, r, o == n.indented))),
              baseState
            )
          }
          return (a = 'error'), attrState
        }
        function attrEqState(e, t, n) {
          return 'equals' == e
            ? attrValueState
            : (l.allowMissing || (a = 'error'), attrState(e, 0, n))
        }
        function attrValueState(e, t, n) {
          return 'string' == e
            ? attrContinuedState
            : 'word' == e && l.allowUnquoted
              ? ((a = 'string'), attrState)
              : ((a = 'error'), attrState(e, 0, n))
        }
        function attrContinuedState(e, t, n) {
          return 'string' == e ? attrContinuedState : attrState(e, 0, n)
        }
        return (
          (inText.isInText = !0),
          {
            startState: function(e) {
              var t = {
                tokenize: inText,
                state: baseState,
                indented: e || 0,
                tagName: null,
                tagStart: null,
                context: null
              }
              return null != e && (t.baseIndent = e), t
            },
            token: function(e, t) {
              if (
                (!t.tagName && e.sol() && (t.indented = e.indentation()),
                e.eatSpace())
              )
                return null
              i = null
              var n = t.tokenize(e, t)
              return (
                (n || i) &&
                  'comment' != n &&
                  ((a = null),
                  (t.state = t.state(i || n, e, t)),
                  a && (n = 'error' == a ? n + ' error' : a)),
                n
              )
            },
            indent: function(t, n, r) {
              var o = t.context
              if (t.tokenize.isInAttribute)
                return t.tagStart == t.indented
                  ? t.stringStartCol + 1
                  : t.indented + s
              if (o && o.noIndent) return e.Pass
              if (t.tokenize != inTag && t.tokenize != inText)
                return r ? r.match(/^(\s*)/)[0].length : 0
              if (t.tagName)
                return !1 !== l.multilineTagIndentPastTag
                  ? t.tagStart + t.tagName.length + 2
                  : t.tagStart + s * (l.multilineTagIndentFactor || 1)
              if (l.alignCDATA && /<!\[CDATA\[/.test(n)) return 0
              var i = n && /^<(\/)?([\w_:\.-]*)/.exec(n)
              if (i && i[1])
                for (; o; ) {
                  if (o.tagName == i[2]) {
                    o = o.prev
                    break
                  }
                  if (!l.implicitlyClosed.hasOwnProperty(o.tagName)) break
                  o = o.prev
                }
              else if (i)
                for (; o; ) {
                  var a = l.contextGrabbers[o.tagName]
                  if (!a || !a.hasOwnProperty(i[2])) break
                  o = o.prev
                }
              for (; o && o.prev && !o.startOfLine; ) o = o.prev
              return o ? o.indent + s : t.baseIndent || 0
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: '\x3c!--',
            blockCommentEnd: '--\x3e',
            configuration: l.htmlMode ? 'html' : 'xml',
            helperType: l.htmlMode ? 'html' : 'xml',
            skipAttribute: function(e) {
              e.state == attrValueState && (e.state = attrState)
            }
          }
        )
      }),
        e.defineMIME('text/xml', 'xml'),
        e.defineMIME('application/xml', 'xml'),
        e.mimeModes.hasOwnProperty('text/html') ||
          e.defineMIME('text/html', {name: 'xml', htmlMode: !0})
    })(n(834))
  },
  838: function(e, t, n) {
    ;(function(e) {
      'use strict'
      e.defineMode('javascript', function(t, n) {
        var r,
          o,
          i = t.indentUnit,
          a = n.statementIndent,
          s = n.jsonld,
          l = n.json || s,
          c = n.typescript,
          u = n.wordCharacters || /[\w$\xa1-\uffff]/,
          d = (function() {
            function kw(e) {
              return {type: e, style: 'keyword'}
            }
            var e = kw('keyword a'),
              t = kw('keyword b'),
              n = kw('keyword c'),
              r = kw('keyword d'),
              o = kw('operator'),
              i = {type: 'atom', style: 'atom'}
            return {
              if: kw('if'),
              while: e,
              with: e,
              else: t,
              do: t,
              try: t,
              finally: t,
              return: r,
              break: r,
              continue: r,
              new: kw('new'),
              delete: n,
              void: n,
              throw: n,
              debugger: kw('debugger'),
              var: kw('var'),
              const: kw('var'),
              let: kw('var'),
              function: kw('function'),
              catch: kw('catch'),
              for: kw('for'),
              switch: kw('switch'),
              case: kw('case'),
              default: kw('default'),
              in: o,
              typeof: o,
              instanceof: o,
              true: i,
              false: i,
              null: i,
              undefined: i,
              NaN: i,
              Infinity: i,
              this: kw('this'),
              class: kw('class'),
              super: kw('atom'),
              yield: n,
              export: kw('export'),
              import: kw('import'),
              extends: n,
              await: n
            }
          })(),
          p = /[+\-*&%=<>!?|~^@]/,
          h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
        function ret(e, t, n) {
          return (r = e), (o = n), t
        }
        function tokenBase(e, t) {
          var n = e.next()
          if ('"' == n || "'" == n)
            return (
              (t.tokenize = (function tokenString(e) {
                return function(t, n) {
                  var r,
                    o = !1
                  if (s && '@' == t.peek() && t.match(h))
                    return (
                      (n.tokenize = tokenBase), ret('jsonld-keyword', 'meta')
                    )
                  for (; null != (r = t.next()) && (r != e || o); )
                    o = !o && '\\' == r
                  return o || (n.tokenize = tokenBase), ret('string', 'string')
                }
              })(n)),
              t.tokenize(e, t)
            )
          if ('.' == n && e.match(/^\d+(?:[eE][+\-]?\d+)?/))
            return ret('number', 'number')
          if ('.' == n && e.match('..')) return ret('spread', 'meta')
          if (/[\[\]{}\(\),;\:\.]/.test(n)) return ret(n)
          if ('=' == n && e.eat('>')) return ret('=>', 'operator')
          if ('0' == n && e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i))
            return ret('number', 'number')
          if (/\d/.test(n))
            return (
              e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/),
              ret('number', 'number')
            )
          if ('/' == n)
            return e.eat('*')
              ? ((t.tokenize = tokenComment), tokenComment(e, t))
              : e.eat('/')
                ? (e.skipToEnd(), ret('comment', 'comment'))
                : expressionAllowed(e, t, 1)
                  ? ((function readRegexp(e) {
                      for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                        if (!n) {
                          if ('/' == t && !r) return
                          '[' == t ? (r = !0) : r && ']' == t && (r = !1)
                        }
                        n = !n && '\\' == t
                      }
                    })(e),
                    e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                    ret('regexp', 'string-2'))
                  : (e.eat('='), ret('operator', 'operator', e.current()))
          if ('`' == n) return (t.tokenize = tokenQuasi), tokenQuasi(e, t)
          if ('#' == n) return e.skipToEnd(), ret('error', 'error')
          if (p.test(n))
            return (
              ('>' == n && t.lexical && '>' == t.lexical.type) ||
                (e.eat('=')
                  ? ('!' != n && '=' != n) || e.eat('=')
                  : /[<>*+\-]/.test(n) && (e.eat(n), '>' == n && e.eat(n))),
              ret('operator', 'operator', e.current())
            )
          if (u.test(n)) {
            e.eatWhile(u)
            var r = e.current()
            if ('.' != t.lastType) {
              if (d.propertyIsEnumerable(r)) {
                var o = d[r]
                return ret(o.type, o.style, r)
              }
              if ('async' == r && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1))
                return ret('async', 'keyword', r)
            }
            return ret('variable', 'variable', r)
          }
        }
        function tokenComment(e, t) {
          for (var n, r = !1; (n = e.next()); ) {
            if ('/' == n && r) {
              t.tokenize = tokenBase
              break
            }
            r = '*' == n
          }
          return ret('comment', 'comment')
        }
        function tokenQuasi(e, t) {
          for (var n, r = !1; null != (n = e.next()); ) {
            if (!r && ('`' == n || ('$' == n && e.eat('{')))) {
              t.tokenize = tokenBase
              break
            }
            r = !r && '\\' == n
          }
          return ret('quasi', 'string-2', e.current())
        }
        var f = '([{}])'
        function findFatArrow(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null)
          var n = e.string.indexOf('=>', e.start)
          if (!(n < 0)) {
            if (c) {
              var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                e.string.slice(e.start, n)
              )
              r && (n = r.index)
            }
            for (var o = 0, i = !1, a = n - 1; a >= 0; --a) {
              var s = e.string.charAt(a),
                l = f.indexOf(s)
              if (l >= 0 && l < 3) {
                if (!o) {
                  ++a
                  break
                }
                if (0 == --o) {
                  '(' == s && (i = !0)
                  break
                }
              } else if (l >= 3 && l < 6) ++o
              else if (u.test(s)) i = !0
              else {
                if (/["'\/]/.test(s)) return
                if (i && !o) {
                  ++a
                  break
                }
              }
            }
            i && !o && (t.fatArrowAt = a)
          }
        }
        var g = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          'jsonld-keyword': !0
        }
        function JSLexical(e, t, n, r, o, i) {
          ;(this.indented = e),
            (this.column = t),
            (this.type = n),
            (this.prev = o),
            (this.info = i),
            null != r && (this.align = r)
        }
        function inScope(e, t) {
          for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0
          for (var r = e.context; r; r = r.prev)
            for (n = r.vars; n; n = n.next) if (n.name == t) return !0
        }
        var m = {state: null, column: null, marked: null, cc: null}
        function pass() {
          for (var e = arguments.length - 1; e >= 0; e--)
            m.cc.push(arguments[e])
        }
        function cont() {
          return pass.apply(null, arguments), !0
        }
        function inList(e, t) {
          for (var n = t; n; n = n.next) if (n.name == e) return !0
          return !1
        }
        function register(e) {
          var t = m.state
          if (((m.marked = 'def'), t.context))
            if ('var' == t.lexical.info && t.context && t.context.block) {
              var r = (function registerVarScoped(e, t) {
                if (t) {
                  if (t.block) {
                    var n = registerVarScoped(e, t.prev)
                    return n
                      ? n == t.prev
                        ? t
                        : new Context(n, t.vars, !0)
                      : null
                  }
                  return inList(e, t.vars)
                    ? t
                    : new Context(t.prev, new Var(e, t.vars), !1)
                }
                return null
              })(e, t.context)
              if (null != r) return void (t.context = r)
            } else if (!inList(e, t.localVars))
              return void (t.localVars = new Var(e, t.localVars))
          n.globalVars &&
            !inList(e, t.globalVars) &&
            (t.globalVars = new Var(e, t.globalVars))
        }
        function isModifier(e) {
          return (
            'public' == e ||
            'private' == e ||
            'protected' == e ||
            'abstract' == e ||
            'readonly' == e
          )
        }
        function Context(e, t, n) {
          ;(this.prev = e), (this.vars = t), (this.block = n)
        }
        function Var(e, t) {
          ;(this.name = e), (this.next = t)
        }
        var v = new Var('this', new Var('arguments', null))
        function pushcontext() {
          ;(m.state.context = new Context(
            m.state.context,
            m.state.localVars,
            !1
          )),
            (m.state.localVars = v)
        }
        function pushblockcontext() {
          ;(m.state.context = new Context(
            m.state.context,
            m.state.localVars,
            !0
          )),
            (m.state.localVars = null)
        }
        function popcontext() {
          ;(m.state.localVars = m.state.context.vars),
            (m.state.context = m.state.context.prev)
        }
        function pushlex(e, t) {
          var n = function() {
            var n = m.state,
              r = n.indented
            if ('stat' == n.lexical.type) r = n.lexical.indented
            else
              for (var o = n.lexical; o && ')' == o.type && o.align; o = o.prev)
                r = o.indented
            n.lexical = new JSLexical(
              r,
              m.stream.column(),
              e,
              null,
              n.lexical,
              t
            )
          }
          return (n.lex = !0), n
        }
        function poplex() {
          var e = m.state
          e.lexical.prev &&
            (')' == e.lexical.type && (e.indented = e.lexical.indented),
            (e.lexical = e.lexical.prev))
        }
        function expect(e) {
          return function exp(t) {
            return t == e
              ? cont()
              : ';' == e || '}' == t || ')' == t || ']' == t
                ? pass()
                : cont(exp)
          }
        }
        function statement(e, t) {
          return 'var' == e
            ? cont(pushlex('vardef', t), vardef, expect(';'), poplex)
            : 'keyword a' == e
              ? cont(pushlex('form'), parenExpr, statement, poplex)
              : 'keyword b' == e
                ? cont(pushlex('form'), statement, poplex)
                : 'keyword d' == e
                  ? m.stream.match(/^\s*$/, !1)
                    ? cont()
                    : cont(
                        pushlex('stat'),
                        maybeexpression,
                        expect(';'),
                        poplex
                      )
                  : 'debugger' == e
                    ? cont(expect(';'))
                    : '{' == e
                      ? cont(
                          pushlex('}'),
                          pushblockcontext,
                          block,
                          poplex,
                          popcontext
                        )
                      : ';' == e
                        ? cont()
                        : 'if' == e
                          ? ('else' == m.state.lexical.info &&
                              m.state.cc[m.state.cc.length - 1] == poplex &&
                              m.state.cc.pop()(),
                            cont(
                              pushlex('form'),
                              parenExpr,
                              statement,
                              poplex,
                              maybeelse
                            ))
                          : 'function' == e
                            ? cont(functiondef)
                            : 'for' == e
                              ? cont(
                                  pushlex('form'),
                                  forspec,
                                  statement,
                                  poplex
                                )
                              : 'class' == e || (c && 'interface' == t)
                                ? ((m.marked = 'keyword'),
                                  cont(pushlex('form'), className, poplex))
                                : 'variable' == e
                                  ? c && 'declare' == t
                                    ? ((m.marked = 'keyword'), cont(statement))
                                    : c &&
                                      ('module' == t ||
                                        'enum' == t ||
                                        'type' == t) &&
                                      m.stream.match(/^\s*\w/, !1)
                                      ? ((m.marked = 'keyword'),
                                        'enum' == t
                                          ? cont(enumdef)
                                          : 'type' == t
                                            ? cont(
                                                typeexpr,
                                                expect('operator'),
                                                typeexpr,
                                                expect(';')
                                              )
                                            : cont(
                                                pushlex('form'),
                                                pattern,
                                                expect('{'),
                                                pushlex('}'),
                                                block,
                                                poplex,
                                                poplex
                                              ))
                                      : c && 'namespace' == t
                                        ? ((m.marked = 'keyword'),
                                          cont(
                                            pushlex('form'),
                                            expression,
                                            block,
                                            poplex
                                          ))
                                        : c && 'abstract' == t
                                          ? ((m.marked = 'keyword'),
                                            cont(statement))
                                          : cont(pushlex('stat'), maybelabel)
                                  : 'switch' == e
                                    ? cont(
                                        pushlex('form'),
                                        parenExpr,
                                        expect('{'),
                                        pushlex('}', 'switch'),
                                        pushblockcontext,
                                        block,
                                        poplex,
                                        poplex,
                                        popcontext
                                      )
                                    : 'case' == e
                                      ? cont(expression, expect(':'))
                                      : 'default' == e
                                        ? cont(expect(':'))
                                        : 'catch' == e
                                          ? cont(
                                              pushlex('form'),
                                              pushcontext,
                                              maybeCatchBinding,
                                              statement,
                                              poplex,
                                              popcontext
                                            )
                                          : 'export' == e
                                            ? cont(
                                                pushlex('stat'),
                                                afterExport,
                                                poplex
                                              )
                                            : 'import' == e
                                              ? cont(
                                                  pushlex('stat'),
                                                  afterImport,
                                                  poplex
                                                )
                                              : 'async' == e
                                                ? cont(statement)
                                                : '@' == t
                                                  ? cont(expression, statement)
                                                  : pass(
                                                      pushlex('stat'),
                                                      expression,
                                                      expect(';'),
                                                      poplex
                                                    )
        }
        function maybeCatchBinding(e) {
          if ('(' == e) return cont(funarg, expect(')'))
        }
        function expression(e, t) {
          return expressionInner(e, t, !1)
        }
        function expressionNoComma(e, t) {
          return expressionInner(e, t, !0)
        }
        function parenExpr(e) {
          return '(' != e
            ? pass()
            : cont(pushlex(')'), expression, expect(')'), poplex)
        }
        function expressionInner(e, t, n) {
          if (m.state.fatArrowAt == m.stream.start) {
            var r = n ? arrowBodyNoComma : arrowBody
            if ('(' == e)
              return cont(
                pushcontext,
                pushlex(')'),
                commasep(funarg, ')'),
                poplex,
                expect('=>'),
                r,
                popcontext
              )
            if ('variable' == e)
              return pass(pushcontext, pattern, expect('=>'), r, popcontext)
          }
          var o = n ? maybeoperatorNoComma : maybeoperatorComma
          return g.hasOwnProperty(e)
            ? cont(o)
            : 'function' == e
              ? cont(functiondef, o)
              : 'class' == e || (c && 'interface' == t)
                ? ((m.marked = 'keyword'),
                  cont(pushlex('form'), classExpression, poplex))
                : 'keyword c' == e || 'async' == e
                  ? cont(n ? expressionNoComma : expression)
                  : '(' == e
                    ? cont(
                        pushlex(')'),
                        maybeexpression,
                        expect(')'),
                        poplex,
                        o
                      )
                    : 'operator' == e || 'spread' == e
                      ? cont(n ? expressionNoComma : expression)
                      : '[' == e
                        ? cont(pushlex(']'), arrayLiteral, poplex, o)
                        : '{' == e
                          ? contCommasep(objprop, '}', null, o)
                          : 'quasi' == e
                            ? pass(quasi, o)
                            : 'new' == e
                              ? cont(
                                  (function maybeTarget(e) {
                                    return function(t) {
                                      return '.' == t
                                        ? cont(e ? targetNoComma : target)
                                        : 'variable' == t && c
                                          ? cont(
                                              maybeTypeArgs,
                                              e
                                                ? maybeoperatorNoComma
                                                : maybeoperatorComma
                                            )
                                          : pass(
                                              e ? expressionNoComma : expression
                                            )
                                    }
                                  })(n)
                                )
                              : 'import' == e
                                ? cont(expression)
                                : cont()
        }
        function maybeexpression(e) {
          return e.match(/[;\}\)\],]/) ? pass() : pass(expression)
        }
        function maybeoperatorComma(e, t) {
          return ',' == e ? cont(expression) : maybeoperatorNoComma(e, t, !1)
        }
        function maybeoperatorNoComma(e, t, n) {
          var r = 0 == n ? maybeoperatorComma : maybeoperatorNoComma,
            o = 0 == n ? expression : expressionNoComma
          return '=>' == e
            ? cont(pushcontext, n ? arrowBodyNoComma : arrowBody, popcontext)
            : 'operator' == e
              ? /\+\+|--/.test(t) || (c && '!' == t)
                ? cont(r)
                : c && '<' == t && m.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1)
                  ? cont(pushlex('>'), commasep(typeexpr, '>'), poplex, r)
                  : '?' == t
                    ? cont(expression, expect(':'), o)
                    : cont(o)
              : 'quasi' == e
                ? pass(quasi, r)
                : ';' != e
                  ? '(' == e
                    ? contCommasep(expressionNoComma, ')', 'call', r)
                    : '.' == e
                      ? cont(property, r)
                      : '[' == e
                        ? cont(
                            pushlex(']'),
                            maybeexpression,
                            expect(']'),
                            poplex,
                            r
                          )
                        : c && 'as' == t
                          ? ((m.marked = 'keyword'), cont(typeexpr, r))
                          : 'regexp' == e
                            ? ((m.state.lastType = m.marked = 'operator'),
                              m.stream.backUp(
                                m.stream.pos - m.stream.start - 1
                              ),
                              cont(o))
                            : void 0
                  : void 0
        }
        function quasi(e, t) {
          return 'quasi' != e
            ? pass()
            : '${' != t.slice(t.length - 2)
              ? cont(quasi)
              : cont(expression, continueQuasi)
        }
        function continueQuasi(e) {
          if ('}' == e)
            return (
              (m.marked = 'string-2'),
              (m.state.tokenize = tokenQuasi),
              cont(quasi)
            )
        }
        function arrowBody(e) {
          return (
            findFatArrow(m.stream, m.state),
            pass('{' == e ? statement : expression)
          )
        }
        function arrowBodyNoComma(e) {
          return (
            findFatArrow(m.stream, m.state),
            pass('{' == e ? statement : expressionNoComma)
          )
        }
        function target(e, t) {
          if ('target' == t)
            return (m.marked = 'keyword'), cont(maybeoperatorComma)
        }
        function targetNoComma(e, t) {
          if ('target' == t)
            return (m.marked = 'keyword'), cont(maybeoperatorNoComma)
        }
        function maybelabel(e) {
          return ':' == e
            ? cont(poplex, statement)
            : pass(maybeoperatorComma, expect(';'), poplex)
        }
        function property(e) {
          if ('variable' == e) return (m.marked = 'property'), cont()
        }
        function objprop(e, t) {
          if ('async' == e) return (m.marked = 'property'), cont(objprop)
          if ('variable' == e || 'keyword' == m.style) {
            return (
              (m.marked = 'property'),
              'get' == t || 'set' == t
                ? cont(getterSetter)
                : (c &&
                    m.state.fatArrowAt == m.stream.start &&
                    (n = m.stream.match(/^\s*:\s*/, !1)) &&
                    (m.state.fatArrowAt = m.stream.pos + n[0].length),
                  cont(afterprop))
            )
            var n
          } else {
            if ('number' == e || 'string' == e)
              return (
                (m.marked = s ? 'property' : m.style + ' property'),
                cont(afterprop)
              )
            if ('jsonld-keyword' == e) return cont(afterprop)
            if (c && isModifier(t)) return (m.marked = 'keyword'), cont(objprop)
            if ('[' == e)
              return cont(expression, maybetype, expect(']'), afterprop)
            if ('spread' == e) return cont(expressionNoComma, afterprop)
            if ('*' == t) return (m.marked = 'keyword'), cont(objprop)
            if (':' == e) return pass(afterprop)
          }
        }
        function getterSetter(e) {
          return 'variable' != e
            ? pass(afterprop)
            : ((m.marked = 'property'), cont(functiondef))
        }
        function afterprop(e) {
          return ':' == e
            ? cont(expressionNoComma)
            : '(' == e
              ? pass(functiondef)
              : void 0
        }
        function commasep(e, t, n) {
          function proceed(r, o) {
            if (n ? n.indexOf(r) > -1 : ',' == r) {
              var i = m.state.lexical
              return (
                'call' == i.info && (i.pos = (i.pos || 0) + 1),
                cont(function(n, r) {
                  return n == t || r == t ? pass() : pass(e)
                }, proceed)
              )
            }
            return r == t || o == t ? cont() : cont(expect(t))
          }
          return function(n, r) {
            return n == t || r == t ? cont() : pass(e, proceed)
          }
        }
        function contCommasep(e, t, n) {
          for (var r = 3; r < arguments.length; r++) m.cc.push(arguments[r])
          return cont(pushlex(t, n), commasep(e, t), poplex)
        }
        function block(e) {
          return '}' == e ? cont() : pass(statement, block)
        }
        function maybetype(e, t) {
          if (c) {
            if (':' == e) return cont(typeexpr)
            if ('?' == t) return cont(maybetype)
          }
        }
        function mayberettype(e) {
          if (c && ':' == e)
            return m.stream.match(/^\s*\w+\s+is\b/, !1)
              ? cont(expression, isKW, typeexpr)
              : cont(typeexpr)
        }
        function isKW(e, t) {
          if ('is' == t) return (m.marked = 'keyword'), cont()
        }
        function typeexpr(e, t) {
          return 'keyof' == t || 'typeof' == t
            ? ((m.marked = 'keyword'),
              cont('keyof' == t ? typeexpr : expressionNoComma))
            : 'variable' == e || 'void' == t
              ? ((m.marked = 'type'), cont(afterType))
              : 'string' == e || 'number' == e || 'atom' == e
                ? cont(afterType)
                : '[' == e
                  ? cont(
                      pushlex(']'),
                      commasep(typeexpr, ']', ','),
                      poplex,
                      afterType
                    )
                  : '{' == e
                    ? cont(
                        pushlex('}'),
                        commasep(typeprop, '}', ',;'),
                        poplex,
                        afterType
                      )
                    : '(' == e
                      ? cont(commasep(typearg, ')'), maybeReturnType)
                      : '<' == e
                        ? cont(commasep(typeexpr, '>'), typeexpr)
                        : void 0
        }
        function maybeReturnType(e) {
          if ('=>' == e) return cont(typeexpr)
        }
        function typeprop(e, t) {
          return 'variable' == e || 'keyword' == m.style
            ? ((m.marked = 'property'), cont(typeprop))
            : '?' == t
              ? cont(typeprop)
              : ':' == e
                ? cont(typeexpr)
                : '[' == e
                  ? cont(expression, maybetype, expect(']'), typeprop)
                  : void 0
        }
        function typearg(e, t) {
          return ('variable' == e && m.stream.match(/^\s*[?:]/, !1)) || '?' == t
            ? cont(typearg)
            : ':' == e
              ? cont(typeexpr)
              : pass(typeexpr)
        }
        function afterType(e, t) {
          return '<' == t
            ? cont(pushlex('>'), commasep(typeexpr, '>'), poplex, afterType)
            : '|' == t || '.' == e || '&' == t
              ? cont(typeexpr)
              : '[' == e
                ? cont(expect(']'), afterType)
                : 'extends' == t || 'implements' == t
                  ? ((m.marked = 'keyword'), cont(typeexpr))
                  : void 0
        }
        function maybeTypeArgs(e, t) {
          if ('<' == t)
            return cont(
              pushlex('>'),
              commasep(typeexpr, '>'),
              poplex,
              afterType
            )
        }
        function typeparam() {
          return pass(typeexpr, maybeTypeDefault)
        }
        function maybeTypeDefault(e, t) {
          if ('=' == t) return cont(typeexpr)
        }
        function vardef(e, t) {
          return 'enum' == t
            ? ((m.marked = 'keyword'), cont(enumdef))
            : pass(pattern, maybetype, maybeAssign, vardefCont)
        }
        function pattern(e, t) {
          return c && isModifier(t)
            ? ((m.marked = 'keyword'), cont(pattern))
            : 'variable' == e
              ? (register(t), cont())
              : 'spread' == e
                ? cont(pattern)
                : '[' == e
                  ? contCommasep(eltpattern, ']')
                  : '{' == e
                    ? contCommasep(proppattern, '}')
                    : void 0
        }
        function proppattern(e, t) {
          return 'variable' != e || m.stream.match(/^\s*:/, !1)
            ? ('variable' == e && (m.marked = 'property'),
              'spread' == e
                ? cont(pattern)
                : '}' == e
                  ? pass()
                  : '[' == e
                    ? cont(expression, expect(']'), expect(':'), proppattern)
                    : cont(expect(':'), pattern, maybeAssign))
            : (register(t), cont(maybeAssign))
        }
        function eltpattern() {
          return pass(pattern, maybeAssign)
        }
        function maybeAssign(e, t) {
          if ('=' == t) return cont(expressionNoComma)
        }
        function vardefCont(e) {
          if (',' == e) return cont(vardef)
        }
        function maybeelse(e, t) {
          if ('keyword b' == e && 'else' == t)
            return cont(pushlex('form', 'else'), statement, poplex)
        }
        function forspec(e, t) {
          return 'await' == t
            ? cont(forspec)
            : '(' == e
              ? cont(pushlex(')'), forspec1, expect(')'), poplex)
              : void 0
        }
        function forspec1(e) {
          return 'var' == e
            ? cont(vardef, expect(';'), forspec2)
            : ';' == e
              ? cont(forspec2)
              : 'variable' == e
                ? cont(formaybeinof)
                : pass(expression, expect(';'), forspec2)
        }
        function formaybeinof(e, t) {
          return 'in' == t || 'of' == t
            ? ((m.marked = 'keyword'), cont(expression))
            : cont(maybeoperatorComma, forspec2)
        }
        function forspec2(e, t) {
          return ';' == e
            ? cont(forspec3)
            : 'in' == t || 'of' == t
              ? ((m.marked = 'keyword'), cont(expression))
              : pass(expression, expect(';'), forspec3)
        }
        function forspec3(e) {
          ')' != e && cont(expression)
        }
        function functiondef(e, t) {
          return '*' == t
            ? ((m.marked = 'keyword'), cont(functiondef))
            : 'variable' == e
              ? (register(t), cont(functiondef))
              : '(' == e
                ? cont(
                    pushcontext,
                    pushlex(')'),
                    commasep(funarg, ')'),
                    poplex,
                    mayberettype,
                    statement,
                    popcontext
                  )
                : c && '<' == t
                  ? cont(
                      pushlex('>'),
                      commasep(typeparam, '>'),
                      poplex,
                      functiondef
                    )
                  : void 0
        }
        function funarg(e, t) {
          return (
            '@' == t && cont(expression, funarg),
            'spread' == e
              ? cont(funarg)
              : c && isModifier(t)
                ? ((m.marked = 'keyword'), cont(funarg))
                : pass(pattern, maybetype, maybeAssign)
          )
        }
        function classExpression(e, t) {
          return 'variable' == e ? className(e, t) : classNameAfter(e, t)
        }
        function className(e, t) {
          if ('variable' == e) return register(t), cont(classNameAfter)
        }
        function classNameAfter(e, t) {
          return '<' == t
            ? cont(
                pushlex('>'),
                commasep(typeparam, '>'),
                poplex,
                classNameAfter
              )
            : 'extends' == t || 'implements' == t || (c && ',' == e)
              ? ('implements' == t && (m.marked = 'keyword'),
                cont(c ? typeexpr : expression, classNameAfter))
              : '{' == e
                ? cont(pushlex('}'), classBody, poplex)
                : void 0
        }
        function classBody(e, t) {
          return 'async' == e ||
            ('variable' == e &&
              ('static' == t ||
                'get' == t ||
                'set' == t ||
                (c && isModifier(t))) &&
              m.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            ? ((m.marked = 'keyword'), cont(classBody))
            : 'variable' == e || 'keyword' == m.style
              ? ((m.marked = 'property'),
                cont(c ? classfield : functiondef, classBody))
              : '[' == e
                ? cont(
                    expression,
                    maybetype,
                    expect(']'),
                    c ? classfield : functiondef,
                    classBody
                  )
                : '*' == t
                  ? ((m.marked = 'keyword'), cont(classBody))
                  : ';' == e
                    ? cont(classBody)
                    : '}' == e
                      ? cont()
                      : '@' == t
                        ? cont(expression, classBody)
                        : void 0
        }
        function classfield(e, t) {
          return '?' == t
            ? cont(classfield)
            : ':' == e
              ? cont(typeexpr, maybeAssign)
              : '=' == t
                ? cont(expressionNoComma)
                : pass(functiondef)
        }
        function afterExport(e, t) {
          return '*' == t
            ? ((m.marked = 'keyword'), cont(maybeFrom, expect(';')))
            : 'default' == t
              ? ((m.marked = 'keyword'), cont(expression, expect(';')))
              : '{' == e
                ? cont(commasep(exportField, '}'), maybeFrom, expect(';'))
                : pass(statement)
        }
        function exportField(e, t) {
          return 'as' == t
            ? ((m.marked = 'keyword'), cont(expect('variable')))
            : 'variable' == e
              ? pass(expressionNoComma, exportField)
              : void 0
        }
        function afterImport(e) {
          return 'string' == e
            ? cont()
            : '(' == e
              ? pass(expression)
              : pass(importSpec, maybeMoreImports, maybeFrom)
        }
        function importSpec(e, t) {
          return '{' == e
            ? contCommasep(importSpec, '}')
            : ('variable' == e && register(t),
              '*' == t && (m.marked = 'keyword'),
              cont(maybeAs))
        }
        function maybeMoreImports(e) {
          if (',' == e) return cont(importSpec, maybeMoreImports)
        }
        function maybeAs(e, t) {
          if ('as' == t) return (m.marked = 'keyword'), cont(importSpec)
        }
        function maybeFrom(e, t) {
          if ('from' == t) return (m.marked = 'keyword'), cont(expression)
        }
        function arrayLiteral(e) {
          return ']' == e ? cont() : pass(commasep(expressionNoComma, ']'))
        }
        function enumdef() {
          return pass(
            pushlex('form'),
            pattern,
            expect('{'),
            pushlex('}'),
            commasep(enummember, '}'),
            poplex,
            poplex
          )
        }
        function enummember() {
          return pass(pattern, maybeAssign)
        }
        function expressionAllowed(e, t, n) {
          return (
            (t.tokenize == tokenBase &&
              /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                t.lastType
              )) ||
            ('quasi' == t.lastType &&
              /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
          )
        }
        return (
          (popcontext.lex = !0),
          (poplex.lex = !0),
          {
            startState: function(e) {
              var t = {
                tokenize: tokenBase,
                lastType: 'sof',
                cc: [],
                lexical: new JSLexical((e || 0) - i, 0, 'block', !1),
                localVars: n.localVars,
                context: n.localVars && new Context(null, null, !1),
                indented: e || 0
              }
              return (
                n.globalVars &&
                  'object' == typeof n.globalVars &&
                  (t.globalVars = n.globalVars),
                t
              )
            },
            token: function(e, t) {
              if (
                (e.sol() &&
                  (t.lexical.hasOwnProperty('align') || (t.lexical.align = !1),
                  (t.indented = e.indentation()),
                  findFatArrow(e, t)),
                t.tokenize != tokenComment && e.eatSpace())
              )
                return null
              var n = t.tokenize(e, t)
              return 'comment' == r
                ? n
                : ((t.lastType =
                    'operator' != r || ('++' != o && '--' != o) ? r : 'incdec'),
                  (function parseJS(e, t, n, r, o) {
                    var i = e.cc
                    for (
                      m.state = e,
                        m.stream = o,
                        m.marked = null,
                        m.cc = i,
                        m.style = t,
                        e.lexical.hasOwnProperty('align') ||
                          (e.lexical.align = !0);
                      ;

                    )
                      if (
                        (i.length ? i.pop() : l ? expression : statement)(n, r)
                      ) {
                        for (; i.length && i[i.length - 1].lex; ) i.pop()()
                        return m.marked
                          ? m.marked
                          : 'variable' == n && inScope(e, r)
                            ? 'variable-2'
                            : t
                      }
                  })(t, n, r, o, e))
            },
            indent: function(t, r) {
              if (t.tokenize == tokenComment) return e.Pass
              if (t.tokenize != tokenBase) return 0
              var o,
                s = r && r.charAt(0),
                l = t.lexical
              if (!/^\s*else\b/.test(r))
                for (var c = t.cc.length - 1; c >= 0; --c) {
                  var u = t.cc[c]
                  if (u == poplex) l = l.prev
                  else if (u != maybeelse) break
                }
              for (
                ;
                ('stat' == l.type || 'form' == l.type) &&
                ('}' == s ||
                  ((o = t.cc[t.cc.length - 1]) &&
                    (o == maybeoperatorComma || o == maybeoperatorNoComma) &&
                    !/^[,\.=+\-*:?[\(]/.test(r)));

              )
                l = l.prev
              a && ')' == l.type && 'stat' == l.prev.type && (l = l.prev)
              var d = l.type,
                h = s == d
              return 'vardef' == d
                ? l.indented +
                    ('operator' == t.lastType || ',' == t.lastType
                      ? l.info.length + 1
                      : 0)
                : 'form' == d && '{' == s
                  ? l.indented
                  : 'form' == d
                    ? l.indented + i
                    : 'stat' == d
                      ? l.indented +
                        ((function isContinuedStatement(e, t) {
                          return (
                            'operator' == e.lastType ||
                            ',' == e.lastType ||
                            p.test(t.charAt(0)) ||
                            /[,.]/.test(t.charAt(0))
                          )
                        })(t, r)
                          ? a || i
                          : 0)
                      : 'switch' != l.info || h || 0 == n.doubleIndentSwitch
                        ? l.align
                          ? l.column + (h ? 0 : 1)
                          : l.indented + (h ? 0 : i)
                        : l.indented +
                          (/^(?:case|default)\b/.test(r) ? i : 2 * i)
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: l ? null : '/*',
            blockCommentEnd: l ? null : '*/',
            blockCommentContinue: l ? null : ' * ',
            lineComment: l ? null : '//',
            fold: 'brace',
            closeBrackets: '()[]{}\'\'""``',
            helperType: l ? 'json' : 'javascript',
            jsonldMode: s,
            jsonMode: l,
            expressionAllowed: expressionAllowed,
            skipExpression: function(e) {
              var t = e.cc[e.cc.length - 1]
              ;(t != expression && t != expressionNoComma) || e.cc.pop()
            }
          }
        )
      }),
        e.registerHelper('wordChars', 'javascript', /[\w$]/),
        e.defineMIME('text/javascript', 'javascript'),
        e.defineMIME('text/ecmascript', 'javascript'),
        e.defineMIME('application/javascript', 'javascript'),
        e.defineMIME('application/x-javascript', 'javascript'),
        e.defineMIME('application/ecmascript', 'javascript'),
        e.defineMIME('application/json', {name: 'javascript', json: !0}),
        e.defineMIME('application/x-json', {name: 'javascript', json: !0}),
        e.defineMIME('application/ld+json', {name: 'javascript', jsonld: !0}),
        e.defineMIME('text/typescript', {name: 'javascript', typescript: !0}),
        e.defineMIME('application/typescript', {
          name: 'javascript',
          typescript: !0
        })
    })(n(834))
  },
  839: function(e, t, n) {
    var r = n(840)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = {hmr: !0, transform: void 0, insertInto: void 0}
    n(111)(r, o)
    r.locals && (e.exports = r.locals)
  },
  840: function(e, t, n) {
    ;(e.exports = n(69)(!1)).push([
      e.i,
      "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",
      ''
    ])
  },
  841: function(e, t, n) {
    var r = n(842)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = {hmr: !0, transform: void 0, insertInto: void 0}
    n(111)(r, o)
    r.locals && (e.exports = r.locals)
  },
  842: function(e, t, n) {
    ;(e.exports = n(69)(!1)).push([
      e.i,
      '/*\n\n    Name:       Base16 Default Light\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-light.CodeMirror { background: #f5f5f5; color: #202020; }\n.cm-s-base16-light div.CodeMirror-selected { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::selection, .cm-s-base16-light .CodeMirror-line > span::selection, .cm-s-base16-light .CodeMirror-line > span > span::selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::-moz-selection, .cm-s-base16-light .CodeMirror-line > span::-moz-selection, .cm-s-base16-light .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }\n.cm-s-base16-light .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-light .CodeMirror-guttermarker-subtle { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-linenumber { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-cursor { border-left: 1px solid #505050; }\n\n.cm-s-base16-light span.cm-comment { color: #8f5536; }\n.cm-s-base16-light span.cm-atom { color: #aa759f; }\n.cm-s-base16-light span.cm-number { color: #aa759f; }\n\n.cm-s-base16-light span.cm-property, .cm-s-base16-light span.cm-attribute { color: #90a959; }\n.cm-s-base16-light span.cm-keyword { color: #ac4142; }\n.cm-s-base16-light span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-light span.cm-variable { color: #90a959; }\n.cm-s-base16-light span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-light span.cm-def { color: #d28445; }\n.cm-s-base16-light span.cm-bracket { color: #202020; }\n.cm-s-base16-light span.cm-tag { color: #ac4142; }\n.cm-s-base16-light span.cm-link { color: #aa759f; }\n.cm-s-base16-light span.cm-error { background: #ac4142; color: #505050; }\n\n.cm-s-base16-light .CodeMirror-activeline-background { background: #DDDCDC; }\n.cm-s-base16-light .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
      ''
    ])
  }
})
