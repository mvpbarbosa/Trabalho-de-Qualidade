# Trabalho Final de Qualidade e Teste de Software

## Tema
Cálculos de Notas Escolares (média aritmética, média ponderada, maior nota, menor nota).

## Stack
- Linguagem: TypeScript
- Frameworks: Express, Vitest
- Teste de carga: Artillery (substituindo JMeter)
- Empacotamento: TypeScript + tsx

## Operações
1. **Média aritmética**
   - Entrada: lista `grades`
   - Cálculo: soma(grades)/n
   - Saída: `{ result: number }`
2. **Média ponderada**
   - Entrada: listas `grades`, `weights` (mesmo tamanho)
   - Cálculo: soma(gradeᵢ * weightᵢ)/soma(weights)
   - Saída: `{ result: number }`
3. **Maior nota**
   - Entrada: `grades`
   - Cálculo: `max(grades)`
   - Saída: `{ result: number }`
4. **Menor nota**
   - Entrada: `grades`
   - Cálculo: `min(grades)`
   - Saída: `{ result: number }`

## Como executar
1. `npm install`
2. `npm run dev` para desenvolvimento ou `npm run build && npm start` para produção.
3. Testes unitários: `npm test`
4. Teste de carga (requer Artillery instalado via npm): `npm run load:test`

## Endpoints (base `http://localhost:3000/api`)
- `POST /grades/average`  
  Body: `{ "grades": [8, 7, 9] }`
- `POST /grades/weighted-average`  
  Body: `{ "grades": [8, 6, 10], "weights": [1, 2, 3] }`
- `POST /grades/highest`  
  Body: `{ "grades": [5, 9.5, 7] }`
- `POST /grades/lowest`  
  Body: `{ "grades": [5, 9.5, 7] }`

Todas as respostas seguem o formato `{ "result": number }` ou `{ "error": string }` em caso de validação.

## Teste de carga
O arquivo `artillery/grades-load-test.yml` executa 50 requisições por segundo durante 30s cobrindo todos os endpoints. Comando: `npm run load:test`. Gere relatórios com `artillery run --output artillery-report.json ...` se necessário.

## Entregáveis
- GitHub: `https://github.com/mvpbarbosa/Trabalho-de-Qualidade.git`
- YouTube: `em breve...`

## Uso de IA
Projeto implementado com auxílio do GitHub Copilot (GPT-5.1-Codex (Preview)) para acelerar a prototipação, mantendo revisão manual completa.
