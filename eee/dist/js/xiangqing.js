$(function(){
		//头部地区
		var id = location.search;
				
		id = id.split("?")[1]
			console.log(id)
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
})
			
			
				
		$.getJSON("js/shangpin.json",function(deta1){
			for(var i in deta1){
				
				if(deta1[i].data==id){
					
					var str = `
					<div class="fzuo">
				<div class="fzou_n">
					<img src="${deta1[i].img}" />
					
				</div>
				<div class="picroll mb">
					<p class="back" title="上一页"><i></i></p>
					<div>
						<ul class="oborder" style="width: 336px;">
							<li class="on">
								<a href="${deta1[i].img}" class="cloud-zoom-gallery gimg" title="" rel="useZoom:'zoom1', smallImage: 'https://img2.epetbar.com/2017-02/28/12/8f62cafb3050e7046ffdab700502f703.jpg@!300w-c'">

									<img alt="${deta1[i].name}" src="${deta1[i].img}">
								</a>
							</li>
							<li class="">
								<a href="${deta1[i].imga}" class="cloud-zoom-gallery gimg" title="" rel="useZoom:'zoom1', smallImage: 'https://img2.epetbar.com/2017-02/28/12/a786fa79975e65d56bf490da19ab78db.jpg@!300w-c'">

									<img alt="${deta1[i].name}" src="${deta1[i].imga}">
								</a>
							</li>
							<li class="">
								<a href="${deta1[i].imgb}" class="cloud-zoom-gallery gimg" title="" rel="useZoom:'zoom1', smallImage: 'https://img2.epetbar.com/2015-11/23/10/4d556e271ee27a815e6995195d396b70.jpg@!300w-c'">

									<img alt="${deta1[i].name}" src="${deta1[i].imgb}">
								</a>
							</li>
							<li class="">
								<a href="${deta1[i].imgc}" class="cloud-zoom-gallery gimg" title="" rel="useZoom:'zoom1', smallImage: 'https://img2.epetbar.com/2015-11/23/10/7f6576298053b071230cb8bb3c1683bc.jpg@!300w-c'">

									<img alt="${deta1[i].name}" src="${deta1[i].imgc}">
								</a>
							</li>
						</ul>
					</div>
					<p class="next" title="下一页"><i></i></p>
				</div>
			</div>
			<div class="fyou">
				<h1 class="gdtitle" id="abcde">${deta1[i].name}        </h1>

				<div id="clearfixpp">

					<div class="clearfixp">
						<span class="c999 fl">
                                            市场价
                                        ：
                </span>
						<del class="c333 fl">${deta1[i].yuanjia}</del>
					</div>
					<div class="clearfixo"><span class="echongjia">
                                    E宠价
                                    ：
                </span><span class="goods-qian">￥</span>
						<span class="goods-font" id="goods-sale-price" data-name="sale_price">${deta1[i].xianjia}</span>
					</div>
				</div>
				<div class="wyaojiesuan">
					<span class="wyaojiesuana">我要买：</span>
					<div class="norms-con fl">
						<span class="cgnum fl mr">
                    <span class="chgnum lim-buynum ft14">-</span>
						<input type="text" id="cart_buynum" class="text buynum" value="1" size="2">
						<span class="chgnum add-buynum ft14">+</span>
						</span>
						<span class="fla">盒</span>
					</div>
				</div>
				<a class="db epet_sensor_add_cart"><span class="cfff">加入购物车</span></a>
			</div>
		</div>`;
					
					
			$(".fangdajing").html(str)	
			$("#imgdetail_bao").html(deta1[i].show)
					
				}
			
			
			}
			var shangp =$(".fzou_n");
	$(".oborder>li").mouseenter(function(){
//		shangp.children("img").removeAttr("src")
//		.attr("src",$(this).find("img").attr("src"))
	magnifier(".fzou_n",320,320,$(this).find("img").attr("src"),200,200,400)
	})
		
		
			
			
		})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		
		
			
			
})
