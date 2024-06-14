const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));


let tasks = [
    {
        id: uuidv4(),
        title: "Workout Routine",
        description: "Mon- Push, Tue- Pull, Wed- Legs (Repeat it again)"
    },
    {
        id: uuidv4(),
        title: "Goal for next 6 months",
        description: "Practice DSA, Learn Development new concepts, Practice Deployment and CICD Pipleine"
    },
];

app.get('/tasks', (req, res) => {
    res.status(200).render("index.ejs", {tasks});
});

app.get('/tasks/new', (req, res) =>{
    res.status(200).render("new-task.ejs")
});

app.post('/tasks', (req, res) => {
    let { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).render("missing-data.ejs");
    }
    let id = uuidv4();
    tasks.push({id, title, description});
    res.redirect("/tasks");
});

app.get('/tasks/:id', (req, res) => {
    let {id} = req.params;
    let task = tasks.find((t) => id === t.id);
    res.status(200).render("display.ejs", {task});
});

app.put('/tasks/:id', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let {id} = req.params;
    if (!title || !description) {
        return res.status(400).render("missing-data.ejs");
    }
    let task = tasks.find((t) => id === t.id)
    task.title = title;
    task.description = description;
    res.redirect("/tasks")
});

app.get('/tasks/:id/edit', (req, res) =>{
    let {id} = req.params;
    let task = tasks.find((t) => id === t.id)
    res.status(200).render("edit.ejs", {task});
});


app.delete('/tasks/:id', (req, res) => {
    let {id} = req.params;
    tasks = tasks.filter((t) => id !== t.id)
    res.redirect("/tasks")

});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/tasks`);
});
