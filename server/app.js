const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const Task = require('./models/task');
const Member = require('./models/member');

const app = express();

const PORT = 3000;

const dbUri = 'mongodb+srv://eligarlo:Ahn1aUzfdKptNmC5@test-learning-9adnk.mongodb.net/todo-list?retryWrites=true';

mongoose.connect(dbUri, { useCreateIndex: true, useNewUrlParser: true })
.then(() => {
  console.log('Connected to the database!');
})
.catch(() => {
  console.log('Connection failed');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/addTask', (req, res, next) => {
  const task = new Task({
    task: req.body.description,
    member: req.body.member,
    date: req.body.date
  });

  task.save()
  .then(result => {
    res.status(201).json({
      message: 'Task created!',
      result: result
    })
  })
  .catch(error => {
    res.status(500).json({
      message: 'Create task failed!'
    })
  });
});

app.get('/tasks', (req, res, next) => {
  const taskQuery = Task.find({});

  taskQuery
  .then(tasks => {
    res.status(200).json({
      message: 'Tasks fetched successfully!',
      tasks: tasks
    })
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching posts failed!'
    })
  });
});

app.get('/members', (req, res, next) => {
  const memberQuery = Member.find({});

  memberQuery
  .then(members => {
    res.status(200).json({
      message: 'Members fetched successfully!',
      members: members
    })
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching posts failed!'
    })
  });
});

app.listen(PORT);
