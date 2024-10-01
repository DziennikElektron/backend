const express = require('express');

const app = express();

app.get('/api/student', function (req, res) {
    res.send('Elektron Dziennik API');
});

app.listen(process.env.PORT || 3000, () => { console.log('Server is running') });