
function changeColors()
{
  let border = document.getElementById("BorderColor").value;
  let width = document.getElementById("Width").value;

  let bg = document.getElementById("BackgroundColor").value;

  border = border.toLowerCase();
  bg = bg.toLowerCase();

  document.getElementById("p1").style.borderWidth = width;

  if (border == "red")
  {
    document.getElementById("p1").style.borderColor = "red";
  }
  else if (border == "green")
  {
    document.getElementById("p1").style.borderColor = "green";
  }
  else if (border == "blue")
  {
    document.getElementById("p1").style.borderColor = "blue";
  }
  else {
    document.getElementById("p1").style.borderColor = "black";
  }

  if (bg == "red")
  {
    document.getElementById("p1").style.backgroundColor = "red";
  }
  else if (bg == "green")
  {
    document.getElementById("p1").style.backgroundColor = "green";
  }
  else if (bg == "blue")
  {
    document.getElementById("p1").style.backgroundColor = "blue";
  }
  else {
    document.getElementById("p1").style.backgroundColor = "white";
  }
}
