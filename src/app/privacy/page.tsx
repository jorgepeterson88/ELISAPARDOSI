'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="ELISA PARDOSI" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-green-800">ELISA PARDOSI</h1>
                <p className="text-xs text-gray-600">Apotek Terpercaya</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition">Beranda</Link>
              <Link href="/privacy" className="text-green-600 font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Kebijakan Privasi ELISA PARDOSI</p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di Apotek ELISA PARDOSI. Kami sangat peduli terhadap privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
                ketika Anda menggunakan layanan kami, termasuk website dan layanan terkait lainnya.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pengumpulan Data</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Informasi Pribadi:</strong> Nama lengkap, nomor telepon, alamat email, alamat rumah</li>
                    <li><strong>Informasi Kesehatan:</strong> Riwayat medis, alergi obat, informasi resep dokter</li>
                    <li><strong>Informasi Transaksi:</strong> Riwayat pembelian, metode pembayaran, detail pesanan</li>
                    <li><strong>Informasi Teknis:</strong> Alamat IP, browser yang digunakan, waktu akses</li>
                    <li><strong>Informasi Lokasi:</strong> Data geolokasi untuk layanan pengantaran</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cara Kami Mengumpulkan Data:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Formulir pendaftaran dan pemesanan online</li>
                    <li>Konsultasi langsung di apotek</li>
                    <li>Komunikasi telepon dan email</li>
                    <li>Cookies dan teknologi pelacakan lainnya</li>
                    <li>Analytics dan monitoring website</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami menggunakan informasi pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses dan mengelola pesanan obat Anda</li>
                <li>Memberikan konsultasi farmasi yang tepat</li>
                <li>Mengelola layanan pengantaran obat</li>
                <li>Mengingatkan jadwal minum obat</li>
                <li>Memproses pembayaran dan transaksi</li>
                <li>Mengirimkan informasi promosi dan edukasi kesehatan</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Memenuhi kewajiban hukum dan regulasi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Perlindungan Data</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                ELISA PARDOSI berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Enkripsi Data:</strong> Semua data sensitif dienkripsi dengan standar industri</li>
                <li><strong>Akses Terbatas:</strong> Hanya personil berwenang yang dapat mengakses data</li>
                <li><strong>Keamanan Fisik:</strong> Dokumen fisik disimpan di tempat aman</li>
                <li><strong>Monitoring Keamanan:</strong> Sistem monitoring 24/7 untuk mendeteksi ancaman</li>
                <li><strong>Training Staff:</strong> Semua karyawan dilatih tentang perlindungan data</li>
                <li><strong>Backup Rutin:</strong> Data backup secara rutin dan aman</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
                kecuali dalam situasi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu operasional (payment gateway, jasa pengiriman)</li>
                <li><strong>Otoritas Kesehatan:</strong> Badan Pengawas Obat dan Makanan (BPOM) dan Dinas Kesehatan</li>
                <li><strong>Profesional Kesehatan:</strong> Dokter atau tenaga medis yang merawat Anda</li>
                <li><strong>Kewajiban Hukum:</strong> Sesuai dengan perintah pengadilan atau regulasi yang berlaku</li>
                <li><strong>Keamanan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pemilik data, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Mengoreksi Data:</strong> Memperbarui informasi yang tidak akurat</li>
                <li><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi (dengan pengecualian tertentu)</li>
                <li><strong>Membatasi Pengolahan:</strong> Membatasi cara kami menggunakan data Anda</li>
                <li><strong>Menolak Pemasaran:</strong> Menolak menerima komunikasi pemasaran</li>
                <li><strong>Transfer Data:</strong> Memindahkan data ke penyedia layanan lain</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Untuk menggunakan hak ini, silakan hubungi kami melalui informasi kontak di bawah.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengingat preferensi dan pengaturan Anda</li>
                <li>Menganalisis traffic dan penggunaan website</li>
                <li>Menyediakan fitur personalisasi</li>
                <li>Meningkatkan keamanan dan perlindungan</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Anda dapat mengatur cookies melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Children Privacy */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privasi Anak</h2>
              <p className="text-gray-600 leading-relaxed">
                Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak sengaja mengumpulkan informasi pribadi 
                dari anak di bawah umur. Jika kami mengetahui telah mengumpulkan data dari anak di bawah umur, 
                kami akan segera menghapus informasi tersebut.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui 
                website atau email Anda. Penggunaan layanan yang berkelanjutan setelah perubahan berarti Anda menyetujui 
                kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau perlindungan data pribadi Anda, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@elisapardosi.co.id</p>
                <p><strong>Telepon:</strong> 0878-5104-4791</p>
                <p><strong>Alamat:</strong> Depan MTSN 3 Lahat, Desa Jajaran Baru, Kec. Kikim Barat, Kab. Lahat, Sumatera Selatan 31471</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 ELISA PARDOSI. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/" className="text-green-600 hover:text-green-700 text-sm">Kembali ke Beranda</Link>
            <Link href="/terms" className="text-green-600 hover:text-green-700 text-sm">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  )
}