import { createDeleteTransactionButton, createEditTransactionBtn, createTransactionAmount, createTransactionContainer, createTransactionTitle } from "./createTransaction.js"

export default function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount, transaction.type)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionButton(transaction)

    container.append(title, amount, editBtn, deleteBtn)
    document.querySelector('#transactions').append(container)
}