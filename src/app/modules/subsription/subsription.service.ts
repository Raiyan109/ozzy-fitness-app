import config from "../../../config";
import { stripe } from "../../../shared/stripe";

const createSubscriptionIntoDB = async (plan: string) => {
    let priceId: string;
    console.log(plan, 'plan');

    switch (plan) {
        case 'starter':
            priceId = 'price_1Qeux7C6jSgZhdi8oHDJIiFM';
            break;
        case 'pro':
            priceId = 'price_1QeuyzC6jSgZhdi8yf6Iydop';
            break;
        default:
            throw new Error('Subscribe plan not found');
    }

    // Starter=price_1Qeux7C6jSgZhdi8oHDJIiFM
    // Pro=price_1QeuyzC6jSgZhdi8yf6Iydop

    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        success_url: `${config.base_url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config.base_url}/cancel`
    })

    return session
};


const getSubscriptionFromDB = async (session_id: string) => {
    const session = await stripe.checkout.sessions.retrieve(session_id, { expand: ['subscription', 'subscription.plan.product'] })
    console.log(JSON.stringify(session));
    return session
}

export const subscriptionService = {
    createSubscriptionIntoDB,
    getSubscriptionFromDB
};