$(function(){
	
	$("#loginbtn").click(function(){
	var zh =$("#usernamel").val();
	var mm = $("#passwordl").val();
	
	
	
	
		if(zh.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)!=null){
			if(mm.length>=6){
				
				
//		$.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"login",username:zh,password:mm},function(data){
//						console.log(data)
//						if(data.code==1001){
//							alert("密码错误")
//						}
//						if(data.code==2003){
//							alert("登录失败请检查账号密码")
//						}
//						if(data.code==0){
//							alert("登录成功")
//							location.href = "index.html";
//						}
//						
//					})
				
					$.ajax({
						type:"post",
						url:"php/showList.php",
						success:function(deta){
							var tag = true;
						var	deta = JSON.parse(deta)
							console.log(deta)
							for(var i in deta){
								if(deta[i].zhanghu==zh){
									
									if(deta[i].mima ==mm){
										tag = false;
									alert("登录成功！")
									var ina = "index.html?&zhanghao="+zh+"";
									location.href = ina;
									}
									
								}

							}
							if(tag){
								alert("请检查账号密码！！！")
							}
													
						}
					})
					
				
				
				
				
				
			}else{
				alert("密码不够6位")
			}
		
		}else{
			alert("手机号格式错误请重输")
		}
		
	
	})
	
	
})
