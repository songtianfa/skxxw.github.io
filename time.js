 function startTime(){
  var today=new Date(); //定义时间
  var h=today.getHours();  //小时
  var m=today.getMinutes();  //分钟
  var s=today.getSeconds();  //秒

  //调用函数
   h=checkTime(h);
   m=checkTime(m);
   s=checkTime(s);
  document.getElementById("timetxt").innerHTML=h+":"+m+":"+s; //时间显示的格式
  t=setTimeout(function(){
	startTime();
  },500);//500，是延时显示的意思,即500毫秒更新一次
}

//当分钟和秒是一位时候，需要在前面加0（才更符合要求）
function checkTime(i){
 if(i<10){
   i="0"+i;
 }
 return i;
}
