$(function(){
var tijiao = 0;

	//手机验证
$("#shouji").change(function(){
	
	if($(this).val().match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)!=null){
		  $(".shoujidd").find(".Registererror").remove();
		chengGong($(this))
		tijiao++;
		jiancha()
	}else{
		qingchudiji()
		tijiao--;
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
			tijiao++;
			  $(".yanzdd").find(".Registererror").remove();
			chengGong($(this))
			jiancha()
		}else{
			qingchudiji()
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
			jiancha()
			qingchudiji()
			shiBai($(this),"用户不能为空")
		}else{
			tijiao++;
			 $(".userdd").find(".Registererror").remove();
				chengGong($(this))
		}
	})
	
	
	//密码
	$("#mima").click(function(){
		$(".Pwdqiangdu").css("display","block")
	})
	var	ke = 0  //判断按键里面的密码是否正确
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
            	
            	if($(this).val().length>=6){
            	ke = 1
            		 chengGong($(this))
            $(".mimad").find(".Registererror").remove();
                var val = $(this).val();
                jiancha()
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
               
                	}else{
                		
           
		 $(".mimad").find(".Registererror").remove();
				shiBai($(this),"密码不够6位")
				qingchudiji()
                	}
            });

	var kee =0;
	
		$("#quepass").keyup(function(){
			
			if($("#mima").val()==$(this).val()){
				kee = 1
				  $(".quepassdd").find(".Registererror").remove();
				chengGong($(this))
				jiancha()
			}else{
				kee = 0 
				$("#dxyzm").removeAttr("style")
		$(".quepassdd").find(".Registererror").remove();
				shiBai($(this),"密码不一致")
				qingchudiji()
			}
				
		})
	
	
	
	
	
	

	
	
	
	
	
	
	
//	$("body").click(function(){
//		jiancha()
//	})
	
	
	
	
	
	
	$("#tijiaobtn").click(function(event){
		
		jiancha()
		 event.stopPropagation();
			
	})
		
	
	
	
	
	
	
	function jiancha(){
		
		console.log(tijiao+ke+kee,kee)
		if($("#tijiaobtn").prop("checked")){
			if(tijiao+ke+kee == 5 || $("#tijiaobtn").prop("checked")){
				$(".Otherregister").css("background","rgb(51,203,152)")
				
				$(".Otherregister").click(function(){
//					
//					$.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"register",username:$("#shouji").val(),password:$("#mima").val()},function(data){
//						if(data.code==2001){
//							alert("该用户已被注册")
//						}
//						if(data.code==0){
//							alert("注册成功")
//							location.href = "denglu.html"
//						}
//					})
					$.ajax({
						type:"post",
						url:"php/showList.php",
						success:function(deta){
							var tag = true;
						var	deta = JSON.parse(deta)
							console.log(deta)
							for(var i in deta){
								if(deta[i].zhanghu==$("#shouji").val()){
									tag = false;
									alert("用户已存在！")
									
								}

							}
							if(tag){
									$.ajax({
						type:"post",
						url:"php/addWq.php",
						data:{
							zhanghu:$("#shouji").val(),
							mima:$("#mima").val(),
							spid:" "
						},
						success:function(ee){
							alert("注册成功")
							location.href = "denglu.html"
							}
					})
							}
							
							
						}
					})
					
				
					
				
					
					
					
				})
			}
		
		
		
		
		}else{
			qingchudiji()
		}
		
	}
	
	
	
	
	
	
	function qingchudiji(){
		$(".Otherregister").unbind();
				$(".Otherregister").css("background","#ededed")
	}
	
	
	
	
	function chengGong(obj){
//		$("#phonemsg_div").css("display","block")
		
		obj.after('<img class="cgimg" src="https://static.epetbar.com/passport/new/images/ok_03.jpg">');
	obj.css({"border": "#ddd solid 1px","color": "#999"})
	}
	
	function shiBai(obj,txt){
//		$(".cgimg").css("display","none")
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
