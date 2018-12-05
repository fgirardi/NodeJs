//Example using Async await X Promisse.
//Using Async await is more easy to understand the source code.
//also Async await is less verbose to read.
//Example:
async function main() {
	if (await getResultado(5) < 10) {
		console.log('O valor que retornou eh maior que 10');
	}
}
main();

function getResultado(parametro) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(parametro * 2.5);
		}, 3000);
	});
}
