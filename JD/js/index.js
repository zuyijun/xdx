//轮播图部分

$(function() {
	var index = 0;
	var fs_col2 = $(".fs_col2 img");
	var timer = null;
	var point = $(".point li");
	var service = $(".service ul li");
	var bef = $("_before");
	var hov = $("_hover");

	var ChangeImgr = function() {
		if (index==5) {
			$(fs_col2[index]).removeClass('current');
			$(point[index]).css('opacity','0.5');
			index=0;
			$(fs_col2[index]).addClass('current');
			$(point[index]).css('opacity','1');
		}
		else if(index<5){
			$(fs_col2[index]).removeClass('current');
			$(point[index]).css('opacity','0.5');
			$(fs_col2[index+1]).addClass('current');
			$(point[index+1]).css('opacity','1');
			index++;
		}		
	}

	var ChangeImgl = function() {
		if (index==0) {
			$(fs_col2[index]).removeClass('current');
			$(point[index]).css('opacity','0.5');
			index=5;
			$(fs_col2[index]).addClass('current');
			$(point[index]).css('opacity','1');
		}
		else if(index>-1){
			$(fs_col2[index]).removeClass('current');
			$(point[index]).css('opacity','0.5');
			$(fs_col2[index-1]).addClass('current');
			$(point[index-1]).css('opacity','1');
			index--;
		}		
	}

	var autoChangeImg = function(){
		timer = setInterval(ChangeImgr,1500);
	};

	autoChangeImg();

	$(".fs_col2").hover(function(){
		clearInterval(timer);
		// console.log(timer);
	},autoChangeImg);

	$(".prev").on('click',function() {
		ChangeImgl();
	})

	$(".next").on('click',function() {
		ChangeImgr();
	})

	$(point).hover(function() {
		$(fs_col2[index]).removeClass('current');
		$(point[index]).css('opacity','0.5');
		index = $(this).index();
		$(fs_col2[index]).addClass('current');
		$(point[index]).css('opacity','1');
	})

	$(".fs_col1  ul li").mouseover(function() {
		$(".fs_popup").css('display','block');
	}).bind("mouseleave",function() {
		$(".fs_popup").css('display','none');
	})

	$(".fs_popup").mouseover(function() {
		$(".fs_popup").css('display','block');
	}).bind("mouseleave",function() {
		$(".fs_popup").css('display','none');
	})

	$(".pop_1").mouseover(function() {
		$(".popup1").css('display','block');
	}).bind("mouseleave",function() {
		$(".popup1").css('display','none');
	})

	$(".pop_2").mouseover(function() {
		$(".popup2").css('display','block');
	}).bind("mouseleave",function() {
		$(".popup2").css('display','none');
	})

	$(".pop_3").mouseover(function() {
		$(".popup3").css('display','block');
	}).bind("mouseleave",function() {
		$(".popup3").css('display','none');
	})

	$(".pop_4").mouseover(function() {
		$(".popup4").css('display','block');
	}).bind("mouseleave",function() {
		$(".popup4").css('display','none');
	})
})



























// $(function() {

// 	var index = 0;
// 	var shortcut_nav = $(".shortcut_nav li");

// 	var popup0 = function() {

// 		//if(index == 4) {
// 			$(".shortcut_nav li").mouseover(function(){
// 				var newDiv=document.getElementById("")

// 				index = $(this).index();
// 				if (index == 8) {

// 				}
// 				// clearInterval(timer);
// 				// console.log(timer);
// 			});
// 		//}
		
// 	}

// })