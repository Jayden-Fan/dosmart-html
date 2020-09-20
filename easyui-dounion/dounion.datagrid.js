/**
 * Created by lipeng on 2016/4/11.
 * DataGrid属性增加以下属性
 * keyCtrl=true  默认 false  描述：dataGrid ctrl+A　全选支持
 * keyShift=true 默认 false  描述：支持shift连续选择
 * resizeToolbar=true 默认 false 描述：窗口缩小时，工具栏合并到菜单展示
 * resizeSearch=true 默认 false　描述：窗口缩小时，右上角查询输入框显示不下时，隐藏
 */
var DU_DG = {
    grid:null,
    keyCtrl:false,
    keyShift:false,
    resizeToolbar:false,
    resizeSearch:false,
    _keyCtrlFlag:false,
    _keyShiftFlag:false,
    _lastRowIndex:null,
    init:function(dataGridId){
        var _self = this;
        _self.grid = $('#' + dataGridId).datagrid();
        var _options = this.grid.datagrid('options');
        if(_options.keyCtrl){
            _self.keyCtrl = true;
        }
        if(_options.keyShift){
            _self.keyShift = true;
        }
        if(_options.toolbar && _options.resizeToolbar){
            _self.resizeToolbar = true;
        }
        if(_options.resizeSearch){
            if($('.tabs-wrap li:last')){
                _options.resizeSearch = true;
            }
        }
        if(_self.keyCtrl || _self.keyShift){
            if(document.addEventListener) {
                document.addEventListener("keyup",this.keyUp, false);
                document.addEventListener("keydown",this.keyDown, false);
            } else if (document.attachEvent) {
                document.attachEvent("onkeyup", this.keyUp);
                document.attachEvent("onkeydown",this.keyDown);
            } else {
                document.onkeyup = this.keyUp;
                document.onkeydown = this.keyDown;
            }
        }
        if(_self.resizeToolbar || _self.resizeSearch){
            $(window).resize(function(){
                setTimeout(DU_DG.resizeToolbarMenu(),500);
                //DU_DG.resizeSearchField();
            });
        }

        _self.grid.datagrid({
            'onClickRow': function (rowIndex, rowData){
                var _self = DU_DG;
                if (_self._keyShiftFlag && _self._lastRowIndex != null) {
                    if (_self._lastRowIndex > rowIndex) {
                        for (var _index = rowIndex + 1; _index < _self._lastRowIndex; _index++) {
                            _self.grid.datagrid('checkRow', _index);
                        }
                    } else if (_self._lastRowIndex < rowIndex) {
                        for (var _index = _self._lastRowIndex; _index < rowIndex; _index++) {
                            _self.grid.datagrid('checkRow', _index);
                        }
                    }
                } else if (!_self._keyCtrlFlag) {
                    if (_self.grid.datagrid('getChecked').length) {
                        _self.grid.datagrid('uncheckAll');
                        _self.grid.datagrid('checkRow', rowIndex);
                    } else {
                        _self.grid.datagrid('uncheckAll');
                    }
                }
                _self._lastRowIndex = rowIndex;
                _self.flushSelectedCount();
            }, 'onCheck': function (rowIndex, rowData) {
                var _self = DU_DG;
                _self.flushSelectedCount();
            }, 'onUncheck': function () {
                var _self = DU_DG;
                _self.flushSelectedCount();
            }
        });
        _self.initFit();
        _self.resizeToolbarMenu();
        //_self.resizeSearchField();
        $('.sys-datagrid-link').parent().parent().parent().unbind("mouseenter");
        $(".datagrid-cell-check").on("click", function () {
            $(this).hasClass("on-check") ? $(this).removeClass("on-check") : $(this).addClass("on-check");
        });


        //列表上工具栏显示隐藏
        $('.toggle-taba').bind('click', function () {
            var _tabsBar = $("div.sys-tabs-a div.tabs-header-plain:first");
            var _toolbar = $('.datagrid-toolbar');
            if (_tabsBar && _toolbar) {
                if ($(_tabsBar).is(":visible")) {
                    var _height = $(_tabsBar).height() + $(_toolbar).height();
                    $(_tabsBar).hide();
                    $(_toolbar).hide();
                    $('.sys-search-box').hide();
                    _height += $('.sys-col-main').height() + 15;
                    $('.sys-col-main').panel('resize', {height: _height});
                } else {
                    $(_tabsBar).show();
                    $(_toolbar).show();
                    $('.sys-search-box').show();
                    var _height = $(_tabsBar).height() + $(_toolbar).height();
                    _height = $('.sys-col-main').height() - _height - 15;
                    $('.sys-col-main').panel('resize', {height: _height});
                }
            }
        });
    },
    initFit:function(){//撑满表格
        var _self = this;
        var _fitWidth = _self.grid.parent().width() - _self.grid.parent().find('table').width();
        if (_fitWidth < 1) {
            return;
        }
        var _options = _self.grid.datagrid("options");
        var _totalWidth = 0;
        $.each(_options['columns'][0], function (_index, _obj) {
            if (_obj['field']) {
                _totalWidth += _obj['width'];
            }
        });
        var _resizeFlag = false;
        if (_totalWidth < _fitWidth){//未撑满
            var _space = _fitWidth - _totalWidth;
            var _use = 0;
            if (_space < 10) {//加到倒数第二列
                var _index = _options['columns'][0].length - 2;
                if (_index >= 0) {
                    _options['columns'][0][_index].width += _space;
                }
            } else {
                $.each(_options['columns'][0], function (_index, _obj) {
                    if (_obj['field'] && _use < _space) {
                        if (_space <= 10) {
                            if (!_obj['width']) {
                                _obj['oldWidth'] = _obj['width'];
                            }
                            _obj['width'] += _space;
                            _use = _space;
                        } else {
                            if (!_obj['width']) {
                                _obj['oldWidth'] = _obj['width'];
                            }
                            var _add = parseInt((_obj['width'] / _totalWidth) * _space);
                            _obj['width'] += _add;
                            _use += _add;
                        }
                    }
                });
            }
            _resizeFlag = true;
        } else {
            $.each(_options['columns'][0], function (_index, _obj) {
                if (!_obj['oldWidth'] && _obj['oldWidth'] < _obj['width']) {
                    _obj['width'] = _obj['oldWidth'];
                    _resizeFlag = true;
                }
            });
        }
        if(_resizeFlag){
            //grid = $('#oaDataGrid').datagrid();
            _self.grid.datagrid();
            //_self.grid.datagrid('columnMoving');
        }
    },
    keyUp:function(e){
        var _self = DU_DG;
        e = e || window.event;
        var keycode = e.which ? e.which : e.keyCode;
        if (17 == keycode || 16 == keycode) {//ctrl
            _self._keyCtrlFlag = false;
            _self._keyShiftFlag = false;
        }
    },
    keyDown:function(e){
        var _self = DU_DG;
        e = e || window.event;
        var keycode = e.which ? e.which : e.keyCode;
        if(17 == keycode) {//ctrl
            _self._keyCtrlFlag = true;
            _self._keyShiftFlag = false;
        }else if (16 == keycode) {//shift
            _self._keyCtrlFlag = false;
            _self._keyShiftFlag = true;
        }else if (65 == keycode) {//a
            if (_self._keyCtrlFlag) {
                _self.grid.datagrid('checkAll');
                window.event.returnValue = false;
                _self.flushSelectedCount();
                _self._keyCtrlFlag = false;
                _self._keyShiftFlag = false;
                return false;
            }
        }else if(keycode == 116){//屏蔽F5
            event.returnValue = false;
            if(window.parent.fun_keyCode116 && typeof(window.parent.fun_keyCode116) =="function"){
                window.parent.fun_keyCode116();
            }else{
                window.location.reload();
            }
            return false;
        }else if(keycode == 37 || keycode == 39){
            if(window.parent.fun_keyCode3739 && typeof(window.parent.fun_keyCode3739) =="function"){
                window.parent.fun_keyCode3739(keycode);
            }
        }
    },
    resizeToolbarMenu:function(){//功能：当窗体收缩时，表头菜单栏自动将显示不下的部分放到最右侧更多按钮对应的菜单中展示
        var _showMoreMenu = false;
        var _moreBut = $('#dounion_dot_more');
        if(_moreBut.length > 0){
            var _moreMenuId = _moreBut.attr('menuId');
            var _target = $('#' + _moreMenuId);
            if(_target.length > 0){
                _target.menu('hide');
                var _width = $(window).width();
                var _w = _moreBut.width() + 30;
                $(_moreBut.parent().children()).each(function(){
                    if($(this).attr('id') == 'dounion_dot_more'){
                        return;
                    }
                    var _title = $(this).find('span span:first').html();
                    var _myWidth = $(this).width();
                    _w += _myWidth;
                    var _v = $(this);
                    var _item = $(_target).menu('findItem',_title);
                    if (_w <= _width) {
                        _v.show();
                        if(_item){//动态菜单
                            $('#' + _moreMenuId).menu('hideItem', _item.target);
                        }
                    }else{
                        _showMoreMenu = true;
                        if(_item){//动态菜单
                            _v.hide();
                            $('#' + _moreMenuId).menu('showItem',  _item.target);
                        }
                    }
                });
            }
            if (_showMoreMenu) {
                _moreBut.show();
            } else {
                _moreBut.hide();
            }
        }
    },
    flushSelectedCount:function(){//左下角翻页栏，显示当前选中数量
        var rows = DU_DG.grid.datagrid('getSelections');
        if (rows){
            $('.selected-bar em').html(rows.length);
        } else {
            $('.selected-bar em').html("0");
        }
    },
    showFilterIco:function(){//datagrid 标题栏右侧筛选按钮点击事件，用于控制标题栏各栏目筛选按钮显示/隐藏
        var _target = $('.iconfont-filter');
        if(_target.length){
            if(_target.attr('doUnionFilter') == 'Y'){
                _target.attr('doUnionFilter','N');
                _target.removeClass('curr');
                $('i.datagrid-downmenu-icon[menuid]').each(function(){
                    $(this).hide();
                });

            }else{
                _target.attr('doUnionFilter','Y');
                _target.addClass('curr');
                $('i.datagrid-downmenu-icon[menuid]').each(function(){
                    $(this).show();
                });
            }
        }
    }
}