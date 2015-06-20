var answerArray = {};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("trrr", ev.target.id);
  // console.log(ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var mepID = ev.dataTransfer.getData("trrr");
  ev.target.appendChild(document.getElementById(mepID));
  answerArray[mepID] = ev.target.id;
  console.log(answerArray);
}

function submit() {
  var score = 0;
  if (answerArray["farage"] == "ukip") {
    score = score + 1;
  }
  if (answerArray["hunt"] == "tory") {
    score = score + 1;
  }
  
  yourscore = document.getElementById("yourscore")
  yourscore.innerHTML = score;

}
