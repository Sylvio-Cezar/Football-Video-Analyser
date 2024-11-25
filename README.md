# Football Video Analyser: Analisando Vídeos de Futebol com Machine Learning

O projeto **Football Video Analyser** é um modelo de aprendizado de máquina desenvolvido para analisar vídeos de jogos de futebol. O objetivo é identificar e classificar eventos importantes, como gols, passes, faltas e a movimentação dos jogadores, em tempo real.

### Funcionamento:

A ideia central do **Football Video Analyser** é usar **redes neurais convolucionais (CNNs)** e **técnicas de visão computacional** para detectar e rastrear jogadores, a bola e árbitros durante uma partida de futebol. O modelo é capaz de prever a posição dos jogadores, acompanhar sua velocidade e distância percorrida, além de identificar quando um jogador está em posse da bola.

- **Entrada**: Vídeos de partidas de futebol.
- **Processamento**: Utiliza o modelo YOLOv8, ajustado com um conjunto de dados de detecção de jogadores e bola, para identificar e rastrear objetos e ações específicas nos vídeos.
- **Saída**: O sistema gera um vídeo de saída com os eventos detectados, incluindo marcações de posição de jogadores, controle de bola e movimentação da câmera.

### Funcionalidades:

- Detecta jogadores, bola e árbitros.
- Identifica o jogador em posse da bola.
- Exibe o controle da bola de cada time.
- Exibe a movimentação da câmera.
- Prediz a posição dos jogadores.
- Exibe o ID dos jogadores, velocidade e distância percorrida.

### Tecnologias Utilizadas:

- Python
- OpenCV
- TensorFlow / Keras
- YOLOv8 (ultralytics)
- K-Means (sklearn)
- Roboflow Dataset
- pandas, numpy, matplotlib

### Como Usar:

1. Clone o repositório:
   ```bash
   git clone https://github.com/kmAyush/Football_video_analyser.git
   ```
2. Crie uma pasta chamada "models" e faça o download do [modelo ajustado](https://huggingface.co/Ayushkm10/Football_video_analyser/blob/main/best.pt), salvando-o dentro dessa pasta.
3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
4. Execute o código:
   ```bash
   python3 main.py
   ```

5. **[Opcional]**: Você pode fornecer seu próprio arquivo de vídeo com o comando:
   ```bash
   python3 main.py -f "input/{{seu arquivo em formato .mp4}}"
   ```

### Metodologia:

O modelo foi ajustado a partir do YOLOv8 para detectar jogadores, bola e árbitros com precisão. Para o rastreamento de jogadores e bola, são utilizadas técnicas como **K-means clustering** e interpolação de dados para um rastreamento mais suave.

- **Preparação dos Dados**: O modelo foi fine-tuned usando um conjunto de dados de detecção de jogadores de futebol (612 imagens).
- **Rastreamento de Dados**: A cor da equipe é predita utilizando K-means, e o rastreamento dos jogadores é feito com base na distância entre jogadores e a bola.
- **Fluxo Óptico**: A movimentação da câmera é analisada utilizando o **cv2 optical flow**, para ajustar a posição dos jogadores com base no movimento da câmera.

### Modelos e Ferramentas Utilizadas:

- **Modelo Utilizado**: YOLOv8 (fine-tuned).
- **Dataset Usado**: Football player detection Image dataset (612 imagens).
- **Ferramentas**:
  - YOLOv8 (ultralytics)
  - Roboflow dataset
  - OpenCV
  - sklearn K-Means
  - pandas, numpy, matplotlib

### Limitações do Modelo Atual:

- O modelo ainda tem dificuldades em prever a posição dos goleiros e árbitros.
- Em casos de sobreposição da bola com os jogadores, pode ocorrer erro na identificação do jogador ativo.
- O modelo atribui um novo ID ao jogador quando ele sai e retorna ao quadro.

### Melhorias Futuras Previstas:

- Adicionar a posição do jogador no campo em formato de retângulo no HUD.
- Melhorar a previsão de goleiros utilizando uma técnica de rejeição baseada no lado do campo.
- Melhorar a representação e visualização dos dados.
