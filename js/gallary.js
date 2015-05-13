 $(".attachments > p > a >img").each(function() {
 	if (this.parentElement.href) {
 		this.src = this.parentElement.href;
 	}
 });
 $("a[class='icon icon-attachment']").each(function() {
 	$(this).css("width", "200px");
 });
 $(".thumbnails").hide();
 console.log("gallary");
 // console.log($(".thumbnails").html());
 // $(document).bind("contextmenu", function() { return false; });
 //$('#myCarousel').carousel('next');

 //console.log("gallary");
 //  $(".attachments > p > a >img")
 //$(".thumbnails > div > a >img")