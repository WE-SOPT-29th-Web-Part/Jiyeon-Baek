import React from 'react';

const ArticleBody = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value,
    }));
  };
  return <textarea onChange={handleChange}></textarea>;
};

export default ArticleBody;
