var siteName = document.getElementById("siteName");
var webUrl = document.getElementById("webUrl");
var bookmarkList = [];

if (localStorage.getItem("bookmarkList") != null) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  displayBookMark(bookmarkList);
}
function addBookMark() {
  var bookmark = { name: siteName.value, site: webUrl.value };
  bookmarkList.push(bookmark);

  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  displayBookMark();
  clear();
}

function displayBookMark() {
  var list = "";
  var link = "https://";
  for (var i = 0; i < bookmarkList.length; i++) {
    list += `<tr class="bg-white text-center">
<th class="p-3" id="t1">${i + 1}</th>
<th class="p-3" id="t2">${bookmarkList[i].name}</th>
<th class="p-3" id="t3"><button class="btn btn-success w-50"><a href="${link}${
      bookmarkList[i].site
    }" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit</a></button>
</th>
<th class="p-3" id="t4"><button onclick="deleteBookMark(${i})" class="btn btn-danger w-50"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
</th>
</tr>`;
  }
  document.getElementById("tableBody").innerHTML = list;
}

function deleteBookMark(index) {
  bookmarkList.splice(index, 1);
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

  displayBookMark(bookmarkList);
}

function clear() {
  siteName.value = null;
  webUrl.value = null;
}
