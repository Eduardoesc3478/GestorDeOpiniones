
import Publication from "./publication.model.js";

export const addPublication = async (req, res) => {
    try {

        const { user } = req;

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

export const getPublications = async (req, res) => {
    const { limite = 10, desde = 0 } = req.query;
    
       try {
           const publications = await Publication.find()
               .skip(Number(desde))
               .limit(Number(limite));
    
           const total = await Publication.countDocuments();
    
           res.status(200).json({
               success: true,
               total,
               publications
           });
       } catch (error) {
           res.status(500).json({
               success: false,
               message: 'Error al obtener las categorías',
               error
           });
       }
   };

   export const updatePublication = async (req, res) => {
    try {
        const { id } = req.params;  
        const data = req.body;      

        
        const updatedPublication = await Publication.findByIdAndUpdate(id, data, { new: true });

       
        if (!updatedPublication) {
            return res.status(404).json({
                success: false,
                msg: "Publicación no encontrada",
            });
        }

        res.status(200).json({
            success: true,
            msg: "Publicación actualizada correctamente",
            publication: updatedPublication,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Error al actualizar la publicación",
            error: err.message,
        });
    }
};

export const deletePublication = async (req, res) => {
    try {
        const { id } = req.params;


        const publication = await Publication.findById(id);
        if (!publication) {
            return res.status(404).json({
                success: false,
                message: 'La publicación no existe',
            });
        }

        await Publication.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Publicación eliminada exitosamente',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la publicación',
            error: error.message,
        });
    }
};
