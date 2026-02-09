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
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzkidIeqPbrPrLBjUJ8VePpNP2ajnl-7lfw&s',
        images: [
          'https://pbs.twimg.com/media/GhaqtvIXQAA-7EG.jpg',
        ]
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-11-01',
        thumbnail: 'https://preview.redd.it/are-there-any-19-days-readers-in-this-subreddit-v0-p3kliai01c8d1.jpg?width=850&format=pjpg&auto=webp&s=419f053f49344decf05c2e7014760c67b69e079d',
        images: [
          'https://64.media.tumblr.com/88a049f581ac84d55d8b528404be6844/e2affab994b32e82-ae/s640x960/8a7e7232307f01cd8cb498ffba299bdc5a09fa94.jpg',
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
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-11-01',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiA2XkRV3caukQ3Om6aIkTNUiytlS_8wlSAQ&s',
        images: [
          'https://image.balcony.studio/thl/co_thumbnail/thw_92680/2680_m_kv275x275.jpg',
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
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-11-01',
        thumbnail: 'https://i.pinimg.com/736x/67/74/cd/6774cd77db2c21c386ad06818b3e5072.jpg',
        images: [
          'https://imgmedia.larepublica.pe/640x1012/larepublica/original/2023/07/23/64bd8c90c3116c0ee83fe095.webp',
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
          'https://pbs.twimg.com/media/EiaUuiwVgAAJKL2.jpg',
        ]
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-11-01',
        thumbnail: 'https://bci.kinokuniya.com/jsp/images/book-img/97898/97898649/9789864947164.JPG',
        images: [
          'https://pbs.twimg.com/media/GLVQjlsXEAAJ6Rm.jpg',
        ]
      }
    ]
  },
  { 
    id: 6, 
    title: 'Omega Complex', 
    author: 'GHOST', 
    description: 'เพราะเหตุการณ์ในอดีตทำให้ จินอู โอเมก้าที่ต้องซ่อนเร้นฟีโรโมนของตัวเองไว้ ได้มาเจอกับ ควอนยุนฮยอก อัลฟ่าที่น่าสะพรึงกลัวและตรงสเปกเขาอย่างร้ายกาจ เรื่องราวความสัมพันธ์สุดซับซ้อนและการเอาชนะปมในใจจึงเริ่มต้นขึ้น ', 
    coverImage: 'https://www.lemon8-app.com/seo/image?item_id=7432573501816504850&index=0&sign=2bf4f0208794b90816c650f8aa9bcd0f',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9eRCEinUv59Hsk_pRZi9QsNdnUfTKa6NZ7DrH-tp5A&s',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKx4uAzE29rx0b2LWeWFGV9e8gjZQXW1IMqqN-kJimsQ&s',
        ]
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-11-01',
        thumbnail: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1708567352i/208985942.jpg',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN31O-Vyf4eRw5PG45SlpFx4Sd9GOLsQyTIg&s',
        ]
      }
    ]
  },
  { 
    id: 7, 
    title: 'Lop-Eared Butler', 
    author: '麟潜', 
    description: 'พ่อบ้านเผ่ากระต่ายหูตกที่ต้องรับใช้เจ้านายท่ามกลางความสัมพันธ์ที่เปราะบาง ท่ามกลางบรรยากาศการลงโทษ การทำร้ายจิตใจ และความรุนแรงในอารมณ์ เรื่องราวเน้นความดราม่าและความสัมพันธ์ที่ซับซ้อน', 
    coverImage: 'data:image/jpeg;base64,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',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://cdn-local.mebmarket.com/meb/server1/247097/Thumbnail/book_detail_large.gif?2',
        images: [
          'https://cdn.thaiwebtoon.com/books/4fa7bc34-21a7-4447-ad98-40bf2c55e4de/62b29606-2f4a-404e-abf9-b2f269ed9a33/w93ch1%2812%29_1688836680.jpg?verify=1768735261-6vFClbO%2BK7Efi4GmFd3L%2FMWnxpOXgWOxXyVQc9dg1xA%3D',
        ]
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-11-01',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2SdYqcB9DFndrtN27IKvnNaovKi01oIDWMQoGYPsEw&s',
        images: [
          'https://bunyanyan.carrd.co/assets/images/gallery01/8b792f0e_original.jpg?v=b0ac42a6',
        ]
      }
    ]
  },
  { 
    id: 8, 
    title: 'pearl boy', 
    author: 'Zoy', 
    description: 'คังดูชิก กำลังตกที่นั่งลำบาก หลังจากขโมยเงินจากบาร์เกย์ที่เขาทำงานอยู่หนีไป เขาก็มาซ่อนตัวอยู่ในเมืองชายฝั่งเล็กๆ เมื่อเงินเริ่มหมดความหิวก็ครอบงำ เขาจึงเข้าไปกินในร้านหอยเล็กๆ แห่งหนึ่ง แต่เขากลับไม่มีเงินจ่ายและวิ่งหนีไป ทิ้งให้ จูฮา พนักงานเสิร์ฟหนุ่มหน้าหวานต้องเป็นคนรับผิดชอบค่าใช้จ่ายนั้นแทนต่อมาเมื่อดูชิกกลับมาเพื่อชดใช้หนี้ เขาได้พบกับความลับบางอย่างที่ซ่อนอยู่ภายในตัวของจูฮา ความลับที่ดูเหมือนจะเป็นทางออกสำหรับปัญหาการเงินของเขา เพราะภายในเปลือกที่สวยงามของจูฮามี "สมบัติล้ำค่า" ที่รอคอยการถูกดึงออกมา และดูชิกก็คือชายที่เหมาะจะทำหน้าที่นั้นที่สุด ', 
    coverImage: 'data:image/jpeg;base64,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',
    status: 'New',
    episodes: [
      {
        id: 'ep1',
        title: 'EP 1',
        date: '2023-11-01',
        thumbnail: 'https://pbs.twimg.com/media/FMCxdDIaAAAdOZ2.jpg',
        images: [
          'https://i.pinimg.com/736x/d4/bf/3b/d4bf3bda43aa8812ba27c6896dfb7f03.jpg',
        ]
      },
      {
        id: 'ep2',
        title: 'EP 2',
        date: '2023-11-01',
        thumbnail: 'https://i.pinimg.com/736x/e2/19/ae/e219aee998ce0bbcc17fde89769a3251.jpg',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx85GdShdYU1SR-ZjxOJ3mds5zS7cuptHozw&s',
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

