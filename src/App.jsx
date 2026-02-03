import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/gramedia-logo.jpg'
import promoImage from './assets/h1v82d6rga.avif'
import img1 from './assets/9786020633176_.Atomic_Habit.avif'
import img2 from './assets/9786020651927_Funiculi_Funicula_cov.avif'
import img3 from './assets/591701404_sapiens.avif'
import img4 from './assets/ih86gbr4urzmibs3ah49hq.avif'
import img5 from './assets/a7nxmvsx-e.avif'
import img6 from './assets/img212.avif'
import img7 from './assets/midnight.avif'
import img8 from './assets/9786020650357_educated_cov.avif'
import img9 from './assets/9789792244762_Outliers_MALCLOM_GLADWELL_C_1_4-1.avif'
import img10 from './assets/pergi_tere_liye.avif'
import img11 from './assets/9786230020780_Cover_Deep_Work.avif'
import img12 from './assets/thepower.avif'
import img13 from './assets/laut bercerita.avif'
import img14 from './assets/1023313_edit.avif'
import img15 from './assets/9786020656069_Sang_Alkemis_cov.avif'
import img16 from './assets/good to great.avif'







  



// ===== ARRAY DATA =====
const PRODUCTS = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 'Rp81.000', rating: 4.8, sold: 1250, thumb: '📘', image: img1, category: 'Self-Help' },
  { id: 2, title: 'Laut Bercerita', author: 'Leila S. Chudori', price: 'Rp86.250', rating: 4.7, sold: 890, thumb: '📗', image: img13, category: 'Novel' },
  { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', price: 'Rp51.000', rating: 4.6, sold: 340, thumb: '📕', image: img1, category: 'Finance' },
  { id: 4, title: 'Funiculi Funicula', author: 'Toshikazu Kawaguchi', price: 'Rp142.500', rating: 4.9, sold: 420, thumb: '📙',image: img2, category: 'Fiction' },
  { id: 5, title: 'Seporsi Mie Ayam', author: 'Brian Khrisna', price: 'Rp69.750', rating: 4.5, sold: 280, thumb: '🍜',image: img2, category: 'Fiction' },
  { id: 6, title: 'Sketch Book A5', author: 'Estudee', price: 'Rp28.000', rating: 4.7, sold: 670, thumb: '📓',image:img14, category: 'Stationery' },
  { id: 7, title: 'The Midnight Library', author: 'Matt Haig', price: 'Rp95.000', rating: 4.8, sold: 560, thumb: '✨',image: img7, category: 'Fiction' },
  { id: 8, title: 'Sapiens', author: 'Yuval Noah Harari', price: 'Rp105.000', rating: 4.9, sold: 720, thumb: '🌍',image: img3, category: 'History' },
  { id: 9, title: 'Dune', author: 'Frank Herbert', price: 'Rp98.000', rating: 4.9, sold: 450, thumb: '🏜️',image: img4, category: 'Fiction' },
  { id: 10, title: 'The Alchemist', author: 'Paulo Coelho', price: 'Rp65.000', rating: 4.7, sold: 980, thumb: '✨',image: img15, category: 'Self-Help' },
  { id: 11, title: 'Educated', author: 'Tara Westover', price: 'Rp89.000', rating: 4.8, sold: 670, thumb: '📚',image: img8, category: 'History' },
  { id: 12, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', price: 'Rp112.000', rating: 4.6, sold: 340, thumb: '🧠',image: img3, category: 'Self-Help' },
  { id: 13, title: 'The Lean Startup', author: 'Eric Ries', price: 'Rp75.000', rating: 4.7, sold: 520, thumb: '💼',image: img7, category: 'Finance' },
  { id: 14, title: 'Dahayu', author: 'Oka Rusmini', price: 'Rp54.000', rating: 4.5, sold: 380, thumb: '🌸',image: img10, category: 'Novel' },  
  { id: 15, title: 'Man\'s Search for Meaning', author: 'Viktor Frankl', price: 'Rp72.000', rating: 4.9, sold: 620, thumb: '💭',image:img5, category: 'Self-Help' },
  { id: 16, title: 'Outliers', author: 'Malcolm Gladwell', price: 'Rp85.000', rating: 4.8, sold: 490, thumb: '⭐',image: img9, category: 'Self-Help' },
  { id: 17, title: 'Bumi Manusia', author: 'Pramoedya Toer', price: 'Rp68.000', rating: 4.6, sold: 710, thumb: '🌏',image: img5, category: 'Novel' },
  { id: 18, title: 'Good to Great', author: 'Jim Collins', price: 'Rp105.000', rating: 4.7, sold: 350, thumb: '📈',image: img16, category: 'Finance' },
  { id: 19, title: 'Pergi', author: 'Tere Liye', price: 'Rp48.000', rating: 4.8, sold: 890, thumb: '✈️',image: img10, category: 'Novel' },
  { id: 20, title: 'Money Master the Game', author: 'Tony Robbins', price: 'Rp125.000', rating: 4.6, sold: 240, thumb: '💰',image: img16, category: 'Finance' },
  { id: 21, title: 'A Brief History of Time', author: 'Stephen Hawking', price: 'Rp95.500', rating: 4.7, sold: 420, thumb: '🌌',image: img13, category: 'History' },
  { id: 22, title: 'Laskar Pelangi', author: 'Andrea Hirata', price: 'Rp58.000', rating: 4.9, sold: 1150, thumb: '🎨',image:img6, category: 'Novel' },
  { id: 23, title: 'Deep Work', author: 'Cal Newport', price: 'Rp88.000', rating: 4.8, sold: 560, thumb: '🎯',image: img11, category: 'Self-Help' },
  { id: 24, title: 'Principles', author: 'Ray Dalio', price: 'Rp135.000', rating: 4.5, sold: 280, thumb: '📊',image: img15, category: 'Finance' },
  { id: 25, title: 'The Power of Now', author: 'Eckhart Tolle', price: 'Rp79.000', rating: 4.8, sold: 745, thumb: '🌟',image: img12, category: 'Self-Help' }
]

const AUTHORS = [
  { id: 1, name: 'James Clear', avatar: '👨‍💼' },
  { id: 2, name: 'Leila S. Chudori', avatar: '👩‍💼' },
  { id: 3, name: 'Robert T. Kiyosaki', avatar: '👨‍💼' },
  { id: 4, name: 'Toshikazu Kawaguchi', avatar: '👨‍💼' },
  { id: 5, name: 'Brian Khrisna', avatar: '👨‍💼' },
  { id: 6, name: 'Matt Haig', avatar: '👨‍💼' }
]

const CATEGORIES = [
  { id: 1, name: 'Novel' },
  { id: 2, name: 'Self-Help' },
  { id: 3, name: 'Finance' },
  { id: 4, name: 'Fiction' },
  { id: 5, name: 'History' },
  { id: 6, name: 'Stationery' }
]

const CATEGORY_MENU = {
  tabs: ['Buku', 'Non Buku'],
  activeTab: 'Buku',
  columns: [
    {
      title: 'Agama',
      items: ['Buddha', 'Hindu', 'Islam', 'Konfusianisme', 'Kristen & Katolik', 'Spiritualitas']
    },
    {
      title: 'Hukum',
      items: ['Adat', 'Bisnis & Keuangan', 'Etika & Tanggung Jawab Profesional', 'Hak Sipil', 'Hukum Keluarga', 'Hukum Perdata', 'Hukum Pidana', 'Internasional', 'Kekayaan Intelektual', 'Kesehatan', 'Konstitusi', 'Layanan Hukum']
    },
    {
      title: 'Pendidikan',
      items: ['Administrasi', 'Guru & Pendampingan Siswa', 'Pelajar & Kemahasiswaan', 'Pengajaran', 'SD', 'SMA', 'SMP']
    }
  ]
}

// ===== CARD COMPONENT =====
function Card({ p }) {
  return (
    <div className="card">
      <div className="thumb">
        {p.image ? (
          <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          p.thumb
        )}
      </div>
      <div className="title">{p.title}</div>
      <div className="author">{p.author}</div>
      <div className="meta">⭐ {p.rating} • {p.sold.toLocaleString()}</div>
      <div className="price">{p.price}</div>
    </div>
  )
}

export default function App() {
  const trackRef = useRef(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (!e.target.closest || (!e.target.closest('.search-bar') && !e.target.closest('.search-dropdown'))) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  // ===== FILTERING LOGIC =====
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // ===== SORTING LOGIC =====
  const sortedProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)

  const scrollLeft = () => {
    if (trackRef.current) trackRef.current.scrollBy({ left: -200, behavior: 'smooth' })
  }
  const scrollRight = () => {
    if (trackRef.current) trackRef.current.scrollBy({ left: 200, behavior: 'smooth' })
  }

  return (
    <div className="app-root">
      <nav className="top-nav">
        <div className="top-nav-inner">
          <a href="#" className="top-nav-link">Promo</a>
          <a href="#" className="top-nav-link">Toko Kami</a>
          <a href="#" className="top-nav-link">Hubungi Kami</a>
        </div>
      </nav>

      <header className="site-header">
        <div className="header-inner">
          <div className="left">
            <img src={logo} alt="Gramedia" className="brand" />
            <div className="categories-wrapper" style={{ position: 'relative' }}>
              <button className="categories" onClick={() => setShowCategories(!showCategories)}>▼ Kategori</button>
              {showCategories && (
                <div className="categories-panel">
                  <div className="cat-left">
                    {CATEGORY_MENU.tabs.map((tab) => (
                      <button key={tab} className={`cat-tab ${tab === CATEGORY_MENU.activeTab ? 'active' : ''}`}>
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="cat-columns">
                    {CATEGORY_MENU.columns.map((col, idx) => (
                      <div key={idx} className="cat-column">
                        <h4>{col.title}</h4>
                        <ul>
                          {col.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="search-container">
            <div className="search-bar" onClick={() => setShowDropdown(true)}>
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input 
                placeholder="Cari Produk, Judul Buku, atau Penulis"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {showDropdown && (
              <div className="search-suggestions">
                <div className="suggestions-section">
                  <h3>Penulis</h3>
                  <div className="authors-grid">
                    {/* LOOPING ARRAY AUTHORS */}
                    {AUTHORS.map((author) => (
                      <div 
                        key={author.id} 
                        className="author-item" 
                        onClick={() => {
                          setSearchQuery(author.name)
                          setShowDropdown(false)
                        }}
                      >
                        <div className="author-avatar">{author.avatar}</div>
                        <div className="author-name">{author.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="right">
            <button className="icon-cart" aria-label="cart">🛒</button>
            <div className="auth-buttons">
              <button className="btn btn-login">Masuk</button>
              <button className="btn btn-register">Daftar</button>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="section-head">
          <h2>Gramedia 56Th Anniversary</h2>
          <a className="see-all" href="#">Lihat Semua</a>
        </section>

        <section className="carousel-section">
          <div className="promo" style={{
            backgroundImage: `url(${promoImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="promo-inner">
            </div>
          </div>

          <div className="carousel">
            <button className="nav prev" onClick={scrollLeft}>‹</button>
            <div className="track" ref={trackRef}>
              <div className="track-inner">
                {/* LOOPING PRODUK TERFILTER DAN TERSORTIR */}
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((p) => <Card key={p.id} p={p} />)
                ) : (
                  <div style={{ padding: '20px', color: '#999' }}>Produk tidak ditemukan</div>
                )}
              </div>
            </div>
            <button className="nav next" onClick={scrollRight}>›</button>
          </div>
        </section>
      </main>
    </div>
  )
}
