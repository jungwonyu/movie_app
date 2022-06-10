import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img scr={picture} />
    </div>
  );
}

const foodLike = [
  {
    name: "Kimchi",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211214_272%2F1639455797629bOiHk_JPEG%2F40591693355469890_494284185.jpg&type=a340.jpg",
  },
  {
    name: "Ramen",
    image:
      "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
  },
];

function App() {
  return (
    <div>
      {foodLike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
