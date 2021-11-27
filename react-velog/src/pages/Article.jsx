import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import Header from 'components/common/Header';
import Profile from 'components/home/Profile';
import ArticleOptions from 'components/article/ArticleOptions';
import ImgWrapper from 'components/common/ImgWrapper';
import { StyledTag } from 'components/home/ArticleCard';

const Article = () => {
  // 데이터를 넘기는 방법 -> Link
  // 데이터를 받는 방법 -> useLocation
  const location = useLocation();
  const article = location.state;
  const { title, body, thumbnail, date, tags } = article;

  return (
    <StyledArticle>
      <Header />
      <h1>{title}</h1>
      <ArticleOptions article={article} />
      <StyledArticleInfo>
        <span>백지연</span>
        <span>·</span>
        <span>{date}</span>
      </StyledArticleInfo>
      <StyledTag>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </StyledTag>
      {thumbnail && (
        <ImgWrapper ratio="50%">
          <img src={thumbnail} alt="thumbnail"></img>
        </ImgWrapper>
      )}
      <StyledBody>{body}</StyledBody>
      <Profile />
    </StyledArticle>
  );
};

export default Article;

const StyledArticle = styled.div`
  margin-bottom: 6rem;
  & > h1 {
    font-size: 3rem;
    font-weight: 800;
    color: rgb(52, 58, 64);
    margin-bottom: 2rem;
    word-break: keep-all;
  }
`;

const StyledBody = styled.div`
  margin: 2rem 0;
  font-size: 1.125rem;
  line-height: 1.7;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const StyledArticleInfo = styled.div`
  margin-bottom: 0.875rem;
  & > span:first-child {
    font-weight: 600;
  }
  & > span + span {
    margin-left: 0.5rem;
  }
`;
