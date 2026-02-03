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
        title: 'EP 1: เมี๊ยวแรก',
        date: '2023-11-01',
        thumbnail: 'https://via.placeholder.com/150/0000ff/fff?text=Cat+EP1',
        images: [
          'https://via.placeholder.com/600x800/eee/333?text=Cat+EP1+Page1',
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

