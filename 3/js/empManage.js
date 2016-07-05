/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-05 21:11:25
 * @version $Id$
 */

$(function(){
	$('#shiyongqi-tabs').tabs();
	$('#lizhi-manage-tabs').tabs();
	$('#dept-change-tabs').tabs();
	$('#post-change-tabs').tabs();

		/*三级菜单鼠标点击效果结束*/

	/*员工试用期管理查询界面-查询试用期员工按钮 开始*/
	$(".probation-emp-search-btn").click(function(){
		// 获取试用期员工信息列表
		// 取出json数据并添加到列表中
		// alert("sdf");
		
		$(".probation-emp-search-list tr:not(:first)").remove();
		// 将之前查询结果清空
		// $('.new-emp tr:not(:first)').remove();
		//从数据库中获取新聘员工信息显示在网页中
		$.ajax({
			type : 'POST', //这里可以换成GET
			url : 'json.json',//该文件路径只能在当前路径下，../json.json出错
			dataType:'json',
			
			success : function (data) {
				var emp=eval(data);
				// var emps="";
				// alert(emp[0]["urla"]);
				// $('#report-tabs').tabs({active:0});
				/*for (var i = 0;i<emp.length;i++){
					emps+=$("<tr><td>"+emp[i]["urla"]+"</td><td>"+emp[i]["urlb"]+"</td><td>"+emp[i]["urlc"]+"</td><td>"+emp[i]["urld"]+"</td><td>"+emp[i]["urle"]+"</td><td>"+emp[i]["urlf"]+"</td><td>"+emp[i]["urlg"]+"</td></tr>");
					 // alert(emps);
					  }
					  */
					  for(var i = 0; i < emp.length; i ++){
					  	var emps=$('<tr><td>'+emp[i]['urla']+'</td><td>'+emp[i]['urlb']+'</td>'
					  		  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
					  	      +'<td>'+emp[i]['urlf']+'</td><td>'+emp[i]['urlg']+'</td><td><input type="button" value="编辑"/></td></tr>');

					  	$('.probation-emp-search-list').append(emps);	
					  	$(".probation-emp-search-list").find('input').attr('class','ruzhi-yidong-shiyongqi-select-edit-btn');
						// alert($("probation-emp-search-list input:first").attr('class'));	
						/*员工试用期管理查询界面-员工信息编辑按钮-跳转效果开始*/
					  }
					  $('.ruzhi-yidong-shiyongqi-select-edit-btn').click(function(event){
					  
					  	var probationId = $(this).parent().parent().find('td:eq(0)').text();
					  	$(".wwwwwww").html(probationId);
					  	// alert(probationId);
					  		$('.ruzhi-yidong-shiyongqi').dialog({
					  			title:'试用期管理',
					  			width:'600px',
					  			modal:true,		//对话框会遮罩一层灰纱，无法操作。
					  			buttons:{
					  				'完成':function(){

					  							$('.ruzhi-yidong-shiyongqi').dialog('close');
					  						}
					  			}
					  		});
					  	});		
			
			},
			error:function (xhr, status, statusText) {
				alert('状态'+xhr.status + '错误信息:' + xhr.statusText);
			}


		});


	})

			/*员工试用期管理查询界面-员工信息编辑按钮-跳转效果结束*/
	/*员工试用期管理查询界面-查询已转正员工按钮 开始*/
	$(".probation-official-emp-search-btn").click(function(){
		// 获取试用期员工信息列表
		// 取出json数据并添加到列表中
		// alert("sdf");
		
		$(".probation-official-emp-search-list tr:not(:first)").remove();
		// 将之前查询结果清空
		
		
		// $('.new-emp tr:not(:first)').remove();
		//从数据库中获取新聘员工信息显示在网页中
		$.ajax({
			type : 'POST', //这里可以换成GET
			url : 'json.json',//该文件路径只能在当前路径下，../json.json出错
			dataType:'json',
			
			success : function (data) {
				var emp=eval(data);
				// var emps="";
				// alert(emp[0]["urla"]);
				// $('#report-tabs').tabs({active:0});
				/*for (var i = 0;i<emp.length;i++){
					emps+=$("<tr><td>"+emp[i]["urla"]+"</td><td>"+emp[i]["urlb"]+"</td><td>"+emp[i]["urlc"]+"</td><td>"+emp[i]["urld"]+"</td><td>"+emp[i]["urle"]+"</td><td>"+emp[i]["urlf"]+"</td><td>"+emp[i]["urlg"]+"</td></tr>");
					 // alert(emps);
					  }
					  */
					  for(var i = 0; i < emp.length; i ++){
					  	var emps=$('<tr><td>'+emp[i]['urla']+'</td><td>'+emp[i]['urlb']+'</td>'
					  		  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
					  	      +'<td>'+emp[i]['urlf']+'</td><td>'+emp[i]['urlg']+'</td></tr>');
					  	$('.probation-official-emp-search-list').append(emps);				
					  }
			
			},
			error:function (xhr, status, statusText) {
				alert('状态'+xhr.status + '错误信息:' + xhr.statusText);
			}

		});
	})
		/*员工部门调动查询界面-员工信息编辑按钮-跳转效果开始*/
	/*	$(".ruzhi-yidong-bumen-select-edit-btn").click(function(event) {
				$("#main-right .ruzhi-yidong-bumen").show().siblings().hide();
			})*/
			$('.ruzhi-yidong-bumen-select-edit-btn').click(function(){
					$('.ruzhi-yidong-bumen').dialog({
						title:'部门调动',
						width:'600px',
						modal:true,		//对话框会遮罩一层灰纱，无法操作。
						buttons:{
							'完成':function(){
								// $.ajax({
								// 	url:'report.json',
								// 	type:'POST',
								// 	success:function(){
								// 		alert('完成！');
										$('.ruzhi-yidong-bumen').dialog('close');
									}
							// 	});
							// }
						}
					});
				});
			/*员工部门调动查询界面-员工信息编辑按钮-跳转效果结束*/

		/*员工岗位调动查询界面-员工信息编辑按钮-跳转效果开始*/
	/*	$(".ruzhi-yidong-gangwei-select-edit-btn").click(function(event) {
				
				$("#main-right .ruzhi-yidong-gangwei").show().siblings().hide();
			})*/
			$('.ruzhi-yidong-gangwei-select-edit-btn').click(function(){
					$('.ruzhi-yidong-gangwei').dialog({
						title:'岗位调动',
						width:'600px',
						modal:true,		//对话框会遮罩一层灰纱，无法操作。
						buttons:{
							'完成':function(){
								// $.ajax({
								// 	url:'report.json',
								// 	type:'POST',
								// 	success:function(){
								// 		alert('完成！');
										$('.ruzhi-yidong-gangwei').dialog('close');
								// 	}
								// });
							}
						}
					});
				});
			/*员工岗位调动查询界面-员工信息编辑按钮-跳转效果结束*/

		/*员工离职调动查询界面-员工信息编辑按钮-跳转效果开始*/
		/*$(".ruzhi-lizhi-select-edit-btn").click(function(event) {
				$("#main-right .ruzhi-lizhi").show().siblings().hide();
			})*/
			$('.ruzhi-lizhi-select-edit-btn').click(function(){
					$('.ruzhi-lizhi').dialog({
						title:'离职员工查询',
						width:'600px',
						modal:true,		//对话框会遮罩一层灰纱，无法操作。
						buttons:{
							'完成':function(){
								// $.ajax({
								// 	url:'report.json',
								// 	type:'POST',
								// 	success:function(){
								// 		alert('完成！');
										$('.ruzhi-lizhi').dialog('close');
								// 	}
								// });
							}
						}
					});
				});
			/*员工离职调动查询界面-员工信息编辑按钮-跳转效果结束*/

			/*员工入职管理-基本信息-是否有试用期部分开始*/
			$("input[class='basic-message-probation']").click(function(){
				// alert($("input[class='basic-message-probation']:checked").val());
				if($("input[class='basic-message-probation']:checked").val()=='是'){
					$(".ruzhi-xinxi-jibenxinxi-select .probation-box").show();
				}
				else{
					$(".ruzhi-xinxi-jibenxinxi-select .probation-box").hide();
				}
			})
			
			/*员工入职管理-基本信息-是否有试用期部分结束*/
			/*试用期状态开始*/
			$(".shiyongqi-status").change(function(){
				// alert("sdf");
				// alert($(".shiyongqi-status option:selected").text());
				var status=$(".shiyongqi-status option:selected").text();
				if(status=='延期'){
					// alert("sdf"+status+"sdf");
					$(".ruzhi-yidong-shiyongqi .delay-time-box").show();
				}
				else{
					$(".ruzhi-yidong-shiyongqi .delay-time-box").hide();
				}
			})
			/*试用期状态结束*/
			/*员工入职管理-基本信息-新建部门部分开始*/
			$(".ruzhi-xinxi-jibenxinxi-select .build-dept").click(function(){

						$('#new-dept').dialog({
							title:'新建部门',
							width:'900px',
							modal:true,		//对话框会遮罩一层灰纱，无法操作。
							buttons:{
								'完成':function(){
									// $.ajax({
									// 	url:'report.json',
									// 	type:'POST',
									// 	success:function(){
									// 		alert('完成！');
											$('#new-dept').dialog('close');
										}
								// 	});
								// }
							}

					});
			})
			/*员工入职管理-基本信息-新建部门部分结束*/

			/*员工入职管理-基本信息-新建岗位部分开始*/
			$(".ruzhi-xinxi-jibenxinxi-select .build-post").click(function(){

						$('#new-post').dialog({
							title:'新建岗位',
							width:'900px',
							modal:true,		//对话框会遮罩一层灰纱，无法操作。
							buttons:{
								'完成':function(){
									// $.ajax({
									// 	url:'report.json',
									// 	type:'POST',
									// 	success:function(){
									// 		alert('完成！');
											$('#new-post').dialog('close');
										}
								// 	});
								// }
							}

					});
			})
			/*员工入职管理-基本信息-新建岗位部分结束*/
})