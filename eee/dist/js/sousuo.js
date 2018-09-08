
			var oTxt = document.getElementById("txt");
			var oList = document.getElementById("list");
			oTxt.oninput = function() {
				var sc = document.createElement("script");
				sc.src = "https://suggest.taobao.com/sug?code=utf-8&q=" + oTxt.value + "&_ksTS=1535025862725_785&callback=aaa&k=1&area=c2c&bucketid=19"

				var zsrc = document.getElementsByTagName("script")

				for(var i = 1; i < zsrc.length; i++) {
					document.body.removeChild(zsrc[i])
				}
				document.body.appendChild(sc);
			}

			function aaa(data) {
				dataa = data.result

				datab = data.magic
				var str = "";
				for(var i = 0; i < dataa.length; i++) {
					str += "<li><a href='https://list.epet.com/search/main.html?keyword=" + dataa[i][0] + "&pet_type=dog&version=2.0.0&attrid='>" + dataa[i][0] + "</a></li>";
				}
				oList.innerHTML = str;
				if(datab) {
					var li = oList.children
					for(var i = 0; i < datab.length; i++) {
						if(datab[i].index) {
							li[datab[i].index - 1].innerHTML += "><ul id='list1'></ul>";
							// for(var j = 0; j < datab[i].data.length; j++) {
							// 	for(var a in datab[i].data[j]) {
							// 		console.log(datab[i].data[j][a])
							// 		if(datab[i].data[j][a].type) {
							// 			li[datab[i].index - 1].lastChild.innerHTML += "<li><a  id='hot' href='https://s.taobao.com/search?q=" + datab[i].data[j][a].title + "'>" + datab[i].data[j][a].title + "</a></li>";
							// 		} else {
							// 			li[datab[i].index - 1].lastChild.innerHTML += "<li><a href='https://s.taobao.com/search?q=" + datab[i].data[j][a].title + "'>" + datab[i].data[j][a].title + "</a></li>";
							// 		}
							// 	}
							// }
						}
					}
				}
			}
