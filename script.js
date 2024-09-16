var code = document.getElementById('code');
var run = document.getElementById('run');
var remove = document.getElementById('remove');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var box = document.getElementById('box');
var closebox = document.getElementById('closebox');
var host = document.getElementById('host');




run.onclick = ()=> {
  result.innerHTML = code.value;
  localStorage.setItem("codes",code.value);
};

clear.onclick = ()=> {
  code.value = "";
};

remove.onclick = ()=> {
  result.innerHTML = "";

};
onload = ()=> {
  code.value = localStorage.getItem("codes");
};

closebox.onclick = ()=> {  
  box.removeAttribute('open');
};

host.onclick = ()=> {
  box.setAttribute('open','true');
}

