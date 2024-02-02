import axios from "axios";
import * as actions from "../redux/actionType";
import { useDispatch } from "react-redux";

const baseUrl = "https://courses-data-sort-backend.vercel.app";

export const getData = async (dispatch) => {
  try {
    dispatch(actions.requestData());
    const response = await axios.get(`${baseUrl}/courses`);
    dispatch(actions.requestSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(actions.requestError(error));
    console.error(error);
  }
};

export const getCourseById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/course/${id}`);
    console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getStudentData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/student/${1}`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
export const searchCourses = async (name, dispatch) => {
  try {
    dispatch(actions.requestData());

    const response = await axios.get(`${baseUrl}/search/${name}`);

    console.log(response);
    dispatch(actions.requestSuccess(response.data));
  } catch (e) {
    dispatch(actions.requestError(e));

    console.error(e);
  }
};
