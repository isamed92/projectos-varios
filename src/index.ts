
export function parentesisValidos(cadena: string): boolean {
  const pila: string[] = [];
  const hashParentesis: any = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let resultado: boolean = true;

  for (let char of cadena) {
    const parentesisCierre = hashParentesis[char];
    if (parentesisCierre) {
      pila.push(parentesisCierre);
    } else {
      const ultimoValorPila = pila.pop();
      if (ultimoValorPila !== char) {
        resultado = false;
        break;
      }
    }
  }
  return resultado;
}

console.log(`parentesisValidos('([]}}])')=${parentesisValidos('([]}}])')}`);
console.log(`parentesisValidos('([]}})')=${parentesisValidos('([]}})')}`);
console.log(`parentesisValidos('([])')=${parentesisValidos('([])')}`);
console.log(`parentesisValidos('()')= ${parentesisValidos('()')}`);
