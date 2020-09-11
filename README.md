#APPIUM

Criar uma pasta para trabalhar.
Criar um arquivo na raiz do projeto 'variaveisAmbiente.config.js' com as variáveis que estão dentro dos testes.

## Para iniciar package.json
 $ npm init -y 

## Para instalar webdriverio
 $ npm install webdriverio

## Iniciar o appium em um terminal
 $ appium

## Iniciar emulador em outro terminal
 $ emulator -list-avds
 $ emulator @deviceName

## Verificar com UiAutomator2 o contexto
 $ uiautomatorviewer


## Para executar as suítes de testes
 $ yarn test:integration

## Para executar os testes unitários
 $ yarn test:unit

*Lembrando que a execução de testes unitários é de forma assincrona, portanto podem ocorrer vários erros, minha sugestão é especificar qual teste unitário deseja executar
