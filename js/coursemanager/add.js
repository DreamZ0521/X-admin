layui.use(['form', 'layer','jquery'],
	function() {
		$ = layui.jquery;
        var form = layui.form,
        layer = layui.layer;
        //自定义验证规则
        form.verify({
			nikename: function(value) {
				if (value.length < 5) {
					return '昵称至少得5个字符啊';
                }
            },
            pass: [/(.+){6,12}$/, '密码必须6到12位'],
            repass: function(value) {
				if ($('#L_pass').val() != $('#L_repass').val()) {
					return '两次密码不一致';
                }
            }
        });
        //监听提交
        form.on('submit(add)',
			function(data) {
				console.log(data);
				//发异步，把数据提交给php
                layer.alert("增加成功", {icon: 6},
					function() {
						//关闭当前frame
						xadmin.close();
						// 可以对父窗口进行刷新 
						xadmin.father_reload();
					}
				);
                return false;
            }
		);
    }
);
var _hmt = _hmt || []; 
(function() {
	var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();