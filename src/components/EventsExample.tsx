import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>("");
	const [isDrag, setDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value);
		console.log(value);
	};
	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("drageed");
	};
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDrag(true);
	};
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDrag(false);
	};
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDrag(false);
		console.log("DROP");
	};

	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={changeHandler}
				placeholder="Управляемый"
			/>
			<input type="text" ref={inputRef} placeholder="Неуправляемый" />{" "}
			{/*Ne Upravlyayemiy input*/}
			<button onClick={clickHandler}>click me</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{ width: 200, height: 200, background: "red", margin: 5 }}
			/>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{
					width: 200,
					height: 200,
					background: isDrag ? "yellow" : "red",
				}}
			/>
		</div>
	);
};

export default EventsExample;
