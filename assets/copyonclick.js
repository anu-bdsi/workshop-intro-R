<script>
function copyURLtoClipboard(id) {
  // Get the text field
  var el = document.getElementById(id);
  var url = el.getAttribute("url");

  // Copy the text inside the text field
  navigator.clipboard.writeText(url);
  
  // Alert the copied text
  alert("Copied the data url: " + url);
}
</script>