
import navigation from "../components/Navbar.js";
import Header from "../components/Header.js";
import request from "../components/Request.js";
import trending from "../components/trending.js";
import collection from "../components/Collections.js";

// import collection from "../components/collections.js";

export const root = document.getElementById('root')


navigation()
Header()
request(trending)
request(collection)