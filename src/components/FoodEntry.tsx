import React from "react";

interface Props {
  food: string;
  foodName: string;
  ingredientsList: string[];
  instructionsList: string[];
  count: number;
}
const FoodEntry = ({
  food,
  foodName,
  ingredientsList,
  instructionsList,
  count,
}: Props) => {
  return (
    <div className="entryBox" id={`entryBox${count}`}>
      <div className="imgBox">
        <img className="foodImg" src={food} alt={foodName} />
        <strong className="foodName">{foodName}</strong>
      </div>

      <div className="ing-insBox">
        <div className="ingredientsBox">
          <strong className="ingName">Ingredients</strong>
          <ul className="ingList">
            {ingredientsList.map((ingredients) => (
              <li>{ingredients}</li>
            ))}
          </ul>
        </div>

        <div className="instructionBox">
          <strong className="insName">Instructions</strong>
          <ol className="insList">
            {instructionsList.map((instructions) => (
              <li>{instructions}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodEntry;
