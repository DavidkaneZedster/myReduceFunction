const workersSalary = [
    {name: 'David', salary: 35000},
    {name: 'Roman', salary: 50000},
    {name: 'Alexander', salary: 15000},
]

const myReduceFunction = (data, callback, initialValue) => {
  let acc = initialValue;
  for (const item of data) {
    acc = callback(acc, item);
  }
  return acc;
};

const myReduceResult = myReduceFunction(
  workersSalary,
  (acc, worker) => (worker.salary > acc.salary ? worker : acc),
  workersSalary[0],
)
  
const reduceResult = workersSalary.reduce((acc, worker) => worker.salary > acc.salary ? worker : acc)

console.log('myReduceOutputValue = ', myReduceResult, '\n reduceOutputValue =', reduceResult)
