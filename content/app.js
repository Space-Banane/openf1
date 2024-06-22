const drivers = [
  {
    driver_number: 1,
    broadcast_name: "M VERSTAPPEN",
    full_name: "Max VERSTAPPEN",
    name_acronym: "VER",
    team_name: "Red Bull Racing",
    team_colour: "3671C6",
    first_name: "Max",
    last_name: "Verstappen",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
    country_code: "NED",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 2,
    broadcast_name: "L SARGEANT",
    full_name: "Logan SARGEANT",
    name_acronym: "SAR",
    team_name: "Williams",
    team_colour: "37BEDD",
    first_name: "Logan",
    last_name: "Sargeant",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png",
    country_code: "USA",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 4,
    broadcast_name: "L NORRIS",
    full_name: "Lando NORRIS",
    name_acronym: "NOR",
    team_name: "McLaren",
    team_colour: "F58020",
    first_name: "Lando",
    last_name: "Norris",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png",
    country_code: "GBR",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 10,
    broadcast_name: "P GASLY",
    full_name: "Pierre GASLY",
    name_acronym: "GAS",
    team_name: "Alpine",
    team_colour: "2293D1",
    first_name: "Pierre",
    last_name: "Gasly",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png",
    country_code: "FRA",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 11,
    broadcast_name: "S PEREZ",
    full_name: "Sergio PEREZ",
    name_acronym: "PER",
    team_name: "Red Bull Racing",
    team_colour: "3671C6",
    first_name: "Sergio",
    last_name: "Perez",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
    country_code: "MEX",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 14,
    broadcast_name: "F ALONSO",
    full_name: "Fernando ALONSO",
    name_acronym: "ALO",
    team_name: "Aston Martin",
    team_colour: "358C75",
    first_name: "Fernando",
    last_name: "Alonso",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png",
    country_code: "ESP",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 16,
    broadcast_name: "C LECLERC",
    full_name: "Charles LECLERC",
    name_acronym: "LEC",
    team_name: "Ferrari",
    team_colour: "F91536",
    first_name: "Charles",
    last_name: "Leclerc",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png",
    country_code: "MON",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 18,
    broadcast_name: "L STROLL",
    full_name: "Lance STROLL",
    name_acronym: "STR",
    team_name: "Aston Martin",
    team_colour: "358C75",
    first_name: "Lance",
    last_name: "Stroll",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png",
    country_code: "CAN",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 20,
    broadcast_name: "K MAGNUSSEN",
    full_name: "Kevin MAGNUSSEN",
    name_acronym: "MAG",
    team_name: "Haas F1 Team",
    team_colour: "B6BABD",
    first_name: "Kevin",
    last_name: "Magnussen",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png",
    country_code: "DEN",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 21,
    broadcast_name: "N DE VRIES",
    full_name: "Nyck DE VRIES",
    name_acronym: "DEV",
    team_name: "AlphaTauri",
    team_colour: "5E8FAA",
    first_name: "Nyck",
    last_name: "De Vries",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/N/NYCDEV01_Nyck_De%20Vries/nycdev01.png.transform/1col/image.png",
    country_code: "NED",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 22,
    broadcast_name: "Y TSUNODA",
    full_name: "Yuki TSUNODA",
    name_acronym: "TSU",
    team_name: "AlphaTauri",
    team_colour: "5E8FAA",
    first_name: "Yuki",
    last_name: "Tsunoda",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png",
    country_code: "JPN",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 23,
    broadcast_name: "A ALBON",
    full_name: "Alexander ALBON",
    name_acronym: "ALB",
    team_name: "Williams",
    team_colour: "37BEDD",
    first_name: "Alexander",
    last_name: "Albon",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png",
    country_code: "THA",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 24,
    broadcast_name: "G ZHOU",
    full_name: "ZHOU Guanyu",
    name_acronym: "ZHO",
    team_name: "Alfa Romeo",
    team_colour: "C92D4B",
    first_name: "Guanyu",
    last_name: "Zhou",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png",
    country_code: "CHN",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 27,
    broadcast_name: "N HULKENBERG",
    full_name: "Nico HULKENBERG",
    name_acronym: "HUL",
    team_name: "Haas F1 Team",
    team_colour: "B6BABD",
    first_name: "Nico",
    last_name: "Hulkenberg",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png",
    country_code: "GER",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 31,
    broadcast_name: "E OCON",
    full_name: "Esteban OCON",
    name_acronym: "OCO",
    team_name: "Alpine",
    team_colour: "2293D1",
    first_name: "Esteban",
    last_name: "Ocon",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png",
    country_code: "FRA",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 44,
    broadcast_name: "L HAMILTON",
    full_name: "Lewis HAMILTON",
    name_acronym: "HAM",
    team_name: "Mercedes",
    team_colour: "6CD3BF",
    first_name: "Lewis",
    last_name: "Hamilton",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
    country_code: "GBR",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 55,
    broadcast_name: "C SAINZ",
    full_name: "Carlos SAINZ",
    name_acronym: "SAI",
    team_name: "Ferrari",
    team_colour: "F91536",
    first_name: "Carlos",
    last_name: "Sainz",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png",
    country_code: "ESP",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 63,
    broadcast_name: "G RUSSELL",
    full_name: "George RUSSELL",
    name_acronym: "RUS",
    team_name: "Mercedes",
    team_colour: "6CD3BF",
    first_name: "George",
    last_name: "Russell",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
    country_code: "GBR",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 77,
    broadcast_name: "V BOTTAS",
    full_name: "Valtteri BOTTAS",
    name_acronym: "BOT",
    team_name: "Alfa Romeo",
    team_colour: "C92D4B",
    first_name: "Valtteri",
    last_name: "Bottas",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png",
    country_code: "FIN",
    session_key: 7768,
    meeting_key: 1141,
  },
  {
    driver_number: 81,
    broadcast_name: "O PIASTRI",
    full_name: "Oscar PIASTRI",
    name_acronym: "PIA",
    team_name: "McLaren",
    team_colour: "F58020",
    first_name: "Oscar",
    last_name: "Piastri",
    headshot_url:
      "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png",
    country_code: "AUS",
    session_key: 7768,
    meeting_key: 1141,
  },
];

