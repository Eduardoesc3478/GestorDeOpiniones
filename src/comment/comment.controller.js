import Comment from "./comment.model.js";

export const addComment = async (req, res) => {
    try {
        const data = req.body;

        const comment = new Comment(data);

        await comment.save();

        res.status(200).json({
            success: true,
            comment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar el comentario',
            error
        });
    }
}

export const updateComment = async (req, res) => {
    try{
        const { cid } = req.body;
        const { data } = req.body

        const comment = await Comment.findById(cid);

        comment.content = data;
        await comment.save();

        res.status(200).json({
            success: true,
            message: 'Update Comment',
            comment,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error updating comment',
            error: error.message
        })
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { cid } = req.params;
    

        await Comment.findByIdAndDelete(cid);

        res.status(200).json({
            success: true,
            message: "Comentario eliminado exitosamente"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el comentario",
            error: error.message
        });
    }
};