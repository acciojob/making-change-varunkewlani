const makeChange = (c) => {
	let user ={
		q: 25,
		d: 10,
		n: 5,
		p, 1
	}
	let arr=[]
	for(let i=0;i<4;i++)
		{
			let count=0;
			while(user.[i]>=c)
			{
				count++
				c-=user.q
			}
			arr.push(count)
		}
	
		return("{ "q":",arr[0],"""d":"",arr[1],""n":",arr[2],"""p":"",arr[3],"}")
	
  // your name here
};

// Do not the change the code below
const c = prompt("Enter c: ")
alert(JSON.stringify(makeChange(c)));
