const app = require('./app')
const { multiWorker, scheduler, queue } = require('./services/resque');
const port = process.env.PORT

app.listen(port, async () => {
    multiWorker.start();

    await scheduler.connect();
    scheduler.start();

    await queue.connect();

    console.log('Server is up on port ' + port)
})