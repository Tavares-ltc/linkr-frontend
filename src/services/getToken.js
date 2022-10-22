function getUserToken() {
  return JSON.parse(localStorage.getItem("linkr"))?.token;
}

export default getUserToken;
