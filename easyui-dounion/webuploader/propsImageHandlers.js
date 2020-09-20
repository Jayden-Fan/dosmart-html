/**
 * 文件上传助手v1.0
 * 开发人员：lipeng 由 handlers.js修改，用于动态属性字段的图片上传
 */
var UploadPropsImageHandler = {
		convertSize: function(size){
			if(!size) {
		        return '0 Bytes';
		    }
		    var sizeNames = [' Bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
		    var i = Math.floor(Math.log(size)/Math.log(1024));
		    var p = (i > 1) ? 2 : 0;
		    return (size/Math.pow(1024, Math.floor(i))).toFixed(p) + sizeNames[i];
		},
		/***
		 * 初始化单个上传控件
		 */
		initUploader: function(btnId, listId,sysCode){
		    var iAccept = ""
			var _baseUrl = Server.uploadPath, target = this;
			var $list = $("#" + listId);
			var exten = 'gif,jpg,jpeg,bmp,png';
			var types = 'image/gif,image/jpg,image/jpeg,image/bmp,image/png';
			var title = 'Images';
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
			    pick: '#'+btnId,
			    // 只允许选择图片文件。
			    accept: {
			    	title: title,
			    	extensions: exten,
			    	mimeTypes: types
			    }
			});

			//文件上传过程中创建进度条实时显示。
			uploader.on('uploadProgress', function(file) {
                var $li = $('#'+file.id);
                if(!$li.length){
                    $li = $('<a href="###" data-lightbox="color-item" target="_blank" id="' + file.id + '" title="&lt;&nbsp;'+ file.name +'&nbsp;&gt;"><img src="###" alt=""/><input type="hidden" name="state" value="success"><input type="hidden" name="fileName" value=""><input type="hidden" name="fparams" value=""></a>');
                    var _del = $('<img src="' + Server.ctx + '/statics/images/error1-icon.gif">');
                    $li.appendTo($list);
                    _del.appendTo($list);
                    _del.bind('click',function(){
                        $li.remove();
                        _del.remove();
                    });
                    _del.hide();
                    $li.bind('mouseout',function(){
                        _del.attr('t','');
                        setTimeout(function(){
                            if(!_del.attr('t')){
                                _del.hide()
                            }
                        },1000);
                    });
                    $li.bind('mouseover',function(){
                        _del.attr('t','Y');
                        _del.show();
                    });
                    _del.bind('mouseout',function(){
                        _del.attr('t','');
                        _del.hide();
                    });
                    _del.bind('mouseover',function(){
                        _del.attr('t','Y');
                        _del.show();
                    });
                }
            });
			uploader.on('uploadSuccess', function(file, data) {
				data = $.parseJSON((data._raw));
				var $li = $('#'+file.id)
				if(data.url){
                    $li.find("img[alt]").attr("src",data.url);
                    $li.attr("href",data.url);
				}
				$li.attr("data-lightbox",$li.parent().attr("id"));
				$li.find("input[name='fileName']").val(data.path);
			    var p = data.fileInfo;
			    $li.find("input[name='fparams']").val(JSON.stringify(p));
			});
			uploader.on('uploadError', function( file ) {
			});
			uploader.on( 'uploadComplete', function( file ) {
				$( '#'+file.id ).find(".progress_bar").fadeOut();
			});
		},
	/*
	 * 获取页面文件上传区域数据
	 */
	setUploaderData: function(queryData, fileListId){
		var fileNames = [];
		var fparams = [];
		$("#" + fileListId + ' input[name="fileName"]').each(function(i){
			fileNames[i] = $(this).val();
		});
		$("#" + fileListId + ' input[name="fparams"]').each(function(i){
			fparams[i] = $(this).val();
		});
		queryData.fileNames = fileNames.join("|");
		queryData.fparams = fparams.join("|");
		var dels = $("#" + fileListId).find(".delIds");
		if(dels.length > 0){
			var ids = dels.val();
			queryData.fileDels = ids;
		}
	},
	/**
	 * 加载文件列表
	 * @param bizId
	 * @param bizType
	 * @param areaId 区域id
	 */
	loadFileList: function(bizId, bizType, areaId, isView){
		//延迟加载图片
		var _baseUrl = Server.uploadPath , $list = $("#"+areaId);
		var target = this;
		$.post(Server.ctx+"/file/list.json?sourceId="+bizId+"&sourceType="+bizType, null, function(d){
			if(d && d.data){
				var data = d.data;
				if(data.length > 0) {
					for(var k = 0;k < data.length; k ++){
						var file = data[k];
                        var $li = $('<a href="' + file.url + '" data-lightbox="color-item" target="_blank" id="'+ file.id +'" tag="' + file.id +'" title="&lt;&nbsp;'+ file.realName +'&nbsp;&gt;"><img src="' + file.url + '" alt=""></a>');
                        $li.attr("data-lightbox",$list.attr("id"));
                        var _del = $('<img src="' + Server.ctx + '/statics/images/error1-icon.gif">');
						$li.appendTo($list);
                        _del.appendTo($list);
                        _del.bind('click',function(){
                            var _delIds = $list.find('.delIds').val();
                            var _id = $(this).prev().attr('tag');
                            var _ids = [];
                            if(_delIds){
                                _ids.push(_delIds);
                            }
                            _ids.push(_id);
                            $list.find('.delIds').val(_ids.join(','));
                            $(this).prev().remove();
                            $(this).remove();
                        });
                        _del.hide();
                        $li.bind('mouseout',function(){
                            var _target = $(this).next();
                            _target.attr('t','');
                            setTimeout(function(){
                                if(!_target.attr('t')){
                                    _target.hide()
                                }
                            },1000);
                        });
                        $li.bind('mouseover',function(){
                            var _target = $(this).next();
                            _target.attr('t','Y');
                            _target.show();
                        });
                        _del.bind('mouseout',function(){
                            $(this).attr('t','');
                            $(this).hide();
                        });
                        _del.bind('mouseover',function(){
                            $(this).attr('t','Y');
                            $(this).show();
                        });
					}
					$('<input class="delIds" type="hidden"/>').appendTo($list);
				}
			}
		}, "json");
	},
    loadFileView: function(bizId, bizType, areaId){
        //延迟加载图片
        var $list = $("#"+areaId);
        var target = this;
        $.post(Server.ctx+"/file/list.json?sourceId="+bizId+"&sourceType="+bizType, null, function(d){
            if(d && d.data){
                var data = d.data;
                if(data.length > 0) {
                    for(var k = 0;k < data.length; k ++){
                        var file = data[k];
                        $li = $('<a href="' + file.url + '" data-lightbox="color-item" target="_blank"><img src="' + file.url + '" alt=""></a>');
                        $li.appendTo($list);
                    }
                }
            }
        }, "json");
    }
};