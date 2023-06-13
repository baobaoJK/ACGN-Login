// 用户名
const usernameElement = document.querySelector(".username");

// 密码
const passwordElement = document.querySelector(".password");

// 登录按钮
const loginButtonElement = document.querySelector(".login-button");
loginButtonElement.addEventListener('click', () => {
    const username = usernameElement.value;
    const password = passwordElement.value;

    login(username, password);
});

// 登录函数
function login(username, password) {
    if (username == "") {
        alert("请输入用户名");
    }
    else if (password == "") {
        alert("请输入密码");
    }
    else if (username != "" && password != "") {
        alert("登录成功");
    }
}