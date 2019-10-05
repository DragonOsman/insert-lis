"use strict";
function updateList() {
  const listItem2 = document.createElement("li");
  listItem2.textContent = "2";
  const listItem1 = document.getElementById("one");
  listItem1.insertAdjacentElement("afterend", listItem2);
  const listItem3 = document.createElement("li");
  listItem3.textContent = "3";
  const listItem4 = document.getElementById("two");
  listItem4.insertAdjacentElement("beforebegin", listItem3);
}

updateList();