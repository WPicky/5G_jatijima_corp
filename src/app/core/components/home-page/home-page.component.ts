import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  citation: string;
  citations = [
    'Un grand pouvoir implique de grandes responsabilités.',
    'Ton père il est.',
    'Bravo mais attrape pas la grosse tête ptit gars !',
    'Pour Frodon.',
    'He peed on my rug !',
    'Smokey my friend, you\'re entering a world of pain.',
    'OVER THE LINE !',
    'Ou ou ou vous pouvez nous le mimer.',
    'Kalasnikov !',
    'Saïgon...',
    'Pose ce cahier d\'exercices isométriques.',
    'I\'m Batman !',
    'Oh que j\'suis sotte c\'est du suédois.',
    'Batte en l\'air !',
    'Disons que j\'ai un bon pedigree.',
    'Heinrich ! Un Postisch ?!',
    'Je couds.',
    'Le mambo !',
    'Et quel calibre !',
    'C\'est tout moi ça.',
    'En tout cas, on peut dire que le soviet éponge.',
    'Tu vois Hubert, c\'est peut-être ça aussi, changer le monde.',
    'C\'est un cadeau, de noël.',
    'Et le Rohan répondra !',
    'Je ne peux le porter pour vous, mais je peux vous porter vous !',
    'Attention Bill, derrière toi un chinois !',
    'Je veux mes cheveaux.',
    'Wanna fight ?',
    'You fucked my wife ?',
    'I am the danger !',
    'Meurs, pourriture communiste !',
    'C\'est quoi ce bazar ?',
    'Le marwall il est foutu',
    'The Lannisters send their regards',
    'Une seule, pourquoi moi ?',
    'No god no !',
    'Winter is coming',
    'You put the pussy on the chainwax !',
    'Non, il y en a un autre.',
    'Évite celle la.',
    'What a drag.',
    'Ben, Ben Kenobi ?',
    'Je vous en prie Obi-wan Kenobi, vous êtes notre seul espoir.',
    'Soylent green is people !',
    'Eeeeeeeehhhh ! Ces anglais !',
    'Freeeeeedoooooooooooooooommm !',
    'Je vois tout venir.',
    'Rosebud.',
    'Philippe ! Je sais où tu te cache !',
    'I\'m Arthur, king of the britains !',
    'C\'est une vraie boucherie.',
    'Un jour je serai le meilleur dresseur !',
    'Quelle noblesse de la part de cet animal.',
    'Ne vous ai-je pas assez diverti ?',
    'L\'espagnol, l\'espagnol, l\'espagnol !',
    'Have you met Howard ?',
    'I thought I walked.',
    'I need a haircut.',
    'English, motherfucker, do you speak it ?',
    'Hum hum, hum hum hum...',
    'Eh Paul !',
    'It\'s Bone.',
    'I chose Cylian rail.',
    '88 miles à l\'heure !',
    'T\'as les foies ?',
    'Quand faut y aller...',
    'Vous avez créé des raptors ?',
    'Petite futée.',
    'Ils leur donne à manger.',
    'Monsieur Arnold ?',
    'Fuck you Montgomery Brogan.',
    'Tout est super génial !',
    'Ground control to Major Tom...',
    'Call me Dirk Diggler.',
    'I\'m hot ! I\'m big !',
    'Dans une bonne auberge.',
    'What the fuck does WTF mean ?',
    'Les nains de cavenain.',
    'Des crébins du pays de Dain.',
    'I\'m gonna tell you what Like A Virgin is about !',
    'I don\'t tip',
    'Le cor du Gondor !',
    'SkØeen !!',
    'Jamais bière n\'aura si bon goût que celle que l\'on trouve par chez nous !',
    'The cake is a lie.',
    'That\'s my politic.',
    'Toi, tu creuses.',
    'Burn down their house... With lemons.',
    'Shut the fuck up Donnie.',
    'His name is Biggus Dickus.',
    'Vazy Chewie envoie la gomme !',
    'Un pour l\'argent, deux pour le spectacle et trois, pour le caillou.',
    'Nobody fuck with the Jesus.',
    'Et mamie tromblon, elle s\'est déjà fait tromblonner ?',
    'This is no country for old men.',
    'Life is full of beautiful things.',
    'You talking to me ?',
    'Go fuck yourself San Diego',
    'I love lamp.',
    'Mr Grady, you were the caretaker.',
    'Words of wisdom Lloyd, words of wisdom.',
    'Here\'s Johnny !',
    'If I was a lion and you were a tuna...',
    'Non ! Ne bouge pas ! Souviens toi, la partie n\'est pas finie.',
    'We can\'t stop here, this is bat country',
    'Big dick player',
    'I\'m gonna make him an offer he can\'t refuse',
    'Drop the gun, take the cannellonis',
    'Rule n°1 : Cardio',
    'Where are the fucking Twinkies ?',
    'Ce n\'est pas une grotte.',
    'Je suis ton père.',
    'Noooooooooooooooooooonnn !',
    'C\'est le jour de la marmotte.',
    'Yeah bitch ! Magnets !',
    'Jusqu\'ici tout va bien.',
    'C\'est pas la chute qui compte, c\'est l\'atterissage.',
    'Ne suis-je pas d\'une grande clémence ?!',
    'Donne le nous Deagol mon cher.',
    'Parce que c\'est mon anniversaire et que je le veux.',
    'Welcome to the enrichment center.',
    'Les nains ont creusé trop profond et avec trop d\'avidité.',
    'Mon p\'tit guide médical !',
    'You know nothing Jon Snow.'];
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor() {
  }


  ngOnInit() {
    this.citation = this.rdmQuotes();
    setInterval(() => {
      this.display();
    } , 20000);
  }

  display() {
    this.citation = this.rdmQuotes();
    console.log("coucou");
  }

  rdmQuotes() {
    const rdm = Math.floor(Math.random() * this.citations.length);

    return this.citations[rdm];
  }

  startTime() {
    const today=new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    const s = today.getSeconds();
    const ampm = '';
    m = this.checkTime(m);


    document.getElementById('display').innerHTML = h + ':' + m + ampm;
    const t = setTimeout(function(){this.startTime()},500);
  }

  checkTime(i) {
    if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
    return i;
  }
  
  
  //date
  startDate() {
    const d = new Date();
    document.getElementById('date').innerHTML = this.days[d.getDay()] + ' | ' + [d.getMonth() + 1] + '/' + d.getDate() + '/' + d.getFullYear();
  }




}






