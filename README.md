Para trabalhar com os projetos que utilizam React primeiro precisamos ter instalado alguns itens na máquina:

Caso você ainda não tenha o VSCode instalado. Link: https://code.visualstudio.com/

Abra o CMD e confira se você já possui o node, npm e yarn instalados.

<img src="/images/image_1.png" width="400">

Caso contrário, podemos utilizar um gerenciador de pacotes chamado [Chocolatey](https://chocolatey.org/) para realizar a instalação dos itens citados.

Para instalar o Chocolatey execute no CMD o seguinte comando:
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command " [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Existem outras maneiras, como por exemplo via PowerShell. Todavia, para a máquina que está autenticada na rede da ArcelorMittal o proxy pode causar alguns problemas.

Outros links com outras opções para a instalação do Chocolatey, caso sejam necessários:
- https://chocolatey.org/install
- https://chocolatey.org/docs/installation#non-administrative-install

---

No momento da instalação do Node e NPM atente-se para instalar a versão LTS (versão mais estável - que possui suporte de longo prazo)

#Node + NPM
```
choco install nodejs-lts
```
Link: https://chocolatey.org/packages/nodejs-lts

#Yarn
```
choco install yarn
```
Link: https://chocolatey.org/packages/yarn

---

Agora basta clonar o repositório do projeto.

Dentro da pasta do projeto, você pode abrir o PowerShell e usar `code .` para abrir o VS Code direto no diretório a ser trabalhado.

<img src="/images/image_2.png" width="400">

Para instalar as dependências dos módulos, execute o comando `yarn`;

Caso durante a instalação das dependências dê uma mensagem de erro informando que é necessário instalar a versão mais recente do Visual Studio com desenvolvimento C++

<img src="/images/image_3.png" width="400">

Execute no PowerShell ou CMD o seguinte comando:
```
npm install --global windows-build-tools
```
Fonte: https://github.com/nodejs/node-gyp#on-windows

Feito isso, tente executar novamente a instalação das dependências.
Pode demorar alguns minutos.
Quando o prompt estiver disponível novamente para digitação, tente subir a aplicação com o comando `yarn start`

<img src="/images/image_4.png" width="400">
