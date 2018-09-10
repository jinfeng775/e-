$(function(){


	//手机验证
$("#shouji").change(function(){
	
	if($(this).val().match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)!=null){
		chengGong($(this))
		
	}else{
		shiBai($(this),"请输入11位手机号")
	}	
});

//验证码
		var yanzma = sjyanZhengMa()

	$("#yztp_btn").click(function(){
		yanzma = sjyanZhengMa()
	$("#yztp").text(yanzma)
	})
	$("#yanz").change(function(){
		if($(this).val()==""){
			shiBai($(this),"用户不能为空")
		}
		if($(this).val() == yanzma){
			chengGong($(this))
		}else{
			$(this).next(".Registererror").remove();
			shiBai($(this),"请输入正确验证码")
		}
	})
	
	$(".dxyzm").mouseover(function(){
		shiBai($("#dxyzm"),"该功能未启用")
	})
	
	$(".dxyzm").mouseout(function(){
		$("#dxyzm").removeAttr("style")
		$(this).find(".Registererror").remove();
	})
	
	
	
	$("#yztp").text(yanzma)
	
	
	
	
	//用户
	$("#user").change(function(){
		if($(this).val()==""){
			shiBai($(this),"用户不能为空")
		}
	})
	
	
	//密码
	$("#mima").click(function(){
		$(".Pwdqiangdu").css("display","block")
	})
		
  var aStr = ["弱", "中", "强"];
            function checkStrong(val) {
                var modes = 0;
                if (val.length < 6) return 0;
                if (/\d/.test(val)) modes++;	//数字
                if (/[a-z]/.test(val)) modes++; //小写
                if (/[A-Z]/.test(val)) modes++; //大写  
                if (val.length > 12) return 3;
                return modes;
            };
            $("#mima").keyup(function() {
                var val = $(this).val();
                //$("#ePassword").text(val.length);
                var num = checkStrong(val);
                switch (num) {
                    case 0:
                        break;
                    case 1:
                        $(".strength").css('background', '').eq(num - 1).css('background', 'red').text(aStr[num - 1]);
                        break;
                    case 2:
                        $(".strength").css('background', '').eq(num - 1).css('background', 'yellow').text(aStr[num - 1]);
                        break;
                    case 3:
                        $(".strength").css('background', '').eq(num - 1).css('background', 'green').text(aStr[num - 1]);
                        break;
                    default:
                        break;
                }
            });

	
	
	
	function chengGong(obj){
		$("#phonemsg_div").css("display","none")
		
		obj.after('<img class="cgimg" src="https://static.epetbar.com/passport/new/images/ok_03.jpg">');
	obj.css({"border": "#ddd solid 1px","color": "#999"})
	}
	
	function shiBai(obj,txt){
		$(".cgimg").css("display","none")
		obj.css({"border": "#ff6f4a solid 1px","color": "#ff6f4a"})
		
		obj.after(`<div class="Registererror" id="phonemsg_div" style="width: 150px; display: block;">
                        <span id="phonemsg" class="onError">${txt}</span>
                    </div>`)
	}
	
	
	


	
	
	function sjyanZhengMa(){
			/*随机生成4位验证码*/
 /*step1:将所有字母，数字装入一个数组备用*/
 var codes=[];
 //数字:48-57;unicode编码
 for(var i=48;i<57;codes.push(i),i++);
 /*console.log(codes);*/
//大写字母:65-90;unicode编码
for(var i=60;i<90;codes.push(i),i++);
//小写字母:97-122;unicode编码
for(var i=97;i<122;codes.push(i),i++);
var arr=[];
for(var i=0;i<4;i++) {   //从0-61之间取随机数
    var index = Math.floor(Math.random() * (61 - 0 + 1) + 0);
    var char = String.fromCharCode(codes[index]);
    arr.push(char);
}
 /*console.log(arr);*/
 var code=arr.join("");
 		return code
	}
	
	
	
	
	
})
