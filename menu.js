// JavaScript Document

$('div.kategoria')
  .children()
	  .on('mouseenter',function(){
      $(this)
			  .stop()
			  .css('opacity','0.60')
				.css('background','#e4e4e4')
				.css('color','red')
				.animate({opacity: '0.99'},300)
			})
$('div.kategoria')
	 .children()
			.on('mouseleave',function(){
			   $(this)
				  .stop()
			  	.animate({opacity: '0.33'},500,function(){
				  	$(this)
				  	.css('opacity','0.99')
					  .css('color','#33363f')
					  .css('background','white')
			  	})
			})
