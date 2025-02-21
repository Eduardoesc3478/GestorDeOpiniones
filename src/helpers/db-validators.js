import User from "../user/user.model.js"
import Category from "../category/category.model.js"
import Publication from "../publication/publication.model.js"

export const emailExists = async (email = "") => {
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`The email ${email} is already registered`)
    }
}

export const usernameExists = async (username = "") => {
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const userExists = async (uid = " ") => {
    const existe = await User.findById(uid)
    console.log(existe)
    if(!existe){
        throw new Error("No existe el usuario con el ID proporcionado")
    }
}

export const categoryNameExists = async (categoryName = "") => {
    const existe = await Category.findOne({categoryName})
    if(existe){
        throw new Error(`The username ${categoryName} is already registered`)
    }
}

export const publicationExists = async (pid = "") => {
    const existe = await Publication.findOne({pid})
    if(existe){
        throw new Error(`The username ${pid} is already registered`)
    }
}




