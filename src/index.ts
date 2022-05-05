
export function parentesisValidos(cadena: string): boolean {
  const pila: string[] = [];
  const hashParentesis: any = {
    '(':')',
    '{':'}',
    '[':']',
  };

  let resultado: boolean = true;

  for (let char of cadena) {
    const parentesisCierre = hashParentesis[char];
    if (hashParentesis[char]) {
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
console.log('\t\t\t\t\t Esperado \t Resultado');   
console.log(`prueba de parentesisValidos('([]}}])'):    false \t  ${parentesisValidos('([]}}])')}`);
console.log(`prueba de parentesisValidos('([]}})'):     false \t  ${parentesisValidos('([]}})')}`);
console.log(`prueba de parentesisValidos('{{}}'):       true \t  ${parentesisValidos('{{}}')}`);
console.log(`prueba de parentesisValidos('([])'):       true \t  ${parentesisValidos('([])')}`);
console.log(`prueba de parentesisValidos('( )'):         true \t  ${parentesisValidos('()')}`);
