var email="loki@gmail.com"
var pass="2626"
var form=document.forms
function loginPage()
{
    var userDefEmail=document.getElementById("email").value
    var userDefPassw=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderDiv")
    if(email!=userDefEmail && pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg , red,red)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="User name and Password is wrong"
    }
    else if(email==userDefEmail && pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg ,rgb(181, 26, 140),red)"
        divbor[0].style.borderColor="royalblue"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="Password is wrong"
    }
    else if(email!=userDefEmail && pass==userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg ,red,rgb(181, 26, 140))"
        divbor[1].style.borderColor="royalblue"
        divbor[0].style.borderColor="red"
        document.getElementById("result").innerHTML="Email is wrong"
    }
    else
    {
        form[0].action="./html/home.html"
        form[0].elements[2].type="submit"
    }
}
function visible()
{
    form[0].elements[1].type="text"
    document.getElementById("passVis").src="../technology/assets/logo/eyesopen.jpeg"
    document.getElementById("passVis").style.transform="rotateY(360deg)"
    document.getElementById("passVis").style.transition="transform 0.5s"
}
function invisible()
{
    form[0].elements[1].type="password"
    document.getElementById("passVis").src="../technology/assets/logo/eyesclose.jpeg"
    document.getElementById("passVis").style.transform="rotateY(0deg)"
    document.getElementById("passVis").style.transition="transform 0.5s"
}