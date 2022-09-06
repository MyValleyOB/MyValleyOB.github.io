// custom js
$(document).ready(function(){
	
	$('#verifiedSignatureId').click(function(){
		$( ".close-btn" ).trigger( "click" );
	});

// document ready end 
});

$('#submitButton').click(function(){

	const month = $('#selectMonth').val();
    const date = $('#selectDate').val();
    const year = $('#selectYear').val();
    const dbo = month + date + year;

    if(!month || !date || !year ){
      $('.msg-error').show();
      return;
    }

	$.ajax({
		url: 'https://script.google.com/macros/s/AKfycbzzdnG8gU__4lLooMJHLP7iMY-j0c-CTAAJCyfAmTgQpmTneGgIfDMNbzoHJf70X4pb/exec',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		crossDomain: true,
		type: "POST", /* or type:"GET" or type:"PUT" */
		dataType: "json",
		data: { date: dbo
		},
		success: function (res) {
			console.log(res)
			if(res.check){
				$("#verifiedDobModal").modal('show');
				$('.msg-error').hide();
			}else{
				$('.msg-error').show();
			}
		},
		error: function (err) {
			$('.msg-error').show();
			console.log(err);
		}
	});
});