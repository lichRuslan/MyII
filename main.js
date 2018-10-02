var user  = {
    name : 'Test',
    rating : 0,
    retingEvil : 0,
    activ : true
};
// console.log(user);
var question = {
    question1 : 0,// имели дело с кредитами
    question2 : 1,// у вас есть задолжности
    question3 : 0,//кредиты (не погашонные)
    question4 : 1,//возможность оплатить не погашанный кредит
    question5 : 0,//вы имеите судимость
    question6 : 1,//вы старше 40 лет
    question7 : 0,//вы моложе 25 лет
    question8 : 1,//вы являетесь работающим человеком
    question9 : 0,// ваша работа имеит риски
    question10 : 1,// у вас есть поручитель на время вашего кредита
    question11 : 0,// замужем (женаты)
    question12 : 1,// у вас есть ребёнак
    question13 : 0,// у вас имеится недвижемость
    question14 : 1,// у вас есть транспортное имущество
    question15 : 0,// вы плонируете брать кредит на срок больше года
    question16 : 1,// данный вам кредит будет посивом или активом
};

if (question.question1 === 1){
    user.rating +=1;
    if (question.question2 == 1){
        user.activ = false;
    } 
    else if (question.question2 === 0){
        user.rating +=1;
        if (question.question3 === 1){
            if (question.question4 === 0){
                user.activ = false;
            } 
            else if (question.question4 == 1){
                user.rating +=1;
                ///// идёт на вопрос 5
            }
        } 
    } 
} else
if (question.question5 ===1){
    user.rating -=5;
    user.retingEvil +=1;
} else 
if (question.question5 === 0){
    user.rating +=1;
}
if (question.question6 === 1){
    user.rating -= 2;
} else
if (question.question6 === 0){
    user.rating +=0;
}
if (question.question7 ===1){
    user.rating -=2;
}else
if (question.question7 ===0){
    user.rating += 0;
}
if (question.question8 ===1){
    user.rating+=3;
    if (question.question9 ===1){
        user.rating -= 1;
    }else if(question.question9 ===0){
        user.rating += 1;
    }
}else
if (question.question8 === 0){
    user.rating -=3;
    user.retingEvil -=1;
}
if (question.question10 === 1){
    user.rating +3;
}
else 
if (question.question10 ===0){
    user.rating -=5;
    user.retingEvil -=1;
}
if (question.question11 ==1){
    user.rating +=1;
}
else
if (question.question11===0){
    user.rating +=0;
}
if (question.question12===1){
    user.rating +=1;
}
else 
if (question.question12 === 0){
    user.rating +=0;
}
if (question.question13 === 1){
    user.rating  +=3;
}
else 
if (question.question13 ===0){
    user.rating -=1;
}
if (question.question14 ===1){
    user.rating +=1;
}
else
if (question.question14 ===0){
    user.rating +=0;
}
if (question.question15===1){
    user.rating +=2;
}
else 
if (question.question15 === 0){
    user.rating -=1;
}
if (question.question16 ===1){
    user.rating -=1;
}
else 
if (question.question16 ===1){
    user.rating +=3;
}



var result = {
    otv1 : {
        rating : 5
    },
    otv2 : {
        rating : 2
    },
    otv3 : {
        rating : 3
    }
}
console.log(user);
if (user.rating === result.otv1){
    console.log (result.otv1);
}else
if (user.rating === result.otv2){
    console.log (result.otv2);
}