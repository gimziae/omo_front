import React, { useEffect, useState } from "react";

import { RiArrowGoBackLine } from "react-icons/ri";
import { MdDeleteOutline, MdSaveAlt } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays } from "date-fns";
import { useRef } from "react";
import { json } from "react-router-dom";

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
	const [modifyMode, setModifyMode] = useState(false);

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
				console.log(json);
				if (json.schedules) {
					setSavedShceduleList(json.schedules);
				} else {
					alert("데이타 로드 실패");
				}
			});
	}, [render]);

	// 일정 저장하는 함수
	async function saveTodo() {
		const todoInput = {
			date: inputDate.current.value,
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
				console.log(saveTodoResult);
				alert("일정 저장 완료");
				setRender(!render);
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
			alert("일정 삭제 완료");
			setRender(!render);
		} else {
			alert("서버 통신 이상");
		}
	}

	// 일정 수정하는 함수
	async function modifySchedule(id) {
		setModifyMode(!modifyMode);
		const modifyContents = {
			title: modifyInputTitle.current.value,
			content: modifyInputContent.current.value,
			date: "수정할 시간",
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
						console.log(item);
						return (
							<li key={index}>
								<p className="date">{item.createdAt}</p>
								<div className="contents">
									{modifyMode ? (
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
										<>
											<h3>{item.title}</h3>
											<p>{item.content}</p>
										</>
									)}
								</div>

								<div className="btnWrap">
									{modifyMode ? (
										<>
											<button className="back">
												{/* onClick={setModifyMode(
														false
													)} */}
												<RiArrowGoBackLine />
											</button>
											<button className="save">
												<MdSaveAlt />
											</button>
										</>
									) : (
										<>
											<button className="modify">
												<CiEdit
													onClick={modifySchedule}
												/>
											</button>{" "}
											<button className="delete">
												<MdDeleteOutline
													onClick={() =>
														deleteSchedule(item._id)
													}
												/>
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
