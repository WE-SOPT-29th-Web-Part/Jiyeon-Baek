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

  // Write 페이지에 들어온 목적이 게시글 작성인지 수정인지 분리하기 위해
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

  // title, body, summary, thumbnail을 수정할 때 사용하는 함수
  // 각각 나눠서 함수 정의하지 않고 key, value를 활용해 한 번에 정의
  // key : title, body, summary, thumbnail
  // value : e.target.value
  const handleDataChange = (key, value) => {
    // 상태는 불변성을 유지해야 하므로 아래처럼 객체 복사
    const tempArticleData = { ...articleData };
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };

  // handleDataChange는 원시 타입만 다룰 수 있음
  // 따라서 Array를 수정하는 함수는 따로 정의해야 함
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
      <ArticleTitle title={articleData.title} onDataChange={handleDataChange} />
      <ArticleTags
        tags={articleData.tags}
        onArrDataChange={handleArrDataChange}
        onArrDataRemove={handleArrDataRemove}
      />
      <ArticleBody body={articleData.body} onDataChange={handleDataChange} />
      <ArticleFooter setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <ArticleModal
          title={articleData.title}
          summary={articleData.summary}
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
