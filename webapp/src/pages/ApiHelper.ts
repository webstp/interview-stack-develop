import axios from "axios";
import { Order, OrderData } from "../components/interfaces";

export const INPIPELINE_URL = '/api/orders/inpipeline';

export const getInPipelineData = async () => {
    const orderData: OrderData = {
      Queued: [],
      InProgress: [],
      QA: [],
    };
    let errorOccured = false;
    try {
      const response = await axios.get(INPIPELINE_URL);
      if (response?.status === 200) {
        const { data } = response.data;
        data.forEach((order: Order) => {
          orderData[order.OrderStatus as keyof OrderData].push(order);
        });
      } else {
        const { message } = response.data;
        throw message;
      }
    } catch(err) {
      console.error(err);
      errorOccured = true;
    }
    return { orderData, errorOccured };
};

export const UPDATE_STATUS_URL = '/api/orders/update_status';

export const updateOrderStatus = async (order: Order, newOrderStatus: string) => {
    const updatedOrder = { ...order, OrderStatus: newOrderStatus };
    let orderStatusUpdated = false;
    try {
        const response = await axios.post(UPDATE_STATUS_URL, updatedOrder);
        if (response?.status === 200) orderStatusUpdated = true;
        else {
            const { message } = response.data;
            throw message;
        }
    } catch(err) {
        console.error(err);
    }
    return orderStatusUpdated;
};

export const ACTIVE_PRODUCTS_URL = '/api/products?status=Active';

export const getActiveProducts = async () => {
    let activeProducts: any[] = [];
    let errorOccured = false;
    try {
        const response = await axios.get(ACTIVE_PRODUCTS_URL);
        if (response?.status === 200) {
          ({ data: activeProducts } = response.data);
        } else {
            const { message } = response.data;
            throw message;
        }
    } catch(err) {
        console.error(err);
        errorOccured = true;
    }
    return { activeProducts, errorOccured };
};