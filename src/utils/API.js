import axios from "axios";

// Export an object containing methods we'll use for accessing the randomuser.me API

export default {
  getEmployee: function(){
    return axios.get("https://randomuser.me/api/?results=5&inc=picture,name,phone,email");
  },

// getBaseEmployeesList()
//   getRandomEmployee: function() {
//     return axios.get("https://randomuser.me/api/names/image/random");
//   },

};
