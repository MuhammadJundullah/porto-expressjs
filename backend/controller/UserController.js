import UserModel from '../models/UserModel.js';

export const getUsers = async (req, res) => {
    try { 
        const response = await UserModel.findAll();
        res.status(200).json(response); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try { 
        const response = await UserModel.findOne({
            where: {
                id: req.params.id   
            }
        });
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(response); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    try { 
        await UserModel.create(req.body);
        res.status(201).json({ message: "User created successfully" }); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try { 
        await UserModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "User updated successfully" }); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try { 
        await UserModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "User deleted successfully" }); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

