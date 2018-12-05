let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('A promise 1 foi resolvida');
	}, 2000);
});

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		rejetc('A promise 2 foi rejeitada');
	}, 2000);
});

promise1.then((resultado) => {
	console.log(resultado);
})

promise2.then((resultado) => {
	console.log(resultado);
}).catch((error) => {
	console.error(error);
});
