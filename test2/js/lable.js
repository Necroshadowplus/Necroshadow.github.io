
//标签页面
function lable(){
	$("#lable").addClass('active');
	$("#about").removeClass('active');
	$("#archive").removeClass('active');
	$("#classify").removeClass('active');
	$("#index").removeClass('active');
	
	
	var lablesett = new Set()
	
	// 获取标签Set集合
	var labelSet = new Set()
	for (var i = 0; i < data.length; i++) {
		labelSet.add(data[i].sign)
	}
	
	// 使用Set集合创建标签一个数组
	var labels = Array.from(labelSet.values())
	var labelData = []
	
	for (var i = 0; i < labels.length; i++) {
		// 向对象数组中添加数据
		labelData.push({sign:labels[i],count:getLabelCount(labels[i])})
	}
	//博客标签页面结构
	var lableStr ='<div class="row">'+
	'	<div class="col-md-10 col-md-offset-1">'+
	'		<div class="lable_before">'+
	'			<div class="lable_contre_head">'+
	'				<div class="contre_head">'+
	'					<div>标签</div>'+
	'					<div>共<span id="total">'+labels.length+'</span>个</div>'+
	'				</div>'+
	'				<!-- 标签显示 -->'+
	'				<div class="label_content_lable" >'+
	'					<ul id="label_content_lable" style="box-shadow: none;border: none;">'+
	'						<li id="l1" onclick="labelshow(\'l1\')"><span><i></i>isdhd</span> <span>3</span></li>'+					
	'					</ul>'+
	'				</div>'+
	'			</div>'+
	'			<!-- 页面内容 -->'+
	'			<div class="lable_contre" id="content_box">'+
	'				'+
	'			</div>'+
	'		</div>'+
	'	</div>	'+
	'</div>'
	
	//添加标签
	var labelLi =""
	for(var j = 0;j<labels.length;j++){
		labelLi += '<li id="l'+j+'" onclick="labelshow('+"'"+labelData[j].sign+"'"+','+"'"+'l'+j+"'"+')"><span><i></i>'+labelData[j].sign+'</span> <span>'+labelData[j].count+'</span></li>'
	}
	$("#content").html(lableStr)
	$("#label_content_lable").html(labelLi)
	labelshow(labelData[0].sign,"l0");
}

//获取标签和标签的数量
function getLabelCount(sign){
	var count = 0
	for (var i = 0; i < data.length; i++) {
		if(data[i].sign == sign){
			count++
		}
	}
	return count
}
//修改点击样式和刷新内容
function labelshow(label,id){
	//刷新内容
		
	var labels=labelRefresh(label)
	$("#content_box").html(labels)
	//修改样式
	id="#"+id
	$(id).addClass("lableactive").siblings("li").removeClass("lableactive")
	$(id).children("span").children("i").addClass("lableactive").parent().parent().siblings("li").children("span").children("i").removeClass("lableactive")
}

//根据标签内容刷新标签内容
function labelRefresh(sign){
	var str=""
	for(var i=0;i<data.length;i++){
		if(sign==data[i].sign){
			str += '<div class="contre_content">'+
				'<div class="contre_content_left">'+
					'<h3><a onclick="details('+data[i].id+')">'+data[i].title+'</h3>'+
					'<p><a href="">'+data[i].content+'</a></p>'+
					'<div>'+
						'<div class="contre_content_img"><img src="'+data[i].avatar+'" alt=""></div>'+
						'<div class="contre_content_name">'+data[i].username+'</div>'+
						'<div class="contre_content_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
						'<div class="contre_content_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
						'<div class="contre_content_sign">'+data[i].sign+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="contre_content_right"><img src="'+data[i].img+'" alt="" width="100"></div>'+
				'<div class="contre_content_line"></div>'+
			'</div>'
		}			
	}
	return str
}
