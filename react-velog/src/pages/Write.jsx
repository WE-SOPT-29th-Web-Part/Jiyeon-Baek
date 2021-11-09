import React, { useState } from 'react';
import ArticleTitle from '../components/write/ArticleTitle';
import ArticleTags from '../components/write/ArticleTags';
import ArticleBody from '../components/write/ArticleBody';
import ArticleFooter from '../components/write/ArticleFooter';
import { client } from '../libs/api';
import styled from 'styled-components';

const Write = () => {
  // 필요한 데이터를 입력과 동시에 받아오고 (state로 관리)
  // 출간하기를 누르면 axios.post
  const [articleData, setArticleData] = useState({
    id: '', // articleData.length + 1
    title: '',
    body: '',
    summary: '',
    series: '',
    tags: [],
    thumbnail: '',
    date: '', // 오늘 날짜
  });

  const createArticle = async () => {
    const { data } = await client.get('article');
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    await client.post('/article', {
      ...articleData,
      id,
      date,
      summary: '요약입니다.',
    });
  };

  const handlePost = async () => {
    await createArticle();
  };

  return (
    <StyledWritePage>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter handlePost={handlePost} />
    </StyledWritePage>
  );
};

export default Write;

const StyledWritePage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 2rem;
`;
