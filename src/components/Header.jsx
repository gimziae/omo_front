import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/modules/user";

export default function Header() {
	const isLogin = useSelector((state) => state.user.isLogin);
	const dispatch = useDispatch();

	return (
		<>
			<header id="header">
				<div className="wrap">
					<NavLink to="/" className="logo">
						<img src="/images/omo-logo.png" alt="로고" />
					</NavLink>

					{!isLogin ? (
						<NavLink to="/login" className="login">
							<span>Sign In</span>
							<FaSignInAlt />
						</NavLink>
					) : (
						<NavLink
							to="/"
							className="login"
							onClick={() => dispatch(logout())}>
							<span>Sign out</span>
							<FaSignOutAlt />
						</NavLink>
					)}
				</div>
			</header>
		</>
	);
}
