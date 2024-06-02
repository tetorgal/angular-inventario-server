import Product from '../model/productModel.js';

export const createProduct = async (req, res) => {
    try {
        const { code, name, type, description,price,amount } = req.body;
        const product = new Product({ 
            code, 
            name,
             type, 
             description, 
             price,
             amount,
            status:true,
        creationDate: new Date()
    });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { code, name, type, description,price,amount,role } = req.body;
        const passwordHash= await bcyptjs.hash(password,10);
        const product = new Product({ 
            code, 
            name,
             type, 
             description, 
             price,
             amount,
            status:true,
        creationDate: new Date()
    });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'email', 'phone', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send();
        }

        updates.forEach(update => user[update] = req.body[update]);
        await user.save();

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }

    
}

export const logout = (req, res)=>{
    res.cookie('token', "",{
        expires:new Date(0)
    });

return res.status(200);
}