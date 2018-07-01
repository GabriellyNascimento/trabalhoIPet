$("#formula").validate({
	debug: true,
	rules: {
		nome: {
			required: true,
				text: true,
		},
		sobre:{
			required: true,
			text:true,
		}
		tele:{
			minlength: 9,
			maxlength:11,
		}
	}
});