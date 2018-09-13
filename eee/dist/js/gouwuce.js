$(function() {
	
	var userid = location.search;

	userid = userid.split("&user=")[1]
	if(!userid){
		alert("请先登录注册")
	}
	$.getJSON("js/shangpin.json", function(deta1) {
		var jsonn = deta1;
	
		$.ajax({
			type: "post",
			url: "php/showList.php",
			success: function(deta) {
				var deta = JSON.parse(deta)

				for(var i = 0; i < deta.length; i++) {
					if(userid == deta[i].zhanghu) {
							console.log(deta[i].spid);
							if(isNaN(deta[i].spid)){
								
							var ku = JSON.parse(deta[i].spid)
							
						
						for(var k = 0; k < ku.length; k++) {
							for(var b in ku[k]) {

								for(var n = 0; n < jsonn.length; n++) {
									if(b == jsonn[n].data) {
										var zongjia = jsonn[n].xianjia * ku[k][b]
										//										console.log(jsonn[n].data)
										var str = `<tr class="cart-order ">
					<td width="50" align="center">
						<input autocomplete="off" checked="checked" type="checkbox" name="check_goods_197731" doclick="check">
					</td>
					<td width="500" valign="middle">
						<div class="por-img fl overflow bgwhite ftc">
							<a href="http://www.epet.com/goods/197731.html" target="_blank">
								<img src="${jsonn[n].img}" width="80">
							</a>
						</div>
						<div class="por-intro fl ml20 mt" style="margin-top: 30px;">
							<a href="http://www.epet.com/goods/197731.html" target="_blank" class="c333">
								${jsonn[n].name} </a>
						</div>
						<div class="clear"></div>
					</td>
					<td width="150" align="center" style="padding-top:20px;">
						<div class="buynum-wrap">
							<span id="less1" doclick="changeBuyNum" act="sub" class="ft18 fl ">-</span>
							<input autocomplete="off" name="gnum_197731" stock="153" oldnum="1" type="text" class="text buynum ftc fl bgwhite " value="${ku[k][b]}" id="num" size="2">
							<span doclick="changeBuyNum" act="add" id="add1" class="fl ">+</span>
						</div>
						<p class="c666 mtneg10">有货</p>
					</td>
					<td width="200" class="zongj" align="center" class="c000 bold ft14">
						${zongjia}.00 </td>
					<td width="200" align="center">
					
						<a class="shanchu" href="javascript:;" doclick="deleteGoods" gid="${b}" class="c666">[删除]</a>
					</td>
				</tr>
`

										$("#tablea").append(str);
									}
								}

							}
						}
					}else{
						alert("购物车空空如也")
					}
					} else {
						//						alert(请登录)
					}
				}

				//点击事件

				$(".buynum-wrap>span").click(function() {
					if(this.innerHTML == "+") {
						var shu = $(this).prev().val();
						++shu;
						$(this).prev().val(shu);
						$(this).parent().parent().next().html(shu * ($(this).parent().parent().next().text() / (shu - 1)) + ".00")
						shuaxinhtml()
					}

					if(this.innerHTML == "-") {

						var shu = $(this).next().val();
						if(shu > 1) {
							--shu;
							console.log(shu)

							$(this).parent().parent().next().html(shu * ($(this).parent().parent().next().text() / (shu + 1)) + ".00")

							shuaxinhtml()

							$(this).next().val(shu);
						}

					}
				})

				function shuaxinhtml() {
					var zhi = 0;
					var danj = 0;
					$(".buynum ").each(function(index, item) {

						zhi += parseInt($(item).val())

					})

					$(".zongj").each(function(index, item) {

						danj += parseInt($(item).text())

					})

					$(".zongjjj").html("￥" + danj * zhi + ".00");

				}

				shuaxinhtml()

				//删除
				$(".shanchu").click(function() {

					var gid = $(this).attr("gid");

					$.ajax({
						type: "post",
						url: "php/showList.php",
						success: function(deta) {
							var deta = JSON.parse(deta)

							for(var i = 0; i < deta.length; i++) {
								if(userid = deta[i].zhanghu) {

									var ku = JSON.parse(deta[i].spid)
									for(var k = 0; k < ku.length; k++) {
										for(var b in ku[k]) {
											
											if(b==gid){
										console.log(delete ku[k])		
												
										var	c = JSON.stringify(ku);
										
											$.ajax({
												type: "post",
												url: "php/xiugai.php",
												data: {
													zhanghu: userid,
													mima: "",
													spid: c
												},
												success: function(deta) {
													
												}
											})
											
											}
											
											
										}
									}
								}
							}
						}
					})

					//移除自己DIV
					$(this).parent().parent().remove();
				})

			}
		})

	})
	//点击事件
	$("#huitop").click(function(){
	var sped = 50;
	$("body,html").animate({scrollTop:0},sped)
	})
	
	
	
	if(userid!=undefined){
		$("#shouyelogo").attr("href","index.html?&zhanghao="+userid)
		console.log($("#shouyelogo"))
		$(".nologin-order").text("用户："+userid)
		
	$("#gouwuccc").attr("href","index.html?&zhanghao="+userid)
		$("#userm").css("color","red").text(userid);
		
	
	}
	

})