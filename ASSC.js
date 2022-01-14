const arr = ["desk" ,"chair" , "book" , "beaker" ,"pencil" , "calculator" , "clock" , "blackboard"]

const snakeString = (prev ,curr) => prev+"_"+curr

console.log(arr.reduce(snakeString))