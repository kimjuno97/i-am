const jsSkill = document.querySelector("div.skill-link");
const jsImg = document.querySelector(".js-img");
const pythonImg = document.querySelector(".python-img")
const newList = document.querySelector("div.new-list")

const jsLink = "<a href='https://kimjuno97.github.io/brckGame-js-/' target = _blank>벽돌게임</a><br><a href ='https://kimjuno97.github.io/color-Zilla/' target = _blank>칼라 픽</a>";
const pythonLink = "<a href='https://github.com/kimjuno97/Python-practice' target = _blank>비트코인 자동매매</a>"

jsImg.addEventListener('mouseover',jsSkillList);
newList.addEventListener('mouseleave',jsSkillListDel);
pythonImg.addEventListener('mouseover',pythonList);

function jsSkillList() {
    jsSkill.innerHTML = jsLink
}

function jsSkillListDel(){    
    jsSkill.innerHTML = '';
}

function pythonList() {
    jsSkill.innerHTML = pythonLink
}
