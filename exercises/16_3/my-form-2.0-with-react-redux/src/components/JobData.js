import React from 'react';

const JobData = () => {
  return (
    <form>
      <div>
        <label>
          Resumo do curriculo:
        </label>
        <textarea value="resumo" />
      </div>
      <div>
        <label>
          Cargo:
        </label>
        <textarea value="cargo" />
      </div>
      <div>
        <label>
          Descrição do cargo:
        </label>
        <textarea value="descrição" />
      </div>
    </form>
  );
}

export default JobData;
