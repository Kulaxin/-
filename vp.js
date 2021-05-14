function vp0() {
    let a0 = document.getElementById("Editbox2").value;
    let b0 = document.getElementById("Editbox1").value;
    document.getElementById("InlineFrame1").src = a0 + b0;
};

function vp1() {
    let a1 = document.getElementById("Editbox1").value;
    document.getElementById("InlineFrame1").src = "http://jx.quanmingjiexi.com/?url=" + a1;
};


function vp2() {
    let a2 = document.getElementById("Editbox1").value;
    document.getElementById("InlineFrame1").src = "http://jx.zhiaiyy.top/?url=" + a2;
};