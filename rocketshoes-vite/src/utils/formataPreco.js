const FormataPreco = (preco) => {
   // return `R$ ${preco.toFixed(2).toString().replace('.', ',')}`
   return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
}

export default FormataPreco