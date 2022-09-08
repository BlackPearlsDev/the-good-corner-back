import User from '../models/user.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { saltRounds } from '../config/config.js';

export const getAllUser = async (req, res) => {

    const query = "SELECT * FROM user";
    try {
        const result = await User.getAll(query);
        
        res.status(200).json({
            status: 200,
            msg: "ALL user are get", 
            usersAll: result
        });
        
    } catch (error) {
        return next(error);
    }
}

export const addUser = async (req, res) => {
    const {alias, password} = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    const datas = {
        alias : alias,
        password : hash,
        uuid: uuidv4()
    }
    
    const query = "INSERT INTO user (alias, password, city, uuid, role_id) VALUES (?, ?, null, ?, 1)";
    const values = [datas.alias, datas.password, datas.uuid];
    try {
        const result = await User.save(query, values);
        
        res.status(200).json({
            status: 200,
            msg: "user added"
        });
        
    } catch (error) {
        return next(error);
    }
}

export const getUserByUuid = async (req, res) => {
    let {uuid} = req.params;
    const query = "SELECT alias, password, city, uuid, role_id FROM user WHERE uuid = ?";
    try {
        const result = await User.getOne(query, uuid);
        
        res.status(200).json({
            status: 200,
            msg: "ONE user are get", 
            userUuid: result[0]
        });
        
    } catch (error) {
        return next(error);
    }
}

// REQUETE POSTMAN
// {
//     "alias": "valeur",
//     "password": "valeur"
// }
export const updateUserbyUuid = async (req, res) => {
    let {uuid} = req.params;
    const {alias, password} = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    const datas = {
        alias : alias,
        password : hash,
        uuid: uuid
    }
    const query = "UPDATE user SET alias = ?, password = ? WHERE uuid = ?";
    const values = [datas.alias, datas.password, datas.uuid];
    try {
        const result = await User.save(query, values);
        console.log('result:', result);
        
        res.status(200).json({
            status: 200,
            msg: "user updated",
            user: result
        });
        
    } catch (error) {
        return next(error);
    }
}