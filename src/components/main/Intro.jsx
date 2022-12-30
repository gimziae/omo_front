import React from "react";
import { Link } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function Intro() {
	return (
		<section id="intro">
			{/* <div className="img">
				<img src="/images/intro1.jpeg" alt="" />
			</div> */}
			<h2>
				안녕하세요 <span>👋🏻</span>
			</h2>
			<div className="con">
				<p>
					아직{" "}
					<span>
						<img src="/images/omo-logo.png" alt="" />
					</span>
					의 회원이 아니시라면 ?{" "}
				</p>
				<Link to="/register">
					{" "}
					회원가입 하러 가기!! <RxDoubleArrowRight />
				</Link>
			</div>
		</section>
	);
}
