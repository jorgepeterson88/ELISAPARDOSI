'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, AlertCircle, Shield, Users, Clock, Package } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition">Privacy Policy</Link>
              <Link href="/terms" className="text-green-600 font-medium">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">Syarat dan Ketentuan Layanan ELISA PARDOSI</p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di Apotek ELISA PARDOSI. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, 
                termasuk pembelian obat, konsultasi farmasi, dan layanan lainnya yang tersedia melalui website maupun langsung di apotek.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
                Jika Anda tidak setuju dengan bagian manapun dari syarat ini, jangan gunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Service Terms */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Package className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Layanan yang Tersedia:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Penjualan Obat:</strong> Obat resep dan obat bebas yang terdaftar resmi</li>
                    <li><strong>Konsultasi Farmasi:</strong> Konsultasi dengan farmasis berlisensi</li>
                    <li><strong>Layanan Pengantaran:</strong> Pengantaran obat ke alamat pelanggan</li>
                    <li><strong>Informasi Kesehatan:</strong> Edukasi dan informasi tentang obat-obatan</li>
                    <li><strong>Pemeriksaan Kesehatan Dasar:</strong> Pemeriksaan tekanan darah, gula darah, dll</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ketersediaan Layanan:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Layanan tersedia 24 jam setiap hari</li>
                    <li>Beberapa layanan mungkin memerlukan janji temu terlebih dahulu</li>
                    <li>Ketersediaan obat tergantung stok yang ada</li>
                    <li>Layanan pengantaran terbatas pada area tertentu</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Kewajiban Pengguna</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pengguna layanan kami, Anda wajib:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Informasi Akurat:</strong> Memberikan informasi pribadi yang benar dan lengkap</li>
                <li><strong>Resep Valid:</strong> Menyediakan resep dokter yang masih berlaku untuk obat resep</li>
                <li><strong>Konsultasi Jujur:</strong> Memberikan informasi kesehatan yang jujur saat konsultasi</li>
                <li><strong>Penggunaan Bertanggung Jawab:</strong> Menggunakan obat sesuai petunjuk dan dosis yang dianjurkan</li>
                <li><strong>Tidak Menyalahgunakan:</strong> Tidak menggunakan obat untuk tujuan non-medis</li>
                <li><strong>Privasi:</strong> Menghormati privasi pasien lain dan staf kami</li>
                <li><strong>Pembayaran Tepat Waktu:</strong> Melakukan pembayaran sesuai dengan harga yang ditetapkan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prescription Requirements */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Persyaratan Resep</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Untuk pembelian obat resep, Anda harus:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyediakan resep asli dari dokter yang masih berlaku (maksimal 6 bulan)</li>
                    <li>Resep harus jelas terbaca nama dokter, pasien, dan obat yang diresepkan</li>
                    <li>Dosis dan aturan pakai harus tercantum jelas</li>
                    <li>Resep elektronik diterima jika valid dan dapat diverifikasi</li>
                    <li>Kami berhak menolak pembelian jika resep dianggap tidak valid</li>
                    <li>Resep psikotropik dan narkotik mengikuti regulasi khusus</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Kami tidak bertanggung jawab atas kesalahan dosis atau penggunaan obat yang tidak sesuai resep.
                  </p>
                </CardContent>
              </Card>

              {/* Payment Terms */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Pembayaran</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran:</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Tunai</li>
                        <li>Transfer bank</li>
                        <li>E-wallet (Dana, OVO, GoPay, dll)</li>
                        <li>Kartu debit/kredit</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pembayaran:</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Pembayaran harus dilakukan sebelum atau saat pengantaran</li>
                        <li>Harga yang tertera adalah harga final (belum termasuk ongkir)</li>
                        <li>Kami tidak menerima pembayaran cicilan untuk obat</li>
                        <li>Pengembalian dana sesuai dengan kebijakan kami</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Terms */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Syarat Pengantaran</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Area Pengantaran:</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Kecamatan Kikim Barat dan sekitarnya</li>
                        <li>Area pengantaran dapat berubah sewaktu-waktu</li>
                        <li>Biaya pengantaran disesuaikan dengan jarak</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Waktu Pengantaran:</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Pengantaran reguler: 1-3 jam</li>
                        <li>Pengantaran darurat: 30-60 menin (biaya tambahan)</li>
                        <li>Pengantaran malam hari: terbatas</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Persyaratan Penerimaan:</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Penerima harus berusia minimal 18 tahun</li>
                        <li>Menunjukkan identitas diri yang valid</li>
                        <li>Untuk obat resep, penerima harus sesuai nama di resep</li>
                        <li>Memastikan kondisi obat baik saat diterima</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Disclaimer */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Penafian Medis</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Penting untuk dipahami bahwa:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Konsultasi farmasi tidak menggantikan diagnosis dokter</li>
                    <li>Informasi kesehatan yang kami berikan bersifat edukatif</li>
                    <li>Kami tidak bertanggung jawab atas efek samping yang mungkin terjadi</li>
                    <li>Segera hubungi dokter jika kondisi memburuk</li>
                    <li>Dalam situasi darurat, segera ke rumah sakit terdekat</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Kami selalu merekomendasikan untuk berkonsultasi dengan dokter untuk diagnosis dan pengobatan yang komprehensif.
                  </p>
                </CardContent>
              </Card>

              {/* Prohibited Items */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Barang yang Dilarang</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Kami tidak menyediakan atau menjual:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Obat-obatan terlarang atau narkotika tanpa resep valid</li>
                    <li>Produk kedaluwarsa atau rusak</li>
                    <li>Suplemen tidak terdaftar BPOM</li>
                    <li>Alat medis yang memerlukan lisensi khusus</li>
                    <li>Obat untuk tujuan non-medis</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Semua konten di website kami, termasuk logo, teks, gambar, dan desain, 
                    adalah milik ELISA PARDOSI dan dilindungi oleh hukum hak cipta. 
                    Dilarang mengcopy, mendistribusikan, atau menggunakan konten kami tanpa izin tertulis.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
                  <p className="text-gray-600 leading-relaxed">
                    ELISA PARDOSI tidak bertanggung jawab atas:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Kerugian yang timbul dari penggunaan obat yang tidak sesuai petunjuk</li>
                    <li>Keterlambatan pengantaran karena faktor di luar kendali kami</li>
                    <li>Ketersediaan obat yang terbatas dari pemasok</li>
                    <li>Kerusakan obat selama pengantaran (bila disebabkan penerima)</li>
                    <li>Interaksi obat yang tidak diketahui saat konsultasi</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Penghentian Layanan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kami berhak menghentikan layanan kepada pengguna yang:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Melanggar syarat dan ketentuan ini</li>
                    <li>Memberikan informasi palsu atau menipu</li>
                    <li>Menyalahgunakan layanan untuk tujuan ilegal</li>
                    <li>Mengancam atau melecehkan staf kami</li>
                    <li>Tidak memenuhi kewajiban pembayaran</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. 
                    Perubahan akan diberitahukan melalui website atau cara lain yang sesuai. 
                    Penggunaan layanan yang berkelanjutan setelah perubahan berarti Anda menyetujui syarat yang diperbarui.
                  </p>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                    Sengketa yang timbul akan diselesaikan melalui musyawarah terlebih dahulu, 
                    dan jika tidak mencapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Lahat.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> legal@elisapardosi.co.id</p>
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
                <Link href="/privacy" className="text-green-600 hover:text-green-700 text-sm">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      )
    }