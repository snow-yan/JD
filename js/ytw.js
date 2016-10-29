window.onload=function(){
	// banner轮播
	var banner=getClass("banner")[0];	
	var imgs_pic=$(".imgs-pic")	
	var cil=getClass("bottom");
	var left=getClass("less")[0];
	var right=getClass("more")[0];	
	var n3=0;
	var next3=0;
	var flag=true;
	var fashion=getClass("fashion-middle")[0];
	var pic=getClass("fashion-middle-pic");
	var width=parseInt(getStyle(fashion,"width"));
	var nav_right=$(".nav-right")[0]
	nav_right.onmouseover=function(){
		animate(nav_right,{right:80},300,Tween.Quad.easeIn)
	}	
	nav_right.onmouseout=function(){
		animate(nav_right,{right:73},300,Tween.Quad.easeIn)
	}	
	var t=setInterval(con,3000)
	function con(){
       next3=n3+1;
      if(next3>=imgs_pic.length){
      	next3=0;
      }
      
       animate(imgs_pic[n3],{opacity:0},600)
       animate(imgs_pic[next3],{opacity:1},600)
       cil[next3].style.background="#FF106F"
       cil[n3].style.background="#301F53"      
       n3=next3;
	}      
	 banner.onmouseover=function(){
		clearInterval(t)
		right.style.display="block"
		left.style.display="block"
	}
	banner.onmouseout=function(){
		t=setInterval(con,3000)
		right.style.display="none"
        left.style.display="none"
	}

	right.onclick=function(){
		con();		
	}	
	left.onclick=function(){
		next3=n3-1;
		if(next3<0){
			next3=imgs_pic.length-1;
		}
		animate(imgs_pic[n3],{opacity:0},600)
	    animate(imgs_pic[next3],{opacity:1},600)
	    cil[next3].style.background="#FF106F"
	    cil[n3].style.background="#301F53"      
	    n3=next3;
		
	} 
	for(var i=0;i<cil.length;i++){
		cil[i].index=i;
		cil[i].onmouseover=function(){			
				for(var j=0;j<imgs_pic.length;j++){
					animate(imgs_pic[j],{opacity:0},600)
					cil[j].style.background="#301F53"
				}
				animate(imgs_pic[this.index],{opacity:1},600)
				cil[this.index].style.background="#FF106F"
				n3=this.index;	
			
		}

	}
	function nodeLunbo(obj){
	var fas=obj
	var fashion=getClass("fashion-middle")[fas];      
	var pic=getClass("fashion-middle-pic",fashion)
	var kuan=parseInt(getStyle(fashion,"width"))
	var middle_left=$(".middle-left")[fas]
	var middle_width=middle_left.offsetWidth
	var middle_right=$(".middle-right")[fas]	
	var middle_circle=$(".fashion-middle-round",fashion)
	var next=0;
	var now=0;
	fashion.onmouseover=function(){		
		 	animate(middle_left,{width:29},400)
			animate(middle_right,{width:29},400)

		
	}	
	fashion.onmouseout=function(){
		animate(middle_left,{width:0},400)
		animate(middle_right,{width:0},400)	
	}	
	middle_right.onmouseover=function(){
		middle_right.style.background="#E5155B"
		middle_right.style.opacity="0.85"
	}
	middle_left.onmouseover=function(){
		middle_left.style.background="#E5155B"
		middle_left.style.opacity="0.85"
	}
	middle_right.onmouseout=function(){
		middle_right.style.background="#222222"
		middle_right.style.opacity="0.85"
	}
	middle_left.onmouseout=function(){
		middle_left.style.background="#222222"
		middle_left.style.opacity="0.85"
	}
		middle_right.onclick=function(){
			next=now+1;	
			if(next>1){
				next=0;
			}
		
			animate(pic[now],{left:-kuan},1000)
			animate(pic[next],{left:0},1000)
			middle_circle[next].style.background="#E5155B"
			middle_circle[now].style.background="#6E6E6E"
			

		}
		middle_left.onclick=function(){
			next=now-1;	
			if(next<0){
				next=1;
			}
			
			animate(pic[now],{left:0},1000)			
		    animate(pic[next],{left:kuan},1000)
			middle_circle[now].style.background="#E5155B"
			middle_circle[next].style.background="#6E6E6E"	
			
			
			
		}
	    
    }
      
	
	var obj=$(".fashion-middle")
	for(var i=0;i<obj.length;i++){
		nodeLunbo(i);
	}

	// 楼层跳转
	var side_guding=$(".side-guding")[0];
	var best=$(".best-sellers")[0].offsetTop;
	var fashiont=$(".fashion")
	var side_gddw=$(".side-gddw")
	var gd_pic=$(".side-gd-pic")
	var now;
	var side_two=$(".side-gddw-two")
	var returnTop=$(".returntop")[0]
	for(var i=0;i<fashiont.length;i++){
		fashiont[i].h=fashiont[i].offsetTop

	}
	window.onscroll=function(){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
			var t=obj.scrollTop 			
			if(best<=t){
				side_guding.style.display="block"
			}
			if(best>t){
				side_guding.style.display="none"
			}
			for(var i=0;i<fashiont.length;i++){
		        	if(t>=fashiont[i].h){
		        		for(var j=0;j<side_two.length;j++){
		        			gd_pic[j].style.display="block"
		        			side_two[j].style.display="none"
		        		}
		        		gd_pic[i].style.display="none"
		        		side_two[i].style.display="block"
		        		now=i;
		        		
		        		
		        	}
		    }	
		    for(var i=0;i<side_gddw.length;i++){
		        	side_gddw[i].index=i;
		        	side_gddw[i].onclick=function(){
                        animate(document.documentElement,{scrollTop:fashiont[this.index].h},400)
                        now=this.index;
                        animate(document.body,{scrollTop:fashiont[this.index].h},400)
                        now=this.index;
		        	}		        	
		        	side_gddw[i].onmouseover=function(){
		        		gd_pic[this.index].style.display="none"
		        		side_two[this.index].style.display="block"	        	
		        	}
		        	side_gddw[i].onmouseout=function(){
		        		if(this.index==now ){
		        			return ;
		        		}
		        		gd_pic[this.index].style.display="block"
		        		side_two[this.index].style.display="none"
		        	}
		        	


		        }
		        returnTop.onclick=function(){
		        	animate(document.body,{scrollTop:0},400)
		        	animate(document.documentElement,{scrollTop:0},400)

		        }
			
	}



 function faShion(obj){
 	var obj=obj;
 	var xia=$(".fashion-left-xia")[obj]	
	var fashion_hidden=$(".fashion-left-bao-hidden")[obj]
	
	var bao=$(".fashion-left-bao")[obj];
	var less=$(".specialless")[obj];
	var more=$(".specialmore")[obj];
	var width_kuan=$(".fashion-baoone")[obj].offsetWidth
	more.onclick=function(){
		animate(fashion_hidden,{left:-width_kuan},600,function(){
			var first=getFirst(fashion_hidden)
			fashion_hidden.appendChild(first)
			 fashion_hidden.style.left=0+"px"
		})
	}
	less.onclick=function(){
		animate(fashion_hidden,{left:0},600,function(){
			var first=getFirst(fashion_hidden)
			var last=getLast(fashion_hidden)
			insertBefore(last,first)
			 fashion_hidden.style.left=-width_kuan+"px"
		})
	}
	 
 }
	var duixiang=$(".fashion-left-xia")
	for(var i=0;i<duixiang.length;i++){
		faShion(i)
	}
   	


   	
 //banner左侧下拉框
 var banner_nav=$(".banner-nav")[0];
 var side_navigation=$(".side-navigation")
 var side_hidden=getClass("side-navigation-hidden")
 	for(var i=0;i<side_navigation.length;i++){
 		side_navigation[i].index=i;
 		side_navigation[i].onmouseover=function(){
 			for(var i=0;i<side_hidden.length;i++){
 				side_hidden[i].style.display="none"
 			}
 				side_hidden[this.index].style.display="block"
 				side_hidden[this.index].style.zIndex="100"

 		}
 		side_navigation[i].onmouseout=function(){ 			
 				side_hidden[this.index].style.display="none"

 		}
 	}


 	for(var i=0;i<side_navigation.length;i++){
 		hover(side_navigation[i],function(){
			var ul=$(".side-navigation-hidden",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="block";
			}
		},function(){
			var ul=$(".side-navigation-hidden",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="none";
			}
		})
 	
	}

	// 超值特卖
	var best_top=$('.best-top')[0];
	var list_hidden=$(".list-hidden")[0];
	var list=$(".list")		
	var sale_value=$(".sale-value")
	var best_jian=$(".best-jian")
	for(var i=0;i<sale_value.length;i++){
		sale_value[i].index=i;
		sale_value[i].onmouseover=function(){
			for(var j=0;j<sale_value.length;j++){
			sale_value[j].className="sale-value"
			list[j].className="list"
			best_jian[j].className="best-jian"			
			}
			sale_value[this.index].className="sale-value sale-value-first"
			list[this.index].className="list list-first"
			best_jian[this.index].className="best-jian best-jian-first"			

		}
		
	}

// 热门品牌
	var fra_recommend=$(".fra-recommend")
	var list_fra_hidden=$(".list-fra-hidden")
	var frame_jian=$(".frame-jian")
	for(var i=0;i<fra_recommend.length;i++){
		fra_recommend[i].index=i;
		fra_recommend[i].onmouseover=function(){
			for(var j=0;j<fra_recommend.length;j++){
				fra_recommend[j].className="fra-recommend"
				list_fra_hidden[j].style.display="none";
				frame_jian[j].className="frame-jian"
			}
				list_fra_hidden[this.index].style.display="block";
				fra_recommend[this.index].className="fra-recommend fra-recommend-fir"
				frame_jian[this.index].className="frame-jian frame-jian-first"
	}
			
	// logo右边
	var logo_right=$(".logo-right-right")[0];
	var logo_hidden=$(".logo-right-hidden")[0];
	hover(logo_right,function(){
		logo_hidden.style.display="block"
	},function(){
		logo_hidden.style.display="none"
	})	
		
	

	// 头部右边
	var start_hidden=$(".start-hidden")[0];
	var start_one=$(".start-one")[0]
	// var jiantou=$(".jiantou")[2];
	// var jiantoutwo=$(".jiantoutwo")[2];
	hover(start_one,function(){
		start_hidden.style.display="block"
		// jiantou.style.display="none"
		// jiantoutwo.style.display="block"
		// jiantou.style.transform="rotate(360deg)";		
	},function(){
		start_hidden.style.display="none"
		// jiantou.style.display="block"
		// jiantoutwo.style.display="none"
	})	


// 微信// 手机银泰
function weiXin(obj,n,m){
	// var jiantou=$(".jiantou")[m];
	// var jiantoutwo=$(".jiantoutwo")[m];
	var start_two_hidden=obj;
	var start_two=n;
	// var jiantou
	hover(start_two,function(){
		// jiantou.style.display="none"
		// jiantoutwo.style.display="block"
		// jiantou.style.transform="rotate(360deg)";
		start_two_hidden.style.display="block"
	},function(){
		// jiantou.style.display="block"
		// jiantoutwo.style.display="none"
		start_two_hidden.style.display="none"
	})	
}
	
weiXin($(".start-two-hidden")[0],$(".start-two")[0],0)
weiXin($(".start-three-hidden")[0],$(".start-three")[0],1)	

	// border
	function moveBorder(obj){
		var move_border=$(".move-border-top")[obj];
		var move_border_left=$(".move-border-left")[obj]
		var move_border_bottom=$(".move-border-bottom")[obj]
		var move_border_right=$(".move-border-right")[obj]
		var commodity=$(".commodity")[obj]		
		 commodity.onmouseover=function(){
			animate(move_border,{width:220},700)
		 	animate(move_border_left,{height:258},700)
		 	animate(move_border_bottom,{left:0},700)
		 	animate(move_border_right,{top:0},700)
		}
		 commodity.onmouseout=function(){
		 	animate(move_border,{width:0},500)
		 	animate(move_border_left,{height:0},500)
		 	animate(move_border_bottom,{left:220},500)
		 	animate(move_border_right,{top:258},500)
		}

	}
	var obj=$(".commodity")	
	for(var j=0;j<obj.length;j++){
		moveBorder(j)
	}
	



		function moveBordertwo(n,m){
			var fram_product=$(".frame-product")[n]
			var move_border_two=$(".move-border-top-two")[m];
			var move_border_left_two=$(".move-border-left-two")[m]
			var move_border_bottom_two=$(".move-border-bottom-two")[m]
			var move_border_right_two=$(".move-border-right-two")[m]

		
			 fram_product.onmouseover=function(){
			 	animate(move_border_two,{width:198},500)
			 	animate(move_border_left_two,{height:248},500)
			 	animate(move_border_bottom_two,{left:0},500)
			 	animate(move_border_right_two,{top:0},500)
			}
			 fram_product.onmouseout=function(){
			 	animate(move_border_two,{width:0},500)
			 	animate(move_border_left_two,{height:0},500)
			 	animate(move_border_bottom_two,{left:200},500)
			 	animate(move_border_right_two,{top:248},500)
			}
		}
		

		moveBordertwo(6,0);
		moveBordertwo(7,1);
		moveBordertwo(8,2)
		moveBordertwo(9,3)
		moveBordertwo(10,4)
		moveBordertwo(11,5)
		moveBordertwo(12,6)
		moveBordertwo(13,7)
	
		function moveBorderthree(n){
			var fra_pic=$(".fas-pic")[n]
			var move_border_two=$(".move-border-top-three")[n];
			var move_border_left_two=$(".move-border-left-three")[n]
			var move_border_bottom_two=$(".move-border-bottom-three")[n]
			var move_border_right_two=$(".move-border-right-three")[n]

		
			 fra_pic.onmouseover=function(){
			 	animate(move_border_two,{width:274},500)
			 	animate(move_border_left_two,{height:180},500)
			 	animate(move_border_bottom_two,{left:0},500)
			 	animate(move_border_right_two,{top:0},500)
			}
			 fra_pic.onmouseout=function(){
			 	animate(move_border_two,{width:0},500)
			 	animate(move_border_left_two,{height:0},500)
			 	animate(move_border_bottom_two,{left:274},500)
			 	animate(move_border_right_two,{top:180},500)
			}
			
		}
		
		
		var obj=$(".fas-pic")
		for(var n=0;n<obj.length;n++){
			 moveBorderthree(n);
		}
		

	



	
	 


	}

}