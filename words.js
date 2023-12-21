//j'ai généré cette liste par le chat gpt et on peut ajouter d'autre mots autant qu'on veut
//REMARQUE: tous les mots sont en anglais
const words = [
    {
        word: "cello",
        hint: "A bass instrument in the violin family, held upright on the floor."
    },
    {
        word: "hydrogen",
        hint: "The lightest and most abundant chemical element in the universe."
    },
    {
        word: "canyon",
        hint: "A deep gorge, typically one with a river flowing through it."
    },
    {
        word: "mosaic",
        hint: "An image created by assembling small pieces of colored glass, stone, or other materials."
    },
    {
        word: "meteorology",
        hint: "The science dealing with the atmosphere and its phenomena, including weather and climate."
    },
    {
        word: "cricket",
        hint: "A game played with a ball and bat with two teams of eleven players."
    },
    {
        word: "latte",
        hint: "A type of coffee made with espresso and steamed milk."
    },
    {
        word: "hummingbird",
        hint: "A small nectar-feeding tropical bird known for its ability to hover in mid-air."
    },
    {
        word: "geography",
        hint: "The science dealing with the earth's surface and its features."
    },
    {
        word: "sushi",
        hint: "A Japanese dish typically made with rice and seafood, often raw."
    },
    {
        word: "blues",
        hint: "A music genre emanating from the African American spirituals and work songs."
    },
    {
        word: "microscope",
        hint: "An optical instrument used for viewing very small objects."
    },
    {
        word: "amethyst",
        hint: "A precious stone consisting of a violet or purple variety of quartz."
    },
    {
        word: "expedition",
        hint: "A journey undertaken by a group of people with a particular purpose, especially that of exploration."
    },
    {
        word: "biology",
        hint: "The study of living organisms, divided into many specialized fields."
    },
    {
        word: "skateboard",
        hint: "A short narrow board with two small wheels at each end, ridden by standing on it and pushing with one foot."
    },
    {
        word: "dawn",
        hint: "The first light of day; the time each morning at which daylight first begins."
    },
    {
        word: "espresso",
        hint: "A strong black coffee brewed by forcing steam through ground coffee beans."
    },
    {
        word: "waltz",
        hint: "A ballroom and folk dance in triple time, typically performed by a pair of dancers."
    },
    {
        word: "nebula",
        hint: "An interstellar cloud of dust, hydrogen, helium, and other ionized gases."
    },
    {
        word: "quartet",
        hint: "A group of four musicians or singers performing together."
    },
    {
        word: "geyser",
        hint: "A hot spring in which water intermittently boils, sending a tall column of water and steam into the air."
    },
    {
        word: "memoir",
        hint: "A historical account or biography written from personal knowledge or special sources."
    },
    {
        word: "bas-relief",
        hint: "A kind of sculpture in which the shapes are only slightly higher than the flat background."
    },
    {
        word: "concerto",
        hint: "A musical composition for a solo instrument or instruments accompanied by an orchestra."
    },
    {
        word: "culinary",
        hint: "Of or for cooking."
    },
    {
        word: "opera",
        hint: "A dramatic work in one or more acts, set to music for singers and instrumentalists."
    },
    {
        word: "cosmonaut",
        hint: "A Russian astronaut."
    },
    {
        word: "cascade",
        hint: "A small waterfall, typically one of several that fall in stages down a steep rocky slope."
    },
    {
        word: "innovation",
        hint: "A new method, idea, product, etc."
    },
    {
        word: "prism",
        hint: "A transparent optical element with flat, polished surfaces that refract light."
    },
    {
        word: "multiverse",
        hint: "An hypothetical set of various possible universes including the universe which we live in."
    },
    {
        word: "harp",
        hint: "A musical instrument consisting of a frame over which a series of strings are stretched, played by plucking."
    },
    {
        word: "getaway",
        hint: "An escape or quick departure, especially after committing a crime."
    },
    {
        word: "savanna",
        hint: "A grassy plain in tropical and subtropical regions, with few trees."
    },
    {
        word: "cinema",
        hint: "A theater where movies are shown for public entertainment."
    },
    {
        word: "smartphone",
        hint: "A mobile phone that performs many of the functions of a computer, typically with a touchscreen interface."
    },
    {
        word: "linguistics",
        hint: "The scientific study of language and its structure."
    },
    {
        word: "arid",
        hint: "Having little or no rain; too dry or barren to support vegetation."
    },
    {
        word: "anemone",
        hint: "A plant with brightly colored flowers."
    },
    {
        word: "alchemy",
        hint: "A medieval chemical science aimed to convert base metals into gold."
    },
    {
        word: "kaleidoscope",
        hint: "A tube containing mirrors and pieces of colored glass or paper, whose reflections produce changing patterns."
    },
    {
        word: "gentle",
        hint: "Mild in temperament or behavior; kind or tender."
    },
    {
        word: "spring",
        hint: "An elastic device, typically a helical metal coil, that can be pressed or pulled but returns to its former shape when released."
    },
    {
        word: "archeology",
        hint: "The study of human history and prehistory through the excavation of sites and the analysis of artifacts."
    },
    {
        word: "spellbinding",
        hint: "Holding one's attention completely as though by magic; fascinating."
    },
    {
        word: "conundrum",
        hint: "A confusing and difficult problem or question."
    },
    {
        word: "cryptic",
        hint: "Having a meaning that is mysterious or obscure."
    },
    {
        word: "riddle",
        hint: "A mystifying, misleading, or puzzling question posed as a problem to be solved or guessed."
    },
    {
        word: "murmur",
        hint: "A soft, indistinct sound made by a person or group of people speaking quietly or at a distance."
    },
    {
        word: "silhouette",
        hint: "The dark shape and outline of someone or something visible in restricted light against a brighter background."
    },
    {
        word: "clandestine",
        hint: "Kept secret or done secretively, especially because illicit."
    },
    {
        word: "exploration",
        hint: "The action of traveling in or through an unfamiliar area in order to learn about it."
    },
    {
        word: "capricious",
        hint: "Given to sudden and unaccountable changes of mood or behavior."
    },
    {
        word: "clarify",
        hint: "To make (a statement or situation) less confused and more clearly comprehensible."
    },
    {
        word: "reveal",
        hint: "To make (previously unknown or secret information) known to others."
    },
    {
        word: "mirage",
        hint: "An optical illusion caused by atmospheric conditions, especially the appearance of a sheet of water in a desert or on a hot road."
    },
    {
        word: "lunar",
        hint: "Of, determined by, relating to, or resembling the moon."
    },
    {
        word: "luminous",
        hint: "Full of or shedding light; bright or shining, especially in the dark."
    },
    {
        word: "reminiscence",
        hint: "A story told about a past event remembered by the narrator."
    },
    {
        word: "dazzling",
        hint: "Extremely bright, especially so as to blind the eyes temporarily."
    },
];