
import { useState } from "react"
import BackgroundImage from "./components/Image/backgroundImage"
import mainImage from "./assets/Bitmap.svg"
import darkModeMainImage from "./assets/BitmapDark.svg"
import Input from "./components/Input/Input"
import inputIcon from "./assets/Oval.svg"
import Button from "./components/Buttons/Button"
import Title from "./components/Titles/Title"


function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useState("liteMode");
  const [listBoxCount, setListBoxCount] = useState([]);

  const checkboxline = () => {
    setChecked(!checked)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addTask = (event) => {
    if (event.key === "Enter") {
      setTodo(prev => [...prev, task])
      localStorage.setItem("todos", JSON.stringify(todo))
      setTask("")
      taskCount()
    }
    if (todo.length === "") {
      alert("whrite something")
    }

  }

  const taskCount = () => {
    setListBoxCount((prev) => [...prev, task])
  }

  const deletefunction = (todo) => {
    setTodo((prev) => prev.filter((item) => item !== todo))
    deleteFoo()
  }
  const deleteFoo =(listBoxCount) => {
      setTodo ((prev) => prev.filter((item) => item !== listBoxCount))
  }

  return (
    <>
      <div className={darkMode ? "darkMode" : "liteMode"}>
        <div className="mainContainer">
          <div className="hower">
            <Title className="howerTitle">TODO</Title>

            <Button onclick={toggleDarkMode} className="darkModeButton" />
          </div>

          <div className="mainImageBox">
            <BackgroundImage className="mainImage" imageUrl={!darkMode ? mainImage : darkModeMainImage} />
          </div>


          <div className='imputMainDiv'>
            <BackgroundImage className="placeholderIcon" imageUrl={inputIcon} />
            <Input
              classname="input"
              type="text"
              value={task}
              placeholder="Create a new todo…"
              onkeypress={addTask}

              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <div className="todoListBox">
            {todo.map(item => {
              return (
                <>
                  <div className="todoList">
                    <Input
                      classname="checkBoxInput"
                      type="checkbox"
                      checked={checked}
                      onChange={checkboxline}
                    />
                    <Title className={checked ? "line" : "none"}>{item}</Title>
                    <div className="removeButton">
                      <Button className="deleteButton" onclick={() => deletefunction(item)}></Button>
                    </div>
                  </div>
                </>
              )
            })}

            <div className="end">
              <Title className="titleFirst">{listBoxCount.length}items left</Title>
              <Title className="titleSecound">All</Title>
              <Title className="titleThird">Active</Title>
              <Title className="titleFourth">Completed</Title>
              <Title className="titleFift">Clear Completed</Title>
            </div>


          </div>

        </div>

      </div>
    </>
  )
}

export default App
