import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {



  createDb() {
    const heroes = [ 
      { id: 11, name: 'Mr. Nice',pic :'assets/pictures/bear.jpg',score :49000,friends:[12,18],bio:'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Mr nice was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.' },
    { id: 12, name: 'Narco',pic :'assets/pictures/wolf.jpg',score :87300,friends:[11,18,19,13,14,15,16,20],bio:'A peerless practitioner of lethal shadow magic, Narco battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of his body and mind. There are only two possible outcomes: either Narco bends the weapon to his will... or the malevolent blade consumes him completely, paving the way for the destruction of all Runeterra.'},
    { id: 13, name: 'Bombasto',pic :'assets/pictures/lion.jpg',score :67555,friends:[16,11,12],bio:'One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade flesh of two Ionian hunters—they had unwittingly released him, cursed to bear the bow containing his bound essence. Varus now seeks out those who trapped him, in order to enact his brutal vengeance, but the mortal souls within still resist him every step of the way.'
  
  },
    { id: 14, name: 'Celeritas',pic :'assets/pictures/bear.jpg',score :63435,friends:[15,20,14],bio:'Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.'},
    { id: 15, name: 'Magneta',pic :'assets/pictures/rooster.jpg',score :56039,friends:[13,17,19],bio:'More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his master Shen, Kennen patrols the spirit realm, employing devastating electrical energy to strike down his enemies.'},
    { id: 16, name: 'RubberMan',pic :'assets/pictures/cow.jpg',score :56039,friends:[14,18,20],bio:'Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia’s magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.'},
    { id: 17, name: 'Dynama' ,pic :'assets/pictures/tiger.jpg',score :56039,friends:[13,15,16,20],bio:'Dynama is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave liberators. Armed with his favored three-talon spear, Xin Zhao now fights for his adopted kingdom, audaciously challenging any foe, no matter the odds.'},
    { id: 18, name: 'Dr IQ',pic :'assets/pictures/monkey.jpg',score :56039,friends:[19,20,17],bio:'A proud and noble soldier, Dr IQ fights at the head of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Dr IQ stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.' },
    { id: 19, name: 'Magma' ,pic :'assets/pictures/tuna.jpg',score :56039,friends:[15,18,20], bio:'As the king’s only son, Prince Magma is heir apparent to the throne of Demacia. Raised to be a paragon of his nation’s greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to prove himself on the battlefield. An exceptional warrior in his own right, Jarvan also inspires his troops with fearsome courage and selfless determination, raising his family’s colors high and revealing his true strength as a future leader of his people.'},
    { id: 20, name: 'Tornado',pic :'assets/pictures/wolf.jpg',score :56039,friends:[14,17,16,19],bio:'Outside the gleaming city of Demacia, the stone colossus Tornado keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Tornado makes the most of his time, savoring the thrill of a fight and the rare honor of defending his countrymen. But his triumphs are always bittersweet, for the magic he destroys is also his source of reanimation, and each victory leaves him dormant once again.'}];
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
