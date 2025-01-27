import { useState } from "react";
import "/src/style.css";

const BookLibrary = () => {
    const [books, setBooks] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookInfo = e.target.book.value;

        const api = `https://www.googleapis.com/books/v1/volumes?q=${bookInfo}`;

        try {
            const data = await (await fetch(api)).json();

            const extractedBooks = data.items.map((item) => ({
                title: item.volumeInfo.title || "No title available",
                subtitle: item.volumeInfo.subtitle || "No subtitle available",
                authors: item.volumeInfo.authors || ["No authors available"],
                publishedDate: item.volumeInfo.publishedDate || "No published date available",
                publisher: item.volumeInfo.publisher || "No publisher available",
                thumbnail: item.volumeInfo.imageLinks?.thumbnail || "No thumbnail available"
            }));
            extractedBooks.forEach((book) => {
                console.log(book.thumbnail || "No thumbnail available");
            });
    
            setBooks(extractedBooks);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = (book) => {
        const storedBook = localStorage.getItem(`${book.title}`);
    
        if (storedBook) {
            
            alert(`${book.title} is already in your library.`);
        } else {
            localStorage.setItem(`${book.title}`, JSON.stringify(book));
            console.log(`${book.title} has been added to localStorage.`);
    }
    };

    return (
        <div className="book-library">
            <form onSubmit={handleSubmit}>
                <h1>Book Library</h1>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Type book here: "
                    name="book"
                />
                <button style={{ marginLeft: "10px" }} className="form-button">
                    Search
                </button>
            </form>
            <div className="results-container">
                <h2>Search Results:</h2>
                {books.length > 0 ? (
                    <div className="books-grid">
                        {books.map((book, index) => (
                            <div className="book-card" key={index}>
                                 {book.thumbnail !== "No thumbnail available" ? (
                                    <img
                                        src={book.thumbnail}
                                        alt={`${book.title} thumbnail`}
                                        className="book-thumbnail"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <strong>Title:</strong> {book.title} <br />
                                <strong>Authors:</strong> {book.authors.join(", ")} <br />
                                <strong>Published Date:</strong> {book.publishedDate} <br />
                                <strong>Publisher:</strong> {book.publisher}
                                <button
                                    onClick={() => handleClick(book)}
                                    className="button3"
                                >
                                    {localStorage.getItem(`${book.title}`) ? "Already Added" : "Add"}
                                </button>
                                
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No books found. Try searching for something else.</p>
                )}
            </div>
        </div>
    );
};

export default BookLibrary;