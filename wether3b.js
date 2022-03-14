let  menue = document.getElementById("menu")
,    list  = document.getElementById("liste")
,  closelist  = document.getElementById("list")
,     spamen = document.getElementById("spa")
,     back = document.getElementById("back")
,     head = document.getElementById('headr')
,     title = document.getElementById("ti")
,     contaner = document.getElementById('contaner1')
,     content  =  document.getElementById('content'),
       menh3 = document.getElementById("menh3");
 function menuro(){
menue.style.position = 'relative';
menue.style.bottom = '-8px'
menue.style.left = '0px'
menue.style.width ='35px'     ;
menue.style.transform = 'rotate(270deg)';
menue.style.transition = "0.5s";

list.setAttribute('onclick' ,'menuro()');
list.innerHTML = '<path d="M0 0h00v00H0V0z" fill="none"/><path d="M0 0.00L0.00 0 00 00.00 0.00 0 0 0.00 00.00 00 0 00.00 0.00 00 00 00.00 00.00 00 00 00.00 00.00 00 00 0.00z"/>';
list.setAttribute( 'viewBox' ,'0 0 24 24');
list.style.transition = "";
list.style.clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)';
list.style.width ='24px';
list.style.height ='24px'
list.style.position = 'relative';
list.style.bottom = '-10px';
list.style.right ='1px'
spamen.style.position = 'relative';
spamen.style.bottom = '63px';
spamen.style.opacity ='0';
spamen.style.fontSize = '0px';
spamen.style.right = '30px';
spamen.style.transition = "";
contaner.style.bottom = '0px';
back.style.height = '100vh';
back.style.transition = '0.4s';
closelist.setAttribute('onclick' ,'menur()');
closelist.style.transform = 'rotate(270deg)';
closelist.style.transition = "0.5s";
closelist.style.left = "-86px";
closelist.style.opacity = '1';
menh3.setAttribute('onclick' ,'menur()');
title.style.opacity = '1';
content.style.opacity = '1';
content.style.transition = '0.7s';
menh3.style.opacity = '1';
menh3.style.left = '-6px';
menh3.style.transition = '0.5s';
document.body.style.overflow = 'hidden';
closelist.setAttribute('class','foldlist');
}

 function menur(){
    menue.setAttribute('onclick' ,'menuro()');
    menue.style.backgroundColor = '';
    menue.style.position = '';
    menue.style.bottom = ''
    menue.style.left = ''
    menue.style.transform = 'rotate(0deg)';
    menue.style.width =''
    list.style.transition = "0.6s";
    list.innerHTML = '<path fill="white"  id="liste" d="M9.5,9.8 h27 v2.4 H9.5 M15.9,3.4 h20 v2.4 H15.9 M20,16.2 h16 v2.4 H20"></path>'
    list.setAttribute( 'viewBox' ,'0 0 35 24');
    list.setAttribute('onclick' ,'');
     list.style.width = '35px';
     list.style.position ='relative';
     list.style.right = '3px';
     list.style.bottom ='-7px';
     list.style.height =''
     list.style.clipPath = ''
     spamen.style.transition = "0.6s";
     spamen.style.position = '';
     spamen.style.bottom = '';
     spamen.style.opacity ='';
     spamen.style.right = '';
     spamen.style.fontSize = '';
     contaner.style.bottom = '2000px';
back.style.height = '';
back.style.transition = '0.4s';
closelist.style.transform = '';
closelist.style.transition = "0.5s";
closelist.style.left = "-23px";
closelist.style.opacity = '0';
title.style.opacity = '0'
content.style.opacity = '';
content.style.transition = '';
document.body.style.overflow = ''
menh3.style.opacity = '';
menh3.style.left = '';
menh3.style.transition = '0.5s';
list.setAttribute('class' ,'list');

}


//search

let searchinput = document.getElementById('search1');

    

