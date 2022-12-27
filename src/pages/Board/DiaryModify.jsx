import React from "react";
import Stars from "../../components/board/Stars";

export default function DiaryModify() {
	return (
		<>
			<div className="inner">
				<div className="board_container">
					<div className="board_header">
						<h1>Write Mode</h1>
					</div>
					<form
						action="/board/modify"
						method="POST"
						className="board_form">
						<div className="form_title">
							<h3>title</h3>
							<input type="text" name="title" required />
						</div>
						<div className="form_content">
							<h3>content</h3>
							<textarea
								name="content"
								id="content"
								cols="30"
								rows="10"
								required></textarea>
						</div>
						<div className="form_image">
							<h2>image</h2>
							<input type="file" name="img" />
						</div>
						<br />
						<div className="form_stars">
							<Stars />
						</div>
						<br />
						<button type="submit">글 수정하기</button>
					</form>
				</div>
			</div>
		</>
	);
}
