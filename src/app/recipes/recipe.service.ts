import {Recipe} from './recipe.model'
import { EventEmitter } from '@angular/core';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://scontent.fccu1-1.fna.fbcdn.net/v/t1.0-9/p960x960/83128367_3094780590551885_4368162540975292416_o.jpg?_nc_cat=105&_nc_ohc=K3V6nU_K57IAX_YdQK8&_nc_ht=scontent.fccu1-1.fna&_nc_tp=1002&oh=32162861be6c8287f832d4cf71ecb585&oe=5EA0FB92'),
        new Recipe('A Test Recipe','This is simply a test','https://scontent.fccu1-1.fna.fbcdn.net/v/t1.0-9/p960x960/83128367_3094780590551885_4368162540975292416_o.jpg?_nc_cat=105&_nc_ohc=K3V6nU_K57IAX_YdQK8&_nc_ht=scontent.fccu1-1.fna&_nc_tp=1002&oh=32162861be6c8287f832d4cf71ecb585&oe=5EA0FB92')
      
      ];  

      getRecipes(){
          return this.recipes.slice();
      }
}