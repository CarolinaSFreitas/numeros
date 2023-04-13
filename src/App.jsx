import { useState } from 'react'

function App() {
  const [numeros, setNumeros] = useState([])
  const [pares, setPares] = useState([])
  const [impares, setImpares] = useState([])
  const [num, setNum] = useState("")

  function adicionarNumero(e) {
    e.preventDefault()
    // ...numeros: operador Spread (que faz um espalhamento dos elementos do vetor)
    setNumeros([...numeros, num])
    setNum("") //assim faz o input voltar a ser vazio

    //para retirar a mensagem (de pares ou ímpares)
    setPares([])
    setImpares([])
  }

  function verPares() {
    const numPares = []
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 == 0) {
        numPares.push(numeros[i])
      }
    }
    if (numPares.length == 0) {
      alert("Não há pares na lista de números")
    }
    setPares(numPares)
  }

  function verImpares() {
    const numImpares = []
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 == 1) {
        numImpares.push(numeros[i])
      }
    }
    if (numImpares.length == 0) {
      alert("Não há ímpares na lista de números")
    }
    setImpares(numImpares)
    setPares([])
  }


  let resposta = ""
  if(pares.length > 0){
    resposta = <h2>Lista dos Pares: {pares.join(", ")}</h2>
  }else if(impares.length > 0){
    resposta = <h2>Lista dos Ímpares: {impares.join(", ")}</h2>
  }

  return (
    <>
      <h1>Lista de Números</h1>
      <form onSubmit={adicionarNumero}>
        <p>Numero:
          <input type="text" onChange={(e) => setNum(e.target.value)} value={num} />
          <input type="submit" value="Adicionar" />
        </p>

        <p>
          <input type="button" value="Listar Pares" onClick={verPares} />
          <input type="button" value="Listar Impares" onClick={verImpares} />
        </p>
      </form>

      <h2>Números: {numeros.join(", ")}</h2>
      {resposta}
    </>
  )
}

export default App


