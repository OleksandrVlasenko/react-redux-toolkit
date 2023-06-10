import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.login.value);
    dispatch(logIn(form.elements.login.value));

    form.reset();

    navigate("/dashboard", {replace: true})
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
