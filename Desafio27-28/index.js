document.getElementById('cep').addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, '')
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta da API do ViaCEP')
                }
                return response.json()
            })
            .then(data => {
               
                if (data.erro) {
                    alert('CEP não encontrado.')
                    clearAddressFields()
                } else {
                    document.getElementById('rua').value = data.logradouro
                    document.getElementById('bairro').value = data.bairro
                    document.getElementById('cidade').value = data.localidade
                    document.getElementById('estado').value = data.uf
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error)
                alert('Erro ao buscar o CEP.')
                clearAddressFields()
            })
    } else {
        alert('CEP inválido. Insira um CEP com 8 dígitos.')
        clearAddressFields()
    }
})

function clearAddressFields() {
    document.getElementById('rua').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
}
