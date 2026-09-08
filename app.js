app.js


function calculartotal (itens) {
    let total = 0;

    for (let i = 0; i < itens.length; i++) {
        total += itens[i].preco * itens[i].quantidade 
    }
    
} // aplica desconto de fidelidade
// antes de retornar o valor final

return total;