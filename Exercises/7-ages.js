'use strict';

const ages = (persons) => {
  const life = {};
  for (const name in persons) {
    const age = persons[name].died - persons[name].born;
    life[name] = age;
  }
  return life;
};

module.exports = { ages };
