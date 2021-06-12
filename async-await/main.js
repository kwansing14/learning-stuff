import './style.css';

const LoadData = async () => {
  try {
    const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
    const url2 = `https://jsonplaceholder.typicode.com/todos/3`;
    const url3 = `https://jsonplaceholder.typicode.com/todos/2`;

    const results = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
    const dataResponses = results.map((result) => result.json());
    const finalData = await Promise.all(dataResponses);

    console.log('finalData', finalData);
    console.log('results', results);
  } catch (err) {
    console.error(err);
  }
};

LoadData().then((data) => console.log(data));

document.querySelector('#app').innerHTML = `
  <h1>Async Await test, everything in console log!</h1>
`;
