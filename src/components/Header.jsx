import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header id="header">
				<div className="wrap">
					<NavLink to="/" className="logo">
						<img src="/images/omo-logo.png" alt="로고" />
					</NavLink>

					{/* <div className="logout">
						<FaUser />
						<FaSignOutAlt onClick={() => dispatch(logout())} />
					</div> */}

					<NavLink to="/login" className="login">
						<span>Sign In</span>
						<FaSignInAlt />
					</NavLink>
				</div>
			</header>
		</>
	);
}
