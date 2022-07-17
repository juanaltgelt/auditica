import axios from "../api/axios";
const url = "/api/auth";

const signup = async (name, age, email, password) => {
  return await axios.post(url + "/register", {
    name,
    age,
    email,
    password,
  }).then((response) => {
    localStorage.setItem("token", JSON.stringify(response));
    return response
  })
};

const login = async (email, password) => {
  return await axios
    .post(url + "/login", { email, password })
    .then(({data: response}) => {
      if (response.token) {     
        localStorage.setItem("token", JSON.stringify(response));
      }
      return response
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const recoveryEmail = async (email) => {
  return await axios.post(url + "/forgotPassword", {email})
  .then((response) => {
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data
  })
}

const resetPassword = async (accessToken, password) => {
  return await axios.post(`${url}/reset/${accessToken.token}`, {password})
  .then((response)=> {
    return response.data
  })
}


const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
  recoveryEmail,
  resetPassword,
};

export default authService;
