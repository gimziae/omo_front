import { FaSignOutAlt, FaSignInAlt, FaUser } from "react-icons/fa";
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
						<div className="isLogin">
							<NavLink to="/board" className="board">
								<FaUser />
							</NavLink>
							<NavLink
								to="/"
								className="logout"
								onClick={() => dispatch(logout())}>
								<FaSignOutAlt />
								<span>Sign out</span>
							</NavLink>
						</div>
					)}
				</div>
			</header>
		</>
	);
}
