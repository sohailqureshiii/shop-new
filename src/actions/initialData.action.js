import axiosIntance from "../helpers/axios";
import { categoryContants, locationContants } from "./constants";

export const getInitialData = () => {
    return async (dispatch) => {
        const res = await axiosIntance.get(`/userinitialdata`);
        if (res.status === 200) {
           const { categories,locations } = res.data;
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categories }
            });
            dispatch({
                type: locationContants.GET_ALL_LOCATION_SUCCESS,
                payload: { locations: locations }
            });
        } else {
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}


