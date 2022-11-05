let library = [];
function Book(obj) {}

function addBookToLibrary(title, author, pages, read) {
	title = { title: title, author: author, pages: pages, read: read };
	library.push(title);
}

function loopBookArray(array) {
	for (const i of array) {
		console.log(i);
	}
}

addBookToLibrary(
	'The Hobbit ',
	'by J.R.R. Tolkien ',
	'295 pages ',
	' not read yet',
);

addBookToLibrary(
	'The Hoebbit ',
	'by J.R.R. Tolkien ',
	'295 pages ',
	' not read yet',
);

addBookToLibrary(
	'The Hait ',
	'by J.R.R. Tolkien ',
	'295 pages ',
	' not read yet',
);
loopBookArray(library);
