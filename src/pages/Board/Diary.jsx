import React from "react";

export default function Diary1st() {
	return (
		<>
			<div className="inner">
				<div className="board_container">
					<div className="board_header">
						<h1>BOARD PAGE</h1>
					</div>
					<div className="board_write">
						<span>현재 등록 글 : </span>
						<a className="btn blue" href="/board/write">
							글쓰기
						</a>
					</div>
					<div className="board_body">
						<ul className="board">
							<li>
								<div className="title"></div>
								<div className="content"></div>
								<div className="foot">
									<a
										className="btn green"
										href="board/modify">
										수정
									</a>
									<a className="btn red" href="#">
										삭제
									</a>
								</div>
							</li>
							<li>
								<div className="title">
									등록된 글이 없습니다.
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
