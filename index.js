"use strict"

window.onload = function(){
    let check_data = 0;
    document.getElementById("main_data").innerHTML+='<div>설문 생성</div><div>설문조사 제목</div><div><div>질문1</div><div><select name="" id=""><option value="1">객관식</option><option value="2">주관식</option></select></div><label><input type="checkbox">중복선택 허용</label><form action=""><label><input type="radio" name="ex">1번 보기</label><input type="button" value="보기 삭제"> <label><input type="radio" name="ex">2번 보기</label><input type="button" value="보기 삭제"> <label><input type="radio" name="ex">3번 보기</label><input type="button" value="보기 삭제"> <label><input type="radio" name="ex">4번 보기</label><input type="button" value="보기 삭제"> <input type="button" value="보기 추가"></form><input type="button" value="질문 추가"></div>';
    check_data = 1;
}

function transform_div_input(){
    document.getElementById(this)
}