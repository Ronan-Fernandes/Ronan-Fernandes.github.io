import React from 'react';

const PersonalData = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Nome</label>
        <input name="name" placeholder="Digite seu nome" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Digite seu Email" />
      </div>
      <div>
          <label htmlFor="cpf">CPF</label>
          <input name="cpf" placeholder="Digite seu cpf" />
      </div>
      <div>
        <label htmlFor="end">Endereço</label>
        <input name="end" placeholder="Digite seu endereço" />
      </div>
      <div>
        <label htmlFor="cidade">Cidade</label>
        <input name="cidade" placeholder="Digite sua cidade" />
      </div>
      <div>
        <label htmlFor="estado">Estado</label>
        <input name="estado" placeholder="Digite seu estado" />
      </div>
      <div>
        <label>Moradia</label>
        <input type="radio" id="casa" name="casa" value="Casa" />
        <label htmlFor="casa">Casa</label>
        <input type="radio" id="apto" name="apto" value="apto" />
        <label htmlFor="apto">Apartamento</label>
      </div>
    </form>
  );
}

export default PersonalData;