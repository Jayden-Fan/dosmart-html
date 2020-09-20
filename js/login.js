$(function () {
    /*初始化校验插件*/
    /*1.是form表单结构 并且有一个提交按钮*/
    /*2.折插件就是jquery插件 样式和bootstrap风格一致*/
    $('#login').bootstrapValidator({
    }).on('success.form.bv', function (e) {
        /*校验成功的时候出发*/
        /*组织表单的默认提交  使用ajax提交*/
        e.preventDefault();
        /*后台校验用户名和密码*/
        var $form = $(e.target);
		// console.log($form);
        $.ajax({
            type:'post',
            url:'dosmart-web/index/login.json',
            data:$form.serialize(),
            dataType:'json',
            success:function (data) {
                /*业务成功*/
				debugger;
                if(data.success == true){
                    /*跳转后台的首页*/
                    location.href = '/map.html';
                }
                /*业务失败*/
                else {
                    if(data.error == 1000){
                        /*用户名错误*/
                        /*设置用户名这个表单元素的校验状态为失败*/
                        /*NOT_VALIDATED 还没校验, VALIDATING 校验中, INVALID 失败 or VALID 成功*/
                        /*1.获取校验组件*/
                        /*2.调研更改状态的函数*/
                        /*3.校验的表单，改成什么状态，使用哪个校验规则*/
                        $form.data('bootstrapValidator').updateStatus('username','INVALID','callback');
                    }else if(data.error == 1001){
                        /*密码错误*/
                        $form.data('bootstrapValidator').updateStatus('password','INVALID','callback');
                    }
                }
            }
        });
    });
});