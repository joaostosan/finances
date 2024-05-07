import { transactions } from "./index.js"

export function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

export function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

export function createTransactionAmount(amount, transactionType) {
    const span = document.createElement('span')
    span.classList.add('transaction-amount')
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    })

    const formatedAmount = formater.format(amount)

    if (transactionType === 'credit') {
        span.textContent = `${formatedAmount} C`
        span.classList.add('credit')
        span.value = 'credit'
    } else {
        span.textContent = `-${formatedAmount} D`
        span.classList.add('debit')
        span.value = 'debit'
    }
    return span
}

export function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
}

export function createDeleteTransactionButton(transaction) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${transaction.id}`, { method: 'DELETE' })
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })
    return deleteBtn
}