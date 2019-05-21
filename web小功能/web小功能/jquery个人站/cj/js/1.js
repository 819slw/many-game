	$(function(){
		$('div.openshow,div.storypage,div.storypage>img').css('width',$(window).width());	
		$('div.openshow,div.storypage,div.storypage>img').css('height',$(window).height());
//		console.log($(window).width());
//		console.log($(window).height());
	})
	$(window).resize(function(){
		$('div.openshow,div.storypage,div.storypage>img').css('width',$(window).width());	
		$('div.openshow,div.storypage,div.storypage>img').css('height',$(window).height());	
	})

// page部分
	$('div.openshow').click(function(){
		$('div.openshow').slideUp('slow');
		$('div.content').css('display','block');
		$('div.storypage:eq(0)').css('display','block');
		for(var i=0;i<=5;i++){
			$('div.word0>li:eq('+i+')').delay(1000+i*2500).animate({
				width:"500px"
			},2000)			
		}
		/*$('div.word0>li:eq(0)').delay(1000).animate({
			width:"500px"
		},2000)
		$('div.word0>li:eq(1)').delay(3500).animate({
			width:"500px"
		},2000)
		$('div.word0>li:eq(2)').delay(6000).animate({
			width:"500px"
		},2000)
		$('div.word0>li:eq(3)').delay(8500).animate({
			width:"500px"
		},2000)
		$('div.word0>li:eq(4)').delay(11000).animate({
			width:"500px"
		},2000)
		$('div.word0>li:eq(5)').delay(13500).animate({
			width:"500px"
		},2000)*/

		$('div.word0>img').delay(1000).animate({
			left:"500px"
		},2000).animate({
			left:"0",
			top:"-40px"
		},500).animate({
			left:"500px",
			top:"-40px"
		},2000).animate({
			left:"0",
			top:"20px"
		},500).animate({
			left:"500px",
			top:"20px"
		},2000).animate({
			left:"0",
			top:"80px"
		},500).animate({
			left:"500px",
			top:"80px"
		},2000).animate({
			left:"0",
			top:"140px"
		},500).animate({
			left:"500px",
			top:"140px"
		},2000).animate({
			left:"0",
			top:"180px"
		},500).animate({
			left:"500px",
			top:"180px"
		},2000).animate({
			left:"2000px",
			top:"180px"
		},1000).fadeOut()
	})

	$(function(){
		$('div.openword').animate({
			height:'700px'
		},6000)	
/*		$('div.openshow>img').animate({
			opacity:"0.5"
		},3000)	*/
	})
	$('p.btn_jump').click(function(){
		$('div.storypage:eq(0)').fadeOut();
		$('div.storypage:eq(1)').fadeIn();
		$('p.word1').delay(1000).fadeIn(1500);
	})

	$('p.btn_left').click(function(){
		$('div.storypage:eq(2)').css('display','block');
		$('div.storypage:eq(1)').animate({
			left:"-1800px"
		},1000).fadeOut('fast');
		
	})

// isay 部分
	$('li.isay').mouseover(function(){
		$('div.int:animated').stop().hide();
		$('li.isay>div.int').slideDown();
	}).mouseout(function(){
		$('li.isay>div.int').slideUp();
	})

// timer部分
	var mint = 0;var secd = 0;
	var s = setInterval(function(){
		$('li.timer>span:eq(0)').text(secd);
		$('li.timer>span:eq(1)').text(mint);
		mint++;
		if(mint>=60){
			mint = 0;
			secd++;
		}
	},1000)

//page0

//page1
	$('div.glass_all').mouseover(function(){
		$('div.big').show();
		$('div.big').css('cursor','crosshair');
		$('div.glass_all').mousemove(function(ent){
			var left = ent.pageX - $('div.glass_all').offset().left - 50;
			var top = ent.pageY - $('div.glass_all').offset().top - 50;
			$('div.big').css({left:left,top:top});
			$('div.big').scrollTop((top+50)*800/400-50);
            $('div.big').scrollLeft((left+50)*800/400-50);
		})
	})
	$('div.glass_all').mouseout(function(){
		$('div.big').hide();
	})

//page2 

	var tol;	
	$('td.plus').click(function(){
		var numb = Number($(this).parent().find('td:eq(3)').text());
		numb++;
		var sin_tol = Number($(this).parent().find('td:eq(4)').text());;
		sin_tol += Number($(this).parent().find('td:eq(2)').text());
		tol = Number($('table').find('span').text());
		tol += Number($(this).parent().find('td:eq(2)').text());
		$(this).parent().find('td:eq(3)').text(numb);
		$(this).parent().find('td:eq(4)').text(sin_tol);
		$('table').find('span').text(tol);
	})

	$('td.minus').click(function(){
		var numb = Number($(this).parent().find('td:eq(3)').text());
		numb--;
		if(numb < 0){
			return false;
		}
		var sin_tol = Number($(this).parent().find('td:eq(4)').text());
		sin_tol -= Number($(this).parent().find('td:eq(2)').text());
		tol = Number($('table').find('span').text());
		tol -= Number($(this).parent().find('td:eq(2)').text());
		$(this).parent().find('td:eq(3)').text(numb);
		$(this).parent().find('td:eq(4)').text(sin_tol);
		$('table').find('span').text(tol);
	})

	$('th.buy').click(function(){
		if(tol>0){
			$('table').slideUp('fast');
			$('p.buyed').fadeIn();
			$('p.buyed>span').text(tol);
		}else{
			alert('没买东西,付什么钱');
		}
	})

//page3
	$('p.btn_down').click(function(){
		$('div.page2').fadeOut();
		$('div.page3').fadeIn();
		for(var i=1;i<=9;i++){
		$('div.page3>ul>li:eq('+i+')').delay(i*3000-2000).fadeIn('10').animate({
			fontSize:"60px"
		},1000).animate({
			fontSize:"20px"
		},1000)
	}
		$('div.page3>ul>li:eq(10)').delay(28000).fadeIn('10').animate({
			fontSize:"60px"
		},1000)
		$('p.btn_go').delay(29000).slideDown();
	})
//page4
	$('p.btn_go').click(function(){
		$('div.page3').fadeOut();
		$('div.page4').fadeIn();

		for(var i=0;i<=2;i++){
			$('div.showp1>img:eq('+i+')').delay(i*6000).fadeIn()
			.animate({
				left:"-250px"
			},1000).animate({
				left:"-250px",
				top:"-100px"
			},1000).animate({
				left:"0px",
				top:"-100px"
			},1000).animate({
				left:"0px",
				top:"0px"			
			},1000).animate({
				width:$('div.showp1').width(),
				height:$('div.showp1').height()
			},1000).delay(1000)
			.fadeOut();
			$('div.showw1>p:eq('+i+')').delay(i*6000).fadeIn().delay(5000).fadeOut();


			$('div.showp2>img:eq('+i+')').delay(i*6000+19000).fadeIn()
			.animate({
				left:"-250px"
			},1000).animate({
				left:"-250px",
				top:"-100px"
			},1000).animate({
				left:"0px",
				top:"-100px"
			},1000).animate({
				left:"0px",
				top:"0px"			
			},1000).animate({
				width:$('div.showp1').width(),
				height:$('div.showp1').height()
			},1000).delay(1000)
			.fadeOut();
			$('div.showw2>p:eq('+i+')').delay(i*6000+19000).fadeIn().delay(5000).fadeOut();
		}
		$('div.show3').delay(39000).slideDown();
		
	})
		//page5
		$('p.btn_go1').click(function(){
			$('div.page4').fadeOut();
			$('div.page5').fadeIn();			
		})