import React, { useState } from "react";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticleTags from "../components/write/ArticleTags";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import { client } from "../libs/api";

const Write = () => {
  // 필요한 데이터를 입력과 동시에 받아오고, (state로 관리)
  // 출간하기 -> axios.post
  const [articleData, setArticleData] = useState({
    id: "", // articleData.length + 1
    title: "",
    body: "",
    summary: "",
    series: "",
    tags: [],
    thumbnail: "", // 다음 시간
    date: "", // 오늘 날짜
  });

  const createArticle = async () => {
    const { data } = await client.get("article");
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약입니다.",
    });
  };

  const handlePost = async () => {
    await createArticle();
  };

  return (
    <div>
      <button onClick={handlePost}>POST</button>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter />
    </div>
  );
};

export default Write;
