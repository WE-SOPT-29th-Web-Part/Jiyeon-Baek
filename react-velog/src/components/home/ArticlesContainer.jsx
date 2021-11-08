import React, { useState, useEffect } from 'react';
import { client } from '../../libs/api';
import ArticleCard from './ArticleCard';

const ArticlesContainer = () => {
  const [articleData, setArticleData] = useState([]);

  // axios와 async/await로 데이터 받기 (get)
  // 다회 통신 : axios.create (libs의 api.js)
  const getArticleData = async () => {
    const { data } = await client.get('/article');
    setArticleData(data);
  };

  // 컴포넌트가 마운트된 직후 실행
  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div>
      {articleData.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesContainer;
