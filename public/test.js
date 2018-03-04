if (typeof WH === "undefined") {
    var g_staticUrl = (document.location.protocol !== "https:" ? "http:" : document.location.protocol) + "//wow.zamimg.com";
    var WH = {
        data: {},
        entities: {},
        wowheadRemote: true
    }
}
WH.isTouch = function() {
    if (!WH.wowheadRemote && typeof Platform !== "undefined") {
        WH.isTouch = function() {
            return Platform.isTouch()
        }
    } else {
        var b = navigator.userAgent || navigator.vendor || window.opera;
        var a = {
            isMobile: false,
            isTablet: false
        };
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
            a.isMobile = true
        }
        if (!a.isMobile && /(android|ipad|playbook|silk)/i.test(b)) {
            a.isTablet = true
        }
        WH.isTouch = (function(c) {
            return c.isMobile || c.isTablet
        }
        ).bind(null, a);
        WH.isMobile = (function(c) {
            return c
        }
        ).bind(null, a.isMobile);
        WH.isTablet = (function(c) {
            return c
        }
        ).bind(null, a.isTablet)
    }
    return WH.isTouch()
}
;
if (typeof $WowheadPower === "undefined") {
    var $WowheadPower = new function() {
        var isRemote = WH.wowheadRemote;
        var tooltipInitiatedByUser = false;
        var opt = {
            applyto: 3
        }, head = document.getElementsByTagName("head")[0], whcss, MODES = {
            "float": 0,
            attachToIcon: 1,
            screen: 2,
            attach: 3,
            attachWithoutScreenshot: 4
        }, screenModeWidthLimit = 550, legacyOptions = {
            colorLinks: "colorlinks",
            iconizeLinks: "iconizelinks",
            renameLinks: "renamelinks"
        }, currentType, currentId, currentLocale, currentDomain, currentParams, currentA, cursorX, cursorY, mode = MODES["float"], eventAttached = false, currentTouchTooltipSource = null, npcs = {}, objects = {}, items = {}, quests = {}, spells = {}, achievements = {}, holidays = {}, itemsets = {}, transmogsets = {}, outfits = {}, guides = {}, statistics = {}, currencies = {}, petabilities = {}, buildings = {}, followers = {}, champions = {}, missionabilities = {}, missions = {}, ships = {}, threats = {}, resources = {}, orderadvancements = {}, affixes = {}, zones = {}, showIcon = 1, showLogo = 1, SCAN_RESULT_INVALID_ELEMENT = -1, SCAN_RESULT_FAILURE = 0, SCAN_RESULT_SUCCESS = 1, STATUS_NONE = 0, STATUS_QUERYING = 1, STATUS_ERROR = 2, STATUS_NOTFOUND = 3, STATUS_OK = 4, STATUS_SCALES = 5, SCALES_NONE = 0, SCALES_LOADED = 1, SCALES_QUERYING = 2, TYPE_NPC = 1, TYPE_OBJECT = 2, TYPE_ITEM = 3, TYPE_ITEMSET = 4, TYPE_QUEST = 5, TYPE_SPELL = 6, TYPE_ZONE = 7, TYPE_ACHIEVEMENT = 10, TYPE_HOLIDAY = 12, TYPE_CURRENCY = 17, TYPE_BUILDING = 20, TYPE_FOLLOWER = 21, TYPE_MISSIONABILITY = 22, TYPE_MISSION = 23, TYPE_SHIP = 25, TYPE_THREAT = 26, TYPE_RESOURCE = 27, TYPE_CHAMPION = 28, TYPE_ORDERADVANCEMENT = 30, TYPE_AFFIX = 40, TYPE_GUIDE = 100, TYPE_TRANSMOGSET = 101, TYPE_OUTFIT = 110, TYPE_PETABILITY = 200, CURSOR_HSPACE = 15, CURSOR_VSPACE = 15, _LANG = {
            loading: "Loading...",
            noResponse: "No response from server :(",
            achievementComplete: "Achievement earned by $1 on $2/$3/$4"
        }, LOOKUPS = {
            1: [npcs, "npc", "NPC", "wowhead.com"],
            2: [objects, "object", "Object", "wowhead.com"],
            3: [items, "item", "Item", "wowhead.com"],
            4: [itemsets, "item-set", "Item Set", "wowhead.com"],
            5: [quests, "quest", "Quest", "wowhead.com"],
            6: [spells, "spell", "Spell", "wowhead.com"],
            7: [zones, "zone", "Zone", "wowhead.com"],
            10: [achievements, "achievement", "Achievement", "wowhead.com"],
            12: [holidays, "event", "Holiday", "wowhead.com"],
            17: [currencies, "currency", "Currency", "wowhead.com"],
            20: [buildings, "building", "Building", "wowhead.com"],
            21: [followers, "follower", "Follower", "wowhead.com"],
            22: [missionabilities, "mission-ability", "Mission Ability", "wowhead.com"],
            23: [missions, "mission", "Mission", "wowhead.com"],
            25: [ships, "ship", "Ship", "wowhead.com"],
            26: [threats, "threat", "Threat", "wowhead.com"],
            27: [resources, "resource", "Resource", "wowhead.com"],
            28: [champions, "champion", "Champion", "wowhead.com"],
            30: [orderadvancements, "order-advancement", "Order Advancement", "wowhead.com"],
            40: [affixes, "affix", "Affix", "wowhead.com"],
            100: [guides, "guide", "Guide", "wowhead.com"],
            101: [transmogsets, "transmog-set", "Transmog Set", "wowhead.com"],
            110: [outfits, "outfit", "Outfit", "wowhead.com"],
            200: [petabilities, "pet-ability", "Pet Ability", "wowhead.com"]
        }, STEALTH_TYPES = [TYPE_GUIDE], SCALES = {
            3: {
                url: "/data=item-scaling&1"
            },
            6: {
                url: "/data=spell-scaling&1"
            }
        }, LOCALES = {
            0: "enus",
            1: "kokr",
            2: "frfr",
            3: "dede",
            4: "zhcn",
            6: "eses",
            7: "ruru",
            8: "ptbr",
            9: "itit",
            ptr: "ptr",
            beta: "beta",
            bfa: "beta"
        }, REDIRECTS = {
            wotlk: "www",
            cata: "www",
            mop: "www",
            wod: "www",
            legion: "www"
        };
        if (isRemote) {
            var Locale = {
                getId: function() {
                    return 0
                },
                getName: function() {
                    return "enus"
                }
            }
        }
        if (typeof LANG === "undefined") {
            var LANG = {
                tooltip_genericrating: '<span class="q2">Equip: Increases your $1 by <!--rtg$2-->$3&nbsp;<small>(<!--rtg%$2-->0&nbsp;@&nbsp;L<!--lvl-->0)</small>.</span><br />',
                tooltip_reforged: "Reforged ($1 $2 &rarr; $1 $3)",
                traits: {
                    agi: ["Agility", "Agi", "Agi"],
                    arcres: ["Arcane resistance", "Arcane Resist", "ArcR"],
                    arcsplpwr: ["Arcane spell power", "Arcane Power", "ArcP"],
                    armor: ["Armor", "Armor", "Armor"],
                    armorbonus: ["Additional armor", "Bonus Armor", "AddAr"],
                    armorpenrtng: ["Armor penetration rating", "Armor Pen", "Pen"],
                    atkpwr: ["Attack power", "AP", "AP"],
                    block: ["Block value", "Block Value", "BkVal"],
                    blockrtng: ["Block rating", "Block", "Block"],
                    critstrkrtng: ["Critical strike rating", "Crit", "Crit"],
                    defrtng: ["Defense rating", "Defense", "Def"],
                    dmg: ["Weapon damage", "Damage", "Dmg"],
                    dmgmax1: ["Maximum damage", "Max Damage", "Max"],
                    dmgmin1: ["Minimum damage", "Min Damage", "Min"],
                    dodgertng: ["Dodge rating", "Dodge", "Dodge"],
                    dps: ["Damage per second", "DPS", "DPS"],
                    exprtng: ["Expertise rating", "Expertise", "Exp"],
                    firres: ["Fire resistance", "Fire Resist", "FirR"],
                    firsplpwr: ["Fire spell power", "Fire Power", "FireP"],
                    frores: ["Frost resistance", "Frost Resist", "FroR"],
                    frosplpwr: ["Frost spell power", "Frost Power", "FroP"],
                    hastertng: ["Haste rating", "Haste", "Haste"],
                    health: ["Health", "Health", "Hlth"],
                    healthrgn: ["Health regeneration", "HP5", "HP5"],
                    hitrtng: ["Hit rating", "Hit", "Hit"],
                    holres: ["Holy resistance", "Holy Resist", "HolR"],
                    holsplpwr: ["Holy spell power", "Holy Power", "HolP"],
                    "int": ["Intellect", "Int", "Int"],
                    level: ["Level", "Level", "Lvl"],
                    mana: ["Mana", "Mana", "Mana"],
                    manargn: ["Mana regeneration", "MP5", "MP5"],
                    mastrtng: ["Mastery rating", "Mastery", "Mastery"],
                    mleatkpwr: ["Melee attack power", "Melee AP", "AP"],
                    mlecritstrkrtng: ["Melee critical strike rating", "Melee Crit", "Crit"],
                    mledmgmax: ["Melee maximum damage", "Melee Max Damage", "Max"],
                    mledmgmin: ["Melee minimum damage", "Melee Min Damage", "Min"],
                    mledps: ["Melee DPS", "Melee DPS", "DPS"],
                    mlehastertng: ["Melee haste rating", "Melee Haste", "Haste"],
                    mlehitrtng: ["Melee hit rating", "Melee Hit", "Hit"],
                    mlespeed: ["Melee speed", "Melee Speed", "Speed"],
                    natres: ["Nature resistance", "Nature Resist", "NatR"],
                    natsplpwr: ["Nature spell power", "Nature Power", "NatP"],
                    nsockets: ["Number of sockets", "Sockets", "Sockt"],
                    parryrtng: ["Parry rating", "Parry", "Parry"],
                    reqarenartng: ["Required personal and team arena rating", "Req Rating", "Rating"],
                    reqlevel: ["Required level", "Req Level", "Level"],
                    resirtng: ["PvP Resilience rating", "PvP Resilience", "Resil"],
                    rgdatkpwr: ["Ranged attack power", "Ranged AP", "RAP"],
                    rgdcritstrkrtng: ["Ranged critical strike rating", "Ranged Crit", "Crit"],
                    rgddmgmax: ["Ranged maximum damage", "Ranged Max Damage", "Max"],
                    rgddmgmin: ["Ranged minimum damage", "Ranged Min Damage", "Min"],
                    rgddps: ["Ranged DPS", "Ranged DPS", "DPS"],
                    rgdhastertng: ["Ranged haste rating", "Ranged Haste", "Haste"],
                    rgdhitrtng: ["Ranged hit rating", "Ranged Hit", "Hit"],
                    rgdspeed: ["Ranged speed", "Ranged Speed", "Speed"],
                    sepbasestats: "Base stats",
                    sepdefensivestats: "Defensive stats",
                    sepindividualstats: "Individual stats",
                    sepmisc: "Miscellaneous",
                    sepoffensivestats: "Offensive stats",
                    sepresistances: "Resistances",
                    sepweaponstats: "Weapon stats",
                    shares: ["Shadow resistance", "Shadow Resist", "ShaR"],
                    shasplpwr: ["Shadow spell power", "Shadow Power", "ShaP"],
                    speed: ["Speed", "Speed", "Speed"],
                    spi: ["Spirit", "Spi", "Spi"],
                    splcritstrkrtng: ["Spell critical strike rating", "Spell Crit", "Crit"],
                    spldmg: ["Damage done by spells", "Spell Damage", "Dmg"],
                    splheal: ["Healing done by spells", "Healing", "Heal"],
                    splpwr: ["Spell power", "Spell Power", "SP"],
                    splhastertng: ["Spell haste rating", "Spell Haste", "Haste"],
                    splhitrtng: ["Spell hit rating", "Spell Hit", "Hit"],
                    splpen: ["Spell penetration", "Spell Pen", "Pen"],
                    sta: ["Stamina", "Sta", "Sta"],
                    str: ["Strength", "Str", "Str"],
                    pvppower: ["PvP Power", "PvPPower", "PvPPower"]
                }
            }
        }
        function init() {
            if (isRemote) {
                var jsFiles = ["basic.js?10"];
                if (getOption("iconSize")) {
                    jsFiles.push("global/Icon.js")
                }
                for (var i = 0, jsFile; jsFile = jsFiles[i]; i++) {
                    var script = document.createElement("script");
                    script.src = g_staticUrl + "/js/" + jsFile;
                    head.appendChild(script)
                }
            } else {
                attachEvent();
                var ptrIsActive = typeof g_ptractive !== "undefined" && g_ptractive;
                if (!ptrIsActive) {
                    REDIRECTS.ptr = "www"
                }
            }
            for (var type in SCALES) {
                for (var localeId in LOCALES) {
                    SCALES[type][localeId] = SCALES_NONE
                }
            }
        }
        function initCSS() {
            var hide = getOption("hide");
            if (!hide) {
                return
            }
            if (typeof whcss !== "undefined") {
                return
            }
            if (!document.styleSheets) {
                return
            }
            var style = document.createElement("style");
            style.type = "text/css";
            head.appendChild(style);
            if (!window.createPopup) {
                head.appendChild(document.createTextNode(""))
            }
            whcss = document.styleSheets[document.styleSheets.length - 1];
            for (var k in hide) {
                if (!hide.hasOwnProperty(k) || !hide[k]) {
                    continue
                }
                if (whcss.insertRule) {
                    whcss.insertRule(".wowhead-tooltip .whtt-" + k + "{display: none}", whcss.cssRules.length)
                } else {
                    if (whcss.addRule) {
                        whcss.addRule(".wowhead-tooltip .whtt-" + k, "display: none", -1)
                    }
                }
            }
        }
        function getOption(key) {
            var options = getOptions();
            if (!options) {
                return null
            }
            if (!options.hasOwnProperty(key)) {
                if (legacyOptions[key] && options.hasOwnProperty(legacyOptions[key])) {
                    return options[legacyOptions[key]]
                }
                return null
            }
            return options[key]
        }
        function getOptions() {
            if (typeof whTooltips === "object") {
                return whTooltips
            }
            if (typeof wowhead_tooltips === "object") {
                return wowhead_tooltips
            }
            return null
        }
        function attachEvent() {
            if (eventAttached) {
                return
            }
            eventAttached = true;
            WH.aE(document, "keydown", function(e) {
                e = WH.normalizeEvent(e);
                switch (e.keyCode) {
                case 27:
                    $WowheadPower.clearTouchTooltip();
                    WH.Tooltip.hide();
                    break
                }
            });
            if (WH.isTouch()) {
                attachTouchEvents()
            } else {
                WH.aE(document, "mouseover", onMouseOver)
            }
        }
        this.attachTouchTooltips = function(scope) {
            if (!WH.isTouch()) {
                return
            }
            if (scope && scope.nodeType === 1) {
                attachTouchEvents(scope)
            }
        }
        ;
        function onDOMReady(func) {
            if (typeof jQuery !== "undefined") {
                jQuery(func);
                return
            }
            (/in/.test(document.readyState)) ? setTimeout(onDOMReady.bind(null, func), 9) : func()
        }
        function attachTouchEvents(scope) {
            if (!WH.isTouch()) {
                return
            }
            onDOMReady(function() {
                scope = scope || document.body;
                var targets = WH.gE(scope, "a");
                for (var i in targets) {
                    if (targets[i].onclick == null) {
                        targets[i].onclick = onTouch;
                        continue
                    }
                    WH.aE(targets[i], "click", onTouch)
                }
            })
        }
        this.init = function() {
            if (getOption("iconSize") && typeof Icon === "undefined") {
                setTimeout($WowheadPower.init, 10);
                return
            }
            if (isRemote) {
                WH.ae(head, WH.ce("link", {
                    type: "text/css",
                    href: g_staticUrl + "/css/legacy/basic.css?13",
                    rel: "stylesheet"
                }));
                if (getOption("iconSize")) {
                    WH.ae(head, WH.ce("link", {
                        type: "text/css",
                        href: g_staticUrl + "/css/legacy/wowhead/icon.css",
                        rel: "stylesheet"
                    }))
                }
            }
            attachEvent();
            onDOMReady(function() {
                if (getOptions()) {
                    for (var i = 0; i < document.links.length; i++) {
                        var link = document.links[i];
                        scanElement(link)
                    }
                    initCSS()
                }
            })
        }
        ;
        function updateCursorPos(e) {
            var pos = WH.getCursorPos(e);
            cursorX = pos.x;
            cursorY = pos.y
        }
        function scanElement(element, event) {
            if (element.nodeName !== "A" && element.nodeName !== "AREA") {
                return SCAN_RESULT_INVALID_ELEMENT
            }
            var linkOptions = element.rel;
            try {
                if (element.dataset && element.dataset.hasOwnProperty("wowhead")) {
                    linkOptions = element.dataset.wowhead
                } else {
                    if (element.getAttribute && element.getAttribute("data-wowhead")) {
                        linkOptions = element.getAttribute("data-wowhead")
                    }
                }
            } catch (er) {
                void (0)
            }
            if ((!element.href.length && !linkOptions) || (linkOptions && /^np\b/.test(linkOptions)) || (element.getAttribute("data-disable-wowhead-tooltip") === "true") || (WH.isTouch() && element.getAttribute("data-disable-wowhead-touch-tooltip") === "true")) {
                return SCAN_RESULT_FAILURE
            }
            var i0, i1, i2, matches, params = {};
            currentParams = params;
            var parseParams = function(match, key, value) {
                switch (key) {
                case "buff":
                case "map":
                case "noimage":
                case "notip":
                case "premium":
                case "pvp":
                case "sock":
                case "text":
                case "twcata":
                case "twmists":
                case "twtbc":
                case "twwotlk":
                    params[key] = true;
                    break;
                case "artk":
                case "c":
                case "dd":
                case "ddsize":
                case "diff":
                case "diffnew":
                case "ench":
                case "gem1lvl":
                case "gem2lvl":
                case "gem3lvl":
                case "ilvl":
                case "level":
                case "lvl":
                case "nlc":
                case "pwr":
                case "q":
                case "rand":
                case "rank":
                case "spec":
                case "tink":
                case "upgd":
                    params[key] = parseInt(value);
                    break;
                case "abil":
                case "bonus":
                case "cri":
                case "forg":
                case "gem1bonus":
                case "gem2bonus":
                case "gem3bonus":
                case "gems":
                case "know":
                case "pcs":
                case "rewards":
                    params[key] = value.split(":");
                    break;
                case "domain":
                case "who":
                    params[key] = value;
                    break;
                case "image":
                    if (value === "premium") {
                        params[value] = true
                    } else {
                        params[key] = value ? ("_" + value) : ""
                    }
                    break;
                case "transmog":
                    if (value === "hidden") {
                        params[key] = value
                    } else {
                        params[key] = parseInt(value)
                    }
                    break;
                case "when":
                    params[key] = new Date(parseInt(value));
                    break
                }
            };
            var relativeUrl = false;
            if (opt.applyto & 1) {
                i1 = 2;
                i2 = 3;
                if (element.href.indexOf("http://") == 0 || element.href.indexOf("https://") == 0) {
                    i0 = 1;
                    matches = element.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|guide|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix)=([0-9\.-]+)/);
                    if (!matches) {
                        matches = element.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/(guide)s\/([^\?&]+)/)
                    }
                    showLogo = 0
                } else {
                    relativeUrl = true;
                    matches = element.href.match(/()\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|guide)=([0-9\.-]+)/);
                    if (!matches) {
                        matches = element.href.match(/()\/(guide)s\/([^\?&]+)/)
                    }
                    showLogo = 1
                }
            }
            if (matches == null && linkOptions && (opt.applyto & 2)) {
                i0 = 0;
                i1 = 1;
                i2 = 2;
                matches = linkOptions.match(/(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|guide).?([0-9\.-]+)/);
                showLogo = 1;
                relativeUrl = true
            }
            element.href.replace(/([a-zA-Z0-9]+)=?([a-zA-Z0-9:-]*)/g, parseParams);
            if (linkOptions) {
                linkOptions.replace(/([a-zA-Z0-9]+)=?([a-zA-Z0-9:-]*)/g, parseParams)
            }
            if (params.gems && params.gems.length > 0) {
                var i;
                for (i = Math.min(3, params.gems.length - 1); i >= 0; --i) {
                    if (parseInt(params.gems[i])) {
                        break
                    }
                }
                ++i;
                if (i == 0) {
                    delete params.gems
                } else {
                    if (i < params.gems.length) {
                        params.gems = params.gems.slice(0, i)
                    }
                }
            }
            var bonusParams = ["bonus", "gem1bonus", "gem2bonus", "gem3bonus"];
            for (var paramX = 0, paramName; paramName = bonusParams[paramX]; paramX++) {
                if (params[paramName] && params[paramName].length > 0) {
                    for (i = Math.min(16, params[paramName].length - 1); i >= 0; --i) {
                        if (parseInt(params[paramName][i])) {
                            break
                        }
                    }
                    ++i;
                    if (i == 0) {
                        delete params[paramName]
                    } else {
                        if (i < params[paramName].length) {
                            params[paramName] = params[paramName].slice(0, i)
                        }
                    }
                }
            }
            if (params.abil && params.abil.length > 0) {
                var i, ab = [], j;
                for (i = 0; i < Math.min(8, params.abil.length); i++) {
                    if (j = parseInt(params.abil[i])) {
                        ab.push(j)
                    }
                }
                if (ab.length == 0) {
                    delete params.abil
                } else {
                    params.abil = ab
                }
            }
            if (params.rewards && params.rewards.length > 0) {
                var i;
                for (i = Math.min(3, params.rewards.length - 1); i >= 0; --i) {
                    if (/^\d+.\d+$/.test(params.rewards[i])) {
                        break
                    }
                }
                ++i;
                if (i == 0) {
                    delete params.rewards
                } else {
                    if (i < params.rewards.length) {
                        params.rewards = params.rewards.slice(0, i)
                    }
                }
            }
            if (matches) {
                var locale, domain = "www";
                currentA = element;
                if (params.domain) {
                    domain = params.domain
                } else {
                    if (i0 && matches[i0]) {
                        domain = matches[i0]
                    } else {
                        if (relativeUrl) {
                            if (WH.isSet("g_beta") && g_beta) {
                                domain = "beta"
                            } else {
                                if (WH.isSet("g_ptr") && g_ptr) {
                                    domain = "ptr"
                                }
                            }
                        }
                    }
                }
                if (window.location.pathname.indexOf("&ptr") != -1) {
                    domain = "ptr"
                }
                if (REDIRECTS[domain]) {
                    domain = REDIRECTS[domain]
                }
                locale = WH.getLocaleFromDomain(domain);
                if (/\bptr\d*\b/.test(domain)) {
                    locale = "ptr"
                } else {
                    if (/\bbeta\d*\b/.test(domain)) {
                        locale = "beta"
                    }
                }
                currentDomain = domain;
                if (element.href.indexOf("#") != -1 && document.location.href.indexOf(matches[i1] + "=" + matches[i2]) != -1) {
                    return SCAN_RESULT_FAILURE
                }
                var useScreenMode = false;
                if (WH.isTouch()) {
                    if ("innerWidth"in window) {
                        useScreenMode = window.innerWidth < screenModeWidthLimit
                    } else {
                        var documentElement = document.documentElement || document.body;
                        useScreenMode = !isNaN(documentElement.clientWidth) && documentElement.clientWidth < screenModeWidthLimit
                    }
                }
                mode = MODES["float"];
                if (useScreenMode) {
                    mode = MODES.screen
                } else {
                    if ((element.parentNode.className.indexOf("icon") == 0 && element.parentNode.nodeName == "DIV") || element.getAttribute("data-whattach") == "icon") {
                        mode = MODES.attachToIcon
                    } else {
                        if (WH.isTouch() || element.getAttribute("data-whattach") == "true") {
                            mode = MODES.attach
                        } else {
                            var parentNode = element.parentNode;
                            var count = 0;
                            while (parentNode) {
                                if (parentNode.className && parentNode.className.indexOf("menu-inner") == 0) {
                                    mode = MODES.attachWithoutScreenshot;
                                    break
                                }
                                count++;
                                if (count > 9) {
                                    break
                                }
                                parentNode = parentNode.parentNode
                            }
                        }
                    }
                }
                if (!WH.isTouch() && !element.onmouseout) {
                    if (mode == MODES["float"]) {
                        element.onmousemove = onMouseMove
                    }
                    element.onmouseout = onMouseOut
                }
                if (event) {
                    tooltipInitiatedByUser = true;
                    updateCursorPos(event)
                }
                var typeName = matches[i1];
                var type = WH.getIdFromTypeName(typeName)
                  , typeId = matches[i2];
                WH.Tooltip.showingTooltip = true;
                if (typeof element.overrideTooltip == "object") {
                    var html = element.overrideTooltip.html;
                    var html2 = element.overrideTooltip.html2;
                    if (typeof element.overrideTooltip.htmlGenerator == "function") {
                        html = element.overrideTooltip.htmlGenerator(element.overrideTooltip)
                    }
                    if (typeof element.overrideTooltip.html2Generator == "function") {
                        html2 = element.overrideTooltip.html2Generator(element.overrideTooltip)
                    }
                    if (element.overrideTooltip.spanClass) {
                        html = '<span class="' + element.overrideTooltip.spanClass + '">' + html + "</span>";
                        if (html2) {
                            html2 = '<span class="' + element.overrideTooltip.spanClass + '">' + html2 + "</span>"
                        }
                    }
                    showTooltip(html, element.overrideTooltip.icon, element.overrideTooltip.map, element.overrideTooltip.spellData, html2, element.overrideTooltip.image, element.overrideTooltip.imageClass)
                } else {
                    display(type, typeId, locale, params)
                }
                if (event || !getOptions()) {
                    return SCAN_RESULT_SUCCESS
                }
                var data = LOOKUPS[type][0][getFullId(typeId, params)];
                var timeout = function(t) {
                    if (data.status[locale] != STATUS_OK && data.status[locale] != STATUS_NOTFOUND) {
                        window.setTimeout(function() {
                            timeout(t)
                        }, 5);
                        return SCAN_RESULT_SUCCESS
                    }
                    if (getOption("renameLinks") || t.getAttribute("data-wh-rename-link") === "true") {
                        eval("t.innerHTML = '<span>' + data.name_" + LOCALES[locale] + " + '</span>';")
                    }
                    var iconSize = t.getAttribute("data-wh-icon-size");
                    if ((iconSize || getOption("iconizeLinks")) && (type === TYPE_ITEM || type === TYPE_ACHIEVEMENT || type === TYPE_SPELL) && data.icon) {
                        if (!iconSize) {
                            iconSize = getOption("iconSize")
                        }
                        iconizeLink(t, data, iconSize)
                    }
                    if (getOption("colorLinks")) {
                        if (type === TYPE_ITEM) {
                            t.className += " q" + data.quality
                        }
                    }
                };
                timeout(element);
                return SCAN_RESULT_SUCCESS
            }
        }
        function iconizeLink(link, data, iconSize) {
            if (!iconSize || typeof Icon === "undefined" || WH.inArray(Icon.sizes, iconSize) < 0) {
                iconSize = "tiny"
            }
            var iconName = data.icon.toLocaleLowerCase();
            if (iconSize === "tiny") {
                link.className += " icontinyl";
                if (link.style.setProperty) {
                    link.style.setProperty("padding-left", "18px", "important")
                } else {
                    link.style.paddingLeft = "18px"
                }
                link.style.verticalAlign = "center";
                link.style.background = "url(" + g_staticUrl + "/images/wow/icons/tiny/" + iconName + ".gif) left center no-repeat"
            } else {
                if (link.getAttribute("data-wh-icon-added") === "true") {
                    return
                }
                WH.aef(link, Icon.create(iconName, Icon.sizeIds[iconSize], undefined, false, undefined, undefined, undefined, undefined, true))
            }
            link.setAttribute("data-wh-icon-added", "true")
        }
        function onMouseOver(e) {
            e = WH.normalizeEvent(e);
            var t = e._target;
            var i = 0;
            while (t != null && i < 5 && scanElement(t, e) === SCAN_RESULT_INVALID_ELEMENT) {
                t = t.parentNode;
                ++i
            }
        }
        function onTouch(e) {
            e = WH.normalizeEvent(e);
            var t = this;
            if (t.hasWHTouchTooltip === true) {
                return
            }
            var i = 0;
            var result;
            while (t != null && i < 5 && (result = scanElement(t, e)) === SCAN_RESULT_INVALID_ELEMENT) {
                t = t.parentNode;
                ++i
            }
            if (result === SCAN_RESULT_SUCCESS) {
                if (currentTouchTooltipSource !== null) {
                    currentTouchTooltipSource.removeAttribute("data-showing-touch-tooltip");
                    currentTouchTooltipSource.hasWHTouchTooltip = false
                }
                currentTouchTooltipSource = t;
                currentTouchTooltipSource.hasWHTouchTooltip = true;
                if (e.stopPropagation) {
                    e.stopPropagation()
                }
                if (e.preventDefault) {
                    e.preventDefault()
                }
                return false
            }
        }
        function onMouseMove(e) {
            e = WH.normalizeEvent(e);
            updateCursorPos(e);
            WH.Tooltip.move(cursorX, cursorY, 0, 0, CURSOR_HSPACE, CURSOR_VSPACE)
        }
        function onMouseOut() {
            currentType = null;
            currentA = null;
            WH.Tooltip.hide()
        }
        function getTooltipField(locale, n) {
            var prefix = "tooltip";
            if (currentParams && currentParams.buff) {
                prefix = "buff"
            }
            if (currentParams && currentParams.text) {
                prefix = "text"
            }
            if (currentParams && currentParams.premium) {
                prefix = "tooltip_premium"
            }
            return prefix + (n ? n : "") + "_" + LOCALES[locale]
        }
        function getIconField() {
            return (currentParams && currentParams.text) ? "text_icon" : "icon"
        }
        function getSpellsField(locale) {
            return (currentParams && currentParams.buff ? "buff" : "") + "spells_" + LOCALES[locale]
        }
        function getImageField(locale, whichimage) {
            if (typeof whichimage === "undefined") {
                return "image_NONE"
            }
            return "image" + whichimage + "_" + LOCALES[locale]
        }
        function initElement(type, id, locale) {
            var arr = LOOKUPS[type][0];
            if (arr[id] == null) {
                arr[id] = {}
            }
            if (arr[id].status == null) {
                arr[id].status = {}
            }
            if (arr[id].response == null) {
                arr[id].response = {}
            }
            if (arr[id].status[locale] == null) {
                arr[id].status[locale] = STATUS_NONE
            }
            if (arr[id].callbacks == null) {
                arr[id].callbacks = []
            }
        }
        function display(type, id, locale, params) {
            if (!params) {
                params = {}
            }
            var fullId = getFullId(id, params);
            currentType = type;
            currentId = fullId;
            currentLocale = locale;
            currentParams = params;
            initElement(type, fullId, locale);
            var arr = LOOKUPS[type][0];
            if (arr[fullId].status[locale] == STATUS_OK || arr[fullId].status[locale] == STATUS_NOTFOUND) {
                var imageUrl = arr[fullId][getImageField(locale, params.image)];
                var imageClass = arr[fullId]["image" + params.image + "_class"];
                var ovr = getImageOverride(type, id);
                if (ovr) {
                    imageUrl = ovr[0];
                    imageClass = ovr[1]
                }
                showTooltip(arr[fullId][getTooltipField(locale)], arr[fullId][getIconField()], arr[fullId].map, arr[fullId][getSpellsField(locale)], arr[fullId][getTooltipField(locale, 2)], imageUrl, imageClass)
            } else {
                if (arr[fullId].status[locale] == STATUS_QUERYING || arr[fullId].status[locale] == STATUS_SCALES) {
                    if (WH.inArray(STEALTH_TYPES, type) == -1) {
                        showTooltip(_LANG.loading)
                    }
                } else {
                    request(type, id, locale, WH.inArray(STEALTH_TYPES, type) != -1, params)
                }
            }
        }
        function request(type, id, locale, stealth, params) {
            var fullId = getFullId(id, params);
            var arr = LOOKUPS[type][0];
            if (arr[fullId].status[locale] != STATUS_NONE && arr[fullId].status[locale] != STATUS_ERROR) {
                return
            }
            arr[fullId].status[locale] = STATUS_QUERYING;
            if (!stealth) {
                arr[fullId].timer = setTimeout(function() {
                    showLoading.apply(this, [type, fullId, locale])
                }, 333)
            }
            var p = "";
            for (var i in params) {
                switch (i) {
                case "abil":
                case "artk":
                case "bonus":
                case "dd":
                case "ddsize":
                case "diff":
                case "diffnew":
                case "ench":
                case "gem1bonus":
                case "gem1lvl":
                case "gem2bonus":
                case "gem2lvl":
                case "gem3bonus":
                case "gem3lvl":
                case "gems":
                case "ilvl":
                case "level":
                case "lvl":
                case "nlc":
                case "pvp":
                case "q":
                case "rand":
                case "rank":
                case "rewards":
                case "sock":
                case "spec":
                case "tink":
                case "transmog":
                case "twcata":
                case "twmists":
                case "twtbc":
                case "twwotlk":
                case "upgd":
                    if (typeof params[i] === "object") {
                        p += "&" + i + "=" + params[i].join(":")
                    } else {
                        if (params[i] === true) {
                            p += "&" + i
                        } else {
                            p += "&" + i + "=" + params[i]
                        }
                    }
                    break
                }
            }
            var localeDomain = WH.getDomainFromLocale(locale);
            if (locale == "ptr") {
                localeDomain = "ptr"
            } else {
                if (locale == "beta") {
                    localeDomain = "beta"
                }
            }
            var url = (document.location.protocol != "https:" ? "http:" : document.location.protocol) + "//" + localeDomain + "." + LOOKUPS[type][3];
            if (typeof g_dev !== "undefined" && g_dev) {
                if (locale == "ptr" || locale == "beta") {
                    var part1 = document.location.hostname.substr(0, document.location.hostname.indexOf(".") + 1);
                    var part2 = document.location.hostname.substr(document.location.hostname.indexOf("."), document.location.hostname.indexOf(LOOKUPS[type][3]) - document.location.hostname.indexOf(".") - 1);
                    part2 = part2.replace("." + localeDomain, "");
                    url = url.replace(new RegExp("//" + localeDomain), "//" + part1 + localeDomain + part2)
                }
                if (document.location.port != "") {
                    url += ((document.location.port.indexOf(":") < 0) ? ":" : "") + document.location.port
                }
            }
            WH.ajaxIshRequest(url + "/" + LOOKUPS[type][1] + "=" + id + p + "&power");
            if (SCALES[type] && SCALES[type][locale] == SCALES_NONE) {
                WH.ajaxIshRequest(url + SCALES[type].url);
                SCALES[type][locale] = SCALES_QUERYING
            }
            if (type == TYPE_ITEM && params && params.hasOwnProperty("lvl") && SCALES[TYPE_SPELL] && SCALES[TYPE_SPELL][locale] == SCALES_NONE) {
                WH.ajaxIshRequest(url + SCALES[TYPE_SPELL].url);
                SCALES[TYPE_SPELL][locale] = SCALES_QUERYING
            }
        }
        function showTooltip(html, icon, map, spellData, html2, image, imageClass) {
            initCSS();
            if (!tooltipInitiatedByUser) {
                return
            }
            if (currentA && currentA._fixTooltip) {
                html = currentA._fixTooltip(html, currentType, currentId, currentA)
            }
            var notFound = false;
            if (!html) {
                html = LOOKUPS[currentType][2] + " not found :(";
                icon = "inv_misc_questionmark";
                notFound = true
            } else {
                if (currentParams != null) {
                    if (WH.reforgeStats && currentParams.forg && WH.reforgeStats[currentParams.forg]) {
                        var reforge = WH.reforgeStats[currentParams.forg];
                        var _ = [reforge.i1];
                        for (var i in WH.individualToGlobalStat) {
                            if (WH.individualToGlobalStat[i] == _[0]) {
                                _.push(i)
                            }
                        }
                        var m;
                        if ((m = html.match(new RegExp("(<!--(stat|rtg)(" + _.join("|") + ")-->)[+-]?([0-9]+)"))) && !html.match(new RegExp("<!--(stat|rtg)" + reforge.i2 + "-->[+-]?[0-9]+"))) {
                            var value = Math.floor(m[4] * reforge.v)
                              , statName = LANG.traits[reforge.s2][0];
                            if (reforge.i2 == 6) {
                                html = html.replace("<!--rs-->", "<br />+" + value + " " + statName)
                            } else {
                                html = html.replace("<!--rr-->", WH.sprintfGlobal(LANG.tooltip_genericrating, statName.toLowerCase(), reforge.i2, value))
                            }
                            html = html.replace(m[0], m[1] + (m[4] - value));
                            html = html.replace("<!--rf-->", '<span class="q2">' + WH.sprintfGlobal(LANG.tooltip_reforged, value, LANG.traits[reforge.s1][2], LANG.traits[reforge.s2][2]) + "</span><br />")
                        }
                    }
                    if (currentParams.pcs && currentParams.pcs.length) {
                        var itemId = currentId.match(/^(\d+)/);
                        itemId = itemId[1];
                        var n = 0;
                        for (var i = 0, len = currentParams.pcs.length; i < len; ++i) {
                            var m;
                            if (m = html.match(new RegExp("<span><!--si([0-9]+:)*" + currentParams.pcs[i] + '(:[0-9]+)*--><a href="/??item=(\\d+)">(.+?)</a></span>'))) {
                                html = html.replace(m[0], '<span class="q13"><!--si' + currentParams.pcs[i] + '--><a href="/item=' + m[3] + '">' + ((WH.isSet("g_items") && g_items[currentParams.pcs[i]]) ? g_items[currentParams.pcs[i]]["name_" + (!isNaN(parseInt(currentLocale)) ? LOCALES[currentLocale] : "enus")] : m[4]) + "</a></span>");
                                ++n
                            }
                        }
                        if (n > 0) {
                            html = html.replace("(0/", "(" + n + "/");
                            html = html.replace(new RegExp("<span>\\(([0-" + n + "])\\)","g"), '<span class="q2">($1)')
                        }
                    }
                    if (currentParams.know && currentParams.know.length) {
                        html = WH.setTooltipSpells(html, currentParams.know, spellData)
                    }
                    if (currentParams.lvl) {
                        html = WH.setTooltipLevel(html, (currentParams.lvl ? currentParams.lvl : 100), currentParams.buff)
                    }
                    if (currentParams.who && currentParams.when) {
                        html = html.replace("<table><tr><td><br />", '<table><tr><td><br /><span class="q2">' + WH.sprintf(_LANG.achievementComplete, currentParams.who, currentParams.when.getMonth() + 1, currentParams.when.getDate(), currentParams.when.getFullYear()) + "</span><br /><br />");
                        html = html.replace(/class="q0"/g, 'class="r3"')
                    }
                    if (currentParams.notip && image) {
                        html = "";
                        icon = null
                    }
                    if ((currentType == TYPE_PETABILITY) && currentParams.pwr) {
                        html = html.replace(/<!--sca-->(\d+)<!--sca-->/g, function(m, p1) {
                            return Math.floor(parseInt(p1) * (1 + 0.05 * currentParams.pwr))
                        })
                    }
                    if ((currentType == TYPE_ACHIEVEMENT) && currentParams.cri) {
                        for (var i = 0; i < currentParams.cri.length; i++) {
                            html = html.replace(new RegExp("<!--cr" + parseInt(currentParams.cri[i]) + ":[^<]+","g"), '<span class="q2">$&</span>')
                        }
                    }
                }
            }
            if ((!isRemote) && WH.isSet("g_user") && ("lists"in g_user) && WH.isSet("g_completion")) {
                var comphtml = "";
                var complist = ((currentType in g_types) && (g_types[currentType]in g_completion)) ? g_completion[g_types[currentType]] : false;
                if (complist && (currentType == TYPE_QUEST)) {
                    if (notFound || (html == _LANG.loading) || (LOOKUPS[currentType][0][currentId].hasOwnProperty("worldquesttype") && LOOKUPS[currentType][0][currentId]["worldquesttype"] != 0) || (LOOKUPS[currentType][0][currentId].hasOwnProperty("daily") && LOOKUPS[currentType][0][currentId]["daily"] != 0) || (LOOKUPS[currentType][0][currentId].hasOwnProperty("weekly") && LOOKUPS[currentType][0][currentId]["weekly"] != 0)) {
                        complist = false
                    }
                }
                var showBlanks = !(complist && (currentType in g_completion_categories) && (WH.inArray(g_completion_categories[currentType], LOOKUPS[currentType][0][currentId].completion_category) == -1));
                if (complist) {
                    for (var c in g_user.lists) {
                        var l = g_user.lists[c];
                        if (!(l.id in complist)) {
                            continue
                        }
                        var compId = /^-?\d+(?:\.\d+)?/.exec(currentId);
                        compId = (compId && compId.length) ? compId[0] : currentId;
                        var completed = (WH.inArray(complist[l.id], compId) != -1);
                        if (!completed && !showBlanks) {
                            continue
                        }
                        comphtml += '<br><span class="progress-icon ' + (completed ? "progress-8" : "progress-0") + '"></span> ';
                        comphtml += l.character + " - " + l.realm + " " + l.region
                    }
                }
                if (comphtml != "") {
                    html += '<br><span class="q">' + window.LANG.completion + ":</span>" + comphtml
                }
            }
            if ((!isRemote) && (currentType == TYPE_ITEM) && WH.isSet("g_completion") && ("bagscans"in g_completion)) {
                var itemId = /^\d+/.exec(currentId);
                if (itemId) {
                    itemId = itemId[0]
                } else {
                    itemId = -1
                }
                var scans = [];
                for (var scanId in g_completion.bagscans) {
                    scans.push(scanId)
                }
                var bhtml = "";
                while (scanId = scans.pop()) {
                    if (g_completion.bagscans[scanId].items.hasOwnProperty(itemId)) {
                        bhtml += '<tr><td class="q2" style="text-align: right">' + g_completion.bagscans[scanId].items[itemId] + '&nbsp;</td><td style="white-space: nowrap">' + g_completion.bagscans[scanId].name + "</td></tr>"
                    }
                }
                if (bhtml != "") {
                    html += '<br><span class="q">' + window.LANG.tooltip_bagscanner + "</span><br><table>" + bhtml + "</table>"
                }
            }
            if (!isRemote && currentType == TYPE_TRANSMOGSET && typeof WH.getPreferredTransmogRace !== "undefined") {
                var trg = WH.getPreferredTransmogRace();
                html = html.replace(/\/modelviewer\/transmog\/\d+\/\d+\//g, "/modelviewer/transmog/" + trg.race + "/" + (trg.gender - 1) + "/")
            }
            if ((!isRemote) && html && (currentParams.diff || currentParams.diffnew || currentParams.noimage)) {
                image = "";
                imageClass = ""
            }
            html = html.replace("http://", "//");
            if (currentParams.map && map && map.getMap) {
                html2 = map.getMap()
            }
            switch (mode) {
            case MODES.screen:
                WH.Tooltip.showInScreen(currentA, html, null, html2, image, imageClass, icon);
                break;
            case MODES.attachToIcon:
            case MODES.attach:
                WH.Tooltip.setIcon(mode == MODES.attachToIcon ? null : icon);
                WH.Tooltip.show(currentA, html, null, null, null, html2, image, imageClass);
                break;
            case MODES.attachWithoutScreenshot:
                WH.Tooltip.setIcon(icon);
                WH.Tooltip.show(currentA, html, null, null, null, html2);
                break;
            case MODES["float"]:
            default:
                WH.Tooltip.setIcon(icon);
                WH.Tooltip.showAtXY(html, cursorX, cursorY, CURSOR_HSPACE, CURSOR_VSPACE, html2, image, imageClass)
            }
            if (isRemote && WH.Tooltip.logo) {
                WH.Tooltip.logo.style.display = (showLogo ? "block" : "none")
            }
        }
        function showLoading(type, id, locale) {
            if (currentType == type && currentId == id && currentLocale == locale) {
                showTooltip(_LANG.loading);
                var arr = LOOKUPS[type][0];
                arr[id].timer = setTimeout(function() {
                    notFound.apply(this, [type, id, locale])
                }, 3850)
            }
        }
        function notFound(type, id, locale) {
            var arr = LOOKUPS[type][0];
            arr[id].status[locale] = STATUS_ERROR;
            if (currentType == type && currentId == id && currentLocale == locale) {
                showTooltip(_LANG.noResponse)
            }
        }
        function getFullId(id, params) {
            return id + (params.rand ? "r" + params.rand : "") + (params.ench ? "e" + params.ench : "") + (params.gems ? "g" + params.gems.join(",") : "") + (params.sock ? "s" : "") + (params.upgd ? "u" + params.upgd : "") + (params.twtbc ? "twtbc" : "") + (params.twwotlk ? "twwotlk" : "") + (params.twcata ? "twcata" : "") + (params.twmists ? "twmists" : "") + (params.ilvl ? "ilvl" + params.ilvl : "") + (params.lvl ? "lvl" + params.lvl : "") + (params.gem1lvl ? "g1lvl" + params.gem1lvl : "") + (params.gem2lvl ? "g2lvl" + params.gem2lvl : "") + (params.gem3lvl ? "g3lvl" + params.gem3lvl : "") + (params.artk ? "ak" + params.artk : "") + (params.nlc ? "nlc" + params.nlc : "") + (params.transmog ? "transmog" + params.transmog : "") + (params.tink ? "tink" + params.tink : "") + (params.pvp ? "pvp" : "") + (params.bonus ? "b" + params.bonus.join(",") : "") + (params.gem1bonus ? "g1b" + params.gem1bonus.join(",") : "") + (params.gem2bonus ? "g2b" + params.gem2bonus.join(",") : "") + (params.gem3bonus ? "g3b" + params.gem3bonus.join(",") : "") + (params.q ? "q" + params.q : "") + (params.level ? "level" + params.level : "") + (params.abil ? "abil" + params.abil.join(",") : "") + (params.dd ? "dd" + params.dd : "") + (params.ddsize ? "ddsize" + params.ddsize : "") + (params.rank ? "rank" + params.rank : "") + (params.spec ? "spec" + params.spec : "") + (params.rewards ? "rewards" + params.rewards.join(":") : "")
        }
        this.clearTouchTooltip = function(initialClose) {
            if (currentTouchTooltipSource) {
                if (initialClose !== true) {
                    currentTouchTooltipSource.removeAttribute("data-showing-touch-tooltip")
                }
                currentTouchTooltipSource.hasWHTouchTooltip = false
            }
            currentTouchTooltipSource = null;
            if (initialClose !== true && document.querySelectorAll) {
                var touchTooltipSources = document.querySelectorAll("[data-showing-touch-tooltip]");
                if (touchTooltipSources && touchTooltipSources.length) {
                    for (var i = 0, touchTooltipSource; touchTooltipSource = touchTooltipSources[i]; i++) {
                        touchTooltipSource.removeAttribute("data-showing-touch-tooltip")
                    }
                }
            }
            if (WH.Tooltip.screen) {
                WH.Tooltip.screenInnerWrapper.scrollTop = 0;
                WH.Tooltip.screenInnerWrapper.scrollLeft = 0;
                WH.Tooltip.screen.style.display = "none";
                WH.Tooltip.mobileTooltipShown = false
            }
            WH.Tooltip.hide();
            $WowheadPower.setParent()
        }
        ;
        function getImageOverride(type, id) {
            if (isRemote) {
                return false
            }
            if (!g_user.premium) {
                return false
            }
            if (WH.Tooltip.hideScreenshots) {
                return false
            }
            var arr = "g_" + LOOKUPS[type][1] + "s";
            if ((!WH.isSet(arr)) || (!window[arr])) {
                return false
            }
            arr = window[arr];
            if (!arr[id]) {
                return false
            }
            if (arr[id]["screenshot"]) {
                return [WH.getScreenshotUrl(arr[id]["screenshot"], "small"), "screenshot"]
            }
            return false
        }
        this.loadScales = function(type, locale) {
            var arr = LOOKUPS[type][0];
            for (var i in LOCALES) {
                if (locale == i || (!locale && !isNaN(i))) {
                    SCALES[type][i] = SCALES_LOADED;
                    for (var id in arr) {
                        if (arr[id].status[i] == STATUS_SCALES && arr[id].response[i]) {
                            arr[id].response[i]()
                        }
                    }
                    if (type == TYPE_SPELL) {
                        var arr2 = LOOKUPS[TYPE_ITEM][0];
                        for (var id2 in arr2) {
                            if (arr2[id2].status[i] == STATUS_SCALES && arr2[id2].response[i]) {
                                arr2[id2].response[i]()
                            }
                        }
                    }
                }
            }
        }
        ;
        this.register = function(type, id, locale, json) {
            var arr = LOOKUPS[type][0];
            initElement(type, id, locale);
            if (SCALES[type] && SCALES[type][locale] != SCALES_LOADED) {
                arr[id].status[locale] = STATUS_SCALES;
                arr[id].response[locale] = this.register.bind(this, type, id, locale, json);
                return
            }
            if ((typeof id === "string" && (id.indexOf("lvl") === 0 || id.match(/[^i]lvl/))) && SCALES[TYPE_SPELL] && SCALES[TYPE_SPELL][locale] != SCALES_LOADED) {
                arr[id].status[locale] = STATUS_SCALES;
                arr[id].response[locale] = this.register.bind(this, type, id, locale, json);
                return
            }
            if (arr[id].timer) {
                clearTimeout(arr[id].timer);
                arr[id].timer = null
            }
            if (!WH.wowheadRemote && json.map) {
                if (arr[id].map == null) {
                    arr[id].map = new Mapper({
                        parent: WH.ce("div"),
                        zoom: 3,
                        zoomable: false,
                        buttons: false
                    })
                }
                arr[id].map.update(json.map);
                delete json.map
            }
            WH.cO(arr[id], json);
            if (arr[id].status[locale] == STATUS_QUERYING || arr[id].status[locale] == STATUS_SCALES) {
                if (arr[id][getTooltipField(locale)]) {
                    arr[id].status[locale] = STATUS_OK
                } else {
                    arr[id].status[locale] = STATUS_NOTFOUND
                }
            }
            if (WH.Tooltip.showingTooltip && currentType == type && id == currentId && currentLocale == locale) {
                var imageUrl = arr[id][getImageField(locale, currentParams.image)];
                var imageClass = arr[id]["image" + currentParams.image + "_class"];
                var ovr = getImageOverride(type, id);
                if (ovr) {
                    imageUrl = ovr[0];
                    imageClass = ovr[1]
                }
                showTooltip(arr[id][getTooltipField(locale)], arr[id].icon, arr[id].map, arr[id][getSpellsField(locale)], arr[id][getTooltipField(locale, 2)], imageUrl, imageClass)
            }
            while (arr[id].callbacks.length) {
                (arr[id].callbacks.pop())()
            }
        }
        ;
        this.registerNpc = function(id, locale, json) {
            this.register(TYPE_NPC, id, locale, json)
        }
        ;
        this.registerCurrency = function(id, locale, json) {
            this.register(TYPE_CURRENCY, id, locale, json)
        }
        ;
        this.registerPetAbility = function(id, locale, json) {
            this.register(TYPE_PETABILITY, id, locale, json)
        }
        ;
        this.registerZone = function(id, locale, json) {
            this.register(TYPE_ZONE, id, locale, json)
        }
        ;
        this.registerObject = function(id, locale, json) {
            this.register(TYPE_OBJECT, id, locale, json)
        }
        ;
        this.registerItem = function(id, locale, json) {
            this.register(TYPE_ITEM, id, locale, json)
        }
        ;
        this.registerHoliday = function(id, locale, json) {
            this.register(TYPE_HOLIDAY, id, locale, json)
        }
        ;
        this.registerItemSet = function(id, locale, json) {
            this.register(TYPE_ITEMSET, id, locale, json)
        }
        ;
        this.registerTransmogSet = function(id, locale, json) {
            this.register(TYPE_TRANSMOGSET, id, locale, json)
        }
        ;
        this.registerOutfit = function(id, locale, json) {
            this.register(TYPE_OUTFIT, id, locale, json)
        }
        ;
        this.registerQuest = function(id, locale, json) {
            this.register(TYPE_QUEST, id, locale, json)
        }
        ;
        this.registerSpell = function(id, locale, json) {
            this.register(TYPE_SPELL, id, locale, json)
        }
        ;
        this.registerAchievement = function(id, locale, json) {
            this.register(TYPE_ACHIEVEMENT, id, locale, json)
        }
        ;
        this.registerBuilding = function(id, locale, json) {
            this.register(TYPE_BUILDING, id, locale, json)
        }
        ;
        this.registerFollower = function(id, locale, json) {
            this.register(TYPE_FOLLOWER, id, locale, json)
        }
        ;
        this.registerChampion = function(id, locale, json) {
            this.register(TYPE_CHAMPION, id, locale, json)
        }
        ;
        this.registerMissionAbility = function(id, locale, json) {
            this.register(TYPE_MISSIONABILITY, id, locale, json)
        }
        ;
        this.registerMission = function(id, locale, json) {
            this.register(TYPE_MISSION, id, locale, json)
        }
        ;
        this.registerShip = function(id, locale, json) {
            this.register(TYPE_SHIP, id, locale, json)
        }
        ;
        this.registerThreat = function(id, locale, json) {
            this.register(TYPE_THREAT, id, locale, json)
        }
        ;
        this.registerResource = function(id, locale, json) {
            this.register(TYPE_RESOURCE, id, locale, json)
        }
        ;
        this.registerOrderAdvancement = function(id, locale, json) {
            this.register(TYPE_ORDERADVANCEMENT, id, locale, json)
        }
        ;
        this.registerAffix = function(id, locale, json) {
            this.register(TYPE_AFFIX, id, locale, json)
        }
        ;
        this.registerGuide = function(id, locale, json) {
            this.register(TYPE_GUIDE, id, locale, json)
        }
        ;
        this.displayTooltip = function(type, id, locale, params) {
            display(type, id, locale, params)
        }
        ;
        this.request = function(type, id, locale, params) {
            if (!params) {
                params = {}
            }
            var fullId = getFullId(id, params);
            initElement(type, fullId, locale);
            request(type, id, locale, 1, params)
        }
        ;
        this.requestItem = function(id, params) {
            this.request(TYPE_ITEM, id, Locale.getId(), params)
        }
        ;
        this.requestSpell = function(id) {
            this.request(TYPE_SPELL, id, Locale.getId())
        }
        ;
        this.getStatus = function(type, id, locale) {
            var arr = LOOKUPS[type][0];
            if (arr[id] != null) {
                return arr[id].status[locale]
            } else {
                return STATUS_NONE
            }
        }
        ;
        this.getItemStatus = function(id, locale) {
            this.getStatus(TYPE_ITEM, id, locale)
        }
        ;
        this.getSpellStatus = function(id, locale) {
            this.getStatus(TYPE_SPELL, id, locale)
        }
        ;
        this.triggerTooltip = function(element, evt) {
            scanElement(element, evt || {
                target: element
            })
        }
        ;
        this.refreshLinks = function() {
            if (getOptions()) {
                for (var i = 0; i < document.links.length; i++) {
                    var link = document.links[i];
                    var node = link.parentNode;
                    var isTooltipChild = false;
                    while (node != null) {
                        if ((" " + node.className + " ").replace(/[\n\t]/g, " ").indexOf(" wowhead-tooltip ") > -1) {
                            isTooltipChild = true;
                            break
                        }
                        node = node.parentNode
                    }
                    if (!isTooltipChild) {
                        scanElement(link)
                    }
                }
            }
            this.hideTooltip()
        }
        ;
        this.setParent = function(newParent) {
            WH.Tooltip.reset();
            WH.Tooltip.prepare(newParent)
        }
        ;
        this.replaceWithTooltip = function(e, type, id, locale, params) {
            if (!params) {
                params = {}
            }
            if (!locale) {
                locale = (Locale || window.Locale).getId()
            }
            if (typeof e == "string") {
                e = document.getElementById(e)
            }
            if (!e || !e.id) {
                return false
            }
            var fullId = getFullId(id, params);
            initElement(type, fullId, locale);
            var arr = LOOKUPS[type][0];
            switch (this.getStatus(type, id, locale)) {
            case STATUS_OK:
                if (!e.parentNode) {
                    return true
                }
                while (e.hasChildNodes()) {
                    e.removeChild(e.firstChild)
                }
                e.className += " wowhead-tooltip-inline" + (arr[fullId].icon ? " wowhead-tooltip-inline-icon" : "");
                WH.Tooltip.append(e.id, arr[fullId][getTooltipField(locale)], true, arr[fullId].icon);
                return true;
                break;
            case STATUS_QUERYING:
            case STATUS_NONE:
                arr[fullId].callbacks.push(this.replaceWithTooltip.bind(this, e, type, id, locale, params));
                this.request(type, id, locale, params);
                return true
            }
            return false
        }
        ;
        if (isRemote) {
            this.set = function(foo) {
                WH.cO(opt, foo)
            }
            ;
            this.showTooltip = function(e, tooltip, icon) {
                updateCursorPos(e);
                showTooltip(tooltip, icon)
            }
            ;
            this.hideTooltip = function() {
                WH.Tooltip.hide()
            }
            ;
            this.moveTooltip = function(e) {
                onMouseMove(e)
            }
        }
        init()
    }
}
;
