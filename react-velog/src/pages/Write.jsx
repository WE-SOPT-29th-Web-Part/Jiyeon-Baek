import React, { useState } from 'react';
import ArticleTitle from 'components/write/ArticleTitle';
import ArticleTags from 'components/write/ArticleTags';
import ArticleBody from 'components/write/ArticleBody';
import ArticleFooter from 'components/write/ArticleFooter';
import ArticleModal from 'components/write/ArticleModal';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import { client } from 'libs/api';

const Write = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const article = location.state;

  const [articleData, setArticleData] = useState(
    article ?? {
      title: '',
      body: '',
      summary: '',
      tags: [],
      thumbnail: '',
    },
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const createArticle = async () => {
    // 수정 중일 때 출간하기 누르면 update(patch)
    if (article) {
      await client.patch(`article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    // 새 글 작성 중일 때 출간하기 누르면 post
    await client.post('/article', articleData);
    navigate('/');
  };

  const handleDataChange = (key, value) => {
    // key : title, body, summary, thumbnail
    // value : e.target.value
    const tempArticleData = { ...articleData };
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };

  // 배열(tags)을 수정하기 위한 함수
  const handleArrDataChange = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };

  const handleArrDataRemove = (key, value) => {
    const tempArticleData = { ...articleData };
    // value -> 클릭된 태그 속에 있는 글자
    tempArticleData[key] = tempArticleData[key].filter((el) => el !== value);
    setArticleData(tempArticleData);
  };

  return (
    <StyledWritePage>
      <ArticleTitle articleData={articleData} onDataChange={handleDataChange} />
      <ArticleTags
        articleData={articleData}
        onArrDataChange={handleArrDataChange}
        onArrDataRemove={handleArrDataRemove}
      />
      <ArticleBody articleData={articleData} onDataChange={handleDataChange} />
      <ArticleFooter setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <ArticleModal
          articleData={articleData}
          onDataChange={handleDataChange}
          createArticle={createArticle}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </StyledWritePage>
  );
};

export default Write;

const StyledWritePage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
