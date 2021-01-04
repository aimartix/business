function data() {

	var address = document.getElementById("dizhi").value + document.getElementById("zu").value + "组" + document.getElementById(
		"lu").value + "路" + document.getElementById("hao").value + "号";
	var build_name = document.getElementById("build_name").value;
	var host = document.getElementById("chanquan").value;
	var host_name = document.getElementById("host_name").value;
	var host_id = document.getElementById("host_id").value;
	var floor = document.getElementById("floor").value;
	var area = document.getElementById("area").value + "平方米";
	var niandai = document.getElementById("niandai").value;
	var jiegou = document.getElementById("jiegou").value;
	var way = document.getElementById("way").value;
	var nature = document.getElementById("nature").value;

	var purpose = "";
	var recontent = document.getElementById("recontent").value;
	var cainuan = "";
	var chuishi = "";
	var dizhi = "";
	var fangwu = "";
	var xiaofang = "";
	var cailiao = "";
	var linjian = "";
	var jianding = document.getElementById("jianding").value;
	var renovate = document.getElementById("renovate").value;
	var yongdi = youwu("yong");
	var guihua = youwu("gui");
	var jungong = youwu("jun");
	var dengji = youwu("deng");
	var jingyin = youwu("jing");
	var remould = shifou("remould");

	function youwu(a) {
		if (document.getElementById(a).checked == true) {
			var a = '有';
		} else {
			var a = '无';
		}
		return a;
	}

	function shifou(a) {
		if (document.getElementById(a).checked == true) {
			var a = '是';
		} else {
			var a = '否';
		}
		return a;
	}

	for (i = 1; i <= 14; ++i) {
		if (document.getElementById("p" + i).checked == true) {
			purpose = purpose + " " + document.getElementById("p" + i).value
		}
	}
	for (i = 1; i <= 4; ++i) {
		if (document.getElementById("n" + i).checked == true) {
			cainuan = cainuan + " " + document.getElementById("n" + i).name
		}
	}
	for (i = 1; i <= 4; ++i) {
		if (document.getElementById("c" + i).checked == true) {
			chuishi = chuishi + " " + document.getElementById("c" + i).name
		}
	}


	// if (document.getElementById("d").checked == true) {
	// 	ui51.style.display = '';
	// } else {
	// 	ui51.style.display = 'none';
	// }
	// if (document.getElementById("f").checked == true) {
	// 	ui52.style.display = '';
	// } else {
	// 	ui52.style.display = 'none';
	// }
	// if (document.getElementById("x").checked == true) {
	// 	ui53.style.display = '';
	// } else {
	// 	ui53.style.display = 'none';
	// }
	// if (document.getElementById("j").checked == true) {
	// 	ui54.style.display = '';
	// } else {
	// 	ui54.style.display = 'none';
	// }
	// if (document.getElementById("l").checked == true) {
	// 	ui55.style.display = '';
	// } else {
	// 	ui55.style.display = 'none';
	// }


	if (document.getElementById("d").checked == true) {
		var a = "";
		for (i = 1; i <= 5; ++i) {
			if (document.getElementById("d" + i).checked == true) {
				a = a + " " + document.getElementById("d" + i).name;
			}
		}

		dizhi = "存在风险" + "  " + "风险类型:" + a;
	} else {
		dizhi = "基本安全";
	}


	if (document.getElementById("f").checked == true) {
		var a = "";
		for (i = 1; i <= 4; ++i) {
			if (document.getElementById("f" + i).checked == true) {
				a = a + " " + document.getElementById("f" + i).name;
			}
		}

		fangwu = "存在风险" + "  " + "风险类型:" + a;
	} else {
		fangwu = "基本安全";
	}

	if (document.getElementById("xf").checked == true) {
		var a = "";
		for (i = 1; i <= 6; ++i) {
			if (document.getElementById("xf" + i).checked == true) {
				a = a + " " + document.getElementById("xf" + i).name;
			}
		}

		xiaofang = "存在风险" + "  " + "风险类型:" + a;
	} else {
		xiaofang = "基本安全";
	}

	if (document.getElementById("j").checked == true) {
		var a = "";
		for (i = 1; i <= 2; ++i) {
			if (document.getElementById("j" + i).checked == true) {
				a = a + " " + document.getElementById("j" + i).name;
			}
		}

		cailiao = "存在风险" + "  " + "风险类型:" + a;
	} else {
		cailiao = "基本安全";
	}



	if (document.getElementById("l").checked == true) {
		var a = "";
		for (i = 1; i <= 2; ++i) {
			if (document.getElementById("l" + i).checked == true) {
				a = a + " " + document.getElementById("l" + i).name
			}
		}

		linjian = "存在风险" + "  " + "风险类型:" + a;
	} else {
		linjian = "基本安全";
	}

	// console.log(address);
	// console.log(build_name);
	// console.log(host);
	// console.log(host_name);
	// console.log(host_id);
	// console.log(floor);
	// console.log(area);
	// console.log(niandai);
	// console.log(jiegou);
	// console.log(way);
	// console.log(nature);
	// console.log(purpose);
	// console.log(yongdi);
	// console.log(guihua);
	// console.log(jungong);
	// console.log(dengji);
	// console.log(jingyin);
	// console.log(remould);
	// console.log(recontent);
	// console.log(cainuan);
	// console.log(chuishi);
	// console.log(dizhi);
	// console.log(fangwu);
	// console.log(xiaofang);
	// console.log(cailiao);
	// console.log(linjian);
	// console.log(jianding);
	// console.log(renovate);

	Date.prototype.Format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S": this.getMilliseconds()
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	var Url = "http://www.shie1d.top:8080"
	var cdate = new Date().Format("yyyy-MM-dd hh:mm:ss");
	$.ajax(Url + '/addno', {
		data: {
			id: id,
			cdate : cdate,
			address: address,
			build_name: build_name,
			host: host,
			host_name: host_name,
			host_id: host_id,
			floor: floor,
			area: area,
			niandai: niandai,
			jiegou: jiegou,
			way: way,
			nature: nature,
			purpose: purpose,
			yongdi: yongdi,
			guihua: guihua,
			jungong: jungong,
			dengji: dengji,
			jingyin: jingyin,
			remould: remould,
			recontent: recontent,
			cainuan: cainuan,
			chuishi: chuishi,
			dizhi: dizhi,
			fangwu: fangwu,
			xiaofang: xiaofang,
			cailiao: cailiao,
			linjian: linjian,
			jianding: jianding,
			renovate: renovate,
			kind: "noself",
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
	
			if (data.status == 1) {
				alert("提交成功")
				window.location.href="index.html?id="+id;
				
			} else {
				alert(data.info);
			}
		},
		error: function(xhr, type, errorThrown) {
	
		}
	});

}
