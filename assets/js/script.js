//variaveis de elementos html
const ul = document.querySelector('.ul-players')
const li = document.createElement('li')
const p = document.createElement('p')
const lances = document.querySelector('.lances')
const lancesli = document.querySelector('.lances-li')
const final = document.querySelector('.result')

//variaveis com nome do time e placar do jogo
let nametime = document.querySelector('.team-name')
let resultado = document.querySelector('.placar')

//variaveis com botoes de gerar time
const btn = document.querySelector('.team-generator')
const btn2 = document.querySelector('.team-generator2')
const test = document.querySelector('.teste')

//variaveis de elementos html do time 2
const ul2 = document.querySelector('.ul-players2')
let nametime2 = document.querySelector('.team-name2')

//variaveis com botao de iniciar a partida (temporizador e resetar)
const iniciapartida = document.querySelector('.inicia')
const timer = document.querySelector('.timer')
const terminar = document.querySelector('.reset')

//variaveis com informações globais
let minutos = 0;
let teamGlobal1 = null; 
let teamGlobal2 = null; 
let gol1 = 0;
let gol2 = 0;
let chance = 0;
let createTeam1 = false;
let createTeam2 = false;
let terminaartidaexecute = false;
let terminado = true;

//variaveis do temporizador
let clicado = false;
let temporiza;

