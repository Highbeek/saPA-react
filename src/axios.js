import axios from "axios";

//** base url to make request to the movie database*/

const instance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
});
 
export default instance;
