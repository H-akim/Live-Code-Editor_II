function run(){
    var html_code = document.getElementById("html_code").value ;
    var css_code = document.getElementById("css_code").value;
    var js_code = document.getElementById("js_code").value;
    var output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html_code + "<style>" + css_code + "</style>";
    output.contentWindow.eval(js_code);
}