# Testes na API de "Harry Potter" com Cypress

## Sobre o projeto

Essa é uma aplicação de testes automatizados em uma API com informações sobre a saga de livros e filmes Harry Potter. Os testes foram aplicados em todos os endpoints da API, cujos resultados são disponibilizados em relatório gerado pelo Allure. 

Além disso, foi desenvolvida uma pipeline no Github Actions para que os testes sejam executados e o relatórios sejam gerados a cada push ou pull request na branch main do repositório.

## Link da API
https://the-one-api.dev/

## Tecnologias utilizadas

- Cypress
- Allure Report
- Github Actions

## Endpoints com testes automatizados

- [GET] Listar todos os personagens (/characters)
- [GET] Obter um personagem específico (/character/{id})
- [GET] Listar os personagens que são estudantes de Hogwarts (/characters/students)
- [GET] Listar todos os personagens que são funcionários de Hogwarts (/characters/staff)
- [GET] Listar todos os personagens de uma casa específica (/characters/houses/{house})
- [GET] Listar todos os feitiços (/spells)

## Relatório gerado
![image](https://github.com/pauloliveiram/hp-cypress/assets/39312072/6cc73424-1ea9-422e-a7ff-5570c3c21efe)

## Como executar os testes

### Pré-requisitos

- Node instalado na máquina
- Java 8 instalado na máquina (Necessário para executar o binário allure)

```bash

# Clonar repositório
git clone https://github.com/pauloliveiram/hp-cypress.git

# Entrar na pasta do projeto
cd hp-cypress

# Instalar dependências especificadas no arquivo package.json 
npm install
	
# Executar os testes e gerar arquivos na pasta allure-results
npm run tests
					
# Gerar os relatórios a partir dos arquivos da pasta allure-results e abrir o browser com os relatórios
npm run allure-report
								
# Caso queira executar os testes e gerar os relatórios novamente, antes é necessário limpar a pasta allure-results com o seguinte comando:
npm run clean:folders					
```

 ### ESLint e Prettier
No projeto foram utilizadas as ferramentas ESLint e Prettier para garantir uma melhor qualidade do código desenvolvido. 
- **ESLint:** é responsável por analisar o código e identificar problemas de acordo com regras pré-estabelecidas
- **Prettier:** é responsável por formatar o código de acordo com regras pré-estabelecidas

```bash

# Executar o ESLint
npx eslint .

# Executar o Prettier
npx prettier . --write
```

# Autor
Paulo Oliveira



