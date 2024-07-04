const user = {
    id:7777,
    username:"onkar123"
}

const Book = (props) => {
    return(
        <div>
            <h2>{user.username}'s Favourite Books</h2>
            <ul>
                {props.books.map((book) =>
                    <li key={book.id}>{book.title}</li>
                )} 
            </ul>
        </div>
    );
}

export default Book;
