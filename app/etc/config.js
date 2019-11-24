const config = {
    search: {
        searchResultsPageSize: 25,
        maxQueryLength: 64,
        filters: {
            villager: {
                q: {
                    name: 'Name/Phrase',
                    canAggregate: false
                },
                gender: {
                    name: 'Gender',
                    values: {male: 'Male', female: 'Female'},
                    canAggregate: true,
                    sort: 1
                },
                game: {
                    name: 'Games',
                    values: {
                        'nl': 'New Leaf',
                        'cf': 'City Folk',
                        'ww': 'Wild World',
                        'afe+': 'Animal Forest e+',
                        'ac': 'Animal Crossing',
                        'af+': 'Animal Forest+',
                        'af': 'Animal Forest'
                    },
                    canAggregate: true,
                    sort: 2
                },
                personality: {
                    name: 'Personality',
                    values: {
                        cranky: 'Cranky',
                        jock: 'Jock',
                        lazy: 'Lazy',
                        normal: 'Normal',
                        peppy: 'Peppy',
                        smug: 'Smug',
                        snooty: 'Snooty',
                        uchi: 'Uchi'
                    },
                    canAggregate: true,
                    sort: 3
                },
                species: {
                    name: 'Species',
                    values: {
                        alligator: 'Alligator',
                        anteater: 'Anteater',
                        bear: 'Bear',
                        bird: 'Bird',
                        bull: 'Bull',
                        cat: 'Cat',
                        chicken: 'Chicken',
                        cow: 'Cow',
                        cub: 'Cub',
                        deer: 'Deer',
                        dog: 'Dog',
                        duck: 'Duck',
                        eagle: 'Eagle',
                        elephant: 'Elephant',
                        frog: 'Frog',
                        goat: 'Goat',
                        gorilla: 'Gorilla',
                        hamster: 'Hamster',
                        hippo: 'Hippo',
                        horse: 'Horse',
                        kangaroo: 'Kangaroo',
                        koala: 'Koala',
                        lion: 'Lion',
                        monkey: 'Monkey',
                        mouse: 'Mouse',
                        octopus: 'Octopus',
                        ostrich: 'Ostrich',
                        penguin: 'Penguin',
                        pig: 'Pig',
                        rabbit: 'Rabbit',
                        rhino: 'Rhino',
                        sheep: 'Sheep',
                        squirrel: 'Squirrel',
                        tiger: 'Tiger',
                        wolf: 'Wolf',
                    },
                    canAggregate: true,
                    sort: 4
                },
                zodiac: {
                    name: 'Star Sign',
                    values: {
                        aquarius: 'Aquarius',
                        aries: 'Aries',
                        cancer: 'Cancer',
                        capricorn: 'Capricorn',
                        gemini: 'Gemini',
                        leo: 'Leo',
                        libra: 'Libra',
                        pisces: 'Pisces',
                        sagittarius: 'Sagittarius',
                        scorpio: 'Scorpio',
                        taurus: 'Taurus',
                        virgo: 'Virgo'
                    },
                    canAggregate: true,
                    sort: 5
                }
            }
        }
    }
};

module.exports = config;