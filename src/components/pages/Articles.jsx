import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Articles = () => {
  const { blogId } = useParams();

  const { articles } = useSelector((state) => state.blogs);

  const blogs = articles.find((blog) => blog.id === parseInt(blogId));
  return (
    <div className="container px-4">
      <div className="flex flex-col gap-8">
        <img src={blogs.image} alt="Article-01" className="rounded-2xl" />
        <h1 className="text-xl font-bold">The perfect Shopify theme</h1>
        <div className="md:flex justify-center gap-8">
          <div>
            <span className="font-semibold">Date:</span>
            <span> January 19, 2023</span>
          </div>
          <div>
            <span className="font-semibold">Posted By:</span>
            <span> lumia admin</span>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} className="text-[#FE026E]" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} className="text-[#0866FF]" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={32} className="text-[#FF0000]" />
          </a>
        </div>
        <div className="md:flex flex-row-reverse justify-center gap-8">
          <div className="md:w-[40%]">
            <img
              src="https://cdn.shopify.com/s/files/1/1323/8419/files/blog-post-02.png?v=1650963866"
              alt="02.jpg"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <p className="md:max-w-sm text-left">
              Shopify is the second most popular eCommerce store builder in the
              world. You can use Shopify in nearly every country in the world.
            </p>
            <h1 className="text-start">—ECOMMERCE EXPERT</h1>

            <p className="md:max-w-sm text-left">
              Lumia is the perfect theme for anyone who wants to create a
              shopify store without needing to worry about additional apps. For
              example, the theme includes a built-in mega menu, so you won't
              need to purchase a special app to get this functionality.
            </p>
          </div>
        </div>
        <h1 className="text-xl font-semibold">Lumia Features in nutshell</h1>
        <p className="text-left">
          With Lumia Theme, you can easily start an online store in any
          language. The theme is fully translated into all major languages, so
          you can use it no matter where you are in the world. In addition, the
          admin panel is also fully translated and you can manage your store in
          your native language.
        </p>
        <p className="text-left">
          Most modern Shopify themes support 3D product models. Lumia is one of
          them, but it has more features. With Lumia you can add 3D model for
          any product variant instead of image
        </p>
        <div className="md:flex justify-center gap-8">
          <div className="md:w-[40%]">
            <img
              src="https://cdn.shopify.com/s/files/1/1323/8419/files/blog-post-03.png?v=1650963683"
              alt="003.jpg"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-8 pt-8">
            <p className="md:max-w-sm text-left">
              If you're looking for a comprehensive ecommerce solution, Shopify
              is the platform for you. With everything from themes to payment
              processing included, Shopify has everything you need to get your
              online store up and running.
            </p>
            <h3 className="text-left"> — LUMIA DEVELOPER</h3>
            <p className="md:max-w-sm text-left">
              Like all other Shopify themes on Envato Market, Lumia Theme comes
              with one license per domain. You will need to buy a second license
              if you want to open a second store and use our theme. Each store
              will have its own license.
            </p>
          </div>
        </div>
        <p className="text-left">
          One of the great things about the Lumia Theme is that you can change
          the theme style with just one click.This means that you can easily
          change the look and feel of your store without the hassle of changing
          the code. There are over a dozen skins available in the Lumia Theme,
          so you can easily find one that suits your style.Another Lumia unique
          feature is the ability to change styles separately for the header,
          footer, buttons, etc. This makes it easy to customize the store to
          match your brand or style.
        </p>

        <p className="text-left">
          If you're using Lumia Theme for your Shopify store, there's no need to
          buy any special apps to offer customers the option of buying products
          together that are frequently bought together. Lumia theme includes
          this functionality built right in. You need only to choose items that
          complement each other or that customers are likely to purchase
          together and add the “Frequently bought together” block in the product
          page admin panel. When customers add a product to their cart that is
          set lup as part of a group of products that are frequently bought
          together, they'll see a message letting them know that other customers
          who have purchased this item have also bought certain other items.
          They can then choose to add those items to their own cart with just a
          few clicks. This is a great way to boost sales and encourage customers
          to buy more products from your store. It's also a very convenient
          feature for customers, who will appreciate not having to search for
          products that go well together.
        </p>
        <p className="text-left">
          Lumia Theme has a built-in subscriptions module. This means that you
          don't need to buy any additional apps. Subscriptions can be a great
          way to encourage customers to keep coming back to your store. By
          offering a subscription, you can provide customers with a convenient
          way to keep track of their favourite products and ensure they never
          run out. So, if you're looking for an easy way to set up
          subscriptions, Lumia is the perfect solution.
        </p>
        <div className="md:flex justify-center">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1323/8419/files/blog-post-04.png?v=1650963683"
              alt="004.jpg"
              className="rounded-xl h-[90%] object-contain mb-5 md:mb-0"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1323/8419/files/blog-post-05.png?v=1650963683"
              alt="005.jpg"
              className="rounded-xl h-[90%] pbject-contain"
            />
          </div>
        </div>
        <NavLink to="/blogs" className="hover:text-blue-600">
          Go back to blog
        </NavLink>
      </div>
    </div>
  );
};

export default Articles;
