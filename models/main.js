import POOL from '../database/db.js';

class Main {

    static async getData(query){
        const [datas] = await POOL.execute(query);
        return datas;
    }
    
    static async getDataWithValue(query, id){
        const [datas] = await POOL.execute(query, [id]);
        return datas;
    }

    static async save(query, datas){
        const [result] = await POOL.execute(query, [...Object.values(datas)]);
        return result;
    }

    static async delete(query, id){
        const [result] = await POOL.execute(query, [id]);
        return result;
    }
}

export default Main;