import request from "./request";
export const deleteFromGar = function (element) {
  element.addEventListener("click", (e) => {
    if (e.target.className.baseVal === "deletesa") {
      element.remove();
      request(`http://127.0.0.1:3000/Garage/${element.dataset.id}`, "DELETE");
    }
  });
};
