import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
     private ingredients: Ingredient[] = [
        new Ingredient ('apple', 5),
        new Ingredient ('Tomatoes', 10),
      ];
getIngredients(){
    return this.ingredients;
}
addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
}

}