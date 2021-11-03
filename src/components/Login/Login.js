import classes from "./Login.module.css";
import Button from "../UI/Button";

const Login = () => {
  return (
    <section className={classes["login-page"]}>
      <form className={classes["form-control"]}>
        <div className={classes["form-input"]}>
          <label htmlFor="username">Username</label>
          <input type="text" required />
        </div>
        <div className={classes["form-input"]}>
          <label htmlFor="password">Password</label>
          <input type="text" required />
        </div>
        <Button btnType="success">Log in</Button>
        <Button btnType="demo">Demo</Button>
      </form>
      <div>
        <p>Carousel</p>
      </div>
    </section>
  );
};

export default Login;
