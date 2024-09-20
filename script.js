var code = document.getElementById('code');
var run = document.getElementById('run');
var remove = document.getElementById('remove');
var result = document.getElementById('result');
var result2 = document.getElementById('result2');
var clear = document.getElementById('clear');
var box = document.getElementById('box');
var closebox = document.getElementById('closebox');
var closebox1 = document.getElementById('closebox1');
var host = document.getElementById('host');
var comp = document.getElementById('compr');
var compb = document.getElementById('compr2');
var menub = document.getElementById('menub');
var menu = document.getElementById('menu');
var cmb = document.getElementById('cmb');
var notes = document.getElementById('notes');
var noteb = document.getElementById('noteb');
var sn = document.getElementById('sn');
var cn = document.getElementById('cn');
var notet = document.getElementById('notet').value;





notes.onclick = ()=> {
  noteb.setAttribute('open','true');
  notet.value = localStorage.getItem("notest");
}
cn.onclick = ()=> {
  noteb.removeAttribute('open');
}
sn.onclick = ()=> {
  localStorage.setItem("notest",notet.value);
  alert("Saved!!");
}
cmb.onclick = ()=> {
  menub.removeAttribute('open');
}
menu.onclick = ()=> {
  menub.setAttribute('open','true');
}

compb.onclick = ()=> {
  comp.setAttribute('open','true');
  result2.innerHTML = code.value;
  localStorage.setItem("codes",code.value);
}

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
  notet.value = localStorage.getItem("notest");
};

closebox.onclick = ()=> {  
  box.removeAttribute('open');
};

closebox1.onclick = ()=> {  
  comp.removeAttribute('open');
};

host.onclick = ()=> {
  box.setAttribute('open','true');
}

