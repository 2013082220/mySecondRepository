/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-05 21:09:17
 * @version $Id$
 */


$(function(){
	$('#main-dept .btn-info').click(function() {
		$('#new-dept').dialog({
			title: '新建部门',
			width: '700px',
			modal: true, //对话框会遮罩一层灰纱，无法操作。
			buttons: {
				'完成': function() {
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
	});	

	$('#main-dept-table tbody tr td a').click(function() {
		if ($(this).html() == "修改") {
			$('.Mod-dept-dial').dialog({
				title: '部门修改',
				width: '600px',
				modal: true, //对话框会遮罩一层灰纱，无法操作。
				buttons: {
					'完成': function() {
							// $.ajax({
							// 	url:'report.json',
							// 	type:'POST',
							// 	success:function(){
							// 		alert('完成！');
							$('.Mod-dept-dial').dialog('close');
						}
						// 	});
						// }
				}
			});
		} else if ($(this).html() == "删除") {
			if (confirm("确定删除该条信息吗？")) {
				var trs = $(this).parent().parent().eq(0).remove();
			}
		}
	});

})