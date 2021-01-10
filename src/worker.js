const { MultiWorker, Scheduler, Queue } = require('node-resque');

async function start() {
  const connectionDetails = {
    pkg: "ioredis",
    host: "127.0.0.1",
    password: null,
    port: 6379,
    database: 0,
    // namespace: 'resque',
    // looping: true,
    // options: {password: 'abc'},
  };

  const jobs = {
    add : {
      perform: () => {
        console.log('job');
      }
    }
  }

  const multiWorker = new MultiWorker(
    {
      connection: connectionDetails,
      queues: ["math"],
      minTaskProcessors: 1,
      maxTaskProcessors: 100,
      checkTimeout: 1000,
      maxEventLoopDelay: 10,
    },
    jobs
  );

  const scheduler = new Scheduler({ connection: connectionDetails });

  


  multiWorker.start();

  await scheduler.connect();
  scheduler.start();
}

start();