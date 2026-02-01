const DESTINATIONS = [
  {
    id: "bali",
    name: "Bali, Indonesia",
    tagline: "Island of the Gods",
    image: "images/destinations/bali.jpg",
    likes: 4832,
    liked: false,
    detail: {
      food: ["Nasi Goreng", "Satay", "Babi Guling", "Lawar", "Pisang Goreng"],
      bestTime: "April – October (dry season)",
      avgTemp: "27°C / 80°F year-round",
      essentials: ["Visa on arrival (30 days)", "Grab app for rides", "Sunscreen", "Sarong for temples", "Mosquito repellent"],
      bitcoin: false,
      kayakCode: "DPS"
    }
  },
  {
    id: "santorini",
    name: "Santorini, Greece",
    tagline: "Where White Meets Blue",
    image: "images/destinations/santorini.jpg",
    likes: 7621,
    liked: false,
    detail: {
      food: ["Tomatokeftedes", "Fava Santorinis", "Grilled Octopus", "Moussaka", "Baklava"],
      bestTime: "June – September (warm and dry)",
      avgTemp: "20–29°C / 68–84°F in summer",
      essentials: ["Comfortable walking shoes", "Sunscreen SPF 50", "Ferry tickets in advance", "Cash for small shops"],
      bitcoin: false,
      kayakCode: "JTR"
    }
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    tagline: "Neon Dreams and Ancient Temples",
    image: "images/destinations/tokyo.jpg",
    likes: 8914,
    liked: false,
    detail: {
      food: ["Ramen", "Sushi", "Tempura", "Takoyaki", "Wagyu Beef"],
      bestTime: "March – May (cherry blossoms) or October – November (autumn foliage)",
      avgTemp: "15°C / 59°F avg; summers 30°C / 86°F",
      essentials: ["Suica/Pasmo transit card", "Pocket Wi-Fi rental", "Cash (many places don't take cards)", "JR Pass for day trips"],
      bitcoin: false,
      kayakCode: "NRT"
    }
  },
  {
    id: "paris",
    name: "Paris, France",
    tagline: "The City of Light Awaits",
    image: "images/destinations/paris.jpg",
    likes: 9204,
    liked: false,
    detail: {
      food: ["Croissants", "Croque Monsieur", "Coq au Vin", "Macarons", "Crêpes"],
      bestTime: "April – June or September – October",
      avgTemp: "12°C / 54°F avg; summers 25°C / 77°F",
      essentials: ["Museum Pass for skip-the-line", "Comfortable walking shoes", "Metro Navigo card", "Basic French phrases"],
      bitcoin: false,
      kayakCode: "CDG"
    }
  },
  {
    id: "new-york",
    name: "New York City, USA",
    tagline: "The City That Never Sleeps",
    image: "images/destinations/new-york.jpg",
    likes: 9501,
    liked: false,
    detail: {
      food: ["New York Pizza", "Bagels", "Pastrami on Rye", "Cheesecake", "Hot Dogs"],
      bestTime: "April – June or September – November",
      avgTemp: "13°C / 55°F avg; summers 30°C / 86°F",
      essentials: ["MetroCard or OMNY tap", "Comfortable walking shoes", "Broadway tickets in advance", "Layers for weather changes"],
      bitcoin: false,
      kayakCode: "JFK"
    }
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu, Peru",
    tagline: "Lost City in the Clouds",
    image: "images/destinations/machu-picchu.jpg",
    likes: 6743,
    liked: false,
    detail: {
      food: ["Ceviche", "Lomo Saltado", "Cuy (Guinea Pig)", "Quinoa Soup", "Chicha Morada"],
      bestTime: "May – September (dry season)",
      avgTemp: "12–20°C / 54–68°F",
      essentials: ["Book permits months ahead", "Altitude sickness pills", "Rain jacket", "Layers for temperature swings", "Hiking boots"],
      bitcoin: false,
      kayakCode: "CUZ"
    }
  },
  {
    id: "dubai",
    name: "Dubai, UAE",
    tagline: "Where the Future Lives",
    image: "images/destinations/dubai.jpg",
    likes: 7388,
    liked: false,
    detail: {
      food: ["Shawarma", "Al Harees", "Luqaimat", "Camel Burger", "Kunafa"],
      bestTime: "November – March (cooler weather)",
      avgTemp: "25°C / 77°F in winter; 42°C / 108°F in summer",
      essentials: ["Modest dress for malls and mosques", "Sunscreen", "Metro Nol card", "Stay hydrated"],
      bitcoin: false,
      kayakCode: "DXB"
    }
  },
  {
    id: "maldives",
    name: "Maldives",
    tagline: "Paradise Floating on the Indian Ocean",
    image: "images/destinations/maldives.jpg",
    likes: 8456,
    liked: false,
    detail: {
      food: ["Garudhiya (fish soup)", "Mas Huni", "Fihunu Mas (grilled fish)", "Roshi bread", "Hedhikaa snacks"],
      bestTime: "November – April (dry northeast monsoon)",
      avgTemp: "28–31°C / 82–88°F year-round",
      essentials: ["Reef-safe sunscreen", "Snorkel gear (or rent)", "Waterproof phone case", "Book seaplane transfers"],
      bitcoin: false,
      kayakCode: "MLE"
    }
  },
  {
    id: "cancun",
    name: "Cancun, Mexico",
    tagline: "Turquoise Waters and Mayan Mysteries",
    image: "images/destinations/cancun.jpg",
    likes: 5129,
    liked: false,
    detail: {
      food: ["Tacos al Pastor", "Ceviche", "Cochinita Pibil", "Marquesitas", "Micheladas"],
      bestTime: "December – April (dry season)",
      avgTemp: "27°C / 80°F year-round",
      essentials: ["Biodegradable sunscreen for cenotes", "Pesos for local spots", "Book Chichén Itzá early", "Bug spray for jungle tours"],
      bitcoin: false,
      kayakCode: "CUN"
    }
  },
  {
    id: "rome",
    name: "Rome, Italy",
    tagline: "All Roads Lead Here",
    image: "images/destinations/rome.jpg",
    likes: 8837,
    liked: false,
    detail: {
      food: ["Cacio e Pepe", "Carbonara", "Supplì", "Gelato", "Trapizzino"],
      bestTime: "April – June or September – October",
      avgTemp: "16°C / 61°F avg; summers 32°C / 90°F",
      essentials: ["Roma Pass for transit + museums", "Book Vatican tickets online", "Comfortable cobblestone shoes", "Cover shoulders for churches"],
      bitcoin: false,
      kayakCode: "FCO"
    }
  },
  {
    id: "london",
    name: "London, England",
    tagline: "Royal Heritage Meets Modern Edge",
    image: "images/destinations/london.jpg",
    likes: 7762,
    liked: false,
    detail: {
      food: ["Fish and Chips", "Sunday Roast", "Full English Breakfast", "Pie and Mash", "Afternoon Tea"],
      bestTime: "June – September (warmest, longest days)",
      avgTemp: "11°C / 52°F avg; summers 23°C / 73°F",
      essentials: ["Oyster card or contactless pay", "Umbrella always", "Book West End shows early", "Free museums everywhere"],
      bitcoin: false,
      kayakCode: "LHR"
    }
  },
  {
    id: "sydney",
    name: "Sydney, Australia",
    tagline: "Harbour City Under Southern Stars",
    image: "images/destinations/sydney.jpg",
    likes: 6218,
    liked: false,
    detail: {
      food: ["Meat Pie", "Barramundi", "Lamingtons", "Avocado Toast", "Tim Tams"],
      bestTime: "September – November or March – May",
      avgTemp: "22°C / 72°F avg; mild winters 13°C / 55°F",
      essentials: ["Opal card for transit", "Slip-slop-slap (sun protection)", "Ferry to Manly Beach", "Book Opera House tour"],
      bitcoin: false,
      kayakCode: "SYD"
    }
  },
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro, Brazil",
    tagline: "Samba, Sun, and Sugarloaf",
    image: "images/destinations/rio-de-janeiro.jpg",
    likes: 7103,
    liked: false,
    detail: {
      food: ["Feijoada", "Pão de Queijo", "Açaí Bowl", "Coxinha", "Churrasco"],
      bestTime: "December – March (summer) or May – September (cooler, less rain)",
      avgTemp: "25°C / 77°F year-round",
      essentials: ["Don't flash valuables", "Use Uber over taxis", "Sunscreen", "Learn basic Portuguese", "Christ the Redeemer tickets online"],
      bitcoin: false,
      kayakCode: "GIG"
    }
  },
  {
    id: "cape-town",
    name: "Cape Town, South Africa",
    tagline: "Where Two Oceans Collide",
    image: "images/destinations/cape-town.jpg",
    likes: 5847,
    liked: false,
    detail: {
      food: ["Bobotie", "Biltong", "Braai", "Bunny Chow", "Malva Pudding"],
      bestTime: "November – March (summer, dry)",
      avgTemp: "21°C / 70°F in summer; 12°C / 54°F in winter",
      essentials: ["Book Table Mountain cable car online", "Rent a car for Cape Peninsula", "Sunscreen + wind layers", "Uber works well"],
      bitcoin: false,
      kayakCode: "CPT"
    }
  },
  {
    id: "bangkok",
    name: "Bangkok, Thailand",
    tagline: "Street Food Capital of the World",
    image: "images/destinations/bangkok.jpg",
    likes: 6534,
    liked: false,
    detail: {
      food: ["Pad Thai", "Som Tum (Papaya Salad)", "Mango Sticky Rice", "Tom Yum Goong", "Khao Pad"],
      bestTime: "November – February (cool and dry)",
      avgTemp: "28–35°C / 82–95°F year-round",
      essentials: ["BTS Skytrain for traffic", "Grab app", "Modest dress for temples", "Stay hydrated", "Bargain at markets"],
      bitcoin: false,
      kayakCode: "BKK"
    }
  },
  {
    id: "iceland",
    name: "Reykjavik, Iceland",
    tagline: "Fire and Ice at the Edge of the World",
    image: "images/destinations/iceland.jpg",
    likes: 7290,
    liked: false,
    detail: {
      food: ["Plokkfiskur (fish stew)", "Hot Dogs (pylsur)", "Skyr", "Lamb Soup", "Fermented Shark (hákarl)"],
      bestTime: "June – August (midnight sun) or September – March (northern lights)",
      avgTemp: "1–13°C / 34–55°F; mild for latitude",
      essentials: ["Layers and waterproof jacket", "Rent a car for Ring Road", "Book Blue Lagoon ahead", "Budget for high prices"],
      bitcoin: false,
      kayakCode: "KEF"
    }
  },
  {
    id: "petra",
    name: "Petra, Jordan",
    tagline: "Rose-Red City Half as Old as Time",
    image: "images/destinations/petra.jpg",
    likes: 5963,
    liked: false,
    detail: {
      food: ["Mansaf", "Falafel", "Maqluba", "Knafeh", "Zarb (Bedouin BBQ)"],
      bestTime: "March – May or September – November",
      avgTemp: "15–25°C / 59–77°F in spring/fall",
      essentials: ["Jordan Pass (visa + entry fees)", "Comfortable hiking shoes", "2+ liters water", "Start early to beat crowds", "Sunhat"],
      bitcoin: false,
      kayakCode: "AMM"
    }
  },
  {
    id: "kyoto",
    name: "Kyoto, Japan",
    tagline: "Ten Thousand Gates of Zen",
    image: "images/destinations/kyoto.jpg",
    likes: 7845,
    liked: false,
    detail: {
      food: ["Kaiseki (multi-course)", "Matcha Sweets", "Yudofu (tofu hot pot)", "Obanzai (home cooking)", "Kyoto Ramen"],
      bestTime: "March – May (cherry blossoms) or October – November (fall colors)",
      avgTemp: "15°C / 59°F avg; hot humid summers 33°C / 91°F",
      essentials: ["Bicycle rental", "IC card for buses", "Book Fushimi Inari at sunrise", "Respect geisha district etiquette"],
      bitcoin: false,
      kayakCode: "KIX"
    }
  },
  {
    id: "amsterdam",
    name: "Amsterdam, Netherlands",
    tagline: "Canals, Bikes, and Golden Age Charm",
    image: "images/destinations/amsterdam.jpg",
    likes: 6412,
    liked: false,
    detail: {
      food: ["Stroopwafel", "Bitterballen", "Haring (raw herring)", "Poffertjes", "Rijsttafel"],
      bestTime: "April – May (tulip season) or June – August",
      avgTemp: "10°C / 50°F avg; summers 22°C / 72°F",
      essentials: ["OV-chipkaart for transit", "Rent a bike", "Book Anne Frank House months ahead", "Rain jacket year-round"],
      bitcoin: false,
      kayakCode: "AMS"
    }
  },
  {
    id: "barcelona",
    name: "Barcelona, Spain",
    tagline: "Gaudi's Masterpiece by the Sea",
    image: "images/destinations/barcelona.jpg",
    likes: 7156,
    liked: false,
    detail: {
      food: ["Patatas Bravas", "Pa amb Tomàquet", "Jamón Ibérico", "Crema Catalana", "Fideuà"],
      bestTime: "May – June or September – October",
      avgTemp: "16°C / 61°F avg; summers 28°C / 82°F",
      essentials: ["Book Sagrada Família online", "T-casual transit card", "Watch for pickpockets on La Rambla", "Dinner starts at 9pm"],
      bitcoin: false,
      kayakCode: "BCN"
    }
  },
  {
    id: "marrakech",
    name: "Marrakech, Morocco",
    tagline: "Spice-Scented Labyrinth of Wonders",
    image: "images/destinations/marrakech.jpg",
    likes: 5234,
    liked: false,
    detail: {
      food: ["Tagine", "Couscous", "Pastilla", "Mint Tea", "Msemen (flatbread)"],
      bestTime: "March – May or September – November",
      avgTemp: "20°C / 68°F avg; summers 38°C / 100°F",
      essentials: ["Bargain in the souks (start at 50% off)", "Dirhams for markets", "Modest clothing", "Hire a local guide for the Medina"],
      bitcoin: false,
      kayakCode: "RAK"
    }
  },
  {
    id: "prague",
    name: "Prague, Czech Republic",
    tagline: "City of a Hundred Spires",
    image: "images/destinations/prague.jpg",
    likes: 5891,
    liked: false,
    detail: {
      food: ["Svíčková", "Trdelník", "Vepřo Knedlo Zelo", "Czech Goulash", "Pilsner Beer"],
      bestTime: "May – September or December (Christmas markets)",
      avgTemp: "8°C / 46°F avg; summers 25°C / 77°F",
      essentials: ["Czech Koruna (not Euros)", "Comfortable shoes for cobblestones", "Prague Card for attractions", "Try a beer spa"],
      bitcoin: false,
      kayakCode: "PRG"
    }
  },
  {
    id: "havana",
    name: "Havana, Cuba",
    tagline: "Frozen in Technicolor Time",
    image: "images/destinations/havana.jpg",
    likes: 4510,
    liked: false,
    detail: {
      food: ["Ropa Vieja", "Lechón Asado", "Moros y Cristianos", "Cuban Sandwich", "Mojito"],
      bestTime: "November – April (dry season)",
      avgTemp: "25–30°C / 77–86°F year-round",
      essentials: ["Tourist visa (tarjeta de turista)", "Bring cash (cards often don't work)", "Book casa particulares", "Offline maps essential"],
      bitcoin: false,
      kayakCode: "HAV"
    }
  },
  {
    id: "cairo",
    name: "Cairo, Egypt",
    tagline: "Pharaohs Never Really Left",
    image: "images/destinations/cairo.jpg",
    likes: 6178,
    liked: false,
    detail: {
      food: ["Koshari", "Ful Medames", "Shawarma", "Molokhia", "Kunafa"],
      bestTime: "October – April (cooler)",
      avgTemp: "22°C / 72°F avg; summers 35°C / 95°F",
      essentials: ["Visa on arrival", "Uber works great", "Bargain everywhere", "Book Pyramids guide", "Drink bottled water only"],
      bitcoin: false,
      kayakCode: "CAI"
    }
  },
  {
    id: "singapore",
    name: "Singapore",
    tagline: "Garden City of the Future",
    image: "images/destinations/singapore.jpg",
    likes: 7432,
    liked: false,
    detail: {
      food: ["Hainanese Chicken Rice", "Chili Crab", "Laksa", "Char Kway Teow", "Kaya Toast"],
      bestTime: "February – April (driest months)",
      avgTemp: "27–31°C / 81–88°F year-round",
      essentials: ["EZ-Link transit card", "Hawker centers for cheap eats", "No chewing gum allowed", "Gardens by the Bay at night"],
      bitcoin: false,
      kayakCode: "SIN"
    }
  },
  {
    id: "lisbon",
    name: "Lisbon, Portugal",
    tagline: "Seven Hills of Pastel Dreams",
    image: "images/destinations/lisbon.jpg",
    likes: 5673,
    liked: false,
    detail: {
      food: ["Pastel de Nata", "Bacalhau (salt cod)", "Bifana", "Caldo Verde", "Ginjinha (cherry liqueur)"],
      bestTime: "March – May or September – October",
      avgTemp: "17°C / 63°F avg; summers 28°C / 82°F",
      essentials: ["Viva Viagem transit card", "Tram 28 early to avoid crowds", "Comfortable shoes for hills", "Try a fado show"],
      bitcoin: false,
      kayakCode: "LIS"
    }
  },
  {
    id: "hong-kong",
    name: "Hong Kong, China",
    tagline: "Vertical City of Dazzling Lights",
    image: "images/destinations/hong-kong.jpg",
    likes: 6845,
    liked: false,
    detail: {
      food: ["Dim Sum", "Roast Goose", "Wonton Noodles", "Egg Waffle", "Milk Tea"],
      bestTime: "October – December (cool and dry)",
      avgTemp: "23°C / 73°F avg; humid summers 32°C / 90°F",
      essentials: ["Octopus card for everything", "Star Ferry at night", "Victoria Peak tram", "Bring an umbrella in summer"],
      bitcoin: false,
      kayakCode: "HKG"
    }
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires, Argentina",
    tagline: "Tango Under the Jacarandas",
    image: "images/destinations/buenos-aires.jpg",
    likes: 4987,
    liked: false,
    detail: {
      food: ["Asado", "Empanadas", "Choripán", "Dulce de Leche", "Milanesa"],
      bestTime: "March – May or September – November",
      avgTemp: "18°C / 64°F avg; summers 30°C / 86°F",
      essentials: ["SUBE card for transit", "Tango show in San Telmo", "Steak dinner after 9pm", "Visit La Boca by day only"],
      bitcoin: false,
      kayakCode: "EZE"
    }
  },
  {
    id: "istanbul",
    name: "Istanbul, Turkey",
    tagline: "Where East Kisses West",
    image: "images/destinations/istanbul.jpg",
    likes: 6329,
    liked: false,
    detail: {
      food: ["Kebab", "Simit", "Baklava", "Lahmacun", "Turkish Breakfast Spread"],
      bestTime: "April – May or September – November",
      avgTemp: "14°C / 57°F avg; summers 28°C / 82°F",
      essentials: ["Istanbulkart for transit", "Cover shoulders in mosques", "Book Hagia Sophia early", "Haggle at Grand Bazaar"],
      bitcoin: false,
      kayakCode: "IST"
    }
  },
  {
    id: "vietnam-ha-long",
    name: "Ha Long Bay, Vietnam",
    tagline: "Emerald Waters Among Limestone Giants",
    image: "images/destinations/vietnam-ha-long.jpg",
    likes: 5712,
    liked: false,
    detail: {
      food: ["Pho", "Bun Cha", "Spring Rolls", "Banh Mi", "Cha Ca (turmeric fish)"],
      bestTime: "October – December (cool, less rain)",
      avgTemp: "20–28°C / 68–82°F",
      essentials: ["Book overnight cruise", "Rain jacket in autumn", "Kayak through caves", "Bargain for boat tours"],
      bitcoin: false,
      kayakCode: "HAN"
    }
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps, Switzerland",
    tagline: "Peaks That Pierce the Heavens",
    image: "images/destinations/swiss-alps.jpg",
    likes: 8123,
    liked: false,
    detail: {
      food: ["Fondue", "Raclette", "Rösti", "Swiss Chocolate", "Zürcher Geschnetzeltes"],
      bestTime: "June – September (hiking) or December – March (skiing)",
      avgTemp: "5–20°C / 41–68°F depending on altitude",
      essentials: ["Swiss Travel Pass", "Layers for altitude changes", "Book mountain huts early", "Budget generously (Switzerland is expensive)"],
      bitcoin: false,
      kayakCode: "ZRH"
    }
  },
  {
    id: "zanzibar",
    name: "Zanzibar, Tanzania",
    tagline: "Spice Island Paradise",
    image: "images/destinations/zanzibar.jpg",
    likes: 4231,
    liked: false,
    detail: {
      food: ["Zanzibar Pizza", "Urojo (mix soup)", "Pilau Rice", "Grilled Seafood", "Spice Tea"],
      bestTime: "June – October (dry) or December – February",
      avgTemp: "26–30°C / 79–86°F year-round",
      essentials: ["Malaria prophylaxis", "Reef shoes for beach", "Modest dress in Stone Town", "Spice farm tour", "Sunscreen"],
      bitcoin: false,
      kayakCode: "ZNZ"
    }
  },
  {
    id: "new-zealand-queenstown",
    name: "Queenstown, New Zealand",
    tagline: "Adventure Capital of Middle-Earth",
    image: "images/destinations/new-zealand-queenstown.jpg",
    likes: 6587,
    liked: false,
    detail: {
      food: ["Fergburger", "Lamb Roast", "Pavlova", "Meat Pie", "Flat White Coffee"],
      bestTime: "December – February (summer) or June – August (skiing)",
      avgTemp: "8–22°C / 46–72°F depending on season",
      essentials: ["Rent a car for flexibility", "Book bungy/skydive ahead", "Layered clothing", "NZeTA visa waiver"],
      bitcoin: false,
      kayakCode: "ZQN"
    }
  },
  {
    id: "vienna",
    name: "Vienna, Austria",
    tagline: "Waltzing Through Imperial Grandeur",
    image: "images/destinations/vienna.jpg",
    likes: 5345,
    liked: false,
    detail: {
      food: ["Wiener Schnitzel", "Sachertorte", "Apfelstrudel", "Tafelspitz", "Kaiserschmarrn"],
      bestTime: "April – May or September – October",
      avgTemp: "11°C / 52°F avg; summers 26°C / 79°F",
      essentials: ["Vienna City Card", "Attend an opera or concert", "Coffee house culture (linger!)", "U-Bahn is excellent"],
      bitcoin: false,
      kayakCode: "VIE"
    }
  },
  {
    id: "cusco",
    name: "Cusco, Peru",
    tagline: "Navel of the Inca World",
    image: "images/destinations/cusco.jpg",
    likes: 4678,
    liked: false,
    detail: {
      food: ["Cuy al Horno", "Rocoto Relleno", "Quinoa Soup", "Chicharrón", "Coca Tea"],
      bestTime: "May – September (dry season)",
      avgTemp: "12°C / 54°F avg (3,400m altitude)",
      essentials: ["Acclimatize 1-2 days", "Coca tea for altitude", "Boleto Turístico for ruins", "Warm layers for nights"],
      bitcoin: false,
      kayakCode: "CUZ"
    }
  },
  {
    id: "seoul",
    name: "Seoul, South Korea",
    tagline: "K-Culture Pulse of Asia",
    image: "images/destinations/seoul.jpg",
    likes: 7214,
    liked: false,
    detail: {
      food: ["Korean BBQ", "Bibimbap", "Tteokbokki", "Kimchi Jjigae", "Fried Chicken + Beer"],
      bestTime: "April – May (cherry blossoms) or September – November (fall foliage)",
      avgTemp: "12°C / 54°F avg; cold winters –5°C / 23°F",
      essentials: ["T-money card", "Download Naver Maps (not Google)", "24hr food + convenience stores", "Try a jjimjilbang (spa)"],
      bitcoin: false,
      kayakCode: "ICN"
    }
  },
  {
    id: "nairobi",
    name: "Nairobi, Kenya",
    tagline: "Safari Gateway Under Kilimanjaro's Shadow",
    image: "images/destinations/nairobi.jpg",
    likes: 4892,
    liked: false,
    detail: {
      food: ["Nyama Choma (grilled meat)", "Ugali", "Sukuma Wiki", "Mandazi", "Kenyan Chai"],
      bestTime: "July – October (Great Migration) or January – February",
      avgTemp: "17–25°C / 63–77°F year-round (high altitude)",
      essentials: ["eVisa before arrival", "Book safari guide", "Yellow fever vaccine", "Kenyan shillings for local spots", "Binoculars"],
      bitcoin: false,
      kayakCode: "NBO"
    }
  },
  {
    id: "fiji",
    name: "Fiji Islands",
    tagline: "Where Happiness Comes Naturally",
    image: "images/destinations/fiji.jpg",
    likes: 5543,
    liked: false,
    detail: {
      food: ["Kokoda (raw fish salad)", "Lovo (earth oven feast)", "Rourou (taro leaves)", "Cassava Cake", "Fresh Coconut Water"],
      bestTime: "May – October (dry season)",
      avgTemp: "26°C / 79°F year-round",
      essentials: ["Reef-safe sunscreen", "Water shoes for coral", "Learn Bula! (hello)", "Island-hop by boat", "Mosquito repellent"],
      bitcoin: false,
      kayakCode: "NAN"
    }
  },
  {
    id: "budapest",
    name: "Budapest, Hungary",
    tagline: "Pearl of the Danube",
    image: "images/destinations/budapest.jpg",
    likes: 5128,
    liked: false,
    detail: {
      food: ["Goulash", "Lángos", "Chimney Cake (kürtőskalács)", "Chicken Paprikash", "Ruin Bar Cocktails"],
      bestTime: "March – May or September – November",
      avgTemp: "11°C / 52°F avg; summers 27°C / 81°F",
      essentials: ["Budapest Card for transit + baths", "Visit Széchenyi Thermal Bath", "Forints not Euros", "Ruin bar crawl in District VII"],
      bitcoin: false,
      kayakCode: "BUD"
    }
  },
  {
    id: "patagonia",
    name: "Patagonia, Argentina",
    tagline: "Edge of the Earth, Start of Wonder",
    image: "images/destinations/patagonia.jpg",
    likes: 6034,
    liked: false,
    detail: {
      food: ["Cordero Patagónico (lamb)", "Centolla (king crab)", "Calafate Berry Ice Cream", "Empanadas", "Mate"],
      bestTime: "November – March (Patagonian summer)",
      avgTemp: "5–15°C / 41–59°F in summer; very windy",
      essentials: ["Windproof layers essential", "Book Torres del Paine campsites early", "Rent car in El Calafate", "Binoculars for wildlife"],
      bitcoin: false,
      kayakCode: "USH"
    }
  },
  {
    id: "hanoi",
    name: "Hanoi, Vietnam",
    tagline: "Chaos and Charm on Every Corner",
    image: "images/destinations/hanoi.jpg",
    likes: 4765,
    liked: false,
    detail: {
      food: ["Pho Bo", "Bun Cha", "Banh Mi", "Egg Coffee", "Nem Ran (spring rolls)"],
      bestTime: "October – December or March – April",
      avgTemp: "24°C / 75°F avg; humid summers 33°C / 91°F",
      essentials: ["Grab app for rides", "Look both ways constantly", "Dong for street food", "Old Quarter walking tour", "E-visa available"],
      bitcoin: false,
      kayakCode: "HAN"
    }
  },
  {
    id: "el-salvador",
    name: "El Salvador",
    tagline: "Bitcoin Beach and Volcanic Surf",
    image: "images/destinations/el-salvador.jpg",
    likes: 3812,
    liked: false,
    detail: {
      food: ["Pupusas", "Yuca Frita", "Tamales de Elote", "Sopa de Pata", "Horchata"],
      bestTime: "November – April (dry season)",
      avgTemp: "25–32°C / 77–90°F year-round",
      essentials: ["Bitcoin accepted widely (Chivo Wallet)", "Surf gear for El Tunco", "USD is official currency", "Volcano hiking boots"],
      bitcoin: true,
      kayakCode: "SAL"
    }
  },
  {
    id: "dubrovnik",
    name: "Dubrovnik, Croatia",
    tagline: "King's Landing in Real Life",
    image: "images/destinations/dubrovnik.jpg",
    likes: 6201,
    liked: false,
    detail: {
      food: ["Black Risotto (squid ink)", "Peka (meat under bell)", "Fresh Oysters", "Dubrovnik Cake (Rozata)", "Grilled Fish"],
      bestTime: "May – June or September – October (fewer crowds)",
      avgTemp: "17°C / 63°F avg; summers 30°C / 86°F",
      essentials: ["Dubrovnik Card for walls + museums", "Book Game of Thrones tour", "Water shoes for rocky beaches", "Avoid July–August crowds"],
      bitcoin: false,
      kayakCode: "DBV"
    }
  },
  {
    id: "jaipur",
    name: "Jaipur, India",
    tagline: "The Pink City of Maharajas",
    image: "images/destinations/jaipur.jpg",
    likes: 5456,
    liked: false,
    detail: {
      food: ["Dal Baati Churma", "Laal Maas", "Kachori", "Lassi", "Ghewar"],
      bestTime: "October – March (cooler weather)",
      avgTemp: "25°C / 77°F avg; summers 45°C / 113°F",
      essentials: ["e-Visa before travel", "Hire a local guide", "Bargain in bazaars", "Cover shoulders at temples", "Stay hydrated in heat"],
      bitcoin: false,
      kayakCode: "JAI"
    }
  },
  {
    id: "vancouver",
    name: "Vancouver, Canada",
    tagline: "Mountains Meet the Pacific",
    image: "images/destinations/vancouver.jpg",
    likes: 5823,
    liked: false,
    detail: {
      food: ["Japadog", "Salmon (any style)", "Poutine", "Sushi (best outside Japan)", "Nanaimo Bar"],
      bestTime: "June – September (dry and warm)",
      avgTemp: "11°C / 52°F avg; mild winters 3°C / 37°F",
      essentials: ["Compass Card for transit", "Rain jacket (it rains a lot)", "Stanley Park bike ride", "eTA for most nationalities"],
      bitcoin: false,
      kayakCode: "YVR"
    }
  },
  {
    id: "serengeti",
    name: "Serengeti, Tanzania",
    tagline: "The Great Migration Never Stops",
    image: "images/destinations/serengeti.jpg",
    likes: 7654,
    liked: false,
    detail: {
      food: ["Nyama Choma", "Ugali", "Ndizi Nyama (plantains with meat)", "Chipsi Mayai", "Zanzibar-style Seafood"],
      bestTime: "June – October (Great Migration river crossings)",
      avgTemp: "20–28°C / 68–82°F",
      essentials: ["Book safari 6+ months ahead", "Yellow fever vaccine", "Binoculars + camera zoom lens", "Khaki/neutral clothing", "Malaria pills"],
      bitcoin: false,
      kayakCode: "JRO"
    }
  },
  {
    id: "florence",
    name: "Florence, Italy",
    tagline: "Renaissance Reborn Every Morning",
    image: "images/destinations/florence.jpg",
    likes: 7398,
    liked: false,
    detail: {
      food: ["Bistecca alla Fiorentina", "Lampredotto", "Ribollita", "Gelato", "Schiacciata"],
      bestTime: "April – June or September – October",
      avgTemp: "15°C / 59°F avg; summers 32°C / 90°F",
      essentials: ["Book Uffizi and Accademia online", "Comfortable walking shoes", "Cash for trattorias", "Climb the Duomo early"],
      bitcoin: false,
      kayakCode: "FLR"
    }
  },
  {
    id: "angkor-wat",
    name: "Angkor Wat, Cambodia",
    tagline: "Temples Reclaimed by the Jungle",
    image: "images/destinations/angkor-wat.jpg",
    likes: 6089,
    liked: false,
    detail: {
      food: ["Amok (fish curry)", "Lok Lak", "Nom Banh Chok (noodles)", "Fried Tarantula", "Fresh Mango Shakes"],
      bestTime: "November – February (cool and dry)",
      avgTemp: "27–33°C / 81–91°F year-round",
      essentials: ["3-day temple pass", "Sunrise at Angkor Wat (arrive 5am)", "Tuk-tuk driver for the day", "Cover knees and shoulders", "Lots of water"],
      bitcoin: false,
      kayakCode: "REP"
    }
  },
  {
    id: "san-francisco",
    name: "San Francisco, USA",
    tagline: "Golden Gate to the West",
    image: "images/destinations/san-francisco.jpg",
    likes: 6745,
    liked: false,
    detail: {
      food: ["Clam Chowder in Bread Bowl", "Mission Burrito", "Dungeness Crab", "Sourdough Bread", "Ghirardelli Chocolate"],
      bestTime: "September – November (warmest months, Indian summer)",
      avgTemp: "14°C / 57°F year-round; foggy summers",
      essentials: ["Layers (microclimates!)", "Clipper card for Muni/BART", "Walk or bike the Golden Gate Bridge", "Cable car ride once"],
      bitcoin: false,
      kayakCode: "SFO"
    }
  },
  {
    id: "victoria-falls",
    name: "Victoria Falls, Zimbabwe",
    tagline: "The Smoke That Thunders",
    image: "images/destinations/victoria-falls.jpg",
    likes: 5321,
    liked: false,
    detail: {
      food: ["Sadza ne Nyama", "Biltong", "Crocodile Tail", "Mazoe Orange Crush", "Braai"],
      bestTime: "February – May (full flow) or August – December (Devil's Pool open)",
      avgTemp: "20–32°C / 68–90°F",
      essentials: ["Waterproof camera bag", "Raincoat for spray", "KAZA visa for both sides", "Malaria prophylaxis", "Book Devil's Pool swim"],
      bitcoin: false,
      kayakCode: "VFA"
    }
  },
  {
    id: "edinburgh",
    name: "Edinburgh, Scotland",
    tagline: "Castle on a Volcano",
    image: "images/destinations/edinburgh.jpg",
    likes: 5678,
    liked: false,
    detail: {
      food: ["Haggis", "Scotch Whisky", "Cullen Skink", "Scottish Tablet", "Deep-Fried Mars Bar"],
      bestTime: "May – September or August (Edinburgh Festival)",
      avgTemp: "9°C / 48°F avg; summers 19°C / 66°F",
      essentials: ["Waterproof jacket always", "Book Festival shows early", "Climb Arthur's Seat", "Comfortable shoes for Old Town"],
      bitcoin: false,
      kayakCode: "EDI"
    }
  },
  {
    id: "chiang-mai",
    name: "Chiang Mai, Thailand",
    tagline: "Mountain Temple Serenity",
    image: "images/destinations/chiang-mai.jpg",
    likes: 4923,
    liked: false,
    detail: {
      food: ["Khao Soi", "Sai Oua (sausage)", "Sticky Rice", "Mango Sticky Rice", "Northern Thai Larb"],
      bestTime: "November – February (cool season)",
      avgTemp: "25°C / 77°F avg; cool season nights 15°C / 59°F",
      essentials: ["Ethical elephant sanctuaries only", "Scooter rental", "Cooking class", "Doi Suthep temple at sunset", "Sunday Night Market"],
      bitcoin: false,
      kayakCode: "CNX"
    }
  },
  {
    id: "bogota",
    name: "Bogota, Colombia",
    tagline: "Graffiti Alleys and Cloud Forests",
    image: "images/destinations/bogota.jpg",
    likes: 4234,
    liked: false,
    detail: {
      food: ["Ajiaco", "Bandeja Paisa", "Arepas", "Empanadas", "Colombian Coffee"],
      bestTime: "December – March or July – August (dry seasons)",
      avgTemp: "14°C / 57°F year-round (high altitude)",
      essentials: ["Graffiti tour in La Candelaria", "TransMilenio for transit", "Altitude adjustment (2,640m)", "Colombian pesos cash", "Uber or DiDi works well"],
      bitcoin: false,
      kayakCode: "BOG"
    }
  },
  {
    id: "amalfi-coast",
    name: "Amalfi Coast, Italy",
    tagline: "Cliffside Dolce Vita",
    image: "images/destinations/amalfi-coast.jpg",
    likes: 8234,
    liked: false,
    detail: {
      food: ["Limoncello", "Scialatielli ai Frutti di Mare", "Sfogliatella", "Fresh Mozzarella", "Anchovy Dishes"],
      bestTime: "May – June or September – October",
      avgTemp: "18°C / 64°F avg; summers 30°C / 86°F",
      essentials: ["SITA bus pass or ferry between towns", "Book restaurants ahead in summer", "Comfortable walking shoes (stairs everywhere)", "Path of the Gods hike"],
      bitcoin: false,
      kayakCode: "NAP"
    }
  },
  {
    id: "great-barrier-reef",
    name: "Great Barrier Reef, Australia",
    tagline: "Earth's Largest Living Structure",
    image: "images/destinations/great-barrier-reef.jpg",
    likes: 7012,
    liked: false,
    detail: {
      food: ["Barramundi", "Mud Crab", "Tropical Fruit Platter", "Reef Fish Tacos", "Macadamia Nuts"],
      bestTime: "June – October (dry season, best visibility)",
      avgTemp: "24–31°C / 75–88°F",
      essentials: ["Reef-safe sunscreen mandatory", "Book snorkel/dive tour", "Stinger suit in summer", "Waterproof camera", "Cairns or Airlie Beach base"],
      bitcoin: false,
      kayakCode: "CNS"
    }
  },
  {
    id: "kathmandu",
    name: "Kathmandu, Nepal",
    tagline: "Gateway to the Roof of the World",
    image: "images/destinations/kathmandu.jpg",
    likes: 5134,
    liked: false,
    detail: {
      food: ["Momo (dumplings)", "Dal Bhat", "Newari Feast", "Chatamari", "Masala Chai"],
      bestTime: "October – November or March – April",
      avgTemp: "18°C / 64°F avg; cool winters 2°C / 36°F",
      essentials: ["Visa on arrival", "TIMS card for trekking", "Dust mask for city", "Warm layers for mountains", "Haggle for taxis"],
      bitcoin: false,
      kayakCode: "KTM"
    }
  },
  {
    id: "tahiti",
    name: "Tahiti, French Polynesia",
    tagline: "Gauguin's Painted Paradise",
    image: "images/destinations/tahiti.jpg",
    likes: 6321,
    liked: false,
    detail: {
      food: ["Poisson Cru (raw fish in coconut)", "Chevreffes (shrimp)", "Breadfruit", "Taro", "Tahitian Vanilla Desserts"],
      bestTime: "May – October (dry season)",
      avgTemp: "26°C / 79°F year-round",
      essentials: ["Book overwater bungalow early", "Reef shoes", "Snorkel gear", "CFP Francs (or Euros to exchange)", "Inter-island flights"],
      bitcoin: false,
      kayakCode: "PPT"
    }
  },
  {
    id: "copenhagen",
    name: "Copenhagen, Denmark",
    tagline: "Hygge and Nordic Cool",
    image: "images/destinations/copenhagen.jpg",
    likes: 5567,
    liked: false,
    detail: {
      food: ["Smørrebrød", "Danish Pastry", "Hot Dogs (pølser)", "New Nordic Cuisine", "Flødeboller"],
      bestTime: "May – September (long days, outdoor dining)",
      avgTemp: "8°C / 46°F avg; summers 22°C / 72°F",
      essentials: ["Copenhagen Card for attractions + transit", "Rent a bike (everyone does)", "Credit cards accepted everywhere", "Tivoli Gardens visit"],
      bitcoin: false,
      kayakCode: "CPH"
    }
  },
  {
    id: "medina-fez",
    name: "Fez, Morocco",
    tagline: "World's Largest Car-Free Urban Zone",
    image: "images/destinations/medina-fez.jpg",
    likes: 4312,
    liked: false,
    detail: {
      food: ["Pastilla", "Harira Soup", "Mechoui (slow-roasted lamb)", "Msemen", "Mint Tea"],
      bestTime: "March – May or September – November",
      avgTemp: "18°C / 64°F avg; summers 36°C / 97°F",
      essentials: ["Hire a medina guide (easy to get lost)", "Dirhams in cash", "Comfortable shoes", "Bargain at 40-50% of asking", "Visit tanneries (bring mint for smell)"],
      bitcoin: false,
      kayakCode: "FEZ"
    }
  },
  {
    id: "hawaii",
    name: "Maui, Hawaii",
    tagline: "Aloha Spirit on Every Shore",
    image: "images/destinations/hawaii.jpg",
    likes: 7892,
    liked: false,
    detail: {
      food: ["Poke Bowl", "Loco Moco", "Plate Lunch", "Shave Ice", "Kalua Pig"],
      bestTime: "April – May or September – November (fewer crowds, good weather)",
      avgTemp: "24–29°C / 75–85°F year-round",
      essentials: ["Rent a car (essential)", "Reef-safe sunscreen (law)", "Book Road to Hana early", "Sunrise at Haleakalā (permit needed)", "Snorkel gear"],
      bitcoin: false,
      kayakCode: "OGG"
    }
  },
  {
    id: "cartagena",
    name: "Cartagena, Colombia",
    tagline: "Caribbean Colors Behind Old Walls",
    image: "images/destinations/cartagena.jpg",
    likes: 4567,
    liked: false,
    detail: {
      food: ["Ceviche Cartagenero", "Coconut Rice", "Fried Fish", "Arepa de Huevo", "Fruit from Palenqueras"],
      bestTime: "December – April (dry season)",
      avgTemp: "28–32°C / 82–90°F year-round",
      essentials: ["Stay in the Walled City", "Sunscreen and hat", "Pesos for street food", "Rosario Islands day trip", "Walking shoes for cobblestones"],
      bitcoin: false,
      kayakCode: "CTG"
    }
  },
  {
    id: "siem-reap",
    name: "Siem Reap, Cambodia",
    tagline: "Sunrise Over Ancient Empires",
    image: "images/destinations/siem-reap.jpg",
    likes: 4890,
    liked: false,
    detail: {
      food: ["Fish Amok", "Beef Lok Lak", "Fried Rice with Egg", "Cambodian BBQ", "Num Pang (sandwich)"],
      bestTime: "November – March (cool and dry)",
      avgTemp: "27–33°C / 81–91°F year-round",
      essentials: ["Angkor pass (1/3/7 day)", "Tuk-tuk or e-bike rental", "Cover knees and shoulders for temples", "Start at sunrise", "Rehydration salts"],
      bitcoin: false,
      kayakCode: "REP"
    }
  },
  {
    id: "bergen",
    name: "Bergen, Norway",
    tagline: "Gateway to the Fjords",
    image: "images/destinations/bergen.jpg",
    likes: 5234,
    liked: false,
    detail: {
      food: ["Fresh Salmon", "Fish Soup", "Brunost (brown cheese)", "Smoked Mackerel", "Skillingsboller (cinnamon bun)"],
      bestTime: "May – September (longest days, mildest weather)",
      avgTemp: "8°C / 46°F avg; summers 18°C / 64°F",
      essentials: ["Rain gear (rains 240+ days/year)", "Norway in a Nutshell fjord tour", "Fløibanen funicular", "Budget for high prices", "Warm layers"],
      bitcoin: false,
      kayakCode: "BGO"
    }
  },
  {
    id: "galapagos",
    name: "Galapagos Islands, Ecuador",
    tagline: "Evolution's Living Laboratory",
    image: "images/destinations/galapagos.jpg",
    likes: 6789,
    liked: false,
    detail: {
      food: ["Encocado (coconut fish)", "Ceviche de Camarón", "Bolón de Verde", "Fresh Lobster", "Encebollado"],
      bestTime: "June – November (cool Garua season, more wildlife activity)",
      avgTemp: "22–28°C / 72–82°F",
      essentials: ["Park entry fee ($100)", "Book cruise or island-hopping tour", "Waterproof camera", "Reef shoes", "Don't touch the animals"],
      bitcoin: false,
      kayakCode: "GPS"
    }
  },
  {
    id: "luang-prabang",
    name: "Luang Prabang, Laos",
    tagline: "Monks, Mekong, and Misty Mornings",
    image: "images/destinations/luang-prabang.jpg",
    likes: 3987,
    liked: false,
    detail: {
      food: ["Laap (minced meat salad)", "Khao Piak Sen (noodle soup)", "Sticky Rice", "Mekong River Weed", "Lao Coffee"],
      bestTime: "November – March (cool and dry)",
      avgTemp: "25°C / 77°F avg; cool season mornings 15°C / 59°F",
      essentials: ["Watch monk alms ceremony respectfully", "Kuang Si Falls day trip", "Kip + Thai baht accepted", "Night market for textiles", "Bicycle rental"],
      bitcoin: false,
      kayakCode: "LPQ"
    }
  },
  {
    id: "kruger",
    name: "Kruger National Park, South Africa",
    tagline: "Big Five in the Wild",
    image: "images/destinations/kruger.jpg",
    likes: 6123,
    liked: false,
    detail: {
      food: ["Braai (BBQ)", "Biltong", "Potjiekos (stew)", "Boerewors", "Melktert"],
      bestTime: "May – September (dry winter, animals gather at waterholes)",
      avgTemp: "20–30°C / 68–86°F in winter days; cold nights 5°C / 41°F",
      essentials: ["Book rest camps months ahead", "Malaria prophylaxis", "Binoculars + camera", "Self-drive or guided safari", "Neutral-colored clothing"],
      bitcoin: false,
      kayakCode: "MQP"
    }
  },
  {
    id: "cuzco-sacred-valley",
    name: "Sacred Valley, Peru",
    tagline: "Terraces Carved by the Sun God",
    image: "images/destinations/cuzco-sacred-valley.jpg",
    likes: 4456,
    liked: false,
    detail: {
      food: ["Chicharrón de Cerdo", "Choclo con Queso", "Pachamanca (earth oven)", "Quinoa dishes", "Chicha de Jora (corn beer)"],
      bestTime: "May – September (dry season)",
      avgTemp: "15–20°C / 59–68°F during the day; cold nights",
      essentials: ["Boleto Turístico for ruins", "Acclimatize in Cusco first", "Warm layers for evenings", "Coca tea for altitude", "Colectivo buses between towns"],
      bitcoin: false,
      kayakCode: "CUZ"
    }
  },
  {
    id: "munich",
    name: "Munich, Germany",
    tagline: "Beer Gardens and Bavarian Soul",
    image: "images/destinations/munich.jpg",
    likes: 5012,
    liked: false,
    detail: {
      food: ["Weisswurst", "Pretzel (Brezen)", "Schweinshaxe", "Obatzda", "Beer (Helles or Weissbier)"],
      bestTime: "June – September or late September (Oktoberfest)",
      avgTemp: "9°C / 48°F avg; summers 24°C / 75°F",
      essentials: ["Book Oktoberfest tents months ahead", "Bayern ticket for day trips", "English Garden for locals' vibe", "MVV transit pass", "Cash preferred at beer halls"],
      bitcoin: false,
      kayakCode: "MUC"
    }
  },
  {
    id: "mauritius",
    name: "Mauritius",
    tagline: "Underwater Waterfall Illusion",
    image: "images/destinations/mauritius.jpg",
    likes: 5678,
    liked: false,
    detail: {
      food: ["Dholl Puri", "Alouda (milky drink)", "Octopus Curry", "Gateau Piment", "Fresh Tropical Fruit"],
      bestTime: "May – December (cool dry season)",
      avgTemp: "24°C / 75°F avg year-round",
      essentials: ["Rent a car to explore", "Reef-safe sunscreen", "Book catamaran day trip", "Mauritius Rupees for local shops", "Visit Chamarel colored earth"],
      bitcoin: false,
      kayakCode: "MRU"
    }
  },
  {
    id: "los-angeles",
    name: "Los Angeles, USA",
    tagline: "City of Angels and Endless Summer",
    image: "images/destinations/los-angeles.jpg",
    likes: 6543,
    liked: false,
    detail: {
      food: ["In-N-Out Burger", "Korean BBQ (Koreatown)", "Fish Tacos", "Avocado Toast", "Açaí Bowl"],
      bestTime: "March – May or September – November",
      avgTemp: "18°C / 64°F avg; dry summers 28°C / 82°F",
      essentials: ["Rent a car (public transit limited)", "Sunscreen", "Book Griffith Observatory sunset", "Hollywood sign hike", "Beach gear"],
      bitcoin: false,
      kayakCode: "LAX"
    }
  },
  {
    id: "colombo",
    name: "Colombo, Sri Lanka",
    tagline: "Tropical Charm on the Silk Road",
    image: "images/destinations/colombo.jpg",
    likes: 3876,
    liked: false,
    detail: {
      food: ["Rice and Curry", "Hoppers", "Kottu Roti", "String Hoppers", "Wood Apple Juice"],
      bestTime: "December – March (west coast dry) or April – September (east coast)",
      avgTemp: "27–31°C / 81–88°F year-round",
      essentials: ["ETA visa online", "Tuk-tuks for short trips", "Train to Kandy (scenic)", "Modest dress at temples", "Mosquito repellent"],
      bitcoin: false,
      kayakCode: "CMB"
    }
  },
  {
    id: "taipei",
    name: "Taipei, Taiwan",
    tagline: "Night Markets and Mountain Trails",
    image: "images/destinations/taipei.jpg",
    likes: 5432,
    liked: false,
    detail: {
      food: ["Beef Noodle Soup", "Xiao Long Bao", "Stinky Tofu", "Bubble Tea", "Gua Bao"],
      bestTime: "October – December (cool and dry)",
      avgTemp: "23°C / 73°F avg; humid summers 33°C / 91°F",
      essentials: ["EasyCard for MRT + buses", "Night market crawl", "Jiufen day trip", "Taipei 101 at sunset", "Umbrella in summer"],
      bitcoin: false,
      kayakCode: "TPE"
    }
  },
  {
    id: "sahara",
    name: "Sahara Desert, Morocco",
    tagline: "Starfields Over Endless Sand",
    image: "images/destinations/sahara.jpg",
    likes: 5987,
    liked: false,
    detail: {
      food: ["Tagine cooked over campfire", "Berber Bread", "Mint Tea", "Dates", "Couscous"],
      bestTime: "October – April (cooler temperatures)",
      avgTemp: "15–25°C / 59–77°F in winter; 45°C+ / 113°F+ in summer",
      essentials: ["Book desert camp (glamping or traditional)", "Head scarf for sand", "Warm layers for cold nights", "Camel trek at sunset", "Plenty of water"],
      bitcoin: false,
      kayakCode: "RAK"
    }
  },
  {
    id: "banff",
    name: "Banff, Canada",
    tagline: "Turquoise Lakes and Towering Peaks",
    image: "images/destinations/banff.jpg",
    likes: 7567,
    liked: false,
    detail: {
      food: ["Alberta Beef", "Bison Burger", "Poutine", "Wild Game", "Maple Syrup Treats"],
      bestTime: "June – September (hiking) or December – March (skiing)",
      avgTemp: "–5 to 22°C / 23 to 72°F depending on season",
      essentials: ["Parks Canada pass", "Bear spray for hiking", "Layers (mountain weather changes fast)", "Book Lake Louise early", "Rent a car"],
      bitcoin: false,
      kayakCode: "YYC"
    }
  },
  {
    id: "lima",
    name: "Lima, Peru",
    tagline: "Culinary Capital of South America",
    image: "images/destinations/lima.jpg",
    likes: 4123,
    liked: false,
    detail: {
      food: ["Ceviche", "Lomo Saltado", "Anticuchos", "Causa Rellena", "Pisco Sour"],
      bestTime: "December – March (summer, sunny)",
      avgTemp: "18–26°C / 64–79°F in summer; overcast winters 15°C / 59°F",
      essentials: ["Book top restaurants weeks ahead", "Uber/taxi is safest", "Visit Miraflores and Barranco districts", "Try a cevichería for lunch", "Soles for local spots"],
      bitcoin: false,
      kayakCode: "LIM"
    }
  },
  {
    id: "abu-dhabi",
    name: "Abu Dhabi, UAE",
    tagline: "Desert Oasis of Grand Mosques",
    image: "images/destinations/abu-dhabi.jpg",
    likes: 5876,
    liked: false,
    detail: {
      food: ["Machboos (spiced rice)", "Shawarma", "Luqaimat", "Camel Milk Chocolate", "Harees"],
      bestTime: "November – March (pleasant weather)",
      avgTemp: "25°C / 77°F in winter; 42°C / 108°F in summer",
      essentials: ["Book Sheikh Zayed Mosque (free, dress code)", "Rent a car or use taxis", "Modest dress in public", "Yas Island for theme parks", "Stay hydrated"],
      bitcoin: false,
      kayakCode: "AUH"
    }
  },
  {
    id: "phuket",
    name: "Phuket, Thailand",
    tagline: "Andaman Sea's Jewel",
    image: "images/destinations/phuket.jpg",
    likes: 6234,
    liked: false,
    detail: {
      food: ["Pad Thai", "Massaman Curry", "Tom Kha Gai", "Moo Ping (grilled pork)", "Mango Sticky Rice"],
      bestTime: "November – April (dry season)",
      avgTemp: "28–33°C / 82–91°F year-round",
      essentials: ["Grab app for transport", "Reef-safe sunscreen", "Phi Phi day trip", "Scooter rental (with license)", "Bargain at Patong markets"],
      bitcoin: false,
      kayakCode: "HKT"
    }
  },
  {
    id: "antarctica",
    name: "Antarctica",
    tagline: "The Last True Wilderness",
    image: "images/destinations/antarctica.jpg",
    likes: 8901,
    liked: false,
    detail: {
      food: ["Ship-prepared meals", "Hot chocolate on deck", "Expedition dining", "Fresh bread daily", "Celebratory champagne at landing"],
      bestTime: "November – March (Antarctic summer, 20hr daylight)",
      avgTemp: "–2 to 8°C / 28 to 46°F on the peninsula",
      essentials: ["Book expedition cruise 12+ months ahead", "Waterproof everything", "Seasickness meds for Drake Passage", "Camera with extra batteries (cold drains them)", "Follow IAATO wildlife guidelines"],
      bitcoin: false,
      kayakCode: "USH"
    }
  },
  {
    id: "athens",
    name: "Athens, Greece",
    tagline: "Birthplace of Democracy and Drama",
    image: "images/destinations/athens.jpg",
    likes: 5789,
    liked: false,
    detail: {
      food: ["Souvlaki", "Moussaka", "Spanakopita", "Greek Salad", "Loukoumades (honey donuts)"],
      bestTime: "April – June or September – October",
      avgTemp: "18°C / 64°F avg; summers 34°C / 93°F",
      essentials: ["Acropolis combined ticket (5 days, multiple sites)", "Comfortable shoes for marble paths", "Water bottle (refill stations)", "Metro to avoid traffic", "Sunset from Areopagus Hill"],
      bitcoin: false,
      kayakCode: "ATH"
    }
  },
  {
    id: "medellín",
    name: "Medellín, Colombia",
    tagline: "City of Eternal Spring",
    image: "images/destinations/medellín.jpg",
    likes: 4345,
    liked: false,
    detail: {
      food: ["Bandeja Paisa", "Empanadas", "Arepas", "Mondongo (tripe soup)", "Fresh Fruit Juices"],
      bestTime: "December – March or June – August (driest months)",
      avgTemp: "22°C / 72°F year-round (City of Eternal Spring)",
      essentials: ["Metro + cable cars for hillside barrios", "Comuna 13 graffiti tour", "Pesos in cash for small vendors", "Uber or DiDi app", "Flower market in El Poblado"],
      bitcoin: false,
      kayakCode: "MDE"
    }
  },
  {
    id: "kuala-lumpur",
    name: "Kuala Lumpur, Malaysia",
    tagline: "Twin Towers and Jungle Canopies",
    image: "images/destinations/kuala-lumpur.jpg",
    likes: 5654,
    liked: false,
    detail: {
      food: ["Nasi Lemak", "Roti Canai", "Satay", "Char Kway Teow", "Teh Tarik"],
      bestTime: "May – July or December – February (less rain)",
      avgTemp: "27–33°C / 81–91°F year-round",
      essentials: ["Grab app essential", "Touch 'n Go card for transit", "Book Petronas Towers tickets online", "Batu Caves day trip", "Modest dress at mosques"],
      bitcoin: false,
      kayakCode: "KUL"
    }
  },
  {
    id: "madagascar",
    name: "Madagascar",
    tagline: "Island of Lemurs and Baobabs",
    image: "images/destinations/madagascar.jpg",
    likes: 4567,
    liked: false,
    detail: {
      food: ["Romazava (meat stew)", "Ravitoto (cassava leaf pork)", "Vary Amin'anana", "Mofo Gasy (rice cake)", "Zebu Steak"],
      bestTime: "April – October (dry season)",
      avgTemp: "20–27°C / 68–81°F depending on region",
      essentials: ["Visa on arrival", "Hire local guides for parks", "Malaria prophylaxis", "4WD for rural roads", "Cash in Ariary (ATMs unreliable outside cities)"],
      bitcoin: false,
      kayakCode: "TNR"
    }
  },
  {
    id: "chicago",
    name: "Chicago, USA",
    tagline: "Architecture Rising from the Lake",
    image: "images/destinations/chicago.jpg",
    likes: 5432,
    liked: false,
    detail: {
      food: ["Deep Dish Pizza", "Chicago-style Hot Dog", "Italian Beef Sandwich", "Garrett Popcorn", "Jibarito"],
      bestTime: "May – October (warm weather, outdoor festivals)",
      avgTemp: "10°C / 50°F avg; bitter winters –10°C / 14°F",
      essentials: ["Architecture boat tour (must-do)", "CTA transit pass", "Layer up in winter", "Millennium Park / Bean selfie", "Try multiple pizza styles"],
      bitcoin: false,
      kayakCode: "ORD"
    }
  },
  {
    id: "varanasi",
    name: "Varanasi, India",
    tagline: "Oldest Living City on Earth",
    image: "images/destinations/varanasi.jpg",
    likes: 5123,
    liked: false,
    detail: {
      food: ["Kachori Sabzi", "Banarasi Paan", "Malaiyo (winter milk froth)", "Lassi", "Tamatar Chaat"],
      bestTime: "October – March (cooler, festivals)",
      avgTemp: "25°C / 77°F avg; summers 45°C / 113°F",
      essentials: ["Sunrise boat ride on the Ganges", "Attend Ganga Aarti ceremony", "Comfortable walking shoes for ghats", "Hire a local guide", "Respect cremation ghats (no photos)"],
      bitcoin: false,
      kayakCode: "VNS"
    }
  },
  {
    id: "scottish-highlands",
    name: "Scottish Highlands, Scotland",
    tagline: "Mist-Draped Lochs and Legends",
    image: "images/destinations/scottish-highlands.jpg",
    likes: 6345,
    liked: false,
    detail: {
      food: ["Haggis", "Cullen Skink", "Smoked Salmon", "Scotch Whisky", "Cranachan"],
      bestTime: "May – September (longest days, mildest weather)",
      avgTemp: "7–17°C / 45–63°F in summer",
      essentials: ["Rent a car (essential)", "Waterproof everything", "Midges repellent (May–Sept)", "Distillery tours", "Wild camping is legal"],
      bitcoin: false,
      kayakCode: "INV"
    }
  },
  {
    id: "uyuni",
    name: "Salar de Uyuni, Bolivia",
    tagline: "Walking on a Mirror to the Sky",
    image: "images/destinations/uyuni.jpg",
    likes: 7234,
    liked: false,
    detail: {
      food: ["Salteñas", "Llama Steak", "Quinoa Soup", "Api (corn drink)", "Pique Macho"],
      bestTime: "February – April (rainy season for mirror effect) or June – October (dry, easier travel)",
      avgTemp: "5–15°C / 41–59°F; freezing nights at 3,650m",
      essentials: ["Altitude sickness prep (3,650m)", "Warm layers for night", "Sunscreen + sunglasses (intense reflection)", "Book 3-day jeep tour", "Bring your own snacks"],
      bitcoin: false,
      kayakCode: "VVI"
    }
  },
  {
    id: "delhi",
    name: "Delhi, India",
    tagline: "Seven Cities Layered in Time",
    image: "images/destinations/delhi.jpg",
    likes: 4987,
    liked: false,
    detail: {
      food: ["Butter Chicken", "Chole Bhature", "Paratha", "Chaat", "Jalebi"],
      bestTime: "October – March (cooler weather)",
      avgTemp: "25°C / 77°F avg; summers 45°C / 113°F",
      essentials: ["e-Visa before travel", "Metro is best for getting around", "Bargain at Chandni Chowk", "Drink bottled water", "Visit Red Fort and Humayun's Tomb"],
      bitcoin: false,
      kayakCode: "DEL"
    }
  },
  {
    id: "kilimanjaro",
    name: "Mount Kilimanjaro, Tanzania",
    tagline: "Africa's Crown Above the Clouds",
    image: "images/destinations/kilimanjaro.jpg",
    likes: 6890,
    liked: false,
    detail: {
      food: ["Ugali", "Nyama Choma", "Ndizi (cooked banana)", "Pilau", "Chai Tea"],
      bestTime: "January – March or June – October (dry seasons)",
      avgTemp: "Varies by altitude: 30°C / 86°F base to –20°C / –4°F summit",
      essentials: ["Book guide + porter (required)", "Train 3-6 months before", "Altitude sickness awareness", "Quality hiking boots (broken in)", "7-8 day route recommended"],
      bitcoin: false,
      kayakCode: "JRO"
    }
  },
  {
    id: "nice",
    name: "Nice, France",
    tagline: "French Riviera's Azure Playground",
    image: "images/destinations/nice.jpg",
    likes: 5678,
    liked: false,
    detail: {
      food: ["Socca (chickpea flatbread)", "Salade Niçoise", "Pissaladière", "Ratatouille", "Pan Bagnat"],
      bestTime: "May – October (warm, beach weather)",
      avgTemp: "16°C / 61°F avg; summers 28°C / 82°F",
      essentials: ["French Riviera Pass", "Day trip to Monaco or Eze", "Beach shoes (rocky beaches)", "Train along the coast", "Cours Saleya market in morning"],
      bitcoin: false,
      kayakCode: "NCE"
    }
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    tagline: "Pura Vida in the Cloud Forest",
    image: "images/destinations/costa-rica.jpg",
    likes: 6123,
    liked: false,
    detail: {
      food: ["Gallo Pinto", "Casado", "Ceviche", "Chifrijo", "Tres Leches Cake"],
      bestTime: "December – April (dry season)",
      avgTemp: "24–30°C / 75–86°F (varies by altitude)",
      essentials: ["Rent a 4WD (many unpaved roads)", "Colones + USD both accepted", "Bug spray for rainforest", "Book zip-line tours", "Rain jacket year-round"],
      bitcoin: false,
      kayakCode: "SJO"
    }
  },
  {
    id: "osaka",
    name: "Osaka, Japan",
    tagline: "Japan's Kitchen and Comedy Club",
    image: "images/destinations/osaka.jpg",
    likes: 6456,
    liked: false,
    detail: {
      food: ["Takoyaki (octopus balls)", "Okonomiyaki", "Kushikatsu", "Ramen", "Gyoza"],
      bestTime: "March – May or October – November",
      avgTemp: "16°C / 61°F avg; humid summers 33°C / 91°F",
      essentials: ["ICOCA card for transit", "Dotonbori at night for food", "Day trip to Nara (deer!)", "Osaka Amazing Pass", "Cash for street food stalls"],
      bitcoin: false,
      kayakCode: "KIX"
    }
  },
  {
    id: "luxor",
    name: "Luxor, Egypt",
    tagline: "Open-Air Museum of the Pharaohs",
    image: "images/destinations/luxor.jpg",
    likes: 4890,
    liked: false,
    detail: {
      food: ["Ful Medames", "Koshari", "Grilled Kofta", "Feteer Meshaltet", "Sugarcane Juice"],
      bestTime: "October – April (cooler weather)",
      avgTemp: "22°C / 72°F in winter; 40°C / 104°F in summer",
      essentials: ["Early morning for Valley of the Kings", "Hire a knowledgeable guide", "Hot air balloon at sunrise", "Bargain for felucca rides", "Lots of water and sunscreen"],
      bitcoin: false,
      kayakCode: "LXR"
    }
  },
  {
    id: "tulum",
    name: "Tulum, Mexico",
    tagline: "Ruins Meet the Riviera Maya",
    image: "images/destinations/tulum.jpg",
    likes: 5876,
    liked: false,
    detail: {
      food: ["Fish Tacos", "Cochinita Pibil", "Ceviche", "Tlayuda", "Mezcal Cocktails"],
      bestTime: "December – April (dry, not too hot)",
      avgTemp: "26–32°C / 79–90°F year-round",
      essentials: ["Biodegradable sunscreen (required for cenotes)", "Rent a bike for beach road", "Pesos for local spots", "Book cenote tours", "Ruins open at 8am (go early)"],
      bitcoin: false,
      kayakCode: "CUN"
    }
  },
  {
    id: "phi-phi",
    name: "Phi Phi Islands, Thailand",
    tagline: "Maya Bay's Secret Lagoon",
    image: "images/destinations/phi-phi.jpg",
    likes: 5543,
    liked: false,
    detail: {
      food: ["Pad Thai", "Green Curry", "Fresh Seafood BBQ", "Coconut Ice Cream", "Thai Iced Tea"],
      bestTime: "November – April (dry season)",
      avgTemp: "28–32°C / 82–90°F year-round",
      essentials: ["Ferry from Phuket or Krabi", "Reef-safe sunscreen", "Snorkel gear (rent or buy)", "Cash (limited ATMs)", "Long-tail boat tour"],
      bitcoin: false,
      kayakCode: "HKT"
    }
  },
  {
    id: "bermuda",
    name: "Bermuda",
    tagline: "Pink Sands and Shipwreck Dives",
    image: "images/destinations/bermuda.jpg",
    likes: 4321,
    liked: false,
    detail: {
      food: ["Fish Chowder", "Bermuda Fish Sandwich", "Rum Swizzle", "Hoppin' John", "Codfish Breakfast"],
      bestTime: "May – October (warm, beach weather)",
      avgTemp: "22–30°C / 72–86°F in summer; mild winters 18°C / 64°F",
      essentials: ["No rental cars (scooters or bus/ferry)", "Pink beach at Horseshoe Bay", "Snorkel shipwrecks", "Bermuda dollar = USD", "Pack reef shoes"],
      bitcoin: false,
      kayakCode: "BDA"
    }
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen, Morocco",
    tagline: "The Blue Pearl of the Rif",
    image: "images/destinations/chefchaouen.jpg",
    likes: 5234,
    liked: false,
    detail: {
      food: ["Goat Cheese", "Ras el Hanout dishes", "Bissara (fava bean soup)", "Mint Tea", "Fresh Bread with Olive Oil"],
      bestTime: "March – June or September – November",
      avgTemp: "15–25°C / 59–77°F in spring/fall",
      essentials: ["Comfortable walking shoes (steep streets)", "Dirhams in cash", "Camera (the whole city is photogenic)", "Day hike to Akchour waterfalls", "Respectful dress"],
      bitcoin: false,
      kayakCode: "TNG"
    }
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon, USA",
    tagline: "A Billion Years Carved in Stone",
    image: "images/destinations/grand-canyon.jpg",
    likes: 7321,
    liked: false,
    detail: {
      food: ["Southwest BBQ", "Navajo Tacos", "Elk Burger", "Trail Mix", "Arizona Prickly Pear Cactus"],
      bestTime: "March – May or September – November",
      avgTemp: "South Rim: 5–28°C / 41–82°F; inner canyon much hotter",
      essentials: ["Book lodges/campsites months ahead", "1+ gallon water per day hiking", "Mule ride or helicopter tour", "Sunrise/sunset at rim viewpoints", "Layers (rim is much cooler than canyon floor)"],
      bitcoin: false,
      kayakCode: "PHX"
    }
  },
  {
    id: "petra-jordan",
    name: "Petra, Jordan",
    tagline: "Rose-Red City Half as Old as Time",
    image: "images/destinations/petra-jordan.jpg",
    likes: 6543,
    liked: false,
    detail: {
      food: ["Mansaf", "Falafel Wrap", "Maqluba", "Knafeh", "Bedouin Tea"],
      bestTime: "March – May or September – November",
      avgTemp: "15–25°C / 59–77°F in spring/fall",
      essentials: ["Jordan Pass (visa + Petra entry)", "2 full days for Petra", "Hiking shoes", "Start at 6am opening", "3+ liters water per day"],
      bitcoin: false,
      kayakCode: "AMM"
    }
  },
  {
    id: "seychelles",
    name: "Seychelles",
    tagline: "Granite Boulders on Powder Beaches",
    image: "images/destinations/seychelles.jpg",
    likes: 5876,
    liked: false,
    detail: {
      food: ["Grilled Fish Creole", "Octopus Curry", "Ladob (plantain dessert)", "Breadfruit Chips", "Fresh Coconut Water"],
      bestTime: "April – May or October – November (between trade winds)",
      avgTemp: "27–30°C / 81–86°F year-round",
      essentials: ["Island-hop by ferry or small plane", "Reef shoes for granite beaches", "Snorkel gear", "Seychelles Rupees for local spots", "Book Vallée de Mai (coco de mer)"],
      bitcoin: false,
      kayakCode: "SEZ"
    }
  },
  {
    id: "lake-bled",
    name: "Lake Bled, Slovenia",
    tagline: "Fairytale Island in an Alpine Mirror",
    image: "images/destinations/lake-bled.jpg",
    likes: 6234,
    liked: false,
    detail: {
      food: ["Bled Cream Cake (Kremšnita)", "Štruklji (rolled dumplings)", "Žlikrofi", "Potica", "Slovenian Wine"],
      bestTime: "May – September (warm, long days)",
      avgTemp: "10–25°C / 50–77°F in summer; cold winters",
      essentials: ["Pletna boat to island (ring the bell!)", "Hike to Bled Castle viewpoint", "Vintgar Gorge day trip", "Rent a paddleboard or rowboat", "Euros accepted"],
      bitcoin: false,
      kayakCode: "LJU"
    }
  }
];
