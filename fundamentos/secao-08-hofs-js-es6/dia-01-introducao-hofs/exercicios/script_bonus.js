// Game Actions Simulator

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 80,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };

  const randomNumberInterval = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => randomNumberInterval(15, dragon.strength);

  const warriorDamage = () => {
    const maxDamage = warrior.strength * warrior.weaponDmg;
    return randomNumberInterval(warrior.strength, maxDamage);
  }

  const mageDamage = () => {
    if(mage.mana < 15){
        return {
            mageDamage:'Não possui mana suficiente',
            mageMana: mage.mana
        }
    }
    
    return {
        mageDamage:randomNumberInterval(mage.intelligence, (mage.intelligence * 2)),
        mageMana: mage.mana - 15
    }
  };

  const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (callback) => {
        const currentDamage = callback();

        dragon.healthPoints -= currentDamage;
        warrior.damage = currentDamage;
    },
    
    mageTurn: (callback) => {
        const currentDamage = callback();
        typeof currentDamage.mageDamage !== 'Number' ? dragon.healthPoints -= 0 : dragon.healthPoints -= currentDamage.mageDamage;

        mage.damage = currentDamage.mageDamage;
        mage.mana = currentDamage.mageMana;
    },

    dragonTurn: (callback) => {
        const currentDamage = callback();

        mage.healthPoints -= currentDamage;
        warrior.healthPoints -= currentDamage;
        dragon.damage = currentDamage;
    },

    updateBattleState: () => battleMembers
  };

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.updateBattleState());