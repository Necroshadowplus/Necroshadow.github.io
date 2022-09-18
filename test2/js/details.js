function details(msg){
	console.log(msg)
	for(var i=0;i<data.length;i++){
		if(msg == data[i].id){
			$("#content").html('<div class="row">'+
				'<div class="col-md-10 col-md-offset-1" style="margin-top: 40px;">'+
					'<div class="details_content">'+
						'<div class="details_content_head">'+
							'<div class="details_item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
							'<div class="details_item_name">'+data[i].username+'</div>'+
							'<div class="details_item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
							'<div class="details_item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
						'</div>'+
						'<div class="details_bigImg">'+
							'<img src="./img/bigImg.jfif" alt="">'+
						'</div>'+
						'<div id="details_content_box">'+
							'<div class="details_item">'+
								'<h2>'+data[i].title+'</h2>'+
								'<p>题目来源于 LeetCode 上第 1 号问题：两数之和。题目难度为 Easy，目前通过率为 45.8% 。</p>'+
								'<h3>题目描述</h3>'+
								'<p>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</p>'+
								'<p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p>'+
								'<h3>示例：</h3>'+
								'<p>给定 nums = [2, 7, 11, 15], target = 9</p>'+
								'<p>因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]</p>'+
								'<h3>代码实现</h3>'+
								'<pre>'+
									'<code>'+
										'// 1. Two Sum'+
										'// https://leetcode.com/problems/two-sum/description/'+
										'// 时间复杂度：O(n)'+
										'// 空间复杂度：O(n)'+
										'class Solution {'+
											'public int[] twoSum(int[] nums, int target) {'+
											  'int l = nums.length;'+
											  'int[] ans=new int[2];'+
											  'int i,j;'+
											'}'+
										'}'+
									'</code>'+
								'</pre>'+
								'<div class="details_sort">'+
									'<span><i></i>leetCode</span>'+
									'<span><i></i>数据算法与结构</span>'+
								'</div>'+
								'<div class="details_btn">'+
									'<button>赞赏</button>'+
								'</div>'+
							'</div>'+
							'<ul class="msg">'+
								'<li>作者：小马<a href="#">（联系作者）</a></li>'+
								'<li>发表时间：2022-05-22 15:05:06</li>'+
								'<li class="msg_img">'+
									'<img src="./img/wechat.jpg" alt="添加作者微信">'+
								'</li>'+
							'</ul>'+
							'<div class="details_bottom">'+
								'<h4>评论</h4>'+
								'<textarea class="text" placeholder="请输入评论信息..."></textarea>'+
								'<div class="details_input">'+
									'<div class="input_name">'+
										'<i class="glyphicon glyphicon-user"></i>'+
										'<input type="text" placeholder="姓名">'+
									'</div>'+
									'<div class="input_email">'+
										'<i class="glyphicon glyphicon-envelope"></i>'+
										'<input type="text" placeholder="邮箱">'+
									'</div>'+
									'<div class="input_btn"><i class="glyphicon glyphicon-pencil"></i>评论</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>')
		}
	}
}