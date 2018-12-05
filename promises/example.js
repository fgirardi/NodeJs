let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("A promise 1 foi resolvida');
	}, 2000);
});


promise1.then((resultado) => {
	console.log(resultado);
})
