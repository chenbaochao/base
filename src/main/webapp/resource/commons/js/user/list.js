/*!
 * imalex@163.com - v0.1 (2015-08-29 18:00:00 +0800)
 * Copyright 2015
 */
$(function(){
	
});

function insert(){
	$('#dlg').dialog('open').dialog('setTitle','新建用户');
	$('#fm').form('clear');
	url = ctx+'/user/insert';
}

function save(){
	$('#fm').form('submit',{
		url: url,
		onSubmit: function(){
			return $(this).form('validate');
		},
		success: function(result){
			var result = eval('('+result+')');
			alert(result.status);
			if (result.errorMsg){
				$.messager.show({
					title: 'Error',
					msg: result.errorMsg
				});
			} else {
				$('#dlg').dialog('close');		// close the dialog
				$('#dg').datagrid('reload');	// reload the user data
			}
		}
	});
}