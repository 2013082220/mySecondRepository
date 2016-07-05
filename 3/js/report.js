/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-05 21:11:59
 * @version $Id$
 */

$(function(){
	//从数据库中获取部门信息显示在网页中
	for (var i = 0; i < 5; i++) {
		var dep = $('<option>' + i + '</option>');
		$('.dep').append(dep);
	}


	//设置人事月报的年，月范围(默认为当前年份，当前月份)
	var today = new Date();

	for (var i = (today.getFullYear() - 50); i < today.getFullYear(); i++) {
		var year = $('<option>' + i + '</option>');
		$('#emp-year').append(year);
	}
	$('#emp-year').append('<option selected="selected">' + today.getFullYear() + '</option>');

	for (var i = 1; i <= 12; i++) {
		if (i == (today.getMonth() + 1)) {
			var month = $('<option selected="selected">' + (today.getMonth() + 1) + '</option>');
		} else {
			var month = $('<option>' + i + '</option>');
		}
		$('#emp-month').append(month);
	}
	$('#new-search').button().click(function(){
			//将之前查询结果清空
			$('.new-emp tr:not(:first)').remove();
			//从数据库中获取新聘员工信息显示在网页中
			$.ajax({
				type : 'POST', //这里可以换成GET
				url : 'report.json',
				dataType:'json',
				data:{
					start:$('#new-date1').val(),
					end:$('#new-date2').val(),
					dep:$('#new-dep').val(),
				},
				success : function (data) {
					var emp=eval(data);
					alert("emp");
					$('#report-tabs').tabs({active:0});

					for(var i = 0; i < emp.length; i ++){
						var emps=$('<tr><td>'+emp[i]['urla']+'</td><td>'+emp[i]['urlb']+'</td>'
							  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
						      +'<td>'+emp[i]['urlf']+'</td><td>'+emp[i]['urlg']+'</td></tr>');
						$('.new-emp').append(emps);				
					}
				},
				error:function (xhr, status, statusText) {
					alert('状态'+xhr.status + '错误信息:' + xhr.statusText);
				}

			});
		});

		$('#leave-search').button().click(function(){
			//将之前查询结果清空
			$('.leave-emp tr:not(:first)').remove();
			//从数据库中获取离职员工信息显示在网页中
			$.ajax({
				type : 'POST', //这里可以换成GET
				url : 'report.json',
				dataType:'json',
				data:{
					start:$('#leave-date1').val(),
					end:$('#leave-date2').val(),
					dep:$('#leave-dep').val(),
				},
				success : function (data) {
					var emp=eval(data);
					$('#report-tabs').tabs({active:1});

					for(var i = 0; i < emp.length; i ++){
						var emps=$('<tr><td>'+emp[i]['urla']+'</td><td>'+emp[i]['urlb']+'</td>'
							  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
						      +'<td>'+emp[i]['urlf']+'</td><td>'+emp[i]['urlg']+'</td></tr>');
						$('.leave-emp').append(emps);				
					}
				},
				error:function (xhr, errorText, errorStatus) {
					alert('状态'+xhr.status + '错误信息:' + xhr.statusText);
				}
			});
		});

		$('#dep-search').button().click(function(){
			//将之前查询结果清空
			$('.dep-emp tr:not(:first)').remove();
			//从数据库中获取岗位调动员工信息显示在网页中
			$.ajax({
				type : 'POST', //这里可以换成GET
				url : 'report.json',
				dataType:'json',
				data:{
					start:$('#dep-date1').val(),
					end:$('#dep-date2').val(),
				},
				success : function (data) {
					var emp=eval(data);
					$('#report-tabs').tabs({active:2});

					for(var i = 0; i < emp.length; i ++){
						var emps=$('<tr><td>'+emp[i]['urla']+'</td><td>'+emp[i]['urlb']+'</td>'
							  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
						      +'<td>'+emp[i]['urlf']+'</td><td>'+emp[i]['urlg']+'</td></tr>');
						$('.dep-emp').append(emps);				
					}
				},
				error:function (xhr, errorText, errorStatus) {
					alert('状态'+xhr.status + '错误信息:' + xhr.statusText);
				}
			});
		});

		$('#post-search').button().click(function(){
			//将之前查询结果清空
			$('.post-emp tr:not(:first)').remove();
			//从数据库中获取岗位调动员工信息显示在网页中
			$.ajax({
				type : 'POST', //这里可以换成GET
				url : 'report.json',
				dataType:'json',
				data:{
					start:$('#post-date1').val(),
					end:$('#post-date2').val(),
				},
				success : function (data) {
					var emp=eval(data);
					$('#report-tabs').tabs({active:3});

					for(var i = 0; i < emp.length; i ++){
						var emps=$('<tr><td>'+emp[i]['urla']+'</td><td>'+emp[i]['urle']+'</td><td>'+emp[i]['urlb']+'</td>'
							  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
						      +'<td>'+emp[i]['urlf']+'</td><td>'+emp[i]['urlg']+'</td></tr>');
						$('.post-emp').append(emps);				
					}
				},
				error:function (xhr, errorText, errorStatus) {
					alert('状态'+xhr.status + '错误信息:' + xhr.statusText);
				}
			});
		});

		$('#emp-search').button().click(function(){
			//将之前查询结果清空
			$('.emp-report tr:not(:first,.second)').remove();
			
			//从数据库中获取岗位调动员工信息显示在网页中
			$.ajax({
				type : 'POST', //这里可以换成GET
				url : 'report.json',
				dataType:'json',
				data:{
					year:$('#emp-year').val(),
					month:$('#emp-month').val()
				},
				success : function (data) {
					var emp=eval(data);
					$('#report-tabs').tabs({active:4});

					for(var i = 0; i < emp.length; i ++){
						var emps=$('<tr><td>'+emp[i]['urla']+'</td><td>'+emp[i]['urle']+'</td><td>'+emp[i]['urlb']+'</td>'
							  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
							  +'<td>'+emp[i]['urlc']+'</td><td>'+emp[i]['urld']+'</td><td>'+emp[i]['urle']+'</td>'
						      +'<td>'+emp[i]['urlf']+'</td><td>'+emp[i]['urlg']+'</td></tr>');
						$('.emp-report').append(emps);				
					}
				},
				error:function (xhr, errorText, errorStatus) {
					alert('状态'+xhr.status + '错误信息:' + xhr.statusText);
				}
			});
		});


})