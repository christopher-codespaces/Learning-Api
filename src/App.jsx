import { useEffect, useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </main>
  );
}


// We import useEffect and useState from React to manage state and fetch data.
// We create a state variable called posts using useState, initialized to an empty array.
// We use useEffect to fetch data from an API when the component mounts, using the fetch method.
// We use .then() to convert the data from the API to a JavaScript object and update the posts state variable using setPosts.
// We render the posts array using map() to generate a div element for each post, with the title and body displayed inside.
