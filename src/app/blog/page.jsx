import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image" ;
import DWM from "public/DWM.jpeg" ;
import DWM2 from "public/DWM2.jpeg" ;

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  // const data = await getData();
  return (
    <div className={styles.container}>
    <Link href="/testId" className= {styles.container} >
    <div className={styles.imageContainer}>
    <Image
    src={DWM}
    alt=""
    width={400}
    height={250}
    className={styles.image} />
    </div>
    <div className={styles.content}>
    <h1 className={styles.title}> Text</h1>
    <p className={styles.desc}>Desc</p>
    </div>
    </Link>

    <Link href="/testId" className= {styles.container} >
    <div className={styles.imageContainer}>
    <Image
    src={DWM2}
    alt=""
    width={400}
    height={250}
    className={styles.image} />
    </div>
    <div className={styles.content}>
    <h1 className={styles.title}> Text</h1>
    <p className={styles.desc}>Desc</p>
    </div>
    </Link>
    </div>
  );
};

export default Blog;
