 function startTime(){
  var today=new Date(); //����ʱ��
  var h=today.getHours();  //Сʱ
  var m=today.getMinutes();  //����
  var s=today.getSeconds();  //��

  //���ú���
   h=checkTime(h);
   m=checkTime(m);
   s=checkTime(s);
  document.getElementById("timetxt").innerHTML=h+":"+m+":"+s; //ʱ����ʾ�ĸ�ʽ
  t=setTimeout(function(){
	startTime();
  },500);//500������ʱ��ʾ����˼,��500�������һ��
}

//�����Ӻ�����һλʱ����Ҫ��ǰ���0���Ÿ�����Ҫ��
function checkTime(i){
 if(i<10){
   i="0"+i;
 }
 return i;
}
