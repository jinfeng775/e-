$(function(){
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
	})
})
