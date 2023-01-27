import "./request";
import request from "./request";
import { addCarfromGarage } from "./app";
export const createNewCar = function (createEl) {
  createEl.addEventListener("submit", (el) => {
    el.preventDefault();
    let value = createEl["createCar"].value.trim();
    let valueCol = createEl["car-color"].value;
    if (value != "") {
      let dataCar = {
        name: value,
        color: valueCol,
      };
      request("http://127.0.0.1:3000/Garage", "POST", dataCar).then((data) => {
        addCarfromGarage(data);
      });
    }
    createEl.reset();
  });
};
