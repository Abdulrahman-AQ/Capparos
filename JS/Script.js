let toTop = document.getElementById("to-top");

window.onscroll = function () {
  if (scrollY >= "1000") {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.onclick = function () {
  window.scrollTo(0, 0);
};

// Welcome msg
let msgContainer = document.createElement("div");
let msgContent = document.createTextNode(
  "Hello we hope that you have a good time surfing our website"
);

msgContainer.appendChild(msgContent);

msgContainer.className = "msg";

let msgHandler = window.setTimeout(function () {
  document.body.appendChild(msgContainer);
}, 3 * 10000);

window.onclick = function () {
  msgContainer.style.display = "none";
  clearTimeout(msgContainer);
};
