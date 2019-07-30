var a = [1, 2, 3];
var b = [2, 3, 4, 5];

// var f = (arr1, arr2) => {
//     [...arr1, ...arr2].filter(x => {
//         console.log(! (arr1.includes(x) && arr2.includes(x)));
//     })
// }


console.log(
    a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)))
);


arr.reduce(function(param1, param2) {
    //param1 = cái tham số em truyền ở dưới như trong đoạn code này là [] 
    // vì reduce nó cũng như vòng lặp nên nó sẽ duyệt từng phần tử trong mảng > giờ thì cứ 
    // qua mỗi vòng lặp em nối param1.concat(param2);
    // param2 = tương trưng cho các phần tử được chạy trong vòng for 

}, [])
// cái truyền sau dâu ',' em có thể cho nó là số , mảng hoặc object ... ở đây vì mình muốn kết quả cuối cùng là mảng nên cho ts là []


