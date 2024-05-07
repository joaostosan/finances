import { transactions } from "./index.js"
import renderTransaction from "./renderTransaction.js"
import updateBalance from "./updateBalance.js"

export async function saveTransaction(ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)
    const type = document.querySelector('input[type="radio"]:checked').value

    if (id) {
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, amount, type }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)
        document.querySelector('#id').value = ''
    } else {
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({ name, amount, type }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }
    ev.target.reset()
    updateBalance()
}