const session = {
  location: "Sakhir",
  country_key: 36,
  country_code: "BRN",
  country_name: "Bahrain",
  circuit_key: 63,
  circuit_short_name: "Sakhir",
  session_type: "Race",
  session_name: "Race",
  date_start: "2023-03-05T15:00:00+00:00",
  date_end: "2023-03-05T17:00:00+00:00",
  gmt_offset: "03:00:00",
  session_key: 7953,
  meeting_key: 1141,
  year: 2023,
};

let radiomessages = [];
let laps = [];
let positions = [];


async function loaddata() { // Thinking of just using the api
  const data1 = await fetch("/radiomessages.json");
  const json1 = await data1.json();
  radiomessages = json1;

  const data2 = await fetch("/laps.json");
  const json2 = await data2.json();
  laps = json2;

  const data3 = await fetch("/positions.json");
  const json3 = await data3.json();
  positions = json3;
}

function getFinishedPosition(driver) {
  const position = positions
    .filter((pos) => pos.driver_number === driver.driver_number)
    .reverse()[0].position;
  return position;
}

function getDriversFastestLap(driver) {
  const time = laps.filter((lap) => lap.driver_number === driver.driver_number && lap.lap_duration != null && lap.lap_duration != undefined)
    .sort((a, b) => a.lap_duration - b.lap_duration)[0].lap_duration;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds.toFixed(3)}`;
  return formattedTime;
}

function getRaceFastestLap(){
  const time = laps.filter((lap)=>lap.lap_duration != null && lap.lap_duration != undefined).sort((a, b) => a.lap_duration - b.lap_duration)[0].lap_duration;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds.toFixed(3)}`;
  console.log(formattedTime)
  return formattedTime;
}

