let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('A promisse 1 foi executada');
	}, 1000);
});


let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('A promisse 2 foi rejeitada');
	}, 1000);
});

Promise.all([promise1, promise2])
.then(([result1, result2]) => {
	console.log(result1);
	console.log(result2);
})
.catch((error) => {
	console.log('Uma das promisses foi rejeitada');
	console.log(error);
})