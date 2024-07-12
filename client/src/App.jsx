// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Todo from './components/Todo';
import Secret from './pages/Secret';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    async function getTodos() {
      try {
        const res = await fetch('http://localhost:5000/api/todos');
        if (!res.ok) {
          throw new Error('Failed to fetch todos');
        }
        const todos = await res.json();
        setTodos(todos);
      } catch (error) {
        console.error(error);
      }
    }
    getTodos();
  }, []);

  const createNewTodo = async (e) => {
    e.preventDefault();
    if (content.length > 3) {
      try {
        const res = await fetch('http://localhost:5000/api/todos', {
          method: 'POST',
          body: JSON.stringify({ todo: content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to create todo');
        }
        const newTodo = await res.json();
        setContent('');
        setTodos([...todos, newTodo]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/todos"
          element={
            <main className="container">
              <h1 className="title">Todo List</h1>
              <form className="form" onSubmit={createNewTodo}>
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter a new todo..."
                  className="form__input"
                  required
                />
                <button className="form__button" type="submit">
                  Create Todo
                </button>
              </form>
              <div className="todos">
                {todos.length > 0 &&
                  todos.map((todo) => (
                    <Todo key={todo._id} todo={todo} setTodos={setTodos} />
                  ))}
              </div>
            </main>
          }
        />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </Router>
  );
}
