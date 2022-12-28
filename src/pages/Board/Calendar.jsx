import React, { useState } from "react";

import { MdDeleteOutline } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays } from "date-fns";
import { useRef } from "react";

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
	const inputDate = useRef();
	const inputTitle = useRef();
	const inputContent = useRef();

	// 일정 저장하는 함수
	async function saveTodo() {
		const todoInfo = {
			date: inputDate,
			title: inputTitle,
			content: inputContent,
			creator: localStorage.getItem("name"),
		};

		if (todoInfo.date !== "" && todoInfo.title !== "") {
			const saveResponse = await fetch("endpoint", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("Token"),
				},
				body: JSON.stringify(todoInfo),
			});
			if (saveResponse.status === 201) {
				const result = await saveResponse.json();
				if (result) {
				}
			}
		} else {
			alert("제목을 입력해 주세요.");
		}
	}

	// 일정 불러오는 함수
	async function loadTodo() {}

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
					<button onClick={() => saveTodo()} className="saveBtn">
						저장
					</button>
				</div>
			</div>
			<div className="todoList">
				<ul className="savedList">
					<li>
						<p className="date">2022.12.30</p>
						<div className="contents">
							<h3>일정 제목</h3>

							<p>일정 내용 내용내용낸용내요ㅐ뇨애 장소 등</p>
						</div>

						<div className="btnWrap">
							<span className="creator">작성자이름</span>
							<button className="modify">
								<CiEdit />
							</button>{" "}
							<button className="delete">
								<MdDeleteOutline />
							</button>
						</div>
					</li>
					<li>
						<p className="date">2022.12.30</p>
						<div className="contents">
							<h3>일정 제목</h3>

							<p>일정 내용 내용내용낸용내요ㅐ뇨애 장소 등</p>
						</div>

						<div className="btnWrap">
							<span className="creator">작성자이름</span>
							<button className="modify">
								<CiEdit />
							</button>{" "}
							<button className="delete">
								<MdDeleteOutline />
							</button>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}
