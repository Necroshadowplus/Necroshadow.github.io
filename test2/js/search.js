	function onSearch(){
	$("#index").addClass('active');
	$("#about").removeClass('active');
	$("#archive").removeClass('active');
	$("#classify").removeClass('active');
	$("#lable").removeClass('active');
	var $searchVal = $("#search").val();
	if($searchVal){
		$("#content").html('<div class="row">'+
							'<div class="col-md-10 col-md-offset-1" style="margin-top: 40px;">'+
								'<div class="content">'+
									'<div class="content_head">'+
										'<div>搜索结果</div>'+
										'<div>共<span id="total"> '+data.length+' </span>个</div>'+
									'</div>'+
									'<div id="content_box">'+	
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>')
		var searchStr ="";
		var num =0
		for(var i=0;i<data.length;i++){
			if($searchVal == data[i].id){
				num ++;
				searchStr += '<div class="content_list">'+
								'<div class="item">'+
									'<h3><a onclick="details('+data[i].id+')">'+data[i].title+'</h3>'+
									'<p><a>'+data[i].content+'</a></p>'+
									'<div>'+
										'<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
										'<div class="item_name">'+data[i].username+'</div>'+
										'<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
										'<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
										'<div class="item_sign">'+data[i].sign+'</div>'+
									'</div>'+
								'</div>'+
								'<div class="img"><img src="'+data[i].img+'" alt="" width="100"></div>'+
								'<div class="item_line"></div>'+
							'</div>'
			}
		}
		
		$("#content_box").html(searchStr)
		$("#total").html(" "+num+" ")
	}else{
		alert("请输入搜索的值！")
	}
	
	}
	
function keyup_submit(e){
	var evt = window.event || e;
	if(evt.keyCode == 13){
		onSearch();
	}
}