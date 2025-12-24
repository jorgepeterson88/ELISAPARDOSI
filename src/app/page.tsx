'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Shield, Users, Heart, Star } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="ELISA PARDOSI" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-green-800">ELISA PARDOSI</h1>
                <p className="text-xs text-gray-600">Apotek Terpercaya</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-green-600 transition">Beranda</a>
              <a href="#produk" className="text-gray-700 hover:text-green-600 transition">Produk</a>
              <a href="#layanan" className="text-gray-700 hover:text-green-600 transition">Layanan</a>
              <a href="#tentang" className="text-gray-700 hover:text-green-600 transition">Tentang</a>
              <a href="#kontak" className="text-gray-700 hover:text-green-600 transition">Kontak</a>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Apotek <span className="text-green-600">ELISA PARDOSI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Pusat layanan kesehatan terpercaya di Lahat. Menyediakan berbagai macam obat-obatan berkualitas dengan pelayanan terbaik untuk kesehatan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" />
                  0878-5104-4791
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Lihat Produk
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Terpercaya</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Buka 24 Jam</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Ahli Berpengalaman</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Heart className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Kesehatan Anda Prioritas Kami</h3>
                    <p className="text-gray-600">Konsultasi gratis dengan ahli farmasi kami</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600">Berbagai macam obat-obatan berkualitas tinggi</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Obat Resep</h3>
                <p className="text-gray-600">Berbagai macam obat resep dokter dengan kualitas terjamin</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Obat Bebas</h3>
                <p className="text-gray-600">Obat-obatan bebas yang aman dan efektif</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Suplemen Kesehatan</h3>
                <p className="text-gray-600">Vitamin dan suplemen untuk menjaga kesehatan tubuh</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600">Pelayanan terbaik untuk kesehatan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Konsultasi Farmasi</h3>
                <p className="text-sm text-gray-600">Konsultasi gratis dengan ahli farmasi berpengalaman</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Layanan 24 Jam</h3>
                <p className="text-sm text-gray-600">Siap melayani kebutuhan obat Anda kapan saja</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Delivery Order</h3>
                <p className="text-sm text-gray-600">Pengantaran obat langsung ke rumah Anda</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Produk Asli</h3>
                <p className="text-sm text-gray-600">Jaminan 100% produk asli dan berkualitas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang ELISA PARDOSI</h2>
              <p className="text-lg text-gray-600 mb-6">
                Apotek ELISA PARDOSI adalah pusat layanan kesehatan yang berkomitmen untuk menyediakan obat-obatan berkualitas tinggi dan pelayanan terbaik bagi masyarakat Lahat dan sekitarnya.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dengan pengalaman bertahun-tahun dalam industri farmasi, kami memahami betapa pentingnya kesehatan bagi Anda. Oleh karena itu, kami selalu berusaha memberikan produk yang aman, efektif, dan terjangkau.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm">BPOM Terdaftar</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm">Farmasi Berlisensi</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm">Pelayanan Prima</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm">Ahli Berpengalaman</span>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Terpercaya</h4>
                      <p className="text-sm text-gray-600">Berlisensi resmi dan terdaftar di BPOM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Layanan Cepat</h4>
                      <p className="text-sm text-gray-600">Pelayanan cepat dan tepat sasaran</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Care</h4>
                      <p className="text-sm text-gray-600">Peduli dengan kesehatan Anda</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Hubungi Kami</h2>
            <p className="text-xl text-green-100">Siap melayani kebutuhan kesehatan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold">Telepon</p>
                      <p className="text-gray-600">0878-5104-4791</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@elisapardosi.co.id</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-gray-600">Depan MTSN 3 Lahat, Desa Jajaran Baru, Kec. Kikim Barat, Kab. Lahat, Sumatera Selatan 31471</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold">Jam Buka</p>
                      <p className="text-gray-600">Senin - Minggu: 24 Jam</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="ELISA PARDOSI" className="h-8 w-auto" />
                <h3 className="text-lg font-bold">ELISA PARDOSI</h3>
              </div>
              <p className="text-gray-400 text-sm">Apotek terpercaya untuk kesehatan Anda</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Konsultasi Farmasi</a></li>
                <li><a href="#" className="hover:text-white">Delivery Order</a></li>
                <li><a href="#" className="hover:text-white">Produk Kesehatan</a></li>
                <li><a href="#" className="hover:text-white">Cek Resep</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#tentang" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#kontak" className="hover:text-white">Kontak</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  0878-5104-4791
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@elisapardosi.co.id
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Lahat, Sumatera Selatan
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ELISA PARDOSI. All rights reserved. | Apotek Terpercaya di Lahat</p>
          </div>
        </div>
      </footer>
    </div>
  )
}