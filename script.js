document.addEventListener('customPasswordEvent', function ()
{
    //console.log("poi");
    require(["function-widget-1:share/util/service/createLinkShare.js"]).prototype.makePrivatePassword=function(){return prompt("输入自定义密码，必须为4位数字、字母:","")};
});

//document.getElementById("share").addEventListener("click", customPassword);
