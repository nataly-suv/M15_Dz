import { FC, useState } from "react";
import styled from "styled-components";
import PostMenu from "./PostMenu";

interface PostItemProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

const Post: FC<PostItemProps> = ({ id, title, content, onDelete }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [postBody, setPostBody] = useState<string>(content);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    setIsMenuVisible(!isMenuVisible);
  };

  const deletePost = () => {
    if (window.confirm("Вы уверены?")) {
      onDelete(id);
    }
  };

  const changePost = () => {
    const newPostBody = prompt("Введите текст", postBody);
    if (newPostBody) {
      setPostBody(newPostBody);
    }
    setIsMenuVisible(!isMenuVisible);
  };

  //
  return (
    <PostItem>
      <Title>{title}</Title>
      <Content>{postBody}</Content>
      <Favourite>{isFavourite ? "⭐ В избранном" : ""}</Favourite>
      <MenuDots onClick={toggleMenu}> ⋮ </MenuDots>
      {isMenuVisible && (
        <PostMenu
          onFavourite={toggleFavourite}
          onDelete={deletePost}
          onChange={changePost}
        />
      )}
    </PostItem>
  );
};

export default Post;

// стили
const PostItem = styled.article`
  width: 100%;
  position: relative;
  box-shadow: 5px 2px 16px #a6a3a3;
  padding: 20px 40px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 590px) {
    gap: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24x;
  text-align: center;

  @media (max-width: 590px) {
    font-size: 20px;
  }
`;

const Content = styled.p`
  font-size: 16px;
  text-align: justify;

  @media (max-width: 590px) {
    font-size: 14px;
  }
`;

const Favourite = styled.p`
  font-size: 16px;
  text-align: center;

  @media (max-width: 590px) {
    font-size: 14px;
  }
`;

const MenuDots = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: 26px;
  top: 6px;
  right: 10px;
`;
