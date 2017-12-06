let someArray = [1, 'string', false]

for (let i of someArray) {
  console.log(i)
}

console.log('-----------------------')


for (let i in someArray) {
  console.log(i)
}