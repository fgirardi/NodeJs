//Example using Async await X Promisse.
//Using Async await is more easy to understand the source code.
//also Async await is less verbose to read.
//Example:

main();

function getResultado(parametro) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(parametro * 2.5);
		}, 3000);
	});
}
