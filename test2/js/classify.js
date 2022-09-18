function classify(){
	$("#classify").addClass('active');
	$("#index").removeClass('active');
	$("#about").removeClass('active');
	$("#archive").removeClass('active');
	$("#lable").removeClass('active');
var Data=[
		{
			'id':'1',
			'name':'spring Cloud',
			'data':[
			{id:1,title:'Eureka 源码分析之 Eureka Server',content:'上一篇文章《Eureka 源码分析之 Eureka Client》通过源码知道 ，eureka Client 是通过 http rest来 与 eureka server 交互，实现 注册服务，续约服务，服务下线 等。本篇探究下eureka server......',avatar:"./img/avatar.jpg",username:"小吴",time:"2022-05-11",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
			{id:2,title:"Feign 调用丢失Header的解决方案",content:"在 Spring Cloud 中 微服务之间的调用会用到Feign，但是在默认情况下，Feign 调用远程服务存在Header请求头丢失问题......",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"},
			{id:3,title:'Spring Cloud 微服务开发系列整理',content:'上一篇文章《Eureka 源码分析之 Eureka Client》通过源码知道 ，eureka Client 是通过 http rest来 与 eureka server 交互，实现 注册服务，续约服务，服务下线 等。本篇探究下eureka server......',avatar:"./img/about.jpeg",username:"小吴",time:"2022-05-29",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
			{id:4,title:"Eureka 源码分析之 Eureka Client",content:"Eureka是一种基于REST（Representational State Transfer）的服务，主要用于AWS云，用于定位服务，以实现中间层服务器的负载平衡和故障转移。我们将此服务称为Eureka Server。",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"},
			{id:5,title:"客户端负载均衡Ribbon之源码解析",content:"Eureka是一种基于REST（Representational State Transfer）的服务，主要用于AWS云，用于定位服务，以实现中间层服务器的负载平衡和故障转移。我们将此服务称为Eureka Server。",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"}
			]
		},
		{   
			'id':'2',
			'name':'spring Boot',
			'data':[
				{id:1,title:'Spring Boot 使用 JSR303 实现参数验证',content:'JSR-303 是 JAVA EE 6 中的一项子规范，叫做 Bean Validation。JSR303 用于与 Java Bean 中的字段进行校验。......',avatar:"./img/avatar.jpg",username:"周姐",time:"2018-02-28",num:"11538",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:2,title:"Spring Boot 集成 Seata 解决分布式事务问题",content:"Seata 是 阿里巴巴2019年开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务。在 Seata 开源之前，Seata 对应的内部版本在阿里内部一直扮演着分布式一致性中间件的角色，帮助阿里度过历年的双11，对各业务进行了有力的支撑。",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"},
				{id:3,title:'Spring Boot Actuator 整合 Prometheus',content:'Spring Boot 自带监控功能 Actuator，可以帮助实现对程序内部运行情况监控，比如监控状况、Bean加载情况、环境变量、日志信息、线程信息等。这一节结合 Prometheus 、Grafana 来更加直观的展示这些信息。......',avatar:"./img/about.jpeg",username:"小吴",time:"2022-05-29",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:4,title:"Spring Boot Security OAuth2 实现支持JWT令牌的授权服务器",content:"使用 OAuth2 时结合JWT ，就能节省集中式令牌校验开销，实现无状态授权认证。......",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"},
				{id:5,title:"Spring Boot Security 整合 JWT 实现 无状态的分布式API接口",content:"JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案。本文重点讲解Spring Boot 结合 jwt ，来实现前后端分离中，接口的安全调用。......",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"}
			]
		},
		{	
			'id':'3',
			'name':'Docker',
			'data':[
				{id:1,title:'Docker Swarm 微服务部署',content:'在《DockerSwarm集群环境搭建》中，我们使用docker service create 来部署服务时，一次只能部署一个服务，这一节就讲解 DockerSwarm 集群环境中， 使用 docker-compose.yml 一次启动多个关联的服务。......',avatar:"./img/avatar.jpg",username:"周周",time:"2022-05-11",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:2,title:"Docker Swarm 集群环境搭建",content:"Swarm 在 Docker 1.12 版本之前属于一个独立的项目，在 Docker 1.12 版本发布之后，该项目合并到了 Docker 中，成为 Docker 的一个子命令。目前，Swarm 是 Docker 社区提供的唯一一个原生支持 Docker 集群管理的工具。",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"},
				
			]
		},
		{	
			'id':'4',
			'name':'Prometheus',
			'data':[
				{id:1,title:'Spring Boot Actuator 整合 Prometheus',content:'Spring Boot 自带监控功能 Actuator，可以帮助实现对程序内部运行情况监控，比如监控状况、Bean加载情况、环境变量、日志信息、线程信息等。这一节结合 Prometheus 、Grafana 来更加直观的展示这些信息。',avatar:"./img/avatar.jpg",username:"张三",time:"2020-09-11",num:"489",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:2,title:"Prometheus 集成 Node Exporter",content:"Prometheus 官方和一些第三方，已经把一些常用数据库、系统、中间件等的指标数据的采集做成了一个个 exporter，在生产环境中，直接导入使用就可以。 这一节，我们就用 Prometheus 官方提供的 Node Exporter 来完成对Linux系统运行数据的采集 。",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"},
				{id:3,title:'Prometheus 整合 AlertManager',content:'Alertmanager 主要用于接收 Prometheus 发送的告警信息，它很容易做到告警信息的去重，降噪，分组，策略路由，是一款前卫的告警通知系统。它支持丰富的告警通知渠道，可以将告警信息转发到邮箱、企业微信、钉钉等。',avatar:"./img/about.jpeg",username:"小吴",time:"2022-05-29",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:4,title:"Prometheus 与 Grafana 集成",content:"Grafana 是一个可视化仪表盘，它拥有美观的图标和布局展示，功能齐全的仪表盘和图形编辑器，默认支持 CloudWatch、Graphite、Elasticsearch、InfluxDB、Mysql、PostgreSQL、Prometheus、OpenTSDB 等作为数据源。",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"},
				{id:5,title:"Prometheus 入门",content:"Prometheus 是一套开源的系统监控报警框架。它启发于 Google 的 borgmon 监控系统，由工作在 SoundCloud 的 google 前员工在 2012 年创建，作为社区开源项目进行开发，并于 2015 年正式发布。",avatar:"./img/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./img/about.jpeg"}
			]
		},
		{	'id':'5',
			'name':'spring Cloud Alibaba',
			'data':[
				{id:1,title:'SpringCloud Alibaba Nacos 入门',content:'Prometheus 是一套开源的系统监控报警框架。它启发于 Google 的 borgmon 监控系统，由工作在 SoundCloud 的 google 前员工在 2012 年创建，作为社区开源项目进行开发，并于 2015 年正式发布。',avatar:"./img/avatar.jpg",username:"台南图",time:"2021-08-31",num:"1589",sign:"学习笔记",img:"./img/aboutMe.jpg"},
			
			]
		},
		{	
			'id':'6',
			'name':'java',
			'data':[
				{id:1,title:'第七篇 : ZGC 垃圾收集器',content:'Java 11包含一个全新的垃圾收集器--ZGC，它由Oracle开发，承诺在数TB的堆上具有非常低的暂停时间。 在本文中，我们将介绍开发新GC的动机，技术概述以及由ZGC开启的一些可能性。......',avatar:"./img/avatar.jpg",username:"李白",time:"2022-05-11",num:"1892",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:2,title:'第六篇 : Epsilon 垃圾收集器',content:'Epsilon（A No-Op Garbage Collector）垃圾回收器控制内存分配，但是不执行任何垃圾回收工作。一旦java的堆被耗尽，jvm就直接关闭。设计的目的是提供一个完全消极的GC实现，分配有限的内存分配，最大限度降低消费内存占用量和内存吞吐时的延迟时间。',avatar:"./img/avatar.jpg",username:"小吴",time:"2022-05-11",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:3,title:'第五篇 : 启动单个Java源代码文件的程序',content:'JEP330-启动单文件代码程序(Launch Single-File Source-Code Programs)，是JDK11中一个很不错的功能。这个功能允许你直接使用java解析器运行java代码，java文件会在内存中执行编译并且直接执行。唯一的约束在于所有相关的类必须定义在东一个java文件中。......',avatar:"./img/avatar.jpg",username:"小吴",time:"2022-05-11",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:4,title:'第四篇 : 增强API',content:'JDK 9~11 在语言语法方面有一个小改动，增加了相当数量的新API，这一节讲解下JDK1.8之后新增的一些API......',avatar:"./img/avatar.jpg",username:"小吴",time:"2022-05-11",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
				{id:5,title:'第三篇 : 局部变量类型推断',content:'Java局部变量类型推断（LVTI），简称var类型（标识符var不是一个关键字，是一个预留类型名），Java10中新添加的功能。作为100%编译特征，它不会影响字节码，运行时或者性能。在编译时，编译器会检查赋值语句右侧代码，从而推断出具体类型。',avatar:"./img/avatar.jpg",username:"小吴",time:"2022-05-11",num:"559",sign:"学习笔记",img:"./img/aboutMe.jpg"},
			]
		}
	]

$('#content').html('<div class="row">'+
						'<div class="col-md-8 col-md-offset-2">'+
							'<div class="classify_hear">'+
								'<div class="classify_hear_a">'+
									'<span style="float: left;font-weight: bold;font-size: 17px;color: #64d0cb;">分类</span>'+
									'<span style="float: right;font-size: 14px;">共'+
										'<span style="color:#f28c68;font-size: 20px;"> 6 </span>个'+
									'</span>'+
								'</div>'+
								'<ul class="classify_hear_b">'+
									'<li class="active_tow" name="s" id="1"><i class="glyphicon glyphicon-th-list"></i> spring Cloud<div style="display:inline-block;padding:0px 10px;"></div></li>'+
									'<li name="s" id="2"><i class="glyphicon glyphicon-th-list"></i> spring Boot<div style="display:inline-block;padding:0px 10px;"></div></li>'+
									'<li name="s" id="3"><i class="glyphicon glyphicon-th-list" ></i> Docker<div style="display:inline-block;padding:0px 10px;"></div></li>'+
									'<li name="s" id="4"><i class="glyphicon glyphicon-th-list" ></i> Prometheus<div style="display:inline-block;padding:0px 10px;"></div></li>'+
									'<li name="s" id="5"><i class="glyphicon glyphicon-th-list"></i> spring Cloud Alibaba<div style="display:inline-block;padding:0px 10px;"></div></li>'+
									'<li name="s" id="6"><i class="glyphicon glyphicon-th-list"></i> java<div style="display:inline-block;padding:0px 10px;"></div></li>'+
								'</ul>'+
							'</div>'+
							'<div id="neirong"  class="classify_footer" >'+
							'</div>'+
						'</div>'+
				'</div>')
var lis=document.getElementsByName("s")
		console.log(lis)
		for(var i=0;i<lis.length;i++){
			
			lis[i].onclick=function(){
				for(var j=0;j<lis.length;j++){
					lis[j].className=''
				}
				this.className = "active_tow"
				console.log(this.id)
				var xx=this.id
				for(var x=0;x<Data.length;x++){
					if(xx==Data[x].id){
						console.log(Data[x].name)
						var str=''
						var ss=0
						for(var y=0;y<(Data[x].data).length;y++){
							console.log(Data[x].name)
	
							str+='<div style="width: 100%;height: auto;">'+
											'<div class="classify_footer_a">'+
												'<p style="font-size: 15px;font-weight:bold;"><a onclick="details('+(Data[x].data)[y].id+')">'+(Data[x].data)[y].title+'</a></p>'+
												'<p style="width:500px;">'+(Data[x].data)[y].content+'</p>'+
												'<div>'+
													'<span style="font-size: 14px;font-weight: bold;color: cornflowerblue;"><span style="display: inline-block;width: 20px;height: 20px;border-radius: 10px;overflow: hidden;"><img width="20px" src="'+(Data[x].data)[y].avatar+'" alt=""></span> '+(Data[x].data)[y].username+'</span>'+
													'<span style=" color:#bbbbbc;"><i class="glyphicon glyphicon-calendar"></i> '+(Data[x].data)[y].time+'</span>'+
													'<span style=" color:#bbbbbc;"><i class="glyphicon glyphicon-eye-open"></i> '+(Data[x].data)[y].num+'</span>'+
												'</div>'+
											'</div>'+
											'<div class="classify_footer_b"style="border-radius: 5px;overflow: hidden;width: 200px;height: 110px;">'+
													'<img src="'+(Data[x].data)[y].img+'" width="200px" alt="">'+
											'</div>'+
										'</div>'
						}
						$('#neirong').html(str)
					}
				}
			}
			
		}
		var ss=''
for(var i=0;i<(Data[0].data).length;i++){
	ss+='<div style="width: 100%;height: auto;">'+
			'<div class="classify_footer_a">'+
				'<p style="font-size: 15px;font-weight:bold;"><a onclick="details('+(Data[0].data)[i].id+')">'+(Data[0].data)[i].title+'</a></p>'+
				'<p style="width:500px;">'+(Data[0].data)[i].content+'</p>'+
				'<div>'+
					'<span style="font-size: 14px;font-weight: bold;color: cornflowerblue;"><span style="display: inline-block;width: 20px;height: 20px;border-radius: 10px;overflow: hidden;"><img width="20px" src="'+(Data[0].data)[i].avatar+'" alt=""></span> '+(Data[0].data)[i].username+'</span>'+
					'<span style=" color:#bbbbbc;"><i class="glyphicon glyphicon-calendar"></i> '+(Data[0].data)[i].time+'</span>'+
					'<span style=" color:#bbbbbc;"><i class="glyphicon glyphicon-eye-open"></i> '+(Data[0].data)[i].num+'</span>'+
				'</div>'+
			'</div>'+
			'<div class="classify_footer_b"style="border-radius: 5px;overflow: hidden;width: 200px;height: 110px;">'+
					'<img src="'+(Data[0].data)[i].img+'" width="200px" alt="">'+
			'</div>'+
		'</div>'
}

	$('#neirong').html(ss)

}