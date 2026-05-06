// Sample destination data for public preview
export const SAMPLE_DESTINATIONS = [
  {
    uid: 'dest-paris-001',
    title: 'Paris, France',
    description: 'The City of Light is a timeless destination known for its stunning architecture, world-class museums, and iconic landmarks. Experience romance, art, and culinary excellence.',
    location: 'Paris',
    country: 'France',
    best_time_to_visit: 'April to June, September to October',
    slug: 'paris-france',
    published_at: new Date('2024-01-15').toISOString(),
    updated_at: new Date('2024-01-15').toISOString(),
    featured_image: {
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop',
      title: 'Eiffel Tower, Paris',
    },
    estimated_days: 5,
    budget: '$2,500 - $4,500 per person',
    attractions: `
• Eiffel Tower - Marvel at the iron lattice monument with panoramic city views
• Louvre Museum - Explore the world's largest art museum housing the Mona Lisa
• Notre-Dame Cathedral - Admire gothic architecture (currently under restoration)
• Arc de Triomphe - Walk through this iconic arch with surrounding avenue views
• Champs-Élysées - Stroll the famous avenue with upscale shops and cafes
• Versailles Palace - Day trip to the opulent royal residence and gardens
    `,
    travel_tips: `
• Use the Metro (subway) for efficient city transport - buy a pass for 10 journeys
• Learn a few French phrases - locals appreciate the effort
• Visit museums on free entry hours (usually first Sunday of the month)
• Eat lunch as your main meal - dinner is late (8-9 PM) and lighter
• Book restaurants in advance or expect long waits
• Pick-pockets are common in tourist areas - keep valuables secure
    `,
    accommodation_tips: `
• Stay in central arrondissements (1st, 4th, 6th) for authentic Paris experience
• Budget hotels: $60-120/night; mid-range: $150-250/night
• Apartment rentals offer better value than hotels for longer stays
• Book early, especially during April-May and September
• Latin Quarter and Marais neighborhoods offer great atmosphere and accessibility
    `,
  },
  {
    uid: 'dest-tokyo-001',
    title: 'Tokyo, Japan',
    description: 'Experience the perfect blend of ancient tradition and cutting-edge modernity. Tokyo offers neon-lit streets, serene temples, incredible food, and unforgettable experiences.',
    location: 'Tokyo',
    country: 'Japan',
    best_time_to_visit: 'March to April (Cherry blossoms), October to November',
    slug: 'tokyo-japan',
    published_at: new Date('2024-02-10').toISOString(),
    updated_at: new Date('2024-02-10').toISOString(),
    featured_image: {
      url: 'https://images.unsplash.com/photo-1540959375944-7049f642e9f1?w=1200&h=600&fit=crop',
      title: 'Tokyo Skyline at Night',
    },
    estimated_days: 6,
    budget: '$2,000 - $3,800 per person',
    attractions: `
• Senso-ji Temple - Tokyo's oldest temple in the historic Asakusa district
• Tokyo Skytree - Tallest structure in Japan with observation decks
• Shinjuku - Bustling district with shops, restaurants, and nightlife
• Shibuya Crossing - World's busiest pedestrian crossing
• Meiji Shrine - Peaceful shrine set within a forested area
• TeamLab Borderless - Interactive digital art museum
• Imperial Palace East Gardens - Beautiful gardens in the city center
    `,
    travel_tips: `
• Get a Suica/Pasmo card for seamless public transport across trains and buses
• Convenience stores (7-Eleven, Lawson) are excellent for quick meals and drinks
• Tipping is not customary and may be considered offensive
• Learn basic Japanese phrases - many locals speak limited English
• Vending machines sell everything from drinks to hot meals
• Rush hours on trains are intense; avoid 7-9 AM and 5-7 PM if possible
• Visit during cherry blossom season (late March to early April) for magical experiences
    `,
    accommodation_tips: `
• Stay in Shinjuku, Shibuya, or Asakusa for best neighborhoods
• Budget capsule hotels: $30-50/night; mid-range hotels: $100-200/night
• Book months in advance for cherry blossom season
• Many hotels have coin laundry facilities
• Airbnb and hostels offer good value alternatives
    `,
  },
  {
    uid: 'dest-bali-001',
    title: 'Bali, Indonesia',
    description: 'A tropical paradise known for stunning beaches, lush rice terraces, ancient temples, and vibrant culture. Perfect for relaxation, adventure, and spiritual exploration.',
    location: 'Bali',
    country: 'Indonesia',
    best_time_to_visit: 'April to October (Dry season)',
    slug: 'bali-indonesia',
    published_at: new Date('2024-03-05').toISOString(),
    updated_at: new Date('2024-03-05').toISOString(),
    featured_image: {
      url: 'https://images.unsplash.com/photo-1537225228614-b4fad34a2b08?w=1200&h=600&fit=crop',
      title: 'Bali Rice Terraces',
    },
    estimated_days: 7,
    budget: '$800 - $1,500 per person',
    attractions: `
• Ubud - Heart of Bali with art galleries, markets, and culture
• Tegallalang Rice Terraces - Iconic green rice paddies perfect for photos
• Bali Swing - Thrilling adventure swings among jungle canopies
• Tirta Empul Temple - Sacred water temple with holy spring pools
• Beaches - Kuta, Seminyak, and Uluwatu offer diverse beach experiences
• Mount Batur - Sunrise trek with volcanic crater views
• Monkey Forest Sanctuary - Home to hundreds of Balinese monkeys
    `,
    travel_tips: `
• Rent a scooter for flexibility (cost: $3-5/day) or hire a driver ($30-50/day)
• Balinese people speak English fairly well, especially in tourist areas
• Try traditional Balinese massage - very affordable ($5-15/hour)
• Be respectful in temples - wear sarongs and remove shoes where required
• Street food is delicious and safe, especially warungs (local restaurants)
• Haggle in markets but do so respectfully
• Indonesian rupiah is the currency; exchange rates vary ($1 = ~15,000 rupiah)
    `,
    accommodation_tips: `
• Ubud for culture; Seminyak/Canggu for beach and nightlife
• Budget guesthouses: $15-40/night; mid-range resorts: $60-150/night
• Luxury villas: $100-400/night (great value compared to Western prices)
• Book during dry season in advance for popular spots
• Many accommodations include free breakfast and shuttle services
    `,
  },
  {
    uid: 'dest-newyork-001',
    title: 'New York City, USA',
    description: 'The city that never sleeps offers endless entertainment, world-famous landmarks, diverse neighborhoods, and incredible dining and cultural experiences.',
    location: 'New York',
    country: 'United States',
    best_time_to_visit: 'April to May, September to October',
    slug: 'new-york-city-usa',
    published_at: new Date('2024-01-20').toISOString(),
    updated_at: new Date('2024-01-20').toISOString(),
    featured_image: {
      url: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&h=600&fit=crop',
      title: 'New York City Skyline',
    },
    estimated_days: 5,
    budget: '$3,200 - $5,500 per person',
    attractions: `
• Statue of Liberty & Ellis Island - Iconic symbols of America
• Central Park - 843 acres of green space in Manhattan's heart
• Times Square - Bright lights, theaters, and electric energy
• Empire State Building - Stunning views from this historic skyscraper
• Metropolitan Museum of Art - World-renowned art collection
• Brooklyn Bridge - Iconic bridge with Manhattan views
• Broadway Shows - World-class theater performances
• 9/11 Memorial & Museum - Moving tribute to lives lost
    `,
    travel_tips: `
• Get a MetroCard for subway and bus travel - unlimited weekly pass available
• NYC is very walkable; comfortable shoes are essential
• Tipping is expected: 18-20% in restaurants, $1-2 for bar drinks
• Many museums offer 'pay what you wish' hours - check websites
• Restaurants can be expensive; food trucks and delis offer great value
• Book Broadway tickets in advance or check TKTS for discounts
• Watch out for crowds in Times Square; explore lesser-known neighborhoods
    `,
    accommodation_tips: `
• Manhattan is pricey; consider staying in outer boroughs (Brooklyn, Queens)
• Budget hotels: $80-150/night; mid-range: $200-350/night
• Luxury Manhattan hotels: $300-600+/night
• Book early, especially for spring/fall seasons and holidays
• Hostels offer affordable options ($40-70/night for dorm beds)
    `,
  },
];
