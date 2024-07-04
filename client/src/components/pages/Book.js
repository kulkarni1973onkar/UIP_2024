import { useState } from "react";
import { fetchData } from "../../main.js"; 

const user = {
  id: 7777,
  username: "onkar123"
};

const Book = (props) => {
  const [postData, setPostData] = useState({
    title: '',
    content: ''
  });

  const { title, content } = postData;

  const onChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchData("/posts", {
        userId: user.id,
        title,
        content
      });

      console.log('Post created:', data);
      
    } catch (error) {
      console.log('Error creating post:', error.message || error);
    }
  };

  return (
    <div>
      <h2>{user.username}'s Favourite Books</h2>
      <ul>
        {props.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>

      <h3>Create a New Post</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            value={title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            onChange={onChange}
            value={content}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default Book;





