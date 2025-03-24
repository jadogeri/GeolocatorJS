
// Tabs
function openView(evt, id) {
    var i;
    var x = document.getElementsByClassName("view");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    // var activebtn = document.getElementsByClassName("testbtn");
    // for (i = 0; i < x.length; i++) {
    //   activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
    // }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " w3-dark-grey";
  }

  export default openView
