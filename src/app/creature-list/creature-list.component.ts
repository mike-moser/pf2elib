import { Component } from '@angular/core';

export interface CreatureSummary {
  name: string;
  family: string | null | undefined;
  rarity: string;
  size: string;
  alignment: string;
  traits: string[];
}

const CREATURE_DATA: CreatureSummary[] = [
  {name: 'Aapoph Serpentfolk', family: 'Serpentfolk', rarity: 'Uncommon', size: 'Medium', alignment: 'CE', traits: ['Mutant', 'Serpentfolk', 'Uncommon']},
  {name: 'Aasimar Scion', family: 'Planar Scion', rarity: 'Common', size: 'Medium', alignment: 'NG', traits: ['Aasimar', 'Human', 'Humanoid']},
  {name: 'Abandoned Zealot', family: null, rarity: 'Common', size: 'Medium', alignment: 'CE', traits: ['Incorporeal', 'Spirit', 'Undead']},
  {name: 'Abberton Ruffian', family: null, rarity: 'Common', size: 'Medium', alignment: 'NE', traits: ['Human', 'Humanoid']},
  {name: 'Abbot Tsujon', family: null, rarity: 'Unique', size: 'Medium', alignment: 'LN', traits: ['Humanoid', 'Samsaran', 'Unique']},
  {name: 'Abendego Brute', family: null, rarity: 'Common', size: 'Medium', alignment: 'NE', traits: ['Human', 'Humanoid']},
  {name: 'Abendego Jailer', family: null, rarity: 'Common', size: 'Medium', alignment: 'NE', traits: ['Human', 'Humanoid']},
  {name: 'Abendego Priest', family: null, rarity: 'Common', size: 'Medium', alignment: 'NE', traits: ['Human', 'Humanoid']},
  {name: 'Abridan Ashau', family: null, rarity: 'Unique', size: 'Medium', alignment: 'NE', traits: ['Human', 'Humanoid', 'Unique']},
  {name: 'Abrikandilu', family: 'Demon', rarity: 'Common', size: 'Medium', alignment: 'CE', traits: ['Demon', 'Fiend']},
];

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss']
})


export class CreatureListComponent {
  displayedColumns = [ 'name', 'family', 'rarity', 'size', 'alignment', 'traits' ];
  dataSource = CREATURE_DATA;
}
