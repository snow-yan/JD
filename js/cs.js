// var arr=[4,10,3,8,20];
// // console.log(arr.length)
// var a=0;
//  for(i=0;i<arr.length;i++){
//  	if(arr[i]>a){
//  		a=arr[i]; 
 		
//  }	
// }
// console.log(a);


// var fn;
// var arr=[5,8,6,2,4]
// for(i=0;i<arr.length;i++){
// 	for(j=i+1;j<arr.length;j++){
//        if(arr[i]<arr[j]){         
//          fn=arr[j];
//          arr[j]=arr[i];
//          arr[i]=fn;
//        }    
       
// 	}
// }  
// console.log(arr);



// var fn;
// var arr=[4,3,8,6,9,12,34];
// for(i=0;i<arr.length;i++){
// 	for(j=i+1;j<arr.length;j++){
// 		if(arr[i]>=arr[j]){
//           fn=arr[i];
//           arr[i]=arr[j];
//           arr[j]=fn;
// 		}	
// 	} 
// }
//  console.log(arr)



// var arr=[1,10,52,4,23,51,44];var max=arr[0];
// function brr(arr){

// for( var i=1;i<arr.length;i++){
// 	if(max<arr[i]){
// 		max=arr[i];
// 	} 
// }
// return max
// }
// console.log(arr)


// 二维数组的遍历
// var arr=[[1,2],["a","b"],[true],["kk","kokc"]]
// for(var i in arr){
// 	for(var j in arr[i]){
// 		console.log(arr[i][j])
// 	}
	
// }




// var brr=[[1],["a","b"],["adf","sdf","sdk"],["adk","kajdk","ahdi","hddind"]]
// var max=brr[0];
// for( var i in brr){	
// 	if(brr[i].length>max.length){
// 		max=brr[i]		
// 	}
	
// }console.log(max)



// var brr=[[1],["a","b"],["adf","sdf","sdk"],["adk","kajdk","ahdi","hddind"]]
// function count(){
// 	for(var i=1; )

// }


// 递归遍历n维数组
// var arr=[["qw","qj"],[12,34],[true,false]]
// function dgnwsz(arr){
//   for(var i in arr){
// 	if(typeof arr[i]=="object"){
// 		arguments.callee(arr[i])
// 	}else{
// 		console.log(arr[i])
// 	}
//   }
// }
// dgnwsz(arr);



// 以json方式创建对象
// var person={height:"180cm",weight:"70kg",age:"22",eat:function(){
// 	alert("i can eat")
// }}
// console.log(person["height"]);
// console.log(person["eat"]())


// 构造函数方式创建对象
// function  gou(){}
// var abc=new gou()
// abc.height="123"
// abc.age=30;
// console.log(abc)

// or
// function gou(){
// 	this.height="182cm";
// 	this.weight="70kg";
// 	this.age=22;
// }
// var abc=new gou(); 
// console.log(abc)


// function gou(){
// 	this.height=height;
// 	this.age=age;
// 	this.name=name;
// }





// object创建对象
// var abc=new object();
// abc.aa="bb"
// console.log(abc)




// 对象遍历
// var obj={height:"180cm",name:"朴灿烈",weight:"70kg"}
// for(var i in obj){
// 	console.log(obj[i])
// }



// var str=[{aa:"bb"},{bb:"cc"},{cc:"dd"}]
// for(var i in str){
// 	for( var j in str[i])
// 		console.log(str[i][j])
// }



// function fun(){
// 	this.length=arguments.length;
// 	for( var i=0;i<arguments.length;i++){
// 		this[i]=arguments[i];
// 	}    
// }
// var arr=new fun(1,5,9,4,6);
// console.log(arr[2])



// function fn(){
// 	obj={};
// 	obj.length=arguments.length;
// 	for( var i=0;i<arguments.length;i++){
// 		obj[i]=arguments[i];
// 	}  
//     return obj
// }
// var arr=fn(1,8,6,7)
// console.log(arr[3])



