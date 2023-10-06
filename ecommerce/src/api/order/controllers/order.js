'use strict';

const stripe = require("stripe")("sk_test_51NuR6bC1lC1nPXOhdF4QvKt8lil8Eyg5xndHzk48pW8LoskLKnOEaOQmuGMSLCnmHfEnsHghYaL9BmXMmJXF329000BzQZEs34")

function calcDiscountPrice(price, discount){
    if(!discount){
        return price;
    }
    const discountAmount = (price * discount) / 100;
    const result = price - discountAmount;
    return result.toFixed(2);
}

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({ strapi })=> ({
    async paymentOrder(context){
       const { token, products, idUser, addressShipping } = context.request.body;
       let totalPayment = 0;
       products.forEach((product) => {
            const priceTemp = calcDiscountPrice(
                product.attributes.price,
                product.attributes.discount
            );
            totalPayment += Number(priceTemp)*product.quantity;
       });

       const charge = stripe.charges.create({
        amount: Math.round(totalPayment * 100),
        currency: "usd",
        source: token.id,
        description: `User ID: ${idUser}`
       });

       const data = {
        products,
        user: idUser,
        totalPayment,
        idPayment: charge.id,
        addressShipping,
       };

       const model = strapi.contentTypes["api::order.order"];
       const validData = await strapi.entityValidator.validateEntityCreation(
        model,
        data
       );

       const entry = await strapi.db.query("api::order.order").create({ data: validData});
       return entry;
    },
}));
