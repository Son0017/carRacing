import "./bootstrap.min.css";
import request from "./request";
import { deleteFromGar } from "./deleteFromGarge";
import { createNewCar } from "./createNewCar";
import { update } from "./updataCar";
import { moveCars } from "./moveCar";
const listEl = document.querySelector("ul");
const createEl = document.getElementById("createEl");
const updateEl = document.getElementById("updateCars");
request("http://127.0.0.1:3000/Garage").then((data) => {
  console.log(data);
  data.forEach((element) => {
    addCarfromGarage(element);
  });
});

function addCarfromGarage(element) {
  let { name, id, color } = {
    name: element.name,
    id: element.id,
    color: element.color,
  };
  let li = document.createElement("li");
  li.classList.add("border", "rounded", "border-3", "py-1", "px-3");
  creatLi(li, name, color);
  deleteFromGar(li);
  li.setAttribute("data-id", `${id}`);
  update(li, updateEl);
  moveCars(li);
  listEl.appendChild(li);
}

function creatLi(li, name, color) {
  li.innerHTML = `
        <div class="d-flex justify-content-between">
              <div class="d-flex gap-3 flex-wrap">
                <button class="btn btn-primary" type="button">Start</button>
                <button class="btn btn-primary" type="button">Stop</button>
                <button class="btn btn-primary" type="button">Select</button>
                <span class="recycle-icon" id="delete" style="cursor: pointer">
                  <?xml version="1.0" encoding="utf-8"?><svg
                    version="1.1"
                    id="Layer_1"
                    class = "deletesa"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="45px"
                    height="45px"
                    viewBox="0 0 109.484 122.88"
                    enable-background="new 0 0 109.484 122.88"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        class = "deletesa"
                        fill="#4F1A08"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"
                      />
                    </g>
                  </svg>
                </span>
              </div>
              <small class="form-text text-muted">${name}</small>
            </div>
            <div class="d-flex pt-5">
              <div
                style="flex-grow: 1; border-bottom: 5px solid"
                class="d-flex align-items-end"
              >
                <i
                  class="carOne"
                  style="height: 25px; width: 70px; transform: rotateY(180deg)"
                >
                  <?xml version="1.0" encoding="utf-8"?><svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.88 35.03"
                    style="enable-background: new 0 0 122.88 35.03"
                    xml:space="preserve"
                  >
                    <style type="text/css">
                      .st0 {
                        fill-rule: evenodd;
                        clip-rule: evenodd;
                      }
                    </style>
                    <g>
                      <path
                        fill = "${color}"
                        class="st0"
                        d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"
                      />
                    </g>
                  </svg>
                </i>
              </div>
              <span style="display: flex; height: 25px; width: 25px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 451 512.426"
                >
                  <path
                    fill="#E21B1B"
                    d="M56.642 62.995C247.606-69.013 263.461 191.827 451 28.702v266.205C272.131 455.746 231.954 196.302 56.642 328.37V62.995z"
                  />
                  <path
                    fill="#4F1A08"
                    d="M57.161 62.944v386.537c8.162 6.463 13.394 16.446 13.394 27.664 0 19.486-15.794 35.281-35.28 35.281C15.79 512.426 0 496.631 0 477.145c0-11.888 5.88-22.404 14.89-28.793V64.073C5.88 57.684 0 47.168 0 35.28 0 15.795 15.79 0 35.275 0c19.486 0 35.28 15.795 35.28 35.28 0 11.218-5.232 21.202-13.394 27.664z"
                  />
                </svg>
              </span>
            </div>
    `;
}
export { addCarfromGarage, listEl, creatLi };

createNewCar(createEl);
