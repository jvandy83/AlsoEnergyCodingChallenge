/*****************************************************************************************
 * Part 2
 ****************************************************************************************/
var employees = [
  { first: 'Amanda', last: 'Byron', group: 'Sales' },
  { first: 'Ye', last: 'Xia', group: 'Receiving', nameOrder: 'reverse' },
  { first: 'Miltiades', last: 'Crescens', group: 'Sales' }
  /*...don't foget to account for other entries of the same form, but with different group names.....*/
];

// Part 2 Answer Here
const joinName = (first, last, isReverse) => {
  const name = !isReverse ? `${first} ${last}` : `${last} ${first}`;
  return [{ name }];
};
const isReverse = (obj) => {
  return obj['nameOrder'] && true;
};

const reorder = (arr) => {
  let outer = {};
  arr.forEach((entry) => {
    let fullName = joinName(entry['first'], entry['last'], entry['nameOrder']);
    if (!outer[entry['group']]) {
      outer[entry['group']] = fullName;
    } else {
      outer[entry['group']].push(...fullName);
    }
  });
  return outer;
};

console.log(reorder(employees));

/*****************************************************************************************
 * Bonus
 ****************************************************************************************/

// Bonus Anwser Here
