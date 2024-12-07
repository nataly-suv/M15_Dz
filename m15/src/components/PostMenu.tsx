import { FC } from "react";
import styled from "styled-components";

type PostMenuProps = {
  onFavourite: () => void;
  onDelete: () => void;
  onChange: () => void;
};

const PostMenu: FC<PostMenuProps> = ({ onFavourite, onDelete, onChange }) => {
  return (
    <PostMenuConteiner>
      <MenuItem onClick={onChange}>Редактировать</MenuItem>
      <MenuItem onClick={onDelete}>Удалить</MenuItem>
      <MenuItem onClick={onFavourite}>Добавить в избранное</MenuItem>
    </PostMenuConteiner>
  );
};

export default PostMenu;

// стили
const PostMenuConteiner = styled.section`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #f0f0f0;
  }
`;
