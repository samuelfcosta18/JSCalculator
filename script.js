function myFunction(event) {
    if (event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3'
        || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7'
        || event.key === '8' || event.key === '9' || event.key === '+' || event.key === '-'
        || event.key === '/' || event.key === '*') {
        document.querySelector("textarea").value += event.key
    }
}
function solve() {
    let x = document.querySelector("textarea").value
    let y = math.evaluate(x)
    document.querySelector("textarea").value = y
}
function dis(val) {
    document.querySelector("textarea").value += val
}
function erase() {
    document.querySelector("textarea").value = ""
}
 