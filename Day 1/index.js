// 1. Functions:
    // 1.1. Normal Function:
    function add(a,b) {
        console.log(a+b)
    }
    add (6,9)
    // 1.2. Arrow Function:
    const add2 = (a,b) => {
        console.log(a+b)
    }
    add2 (6,9)
    const showName = (name) => {
        console.log ("Hello"+" "+name)
    }
    showName ("World")
// 2. Arrays
    const thisArray = [1, 2, 3, 4, 5]
    for (let i=0; i<thisArray.length; i++) {
        console.log(thisArray[i])
    }
    // Using JS methods
    // 2.1. map
    const newAr = thisArray.map(item => item*2)
    console.log(newAr)
    const filteredArray = thisArray.filter(item => item < 3)
    console.log(filteredArray)