import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AboutShopify: [
    {
      id: 1,
      question: `What is Shopify?`,
      answer: [
        `Shopify is the second most popular eCommerce store builder in the world. 
        You can use Shopify in nearly every country in the world.
         It is an all-in-one ecommerce platform that helps online businesses get up and running.`,

        `If you're looking for a comprehensive ecommerce solution,Shopify is the platform for you.
         With everything from themes to payment processing included, Shopify has everything you need to get your online store up and running.`,
      ],
    },
    {
      id: 2,
      question: `Are additional apps required for my Shopify store ?`,
      answer: [
        `If you're running a Shopify store, you might be wondering if you need to install 
        any additional apps to help run your business.`,

        `The answer is that it depends on your specific needs.`,

        `There are a lot of great apps out there that can help with everything from marketing to accounting, so it's definitely worth taking a look around and seeing what's available.
        However, keep in mind that not every app is right for every business, so make sure to do your research before installing anything.Lumia is the perfect theme for anyone who wants to create a shopify store without needing to worry about additional apps.
        For example, the theme includes a built-in mega menu, so you won't need to purchase a special app to get this functionality.
        Additionally, the Lumia has a built-in Instagram feed, newsletter popup, recently viewed items app and many other.`,
      ],
    },
    {
      id: 3,
      question: `How to choose best theme for Shopify?`,
      answer: [
        `If you're thinking about setting up a shop on Shopify, one of the first things you'll need to do is choose a theme.
            With so many themes available, it can be tough to decide which one is right for your store. 
            Here are a few things to keep in mind when choosing a Shopify theme:`,

        `• Think about the overall tone and feel you want your store to have. 
            Do you want it to be playful and fun? Sophisticated and luxurious? Minimal and modern? 
            Your theme should reflect the overall tone and feel you want for your store.`,

        `• Consider what kind of products you'll be selling. 
            If you'll be selling mostly physical goods, you'll want a theme that includes features like product image galleries and robust product descriptions.
            If you'll be selling mostly digital goods, on the other hand, you might want a simpler theme that focuses on clean design and easy navigation.`,

        `• Think about your budget. 
            Shopify offers both free and paid themes, so you can choose something that fits within your budget. 
            Keep in mind, though, that paid themes usually offer more features and customization options than free themes.`,

        `If you're looking for a modern Shopify theme that is responsive and looks good on any device and has a lot of features, then you should definitely check Lumia Theme. 
            With its simple, clean interface Lumia makes it easy to get started.`,
      ],
    },
  ],
};

const faqSlice = createSlice({
  name: "FAQ",
  initialState,
});

export default faqSlice.reducer;
