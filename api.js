const bills = {
  type: 'account',
    uuid: '4ee873e8-9cdf-4937-891a-3ff10d5ddb89',
      bills:
  [{
    type: 'bill',
    statement_date: '2019-07-19',
    amount: 'MzQuMA==\n'
  },
  {
    type: 'bill',
    statement_date: '2019-08-19',
    amount: 'JDY4LjE=\n'
  },
  {
    type: 'bill',
    statement_date: '2019-09-19',
    amount: 'ODQuMg==\n'
  },
  {
    type: 'bill',
    statement_date: '2019-10-19',
    amount: 'JDgzLjM=\n'
  }]
}

const postApi = async () => {
  let url = "https://deudas.herokuapp.com/accounts";
  let data = {
    name: "Manju Thomas",
    email: "manju.thomas083@gmail.com"
  }
  let params = {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    method: "POST"
  }
  let response = await fetch(url, params);
  let bills = await response.json();
  console.log(bills);
  return bills;
}

const putApi = async (uuid, calcAverage) => {
  let url = `https://deudas.herokuapp.com/accounts/${uuid}`
  let data = {
    average: calcAverage
  }

  let params = {
    body: data,
    method: "PUT"
  }
  let response = await fetch(url, params);
  let result = await response.json();
  console.log(result)
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

const loadJson = async (url) => {
  let response = await fetch(url);

  if(response.status === 200) {
    let json = await response.json();
    return json;
  }

  return new Error(response.status);

} 

function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

const demoGithubUser = async () => {
  let name = prompt("Enter a name?", "iliakan");

  let response = await loadJson(`https://api.github.com/users/${name}`);
}