"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AboutCard, { ACard } from "../atomics/about.us.card.module";
import { axiosInstance } from "@/utils/api/product.teams.api";
import Image from "next/image";

export default function AboutUs() {
  const [teams, setTeams] = useState<ACard[]>([]);
  const router = useRouter();

  async function getAllTeams() {
    try {
      const response = await axiosInstance.get("/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams data:", error);
      alert("Maaf data tidak bisa diambil. Silakan cek sumber data");
    }
  }

  useEffect(() => {
    getAllTeams();
  }, []);

  function navigate(pathname: string) {
    router.push(pathname);
  }

  return (
    <div className="bg-container w-full h-full flex flex-col gap-y-5 justify-center items-center p-10 pt-20">
      <h4 className="flex justify-center text-3xl items-center font-bold mb-5 text-white">
        {" "}
        Tentang Kami{" "}
      </h4>
      <div className="w-full h-full flex flex-col p-10 text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10">
          <div>
            <Image
              src="/game-store.jpg"
              alt="DewaGaming Store"
              width={1770}
              height={643}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Sejarah Perusahaan
            </h2>
            <p className="text-justify text-white">
              DewaGaming didirikan pada tahun 2015 dengan visi untuk menjadi
              pusat solusi terbaik bagi para gamer di Indonesia. Bermula dari
              sebuah toko kecil di kota Jakarta, DewaGaming hadir untuk memenuhi
              kebutuhan gaming yang semakin berkembang pesat seiring dengan
              meningkatnya popularitas industri game. Dengan pelayanan pelanggan
              yang ramah dan responsif, DewaGaming berhasil membangun reputasi
              sebagai toko game terpercaya di komunitas gaming lokal. Pada tahun
              2019, DewaGaming mulai memperluas jangkauan bisnisnya ke ranah
              online melalui platform e-commerce, memungkinkan pelanggan dari
              seluruh Indonesia untuk mendapatkan produk gaming favorit mereka
              secara lebih mudah. Hingga saat ini, DewaGaming terus berinovasi
              dengan menghadirkan berbagai penawaran menarik, seperti promo
              diskon, layanan garansi, dan komunitas gamer online yang aktif.
              Dengan slogan &quot;Your Ultimate Gaming Partner&quot;, DewaGaming
              berkomitmen untuk terus mendukung perjalanan gaming para
              pelanggannya dengan produk dan layanan terbaik.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-10 text-white text-center">
        <h4 className="flex justify-center text-3xl items-center font-bold text-white mb-6">
          {" "}
          Tim Kami{" "}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full">
          {teams.map((item: ACard, key: number) => (
            <AboutCard
              key={key}
              name={item?.name}
              role={item?.role}
              experience={item?.experience}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            onClick={() => navigate("/teams")}
          >
            Dapatkan Kontak
          </button>
        </div>
      </div>

      <div className="w-full h-full flex flex-col p-10 text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10">
          <div>
            <Image
              src="/culture.jpg"
              alt="DewaGaming Store"
              width={1920}
              height={1020}
              className="w-full h-190 rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Budaya Perusahaan
            </h2>
            <p className="text-justify text-white mb-10">
              Kami meyakini bahwa budaya perusahaan yang kuat adalah kunci
              keberhasilan jangka panjang. Kami membangun lingkungan kerja yang
              inklusif, kolaboratif, dan inovatif, di mana setiap anggota tim
              merasa dihargai dan memiliki kesempatan untuk berkembang.
            </p>
            <div className="flex flex-col gap-8 items-start">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Visi</h3>
                  <p className="text-white text-justify items-start">
                    Menjadi mitra gaming terpercaya yang menyediakan solusi
                    terbaik dan terlengkap bagi para gamer di seluruh Indonesia,
                    dengan menghadirkan inovasi dan pelayanan berkualitas
                    tinggi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Misi</h3>
                  <p className="text-white text-justify items-start">
                    1. Memberikan produk gaming berkualitas tinggi dengan harga
                    yang kompetitif.
                  </p>
                  <p className="text-white text-justify items-start">
                    2. Membangun komunitas gamer yang aktif dan mendukung.
                  </p>
                  <p className="text-white text-justify items-start">
                    3. Menghadirkan layanan pelanggan yang responsif dan
                    solutif.
                  </p>
                  <p className="text-white text-justify items-start">
                    4. Mengikuti perkembangan teknologi dan tren gaming untuk
                    memenuhi kebutuhan pelanggan.
                  </p>
                  <p className="text-white text-justify items-start">
                    5. Memberdayakan tim dengan pelatihan dan pengembangan
                    keterampilan secara berkelanjutan.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Nilai Perusahaan
                </h3>
                <p className="text-white text-justify items-start">
                  - Integritas: Menjaga kepercayaan pelanggan dengan layanan
                  yang transparan dan jujur.
                </p>
                <p className="text-white text-justify items-start">
                  - Inovasi: Terus berinovasi untuk memenuhi kebutuhan gamer
                  masa kini.
                </p>
                <p className="text-white text-justify items-start">
                  - Komunitas: Membangun hubungan erat dengan komunitas gamer.
                </p>
                <p className="text-white text-justify items-start">
                  - Kualitas: Menyediakan produk berkualitas tinggi untuk
                  meningkatkan pengalaman bermain game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
