
const p = new Promise((resolve, reject) => {if (Math.random()> 0.5) resolve('yay'), reject('no') });
const c = new Promise((resolve, reject) => {if (Math.random() > 0.5) resolve('yay2'), reject('no2') });



p.then(console.log);
p.catch( console.log("erro"))


c.then(console.log);
c.catch(console.log("er"))