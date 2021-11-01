var x="global";
console.log("x globally = "+x);
var a=function () {
    var x="function a";
    console.log("x inside a = "+x);
    b();
}
function b() {
    var x="function b";
    console.log("x inside b = "+x);
}
a();
console.log("x globally = "+x);