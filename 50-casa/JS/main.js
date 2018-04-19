$("li a").click(function(event){
	event.preventDefault();
	if($(this).data('page')!=null){
		$("#main-container").load('PAGES/'+$(this).data('page')+'.html');
	}
});
