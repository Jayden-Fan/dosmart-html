var __dace = function() {
	var ms = 0,
	c = {
		channel: [[1, "www", "Web_CH_www"], [2, "nba", "Web_CH_nba"], [3, "soccer", "Web_CH_fb"], [4, "racing", "Web_CH_f1"], [5, "wan", "Web_CH_wan"], [6, "voice", "Web_CH_v"], [7, "zy", "Web_SNS_zy"], [8, "bbs", "Web_SNS_bbs"], [9, "my", "Web_SNS_bbs"], [10, "tu", "Web_SNS_tu"], [11, "v", "Web_MV_v"], [12, "photo", "Web_MV_pht"], [13, "g", "Web_MV_live"], [14, "zb", "Web_BIZ_zb"], [15, "shihuo", "Web_BIZ_sh"], [16, "run", "Web_CH_oths"], [17, "tennis", "Web_CH_oths"], [18, "taiqiu", "Web_CH_oths"], [19, "ymq", "Web_CH_oths"], [20, "nfl", "Web_CH_oths"], [21, "xgame", "Web_CH_oths"], [22, "youxi", "Web_EC_game"], [23, "sglj", "Web_EC_game"], [24, "gzq", "Web_EC_game"], [25, "bayu", "Web_EC_game"], [26, "zsg", "Web_EC_game"], [27, "wssg", "Web_EC_game"], [28, "jfzy", "Web_EC_game"], [29, "hjcs", "Web_EC_game"], [30, "sjsg", "Web_EC_game"], [31, "sglzz", "Web_EC_game"], [32, "lyhm", "Web_EC_game"], [33, "rxlq", "Web_EC_game"], [34, "dxz", "Web_EC_game"], [35, "tj", "Web_EC_game"], [36, "wxqmx", "Web_EC_game"], [37, "szlq", "Web_EC_game"], [38, "zqtx2", "Web_EC_game"], [39, "fswd", "Web_EC_game"], [40, "rxqq2", "Web_EC_game"], [41, "sgyy", "Web_EC_game"], [42, "rxhzw", "Web_EC_game"], [43, "mjcs", "Web_EC_game"], [44, "gjzq", "Web_EC_game"], [45, "ogzq", "Web_EC_game"], [46, "sg2", "Web_EC_game"], [47, "mhfx", "Web_EC_game"], [48, "shhx", "Web_EC_game"], [49, "lqcq", "Web_EC_game"], [50, "zwjs", "Web_EC_game"], [51, "qs", "Web_EC_game"], [52, "hzw", "Web_EC_game"], [53, "yqdx", "Web_EC_game"], [54, "tssg", "Web_EC_game"], [55, "yxwz", "Web_EC_game"], [56, "long", "Web_EC_game"], [57, "sxd", "Web_EC_game"], [58, "rxqq", "Web_EC_game"], [59, "sgs", "Web_EC_game"], [60, "hysj", "Web_EC_game"], [61, "sssg", "Web_EC_game"], [62, "gdzj", "Web_EC_game"], [63, "wly", "Web_EC_game"], [64, "sh", "Web_EC_game"], [65, "xjsj", "Web_EC_game"], [66, "wlzw", "Web_EC_game"], [67, "hhzw", "Web_EC_game"], [68, "haodan", "Web_EC_game"], [69, "mhlq", "Web_EC_game"], [70, "sjcq", "Web_EC_game"], [71, "xl", "Web_EC_game"], [72, "poker", "Web_EC_game"], [73, "fr2", "Web_EC_game"], [74, "sl11", "Web_EC_game"], [75, "fswd", "Web_EC_game"], [76, "gamely", "Web_EC_game"], [77, "dgl", "Web_EC_game"], [78, "qjlq", "Web_EC_game"], [79, "gamepay", "Web_EC_game"], [80, "caipiao", "Web_BIZ_cp"], [81, "voice_shihuo", "Web_BIZ_sh"], [82, "xd2", "Web_EC_game"], [83, "nslm", "Web_EC_game"], [84, "zc", "Web_EC_game"], [85, "jhfy", "Web_EC_game"], [86, "dgl", "Web_EC_game"], [87, "cba", "Web_CH_cba"], [88, "mma", "Web_CH_oths"], [89, "marketing", "Web_CH_pub"], [90, "mobile", "Web_CH_pub"], [91, "jjsg", "Web_EC_game"], [92, "ly", "Web_EC_game"], [93, "passport", "PF_FDT_pspt"], [94, "nikebbn", "Web_EC_mini"], [95, "carnival2013", "Web_EC_mini"], [96, "allstar2013", "Web_EC_mini"], [97, "dongguan", "Web_EC_mini"], [98, "wcba", "Web_EC_mini_wcba"], [99, "zhongjia", "Web_EC_mini"], [100, "nbl", "Web_EC_mini"], [101, "letv", "Web_MV_v"], [102, "datacaipiao", "Web_BIZ_cp"], [103, "trendcaipiao", "Web_BIZ_cp"], [104, "wy", "Web_EC_game"], [105, "tcym", "Web_EC_game"], [106, "mklq", "Web_EC_game"], [107, "qj", "Web_EC_game"], [108, "mzl", "Web_EC_game"], [109, "ttlq", "Web_EC_game"], [110, "zlmx", "Web_EC_game"], [111, "bx", "Web_EC_game"], [112, "xxd", "Web_EC_game"], [113, "hhzq", "Web_EC_game"], [114, "sjb", "Web_EC_game"], [115, "2014", "Web_CH_wcup"], [116, "ffzq", "Web_EC_game"], [117, "rx11", "Web_EC_game"], [118, "ftx2", "Web_EC_game"], [119, "milanglorie", "Web_EC_mini"], [120, "zqmzd", "Web_EC_game"], [121, "gjzl", "Web_EC_game"], [122, "stars", "Web_EC_mini"], [123, "fyws", "Web_EC_game"], [124, "edu", "Web_EC_edu"], [125, "socialmedia", "Web_EC_mini"], [126, "hz", "Web_CH_hz"], [127, "kanqiu", "Web_CH_pub"], [128, "1", "Web_EC_mini_tmac"], [129, "coach", "Web_EC_edu"], [130, "bssg", "Web_EC_game"], [131, "cbalq", "Web_EC_game"], [132, "gcld", "Web_EC_game"], [133, "kyzq", "Web_EC_game"], [134, "js2014", "Web_EC_game"], [135, "og2", "Web_EC_game"], [136, "txzq", "Web_EC_game"], [137, "aicai", "Web_BIZ_accp"], [138, "haoya2015", "Web_EC_mini_haoya"], [139, "kanqiu", "Web_CH_kq"], [140, "clear", "web_ec_mini_clear"], [141, "qmdgl", "Web_EC_game"], [142, "pingan", "web_ec_mini_pingan"], [143, "pctoyota", "web_ec_mini_toyota"], [144, "lspj", "web_ec_mini_lspj"], [145, "redbull", "web_ec_mini_redbull"], [146, "pac-12", "web_ec_mini_pac12"], [147, "manutd", "web_ec_mini_manutd"], [148, "du", "web_biz_du"], [149, "eshihuo", "web_biz_esh"], [150, "2016", "web_ch_aoyun"]]
	},
	version = "1.0.2647",
	daceVidCookieKey = "_dacevid",
	daceVidCookieKey2 = "_dacevid2",
	daceVidCookieKey3 = "_dacevid3",
	daceVisitCookieKey = "__dacevst",
	domain = ".hupu.com",
	pageLoadTime = 0,
	isSend = false,
	domainUrl = /^https/i.test(location.href) ? "https://ccdace.hupu.com": "http://cc.dace.hupu.com",
	engine = ["www.google.com.hk", "www.google.com", "www.baidu.com", "www.so.com", "www.sogou.com", "www.soso.com", "cn.bing.com", "glb.uc.cn", "so.360.cn", "www.youdao.com", "search.cn.yahoo.com", "www.jike.com", "pad.easou.com", "www.zhongsou.com", "image.baidu.com", "images.baidu.com", "m.baidu.com", "images.google.com", "images.google.com.hk", "m.sm.cn", "www.haosou.com"],
	__daceBacks = ["bk1", "bk2", "bk3"],
	queue = [],
	thisHost = window.location.host;
	var _userAgent = navigator.userAgent.toLowerCase();
	var browser = {
		version: (_userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
		chrome: /chrome/.test(_userAgent),
		safari: /webkit/.test(_userAgent),
		opera: /opera/.test(_userAgent),
		msie: /msie/.test(_userAgent) && !/opera/.test(_userAgent),
		mozilla: /mozilla/.test(_userAgent) && !/(compatible|webkit)/.test(_userAgent),
		mobile: /Mobile/i.test(_userAgent),
		ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(_userAgent),
		iphone: /iphone/i.test(_userAgent),
		ipad: /ipad/i.test(_userAgent),
		android: /android/i.test(_userAgent) || /Linux/i.test(_userAgent)
	};
	var dom = {
		getClass: function(c) {
			p = document;
			if (document.getElementsByClassName) {
				return p.getElementsByClassName(c)
			} else {
				var i = 0,
				results = [],
				nodes = p.getElementsByTagName("*"),
				l = nodes.length,
				pattern = new RegExp("(^|\\s)" + c + "(\\s|$)");
				for (; i > l; i++) pattern.test(nodes[i].className) && results.push(nodes[i]);
				return results
			}
		}
	};
	var CookieUtil = {
		getRaw: function(key) {
			if (CookieUtil._isValidKey(key)) {
				var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)"),
				result = reg.exec(document.cookie);
				if (result) {
					return result[2] || null
				}
			}
			return null
		},
		get: function(key) {
			var value = CookieUtil.getRaw(key);
			if ("string" == typeof value) {
				value = decodeURIComponent(value);
				return value
			}
			return null
		},
		setRaw: function(key, value, options) {
			if (!CookieUtil._isValidKey(key)) {
				return
			}
			options = options || {};
			var expires = options.expires;
			if ("number" == typeof options.expires) {
				expires = new Date;
				expires.setTime(expires.getTime() + options.expires)
			}
			document.cookie = key + "=" + value + (options.path ? "; path=" + options.path: "") + (expires ? "; expires=" + expires.toGMTString() : "") + (options.domain ? "; domain=" + options.domain: "") + (options.secure ? "; secure": "")
		},
		set: function(key, value, options) {
			CookieUtil.setRaw(key, encodeURIComponent(value), options)
		},
		remove: function(key, options) {
			options = options || {};
			options.expires = new Date(0);
			CookieUtil.setRaw(key, "", options)
		},
		_isValidKey: function(key) {
			return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(key)
		}
	};
	function He(a, b) {
		return a.onload = b
	}
	trim = function(source) {
		var trimer = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
		return source.replace(trimer, "")
	};
	var isUrl = function(value) {
		return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)
	};
	var S4 = function() {
		return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
	},
	newGuid = function() {
		return S4() + S4() + "." + S4() + "." + S4() + "." + S4() + "." + S4() + S4() + S4()
	};
	var getActionId = function() {
		return S4() + S4() + "." + S4() + S4()
	},
	actionId = getActionId();
	var unixTimestamp = function(type) {
		var d = new Date;
		return type == false ? d.getTime() : Math.round(d.getTime() / 1e3)
	},
	btime = unixTimestamp(false);
	var pd = function(a) {
		var b = [],
		c = document.cookie["split"](";");
		a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
		for (var d = 0; d < c["length"]; d++) {
			var e = c[d]["match"](a);
			e && b["push"](e[1])
		}
		return b
	};
	var saveVid3Cookie = function() {
		var date = new Date;
		var url = domainUrl + "/dacevid?callback=_DACE_GetVid&q=" + date.getTime() + Math.random() * 1e6;
		var script = document.createElement("script");
		script.setAttribute("src", url);
		document.getElementsByTagName("head")[0].appendChild(script)
	};
	window._DACE_GetVid = function(vid, newUser) {
		if (vid) {
			var patt = /hupu\.com/i;
			if (!patt.exec(thisHost)) {
				var pattern = /shihuo/i;
				if (pattern.exec(thisHost)) var domain = ".shihuo.cn";
				var pattern = /aicai/i;
				if (pattern.exec(thisHost)) var domain = ".aicai.com";
				CookieUtil.setRaw(daceVidCookieKey3, vid, {
					domain: domain,
					path: "/"
				})
			}
			var con = new init("a");
			if (newUser && con.getSiteId() != "Web_EC_game") {
				con.sendEvent("newUser")
			}
			if (queue) {
				for (var i = 0,
				l = queue.length; i < l; i++) {
					var uri = con.generateUrl(queue[i][0], queue[i][1], queue[i][2]);
					con.sendImage(uri);
					isSend = true
				}
			}
		}
	};
	var saveVisitsToCookie = function() {
		var vst = getActionId();
		var dacevst = CookieUtil.getRaw(daceVisitCookieKey);
		var d = new Date,
		millisec = d.getTime();
		d.setUTCMinutes(d.getUTCMinutes() + 30);
		var expires = d.getTime();
		if (dacevst) {
			if (expires <= millisec) {
				CookieUtil.remove(daceVisitCookieKey)
			} else {
				CookieUtil.remove(daceVisitCookieKey);
				vst = dacevst.split("|")[0]
			}
		}
		var pattern = /shihuo/i;
		if (pattern.exec(thisHost)) var domain = ".shihuo.cn";
		else if (/aicai/i.exec(thisHost)) var domain = ".aicai.com";
		else var domain = ".hupu.com";
		CookieUtil.setRaw(daceVisitCookieKey, vst + "|" + expires, {
			expires: 30 * 60 * 1e3,
			domain: domain,
			path: "/"
		});
		return vst
	};
	var delCookie = function() {
		var date = new Date(0);
		CookieUtil.remove("_daceid")
	};
	var pageLoadTimeFun = function() {
		var at = (new Date).getTime();
		var ms = at - btime;
		return ms
	};
	var hashCode = function(str) {
		var hash = 0;
		if (str.length == 0) return hash;
		for (i = 0; i < str.length; i++) {
			char = str.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash
		}
		return hash
	};
	var storage = {
		scrollYMax: 0,
		focusTime: btime,
		activeTime: 0,
		_getScrollYMax: function() {
			if (window.scrollY > this.scrollYMax) this.scrollYMax = document.documentElement.scrollTop || document.body.scrollTop
		}
	};
	var _win = window,
	_doc = document;
	var EventUtil = {
		ready: function(func) {
			var _readyList = [];
			_readyList.push(func);
			if (browser.msie) {
				EventUtil.removeHandler(_doc, "readystatechange", _DOMContentLoaded);
				EventUtil.addHandlerCompatibility(_doc, "readystatechange", _DOMContentLoaded)
			} else {
				EventUtil.addHandlerCompatibility(_win, "DOMContentLoaded", _DOMContentLoaded)
			}
			function _DOMContentLoaded() {
				if (browser.msie) {
					if (_doc.readyState === "complete" || _doc.readyState === "interactive") {
						EventUtil.removeHandler(_doc, "readystatechange", _DOMContentLoaded);
						_startReady()
					}
				} else {
					EventUtil.removeHandler(_win, "DOMContentLoaded", _DOMContentLoaded);
					_startReady()
				}
			}
			function _startReady() {
				for (var i = 0,
				len = _readyList.length; i < len; i++) {
					setTimeout(_readyList[i], 25)
				}
			}
		},
		addHandler: function(elem, type, handler) {
			var guid = 1;
			if (window.addEventListener) {
				elem.addEventListener(type, handler, false);
				return
			}
			if (!guid) handler.guid = guid++;
			if (!elem.events) elem.events = {};
			var handlers = elem.events[type];
			if (!handlers) {
				handlers = elem.events[type] = {};
				if (elem["on" + type]) {
					handlers[0] = elem["on" + type]
				}
			}
			handlers[handler.guid] = handler;
			elem["on" + type] = _handleEvent;
			function _handleEvent(event) {
				var event = event || window.event;
				var handles = this.events[event.type];
				for (var i in handles) {
					handles[i].call(this, event)
				}
			}
		},
		addHandlerCompatibility: function(target, type, func) {
			if (target.addEventListener) target.addEventListener(type, func, false);
			else if (target.attachEvent) target.attachEvent("on" + type, func);
			else target["on" + type] = func
		},
		getEvent: function(event) {
			return event ? event: window.event
		},
		getTarget: function(event) {
			return event.target || event.srcElement
		},
		removeHandler: function(element, type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false)
			} else if (element.detachEvent) {
				element.detachEvent("on" + type, handler)
			} else {
				element["on" + type] = null
			}
		},
		stopPropagation: function(event) {
			if (event.stopPropagation) {
				event.stopPropagation()
			} else {
				event.cancelBubble = true
			}
		}
	};
	var in_array = function(needle, haystack, argStrict) {
		var key = "",
		strict = !!argStrict;
		if (strict) {
			for (key in haystack) {
				if (haystack[key] === needle) {
					return true
				}
			}
		} else {
			for (key in haystack) {
				if (haystack[key] == needle) {
					return true
				}
			}
		}
		return false
	};
	var mkaUtil = {
		res: [0, 0, 0],
		keys: new Array,
		prepaste: false,
		isctrlv: false,
		mf: false,
		doFocus: function(e) {
			var e = e || window.event;
			var obj = e.target || e.srcElement;
			var t = obj.type || obj.getAttribute("type");
			if (t == "text" || t == "password") {
				mkaUtil.keys = new Array;
				mkaUtil.prepaste = mkaUtil.mf ? true: false;
				mkaUtil.isctrlv = false;
				mkaUtil.mf = false
			}
		},
		doKey: function(e) {
			var currKey = 0,
			e = e || window.event;
			currKey = e.keyCode || e.which || e.charCode;
			var keyName = String.fromCharCode(currKey);
			var obj = e.target || e.srcElement;
			var t = obj.type || obj.getAttribute("type");
			if (t == "text" || t == "password") {
				if (currKey) {
					mkaUtil.keys.push(keyName)
				}
				if (e.ctrlKey && currKey == 86) {
					mkaUtil.isctrlv = true;
					if (this.name == "username") {
						mkaUtil.res[0] = 1
					}
					if (this.name == "password") {
						mkaUtil.res[1] = 1
					}
					if (this.name == "password2") {
						mkaUtil.res[2] = 1
					}
				}
			}
		},
		doMouse: function(e) {
			var e = e || window.event;
			var obj = e.target || e.srcElement;
			var t = obj.type || obj.getAttribute("type");
			if (t == "text" || t == "password") {
				if (e.button == 2 && mkaUtil.keys.length == 0) {
					mkaUtil.prepaste = true
				}
				if (e.button == 2 && mkaUtil.keys.length != 0 && !this.value) {
					mkaUtil.mf = true
				}
				if (e.button == 2 && mkaUtil.keys.length == 0 && !this.value) {
					mkaUtil.mf = true
				}
			}
		},
		doPaste: function(e) {
			if (mkaUtil.prepaste && !mkaUtil.isctrlv) {
				if (this.name == "username") {
					mkaUtil.res[0] = 2
				}
				if (this.name == "password") {
					mkaUtil.res[1] = 2
				}
				if (this.name == "password2") {
					mkaUtil.res[2] = 2
				}
			}
		}
	};
	function mkListener() {
		var objs = document.getElementById("reg").getElementsByTagName("input");
		if (objs) {
			for (obj in objs) {
				objs[obj].onkeydown = mkaUtil.doKey;
				objs[obj].onmousedown = mkaUtil.doMouse;
				objs[obj].onpaste = mkaUtil.doPaste;
				objs[obj].onfocus = mkaUtil.doFocus
			}
		}
	}
	if (thisHost == "gamely.hupu.com" && window.location.href.search(/tuiguang/) !== -1) {
		mkListener()
	}
	function init(siteId) {
		var o = o || {};
		o.sendImage = function(uri) {
			var host = domainUrl + "/_dace.gif?";
			var d = new Image(1, 1);
			d.src = host + uri;
			He(d,
			function() {
				He(d, "")
			});
			o.sendCnzz()
		};
		o.getLgn = function() {
			var ua = document.cookie.match(new RegExp("(^| )ua=([^;]*)(;|$)"));
			var gm = document.getElementById("g_m");
			return ua && ua[2] ? gm ? gm.getAttribute("iuid") : 1 : 0
		};
		o.dplusPhoto = function() {
			if (thisHost == "photo.hupu.com" && dplus && dplus.define) {
				dplus.define("user",
				function(user) {
					var lgn = o.getLgn();
					if (lgn == 1) user.setId(hashCode(document.getElementById("g_m").getAttribute("iuid")));
					else user.setId(CookieUtil.getRaw(daceVidCookieKey3));
					user.login()
				});
				dplus.define("page",
				function(page) {
					page.init("2815e201bfe10o53c980", {})
				});
				var href = window.location.href;
				if ("http://" + thisHost + "/" == href) {
					dplus.define("page",
					function(page) {
						page.setType("鍥剧墖绔欓椤�");
						page.setCategory(["鍥剧墖"]);
						page.view()
					})
				} else if (/\w*.*\d*\.html/.test(href)) {
					dplus.define("page",
					function(page) {
						page.setType("姝ｆ枃椤�");
						page.setCategory(["鍥剧墖"]);
						page.view()
					})
				} else {
					dplus.define("page",
					function(page) {
						page.setType("瀛愰閬撻椤�");
						page.setCategory(["鍥剧墖"]);
						page.view()
					})
				}
			}
		};
		o.siteId = siteId;
		o.getSiteId = function() {
			var config = {},
			b = c.channel.length;
			for (var a = 0; a < b; a++) {
				config[c.channel[a][1]] = c.channel[a][2]
			}
			var domain = thisHost.split(".")[0];
			domain = o.getDefinitionSiteId(domain, "voice");
			return config[domain] == undefined ? "ukn": config[domain];
			console.log(config[domain])
		};
		o.getDefinitionSiteId = function(domain, str) {
			if (domain == str) {
				var uri = window.location.pathname;
				var reg = new RegExp("^/(shihuo)/?[a-zA-z0-9-.]*$"),
				result = reg.exec(uri);
				if (result) {
					domain = domain + "_" + result[1]
				}
				var reg = new RegExp("^/(aicai)/?[a-zA-z0-9-.]*$"),
				result = reg.exec(uri);
				if (result) {
					domain = domain + "_" + result[1]
				}
			}
			if (thisHost.indexOf("hupu.hz.letv.com") != -1) {
				domain = "letv"
			}
			if (thisHost.indexOf("e.shihuo.cn") != -1) {
				domain = "eshihuo"
			} else if (thisHost.indexOf("shihuo.cn") != -1) {
				domain = "shihuo"
			}
			if (thisHost.indexOf("aicai.com") != -1) {
				domain = "aicai"
			}
			var reg = new RegExp("^([a-zA-Z0-9_]+).caipiao.hupu.com");
			var result = reg.exec(thisHost);
			if (result) {
				domain = "caipiao"
			}
			return domain
		};
		o.theOneActId = function() {
			var actIdFromCookie = pd("_daceactid");
			if (actIdFromCookie.length > 0) {
				return actIdFromCookie
			} else {
				var actId = getActionId();
				CookieUtil.setRaw("_daceactid", actId, {
					expires: 60 * 60 * 24 * 365 * 1e3,
					domain: domain,
					path: "/"
				});
				return actId
			}
		};
		o.getKeyByCookie = function(k, fun) {
			var inCookie = CookieUtil.getRaw(k);
			return inCookie ? inCookie: fun()
		};
		o.getWindowInfo = function() {
			var a = {},
			b = window["navigator"],
			c = window.screen;
			a.crs = c ? c.width + "x" + c.height: "-";
			a.ccd = c ? c.colorDepth + "-bit": "-";
			a.cbl = (b && (b.language || b.browserLanguage) || "-")["toLowerCase"]();
			a.cjv = b && b.javaEnabled() ? 1 : 0;
			a.cck = b && b.cookieEnabled ? 1 : 0;
			var hasPlugin = function(name) {
				name = name.toLowerCase();
				for (var i = 0; i < navigator.plugins.length; i++) {
					if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
						return true
					}
				}
				return false
			},
			hasIEPlugin = function(name) {
				try {
					new ActiveXObject(name);
					return true
				} catch(ex) {
					return false
				}
			},
			hasFlash = function() {
				var result = hasPlugin("Flash");
				if (!result) {
					result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash")
				}
				return result
			};
			a.cfl = hasFlash() ? 1 : 0;
			a.v = version;
			return a
		};
		o.getReferer = function() {
			var a = a || {};
			var referrer = document.referrer;
			var rf_domain = referrer.replace(new RegExp("\r", "g"), "", referrer);
			rf_domain = rf_domain.replace(new RegExp("\n", "g"), "", rf_domain);
			if (!referrer) {} else if (rf_domain.indexOf("hupu.com") > 0 || rf_domain.indexOf("shihuo.cn") > 0 || rf_domain.indexOf("aicai.com") > 0 || rf_domain.indexOf("opahnet.com") > 0) {
				a.rtp = "il";
				a.rnm = "";
				a.rurl = referrer;
				a.rkw = ""
			} else {
				if (rf_domain) {
					function getUrlParams(paramsName) {
						var sUrl = document.referrer;
						var sReg = paramsName + "=([^&|/]*)";
						var re = new RegExp(sReg, "gi");
						re.exec(sUrl);
						var value = RegExp.$1;
						if (value) {
							return value
						}
						return ""
					}
					function parseKeywords(domain) {
						if (!domain) {
							return false
						}
						var searchTerms = "";
						if (domain.indexOf("baidu.com") >= 0) {
							var wd = getUrlParams("wd");
							var kw = getUrlParams("kw");
							var word = getUrlParams("word");
							var wap_w = getUrlParams("w");
							if (trim(wd)) {
								return wd
							} else if (trim(kw)) {
								return kw
							} else if (trim(word)) {
								return word
							} else if (trim(wap_w)) {
								return wap_w
							} else {
								return searchTerms
							}
						} else if (domain.indexOf("so.360.cn") >= 0 || domain.indexOf("pad.easou.com") >= 0 || domain.indexOf("jike.com") >= 0 || domain.indexOf("yahoo.com") >= 0 || domain.indexOf("youdao.com") >= 0 || domain.indexOf("bing.com") >= 0 || domain.indexOf("google") >= 0 || domain.indexOf("www.so.com") >= 0 || domain.indexOf("m.sm.cn") >= 0 || domain.indexOf("www.haosou.com") >= 0) {
							searchTerms = trim(getUrlParams("q"))
						} else if (domain.indexOf("sogou.com") >= 0) {
							searchTerms = trim(getUrlParams("query"))
						} else if (domain.indexOf("zhongsou.com") >= 0 || domain.indexOf("www.soso.com") >= 0) {
							searchTerms = trim(getUrlParams("w"))
						} else if (domain.indexOf("uc.cn") >= 0) {
							searchTerms = trim(getUrlParams("keyword"))
						}
						if (domain.indexOf("baidu.com") < 0 && !searchTerms) {
							return "ukn"
						}
						return searchTerms
					}
					for (var i = 0; i < engine.length; i++) {
						if (rf_domain == engine[i] || rf_domain.indexOf("google") >= 0) {
							var keywords = parseKeywords(rf_domain);
							a.rtp = "ol";
							a.rnm = "";
							a.rurl = rf_domain;
							if (rf_domain == "m.baidu.com") {
								a.rkw = "";
								a.mrkw = keywords
							} else {
								a.rkw = keywords;
								a.mrkw = keywords
							}
							break
						} else {
							a.rtp = "ol";
							a.rnm = "";
							a.rurl = rf_domain;
							a.rkw = ""
						}
					}
				}
			}
			return a
		};
		o.getBack = function() {
			return __daceBacks
		};
		o.generateUrl = function(action, click_xy, click_link) {
			var vid = CookieUtil.getRaw(daceVidCookieKey3);
			if (vid) {
				return this._generateUrl(action, click_xy, click_link)
			} else {
				if (action == "l") return this._generateUrl(action, click_xy, click_link);
				queue.push([action, click_xy, click_link]);
				return false
			}
		};
		o._generateUrl = function(action, click_xy, click_link) {
			var a = {};
			if (action == "i") {
				a.vid = CookieUtil.getRaw(daceVidCookieKey3);
				window._dace_Vid = a.vid
			} else {
				a.vid = _dace_Vid
			}
			a.sid = o.getSiteId();
			a.aid = actionId ? actionId: getActionId();
			a.vst = saveVisitsToCookie();
			a.lgn = o.getLgn();
			a.act = action ? action: "i";
			a.cxy = click_xy ? click_xy: "";
			a.clk = click_link ? click_link: "";
			if (a.act == "l") {
				if (pageLoadTime) {
					a.plt = pageLoadTime
				} else {
					a.plt = 0 - pageLoadTimeFun()
				}
				a.dur = storage.activeTime;
				a.prd = storage.scrollYMax
			} else {
				a.plt = 0
			}
			a.url = window.location.href;
			var uriArray = [];
			for (var p in a) {
				uriArray.push(p + "=" + encodeURIComponent(a[p]))
			}
			var winInfo = o.getWindowInfo();
			for (var i in winInfo) {
				uriArray.push(i + "=" + winInfo[i])
			}
			var host = thisHost;
			var referrer = o.getReferer();
			if (typeof referrer == "object") {
				if (host === "hz.hupu.com" && window.top != window.self) {
					if (window.document.referrer) {
						uriArray.push("rtp=ol");
						uriArray.push("rurl=" + encodeURIComponent(window.document.referrer))
					}
				} else {
					for (var r in referrer) {
						var $r = referrer[r].replace(new RegExp("\r", "g"), "", referrer[r]);
						$r = $r.replace(new RegExp("\n", "g"), "", $r);
						uriArray.push(r + "=" + (r != "rkw" ? encodeURIComponent($r) : $r))
					}
				}
			} else {
				uriArray.push("rtp=");
				uriArray.push("rnm=");
				uriArray.push("rurl=");
				uriArray.push("rkw=")
			}
			var href = window.location.href;
			var back = o.getBack();
			if (back instanceof Array && back.length > 0) {
				for (var i = 0,
				len = back.length; i < len; i++) {
					if (back[i] == "bk1" && host == "gamely.hupu.com") {
						uriArray.push(back[i] + "=" + pd("wg_qq_login"))
					} else if (back[i] == "bk2" && host == "nba.hupu.com") {
						uriArray.push(back[i] + "=" + pd("daceSkin"))
					} else if (back[i] == "bk3" && host == "gamely.hupu.com" && href.search(/tuiguang/) !== -1 && a.act == "l") {
						if (document.getElementById("username").value && document.getElementById("password").value && document.getElementById("password2").value) {
							var res = mkaUtil.res;
							var result = res.join()
						} else {
							var result = ""
						}
						uriArray.push(back[i] + "=" + result)
					} else if (back[i] == "bk3" && host == "gamepay.hupu.com") {
						uriArray.push(back[i] + "=" + pd("wgpay_isdef"))
					} else if (back[i] == "bk1" && href == "http://zb.hupu.com/") {
						uriArray.push(back[i] + "=" + pd("zb_center_2013121013"))
					} else if (back[i] == "bk1" && href == "http://soccer.hupu.com/") {
						uriArray.push(back[i] + "=" + pd("soccer_index_2013121315"))
					} else {
						uriArray.push(back[i] + "=" + "")
					}
				}
			}
			if (host === "bbs.hupu.com") {
				var type__daceDataNameOfForum = typeof __daceDataNameOfForum;
				if (type__daceDataNameOfForum != "undefined") {
					uriArray.push("bbs=" + __daceDataNameOfForum)
				} else {
					uriArray.push("bbs=" + "")
				}
			}
			uriArray.push("tru=" + pd("wg_trial_user"));
			var type__daceDateNameOfChannel = typeof __daceDataNameOfChannel;
			if (type__daceDateNameOfChannel != "undefined") {
				uriArray.push("chv=" + __daceDataNameOfChannel)
			} else {
				uriArray.push("chv=" + "")
			}
			var uri = uriArray.join("&");
			return uri
		};
		o.requestFun = function() {
			pd("_daceid").length > 0 ? delCookie() : "";
			var uri = o.generateUrl("i", "", "");
			if (uri) o.sendImage(uri);
			isSend = true
		};
		o.clickRequestFun = function() {
			EventUtil.ready(function() {
				var list = document.body,
				target = null;
				EventUtil.addHandlerCompatibility(list, "mousedown",
				function(event) {
					var e = EventUtil.getEvent(event);
					var target = EventUtil.getTarget(e);
					var nodeName = target.nodeName.toLowerCase();
					while ("a" != nodeName && "body" != nodeName) {
						target = target.parentElement;
						if (!target) {
							break
						}
						nodeName = target.nodeName.toLowerCase()
					}
					if (target != undefined && target) {
						var a = target.nodeName.toLowerCase();
						var link = target.href;
						var flag = /^javascript:/i.test(link);
						dace_clk_attr = "";
						if (flag) var dace_clk_attr = target.getAttribute("dace_clk");
						var link = dace_clk_attr ? dace_clk_attr: link;
						if (a === "a" && link != undefined && link != "") {
							var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
							var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
							var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
							if (dom.getClass("hp-topbarNav-bd")[0]) {
								var contentWidth = dom.getClass("hp-topbarNav-bd")[0].offsetWidth;
								var padWidth = clientWidth - contentWidth >= 0 ? clientWidth - contentWidth: 0;
								var x = e.pageX || e.clientX + scrollX;
								var y = e.pageY || e.clientY + scrollY;
								x = x - Math.round(padWidth / 2)
							} else {
								var x = e.pageX || e.clientX + scrollX;
								var y = e.pageY || e.clientY + scrollY
							}
							var xy = x + "," + y;
							var uri = o.generateUrl("c", xy, link);
							if (uri) o.sendImage(uri);
							o.dplusPhoto()
						}
					}
				})
			})
		},
		o.fcc = 0;
		o.firstClickRequestFun = function(event) {
			var xy = event.clientX + "," + event.clientY;
			var href = window.location.href;
			if (thisHost == "gamely.hupu.com" && href.search(/tuiguang/) !== -1) {
				if (o.fcc < 1) {
					var uri = o.generateUrl("fc", xy, "");
					if (uri) o.sendImage(uri)
				}
				o.fcc++
			}
		},
		o.secondClickRequestFun = function(event) {
			var xy = event.clientX + "," + event.clientY;
			var href = window.location.href;
			if (thisHost == "gamely.hupu.com" && href.search(/tuiguang/) !== -1) {
				var uri = o.generateUrl("sc", xy, "");
				if (uri) o.sendImage(uri)
			}
		},
		o.leaveRequestFun = function() {
			var ev = browser.msie ? "beforeunload": "unload";
			EventUtil.addHandlerCompatibility(window, ev,
			function() {
				storage.activeTime = storage.activeTime + ((new Date).getTime() - storage.focusTime);
				var uri = o.generateUrl("l", "", "");
				if (uri) o.sendImage(uri);
				if (!isSend) {
					o.requestFun()
				}
				o.dplusPhoto()
			})
		},
		o.sendEvent = function(eid, body) {
			if (eid) {
				var vid = CookieUtil.getRaw(daceVidCookieKey3);
				var aid = actionId ? actionId: getActionId();
				var vst = saveVisitsToCookie();
				var lgn = o.getLgn();
				var date = new Date;
				if (body === undefined) {
					body = ""
				}
				var uri = "et=rd_e_custom&eid=" + eid + "&vid=" + vid + "&aid=" + aid + "&lgn=" + lgn + "&vst=" + vst + "&body=" + body + "&kcache=" + date.getTime() + Math.random() * 1e6;
				o.sendImage(uri)
			} else {
				return false
			}
			o.sendCnzz()
		},
		o.getScrollY = function() {
			EventUtil.addHandlerCompatibility(window, "scroll",
			function() {
				storage._getScrollYMax()
			})
		},
		o.getBlur = function() {
			EventUtil.addHandlerCompatibility(window, "blur",
			function() {
				storage.activeTime = storage.activeTime + ((new Date).getTime() - storage.focusTime)
			})
		},
		o.getFocus = function() {
			EventUtil.addHandlerCompatibility(window, "focus",
			function() {
				storage.focusTime = (new Date).getTime()
			})
		},
		o.sendCnzz = function() {
			CookieUtil.set("_cnzz_CV30020080", "buzi_cookie|" + CookieUtil.getRaw(daceVidCookieKey3) + "|-1")
		},
		o.dplus = function() { !
			function(a, b) {
				if (!b.__SV) {
					var c, d, e, f;
					window.dplus = b,
					b._i = [],
					b.init = function(a, c, d) {
						function g(a, b) {
							var c = b.split(".");
							2 == c.length && (a = a[c[0]], b = c[1]),
							a[b] = function() {
								a.push([b].concat(Array.prototype.slice.call(arguments, 0)))
							}
						}
						var h = b;
						for ("undefined" != typeof d ? h = b[d] = [] : d = "dplus", h.people = h.people || [], h.toString = function(a) {
							var b = "dplus";
							return "dplus" !== d && (b += "." + d),
							a || (b += " (stub)"),
							b
						},
						h.people.toString = function() {
							return h.toString(1) + ".people (stub)"
						},
						e = "disable track track_links track_forms register unregister get_property identify clear set_config get_config get_distinct_id track_pageview register_once track_with_tag time_event people.set people.unset people.delete_user".split(" "), f = 0; f < e.length; f++) g(h, e[f]);
						b._i.push([a, c, d])
					},
					b.__SV = 1.1,
					c = a.createElement("script"),
					c.type = "text/javascript",
					c.charset = "utf-8",
					c.async = !0,
					c.src = "//w.cnzz.com/dplus.php?token=2815e201bfe10o53c980",
					d = a.getElementsByTagName("script")[0],
					d.parentNode.insertBefore(c, d)
				}
			} (document, window.dplus || []),
			dplus.init("2815e201bfe10o53c980");
			var url = "//w.cnzz.com/dplus.define.php";
			var js = document.createElement("script");
			js.setAttribute("src", url);
			document.getElementsByTagName("head")[0].appendChild(js)
		};
		return o
	}
	var $ = function() {
		var o = o || {};
		if (!CookieUtil.getRaw(daceVidCookieKey3)) {
			saveVid3Cookie()
		}
		o.getTracker = function(a) {
			var i = new init(a);
			EventUtil.addHandlerCompatibility(window, "load",
			function() {
				pageLoadTime = pageLoadTimeFun()
			});
			if (!window.__daceIfSendRecord) {
				i.requestFun();
				i.clickRequestFun();
				i.getScrollY();
				i.getBlur();
				i.getFocus();
				i.leaveRequestFun()
			}
			if (window.location.hostname == "photo.hupu.com") {
				i.dplus()
			}
			return i
		};
		return o
	};
	var _dace = new $;
	return _dace.getTracker(1)
} (window);