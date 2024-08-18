
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
  console.log('Seeding finished.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
