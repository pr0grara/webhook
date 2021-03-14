import Recipe from "../data/typeform";
export default class recipeController {
    static getHooks(req, res) {
        return res.status(201).json({
            count: Recipe.length,
            message: "List of all Recipe",
            Recipe: Recipe
        });
    }
    // add a new recipe with unique id
    static createHook(req, res) {
        const newId = parseInt(Recipe.length) + 1;
        const { name, description } = req.body;
        const newRecipe = {
            id: newId,
            name,
            description,
            addedAt: new Date()
        };
        Recipe.push(newRecipe);
        return res.status(201).json({
            message: "A new recipe has been added",
            data: { id: newId, name: name }
        });
    }
}