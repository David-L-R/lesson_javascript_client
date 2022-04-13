const { default: axios } = require("axios");

const SERVER_URL = "http://localhost:4000";

const getUsers = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/users`);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (id) => {
  try {
    const res = await axios.get(`${SERVER_URL}/users/${id}`);
    const [user] = res.data;

    console.log("user", user);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

const getCapitals = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/capitals`);
    console.log(res.data);
  } catch (error) {
    console.log(error.data.error);
  }
};

// getUsers();
// getUser("62555f2daff8d1836885a4c7"); //user
getUser("62555f2daff8d1836885a4"); //undefined
// getCapitals();
