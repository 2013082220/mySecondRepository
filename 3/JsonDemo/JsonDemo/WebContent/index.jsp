<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery1.9.0.min.js"></script>
<script>
function jsonSearch(){
	var formParam = $("#searchForm").serialize();//序列化表单内容为字符串
	//alert(formParam);
	$.ajax({
	     type:'post',  
	     url:"<%=request.getContextPath()%>/jsonServlet?action=jsonSearch",   
	     data:formParam,
	     cache:false,  
	     dataType:'json',//返回json格式的数据
	     success:function(jsonObject){
	     	 $.each(jsonObject,function(index){
                    $.each(jsonObject[index],function(key,value){    
                        alert(key+":"+value);
                    });
	     	 });
	     }
	});	
}
</script>
</head>
<body>
<form name="searchForm" id="searchForm">
	姓名：<input type="text" name="name" value="张"/>
	性别：<select name="sex">
			<option value="">请选择</option>
			<option value="1">男</option>
			<option value="2">女</option>
		</select>
	<input type="button" onclick="jsonSearch()" value="查询"/>
</form>
<table>
	<thead>
		<tr>
			<td>姓名</td>
			<td>性别</td>
			<td>身份证号</td>
		</tr>
	</thead>
	<tbody>
	
	</tbody>
</table>

</body>
</html>