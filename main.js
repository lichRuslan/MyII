var user  = {
    name : 'Test',
    rating : 0,
    retingEvil : 0,
    activ : true
};
console.log(user);
var question1 = 1;// имели дело с кредитами
var question2 = 1;// у вас есть задолжности
var question3 = 1;//кредиты (не погашонные)
var question4 = 1;//возможность оплатить не погашанный кредит
var question5 = 1;//вы имеите судимость
var question6 = 1;//вы старше 40 лет
var question7 = 1;//вы моложе 25 лет
var question8 = 1;//вы являетесь работающим человеком
var question9 = 1;// ваша работа имеит риски
var question10 = 1;// у вас есть поручитель на время вашего кредита
var question11 = 1;// замужем (женаты)
var question12 = 1;// у вас есть ребёнак
var question13 = 1;// у вас имеится недвижемость
var question14 = 1;// у вас есть транспортное имущество
var question15 = 1;// вы плонируете брать кредит на срок больше года
var question16 = 1;// данный вам кредит будет посивом или активом


if (question1 === 1){
    user.rating +=1;
    if (question2 == 1){
        user.activ = false;
    } 
    else if (question2 === 0){
        user.rating +=1;
        if (question3 === 1){
            if (question4 === 0){
                user.activ = false;
            } 
            else if (question4 == 1){
                user.rating +=1;
                ///// идёт на вопрос 5
            }
        } 
    } 
} else
if (question5 ===1){
    user.rating -=5;
    user.retingEvil +=1;
} else 
if (question5 === 0){
    user.rating +=1;
}
if (question6 === 1){
    user.rating -= 2;
} else
if (question6 === 0){
    user.rating +=0;
}
if (question7 ===1){
    user.rating -=2;
}else
if (question7 ===0){
    user.rating += 0;
}
if (question8 ===1){
    user.rating+=3;
    if (question9 ===1){
        user.rating -= 1;
    }else if(question9 ===0){
        user.rating += 1;
    }
}else
if (question8 === 0){
    user.rating -=3;
    user.retingEvil -=1;
}
if (question10 === 1){
    user.rating +3;
}
else 
if (question10 ===0){
    user.rating -=5;
    user.retingEvil -=1;
}
if (question11 ==1){
    user.rating +=1;
}
else
if (question11===0){
    user.rating +=0;
}
if (question12===1){
    user.rating +=1;
}
else 
if (question12 === 0){
    user.rating +=0;
}
if (question13 === 1){
    user.rating  +=3;
}
else 
if (question13 ===0){
    user.rating -=1;
}
if (question14 ===1){
    user.rating +=1;
}
else
if (question14 ===0){
    user.rating +=0;
}
if (question15===1){
    user.rating +=2;
}
else 
if (question15 === 0){
    user.rating -=1;
}
if (question16 ===1){
    user.rating -=1;
}
else 
if (question16 ===1){
    user.rating +=3;
}


console.log(user);