// function aa(){
// 	this.length=arguments.length
// 	for(var i=0;i<arguments.length;i++){
// 		this[i]=arguments[i]
// 	}
// }
// var arr=new aa(1,6,8,4,9)
// console.log(arr[3])



// function fn(){
// 	aa={};
//    aa.length=arguments.length
//    for(var i=0;i<arguments.length;i++){
//    	aa[i]=arguments[i]
//    }
//    return aa
// }
// var bb=fn(1,5,9,6)
// console.log(aa[0])





// 对象的封装方式-工厂方式
// function fun(eye,ear,run,weight){
// 	animal={};
// 	animal.eye=eye
// 	animal.ear=ear
// 	animal.run=run
// 	animal.weight=weight
//     return animal
// }
// var animal=fun("2","2","40km/h","50kg")
// console.log(animal)



// 对象的封装方式-构造函数方式





// 对象的封装方式-原型封装方式
// function Fn(){
// }
// Fn.prototype.run=function(){alert("running");};
//  var obj=new Fn();
//  obj.run();




// 对象的封装方式-混合封装方式
// function Fn(height,age,hobby,want){
// 	Tom={};
// 	Tom.height=height;
// 	Tom.age=age
// 	Tom.want=want
// 	Tom.hobby=hobby	
// }
// Fn.prototype.true="0"
// var aa=new Fn("100cm",8,"jerry",function(){
// 	alert("I WANT TO EAT+"Tom.want"");},)
// console.log(aa.height)




// 对象的继承-原型继承

// function Fn(height,age,hobby,want){
// 	Tom={};
// 	this.height=height;
// 	this.age=age
// 	this.want=want
// 	this.hobby=hobby	
// }
// var aa=new Fn("50cm","5","eat","jerry")


// function Fun(age,height){
//     jerry={}
//     this.age=age
//     this.height=height
// }
//  Fun.prototype=new Fn("80cm","8","eat","run")
//  var bb=new Fun("3","20cm")
//  console.log(bb.hobby)



// 对象的继承-call/apply
// function Tom(height,weight,age){
// 	fn={};
// 	this.height=height;
// 	this.weight=weight;
// 	this.age=age;
// }
// function Jerry(){
//   fun={};
//   this.want=want;
//   this.run=run;
// }
// Tom.call(Jerry,"50cm","40kg",5)
//  console.log(Jerry.age) 




// var str="123123123"
// console.log(str.charCodeAt("4"))

// var str="nwejsxuekcofsxuek"
// console.log(str.indexOf("sxuek"))

// var str="123123123"
// console.log(str.replace("3","a"))




// var str="123123123"
// console.log(str.slice(0,3))


// var str="123123123"
// console.log(str.substring(1,5))


// var str="123123123"
// console.log(str.substr(1,5))


// var str="123123123"
// console.log(str.split("2",3))




// var str="img/1.jpg"
// console.log(str.replace("jpg","gif"))



// var str="优逸客官网地址：http://www.sxuek.com.优逸课课程体系：http://www.sxuek.com/uisj/,"
// for(var i=1;i<str.length;i++){
// 	if(str.substr("s",5)=="sxuek"){
// 		console.log(i)
// 	}
// }



// var arr=[1,2,5,8,9]
// console.log(arr.push("a","c"))




// var arr=[1,2,5,8,9]
// console.log(arr.unshift(1))




// var arr=[1,2,5,8,9]
// console.log(arr.pop())




// var arr=[1,2,5,8,9]
// console.log(arr.shift("a","c"))



// var arr=[1,2,5,8,9]
// console.log(arr.join("a"))




// var arr=[1,2,5,8,9]
// var brr=[4,6,9]
// console.log(arr.concat(brr,arr))




// var arr=[5,8,2,9,15,88,56,1]
// console.log(arr.sort(function(a,b){
   
// }))


// var arr[1,3,9,5,3,34,42,22]

// function Fun(arr){
//   for(var i=0;i<arr.length;i++){
  
//   	}
    
//   }
// }
