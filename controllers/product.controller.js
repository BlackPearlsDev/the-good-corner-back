import Product from '../models/product.js';

export const getAllProduct = async (req, res) => {

    const query = "SELECT * FROM product";
    try {
        const result = await Product.getAll(query);
        
        res.status(200).json({
            status: 200,
            msg: "ALL product are get"
        });
        
    } catch (error) {
        return next(error);
    }
}

export const getProductById = async (req, res) => {
    
    const query = "SELECT id, title, content, img_url, user_id, category_id FROM product WHERE id = ?";
    const values = req.params.id;
    try {
        const result = await Product.getOne(query, values);
        
        res.status(200).json({
            status: 200,
            msg: "ONE product is get",
            productId: result
        });
        
    } catch (error) {
        return next(error);
    }
}

export const getProductByCategoryId = async (req, res) => {
        
    const query = "SELECT id, title, content, img_url, user_id, category_id FROM product WHERE category_id = ?";
    const values = req.params.id;
    try {
        const result = await Product.getOne(query, values);
        
        res.status(200).json({
            status: 200,
            msg: "ALL product by category are get",
            productCategoryId: result
        });
        
    } catch (error) {
        return next(error);
    }
}


// REQUETE POSTMAN
// {
//     "title": "valeur",
//     "content": "valeur",
//     "img_url": "valeur(peut etre null)",
//     "user_id": valeur,
//     "category_id": valeur
// }
export const addProduct = async (req, res) => {
    // gerer ici l'img
    // condition etc...

    const query = "INSERT INTO product (title, content, img_url, user_id, category_id) VALUES (?, ?, ?, ?, ?)";
    const datas = {
        title: req.body.title,
        content: req.body.content,
        img_url: req.body.img_url ? req.body.img_url : "noImg.svg",
        user_id: req.body.user_id,
        category_id: req.body.category_id
    };

    try {
        const result = await Product.save(query, datas);
        
        res.status(200).json({
            status: 200,
            msg: "ONE product is added",
            product: result
        });
        
    } catch (error) {
        return next(error);
    }
}

export const addCategory = async (req, res) => {
    
    const query = "INSERT INTO category (title) VALUES (?)";
    const values = [req.body.title];
    try {
        const result = await Product.save(query, values);
        
        res.status(200).json({
            status: 200,
            msg: "ONE category is added",
            category: result
        });
        
    } catch (error) {
        return next(error);
    }
}

export const updateProductbyId = async (req, res) => {
        
    const query = "UPDATE product SET title = ?, content = ?, img_url = ?, user_id = ?, category_id = ? WHERE id = ?";
    const datas = {
        title : req.body.title,
        content : req.body.content,
        img_url : req.body.img_url,
        user_id : req.body.user_id,
        category_id : req.body.category_id,
        id : req.params.id
    };

    try {
        const result = await Product.save(query, datas);
        
        res.status(200).json({
            status: 200,
            msg: "ONE product is updated",
            productId: result
        });
        
    } catch (error) {
        return next(error);
    }
}


// REQUETE POSTMAN
// {
//     "title": "valeur"
// }
export const updateCategorybyId = async (req, res) => {
            
    const query = "UPDATE category SET title = ? WHERE id = ?";
    const datas = {
        title : req.body.title,
        id : req.params.id
    };

    try {
        const result = await Product.save(query, datas);
        
        res.status(200).json({
            status: 200,
            msg: "ONE category is updated",
            categoryId: result
        });
        
    } catch (error) {
        return next(error);
    }
}

export const getAllCategory = async (req, res) => {
    const query = "SELECT * FROM category";
    try {
        const result = await Product.getAll(query);
        console.log("result", result);
        
        res.status(200).json({
            status: 200,
            msg: "ALL category are get",
            category: result
        });
        
    } catch (error) {
        return next(error);
    }
}

export const addImg = async (req, res) => {
    try {
        await req.files.image.mv(`public/img/${req.files.image.name}`);
        res.json({
            msg: `IMG uploaded !`,
            image: req.files.image.name
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "ERROR WITH IMG"
        })
    }; 
};

export const addImgByProductId = async (req, res) => {
    const query = "UPDATE product SET img_url = ? WHERE id = ?";
    const datas = {
        img_url : req.files.image.name,
        id : req.params.id
    };

    console.log("datas entry:", datas);

    console.log('datas', datas);

    try {
        const result = await Product.save(query, datas);
        console.log('result:', result);
        
        res.status(200).json({
            status: 200,
            msg: "ONE img is added",
            url: result
        });
        
    } catch (error) {
        return next(error);
    }
}