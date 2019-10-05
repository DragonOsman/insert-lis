"use strict";
const unorderedList = document.getElementById("ul");
const listItem1 = unorderedList.firstChild();
const listItemLast = unorderedList.lastChild();
const listItem2 = listItem1.append("li");
listItem2.textContent = "2";
const listItem3 = listItemLast.prepend("li");
listItem3.textContent = "3";