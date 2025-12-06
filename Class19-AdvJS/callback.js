
function sum(n1, n2, app_end_func) {
    console.log("App start!");
    let a = n1;
    let b = n2;
    let c = a + b;
    app_end_func(c);
}

function appEnd(c) {
    console.log("Result: ", c);
    console.log("App end!");
}

sum(10, 20, appEnd);

sum(10, 20, function appEnd(c) {
    console.log("Result: ", c);
    console.log("App end!");
}
);

sum(10, 20, function (c) {
    console.log("Result: ", c);
    console.log("App end!");
}
);

sum(10, 20, (c) => {
    console.log("Result: ", c);
    console.log("App end!");
});