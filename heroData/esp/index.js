const abaddon=require( './abadonn.json')
const alchemist=require( './alchemist.json')
const acientApparition=require( './ancient_apparition.json')
const antimage =require('./antimage.json')
const arcWarden =require('./arc_warden.json')
const axe =require('./axe.json')
const bane=require('./bane.json')
const batrider=require('./batrider.json')
const beastMaster =require('./beastmaster.json')
const bloodseeker =require('./bloodseeker.json')
const bountyHunter =require('./bounty_hunter.json')
const brewmaster =require('./brewmaster.json')
const bristleback =require('./bristleback.json')
const broodmother =require('./broodmother.json')
const centaur =require('./centaur.json')
const chaosKnight =require('./chaos_knight.json')
const chen =require('./chen.json')
const clinkz =require('./clinkz.json')
const clockwerk =require('./clockwerk.json')
const crystalMaiden =require('./crystal_maiden.json')
const darkSeer =require('./dark_seer.json')
const darkWillow =require('./dark_willow.json')
const dawnbreaker =require('./dawnbreaker.json')
const dazzle =require('./dazzle.json')
const deathProphet =require('./death_prophet.json')
const disruptor =require('./disruptor.json')
const doom =require('./doom.json')
const dragonKnight =require('./dragon_knigth.json')
const drowRanger =require('./drow_ranger.json')
const earthSpirit = require('./earth_spirit.json')
const elderTitan = require('./elder_titan.json')
const emberSpirit = require('./ember_spirit.json')
const enchantress = require('./enchantress.json')
const enigma = require('./enigma.json')
const facelessVoid = require('./faceless_void.json')
const furion = require('./furion.json')
const grimstroke = require('./grimstroke.json')
const gyrocopter = require('./gyrocopter.json')
const hoodwink = require('./hoodwink.json')
const huskar = require('./huskar.json')
const invoker= require('./invoker.json')
const io= require('./io.json')
const jakiro = require('./jakiro.json')
const juggernaut = require('./juggernaut.json')
const kepperOfTheLight = require('./keeper_of_the_light.json')
const kunkka = require('./kunkka.json')
const legionCommander= require('./legion_commander.json')
const leshrac = require('./leshrac.json')
const lich = require('./lich')
const lifestealer = require('./lifestealer.json')
const lina = require('./lina.json')
const lion = require('./lion.json')
const loneDruid = require('./lone_druid.json')
const luna = require('./luna.json')
const lycan = require('./lycan.json')
const magnus = require('./magnus.json')
const marci = require('./marci.json')
const mars = require('./mars.json')
const meepo = require('./meepo.json')
const mirana = require('./mirana.json')
const monkeyKing= require('./monkey_king.json')
const morphing = require('./morphling.json')
const nagaSiren = require('./naga_siren.json')
const necrophos = require('./necrophos.json')
const nigthStalker= require('./night_stalker.json')
const nyxAssassin = require('./nyx_assassin.json')
const ogreMagi = require('./ogre_magi.json')
const omniknight = require('./omniknight.json')
const oracle = require('./oracle.json')
const outworldDestroyer = require('./outworld_destroyer.json')
const pangolier = require('./pangolier.json')
const phantonAssassin = require('./phantom_assassin.json')
const phantonLancer = require('./phanton_lancer.json')
const phoenix = require('./phoenix.json')
const puck = require('./puck.json')
const pudge = require('./pudge.json')
const pugna = require('./pugna.json')
const queenOfPain = require('./queen_of_pain.json')
const razor = require('./razor.json')
const riki = require('./riki.json')
const rubick = require('./rubick.json')
const sandKing = require('./sandking.json')
const shadowDemon = require('./shadow_demon.json')
const shadowShaman = require('./shadow_shaman.json')
const shadowFiend = require('./shadowfiend.json')
const silencer = require('./silencer.json')
const skywrathMage = require('./skywrath_mage.json')
const slardar = require('./slardar.json')
const slark = require('./slark.json')
const snapfire = require('./snapfire.json')
const sniper = require('./sniper.json')
const spectre = require('./spectre.json')
const spiritBreaker = require('./spirit_breaker.json')
const stormSpirit = require('./storm_spirit.json')
const sven = require('./sven.json')
const techies = require('./techies.json')
const templarAssassin = require('./templar_assassin.json')
const terrorblade = require('./terrorblade.json')
const tidehunter = require('./tidehunter.json')
const timbersaw = require('./timbersaw.json')
const tinker = require('./tinker.json')
const tiny = require('./tiny.json')
const treant = require('./treant.json')
const trollWarlord= require('./troll_warlord.json')
const tusk = require('./tusk.json')
const underlord = require('./underlord.json')
const undying = require('./undying.json')
const ursa = require('./ursa.json')
const vengefulSpirit= require('./vengeful_spirit.json')
const visage = require('./visage.json')
const venomancer = require('./venomancer.json')
const viper = require('./viper.json')
const voidSpirit = require('./void_spirit.json')
const warlock = require('./warlock.json')
const weaver = require('./weaver.json')
const windrunner = require('./windrunner.json')
const winterWyvern= require('./winter_wyvern.json')
const witchDoctor= require('./witch_doctor.json')
const wraithKing = require('./wraith_king.json')
const zeus = require('./zeus.json')
const heroesEsp= [
    abaddon,
    alchemist,
    acientApparition,
    antimage,
    arcWarden,
    axe,
    bane,
    batrider,
    beastMaster,
    bloodseeker,
    bountyHunter,
    brewmaster,
    bristleback,
    broodmother,
    centaur,
    chaosKnight,
    chen,
    clinkz,
    clockwerk,
    crystalMaiden,
    darkWillow,
    darkSeer,
    dawnbreaker,
    dazzle,
    deathProphet,
    disruptor,
    doom,
    dragonKnight,
    drowRanger,
    earthSpirit,
    elderTitan,
    emberSpirit,
    enchantress,
    enigma,
    facelessVoid,
    furion,
    grimstroke,
    gyrocopter,
    hoodwink,
    huskar,
    invoker,
    io,
    jakiro,
    juggernaut,
    kepperOfTheLight,
    kunkka,
    legionCommander,
    leshrac,
    lich,
    lifestealer,
    lina,
    lion,
    loneDruid,
    luna,
    lycan,
    magnus,
    marci,
    mars,
    meepo,
    mirana,
    monkeyKing,
    morphing,
    nagaSiren,
    necrophos,
    nigthStalker,
    nyxAssassin,
    ogreMagi,
    omniknight,
    oracle,
    outworldDestroyer,
    pangolier,
    phantonAssassin,
    phantonLancer,
    phoenix,
    puck,
    pudge,
    pugna,
    queenOfPain,
    razor,
    riki,
    rubick,
    sandKing,
    shadowDemon,
    shadowShaman,
    shadowFiend,
    silencer,
    skywrathMage,
    slardar,
    slark,
    snapfire,
    sniper,
    spectre,
    spiritBreaker,
    stormSpirit,
    sven,
    techies,
    templarAssassin,
    terrorblade,
    tidehunter,
    timbersaw,
    tinker,
    tiny,
    treant,
    trollWarlord,
    tusk,
    underlord,
    undying,
    ursa,
    vengefulSpirit,
    venomancer,
    viper,
    visage,
    voidSpirit,
    warlock,
    weaver,
    windrunner,
    winterWyvern,
    witchDoctor,
    wraithKing,
    zeus
]

module.exports= heroesEsp