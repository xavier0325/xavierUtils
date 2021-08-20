function download(data) {
	//取出数据
	var arr = data.s;
	var oInput = document.getElementById("input1");
	var oUl = document.getElementById('ul1');
	oUl.innerHTML = '';
	oUl.style.display = 'block';
	oInput.style.borderRadius = "10px 0px 0px 0px";
	for (var i = 0; i < arr.length; i++) {
		var newLi = document.createElement("li");
		var oA = document.createElement("a");
		oA.innerHTML = arr[i];
		oA.href = 'http://www.baidu.com/s?wd=' + arr[i];
		oA.target = '_blank';

		newLi.appendChild(oA);
		oUl.appendChild(newLi);
	}
}
window.onload = function() {
	var oInput = document.getElementById("input1");
	var oQ = document.getElementById('q');
	var oUl = document.getElementById('ul1');
	var oBtn = document.getElementById("btn1");
	var aItems = document.getElementsByClassName("item");
	var iframeBox = document.getElementById("iframebox");
	var iframeOff = document.getElementById("iframeoff");
	var iframe1 = document.getElementById("iframe1");
	var iframe1Window = iframe1.contentWindow;


	iframeBox.style.marginTop = '-' + iframeBox.offsetHeight + 'px';
	iframeBox.style.marginLeft = '-' + iframeBox.offsetWidth * 0.5 + 'px';

	for (var i = 0; i < aItems.length; i++) {
		aItems[i].style.height = aItems[i].offsetWidth + 'px';
		aItems[i].onclick = (function(index) {
			return function() {
				// console.log(index);
				iframeBox.style.display = 'block';
				iframeBox.style.visibility = 'visible';
				iframeBox.style.transform = 'translateY(' + iframeBox.offsetHeight + 'px)';
				iframeOff.style.display = 'block';
				document.getElementById("iframe1").src = index + ".html";
			}
		})(i)
	}


	oQ.onkeyup = function() {
		var oValue = this.value;
		if (!oValue) {
			oInput.style.borderRadius = "10px 0px 0px 10px";
			oUl.style.display = 'none';
		} else {
			//加载数据
			var oScript = document.createElement("script");
			oScript.src = `http://suggestion.baidu.com/su?wd=${this.value}&cb=download`;
			document.body.appendChild(oScript);
		}
	}

	oQ.onblur = function() {
		oInput.style.borderRadius = "10px 0px 0px 10px";
		oUl.style.display = 'none';
	}

	oBtn.onclick = function() {
		window.location.href = "http://www.baidu.com/s?wd=" + oQ.value;
	}



	iframeOff.onclick = function() {
		this.style.display = 'none';
		iframeBox.style.transform = 'translateY(-' + iframeBox.offsetHeight + 'px)';
		setTimeout(function() {
			iframeBox.style.display = 'none';
		}, 700);
	}
}
window.onresize = function() {
	var aItems = document.getElementsByClassName("item");
	for (var i = 0; i < aItems.length; i++) {
		aItems[i].style.height = aItems[i].offsetWidth + 'px';
	}
}
