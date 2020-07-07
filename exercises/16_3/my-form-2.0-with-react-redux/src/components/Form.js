import React from 'react';

function Form() {

    return (
      <div>
        <form>
            <legend>Dados pessoais</legend>
            <label for="name">Nome</label>
            <input type="text" id="nome" name="nome" maxlength="40" required />
            <label for="e-mail">Email</label>
            <input type="text" id="e-mail" name="e-mail" maxlength="50" required />
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" maxlength="11" required />
            <label for="endereco">Endereço</label>
            <input type="text" id="endereco" name="endereco" maxlength="200" required />
            <label for="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" maxlength="28" required />
            <br />
            <label for="estado">Estado</label>
            <select name="estado" id="estado" required>
              <option value="select">Select</option>
            </select>
            <label>Moradia</label>
            <input type="radio" id="home" name="home-type" value="casa" required />
            <label for="home">Casa</label>
            <input type="radio" id="ap" name="home-type" value="ap" required />
            <label for="ap">Apartamento</label>

            <legend>Dados último emprego</legend>
            <p>Resumo do currículo</p>
            <textarea name="resumo" id="resumo" cols="160" rows="10" maxlength="1000" required></textarea>
            <label for="cargo">Cargo</label>
            <input type="text" id="cargo" name="cargo" maxlength="40" required />
            <label for="description">Descrição do cargo</label>
            <input type="text" id="description" name="descricao" maxlength="500" required />
            <label for="date">Data de início</label>
            <input type="text" id="date" name="date" pattern="^\d{1,2}\/\d{1,2}\/\d{4}" required />
          
          <button id="submit" type="submit">submit</button>
        </form>
      </div>
    );
}

export default Form;
