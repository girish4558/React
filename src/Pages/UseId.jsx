import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UseId() {
  const navigate = useNavigate()
  const nameId = useId();
  const emailId = useId();
  const checkboxId = useId();
  const passwordId = useId();
  const listId = useId();

  const [show, setShow] = useState(false);

  return (
    <div className="ur-page">
      <div className="ur-title">
        <h1>🆔 useId Hook</h1>
        <p>Generate unique IDs safely for accessibility and forms</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What is useId?</h2>
        <ul>
          <li><strong>useId</strong> is a React Hook to generate unique IDs</li>
          <li>Helps avoid ID conflicts</li>
          <li>Mainly used for accessibility (labels & inputs)</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why useId?</h2>
        <ul>
          <li>Ensures unique IDs across components</li>
          <li>Prevents hydration issues</li>
          <li>Improves accessibility</li>
        </ul>
      </section>

      {/* Import */}
      <section className="ur-card">
        <h2>Importing useId</h2>
        <pre className="ur-code">
{`import { useId } from "react";`}
        </pre>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax</h2>
        <pre className="ur-code">
{`const id = useId();`}
        </pre>
      </section>

      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Form Input with Label</h3>
        <label htmlFor={nameId}>Name</label>
        <input id={nameId} className="ur-input" placeholder="Enter name" />

        <pre className="ur-code">
{`const id = useId();

<label htmlFor={id}>Name</label>
<input id={id} />`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Multiple Form Fields</h3>

        <label htmlFor={emailId}>Email</label>
        <input id={emailId} className="ur-input" />

        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} className="ur-input" type="password" />

        <pre className="ur-code">
{`const emailId = useId();
const passwordId = useId();`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Checkbox Accessibility</h3>
        <input type="checkbox" id={checkboxId} />
        <label htmlFor={checkboxId}>Accept Terms</label>

        <pre className="ur-code">
{`const checkboxId = useId();`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Conditional Rendering with useId</h3>
        <button className="ur-btn" onClick={() => setShow(!show)}>
          Toggle Field
        </button>

        {show && (
          <>
            <label htmlFor={listId}>Hidden Input</label>
            <input id={listId} className="ur-input" />
          </>
        )}

        <pre className="ur-code">
{`{show && <input id={useId()} />}`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ useId with List Items</h3>
        <ul>
          {["Apple", "Banana", "Orange"].map((item, i) => (
            <li key={`${listId}-${i}`}>{item}</li>
          ))}
        </ul>

        <pre className="ur-code">
{`const listId = useId();

key={\`\${listId}-\${index}\`}`}
        </pre>
      </section>

      {/* Navigation */}
      <div className="nav-buttons">
        <button className="nav-btn prev" onClick={() => navigate("/hooks/use-reducer")}>← Previous</button>
        <button className="nav-btn next" onClick={() => navigate("/lists")}>Next →</button>
      </div>
    </div>
  );
}
