 $(".attachments > p > a >img").each(function() {
 	if (this.parentElement.href) {
 		this.src = this.parentElement.href;
 	}
 });
 $("a[class='icon icon-attachment']").each(function() {
 	$(this).css("width", "200px");
 });
 $(".thumbnails").hide();
