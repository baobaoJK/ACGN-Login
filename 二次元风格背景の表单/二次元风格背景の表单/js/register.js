// 验证码
let userCode;

// 用户名
const usernameElement = document.querySelector(".username");

// 密码
const passwordElement = document.querySelector(".password");

// 手机
const phoneElement = document.querySelector(".phone");

// 验证码
const codeElement = document.querySelector(".code");
const codeElementRect = codeElement.getBoundingClientRect();

// 验证码按钮
const codeButtonElement = document.querySelector(".code-button");
codeButtonElement.addEventListener('click', () => {
    const phone = phoneElement.value;

    sendCode(phone);
});

// 注册按钮
const registerButtonElement = document.querySelector(".register-button");
registerButtonElement.addEventListener('click', () => {
    const username = usernameElement.value;
    const password = passwordElement.value;
    const phone = phoneElement.value;
    const code = codeElement.value;

    register(username, password, phone, code);
});

// 注册函数
function register(username, password, phone, code) {
    if (username == "") {
        alert("请输入用户名");
    }
    else if (password == "") {
        alert("请输入密码");
    }
    else if (phone == "") {
        alert("请输入手机号");
    }
    else if (code == "") {
        alert("请输入验证码");
    }
    else if (code != userCode) {
        alert("验证码不正确");
    }
    else if (username != "" && password != "" && phone != "" && code != "") {
        alert("注册成功");
    }
}

// 验证码函数
function sendCode(phone) {
    if (phone == "") {
        alert("请输入手机号");
    }
    else if (phone != "") {
        userCode = parseInt(Math.random() * (10000 - 1000)) + 1000;
        alert("验证码已发送！");
        alert("（手机）您的验证码为：" + userCode);

        codeButtonElement.setAttribute("disabled", "true");

        let times = 60;
        codeButtonElement.value = "(" + times-- + "s)";

        const buttonTime = setInterval(() => {
            if (times == 0) {
                clearInterval(buttonTime);
                codeButtonElement.value = "获取验证码";
                codeButtonElement.removeAttribute("disabled");
            }
            else {
                codeButtonElement.value = "(" + times-- + "s)";
            }
        }, 1000);
    }
}