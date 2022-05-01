// Task format
//task[0]
//  "taskTitle" = ""
//  "taskCategory" = ""
//  "taskCompletionStatus" = False
//  "taskDateTime"
//  "taskDescription" //can be null


exports.getDailyTasks = (req, res, next) => { // gets all page data and users tasks
    //return res.status(422).send({
      return res.send({
      path: '/daily-tasks',
      pageTitle: 'Daily Tasks',
      date: 'date here',
      task: 'array of tasks', // has name and category color - Sam
    });
  };
  
  exports.postAddNewTask = (req, res, next) => { // Creates a new task
    console.log('asdf');
    const taskTitle = req.body.taskTitle;
    const taskCategory = req.body.taskCategory;
    const taskCompletionStatus = False;
    const taskDateTime = req.body.taskDateTime;
    const taskDescription = req.body.taskDescription; 

    // Using info above... submit changes to database (validation / sanitize was preformed in route section)
    
    res.status(201).json({ // status 201 = success, resource created
      message: `Post: ${taskTitle} was created sucessfully.`
    });

    res.redirect('/test123');
  };

  exports.postDeleteTask = (req, res, next) => {
    res.redirect('/test234');
  };

  exports.postEditTask = (req, res, next) => {
    console.log('edit-task')
    res.redirect('/test345');
  };