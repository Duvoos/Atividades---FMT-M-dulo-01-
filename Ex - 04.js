function adicao(num1, num2, Anonimacallback){
    let soma = num1 + num2;
    Anonimacallback(soma);
}

adicao(4,5, (sum)=>{ 
    console.log("O resultado da adição é: "+ sum);
})


