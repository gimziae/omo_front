import React, { useEffect, useState, useRef } from "react";

// icons
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdDeleteOutline, MdSaveAlt } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";

// 날짜 가져오는 모듈(date-fns)
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays } from "date-fns";

// 연도 , 월
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
	return (
		<div className="header row">
			<div className="col col-start">
				<span className="text">
					<span className="text month">
						{format(currentMonth, "M")}월
					</span>
					{format(currentMonth, "yyyy")}
				</span>
			</div>
			<div className="col col-end">
				<GrFormPrevious onClick={prevMonth} />
				<GrFormNext onClick={nextMonth} />
			</div>
		</div>
	);
};

// 요일
const RenderDays = () => {
	const days = [];
	const date = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sat"];

	for (let i = 0; i < 7; i++) {
		days.push(
			<div className="col" key={i}>
				{date[i]}
			</div>
		);
	}

	return <div className="days row">{days}</div>;
};

// 날짜
const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	const clickDate = useRef();

	const rows = [];
	let days = [];
	let day = startDate;
	let formattedDate = "";

	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			formattedDate = format(day, "d");
			const cloneDay = day;
			days.push(
				<div
					className={`col cell ${
						!isSameMonth(day, monthStart)
							? "disabled"
							: isSameDay(day, selectedDate)
							? "selected"
							: format(currentMonth, "M") !== format(day, "M")
							? "not-valid"
							: "valid"
					}`}
					key={day}
					onClick={() => onDateClick(cloneDay)}>
					<span
						className={
							format(currentMonth, "M") !== format(day, "M")
								? "text not-valid"
								: ""
						}
						ref={clickDate}>
						{formattedDate}
					</span>
				</div>
			);
			day = addDays(day, 1);
		}
		rows.push(
			<div className="row" key={day}>
				{days}
			</div>
		);
		days = [];
	}
	return <div className="body">{rows}</div>;
};

