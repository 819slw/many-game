/* 实现思路：
 * 1.通过css3 的transfrom、opacity、zIndex属性先设置轮播项的位置
 * 2.通过js获取每个轮播项的transfrom、opacity、zIndex属性并按顺序存入二维数组
 * 3.通过数组的pull、pop、shift、unshift方法来调换数组头尾两个数据的位置重新排列数组；
 * 4.将新排列的数组按照索引顺序重新赋值给轮播项目来实现左右按钮的动画效果
*/
/* 知识点整理：
 * 1. 通过querySelector与querySelectorAll区别
	  querySelector方法返回单个DOM元素对象，queryselectorAll方法返回拥有DOM的nodeList
	  集合，该集合拥有length属性，可通过下标获取指定DOM节点对象
 * 2. style样式操作：getComputedStyle(obj,null)\obj.currentStyle
	  注意：getAttribute/setAttribute方法用于操作元素属性；
	        getComputedStyle(obj,null)\obj.currentStyle用于读取元素最终呈现的样式，
			设置样式只能通过obj.style方式；
			obj.style方式只能获取行间样式，不能获取css样式
*/
/* 未解决问题：
   1、moveToLeft、moveToRight方法声明放在window.onload外部时，出现arr数组未定义问题，未找到原因；
*/
window.onload = function(){
	
	var slideItems = document.querySelectorAll(".wrapper .slide li");
	var leftBtn = document.querySelector(".wrapper .controller .btn-left");
	var rightBtn = document.querySelector(".wrapper .controller .btn-right");
	var arr = new Array();
	var len = slideItems.length;
	var timer = null;
	for(var i=0; i<len; i++){
		//获取轮播子项的css样式
		var transform = getStyle(slideItems[i]).transform;
		var opacity = getStyle(slideItems[i]).opacity;
		var zIndex = getStyle(slideItems[i]).zIndex;
		arr.push([transform,opacity,zIndex]);
	}
	
	//左右箭头按钮上绑定点击事件
	leftBtn.addEventListener("click",moveToLeft);
	rightBtn.addEventListener("click",moveToRight);
	
	//自动轮播
	carousel();
	
	//鼠标移入停止轮播
	document.querySelector(".wrapper .slide").addEventListener("mouseenter",function(){
		clearInterval(timer);
	});
	
	//鼠标移出开启轮播
	document.querySelector(".wrapper .slide").addEventListener("mouseleave",function(){
		timer = setInterval(function(){
			moveToRight();
		},1000);
	});
	
	function carousel(){
		timer = setInterval(function(){
			moveToRight();
		},1000);
	}
	
	//左移
	function moveToLeft(){
		arr.unshift(arr.pop());
		for(var i=0; i<len; i++){
			slideItems[i].style.transform = arr[i][0];
			slideItems[i].style.opacity = arr[i][1];
			slideItems[i].style.zIndex = arr[i][2];
		}
	}
	
	//右移
	function moveToRight(){
		arr.push(arr.shift());
		for(var i=0; i<len; i++){
			slideItems[i].style.transform = arr[i][0];
			slideItems[i].style.opacity = arr[i][1];
			slideItems[i].style.zIndex = arr[i][2];
		}	
	}
};

function getStyle(obj){
	return obj.currentStyle? obj.currentStyle:getComputedStyle(obj);
}

