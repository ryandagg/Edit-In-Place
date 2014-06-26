/* **done** Get the text & class from existing div 
**done** hide that div(?)
**done** create textfield using same css
add buttons to save or cancel
take text from field and enter back into original div 
*/

/* notes:
<input type='text' class='grabClasses'
<form><input type='text' class='grabClasses'></form>
*/
$(document).on("ready", function(){
	$(".editable").on('click', function(){
		var staticText = $(this).text();
		var grabClasses = $(this).attr("class");
		$(this).hide();
		$(this).parent().append("<input type='text' id='editing' value='" + staticText + "'><input type='submit' value='close' class='saveButton");
		// $(this).parent().append("<button class='saveButton'>Save</button>");

		// deal with close button
		$('.saveButton').on('click', function(){
			// staticText = $('#editing').attr("value");
			console.log(staticText)
			$(this).parent().append("<div class='" + grabClasses + "'>" + staticText + "</div>");
			$(".saveButton").remove();
			$("#editing").remove();
			
		})
		
	})

})