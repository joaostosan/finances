import { transactions } from "./index.js";

export default function updateBalance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => {
        if (transaction.type === 'credit') {
            return sum + transaction.amount;
        } else {
            return sum - transaction.amount;
        }
    }, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}