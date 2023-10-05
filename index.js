"use strict"


window.onload = function(){
    document.getElementById("main_data").innerHTML+='';
}

function del(e){
    let btn_tag = e
    let opt_div = btn_tag.parentElement
    let section_div = btn_tag.parentElement.parentElement
    section_div.removeChild(opt_div)
}

function add(){
    document.getElementById("coice_opt_section")
}