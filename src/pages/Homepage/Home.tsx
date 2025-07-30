import recipeBook from "../../assets/images/recipebook.svg";
import timer from "../../assets/images/timer.svg";
import forkAndKnief from "../../assets/images/forkknife.svg";
import johnProfile from "../../assets/images/john.svg";
import play from "../../assets/images/PlayCircle.svg";
import barge from "../../assets/images/Badge.svg";
import chickenWings from "../../assets/images/chickenWings.jpg";

import fruit1 from "../../assets/images/food1.svg";
import fruit2 from "../../assets/images/food2.svg";
import fruit3 from "../../assets/images/food3.svg";
import fruit4 from "../../assets/images/food4.svg";
import fruit5 from "../../assets/images/food5.svg";
import fruit6 from "../../assets/images/food6.svg";

import food1 from "../../assets/images/foodgrid1.svg";
import food2 from "../../assets/images/foodgrid2.svg";
import food3 from "../../assets/images/foodgrid3.png";
import food4 from "../../assets/images/foodgrid4.svg";
import food5 from "../../assets/images/foodgrid5.svg";
import food6 from "../../assets/images/foodgrid6.svg";
import food7 from "../../assets/images/foodgrid7.svg";
import food8 from "../../assets/images/foodgrid8.svg";
import food9 from "../../assets/images/foodgrid9.svg";

import "./Home.css";

export default function Home() {
  const fruits = [
    {
      id: 1,
      image: fruit1,
      bg_color: "linear-gradient(to bottom, #ffffff, #f8f7f7ff, #f1f3ed )",
      drop_shadow: "drop-shadow(18px 13px 15px #abada9ff)",
      description: "Breakfast",
    },
    {
      id: 2,
      image: fruit2,
      bg_color: "linear-gradient(to bottom, #ffffff, #fffefeff, #f1f9ec )",
      drop_shadow: "drop-shadow(18px 13px 15px #a2e6a5ff)",
      description: "Vegan",
    },
    {
      id: 3,
      image: fruit3,
      bg_color: "linear-gradient(to bottom, #ffffff, #fafafaff, #faebea )",
      drop_shadow: "drop-shadow(18px 13px 15px #eabdbaff)",
      description: "Meat",
    },
    {
      id: 4,
      image: fruit4,
      bg_color: "linear-gradient(to bottom, #ffffff, #fffefeff, #fef6e8 )",
      drop_shadow: "drop-shadow(18px 13px 15px #e6d7b6ff)",
      description: "Dessert",
    },
    {
      id: 5,
      image: fruit5,
      bg_color: "linear-gradient(to bottom, #ffffff, #fffefeff, #f3f3f3 )",
      drop_shadow: "drop-shadow(18px 13px 15px #e2d3b8ff)",
      description: "Lunch",
    },
    {
      id: 6,
      image: fruit6,
      bg_color: "linear-gradient(to bottom, #ffffff, #fffefeff, #f4f4f4 )",
      drop_shadow: "drop-shadow(18px 13px 15px #f3aaaeff)",
      description: "Chocolate",
    },
  ];

  const cards = [
    {
      id: 1,
      Image: food1,
      description: "Big and Juicy Wagyu Beef Cheeseburger",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
    {
      id: 2,
      Image: food2,
      description: "Fresh Lime Roasted Salmon with Ginger Sauce",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
    {
      id: 3,
      Image: food3,
      description: "Strawberry Oatmeal Pancake with Honey Syrup",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
    {
      id: 4,
      Image: food4,
      description: "Fresh and Healthy Mixed Mayonnaise Salad",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
    {
      id: 5,
      Image: food5,
      description: "Chicken Meatballs with Cream Cheese",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
    {
      id: 6,
      header: "Don't forget to eat healthy food",
      Image: food6,
      bg_linear_gradient:
        "linear-gradient(to bottom, #347054, #2A5F49,#1E4B3D)",
    },
    {
      id: 7,
      Image: food7,
      description: "Fruity Pancake with Orange & Blueberry",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
    {
      id: 8,
      Image: food8,
      description: "The Best Easy One Pot Chicken and Rice",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
    {
      id: 9,
      Image: food9,
      description: "The Creamiest Creamy Chicken and Bacon Pasta",
      timeImage: timer,
      timeText: "30 Minutes",
      forkAndKniefImage: forkAndKnief,
      forkAndKniefText: "chicken",
      bg_color: "linear-gradient(to bottom, #FBFEFF, #E8F9FD )",
    },
  ];
  return (
    <>
      <main>
        <section>
          <div className="even_container">
            <div className="spicy_container">
              <div className="spicy_text">
                <img src={barge} alt="barge" className="spinning_barge" />
                <button className="button">
                  <img src={recipeBook} alt="recipeBook" />
                  Hot Recipes
                </button>
                <h1>Spicy delicious chichen wings</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim{" "}
                </p>

                <div className="timer_and_fork">
                  <button className="button">
                    <img src={timer} alt="timer" />
                    30 Minutes
                  </button>
                  <button className="button">
                    <img src={forkAndKnief} alt="forkAndKnief" />
                    chicken
                  </button>
                </div>

                <div className="profile_and_playbtn">
                  <div className="profile">
                    <img src={johnProfile} alt="profile" />
                    <div className="pofile_name">
                      <h4>John Smith</h4>
                      <small>15 March 2022</small>
                    </div>
                  </div>
                  <div className="playbtn">
                    <button className="button">
                      View Recipes
                      <img src={play} alt="playIcon" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="spicy_image">
                <img src={chickenWings} alt="chickenWings" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="even_container">
            <div className="categories">
              <div className="category_header">
                <h2>Categories</h2>
                <button className="category_btn">View All Categories</button>
              </div>
              <div className="fruits_grid">
                {fruits.map((item) => (
                  <div
                    className="fruit_items"
                    key={item.id}
                    style={{
                      background: item.bg_color,
                    }}
                  >
                    <img
                      src={item.image}
                      alt="Fruits"
                      style={{ filter: item.drop_shadow }}
                    />
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="even_container">
            <div className="simple_and_tasty_recipes">
              <div className="STR_header">
                <h2>Simple and tasty recipes</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim{" "}
                </p>
              </div>

              <div className="STA_grid_container">
                {cards.map((card) => (
                  <div
                    className="STA_grid"
                    key={card.id}
                    style={{
                      background:
                        card.id === 6 ? card.bg_linear_gradient : card.bg_color,
                    }}
                  >
                    <h3>{card.header}</h3>
                    <img src={card.Image} alt="" className="STA_grid_img" />
                    <p>{card.description}</p>

                    {card.description &&
                      card.timeText &&
                      card.forkAndKniefText && (
                        <div className="timer_and_fork">
                          <button className="button">
                            <img src={card.timeImage} alt="timer" />
                            {card.timeText}
                          </button>
                          <button className="button">
                            <img
                              src={card.forkAndKniefImage}
                              alt="forkAndKnief"
                            />
                            {card.forkAndKniefText}
                          </button>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
