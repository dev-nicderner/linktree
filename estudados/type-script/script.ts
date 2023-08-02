// union
// aliases

interface ocupacao {
    trabalho: string,
    local?: string
}

interface pessoa {
    name: string,
    idade: number,
    cidade: string
}

type dados = ocupacao & pessoa

const pessoa: dados = {
    name: 'Pietra',
    idade: 26,
    cidade: 'Florianópolis',
    trabalho: 'Programador',
    local: 'Remoto'
}
