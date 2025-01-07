const express = require (`express`);
const path = require (`path`);
const app = express ()
const PORT = 3000;
app.use(express .static (path.join(__dirname )));
app.get('/' , (req, res)=> {
    res.sendfile(path.join(__dirname , 'index.html'));
})
app.listen(PORT, () => {
    console.log(`server running on http // localhost :${PORT}`);
})
