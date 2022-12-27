import React from "react";
import { Link } from "react-router-dom";

export default function NavBtn() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<button>
							<Link to="/tour">관광지</Link>
						</button>
					</li>
					<li>
						<button>
							<Link to="/culture">문화시설</Link>
						</button>
					</li>
					<li>
						<button>
							<Link to="/food">식당</Link>
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}
