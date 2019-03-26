//Example using Async await X Promisse.
//Using Async await is more easy to understand the source code.
//also Async await is less verbose to read.
//Example:
async function main() {
	//Using await
	try{
		if (await getResultado(5) < 10) {
			console.log('O valor que retornou eh maior que 10');
			if (await getResultado(3) < 10) {
				console.log('O valor que retornou eh menor que 10');
			}
		}
	} catch(err) {
		console.log('Error');
		console.log(err);
	}
	
	//Normal Promise
	//getResultado(5)
	//.then((resultado) => {
		//console.log('O valor que retornou eh maior que 10');
		//getResultado(3)
		//.then((resultado) => {
			//console.log('O valor que retornou eh menor que 10');
		//}).catch((erro) => {
			//console.log('Error 3');
			//console.log(error);
		//})
	//}).catch((erro) => {
		//console.log("Error 5");
		//console.log(error);
	//})
}
main();

function getResultado(parametro) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(parametro * 2.5);
		}, 3000);
	});
}
