/**
 * jQuery EasyUI 1.4.5
 *
 * Copyright (c) 2009-2016 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function ($) {
    function _1(_2) {
        var _3 = $.data(_2, "pagination");
        var _4 = _3.options;
        var bb = _3.bb = {};
        var _5 = $(_2).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
        var tr = _5.find("tr");
        var aa = $.extend([], _4.layout);
        if (!_4.showPageList) {
            _6(aa, "list");
        }
        if (!_4.showRefresh) {
            _6(aa, "refresh");
        }
        if (aa[0] == "sep") {
            aa.shift();
        }
        if (aa[aa.length - 1] == "sep") {
            aa.pop();
        }
        for (var _7 = 0; _7 < aa.length; _7++) {
            var _8 = aa[_7];
            if (_8 == "list") {
                var ps = $("<select class=\"pagination-page-list\"></select>");
                ps.bind("change", function () {
                    _4.pageSize = parseInt($(this).val());
                    _4.onChangePageSize.call(_2, _4.pageSize);
                    _10(_2, _4.pageNumber);
                });
                for (var i = 0; i < _4.pageList.length; i++) {
                    $("<option></option>").text(_4.pageList[i]).appendTo(ps);
                }
                $("<td></td>").append(ps).appendTo(tr);
            } else {
                if (_8 == "sep") {
                    $("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
                } else {
                    if (_8 == "first") {
                        bb.first = _9("first");
                    } else {
                        if (_8 == "prev") {
                            bb.prev = _9("prev");
                        } else {
                            if (_8 == "next") {
                                bb.next = _9("next");
                            } else {
                                if (_8 == "last") {
                                    bb.last = _9("last");
                                } else {
                                    if (_8 == "manual") {
                                        $("<span style=\"padding-left:6px;\"></span>").html(_4.beforePageText).appendTo(tr).wrap("<td></td>");
                                        bb.num = $("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
                                        bb.num.unbind(".pagination").bind("keydown.pagination", function (e) {
                                            if (e.keyCode == 13) {
                                                var _a = parseInt($(this).val()) || 1;
                                                _10(_2, _a);
                                                return false;
                                            }
                                        });
                                        bb.after = $("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
                                    } else {
                                        if (_8 == "refresh") {
                                            bb.refresh = _9("refresh");
                                        } else {
                                            if (_8 == "links") {
                                                $("<td class=\"pagination-links\"></td>").appendTo(tr);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (_4.buttons) {
            $("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
            if ($.isArray(_4.buttons)) {
                for (var i = 0; i < _4.buttons.length; i++) {
                    var _b = _4.buttons[i];
                    if (_b == "-") {
                        $("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
                    } else {
                        var td = $("<td></td>").appendTo(tr);
                        var a = $("<a href=\"javascript:void(0)\"></a>").appendTo(td);
                        a[0].onclick = eval(_b.handler || function () {
                            });
                        a.linkbutton($.extend({}, _b, {plain: true}));
                    }
                }
            } else {
                var td = $("<td></td>").appendTo(tr);
                $(_4.buttons).appendTo(td).show();
            }
        }
        $("<div class=\"pagination-info\"></div>").appendTo(_5);
        $("<div style=\"clear:both;\"></div>").appendTo(_5);
        function _9(_c) {
            var _d = _4.nav[_c];
            var a = $("<a href=\"javascript:void(0)\"></a>").appendTo(tr);
            a.wrap("<td></td>");
            a.linkbutton({
                iconCls: _d.iconCls,
                plain: true
            }).unbind(".pagination").bind("click.pagination", function () {
                _d.handler.call(_2);
            });
            return a;
        };
        function _6(aa, _e) {
            var _f = $.inArray(_e, aa);
            if (_f >= 0) {
                aa.splice(_f, 1);
            }
            return aa;
        };
    };
    function _10(_11, _12,_param) {
        var _13 = $.data(_11, "pagination").options;
        if (_13.themes == 0) {
            _14(_11, {pageNumber: _12});
        } else if(_13.themes == 9){
            _themes14_9(_11, {pageNumber: _12});
        }else{
            _themes14_1(_11, {pageNumber: _12});
        }
        _13.onSelectPage.call(_11, _13.pageNumber, _13.pageSize, _param);
    };
    function _14(_15, _16) {
        var _17 = $.data(_15, "pagination");
        var _18 = _17.options;
        var bb = _17.bb;
        $.extend(_18, _16 || {});
        var ps = $(_15).find("select.pagination-page-list");
        if (ps.length) {
            ps.val(_18.pageSize + "");
            _18.pageSize = parseInt(ps.val());
        }
        var _19 = Math.ceil(_18.total / _18.pageSize) || 1;
        if (_18.pageNumber < 1) {
            _18.pageNumber = 1;
        }
        if (_18.pageNumber > _19) {
            _18.pageNumber = _19;
        }
        if (_18.total == 0) {
            _18.pageNumber = 0;
            _19 = 0;
        }
        if (bb.num) {
            bb.num.val(_18.pageNumber);
        }
        if (bb.after) {
            bb.after.html(_18.afterPageText.replace(/{pages}/, _19));
        }
        var td = $(_15).find("td.pagination-links");
        if (td.length) {
            td.empty();
            var _1a = _18.pageNumber - Math.floor(_18.links / 2);
            if (_1a < 1) {
                _1a = 1;
            }
            var _1b = _1a + _18.links - 1;
            if (_1b > _19) {
                _1b = _19;
            }
            _1a = _1b - _18.links + 1;
            if (_1a < 1) {
                _1a = 1;
            }
            for (var i = _1a; i <= _1b; i++) {
                var a = $("<a class=\"pagination-link\" href=\"javascript:void(0)\"></a>").appendTo(td);
                a.linkbutton({plain: true, text: i});
                if (i == _18.pageNumber) {
                    a.linkbutton("select");
                } else {
                    a.unbind(".pagination").bind("click.pagination", {pageNumber: i}, function (e) {
                        _10(_15, e.data.pageNumber);
                    });
                }
            }
        }
        var _1c = _18.displayMsg;
        _1c = _1c.replace(/{from}/, _18.total == 0 ? 0 : _18.pageSize * (_18.pageNumber - 1) + 1);
        _1c = _1c.replace(/{to}/, Math.min(_18.pageSize * (_18.pageNumber), _18.total));
        _1c = _1c.replace(/{pages}/, _19);
        _1c = _1c.replace(/{total}/, _18.total);
        $(_15).find("div.pagination-info").html(_1c);
        if (bb.first) {
            bb.first.linkbutton({disabled: ((!_18.total) || _18.pageNumber == 1)});
        }
        if (bb.prev) {
            bb.prev.linkbutton({disabled: ((!_18.total) || _18.pageNumber == 1)});
        }
        if (bb.next) {
            bb.next.linkbutton({disabled: (_18.pageNumber == _19)});
        }
        if (bb.last) {
            bb.last.linkbutton({disabled: (_18.pageNumber == _19)});
        }
        _1d(_15, _18.loading);
    };
    function _1d(_1e, _1f) {
        var _20 = $.data(_1e, "pagination");
        var _21 = _20.options;
        _21.loading = _1f;
        if (_21.showRefresh && _20.bb.refresh) {
            _20.bb.refresh.linkbutton({iconCls: (_21.loading ? "pagination-loading" : "pagination-load")});
        }
    };
    function _themes1(_2) {
        var _3 = $.data(_2, "pagination");
        var _4 = _3.options;
        var bb = _3.bb = {};
        var _5 = $(_2).addClass("pagination").html("<div style='float:right'><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table></div>");
        var tr = _5.find("tr");
        if(_4.themes == '2') {
            $(_2).parent().find('.datagrid-header').hide();
        }
        $("<td><div class=\"pagination-info\"></div></td>").appendTo(tr);
        var aa = $.extend([], _4.layout);
        if (!_4.showPageList) {
            _6(aa, "list");
        }
        if (!_4.showRefresh) {
            _6(aa, "refresh");
        }
        if (aa[0] == "sep") {
            aa.shift();
        }
        if (aa[aa.length - 1] == "sep") {
            aa.pop();
        }
        for (var _7 = 0; _7 < aa.length; _7++) {
            var _8 = aa[_7];
            if (_8 == "list") {
                if(_4.themes == '1') {
                    var ps = $("<select class=\"pagination-page-list\"></select>");
                    ps.bind("change", function () {
                        _4.pageSize = parseInt($(this).val());
                        _4.onChangePageSize.call(_2, _4.pageSize);
                        _10(_2, _4.pageNumber);
                    });
                    for (var i = 0; i < _4.pageList.length; i++) {
                        $("<option></option>").text(_4.pageList[i]).appendTo(ps);
                    }
                    $("<td></td>").append(ps).appendTo(tr);
                }
            } else {
                if (_8 == "sep") {
                    $("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
                } else {
                    if (_8 == "first") {
                        bb.first = _9("first");
                    } else {
                        if (_8 == "prev") {
                            bb.prev = _9("prev");
                        } else {
                            if (_8 == "next") {
                                bb.next = _9("next");
                            } else {
                                if (_8 == "last") {
                                    bb.last = _9("last");
                                } else {
                                    if (_8 == "manual") {
                                        $("<span style=\"padding-left:6px;\"></span>").html(_4.beforePageText).appendTo(tr).wrap("<td></td>");
                                        bb.num = $("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
                                        bb.num.unbind(".pagination").bind("keydown.pagination", function (e) {
                                            if (e.keyCode == 13) {
                                                var _a = parseInt($(this).val()) || 1;
                                                _10(_2, _a);
                                                return false;
                                            }
                                        });
                                        bb.after = $("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
                                    } else {
                                        if (_8 == "refresh") {
                                            bb.refresh = _9("refresh");
                                        } else {
                                            if (_8 == "links") {
                                                $("<td class=\"pagination-links\"></td>").appendTo(tr);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (_4.buttons) {
            $("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
            if ($.isArray(_4.buttons)) {
                for (var i = 0; i < _4.buttons.length; i++) {
                    var _b = _4.buttons[i];
                    if (_b == "-") {
                        $("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
                    } else {
                        var td = $("<td></td>").appendTo(tr);
                        var a = $("<a href=\"javascript:void(0)\"></a>").appendTo(td);
                        a[0].onclick = eval(_b.handler || function () {
                            });
                        a.linkbutton($.extend({}, _b, {plain: true}));
                    }
                }
            } else {
                var td = $("<td></td>").appendTo(tr);
                $(_4.buttons).appendTo(td).show();
            }
        }
        if (_4['topHtml']) {
            var _appendHtml = _4['topHtml'].replace(new RegExp('\'', "gm"), '"');
            var _topHtml = $("<div style='float:left;margin: 0 6px 0 6px;padding: 0;height: 30px;line-height: 30px;font-size: 12px;'>" + _appendHtml + "</div>");
            _topHtml.appendTo(_5);
            _topHtml.find('a').each(function () {
                $(this).bind('click', function () {
                    var _param = {};
                    _topHtml.find('[param]').each(function () {
                        _param[$(this).attr('param')] = $(this)[0].value;
                    });
                    _10(_2, 1, _param);
                });
            });
            _topHtml.find('select[auto="Y"]').each(function(){
                $(this).bind('change',function(){
                    var _param = {};
                    _topHtml.find('[param]').each(function () {
                        _param[$(this).attr('param')] = $(this)[0].value;
                    });
                    _10(_2, 1, _param);
                });
            });
        }
        $("<div style=\"clear:both;\"></div>").appendTo(_5);
        function _9(_c) {
            var _d = _4.nav[_c];
            var a = $("<a href=\"javascript:void(0)\"></a>").appendTo(tr);
            a.wrap("<td></td>");
            a.linkbutton({
                iconCls: _d.iconCls,
                plain: true
            }).unbind(".pagination").bind("click.pagination", function () {
                _d.handler.call(_2);
            });
            return a;
        };
        function _6(aa, _e) {
            var _f = $.inArray(_e, aa);
            if (_f >= 0) {
                aa.splice(_f, 1);
            }
            return aa;
        };
    };
    function _themes9(_2) {
        var _3 = $.data(_2, "pagination");
        var _4 = _3.options;
        var bb = _3.bb = {};
        var _pageBar = $(_2).addClass("erp-datagrid-bottom-bar");
        $('<div class="erp-datagrid-bar"><span class="to-number"></span><span class="total-bar">共<em></em>条</span><span class="selected-bar">（已选择<em>0</em>条）</span></div>').appendTo(_pageBar);
        var _5 = $('<div class="erp-datagrid-page"></div>');
        _5.appendTo(_pageBar);
        var tr = _5;
        var ps = $("<select class=\"pagination-page-list\"></select>");
        ps.bind("change", function () {
            _4.pageSize = parseInt($(this).val());
            _4.onChangePageSize.call(_2, _4.pageSize);
            _10(_2, _4.pageNumber);
        });
        for (var i = 0; i < _4.pageList.length; i++) {
            $("<option></option>").text(_4.pageList[i]).appendTo(ps);
        }
        $('<span class="page-record">每页显示</span>').appendTo(tr);
        ps.appendTo(tr);
        $('<span class="page-record">条记录</span>').appendTo(tr);

        bb.prev = _9("prev");
        $("<span class=\"pagination-links\"></span>").appendTo(tr);
        bb.next = _9("next");
        $('<span class="page-total"></span>').appendTo(_5);
        var _tSpan = $('<span class="page-jump">到第<input type="text" id="pagination_page_number">页</span>');//共4页
        _tSpan.appendTo(_5);
        $('<a class="page-btn" id="pagination_page_ok" href="javascript:void(0)">确定</a>').appendTo(_tSpan).unbind("click").bind("click", function () {
            var _a = parseInt($('#pagination_page_number').val()) || 1;
            var _maxPage = $(this).attr('maxPage');
            if (_a == $('#pagination_page_number').val()) {
                if (_a >= 1 && _a <= _maxPage) {
                    _10(_2, _a);
                }
            }
        });
        $('#pagination_page_number').unbind("keyup").bind("keyup", function () {
            if ($(this).val() == '') {
                $(this).parent().removeClass('page-jump-no');
                return;
            }
            var _a = parseInt($(this).val()) || 1;
            var _maxPage = $('#pagination_page_ok').attr('maxPage');
            if ((_a == $(this).val()) && _a >= 1) {
                if (_maxPage) {
                    if (_a <= _maxPage) {
                        $(this).parent().removeClass('page-jump-no');
                    } else {
                        $(this).parent().addClass('page-jump-no');
                        $(this).select();
                    }
                } else {
                    $(this).parent().removeClass('page-jump-no');
                }
            } else {
                $(this).parent().addClass('page-jump-no');
                $(this).select();
            }
        });
        function _9(_c) {
            var _d = _4.navThemes1[_c];
            if (_d && _d.enable) {
                var a = $("<a href=\"javascript:void(0)\"></a>").appendTo(tr);
                a.addClass(_d.iconCls).html(_d.title);
                a.unbind(".pagination").bind("click.pagination", function () {
                    _d.handler.call(_2);
                });
                return a;
            } else {
                return '';
            }
        };
    };
    function _themes14_1(_15, _16) {
        var _17 = $.data(_15, "pagination");
        var _18 = _17.options;
        var bb = _17.bb;
        $.extend(_18, _16 || {});
        var ps = $(_15).find("select.pagination-page-list");
        if (ps.length) {
            ps.val(_18.pageSize + "");
            _18.pageSize = parseInt(ps.val());
        }
        var _19 = Math.ceil(_18.total / _18.pageSize) || 1;
        if (_18.pageNumber < 1) {
            _18.pageNumber = 1;
        }
        if (_18.pageNumber > _19) {
            _18.pageNumber = _19;
        }
        if (_18.total == 0) {
            _18.pageNumber = 0;
            _19 = 0;
        }
        if (bb.num) {
            bb.num.val(_18.pageNumber);
        }
        if (bb.after) {
            bb.after.html(_18.afterPageText.replace(/{pages}/, _19));
        }
        var td = $(_15).find("td.pagination-links");
        if (td.length) {
            td.empty();
            var _1a = _18.pageNumber - Math.floor(_18.links / 2);
            if (_1a < 1) {
                _1a = 1;
            }
            var _1b = _1a + _18.links - 1;
            if (_1b > _19) {
                _1b = _19;
            }
            _1a = _1b - _18.links + 1;
            if (_1a < 1) {
                _1a = 1;
            }
            for (var i = _1a; i <= _1b; i++) {
                var a = $("<a class=\"pagination-link\" href=\"javascript:void(0)\"></a>").appendTo(td);
                a.linkbutton({plain: true, text: i});
                if (i == _18.pageNumber) {
                    a.linkbutton("select");
                } else {
                    a.unbind(".pagination").bind("click.pagination", {pageNumber: i}, function (e) {
                        _10(_15, e.data.pageNumber);
                    });
                }
            }
        }
        if(_18.themes == '1'){
            var _1c = _18.displayMsg;
            _1c = _1c.replace(/{from}/, _18.total == 0 ? 0 : _18.pageSize * (_18.pageNumber - 1) + 1);
            _1c = _1c.replace(/{to}/, Math.min(_18.pageSize * (_18.pageNumber), _18.total));
            _1c = _1c.replace(/{total}/, _18.total);
            $(_15).find("div.pagination-info").html(_1c);
        }
        if (bb.first) {
            bb.first.linkbutton({disabled: ((!_18.total) || _18.pageNumber == 1)});
        }
        if (bb.prev) {
            bb.prev.linkbutton({disabled: ((!_18.total) || _18.pageNumber == 1)});
        }
        if (bb.next) {
            bb.next.linkbutton({disabled: (_18.pageNumber == _19)});
        }
        if (bb.last) {
            bb.last.linkbutton({disabled: (_18.pageNumber == _19)});
        }
        _1d(_15, _18.loading);
    };
    function _themes14_9(_15,_16){
        var _17 = $.data(_15, "pagination");
        var _18 = _17.options;
        var bb = _17.bb;
        $.extend(_18, _16 || {});
        var ps = $(_15).find("select.pagination-page-list");
        if (ps.length) {
            ps.val(_18.pageSize + "");
            _18.pageSize = parseInt(ps.val());
        }
        var _19 = Math.ceil(_18.total / _18.pageSize) || 1;
        if (_18.pageNumber < 1) {
            _18.pageNumber = 1;
        }
        if (_18.pageNumber > _19) {
            _18.pageNumber = _19;
        }
        if (_18.total == 0) {
            _18.pageNumber = 0;
            _19 = 0;
        }
        if (bb.num) {
            bb.num.val(_18.pageNumber);
        }
        var td = $(_15).find("span.pagination-links");
        if (td.length) {
            td.empty();
            var _1a = _18.pageNumber;//- Math.floor(_18.links / 2)
            if (_1a < 1) {
                _1a = 1;
            }
            var _links = 0;
            if (_1a == 1) {
                _links = 2;
            } else if (_1a == 2) {
                _links = 1;
            }
            var _1b = _1a + (_18.links + _links) - 1;
            if (_1b > _19) {
                _1b = _19;
            }
            _1a = _1b - (_18.links + _links) + 1;
            if (_1a < 1) {
                _1a = 1;
            }
            var _pageNums = [];
            if (_1a > 1) {
                _pageNums.push(1);
            }
            if (_1a > 2) {
                _pageNums.push(2);
            }
            if (_1a > 3) {
                _pageNums.push('...');
            }
            for (var i = _1a; i <= _1b; i++) {
                _pageNums.push(i);
            }
            if (_1b < _19 - 2) {
                _pageNums.push('...');
            }
            $.each(_pageNums, function (_i, _v) {
                if (_v == '...') {
                    $('<span class="page-dot">...</span>').appendTo(td);
                } else {
                    var a = $("<a class=\"page-num\" href=\"javascript:void(0)\"></a>").appendTo(td);
                    a.html(_v);
                    if (_v == _18.pageNumber) {
                        a.addClass("curr");
                    } else {
                        a.unbind(".pagination").bind("click.pagination", {pageNumber: _v}, function (e) {
                            _10(_15, e.data.pageNumber);
                        });
                    }
                }
            });
        }
        $('.to-number').html(_18.pageNumber + '-' + _18.pageSize);
        $('.total-bar em').html(_18.total);
        td.parent().find(".page-total").html('共' + _19 + '页');
        $('#pagination_page_ok').attr('maxPage', _19);
        if (bb.prev) {
            if ((!_18.total) || _18.pageNumber == 1) {
                bb.prev.addClass("no-page");
            } else {
                bb.prev.removeClass("no-page");
            }
        }
        if (bb.next) {
            if (_18.pageNumber == _19) {
                bb.next.addClass("no-page");
            } else {
                bb.next.removeClass("no-page");
            }
        }
        _1d(_15, _18.loading);
    }
    $.fn.pagination = function (_22, _23) {
        if (typeof _22 == "string") {
            return $.fn.pagination.methods[_22](this, _23);
        }
        _22 = _22 || {};
        return this.each(function () {
            var _24;
            var _25 = $.data(this, "pagination");
            if (_25) {
                _24 = $.extend(_25.options, _22);
            } else {
                _24 = $.extend({}, $.fn.pagination.defaults, $.fn.pagination.parseOptions(this), _22);
                $.data(this, "pagination", {options: _24});
            }
            if (_24.themes == 0) {
                if(_24.hideLinks){
                    _24.layout = ['list','sep','first','prev','next','last','sep','refresh'];
                }else{
                    _24.layout = ['list','sep','first','prev','links','next','last','sep','refresh'];
                }
                _1(this);
                _14(this);
            }else if (_24.themes == 9) {
                _24.links = 3;
                _24.beforePageText = '';
                _24.afterPageText = "/ {pages}";
                _24.displayMsg = "共{total}条";
                _themes9(this);
                _themes14_9(this);
            } else {
                _24.links = 3;
                _24.beforePageText = '';
                _24.afterPageText = "/ {pages}";
                _24.displayMsg = "共{total}条";
                _themes1(this);
                _themes14_1(this);
            }
        });
    };
    $.fn.pagination.methods = {
        options: function (jq) {
            return $.data(jq[0], "pagination").options;
        }, loading: function (jq) {
            return jq.each(function () {
                _1d(this, true);
            });
        }, loaded: function (jq) {
            return jq.each(function () {
                _1d(this, false);
            });
        }, refresh: function (jq, _26) {
            return jq.each(function () {
                var _13 = $.data(this, "pagination").options;
                if (_13.themes == 0) {
                    _14(this, _26);
                } else if(_13.themes == 9){
                    _themes14_9(this, _26);
                }else {
                    _themes14_1(this, _26);
                }
            });
        }, select: function (jq, _27) {
            return jq.each(function () {
                _10(this, _27);
            });
        }
    };
    $.fn.pagination.parseOptions = function (_28) {
        var t = $(_28);
        return $.extend({}, $.parser.parseOptions(_28, [{
            total: "number",
            pageSize: "number",
            pageNumber: "number",
            links: "number"
        }, {
            loading: "boolean",
            showPageList: "boolean",
            showRefresh: "boolean"
        }]), {pageList: (t.attr("pageList") ? eval(t.attr("pageList")) : undefined)});
    };
    $.fn.pagination.defaults = {
        total: 1,
        pageSize: 10,
        pageNumber: 1,
        pageList: [10, 20, 30, 50],
        loading: false,
        buttons: null,
        showPageList: true,
        showRefresh: true,
        themes:0,
        topHtml:null,
        hideLinks:false,
        links: 10,
        layout: ["list", "sep", "first", "prev", "sep", "manual", "sep", "next", "last", "sep", "refresh"],
        onSelectPage: function (_29, _2a) {
        },
        onBeforeRefresh: function (_2b, _2c) {
        },
        onRefresh: function (_2d, _2e) {
        },
        onChangePageSize: function (_2f) {
        },
        beforePageText: "Page",
        afterPageText: "of {pages}",
        displayMsg: "Displaying {from} to {to} of {total} items",
        nav: {
            first: {
                iconCls: "pagination-first", handler: function () {
                    var _30 = $(this).pagination("options");
                    if (_30.pageNumber > 1) {
                        $(this).pagination("select", 1);
                    }
                }
            }, prev: {
                iconCls: "pagination-prev", handler: function () {
                    var _31 = $(this).pagination("options");
                    if (_31.pageNumber > 1) {
                        $(this).pagination("select", _31.pageNumber - 1);
                    }
                }
            }, next: {
                iconCls: "pagination-next", handler: function () {
                    var _32 = $(this).pagination("options");
                    var _33 = Math.ceil(_32.total / _32.pageSize);
                    if (_32.pageNumber < _33) {
                        $(this).pagination("select", _32.pageNumber + 1);
                    }
                }
            }, last: {
                iconCls: "pagination-last", handler: function () {
                    var _34 = $(this).pagination("options");
                    var _35 = Math.ceil(_34.total / _34.pageSize);
                    if (_34.pageNumber < _35) {
                        $(this).pagination("select", _35);
                    }
                }
            }, refresh: {
                iconCls: "pagination-refresh", handler: function () {
                    var _36 = $(this).pagination("options");
                    if (_36.onBeforeRefresh.call(this, _36.pageNumber, _36.pageSize) != false) {
                        $(this).pagination("select", _36.pageNumber);
                        _36.onRefresh.call(this, _36.pageNumber, _36.pageSize);
                    }
                }
            }
        },
        navThemes1:{
            prev: {
                iconCls: "page-prev", handler: function () {
                    var _31 = $(this).pagination("options");
                    if (_31.pageNumber > 1) {
                        $(this).pagination("select", _31.pageNumber - 1);
                    }
                }, title: '上一页', enable: true
            }, next: {
                iconCls: "page-next", handler: function () {
                    var _32 = $(this).pagination("options");
                    var _33 = Math.ceil(_32.total / _32.pageSize);
                    if (_32.pageNumber < _33) {
                        $(this).pagination("select", _32.pageNumber + 1);
                    }
                }, title: '下一页', enable: true
            }
        }
    };
})(jQuery);

