function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: "Justine",
    age: 20,
};
var isJustineAnAdult = isAdult(justine) ? "Yes, Justine is an adult" : "No, Justine is not and adult";
console.log(isJustineAnAdult);
