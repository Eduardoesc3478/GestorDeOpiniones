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

export const getCategories = async (req, res) => {
    const { limite = 10, desde = 0 } = req.query;
 
    try {
        const categories = await Category.find()
            .skip(Number(desde))
            .limit(Number(limite));
 
        const total = await Category.countDocuments();
 
        res.status(200).json({
            success: true,
            total,
            categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las categorías',
            error
        });
    }
};

export const findCategory = async (req, res) => {
    const { id } = req.params;
 
    try {
        const category = await Category.findById(id);
 
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Categoría no encontrada'
            });
        }
 
        res.status(200).json({
            success: true,
            category
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al buscar la categoría',
            error
        });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
 
        await Category.findByIdAndDelete(id);
 
        res.status(200).json({
            success: true,
            message: 'Categoría eliminada exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la categoría',
            error
        });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params; 
        const data = req.body; 

        const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                msg: "Categoría no encontrada"
            });
        }

        res.status(200).json({
            success: true,
            msg: "Categoría actualizada",
            category: updatedCategory,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Error al actualizar la categoría",
            error: err.message
        });
    }
};



