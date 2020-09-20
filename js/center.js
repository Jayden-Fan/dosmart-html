$(function() {
	$("#table_list_two").length > 0 ? table_list.init() : table_list_two.init(),
	$(".play_rule").length > 0 && team_rank.init(),
	voteTeam.init(),
	table_list_live.init(),
	font_Interval.init(),
	team_home.init(),
	postfix.init(),
	setTimeout(function() {
		players_home.init()
	},
	500)
});
var host = "https://" + window.location.host,
table_list = {
	num: 0,
	pages: 0,
	preOffset: 0,
	nextOffset: 0,
	init: function() {
		var t = $(".table_list_c").find("ul"),
		e = t.find("li").length * t.find("li").eq(0).outerWidth();
		t.css({
			width: e
		}),
		t.find("li").hover(function() {
			$(this).css({
				backgroundColor: "#fff"
			})
		},
		function() {
			$(this).removeAttr("style")
		}),
		this.left = 7 * t.find("li").eq(0).outerWidth(),
		this.bindFun()
	},
	bindFun: function() {
		{
			var t, e = $(".table_list_c").find("ul"),
			i = this,
			n = $(".table_list").find(".table_list_l"),
			o = $(".table_list").find(".table_list_r2");
			n.attr("date")
		}
		n.hover(function() {
			$(this).removeClass().addClass("table_list_l2")
		},
		function() {
			$(this).removeClass().addClass("table_list_l")
		}),
		o.hover(function() {
			$(this).removeClass().addClass("table_list_r")
		},
		function() {
			$(this).removeClass().addClass("table_list_r2")
		}),
		n.click(function() {
			if (t) return ! 1;
			if (i.pages--, i.num > 0) {
				var n = --i.num * -i.left;
				e.stop().animate({
					left: n
				},
				"slow")
			} else t = !0,
			$.ajax({
				type: "GET",
				url: host + "/schedule/count/" + $(this).attr("date"),
				data: {
					offset: --i.preOffset
				},
				success: function(n) {
					var o = "",
					s = "";
					for (key in n.data) o = ["<li><a href='" + n.data[key].link + "'>", "<p>" + n.data[key].week + "</p>", "<div class='team'>", "<span class='name'>" + key.substring(5) + "</span>", "</div>", "<div class='team2 border'>", "<span class='name'>" + n.data[key].count + "鍦烘瘮璧�</span>", "</div>", "</a></li>"].join(""),
					s += o;
					i.num = 0,
					e.prepend(s),
					e.css({
						width: e.find("li").length * e.find("li").eq(0).outerWidth(),
						left: -i.left
					}),
					e.stop().animate({
						left: 0
					},
					"slow"),
					t = !1
				}
			})
		}),
		o.click(function() {
			if (t) return ! 1;
			if (i.pages++, i.listnum = parseInt(e.find("li").length / 7) + (e.find("li").length % 7 > 0 ? 1 : 0), i.num < i.listnum - 1) {
				var n = ++i.num * -i.left;
				e.stop().animate({
					left: n
				},
				"slow")
			} else t = !0,
			$.ajax({
				type: "GET",
				url: host + "/schedule/count/" + $(this).attr("date"),
				data: {
					offset: ++i.nextOffset
				},
				success: function(n) {
					var o = ++i.num * -i.left,
					s = "",
					a = "";
					for (key in n.data) s = ["<li><a href='" + n.data[key].link + "'>", "<p>" + n.data[key].week + "</p>", "<div class='team'>", "<span class='name'>" + key.substring(5) + "</span>", "</div>", "<div class='team2 border'>", "<span class='name'>" + n.data[key].count + "鍦烘瘮璧�</span>", "</div>", "</a></li>"].join(""),
					a += s;
					e.append(a),
					e.css({
						width: e.find("li").length * e.find("li").eq(0).outerWidth()
					}),
					e.stop(!0).animate({
						left: o
					},
					800),
					t = !1
				}
			})
		})
	}
},
table_list_two = {
	num: 0,
	init: function() {
		var t = $(".table_list_c").find("ul"),
		e = t.find("li").length * t.find("li").eq(0).outerWidth();
		t.css({
			width: e
		}),
		t.find("li").hover(function() {
			$(this).css({
				backgroundColor: "#fff"
			})
		},
		function() {
			$(this).removeAttr("style")
		}),
		this.listnum = parseInt(t.find("li").length / 7) + (t.find("li").length % 7 > 0 ? 1 : 0),
		this.left = 7 * t.find("li").eq(0).outerWidth(),
		this.bindFun()
	},
	bindFun: function() {
		var t = $(".table_list_c").find("ul"),
		e = this,
		i = $(".table_list").find(".table_list_l"),
		n = $(".table_list").find(".table_list_r2");
		i.hover(function() {
			$(this).removeClass().addClass("table_list_l2")
		},
		function() {
			$(this).removeClass().addClass("table_list_l")
		}),
		n.hover(function() {
			$(this).removeClass().addClass("table_list_r")
		},
		function() {
			$(this).removeClass().addClass("table_list_r2")
		}),
		i.click(function() {
			e.num > 0 ? e.num--:"";
			var i = -e.left * e.num;
			t.stop().animate({
				left: i
			},
			"slow")
		}),
		n.click(function() {
			e.num < e.listnum - 1 ? e.num++:"";
			var i = -e.left * e.num;
			t.stop().animate({
				left: i
			},
			"slow")
		})
	}
},
gameCentervote = {
	init: function() {
		var t = $(".yuece_num_a"),
		e = t.find("#num_1").html();
		this.widthObj = t.find(".bg_repert_b"),
		this.widthObj.css("100%" == e ? {
			width: e,
			borderRadius: "5px"
		}: {
			width: e,
			borderRadius: "5px 0 0 5px"
		}),
		this.bindFun()
	},
	bindFun: function() {
		var t = $(".yuece_num_a"),
		e = this,
		i = $.cookie("ua"),
		n = t.attr("matchid");
		t.find(".a").click(function() {
			1 * i != 0 ? e.getJson($(this), [i, n, 1]) : $(this).tips("璇峰厛鐧诲綍")
		}),
		t.find(".c").click(function() {
			1 * i != 0 ? e.getJson($(this), [i, n, 2]) : $(this).tips("璇峰厛鐧诲綍")
		})
	},
	getJson: function(t, e) {
		var i = this,
		n = {
			gid: e[1],
			predict: t.attr("id"),
			type: 1
		};
		$.getJSON("http://m.hupu.com/predict/add?callback=?", n,
		function(n) {
			switch (1 * n.code) {
			case 200:
				i.widthObj.css(1 * n.data.width == "100" ? {
					width: n.data.width + "%",
					borderRadius: "5px"
				}: {
					width: n.data.width + "%",
					borderRadius: "5px 0 0 5px"
				});
				var o = 100 - 1 * n.data.width,
				s = new Number(Math.round(100 * o) / 100).toFixed(2) + "%";
				$(".yuece_num_a").find("#num_1").html(n.data.width + "%"),
				$(".yuece_num_a").find("#num_2").html(s),
				$(".yuece_num_a").find(".num_pop").html(1 * n.data.awayVote + 1 * n.data.homeVote),
				t.tips("棰勬祴鎴愬姛"),
				$(".play_rule .content").find("p").eq(0).show().html("鎮ㄦ湰鍦洪娴�:" + (1 * e[2] == 1 ? homeTeamName: awayTeamName) + "鑳�"),
				$(".play_rule .content").find(".bai").eq(0).html(n.data.width + "%"),
				$(".play_rule .content").find(".bai").eq(1).html(s);
				break;
			case 400:
				t.tips("宸茬粡棰勬祴");
				break;
			case 401:
				t.tips("鍙傛暟閿欒");
				break;
			case 402:
				t.tips("璇峰厛鐧诲綍");
				break;
			default:
				t.tips("鍙傛暟閿欒")
			}
		})
	}
},
voteTeam = {
	init: function() {
		this.num1 = $(".team_vs_good").find(".team_a").find("b"),
		this.num2 = $(".team_vs_good").find(".team_b").find("b"),
		$(".team_vs_good").find(".d").css({
			width: this.getPercent(this.num1.html(), this.num2.html())
		}),
		this.bindFun(),
		("undefined" != typeof is_boxscore || "undefined" != typeof is_playbyplay) && this.replaceDom()
	},
	bindFun: function() {
		var t = this,
		e = $(".team_vs_good");
		teamId = e.attr("matchid"),
		tips_layes = $(".tips_layes"),
		e.delegate(".a", "click",
		function() {
			t.getJson([teamId, "home"], e)
		}),
		e.delegate(".c", "click",
		function() {
			t.getJson([teamId, "away"], e)
		}),
		tips_layes.live("mouseover",
		function() {
			$(this).find(".tips_tems").show(),
			$(this).css({
				color: "#000"
			})
		}),
		tips_layes.live("mouseout",
		function() {
			$(this).find(".tips_tems").hide(),
			$(this).css({
				color: "#999"
			})
		})
	},
	getJson: function(t, e) {
		$.getJSON(host + "/node/team/vote/" + t[0] + "/" + t[1],
		function(t) {
			e.find(".b").find(".d").css({
				width: t.width
			}),
			e.find(".team_a").find("p b").html(t.home_vote),
			e.find(".team_b").find("p b").html(t.away_vote)
		})
	},
	replaceDom: function() {
		function t(t) {
			e.t = setInterval(function() {
				$.getJSON(host + "/nba/homepage/getMatchBasicInfo?matchId=" + matchId,
				function(t) {
					switch (1 * t.status) {
					case 200:
						$(".team_vs").remove(),
						$(".yuece_num").remove(),
						$(".top_bg").after(t.html);
						break;
					case 500:
						return ! 1;
					case 600:
						clearInterval(e.t)
					}
				}),
				"on" == t && $.getJSON(host + "/nba/boxscore/ajaxGetTeamStats?matchId=" + matchId,
				function(t) {
					switch (1 * t.status) {
					case 200:
						$(".table_list_live").remove(),
						$(".box_a").eq(0).after(t.html);
						break;
					case 500:
						return ! 1;
					case 600:
					}
				})
			},
			9e3)
		}
		var e = this;
		"undefined" != typeof is_playbyplay && is_live && t(),
		"undefined" != typeof is_boxscore && is_live && t("on")
	},
	getPercent: function(t, e) {
		var t = parseFloat(t),
		e = parseFloat(e),
		i = t + e;
		return isNaN(t) || isNaN(i) ? "-": Math.round(t / i * 1e4) / 100 + "%"
	}
},
team_rank = {
	init: function() {
		var t = $(".gamecenter_content_r .play_rule .content"),
		e = $.cookie("ua"),
		i = $(".next_game_play");
		1 * e != 0 && $.getJSON("http://m.hupu.com/predict/getuserpredictinfo?callback=?", {
			matchId: matchId
		},
		function(e) {
			if (200 == e.status) {
				t.find(".bai").eq(0).text(e.data.hometeamper + "%"),
				t.find(".bai").eq(1).text(e.data.awayteamper + "%");
				var i = $(".yuece_num .yuece_num_a .b");
				i.find(".num_pop").text(e.data.total),
				i.find("#num_1").text(e.data.hometeamper + "%"),
				i.find("#num_2").text(e.data.awayteamper + "%"),
				t.find(".yuce").html('<span class="a">鎮ㄧ殑棰勬祴鎴樼哗锛�' + e.data.winNum + "/" + e.data.allNum + "</span> 鍑嗙‘鐜囷細" + e.data.width + "%"),
				"" != e.data.predictName && t.find("p").eq(0).show().html("鎮ㄦ湰鍦洪娴�:" + (1 * e.data.predictName == 1 ? homeTeamName: awayTeamName) + "鑳�"),
				gameCentervote.init()
			}
		}),
		i.find("p").hover(function() {
			$(this).addClass("bgimg")
		},
		function() {
			$(this).removeClass("bgimg")
		})
	}
},
postfix = {
	init: function() {
		this.po = $(".table_list"),
		this.po.length > 0 && (this.top = this.po.offset().top, this.bindFun())
	},
	bindFun: function() {
		var t = this,
		e = $(".bgs_png");
		e.css({
			width: t._getpageSize()[0]
		}),
		$(document).height() > 1300 && $(window).scroll(function() {
			t.getpageScroll() > t.top ? (t.po.addClass("postfix"), e.show()) : (t.po.removeClass("postfix"), e.hide())
		})
	},
	getpageScroll: function() {
		var t;
		return self.pageYOffset ? t = self.pageYOffset: document.documentElement && document.documentElement.scrollTop ? t = document.documentElement.scrollTop: document.body && (t = document.body.scrollTop),
		t
	},
	_getpageSize: function() {
		var t, e = document.documentElement,
		i = window.innerWidth || self.innerWidth || e && e.clientWidth || document.body.clientWidth,
		n = window.innerHeight || self.innerHeight || e && e.clientHeight || document.body.clientHeight;
		return t = [i, n]
	}
},
team_table = {
	num: 0,
	init: function() {
		var t = $(".post_click_a"),
		e = $(".post_click_b");
		t.css({
			opacity: .5
		}),
		e.css({
			opacity: .5
		}),
		this.bindFun(),
		this.video()
	},
	bindFun: function() {
		var t = this,
		e = $("#table_post"),
		i = $("#table_post2"),
		n = $(".post_click_a"),
		o = $(".post_click_b"),
		s = i.find(".x_title").find("span"),
		a = $(".team_list_data .jiben_title_table");
		return this.listnum = parseInt(s.length / 5) + (s.length % 5 > 0 ? 1 : 0),
		this.listnum <= 1 ? !1 : (this.left = 5 * s.eq(0).outerWidth(), i.css({
			width: this.left * this.listnum + 100
		}), n.hover(function() {
			$(this).css({
				opacity: 1
			})
		},
		function() {
			$(this).css({
				opacity: .5
			})
		}), o.hover(function() {
			$(this).css({
				opacity: 1
			})
		},
		function() {
			$(this).css({
				opacity: .5
			})
		}), $(".team_list_data").find(".jiben_title").find("span").click(function() {
			$(this).addClass("on"),
			$(this).siblings().removeClass("on"),
			"more" == $(this).attr("att") ? (o.show(), e.hide(), i.show(), a.find(".c").show()) : (n.css({
				opacity: .5
			}).hide(), o.css({
				opacity: .5
			}).hide(), t.num = 0, i.css({
				left: 0
			}), a.find(".c").hide(), e.show(), i.hide())
		}), n.css({
			top: parseInt(a.outerHeight() / 2) - 24
		}).click(function() {
			t.num > 0 ? t.num--:"";
			var e = -t.left * t.num;
			i.stop().animate({
				left: e
			},
			"slow"),
			0 == t.num && $(this).hide(),
			(0 == t.num || t.num < t.listnum - 1) && o.show()
		}), o.css({
			top: parseInt(a.outerHeight() / 2) - 24
		}).click(function() {
			t.num < t.listnum - 1 ? t.num++:"";
			var e = -t.left * t.num;
			i.stop().animate({
				left: e
			},
			"slow"),
			t.num > 0 && n.show(),
			t.num == t.listnum - 1 && $(this).hide()
		}), void $(".team_list_data").find(".jiben_title").find("span").eq(1).click())
	},
	video: function() {
		var t = $(".gamecenter_content_r").find(".video_box").find("li");
		t.hover(function() {
			$(this).css({
				backgroundColor: "#f2f2f2"
			})
		},
		function() {
			$(this).css({
				backgroundColor: "#fff"
			})
		})
	}
},
table_list_live = {
	init: function() {
		this.bindFun()
	},
	bindFun: function() {
		var t = $(".table_list_live").find("table");
		t.delegate("tr", "mousemove",
		function() {
			$(this).css({
				backgroundColor: "#FBFBFB"
			})
		}),
		t.delegate("tr", "mouseout",
		function() {
			$(this).hasClass("bg_a") || $(this).hasClass("pause") || $(this).css({
				backgroundColor: "#ffffff"
			})
		})
	}
},
font_Interval = {
	init: function() {
		this.obj = $(".table_overflow").find("table"),
		"in" == this.obj.attr("matchstatus") && this.getAjax()
	},
	getAjax: function() {
		function t(a, l) {
			n.set = setInterval(function() {
				e = n.obj.find("tr").eq(0).attr("sid"),
				i = n.obj.find("tr").length,
				$.ajax({
					type: "GET",
					url: host + "/node/playbyplay/matchLives",
					data: l ? l: "sid=" + e + "&s_count=" + i + "&match_id=" + o + "&homeTeamName=" + encodeURIComponent(homeTeamName) + "&awayTeamName=" + encodeURIComponent(awayTeamName),
					success: function(e) {
						return "over" == e ? (clearInterval(n.set), !1) : (l && (clearInterval(n.set), n.obj.find("tbody").html(""), t(s)), void n.obj.find("tbody").prepend(e))
					}
				})
			},
			a)
		}
		var e, i, n = this,
		o = n.obj.attr("matchid"),
		s = 3e3;
		t(s),
		setInterval(function() {
			clearInterval(n.set),
			t(s, "sid=0&s_count=0&match_id=" + o + "&homeTeamName=" + encodeURIComponent(homeTeamName) + "&awayTeamName=" + encodeURIComponent(awayTeamName))
		},
		7e4)
	}
},
team_home = {
	init: function() {
		var t = $(".region_box"),
		e = $(".region_box").find(".tiltle").attr("conference");
		show = $(".itinerary_table_show"),
		"E" == e ? (t.find(".tiltle").find("span").eq(0).css({
			backgroundColor: "#FBFBFB",
			color: "#444444"
		}), t.find(".tiltle").find("span").eq(1).css({
			backgroundColor: "#F2F2F2",
			color: "#999999"
		}), show.hide(), show.eq(0).show()) : (t.find(".tiltle").find("span").eq(1).css({
			backgroundColor: "#FBFBFB",
			color: "#444444"
		}), t.find(".tiltle").find("span").eq(0).css({
			backgroundColor: "#F2F2F2",
			color: "#999999"
		}), show.hide(), show.eq(1).show()),
		t && t.find(".tiltle").find("span").click(function() {
			$(this).css({
				backgroundColor: "#FBFBFB",
				color: "#444444"
			}),
			$(this).siblings().css({
				backgroundColor: "#F2F2F2",
				color: "#999999"
			}),
			show.hide(),
			show.eq($(this).index()).show()
		})
	}
},
teamList = {
	init: function() {
		this.bindFun()
	},
	bindFun: function() {
		var t = $(".teamlist_box_r").find(".team").find(".box"),
		e = $(".teamlist_box_r").find(".all").find(".a span");
		t.hover(function() {
			$(this).addClass("on"),
			$(this).parents(".team").prev().find("span").addClass("on")
		},
		function() {
			e.removeClass("on"),
			t.removeClass("on")
		})
	}
},
playersList = {
	init: function() {
		this.bindFun()
	},
	bindFun: function() {
		var t = $(".players_list").find("li");
		t.click(function() {
			window.location = $(this).find("a").attr("href")
		})
	}
},
players_home = {
	tables: !1,
	atm: 0,
	atr: 0,
	init: function() {
		$(".table_chick").length > 0 && (this.tbchoose(), this.bindFun())
	},
	tbchoose: function() {
		var t = ($("#in_box"), $(".clickchoose")),
		e = $(".shengyasai"),
		i = $(".J_p_l");
		t.click(function() {
			t.addClass("title_border2"),
			t.find(".title_font").addClass("title_font2"),
			$(this).removeClass("title_border2"),
			$(this).find(".title_font").removeClass("title_font2"),
			e.hide(),
			e.eq($(this).attr("atm")).show(),
			e.eq($(this).attr("atm")).find(".team_qushi").find(".on").click(),
			i.hide(),
			i.eq($(this).attr("atm")).show(),
			players_home.atm = $(this).attr("atm")
		});
		var n = $(".Js_click_c"),
		o = $(".Js-show-table"),
		s = $(".Js_show_line"),
		a = $(".Js_playe_table");
		n.click(function() {
			n.addClass("title_border2"),
			n.find(".title_font").addClass("title_font2"),
			$(this).removeClass("title_border2"),
			$(this).find(".title_font").removeClass("title_font2"),
			1 * $(this).attr("atr") == 0 ? (o.hide(), o.eq(0).show(), s.hide(), s.eq(0).show()) : (o.hide(), o.eq(1).show(), s.hide(), s.eq(1).show()),
			a.is(":hidden") || (a.find(".loding_more").show(), a.find(".loding_more").find(".list_a").show(), a.find(".loding_more").find(".list_b").hide(), a.find(".loding_more").attr("click", "false"), 1 * $(".all_tables_check").height() < 450 ? (a.height("auto"), a.find(".loding_more").hide()) : a.height(485)),
			players_home.atr = $(this).attr("atr")
		}),
		n.eq(0).click(),
		"2" == GM.match_type && (t.click(), n.eq(1).click())
	},
	bindFun: function() {
		var t = $(".table_chick"),
		e = $(".table_chick2"),
		i = $(".tables_check2"),
		n = $(".tables_check"),
		o = this;
		t.eq(0).click(function() {
			i.css("height", "auto"),
			n.hide(),
			i.show(),
			$(this).hide(),
			e.eq(0).show(),
			i.find(".list_b").is(":hidden") && i.height() > 490 && i.height(485),
			$(".Js_click_c").eq(o.atr).click(),
			$.browser.msie && parseInt($.browser.version) <= 6 && ($(".Js_click_c").eq(1).hasClass("title_border2") || $(".Js_click_c").eq(1).click(), $(".Js_click_c").eq(0).hasClass("title_border2") || $(".Js_click_c").eq(0).click())
		}),
		e.eq(0).click(function() {
			n.show(),
			i.hide(),
			$(this).hide(),
			t.eq(0).show(),
			$(".Js_show_line").eq(o.atr).find(".team_qushi").find(".on").click()
		}),
		t.eq(1).click(function() {
			$(".shengyasai_tables").show(),
			$(".shengyasai_line").hide(),
			$(this).hide(),
			e.eq(1).show(),
			o.tables = !0
		}),
		e.eq(1).click(function() {
			$(".shengyasai_tables").hide(),
			$(".shengyasai_line").show(),
			$(this).hide(),
			t.eq(1).show(),
			o.tables = !1,
			$(".shengyasai").eq(o.atm).find(".team_qushi").find(".on").click()
		}),
		$(".loding_more").click(function() {
			"false" == $(this).attr("click") ? ($(this).parent().height(485), $(this).find(".list_a").show(), $(this).find(".list_b").hide(), $(this).attr("click", "false")) : ($(this).parent().height($(this).parent().find(".all_tables_check").height()), $(this).find(".list_a").hide(), $(this).find(".list_b").show(), tableChoose = !0, $(this).attr("click", "true"))
		})
	}
}; !
function(t) {
	function e(e) {
		return this.each(function() {
			var i = t(this),
			n = '<div class="tips_layer" style="position: absolute; background-color:#ff6600; display:none; z-index:100">                  <div class="tips-text" style="padding:5px; color:#fff;">' + e + '</div>                  <div class="diamond"></div>              </div>';
			t(".tips_layer") && t(".tips_layer").remove(),
			t(n).appendTo("body");
			var o = (t(".tips-text"), t(".tips_layer"));
			o.css({
				top: i.offset().top - parseInt(o.outerHeight()),
				left: i.offset().left
			}).fadeIn(),
			setTimeout(function() {
				o.remove()
			},
			1500)
		})
	}
	t.fn.extend({
		tips: e
	}),
	t.extend({
		cookie: function(e, i, n) {
			if ("undefined" == typeof i) {
				var o = null;
				if (document.cookie && "" != document.cookie) for (var s = document.cookie.split(";"), a = 0; a < s.length; a++) {
					var l = t.trim(s[a]);
					if (l.substring(0, e.length + 1) == e + "=") {
						o = decodeURIComponent(l.substring(e.length + 1));
						break
					}
				}
				return o
			}
			n = n || {},
			null === i && (i = "", n.expires = -1);
			var d = "";
			if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
				var r;
				"number" == typeof n.expires ? (r = new Date, r.setTime(r.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : r = n.expires,
				d = "; expires=" + r.toUTCString()
			}
			var c = n.path ? "; path=" + n.path: "",
			h = n.domain ? "; domain=" + n.domain: "",
			f = n.secure ? "; secure": "";
			document.cookie = [e, "=", encodeURIComponent(i), d, c, h, f].join("")
		}
	})
} (jQuery),
function(t, e, i) {
	t.ui = t.ui || {},
	t.extend(t.ui, {
		_showMasks: function(e) {
			var i = "<div class='body-mask' style='position:absolute; top:0; left:0; width:100%; height:" + t(document).height() + "px; background-color:#000;  z-index:98;'></div>";
			t("body").append(i),
			t(".body-mask").css("opacity", 0),
			t(".body-mask").animate({
				opacity: e ? e: "0.8"
			})
		},
		_closeMasks: function() {
			var e = t(".body-mask");
			e.fadeOut(function() {
				e.remove()
			})
		},
		_getpageSize: function() {
			var t, n = i.documentElement,
			o = e.innerWidth || self.innerWidth || n && n.clientWidth || i.body.clientWidth,
			s = e.innerHeight || self.innerHeight || n && n.clientHeight || i.body.clientHeight;
			return t = [o, s]
		},
		_getpageScroll: function() {
			var t;
			return self.pageYOffset ? t = self.pageYOffset: i.documentElement && i.documentElement.scrollTop ? t = i.documentElement.scrollTop: i.body && (t = i.body.scrollTop),
			t
		},
		_position: function(t) {
			var e = (this._getpageSize()[0] - parseInt(t.outerWidth())) / 2,
			i = (this._getpageSize()[1] - parseInt(t.outerHeight())) / 2;
			return [e, i]
		},
		_offset: function(e) {
			var i, n = e.offset().left;
			return i = jQuery.fn.jquery <= 1.6 && t.browser.msie && parseInt(t.browser.version) <= 6 ? e.offset().top + t.ui._getpageScroll() : e.offset().top,
			[n, i]
		},
		isie: !!t.browser.msie,
		isie6: !!t.browser.msie && parseInt(t.browser.version) <= 6
	});
	var n = {
		ajaxloding: !1,
		init: function() {
			var t = n;
			t.addDom()
		},
		addDom: function() {
			var e = parseInt(t(window).height() / 2),
			i = '<style type="text/css">                    .right_feed_back{width:100px; height:50px; position:fixed; _position:absolute;background-color:#fff;right:0px;top:' + (e + 150) + "px;_top:expression(documentElement.scrollTop+" + (e + 150) + '+"px"); z-index:95;}                    .right_feed_back a{background:url(/images/gamespace/voice_ico.jpg) no-repeat 0 0; display:block; width:100px; height:50px;}                    .right_feed_back a:hover{background-position:-100px 0px;}                    .feed_back_from{width:500px;  position:fixed; _position:absolute;background-color:#fff; left:0px; top:' + e + "px;_top:expression(documentElement.scrollTop+" + (e - 100) + '+"px"); z-index:99; display:none;}                    .feed_back_from .feed_back_topbgs{background:url(/images/gamespace/tcbg.gif) no-repeat left top; width:500px; height:35px;}                    .feed_back_from .feed_back_topbgs h2{float:left; font-size:14px; color:#fff; margin:5px 0 0 25px;}                    .feed_back_from .feed_back_topbgs .close{float:right; font-size:14px; margin:5px 10px 0 0; color:#fff; cursor:pointer}                    .feed_back_from .content{width:468px; border:1px #000 solid; border-top:0px; background-color:#fff; padding:15px;}                    .feed_back_from .tex{width:460px; height:140px; border:1px #666666 solid; background-color:#e3e3e3; padding:3px;}                    .feed_back_from .email{margin-top:10px; display:inline-block;}                    .feed_back_from .email .em{width:146px; height:22px; color:#cccccc; border:1px #666666 solid; padding-left:5px;}                    .feed_back_from .sub{float:right; margin-top:10px; padding:3px;}              </style>              <div class="feed_back_from">                      <div class="feed_back_topbgs"><h2>鍙嶉</h2><div class="close">脳</div></div>                      <div class="content">                         <form id="reg_sisters" action="#" method="post">                           <textarea class="tex">缁欐瘮璧涗腑蹇冪殑涓€浜涘缓璁�</textarea>                           <input class="sub" type="button" value="鎻愪氦" /><span class="email">Email: <input class="em" type="text" value="璇疯緭鍏ユ偍鐨勯偖绠�" /></span></form>                      </div>              </div>      	     <div class="right_feed_back">                 <a href="javascript:void(0);"></a>              </div>';
			t(i).appendTo("body"),
			this.bindFun()
		},
		bindFun: function() {
			var e = t(".feed_back_from"),
			i = this;
			t(".right_feed_back").click(function() {
				i.postDom()
			}),
			t(".feed_back_from").find(".close").click(function() {
				t.ui._closeMasks(),
				e.hide()
			}),
			t("#reg_sisters").find(".sub").click(function() {
				return i.chech(),
				!1
			}),
			t("#reg_sisters").find(".tex").focus(function() {
				t(this).data("befo") || (t(this).val(""), t(this).data("befo", !0))
			}),
			t("#reg_sisters").find(".em").focus(function() {
				t(this).data("befo") || (t(this).val(""), t(this).data("befo", !0), t(this).css({
					color: "#000"
				}))
			})
		},
		postDom: function() {
			var e = t(".feed_back_from");
			t.ui._showMasks(),
			t.ui.isie6 ? e.css({
				left: t.ui._position(e)[0]
			}).show() : e.css({
				left: t.ui._position(e)[0],
				top: t.ui._position(e)[1]
			}).show(),
			this.dataInit()
		},
		chech: function() {
			var e = /^.+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
			return obj = t("#reg_sisters"),
			emailVal = obj.find(".em").val(),
			that = this,
			"" != t.trim(obj.find(".tex").val()) && obj.find(".tex").data("befo") ? "" != t.trim(emailVal) && obj.find(".em").data("befo") && !e.test(emailVal) ? (obj.find(".em").tips("閭鍦板潃涓嶆纭�"), !1) : this.ajaxloding ? !1 : (that.ajaxloding = !0, void t.getJSON("http://g.hupu.com/nba/feedback", {
				email: emailVal,
				content: encodeURI(obj.find(".tex").val()),
				type: "gamespace"
			},
			function(e) {
				1 * e.status == 200 ? (obj.find(".sub").tips("鎻愪氦鎴愬姛"), setTimeout(function() {
					t(".feed_back_from").find(".close").click(),
					that.ajaxloding = !1,
					that.dataInit()
				},
				1500)) : (obj.find(".sub").tips("鎻愪氦澶辫触"), that.ajaxloding = !1)
			})) : (obj.find(".tex").tips("鍐呭涓嶈兘涓虹┖"), !1)
		},
		dataInit: function() {
			var e = t("#reg_sisters");
			e.find(".tex").data("befo", !1),
			e.find(".em").data("befo", !1),
			e.find(".tex").val("缁欐瘮璧涗腑蹇冪殑涓€浜涘缓璁�"),
			e.find(".em").val("璇疯緭鍏ユ偍鐨勯偖绠�")
		}
	},
	o = {
		init: function(t) {
			var e = o;
			e.addDom(t)
		},
		addDom: function(e) {
			var i = '<style type="text/css">   	   	                .dimCode{background: url("https://b3.hoopchina.com.cn/web/channel/nba/index/qcode/erweiHupu.jpg") no-repeat left top;position:fixed;_position:absolute;left:' + e.left + "px;top:" + e.top + 'px; _top:expression(documentElement.scrollTop+170+"px"); background-color:#fff;  width:116px; height:61px; padding-top:134px; line-height:18px; text-align:center;}   	   	                .nba_er_link{width: 100px;height: 100px;display: block;position: absolute;left: 8px;top: 27px;}   	   	                .nba_er_link2{color:#000; text-decoration: underline;}   	   	                .nba_er_link2:hover{text-decoration: none;}                    </style>   	   	            <div class="dimCode">   	   	                <a class="nba_er_link" target="_blank" href="http://goto.hupu.com/?a=goClick&amp;id=5655"></a>   	   	                <b style="color:#b74545;">鎵嬫満鐪婲BA鏂囧瓧鐩存挱</b><br>鐐瑰嚮鎴栨壂鎻忎笅杞�<br>   	   	                <a target="_blank" href="http://bbs.hupu.com/4051495.html" class="nba_er_link2">濡備綍鎵弿锛�</a>   	   	                <div style="position:absolute; width:21px; height:21px; right:0px; top:0px;  cursor:pointer;" class="nba_er_close"></div>   	   	             </div>';
			t(i).appendTo("body"),
			t(".nba_er_close").click(function() {
				t(".dimCode").remove()
			}),
			t(window).resize(function() {
				t(".dimCode").css("left", t(".hp-threeNav").offset().left + t(".hp-threeNav").width() + 10)
			})
		}
	};
	t.extend({
		feedback: n.init,
		dimCode: o.init
	}),
	t.dimCode({
		left: t(".hp-threeNav").offset().left + t(".hp-threeNav").width() + 10,
		top: t(".hp-threeNav").offset().top
	})
} (jQuery, window, document),
function(t) {
	var e = {
		defaults: {
			enabled: !0
		},
		init: function() {
			var i, n = e,
			o = arguments;
			return this.each(function() {
				i = this,
				"spider" == o[0] && n.higfunB(t(i), o[1]),
				"line" == o[0] && n.higfunA(t(i), o[1])
			})
		},
		bindFun: function() {
			var e, i = this;
			t(".team_qushi").delegate("a", "click",
			function() {
				e = t(this).attr("arr"),
				t(this).addClass("on"),
				t(this).siblings().removeClass("on"),
				i.higfunA(t("#container2"), e.split("/"))
			})
		},
		indexOf: function(t, e) {
			if (t.indexOf) return t.indexOf(e);
			for (var i = 0,
			n = t.length; n > i; i++) if (e == t[i]) return i;
			return - 1
		},
		higfunA: function(t, i) {
			function n(t) {
				for (var e = 0; e < t.length; e++) t[e] = 1 * t[e];
				return t
			}
			var o, s, a, l = {
				data: [],
				name: []
			},
			d = [],
			r = [];
			if (!i.num) return ! 1;
			try {
				var c = i.num.split("/");
				if (i.pointStart && c[0].split(",").length > 6) {
					for (var h = 0; h < c.length; h++) {
						r[h] = {
							data: [],
							name: ""
						};
						for (var f = 0; f < i.categories.split(",").length; f++) {
							var u = n(i.categories.split(",")[f].split("-"));
							u.length > 1 ? r[h].data[f] = [Date.UTC(u[0], u[1] - 1, u[2]), n(i.num.split("/")[h].split(","))[f]] : (r[h].data[f] = [Date.UTC(u[0], 1, 1), n(i.num.split("/")[h].split(","))[f]], a = !0),
							r[h].name = i.name.split("/")[h],
							i.tipsTxt && (r[h].tipsTxt = i.tipsTxt.split(","))
						}
					}
					d = r
				} else for (var h = 0; h < c.length; h++) {
					for (var f = 0; f < c[h].split(",").length; f++) l.data[f] = {
						name: i.categories.split(",")[f],
						y: n(i.num.split("/")[h].split(","))[f]
					},
					l.name = i.name.split("/")[h];
					d[h] = l,
					l = {
						data: [],
						name: []
					}
				}
			} catch(p) {
				return ! 1
			}
			i.pointStart && c[0].split(",").length > 6 ? (o = {
				type: "datetime",
				maxZoom: 1728e5,
				labels: {
					formatter: function() {
						return a ? Highcharts.dateFormat("%Y", this.value) : Highcharts.dateFormat("%Y-%m-%d", this.value)
					},
					style: {
						fontSize: "10px"
					},
					staggerLines: 1,
					rotation: 0,
					align: "center",
					step: 1.5,
					x: -10,
					y: 20,
					zIndex: 20
				}
			},
			s = function(t) {
				return a ? Highcharts.dateFormat("%Y", t.points[0].key) : Highcharts.dateFormat("%Y-%m-%d", t.points[0].key)
			}) : (o = {
				categories: i.categories.split(",")
			},
			s = function(t) {
				return t.points[0].key
			}),
			t.highcharts({
				chart: {
					marginBottom: 80,
					backgroundColor: "none"
				},
				colors: ["#a82328", "#3c9bdd", "#ED561B", "#DDDF00", "#24CBE5", "#64E572", "#FF9655", "#FFF263", "#6AF9C4"],
				rangeSelector: {
					selected: 1,
					inputEnabled: !1
				},
				credits: {
					enabled: !1
				},
				exporting: {
					enabled: !1
				},
				title: {
					text: i.text,
					style: {
						color: "#000",
						fontSize: "14px",
						fontWeight: "bold"
					}
				},
				tooltip: {
					shared: !0,
					useHTML: !0,
					formatter: function() {
						for (var t, n, o = s(this) + "<br/>", a = 0; a < this.points.length; a++) {
							n = this.points[a],
							t = e.indexOf(n.series.processedXData, this.x);
							try {
								o += n.series.userOptions.tipsTxt[t]
							} catch(l) {
								o += n.series.name + ":<b>" + n.y + (i.measure ? i.measure: "") + "</b><br/>"
							}
						}
						return o
					},
					enabled: !0,
					borderColor: "#000"
				},
				xAxis: o,
				yAxis: {
					labels: {
						format: "{value}" + (i.measure ? i.measure: "")
					},
					title: {
						text: ""
					}
				},
				legend: {
					enabled: !1
				},
				series: d
			})
		},
		higfunB: function(t, e) {
			var i = [];
			try {
				for (var n = 0; n < e.length; n++) i[n] = {
					data: e[n].num,
					pointPlacement: "on",
					legendIndex: 1,
					name: e[n].name
				}
			} catch(o) {
				return ! 1
			}
			t.highcharts({
				chart: {
					polar: !0,
					type: "line",
					plotBorderColor: "#ff6600",
					backgroundColor: "none"
				},
				colors: ["#a82328", "#3c9bdd", "#ED561B", "#DDDF00", "#24CBE5", "#64E572", "#FF9655", "#FFF263", "#6AF9C4"],
				credits: {
					enabled: !1
				},
				exporting: {
					enabled: !1
				},
				title: {
					style: {
						display: "none"
					}
				},
				pane: {
					size: "65%"
				},
				xAxis: {
					categories: ['<b style="font-size:12px; font-weight:bold; color:#444444;">鍦哄潎寰楀垎</b>', '<b style="font-size:12px; font-weight:bold; color:#444444;">鍦哄潎鍔╂敾</b>', '<b style="font-size:12px; font-weight:bold; color:#444444;">鍦哄潎绡澘</b>', '<b style="font-size:12px; font-weight:bold; color:#444444;">鍦哄潎澶卞垎</b>', '<b style="font-size:12px; font-weight:bold; color:#444444;">鍦哄潎澶辫</b>'],
					tickmarkPlacement: "on",
					lineWidth: 0,
					gridLineColor: "#e4e3e3",
					lineColor: "#e4e3e3"
				},
				yAxis: {
					gridLineInterpolation: "polygon",
					lineWidth: 0,
					min: 0,
					gridLineColor: "#e4e3e3",
					lineColor: "#e4e3e3",
					labels: {
						style: {
							color: "#000",
							display: "none"
						},
						align: "right",
						x: 0,
						y: -2,
						zIndex: -1
					}
				},
				tooltip: {
					shared: !0,
					formatter: function() {
						for (var t = this.x + "<br/>",
						e = 0; e < this.points.length; e++) t += this.points[e].series.name + "鎺掑悕:<b>" + (31 - this.points[e].y) + "</b><br/>";
						return t
					},
					enabled: !0,
					borderColor: "#000"
				},
				legend: {
					align: "left",
					verticalAlign: "top",
					y: 170,
					layout: "vertical",
					enabled: 0 == e[0].enabled ? e[0].enabled: !0
				},
				series: i
			})
		}
	};
	t.fn.extend({
		higs: e.init
	})
} (jQuery);