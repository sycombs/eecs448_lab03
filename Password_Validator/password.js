function validate()
{
  let pw1 = document.getElementById("Password").value;
  let pw2 = document.getElementById("Confirm").value;
  if (pw1 != pw2)
  {
    alert("Passwords must match!")
  }
  else if (pw1.length < 8)
  {
    alert("Password must be at least 8 characters long.")
  }
}
