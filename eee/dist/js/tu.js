	
	var monis = '<ul class="bo1">';
				var monie = "</ul>";
				var moban = "";
				var Qian = (Math.random()*100) 
				var img = [["康多乐DogChow 牛肉","img/ecd04bd59b05173c86786e15bfefce1d.jpg@!200w-c"],["活力幼犬配方幼犬粮","img/f3d1ddb2432631be309acfccde6179c1.jpg@!200w-c"],["犬用不锈钢针梳","img/a2dbfa971303c92bda24e055cd59ff59.jpg@!200w-c"],["犬用植物性润湿乳液","img/03ef5cc90b47b654452bd69f690e9078.jpg@!200w-c"],["蓬松增毛液","img/544db55a5bb37a8e911114ff9ba04987.jpg@!200w-c"],["犬用职业用洗白精","img/fa053b7aacf85050385248d0a5ee74df.jpg@!200w-c"],["营养美毛粉454g","img/33bfd60b3fc33f4ab3bfa46f41195b4e.jpg@!200w-c"],["宠物用升降立式饮水器","img/c1791fb421c4b496688874525e2ac5f3.jpg@!200w-c"]]
				for(var i=0;i<8;i++){
					moban += `<li><div class="bo1a"></div>
					 				<div class="bo1b"></div>	
					 				<div class="bo1c">
					 					<img src="${img[i][1]}"/>
					 					<div class="bo1c_bi">${img[i][0]}</div>
					 					<div class="bo1c_jia">
					 						¥ <span class="qian">${Math.floor(Qian)+".00"}</span><span class="yuanjia">${(Math.floor(Qian)*10)+'.'+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)}</span>
					 					</div>
					 					<div class="bo1_btn">
					 						<a href="javascript:;" class="qiangguang">已抢光</a>
					 					</div>
					 				</div>
	
					 			</li>`
				Qian = (Math.random()*10) 
				}
				
				
				console.log(monis+moban+monie)
				
				$(".anlimenu_xia_nei").html(monis+moban+monie)
				