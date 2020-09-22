function compra(item) {
	switch (item) {
		case 0:
			console.log(`compró pocion`);
			break;
		case 1:
			console.log(`compró magia`);
			break;
		case 2:
			console.log(`compró espada`);
			break;
		case 3:
			console.log(`compró arco`);
			break;
		case 3:
			console.log(`compró flecha`);
			break;
		default:
			console.log('no existe');
			break;
	}
}