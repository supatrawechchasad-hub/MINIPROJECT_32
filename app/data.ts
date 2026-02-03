// app/data.ts

// 1. สร้าง Type ของ "ตอน" (Episode)
export interface Episode {
  id: string;      // รหัสตอน เช่น 'ep1', 'ep2'
  title: string;   // ชื่อตอน
  date: string;    // วันที่ลง
  thumbnail: string; // รูปเล็กหน้าตอน
  images: string[]; // รูปภาพเนื้อหาข้างใน (เอาไว้อ่าน)
}

// 2. อัปเดต Type ของ "การ์ตูน" (Comic) ให้มีรายการตอน (episodes)
export interface Comic {
  id: number;
  title: string;
  coverImage: string;
  author: string;
  description: string;
  status: 'Reading' | 'Finished' | 'New';
  episodes: Episode[]; // <-- เพิ่มตรงนี้!!
}

// 3. ข้อมูลจำลอง (Mock Data)
export const COMICS: Comic[] = [
  { 
    id: 1, 
    title: 'roses and champagne', 
    author: 'Ttung gae และ ZIG', 
    description: 'จองอีวอน ทนายความที่พยายามช่วยเหลือเพื่อนจากการถูกยึดโรงงานไม่เป็นธรรม ทำให้เขาต้องเข้าไปพัวพันกับ ไกซาร์ มาเฟียผู้มีอิทธิพล เรื่องราวการแก้แค้นและความสัมพันธ์อันตึงเครียดจึงเริ่มต้นขึ้น ', 
    coverImage: 'https://ok-doujinx.com/wp-content/uploads/2023/09/Roses-and-Champagne-193x278.jpg',
    status: 'Reading',
    episodes: [ // ใส่ตอนต่างๆ เข้าไป
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-10-01',
        thumbnail: 'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0054.webp',
        images: [
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0032.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/d7bad5cebe86dc060826c89b26178c37/032.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/d7bad5cebe86dc060826c89b26178c37/033.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/d7bad5cebe86dc060826c89b26178c37/034.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/d7bad5cebe86dc060826c89b26178c37/035.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/d7bad5cebe86dc060826c89b26178c37/036.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/d7bad5cebe86dc060826c89b26178c37/037.webp',
          'https://sv7.toon168.com/wp-content/uploads/manga_i77dQndJlKr4Z/roses-and-champagne/unknown/7-QKX9pHFh.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0040.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0041.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0042.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0043.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0044.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0045.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0046.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0047.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0048.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0049.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0050.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0051.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0052.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0053.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0054.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0055.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0056.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0057.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0058.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0061.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0062.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0063.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0064.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0065.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0066.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0067.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0068.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0069.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0070.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0071.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0072.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0073.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0074.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0075.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0076.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0077.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0078.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0079.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0080.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0081.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0082.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0083.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0084.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0085.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0086.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0087.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0088.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0089.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0090.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0091.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0092.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0093.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0094.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0095.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0096.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0097.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0098.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0099.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0100.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0101.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0101.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0102.webp',
          'https://ok-doujinx.com/wp-content/uploads/WP-manga/data/manga_65114f4c978d1/2fbeace2b0f5cbc7edeb12976f7f4d38/0103.webp'

        ]
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-10-08',
        thumbnail: 'https://sv7.toon168.com/wp-content/uploads/manga_i77dQndJlKr4Z/roses-and-champagne/2/22-ymkJcKX7.webp',
        images: [
          'https://sv7.toon168.com/wp-content/uploads/manga_i77dQndJlKr4Z/roses-and-champagne/2/0-zoV8pNF0.webp',
          'https://sv7.toon168.com/wp-content/uploads/manga_i77dQndJlKr4Z/roses-and-champagne/2/1-cKuP8Sl3.webp',
        ]
      }
    ]
  },
  { 
    id: 2, 
    title: '19 DAYS', 
    author: 'old xian', 
    description: '  ว่าด้วยเรื่องราวรอบตัวของเจี้ยนอี จ่านเจิ้งซี เฮ่อเทียน และโม่กวนซาน เด็กหนุ่มทั้งสี่คนที่ต่างก็มีเอกลักษณ์เฉพาะตัว เป็นจุดเริ่มต้นของความสุข เสียงหัวเราะ การเติมโต และความน่ารัก ณ บัดนี้', 
    coverImage: 'https://youshiadan.wordpress.com/wp-content/uploads/2021/10/9ec40e1451abc93be55ed105a9f9a716.jpg?w=186',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://via.placeholder.com/150/0000ff/fff?text=Cat+EP1',
        images: [
          'https://via.placeholder.com/600x800/eee/333?text=Cat+EP1+Page1',
        ]
      }
    ]
  },
  { 
    id: 3, 
    title: 'LOVE JINX', 
    author: '건한', 
    description: '  เรื่องราวของอิมแฮกยอง พนักงานบริษัทที่มี "จิงซ์" (คำสาปนำโชคร้าย) ที่ทำให้เรื่องรักพังทลายเมื่อจูบกับใครก็ตาม จนกระทั่งมาพบกับคังอูจิน รุ่นน้องที่เขาเคยทิ้งไปสมัยเรียน', 
    coverImage: 'https://static.wikia.nocookie.net/yaoiboyslove/images/6/6d/Love_jinx_volume_1.jpg/revision/latest?cb=20210610114348',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://cdn.readawrite.com/articles/18747/18746871/thumbnail/large.gif?1',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_CzFin1iOIWdWJVBA1ilswAIIcZG74R_qSsv2aiDBw&s',
        ]
      }
    ]
  },
  { 
    id: 4, 
    title: 'JINX', 
    author: '밍과', 
    description: 'เรื่องราวความสัมพันธ์ระหว่างคิมดันนักกายภาพบำบัดผู้ขัดสนที่ต้องแบกรับภาระหนี้สิน และจูแจคยองนักสู้ MMA ชื่อดังผู้ร่ำรวยแต่เย็นชา โดยคิมดันต้องยอมทำทุกอย่างเพื่อเงินรวมถึงเรื่องบนเตียง ', 
    coverImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRMXGBUXGBgXFRgXGBcYFxUYGBYYFRUYHSggGBomHhUXITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGy0lHyYtLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xABDEAACAQIEAwYEAgcHAgcBAAABAhEAAwQSITEFQVETImFxgZEGMqGxYsEUI0JScoLwkqKywtHh8QczQ3ODo7PS4iT/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAMxEAAgIBAwMDAgMGBwAAAAAAAAECEQMSITEEQVEiYXETMoGhsRRSkaLh8QUjJEPB0fD/2gAMAwEAAhEDEQA/APmypVgrxBVoFEJURXZKuAr0JQMU5a9y1bFSy1jFIFQutAJPKiIoDib6Zff8vzomAHuFtztt0qFcK9omOqSE/wBaVCamD4VjFwg7zPnP3FW3cAwE6e8H2MVSjkbGPIx9qvVwdCATyOZ/+PtWMCERVlu+V8RVr4cjdSPRvvFUCBv6VjDFDImiLJoDB3hGXmPrRirSsyCxXoWhiSDU0xJ50tFVNdy/sqj+jA1JMQtXBx1oblFpYG+EPKquyZaZE1wE1tQHjXYXZzXUx7MV1HUD6fuKkWrVrxF01qwCmIo8Ua+9WBa4LO1TZYoBK1UV6y79a9RasZKxqBwtK+MKQV/m/L+vSm8VSeFviXS0nzFtSdQqgHMxHOOnlRsFGezVwH9GnXxP8MXMGM4PaWyYJiCpPy5gORgx7eecF/qJP9bCimmZprZhcTzqYWhbeIJ6Af170z4dg3vOEQZmOsbAAbsxOiqOprWArt2pohFA51p+E/CU9+836oRAWQbnlzCk6DYt4aTrMPw+2gjs0Ufuqo+sb/1NK8iRWOJs+arc0gKP5pPsJigXE/8AFfTeJ8FsG27G2FIRyMvdjSZ056VleIfDxXDLfDj/ALauykEGSsnUecRWU0wSxtGcfDkAPuPDQ/7UzwJzDrSS7NM+HrkUciYkeMEz7UWIuRytsaVBsKpNVpihGoqy1eBNJTRdOLKruBjUGh+yYU1YVExW1GeJCsXmFW28X1op7anah3w69aNpitSjwy39KHSuoXsK6jSNrkdaFWqtdZFXqsGsTRC3VgFSA1Ncw5eprDURA6VzKakOoqTLoYoGooa10rW/9O8GrPeJEuFUDyJMx5kD2rM7wRTn4Qx62cUqsY7UMgiJzAZgNdORpZ/ax8TSmmzQcSw1u8XtMsqwdHkROo58yDzG2vOvivE+ElMU+GtTcIuZF6kzoDynlPhX6Es8M7+YMXRg05hDKxIMwAB+9rAInnOmab4PFvHXMYTM/KI0BKBWJ8dD/apITS2LZcLluZvDf9NAttQ7F77RJBIt2gZloGrQA3gSFEAEw5sHh2CBRrtsN3QwJBduai6B3oE5iIjULtK1qsNfXZwCNteh5EcxSXjHHr9hnR8Lbu4cQQVIBKtM/q37pg6HX9pdO9Q1N7DfTjFakFcI4thscWGHu5hagt3XBJaRJLqM2x2GntRF3DFeX9edYa9wyw7JiMAb2BxTGUFxClm4NSVU5cp0Gy5lIG3OtLwL4gxbsLOMwbh+V2zDI2+rLPcG2sxrsKDTXAYzUtpc+VwdxeWUWl+a4QvkgINxv7Onmy9aV/Gd3JhXA00VR5FlH2mnfGsXYwv6zEXFQtoNyYH7KKBJ8TGvsBgPiL4jTFxasqxt5pZ2GUEKNlG+5G8ctNaeG5LK1G0+RHhbUnN7faac4bD6D0oC3ofDl4SdqYYfEAACqs5oVe5Y+CFUPgyNtaO7Ucjv9KkrDltsaW2X+nFizO69a4Yk86Nvt1oO6ATTLclJOPDOGIqBuVWRXhFGhNTLO0rqhlrq1AsOwyaVfk361ThFnl40V2dBlEVov+tSyeFSUTyqSnrtS2MeAGIGikyROkjYkev1rsv9Dzr1hNetWMQWreC8NGJxWZxNuyunKbj8wfwgTI2MdKtt2MwWCe+2RAIlyNWMnZFEkt4QNYre8B4AlqxlUQTrPMk7k9SaWcqQ+PHrYJfv4mLcYgC2r2swFodpcHaKGD3M0AEHXKoPjWruWwayXF1NtH01AzeeUg/lWmweLDb71CfB2Y3u0wDGcPjVaAnk6hhvBFagihcTgFfwNBS8jOPdASCzdADy0EGHdiAQZESaMw2ERAco3+vrSfE4JkPh1qeGxjL4+dFqxVKnujGfEPBXvXu3usipEhux7S4QJhVzKyjXYaQNZOtY+7edpLuWOoXb5ZMDTSdeVb74g4ubeE7IHvMWReohiCfQAnzjrWCy1047rc4M1XseIKKXDTqKpTSmVgjadKaTEhFN7gD4Z15GvBfYf702B18KqvgdNKVS8lHjrdMXXL81AmrLqCq4p0RlZEiuIrq9oikM1dXuWurGGeGXSihNDYTTyo0iBSMtHgh2dSCeFSe4AMxICjcnQDzNEYbCPdIyKQunfYEDwyLoX+g8aAQe1ZZmCIuZzyHIc2Y8h/Qmm3Dvhy45BukBOiknN4ZiBC+knwG+v4D8PLathB81wjO+mbXWFMaHKGPgFHNq1F/AqzAQAAABHIDaKVyHjGz5rgrCvde6NkLWLYAgIttsrx4l1MnoqjlrteHXgygcxpWd4Nw/9U5XX9bfP9u67/5qLwt422+9SnudOL0r5GXGcKGCmNcw+oI/Os9gi1o9kZBUSk7lBy81kDyynnWnxV0NbB5ZkP8AfWh+NcO7VJGjpqp6EffQnTxI50kZVsPKPdcnmD4iDo1MVYHasxgwbgMaOsZl6dCOqnkfMbggWsxAKsJHMESD6Gi4mU9tzRMBzrN8XHZOcolSoPefujUyR3Sx8iY0ERrSu8LMkk3LRO8FlX0DaD0FJviF3ZClntLoiGYkkhYnIF5kjUwNj4ijCO4Ms0o3ZmuJ4437hcmRqE0gRMkgSYzHXyyzqKENexXkV1pUeW3bs9WrQjDWo2hrTXDroRHjQk6KQhqF6YthvrVv6UD50ZfwqnWKEu4GBM+9LaY7jOJRcNUsak6ERNQNOiLZ5Fe15XtEUhXVOK6sYYW4XcwBzOgpzw7g9++e6vZr+9cBk/w29D1+YjyNaLg/wrbsw7/rLg1zMNFP4F2T79Sa2fB3twAiif3jt6dfT3qbZ0RgZnhHwKqwzgs24L94g9VX5V33AB86OGBOU3FAyD5TvnO2YeHIHzPPTXXsKHEMZU7jYHwgcvOTXt60GKpy1MeAgfdhSamOkvBmOHY9kcBoYIOQjvNufMAez1oxiQyM6nZSfKBSa3wqUNxf2yXHip0T+4FoJrz2wQCRMA+pA/OtVh45CeD4cWzft8lvOB5NDj6MKhj8DMld9apwvEMt+7mHz9m8+OXs/tbFNrbST0IDe+n5fWoytSOnHTiZm7eZUcfhOniBpWksXg4kUBxrAg23Yb5W+1L7bshkaVuUH7We8VwZt3BctnKdcp33+ZWHNT08uYmrMJxKxfJtsRbvj5rbGD4Mk/Oh5EeRggir7mOV0KuPbr1FZbjeAs3Qq4hVYsStuVViGImEzEclY765RpyopXyLKWndDLjg7IRILMcqCfmPprEAkxsATyqqxglRQoMtEtmEZ9dTO2p1BG0jyozBJbWMiKmkaKBsNpiTprr58xNyoB3Ttuvh4A8o5eHlVoqkc03qYi4h8P2L/eZSW3DgsGEfssybjfQzBnSs7ivhN4my+b8LwCdeVxdNNRBHrzreXL62yc7DXXx217o12A208qHbGq3eRLj85W2SD6mNxHsKeybimfLLtpkbI6FHH7Lbx1HJh4iRRFjGFeVfQsfZw+JXs7kTyDd1lbqpOzeVY/GcHNluzuCd8j7Zx0I5OOY57jmBrQIxaexSMcCKsuuCOtB3uHncGqMrLpQpdh3OS+5Ht/cmhiP6+9WM52qE06RCTshFSr010URSM11exXVjH6HxnCc+v93l69T9PvSi7aZDrpWvqjE4VXEEVz2dad8irh3E/wBl/ercbek3Ap1yW0Ujk164yT6Qp9KX4zh7IdBpS8Xn7ZQOQzk+KhkUEf8AqMf5aNBZtFQAAAQBoB0A2FAcQ4er5eRLDbwBb/LQOG4oynvaimaYxGK6jST67D6E0DU1wZXjuA7K9bjXOj/+2UI/+RqrwOMKOoO2o8p1/L608+JlBC3BqbQNz0kZv7of2pNxDBSM6DQjMB5QY+kUkvctjuthviyDbaOhqgIhtIT+4p/uilVvEMBE6GvLWKzJbXYBVBg8gAPT/mk0sqpIqvJqcvyjc/kPGkOPtm6O1AkDWz/KQwf+YqP5QOppnxq6XHZrokgNHT90dNNzyHnItdJEGqrYjNJuiWDbtLYZTy3ifFSBz3mOYPWCCmTtEg90kfsnYxurc95B5g9DS/gzFS6nYMB7iVPlJy+gphflAWWNjoTlUHU6mDCknUwYknm00OcHwOCRZ0lgYMgaHqoA5zM76+lFDQx11H5j8/XwoW9fghijKwEHQsjAbgso7sGYLhSDOkE0Rh17YAIdfmQ+I5Hx5EdCa1mR5ctq+jqD5jbrHT/egOI8GW5bKAlRyg/KRqMsggexn3lv2MhWHWCOh5g+k/2RXOhFYLiz5jdPeZQ2qsVKt3DIMczlg7jXWRprQuIkGGBB6EQadfHmB7O6l4aLcGVv41EqfVQf7AqeC4IHwga3e/XCWa0+U24nRShBymIltwTO0CjshPVK0ZVqjFPl4H2lnOjReBi5aPdCHmmuobUGSSDy0INJHEGNiNCDoQRuCORpk7JSi0RyCN9Z2jlG8/lXhFTArophTzLXlSiurGP0Jw3ik91/em0zWVv4JrfkJE+RjX2o7hnE47r7cjUGjrasdsgO9LcLgEZnuRuco/hSR/iLmehFEYzGZbVxlMkDuwCe8QAug1OpFUrcfIq2wbSCFD3B38oGhW3y0B1eIjVTQF1NAvGRZtATq7fKi/M3j4KJEsdBI5kA58u694y3UKPl/hG7DqNT06VdfAzSCTmbUsZZoBIzHw6bDYADSibWDdtlMdToPSd9xtTI1vuU4TG94kEMsKu4IPzEifJh713BHh2snZPknmh1HnoYnmVaqsZgXsMrMsBiVdhtrLBifAjnEBieVU42UK3ADKmCBGxOm/Q/RmpZRtFITaYfZwgZSIgiQOscp9IpKAVUgDUFlA8QxCg/StBgMSWBIQyY+YqBoANwSeXSgrlvs7+a4oVGIMhsyhhpJJAK7DcRpvO8k6OiTTE7WdQvRTM8yTqT4nX3qXaxpqzdBqfCeQ9SKcXuG5778lhZIPnoOh/L0qb8HA0Ux4cvpTakJo8CTAWz2z5o79sCAZEKxnWN4uCaNuSWVOXzMeqjYepieUKw51FrBt3UnnmX3Gb/ACCrLX/dc9Ftr7Z2/wAwqsXaIzVM9jIdNjp/oPyHt+7V6vEEeBBHLoRT7h+GTs4IBzDvevLypLxKwbDZcrOjkBdZMnTLG4O3KDMzJMrZqKxjxnCmAzET01DSR0Ex63G3pvcsA68qEf4XLKDccZ0IMBdiMrRmmdYU9JA0MUt4wVti2qzcdx3UZzIP7TGB3VG0nygmKLQYT2BfiA2YGZlOW5bdecFGDcucA6bwfGocdw+W4MQBGgD7SQJIYRzU6z0zRvQ2Cs5HLWgL9zLqXcIqszE5woXNlMtEAiNARFe4DEv2SW3aSqJr1BHdPnoR6TzoSTDCSpoM4thAydvaA7QASP31BkqfHeDyJ6TOb+IeFC9Y/SLSgsNTAOZkjUEdQIO06RTDg+PNp7mHJnJDrPO0xOX+yQU8lXrV2GvdjdI3tXJaP3W3bL1BktHUN1AAVoaWmfJ85KRUSKdfFHDks3/1fyOCwH7pnvCehkGPPlEJ4roTs4ZLS6I5q6va9oin6SayDmB1mD7gD8jSLiHDihldqdYO7IXyKnzXb6AmvcbiFUEkSACfbWuc6ld0ZjCYpl1B5n7mPpTAcSDABxpInyOh+9XDhgIKjQqFB88oJ+9LMXg2RgInc+2g+p+lEbkdYdLXaAqFACMeXVdSfKaIQ5mnkI//ACD75vVelZdcQUbMOYAA5Eyd+dO8BxEQAd+Z6k7mgK43wWcbaEVjstxCZ2y6htP4SaWcU4cE7sShEDxEaofGJg8x4iS34hbFy2V3Br2wRctAPrIhvMbnTYyJB8jWs1VuY3B4hrbFZ1XQ+I5H1+4PSnti+twQYPUGguPcPKkOJJHMD/uJOqkD/wAQaEad7UCC0UAMywwOh1BBkEHYg8xSSidGOdo0OHRV7gEAbDw8Kk9ocqRDiZVlZuuU+TaffLTWzjkbY1Npoe/BDiFoZVY/suh8hmAf+6WoK/hsl64o11X/AAD/AGppikzo6z8ysPcEUNwNu2u3Lp2/VkeZsWwfqGqmN7EcvJXhsWybbdKuxWMZns3EQObZaUZ8k5lgGYI0IBo7HYAMCVEN9/Clj4QxmXUfUVTYTsW4/iOKPeHZWMykEkm83cBYZR3VBjNvIpdwDhqXLEklrl3tM9w6sRqBB6DtAQBA9a8xklSJ5geUmD9Cau+FuJ2zZWPkUBFO+bLOZp/ExO24ANFgVJ7Al3AsYdYF633WWdyILKTHykQQf4WilyMnaAzAlhrpAc95TylXCyOSgdafcRxoF1bi6KRledpGqMegGoJ6MCdFpHxC1+szEd0gq4PQjc+wB/2pN+GVdP1IH+McILaWsUohrLhm/wDLPdur4iDP8oq/iWDPZi5b1yEOAOYAgr5lSR60xwWIW9ZCOQW1RpjvFCVJPnE+tVcHtlENpgYU5VPIqBA15numfGltpFHBN7dzJfFVsNbt3F1hon8LKfzVazDVvcdwr9VdtToO8s7KGJZI/CCsR0HSKwiEET61eDtHDli09yEV1Ty11OSPu+C4iFLBv4h7QfsPeoYq/wBoQJ+ZlX0LAH6TQONslGXzj3B/OKEt3SWt9RmY+gy/dvpUaOu6NdhHl73hcA/9q3/rXtnvAsdm2/hHy++p/mrO4LHnvodnclv4RCx65Y8pp2l8XZA+Qb/iP7o/D167daAjTQJe4aLhzrp+6Oo/e9eXh5mlt6yyHWtMTVV62raEVrCpeRFh8ey+IplgcWpJ6HXyP/Ee1CYvhsarS0yp6UeR+xqMSmZY0J5TsfA+BBIPgaz1jCCyQneaxcLG2WMm05JLWWO8TmKztDLyWb8JxMjRtRRhyXAyH5H103VhrIPI6BgeRUmla2oVXF2hFxfAAI2T5omJ1ncGPahjYYax7EUF8Y2e7h0f5/0pFZojMWBhh4EEEDltyqHFgrXMAxUE9sQwAB1UIDHsDU9VHoQwKel3zf5DrCYpx1Iov4PdUw8Ocrdpd0bumFuMqnXkQAR4Gs38R2E/SsHCRLXplQNlWPag/hu0q38QYI7th5VZPfQvt45udGMhZ9PcNV9r/mo+oZqBxWZGzLGVvmkEgHrprSjCcRZAFJ0Gg6EcoPlGn33ppZ4op30NUo4vgVccaLT3AZIVjopA7onQnyoXA4FbNlUUQiDKPCOXjR3xViAbaqNczoIGuhdc393NUOGYgd4uCQktyyryj8TkiNNBqBrMsuAOrAipY6jxI6LyB8SRJ/hjxqOFi6rDmrMkkzmCmBJ56aelMMXZhGJ0MF7hjXaYHTQAAb6SejL0w/ZKNIO588xb7k0s2Uxx3fgAS3kkAQQ2vnoPQRFXJiirEcjBPmNJ9YHtXl27JOvzMD65R/8AWlt6/uJhmmD4EaHwAA38+elCrA3XAL8R8XYBlGhuAL/KpbMR6vA8prKBaIxmIFxyw+XRU8EXRffU+tVAVaKpHLOTkyMGuqWWuphD6/xzGRB/Ev8AiA/OgExeUGFliSBrACgkknwloob4gvRbZmIgFef4hVXBbucdo8qCe6I1yg6GPc+tSSOtvcbpYhdD+Jz4trA8anhcSV2kDlVD/EWDsPluF0OhC9lcMz+0WjXnptpTPG3EIJyXREk/qmO3gN6XUh3inGrVXx7huF4kG0OhovNWM4nxKzh2C3bmUsAynI5BUnQ5lEcqZ4fiDJodRW2fAJ4ZJJtVfHuP81D4jDK+4qFnGK2xqHEeIW7Fs3brZUESYJ3MAADUmhwJGMm6XIvxXDmXUaihFusu2hptZ4ojoLircKEAj9U0kESCFiSP9RS7DcXwuJYrbLswGaBbYECQJ1HUitqXDKrFNpuntz7fIl+LsR2n6I8a/pNkTyIkkeok/wBo0PjJGJwyxH/9JI/mCk+szTTH4C27BDkLEHKHQhhvsGGp10gzpSS7jcMlwG6y/KsBrNwxBOqyn9RSSS3dnXhnL0x0vZP8bGvxTbZsTglX5i14CepVBPpVvBMlvH41Y0AwyqAJJy24gAakwOVUkW2YvfEtsuWwzFVHIMVnNAJ0A1gTpTO7ewOHXObShSFlxZLzOxZwCTPU9aGmtwrK5R+nGLbrT/Nq/oHthluaqpUdTpPku/vFB38Iyb6iicJxyy9vPbFxrY0lbL6ZRsABOnlQWN+JrDWWe0+YDfQhlnbuETJ2HWqKSOSWGatuL259vkUcTDXLltAxVUl3I+fvAoiof2S03O9yCmIMEMcKNQoIWCpJ/ZUL8o9NIHkdKVYC1cylyIZu87OQAukZQT8oAgSRqZOk0XhDbOocvHNUuMvmGC5SfFd6d0RUZPeh/wAVAWzC6zcszzJDX7YYk89JoXHDumhf0xXR0VwTlMgyHGmhyOA2m8xFRGODWwWkExpBaPCFmpS8nTDZNMWXjCnqBp56gVnviG7AFtd2BB65J739qAvkpp42NssSBd1007O7Oh6ZKDvcF7e47JcUsAISHViANgGUanUx46U0JRfcjkxzW1MyYQ1wo7GWspI96Dq5xnk15XsV1Exp+IX7bYhMPcbLEtrszA90HwrR27hUfICOqGfoayuFwTXrpxGIVSCO4NxHU05S0B8hK/wnT2qZdCX4zfNetEAjuAaiP22r6naxyNswkkgCRqdTA9AT6V8v49mZ0znNpppGmY9PWtCLjnUXWaDmWTpKmRMDbr61zw++R6/VwX7Pgb7p/wDBP454Xmspl17IXX21FvMgyjwUN7LXnwq/b4ca/rLfcPiAO4fbT+U0zXH5mGcCMlwEdQxtyKynArv6HjTbJ/Vuck/hbW0x9wD5mll6J35K4P8AUdJLE/uj6l/F2jSsjIedZb47xb3FtDNNsF4HJmAUZvH5iB6nnW6xgzHsxudWI3VNjB5E7D+Y8qxX/UO2LfYBdj2unl2e1PldxIf4YorqI37/AKM23CMUptWhOoS2P7grK/AwjFXT+B//AJEo3Ckhbfiqf4RSL4dusL1yGKkK2oMadotTyL1QGwL/AC8//u7Hnxlem7aC/PHLf5u56zmpD8UYTM5jkzkfzw8f3vpTdrSAm5qbkg5mYsdx1NC8YcZhPMH71PPGUYSk+7RbossZ5ceNL7U/zH2JwZD6EaA841baOphTSjjqkYa4Dt3Y8u0Ugem3lFNcTcCqzXL5mZWSAoKmVnTUSNqR/EfG1u2nRVaIEmIA76n9qCekgV0zvS/g4Onajmg1+8v1Pfh3Ftbw4Ck6s5+opdg0U4y4TGQZ3Y8hlhi3o4n0qrAXLgsaXSiOxQFYBVjoGzbwSVXkBmnWKnjsL+joyr+0iqx5yrSfeTUq9Cfjc9SGRPqckH/uPT7Lff8AFdg3DXDi7hZwRYQ923yJ6v8AvHmfMDatfwyMsVleCaWUgb5jOgE5iN99gOVMsPimB3nqBoB4E7k+UVbGvQn3Z53X5F+0OEdox2S+P+xjxvBIbbXfle2rOrDcFVJ9tKz+FxpfMHEXVMN+LWJj94GAfMHrRfGMcz2bigkyjAwYUSIjxOu32pU8Ljo5M4n/ANQa/VqlluDTLdHBdRCeN9la9v7gmD0xNyetz/HV/E8R2TBpgkR6Kd/c/Q15hpGIu5TB/Wwf5o1B3oXi+D7Yh1JzMJGdmMFWEp0EZWG1TxLVDT7lOsX0cqm96S/OxfjsT2jEnQkk/wDNBEVM+x6V5Neij597shFdUprqwDXYJOzRQhkARBoywbbnUZW8NKBV8p8DVwUHw8aRnQhT8VHsr1tZkFAf77U4vWnRiQCpk7aqdedIviC32t62slsqgFwrZR3iYmNd+VbC/ibYJIuKRqdAxMeAAk+VRhtKTPR6p6sOKPhMCsY0H5u6QCPAyV29qW/EliQt0a5YB8idPr/ipq+Ltl1S5+0H/ZYqkFMqswEBjDHfeeUVZc4QjKVU6MCInr0oyWpNCdPlfT5YTXbn43st4TxovbFwwXb5/wCJdI8BEEDx8TWf+PL3aC0Ty7T65P8ASquBWryXHsMrqCTDZDlzr4kRDCdfBaq+KUYZFBa4RnJhTCzlAExE6H2qTt4/c78UIY+vtP07tfDT/saKxiQFt520Cp9FFZXg+NKXbvdLEgwF1OrqR5CKc4bD2GVHaDopIbNIIAkZImdDsOVJPhu0y33LoyKytBdHCznVgCY00Bp5LeJyYpNQzLz/AFD7hxVwiSlhCefff22FD8SYqQucuZIkxrovTQDWtC2E6ssdAf8ASst8SuM6rbBeAZKqxEmI1jUwPtWzrVCjf4VJQ6lSk9qf6GpuWkzme8ZI68+UVTxa0Rh7ncIWF1iB869ac2uKWwNXUeU/YCaW/E2JZsLcAzFnKZUVWYgB1OsDQwpJ8THIU036WiXSxrPCT/eX6izhWBD4Uqw0Y3F8iY1+1LL2Me8gDTntqyt+J1IIJ8Sit5kNRnCcSRh8hOS4GbusCpgx3lBHe9OlJMNfW3c785SYYiSYzb+JET46jnSV6F/BnY8ifU5NLSaeqPyu34o03w/ig2HAB1VmXyzEsD5an+yaZW7UjnGwA+ZyevhufvWdtILN3tcMyXUcfrLatuNyUJ0DDcA7ajYxWgwWLt/PnUHkLn6plHQq8a+IkeNUhcY0zi6pxy5Xljw968PuWcSwJ7MDQksggbAZgSB6A61nsPiO0xpYaqh365BlB9SJppxXipukWrBl9ZeCqJIKyrEd9oJAyiBMzpUMDwpLKZQw/Ex0k+Qn0FTmtTSZfBP6GOUo/dJV8Luxdg7s4i753P8AHU77lXKjXMRcT+LZ182E+uWl/DLh/SXLBlVu0hmRgNWkSY0kDnRnHQMgIYFwwgLLHXc93bYGTSQTjG15OvqMkMnUKMvtlGn7eH+DFePtw5I+Vu8D1zan6z9KGii8X3wLg0JlmU6Q3/iQDsDo4jx6UNXZF2j57JBwk4vsRiur2uphDSNqKlYu8jvVGeuJpLLDZWBHjV1hDuh15ilVm7RdvEazOtKMgzteTd01NL+XWvFxIOjCq7tnmh06GgNXgZ28dOw96rxUGM7RJIGgiQrNuSANFJ16UsS/B10otHzZTJlTI1jUqV9dGI9a1BTRTdw+UxmM6kDUEgEAnw3H16GrrLIN+94mfzoghWjNOYEEEkk6KV3PKCZ6yaHu4QgaEwNh0rWGlQU1+0BoNYJ+XfKJMHnp9qDCo7kaSwBUiOg00J5RQxJGhJI72k/vCDHp/WpqjH4gg22BMqyxqT4aT4CsLKuwZbyMAUcEEKduT/LPITB9tYqQxGQE54jwOsyB7wfzqFy4qKttATly5QCdMogSefrQl1WALOxnSNTqRMee589q24Vp7lGPwxYFs4zsGA0PdjT76a9ZpFbwJjcAgKSIbQESx25c/pNOHJMNJ1Oh5/NP3pTxLEsLpE9Cdt9QD7UysWX0/cYcIthV+caM2wOxJ38/zp7dvDJA3iT4f7msYuMZdVMHnoNRzE769KeWcQGQRqGKz7jeswRkuxyWytwk/ur92OnvTHC4mZB6/lQ+MHfHiseo/wCaEaVYjY0jVlU9IxxLaUvZqn+kzvQ1w1khZu9yrGHY+I+pyn6E0oQcukj2MflTS68x4kfQyftS658zfxE++tUiQkRy11dXUxOhjhLsr4iiFalGGu5TTOZ1pSyYQDR3DgGbXWAzR+8VEx9PYGlaPROGchgVMEEEHoRrNAI6wN1Y75DOxOUBZIJPzPG4HTXfaIknF30BtAkAhBm00nM0SOekehFLMPfZCXSO8HGWDGVjkKxy36+tRxGKdoPy5VCCBsomBrz3M70DJjcWLb2rjTJGQLoFgkmYg66A0Nh1W2pLnMxEADZfxE8z0HvQeGxV0NAc+cnaJ+1FW8YzRM7dI+2/nWHpMKwuIBYoSGUic3SBM67RsfWJr3DXJOhgDecp9gxANB3LjFT3p+VeZMatA8O7PoKpsOZ8NT7Ak/Y0DDXGWGZSAOz2IBg5h+9Jgz5COlRs4JMyqcpYJdZxqcsW2KZQx3ESddDG1U3sQbhBOhChRA5KIoe6rqc6kggMNp0ZYO/gfrWsDjsG41lTEXJyhAVnQZj3VMIOp9qo4pcU2AIysbpIXWQoTq2u+nnVCZ7l4XTAckMNIAKgRof4a7ilx2AEDLmLwoPzPEkzr00ogpl9kI1kRlzBWOUBic0wBlmSTMzsKSfEduxcxl1gym2sZgjKpY6AAF2yx1Kgx0O9EWr720fQFWiQQ0nJDgyII0YHeI9Kz3Fe0u3TcZSWckmFI1J5ADSihZBfF7OYuz21sXAFIQMgUpGkLOYtEGdc2u2lH/DHdQAZXLMdDNtV0kq90rqYEhQw5bzFJeIYq5iLgdwASEQQCFhVCjeeQFWq9yypthUYk5phs65GKmCCCqkj1gUwiNFibXaMqg5ToTmEZAN2Y5VER4UZaW2xxDWwOzNlss6mVe2CWB1U6z5HSkN6+9whm1OW3JGZt1UrJYkzDAV1i+9rPlXS4uRpB0BZTp46D3pGiqZC4lU5qvD0LiCZ7up+3nQQ0kiAjMT0H1P+1LhencTrReIYIuSe8d/Xc0MVBqiIsjK+P1rq7shXURTzLRuBuyINCCp2DDClGQxIq208a1UDVoWgOGWsWRERoIEydnD9eoFe/pJiNIiNj+8W67yTrQSmpBqAQlb5Bkf8aRVwxZPTUydNySpJ3/CKBJrwNWMMLd+JkAyZPnBH+Y0SbxJzA669Y1zcp37xpWtyr0PQ1mhlRc11liIEFjEaagCBrt/rUhxFtjHsZjKF69BVJvciKrurIkGsavAZbxezDQid9tZ5T4mp/pEAQRoZ576bwddhShQatW7FCgpo7iGIIGUR+31/bXK3PpQWMxriGhZEcjydH69UWvbjZmqdy1pTCNWLHxTNBPLLprHdEDSY20qw8QeCNBLFtJBBLBtCDI1H1NDXEgkV5RJBlriTqV2gRprBhUXUTqItrR9nipOxXSNI6AAaE9BEikleFawUxsyAmT4czyEDfyqL3AoMR/XWl63mAifrUWYnesGyKuZJOs1OR5VGurWKSg+FdUa6jZj2oWz3hXtdQYUNU2q63XldQZQhzq2urqxiBqRryuoGJJVy11dWMW1Eiurqw5yjSqrgrq6sCQOu9WNXldRFFbfMfOoEV1dRJvkhXteV1YB7XV1dRMdXldXUDHV1dXVjH//Z',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://f.ptcdn.info/322/083/000/s9cdb222d3usWOhyYoKIA-o.jpg',
        images: [
          'https://pbs.twimg.com/media/FmRjQDfaEAEYrfx.jpg',
        ]
      }
    ]
  },
  { 
    id: 5, 
    title: 'BJ ALEX', 
    author: '밍과', 
    description: 'เรื่องราวของ "ดงกยุน" นักศึกษาหนุ่มที่หลงใหลในตัว BJ Alex สตรีมเมอร์หนุ่มสุดฮอต จนกระทั่งความจริงเปิดเผยว่ารุ่นพี่สุดโหดในมหาวิทยาลัยคือคนเดียวกับ BJ ที่เขาคลั่งไคล้ นำไปสู่ความสัมพันธ์ที่ซับซ้อนเร่าร้อน ', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVWl2ezn_5XpEn4qTFlEbPt67ep25PAmhGQ&s',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://images-cdn.ubuy.co.th/65c27c2c46842e08a9396a8f-bj-alex-vol-1-6-whole-set-korean-webtoon.jpg',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMjmbkpS_tt70b1P12NE_uq6fvg0Mr1eu2A&s',
        ]
      }
    ]
  },
  { 
    id: 6, 
    title: 'BJ ALEX', 
    author: '밍과', 
    description: 'เรื่องราวของ "ดงกยุน" นักศึกษาหนุ่มที่หลงใหลในตัว BJ Alex สตรีมเมอร์หนุ่มสุดฮอต จนกระทั่งความจริงเปิดเผยว่ารุ่นพี่สุดโหดในมหาวิทยาลัยคือคนเดียวกับ BJ ที่เขาคลั่งไคล้ นำไปสู่ความสัมพันธ์ที่ซับซ้อนเร่าร้อน ', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVWl2ezn_5XpEn4qTFlEbPt67ep25PAmhGQ&s',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://images-cdn.ubuy.co.th/65c27c2c46842e08a9396a8f-bj-alex-vol-1-6-whole-set-korean-webtoon.jpg',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMjmbkpS_tt70b1P12NE_uq6fvg0Mr1eu2A&s',
        ]
      }
    ]
  },
  { 
    id: 6, 
    title: 'BJ ALEX', 
    author: '밍과', 
    description: 'เรื่องราวของ "ดงกยุน" นักศึกษาหนุ่มที่หลงใหลในตัว BJ Alex สตรีมเมอร์หนุ่มสุดฮอต จนกระทั่งความจริงเปิดเผยว่ารุ่นพี่สุดโหดในมหาวิทยาลัยคือคนเดียวกับ BJ ที่เขาคลั่งไคล้ นำไปสู่ความสัมพันธ์ที่ซับซ้อนเร่าร้อน ', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVWl2ezn_5XpEn4qTFlEbPt67ep25PAmhGQ&s',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://images-cdn.ubuy.co.th/65c27c2c46842e08a9396a8f-bj-alex-vol-1-6-whole-set-korean-webtoon.jpg',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMjmbkpS_tt70b1P12NE_uq6fvg0Mr1eu2A&s',
        ]
      }
    ]
  },
  { 
    id: 6, 
    title: 'BJ ALEX', 
    author: '밍과', 
    description: 'เรื่องราวของ "ดงกยุน" นักศึกษาหนุ่มที่หลงใหลในตัว BJ Alex สตรีมเมอร์หนุ่มสุดฮอต จนกระทั่งความจริงเปิดเผยว่ารุ่นพี่สุดโหดในมหาวิทยาลัยคือคนเดียวกับ BJ ที่เขาคลั่งไคล้ นำไปสู่ความสัมพันธ์ที่ซับซ้อนเร่าร้อน ', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVWl2ezn_5XpEn4qTFlEbPt67ep25PAmhGQ&s',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://images-cdn.ubuy.co.th/65c27c2c46842e08a9396a8f-bj-alex-vol-1-6-whole-set-korean-webtoon.jpg',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMjmbkpS_tt70b1P12NE_uq6fvg0Mr1eu2A&s',
        ]
      }
    ]
  },
];

