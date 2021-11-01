import React from "react";

const ArticleBody = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      title: e.target.value,
    }));
  };
  return <textarea onChange={handleChange}></textarea>;
};

export default ArticleBody;
