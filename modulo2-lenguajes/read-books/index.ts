// read books

interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((b) => b.title === titleToSearch);
  return book ? book.isRead : false;
}

const books: Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

console.log("isBookRead ('Devastación'):", isBookRead(books, 'Devastación')); // true
console.log(
  "isBookRead ('Canción de hielo y fuego'):",
  isBookRead(books, 'Canción de hielo y fuego'),
); // falso
console.log(
  "isBookRead ('Los Pilares de la Tierra'):",
  isBookRead(books, 'Los Pilares de la Tierra'),
); // falso
