function plusMinus(arr = [-4, 3, -9, 0, 4, 1,]) {
    let len = arr.length;
    let values = [0, 0, 0];

    for (let element of arr) element > 0 ? values[0] += 1 : (element < 0 ? values[1] += 1 : values[2] += 1);
    console.log(`${values[0]/len}\n${values[1]/len}\n${values[2]/len}`);
}

plusMinus();
