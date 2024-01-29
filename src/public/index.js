function submitForm() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var image = document.getElementById("image").value;
  var id = document.getElementById("id").value;
  axios
    .put(`/news/update/${id}`, {
      title,
      content,
      image,
    })
    .then((result) => {
      alert("Thanh cong");
    })
    .catch(() => alert("That bai"));
}

function deleteNew(id) {
  console.log(id);
  axios
    .delete(`/news/delete/${id}`)
    .then(() => console.log("Thanh cong"))
    .catch(() => console.log("That bai"));
}

function deleteMem(id) {
  axios
    .patch(`/news/isDelete/${id}`)
    .then(() => console.log("Thanh cong"))
    .catch(() => console.log("That bai"));
}
