import { createSlice } from "@reduxjs/toolkit";
import ArticleOne from "../../../assets/images/blogs/article01.jpg";
import ArticleTwo from "../../../assets/images/blogs/article02.jpg";
import ArticleThree from "../../../assets/images/blogs/article03.jpg";
import ArticleFour from "../../../assets/images/blogs/article04.jpg";
import ArticleFive from "../../../assets/images/blogs/article05.jpg";

const initialState = {
  articles: [
    {
      image: ArticleOne,
      title: `The perfect Shopify theme`,
      date: "Jan 19, 2023",
      description: `Shopify is the second most popular eCommerce store builder in the world. 
                    You can use Shopify in nearly every coun...`,
    },
    {
      image: ArticleTwo,
      title: `Bring your store to life with Lumia`,
      date: "Jan 5, 2023",
      description: `Lumia is fully translated into all major languages, so you can use it no matter where you are in the world. 
                    In ad...`,
    },
    {
      image: ArticleThree,
      title: `Growing your business with Shopify`,
      date: "Dec 30, 2022",
      description: `Lumia is the perfect theme for anyone who wants to create a shopify store without needing to worry about additiona...`,
    },
    {
      image: ArticleFour,
      title: `How to get started`,
      date: "Dec 6, 2022",
      description: `If you're looking for a comprehensive ecommerce solution, Shopify is the platform for you.
                    With everything from th...`,
    },
    {
      image: ArticleFive,
      title: `Get ahead with the power of Lumia`,
      date: "Oct 27, 2022",
      description: `With Lumia Theme, you can easily start an online store in any language.
                    The theme is fully translated into all maj...`,
    },
  ],
};

const blogSlice = createSlice({
  name: "Blogs",
  initialState,
});

export default blogSlice.reducer;
