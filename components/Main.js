import React from "react";
import styles from "../styles/Home.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Green Card haqida</h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>
              Green Card DV2024 uchun arizalarni qabul qilish 5 oktyabrdan
              boshlanadi
            </h2>
            <p>
              AQSHning Turli millat vakillari dasturiga (DV-2024. Xalq tilida
              Green Card) uchun arizalar qabuli 2022 yil 5 oktyabrdan
              boshlanadi. Bu haqda AQSH Davlat departamenti ma&apos;lum qildi.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>
              Green Card 2023 natijalarini tekshirish bo&apos;yicha
              qo&apos;llanma
            </h2>
            <p>
              Bugun 7-may soat 22.00 dan boshlab e&apos;lon qilinadigan Green
              Card javoblarini qanday tekshirish mumkinligi
              to&apos;g&apos;risida yo&apos;riqnoma tayyorladik.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
