import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import user, { logout } from "../redux/modules/user";

export default function Header() {
	const dispatch = useDispatch();
	return (
		<>
			<header id="header">
				<div className="wrap">
					<NavLink to="/" className="logo">
						<img src="/images/omo-logo.png" alt="로고" />
					</NavLink>

					<div className="logout">
						<FaUser />
						<FaSignOutAlt onClick={() => dispatch(logout())} />
					</div>

					<NavLink to="/login" className="login">
						<span>Sign In</span>
						<FaSignInAlt />
					</NavLink>
				</div>
			</header>
		</>
	);
}
