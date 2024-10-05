function run(){
  try{
      var ht =    document.getElementById("code-ht").value;
      var cs = document.getElementById("code-cs").value;
      var js = document.getElementById("code-js").value;
      var out = document.getElementById("out");
      var er = document.getElementById("er");
      out.contentDocument.body.innerHTML = ht + "<style>" + cs + "</style>";
      out.contentWindow.eval(js);
      localStorage.setItem(code-ht,ht.value);
      localStorage.setItem(code-cs,cs.value);
      localStorage.setItem(code-js,js.value);
  }catch(error){
      console.log(error);
      er.innerHTML = "'" + js + "'" + "<h3 id='er'>" + error + "</h3>";
  }
  
  }
  
function cls(){
    var er = document.getElementById("er");
    er.innerHTML = "<h3 id='ner'>errors</h3>";
    out.contentDocument.body.innerHTML = "";
    //er.value = "";
}