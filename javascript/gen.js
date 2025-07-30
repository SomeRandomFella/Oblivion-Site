const header = document.querySelector("header");

header.innerHTML = `
  <div class="left">
        <img class="icon" src="./images/icon.ico" alt="icon" />
        <a href="/Oblivion-Site">
          <h1>Oblivon</h1>
        </a>
      </div>
      <div class="right">
        <button class="feat2" onclick="window.location.href = '/Oblivion-Site/features'">
          Features
        </button>
      </div>
`;
