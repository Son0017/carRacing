import request from "./request";
import { creatLi } from "./app";
let x;
export const update = function (li, updateEl) {
  li.addEventListener("click", (el) => {
    if (el.target.innerHTML === "Select") {
      request(`http://127.0.0.1:3000/Garage/${li.dataset.id}`).then((data) => {
        updateEl["updateCar"].value = data.name;
        updateEl["car-color"].value = data.color;
      });
      updateEl["updateCar"].removeAttribute("disabled");
      updateEl["car-color"].removeAttribute("disabled");
      x = li.dataset.id;
    }
  });
  updateEl.addEventListener("submit", (elem) => {
    elem.preventDefault();
    if (x === li.dataset.id) {
      console.log(x);
      let value = updateEl["updateCar"].value.trim();
      let valueCol = updateEl["car-color"].value;
      if (value != "") {
        let dataCar = {
          name: value,
          color: valueCol,
        };
        request(
          `http://127.0.0.1:3000/Garage/${li.dataset.id}`,
          "PUT",
          dataCar
        ).then((data) => {
          console.log(data);
          creatLi(li, data.name, data.color);
        });
        updateEl.reset();
        updateEl["updateCar"].setAttribute("disabled", "");
        updateEl["car-color"].setAttribute("disabled", "");
      }
    }
  });
};
