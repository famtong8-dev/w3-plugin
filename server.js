const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/tool', (req, res) => {
  const { command } = req.body;

  exec(command, (err, stdout, stderr) => {
    if (err) return res.json({ error: stderr });
    return res.json({ output: stdout });
  });
});

app.listen(7777, () => console.log('Plugin server running on 7777'));
