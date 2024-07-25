const makeChange = (c) => {
	/*
	let user ={
		0: ['q', 25],
		1: ['d', 10],
		2: ['n', 5],
		3: ['p', 1]
	}
	let arr=[]
	for(let i=0;i<4;i++)
		{
			let count=0;
			while(user[i][1]<=c)
			{
				count++
				c-=user[i][1]
			}
			arr.push(count)
		}
	
		return { "q": arr[0], "d": arr[1], "n": arr[2], "p": arr[3] }
	*/
  // your name here
}
let user ={
	    q: 25, // Quarter value
        d: 10, // Dime value
        n: 5,  // Nickel value
        p: 1   // Penny value
    };

    let result = {
		q: 25, // Quarter value
        d: 10, // Dime value
        n: 5,  // Nickel value
        p: 1
	};

    // Calculate number of quarters
    result.q = Math.floor(c / user.q);
    c %= user.q; // Update remaining cents

    // Calculate number of dimes
    result.d = Math.floor(c / user.d);
    c %= user.d; // Update remaining cents

    // Calculate number of nickels
    result.n = Math.floor(c / user.n);
    c %= user.n; // Update remaining cents

    // Calculate number of pennies
    result.p = c;
	return { "q": result.q, "d": result.d, "n": result.n, "p": result.p }
}
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
