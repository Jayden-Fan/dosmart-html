/**
 * 文件上传助手v1.0
 * 开发人员：liutao
 */
var UploadHandler = {
    convertSize: function(size) {
        if (!size) {
            return '0 Bytes';
        }
        var sizeNames = [' Bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
        var i = Math.floor(Math.log(size) / Math.log(1024));
        var p = (i > 1) ? 2 : 0;
        return (size / Math.pow(1024, Math.floor(i))).toFixed(p) + sizeNames[i];
    },
    /*
     * 获取页面文件上传区域数据
     */
    setUploaderData: function(queryData, fileListId) {
        var fileNames = [];
        var fparams = [];
        $("#" + fileListId + ' input[name="fileName"]').each(function(i) {
            fileNames[i] = $(this).val();
        });
        $("#" + fileListId + ' input[name="fparams"]').each(function(i) {
            fparams[i] = $(this).val();
        });
        queryData.fileNames = fileNames.join("|");
        queryData.fparams = fparams.join("|");
        var dels = $("#" + fileListId).find(".delIds");
        if (dels.length > 0) {
            var ids = dels.val();
            queryData.fileDels = ids;
            //$.post(Server.ctx + "/file/delete.json?ids="+ids, "", function(data){
            //});
        }
    },
    setUploaderDatas: function(fileListId, sourceType) {
        var fileNames = [];
        var fparams = [];
        $("#" + fileListId + ' input[name="fileName"]').each(function(i) {
            fileNames[i] = $(this).val();
        });
        $("#" + fileListId + ' input[name="fparams"]').each(function(i) {
            fparams[i] = $(this).val();
        });
        var fileList = [];
        if ($("#fileData").val() != "undefined" && $("#fileData").val() != null && $("#fileData").val() != "") {
            fileList = eval($("#fileData").val());
        }
        for (var i = 0; i < fileNames.length; i++) {
            var file = {};
            file.bizType = sourceType;
            file.fileName = fileNames[i];
            file.fparams = fparams[i];
            fileList.push(file);
        }
        $("#fileData").val($.toJSON(fileList));
        var dels = $("#" + fileListId).find(".delIds");
        if (dels.length > 0) {
            var ids = dels.val();
            $.post(Server.ctx + "/file/delete.json?ids=" + ids, "", function(data) {});
        }
    },


    /*
    setUploaderDatas: function(queryData, fileListIds, bizTypes){
    	var fileNames = [];
    	var fparams = [];
    	var fileList =[],bizType = []; 
    	fileList =fileListIds.split(",");
    	bizType = bizTypes.split(",");
    	var dels = [];
    	for(var k = 0; k < fileList.length; k++) {
    		var fileName = [],fparam = [];
    		$("#" + fileList[k] + ' input[name="fileName"]').each(function(i){
    			fileName[i] = $(this).val();
    		});
    		$("#" + fileList[k] + ' input[name="fparams"]').each(function(i){
    			fparam[i] = $(this).val() + "##" + bizType[k];
    		});
    		fileName = fileName.join("|");
    		fparam = fparam.join("|");
    		fileNames.push(fileName);
    		fparams.push(fparam);
    		var delfile = $("#" + fileList[k]).find(".delIds");
    		if(delfile.length >0) {
    			dels.push(delfile.val());
    		}
    		//dels.push($("#" + fileList[k]).find(".delIds").val());
    	}
    	queryData.fileNames = fileNames.join("#,#");
    	queryData.fparams = fparams.join("#,#");
    	if(dels.length > 0){
    		var ids = dels.join(",");
    		$.post(Server.ctx + "/file/delete.json?ids="+ids, "", function(data){
    		});
    	}
    },*/


    /*
     * 获取datagrid页面文件上传区域数据
     */
    setDataGridUploaderData: function(data, pickId, fileListId) {
        if (data) {
            for (var i in data) {
                var fileNames = [];
                var fparams = [];
                var row = data[i];
                var fid = pickId + row.timeStamp + fileListId;
                $('#' + fid).find('input[name="fileName"]').each(function(i) {
                    fileNames[i] = $(this).val();
                });
                $('#' + fid).find('input[name="fparams"]').each(function(i) {
                    fparams[i] = $(this).val();
                });
                row.fileNames = fileNames.join("|");
                row.fparams = fparams.join("|");
                var dels = $("#" + fid).find(".delIds");
                if (dels.length > 0) {
                    var ids = dels.val();
                    $.post(Server.ctx + "/file/delete.json?ids=" + ids, "", function(data) {});
                }
            }
        }
    },
    /**
     * 加载文件列表
     * @param bizId 
     * @param bizType
     * @param areaId 区域id
     */
    loadFileList: function(bizId, bizType, areaId, isView) {
        //延迟加载图片
        var _baseUrl = Server.uploadPath,
            $list = $("#" + areaId);
        var target = this;
        $.post(Server.ctx + "/file/list.json?sourceId=" + bizId + "&sourceType=" + bizType, null, function(d) {
            if (d && d.data) {
                var data = d.data;
                if (data.length > 0) { // 指对首检动态申请审批 附件审核
                    //有附件，显示附件
                    $("#file_div").show();
                    $("#spanImgShow").show();
                    $("#count" + areaId).val(data.length);
                    var fileNames = [];
                    var $li = '';
                    for (var k = 0; k < data.length; k++) {
                        var file = data[k];
                        var tsize = target.convertSize(file.attachSize);
                        fileNames[k] = file.realName;
                        if (areaId == "pictureList") {
                            $li = $("<span class=\"image-row\">" +
                                "<a href=\"" + file.url + "\" data-lightbox=\"image-set\" id=\"" + file.id + "\" class=\"image-link\" title=\"&lt;&nbsp;" + file.realName + "&nbsp;&gt;\">" +
                                "<img src=\"" + file.url + "\"/>" + "</a>"
                                // +
                                // "<span class=\"img-operate\"><i class=\"del\"></i><i class=\"magnifier\"></i></span>" +
                                // "</span>"
                            );
                        } else {
                            var _html = [];
                            var _icon = 'icon-other.png'; //icon-word.png,icon-ppt.png,icon-pic.png,icon-excel.png,icon-other.png
                            var _fileName = file.realName;
                            var _suffixName = '';
                            if (file.realName) {
                                var _index = file.realName.lastIndexOf('.');
                                if (_index > 0) {
                                    _fileName = file.realName.substring(0, _index);
                                    _suffixName = file.realName.substring(_index);
                                    var _suffix = _suffixName.substring(1).toLowerCase();
                                    if (_suffix == 'doc' || _suffix == 'docx') {
                                        _icon = 'icon-word.png';
                                    } else if (_suffix == 'xls' || _suffix == 'xlsx') {
                                        _icon = 'icon-excel.png';
                                    } else if (_suffix == 'png' || _suffix == 'jpg' || _suffix == 'jpeg' || _suffix == 'bpm' || _suffix == 'gif') {
                                        _icon = 'icon-pic.png';
                                    }
                                }
                            }
                            _html.push('<p class=\"ai-file\" id=\"');
                            _html.push(file.id);
                            _html.push('\"><span class=\"ai-file-name\"><img src=\"');
                            _html.push(Server.staticPath);
                            _html.push('/easyui-dounion/images/');
                            _html.push(_icon);
                            _html.push('\" alt=\"\"><em><i><a href=\"');
                            _html.push(file.url);
                            _html.push('\" target=\"_blank\">');
                            _html.push(_fileName);
                            _html.push('</a></i>');
                            _html.push(_suffixName);
                            _html.push('</em><i class=\"ai-file-size\">(');
                            _html.push(tsize);
                            _html.push(')</i></span><span class=\"ai-file-operat\"><span class=\"ai-file-link\"><a href=\"#nogo\" class="del">删除</a>');
                            _html.push('<input type=\"hidden\" name=\"id\" value=\"');
                            _html.push(file.id);
                            _html.push('\"></span></span></p>');
                            $li = $(_html.join(''));

                            // $li = $("<p class=\"ad_fm_annex\" id=\""+file.id+"\"><span class=\"file\">" +
                            // 		"<img src=\""+_baseUrl+"/fj-icon.png\" alt=\"\"><em title=\""+file.realName+"\">" +
                            // 				"<a href=\""+file.url+"\" target=\"_blank\">"+file.realName+"</a></em>" +
                            // 						"<i class=\"text_size\">("+tsize+")</i></span><b class=\"progress_bar\" style=\"display:none;\">" +
                            // 								"<i style=\"width: 0%;\"></i></b><a href=\"#nogo\" class=\"del\">删除</a>" +
                            // 								"<input type=\"hidden\" name=\"id\" value=\""+file.id+"\"></p>");
                        }
                        if (k != 0) {
                            //$(".image-link").attr("hidden", true);
                        }
                        $li.appendTo($list);
                    }
                    $("#imgNum").html(data.length);
                    $("#name" + areaId).val(fileNames.join(","));
                } else {
                    //无附件，不显示附件2个字
                    $("#file_div").hide();
                }
                if (isView) {
                    $list.find(".del").remove();
                } else {
                    $list.find(".del").each(function() {
                        $(this).click(function() {
                            var id = $(this).parent().prev().attr("id"),
                                tparent = $(this).parent().parent().parent();
                            if (id) {
                                var dels = tparent.parent().find(".delIds");
                                if (dels.length == 0) {
                                    dels = $("<input class=\"delIds\" type=\"hidden\"/>");
                                    dels.appendTo(tparent.parent());
                                }
                                var delIds = dels.val();
                                var irr = [];
                                if (delIds != "") {
                                    irr = delIds.split(",");
                                }
                                irr.push(id);
                                dels.val(irr.join(","));
                                $(this).parent().parent().remove();
                            }
                        });
                    });
                }
                $list.find(".magnifier").each(function() {
                    $(this).click(function() {
                        $(this).parent().prev().click();
                    });
                });
            }
        }, "json");
    },
    /**
     * 加载文件列表id
     * @param bizId
     * @param bizType
     * @param areaId
     */
    loadDataGridFileList: function(dataList, fpickId, flistId, isView) {
        $("." + flistId).each(function() {
            $(this).remove();
        });
        //if($("."+flistId).length > 0) return;
        var target = this;
        if (dataList) {
            var _baseUrl = Server.uploadPath;
            var bizId, $list;
            for (var i in dataList) {
                var file = dataList[i];
                if (bizId != file.sourceId) { //如果不同
                    bizId = file.sourceId;
                    var lid = fpickId + bizId + flistId;
                    $list = $("<div id=\"" + lid + "\" class=\"" + flistId + " upload-filelist\" style=\"width:200px; height:150px; overflow-y:scroll; position:absolute;display:none;\"></div>");
                    $list.appendTo($("body"));
                }
                var tsize = target.convertSize(file.attachSize);
                var $li = $("<p class=\"ad_fm_annex\" id=\"" + file.id + "\"><span class=\"file\"><img src=\"" + _baseUrl + "/fj-icon.png\" alt=\"\"><em title=\"" + file.realName + "\"><a href=\"" + file.url + "\" target=\"_blank\">" + file.realName + "</a><i class=\"text_size\">(" + tsize + ")</i></em></span><b class=\"progress_bar\" style=\"display:none;\"><i style=\"width: 0%;\"></i></b><a href=\"#nogo\" class=\"del\">删除</a><input type=\"hidden\" name=\"id\" value=\"" + file.id + "\"></p>");
                $li.appendTo($list);
            }
            if (isView) {
                $("." + flistId).find(".del").remove();
            } else {
                $("." + flistId).find(".del").each(function() {
                    $(this).click(function() {
                        var id = $(this).next().val(),
                            tparent = $(this).parent();;
                        $(this).parent().fadeOut(function() {
                            if (id) {
                                if (id) {
                                    var dels = tparent.parent().find(".delIds");
                                    if (dels.length == 0) {
                                        dels = $("<input class=\"delIds\" type=\"hidden\"/>");
                                        dels.appendTo(tparent.parent());
                                    }
                                    var delIds = dels.val();
                                    var irr = [];
                                    if (delIds != "") {
                                        irr = delIds.split(",");
                                    }
                                    irr.push(id);
                                    dels.val(irr.join(","));
                                    tparent.remove();
                                }
                            }
                        });
                    });
                });
            }
        }
    },
    /***
     * 初始化单个上传控件
     */
    initUploader: function(btnId, listId, sysCode) {
        var Server = {}; //新增加的这行
        var iAccept = ""
        var _baseUrl = Server.uploadPath,
            target = this;
        var $list = $("#" + listId);
        var exten = '';
        var types = '';
        var title = '';
        if (listId == 'pictureList') {
            exten = 'gif,jpg,jpeg,bmp,png';
            title = 'Images';
            types = 'image/gif,image/jpg,image/jpeg,image/bmp,image/png';
        }
        var uploader = WebUploader.create({
            // 选完文件后，是否自动上传。
            resize: false,
            compress: false,
            auto: true,
            // swf文件路径
            swf: _baseUrl + '/Uploader.swf',
            // 文件接收服务端。
            server: Server.ctx + '/file/upload.json?sysCode=' + sysCode,
            duplicate: true,
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#' + btnId,
            // 只允许选择图片文件。
            accept: {
                title: title,
                extensions: exten,
                mimeTypes: types
            }
        });

        //文件上传过程中创建进度条实时显示。
        uploader.on('uploadProgress', function(file, percentage) {
            var $li = $('#' + file.id),
                $percent = $li.find(".progress_bar");
            var tsize = target.convertSize(file.size);
            if (!$li.length) {
                if (listId == 'pictureList') {
                    $("#spanImgShow").show();
                    $li = $("<span class=\"image-row\" id=\"" + file.id + "\">" +
                        "<a href=\"###\" data-lightbox=\"image-set\" class=\"image-link\" title=\"&lt;&nbsp;" + file.name + "&nbsp;&gt;\">" +
                        "<img src=\"###\"/>" +
                        "</a>" +
                        // "<span class=\"img-operate\"><i class=\"del\"></i><i class=\"magnifier\"></i></span>" +
                        "<input type=\"hidden\" name=\"state\" value=\"success\">" +
                        "<input type=\"hidden\" name=\"fileName\" value=\"\">" +
                        "<input type=\"hidden\" name=\"fparams\" value=\"\">" +
                        "</span>");
                } else {
                    var _html = [];
                    var _icon = 'icon-other.png'; //icon-word.png,icon-ppt.png,icon-pic.png,icon-excel.png,icon-other.png
                    var _fileName = file.name;
                    var _suffixName = '';
                    if (file.name) {
                        var _index = file.name.lastIndexOf('.');
                        if (_index > 0) {
                            _fileName = file.name.substring(0, _index);
                            _suffixName = file.name.substring(_index);
                            var _suffix = _suffixName.substring(1).toLowerCase();
                            if (_suffix == 'doc' || _suffix == 'docx') {
                                _icon = 'icon-word.png';
                            } else if (_suffix == 'xls' || _suffix == 'xlsx') {
                                _icon = 'icon-excel.png';
                            } else if (_suffix == 'png' || _suffix == 'jpg' || _suffix == 'jpeg' || _suffix == 'bpm' || _suffix == 'gif') {
                                _icon = 'icon-pic.png';
                            }
                        }
                    }
                    _html.push('<p class=\"ai-file\" id=\"');
                    _html.push(file.id);
                    _html.push('\"><span class=\"ai-file-name\"><img src=\"');
                    _html.push(Server.staticPath);
                    _html.push('/easyui-dounion/images/');
                    _html.push(_icon);
                    _html.push('\" alt=\"\"><em><i>');
                    _html.push('<a href=\"###\" class=\"fileUrl\" target=\"_blank\">');
                    _html.push(_fileName);
                    _html.push('</a>');
                    _html.push('</i>');
                    _html.push(_suffixName);
                    _html.push('</em><i class=\"ai-file-size\">(');
                    _html.push(tsize);
                    _html.push(')</i></span><b class=\"progress_bar\"><i style=\"width: 0%;\"></i></b><span class=\"ai-file-operat\"><span class=\"ai-file-link\"><a href=\"#nogo\" class="del">删除</a></span></span>');
                    _html.push('<input type=\"hidden\" name=\"state\" value=\"success\"><input type=\"hidden\" name=\"fileName\" value=\"\"><input type=\"hidden\" name=\"fparams\" value=\"\">');
                    _html.push('</p>');
                    $li = $(_html.join(''));
                }
                $li.appendTo($list);
                $li.find(".del").click(function() {
                    var fname = $li.find("input[name='fileName']").val();
                    console.log(fname);
                    $li.fadeOut(function() {
                        if (fname) {
                            // $.post(Server.ctx + "/file/delete.json?fname="+fname, "", function(data){
                            $li.remove();
                            // });
                        }
                    });
                });
                $li.find(".magnifier").click(function() {
                    $(this).parent().prev().click();
                });
            }
            $percent.find("i").css('width', percentage * 100 + '%');
        });
        //当有文件被添加进队列的时候
        /* uploader.on( 'fileQueued', function( file ) {
            $list.append( '<div id="' + file.id + '" class="item">' +
                '<h4 class="info">' + file.name + '</h4>' +
                '<p class="state">等待上传...</p>' +
            '</div>' );
        }); */
        uploader.on('uploadSuccess', function(file, data) {
            data = $.parseJSON((data._raw));
            var $li = $('#' + file.id)
            if (listId == 'pictureList') {
                if (data.url) {
                    if (data.url.substring(0, 4) == 'http') {
                        $li.find("img").attr("src", data.url);
                        $li.find(".image-link").attr("href", data.url);
                    } else {
                        $li.find("img").attr("src", Server.ctx + '/file/download.json?filePath=' + data.url);
                        $li.find(".image-link").attr("href", Server.ctx + '/file/download.json?filePath=' + data.url);
                    }
                    var length = $("#pictureList a").length;
                    console.log($("#pictureList a"));
                    $("#imgNum").html(length);
                }
            } else {
                if (data.url) {
                    if (data.url.substring(0, 4) == 'http') {
                        $li.find(".fileUrl").attr("href", data.url);
                    } else {
                        $li.find(".fileUrl").attr("href", Server.ctx + '/file/download.json?filePath=' + data.url);
                    }
                }
            }
            $li.find("input[name='fileName']").val(data.path);
            var p = data.fileInfo;
            $li.find("input[name='fparams']").val(JSON.stringify(p));
        });
        uploader.on('uploadError', function(file) {});
        uploader.on('uploadComplete', function(file) {
            $('#' + file.id).find(".progress_bar").fadeOut();
        });
    },

    /***
     * 初始化上传控件
     */
    initImportLoader: function(btnId, listId, className, tableName, tableType, entityId) {
        var _baseUrl = Server.uploadPath,
            target = this;
        var $list = $("#" + listId);
        var uploader = WebUploader.create({
            // 选完文件后，是否自动上传。
            resize: false,
            compress: false,
            auto: true,
            // swf文件路径
            swf: _baseUrl + '/Uploader.swf',
            // 文件接收服务端。
            server: Server.ctx + '/' + className + '/importFile.json?tableName=' + tableName + '&className=' + className + '&tableType=' + tableType + "&entityId=" + entityId,
            // 重复附件
            duplicate: true,
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#' + btnId
                // 只允许选择图片文件。
                /* accept: {
                    title: 'Images',
                    width: 110,
                    height: 110,
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                } */
        });

        uploader.on('uploadProgress', function(file, percentage) {
            Page.loading("正在导入，请稍等。");
        });
        //文件上传过程中创建进度条实时显示。
        /*uploader.on('uploadProgress', function(file, percentage) {
            var $li = $('#'+file.id), $percent = $li.find(".progress_bar");
            var tsize = target.convertSize(file.size);
        	if(!$li.length){
        		$li = $("<p class=\"ad_fm_annex\" id=\""+file.id+"\"><span class=\"file\"><img src=\""+_baseUrl+"/fj-icon.png\" alt=\"\"><em title=\""+file.name+"\"><a href=\"###\" class=\"fileUrl\" target=\"_blank\">"+file.name+"</a><i class=\"text_size\">("+tsize+")</i></em></span><b class=\"progress_bar\"><i style=\"width: 0%;\"></i></b><a href=\"#nogo\" class=\"del\">删除</a><input type=\"hidden\" name=\"state\" value=\"success\"><input type=\"hidden\" name=\"fileName\" value=\"\"><input type=\"hidden\" name=\"fparams\" value=\"\"></p>");
        		$li.appendTo($list);
        		$li.find(".del").click(function(){
        			var fname= $li.find("input[name='fileName']").val();
        			$li.fadeOut(function(){
        				if(fname){
        					$.post(Server.ctx + "/file/delete.json?fname="+fname, "", function(data){
        						$li.remove();
        					});
        				}
        			});
        		});
        	}
        	$percent.find("i").css('width', percentage * 100 + '%'); 
        });*/

        //当有文件被添加进队列的时候
        /* uploader.on( 'fileQueued', function( file ) {
            $list.append( '<div id="' + file.id + '" class="item">' +
                '<h4 class="info">' + file.name + '</h4>' +
                '<p class="state">等待上传...</p>' +
            '</div>' );
        }); */
        uploader.on('uploadSuccess', function(file, data) {
            if (data.error) {
                Page.alert("友情提示", data.error);
                return;
            } else {
                var tableType = data.tableType;
                if (tableType == "edatagrid") {
                    $("#" + data.tableName).edatagrid('endEdit', $("#" + data.tableName).edatagrid('options').editIndex);
                }
                var queryData = {};
                var details = $("#" + data.tableName).edatagrid("getRows");
                //合同导入明细后
                if (data.tableName == "biz_contractGoods_dg") {
                    Page.alert("友情提示", "导入成功!");
                    var newList = data.list;
                    if (details.length > 1 && details[details.length - 1].goods != null) {
                        newList = details.concat(data.list);
                    } else if (details.length > 1) {
                        newList = details.concat(data.list);
                        newList.splice(details.length - 1, 1);
                    }
                    $("#" + data.tableName).edatagrid('loadData', newList);
                    publicFun.calculateDg(data.tableName, -1, "qty", "price", "rebate", "amount", "amount", "count");
                } else {
                    Page.alert("友情提示", "上传成功!");
                }
            }
        });
        //备份修改前的方法
        //			uploader.on('uploadSuccess', function(file, data) {
        //				if(data.error) {
        //					Page.alert("友情提示", data.error);
        //					return;
        //				} else {
        //					var tableType = data.tableType;
        //					if(tableType == "edatagrid") {
        //						$("#" + data.tableName).edatagrid('endEdit', $("#" + data.tableName).edatagrid('options').editIndex);
        //					}
        //					var queryData = {};
        //					var details = $("#" + data.tableName).edatagrid("getRows");
        //					var detailList = $.toJSON(details);
        //					queryData.fileUrl = data.path;
        //					queryData.detailList = detailList;
        //					queryData.entityId = data.entityId;
        //					$("#" + data.tableName).edatagrid('loading');
        //					$.post(Server.ctx + '/' + data.className + '/importData.json', queryData, function(dataP){
        //						if(dataP) {
        //							if(dataP.error) {
        //								$("#" + data.tableName).edatagrid('loaded');
        //								Page.alert("友情提示", dataP.error);
        //							} else {
        //								if(data.tableName == "qc_check_problem_done_dg"){
        //									Page.alert("友情提示", "上传成功!请10分钟后查看。");
        //									$("#" + data.tableName).edatagrid('reload');
        //								}else{
        //									$("#" + data.tableName).edatagrid('loadData',dataP.rows);
        //									$("#" + data.tableName).edatagrid('loaded');
        //								}
        //							}
        //						}
        //					}, "json");
        //				}
        //			});

        /*uploader.on( 'uploadError', function( file ) {
        });

        uploader.on( 'uploadComplete', function( file ) {
        	$( '#'+file.id ).find(".progress_bar").fadeOut();
        });*/
    },

    /***
     * 初始化datagrid上传控件
     */
    initDataGridUploader: function(btnId, listId) {
        var _baseUrl = Server.uploadPath,
            target = this;
        $("." + btnId).each(function() {
            if (!$(this).children().hasClass("webuploader-pick")) {
                var uploader = WebUploader.create({
                    // 选完文件后，是否自动上传。
                    resize: false,
                    compress: false,
                    auto: true,
                    // swf文件路径
                    swf: _baseUrl + '/Uploader.swf',
                    // 文件接收服务端。
                    server: Server.ctx + '/file/upload.json',
                    duplicate: true,
                    // 选择文件的按钮。可选。
                    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                    pick: '#' + $(this).attr("id")
                        // 只允许选择图片文件。
                        /* accept: {
                            title: 'Images',
                            width: 110,
                            height: 110,
                            extensions: 'gif,jpg,jpeg,bmp,png',
                            mimeTypes: 'image/*'
                        } */
                });


                //文件上传过程中创建进度条实时显示。
                uploader.on('uploadProgress', function(file, percentage) {
                    var $li = $('#' + file.id),
                        $percent = $li.find(".progress_bar");
                    var tsize = target.convertSize(file.size);
                    var lid = uploader.options.pick.replace("#", "") + listId;
                    var $list = $("body").find("#" + lid);
                    if ($list.length == 0) {
                        $list = $("<div id=\"" + lid + "\" class=\"" + listId + " upload-filelist\" style=\"width:200px; height:150px; overflow-y:scroll; position:absolute;display:none;\"></div>");
                        $list.appendTo($("body"));
                    }
                    if (!$li.length) {
                        $li = $("<p class=\"ad_fm_annex\" id=\"" + file.id + "\"><span class=\"file\"><img src=\"" + _baseUrl + "/fj-icon.png\" alt=\"\"><em title=\"" + file.name + "\"><a href=\"###\" class=\"fileUrl\" target=\"_blank\">" + file.name + "</a><i class=\"text_size\">(" + tsize + ")</i></em></span><b class=\"progress_bar\"><i style=\"width: 0%;\"></i></b><a href=\"#nogo\" class=\"del\">删除</a><input type=\"hidden\" name=\"state\" value=\"success\"><input type=\"hidden\" name=\"fileName\" value=\"\"><input type=\"hidden\" name=\"fparams\" value=\"\"></p>");
                        $li.appendTo($list);
                        $li.find(".del").click(function() {
                            var fname = $li.find("input[name='fileName']").val();
                            $li.fadeOut(function() {
                                if (fname) {
                                    $.post(Server.ctx + "/file/delete.json?fname=" + fname, "", function(data) {
                                        $li.remove();
                                    });
                                }
                            });
                        });
                    }
                    $percent.find("i").css('width', percentage * 100 + '%');
                    var count = $("#" + lid).children().length;
                    $(uploader.options.pick).next().text("查看(" + count + ")");
                    $(uploader.options.pick).next().show();
                });

                //当有文件被添加进队列的时候
                /* uploader.on( 'fileQueued', function( file ) {
                    $list.append( '<div id="' + file.id + '" class="item">' +
                        '<h4 class="info">' + file.name + '</h4>' +
                        '<p class="state">等待上传...</p>' +
                    '</div>' );
                }); */

                uploader.on('uploadSuccess', function(file, data) {
                    data = $.parseJSON((data._raw));
                    $li = $('#' + file.id);
                    $li.find("input[name='fileName']").val(data.fname);
                    $li.find(".fileUrl").attr("href", data.url);
                    var p = data.fileInfo;
                    $li.find("input[name='fparams']").val(JSON.stringify(p));
                });

                uploader.on('uploadError', function(file) {});

                uploader.on('uploadComplete', function(file) {
                    $('#' + file.id).find(".progress_bar").fadeOut();
                });
            }
        });
    },
    //查看文件
    viewFile: function() {
        $(".fview").each(function() {
            $(this).click(function(e) {
                var fid = $(this).prev().attr("id");
                var fidClass = $(this).prev().attr("class");
                if (fidClass.indexOf("filePicker1") != "-1") {
                    var flist = $("#" + fid + "dfileList1");
                } else {
                    var flist = $("#" + fid + "dfileList");
                }
                var pos = $(this).offset(),
                    w = flist.width(),
                    h = flist.height();
                var selfX = w + pos.left;
                var selfY = h + pos.top;
                var bodyW = document.documentElement.clientWidth + document.documentElement.scrollLeft;
                var bodyH = document.documentElement.clientHeight + document.documentElement.scrollTop;
                if (selfX > bodyW && selfY > bodyH) {
                    selfX = pos.left - w - 20;
                    selfY = pos.top - h - 20;
                } else if (selfY > bodyH) {
                    selfX = pos.left + 20;
                    selfY = pos.top - h - 20;
                } else if (selfX > bodyW) {
                    selfX = pos.left - w - 20;
                    selfY = pos.top + 20;
                } else {
                    selfX = pos.left + 20;
                    selfY = pos.top + 20;
                }
                flist.css({
                    top: selfY,
                    left: selfX,
                    display: ""
                });
            });
        });
    },
    /***
     * 初始化上传控件
     */
    initWindowUploader: function(btnId, listId, timeStamp, ncType) {
        var _baseUrl = Server.uploadPath,
            target = this;
        var $list = $("#" + listId);
        var uploader = WebUploader.create({
            // 选完文件后，是否自动上传。
            resize: false,
            compress: false,
            auto: true,
            // swf文件路径
            swf: _baseUrl + '/Uploader.swf',
            // 文件接收服务端。
            server: Server.ctx + '/file/upload.json?timeStamp=' + timeStamp + "&ncType=" + ncType,
            duplicate: true,
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#' + btnId
                // 只允许选择图片文件。
                /* accept: {
                    title: 'Images',
                    width: 110,
                    height: 110,
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                } */
        });

        //文件上传过程中创建进度条实时显示。
        uploader.on('uploadProgress', function(file, percentage) {
            var $li = $('#' + file.id),
                $percent = $li.find(".progress_bar");
            var tsize = target.convertSize(file.size);
            if (!$li.length) {
                $li = $("<p class=\"ad_fm_annex\" id=\"" + file.id + "\"><span class=\"file\"><img src=\"" + _baseUrl + "/fj-icon.png\" alt=\"\"><em title=\"" + file.name + "\"><a href=\"###\" class=\"fileUrl\" target=\"_blank\">" + file.name + "</a><i class=\"text_size\">(" + tsize + ")</i></em></span><b class=\"progress_bar\"><i style=\"width: 0%;\"></i></b><a href=\"#nogo\" class=\"del\">删除</a><input type=\"hidden\" name=\"id\" value=\"" + file.id + "\"><input type=\"hidden\" name=\"state\" value=\"success\"><input type=\"hidden\" name=\"fileName\" value=\"\"><input type=\"hidden\" name=\"fparams\" value=\"\"></p>");
                $li.appendTo($list);
                $li.find(".del").click(function() {

                    var fname = $li.find("input[name='fileName']").val();
                    var id = $(this).next().val(),
                        tparent = $(this).parent();
                    $(this).parent().fadeOut(function() {
                        if (id) {
                            var dels = tparent.parent().find(".delIds");
                            if (dels.length == 0) {
                                dels = $("<input class=\"delIds\" type=\"hidden\"/>");
                                dels.appendTo(tparent.parent());
                            }
                            var delIds = dels.val();
                            var irr = [];
                            if (delIds != "") {
                                irr = delIds.split(",");
                            }
                            irr.push(id);
                            dels.val(irr.join(","));
                            if (fname) {
                                $.post(Server.ctx + "/file/delete.json?fname=" + fname, "", function(data) {});
                            }
                            tparent.remove();
                        }
                    });
                });
            }
            $percent.find("i").css('width', percentage * 100 + '%');
        });

        //当有文件被添加进队列的时候
        /* uploader.on( 'fileQueued', function( file ) {
            $list.append( '<div id="' + file.id + '" class="item">' +
                '<h4 class="info">' + file.name + '</h4>' +
                '<p class="state">等待上传...</p>' +
            '</div>' );
        }); */

        uploader.on('uploadSuccess', function(file, data) {
            var fileList = [];
            var files = {};
            data = $.parseJSON((data._raw));
            $li = $('#' + file.id);
            $li.find(".fileUrl").attr("href", data.url);
            $li.find("input[name='fileName']").val(data.fname);
            var p = data.fileInfo;
            $li.find("input[name='fparams']").val(JSON.stringify(p));
            if (data.ncType == '20026-30') {
                if ($("#fileData").val() != "undefined" && $("#fileData").val() != null && $("#fileData").val() != "") {
                    fileList = eval($("#fileData").val());
                }
            } else if (data.ncType == '20026-590') {
                if ($("#fileData1").val() != "undefined" && $("#fileData1").val() != null && $("#fileData1").val() != "") {
                    fileList = eval($("#fileData1").val());
                }
            } else if (data.ncType == '20026-600') {
                if ($("#fileData2").val() != "undefined" && $("#fileData2").val() != null && $("#fileData2").val() != "") {
                    fileList = eval($("#fileData2").val());
                }
            } else if (data.ncType == '20026-610') {
                if ($("#fileData3").val() != "undefined" && $("#fileData3").val() != null && $("#fileData3").val() != "") {
                    fileList = eval($("#fileData3").val());
                }
            }

            files.id = file.id;
            files.name = file.name;
            files.attachSize = file.size;
            files.realName = file.name;
            files.fname = data.fname;
            files.fileName = data.fname;
            files.url = data.url;
            files.fparams = JSON.stringify(p);
            files.sourceId = data.timeStamp;
            files.ncType = data.ncType;
            fileList.push(files);

            if (data.ncType == '20026-30') {
                $("#fileData").val($.toJSON(fileList));
            } else if (data.ncType == '20026-590') {
                $("#fileData1").val($.toJSON(fileList));
            } else if (data.ncType == '20026-600') {
                $("#fileData2").val($.toJSON(fileList));
            } else if (data.ncType == '20026-610') {
                $("#fileData3").val($.toJSON(fileList));
            }

        });

        uploader.on('uploadError', function(file) {});

        uploader.on('uploadComplete', function(file) {
            $('#' + file.id).find(".progress_bar").fadeOut();
        });
    },

    /**
     * 加载文件列表
     * @param bizId 
     * @param bizType
     * @param areaId 区域id
     */
    loadFileListByData: function(data, areaId, isView) {
        var _baseUrl = Server.uploadPath,
            $list = $("#" + areaId);
        var target = this;
        if (data) {
            var fileNames = [];
            for (var i = 0; i < data.length; i++) {
                var file = data[i];
                var tsize = target.convertSize(file.attachSize);
                fileNames[i] = file.realName;
                var $li = $("<p class=\"ad_fm_annex\" id=\"" + file.id + "\"><span class=\"file\"><img src=\"" + _baseUrl + "/fj-icon.png\" alt=\"\"><em title=\"" + file.realName + "\"><a href=\"" + file.url + "\" target=\"_blank\">" + file.realName + "</a></em><i class=\"text_size\">(" + tsize + ")</i></span><b class=\"progress_bar\" style=\"display:none;\"><i style=\"width: 0%;\"></i></b><a href=\"#nogo\" class=\"del\">删除</a><input type=\"hidden\" name=\"id\" value=\"" + file.id + "\"></p>");
                $li.appendTo($list);
            }
            $("#name" + areaId).val(fileNames.join(","));
            if (isView) {
                $list.find(".del").remove();
            } else {
                $list.find(".del").each(function() {
                    $(this).click(function() {
                        var id = $(this).next().val(),
                            tparent = $(this).parent();
                        $(this).parent().fadeOut(function() {
                            if (id) {
                                var dels = tparent.parent().find(".delIds");
                                if (dels.length == 0) {
                                    dels = $("<input class=\"delIds\" type=\"hidden\"/>");
                                    dels.appendTo(tparent.parent());
                                }
                                var delIds = dels.val();
                                var irr = [];
                                if (delIds != "") {
                                    irr = delIds.split(",");
                                }
                                irr.push(id);
                                dels.val(irr.join(","));
                                tparent.remove();
                            }
                        });
                    });
                });
            }
        }
    }
};