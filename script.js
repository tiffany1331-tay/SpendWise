body {
  font-family: Arial, sans-serif;
  background: #f4f6f9;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.container {
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;
  width: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 { margin-top: 0; text-align: center; }

.salary-box {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

.salary-box input { flex: 1; }

.stats {
  background: #f8fafc;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.stats p { margin: 4px 0; color: #475569; }
.stats h3 { margin: 8px 0 0; color: #0f172a; }

.alert {
  background: #fee2e2;
  color: #b91c1c;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 15px;
  border: 1px solid #f87171;
}

.hidden { display: none; }

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, button { padding: 10px; font-size: 14px; }

button {
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-exp { background: #dc2626; }

ul { list-style: none; padding: 0; margin-top: 20px; }

li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
