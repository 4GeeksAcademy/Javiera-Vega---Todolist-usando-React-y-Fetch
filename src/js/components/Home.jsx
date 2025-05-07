import React, { useEffect, useState } from "react";

const urlBase = "https://playground.4geeks.com/todo"

const initialStateTask = {
	label: "",
	is_done: false
}

const Home = () => {

	const [task, setTask] = useState(initialStateTask)

	const [listTask, setListTask] = useState([])


	const handleChange = (event) => {
		setTask({
			...task,
			label: event.target.value,
		})
	}

	const addTask = async (event) => {

		if (event.key == "Enter") {
			try {
				const response = await fetch(`${urlBase}/todos/Javiera`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(task)
				})

				if (response.ok) {
					getAllTask()
					setTask(initialStateTask)
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	const deleteTask = async (id) => {
		try {
			const response = await fetch(`${urlBase}/todos/${id}`, {
				method: "DELETE",
			})
			if (response.ok) {
				getAllTask()
			}
		} catch (error) {
		}
	}

	const createUser = async () => {
		try {
			const response = await fetch(`${urlBase}/users/Javiera`, {
				method: "POST",
			})
			if (response.ok) {
				getAllTask()
			}

		} catch (error) {
		}
	}

	const getAllTask = async () => {
		try {
			const response = await fetch(`${urlBase}/users/Javiera`)
			const data = await response.json()

			if (response.ok) {
				setListTask(data.todos)
			}
			if (response.status == 404) {
				createUser()
			}

		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getAllTask()
	}, [])

	const deleteAllTask = async () => {
		try {
			const response = await fetch(`${urlBase}/users/Javiera`, {
				method: "DELETE",
			})

			if (response.ok) {
				getAllTask()

			} else {
				console.log("error al eliminar")
			}
		} catch (error) {
		}
	}

	return (

		<div className="container">
			<div className="row justify-content-center">
				<h1 className="title text-center">todos</h1>
				<div className="col-6 border border-seconday bg-white box">
					<form className="list-task"
						onSubmit={(event) => event.preventDefault()}>

						<input
							className="form-task col-12"
							type="text"
							placeholder="ingresa tu tarea aquí"
							name="labelname"
							onKeyDown={addTask}
							onChange={handleChange}
							value={task.labelname}
						/>
					</form>
					<ul>
						{
							listTask.map((element) => {
								return (
									<li
										className="added-tasks"
										key={element.id}>{element.label}
										<span>
											<i className="click fa-solid fa-xmark"
												onClick={() => deleteTask(element.id)}
											></i>
										</span>
									</li>
								)
							})
						}
					</ul>
					<p className="text-body text-muted">{`${listTask.length} item left`}
					</p>
				</div>
			</div>
			<div
				className="button-cont">
				<button
					type="button"
					className="btn btn-outline-secondary"
					onClick={() => deleteAllTask(getAllTask)}> Borrar tareas
				</button>
			</div>
		</div>
	)
}

export default Home;
