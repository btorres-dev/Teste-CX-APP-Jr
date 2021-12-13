import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");

  const ticket = await client.get(["ticket.subject", "ticket.createdAt", "ticket.requester.id"]);
  const createdAt = ticket["ticket.createdAt"];
  const ticketSubject = ticket["ticket.subject"]
  const requesterId = ticket["ticket.requester.id"]

  //formata assunto + data e hora
  const date = Core.formatDate(createdAt);
  const regex = /\(\d{2}(\/?)\d{2}?\1\d{4} \d{2}(\:?)\d{2}(\:?)\d{2}\)/gmi; // formato (dd/mm/aaaa hh:mm:ss)
  const newSubject = ticketSubject.replace(regex, "").trim();
  const subject = `${newSubject}  (${date})`;

  let appBody = `
  <div id="main-content">
    <form id="subjectForm"> 
      <div class="subjectArea">
        <h2 class="subjectTitle"> Alterar assunto para formato padrão:</h2>
        <label class="subjectLabel">Assunto + (dd/mm/aaaa hh:mm:ss)</label>
        <input id="subject" type="text" value="${subject}" type="text" placeholder="assunto + (dd/mm/aaaa hh:mm:ss)"/>
        <span id="error"></span>
        <button class="btnSubject" type="submit">Alterar</button>
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
