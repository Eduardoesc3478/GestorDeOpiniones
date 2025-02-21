import Publication from "./publication.model.js";

export const addPublication = async (req, res) => {
    try {
        const data = req.body;

        const publication = new Publication(data);
        await publication.save();

        res.status(200).json({
            success: true,
            publication
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar la publicación',
            error: error.message
        });
    }
};