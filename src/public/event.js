function deleteEvent(id, isDeleteEvent) {
  console.log(typeof isDeleteEvent);
  if (isDeleteEvent) {
    axios
      .delete(`/events/delete/${id}`, {})
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        alert("that bai");
      });
  } else {
    return alert("you don't have permission to delete");
  }
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

function isDeleteEvent(id) {
  axios
    .put(`/events//isDelete/${id}`)
    .then((result) => {
      window.location.reload();
    })
    .catch((error) => {
      alert("that bai");
    });
}

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
