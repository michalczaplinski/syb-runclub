import ax from "axios";

export const axiosInstance = ax.create({
  baseURL: `http://localhost:3000`
});

// export const auth = {
//   signup(name, email, password) {
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//   },

// login(email, password) {
//   const storedEmail = localStorage.getItem("email");
//   const storedPassword = localStorage.getItem("password");

//   if (email === storedEmail && storedPassword === password) {
//     return true;
//   }
// },

//   logout() {
//     localStorage.removeItem("name");
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//   },

//   isAuthenticated() {
//     if (localStorage.getItem("email") && localStorage.getItem("password")) {
//       return true;
//     }
//     return false;
//   }
// };

// export const authAwareFetch = () => {
//   this.headers = {}

//   return axios.create({
//     headers: this.headers
//   })
// }
