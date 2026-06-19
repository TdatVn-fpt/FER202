import { useMemo, useState } from 'react';
import './App.css';

const cardItems = [
  {
    title: 'React Components',
    description: 'Break interfaces into small, reusable pieces with their own data.',
    imageUrl:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Clean UI Practice',
    description: 'Compose cards, counters, forms, and lists from focused components.',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Interactive Thinking',
    description: 'Use state to make todo lists, calculators, and filters respond instantly.',
    imageUrl:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
];

const searchItems = [
  'React component',
  'JavaScript ES6',
  'Todo application',
  'Calculator',
  'Search filter',
  'Simple card',
  'Counter state',
  'Props practice',
];

function Section({ eyebrow, title, children }) {
  return (
    <section className="section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function NameMessage({ name, message }) {
  return (
    <div className="profile-card">
      <div className="avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <div>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

function HelloWorld() {
  return <p className="hello-world">Hello, World!</p>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button type="button" onClick={() => setCount((current) => current - 1)}>
        -
      </button>
      <strong>{count}</strong>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        +
      </button>
    </div>
  );
}

function Title({ text }) {
  return <h3>{text}</h3>;
}

function Description({ text }) {
  return <p>{text}</p>;
}

function Image({ url, alt }) {
  return <img src={url} alt={alt} />;
}

function SimpleCard({ item }) {
  return (
    <article className="simple-card">
      <Image url={item.imageUrl} alt={item.title} />
      <div className="simple-card-content">
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </article>
  );
}

function SimpleWebsite() {
  return (
    <div className="website-preview">
      <nav>
        <span>Component Lab</span>
        <a href="#exercise-11">Exercise 11</a>
      </nav>
      <div className="website-hero">
        <div>
          <p>Build reusable React interfaces</p>
          <h3>Small components, clear data, useful pages.</h3>
        </div>
        <button type="button">Start Practice</button>
      </div>
      <div className="website-features">
        <span>Props</span>
        <span>State</span>
        <span>Composition</span>
      </div>
    </div>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState(['Review React components', 'Practice useState']);
  const [todoText, setTodoText] = useState('');

  function addTodo(event) {
    event.preventDefault();
    const nextTodo = todoText.trim();

    if (!nextTodo) {
      return;
    }

    setTodos((currentTodos) => [...currentTodos, nextTodo]);
    setTodoText('');
  }

  function deleteTodo(indexToDelete) {
    setTodos((currentTodos) => currentTodos.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="tool-panel">
      <h3>To-do List</h3>
      <form className="input-row" onSubmit={addTodo}>
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          placeholder="Add a task"
          aria-label="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>
            <span>{todo}</span>
            <button type="button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('+');

  const result = useMemo(() => {
    const a = Number(firstNumber);
    const b = Number(secondNumber);

    if (firstNumber === '' || secondNumber === '') {
      return 'Enter two numbers';
    }

    if (operator === '+') {
      return a + b;
    }

    if (operator === '-') {
      return a - b;
    }

    if (operator === '*') {
      return a * b;
    }

    if (b === 0) {
      return 'Cannot divide by zero';
    }

    return a / b;
  }, [firstNumber, operator, secondNumber]);

  return (
    <div className="tool-panel">
      <h3>Calculator</h3>
      <div className="calculator-grid">
        <input
          type="number"
          value={firstNumber}
          onChange={(event) => setFirstNumber(event.target.value)}
          placeholder="First"
          aria-label="First number"
        />
        <select value={operator} onChange={(event) => setOperator(event.target.value)} aria-label="Operation">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={secondNumber}
          onChange={(event) => setSecondNumber(event.target.value)}
          placeholder="Second"
          aria-label="Second number"
        />
      </div>
      <output className="result">Result: {result}</output>
    </div>
  );
}

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = searchItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="tool-panel">
      <h3>Search Filter</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search lessons"
        aria-label="Search lessons"
      />
      <ul className="search-results">
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">BTVN 2</p>
        <h1>React Component Exercises</h1>
        <p>Exercise 9 and Exercise 11 implemented in one React practice app.</p>
      </header>

      <Section eyebrow="Exercise 9" title="React Component 1">
        <div className="exercise-grid">
          <NameMessage
            name="Nguyen Van A"
            message="I am learning React and practicing how to split a page into reusable components."
          />
          <div className="mini-panel">
            <h3>Hello Component</h3>
            <HelloWorld />
          </div>
          <div className="mini-panel">
            <h3>Counter</h3>
            <Counter />
          </div>
        </div>

        <div className="card-grid">
          {cardItems.map((item) => (
            <SimpleCard key={item.title} item={item} />
          ))}
        </div>

        <SimpleWebsite />
      </Section>

      <Section eyebrow="Exercise 11" title="React Component 2">
        <div id="exercise-11" className="tool-grid">
          <TodoApp />
          <Calculator />
          <SearchFilter />
        </div>
      </Section>
    </main>
  );
}

export default App;
