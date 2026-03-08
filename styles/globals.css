/* ---------- Root Colors ---------- */
:root {
  --color-bg-dark: #0f172a;
  --color-bg-light: #f9fafb;
  --color-text-dark: #ffffff;
  --color-text-light: #0f172a;
  --color-accent: #f7931a;
  --color-card-dark: #1e293b;
  --color-card-light: #ffffff;
  --color-card-border-dark: #334155;
  --color-card-border-light: #d1d5db;
}

/* ---------- Global Styles ---------- */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: var(--color-bg-dark);
  color: var(--color-text-dark);
  transition: background-color 0.3s ease, color 0.3s ease;
}

input, button {
  font-family: inherit;
  border-radius: 6px;
  border: none;
  outline: none;
  transition: all 0.3s ease;
}

input {
  padding: 10px 12px;
  margin: 5px 0;
  border: 1px solid #ccc;
}

button {
  padding: 10px 16px;
  background-color: var(--color-accent);
  color: white;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
}

/* ---------- Task Cards ---------- */
.task-card {
  border: 1px solid var(--color-card-border-dark);
  background-color: var(--color-card-dark);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease, border 0.3s ease;
}

.task-card h3 {
  margin-top: 0;
}

.task-card input {
  width: 100%;
  margin-top: 10px;
}

.task-card button {
  margin-top: 10px;
}

/* ---------- Dark / Light Mode ---------- */
body.light {
  background-color: var(--color-bg-light);
  color: var(--color-text-light);
}

body.light .task-card {
  background-color: var(--color-card-light);
  border: 1px solid var(--color-card-border-light);
}

body.light button {
  background-color: var(--color-accent);
  color: white;
}

/* ---------- Toggle Switch ---------- */
.toggle-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.toggle-switch {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.toggle-switch input[type="checkbox"] {
  display: none;
}

.toggle-slider {
  width: 50px;
  height: 24px;
  background-color: #ccc;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.3s;
  margin-left: 10px;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 2px;
  top: 2px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

input[type="checkbox"]:checked + .toggle-slider {
  background-color: var(--color-accent);
}

input[type="checkbox"]:checked + .toggle-slider::before {
  transform: translateX(26px);
}
