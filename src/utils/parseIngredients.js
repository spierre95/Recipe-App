import { unitsShort, unitsLong } from "../constants/ingredientUnits";

const parseIngredients = ingredients =>
  ingredients.map(el => {
    let ingredient = el.toLowerCase();

    // standardize and shorten units ( ex tablespoons becomes tbsp)

    unitsLong.forEach((unit, i) => {
      ingredient = ingredient.replace(unit, unitsShort[i]);
    });

    //removes parentheses and string inside

    ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

    const arrIng = ingredient.split(" ");

    // determines if a unit exists and returns the index that it occurs at
    const unitIndex = arrIng.findIndex(unit => unitsShort.includes(unit));

    let objIng;
    // unit exists
    if (unitIndex > -1) {
      const arrCount = arrIng.slice(0, unitIndex);
      let count;

      if (arrCount.length === 1) {
        // just one count ( ex. 2 tbsp or 2-1/2 cups )
        count = eval(arrIng[0].replace("-", "+"));
      } else {
        // more than one count ( ex. 4 1/2 cup)
        count = eval(arrIng.slice(0, unitIndex).join("+"));
      }

      objIng = {
        count,
        unit: arrIng[unitIndex],
        ingredient: arrIng.slice(unitIndex + 1).join(" ")
      };

      // there are no units, but there is  a number at the begining of the string
    } else if (parseInt(arrIng[0], 10)) {
      objIng = {
        count: parseInt(arrIng[0], 10),
        unit: "",
        ingredient: arrIng.slice(1).join(" ")
      };

      // no units
    } else if (unitIndex === -1) {
      objIng = {
        count: "",
        unit: "",
        ingredient
      };
    }
    return objIng;
  });

export default parseIngredients;
