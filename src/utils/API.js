import axios from "axios";

// Export an object containing methods we'll use for accessing the randomuser.me API

export default {
  getEmployee: function(){
    return axios.get("https://randomuser.me/api/?results=5&inc=picture,name,phone,email");
  },
  // getRandomEmployee: function() {
  //   return axios.get("https://randomuser.me/api/breeds/image/random");
  // },
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://randomuser.me/api/breed/" + breed + "/images");
  // },
  // getBaseBreedsList: function() {
  //   return axios.get("https://randomuser.me/api/breeds/list");
  // }
};
