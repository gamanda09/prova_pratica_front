// Função de validação
function validateForm(event) {
    event.preventDefault(); // Impede o envio do formulário sem validação

    let errors = [];
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const errorMessages = document.getElementById('errorMessages');

    // Limpar mensagem de erro anterior
    errorMessages.innerHTML = '';

    // Verificar se o campo nome está vazio
    if (name === '') {
        errors.push('O nome é obrigatório.');
    }

    // Verificar se o campo e-mail está vazio
    if (email === '') {
        errors.push('O e-mail é obrigatório.');
    }

    // Verificar se o campo mensagem está vazio
    if (message === '') {
        errors.push('A mensagem é obrigatória.');
    }

    // Exibir mensagens de erro, se houver
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        // Caso todos os campos estejam preenchidos
        alert('Formulário enviado com sucesso!');
        // Limpar os campos após envio bem-sucedido
        document.getElementById('contactForm').reset();
    }
}

// Adiciona o evento de submit ao formulário
document.getElementById('contactForm').addEventListener('submit', validateForm);