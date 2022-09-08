import POOL from "../database/db.js";

class Product {
    
    static async getOne(query, id){
        const [result] = await POOL.execute(query, [id]);
        return result;
    }
    
    static async getAll(query){
        const [result] = await POOL.execute(query);
        return result;
    }

    static async save(query, datas) {
        const [result] = await POOL.execute(query, [...Object.values(datas)]);
        return result;
    }

    static async deleteOne(query, id){
        const [result] = await POOL.execute(query, [id]);
        return result;
    }
}

export default Product;