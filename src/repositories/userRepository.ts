import User from "../entities/User.ts";
import { db } from "../config/db.ts";

const userCollection = db.collection("user")
export async function create(user: User): Promise<void> {

    try {
        await userCollection.insertOne(
            {
                "object": "card",
                "id": "f11416ec-ab70-45ef-98e0-9b51506606c5",
                "oracle_id": "dac8a765-6845-4b57-bb79-4ec463436f92",
                "multiverse_ids": [],
                "tcgplayer_id": 129714,
                "name": "Elf Warrior",
                "lang": "en",
                "released_at": "2017-03-31",
                "uri": "https://api.scryfall.com/cards/f11416ec-ab70-45ef-98e0-9b51506606c5",
                "scryfall_uri": "https://scryfall.com/card/tdds/6/elf-warrior?utm_source=api",
                "layout": "token",
                "highres_image": true,
                "image_status": "highres_scan",
                "image_uris": {
                    "small": "https://cards.scryfall.io/small/front/f/1/f11416ec-ab70-45ef-98e0-9b51506606c5.jpg?1561758399",
                    "normal": "https://cards.scryfall.io/normal/front/f/1/f11416ec-ab70-45ef-98e0-9b51506606c5.jpg?1561758399",
                    "large": "https://cards.scryfall.io/large/front/f/1/f11416ec-ab70-45ef-98e0-9b51506606c5.jpg?1561758399",
                    "png": "https://cards.scryfall.io/png/front/f/1/f11416ec-ab70-45ef-98e0-9b51506606c5.png?1561758399",
                    "art_crop": "https://cards.scryfall.io/art_crop/front/f/1/f11416ec-ab70-45ef-98e0-9b51506606c5.jpg?1561758399",
                    "border_crop": "https://cards.scryfall.io/border_crop/front/f/1/f11416ec-ab70-45ef-98e0-9b51506606c5.jpg?1561758399"
                },
                "mana_cost": "",
                "cmc": 0.0,
                "type_line": "Token Creature — Elf Warrior",
                "oracle_text": "",
                "power": "1",
                "toughness": "1",
                "colors": ["G"],
                "color_identity": ["G"],
                "keywords": [],
                "legalities": {
                    "standard": "not_legal",
                    "future": "not_legal",
                    "historic": "not_legal",
                    "timeless": "not_legal",
                    "gladiator": "not_legal",
                    "pioneer": "not_legal",
                    "explorer": "not_legal",
                    "modern": "not_legal",
                    "legacy": "not_legal",
                    "pauper": "not_legal",
                    "vintage": "not_legal",
                    "penny": "not_legal",
                    "commander": "not_legal",
                    "oathbreaker": "not_legal",
                    "standardbrawl": "not_legal",
                    "brawl": "not_legal",
                    "alchemy": "not_legal",
                    "paupercommander": "not_legal",
                    "duel": "not_legal",
                    "oldschool": "not_legal",
                    "premodern": "not_legal",
                    "predh": "not_legal"
                },
                "games": ["paper"],
                "reserved": false,
                "game_changer": false,
                "foil": false,
                "nonfoil": true,
                "finishes": ["nonfoil"],
                "oversized": false,
                "promo": false,
                "reprint": true,
                "variation": false,
                "set_id": "873340b9-7204-4f92-9638-c85419be0a80",
                "set": "tdds",
                "set_name": "Duel Decks: Mind vs. Might Tokens",
                "set_type": "token",
                "set_uri": "https://api.scryfall.com/sets/873340b9-7204-4f92-9638-c85419be0a80",
                "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Atdds&unique=prints",
                "scryfall_set_uri": "https://scryfall.com/sets/tdds?utm_source=api",
                "rulings_uri": "https://api.scryfall.com/cards/f11416ec-ab70-45ef-98e0-9b51506606c5/rulings",
                "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Adac8a765-6845-4b57-bb79-4ec463436f92&unique=prints",
                "collector_number": "6",
                "digital": false,
                "rarity": "common",
                "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
                "artist": "William O'Connor",
                "artist_ids": ["4f1c2854-d7a8-4f9a-8b3d-72a16eb7bdc1"],
                "illustration_id": "a573739e-fe8e-4ddf-9c96-03a34bd0e3b0",
                "border_color": "black",
                "frame": "2015",
                "full_art": false,
                "textless": false,
                "booster": false,
                "story_spotlight": false,
                "promo_types": ["setpromo"],
            },
        )
    } catch (e) {
        console.log("Error: ", e)
    }
}
