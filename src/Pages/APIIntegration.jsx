import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// -------------------
// Main Component
// -------------------
export default function APIIntegration() {

  const navigate = useNavigate();

  function MovePrev() {
    navigate("/Custom-hooks");
  }

  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [comments, setComments] = useState([]);
  const [dynamicUsers, setDynamicUsers] = useState([]);

  // -------------------
  // Fetch Functions for fixed examples
  // -------------------
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await res.json();
    setPosts(data);
  };

  const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await res.json();
    setTodos(data);
  };

  const fetchComments = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
    const data = await res.json();
    setComments(data);
  };

  // -------------------
  // 5th Example: Dynamic Table
  // -------------------
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDynamicUsers(data);
  };

  return (
    <div className="ur-page">
      {/* Title */}
      <div className="ur-title">
        <h1>🌐 API Integration</h1>
        <p>Fetch and display data from external APIs dynamically</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What is API Integration?</h2>
        <ul>
          <li>Connecting your app with external services</li>
          <li>Fetch or send data using HTTP requests</li>
          <li>Can use fetch, axios, or other HTTP clients</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why use API Integration?</h2>
        <ul>
          <li>Access remote data or services</li>
          <li>Dynamic content without hardcoding</li>
          <li>Enhance interactivity and user experience</li>
        </ul>
      </section>

      {/* Usages */}
      <section className="ur-card">
        <h2>Common Usages</h2>
        <ul>
          <li>Fetching posts, users, comments</li>
          <li>Form submission</li>
          <li>Data dashboards</li>
          <li>Social media feeds</li>
          <li>Live search/autocomplete</li>
        </ul>
      </section>

      {/* Types */}
      <section className="ur-card">
        <h2>Types of API Requests</h2>
        <ul>
          <li>GET - fetch data</li>
          <li>POST - send data</li>
          <li>PUT/PATCH - update data</li>
          <li>DELETE - remove data</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax</h2>
        <pre className="ur-code">
{`// Using fetch
const res = await fetch('https://api.example.com/data');
const data = await res.json();

// Using axios
const { data } = await axios.get('https://api.example.com/data');`}
        </pre>
      </section>

      {/* Real-Time Examples */}
      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Fetch Posts</h3>
        <button className="ur-btn" onClick={fetchPosts}>Load Posts</button>
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
        <pre className="ur-code">
{`const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  setPosts(data.title);
}`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Fetch Todos</h3>
        <button className="ur-btn" onClick={fetchTodos}>Load Todos</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "✅" : "❌"}
            </li>
          ))}
        </ul>
        <pre className="ur-code">
{`const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  setTodos(data.title);
}`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Fetch Comments</h3>
        <button className="ur-btn" onClick={fetchComments}>Load Comments</button>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
        <pre className="ur-code">
{`const fetchComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  setComments(data.title);
}`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Simple Async Message</h3>
        <AsyncMessage />
        <pre className="ur-code">
{`const fetchMessage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  setMessage(data.title);
}`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Dynamic Users Table</h3>
        <button className="ur-btn" onClick={fetchUsers}>Load Users</button>
        
        <pre className="ur-code">

        {dynamicUsers.length > 0 && (
          <table className="api-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {dynamicUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </pre>
        
      </section>
      {/* Navigation */}
      <div className="nav-buttons">
      <button className="nav-btn prev" onClick={MovePrev}>← Previous</button>
    </div>
    </div>
  );
}

// -------------------
// Async Message Component (Example 4)
// -------------------
function AsyncMessage() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    setMessage(data.title);
  };

  return (
    <div>
      <button className="ur-btn" onClick={fetchMessage}>Load Message</button>
      <p>{message}</p>
    </div>
  );
}
