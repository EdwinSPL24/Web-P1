$("li a").click(function(event){
	event.preventDefault();
	if($(this).data('page')!=null){
		$("#contendor").load('Pages/'+$(this).data('page')+'.html');
	}
});
