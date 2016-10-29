window.onload=function(){
	var box=$(".box")[0]
	for(var i=0;i<20;i++){
		for(var j=0;j<20;j++){
			var div=document.createElement("div")
			div.id=i+"-"+j;
			box.appendChild(div)
		}
	}


	
}