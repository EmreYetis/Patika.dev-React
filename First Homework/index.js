import axios from "axios";

async function getData(num) {
  const getUsers = async (num) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + num
    );
    console.log(data);
  };
  const getPost = async (Number) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts?id=" + Number
    );
    console.log("posts:", data);
  };

  const user = await getUsers(num);
  const post = await getPost(num);

  return user + post;
}

export default getData;
