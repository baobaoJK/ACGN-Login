// 添加按钮事件
document.getElementById("login-button").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "") {
        alert("请输入用户名");
    }
    else if (password == "") {
        alert("请输入密码");
    }
    else if (username == "admin" && password == "123456") {
        alert("登录成功");
    }
    else {
        alert("用户名或密码错误");
    }
});

// 添加随机背景事件
var imageName = ["三叶", "泷", "三叶2", "泷2", "天气之子", "铃芽之旅"];
var num = parseInt(Math.random() * imageName.length);
document.getElementById("background").setAttribute("src", "images/" + imageName[num] + ".png");
document.getElementById("background").setAttribute("alt", imageName[num] + ".png");