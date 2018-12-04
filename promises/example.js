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
//For all promisses
//Promise.all(([promise1, promise2])
	//.then([resultado1, resultado2]) => {
		//console.log("promises resolvidas');
		//console.log(resultado1);
		//console.log(resultado2);
	//})
	//.catch((error) => {
		//console.log("promise rejeitada');
		//console.log(error);
	//})