//funções de criação
function criaNome(){
// Constantes que guardam os nomes INICIAIS, do MEIO e FINAIS dos times
const ger_first_names = [
    'Atletico', 'Nacional', 'Real', 'São', 'River', 'Boca', 
    'Manchester', 'Universidad', 'Sporting', 'Newell’s', 
    'Independiente', 'Cruz', 'Juventus', 'Paris', 'Borussia'
];

const ger_second_names = [
    'de', 'Madrid', 'Paulo', 'Cajazeiras', 'Ceará', 
    'Juniors','de', 'Plate', 'de', 'City', 'United', 'Unite', 
    'Catolica', 'de', 'Santos', 'Fluminense', 'de', 'Munich', 'America', 
    'Galaxy', 'Estudiantes', 'de', 'Porto', 'de', 'Benfica', 'Zenit'
];

const ger_third_names = [
    'Bilbao', 'Londres', 'City', 'Madrid', 'Salzburg', 
    'Roma', 'Lisboa', 'Berlin', 'Milan', 'Vienna', 
    'Montevideo', 'Tokyo', 'Osaka', 'Kiev', 'Glasgow'
];

    const nome = luck_first_name();
    const second_name = luck_second_name();
    const completed = join_name();

// Função que junta os nomes, e caso o segundo nome seja "de" ela cria o terceiro nome
    function join_name(){
    let completed_name = 'none'
    completed_name = nome + ' ' + second_name;
    return completed_name
}

// Funções que pegam o valor aleatorio e retornam a variavel do nome

    function luck_first_name(){
        const total = ger_first_names.length - 1;
        let first_name = ger_first_names[randomiza(total, 0)]      
        return first_name
    }

    function luck_second_name(){
        const total = ger_second_names.length -1;
        let second_name = ger_second_names[randomiza(total,0)]
        if(second_name === 'de'){
            second_name = second_name + ' ' + luck_third_name()
            return second_name
        }
        return second_name
    }

    function luck_third_name(){
        const total = ger_third_names.length - 1;
        let third_name = ger_third_names[randomiza(total,0)]
        return third_name
    }

// função que randomiza o valor da lenght
randomiza()


    return completed;
}
function criaJogadores(){


// Constantes que guardam os primeiros e ultimos nomes dos jogadores, além dos apelidos
    const player_first_names = [
        'Lionel', 'Cristiano', 'Neymar', 'Kylian', 'Erling', 'Mohamed', 
        'Robert', 'Kevin', 'Romelu', 'Karim', 'Eden', 'Luis', 
        'Zlatan', 'Paulo', 'Gareth', 'Sadio', 'Virgil', 'Luka', 
        'Andres', 'Sergio', 'Thiago', 'James', 'Harry', 'Antoine'
    ];
    
    const player_last_names = [
        'Messi', 'Ronaldo', 'Junior', 'Mbappe', 'Haaland', 'Salah', 
        'Lewandowski', 'De Bruyne', 'Lukaku', 'Benzema', 'Hazard', 
        'Suarez', 'Ibrahimovic', 'Dybala', 'Bale', 'Mane', 'Van Dijk', 
        'Modric', 'Iniesta', 'Ramos', 'Silva', 'Rodriguez', 'Kane', 
        'Griezmann', 'Pogba', 'Martinez', 'Alisson', 'Sancho', 'Fati'
    ];
    
    const player_nicknames = [
        'El Mago', 'CR7', 'La Pulga', 'O Fenômeno', 'The Pharaoh', 
        'The Viking', 'El Matador', 'El Pistolero', 'Golden Boy', 
        'The Magician', 'The Architect', 'El Capitan', 'El Niño', 
        'King', 'The Gladiator', 'Speedster', 'The Maestro', 'The Rock'
    ];
    
    // constante que junta os nomes
    const completed = first_name() + ' ' + second_name();

    //funções que sorteiam o primeiro e segundo nome
    function first_name(){
        const total = player_first_names.length - 1;
        let first_name = player_first_names[randomiza(total, 0)]      
        return first_name
    }

    function second_name(){
        const total = player_last_names.length - 1;
        let second_name = player_last_names[randomiza(total, 0)]      
        return second_name
    }
    //funções que sorteiam o overral e a idade
    function over(){
        const overral = randomiza(94, 65)
        return overral
    }
    function apelido(){
        if(overral < 87){
            return 'Nenhum'
        }
        const total = player_nicknames.length - 1;
        let nickname = player_nicknames[randomiza(total, 0)]      
        return nickname
    }


    function age(){
        const idad = randomiza(40, 16)
        return idad
    }

    //função de randomizar
    randomiza()

    const overral = over();

    //constante que cria um objeto com nome, idade e overral
    const Jogador = {
        nome: completed,
        overral: overral,
        idade: age(),
        Apelido: apelido()
    }

    return Jogador;



}
function geraTime(callback) {
    let mediaover = 0;

    btn.addEventListener('click', e => {
        ul.innerHTML = '';
        let over = 0;
        let player = [];
        let i = 0;
        createTeam1 = true;

        while (i < 11) {
            player.push(criaJogadores());
            i++;
        }

        const team = {
            Time: criaNome(),
            Jogadores: player,
        };

        const players = Object.entries(team.Jogadores);

        nametime.innerHTML = team.Time;

        team.Jogadores.forEach(jogador => {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = `Nome: ${jogador.nome}, Idade: ${jogador.idade}, Overral: ${jogador.overral}, Apelido: ${jogador.Apelido}`;
            over += Number(`${jogador.overral}`);
            li.appendChild(p);
            ul.appendChild(li);
        });

        mediaover = Math.round(over / 11);

        const team_name = team.Time;

        const Team_completed = {
            Nome: team_name,
            Jogadores: players,
            Overral: mediaover,
            Time: 1
        };



        if (callback) {
            callback(Team_completed);
        }
    });
}
function geraTime2(callback){
    // variavel que pega a media geral de overral
    let mediaover = 0;
    //função quando o botão é clicado
    btn2.addEventListener('click', e => {
    //zerar ul antes de criar LI e P novamente
        ul2.innerHTML = '';
        createTeam2 = true;
    //while que executa a função de criar jogador 11 vezes e coloca dentro do objeto "player"
        let over = 0;
        let player = [];
        let i = 0;
        while(i < 11){
            player.push(criaJogadores());
            i++;
        }
    //constante que guarda o nome e os jogadores do time
        const team = {
            Time: criaNome(),
            Jogadores: player
        };
    //constante que converte esses jogadores para um array
        const players = Object.entries(team.Jogadores);
    
    //Adiciona o nome do time na tela
        nametime2.innerHTML = team.Time;
    //adiciona o nome dos jogadores na tela
        team.Jogadores.forEach(jogador => {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = `Nome: ${jogador.nome}, Idade: ${jogador.idade}, Overral: ${jogador.overral}, Apelido: ${jogador.Apelido}`;
            over += Number(`${jogador.overral}`)
            li.appendChild(p);
            ul2.appendChild(li);
        });
    //calcula a media geral do time
        mediaover = Math.round(over/11)

        const team_name = team.Time;

        
        const Team_completed = {
            Nome: team_name,
            Jogadores: players,
            Overral: mediaover,
            Time: 2
        };


    
        if (callback) {
            callback(Team_completed);
        }
    });
    }

