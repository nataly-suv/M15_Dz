import { useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import data from "../data/data.json";

interface PostsProps {
  id: number;
  title: string;
  body: string;
}

// стили
const PostsConteiner = styled.main`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 590px) {
    width: 90%;
  }
`;

const Posts = () => {
  // Состояние для хранения постов
  const [posts, setPosts] = useState<PostsProps[]>(data);

  //   удаление поста
  const heandleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <PostsConteiner>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.body}
            onDelete={heandleDeletePost}
          />
        );
      })}
    </PostsConteiner>
  );
};

export default Posts;

//
//
//

// вариант с сервером

// const Posts = () => {
//     // Состояние для хранения постов
//     const [posts, setPosts] = useState<PostsProps[]>([
//       {
//         id: 0,
//         title: "",
//         body: "",
//       },
//     ]);

//     //   запрос на сервер
//     const requestData = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await response.json();
//       setPosts(data);
//     };

//     // для получения API при загрузке страницы
//     useEffect(() => {
//       requestData();
//     }, []);

//     return (
//       <PostsConteiner>
//         {posts.map((post, index) => {
//           while (index < 20) {
//             return (
//               <Post
//                 key={post.id}
//                 id={post.id}
//                 title={post.title}
//                 content={post.body}
//               />
//             );
//           }
//         })}
//       </PostsConteiner>
//     );
//   };
