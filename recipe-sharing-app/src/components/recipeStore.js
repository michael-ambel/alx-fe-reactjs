import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => ({recipes: [...state.recipes, newRecipe]})),
    deleteRecipe:(id) => set(),
    updateRecipe:(id) => set(),
    setRecipes: (recipes) => set({recipes})
}))

export default useRecipeStore;