function takeNumbers() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

takeNumbers(20, 30, 50, 70, 14, 12, 20);