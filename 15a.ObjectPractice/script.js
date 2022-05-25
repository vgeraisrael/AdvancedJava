"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let res = `I am ${plan.age} years old and I know such languages as: `;
        plan.skills.languages.forEach(item => res += item + ", ");
        return res;
    }
};

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let res = '';
    for (const [langKey, langValue] of Object.entries(plan.skills.programmingLangs)) {
        res += " Skill of " + langKey + " is " + langValue;
    }
    return res;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));