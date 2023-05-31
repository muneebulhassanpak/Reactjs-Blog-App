import React from "react";
import { useSelector } from "react-redux";
import PostTemplate from "../components/PostTemplate";
const Home = () => {
  const store = useSelector((store) => store);
  const myarray = store.recipies.allRecipies;
  let status = myarray.length > 0 ? true : false;

  return (
    <div className="my-4 max-w-7xl mx-auto">
      <div className=" flex justify-between items-center flex-wrap">
        {status &&
          myarray.map((item) => (
            <PostTemplate
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              duration={item.duration}
              description={item.description}
              likes={item.likes}
              id={item.id}
            />
          ))}
        {!status && <p>No recipies to show yet</p>}
      </div>
    </div>
  );
};

export default Home;
