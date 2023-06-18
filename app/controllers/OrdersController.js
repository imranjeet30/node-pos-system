const jwt = require("jsonwebtoken");
require("dotenv").config();

const Order = require('../models/Order');
const OrderDetail = require('../models/OrderDetail');
const authService = require('../services/auth');
/**
 * Creates order
 * @param {Object} req 
 * @param {Object} res 
 */
exports.createOrder = async(req, res) => {
    try{

        let user = await authService.getAuthUser(req);
        
        let body = req.body;
        body.user_id = user.id
        const order = await Order.create(body);
        body.order_id = order.id;
        let orderDetailsData = body.orderDetails.map(v => ({...v, order_id:order.id}));
        const orderDetail = await OrderDetail.bulkCreate(orderDetailsData);
        order.orderDetails = orderDetail;
        res.send({data:order});
    }
    catch(err){
        res.send({err:err.message});
    }
}

/**
 * Get orders
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getsOrder = async (req, res) => {
    try{
        const result = await Order.findAll({
            include: [
                {model: OrderDetail}
            ]
        });
        res.send({data:result});
        res.end();
    }
    catch(err){
        res.send({err:err.message});
        res.end()
    }
};

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getSingleOrder = async(req, res) => {
    try{
        const {id} = req.params;
        const result = await Order.findOne({
            where:{
                id
            },
            include:[{model:OrderDetail}]
        });
        res.send({data:result});
        res.end();
    }
    catch(err){
        res.send({err:err.message});
        res.end();
    }
}

/**
 * Updates order
 * @param {Object} req 
 * @param {Object} res 
 */
exports.updateOrder = async(req, res) => {
    try{
        const {id, orderDetails} = req.body;
        const result = await Order.findOne({
            where:{id}
        });
        result.update(req.body);
        if(orderDetails){
            await OrderDetail.update(orderDetails);
        }
        res.send({data:result, message:"Order updated successfully!"});
    }
    catch(err){
        res.send({err:err.message});
    }
}