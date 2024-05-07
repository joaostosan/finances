import { saveTransaction } from "./eventHandlers.js"
import setup from "./setup.js"

export const transactions = []

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)