function loaddrivers() {
  const driverarray = document.getElementById("driverarray");

  // Sort drivers based on their finished positions
  drivers.sort((a, b) => getFinishedPosition(a) - getFinishedPosition(b));

  for (const driver of drivers) {
    const finished = getFinishedPosition(driver);
    const fastest = getDriversFastestLap(driver);
    let lapcolor = `text-blue-500`;
    let extraclass = ``;
    if (fastest === getRaceFastestLap()) {lapcolor = `text-yellow-400`;extraclass = `fastestclass`;}
    if (finished === 1) {extraclass += `winnerclass`;}
    const html = `<div class="card w-96 bg-base-100 shadow-xl ${extraclass}">
        <figure>
          <h1>P${finished}</h1>
          <img src="${driver.headshot_url}" alt="IMG" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ${driver.first_name} ${driver.last_name}
          </h2>
          <p>${driver.first_name} ${driver.last_name} finshed Position ${finished} with their fastest lap being a <span class="underline underline-offset-2 ${lapcolor}">${fastest}</span></p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">#${driver.driver_number}</div> 
          </div>
        </div>
      </div>`;

    driverarray.innerHTML += html;
  }
}

function loadlaps() {
  const lapsarray = document.getElementById("lapsarray");
  lapsarray.innerHTML = ''; // Clear previous content

  // Filter laps to exclude those with null or undefined lap_duration
  const filteredLaps = laps.filter(lap => lap.lap_duration != null && lap.lap_duration != undefined);

  // Create a map to store the fastest lap for each lap number
  const fastestLaps = new Map();

  // Iterate over each filtered lap
  for (const lap of filteredLaps) {
    // If the lap number is not in the map or the current lap is faster, update the map
    if (!fastestLaps.has(lap.lap_number) || lap.lap_duration < fastestLaps.get(lap.lap_number).lap_duration) {
      fastestLaps.set(lap.lap_number, lap);
    }
  }

  // Generate HTML for the fastest laps
  for (const [lap_number, lap] of fastestLaps) {
    const driver = drivers.find(driver => driver.driver_number == lap.driver_number);
    
    const html = `<div class="collapse bg-base-200 flex items-center">
      <img src="${driver.headshot_url}" alt="Placeholder Image" class="mr-2" />
      <div>
        <div class="collapse-title text-xl font-medium">
          Lap ${lap_number-1} - ${driver.first_name} ${driver.last_name}
        </div>
      </div>
    </div>`;

    lapsarray.innerHTML += html;
  }
}

function renderradio(index){ // Extra Render because on some sessions it WILL crash your browser. Don't test it. I tried
  const message = radiomessages[index];
  const messagecontent = document.getElementById(`messagecontent_${index}`);
  messagecontent.innerHTML = '';
  messagecontent.innerHTML += `<audio controls>
  <source src="${message.recording_url}" type="audio/mpeg">
Your browser does not support the audio element.
</audio> `;
}

function loadradiomessages(){
  const radiomessagesarray = document.getElementById("radiomessagesarray");
  radiomessagesarray.innerHTML = ''; // Clear previous content

  for (const message of radiomessages) {
    const driver = drivers.find(driver => driver.driver_number == message.driver_number);
    const html = `<div class="collapse bg-base-200">
  <input type="checkbox" onclick="renderradio(${radiomessages.indexOf(message)})" /> 
  <div class="collapse-title text-xl font-medium">
    <img src="${driver.headshot_url}" alt="${driver.driver_number} IMG"> ${driver.first_name} ${driver.last_name}
  </div>
  <div class="collapse-content" id="messagecontent_${radiomessages.indexOf(message)}"> 
     
  </div>
</div>`;

    radiomessagesarray.innerHTML += html;
  }
}


function loadheader() {
  const headertext = document.getElementById("headertext");
  const headerbottomtext = document.getElementById("headerbottomtext");

  headertext.innerHTML = `Formula One - ${session.year} ${session.country_name}`;
  headerbottomtext.innerHTML = `This Race was hosted on the <span class="text-orange-600 underline-offset-2 underline"> ${session.circuit_short_name}</span>  Circuit in <span class="text-orange-600 underline-offset-2 underline">${session.country_name}</span>`;
}

// yes yes
loadheader();
loaddata().then(() => {
  loaddrivers();
  loadlaps();
  loadradiomessages();
});