// app/data.ts (เพิ่มต่อท้ายไฟล์)

// สร้างตัวแปรสำหรับเก็บประวัติการอ่าน (เริ่มแรกเป็นอาเรย์ว่างๆ)
export const HISTORY_LIST: any[] = [];

// ฟังก์ชันสำหรับบันทึกประวัติ (เรียกใช้ตอนอ่าน)
export const addToHistory = (comic: Comic, episodeId: string) => {
  // 1. หาข้อมูลตอนที่กำลังอ่าน
  const episode = comic.episodes.find(e => e.id === episodeId);
  
  // 2. สร้างข้อมูลที่จะบันทึก
  const historyItem = {
    comicId: comic.id,
    comicTitle: comic.title,
    coverImage: comic.coverImage,
    episodeTitle: episode?.title || 'ไม่ทราบตอน',
    readAt: new Date().toLocaleTimeString(), // เวลาที่อ่าน
  };

  // 3. ลบอันเก่าออกก่อน (ถ้าเคยอ่านเรื่องนี้แล้ว จะได้ไม่ซ้ำ)
  const existingIndex = HISTORY_LIST.findIndex(item => item.comicId === comic.id);
  if (existingIndex !== -1) {
    HISTORY_LIST.splice(existingIndex, 1);
  }

  // 4. ใส่ข้อมูลใหม่ไปไว้ "บนสุด" (Index 0)
  HISTORY_LIST.unshift(historyItem);
};

