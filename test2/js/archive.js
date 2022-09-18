function archive(){
	$("#archive").addClass('active');
	$("#index").removeClass('active');
	$("#about").removeClass('active');
	$("#classify").removeClass('active');
	$("#lable").removeClass('active');
	$("#content").html('<div class="archive_content" id="archive_content">'+
			'<div class="archive_content_header">'+
				'<div class="archive_header_left"><i class="glyphicon glyphicon-folder-open"></i>归档</div>'+
				'<div class="archive_header_right">共<span id="total"> '+ data.length +' </span>篇</div>'+
			'</div>'+
			'<div class="archive_content_center" id="archive_content_center">'+
			'</div>'+
		'</div>')
		
	data.sort(function(date1,date2) {
			return Date.parse(date2.time) - Date.parse(date1.time)
		})
		
		var years = []
		for(var i=0;i<data.length;i++){
			var year = data[i].time.substr(0,4)
			var flag = true
			for(var j=0;j<years.length;j++){
				if(years[j] == year){
					flag = false
				}
			}
			if(flag){
				years.push(year)
			}
		}
		
		var str = ""
		for(var x=0;x<years.length;x++){
			str += '<h2>'+years[x]+'</h2>'+
				'<div class="archive_center_container">'
			for(var y=0;y<data.length;y++){
				var timeArr = data[y].time.split("-")
				if(timeArr[0] == years[x]){
					str += '<div class="archive_center_list">'+
							'<li onclick=details('+data[y].id+')><i></i><a>'+data[y].title+'<span><i></i>'+timeArr[1]+'月'+timeArr[2]+'</span></a></li>'+
						'</div>'+
						'<div class="archive_type">'+
							'<span><i></i>原创</span>'+
						'</div>'
				}
			}
			str += '</div>'
			str += '</div>'
		}
		$("#archive_content_center").append(str)
}