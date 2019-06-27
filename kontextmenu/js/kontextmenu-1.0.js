

 var kmenu={ 
 init:function(menu){ 
 
   $('<div  id="'+menu.id+'" class="dropdown-menu  show" style="padding:0!important;"></div>').appendTo(document.body);
 for(var i=0;i<menu.items.length;i++){
 menu.items[i].id =   menu.id +"_" +i//menu.items[i].html.replace(' ','_'); 
 if(menu.items[i].items.length==0){
$(' <li><a  onclick="eval('+ menu.items[i].action+');"  class="dropdown-item  "   href="#">'+menu.items[i].html+'</a> </li>').appendTo("#"+menu.id);
}else{
$(' <div class="dropright"><span class="dropdown-item dropdown-item-parent"   data-toggle="dropdown" style="cursor:pointer;">'+menu.items[i].html+'&nbsp; <i class="fa fa-caret-right float-right"></i> </span><ul id="'+menu.items[i].id+'" class="dropdown-menu" style="padding:0!important;"></ul></div>').appendTo("#"+menu.id);
	for(var j=0;j<menu.items[i].items.length;j++){
	menu.items[i].items[j].id =   menu.id +"_" +i+"_"+j;
	if(menu.items[i].items[j].items.length==0){
	$(' <li><a  onclick="eval('+ menu.items[i].items[j].action+');"  class="dropdown-item  "   href="#">'+menu.items[i].items[j].html+'</a> </li>').appendTo("#"+menu.items[i].id);
	}else {
	$(' <li class="dropdown-submenu"> <a class="dropdown-item-parent dropdown-item" href="#">'+menu.items[i].items[j].html+'&nbsp;<i class="fa fa-caret-right float-right"></i></a><ul id="'+menu.items[i].items[j].id+'" class="dropdown-menu dropdown-submenu-content" style="padding:0!important;"></ul></li>').appendTo("#"+menu.items[i].id);
		for(var k=0;k<menu.items[i].items[j].items.length;k++){
		menu.items[i].items[j].items[k].id =   menu.id +"_" +i+"_"+j+"_"+k;
		if(menu.items[i].items[j].items[k].items.length==0){
		$(' <li><a  onclick="eval('+ menu.items[i].items[j].items[k].action+');"  class="dropdown-item"   href="#">'+menu.items[i].items[j].items[k].html+'</a> </li>').appendTo("#"+menu.items[i].items[j].id);
		}else {
		$(' <li class="dropdown-submenu"> <a class="dropdown-item-parent dropdown-item" href="#">'+menu.items[i].items[j].items[k].html+'&nbsp;<i class="fa fa-caret-right float-right"></i></a><ul id="'+menu.items[i].items[j].items[k].id+'" class="dropdown-menu dropdown-submenu-content" style="padding:0!important;"></ul></li>').appendTo("#"+menu.items[i].items[j].id);
			for(var l=0;l<menu.items[i].items[j].items[k].items.length;l++){
			menu.items[i].items[j].items[k].items[l].id =   menu.id +"_" +i+"_"+j+"_"+k+"_"+l;
			if(menu.items[i].items[j].items[k].items[l].items.length==0){
		 	$(' <li><a  onclick="eval('+ menu.items[i].items[j].items[k].items[l].action+');"  class="dropdown-item"   href="#">'+menu.items[i].items[j].items[k].items[l].html+'</a> </li>').appendTo("#"+menu.items[i].items[j].items[k].id);
			}else {
			$(' <li class="dropdown-submenu"> <a class="dropdown-item-parent dropdown-item" href="#">'+menu.items[i].items[j].items[k].items[l].html+'&nbsp;<i class="fa fa-caret-right float-right"></i></a><ul id="'+menu.items[i].items[j].items[k].items[l].id+'" class="dropdown-menu dropdown-submenu-content" style="padding:0!important;"></ul></li>').appendTo("#"+menu.items[i].items[j].items[k].id);
				for(var m=0;m<menu.items[i].items[j].items[k].items[l].items.length;m++){
				menu.items[i].items[j].items[k].items[l].items[m].id =   menu.id +"_" +i+"_"+j+"_"+k+"_"+l+"_"+m;
				if(menu.items[i].items[j].items[k].items[l].items[m].items.length==0){
				$(' <li><a  onclick="eval('+ menu.items[i].items[j].items[k].items[l].items[m].action+');"  class="dropdown-item"   href="#">'+menu.items[i].items[j].items[k].items[l].items[m].html+'</a> </li>').appendTo("#"+menu.items[i].items[j].items[k].items[l].id);
				}else {/* More levels */
				}
				} 
			}
			} 
		}
		}
	}
	}
}
}
		
	 
 
 
 
 switch(menu.type){
	 case "rightclick":
$("#"+menu.target).bind("contextmenu",function(e){
  e.preventDefault();  
  $("#"+menu.id).css("left",e.pageX);
  $("#"+menu.id).css("top",e.pageY); 
  $("#"+menu.id).fadeIn(200,function(){
  $(document).on("click",function(){
  $("#"+menu.id).hide();   
  $(".dropdown-submenu-content").hide();     
  $(".dropdown-menu").removeClass("show");     
  $(document).off("click");
  }); 

}); 
}); 
break;
 case "leftclick":
$("#"+menu.target).click(function(e){
 // e.preventDefault();  
 
  $("#"+menu.id).css("left",e.pageX);
  $("#"+menu.id).css("top",e.pageY); 
  $("#"+menu.id).fadeIn(1,function(){
  $(document).on("click",function(){
 //  $("#"+menu.id).removeClass("show");  
 // $(".dropdown-submenu-content").hide();     
 //  $(".dropdown-menu").removeClass("show");     
 // $(document).off("click");
  }); 
}); 
}); 
break;
 case "standalone":
 
 
  
  $("#"+menu.id).css("left",$("#"+menu.target).position().left+"px");
  $("#"+menu.id).css("top",$("#"+menu.target).position().top+"px");
  $("#"+menu.id).fadeIn(1,function(){  }); 
 
break;
}

  
  $('.dropdown-submenu a.dropdown-item-parent').on("click", function(e){
    $(this).next('ul').toggle(); 
switch(menu.topMode){   
 case "auto":  
 $(this).next('ul').css('top',$(this).parent().position().top+"px");
 break;
  case "parent-top":  
 //$(this).next('ul').css('top',$(this).parent().position().top+"px");
 break;
}
    e.stopPropagation();
    e.preventDefault();
  });
 // $('.dropdown-item').on("click", function(e){
  $('.dropdown-item').on("click", function(e){
 if(menu.type=='standalone'){return;}
	if(!$(this).hasClass('dropdown-item-parent')){
 $("#"+menu.id).hide();   
  $(".dropdown-submenu-content").hide();     
    $(".dropdown-menu").removeClass("show");     
   $(document).off("click");
	}
  });
  
  
  
 
 }
 
}