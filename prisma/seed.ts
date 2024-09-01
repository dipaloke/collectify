
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const booksCollection = await prisma.collection.create({
    data: {
      name: 'Books',
      description: 'A collection of various books.',
      category: 'BOOKS',
      imageUrl: 'https://example.com/book-collection.jpg',
      customString1State: true,
      customString1Name: 'Author',
      customInt1State: true,
      customInt1Name: 'Page Count',
      customDate1State: true,
      customDate1Name: 'Publication Date',
      customCheckbox1State: true,
      customCheckbox1Name: 'First Edition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'The Great Gatsby',
            tags: ['classic', 'novel'],
            customString1Value: 'F. Scott Fitzgerald',
            customInt1Value: 180,
            customDate1Value: new Date('1925-04-10'),
            customCheckbox1Value: true,
          },
          {
            name: '1984',
            tags: ['dystopian', 'novel'],
            customString1Value: 'George Orwell',
            customInt1Value: 328,
            customDate1Value: new Date('1949-06-08'),
            customCheckbox1Value: false,
          },
          {
            name: 'To Kill a Mockingbird',
            tags: ['classic', 'novel'],
            customString1Value: 'Harper Lee',
            customInt1Value: 281,
            customDate1Value: new Date('1960-07-11'),
            customCheckbox1Value: true,
          },
        ],
      },
    },
  });


  const coinsCollection = await prisma.collection.create({
    data: {
      name: 'Coins',
      description: 'A collection of rare coins.',
      category: 'COINS',
      imageUrl: 'https://example.com/coin-collection.jpg',
      customString3State: true,
      customString3Name: 'Country',
      customInt3State: true,
      customInt3Name: 'Denomination',
      customDate3State: true,
      customDate3Name: 'Mint Date',
      customCheckbox3State: true,
      customCheckbox3Name: 'Mint Condition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Liberty Head Nickel',
            tags: ['nickel', 'rare'],
            customString3Value: 'USA',
            customInt3Value: 5,
            customDate3Value: new Date('1913-01-01'),
            customCheckbox3Value: false,
          },
          {
            name: 'Indian Head Penny',
            tags: ['penny', 'antique'],
            customString3Value: 'USA',
            customInt3Value: 1,
            customDate3Value: new Date('1907-01-01'),
            customCheckbox3Value: true,
          },
          {
            name: 'Gold Sovereign',
            tags: ['gold', 'coin'],
            customString3Value: 'UK',
            customInt3Value: 1,
            customDate3Value: new Date('1911-01-01'),
            customCheckbox3Value: true,
          },
        ],
      },
    },
  });

  // Collection: Silverware
  const silverwareCollection = await prisma.collection.create({
    data: {
      name: 'Silverware',
      description: 'A collection of antique silverware.',
      category: 'SILVERWARE',
      imageUrl: 'https://example.com/silverware-collection.jpg',
      customString2State: true,
      customString2Name: 'Maker',
      customInt2State: true,
      customInt2Name: 'Piece Count',
      customDate2State: true,
      customDate2Name: 'Manufacture Date',
      customCheckbox2State: true,
      customCheckbox2Name: 'Limited Edition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Sterling Silver Spoon',
            tags: ['spoon', 'sterling'],
            customString2Value: 'Tiffany & Co.',
            customInt2Value: 1,
            customDate2Value: new Date('1890-01-01'),
            customCheckbox2Value: true,
          },
          {
            name: 'Silver Plated Fork',
            tags: ['fork', 'plated'],
            customString2Value: 'Gorham',
            customInt2Value: 1,
            customDate2Value: new Date('1905-01-01'),
            customCheckbox2Value: true,
          },
          {
            name: 'Antique Butter Knife',
            tags: ['knife', 'butter'],
            customString2Value: 'Wallace',
            customInt2Value: 1,
            customDate2Value: new Date('1910-01-01'),
            customCheckbox2Value: false,
          },
        ],
      },
    },
  });

  const AnimeCollection = await prisma.collection.create({
    data: {
      name: 'My Anime',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
      category: 'ANIMES',
      imageUrl: "",
      customString2State: true,
      customString2Name: 'Maker',
      customInt2State: true,
      customInt2Name: 'Season',
      customDate2State: true,
      customDate2Name: 'Air Date',
      customCheckbox2State: true,
      customCheckbox2Name: 'OVA Edition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'One peace',
            tags: ['action', 'adventure'],
            customString2Value: 'Tiffany & Co.',
            customInt2Value: 12,
            customDate2Value: new Date('1890-01-01'),
            customCheckbox2Value: true,
          },
          {
            name: 'Bleach',
            tags: ['action', 'drama'],
            customString2Value: 'X Animation',
            customInt2Value: 5,
            customDate2Value: new Date('1905-01-01'),
            customCheckbox2Value: true,
          },
          {
            name: 'Hunter X Hunter',
            tags: ['shonen', 'peace of life'],
            customString2Value: 'Z Animation',
            customInt2Value: 3,
            customDate2Value: new Date('1910-01-01'),
            customCheckbox2Value: false,
          },
        ],
      },
    },
  });

  const poetryBooksCollection = await prisma.collection.create({
    data: {
      name: 'Poetry Books',
      description: 'A collection of classic poetry books.',
      category: 'BOOKS',
      imageUrl: 'https://example.com/poetry-collection.jpg',
      customString1State: true,
      customString1Name: 'Author',
      customInt1State: true,
      customInt1Name: 'Page Count',
      customDate1State: true,
      customDate1Name: 'Publication Date',
      customCheckbox1State: true,
      customCheckbox1Name: 'First Edition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Leaves of Grass',
            tags: ['poetry', 'classic'],
            customString1Value: 'Walt Whitman',
            customInt1Value: 300,
            customDate1Value: new Date('1855-07-04'),
            customCheckbox1Value: false,
          },
          {
            name: 'The Waste Land',
            tags: ['poetry', 'modernist'],
            customString1Value: 'T. S. Eliot',
            customInt1Value: 64,
            customDate1Value: new Date('1922-12-15'),
            customCheckbox1Value: true,
          },
        ],
      },
    },
  });

  const scienceBooksCollection = await prisma.collection.create({
    data: {
      name: 'Science Books',
      description: 'A collection of popular science books.',
      category: 'BOOKS',
      imageUrl: 'https://example.com/science-books.jpg',
      customString1State: true,
      customString1Name: 'Author',
      customInt1State: true,
      customInt1Name: 'Page Count',
      customDate1State: true,
      customDate1Name: 'Publication Date',
      customCheckbox1State: true,
      customCheckbox1Name: 'Illustrated Edition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'A Brief History of Time',
            tags: ['science', 'cosmology'],
            customString1Value: 'Stephen Hawking',
            customInt1Value: 212,
            customDate1Value: new Date('1988-03-01'),
            customCheckbox1Value: true,
          },
          {
            name: 'The Selfish Gene',
            tags: ['evolution', 'biology'],
            customString1Value: 'Richard Dawkins',
            customInt1Value: 360,
            customDate1Value: new Date('1976-11-13'),
            customCheckbox1Value: false,
          },
        ],
      },
    },
  });

  const worldCoinsCollection = await prisma.collection.create({
    data: {
      name: 'World Coins',
      description: 'A collection of coins from around the world.',
      category: 'COINS',
      imageUrl: 'https://example.com/world-coins.jpg',
      customString3State: true,
      customString3Name: 'Country',
      customInt3State: true,
      customInt3Name: 'Denomination',
      customDate3State: true,
      customDate3Name: 'Mint Date',
      customCheckbox3State: true,
      customCheckbox3Name: 'Mint Condition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Canadian Maple Leaf',
            tags: ['gold', 'canadian'],
            customString3Value: 'Canada',
            customInt3Value: 1,
            customDate3Value: new Date('1979-01-01'),
            customCheckbox3Value: true,
          },
          {
            name: 'Euro Cent',
            tags: ['euro', 'coin'],
            customString3Value: 'Eurozone',
            customInt3Value: 1,
            customDate3Value: new Date('2002-01-01'),
            customCheckbox3Value: false,
          },
        ],
      },
    },
  });

  const historicalCoinsCollection = await prisma.collection.create({
    data: {
      name: 'Historical Coins',
      description: 'A collection of historical coins from different eras.',
      category: 'COINS',
      imageUrl: 'https://example.com/historical-coins.jpg',
      customString3State: true,
      customString3Name: 'Country',
      customInt3State: true,
      customInt3Name: 'Denomination',
      customDate3State: true,
      customDate3Name: 'Mint Date',
      customCheckbox3State: true,
      customCheckbox3Name: 'Mint Condition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Roman Denarius',
            tags: ['roman', 'silver'],
            customString3Value: 'Roman Empire',
            customInt3Value: 1,
            customDate3Value: new Date('4400-01-01'),
            customCheckbox3Value: false,
          },
          {
            name: 'Spanish Doubloon',
            tags: ['gold', 'treasure'],
            customString3Value: 'Spain',
            customInt3Value: 8,
            customDate3Value: new Date('1787-01-01'),
            customCheckbox3Value: true,
          },
        ],
      },
    },
  });

  const modernSilverwareCollection = await prisma.collection.create({
    data: {
      name: 'Modern Silverware',
      description: 'A collection of contemporary silverware.',
      category: 'SILVERWARE',
      imageUrl: 'https://example.com/modern-silverware.jpg',
      customString2State: true,
      customString2Name: 'Maker',
      customInt2State: true,
      customInt2Name: 'Piece Count',
      customDate2State: true,
      customDate2Name: 'Manufacture Date',
      customCheckbox2State: true,
      customCheckbox2Name: 'Dishwasher Safe',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Contemporary Silver Spoon',
            tags: ['silverware', 'spoon'],
            customString2Value: 'Modern Design Co.',
            customInt2Value: 1,
            customDate2Value: new Date('2015-01-01'),
            customCheckbox2Value: true,
          },
          {
            name: 'Silver Plated Knife',
            tags: ['knife', 'plated'],
            customString2Value: 'Silvercraft',
            customInt2Value: 1,
            customDate2Value: new Date('2018-01-01'),
            customCheckbox2Value: false,
          },
        ],
      },
    },
  });

  const antiqueJewelryCollection = await prisma.collection.create({
    data: {
      name: 'Antique Jewelry',
      description: 'A collection of rare and antique jewelry pieces.',
      category: 'OTHERS',
      imageUrl: 'https://example.com/antique-jewelry.jpg',
      customString2State: true,
      customString2Name: 'Jeweler',
      customInt2State: true,
      customInt2Name: 'Carat',
      customDate2State: true,
      customDate2Name: 'Craft Date',
      customCheckbox2State: true,
      customCheckbox2Name: 'Certificate of Authenticity',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Victorian Emerald Ring',
            tags: ['ring', 'emerald'],
            customString2Value: 'Jewelers Inc.',
            customInt2Value: 3,
            customDate2Value: new Date('1895-01-01'),
            customCheckbox2Value: true,
          },
          {
            name: 'Edwardian Sapphire Necklace',
            tags: ['necklace', 'sapphire'],
            customString2Value: 'Royal Gems',
            customInt2Value: 5,
            customDate2Value: new Date('1910-01-01'),
            customCheckbox2Value: false,
          },
        ],
      },
    },
  });

  const animeMerchCollection = await prisma.collection.create({
    data: {
      name: 'Anime Merchandise',
      description: 'A collection of anime merchandise.',
      category: 'OTHERS',
      imageUrl: 'https://example.com/anime-merch.jpg',
      customString2State: true,
      customString2Name: 'Character',
      customInt2State: true,
      customInt2Name: 'Series',
      customDate2State: true,
      customDate2Name: 'Release Date',
      customCheckbox2State: true,
      customCheckbox2Name: 'Limited Edition',
      user: { connect: { id: 'f38cd650-0a9b-4f5a-be3e-bacafc83c068' } },
      items: {
        create: [
          {
            name: 'Naruto Action Figure',
            tags: ['action figure', 'naruto'],
            customString2Value: 'Naruto Uzumaki',
            customInt2Value: 1,
            customDate2Value: new Date('2020-01-01'),
            customCheckbox2Value: true,
          },
          {
            name: 'One Piece Mug',
            tags: ['mug', 'one piece'],
            customString2Value: 'Luffy',
            customInt2Value: 1,
            customDate2Value: new Date('2021-01-01'),
            customCheckbox2Value: false,
          },
        ],
      },
    },
  });


  console.log('Seeding finished.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
