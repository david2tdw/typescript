async function test() {
    return await Promise.resolve(123)
}

test().then(res => console.log(res))




//tsc --lib es2015 test1.ts

