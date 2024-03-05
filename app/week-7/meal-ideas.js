import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        // Preprocess the ingredient name to remove non-alphanumeric characters
        const preprocessedIngredient = ingredient.replace(/[^a-z0-9 ]/gi, "");
        console.log("Preprocessed Ingredient:", preprocessedIngredient);

        const mealIdeas = await fetchMealIdeas(preprocessedIngredient);
        console.log("API Response:", mealIdeas);
        setMeals(mealIdeas);
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  useEffect(() => {
    console.log("Updated Meals State:", meals);
  }, [meals]);

  if (!meals || meals.length === 0) {
    return <div>Loading meal ideas...</div>;
  }

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
