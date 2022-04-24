require("dotenv").config();
const puppeteer = require("puppeteer");

let category = "teste";
let applicant = "normal";
let title = "Title Test";
let description = "Description Test";
let solution = "Solution Test";


(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
  });
  const page = await browser.newPage();
  // Acessar a página de login
  // await page.goto('https://suporte.livesistemas.com');
  await page.goto('http://localhost/glpi');
  // faz o login
  await page.type("[id='login_name']", process.env.USER_NAME);
  await page.type("[id='login_password']", process.env.USER_PASS);
  await page.click('[type="submit"]');
  console.log("Logou");
  // vai para a página de ticket
  await page.waitForSelector('[title="Home"]');
  // await page.goto("https://suporte.livesistemas.com/front/ticket.form.php");
  await page.goto("http://localhost/glpi/front/ticket.form.php");
  console.log("Foi para a página de criar chamado");
  // Seleciona o título do chamado
  await page.waitForSelector('[id="show_category_by_type"]');
  await page.click('[id="show_category_by_type"]');
  await page.type('[class="select2-search__field"]', `${category}`);
  await page.waitForSelector('[class="select2-rendered__match"]');
  await page.click('[class="select2-rendered__match"]');
  await Promise.all([
    page.waitForNavigation()
  ])
  //seleciona o requerente do chamado
  // await page.click('[data-select2-id="7"]');
  await page.click('[data-select2-id="5"]');
  await page.type('[class="select2-search__field"]', `${applicant}`);
  await page.waitForSelector('[class="select2-rendered__match"]');
  await page.click('[class="select2-rendered__match"]');
  await Promise.all([
    page.waitForNavigation()
  ]);

  // digita o título do chamado
  await page.type('[name="name"]', `${title}`);
  // digita a descrição do chamado
  await page.click('[id="mceu_24"]');
  await page.keyboard.type(`${description}`);

  await page.waitForSelector('[class="tab_bg_2 center"]');
  await page.click('.tab_bg_2');
  await page.waitForNavigation();
  console.log("Foi para a página de tickets");
  // vai para a página de tickets
  // await page.goto("http://suporte.livesistemas.com/front/ticket.php");
  await page.goto("http://localhost/glpi/front/ticket.php");
  await page.waitForSelector('[data-hasqtip="0"]');
  await page.click('[data-hasqtip="0"]');

  console.log("Foi para a página de solução");
  // vai para a página do chamado selecionado
  await page.waitForSelector('[class="solution"]');
  await page.click('[class="solution"]');
  await page.waitForSelector('[id="mceu_49"]');
  await page.click('[id="mceu_49"]');
  await page.keyboard.type(`${solution}`);
  await page.click('[name="add"]');
  console.log("Foi para a página de aprovação de chamados");
  // vai para a página de aprovação da solução
  await Promise.all([
    page.waitForNavigation()
  ])
  await page.waitForSelector('[name="add_close"]');
  console.log("Selecionou o input para aprovação do chamado");
  await page.click('input[name="add_close"]');
  await page.click('input[name="add_close"]');
  console.log("Clicou no botão");

  await browser.close();
  console.log("Chamado adicionando com sucesso!");
})();

