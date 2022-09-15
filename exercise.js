const people = [
  {
    age: 25,
    review: 3,
  },
  {
    age: 27,
    review: 2,
  },
  {
    age: 26,
    review: 1,
  },
  {
    age: 30,
    review: 3,
  },
  {
    age: 42,
    review: 2,
  },
  {
    age: 50,
    review: 1,
  },
  {
    age: 22,
    review: 3,
  },
  {
    age: 17,
    review: 2,
  },
  {
    age: 15,
    review: 1,
  },
  {
    age: 23,
    review: 3,
  },
  {
    age: 19,
    review: 2,
  },
  {
    age: 36,
    review: 1,
  },
];

const average = (people) => {
  let totalAge = 0;

  const justGreatReview = people.filter((person) => {
    if (person.review === 3) {
      return person.age;
    }
  });

  justGreatReview.forEach((person) => {
    totalAge = totalAge + person.age;
  });

  console.log(totalAge / justGreatReview.length);
};

const count = (people) => {
  const justRegularReview = people.filter((person) => {
    if (person.review === 1) {
      return person
    }
  })

  console.log(justRegularReview.length)
};

const percentage = (people) => {
  const justGoodReview = people.filter((person) => {
    if (person.review === 2) {
      return person
    }
  })

  const percentage = ((justGoodReview.length * 100) / people.length)

  console.log(`${percentage}%`)
}

average(people);
count(people);
percentage(people);
