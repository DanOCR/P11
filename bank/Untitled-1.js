// Route api necessaire : Get user/{accountId}/transactions

/*
    route de l'endpoint
    auth
    parametres
    donnees retourner
    code si ok et si erreur

*/

class transaction{
    id = string | number
    date = string
    description = string
    amount = number
    balance = number
    transactionType = string
    category = string
    note = string
}

class transactions {
    acountId = string | number
    amout = number
    name = string
    transactions = [transaction]
}