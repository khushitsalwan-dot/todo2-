$("#registerBtn").click(() => {
  $.post('/api/register', {
    username: $("#regUser").val(),
    password: $("#regPass").val()
  }, res => {
    $("#regMsg").text(res.success ? "Registered!" : res.message);
  });
});
$("#registerBtn").click(() => {
  $.post('/api/register', {
    username: $("#regUser").val(),
    password: $("#regPass").val()
  }, res => {
    $("#regMsg").text(res.success ? "Registered!" : res.message);
  });
});
