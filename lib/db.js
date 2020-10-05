"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.challenges = exports.environments = exports.drones = exports.interactables = exports.artifacts = exports.survivors = exports.monsters = exports.items = void 0;
var items = [{
  name: "Soldier's Syringe"
}, {
  name: 'Tougher Times'
}, {
  name: 'Monster Tooth'
}, {
  name: "Lens-Maker's Glasses"
}, {
  name: "Paul's Goat Hoof"
}, {
  name: 'Bustling Fungus'
}, {
  name: 'Crowbar'
}, {
  name: 'Tri-Tip Dagger'
}, {
  name: 'Warbanner'
}, {
  name: 'Cautious Slug'
}, {
  name: 'Personal Shield Generator'
}, {
  name: 'Medkit'
}, {
  name: 'Gasoline'
}, {
  name: 'Stun Grenade'
}, {
  name: 'Bundle of Fireworks'
}, {
  name: 'Energy Drink'
}, {
  name: 'Backup Magazine'
}, {
  name: 'Sticky Bomb'
}, {
  name: 'Rusted Key'
}, {
  name: 'Armor-Piercing Rounds'
}, {
  name: 'Topaz Brooch'
}, {
  name: 'Focus Crystal'
}, {
  name: 'Fresh Meat'
}, {
  name: 'Repulsion Armor Plate'
}, {
  name: 'Item Scrap, White'
}, {
  name: 'AtG Missile Mk. 1'
}, {
  name: "Will-o'-the-wisp"
}, {
  name: 'Hopoo Feather'
}, {
  name: 'Ukulele'
}, {
  name: 'Leeching Seed'
}, {
  name: 'Predatory Instincts'
}, {
  name: 'Red Whip'
}, {
  name: 'Old War Stealthkit'
}, {
  name: "Harvester's Scythe"
}, {
  name: 'Fuel Cell'
}, {
  name: 'Infusion'
}, {
  name: 'Bandolier'
}, {
  name: "Berzerker's Pauldron"
}, {
  name: 'Rose Buckler'
}, {
  name: "Runald's Band"
}, {
  name: "Kjaro's Band"
}, {
  name: 'Chronobauble'
}, {
  name: 'Wax Quail'
}, {
  name: 'Old Guillotine'
}, {
  name: 'War Horn'
}, {
  name: 'Lepton Daisy'
}, {
  name: 'Razorwire'
}, {
  name: "Ghor's Tome"
}, {
  name: 'Squid Polyp'
}, {
  name: 'Death Mark'
}, {
  name: 'Item Scrap, Green'
}, {
  name: 'Brilliant Behemoth'
}, {
  name: 'Ceremonial Dagger'
}, {
  name: 'Frost Relic'
}, {
  name: 'Happiest Mask'
}, {
  name: 'H3AD-5T v2'
}, {
  name: "N'kuhana's Opinion"
}, {
  name: 'Unstable Tesla Coil'
}, {
  name: '57 Leaf Clover'
}, {
  name: 'Sentient Meat Hook'
}, {
  name: 'Alien Head'
}, {
  name: 'Soulbound Catalyst'
}, {
  name: "Dio's Best Friend"
}, {
  name: 'Hardlight Afterburner'
}, {
  name: 'Wake of Vultures'
}, {
  name: 'Brainstalks'
}, {
  name: 'Rejuvenation Rack'
}, {
  name: 'Aegis'
}, {
  name: 'Shattering Justice'
}, {
  name: 'Resonance Disc'
}, {
  name: 'Interstellar Desk Plant'
}, {
  name: 'Defensive Microbots'
}, {
  name: 'Item Scrap, Red'
}, {
  name: 'Titanic Knurl'
}, {
  name: "Queen's Gland"
}, {
  name: 'Halcyon Seed'
}, {
  name: 'Little Disciple'
}, {
  name: 'Pearl'
}, {
  name: 'Irradiant Pearl'
}, {
  name: 'Genesis Loop'
}, {
  name: 'Artifact Key'
}, {
  name: 'Molten Perforator'
}, {
  name: 'Shatterspleen'
}, {
  name: 'Mired Urn'
}, {
  name: 'Item Scrap, Yellow'
}, {
  name: 'Shaped Glass'
}, {
  name: 'Brittle Crown'
}, {
  name: 'Transcendence'
}, {
  name: 'Corpsebloom'
}, {
  name: 'Gesture of the Drowned'
}, {
  name: 'Strides of Heresy'
}, {
  name: 'Visions of Heresy'
}, {
  name: 'Beads of Fealty'
}, {
  name: 'Focused Convergence'
}, {
  name: 'Defiant Gouge'
}, {
  name: 'Mercurial Rachis'
}, {
  name: 'Purity'
}, {
  name: 'Glowing Meteorite'
}, {
  name: 'Helfire Tincture'
}, {
  name: 'Effigy of Grief'
}, {
  name: 'Spinel Tonic'
}, {
  name: 'Disposable Missile Launcher'
}, {
  name: 'Foreign Fruit'
}, {
  name: 'Primordial Cube'
}, {
  name: 'Ocular HUD'
}, {
  name: 'The Back-up'
}, {
  name: 'Preon Accumulator'
}, {
  name: 'Milky Chrysalis'
}, {
  name: 'Royal Capacitor'
}, {
  name: 'The Crowdfunder'
}, {
  name: 'Gnarled Woodsprite'
}, {
  name: 'Radar Scanner'
}, {
  name: 'Eccentric Vase'
}, {
  name: 'Blast Shower'
}, {
  name: 'Volcanic Egg'
}, {
  name: 'Jade Elephant'
}, {
  name: 'Sawmerang'
}, {
  name: 'Recycler'
}, {
  name: 'Super Massive Leech'
}, {
  name: "Gorag's Opus"
}, {
  name: 'Forgive Me Please'
}, {
  name: "Ifrit's Distinction"
}, {
  name: 'Silence Between Two Strikes'
}, {
  name: 'Her Biting Embrace'
}, {
  name: "N'kuhana's Retort"
}, {
  name: 'Spectral Circlet'
}, {
  name: 'Fuel Array'
}];
exports.items = items;
var monsters = [{
  name: 'Alloy Vulture'
}, {
  name: 'Beetle'
}, {
  name: 'Beetle Guard'
}, {
  name: 'Bighorn Bison'
}, {
  name: 'Brass Contraption'
}, {
  name: 'Clay Templar'
}, {
  name: 'Elder Lemurian'
}, {
  name: 'Greater Wisp'
}, {
  name: 'Hermit Crab'
}, {
  name: 'Imp'
}, {
  name: 'Jellyfish'
}, {
  name: 'Brass Contraption'
}, {
  name: 'Clay Templar'
}, {
  name: 'Elder Lemurian'
}, {
  name: 'Greater Wisp'
}, {
  name: 'Hermit Crab'
}, {
  name: 'Imp'
}, {
  name: 'Jellyfish'
}, {
  name: 'Lemurian'
}, {
  name: 'Lesser Wisp'
}, {
  name: 'Lunar Chimera (Golem)'
}, {
  name: 'Lunar Chimera (Wisp)'
}, {
  name: 'Mini Mushrum'
}, {
  name: 'Parent'
}, {
  name: 'Solus Probe'
}, {
  name: 'Stone Golem'
}, {
  name: 'Void Reaver'
}, {
  name: 'Beetle Queen'
}, {
  name: 'Clay Dunestrider'
}, {
  name: 'Grovetender'
}, {
  name: 'Imp Overlord'
}, {
  name: 'Magma Worm'
}, {
  name: 'Overloading Worm'
}, {
  name: 'Scavenger'
}, {
  name: 'Solus Control Unit'
}, {
  name: 'Stone Titan'
}, {
  name: 'Wandering Vagrant'
}, {
  name: 'Alloy Worship Unit'
}, {
  name: 'Artifact Reliquary'
}, {
  name: 'Aurelionite'
}, {
  name: 'Mithrix'
}, {
  name: 'Twisted Scavenger'
}, {
  name: 'Malachite Urchin'
}];
exports.monsters = monsters;
var survivors = [{
  name: 'Acrid',
  skills: 'items[0]'
}, {
  name: 'Artificer',
  skills: 'items[0]'
}, {
  name: 'Captain',
  skills: 'items[0]'
}, {
  name: 'Commando',
  skills: 'items[0]'
}, {
  name: 'Engineer',
  skills: 'items[0]'
}, {
  name: 'Huntress',
  skills: 'items[0]'
}, {
  name: 'Loader',
  skills: 'items[0]'
}, {
  name: 'Mercenary',
  skills: 'items[0]'
}, {
  name: 'MUL-T',
  skills: 'items[0]'
}, {
  name: 'REX',
  skills: 'items[0]'
}];
exports.survivors = survivors;
var artifacts = [{
  name: 'Chaos'
}, {
  name: 'Command'
}, {
  name: 'Death'
}, {
  name: 'Dissonance'
}, {
  name: 'Enigma'
}, {
  name: 'Evolution'
}, {
  name: 'Frailty'
}, {
  name: 'Glass'
}, {
  name: 'Honor'
}, {
  name: 'Kin'
}, {
  name: 'Metamorphosis'
}, {
  name: 'Sacrifice'
}, {
  name: 'Soul'
}, {
  name: 'Spite'
}, {
  name: 'Swarms'
}, {
  name: 'Vengeance'
}];
exports.artifacts = artifacts;
var interactables = [{
  name: 'Teleporter'
}, {
  name: 'Newt Altars'
}, {
  name: 'Escape Pod'
}, {
  name: 'Radio Scanner'
}, {
  name: 'Launch Pads'
}, {
  name: 'Chests'
}, {
  name: 'Lunar Pod'
}, {
  name: 'Barrel'
}, {
  name: '3D Printers'
}, {
  name: 'Scrapper'
}, {
  name: 'Cleansing Pool'
}, {
  name: 'Altar of Gold'
}, {
  name: 'Shrine of Blood'
}, {
  name: 'Shrine of Chance'
}, {
  name: 'Shrine of Combat'
}, {
  name: 'Shrine of Order'
}, {
  name: 'Shrine of the Mountain'
}, {
  name: 'Shrine of the Woods'
}];
exports.interactables = interactables;
var drones = [{
  name: 'Emergency Drone'
}, {
  name: 'Equipment Drone'
}, {
  name: 'Gunner Drone'
}, {
  name: 'Gunner Turret'
}, {
  name: 'Healing Drone'
}, {
  name: 'Incinerator Drone'
}, {
  name: 'Missile Drone'
}, {
  name: 'TC-280 Prototype'
}];
exports.drones = drones;
var environments = [{
  name: 'Abandoned Aqueduct'
}, {
  name: 'Abyssal Depths'
}, {
  name: 'Commencement'
}, {
  name: 'Distant Roost'
}, {
  name: 'Rallypoint Delta'
}, {
  name: 'Scorched Acres'
}, {
  name: "Siren's Call"
}, {
  name: 'Sky Meadow'
}, {
  name: 'Sundered Grove'
}, {
  name: 'Titanic Plains'
}, {
  name: 'Wetland Aspect'
}, {
  name: 'A Moment, Fractured'
}, {
  name: 'A Moment, Whole'
}, {
  name: 'Bazaar Between Time'
}, {
  name: "Bulwark's Ambry"
}, {
  name: 'Gilded Coast'
}, {
  name: 'Void Fields'
}];
exports.environments = environments;
var challenges = [{
  name: '...To Be Left Alone',
  aliases: [survivors[0]]
}, {
  name: 'Engineering Perfection',
  aliases: [survivors[4]]
}, {
  name: 'Guidance Offline',
  aliases: [survivors[6]]
}, {
  name: 'Pause.',
  aliases: [survivors[1]]
}, {
  name: 'Power Plant',
  aliases: [survivors[9]]
}, {
  name: 'True Respite',
  aliases: [survivors[7]]
}, {
  name: 'Verified',
  aliases: [survivors[8]]
}, {
  name: 'Warrior',
  aliases: [survivors[5]]
}, {
  name: 'Washed Away',
  aliases: [survivors[2]]
}, {
  name: '"Is This Bugged?"',
  aliases: [items[4]]
}, {
  name: '...Maybe One More.',
  aliases: [items[14]]
}, {
  name: 'Advancement',
  aliases: [items[19]]
}, {
  name: 'Automation Activation',
  aliases: [items[48]]
}, {
  name: 'Blockade Breaker',
  aliases: [items[91], items[90]]
}, {
  name: 'Cut Down',
  aliases: [items[43]]
}, {
  name: 'Death Do Us Part',
  aliases: [items[39], items[40]]
}, {
  name: 'Deicide',
  aliases: [items[65]]
}, {
  name: 'Deja Vu?',
  aliases: [items[59]]
}, {
  name: 'Elite Slayer',
  aliases: [items[11]]
}, {
  name: 'Experimenting',
  aliases: [items[34]]
}, {
  name: 'Flawless',
  aliases: [items[16]]
}, {
  name: 'Glorious Battle',
  aliases: [items[37]]
}, {
  name: 'Going Fast Recommended',
  aliases: [items[42]]
}, {
  name: 'Her Concepts',
  aliases: [items[56]]
}, {
  name: 'Keyed Up',
  aliases: [items[18]]
}, {
  name: 'Learning Process',
  aliases: [items[1]]
}, {
  name: 'Macho',
  aliases: [items[57]]
}, {
  name: 'Naturopath',
  aliases: [items[66]]
}, {
  name: 'Never Back Down',
  aliases: [items[93]]
}, {
  name: 'Newtist',
  aliases: [items[61]]
}, {
  name: 'Prismatically Aligned',
  aliases: [items[334]]
}, {
  name: 'Rapidfire',
  aliases: [items[30]]
}, {
  name: 'Slaughter',
  aliases: [items[35]]
}, {
  name: 'The Basics',
  aliases: [items[6]]
}, {
  name: 'The Calm',
  aliases: [items[96]]
}, {
  name: 'The Demons And The Crabs',
  aliases: [items[89]]
}, {
  name: 'The Lone Survivor',
  aliases: [items[62]]
}, {
  name: 'The Long Road',
  aliases: [items[58]]
}, {
  name: 'Warmonger',
  aliases: [items[44]]
}, {
  name: 'Ascendant',
  aliases: [items[108]]
}, {
  name: 'Blackout',
  aliases: [items[112]]
}, {
  name: 'Bookworm',
  aliases: [items[111]]
}, {
  name: 'Cleanup Duty',
  aliases: [items[117]]
}, {
  name: 'Cosmic Explorer',
  aliases: [items[102]]
}, {
  name: 'Funded!',
  aliases: [items[109]]
}, {
  name: 'I Love Dying!',
  aliases: [items[120]]
}, {
  name: 'Mechanic',
  aliases: [items[105]]
}, {
  name: 'Moon Worshipper',
  aliases: [items[97]]
}, {
  name: 'Multikill!',
  aliases: [items[98]]
}, {
  name: 'One with the Woods',
  aliases: [items[110]]
}, {
  name: 'Warm For Life',
  aliases: [items[113]]
}, {
  name: '[REDACTED]',
  aliases: [items[106]]
}, {
  name: 'Acrid: Bad Medicine'
}, {
  name: 'Acrid: Easy Prey'
}, {
  name: 'Acrid: Pandemic'
}, {
  name: 'Acrid: Chunked!'
}, {
  name: 'Artificer: Massacre'
}, {
  name: 'Artificer: Orbital Bombardment'
}, {
  name: 'Captain: Wanderlust'
}, {
  name: 'Captain: Worth Every Penny'
}, {
  name: 'Commando: Godspeed'
}, {
  name: 'Commando: Incorruptible'
}, {
  name: 'Commando: Rolling Thunder'
}, {
  name: 'Engineer: 100% Calculated'
}, {
  name: 'Engineer: Better With Friends'
}, {
  name: 'Engineer: Zero Sum'
}, {
  name: 'Huntress: Finishing Touch'
}, {
  name: 'Huntress: One Shot, One Kill'
}, {
  name: 'Huntress: Piercing Wind'
}, {
  name: 'Loader: Earthshatter'
}, {
  name: 'Loader: Swing By'
}, {
  name: 'MUL-T: Gotcha!'
}, {
  name: 'MUL-T: Pest Control'
}, {
  name: 'Mercenary: Demon of the Skies'
}, {
  name: 'Mercenary: Ethereal'
}, {
  name: 'REX: Bushwacked'
}, {
  name: 'REX: Dunked'
}];
exports.challenges = challenges;