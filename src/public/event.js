function deleteEvent(id) {
  console.log(id);
  axios
    .delete(`/events/delete/${id}`, {})
    .then((result) => {
      window.location.reload();
    })
    .catch((error) => {
      alert("that bai");
    });
}
function updateEvent(id) {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var image = document.getElementById("image").value;
  var address = document.getElementById("address").value;
  var time = document.getElementById("time").value;
  console.log(title, content, image, address, time);
  axios
    .put(`/events/update/${id}`, {
      title,
      content,
      image,
      address,
      time,
    })
    .then((result) => {
      console.log(result);
      // return alert("success");
    })
    .catch((error) => {
      alert("that bai");
    });
}
