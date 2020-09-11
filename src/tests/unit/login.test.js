const wdio = require("webdriverio");
const opts = require("../../../wdio.config");
const variaveisAmbiente = require("../../../variaveisAmbiente.config");
let client;
const login = () =>
  describe("Deve ser possível o usuário realizar o login", () => {
    it("Deve ser possível preencher os dados de login", async () => {
      client = await wdio.remote(opts);
      await client.pause(15000);

      const usuario = await client.$(
        await client.findElement(
          "xpath",
          "//*[@resource-id='usuario']//*[@class='android.widget.EditText']"
        )
      );

      const senha = await client.$(
        await client.findElement(
          "xpath",
          "//*[@resource-id='senha']//*[@class='android.widget.EditText']"
        )
      );

      await usuario.setValue(variaveisAmbiente.nomeUsuario);
      await senha.setValue(variaveisAmbiente.senhaUsuario);
      const usuarioText = await usuario.getText();
      expect(usuarioText).toBe(variaveisAmbiente.nomeUsuario);
    }, 100000);

    it("Deve ser possível o usuário configurar o ambiente", async () => {
      const configurarAmbiente = await client.$(
        await client.findElement("xpath", "//*[@text='Configurar ambiente']")
      );

      await configurarAmbiente.click();
      await client.pause(2000);
      const urlClick = await client.$(
        await client.findElement(
          "xpath",
          "//*[@class='android.app.Dialog']//*[@class='android.widget.Button']"
        )
      );

      await urlClick.click();
      await client.pause(2000);
      const urlAmbiente = await client.$(
        await client.findElement("xpath", "//*[@resource-id='alert-input-0-0']")
      );
      await client.pause(2000);
      urlAmbiente.setValue(variaveisAmbiente.URLAmbiente);
      await client.pause(2000);
      const ambiente = await urlAmbiente.getText();

      expect(ambiente).toBe(variaveisAmbiente.URLAmbiente);

      const salvarAmbiente = await client.$(
        await client.findElement(
          "xpath",
          "//*[@class='android.app.Dialog']//*[@class='android.view.View']//*[@class='android.widget.Button'][2]"
        )
      );

      salvarAmbiente.click();
    }, 100000);

    it("Deve ser possível o usuário clicar no botão entrar do sistema", async () => {
      const entrar = await client.$(
        await client.findElement("xpath", "//*[@class='android.widget.Button']")
      );
      await entrar.click();
      await client.deleteSession();
    }, 100000);
  });
  login();
module.exports = login;