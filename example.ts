
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: "Justine",
  age: 20,
};

const isJustineAnAdult: string = isAdult(justine) ? "Yes, Justine is an adult" : "No, Justine is not and adult";

console.log(isJustineAnAdult);
