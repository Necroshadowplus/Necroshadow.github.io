function about(){
			$("#about").addClass('active');
			$("#index").removeClass('active');
			$("#content").html(
				'<div  class="about_container">'+
    '<div class="container">'+
      '<div class="row">'+
        '<div class="col-md-9">'+
          '<div class="about_left">'+
            '<img src="img/aboutMe.jpg" alt="" class="about_img">'+
          '</div>'+
        '</div>'+
        '<div class="col-md-3">'+
          '<div class="about_right_header">'+
            '<div class="about_right_header_text">关于我</div>'+
          '</div>'+
          '<div class="about_right_content">'+
            '<p class="about_right_content_text">张三，一个独立开发者，折腾在 0 和 1 世界的大叔；一个终身学习者，誓将学习无限循环.，希望结识可以共同成长的小伙伴。</p>'+
            '<p class="about_right_content_text">热爱编程，喜欢折腾，正在探索高效学习编程技术的方法...</p>'+
          '</div>'+
										'<div class="about_right_tag_1">'+
											'<ul class="about_right_tag_1_content" style="border: none;overflow: hidden;box-shadow: none;">'+
													'<span><i></i>编程</span>'+
													'<span><i></i>思考</span>'+
													'<span><i></i>写作</span>'+
													'<span><i></i>运动</span>'+
											'</ul>'+
										'</div>'+
										'<div class="about_right_tag_2">'+	
											'<ul class="about_right_tag_2_content" style="border: none;overflow: hidden;box-shadow: none;">'+
													'<span><i></i>java</span>'+
													'<span><i></i>javaSript</span>'+
													'<span><i></i>Node</span>'+
													'<span><i></i>React</span>'+
													'<span><i></i>MYSQL</span>'+
													'<span><i></i>...</span>'+
											'</ul>'+
										'</div>'+
										'<div class="about_right_bottom">'+
											'<div class="about_right_bottom_icon">'+
														'<a href="https://necroshadowplus.github.io/necroshadow.github.io/" target="_blank"><i class="glyphicon glyphicon-home"></i></a>'+
														'<a href="javascript:" class="wechat"><i class="glyphicon glyphicon-usd"></i><div class="wechatcode_border"><i></i><img class="qrcode" src="img/wechatPay.jpg"></div></a>'+
														'<a href="javascript:" class="qq" ><i class="glyphicon glyphicon-user"></i><div class="qq_border"><i></i><span class="qqcode">1145141919810</span></div></a>'+
											'</div>'+			
										'</div>'+

																				
         '</div>'+
      '</div>'+

    '</div>'+
  '</div>'		)
}