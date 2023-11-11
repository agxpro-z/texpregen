
export default function Account() {
  return (
    <>
      <main className="account">
        <div className="register">
          <form action="">
            <legend>Register</legend>
            <input type="text" name="username" id="username" placeholder="username" />
            <input type="email" name="reg_email" id="reg_email" placeholder="email" />
            <input type="email" name="reg_email2" id="reg_email2" placeholder="verify email" />
            <input type="password" name="reg_pass" id="reg_pass" placeholder="password" />
            <input type="password" name="reg_pass2" id="reg_pass2" placeholder="verify password" />
            <button className="account_button"><i className="ri-user-add-line inline_icon"></i>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form action="">
            <legend>Login</legend>
            <input type="text" name="login_username" id="login_username"  placeholder="username"/>
            <input type="password" name="login_password" id="login_password" placeholder="password" />
            <div className="remember_me">
              <label id="remember_me">
                <input type="checkbox" name="rememberMe" id="rememberMe" defaultChecked />
                <div>Remember me</div>
              </label>
            </div>
            <button className="account_button"><i className="ri-login-box-line inline_icon"></i>Sign in</button>
          </form>
        </div>
      </main>
    </>
  )
}
