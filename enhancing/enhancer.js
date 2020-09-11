module.exports = {
  success,
  fail,
  repair,
};


function success(item) {
  const newEnhancementLvl = item.enhancement < 20 ? item.enhancement + 1 : 20
  return { ...item, enhancement: newEnhancementLvl }
}

function fail(item) {
 
  let newDurability = item.durability - 1 // set the base case(numbers greater than 16)
  if (item.enhancement < 15) {
    newDurability = item.durability - 5
  } // first check and reassignment
  else if (item.enhancement === 15 || item.enhancement === 16) {
    newDurability = item.durability - 10
  } // second check and reassignment

  return { ...item, durability: newDurability }
}

//restores durability back to 100
function repair(item) {
  return { ...item, durability: 100 }
}