export default function Calendar() {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [savedScheduleList, setSavedShceduleList] = useState([]);
	const [render, setRender] = useState(false);
	const [modifyMode, setModifyMode] = useState([]);

	// 새로운 일정 입력받은 인풋값
	const inputDate = useRef();
	const inputTitle = useRef();
	const inputContent = useRef();

	// 생성된 일정 수정한 인풋값
	const modifyInputTitle = useRef();
	const modifyInputContent = useRef();

	// 서버 endpoint
	const scheduleURL = "http://localhost:4000/board/schedule";
	const scheduleListURL = "http://localhost:4000/board/schedules";

	// 저장목록 데이터 불러오기
	useEffect(() => {
		fetch(scheduleListURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("Token"),
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.schedules) {
					setSavedShceduleList(json.schedules);
					const modifyModeArr = [];
					for (let i = 0; i < json.schedules.length; i++) {
						modifyModeArr.push(false);
					}
					setModifyMode(modifyModeArr);
				} else {
					alert("데이터 로드 실패");
				}
			});
	}, [render]);

	// 일정 저장하는 함수
	async function saveTodo() {
		const todoInput = {
			date: selectedDate,
			title: inputTitle.current.value,
			content: inputContent.current.value,
		};

		if (todoInput.title !== "" && todoInput.content !== "") {
			const saveTodoResponse = await fetch(scheduleURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("Token"),
				},
				body: JSON.stringify(todoInput),
			});
			if (saveTodoResponse.status === 201) {
				const saveTodoResult = await saveTodoResponse.json();
				if (saveTodoResult) {
					alert("일정 저장 완료");
					setRender(!render);
					inputTitle.current.value = "";
					inputContent.current.value = "";
				}
			}
		} else {
			alert("제목과 내용을 입력해 주세요.");
		}
	}
	// 일정 삭제하는 함수
	async function deleteSchedule(id) {
		const deleteScheduleResponse = await fetch(scheduleURL, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("Token"),
			},
			body: JSON.stringify({
				_id: id,
			}),
		});

		if (deleteScheduleResponse.status === 201) {
			const deleteScheduleResult = await deleteScheduleResponse.json();
			if (deleteScheduleResult) {
				alert("일정 삭제 완료");
				setRender(!render);
			}
		} else {
			alert("서버 통신 이상");
		}
	}

	// 일정 수정하는 함수
	async function modifySchedule(id) {
		const modifyContents = {
			title: modifyInputTitle.current.value
				? modifyInputTitle.current.value
				: modifyInputTitle.value,
			content: modifyInputContent.current.value
				? modifyInputContent.current.value
				: modifyInputContent.value,
			// date: id.updateAt,
			_id: id,
		};
		const modifyContentResponse = await fetch(scheduleURL, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("Token"),
			},
			body: JSON.stringify(modifyContents),
		});

		if (modifyContentResponse.status === 201) {
			alert("일정 수정 완료");

			setModifyMode(false);
			setRender(!render);
		} else {
			alert("서버 통신 이상");
		}
	}

	// 날짜 설정
	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};
	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};
	const onDateClick = (day) => {
		setSelectedDate(day);
	};

	return (
		<>
			<div className="sectionWrap">
				<div className="calendar">
					<RenderHeader
						currentMonth={currentMonth}
						prevMonth={prevMonth}
						nextMonth={nextMonth}
					/>
					<RenderDays />
					<RenderCells
						currentMonth={currentMonth}
						selectedDate={selectedDate}
						onDateClick={onDateClick}
					/>
				</div>

				<div className="todoInput">
					<p ref={inputDate} className="inputDate">
						<strong>{format(selectedDate, "yyyy")}</strong>년{" "}
						<strong>{format(selectedDate, "M")}</strong>월{" "}
						<strong>{format(selectedDate, "dd")}</strong>일
					</p>

					<input
						ref={inputTitle}
						type="text"
						name=""
						id=""
						placeholder="일정 제목을 입력해 주세요."
					/>
					<br />
					<input
						ref={inputContent}
						type="text"
						name=""
						id=""
						placeholder="장소"
					/>
					<br />
					<button onClick={saveTodo} className="saveBtn">
						저장
					</button>
				</div>
			</div>
			<div className="todoList">
				<ul className="savedList">
					{savedScheduleList.map((item, index) => {
						const year = item.date?.split("-")[0];
						const month = item.date?.split("-")[1];
						const day =
							parseInt(item.date?.split("-")[2].substr(0, 2)) + 1;

						return (
							<li key={index}>
								<div className="contents">
									{" "}
									<p className="date">
										{year}년 {month}월 {day}일
									</p>
									{modifyMode[index] ? (
										<>
											<input
												placeholder={item.title}
												ref={modifyInputTitle}
											/>
											<br />
											<input
												placeholder={item.content}
												ref={modifyInputContent}
											/>
										</>
									) : (
										<span>
											<strong>{item.title}</strong>
											{item.content}
										</span>
									)}
								</div>

								<div className="btnWrap">
									{modifyMode[index] ? (
										<>
											{/* 뒤로가기 버튼 */}
											<button className="back">
												<span
													onClick={() => {
														const copyArr = [
															...modifyMode,
														];
														copyArr[index] = false;
														setModifyMode(copyArr);
													}}>
													뒤로가기
												</span>
											</button>
											{/* 수정 저장하기 버튼 */}
											<button className="save">
												<span
													onClick={() =>
														modifySchedule(item._id)
													}>
													저장
												</span>
											</button>
										</>
									) : (
										<>
											{/* 수정모드로 가기 버튼 */}
											<button className="modify">
												<span
													onClick={() => {
														const copyArr = [
															...modifyMode,
														];
														copyArr[index] = true;

														setModifyMode(copyArr);
													}}>
													수정
												</span>
											</button>
											{/* 삭제하기 버튼 */}
											<button className="delete">
												<span
													onClick={() =>
														deleteSchedule(item._id)
													}>
													삭제
												</span>
											</button>
										</>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
