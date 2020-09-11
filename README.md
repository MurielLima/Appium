
# APPIUM

- Criar uma pasta para trabalhar.
- Adicionar as variáveis de ambiente que serão utilizadas dentro dos testes no arquivo 'variaveisAmbiente.config.js'.

## Para iniciar o projeto
> $ npm install

## Iniciar o appium em um terminal
> $ appium

## Iniciar emulador em outro terminal
> $ emulator -list-avds
> $ emulator @deviceName

## Iniciar o UiAutomator2 em outro terminal
> Serve para verificar contexto na criação dos testes
> $ uiautomatorviewer


## Para executar as suítes de testes
 >$ yarn test:integration

## Para executar os testes unitários
> $ yarn test:unit

>**Nota:** Lembrando que a execução de testes unitários é de forma assincrona, portanto podem ocorrer vários erros, minha sugestão é especificar qual teste unitário deseja executar
