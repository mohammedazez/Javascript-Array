var arr = new Array("pro", "pro1", "pro2");
var content = "";
for (var i = 0; i < arr.length; i++) {
  content += arr[i];
  document.write(arr[i]);
}
document.getElementById("txt").innerHTML = content;
document.getElementById("txt2").innerHTML =
  "<li>" + arr.join("</li><li>") + "</li>";