//funções que definem as chances dos times
function team2chances() {
    if (chance <= 9) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - chute pra foraaa`;
        lancesli.appendChild(p);
    } else if (chance === 10) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - bate o penâlti e... PERDEUUU`;
        lancesli.appendChild(p);
    } else if (chance === 11) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - bate o penâlti e... é GOOOOLLLL`;
        lancesli.appendChild(p);
        gol2 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    } else if (chance === 12) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - a bola bateee na traveeee`;
        lancesli.appendChild(p);
    } else if (chance === 13) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - GOOOOOLLLLLLL`;
    
        lancesli.appendChild(p);
        gol2 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }else if (chance === 14){
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - GOLAÇOOOOOOOO`;
    
        lancesli.appendChild(p);
        gol2 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }else if(chance === 15){
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - bateu a falta e... é GOOLLLLL`;
        lancesli.appendChild(p);
        gol2 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }else if(chance >= 16){
        let p = document.createElement('p');
        p.textContent = `${teamGlobal2.Nome} - GOOOOLLLLLLLL`;
        lancesli.appendChild(p);
        gol2 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }
    }

function team1chances(){
    if (chance <= 9) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - chute pra foraaa`;
        lancesli.appendChild(p);
    } else if (chance === 10) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - bate o penâlti e... PERDEUUU`;
        lancesli.appendChild(p);
    } else if (chance === 11) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - bate o penâlti e... é GOOOOLLLL`;
        lancesli.appendChild(p);
        gol1 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    } else if (chance === 12) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - a bola bateee na traveeee`;
        lancesli.appendChild(p);
    } else if (chance === 13) {
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - GOOOOOLLLLLLL`;
        lancesli.appendChild(p);
        gol1 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }else if (chance === 14){
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - GOLAÇOOOOOOOO`;
        lancesli.appendChild(p);
        gol1 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }else if(chance === 15){
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - bateu a falta e... é GOOLLLLL`;
        lancesli.appendChild(p);
        gol1 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }else if(chance >= 16){
        let p = document.createElement('p');
        p.textContent = `${teamGlobal1.Nome} - GOOOOLLLLLLLL`;
        lancesli.appendChild(p);
        gol1 += 1;
        resultado.innerHTML = `${gol1} x ${gol2}`;
    }
    }
 
//função do temporizador
function temp(){
        let segundos = 0;

        function temporizador(){
            if(minutos <= 90 && clicado === true){
            segundos += 1;
            timer.innerHTML = `${minutos}m:${segundos}s`

            if (segundos >= 60){
                minutos += 1;
                segundos = 0;
                if(minutos % 5 === 0){
                    lance()
                }

            }
        } 
            if(minutos > 90){
                clicado = false;
                terminapartida()
                return
            }
            }

        iniciapartida.addEventListener('click', e =>{
            if(terminado)  {
            if (clicado === false){
            terminaartidaexecute = false;
            clearInterval(temporiza)
            temporiza = setInterval(temporizador, 1);
            clicado = true;
            terminado = false;
            }
        }
        terminar.addEventListener('click', e=>{
            reset()
        })
        })
    }
    

//função que randomiza os lances
                function lance(){
                  const time = randomiza(2,1);
                  const dado = randomiza(6,1);
                  const jogador = randomiza(1, 11);
            
                  if(time === 1)
                  {
                    if(teamGlobal1){
                    chance = Math.round((dado + (teamGlobal1.Overral/10)));
                   team1chances()
                    }
                  }
                  if(time === 2){
                    if(teamGlobal2){
                    chance = Math.round((dado + (teamGlobal2.Overral/10)));
                    team2chances()
                    }
                    }
                  }



//função que randomiza os numeros
function randomiza(max,min){
                    const random = Math.random() * (max - min + 1) + min;
                    return Math.floor(random);
                }
                

//pega os dados do TIME 1
geraTime(team => {
    teamGlobal1 = team;
});
//pega os dados do TIME 2
geraTime2(team => {
    teamGlobal2 = team;
});

//temporizador


temp()




//função que reseta tudo

function reset(){
    gol1 = 0;
    gol2 = 0;
    clicado = false;
    minutos = 0;
    segundos = 0;
    chance = 0;
    timer.innerHTML = `${minutos}m:${segundos}s`
    resultado.innerHTML = `${gol1} x ${gol2}`
    lancesli.innerHTML = ''
    final.innerHTML = ''
    terminado = true;
}
function terminapartida(){
    if (terminaartidaexecute === false){
    let h1 = document.createElement('h1')
    h1.textContent = 'FIM DA PARTIDA'
    final.appendChild(h1)
    let p = document.createElement('p')
    p.textContent = `${teamGlobal1.Nome} ${gol1} x ${gol2} ${teamGlobal2.Nome}`
    final.appendChild(p)
    terminaartidaexecute = true;
    }
}

