import typeformController from "../controllers/typeform.js";

export default (app) => {
    app.get("/api/v1/", (req, res) =>
        res.status(200).json({ "Typeform API": "Healthy" }))
    app.get("/api/v1/typeform", typeformController.getHooks);
    app.put("/api/v1/recipe", typeformController.createHook);
}