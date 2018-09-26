let size = 5;
let n = 0;
let images = ["laomei.jpg", "hualien.jpg", "dog.jpg", "shilin.jpg", "yangmingshan.jpg"]

function nextImg()
{

  if (n < size-1)
  {
    n++;
  }
  else if (n == size-1)
  {
    n = 0;
  }

  document.getElementById('slideshow').src = currentImg();
}

function prevImg()
{
  if (n > 0)
  {
    n--;
  }
  else if (n == 0)
  {
    n = size-1;
  }

  document.getElementById('slideshow').src = currentImg();
}

function currentImg()
{
  return images[n];
}
