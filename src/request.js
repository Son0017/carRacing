const request = async function (resuorse, method = "GET", data) {
  const response = await fetch(resuorse, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data) ? JSON.stringify(data) : null,
  });
  return response.json();
};
export default request;
