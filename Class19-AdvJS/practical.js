
function MyMap(arr, callback) {
    let new_arr = [];
    for (const element of arr) {
        let res = callback(element);
        new_arr.push(res);
    }

    return new_arr;
}



let arr = [2, 3, 4, 5, 6, 7];
let double_with_map = arr.map((ele) => ele * 2);
console.log("double_with_map ", double_with_map);


let double_with_my_map = MyMap(arr, (ele) => ele * 2);
console.log("double_with_my_map ", double_with_my_map);
