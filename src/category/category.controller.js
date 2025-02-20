import Category from "./category.model.js"

export const addCategory = async (req, res) => {
    try {
        const data = req.body;

        const category = new Category(data);

        await category.save();

        res.status(200).json({
            success: true,
            category
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar la categoría',
            error
        });
    }
}