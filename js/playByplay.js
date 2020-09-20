var io = require("common:widget/socket/socket-1.4.5/socket"),
n,
totalscoreHome,
totalscoreAway,
totalscoreHomeall,
totalscoreAwayall,
playbyplay = {
	init: function() {
		GM.is_live && this.websocket()
	},
	scrollBottom: function() {
		var t = $(".table_overflow table").height(),
		e = $(".table_overflow");
		e.scrollTop(t)
	},
	websocket: function() {
		var t = this,
		e = io.connect(GM.websocket, {
			transports: ["websocket", "polling"]
		});
		e.on("connect",
		function() {
			e.emit("join", {
				id: GM.match_id,
				type: "live"
			})
		}),
		e.on("live",
		function(e) {
			t.bind(e)
		})
	},
	bind: function(t) {
		var e = this,
		a = GM.sequence_ids,
		d = !0,
		o = GM.home_id,
		s = GM.away_id;
		if (a.sort(e.sortNumber), d) {
			if (d = !1, "home" == t.team) var i = GM.home_name;
			else var i = GM.away_name;
			n = t.vs.indexOf("-"),
			totalscoreHome = t.vs.substr(0, n),
			totalscoreAway = t.vs.substr(n + 1),
			t.stats && (totalscoreHomeall = t.stats[o].total, totalscoreAwayall = t.stats[s].total);
			for (var l = 0; l < a.length; l++) {
				if (1 == t.event_type || 3 == t.event_type) var r = "font-weight:bold";
				if (a[l] == t.sequence_id) return $("#" + a[l]).html(""),
				11 == t.event_type || 14 == t.event_type || 15 == t.event_type || 19 == t.event_type ? ($("#" + a[l]).append('<td colspan="4" style="font-weight:bold;" align="center">' + t.event + "</td>"), d = !0, !1) : ($("#" + a[l]).append('<td class="tdw-1 left" width="69">' + t.time + '</td><td width="69">' + i + '</td><td width="380" style=' + r + ">" + t.event + '</td><td align="center" width="157">' + totalscoreAway + "-" + totalscoreHome + "</td>"), d = !0, !1);
				if (a[0] > t.sequence_id) return $(".table_overflow table").append("<tr id=" + t.sequence_id + '><td class="tdw-1 left" width="69">' + t.time + '</td><td width="69">' + i + '</td><td width="380" style=' + r + ">" + t.event + '</td><td align="center" width="157">' + totalscoreAway + "-" + totalscoreHome + "</td></tr>"),
				a.unshift(t.sequence_id),
				d = !0,
				!1;
				if (a[l] < t.sequence_id && a[l + 1] > t.sequence_id) return $("#" + a[l + 1]).after("<tr id=" + t.sequence_id + '><td class="tdw-1 left" width="69">' + t.time + '</td><td width="69">' + i + '</td><td width="380" style=' + r + ">" + t.event + '</td><td align="center" width="157">' + totalscoreAway + "-" + totalscoreHome + "</td></tr>"),
				a.splice(l + 1, 0, t.sequence_id),
				d = !0,
				!1
			}
			if (a.push(t.sequence_id), $(".team_num").text(t.process), $(".team_a h2").text(totalscoreAwayall), $(".team_b h2").text(totalscoreHomeall), $(".table_list_c .schedule_away_score_" + GM.away_id).text(totalscoreAwayall), $(".table_list_c .schedule_home_score_" + GM.home_id).text(totalscoreHomeall), 11 == t.event_type || 14 == t.event_type || 15 == t.event_type || 19 == t.event_type) return $(".table_overflow table").prepend("<tr id=" + t.sequence_id + '><td colspan="4" style="font-weight:bold;" align="center">' + t.event + "</td></tr>"),
			d = !0,
			!1;
			if (1 == t.event_type || 3 == t.event_type) var r = "font-weight:bold";
			playbyplay.homeVsaway(t),
			$(".table_overflow table").prepend("<tr id=" + t.sequence_id + '><td class="tdw-1 left" width="69">' + t.time + '</td><td width="69">' + i + '</td><td width="380" style=' + r + ">" + t.event + '</td><td align="center" width="157">' + totalscoreAway + "-" + totalscoreHome + "</td></tr>")
		}
		d = !0
	},
	homeVsaway: function(t) {
		var e = ($(".yuece_num_a .itinerary_table"), $(".yuece_num_a .itinerary_table .title")),
		a = $(".yuece_num_a .itinerary_table .home_score"),
		d = $(".yuece_num_a .itinerary_table .away_score");
		if (void 0 != t.stats) {
			e.html(""),
			a.html(""),
			d.html(""),
			e.append("<td></td><td>涓€</td><td>浜�</td><td>涓�</td><td>鍥�</td>"),
			d.append("<td>" + GM.away_name + "</td>"),
			a.append("<td>" + GM.home_name + "</td>");
			for (var o = 0; o < t.stats[GM.home_id].plus.length; o++) {
				if (0 == o) var s = "涓€";
				if (1 == o) var s = "浜�";
				if (2 == o) var s = "涓�";
				if (3 == o) var s = "鍥�";
				e.append('<td class="addtime">鍔犳椂' + s + "</td>")
			}
			e.append('<td class="total">鎬诲垎</td>');
			for (var o = 0; o < t.stats[GM.away_id].section.length; o++) d.append(0 == t.stats[GM.home_id].section[o] && 0 == t.stats[GM.away_id].section[o] ? "<td></td>": 0 != t.stats[GM.home_id].section[o] && 0 == t.stats[GM.away_id].section[o] ? "<td>0</td>": "<td>" + t.stats[GM.away_id].section[o] + "</td>");
			for (var o = 0; o < t.stats[GM.away_id].plus.length; o++) d.append("<td>" + t.stats[GM.away_id].plus[o] + "</td>");
			d.append("<td>" + totalscoreAwayall + "</td>");
			for (var o = 0; o < t.stats[GM.home_id].section.length; o++) a.append(0 == t.stats[GM.home_id].section[o] && 0 == t.stats[GM.away_id].section[o] ? "<td></td>": 0 == t.stats[GM.home_id].section[o] && 0 != t.time[GM.away_id].section[o] ? "<td>0</td>": "<td>" + t.stats[GM.home_id].section[o] + "</td>");
			for (var o = 0; o < t.stats[GM.home_id].plus.length; o++) a.append("<td>" + t.stats[GM.home_id].plus[o] + "</td>");
			a.append("<td>" + totalscoreHomeall + "</td>")
		}
	},
	sortNumber: function(t, e) {
		return t - e
	}
};
playbyplay.init();