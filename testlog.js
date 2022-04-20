


function loginpro()
{
    var name =pro;
    localStorage.setItem("name", name);
    window.location.replace("testdee.html");
}
function login()
{
    var name = document.getElementById("input_name").value;
    localStorage.setItem("name", name);
    window.location.replace("testdee.html");
    
}
