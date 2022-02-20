const Hello = ({ name }) => <p>Hello {name}</p>;

const ShowPost = ({ postId }) => {
  const [post, setPost] = React.useState({title: "", body: ""});

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json()
      setPost(data);
    })();
  }, []);

  return <>
    <h1>{post.title}</h1>
    <div>{post.body}</div>
  </>;
}

ReactDOM.render(<ShowPost postId={1} />, document.getElementById("root"));
//ReactDOM.render(<Hello name='World'/>, document.getElementById('root'));
