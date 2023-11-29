import React, { useState } from "react";
import Navbar from "./components/navbar";
import "./index.css";
import FoodEntry from "./components/FoodEntry";
import haitianWhiteRice from "./assets/haitian-rice-example.png";
import epis from "./assets/epis.png";
import AboutSection from "./components/AboutSection";
import { BrowserRouter } from "react-router-dom";
import diriDjon from "./assets/diriDjon.png";

const whiteRiceIngredients: Array<string> = [
  "White Rice",
  "Water",
  "Green Onion",
  "Salt",
  "Maggi",
  "Oil",
];

const whiteRiceInstructions: Array<string> = [
  "Put enough oil that it covers the pot thinly",
  "Then place your washed green onion inside",
  "Wait till golden brown",
  "Then place your 1:2 ratio of water in the pot",
  "Add 1 tbs of salt and some maggi(personal preference)",
  "Wait till water boils before washing rice",
  "Then add your washed rice to the middle of the boiling water",
  "After making sure the rice is above the rice stir it for a while then let rest until the water is gone",
];

const episIngredients: Array<string> = [
  "10 Sprigs of parsley",
  "1 Onion",
  "2 celery stalks",
  "2 cups cilantro",
  "2 Green Bell Peppers",
  "3 scallion stalks",
  "2 chicken bouillon cubes",
  "5 Sprigs of Thyme",
  "3 Heads of garlic",
  "2 tbs of Lime juice or 1 lime",
  "1/4 cup of Extra Virgin Olive Oil",
  "1 tbs of Vinegar",
  "Blender",
  "32 oz Jar",
];

const episInstructions: Array<string> = [
  "Remove stems and seed from ingredients according to your preference.",
  "In a blender add the herbs, onions, peppers, garlic bouillon cubes and vinegar.",
  "Puree ingredients and then slowly add the olive oil untill ingredients have an even consistency.",
  "Pour the epis into the 32 ounce container and refrigerate until needed.",
];

const blackRiceIngredients: Array<string> = [
  "Rice",
  "Epis",
  "Oil",
  "Black Mushrooms",
  "Green Beans",
  "Maggi",
  "Coconut Milk",
  "Bell Pepper",
  "Black cloves(Girof)",
  "Water",
];

const blackRiceInstructions: Array<string> = [
  "Taking your desired amount of black mushrooms, sift through it and remove any impurities",
  "Set a pot of water to boil and place all your mushrooms in the pot",
  "After your water has fully turned black, Seperate the water from the mushrooms",
  "In a different pot place enough oil to cover the bottom of the pan",
  "Once hot add in your epis and stir until golden brown",
  "Once golden brown add in your clean and washed green beans",
  "After a couple of minutes, depending on the amount of rice being cooked add in about a 1/3 of coconut milk to 2 cups of rice",
  "Completely add in all your black water, and can optionally strain more water from the mushrooms if not at desired amount",
  "Now add in your maggi and salt until at a desired taste",
  "Add in a big spoonful of butter and a bell pepper filled with girof and allow for the water to come to a boil",
  "At this point add in your rice to the middle of the pot after cleaning it 3 times, the rice should form a mound with it just barley breaking the surface",
  "Evenly distribute the rice around the pot and break any clumps",
  "Bring the rice down to a medium-high heat until the water is at the level of the rice",
  "Once again stir the rice, add a covering of alumnium foil and a pot cover and bring the heat to it's lowest level",
  "Now wait 20-30 minutes for the completion of your Diri Djon Djon",
];
const App = () => {
  const [status, setStatus] = useState("normal");
  function handleMenuClick() {
    if (status == "active") {
      setStatus("normal");
    } else {
      setStatus("active");
    }
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar status={status} onClick={handleMenuClick} />
        <FoodEntry
          food={haitianWhiteRice}
          count={1}
          foodName="Haitian White Rice"
          ingredientsList={whiteRiceIngredients}
          instructionsList={whiteRiceInstructions}
        />
        <FoodEntry
          count={2}
          food={epis}
          foodName="Haitian Epis"
          ingredientsList={episIngredients}
          instructionsList={episInstructions}
        />
        <FoodEntry
          count={3}
          food={diriDjon}
          foodName="Haitian Black Rice"
          ingredientsList={blackRiceIngredients}
          instructionsList={blackRiceInstructions}
        />
        <AboutSection />
      </div>
    </BrowserRouter>
  );
};

export default App;
