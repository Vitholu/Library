let library = [];
function Book(obj) {}

function addBookToLibrary(title, author, pages, read) {
	title = { title: title, author: author, pages: pages, read: read };
	library.push(title);
}

class AddBookToLibrary {
	constructor(title, author, pages, read) {
		title = { title: title, author: author, pages: pages, read: read };
		library.push(title);
	}
	loopBookArray(array) {
		for (const i of array) {
			console.log(i);
		}
	}
}

let book1 = new AddBookToLibrary(
	'The Hobbit ',
	'by J.R.R. Tolkien ',
	'295 pages ',
	' not read yet',
);

let book2 = new AddBookToLibrary(
	'The Hait ',
	'by gragres',
	'295 pages ',
	' not read yet',
);

let book3 = new AddBookToLibrary(
	'The Hoebbit ',
	'by artades',
	'295 pages ',
	' not read yet',
);

book1.loopBookArray(library);
