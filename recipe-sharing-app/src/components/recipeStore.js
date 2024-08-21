import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => ({recipes: [...state.recipes, newRecipe]})),
    deleteRecipe:(id) => set(),
    updateRecipe:(id, modifiedData) => set((state) => ({recipes: state.recipes.map((recipe) => recipe.id === id? {...recipe, ...modifiedData} : recipe)})),
    setRecipes: (recipes) => set({recipes})
}))

export default useRecipeStore;