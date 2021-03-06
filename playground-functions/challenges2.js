// Desafio 10
function techList(listTech, namePerson) {
  if (listTech.length === 0) {
    return 'Vazio!';
  }
  let retorno = [];
  listTech.sort();
  for (let value of listTech) {
    let obj = {
      tech: value,
      name: namePerson,
    };
    retorno.push(obj);
  }
  return retorno;
}

// Desafio 11
function contarRepeticoes(arrNumeros) {
  let numeroRepeticoes = {};
  for (let i = 0; i < arrNumeros.length; i += 1) {
    let numero = arrNumeros[i];
    if (numeroRepeticoes[numero] === undefined) {
      numeroRepeticoes[numero] = 1;
    } else {
      numeroRepeticoes[numero] += 1;
    }
  }
  return numeroRepeticoes;
}

function verficarRepeticaoMaxima(repeticoes) {
  let maxRepeticao = 0;
  for (let key in repeticoes) {
    if (repeticoes[key] > maxRepeticao) {
      maxRepeticao = repeticoes[key];
    }
  }
  return maxRepeticao;
}

function numeroInvalido(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (Number(numbers[i]) < 0 || Number(numbers[i]) > 9) {
      return true;
    }
  }
  return false;
}

function formarNumero(arrPhoneNumbers) {
  let phoneNumber = '('.concat(arrPhoneNumbers[0], arrPhoneNumbers[1], ') ');
  for (let i = 2; i < 7; i += 1) {
    phoneNumber += arrPhoneNumbers[i];
  }
  phoneNumber += '-';
  for (let i = 7; i < 11; i += 1) {
    phoneNumber += arrPhoneNumbers[i];
  }
  return phoneNumber;
}

function generatePhoneNumber(arrPhoneNumbers) {
  if (arrPhoneNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let repeticaoMaxima = verficarRepeticaoMaxima(contarRepeticoes(arrPhoneNumbers));
  if (repeticaoMaxima > 2 || numeroInvalido(arrPhoneNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formarNumero(arrPhoneNumbers);
}

// Desafio 12
function triangleCheckSide(lineA, lineB, lineC) {
  if (lineA >= (lineB + lineC) || lineA <= Math.abs(lineB - lineC)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (!triangleCheckSide(lineA, lineB, lineC) || !triangleCheckSide(lineB, lineA, lineC)
    || !triangleCheckSide(lineC, lineA, lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(bebidas) {
  let quantidades = bebidas.replace(/[^0-9]/g, '');
  let coposDeAgua = 0;
  for (let i = 0; i < quantidades.length; i += 1) {
    coposDeAgua += Number(quantidades[i]);
  }
  if (coposDeAgua <= 1) {
    return String(coposDeAgua).concat(' copo de água');
  }
  return String(coposDeAgua).concat(' copos de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
