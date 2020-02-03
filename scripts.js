window.onload=function(){
  const hello = document.getElementById("hello");

  function greeting() {
    alert("Hello!");
    hello.textContent = "Goodbye";
  }

  hello.addEventListener("click", greeting);
}
