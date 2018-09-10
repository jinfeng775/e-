$(function() {
			//头部地区
			$(".head_letf_diqu").mouseover(function() {
				$(".head_div").css("display", "block")
			})
			$(".head_letf_diqu").mouseout(function() {
				$(".head_div").css("display", "none")
			})
			$(".head_div>span").click(function(e) {
				if(e.target.innerHTML == 1) {
					$(this).css("background", "#fff").next().css("background", "#f6f6f6")
					$(".head_letf_diqu_z_ul").css({
							"display": "block"
						})
						.next().css({
							"display": "none"
						})
				}
				if(e.target.innerHTML == 2) {
					$(this).css("background", "#fff").prev().css("background", "#f6f6f6")
					$(".head_letf_diqu_z_ula").css({
							"display": "block"
						})
						.prev().css({
							"display": "none"
						})
				}
			})

			$(".headul a").click(function() {
				$(".head_letf_diqu_z>span").text(this.innerHTML)
				$(".head_div").css("display", "none")
			})

			var liebiaoId = [];
			//搜索接口https://www.epet.com/share/suggest.html?inajax=1&kw=%E7%8B%97&pet_type=dog
			//不管用  用的淘宝的
			var promise1 = $.getJSON("http://h6.duchengjiu.top/shop/api_cat.php", function(date) {
				var shuju = date.data;
				//			console.log(shuju)

				var str = "";
				var ul = ""
				for(var i = 0; i < shuju.length; i += 2) {
					liebiaoId.push(shuju[i].cat_id, shuju[i + 1].cat_id)
					//					liebiaoId[i] = shuju[i].cat_id;
					//					liebiaoId[i+1] = shuju[i+1].cat_id;
					str += `<li class="">
				<h3>
				<a href="https://list.epet.com/4356.html" lang="4356">${shuju[i].cat_name}<i>${Math.floor(Math.random()*1900+100)}</i></a> 
				<a href="https://list.epet.com/4334.html" lang="4334">${shuju[i+1].cat_name}<i>${Math.floor(Math.random()*1900+100)}</i></a> 
				</h3>
				</li>`

				}
				$("#fenleilist")[0].innerHTML += str;
				
			})
		
	

			

			var promise2 = promise1.then(function(data) {
		var ulaaa = $("#fenleilist h3");

	for(var i=0;i<ulaaa.length;i++){
		$(ulaaa[i]).after(`		<ul id="ulaaa" style="display: none;">
		<li><a href="javascript:;"><span style="float: left;">${i}</span><img alt="4357" src="http://imgs-qn.iliangcang.com/ware/goods/big/2/249/249846.jpg"></a>动物系列
			豹纹 卫衣裙</li>
		<li><a href="javascript:;"><span style="float: left;">${i}</span><img alt="4357" src="http://imgs-qn.iliangcang.com/ware/goods/big/2/249/249839.jpg"></a>动物系列
			斑马纹</li>
		
		<li><a href="javascript:;"><span style="float: left;">${i}</span><img alt="4357" src="http://imgs-qn.iliangcang.com/ware/goods/big/2/249/249847.jpg"></a>星空系列
			黑色星空 哈伦裤</li>
		<li><a href="javascript:;"><span style="float: left;">${i}</span><img alt="4357" src="http://imgs-qn.iliangcang.com/ware/goods/big/2/247/247892.jpg?t=1437551131"></a>【自然课系列】儿童T恤裙
			西瓜</li>
		<li><a href="javascript:;"><span style="float: left;">${i}</span><img alt="4357" src="http://imgs-qn.iliangcang.com/ware/goods/big/2/104/104988.jpg"></a>北岛选编《给孩子的诗》童装书籍套装</li>
		<li><a href="javascript:;"><span style="float: left;">${i}</span><img alt="4357" src="http://imgs-qn.iliangcang.com/ware/goods/big/2/247/247895.jpg?t=1437551092"></a>【自然课系列】儿童T恤
			橙子</li>
	</ul>`)

	}
	
	
	
	
	$("#fenleilist>li").mouseover(function(){
	 var index =$(this).index()
      
		$(this).children("ul").css({"display":"block","margin-top":"-51"*index})
	})
	$("#fenleilist>li").mouseout(function(){
		
		$(this).children("ul").css("display","none")
	})
			
			})

	
//轮播图
				var bg = true;
				var lunbotu_se = ["rgb(132,184,145)","rgb(15,28,93)","rgb(251,197,13)","rgb(196,229,222)","rgb(254,216,69)","rgb(18,20,19)"]
				var tuli = $(".lunbotu_show>li");
				var xunxi = $("#ul_box");
				var nav = $(".playpic>a");
				var len = $(".lunbotu_show>li").length;
				var xunxilen = $("#ul_box>li").length;
				var lubo_bg = $(".lunbotu_bao")
			shijian();
				var con =0;
				function shijian(){
			    timer=setInterval(function(){
					if(con==len){con=0;}
//					nav.siblings().removeClass("select").eq(i).addClass("select");
//					tuli.siblings().removeClass("xuanzhong").eq(i).addClass("xuanzhong").children().removeAttr("style").css("display","block")
//					.animate({ left: '0'}, 800 );
					
					lubo_bg.css("background",lunbotu_se[con]);
					nav.eq(con).css({"background":"#FFF","color":"#000"})
					.siblings().css({ "background": "#999","color": "#fff"})
					tuli.eq(con).fadeIn("slow").siblings().fadeOut(300);
					if(bg){
						$(".nav_nav_biaoti>span").eq(0).css("background",lunbotu_se[con])
					}else{
						$(".nav_nav_biaoti>span").eq(1).css("background",lunbotu_se[con])
					}
					con++;
				
			    },3000)
				}
					$(".lunbotu_show").mouseover(function(){
					clearInterval(timer);
				})
				//移开时候再次调用定时器
				$(".lunbotu_show").mouseout (function(){
					shijian();
				})
				nav.mouseover(function(){
					con=$(this).index();
					
					lubo_bg.css("background",lunbotu_se[con]);
					nav.eq(con).css({"background":"#FFF","color":"#000"})
					.siblings().css({ "background": "#999","color": "#fff"})
					tuli.eq(con).stop().fadeIn(300).siblings().stop().fadeOut(300);
					console.log(bg)
					if(bg){
						$(".nav_nav_biaoti>span").css("background","#fff").eq(0).css("background",lunbotu_se[con])
					}else{
						$(".nav_nav_biaoti>span").css("background","#fff").eq(1).css("background",lunbotu_se[con])
					}
				
				})
				
				//消息轮播
				var con1 = 1;
				  timer1=setInterval(function(){
					if(con1==xunxilen){
						con1=0;
						xunxi.stop().css("top","0")
					}
					xunxi.animate({ top: '-31.82'*con1}, 800 );
					
					con1++;
				},2000)
				
				
				$(".nav_nav_biaoti>span").css("background","#fff").eq(0).css("background",lunbotu_se[con])
				//轮播图菜单栏切换
				$(".nav_nav_biaoti>span").mouseover(function(){
					
					if($(this).index()){
						if(con==0){
						c=1	
						}else{
							var c=	con
						}
					
						bg = false;
						$("#fenleilist").css("display","block");
						$("#gougou").css("display","none");
						$(".nav_nav_biaoti>span").css("background","#fff").eq(1).css("background",lunbotu_se[c-1])
					}else{
						bg = true;
						if(con==0){
						c=1	
						}else{
							var c=	con
						}
						
						$(".nav_nav_biaoti>span").css("background","#fff").eq(0).css("background",lunbotu_se[c-1])
						$("#fenleilist").css("display","none");
						$("#gougou").css("display","block");
					}
				})
				
				
			//请求数据	
			$.ajax({
							url: "https://www.epet.com/json/data.html?inajax=1&t=1536472409589&callback=jQuery171021807004026111_1536472409585&jsoncallback=aaaaa&app=main&_=1536472409593",
							dataType: "jsonp", 
							jsonpCallback: "aaaaa",
							success: function(aaaaa){
							var a = aaaaa.html.daySurprise
				 			var b = a.slice(a.indexOf("menubox yyyy clearfix")+23,a.indexOf("timeleft")-36);
							
							$(".menubox").html(b)
//							console.log(a)
							var c = a.slice(a.indexOf("time-proconli rela overflow")-12,a.indexOf("<script>"))
							//给时间加事件
							$(".menubox>li:not(:last)").mouseover(function(){
								$(this).css("color","red").siblings().css("color","#000")
								$(".bo1").css("display","none").eq($(this).index()).css("display","block")
							})
							
							$(".menubox>li:not(:last)").each(function(index,item){
								
								if($(item).children().children()[1].innerHTML=="已结束"){
									var index = $(this).index();
									$(".anlimenu_xia_nei>ul").eq(index).find(".bo1b").addClass("bo1ba")
									$(".anlimenu_xia_nei>ul").eq(index).find(".qiangguang").removeClass("jijiang-buy").text("已抢光")
								}else{
									var index = $(this).index();
									$(".anlimenu_xia_nei>ul").eq(index).find(".qiangguang").addClass("jijiang-buy").text("马上开抢")
								}
								if($(item).children().children()[1].innerHTML=="进行中"){
									var index = $(this).index();
									$(".anlimenu_xia_nei>ul").eq(index).find(".bo1b").addClass("bo1ba")
									$(".anlimenu_xia_nei>ul").eq(index).find(".qiangguang").removeClass("jijiang-buy").text("已抢光")
								}
								
							})
							
							
							
							
							
							
							
							}
							});
				for(var w=0;w<8;w++){
					
				var ruiji = getRandomArray()
			var monis = '<ul class="bo1 ee'+w+'" style="left: 0px;display: none;">';
				var monie = "</ul>";
				var moban = "";
				var Qian = (Math.random()*100) 
				var img = [["康多乐DogChow 牛肉","img/f3d1ddb2432631be309acfccde6179c1.jpg@!200w-c.jpg"],["活力幼犬配方幼犬粮","img/ecd04bd59b05173c86786e15bfefce1d.jpg@!200w-c.jpg"],["犬用不锈钢针梳","img/a2dbfa971303c92bda24e055cd59ff59.jpg@!200w-c.jpg"],["犬用植物性润湿乳液","img/544db55a5bb37a8e911114ff9ba04987.jpg@!200w-c.jpg"],["蓬松增毛液","img/03ef5cc90b47b654452bd69f690e9078.jpg@!200w-c.jpg"],["犬用职业用洗白精","img/35b5b8863517e2dc2d1f7e272d7c97c5.jpg@!200w-c.jpg"],["营养美毛粉454g","img/33bfd60b3fc33f4ab3bfa46f41195b4e.jpg@!200w-c.jpg"],["宠物用升降立式饮水器","img/c1791fb421c4b496688874525e2ac5f3.jpg@!200w-c.jpg"]]
				for(var i=0;i<8;i++){
					moban += `<li><div class="bo1a"></div>
					 				<div class="bo1b"></div>	
					 				<div class="bo1c">
					 					<img src="${img[ruiji[i]][1]}"/>
					 					<div class="bo1c_bi">${img[ruiji[i]][0]}</div>
					 					<div class="bo1c_jia">
					 						¥ <span class="qian">${Math.floor(Qian)*10+".00"}</span><span class="yuanjia">${(Math.floor(Qian)*100+10)+'.'+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)}</span>
					 					</div>
					 					<div class="bo1_btn">
					 						<a href="javascript:;" class="qiangguang">已抢光</a>
					 					</div>
					 				</div>
	
					 			</li>`
				Qian = (Math.random()*10) 
				}
				
				
				
				
				$(".anlimenu_xia_nei")[0].innerHTML+=monis+moban+monie
				}
				$(".anlimenu_xia_nei").children().eq(0).css("display","block");
				//活动按钮左右
				var dong = 2;
				
				$(".anlimenu>a").click(function(){
					
					if($(this).index()){
						
						
						if(dong>0){
							dong--;
							$(".menubox").stop().animate({ left:  $(".menubox")[0].offsetLeft-118.99-45}, 800 );
						}
						
					}else{
						
						if(dong<2){
							
							dong++;
							$(".menubox").stop().animate({ left: $(".menubox")[0].offsetLeft+118.99-45}, 800 );
						}
							
					}
					
				
				})
				
				//内容按钮左右
				var uldong = 0;
			$(".anlimenu_xia>a").click(function(){
		
				if($(this).index()==3){
					if(uldong>-4){
						uldong--
						$(".bo1").css("left",220*uldong)
						
					}
				
				}
				if($(this).index()==2){
					if(uldong<0){
						++uldong
					$(".bo1").css("left",220*uldong)
					}
				}

			})
				
			
			
			
			
			
			
			
			
			
			
			
		function getRandomArray()
{
    var array = [];
    while (array.length < 8)
    {
        var random = Math.floor(Math.random() * 8) ;
        if (array.indexOf(random) < 0)
        {
            array.push(random);
        }
    }
    return array;
}	
			
			
			
			})