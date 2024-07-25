const makeChange = (c) => {
	let user ={
		0: [q, 25],
		1: [d, 10],
		2: [n, 5],
		3: [p, 1]
	}
	let arr=[]
	for(let i=0;i<4;i++)
		{
			let count=0;
			while(user[i][1]<=c)
			{
				count++
				c-=user.[i][1]
			}
			arr.push(count)
		}
	
		return { "q": arr[0], "d": arr[1], "n": arr[2], "p": arr[3] }
	
  // your name here
};

// Do not the change the code below
const c = prompt("Enter c: ")
alert(JSON.stringify(makeChange(c)));
