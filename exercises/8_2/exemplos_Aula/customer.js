// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// // exercicio proposto parte I.
// function adicionaChave(objeto, nomeChave, valorChave) {
//     objeto[nomeChave] = valorChave;
//     return objeto;
// }
// let NC = 'novaChave';
// const NV = 'valor nova chave';
// console.log(Object.keys(customer));
// console.log(adicionaChave(customer, NC, NV));
// console.log(Object.keys(customer));

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(i in arrayOfSkills){
      console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);
  