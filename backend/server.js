const express=require('express');
const app =express();
const PORT=process.env.PORT||4000;



app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.get('/api/test', (req, res) => {
  res.json({ ok: true, data: 'This is a test route' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});