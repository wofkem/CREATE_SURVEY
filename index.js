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

function add_opt(){
    const section = document.getElementById("choice_opt_section")
    const newDiv = document.createElement('div');
    let cnt_opt = section.childElementCount+1

    const textbox = document.createElement('input')
    textbox.setAttribute("type","text")
    textbox.setAttribute("value",cnt_opt+"번 보기")
    textbox.setAttribute("placeholder",cnt_opt+"번 보기")
    newDiv.appendChild(textbox)

    const btn_del = document.createElement('input')
    btn_del.setAttribute("type","button")
    btn_del.setAttribute("value","보기 삭제")
    btn_del.setAttribute("onclick","del(this)")
    newDiv.appendChild(btn_del)

    section.appendChild(newDiv) 
}

function add_Q(){
    const QA_section = document.getElementById("QA_section")
    const newDiv = document.createElement('div');
    let cnt_QA = QA_section.childElementCount+1
    newDiv.setAttribute("id","question_"+cnt_QA)
    newDiv.setAttribute("style","background-color: rgb(227, 227, 227); margin-top: 10px;")

    newDiv.innerHTML='<input type="text" value="질문'+cnt_QA+'" placeholder="질문'+cnt_QA+'"><div><select id="select_value" onchange="change_form(this.value)"><option value="multi" name="MCQ">객관식</option><option value="short" name="srt_ansr">단답형</option><option value="descript" name="descriptive">서술형</option></select></div><div id="change_section"> <!-- 객관식/단답형/서술형 바뀌는 부분 --><label><input type="checkbox">중복선택 허용</label><div id="choice_opt_section"><div><input type="text" value="1번 보기" placeholder="1번 보기"><input type="button" value="보기 삭제" onclick="del(this)"></div><div><input type="text" value="2번 보기" placeholder="2번 보기"><input type="button" value="보기 삭제" onclick="del(this)"></div></div><input type="button" value="보기 추가" onclick="add_opt()"></div><input type="button" value="질문 삭제" onclick="del(this)">'
    QA_section.appendChild(newDiv)
}

function change_form(value){
    const change_section = document.getElementById("change_section")
    if(value=="multi"){
        change_section.innerHTML='<label><input type="checkbox">중복선택 허용</label><div id="choice_opt_section"><div><input type="text" value="1번 보기" placeholder="1번 보기"><input type="button" value="보기 삭제" onclick="del(this)"></div><div><input type="text" value="2번 보기" placeholder="2번 보기"><input type="button" value="보기 삭제" onclick="del(this)"></div></div><input type="button" value="보기 추가" onclick="add_opt()">'
    }
    else{
        change_section.innerHTML='<input type="text" value="답 입력공간" readonly>'
    } 
}

