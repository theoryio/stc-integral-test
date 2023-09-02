import getT from 'next-translate/getT';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data: any = await request.json();
        const dummy_data: any = {
            ar: {
                title: "Mission: Impossible",
                type: "سلسلة أفلام",
                genre: "أكشن/إثارة",
                image: "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_FMjpg_UY711_.jpg",
                about: "Mission: Impossible هي سلسلة من أفلام التجسس الأمريكية، مستوحاة من المسلسل التلفزيوني لعام 1966 الذي أنشأه بروس جيلر. المسلسل من إنتاج وبطولة توم كروز، الذي يلعب دور إيثان هانت، عميل قوة المهمات المستحيلة.",
                directors: "Christopher McQuarrie, John Woo, J.J. Abrams, Brad Bird, Brian De Palma",
                production: "Bad Robot Productions, Skydance Media, MORE",
                based_on: "Mission: Impossible; by Bruce Geller",
                revenue: "$4.13 مليار; (7 أفلام)",
                release_date: "1996–الوقت الحالي",
                rating: 4.5,
                movies: [
                    {
                        title: "Mission: Impossible",
                        release_date: "1996",
                        image: "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_FMjpg_UY711_.jpg"
                    },
                    {
                        title: "Mission: Impossible 2",
                        release_date: "2000",
                        image: "https://upload.wikimedia.org/wikipedia/en/4/48/Mission_Impossible_II.jpg"
                    },
                    {
                        title: "Mission: Impossible III",
                        release_date: "2006",
                        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Mission_Impossible_III.jpg"
                    },
                    {
                        title: "Mission: Impossible – Ghost Protocol",
                        release_date: "2011",
                        image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Mission_impossible_ghost_protocol.jpg"
                    },
                    {
                        title: "Mission: Impossible – Rogue Nation",
                        release_date: "2015",
                        image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Mission_Impossible_Rogue_Nation_poster.jpg"
                    },
                    {
                        title: "Mission: Impossible – Fallout",
                        release_date: "2018",
                        image: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
                    },
                    {
                        title: "Mission: Impossible – Dead Reckoning Part One",
                        release_date: "2023",
                        image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg"
                    }
                ],
                cast: [
                    {
                        name: "Tom Cruise",
                        character: "Ethan Hunt",
                        image: "https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX140_CR0,2,140,140_.jpg"
                    },
                    {
                        name: "Jon Voight",
                        character: "Jim Phelps",
                        image: "https://m.media-amazon.com/images/M/MV5BMTc2NTE3NDA3M15BMl5BanBnXkFtZTgwMDMyNTM1MjE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                    },
                    {
                        name: "Emmanuelle Béart",
                        character: "Claire(as Emmanuelle Beart)",
                        image: "https://m.media-amazon.com/images/M/MV5BMjExNDQ4ODU2Ml5BMl5BanBnXkFtZTYwMjI0ODgz._V1_QL75_UX140_CR0,13,140,140_.jpg"
                    },
                    {
                        name: "Tom Cruise",
                        character: "Ethan Hunt",
                        image: "https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX140_CR0,2,140,140_.jpg"
                    },
                    {
                        name: "Jon Voight",
                        character: "Jim Phelps",
                        image: "https://m.media-amazon.com/images/M/MV5BMTc2NTE3NDA3M15BMl5BanBnXkFtZTgwMDMyNTM1MjE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                    },
                    {
                        name: "Emmanuelle Béart",
                        character: "Claire(as Emmanuelle Beart)",
                        image: "https://m.media-amazon.com/images/M/MV5BMjExNDQ4ODU2Ml5BMl5BanBnXkFtZTYwMjI0ODgz._V1_QL75_UX140_CR0,13,140,140_.jpg"
                    }
                ],
                reviews: [
                    {
                        rating: 4,
                        comment: "4/4 The iconic theme song to 'Mission Impossible' by Lalo Schifrin is one of the most rousing and memorable pieces of music I've ever heard. I have never forgotten that tune ever since I first heard it at the age of seven, and throughout my adolescenthood, I became obsessed with it. Now (at the age of twenty four), I finally had the opportunity to watch the critically acclaimed star-vehicle for ..."
                    },
                    {
                        rating: 4,
                        comment: "4/4 The iconic theme song to 'Mission Impossible' by Lalo Schifrin is one of the most rousing and memorable pieces of music I've ever heard. I have never forgotten that tune ever since I first heard it at the age of seven, and throughout my adolescenthood, I became obsessed with it. Now (at the age of twenty four), I finally had the opportunity to watch the critically acclaimed star-vehicle for ..."
                    }
                ],
                trailer: "https://www.youtube.com/watch?v=Ohws8y572KE"
            },
            en: {
                title: "Mission: Impossible",
                type: "Film series",
                genre: "Action/Thriller",
                image: "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_FMjpg_UY711_.jpg",
                about: "Mission: Impossible is a series of American action spy films, based on the 1966 TV series created by Bruce Geller. The series is mainly produced by and stars Tom Cruise, who plays Ethan Hunt, an agent of the Impossible Missions Force.",
                directors: "Christopher McQuarrie, John Woo, J.J. Abrams, Brad Bird, Brian De Palma",
                production: "Bad Robot Productions, Skydance Media, MORE",
                based_on: "Mission: Impossible; by Bruce Geller",
                revenue: "$4.13 billion; (7 films)",
                release_date: "1996–present",
                rating: 4.5,
                movies: [
                    {
                        title: "Mission: Impossible",
                        release_date: "1996",
                        image: "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_FMjpg_UY711_.jpg"
                    },
                    {
                        title: "Mission: Impossible 2",
                        release_date: "2000",
                        image: "https://upload.wikimedia.org/wikipedia/en/4/48/Mission_Impossible_II.jpg"
                    },
                    {
                        title: "Mission: Impossible III",
                        release_date: "2006",
                        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Mission_Impossible_III.jpg"
                    },
                    {
                        title: "Mission: Impossible – Ghost Protocol",
                        release_date: "2011",
                        image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Mission_impossible_ghost_protocol.jpg"
                    },
                    {
                        title: "Mission: Impossible – Rogue Nation",
                        release_date: "2015",
                        image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Mission_Impossible_Rogue_Nation_poster.jpg"
                    },
                    {
                        title: "Mission: Impossible – Fallout",
                        release_date: "2018",
                        image: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
                    },
                    {
                        title: "Mission: Impossible – Dead Reckoning Part One",
                        release_date: "2023",
                        image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg"
                    }
                ],
                cast: [
                    {
                        name: "Tom Cruise",
                        character: "Ethan Hunt",
                        image: "https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX140_CR0,2,140,140_.jpg"
                    },
                    {
                        name: "Jon Voight",
                        character: "Jim Phelps",
                        image: "https://m.media-amazon.com/images/M/MV5BMTc2NTE3NDA3M15BMl5BanBnXkFtZTgwMDMyNTM1MjE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                    },
                    {
                        name: "Emmanuelle Béart",
                        character: "Claire(as Emmanuelle Beart)",
                        image: "https://m.media-amazon.com/images/M/MV5BMjExNDQ4ODU2Ml5BMl5BanBnXkFtZTYwMjI0ODgz._V1_QL75_UX140_CR0,13,140,140_.jpg"
                    },
                    {
                        name: "Tom Cruise",
                        character: "Ethan Hunt",
                        image: "https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX140_CR0,2,140,140_.jpg"
                    },
                    {
                        name: "Jon Voight",
                        character: "Jim Phelps",
                        image: "https://m.media-amazon.com/images/M/MV5BMTc2NTE3NDA3M15BMl5BanBnXkFtZTgwMDMyNTM1MjE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                    },
                    {
                        name: "Emmanuelle Béart",
                        character: "Claire(as Emmanuelle Beart)",
                        image: "https://m.media-amazon.com/images/M/MV5BMjExNDQ4ODU2Ml5BMl5BanBnXkFtZTYwMjI0ODgz._V1_QL75_UX140_CR0,13,140,140_.jpg"
                    }
                ],
                reviews: [
                    {
                        rating: 4,
                        comment: "4/4 The iconic theme song to 'Mission Impossible' by Lalo Schifrin is one of the most rousing and memorable pieces of music I've ever heard. I have never forgotten that tune ever since I first heard it at the age of seven, and throughout my adolescenthood, I became obsessed with it. Now (at the age of twenty four), I finally had the opportunity to watch the critically acclaimed star-vehicle for ..."
                    },
                    {
                        rating: 4,
                        comment: "4/4 The iconic theme song to 'Mission Impossible' by Lalo Schifrin is one of the most rousing and memorable pieces of music I've ever heard. I have never forgotten that tune ever since I first heard it at the age of seven, and throughout my adolescenthood, I became obsessed with it. Now (at the age of twenty four), I finally had the opportunity to watch the critically acclaimed star-vehicle for ..."
                    }
                ],
                trailer: "https://www.youtube.com/watch?v=Ohws8y572KE"
            }
        };
        return NextResponse.json({ success: true, movie: dummy_data[data.lang] });
    } catch (err) {
        console.log("err", err)
        return NextResponse.json({ success: false, });
    }
}