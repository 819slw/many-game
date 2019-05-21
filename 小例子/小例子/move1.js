function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}
function move(obj,json,duration,complete){
	// 准备工作
	/*json
		{
			'width':300,
			'height':300
		}
	*/
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];
	}
	//start {width: 100, height: 100}
	//dis {width: 200, height: 200}

	var count = Math.floor(duration/30);	//总次数
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			var cur = start[name]+n*dis[name]/count;
			if(name == 'opacity'){
				obj.style[name] = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name] = cur + 'px';
			}
		}
		if(n == count){
			clearInterval(obj.timer);
			complete && complete();
		}
	},30)
}