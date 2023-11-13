//na próxima linha faço um fecth para a API viacep.com.br/ws/json/
//e retorno o resultado dessa busca, que é um JSON com os dados do endereço

//para o usuário, como rua, bairro e cidade
const cepDate = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("Erro na requisição");
    console.log(error);
  }
};

export default cepDate;