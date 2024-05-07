import { transactions } from "./index.js"
import fetchTransactions from "./fetchTransactions.js"
import updateBalance from "./updateBalance.js"
import renderTransaction from "./renderTransaction.js"

export default async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}