n = 100;

for (i = 1; i <= n; i++) {

    if (i % 3 == 0 && i % 5 == 0) { // i%3 & i%5 = "FizzBuzz"
        console.log("FizzBuzz");
    } else if (i % 3 == 0) { // i%3 = "Fizz"
        console.log("Fizz");
    } else if (i % 5 == 0) { // i%5 = "Buzz"
        console.log("Buzz");
    } else {
        console.log(i);
    }

}