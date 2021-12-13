import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");
  let appBody = `
  <div id="main-content">
    <form id="subjectForm"> 
      <div>
        <h2> Alterar assunto para o formato padrão (assunto + data e hora)</h2>
        <input id="subject" type="text" value="${subject}" type="text" placeholder="assunto + data e hora"/>
        <button type="submit">Alterar<button>
      </div>
    </form>
    <div>
      <h3>Listar ultimos tickets</h3>
    </div>
  </div>`;

  // Write App
  App.innerHTML = appBody;
};

export default Main;
